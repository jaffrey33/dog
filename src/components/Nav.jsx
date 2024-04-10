import { Link, Outlet, useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
import { auth } from "../Auth/Config";
import { useEffect, useState } from 'react';
export default function Nav() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);
    const handleLogout = () => {
        auth.signOut();
        navigate("/login")
    };
    console.log(user)
    return (
        <>
            <div className='fixed w-full z-50'>
                <nav className="flex justify-around items-center w-full bg-[#E7D9FE]">
                    {user ?
                        <div className="flex gap-2 items-center">
                            <img src={user.photoURL} onClick={handleLogout} className='border border-black w-10 aspect-square rounded-full' />
                            <p>{user.displayName}</p>
                        </div> : <Link to="/login" className='hover:text-[#FF543E] font-smibold'><p>Login/Register</p></Link>
                    }
                    <div>
                        <ul className="flex gap gap-4 items-center ">
                            <Link to='/'>
                                <li className='flex flex-col justify-center items-center'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.7172 9.18111V18.5H6.61617V9.18108L11.1667 3.7751L15.7172 9.18111ZM3.57208 12.7975L3.93267 12.3691V19C3.93267 20.2965 4.83301 21.5 6.11617 21.5H16.2172C17.5003 21.5 18.4007 20.2965 18.4007 19V12.3691L18.7613 12.7975L19.1438 13.2519L19.5263 12.7975L20.7159 11.3843L20.9869 11.0623L20.7159 10.7403L12.7386 1.2633C12.3216 0.767885 11.7544 0.5 11.1667 0.5C10.579 0.5 10.0118 0.767885 9.59474 1.2633L9.97726 1.58529L9.59474 1.2633L1.61748 10.7403L1.34644 11.0623L1.61748 11.3843L2.80704 12.7975L3.18956 13.2519L3.57208 12.7975Z" fill="#FF543E" stroke="#FF642E" />
                                    </svg>
                                    Home
                                </li>
                            </Link>
                            <Link to="/adopt">
                                <li className='flex flex-col justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF543E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                                    Adopt
                                </li>
                            </Link>
                            <Link to="/shop">
                                <li className='flex flex-col justify-center items-center'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8889 0L19.8827 17.8891C19.944 18.9919 19.0996 19.9357 17.9967 19.9969C17.9413 19.9995 17.9413 19.9995 17.8858 20H2C0.89543 20 0 19.1046 0 18C0.00051341 17.9445 0.000513296 17.9445 0.00307918 17.8891L0.996916 0H18.8889ZM2.88889 2L2 18H17.8858L16.9969 2H2.88889ZM4.9429 4H6.9429V6.5C6.9429 7.74837 8.32804 9 9.9429 9C11.5578 9 12.9429 7.74837 12.9429 6.5V4H14.9429V6.5C14.9429 8.9007 12.6197 11 9.9429 11C7.26614 11 4.9429 8.9007 4.9429 6.5V4Z" fill="#FF642E" />
                                    </svg>
                                    Shop
                                </li>
                            </Link>
                            <img src={logo} alt="" />
                            <li className='flex flex-col justify-center items-center'>
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.796 3.73553H18.8347C19.9606 3.73553 20.8734 4.64576 20.8734 5.76859V17.9669C20.8734 19.0898 19.9606 20 18.8347 20H2.52503C1.39909 20 0.486328 19.0898 0.486328 17.9669H0.513549C0.495453 17.8576 0.486328 17.7469 0.486328 17.6358V5.51883C0.486328 4.61111 1.08974 3.81336 1.96496 3.56399L14.1972 0.0787475C15.2798 -0.229717 16.4082 0.395433 16.7175 1.47506C16.7696 1.65669 16.796 1.84468 16.796 2.03358V3.73553ZM16.796 5.76859V14.1506C16.796 15.0583 16.1926 15.856 15.3173 16.1054L8.78392 17.9669H18.8347V5.76859H16.796ZM2.52503 5.51883V17.6358L14.7573 14.1506V2.03358L2.52503 5.51883ZM16.796 9.8347V7.80165H18.8347V9.8347H16.796ZM11.6992 8.81818C11.1362 8.81818 10.6799 8.36306 10.6799 7.80165C10.6799 7.24023 11.1362 6.78512 11.6992 6.78512C12.2622 6.78512 12.7186 7.24023 12.7186 7.80165C12.7186 8.36306 12.2622 8.81818 11.6992 8.81818Z" fill="#ECAD3C" />
                                </svg>
                                Donate
                            </li>
                            <li className='flex flex-col justify-center items-center'>
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.74212 4.25485C10.3297 4.90432 10.1434 5.6401 9.62388 6.33823C9.50071 6.50375 9.35875 6.66684 9.18728 6.84655C9.10498 6.93281 9.0408 6.99768 8.90657 7.13168C8.60171 7.43599 8.34544 7.69169 8.13775 7.89879C8.03703 7.99923 8.72468 9.36956 10.0592 10.7017C11.3931 12.0332 12.7671 12.7194 12.8683 12.6184L13.6366 11.8518C14.0597 11.4295 14.2838 11.2257 14.5917 11.0243C15.2317 10.6055 15.9299 10.4917 16.5187 11.0168C18.4412 12.3882 19.5292 13.2297 20.0621 13.782C21.1017 14.8592 20.9655 16.5173 20.068 17.4632C19.7568 17.7912 19.3623 18.1849 18.8962 18.6329C16.0772 21.4457 10.1276 19.734 5.56793 15.1825C1.00722 10.6299 -0.708394 4.69627 2.10476 1.88939C2.60981 1.37784 2.77632 1.21186 3.26819 0.72855C4.18396 -0.171291 5.92337 -0.312188 6.98076 0.72944C7.53694 1.27734 8.42365 2.41506 9.74212 4.25485ZM15.054 13.2658L14.2855 14.0325C12.9793 15.3358 10.7549 14.2249 8.64172 12.1155C6.52712 10.0047 5.41434 7.78718 6.72098 6.48427C6.9284 6.27745 7.18442 6.02199 7.48905 5.71791C7.61196 5.59522 7.66818 5.53839 7.73566 5.46767C7.8276 5.3713 7.90315 5.28667 7.96364 5.21178C6.79516 3.5886 6.00084 2.57435 5.57263 2.15252C5.35148 1.93467 4.8563 1.97478 4.67451 2.15341C4.18966 2.62983 4.0303 2.78867 3.52729 3.29813C1.71815 5.10325 3.10311 9.89329 6.98545 13.7687C10.8666 17.6429 15.6692 19.0246 17.4921 17.206C17.9509 16.7647 18.3248 16.3917 18.6125 16.0884C18.8205 15.8692 18.8576 15.417 18.6184 15.1691C18.22 14.7563 17.2447 13.9979 15.5605 12.7919C15.4377 12.8904 15.2868 13.0333 15.054 13.2658Z" fill="#ECAD3C" />
                                </svg>
                                Contact
                            </li>
                            <li className='flex flex-col justify-center items-center'>
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0195 20C4.48129 20 -0.00830078 15.5228 -0.00830078 10C-0.00830078 4.47715 4.48129 0 10.0195 0C15.5577 0 20.0473 4.47715 20.0473 10C20.0473 15.5228 15.5577 20 10.0195 20ZM10.0195 18.1818C14.5507 18.1818 18.224 14.5187 18.224 10C18.224 5.48131 14.5507 1.81818 10.0195 1.81818C5.48823 1.81818 1.81493 5.48131 1.81493 10C1.81493 14.5187 5.48823 18.1818 10.0195 18.1818ZM10.9344 11.8167H11.8454V13.6349H8.19894V11.8167H9.11055V9.9985H8.19894V8.18032H10.9344V11.8167ZM10.0198 7.27122C9.51614 7.27122 9.10786 6.86421 9.10786 6.36213C9.10786 5.86006 9.51614 5.45304 10.0198 5.45304C10.5234 5.45304 10.9317 5.86006 10.9317 6.36213C10.9317 6.86421 10.5234 7.27122 10.0198 7.27122Z" fill="#ECAD3C" />
                                </svg>
                                About
                            </li>
                        </ul>
                    </div>
                    <Link to="/cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF543E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                    </Link>
                </nav>
            </div>
            <Outlet />
        </>
    )
}