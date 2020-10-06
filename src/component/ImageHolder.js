import React, {useState, useEffect} from 'react';


const ImageHolder = ({images}) => {
    const [display, setDisplay] = useState(images[0]);

    useEffect(() => {
        console.log('button click');
    }, [display]);

    const renderedButtons = images.map((img) => {
        return (
            <button key={img} onClick = {() => {setDisplay(img)}}>o</button>
        )
    })

    return (
        <div>
            <div>
                <img src = {display} alt='depicting season'/>
            </div>
            <div>
                {renderedButtons}
            </div>
        </div>
    )
}

export default ImageHolder;