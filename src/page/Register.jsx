import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto py-5">
                <div className="card-body">
                    <h1 className="text-3xl font-semibold text-center">Register your account</h1>
                    <fieldset className="fieldset">
                         {/* name */}
                         <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Name" />
                         {/* photo url */}
                         <label className="label">Photo URL</label>
                        <input type="text" className="input" placeholder="Photo URL" />
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                      
                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                    <p className='text-accent text-center font-semibold mt-5'>Already Have An Account ? <Link to='/auth/register' className='text-secondary underline'>Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;