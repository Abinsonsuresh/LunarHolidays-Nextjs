import Button from "./Button"

const Navbar = () => {
  return (
    <>
    <nav className="flex items-center justify-between p-2 border-b-2">
        <div className="text-xl">
            <h1>LunarHolidays</h1>
        </div>
        <div>Test2</div>
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