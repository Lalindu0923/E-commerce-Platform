import React from 'react';
import '../CSS/productCard.css';
import { Link } from 'react-router-dom';


const productCard = (props) => {
  return (
    <div  className='productcard'>
      <Link to={`/${props.routeType}/${props.id}`}>
        <img className='image' src={props.image} alt="" />
      </Link>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        
        <div className='price'>
            <p>{props.price} Lkr</p>
            {props.offer && <p className="offer">{props.offer}</p>}     
        </div>
        <div className="button-container">
        <button className='add'>
          Add to Cart
        </button>
        <button className='order'>
          Order Now
        </button>              
        </div>
      
    </div>
  )
}

export default productCard;