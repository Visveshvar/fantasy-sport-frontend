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
            <div className="playerbox">
                <center><h1>{teamName} Players</h1></center>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Position</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player, index) => (
                            <tr key={index}>
                                <td>{player.name}</td>
                                <td>{player.age}</td>
                                <td>{player.position}</td>
                                <td>
                                    <span 
                                        className="material-symbols-outlined" 
                                        onClick={() => handleAddPlayer(player)}
                                    >
                                        add_circle
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PlayerDetail;
