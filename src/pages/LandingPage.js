import React, { useContext, useEffect } from 'react';
import ImageHolder from '../component/ImageHolder';
import MiniWeather from '../component/MiniWeather';
import Search from '../component/Search';
import LangToggle from '../component/LangToggle';

// images
import fall from '../default-img/melonta_kauppatori_Maija_Astikainen-3.jpg';
import spring from '../default-img/Lammassaari_island_Jussi+Hellsten.jpg';
import summer from '../default-img/Finland_Helsinki_Vallisaari_highres_byJuliaKivela_9868.jpg';
import winter from '../default-img/johanna_vilhunen_talvi_2013_4_2874.jpg';
import garden from '../default-img/myhelsinki_Aarteenetsijänpuisto_0406_20200915.jpg';

//
import './landing-page.css';
import { SportsContext } from '../Contexts/SportsContexts';
import { WeatherContext } from '../Contexts/WeatherContext';
import { ServiceContext } from '../Contexts/ServiceContext';
import { UIContext } from '../Contexts/UIContext';

const LandingPage = (props) => {
    const { updateSports } = useContext(SportsContext);
    const { updateWeather } = useContext(WeatherContext);
    const { updateServices } = useContext(ServiceContext);
    const { language } = useContext(UIContext);

    const textContent = language.map(l => {
        if (l.langUsed) {
            switch (l.lang) {
                case 'EN':
                    return "Discover Helsinki Outdoor Sports"
                case 'SV':
                    return "Helsingfors utemotionsplatser"  
                case 'FI':
                    return "Pääkaupunkiseudun ulkoliikuntapaikat"
                default:
                    break;
            }
        }
    })
    /*useEffect(() => {
        updateSports();
        updateServices();
        updateWeather();
    }, []);*/

    return (
        <div className='landing-page'>  
            <ImageHolder images = {[spring, summer, fall, winter, garden]} />
            <LangToggle/>
            <div className='mid-bar'>
                <h2 className='main-background-color-faded' style={{padding: '10px', borderRadius: '20px'}}>{textContent}</h2>
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