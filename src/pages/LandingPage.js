import React, { useContext, useState } from 'react';
import ImageHolder from '../component/ImageHolder';
import MiniWeather from '../component/MiniWeather';
import Search from '../component/Search';
import appLogo from '../default-img/applogo.jpeg'

// images
import fall from '../default-img/melonta_kauppatori_Maija_Astikainen-3.jpg';
import spring from '../default-img/Lammassaari_island_Jussi+Hellsten.jpg';
import summer from '../default-img/Finland_Helsinki_Vallisaari_highres_byJuliaKivela_9868.jpg';
import winter from '../default-img/johanna_vilhunen_talvi_2013_4_2874.jpg';
import garden from '../default-img/myhelsinki_Aarteenetsijänpuisto_0406_20200915.jpg';

//
import './landing-page.css';
import { UIContext } from '../Contexts/UIContext';

const LandingPage = () => {
    const { currentLang } = useContext(UIContext);
    const [ heading ] = useState({
        FI: "Pääkaupunkiseudun ulkoliikuntapaikat",
        EN: "Discover Helsinki Outdoor Sports",
        SV: "Helsingfors utemotionsplatser"
    });

    return (
        <div className='landing-page'> 
            <ImageHolder images = {[spring, summer, fall, winter, garden]} names={['Jussi Hellsten', 'Julia Kivela', 'Maija Astikainen', 'Johanna Vilhunen', 'Sasa Tkalcan']}/>
            <div className='mid-bar'>
                <div className = 'brand main-background-color-shade'>
                    <img src={appLogo}/>
                    <div style={{width: '70%', height: '100%', marginLeft: '5px', display: 'flex', flexDirection: 'column'}}>
                        <h2>Ulkoillen</h2>
                        <p>{heading[currentLang]}</p>
                    </div>
                    
                </div>
                <Search/>
            </div>
            <MiniWeather location='top'/>
        </div>   
    )
}

export default LandingPage;

/*<div>Sample box for search results
    <ul>
        {Object.keys(sorted).map(e => sorted[e].data.map(d =>
            <li>{d.name_en || d.name_fi || 'No name'}</li>))}                     
    </ul>
</div>*/