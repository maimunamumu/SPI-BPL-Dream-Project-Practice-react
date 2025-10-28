
import { Suspense, useState } from 'react';
import './App.css'
import AvailablePlayers from './Component/AvailablePlayers/AvailablePlayers'
import Nav from './Component/SharedFolder/Nav'
import SelectedPlayers from './Component/SelectedPlayers/SelectedPlayers';
import { ToastContainer } from 'react-toastify';

const fetchPlayer =async()=>{
const res =await fetch('/players.json');
return res.json();
}
const playersPromise =fetchPlayer()
function App() {
    const [toggle,setToggle]=useState(true);
const [availableBalance,setAvailableBalance]=useState(65000000);
const [selectedPlayers,setSelectedPlayers]=useState([]);
 const removePlayers=(p)=>{
  let newPrice=parseInt(p.price.split(",").join(""));;
  const filterData =selectedPlayers.filter(ply=> ply.id!==p.id);
  setSelectedPlayers(filterData);
  setAvailableBalance(availableBalance+newPrice);  
 }

 

   
  return (
   <div className='mx-auto container px-12 mt-2'>
     <Nav availableBalance={availableBalance}></Nav>
     <div className='flex justify-between items-center mt-5'>
      <h1 className='text-2xl font-bold'>{toggle===true?"Available Balance":`Selected (${selectedPlayers.length}/6)`}</h1>
      <div>
        <button onClick={()=>{setToggle(true)}} className={`border border-gray-200 border-r-0 px-4 py-3 font-medium rounded-l-2xl ${toggle===true?'bg-[#E7FE29]':''}`}>Available</button>
        <button onClick={()=> {setToggle(false)}} className={`border border-gr border-l-0 px-4 py-3 font-medium rounded-r-2xl ${toggle===false?"bg-[#E7FE29]":""}`}>Selected (<span>{(selectedPlayers.length)}</span>)</button>
      </div>
     </div>
    {
    toggle===true?<Suspense fallback={<span className="loading loading-spinner text-error"></span>}> <AvailablePlayers playersPromise={playersPromise}   setAvailableBalance={setAvailableBalance} availableBalance={availableBalance} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></AvailablePlayers></Suspense>:
      <SelectedPlayers removePlayers={removePlayers} selectedPlayers={selectedPlayers}></SelectedPlayers>
    }
    <ToastContainer></ToastContainer>
   </div>
  )
}

export default App
