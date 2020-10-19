import React, {useState, useEffect} from 'react';
import './ImageHolder.css';

// for containing series of images that can be changed through clicking the underneath buttons
// accept an array of images sources as props, preferably handling 3 - 4 images

const ImageHolder = ({images}) => {
    const [display, setDisplay] = useState(images[0]);

    useEffect(() => {
        
    }, [display]);

    const renderedButtons = images.map((img) => {
        return (
            <div className='button' key={img} onClick = {() => {setDisplay(img)}}></div>
        )
    })

    return (
        <div className = 'container'>
            <div>
                <img className = 'top-img'src = {display} alt='depicting season'/>
            </div>
            <div className = 'bottom-row'>
                {renderedButtons}
            </div>
        </div>
    )
}

export default ImageHolder;