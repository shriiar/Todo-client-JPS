import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import googleLogo from '../../../img/google-logo-9824.png'
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    
    let errorElement, errorElement1;


    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
        errorElement1 = <></>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-danger w-50'></div>
                <p className='mt-2 px-2 fs-3'>Or</p>
                <div style={{ height: '1px' }} className='bg-danger w-50'></div>
            </div>
            {errorElement}
            {errorElement1}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='button-33 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={googleLogo} alt="" />
                    <span className='px-2'>Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;