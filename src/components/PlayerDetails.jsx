import React, { useState, useEffect, useContext } from "react";
import { FantasyContext } from "./FantasyContext";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from './Navbar';
import { useAuth } from "./AuthContext";

const PlayerDetail = () => {
    const { leagueName, teamName } = useParams();
    const [players, setPlayers] = useState([]);
    const { elements, addElement } = useContext(FantasyContext);
    const { username } = useAuth();

    useEffect(() => {
        axios.get(`/Playerleaguedata/${leagueName}.json`)
            .then(res => {
                const teams = res.data.teams;
                const team = teams.find(t => t.team === teamName);
                if (team) {
                    setPlayers(team.players);
                } else {
                    console.error('Team not found');
                }
            })
            .catch(err => {
                console.log(err);
            });
    }, [leagueName, teamName]);

    const handleAddPlayer = (player) => {
        
            axios.post('https://fantasy-sport-backend.onrender.com/addplayer', {
                username: username,
                player: player
            }).then(response => {
                if (response.data.message === "Player added successfully") {
                    addElement(player); 
                } else {
                    alert(response.data.message);
                }
            }).catch(err => {
                console.error("Error adding player:", err);
                alert("An error occurred while adding the player");
            });
        
    };

    return (
        <div>
            <Navbar />
            <div className="teambox">
                <h2>{teamName} Players</h2>
                <ul>
                    {players.map((player, index) => (
                        <li key={index}>
                            {player.name} - {player.age} - {player.position}
                            <button onClick={() => handleAddPlayer(player)}>Add</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PlayerDetail;
