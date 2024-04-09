import { useEffect, useState } from "react"
import { GetProduct } from '../API/GetItems';
import ProductCard from "../components/ProductCart";
import { Link } from "react-router-dom";
export default function Shop() {
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
        <div className="min-h-screen bg-hero bg-no-repeat bg-cover bg-center bg-fixed pt-36 pb-8 flex gap-4  ">
            <section className="flex flex-col gap-6 w-80 pl-8 flex-shrink-0">
                <div className="bg-[#D9D9D9] p-4 text-[#666666] shadow-[0_3px_6px_0_rgba(0,0,0,0.16),0_3px_6px_0_rgba(0,0,0,0.23)]">
                    <p>Sort Latest</p>
                </div>
                <div className="bg-[#D9D9D9] p-4 pb-14 text-[#666666] flex flex-col gap-6  shadow-[0_3px_6px_0_rgba(0,0,0,0.16),0_3px_6px_0_rgba(0,0,0,0.23)]">
                    <h2 className=" border-b-2 border-[#666666]">PRODUCT GATEGORIES</h2>
                    <h3 className="border-b-2 border-[#666666]">Accessories</h3>
                    <h3 className="border-b-2 border-[#666666]">Pet food</h3>
                    <h3 className="border-b-2 border-[#666666]">Medicine</h3>
                    <h3 className="border-b-2 border-[#666666]">Toys</h3>
                </div>
            </section>
            <section>
                <div className="flex gap-8 justify-center flex-wrap ">
                    {list.map((item) => {
                        return (
                            <Link to="/shopdetail">
                                <ProductCard key={item.id} item={item} />
                            </Link>
                        )
                    })}
                </div>

            </section>
        </div>
    )
}
