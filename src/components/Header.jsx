import { useEffect, useRef, useState } from "react"
import logo from "../Images/logo.jpeg"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navref = useRef(null)
    const currentLoc = useLocation()


    useEffect(() => {

        navref.current.style.transition = "left .5s ease-in-out"
    }, [])

    const toggle = () => {


        navref.current.style.left = "0"
        setIsOpen(true)

    }
    const close = () => {
        navref.current.style.left = "-100%"
        setIsOpen(false)
    }


    return (
        <>
            <header className="backdrop sticky top-0 h-[100px]  flex items-center justify-between p-4 w-[100%] max-sm:text-white">
                <div className=" ">
                    <img className="w-[80px] h-[80px] rounded-full" src={logo} alt="logo" />
                </div>
                <nav ref={navref} className="max-sm:bg-slate-800 text-lg font-bold items-center  max-sm:absolute top-[100px] left-[-100%] max-sm:flex max-sm:flex-col max-sm:items-center bg-gray-300 p-2 sm:rounded-md
            max-sm:m-0 max-sm:h-[300px] max-sm:justify-center max-sm:opacity-[0.9] max-sm:w-full ">

                    <Link onClick={close} to="/" className={`link rounded-md mx-2 max-sm:my-3   px-2 ${currentLoc.pathname == "/" && "bg-green-600"}`} >Home</Link>

                    <Link onClick={close} to="/places-to-visit" className={`link rounded-md mx-2 max-sm:my-3   px-2 ${currentLoc.pathname == "/places-to-visit" && "bg-green-600"}`} >Places</Link>

                    <Link onClick={close} to="/famous-food" className={`link max-sm:my-3 rounded-md    px-2 ${currentLoc.pathname == "/famous-food" && "bg-green-600"}`}>Food</Link>

                    <Link onClick={close} to="/contact-us" className={` link max-sm:my-3 rounded-md px-2 ${currentLoc.pathname == "/contact-us" && "bg-green-600"}`}>Contact Us</Link>

                    <Link onClick={close} to="" className={` link max-sm:my-3 rounded-md px-2 ${currentLoc.pathname == "/gallery" && "bg-green-600"}`}>Gallery</Link>
                </nav>

                {isOpen ? <span onClick={close} className="sm:hidden text-4xl font-bold">&times;</span> :
                    <span onClick={toggle} className="sm:hidden text-4xl font-bold">&#9776;</span>
                }
            </header>

        </>
    )
}

export default Header
