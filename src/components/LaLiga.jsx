import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from './Navbar'
var LaLiga = () => {
    var [data, setData] = useState([])
    const leagueName='laligaplayers'
    useEffect(() => {
            axios.get("/teamdata/LaLiga.json").then((res) => {
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
export default LaLiga