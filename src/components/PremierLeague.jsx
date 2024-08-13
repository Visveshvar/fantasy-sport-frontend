import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from './Navbar'
var PremierLeague = (bk) => {
    var [data, setData] = useState([])
    const leagueName="premierleagueplayers"
    useEffect(() => {
            axios.get("/teamdata/PremierLeague.json").then((res) => {
                console.log(res)
                setData(res.data)
            }).catch((err) => {
                console.log(err);
            })
        
    }, [])
    return (
        <div>
            <Navbar/>
            <div className="teambox">
            {data.map((item) => (
                <Link to={`/team/${leagueName}/${item.name}`} key={item.id}>
                    <div className="card">
                    <div className="card-body">
                        <h1 className="card-title" style={{fontSize:"20px"}}>{item.name}</h1>
                    </div>
                    </div>
                </Link>
            ))}
            </div>
        </div>
    )
}
export default PremierLeague