import { Dropdown } from 'antd';
import dog from '../images/dogbg.png'
import Card from '../components/Card';
import { GetAdopt } from '../API/GetItems';
import { useEffect, useState } from 'react';
export default function Adopt() {
    const [list, setList] = useState([])
    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            ),
        },
  
    ]
    const fetchData = async () =>{
        try {
            const response = await GetAdopt()
            if(response.success){
                setList(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="min-h-screen bg-hero bg-no-repeat bg-cover bg-center flex pt-28">
            <div className='flex flex-col gap-4'>
                <div className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-dog">
                        <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5" /><path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" /><path d="M8 14v.5" /><path d="M16 14v.5" /><path d="M11.25 16.25h1.5L12 17l-.75-.75Z" /><path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306" />
                    </svg>
                    Dog
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.5" cy="12.5" r="12.5" fill="#FF642E" />
                        <circle cx="12.5" cy="12.5" r="12" stroke="black" stroke-opacity="0.21" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 10.707C7.68342 10.3165 8.31658 10.3165 8.70711 10.707L12 13.9999L15.2929 10.707C15.6834 10.3165 16.3166 10.3165 16.7071 10.707C17.0976 11.0975 17.0976 11.7307 16.7071 12.1212L12.7071 16.1212C12.5196 16.3087 12.2652 16.4141 12 16.4141C11.7348 16.4141 11.4804 16.3087 11.2929 16.1212L7.29289 12.1212C6.90237 11.7307 6.90237 11.0975 7.29289 10.707Z" fill="white" />
                    </svg>
                </div>
                <div className='flex flex-col gap-4 mb-auto'>
                    <label htmlFor="Breed" className='flex flex-col items-center gap-1 font-semibold'>
                        Breed
                        <Dropdown
                            menu={{
                                items,
                            }}
                            placement="bottomRight"
                            arrow
                        >
                            <button className='bg-[#E7D9FE] px-2 p-1 flex justify-between items-center w-40 rounded-lg border border-black  shadow-[0_5px_15px_0_rgba(0,0,0,0.35)]'>
                                Any
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f9f5f5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg></button>
                        </Dropdown>
                    </label>
                    <label htmlFor="Gender" className='flex flex-col items-center gap-1 font-semibold'>
                        Gender
                        <Dropdown
                            menu={{
                                items,
                            }}
                            placement="bottomRight"
                            arrow
                        >
                            <button className='bg-[#E7D9FE] px-2 p-1 flex justify-between items-center w-40 rounded-lg border border-black  shadow-[0_5px_15px_0_rgba(0,0,0,0.35)]'>
                                Any
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f9f5f5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg></button>
                        </Dropdown>
                    </label>
                    <label htmlFor="Age" className='flex flex-col items-center gap-1 font-semibold'>
                        Age
                        <Dropdown
                            menu={{
                                items,
                            }}
                            placement="bottomRight"
                            arrow
                        >
                            <button className='bg-[#E7D9FE] px-2 p-1 flex justify-between items-center w-40 rounded-lg border border-black  shadow-[0_5px_15px_0_rgba(0,0,0,0.35)]'>
                                Any
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f9f5f5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg></button>
                        </Dropdown>
                    </label>
                    <label htmlFor="Color" className='flex flex-col items-center gap-1 font-semibold'>
                        Color
                        <Dropdown
                            menu={{
                                items,
                            }}
                            placement="bottomRight"
                            arrow
                        >
                            <button className='bg-[#E7D9FE] px-2 p-1 flex justify-between items-center w-40 rounded-lg border border-black  shadow-[0_5px_15px_0_rgba(0,0,0,0.35)]'>
                                Any
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f9f5f5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg></button>
                        </Dropdown>
                    </label>
                </div>
                <img src={dog} alt="" />
            </div>
            <div className='w-full p-2'>
                <div className=' w-full flex gap-12 flex-wrap'>
                    {list.map((item) =>{
                        return(
                            <Card name={item.name} age={item.age}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}