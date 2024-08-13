import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const UserTeam = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        axios.post('https://fantasy-sport-backend.onrender.com/getallteams')
            .then(response => {
                if (response.data.teams) {
                    setTeams(response.data.teams);
                } else {
                    alert(response.data.message || "No teams found");
                }
            })
            .catch(err => {
                console.error("Error fetching teams:", err);
                alert("An error occurred while fetching teams");
            });
    }, []);

    return (
        <div>
            <Navbar />
            <div className="playerbox">
                <center><h1>All Fantasy Teams</h1></center>
                {teams.map((team, index) => (
                    <div key={index} className="user-team">
                        <center><h3>User: {team.username}</h3></center>
                        <table>
                        
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Player Name</th>
                                    <th>Position</th>
                                </tr>
                            </thead>
                            <tbody>
                                {team.players.map((player, idx) => (
                                    <tr key={idx}>
                                        <td>{idx + 1}</td>
                                        <td>{player.name}</td>
                                        <td>{player.position}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserTeam;

