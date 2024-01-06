import React from 'react';
import { FaCartPlus, FaGlobeAsia, FaSearch } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../../../firebase.init';
import Authentication from './Authentication';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const Header = ({ currentLanguageCode, languages }) => {
    const [user] = useAuthState(auth);
    const { t } = useTranslation();
    return (
        <div className='w-full max-w-full container sticky top-0 z-50'>
            <div className="bg-base-100 z-50 sticky top-0">
                <div className="navbar w-full md:w-4/5 mx-auto">

                    <div className="navbar-start">
                        <Link reloadDocument to="/" className="w-2/3 md:w-1/3">
                            <img src="https://i.ibb.co/8NNvYfT/emotion.png" alt="" className="w-32 md:w-40 py-2" />
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <div className="">

                            <div className="dropdown dropdown-end p-0">
                                <label tabIndex={0} className="btn bg-transparent outline-none border-none text-black focus:bg-transparent hover:bg-transparent btn-sm"><FaGlobeAsia /></label>
                                <ul tabIndex={0} className="dropdown-content text-sm z-[1] menu p-1 shadow bg-base-100 rounded">
                                    {languages.map(({ code, name, flag }) => (
                                        <li className='p-1' key={code} >
                                            <button className={`${code === currentLanguageCode && 'bg-primary'} p-2`} onClick={() => { i18next.changeLanguage(code) }}
                                                disabled={code === currentLanguageCode} > <span className={`fi fi-${flag}`}></span>{name} 
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {/* <div className="mx-3">
                            <FaSearch />
                        </div> */}
                        {/* <div className="mx-3">
                            <NavLink reloadDocument to="/cart"><FaCartPlus /></NavLink>
                        </div> */}
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 gap-2 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><NavLink reloadDocument to="/"><img src="https://i.ibb.co/T4c2Tnz/home-1-1.png" alt="" className="pr-2 w-7" /> {t('navbar.home')}</NavLink></li>
                                <li><NavLink reloadDocument to="/carport"><img src="https://i.ibb.co/xG1cvng/parking-1.png" alt="" className="pr-2 w-7" />{t('navbar.carport')}</NavLink></li>
                                <li><NavLink reloadDocument to="/furniture"><img src="https://i.ibb.co/60N5kfW/armchair-1.png" alt="" className="pr-2 w-7" />{t('navbar.furniture')}</NavLink></li>
                                <li><NavLink reloadDocument to="/massagechair"><img src="https://i.ibb.co/Csy2jsP/massage-chair-2.png" alt="" className="pr-2 w-7" />{t('navbar.massagechair')}</NavLink></li>
                                <li><NavLink reloadDocument to="/lights"><img src="https://i.ibb.co/yF8sGqx/chandelier-2-1.png" alt="" className="pr-2 w-7" />{t('navbar.lights')}</NavLink></li>
                                {/* {
                                    user && <li><button onClick={signOut} className=""> <FaSignOutAlt className='pr-2 w-7' /> SignOut</button></li>
                                } */}

                                {/* <div className="form-control">
                                <input type="text" placeholder="Search" className="input input-sm w-40 mx-auto input-bordered" />
                            </div> */}

                            </ul>

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