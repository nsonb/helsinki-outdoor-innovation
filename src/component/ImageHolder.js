import React, {useState, useEffect} from 'react';
import fall from '../default-img/fall.png';
import spring from '../default-img/spring.png';
import summer from '../default-img/summer.png';
import winter from '../default-img/winter.png';

const ImageHolder = () => {
    const [display, setDisplay] = useState(spring);

    useEffect(() => {
        console.log('button click');
    }, [display]);

    return (
        <div>
            <div>
                <img src = {display} alt='depicting season'/>
            </div>
            <div>
                <button onClick = {() => {setDisplay(spring)}}>1</button>
                <button onClick = {() => {setDisplay(summer)}}>2</button>
                <button onClick = {() => {setDisplay(fall)}}>3</button>
                <button onClick = {() => {setDisplay(winter)}}>4</button>
            </div>
        </div>
    )
}

export default ImageHolder;