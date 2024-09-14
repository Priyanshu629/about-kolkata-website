import { useEffect, useRef, useState } from "react"
import logo from "../Images/logo.jpeg"
import { Link } from "react-router-dom"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navref = useRef(null)
    const listmenu = useRef(null)

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
            <header className="backdrop sticky top-0 h-[100px] text-orange-100 flex items-center justify-between p-4 ">
                <div className=" ">
                    <img className="w-[80px] h-[80px] rounded-full" src={logo} alt="logo" />
                </div>
                <nav ref={navref} className="max-sm:bg-slate-800 text-xl font-bold mx-4 max-sm:w-[100%] max-sm:absolute top-[100px] left-[-100%] max-sm:flex max-sm:flex-col max-sm:items-center
            max-sm:m-0 max-sm:h-[300px] max-sm:justify-center max-sm:opacity-[0.9]">
                   
                   <select  id="" className="max-sm:hidden bg-black cursor-pointer hover:bg-gray-700 border-2 p-2 rounded-md ">
                    
                    <option value="#" selected disabled>Explore</option>
                    <option value="#"  >
                       <Link className="p-2">Places-To-Visit</Link> 
                    </option>
                    <option value="#"  >
                        <Link className="p-2">Famous-Food</Link> 
                    </option>
                    </select>

                    <Link to="" className="link sm:hidden  px-2" >Places-To-Visit</Link>
                    <Link to="" className="link max-sm:my-3 sm:hidden  px-2">Famous-Food</Link>
                    <Link to="" className="mx-2 link max-sm:my-3 rounded-md px-2">Contact Us</Link>
                    <Link to="" className="mx-2 link max-sm:my-3 rounded-md px-2">Gallery</Link>
                </nav>

                {isOpen ? <span onClick={close} className="sm:hidden text-4xl font-bold">&times;</span> :
                    <span onClick={toggle} className="sm:hidden text-4xl font-bold">&#9776;</span>
                }
            </header>
            
        </>
    )
}

export default Header
