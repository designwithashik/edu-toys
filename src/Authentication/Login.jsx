import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
    const { emailLogin,
        googleLogin} = useContext(AuthContext);
    
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        emailLogin(email, password)
            .then(result => {
            console.log(result.user)
            })
        .catch(error=>console.log(error))

    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
            console.log(result.user)
        })
    }
    return (
        <div className="hero h-[90vh]  " >
            <div className="hero-content flex-col lg:flex-row">
                <div className="flex justify-between w-full">
                    <img className='w-[70%] mx-auto lg:mx-0' src="https://i.ibb.co/yVWbnK1/Pngtree-illustration-of-kids-playing-games-4737644.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div>
                            <h2 className="text-3xl font-bold text-[#FF1276]">Joy is yet to begin!</h2>
                            <p className="py-6 text-sm font-medium">Enter your email & password to enjoy
                                the bunch of awesome toys and learning.</p>
                        </div>
                        <form onSubmit={handleLogin} className="form-control mb-2">

                        <div className="form-control mb-4">
                            <input type="email" name='email' placeholder="Email" className="input input-bordered rounded-lg" /></div>
                            <div className="form-control">

                            <input type="password" name='password' placeholder="Password" className="input input-bordered rounded-lg" />

                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn rounded-lg btn-accent text-white">Login</button>
                        </div>

                        </form>
                        <p>Don't have an Account? <Link to='/sign-up' className='text-accent font-bold'>Click to Sign Up</Link></p>
                        <p className='w-full font-medium text-center mt-4'>Or</p>
                        <div className="flex justify-center mt-2">
                            <button onClick={handleGoogleLogin} className="btn btn-outline   rounded-lg "><img className='w-9 mr-1' src="https://i.ibb.co/jR7PDsb/google-logo-9824.png" alt="" /> Continue with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;