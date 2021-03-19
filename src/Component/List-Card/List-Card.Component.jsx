import React from 'react'; 
import './ListCard.css';  

import Card from '../Card/Card.component'

export const CardList=props=>{
    return(
        <div className='listcards'>
        
                {props.monsters.map(monster => (
                    <Card key={monster.id} monsters={monster} />
                ))} 
        </div>

    )
}
export default CardList;

 