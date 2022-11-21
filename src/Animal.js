import React from 'react';
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import horse from './svg/horse.svg'
import bird from './svg/bird.svg'
import gator from './svg/gator.svg'
import heart from './svg/heart.svg'
import dog from './svg/dog.svg'

const mapAnimal = {
    bird, cat, dog, cow, gator, horse
}

const Animal = ({type}) => {
    return(<div>
        <img alt="" src={mapAnimal[type]} />
    </div>)
};

export default Animal;