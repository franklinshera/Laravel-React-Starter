import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logoutUser } from '../actions/AuthActions'

const Navbar = () => {
    const dispatch = useDispatch();

    const authUser = useSelector((state) => state.authUser);
    const { auth, loggedInUser, loading } = authUser;

    const logout = (e) =>{
        e.preventDefault();

         dispatch(logoutUser())
    }

    return (
        <div className="navbar-wrapper ">
            <span>Laravel React Starter</span>
            <nav>
                {auth ? (
                    <>
                        
                        <ul className="link-list">
                             <span>{ loggedInUser.name }</span>

                            <li>
                                <button  onClick={logout}> Logout</button>
                            </li>
                        </ul>
                    </>
                ) : (
                    <>
                        <ul className="link-list">
                            <li>
                                <Link to="/"> Home </Link>
                            </li>

                            <li>
                                <Link to="/contact"> Contact </Link>
                            </li>

                            <li>
                                <Link to="/about"> About</Link>
                            </li>
                        </ul>

                        <ul className="link-list auth-routes">
                            <li>
                                <Link to="/login"> Login </Link>
                            </li>

                            <li>
                                <Link to="/register"> Register</Link>
                            </li>
                        </ul>
                    </>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
