import React from 'react';


const Gameboard = props => (
  <div className="Gameboard">
    <div className="container">
      {props.children}
    </div>
  </div>
)
  
export default Gameboard;