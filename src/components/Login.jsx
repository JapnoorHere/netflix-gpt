import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate';
const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const [errorMessage,setErrorMessage] = useState(false);


    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = ()=>{
        const message = checkValidateData(email.current.value,password.current.value,name.current.value);
        setErrorMessage(message);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
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
        </div>
    )
}

export default Login
