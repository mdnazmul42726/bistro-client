import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import axios from "axios";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase.init";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
    const { registerUserWithEmailAndPassword, user } = useContext(AuthContext);

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const image = event.target.image.files[0];

        const formData = new FormData();
        formData.append('image', image);

        const toastId = toast.loading('working...');

        try {
            const response = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API}`, formData);

            if (response.status === 200) {
                registerUserWithEmailAndPassword(email, password).then(() => {
                    updateProfile(auth.currentUser, { displayName: name, photoURL: response.data.data.display_url })
                    const userinfo = { name, email };

                    axios.post('http://localhost:5000/users', userinfo).then(() => {
                        toast.success('Account Created', { id: toastId })

                    }).catch(err => toast.error(err.code, { id: toastId }));

                }).catch(err => toast.error(err.code, {id: toastId}));

            } else {
                console.log('img upload unsuccessful');
            }
        } catch (err) {
            console.log(err);
        }
    };

    console.log(user);

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 px-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div><Toaster /></div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile Img</span>
                                </label>
                                <input type="file" name="image" className="file-input w-full max-w-xs" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <Link to={'/login'} className="text-center">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;