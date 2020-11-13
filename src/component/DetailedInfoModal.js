import React, { useContext, useState, useEffect } from 'react';
import ImageHolder from './ImageHolder';
import default_img from '../default-img/no-image.jpg';

import {getWeatherAt} from '../Scripts/weatherAPI';

// images
import icon01d from '../weather-icon/01d.png';
import icon01n from '../weather-icon/01n.png';
import icon02d from '../weather-icon/02d.png';
import icon02n from '../weather-icon/02n.png';
import icon03d from '../weather-icon/03d.png';
import icon03n from '../weather-icon/03n.png';
import icon04d from '../weather-icon/04d.png';
import icon04n from '../weather-icon/04n.png';
import icon09d from '../weather-icon/09d.png';
import icon09n from '../weather-icon/09d.png';
import icon10d from '../weather-icon/10d.png';
import icon10n from '../weather-icon/10n.png';
import icon11d from '../weather-icon/11d.png';
import icon11n from '../weather-icon/11n.png';
import icon13d from '../weather-icon/13d.png';
import icon13n from '../weather-icon/13n.png';
//icon
import temp from '../weather-icon/temp.png';
import wind from '../weather-icon/wind03.png';
import humid from '../weather-icon/humid02.png';

import { UIContext } from '../Contexts/UIContext';

// For showing the user more detailed info about a single place
// Accepts json format of information about the place that is then displayed

const DetailedInfoModal = ({location, closeModal}) => {
    const [weather, setWeather] = useState(null)
    var weatherIcon = icon01d;
    useEffect(() => {
        let isMounted = true;
        getWeatherAt(location.longitude, location.latitude)
        .then(res => {
            console.log('called');
            if(isMounted) {
                setWeather(res)
                switch (weather.currrent.iconNum) {
                    case '01d':
                        weatherIcon = icon01d;
                        break;
                    case '01n':
                        weatherIcon = icon01n;
                        break;
                    case '02d':
                        weatherIcon = icon02d;
                        break;
                    case '02n':
                        weatherIcon = icon02n;
                        break;
                    case '03d':
                        weatherIcon = icon03d;
                        break;
                    case '03n':
                        weatherIcon = icon03n;
                        break;
                    case '04d':
                        weatherIcon = icon04d;
                        break;
                    case '04n':
                        weatherIcon = icon04n;
                        break;
                    case '09d':
                        weatherIcon = icon09d;
                        break;
                    case '09d':
                        weatherIcon = icon09n;
                        break;
                    case '10d':
                        weatherIcon = icon10d;
                        break;
                    case '10n':
                        weatherIcon = icon10n;
                        break;
                    case '11d':
                        weatherIcon = icon11d;
                        break;
                    case '11n':
                        weatherIcon = icon11n;
                        break;
                    case '13d':
                        weatherIcon = icon13d;
                        break;
                    case '13n':
                        weatherIcon = icon13n;
                        break;
                    default:
                        weatherIcon = icon13d;
                        break;
                }
            }
        }).catch((err) => {
            console.log(err);
        })
        return () => {isMounted = false}
    }, [location])

    const { currentLang } = useContext(UIContext);
    const [ buttonText ] = useState({
        FI: 'Katso reitti',
        EN: 'Find route',
        SV: 'Hitta rutt'
    })
    //TODO: Add functionality and styling to Find route button
    // Styles for the page
    const modal = {
        position: 'fixed',
        display: 'block',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        cursor: 'default',

    }
    const content = {
        top: '10%',
        margin: 'auto',
        borderRadius: '0.5rem',
        width: '50vw',
        padding: '2rem',
        position: 'relative',
        zIndex: '6',
        height: '25rem',
        fontSize: '12px'
    }
    const placeName = {
        fontSize: '24px',
        marginTop: '4px',
        marginBottom: '4px'
    }
    const info = {
        display: 'block',
        position:'absolute', 
        height: (location.picture_url? '53%': '80%'), 
        left: '0', bottom: '16%', 
        borderRadius: '0.5rem 0.5rem 0 0', 
        overflow: 'hidden',
        paddingTop: '0',
        width: '100%'
    }
    const detail_info = {
        width: '100%',
        height: '45%',
        overflowX: 'hidden'
    }
    const blurBackground = {
        backgroundColor: 'rgba(0,0,0,0.9)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        zIndex: '5',
    }
    const buttonStyle = {
        position:'absolute', 
        height: '8%',
        width: '50%',
        minWidth: '120px',
        bottom: '3%', 
        left: '0', 
        right: '0', 
        margin: 'auto', 
        marginTop: '4%', 
        padding: '10px', 
        textAlign: 'center', 
        justifyItems: 'center',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '16px',
        textAlign: 'center'
    }
    const weather_info = {
        display: 'flex',
        height: '16px',
        padding: '5px'
        
    }
    const weather_info_box = {
        width: '20%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignContent: 'flex-start'

    }
    const weather_icon = {
        height: '12px'
    }

    const weather_detail = {
        display: 'block',
        width: 'fit-content',
        textAlign: 'center',
        margin: 0,
        marginLeft: '2px',
        fontSize: '8px'
    }

    return (
        <div style={modal}>
            <div style={blurBackground}  onClick={() => closeModal()}></div>
            <div style={content} className='main-background-color'>
                {location.picture_url ? 
                    <div style={{position:'absolute', width: '100%', height: '30%', left: '0', top: '0', borderRadius: '0.5rem 0.5rem 0 0', overflow: 'hidden', marginBottom: '16px'}}>
                        <ImageHolder images={location.picture_url? [location.picture_url] : [default_img]}/>
                    </div> : <div></div>}
                <div style={info}>
                    {weather === null? 'null' : 
                        <div style = {weather_info}>
                            <div style = {{width: '30%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row',alignContent: 'flex-start'}}>
                                <img style = {weather_icon} src={weatherIcon} alt='icon'/>
                                <p style={weather_detail}>{weather.current.weather[0].description}</p>
                            </div>
                            <div style = {weather_info_box}>
                                <img style = {weather_icon} src={temp} alt='icon'/>
                                <p style={weather_detail}>{weather.current.temp + '° C'}</p>
                            </div>
                            <div style = {weather_info_box}>
                                <img style = {weather_icon} src={humid} alt='icon'/>
                                <p style={weather_detail}>{weather.current.humidity + '%'}</p>
                            </div>
                            <div style = {weather_info_box}>
                                <img  style = {weather_icon} src={wind} alt='icon'/>
                                <p style={weather_detail}>{weather.current.wind_speed + 'm/s'}</p>
                            </div>
                        </div>}
                    <p style={placeName}>{
                        currentLang === 'SV' ? location.name_sv || location.name_fi || '' : 
                        (currentLang === 'EN' ? location.name_en || location.name_fi || '' : 
                        location.name_fi || '')
                    }</p>
                    <p>{
                        currentLang === 'SV' ? location.street_address_sv || location.street_address_fi || '' : 
                        (currentLang === 'EN' ? location.street_address_en || location.street_address_fi || '' : 
                        location.street_address_fi || '')}, 
                        {currentLang === 'SV' ? location.address_city_sv || location.address_city_fi || '' : 
                        (currentLang === 'EN' ? location.address_city_en || location.address_city_fi || '' : 
                        location.address_city_fi || '')}, 
                        {location.address_zip
                    }</p>
                    <p>Information</p>
                    <div style={detail_info}  className='scroll'>
                        <p >
                        {currentLang === 'SV' ? location.desc_sv || location.desc_fi || '' : 
                            (currentLang === 'EN' ? location.desc_en || location.desc_fi || '' : 
                            location.desc_fi || '')}
                        </p>
                    </div>
                    
                </div>
                <button className='button secondary-background-color-faded' style={buttonStyle} onClick={() =>{
                    window.open("//reittiopas.hsl.fi/reitti/ /" + location.street_address_fi + ", "
                    + location.address_city_en + "::" +location.latitude + "," + location.longitude
                    + "?locale=en", "_blank")}}>
                        {buttonText[currentLang]}
                </button> 
            </div>
        </div>
    );
}
export default DetailedInfoModal;

