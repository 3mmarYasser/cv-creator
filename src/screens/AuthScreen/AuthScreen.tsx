import React from 'react';
import Styles from './AuthScreen.module.scss'
import {Link} from "react-router-dom";

interface Props {

}

const Login: React.FC = () => {
    return (
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <h1 className="text-1xl text-center mb-[20px]">Sign In to Your Account Know !</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" className="input input-bordered"/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password" className="input input-bordered"/>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <p className="text-center mt-[15px] "> Don't have an account? <Link to={"?sign-up"}><span
                    className="link link-primary font-bold">Sign-Up</span></Link></p>
            </div>
        </div>

    )
}

const AuthScreen: React.FC<Props> = () => {
    return (
        <div className="hero min-h-screen min-w-[100vw] bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse max-w-[50rem]">
                <Login/>
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl">Create a resume you are proud of</h1>

                    <ul className="mt-[2rem]">
                        <li className="flex mt-[1.3rem] items-center">
                            <i className="material-icons text-[35px] text-primary">timer</i>
                            <p className="ml-[10px]">Save time with hassle free templates</p>
                        </li>

                        <li className="flex mt-[1.3rem]  items-center">
                            <i className="material-icons text-[35px] text-primary">thumb_up</i>
                            <p className="ml-[10px]">Beat the competition using actionable, contextual advise</p>
                        </li>

                        <li className="flex mt-[1.3rem] items-center">
                            <i className="material-icons text-[35px] text-primary">local_fire_department</i>
                            <p className="ml-[10px]">Highlight key achievements with memorable visuals</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AuthScreen;
