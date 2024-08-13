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
            <div style={{ marginTop: "10%" }}>
                <h2>All Fantasy Teams</h2>
                {teams.map((team, index) => (
                    <div key={index} className="user-team">
                        <h3>User: {team.username}</h3>
                        <ul>
                            {team.players.map((player, idx) => (
                                <li key={idx}>
                                    {player.name} - {player.position}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserTeam;

