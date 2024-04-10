import { Tabs } from 'antd';
import AdoptionCart from '../components/AdoptionCart';
const { TabPane } = Tabs;
export default function Cart() {
    return (
        <main className='flex justify-between h-screen'>
            <Tabs tabPosition="left" defaultActiveKey="1" className='w-full m-8'>
                <TabPane tab="Adoption Cart" key="1">
<AdoptionCart />
                </TabPane>
                <TabPane tab="Product Cart" key="2" >

                </TabPane>

            </Tabs>
            <div className='bg-red-100 w-1/3 p-8 pr-16 flex flex-col gap-8'>

                <hr className='border-2 border-black '/>

                <div className='text-sm'>
                    <p >CART TOTAL: <span className='font-semibold text-xl'>₱699</span></p>
                    <p>Amount & Shipping calculated at checkout</p>
                </div>

                <label className='text-sm'>
                    <input type="checkbox" name="" id="" className='mr-2'/>
                        I Agree to the <span className='font-bold'>Terms and Condition</span>
                </label>
                <button className='self-center flex justify-center w-32 px-4 py-2 rounded-full gap-2 bg-black hover:-translate-y-1 text-white'>
                    Checkout
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                </button>
            </div>
        </main>
    )
}