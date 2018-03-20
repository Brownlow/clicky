import React from 'react';
import './Gamecard.css';

const Gamecard = props => (
  <div onClick={() =>props.beenClicked(props.id)} className="card">
    <div className="img-container">
      <img src={props.image} alt={props.image} />
    </div>
  </div>
)

export default Gamecard;

