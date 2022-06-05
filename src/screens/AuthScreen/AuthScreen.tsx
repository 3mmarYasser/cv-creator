import React from 'react';
import {Link, useLocation} from "react-router-dom";

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
                        <Link to={"/login#forget-password"}><span className="label-text-alt link link-hover">Forgot
                            password?</span></Link>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <p className="text-center mt-[15px] "> Don't have an account? <Link to={"/login#sign-up"}><span
                    className="link link-primary font-bold">Sign-Up</span></Link></p>
            </div>
        </div>

    )
}

const SignUp: React.FC = () => {
    return (
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <h1 className="text-1xl text-center mb-[20px]">Create your account !</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User Name</span>
                    </label>
                    <input type="text" placeholder="User Name" className="input input-bordered"/>
                </div>
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
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">I agree to Privacy policy.</span>
                        <input type="checkbox" defaultChecked={true} className="checkbox checkbox-primary"/>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
                <p className="text-center mt-[15px] "> Already have an account? <Link to={"/login"}><span
                    className="link link-primary font-bold">Login</span></Link></p>
            </div>
        </div>
    )
}
const ForgetPassword: React.FC = () => {
    return (
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <h1 className="text-1xl text-center font-bold mb-[20px]">Restore your password !</h1>
                <p className="text-1xl text-center mb-[40px]">We will send you an secure email with a link to change
                    your password.</p>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input type="text" placeholder="Your Email" className="input input-bordered"/>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Send</button>
                </div>
                <p className="text-center mt-[15px] ">You don’t have an account yet? <Link to={"/login#sign-up"}><span
                    className="link link-primary font-bold">Sign-Up</span></Link></p>
            </div>
        </div>
    )
}

const AuthScreen: React.FC = () => {

    const location = useLocation();
    console.log(location.hash)
    const Auth: React.FC = () => {
        if (location.hash === "#sign-up") return <SignUp/>
        else if (location.hash === "#forget-password") return <ForgetPassword/>
        return <Login/>
    }

    return (
        <div className="hero min-h-screen min-w-[100vw] bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse max-w-[50rem] transition-all">
                <Auth/>
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl">Create a resume you are proud of</h1>

                    <ul className="mt-[2rem]">
                        <li className="flex mt-[1.3rem] items-center">
                            <i className="material-icons text-[35px] text-primary">timer</i>
                            <p className="ml-[10px] text-left">Save time with hassle free templates</p>
                        </li>

                        <li className="flex mt-[1.3rem]  items-center">
                            <i className="material-icons text-[35px] text-primary">thumb_up</i>
                            <p className="ml-[10px] text-left">Beat the competition using actionable, contextual
                                advise</p>
                        </li>

                        <li className="flex mt-[1.3rem] items-center">
                            <i className="material-icons text-[35px] text-primary">local_fire_department</i>
                            <p className="ml-[10px] text-left">Highlight key achievements with memorable visuals</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AuthScreen;