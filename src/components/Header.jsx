import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toggleGPTSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/languageSlice';

const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(store => store.user);
    const showGPTSearchView = useSelector(store => store.gpt.showGPTSearchView);
    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(addUser({
                    name: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL

                }));

                navigate('/browse');
            }
            else {
                dispatch(removeUser());
                navigate('/');
            }
        });


    }, []);

    const handleGPTSearchClick = ()=>{
        dispatch(toggleGPTSearchView());
    }

    const handleLanguageChange = (e)=>{
        console.log(e.target.value);
        
        dispatch(changeLanguage(e.target.value));
    }

    return (
        <div className='flex justify-between absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10'>
            <img className='w-40' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" />
            <div className='flex gap-4 items-center'>
               {showGPTSearchView && <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
                    <option value="en">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="spanish">Spanish</option>
                </select>}
                <button onClick={handleGPTSearchClick} className='bg-red-600 text-white px-6 h-[70%] rounded-lg '>{showGPTSearchView ? "HomePage" :"GPT Search"}</button>
                {user && <div className='flex text-white font-medium items-center gap-2 text-style: underline cursor-pointer' onClick={handleSignOut}>
                    <img className='w-16 h-16' src={user.photoURL} alt="profile" />
                    <p>Sign Out</p>
                </div>}
            </div>
        </div>
    )
}

export default Header
