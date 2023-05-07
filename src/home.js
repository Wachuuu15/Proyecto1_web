import React from "react";
import "index.css";
import { BrowserRouter, Routes, Switch, Route} from "react-router-dom";
import NavBar from "./components/navegacion/NavBar";


function Home(){
    return(
        <div className="wow">
            <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route/>
            </Routes>
            </BrowserRouter>
        </div>
    );
}
export default Home;