import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthContext/UserContext';

const LogIn = () => {
    const { register, formState: { errors, isDirty, dirtyFields }, handleSubmit } = useForm({ mode: "onChange", defaultValues: { password: '' } });
    const { user, singInUser, emailVerification, autoGoogleLogin, forGetPass } = useContext(AuthContext);
    const [userEmail, setUserEmail] = useState('')

    //location part 
    const navigat = useNavigate()
    const location = useLocation()
    const prevLocation = location?.state?.from?.pathname || '/';


    // ----frome input fild handel btn------------
    const onSubmit = data => {

        const { email, password } = data;
        // sing in with email or password 
        singInUser(email, password)
            .then(result => {
                // setLogInUserEmail(result?.user?.email)
                toast.success("You are successfully logIN")
                navigat(prevLocation, { replace: true })
            }).catch(err => toast.error(err))

    }
    // console.log(dirtyFields);

    //reste password email notification 
    const restePasswords = () => {
        console.log('forget password', userEmail);
        if (userEmail) {
            forGetPass(userEmail)
                .then(() => {
                    toast.success("please chack you email or setup password .")
                }).catch(err => {
                    toast.error("Your email doesn't Match !")
                })
        } else {
            toast.warn("please write your currect email")
        }
    }


    // console.log(dirtyFields);
    const autoSingInGoogle = () => {
        autoGoogleLogin()
            .then(result => {
                console.log(result?.user?.email);
                // setLogInUserEmail(result?.user?.email)

                toast.success('User Auto Login With Google !')
                navigat(prevLocation, { replace: true })
            }).catch(err => console.log(err))
    }



    return (
        <>
            <div className="SingUp">
                <div class="wrapperss ">
                    <div className='d-block'>
                        <div class="logoss">
                            <img type='formFile' src="http://localhost:3000/static/media/logo.186730c98810fd2c5d6e.gif" alt="" />

                        </div>
                        <div class="text-center mt-4 name">
                            Welcome
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} class="p-3 mt-3">

                            <div class="form-field d-flex align-items-center">
                                <span class="far fa-user"></span>
                                <input type="email" name="email"
                                    {...register("email",
                                        {
                                            required: "Email Address is required",
                                            onBlur: (event) => setUserEmail(event.target.value)
                                        }
                                    )}
                                    id="userEmail" placeholder="Username" required />
                            </div>
                            <div class="form-field d-flex align-items-center">
                                <span class="fas fa-key"></span>
                                <input type="password" name="password"
                                    {...register("password",
                                        {
                                            required: "password is required",
                                            minLength: { value: 6, message: "password must be 6 characters or longer" },
                                            maxLength: { value: 16, message: "password must be under the 16 characters !" }
                                        }
                                    )}
                                    id="pwd" placeholder="Password" required />
                            </div>
                            <div class="text-center fs-6">
                                <a href="#">Forget password?</a>
                            </div>

                            {/* --------error massage end---------- */}
                            <input className='btn mt-3' type="submit" />
                        </form>

                        <div class="text-center fs-6">
                            <button onClick={autoSingInGoogle} className='googleBtn'> <FaGoogle /> Google</button> or <Link to={`/singup`} > <button className='googleBtn'> Sing up</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogIn;