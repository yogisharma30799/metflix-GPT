import React, { useEffect } from 'react'
import { auth } from '../utils/Firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';


const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((store) => store.user)
    useEffect(() => {
        
      const unSubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid , email , displayName} = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                navigate("/browser")
            } else {
                dispatch(removeUser())
                navigate("/")
            }
      });
        
        return () => unSubscribe()
    },[])
    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            // An error happened.
          });
    }
  return (
    <div className='absolute w-full bg-gradient-to-b from-black z-10 p-2 flex justify-between'>
          <img className='w-48' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
          {user && <img onClick={handleSignOut} className='w-10 mr-2 flex self-center' src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" alt="" />}
          
    </div>
  )
}

export default Header
