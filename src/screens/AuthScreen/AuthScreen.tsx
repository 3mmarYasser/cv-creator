import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {SignIn, SignUp} from "../../interfaces";
import {useDispatch, useSelector} from 'react-redux';
import {signupThunk, signInThunk} from "../../store/authSilce";
import {AppDispatch} from "../../store";
import {useCookies} from 'react-cookie';
import classNames from "classnames";


const Login: React.FC = () => {
    const lang = ((useSelector((state: any) => state)).lang).value;
    const dispatch: AppDispatch = useDispatch();
    const [cookies, setCookie] = useCookies();

    const initValue: SignIn = {
        email: "",
        password: ""
    }
    const login = (values: SignIn) => {
        dispatch(signInThunk(values)).then(
            r => {
                const AuthCookies = r.payload.cookies[0],
                    AuthRefresh = r.payload.cookies[1];
                setCookie(AuthCookies.name, AuthCookies.value, {
                    maxAge: AuthCookies.maxAge
                })
                setCookie(AuthRefresh.name, AuthRefresh.value, {
                    maxAge: AuthRefresh.maxAge
                })
            },
            e => console.error(e)
        );
    }
    return (
        <Formik initialValues={initValue} onSubmit={login}>
            <Form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-1xl text-center mb-[20px]">{lang === "AR" ? "سجل الدخول إلى حسابك الأن !" : "Sign In to Your Account Know !"}</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">{lang === "AR" ? "البريد الإلكترونى" : "ُEmail"}</span>
                        </label>
                        <Field autoComplete={"email"} name="email" type="email" placeholder="Email"
                               className="input input-bordered"/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">{lang === "AR" ? "كلمة المرور" : "Password"}</span>
                        </label>
                        <Field suggested={"current-password"}
                               autoComplete={"current-password"}
                               name="password"
                               type="password"
                               placeholder="Password"
                               className="input input-bordered"/>
                        <label className="label">
                            <Link to={"/login#forget-password"}><span
                                className="label-text-alt link link-hover">{lang === "AR" ? "نسيت كلمة المرور ؟" : "Forgot password?"}</span></Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit"
                                className="btn btn-primary">{lang === "AR" ? "تسجيل الدخول" : "Login"}</button>
                    </div>
                    <p className="text-center mt-[15px] ">{lang === "AR" ? "لا تمتلك حساب ؟" : "Don't have an account?"}
                        <Link to={"/login#sign-up"}><span
                            className="link link-primary font-bold">{lang === "AR" ? "حساب جديد" : "Sign-Up"}</span></Link>
                    </p>
                </div>
            </Form>
        </Formik>
    )
}

const SignUpScreen: React.FC = () => {
    const lang = ((useSelector((state: any) => state)).lang).value;

    const dispatch: AppDispatch = useDispatch();
    const initValues: SignUp = {
        name: "",
        email: "",
        password: ""
    }
    const signup = (values: SignUp) => {
        dispatch(signupThunk(values));
    }
    return (
        <Formik initialValues={initValues} onSubmit={signup}>
            <Form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-1xl text-center mb-[20px]">{lang === "AR" ? "انشئ حسابك الأن !" : "Create your account !"}</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">{lang === "AR" ? "اسم المستخدم" : "User Name"}</span>
                        </label>
                        <Field autoComplete="username"
                               name="name" type="text"
                               placeholder="User Name"
                               className="input input-bordered"/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">{lang === "AR" ? "البريد الإلكترونى" : "Email"}</span>
                        </label>

                        <Field autoComplete="email"
                               name="email"
                               type="email"
                               placeholder="Email"
                               className="input input-bordered"/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">{lang === "AR" ? "كلمة المرور" : "Password"}</span>
                        </label>
                        <Field autoComplete="new-password"
                               name="password"
                               type="password"
                               placeholder="Password"
                               className="input input-bordered"/>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span
                                className="label-text">{lang === "AR" ? "أوافق على سياسة الخصوصية." : "I agree to Privacy policy."}</span>
                            <input type="checkbox" defaultChecked={true} className="checkbox checkbox-primary"/>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit"
                                className="btn btn-primary">{lang === "AR" ? "انشاء حساب جديد" : "Sign Up"}</button>
                    </div>
                    <p className="text-center mt-[15px] "> {lang === "AR" ? "تملك بالفعل حساب ؟" : "Already have an account?"}
                        <Link to={"/login"}><span
                            className="link link-primary font-bold">{lang === "AR" ? " سجل الدخول " : "Login"}</span></Link>
                    </p>
                </div>
            </Form>
        </Formik>
    )
}


const ForgetPassword: React.FC = () => {
    const lang = ((useSelector((state: any) => state)).lang).value;

    return (
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <h1 className="text-1xl text-center font-bold mb-[20px]">{lang === "AR" ? " استعادة كلمة المرور الخاصة بك!" : "Restore your password !"}</h1>
                <p className="text-1xl text-center mb-[40px]">{lang === "AR" ? "سنرسل لك بريدًا إلكترونيًا آمنًا يحتوي على رابط لتغيير كلمة المرور الخاصة بك." : "We will send you an secure email with a link to change your password."}</p>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">{lang === "AR" ? " بريدك الالكتروني " : "Your Email"}</span>
                    </label>
                    <input type="text" placeholder="Your Email" className="input input-bordered"/>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">{lang === "AR" ? "إرسال" : "Send"}</button>
                </div>
                <p className="text-center mt-[15px] ">{lang === "AR" ? "ليس لديك حساب بعد؟" : "You don’t have an account yet?"}<Link
                    to={"/login#sign-up"}><span
                    className="link link-primary font-bold">{lang === "AR" ? "انشئ حساب جديد" : "Sign-Up"}</span></Link>
                </p>
            </div>
        </div>
    )
}

const AuthScreen: React.FC = () => {

    const location = useLocation();
    const lang = ((useSelector((state: any) => state)).lang).value;
    const Auth: React.FC = () => {
        if (location.hash === "#sign-up") return <SignUpScreen/>
        else if (location.hash === "#forget-password") return <ForgetPassword/>
        return <Login/>
    }

    return (
        <div className="hero min-h-screen min-w-[100vw] bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse max-w-[55rem] transition-all">
                <Auth/>
                <div className="text-center lg:text-left">
                    <h1 className={classNames("text-3xl", {"text-right": lang === "AR"}, {"text-left": lang === "EN"})}>{lang === "AR" ? "قم بإنشاء سيرة ذاتية تفتخر بها" : "Create a resume you are proud of"}</h1>

                    <ul className="mt-[2rem]">
                        <li className="flex mt-[1.3rem] items-center">
                            <i className="material-icons text-[35px] text-primary">timer</i>
                            <p className={classNames("ml-[10px] mr-[10px]", {"text-right": lang === "AR"}, {"text-left": lang === "EN"})}>{lang === "AR" ? "وفر الوقت مع قوالب خالية من المتاعب" : "Save time with hassle free templates"}</p>
                        </li>

                        <li className="flex mt-[1.3rem]  items-center">
                            <i className="material-icons text-[35px] text-primary">thumb_up</i>
                            <p className={classNames("ml-[10px] mr-[10px]", {"text-right": lang === "AR"}, {"text-left": lang === "EN"})}>{lang === "AR" ? "تغلب على المنافسة باستخدام المشورة السياقية القابلة للتنفيذ" : "Beat the competition using actionable, contextual advise"}</p>
                        </li>

                        <li className="flex mt-[1.3rem] items-center">
                            <i className="material-icons text-[35px] text-primary">local_fire_department</i>
                            <p className={classNames("ml-[10px] mr-[10px]", {"text-right": lang === "AR"}, {"text-left": lang === "EN"})}>{lang === "AR" ? "تسليط الضوء على الإنجازات الرئيسية مع مرئيات لا تنسى" : "Highlight key achievements with memorable visuals"}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AuthScreen;
