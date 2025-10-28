import React from 'react';
import SelectedCard from '../../SelectedCard/SelectedCard';

const SelectedPlayers = ({selectedPlayers, removePlayers}) => {
    console.log(selectedPlayers);
    
    return (
        <div>
          {
            selectedPlayers.map(selectedPlayer => <SelectedCard selectedPlayer={selectedPlayer} removePlayers={removePlayers}></SelectedCard>)
          }
        </div>
    );
};

export default SelectedPlayers;