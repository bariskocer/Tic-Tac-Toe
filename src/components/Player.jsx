import React, { useState } from "react";

const Player = ({ name, symbol,isActive,onChangeName }) => {
  
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handlePlayerName = (e) => {
    const { value } = e.target;
    setPlayerName(value);
  };
  const handleOnEdit = () => {
    if(isEditing) {
      onChangeName(symbol,playerName)
    }
    setIsEditing((wasEditing) => !wasEditing)
  };

  let playerInfo = <span className="player-name">{`${playerName}`}</span>;
  let btnCaption = "Edit";
  if (isEditing) {
    playerInfo = (
      <input
        type="text"
        onChange={handlePlayerName}
        value={playerName}
        required
      />
    );
    btnCaption = "Save";
  }
  return (
    <>
      <li className= {isActive ? "active" : "undefined"}> 
        <span className="player">
          {playerInfo}
          <span className="player-symbol">{symbol}</span>
        </span>
      </li>
      <button onClick={handleOnEdit}>{btnCaption}</button>
    </>
  );
};//Koşullu class vermek

export default Player;
