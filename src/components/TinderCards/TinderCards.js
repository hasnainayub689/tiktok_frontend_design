import React, { useState } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Jennifer Lopez',
            url: 'https://deadline.com/wp-content/uploads/2022/11/jennifer-lopez.jpg',
        },
        {
            name: 'Nicki Minaj',
            url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTMC7X5iQwDUtzqU3xIGuUUUdh5pJx9Em_67mpxn3warSJgLk4n',
        },
        {
            name: 'Jennifer Lawrence',
            url: 'https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_.jpg',
        },
    ]);

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction);
    };

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen');
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => onSwipe(dir, person.name)}
                        onCardLeftScreen={() => onCardLeftScreen(person.name)}
                    >
                        <div
                            style={{
                                backgroundImage: `url(${person.url})`,
                            }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;
