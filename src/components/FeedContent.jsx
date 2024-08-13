import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import '../CSS/Feed.css'
import Navbar from "./Navbar";
var Feedcontent=()=>{
    var [im, setIm] = useState([])
    var [query,setQuery]=useState("sports")
    useEffect(
        () => {
            if(query){
                axios.get("https://newsapi.org/v2/everything", {
                    params: {
                        apiKey: '119c7db4712345699f3eebaa352dce3c',
                        q:query
                        
                    }
                }).then((res) => {
                    console.log(res)
                    setIm(res.data.articles)
                }).catch((err) => {
                    console.log(err);
                })
            }


        }, [query]
    )

    return (
        <>
                <Navbar/>
                <div className="row selectionrow">
                    <div className="col-3 selectioncol">
                        <ul className="list-group">
                            <button className="list-item btn" style={{}} onClick={()=>setQuery('sports')}>All</button>
                            <button className="list-item btn" onClick={()=>setQuery('cricket')}>Cricket</button>
                            <button className="list-item btn" onClick={()=>setQuery('football')}>Football</button>
                            <button className="list-item btn" onClick={()=>setQuery('basketball')}>Basketball</button>
                            <button className="list-item btn" onClick={()=>setQuery('volleyball')}>volleyball</button>
                            <button className="list-item btn" onClick={()=>setQuery('hockey')}>hockey</button>
                            <button className="list-item btn" onClick={()=>setQuery('wrestling')}>wrestling</button>
                            <button className="list-item btn" onClick={()=>setQuery('kabbadi')}>kabbadi</button>


                        </ul>
                    </div>
                    <div className="col-9">
                    <div className="newsbox">
                {im.map((article, index) => (
                    <div key={index} className="eachbox">
                        <div className="card feed-card">
                            <a href={article.url} target="_blank" rel="noopener noreferrer">
                            <img className="card-img-top" src={article.urlToImage} alt="error"></img>
                                <h2 className="card-title">{article.title}</h2>
                                <p className="card-body">{article.description}</p>
                            </a>
                        </div>
                    </div>
                ))}
                </div>
                    </div>
                </div>
        </>
    )
}
export default Feedcontent