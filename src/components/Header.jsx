import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import {removeUser} from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const photoURL = "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
    
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            dispatch(removeUser());
            navigate('/');
        }).catch((error) => {
            console.log(error);
        });
    }

  return (
    <div className='flex justify-between absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10'> 
        
        <img className='w-40' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" />
        <div className='flex text-white font-medium items-center gap-2 text-style: underline cursor-pointer' onClick={handleSignOut}>
            <img className='w-16 h-16' src={photoURL} alt="profile" />
            <p>Sign Out</p>
        </div>
    </div>
  )
}

export default Header
