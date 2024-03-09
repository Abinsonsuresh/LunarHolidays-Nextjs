import Link from "next/link"
import { NavLinks } from "../Data/data"
import Button from "./Button"
import { it } from "node:test"


const Navbar = () => {
  return (
    <>
    <nav className="flex items-center justify-between p-6 ">
        <div className="">
            <div className="text-2xl font-bold"><span className="text-green-50">Lunar</span><span className="text-green-900 underline">Holidays</span></div>
        </div>
        <ul className="gap-12 h-full flex">
            {
                NavLinks.map((items)=>(
                    <Link className="text-gray-50 text-[16px] flex justify-center items-center" key={items.key} href={items.href}>{items.label}</Link>
                ))
            }
        </ul>
        <div>
            <div>
                <Button type={"button"} name={"Login"} icon="/user.svg" variant={"px-4 py-2 bg-green-500 text-white"}/>
            </div>
        </div>

    </nav>
    </>
  )
}

export default Navbar