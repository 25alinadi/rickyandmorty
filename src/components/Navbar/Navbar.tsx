import React from "react";

const Navbar: React.FC = () => {
    return (
        <header>
            <nav className={"h-[60px] px-4 flex flex-row justify-between items-center"}>
                <a href={"https://rickandmortyapi.com/"}>
                    <img src={"/images/logo.png"} alt={"logo"} className={"w-10 h-10"} />
                </a>
                <ul className={"flex flex-row justify-start items-center space-x-6"}>
                    <li className={"font-semibold text-xl cursor-pointer transition duration-200 hover:opacity-70 hover:text-orange-500"}>Docs</li>
                    <li className={"font-semibold text-xl cursor-pointer transition duration-200 hover:opacity-70 hover:text-orange-500"}>About</li>
                    <li className={"font-medium text-sm border border-orange-500 rounded-lg px-3 py-2 cursor-pointer transition duration-200 hover:bg-orange-500 hover:text-white"}>SUPPORT US</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar