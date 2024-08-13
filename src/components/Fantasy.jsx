import React, { useState, useEffect, useContext } from "react";
import { FantasyContext } from "./FantasyContext";
import { useAuth } from "./AuthContext";
import axios from "axios";
import Navbar from "./Navbar";

const Fantasy = () => {
    const { elements, removeElement, setElementsFromServer } = useContext(FantasyContext);
    const { username } = useAuth();
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.post('https://fantasy-sport-backend.onrender.com/getplayers', {
            username: username
        }).then(response => {
            if (response.data.players) {
                setPlayers(response.data.players);
                setElementsFromServer(response.data.players);
            } else {
                alert(response.data.message || "No players found");
            }
        }).catch(err => {
            console.error("Error fetching players:", err);
            alert("An error occurred while fetching players");
        });
    }, [username]);

    const handleRemoveElement = (id) => {
        axios.post('https://fantasy-sport-backend.onrender.com/removeplayer', {
            username: username,
            playerId: id
        }).then(response => {
            if (response.data.message === "Player removed successfully") {
                removeElement(id);
                setPlayers(prevPlayers => prevPlayers.filter(player => player._id !== id));
            } else {
                alert(response.data.message);
            }
        }).catch(err => {
            console.error("Error removing player:", err);
            alert("An error occurred while removing the player");
        });
    };

    return (
        <div>
            <Navbar />
            <div style={{ marginTop: "10%" }}>
                <h2>Your Fantasy Team</h2>
                {players.map((player) => (
                    <div key={player._id} className="fantasy-element">
                        {player.name} - {player.position}
                        <button onClick={() => handleRemoveElement(player._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Fantasy;
