import React from 'react';
import { FaCartPlus, FaSearch } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../../../firebase.init';
import Authentication from './Authentication';
import i18next from 'i18next';

const Header = ({ currentLanguageCode, languages }) => {
    const [user] = useAuthState(auth);

    return (
        <div className='w-full max-w-full container sticky top-0 z-50'>
            <div className="bg-base-100 z-50 sticky top-0">
                <div className="navbar w-full md:w-4/5 mx-auto">

                    <div className="navbar-start">
                        <Link reloadDocument to="/" className="w-full">
                            <img src="https://i.ibb.co/8NNvYfT/emotion.png" alt="" className="w-32 md:w-40 py-2" />
                        </Link>
                    </div>
                    {/* <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-2 menu-horizontal px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li tabIndex={0}>
                            <NavLink to="/lifestyle">
                                Lyfestyle
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </NavLink>
                            <ul className="p-2 bg-white gap-2 z-50">
                                <li><NavLink to="/fashion">Fashion</NavLink></li>
                                <li><NavLink to="/fitness">Fitness</NavLink></li>
                                <li><NavLink to="/photography">Photography</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="/food">Food</NavLink></li>
                        <li><NavLink to="/videos">Videos</NavLink></li>
                        <li><NavLink to="/features">Features</NavLink></li>
                    </ul>
                    
                </div> */}
                    <div className="navbar-end">
                        <div className="mx-3">
                            <FaSearch />
                        </div>
                        <div className="mx-3">
                            <NavLink reloadDocument to="/cart"><FaCartPlus /></NavLink>
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 gap-2 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><NavLink reloadDocument to="/"><img src="https://i.ibb.co/T4c2Tnz/home-1-1.png" alt="" className="pr-2 w-7" /> Home</NavLink></li>
                                <li><NavLink reloadDocument to="/carport"><img src="https://i.ibb.co/xG1cvng/parking-1.png" alt="" className="pr-2 w-7" />Carport</NavLink></li>
                                <li><NavLink reloadDocument to="/furniture"><img src="https://i.ibb.co/60N5kfW/armchair-1.png" alt="" className="pr-2 w-7" />Furniture</NavLink></li>
                                <li><NavLink reloadDocument to="/massagechair"><img src="https://i.ibb.co/Csy2jsP/massage-chair-2.png" alt="" className="pr-2 w-7" />Massage Chair</NavLink></li>
                                <li><NavLink reloadDocument to="/lights"><img src="https://i.ibb.co/yF8sGqx/chandelier-2-1.png" alt="" className="pr-2 w-7" />Lights</NavLink></li>
                                {/* {
                                    user && <li><button onClick={signOut} className=""> <FaSignOutAlt className='pr-2 w-7' /> SignOut</button></li>
                                } */}

                                {/* <div className="form-control">
                                <input type="text" placeholder="Search" className="input input-sm w-40 mx-auto input-bordered" />
                            </div> */}

                            </ul>

                        </div>
                        <div className="">

                            <div className="dropdown">
                                <label tabIndex={0} className="btn m-1">Click</label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    {languages.map(({ code, flag }) => (
                                        <li key={code} >
                                            <button onClick={() => { i18next.changeLanguage(code) }}
                                                disabled={code === currentLanguageCode} > {flag}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>


                        </div>
                        <div className="">
                            {
                                user && <div className="md:pl-5"><Authentication /></div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;