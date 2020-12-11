import React, { useState } from 'react';
import './App.css';

const food = {
  starters : [
    { name : "Fried Ravoli", price : "$5.80"},
    {name : "Calamari" , price: "$8.98"},
    {name : "Zucchini Fries" , price: "$9.20"},
  ],
  sandwiches : [
    {name : "Grilled Cheese", price : "$8.20"},
    {name : "Pescaraz Club", price : "$7.50"},
    {name : "Philly Steak Sub",price : "$4.92"}
  ],
  pasta : [
    {name : "Tortelli", price : "$9.20"},
    {name : "Italian Pasta", price : "$5.80"},
    {name : "Sphageti Sisco", price : "$6.10"}
  ]
}

function App() {
  const headingText = "🍟 bon appétit";

  const [type,setType] = useState("starters");

  const clickHandler = (type) =>{
    setType(type);
  }
  
  
  return (
    <div className="App">
      <header className="App-header">
       <h1>{headingText}</h1>
      </header>
      <div className="menu">
        <div className="menu-item">
          <div className="item">
          <button onClick={()=>clickHandler("starters")}>🍪 Starters</button>
          </div>
        </div>
        <div className="menu-item">
          <div className="item">
          <button onClick={()=>clickHandler("sandwiches")}>🥪 Sandwiches</button>
          </div>
        </div>
        <div className="menu-item">
          <div className="item">
          <button onClick={()=>clickHandler("pasta")}>🍝 Pasta</button>
          </div>
        </div>         
      </div>
      <hr /> <hr />
      <div>
      {
        food[type].map((item) =>{
          return (
          
            <ul className="cards">
              <li key={item.name} className="cards-item">
                <div className="card">
                  <div className="item-name">{item.name}</div>
                  <div className="item-price">{item.price}</div>
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
