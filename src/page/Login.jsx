import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto py-5">
                <div className="card-body">
                <h1 className="text-3xl font-semibold text-center">Login your account</h1>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p className='text-accent text-center font-semibold mt-5'>Don't Have An Account ? <Link to='/auth/register' className='text-secondary underline'>Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;