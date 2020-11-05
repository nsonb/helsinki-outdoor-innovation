import React from 'react';
import {useHistory} from 'react-router-dom';


const BackButton = () => {
    const history = useHistory();
    return (
        <div className = 'button main-background-color-faded' style ={style} onClick={() => history.goBack()}>
            back
        </div>
    )
}

export default BackButton;

const style = {
    display: 'block',
    position: 'absolute',
    top: '2%',
    left: '2%',
    zIndex: '20',
    padding: '10px'
}