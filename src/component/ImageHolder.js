import React, {useState, useEffect} from 'react';

// for containing series of images that can be changed through clicking the underneath buttons
// accept an array of images sources as props, preferably handling 3 - 4 images

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