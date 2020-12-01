import React, {useState, useEffect} from 'react';
import './ImageHolder.css';

// for containing series of images that can be changed through clicking the underneath buttons
// accept an array of images sources as props, preferably handling 3 - 4 images

const ImageHolder = ({images, names}) => {
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
            <div className='button secondary-background-color image-button' key={img} onClick = {() => {setDisplayIndex(index)}} style={{opacity:opacity}}></div>
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
            {images.length > 1 ? <div className='left-button' onClick={() => setImage(false)}></div> : null}
            {images.length > 1 ? <div className='right-button' onClick={() => setImage(true)}></div> : null}
            
            <img className = 'top-img'src = {images[displayIndex]} alt='decorative'/>
            {images.length > 1 ? <div className = 'bottom-row'>{renderedButtons}</div> : null}
            {names.length !== 0 ? <a 
                href={`http://materialbank.myhelsinki.fi/search/1?query=${names[displayIndex].replace(/\s/g, '+')}`} 
                style={nameCredit} className= 'hover main-background-color-faded'
                target='_blank'
                rel="noopener noreferrer">
                    {names[displayIndex]}
            </a>: <div></div>}
        </div>
    )
}

export default ImageHolder;

const nameCredit = {
    position: 'absolute',
    bottom: '1%',
    right: '1%',
    fontSize: '0.5rem',
    padding: '5px',
    borderRadius: '5px',
    textDecoration: 'none'
}