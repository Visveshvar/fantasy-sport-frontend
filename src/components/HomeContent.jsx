import React from "react";
import Navbar from "./Navbar";

var Homecontent=()=>{
    return (
        <div style={{marginTop:"5%",backgroundColor:"black",minHeight:"100vh",paddingTop:"15%"}}>
            <Navbar/>
            <center><h1 style={{fontSize:"70px",color:"gold"}}>Welcome To Your Fantasy League!</h1></center>
            <center><p style={{color:"white",fontSize:"30px"}}>Create Your Dream Team and Conquer the World!</p></center>
        </div>
    )
}
export default Homecontent