import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext"; // Adjust the path as needed
import '../CSS/Profile.css';
import Navbar from "./Navbar";

const Profile = () => {
    const { isAuthenticated, username,logout } = useAuth(); // Use the auth context
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (isAuthenticated && username) {
            console.log(username);
            const fetchUserDetails = async () => {
                try {
                    const response = await axios.post("https://fantasy-sport-backend.onrender.com/getuser", {
                        username: username
                    });
                    setUser(response.data.user);
                    setLoading(false);
                } catch (err) {
                    setError("An error occurred while fetching user details");
                    setLoading(false);
                }
            };

            fetchUserDetails();
        } else {
            setLoading(false);
            setError("User is not authenticated");
        }
    }, [isAuthenticated, username]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <Navbar/>
            <div className="outerprofilebox">
                <h1 style={{fontSize:"60px",color:"gold"}}>Hi! {user.fullname}</h1>
            <div className="profile-card">
            {user ? (
                <div>
                    <div className="userimage">
                        <h1 style={{textAlign:"center",color:"black",fontSize:"130px"}}>{user.username[0]}</h1>
                    </div>
                    <h1 className="heading">Profile</h1>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Full Name:</strong> {user.fullname}</p>
                    <p><strong>Password:</strong> {user.password}</p>
                    <button className="btn btn-light logoutbutton" onClick={logout}>Logout</button>
                </div>
            ) : (
                <p>User not found</p>
            )}
            </div>
            </div>
        </div>
    );
};

export default Profile;
