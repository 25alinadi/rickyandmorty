import React, {useEffect} from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App: React.FC = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <Header/>
            <Main/>
            <Footer/>
        </React.Fragment>
    )
}

export default App