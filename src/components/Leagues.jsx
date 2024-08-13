import React from "react";
import '../CSS/League.css'
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
var League=()=>{
    return (
        <div>
            <Navbar/>
            <div className="grid-container">
                <Link to='/premierleague'>
                <div className="grid-item teams">
                    <img className="PLimg" src="/images/premierleague.png"></img>
                    <h3>Premier League</h3>
                </div>
                </Link>
                <Link to='/laliga'>
                <div className="grid-item teams">
                    <img className="PLimg" src="/images/laliga.png" ></img>

                    <h3>La Liga</h3>
                </div>
                </Link>
                <Link to='/serieA'>
                <div className="grid-item teams">
                <img className="PLimg" src="/images/serieA.png" ></img>
                <h3>Serie A</h3>
                </div>
                </Link>
                <Link to='/bundesliga'>
                <div className="grid-item teams">
                <img className="PLimg" src="/images/bundesliga.png" ></img>
                <h3>Bundesliga</h3>
                </div>
                </Link>
                <Link to='/ligue1'>
                <div className="grid-item teams">
                <img className="PLimg" src="/images/ligue1.png
                " ></img>
                    <h3>Ligue 1</h3>
                </div>
                </Link>

            </div>
        </div>
    )
}
export default League