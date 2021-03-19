import React from 'react';
import './CardStyle.css'

export const Card=props =>(
    <div className='card-container'>
    <img 
    alt='Monsters'
    src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`}
    />
        <h2> {props.monsters.name}</h2>
        <p>{props.monsters.email}</p>
    </div>

)

export default Card;