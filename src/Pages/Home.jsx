
export default function Home() {
    return (
        <div className="min-h-screen bg-home bg-no-repeat bg-cover bg-center flex flex-col justify-center gap-12 py-8">
            <div className=" w-2/5 pl-12 pt-20">
                <h1 className=" text-7xl font-bold">Get your family a new member.</h1>
                <p className=" text-2xl">Open your doors and hearts to pets in need of a home and it will be thankful to you for the rest of their lives.</p>
            </div>
            <div className="flex justify-between items-center gap-8 ">
                <button className="flex bg-[#E7D9FE] hover:bg-[#cdb9ec] ml-32
                items-center text-3xl gap-2 px-4 py-2 rounded-2xl shadow-[0_5px_15px_0_rgba(0,0,0,0.35)]">EXPLORE
                    <svg width="91" height="44" viewBox="0 0 91 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_8_7)">
                            <path d="M67.941 15.2886L67.9344 20.6573L7.57359 20.5832L7.5692 24.1623L67.9301 24.2363L67.9235 29.605L83.0225 22.4653L67.941 15.2886Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_8_7">
                                <rect width="42.9491" height="90.5414" fill="white" transform="translate(90.5938 1) rotate(90.0703)" />
                            </clipPath>
                        </defs>
                    </svg>

                </button>
                <div className="flex justify-between w-1/2 bg-[#E7D9FE] p-16 border-2 border-gray-400 rounded-l-xl">
                    <div className="flex flex-col items-center gap-8">
                        <h1 className=" text-6xl">544</h1>
                        <p className="text-xl">Waiting for home</p>
                    </div>
                    <div className="flex flex-col items-center gap-8">
                        <h1 className=" text-6xl">756</h1>
                        <p className="text-xl">Adopted last year</p>
                    </div>
                    <div className="flex flex-col items-center gap-8">
                        <h1 className=" text-6xl">422</h1>
                        <p className="text-xl">Rescued</p>
                    </div>
                </div>
            </div>
        </div>
    )
}