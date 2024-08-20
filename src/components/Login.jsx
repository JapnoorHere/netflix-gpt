import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <img className='absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
            <form className='absolute flex flex-col items-center align-center w-3/12 bg-black my-36 mx-auto right-0 left-0 text-white p-6 bg-opacity-80 rounded-md'>

                <h1 className='font-bold text-3xl py-4 self-start'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                
                {!isSignInForm && <input type="text" placeholder='Name' className='w-full py-4 px-2 my-4 bg-gray-700' />}
                <input type="email" placeholder='Email Address' className='w-full py-4 px-2 my-4 bg-gray-700' />
                <input type="password" placeholder='Password' className='w-full py-4 px-2 my-4 bg-gray-700' />
                <button className='py-4 m-4 bg-red-600 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>

                <p className='py-4 self-start cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? SignUp Now" : "Already registered? Sign In Now"}</p>
            
            </form>
        </div>
    )
}

export default Login
