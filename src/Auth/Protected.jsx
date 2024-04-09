import { useEffect, useState } from "react"
import {  useNavigate } from 'react-router-dom'
import { auth } from "./Config"

export default function Protected({children}){
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    useEffect( ()=> {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            if (!user) {
   
                navigate("/login");
            }
        }); 

        return () => unsubscribe();
    },[navigate])
    return(
        <div>{children}</div>
    )
}