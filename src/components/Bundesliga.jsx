import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from './Navbar'
var Bundesliga= () => {
    var [data, setData] = useState([])
    useEffect(() => {
            axios.get("/teamdata/Bundesliga.json").then((res) => {
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
                <Link to={`/team/${item.name}`} key={item.id}>
                    <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">{item.name}</h1>
                    </div>
                    </div>
                </Link>
            ))}
            </div>
        </div>
    )
}
export default Bundesliga