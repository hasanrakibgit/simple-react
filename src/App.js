

import { useEffect, useState } from 'react';
import playerData from './data/data.json';
import Player from './Component/Player/Player';
import Cart from './Component/Cart/Cart';
import Header from './Component/Header/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [players, setPlayers] = useState([]);
  const [cart, setCart] = useState([]);
  

  useEffect(() =>{
    setPlayers(playerData);
    console.log(playerData);
    // const names = playerData.map(name=> name.name)
    
  },[]);

  const handleAddPlayer = (player) => {
    const newCart = [...cart, player];
    setCart(newCart);
    
  }
  
  return (
    
    <div>
      <header>
        <div className="header">
          <Header></Header>
          <h1 style = {{textAlign: 'center'}}>Available Players: {players.length}</h1>
        </div>
      </header>
        <div className="container">
          <div className = "player-container">
            {
            players.map( player => <Player player= {player} handleAddPlayer = {handleAddPlayer} key= {player.id}></Player>)
            }
          </div>
          <div>
            <Cart cart={cart} ></Cart>
            
            <h4>No of Team Member Addedd: {cart.length} </h4>
            
          </div>
          
          
        </div>
    </div >
  );
}

export default App;
