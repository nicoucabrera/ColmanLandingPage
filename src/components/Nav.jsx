import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="lg:px-8 px-2 bg-pink-300 flex flex-wrap items-center py-1 shadow-md border-b border-gray-300">
            <div className="flex-1 flex justify-between items-center">
                <p className="text-2xl text-gray-800 font-serif">Colman Lucrecia Belen</p>
            </div>

            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="cursor-pointer md:hidden block"
            >
                <svg
                    className="fill-current text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                >
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </button>

            <div
                className={`${
                    menuOpen ? "block" : "hidden"
                } md:flex md:items-center md:w-auto w-full`}
                id="menu"
            >
                <nav>
                    <ul className="md:flex items-center justify-between text-gray-700 pt-4 md:pt-0">
                        <li>
                            <p
                                onClick={() => scrollToSection("inicio")}
                                className="md:p-4 py-3 px-0 block font-serif hover:text-gray-900 cursor-pointer"
                            >
                                Inicio
                            </p>
                        </li>
                        <li>
                            <p
                                onClick={() => scrollToSection("Experiencias")}
                                className="md:p-4 py-3 px-0 block font-serif hover:text-gray-900 cursor-pointer"
                            >
                                Experiencias
                            </p>
                        </li>
                        <li>
                            <p
                                onClick={() => scrollToSection("servicios")}
                                className="md:p-4 py-3 px-0 block font-serif hover:text-gray-900 cursor-pointer"
                            >
                                Servicios
                            </p>
                        </li>
                        <li>
                            <p
                                onClick={() => scrollToSection("contact")}
                                className="md:p-4 py-3 px-0 block font-serif hover:text-gray-900 cursor-pointer md:mb-0 mb-2"
                            >
                                Contacto
                            </p>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );

}