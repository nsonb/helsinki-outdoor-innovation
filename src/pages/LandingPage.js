import React from 'react';
import ImageHolder from '../component/ImageHolder';
import fall from '../default-img/fall.png';
import spring from '../default-img/spring.png';
import summer from '../default-img/summer.png';
import winter from '../default-img/winter.png';

const LandingPage = () => {
    return (
        <div>
            <ImageHolder images = {[spring, summer, fall, winter]} />
        </div>
    )
}

export default LandingPage;