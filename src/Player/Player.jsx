import React, { useState } from 'react';
import img from '../assets/user 1.png'
import flags from  '../assets/report 1.png'
import { toast } from 'react-toastify';

const Player = ({player,setAvailableBalance,availableBalance,selectedPlayers,setSelectedPlayers}) => {
    
    const playerPrice =parseInt(player.price.split(",").join(""));
    
    let newBalance=availableBalance-playerPrice;
    
    const [selected,setSelected]=useState(false);
    const handleClick=()=>{
        setSelected(!selected);
     if(availableBalance<playerPrice){
    toast('balance nei');
     }
     else{
          setAvailableBalance(newBalance)
     }
      if(selectedPlayers.length===6){
        toast("sorry 6 players already  add");
        return
     }
   
 

    setSelectedPlayers([...selectedPlayers,player]);
    console.log(selectedPlayers);
    
    }
    
    return (
        <>
              <div className="card bg-base-100 w-96 shadow-sm p-4">
  <figure>
    <img className='w-full h-[220px] rounded-2xl'
      src={player.player_img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
 <div className='flex items center gap-2 '>
    <img className='w-5 h-5' src={img} alt="" />
       <p className="text-sm">{player.player_name}</p>
 </div>

 {/* country */}

 <div className='flex justify-between items-center border-b border-gray-300 '>
    <div className='flex items-center gap-2 mb-2'>
        <img src={flags} alt="" />
        <p>{player.player_country}</p>
    </div>
    <button className='btn mb-2'>{player.playing_role}</button>
 </div>
<div className='font-bold flex justify-between items-center'>
    <span>Rating</span>
    <span>{player.rating}</span>
</div>
   <div className='flex justify-between '>
   <span className='font-bold'>{player.batting_style}</span>
   <span className='text-gray-400'>{player.bowling_style}</span>
   </div>
    <div className="card-actions justify-end mt-2 items-center">
        <p className='text-[16px] font-semibold'>Price:{player.price}</p>
      <button disabled={selected} onClick={handleClick} className="btn ">{selected?"Selected":"Choose Player"}</button>
    </div>
  </div>
</div>
        </>
    );
};

export default Player;