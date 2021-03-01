import React from 'react';

import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faCartPlus } from '@fortawesome/free-solid-svg-icons';
const Player = (props) => {
    const {name, image, salary} = props.player;
    
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div  className="player-style">
            <div className="img-style">
                <img src={image} alt=""/>
            </div>
            <div>
                <h3 className="player-name">Player Name : {name} </h3>
                <h4 className = "salary">Salary : {salary}</h4>
                <button className="add-button"  onClick = {() => handleAddPlayer(props.player)}><FontAwesomeIcon icon={faCartPlus} />  Add Player</button>
            </div> 
        </div>
    );
};

export default Player;