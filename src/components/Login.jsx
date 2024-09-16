import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const { signInUser } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                const user = {
                    email,
                    lastLoggedAt: result.user?.metadata?.lastSignInTime
                }
                // update last logged at in the database
                fetch('http://localhost:5000/user', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen p-20">
            <div className="">
                <h2 className='text-center mb-7 text-5xl font-bold'>Please Login</h2>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-2xl font-bold">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;