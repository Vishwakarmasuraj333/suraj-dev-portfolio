import React, { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-gray-900 text-white px-16 py-6 relative">

            <div className="flex justify-between items-center">


                <div className="flex items-center gap-3">
                    <img
                        className="w-10 h-10 rounded-full border-2 border-blue-400"
                        src="https://avatars.githubusercontent.com/u/212504628?s=400&u=2e48c57bcb936f662429599802ffa422b1871452&v=4"
                        alt="suraj"
                    />
                    <h1 className="font-semibold text-xl">Suraj</h1>
                </div>


                <nav className="hidden md:block">
                    <ul className="flex gap-8 font-medium">
                        <li><a className="hover:text-blue-400 transition" href="#">Home</a></li>
                        <li><a className="hover:text-blue-400 transition" href="#">About</a></li>
                        <Link to="/login" className="hover:text-blue-400 transition">
                            Login
                        </Link>
                        <li><a className="hover:text-blue-400 transition" href="#">Projects</a></li>
                        <li><a className="hover:text-blue-400 transition" href="#">Resources</a></li>
                    </ul>
                </nav>

                {/* Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col gap-1.5 z-50"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>

            </div>

            {/* Mobile Menu */}
            <nav
                className={`fixed top-0 left-0 w-full h-screen bg-gray-900 flex items-center justify-center transform transition-transform duration-500 ${menuOpen ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <ul className="flex flex-col items-center gap-10 text-2xl font-semibold">
                    <li><a className="hover:text-blue-400 transition duration-300 hover:scale-110" href="#">Home</a></li>
                    <li><a className="hover:text-blue-400 transition duration-300 hover:scale-110" href="#">About</a></li>
                    <Link to="/login" className="hover:text-blue-400 transition">
                        Login
                    </Link>
                    <li><a className="hover:text-blue-400 transition duration-300 hover:scale-110" href="#">Projects</a></li>
                    <li><a className="hover:text-blue-400 transition duration-300 hover:scale-110" href="#">Resources</a></li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;
