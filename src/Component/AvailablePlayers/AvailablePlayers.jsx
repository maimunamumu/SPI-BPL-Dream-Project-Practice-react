import React, { use } from 'react';

import Player from '../../Player/Player';

const AvailablePlayers = ({ playersPromise,setAvailableBalance,availableBalance,selectedPlayers,setSelectedPlayers}) => {

    const playerData=use( playersPromise)
    return (
        <div>
            

      

{/* map */}
<div className='grid grid-cols-3 gap-8 mb-8'>
    {
        playerData.map(player=><Player setAvailableBalance={setAvailableBalance} player={player} availableBalance={availableBalance} key={player.id} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} ></Player>)
    }
</div>
        </div>

        
    );
};

export default AvailablePlayers;