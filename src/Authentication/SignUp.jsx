import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import PageTitle from '../components/PageTitle';

const SignUp = () => {
    const { emailSignUp,
        googleLogIn, error, setError } = useContext(AuthContext);

    const handleEmailSignUp = (event) => {
        setError('')
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value
        console.log(name, email, password);
        if (password.length < 6) {
            setError('Password must be least 6 characters !')
            return
        }
        emailSignUp(email, password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: `${name}`,
                    photoURL: `${photo}`
                });
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your account has been created',
                    showConfirmButton: false,
                    timer: 1500
                  })
                console.log(result.user)
            })
        .catch(error => setError(`${error.message.split(':')[1]}`))
            form.reset()
    }

    const handleGoogleSignUp = () => {
        googleLogIn()
            .then(result => {
                console.log(result.user)
            })
    }
    return (
        <div className="hero min-h-[calc(100vh-300px)]  " >
            <PageTitle>SignUp</PageTitle>
            <div className="hero-content flex-col md:flex-row">
                <div className="flex justify-between w-full">
                    <img className='w-[70%] mx-auto lg:mx-0' src="https://i.ibb.co/yVWbnK1/Pngtree-illustration-of-kids-playing-games-4737644.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div>
                            <h2 className="text-3xl font-bold text-[#FF1276]">Joy is yet to begin!</h2>
                            <p className="py-6 text-sm font-medium">Enter your name, photo, email & password to enjoy
                                the bunch of awesome toys and learning.</p>
                        </div>
                        <form onSubmit={handleEmailSignUp} className="form-control mb-2">

                            <div className="form-control mb-4">
                                <input type="text" name='name' placeholder="Name" className="input input-bordered rounded-lg" />
                            </div>
                            <div className="form-control mb-4">
                                <input type="email" name='email' placeholder="Email" className="input input-bordered rounded-lg" />
                            </div>
                            <div className="form-control mb-4">
                                <input type="password" name='password' placeholder="Password" className="input input-bordered rounded-lg" />
                                <p className='text-error font-semibold'>{error}</p>
                            </div>
                            <div className="form-control">
                                <input type="text" name='photo' placeholder="photo" className="input input-bordered rounded-lg" />
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn rounded-lg btn-accent text-white">SignUp</button>
                            </div>

                        </form>
                        <p>Already have an Account? <Link to='/login' className='text-accent font-bold'>Click to LogIn</Link></p>
                        
                        <p className='w-full font-medium text-center mt-4'>Or</p>
                        <div className="flex justify-center mt-2">
                            <button onClick={handleGoogleSignUp} className="btn btn-outline   rounded-lg "><img className='w-9 mr-1' src="https://i.ibb.co/jR7PDsb/google-logo-9824.png" alt="" /> Continue with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;