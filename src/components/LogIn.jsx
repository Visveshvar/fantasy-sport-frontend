import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../CSS/Signup.css'
import { useAuth } from "./AuthContext"
var LogIn=()=>{
    var [emailUser,setEmailUser]=useState("")
    var [password,setPassword]=useState("")
    const navigate=useNavigate()
    const { login } = useAuth();
    async function userlog(event) {
        event.preventDefault()
        const record=await axios.post("https://fantasy-sport-backend.onrender.com/login",({
            email:emailUser,
            username:emailUser,
            password:password
        }))
        if(record.data.message==="Login Success")
        {
            login(record.data.username);
            navigate('/home')
        }
        else
        {
            alert(record.data.message)
        }
    }
    return(
        <div className="container">
        <div className="box">
        <center><h3>Log In</h3><br></br>
           <form onSubmit={userlog}>
            <div className="form-floating">
                    <input className="form-control" type="text" placeholder="Username/Email" required onChange={(e)=>setEmailUser(e.target.value)}></input>
                    <label className="form-label">Username/Email</label>
                </div><br></br>
                <div className="form-floating">
                    <input className="form-control" type="password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)}></input>
                    <label className="form-label">Password</label>
                </div><br></br>
                <button className="btn btn-primary" style={{width:'50%'}}>Log In</button><br></br>
                <span>Don't have an account? <a className="SignUpanchor" href="/signup">Sign Up</a></span>
            </form></center>
            
        </div>
    </div>
    )
}
export default LogIn