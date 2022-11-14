import { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import gluttony from "../img/1.jpg";
import './profilecard.css'

function ProfileCard(){
    const [humans, setHumans] = useState([
        {
            name: 'van dijk',
            url: gluttony
        },
        {
            name: 'joel matip',
            url: gluttony
        }
    ]);

    useEffect(() => {

    }, [])

    return (
        <div>
            {humans.map(human => (
                <TinderCard className='swipe' key={human.name} preventSwipe={['up', 'down']}>
                    <div
                    style={{ backgroundImage: `url(${human.url})`}} 
                    className='card'>
                        <h3>{human.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    );
}

export default ProfileCard;