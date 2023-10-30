import React, { useRef, useState } from 'react'
import Header from './Header'
import { CheckValidation } from "../utils/Validation"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/Firebase';
const LoginPage = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState()
    const email = useRef(null)
    const password = useRef(null)

    const handleSignUp = () => {
        setIsSignIn(!isSignIn)
    }

    const handleButtonClick = () => {
        const message = CheckValidation(email.current.value, password.current.value)
        setErrorMessage(message)
        console.log(email.current.value)
        console.log(password.current.value)
        if (message) return
        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage2 = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage2)
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user, "sign in")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage2 = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage2)
                });
        }
    }

    return (
        <div className='relative flex'>
            <Header />
            <div className='absolute bg-cover -z-10'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg" />
            </div>
            <form className='absolute w-2/6 p-10 m-2 bg-black mx-auto  my-52 right-0 left-0 text-white bg-opacity-80' onSubmit={(e) => e.preventDefault()} >
                <h1 className='text-2xl font-bold'> {isSignIn ? 'Sign In' : 'Sign Up'}</h1>

                {!isSignIn && <input className='p-2 my-4 w-full bg-gray-700' type="text" placeholder='Full Name' />}
                <input ref={email} className='p-2 my-4 w-full bg-gray-700' type="email" placeholder='Email or Phone number' />
                <input ref={password} className='p-2 my-4 w-full bg-gray-700' type="password" placeholder='Password' />
                <p className='text-red-600 text-lg'>{errorMessage}</p>
                <button className='p-2 my-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick} >{isSignIn ? 'Sign In' : 'Sign Up'}</button>
                <p className='py-2 cursor-pointer' onClick={() => handleSignUp()}>{isSignIn ? "New to Netflix? Sign up now." : "Already a User"}</p>
            </form>
        </div>
    )
}

export default LoginPage
