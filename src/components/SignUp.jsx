import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                // new user has been created
                const createdAt = result.user?.metadata?.creationTime;
                
                const user = { email, password, createdAt: createdAt };
                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'SignUp!',
                                text: 'Do you want to continue',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })
                        }
                    })

            })
            .then(error => {
                console.error(error);
            })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="">
                <h2 className='text-center mb-7 text-5xl font-bold'>Please Sign Up</h2>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
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
                            <button className="btn btn-primary text-2xl font-bold">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;