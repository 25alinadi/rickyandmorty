import React from "react";

const Header:React.FC = () => {
    return(
        <React.Fragment>
            <section className={"container mx-auto relative  h-[400px] flex flex-col justify-center items-center"}>
                <h1 className={"font-bold text-5xl text-4xl md:text-5xl lg:text-7xl text-center"}>The Ricky and Morty Characters</h1>
            </section>
        </React.Fragment>
    )
}

export default Header