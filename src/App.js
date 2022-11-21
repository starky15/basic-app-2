import React,{useState} from 'react';
import Animal from './Animal';
import './App.css'

const App = () => {
    const [animals,setAnimals] = useState([])
    
    function getAnimal(){
        let animal = ['cat', 'dog', 'gator', 'horse', 'cow', 'bird']

        return animal[Math.floor(Math.random() * animal.length)]
    }

    const handleClick = () =>{
        console.log(getAnimal())
        setAnimals([...animals, getAnimal()])
        
    //code to update animal    
    }

    const aniarray = animals.map((animal, index) => {
        return <Animal key={index} type={animal} />
    })
    return(<div className='app'>
        <button onClick={handleClick}>Button</button>
        <div className='animal-list'>{aniarray}</div>
        </div>)
};

export default App;