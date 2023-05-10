import React from "react";
import "index.css";
import { BrowserRouter, Routes, Switch, Route} from "react-router-dom";
import NavBar from "./components/navegacion/NavBar";
import Video from "./components/video/Video";
import Edition from "./components/edition/edition";
import Merch from "./components/merch/Merch";
import Eras from "./components/eras/Eras";
import Reproductor from "./components/reproductor/Reproductor";


function Home(){
    return(
        <div className="wow">
            <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route/>
            </Routes>
            </BrowserRouter>
            <Video/>
            <Edition/>
            <Merch/>
            <Eras/>
            <Reproductor/>
        </div>
    );
}
export default Home;