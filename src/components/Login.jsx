import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userSlice';
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSignInForm, setIsSignInForm] = useState(true);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const [errorMessage, setErrorMessage] = useState(false);


    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {

        const message = checkValidateData(email.current.value, password.current.value);
        setErrorMessage(message);

        if (message) return;

        if (!isSignInForm) {

            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                    })
                    .then(() => {
                        const {uid,email,displayName,photoURL} = auth.currentUser; 
                        dispatch(addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                            photoURL: photoURL
                        }))
                        navigate('/browse');
                    })

                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });

        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    console.log(userCredential.user);
                    const {uid,email,displayName,photoURL} = userCredential.user; 
                        dispatch(addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                            photoURL: photoURL
                        }))
                        navigate('/browse');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                })
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <Header />
            <img className='absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />


            <form onSubmit={handleFormSubmit} className='absolute flex flex-col items-center align-center w-3/12 bg-black my-36 mx-auto right-0 left-0 text-white p-6 bg-opacity-80 rounded-md'>
                <h1 className='font-bold text-3xl py-4 self-start'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && <input ref={name} type="text" placeholder='Name' className='w-full py-4 px-2 my-4 bg-gray-700' />}

                <input ref={email} type="email" placeholder='Email Address' className='w-full py-4 px-2 my-4 bg-gray-700' />
                <input ref={password} type="password" placeholder='Password' className='w-full py-4 px-2 my-4 bg-gray-700' />
                <p className='text-red-600'>{errorMessage}</p>
                <button className='py-4 m-4 bg-red-600 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>

                <p className='py-4 self-start cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? SignUp Now" : "Already registered? Sign In Now"}</p>

            </form>
        </>
    )
}

export default Login
