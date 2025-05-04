
import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const {createUser, setUser} = use(AuthContext)

    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const password= e.target.password.value;
        // console.log(name, password, email, photoURL);

        createUser(email,password)
        .then(result => {
            const user = result.user;
            // console.log(user);
            setUser(user)
        })
        .catch((error) => {
            
            const errorMessage = error.message;
            console.log(errorMessage);
          });
      
    }

    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto py-5">
                <form onSubmit={handleRegister} className="card-body">
                    <h1 className="text-3xl font-semibold text-center">Register your account</h1>
                    <fieldset className="fieldset">
                         {/* name */}
                         <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Name" name='name' required />
                         {/* photo url */}
                         <label className="label">Photo URL</label>
                        <input type="text" className="input" placeholder="Photo URL" name='photoURL' required />
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" name='email' required />
                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" name='password' required />
                      
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                    <p className='text-accent text-center font-semibold mt-5'>Already Have An Account ? <Link to='/auth/login' className='text-secondary underline'>Login</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Register;