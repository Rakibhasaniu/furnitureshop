import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import Profile from '../Assent/img/user3.jpeg'
import logo from '../Assent/logo/logo.gif'
import { FaAlignLeft, FaBars } from 'react-icons/fa';
import { AuthContext } from '../AuthContext/UserContext';
import { toast } from 'react-toastify';

const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext)


    // user logOut 
    const Logout = () => {
        logOutUser()
            .then(result => {
                toast.success('User log Out successfully')
            })
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <Link to={'/'} className="logo " ><img src='https://cdn.dribbble.com/users/56251/screenshots/1228786/couch-dribbbs.gif' alt="" /></Link>

                    <div className="MainDiv d-lg-none">
                        <div className="row pe-4">

                            {
                                !user?.email ? <>
                                    <div id='colBtn' className="col-6">
                                        <div id="MainloginBtn">
                                            <Link id='loginBtn' to={"/"} className="bg-primary nav-links d-lg-none">Login</Link>
                                        </div>
                                    </div>
                                </>
                                    :
                                    <>
                                        <div id='colBtn' className="col-6">
                                            <div id="MainloginBtn">
                                                <Link id='loginBtn' to={"/"} className="bg-primary nav-links d-lg-none">Logout</Link>
                                            </div>
                                        </div>
                                    </>
                            }
                            <div className="col-6">
                                <button className="navbar-toggler me-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"><FaAlignLeft className='textToggle' /></span>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="collapse me-lg-5 navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 me-2 pt-3">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-links" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/allProduct"} className="nav-links">All Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/"} className="nav-links">New Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/"} className="nav-links">Admin Bord</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/"} className="nav-links">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/"} className="nav-links">Contact</Link>
                            </li>

                            {
                                !user?.email ? <>
                                    <li className="nav-item">
                                        <Link id='loginBtn' to={"/singup"} className="bg-primary  d-none d-lg-flex">Login</Link>
                                    </li>
                                </>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <Link id='loginBtn' onClick={Logout} to={""} className="bg-primary  d-none d-lg-flex">Log out</Link>
                                        </li>
                                    </>
                            }
                            {
                                user?.email ? <>
                                    <div className="nav-item ms-3 mt-2 ms-lg-0 mt-lg-0">
                                        <div className="profile">
                                            <img className='protfolioimg img-fluid' src={user?.photoURL} alt="" />
                                        </div>

                                    </div>
                                </>
                                    :
                                    <div className="nav-item ms-3 mt-2 ms-lg-0 mt-lg-0">
                                        <div className="profile">
                                            <img className='protfolioimg img-fluid' src=' https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png' alt="" />
                                        </div>

                                    </div>

                            }



                        </ul>

                    </div>

                </div>
            </nav>
        </>
    );
};

export default Navbar;