import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../AuthProvider';

const Login = () => {
    const { logInWithEmailAndPassword } = useContext(AuthContext);

    // const capthaRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logInWithEmailAndPassword(email, password).then(userCredential => {
            console.log(userCredential.user);
            navigate(location.state ? location.state : "/");

        }).catch(err => console.log(err));
    };

    // const handleCatpcaValidate = () => {
    //     const value = capthaRef.current.value;

    //     if (validateCaptcha(value) == true) {
    //         setBtnDisabled(false)
    //     } else {
    //         setBtnDisabled(true)
    //         alert('invalid captach');
    //     }
    // };

    // useEffect(() => {
    //     loadCaptchaEnginge(6);
    // }, []);

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 px-20 pt-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {/* <div className="form-control">
                                <LoadCanvasTemplate />
                                <input type="text" placeholder="Captcha" ref={capthaRef} className="input input-bordered" />
                                <button className='btn btn-xs' onClick={handleCatpcaValidate}>Validate</button>
                            </div> */}
                            <div className="form-control mt-6">
                                <input type='submit' value='Login' className="btn btn-primary" />
                            </div>
                        </form>
                        <Link to={"/register"} className='text-center'>Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;