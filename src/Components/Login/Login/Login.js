import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import googleLogo from '../../../img/google-logo-9824.png'
import { useLocation, useNavigate } from 'react-router-dom';
import addImg from '../../../img/undraw_Login_re_4vu2.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;


    if (error) {
        errorElement = <p className='text-danger text-center'>Error: {error?.message}</p>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const EventSubmit = (event) => {
    }

    return (
        <div className='mh-100'>
            <div style={{ margin: "0 0 1050px 0" }} class="page-add">
                <div class="container-add">
                    <div class="left-add">
                        <div class="login">Login</div>
                        <img src={addImg} className='img-fluid' alt="" />
                    </div>
                    <div class="right-add d-flex flex-column justify-content-center align-items-center">
                        <div class="login">Continue with</div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className='button-33 d-block mx-auto w-25 my-2'>
                            <img style={{ width: '30px' }} src={googleLogo} alt="" />
                        </button>
                        {errorElement}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;