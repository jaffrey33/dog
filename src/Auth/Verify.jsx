import dog from '../images/dogbg.png'
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirestoreDatabase, auth, googleProvider } from "./Config";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import {message} from 'antd'
export default function Verify() {
    const location = useLocation();
    const email = location.state.email;
    const navigate = useNavigate()
    const [formState, setFormState] = useState({
        email: email, // Initialize email in formState with the value from location state
        password: '',
        displayName: ''
    })

    const handleChange = (event) =>{
        setFormState({ ...formState, [event.target.name]: event.target.value })
    }
    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const { email, password, displayName,number } = formState; //
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // Update display name
            await updateProfile(auth.currentUser, { displayName });
            // Signed in
            const user = userCredential.user;
            console.log(user);
            const cartDocRef = doc(FirestoreDatabase, 'users', user.uid);
            await setDoc(cartDocRef,{
                displayName,
                number,
                role:"user" });
         
            if (cartDocRef.success) {
               message.success(cartDocRef.message); // Profile Added
               message.success("success")
            } else {
                message.error(cartDocRef.message); // Error message if profile creation fails
            }  
            navigate("/login");
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
        }

    }
    return (
        <main className="min-h-screen bg-home bg-no-repeat bg-cover bg-center bg-fixed flex justify-center items-center pt-24">
            <div className=' w-2/5 bg-slate-200 flex flex-col justify-center items-center p-8 gap-6 rounded-2xl'>
                <div className='flex w-full justify-between'>
                    <div></div>
                    <img src={dog} alt="" className='w-12 aspect-square rounded-full bg-black ' />
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.3332 2.54699L17.4532 0.666992L9.99984 8.12033L2.5465 0.666992L0.666504 2.54699L8.11984 10.0003L0.666504 17.4537L2.5465 19.3337L9.99984 11.8803L17.4532 19.3337L19.3332 17.4537L11.8798 10.0003L19.3332 2.54699Z" fill="#666666" />
                    </svg>
                </div>
                <div className='text-center'>
                    <h1 className=' text-3xl font-semibold'>Create an Account</h1>
                    <p>Already have an account? <Link to="/login" className=' underline'>Login</Link></p>
                </div>

                <form onSubmit={onSubmit} className='w-4/5 flex flex-col gap-6 text-[#666666]'>
                    <label htmlFor="name"  >
                        What should we call you?<br />
                        <input required
                            type="text"
                            name='displayName'
                            value={formState.displayName || ''}
                            onChange={handleChange}
                            className='bg-slate-200 border border-[#666666] p-2 w-full rounded-xl' />
                    </label>
                    <label htmlFor="number"  >
                        What's your phone number?<br />
                        <input required
                            type="number"
                            name='number'
                            value={formState.number || ''}
                            onChange={handleChange}
                            className='bg-slate-200 border border-[#666666] p-2 w-full rounded-xl' />
                    </label>
                    <label htmlFor="password"  >
                        Create Password<br />
                        <input required
                            type="password"
                        name='password'
                            value={formState.password || ''}
                            onChange={handleChange}
                            className='bg-slate-200 border border-[#666666] p-2 w-full rounded-xl' />
                    </label>

                    <button
                    type='submit'
                        className='w-full px-8 py-4 rounded-full bg-[#111111] hover:bg-black text-white'>
                        Sign in</button>
                    <p className='text-center'>
                        By creating an account, you agree to the <Link className='underline font-semibold'>Terms of use</Link> and
                        <Link className='underline font-semibold'> Privacy Policy</Link>.
                    </p>
                </form>

            </div>
        </main>
    )
}