import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext"; 

export const FantasyContext = createContext();

export const FantasyProvider = ({ children }) => {
    const [elements, setElements] = useState([]);
    const { username } = useAuth();

    useEffect(() => {
        const fetchExistingPlayers = async () => {
            try {
                const response = await axios.post('https://fantasy-sport-backend.onrender.com/getplayers', {
                    username: username
                });

                if (response.data.players) {
                    setElementsFromServer(response.data.players);
                } else {
                    console.error("No players found or error fetching players");
                }
            } catch (err) {
                console.error("Error fetching players:", err);
            }
        };

        fetchExistingPlayers();
    }, [username]);

    const addElement = (player) => {
            const newElement = { id: elements.length + 1, content: player };
            setElements(prevElements => [...prevElements, newElement]);
    
    };

    const removeElement = (id) => {
        const updatedElements = elements.filter(element => element.id !== id);
        setElements(updatedElements);
    };

    const setElementsFromServer = (players) => {
        setElements(players.map((player, index) => ({ id: index + 1, content: player })));
    };

    return (
        <FantasyContext.Provider value={{ elements, addElement, removeElement, setElementsFromServer }}>
            {children}
        </FantasyContext.Provider>
    );
};
