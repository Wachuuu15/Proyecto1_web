import React from "react";
import "index.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "./components/navegacion/NavBar";


function Home(){
    return(
        <div className="wow">
            <Router>
                <NavBar/>
            </Router>
        </div>
    );
}
export default Home;