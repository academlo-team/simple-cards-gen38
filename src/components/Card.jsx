import React from 'react';
import './styles/card.css';

const Card = ({color, text}) => {

    const borderColor = {
        borderColor: color,
    }

    const textColor = {
        color: color,
    }

  return (
    <article className='card' style={borderColor}>
        <h2 className='card__header'>Header</h2>
        <h3 className='card__title'>{text} card title</h3>
        <p style={textColor} className='card__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nesciunt iure nostrum possimus nobis animi?</p>
    </article>
  )
}

export default Card;