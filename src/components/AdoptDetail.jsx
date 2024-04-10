import { useEffect } from "react"
import { useView } from "../Context/ViewContext"
import {useNavigate} from  'react-router-dom'
export default function AdoptDetail() {
    const { view,addToAdopt , cart} = useView()
    const navigate = useNavigate()
    useEffect(() => {
        if (cart === null) {
            navigate('/adopt')
        }
    },[cart])
    return (
        <>
            {view.map((item) => {
                return (
                    <main className="min-h-screen bg-hero bg-no-repeat bg-cover bg-center justify-around flex pt-28 p-4">
                        <div className="bg-[#D3CACA] w-2/5 p-8 flex flex-col items-center justify-around gap-6  rounded-xl  shadow-[0_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)]">
                            <img src={item.image} alt="" className="w-72" />
                            <h1 className=" text-4xl font-semibold self-start">{item.name} ({item.breed})</h1>
                            <div className="flex justify-around flex-wrap w-full gap-4">
                                <div className="bg-gray-200 py-2 px-6 w-36 rounded-lg flex flex-col justify-center items-center shadow-[0_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)]">
                                    <p>Gender</p>
                                    <p>{item.gender}</p>
                                </div>
                                <div className="bg-gray-200 py-2 px-6 w-36 rounded-lg flex flex-col justify-center items-center shadow-[0_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)]">
                                    <p>Age</p>
                                    <p>{item.age}</p>
                                </div>
                                <div className="bg-gray-200 py-2 px-6 w-36 rounded-lg flex flex-col justify-center items-center shadow-[0_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)]">
                                    <p>Color</p>
                                    <p>{item.color}</p>
                                </div>
                                <div className="bg-gray-200 py-2 px-6 w-36 rounded-lg flex flex-col justify-center items-center shadow-[0_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)]">
                                    <p>Birthdate</p>
                                    <p>{item.date}</p>
                                </div>
                                <div className="bg-gray-200 py-2 px-6 w-36 rounded-lg flex flex-col justify-center items-center shadow-[0_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)]">
                                    <p>Vacinated</p>
                                    <p>{item.vacinated}</p>
                                </div>
                            </div>
                            <button onClick={() => addToAdopt(item)} className="px-4 py-2 bg-green-400 w-36 rounded-lg font-semibold hover:bg-green-500">ADOPT</button>
                        </div>
                        <div className="w-1/2  flex flex-col  gap-4">
                            <div className="bg-[#D3CACA] p-4 rounded-xl  shadow-[0_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)]">
                                <div className="flex items-center gap-2 w-full">
                                    <img src={item.image} alt="" className="w-10 rounded-full aspect-square" />
                                    <p className="text-2xl">{item.name}</p>
                                </div>
                                <p className="ml-8 text-2xl">
                                   {item.name} came to the shelter when someone in his family became allergic. He’s
                                    an affectionate guy who enjoys catnip and watching the world go by his window.
                                    He’s sure to win your heart with his goofy little meow, and you’re sure to win
                                    his with some cheek scratches. So stop by and meet this handsome little guy today!
                                </p>
                            </div>
                            <div className="bg-[#E8DBF4] p-4 rounded-xl px-6 flex flex-col gap-2 justify-start  shadow-[0_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)]">
                                <h2 className=" text-2xl font-semibold italic self-center ">Special Traits</h2>
                                <h2 className=" border-b-2 border-black text-2xl">Trained to toilet</h2>
                                <h2 className=" border-b-2 border-black text-2xl">Amount of shedding</h2>
                                <h2 className=" border-b-2 border-black text-2xl">Easy to train</h2>
                                <h2 className=" border-b-2 border-black text-2xl">Energy level</h2>

                            </div>
                        </div>
                    </main>
                )
            })

            }
        </>

    )
}