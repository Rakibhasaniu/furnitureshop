import React, { useContext } from 'react';
import './SingUp.css'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../AuthContext/UserContext';
import { toast } from 'react-toastify';

const SingUp = () => {
    const { register, formState: { errors, isDirty, dirtyFields }, handleSubmit } = useForm({ mode: "onChange", defaultValues: { password: '' } });
    const { user, singUpUser, singInUser, forGetPass, userProfile, logOutUser, emailVerification, autoGoogleLogin, loding, } = useContext(AuthContext);
    // ---image bb key--
    const imageHostKey = process.env.REACT_APP_image_apikye;



    // -------------form information ----------------
    const onSubmit = data => {
        const { email, name, password } = data;
        console.log(data)
        // ----set image bb url----
        const images = data.img[0];
        const formData = new FormData();
        formData.append('image', images);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        const url2 = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        console.log(imageHostKey); //https://api.imgbb.com/1/upload?key
        fetch(url2, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData?.success) {
                    console.log("url", imageData?.data?.display_url);
                    const userImage = imageData?.data?.display_url;
                    console.log(userImage)
                    singUpUser(email, password)
                        .then(result => {
                            console.log(result?.user);
                            toast.success('Registration successfully')

                            userProfile(name, userImage)
                                .then(result => {
                                    console.log('updat', userImage);
                                    toast.info('update user profile')

                                    emailVerification()
                                        .then(result => {
                                            toast.success('send email verifiy link to visite')
                                            // ---navigate
                                            // userInformation(name, userImage, email)
                                        }).catch(err => {
                                            toast.error(err.message)
                                            console.log(err)
                                        })

                                }).catch(err => {
                                    toast.error(err.message)
                                    console.log(err)
                                })
                        }).catch(err => {
                            toast.error(err.message)
                            console.log(err)
                        })
                }
            })

        //user create email or password sing up

        // singUpUser(email, password)
        //     .then(result => {
        //         console.log(result?.user);
        //         toast.success('Registration successfully')

        //         userProfile(name, userImage)
        //             .then(result => {
        //                 console.log('updat', userImage);
        //                 toast.info('update user profile')

        //                 emailVerification()
        //                     .then(result => {
        //                         toast.success('send email verifiy link to visite')
        //                         // ---navigate
        //                         userInformation(name, userImage, email)
        //                     }).catch(err => {
        //                         toast.error(err.message)
        //                         console.log(err)
        //                     })

        //             }).catch(err => {
        //                 toast.error(err.message)
        //                 console.log(err)
        //             })
        //     }).catch(err => {
        //         toast.error(err.message)
        //         console.log(err)
        //     })


    }

    return (
        <>
            <div className="SingUp">
                <div class="wrapperss">
                    <div className='d-block'>
                        <div type='formFile' class="logoss">
                            <img type='formFile' src="https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png" alt="" />
                            <input name='img' className="form-control mt-3" type="file"
                                {...register("img",
                                    {
                                        required: "your profile image",
                                    }
                                )} id="formFile" required />
                        </div>
                        <div class="text-center mt-4 name">
                            User Profile photo
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} class="p-3 mt-3">
                            <div class="form-field d-flex align-items-center">
                                <span class="far fa-user"></span>
                                <input type="text" name="userName"
                                    {...register("userName",
                                        {
                                            required: "you full userName",

                                        }
                                    )}
                                    id="userName" placeholder="Username" required />
                            </div>

                            <div class="form-field d-flex align-items-center">
                                <span class="far fa-user"></span>
                                <input type="email" name="email"
                                    {...register("email",
                                        {
                                            required: "Email Address is required",

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

                            {/* -------error message------------- */}
                            {errors?.password ?
                                <p role="alert" className='d-flex'>
                                    <span className='me-1'>❌</span>
                                    {errors?.password?.message}
                                </p>
                                :
                                dirtyFields.password && <p className=''>✅ your password be strong</p>

                            }
                            {/* --------error massage end---------- */}
                            <input className='btn mt-3' type="submit" />
                        </form>
                        <div class="text-center fs-6">
                            <button className='googleBtn'> <FaGoogle /> Google</button> or <Link to={`/login`} > <button className='googleBtn'> Login</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingUp;