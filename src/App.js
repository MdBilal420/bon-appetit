import React, { useState } from 'react';
import './App.css';

const food = {
  starters : [
    { name : "🍪 Fried Ravoli", price : "💲 5.80",ratings:"⭐ 3.6/5"},
    {name : "🍪 Calamari" , price: "💲 8.98",ratings:"⭐ 4.0/5"},
    {name : "🍪 Zucchini Fries" , price: "💲 9.20",ratings:"⭐ 4.4/5"},
  ],
  sandwiches : [
    {name : "🥪 Grilled Cheese", price : "💲 8.20",ratings:"⭐ 3.8/5"},
    {name : "🥪 Pescaraz Club", price : "💲 7.50",ratings:"⭐ 4.2/5"},
    {name : "🥪 Philly Steak Sub",price : "💲 4.92",ratings:"⭐ 4.6/5"}
  ],
  pasta : [
    {name : "🍝 Tortelli", price : "💲 9.20",ratings:"⭐ 4.0/5"},
    {name : "🍝 Italian Pasta", price : "💲 5.80",ratings:"⭐ 4.4/5"},
    {name : "🍝 Sphageti Sisco", price : "💲 6.10",ratings:"⭐ 4.8/5"}
  ]
}

function App() {
  const headingText = "🍟 buon appetito";

  const [type,setType] = useState("starters");

  const clickHandler = (type) =>{
    setType(type);
  }
  
  
  return (
    <div className="App">
      <header className="App-header">
       <h1>{headingText}</h1>
      </header>
      <div>
        <button onClick={()=>clickHandler("starters")}>🍪 Starters</button>
        <button onClick={()=>clickHandler("sandwiches")}>🥪 Sandwiches</button>
        <button onClick={()=>clickHandler("pasta")}>🍝 Pasta</button>
      </div>  
      <hr /> <hr />
      <div style={{textAlign:"left"}}>
      {
        food[type].map((item) =>{
          return (
            <ul className="lists">
              <li key={item.name} className="lists-item">
                <div className="card">
                  <p style={{color:"darkred"}}>{item.name}</p>
                    <p>{item.price}</p>
                    <p style={{color:"darkgreen",fontWeight:"bold"}}>{item.ratings}</p>
                </div>
              </li>
            </ul>
            )
          //console.log(item.name)
        })
      }
      </div>      
    </div>
  );
}

export default App;
