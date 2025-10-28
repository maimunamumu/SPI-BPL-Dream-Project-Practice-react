import React from 'react';

const SelectedCard = ({selectedPlayer,removePlayers}) => {

    const handleRemove=()=>{
        removePlayers(selectedPlayer)
    }
    return (
        <div className='border border-gray-200 p-3 flex justify-between items-center mt-5 bg-base-100 shadow-lg'>
            <div className='flex gap-3'>
                <img className=' h-[70px] rounded-lg' src={selectedPlayer.player_img} alt="" />
                <div className=''>
                    <h1>{selectedPlayer.player_name}</h1>
                    <p>{selectedPlayer.player_name}</p>
                </div>
            </div>
            <div>
                <img onClick={handleRemove} className='w-8 h-8' src="https://i.ibb.co.com/zTmNghfX/delete-icon.png" alt="" />
            </div>
        </div>
    );
};

export default SelectedCard;