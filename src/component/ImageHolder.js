import React, {useState, useEffect} from 'react';
import './ImageHolder.css';

// for containing series of images that can be changed through clicking the underneath buttons
// accept an array of images sources as props, preferably handling 3 - 4 images

const ImageHolder = ({images}) => {
    const [displayIndex, setDisplayIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(()=> {
            setImage(true)
        }, 8000);
        return () => clearInterval(intervalId);
    }, [displayIndex]);

    const renderedButtons = images.map((img, index) => {
        const opacity = index === displayIndex? 0.8 : 0.3;
        return (
            <div className='button' key={img} onClick = {() => {setDisplayIndex(index)}} style={{opacity:opacity}}></div>
        )
    })

    const setImage = (value) => {
        if(value === true) {
            (displayIndex + 1) >= images.length ? setDisplayIndex(0) : setDisplayIndex(displayIndex+1)
        } else {
            (displayIndex - 1) < 0 ? setDisplayIndex(images.length-1) : setDisplayIndex(displayIndex-1)
        }
    }

    return (
        <div className = 'container'>
            <div className='left-button' onClick={() => setImage(false)}></div>
            <div className='right-button' onClick={() => setImage(true)}></div>
            <img className = 'top-img'src = {images[displayIndex]} alt='depicting season'/>
            <div className = 'bottom-row'>
                {renderedButtons}
            </div>
        </div>
    )
}

export default ImageHolder;