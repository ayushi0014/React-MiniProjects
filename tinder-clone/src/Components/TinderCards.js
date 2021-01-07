import React, { useState } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';


function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: 'Jeff Bezos',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReV5EGE0Bvwmpak-ekP1fseqpgbJgKkn6xpw&usqp=CAU'
        },
        {
            name: 'Elon Musk',
            url: 'https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg'
        },
    ]);


    const swiped =(direction, nameToDelete)=>{
        console.log('removing' + nameToDelete);
        // setLastDirection(direction);
    }

    const outOfFrame =(name)=>{
        console.log(name + 'left the screen!');
    }

    return (
        <div className='tinderCards'>
            <div className='tinderCards__cardContainer'>
                {people.map((person)=>(
                    <TinderCard
                    className='swipe'
                    key={person.name}
                    preventSwipe={['up', 'down']}
                    onSwipe={(dir)=>swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div style={{backgroundImage:`url(${person.url}`}} className='card'>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>

        </div>
    )
}

export default TinderCards
