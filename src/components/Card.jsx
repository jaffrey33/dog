import dog from '../images/doggo.png'
export default function Card(props) {
    return (
        <div className=' w-44 h-44 bg-moon-200 p-2 rounded-xl border-2 border-black shadow-[0_5px_15px_0_rgba(0,0,0,0.35)] mb-4'>
            <img src={dog} alt="" className='w-full rounded-lg' />
            <div className=' p-2 border translate-y-2 bg-moon-200 border-black rounded-md grid place-content-center'>
                <p className='font-bold'>{props.name} <small className='font-thin'>{props.age}</small></p>
            </div>
        </div>
    )
}
