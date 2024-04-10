import { useEffect, useState } from "react"
import doggo from "../images/doggo.png"
import { useView } from "../Context/ViewContext"
import ProductCard from "./ProductCart"
import { GetProduct } from "../API/GetItems"
export default function ShopDetails() {
    const [add, setAdd] = useState(1)
    const { view } = useView()
    const [change, setChange] = useState(false)
    const [list, setList] = useState([])
    const fetchData = async () => {
        try {
            const response = await GetProduct()
            if (response.success) {
                setList(response.data)
            }
        } catch (error) {

        }
    }
    // Call the API when component mounts.
    useEffect(() => { fetchData() }, [])


    return (
        <div className="min-h-screen bg-hero bg-no-repeat bg-cover bg-center bg-fixed px-16  pt-28 pb-8 flex flex-col gap-8">
            <div className="flex justify-around gap-8  items-start h-full max-md:flex-wrap ">
                <div className=" flex justify-around gap-8 flex-wrap w-1/2">
                    {list.slice(0,3).map((item) => {
                        return (
                            <ProductCard key={item.id} item={item} />
                        )
                    })}
                </div>

                {view.map((item) => {
                    return (
                        <div className="bg-slate-100 border border-black flex flex-col gap-8 w-1/2 p-8  ">
                            <div className="flex  justify-between items-center">
                                <h1 className="text-3xl font-bold">{item.name}</h1>
                                <div className="flex items-center">
                                    <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.5 46.375C31.0982 46.375 35.5541 44.7806 39.1086 41.8636C42.663 38.9465 45.096 34.8873 45.9931 30.3774C46.8902 25.8676 46.1958 21.1862 44.0282 17.131C41.8606 13.0758 38.354 9.89755 34.1058 8.1379C29.8577 6.37825 25.1308 6.14603 20.7306 7.48081C16.3304 8.81559 12.5292 11.6348 9.97454 15.458C7.41993 19.2813 6.27 23.872 6.7207 28.4481C7.1714 33.0241 9.19484 37.3023 12.4462 40.5537" stroke="#444343" stroke-width="3" stroke-linecap="round" />
                                        <path d="M37.8569 16.6571L25.1399 34.2914C24.458 35.237 24.117 35.7098 23.6334 35.7312C23.1498 35.7526 22.7683 35.3118 22.0054 34.4303L15.1426 26.5" stroke="#444343" stroke-width="5" stroke-linecap="round" />
                                    </svg>
                                    <h2 className="text-lg font-bold">In stock</h2>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-bold text-orange-600">P {item.price}</h2>
                                <div className="flex gap-2 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setChange(!change)} style={{ color: change ? " yellow" : null }}
                                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                </div>
                                <p>{item.stock}</p>
                            </div>

                            <div>
                                <h1 className="font-bold mb-2">Color</h1>
                                <div className="flex gap-2">
                                    <div style={{backgroundColor:item.color}} className="w-10 h-10  rounded-full"></div>
                                    <div style={{backgroundColor:item.color2}} className="w-10 h-10  rounded-full"></div>
                                    
                                </div>
                            </div>
                            <div>
                                <h1 className="font-bold mb-2">Size</h1>
                                <div className="flex gap-2">
                                    <div className="px-6 py-1 border">L</div>
                                    <div className="px-6 py-1 border">M</div>
                                </div>
                            </div>
                            <div>
                                <h1 className="font-bold mb-2">Quantity</h1>
                                <div className="flex gap-4">
                                    <button onClick={() => setAdd(add - 1)} className="border px-4
                             py-1">-</button>
                                    <div className="px-12 py-1 border font-bold">{add}</div>
                                    <button onClick={() => setAdd(add + 1)} className="border px-4
                             py-1">+</button>
                                </div>
                            </div>

                            <button className="bg-moon-200 p-2 w-3/4 self-center text-xl font-bold
                    shadow-[0_1px_4px_0_rgba(0,0,0,0.16)] border border-gray-400">Add to cart</button>

                        </div>
                    )
                })}
            </div>

            <div className="border bg-moon-200 p-8  border-black">
                <h2 className="text-2xl font-bold mb-2">Description</h2>
                {view.map((item) => {
                    return (
                        <p>{item.description}</p>
                    )
                })}
            </div>
            <h1 className="text-2xl font-bold">Customer Reviews (243)</h1>
            <div className="flex justify-between">
                <div className="w-1/2">
                    <div className="bg-gray-200 w-full p-4 flex gap-4 border border-black">
                        <div>
                            <img src={doggo} alt="" className="rounded-full w-24 aspect-square border border-black" />
                        </div>
                        <div className="w-full">
                            <div className="w-full flex flex-col gap-4">
                                <div className="w-full flex justify-between items-center">
                                    <div>
                                        <h3 className="text-xl font-bold">Name</h3>
                                        <small>Date</small>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-grip-horizontal">
                                        <circle cx="12" cy="9" r="1" /><circle cx="19" cy="9" r="1" />
                                        <circle cx="5" cy="9" r="1" /><circle cx="12" cy="15" r="1" />
                                        <circle cx="19" cy="15" r="1" /><circle cx="5" cy="15" r="1" />
                                    </svg>
                                </div>
                                <div className="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    <p>Great!</p>
                                </div>
                                <p>Meow meow meow meow meow meow meow meow meow meow meow meow meow meow
                                    meow meow meow meow. Meow?? Meow!! Meow!!! </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-2/5 bg-gray-200 p-4 flex flex-col gap-8 border border-black">
                    <h2 className="text-2xl font-bold">Overall Rating </h2>
                    <div className="flex items-end gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round
                         " stroke-linejoin="round" class="lucide lucide-star">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <h1 className="text-5xl font-bold">4.5</h1>
                        <div >
                            <p>238 out of 243 (95%)</p>
                            <small>Customers recommend this product</small>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between w-full">
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24"
                                    viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-star">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                                <p>5</p>
                            </div>
                            <input type="range" name="" id="" className=" w-4/5" />
                            <p>168</p>
                        </div>
                        <div className="flex justify-between w-full">
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24"
                                    viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-star">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                                <p>5</p>
                            </div>
                            <input type="range" name="" id="" className=" w-4/5" />
                            <p>168</p>
                        </div>
                        <div className="flex justify-between w-full">
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24"
                                    viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-star">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                                <p>5</p>
                            </div>
                            <input type="range" name="" id="" className=" w-4/5" />
                            <p>168</p>
                        </div>
                        <div className="flex justify-between w-full">
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24"
                                    viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-star">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                                <p>5</p>
                            </div>
                            <input type="range" name="" id="" className=" w-4/5" />
                            <p>168</p>
                        </div>
                        <div className="flex justify-between w-full">
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24"
                                    viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-star">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                                <p>5</p>
                            </div>
                            <input type="range" name="" id="" className=" w-4/5" />
                            <p>168</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="text-xl font-bold">Review this product</h3>
                            <p>Share your thoughts with other customers.</p>
                        </div>
                        <button className="border border-black bg-red-400 p-2 font-semibold">Write a review</button>
                    </div>
                </div>
            </div>
        </div>
    )
}