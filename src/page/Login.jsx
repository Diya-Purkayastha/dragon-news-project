import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const {login, setUser } = use(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()

        const handleLogin = e =>{
            e.preventDefault();
            const email = e.target.email.value;
            const password= e.target.password.value;

            login(email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user)
                alert('successfully logged in')
                navigate(`${location.state ? location.state : '/'}`);
              })
              .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
              });

        }

    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto py-5">
                <form onSubmit={handleLogin} className="card-body">
                <h1 className="text-3xl font-semibold text-center">Login your account</h1>
                    <fieldset className="fieldset">
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" name='email' />
                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" name='password'/>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p className='text-accent text-center font-semibold mt-5'>Don't Have An Account ? <Link to='/auth/register' className='text-secondary underline'>Register</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Login;