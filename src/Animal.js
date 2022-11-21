import React, {useState} from 'react';

const Animal = () => {
    const [count,setCount] = useState(0)
    console.log(count)
    const handleClick = () =>{
        setCount(count + 1);
    }
    return(<div>
        <button onClick={handleClick}>Button</button>
        <p>Count is {count}</p>
        </div>)
};

export default Animal;