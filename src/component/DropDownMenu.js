import React, {useState} from 'react';
import LangToggle from './LangToggle';

const DropDownMenu = () => {
    const [display, setDisplay] = useState(false);
    return (
        <div style={style} className='button main-background-color-faded'>
           <div onClick={() => {setDisplay(!display)}}>click</div>
           {display? <LangToggle/> : null}
        </div>
    )
}

export default DropDownMenu;

const style = {
    position: 'absolute',
    top: '2rem',
    left: '2rem',
    zIndex: '5',
    padding: '8px'
}