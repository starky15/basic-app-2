import React, {useState} from 'react';
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import horse from './svg/horse.svg'
import bird from './svg/bird.svg'
import gator from './svg/gator.svg'
import heart from './svg/heart.svg'
import dog from './svg/dog.svg'
import './Animal.css'

const Animal = ({type}) => {
    const mapAnimal = {
        bird, cat, dog, cow, gator, horse
    }
    const handleClick = () =>{
        if (click < 15){
            setClick(click + 1);
        }

    }
    const [click, setClick] = useState(0)
    return(<div className="AnimalScope" onClick={handleClick}>
        <img className="animal" alt={type} src={mapAnimal[type]} />
        <img className="heart" alt="heart" src={heart} style={{width:`${click*10}px`}}/>
    </div>)
};

export default Animal;