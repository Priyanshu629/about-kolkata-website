import { useEffect, useRef, useState } from "react";
import logo from "../Images/logo.jpeg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);
    const currentLoc = useLocation();

    useEffect(() => {
        if (navRef.current) {
            navRef.current.style.transition = "left 0.5s ease-in-out";
        }
    }, []);

    const toggleMenu = () => {
        setIsOpen((prevState) => !prevState);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/places-to-visit", label: "Places" },
        { to: "/famous-food", label: "Food" },
        { to: "/contact-us", label: "Contact Us" },
    ];

    return (
        <header className="sticky top-0 h-[100px] flex items-center justify-between p-4 w-full bg-gray-900 text-white shadow-md z-10">
            <div>
                <img className="w-[80px] h-[80px] rounded-full" src={logo} alt="logo" />
            </div>
            <nav
                ref={navRef}
                className={`max-sm:bg-slate-800 max-sm:text-white text-lg font-bold items-center sm:static sm:flex sm:flex-row max-sm:absolute max-sm:top-[100px] max-sm:flex-col max-sm:items-center bg-gray-300 p-2 sm:rounded-md max-sm:w-full max-sm:h-[300px] max-sm:justify-center max-sm:transition-all ${
                    isOpen ? "max-sm:left-0" : "max-sm:left-[-100%]"
                }`}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.to}
                        onClick={closeMenu}
                        to={link.to}
                        className={`link rounded-md mx-2 px-2 max-sm:my-3 ${
                            currentLoc.pathname === link.to ? "bg-green-600" : ""
                        }`}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>

            <button
                onClick={toggleMenu}
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
                className="sm:hidden text-4xl font-bold focus:outline-none"
            >
                {isOpen ? "×" : "☰"}
            </button>
        </header>
    );
};

export default Header;
