import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import {addUser, removeUser} from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Header = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const user = useSelector(store => store.user);
    const handleSignOut = ()=>{
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
            else{
                dispatch(removeUser());
                navigate('/');
            }
        });
    }, []);

  return (
    <div className='flex justify-between absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10'> 
        
        <img className='w-40' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" />
        {user && <div className='flex text-white font-medium items-center gap-2 text-style: underline cursor-pointer' onClick={handleSignOut}>
            <img className='w-16 h-16' src={user.photoURL} alt="profile" />
            <p>Sign Out</p>
        </div>}
    </div>
  )
}

export default Header
