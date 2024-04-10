import { useView } from '../Context/ViewContext'
import dog from '../images/doggo.png'
export default function Card(props) {
    const {viewItem} = useView()
    return (
        <div onClick={() => viewItem(props.item)}
        className='cursor-pointer w-44 h-44 bg-moon-200 p-2 rounded-xl border-2 border-black shadow-[0_5px_15px_0_rgba(0,0,0,0.35)] mb-4'>
            <img src={props.item.image} alt="" className='w-fit h-40 rounded-lg mx-auto' />
            <div className=' p-2 border -translate-y-5 bg-moon-200 border-black rounded-md grid place-content-center'>
                <p className='font-bold'>{props.item.name} <small className='font-thin'>{props.item.age} Year/s Old</small></p>
            </div>
        </div>
    )
}
