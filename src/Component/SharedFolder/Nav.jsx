import React from 'react';
import NavImg from "../../assets/logo.png"
import CoinImg from '../../assets/dollar 1.png'
const Nav = ({availableBalance}) => {
    return (
       < >
     <div className="navbar ">
  <div className="flex-1">
    <a className=" text-xl">
         <img className='w-[60px] h-[60px]'  src={NavImg} alt={NavImg} />
    </a>
  </div>
  <div className="flex ">
  
      <span className='mr-2'>{availableBalance}</span>
 <span className='mr-2'>Coins</span>
    <img  src={CoinImg} alt={CoinImg} />
   
  </div>
</div>
       
       </>
    );
};

export default Nav;