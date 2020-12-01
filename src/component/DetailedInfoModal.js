import React, { useContext, useState, useEffect } from 'react';
import ImageHolder from './ImageHolder';
import default_img from '../default-img/no-image.jpg';

import {getWeatherAt, getWeatherAtDEV} from '../Scripts/weatherAPI';

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
import hslLogo from '../default-img/hsl_musta.png'

//icon
import temp from '../weather-icon/temp.png';
import wind from '../weather-icon/wind03.png';
import humid from '../weather-icon/humid02.png';

import { UIContext } from '../Contexts/UIContext';

// For showing the user more detailed info about a single place
// Accepts json format of information about the place that is then displayed

const DetailedInfoModal = () => {
    const [ weather, setWeather ] = useState(null)
    const { toggleModal, modalContent, currentLang, weatherDescriptions } = useContext(UIContext)
    const [ weatherIcon, setWeatherIcon ]  = useState(icon01d);
    useEffect(() => {
        let isMounted = true;
        //getWeatherAt(modalContent.longitude, modalContent.latitude)
        getWeatherAtDEV(modalContent.longitude, modalContent.latitude)
        .then(res => {
            console.log(res);
            if(isMounted) {
                setWeather(res)
                switch (weather.current.iconNum) {
                    case '01d':
                        setWeatherIcon(icon01d);
                        break;
                    case '01n':
                        setWeatherIcon(icon01n);
                        break;
                    case '02d':
                        setWeatherIcon(icon02d);
                        break;
                    case '02n':
                        setWeatherIcon(icon02n);
                        break;
                    case '03d':
                        setWeatherIcon(icon03d);
                        break;
                    case '03n':
                        setWeatherIcon(icon03n);
                        break;
                    case '04d':
                        setWeatherIcon(icon04d);
                        break;
                    case '04n':
                        setWeatherIcon(icon04n);
                        break;
                    case '09d':
                        setWeatherIcon(icon09d);
                        break;
                    case '09n':
                        setWeatherIcon(icon09n);
                        break;
                    case '10d':
                        setWeatherIcon(icon10d);
                        break;
                    case '10n':
                        setWeatherIcon(icon10n);
                        break;
                    case '11d':
                        setWeatherIcon(icon11d);
                        break;
                    case '11n':
                        setWeatherIcon(icon11n);
                        break;
                    case '13d':
                        setWeatherIcon(icon13d);
                        break;
                    case '13n':
                        setWeatherIcon(icon13n);
                        break;
                    default:
                        setWeatherIcon(icon13d);
                        break;
                }
            }
        }).catch((err) => {
            console.log(err);
        })
        return () => {isMounted = false}
    }, [modalContent])

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
        zIndex: '4',

    }
    const content = {
        top: '10%',
        margin: 'auto',
        borderRadius: '0.5rem',
        width: '50vw',
        padding: '2rem',
        position: 'relative',
        zIndex: '6',
        height: '80%',
        fontSize: '1rem'
    }
    const placeName = {
        fontSize: '24px',
        marginTop: '4px',
        marginBottom: '4px'
    }
    const info = {
        display: 'block',
        position:'absolute', 
        height: (modalContent.picture_url? (window.innerWidth >= 540? '43%' : '58%'): '80%'), 
        left: '0', bottom: '16%', 
        borderRadius: '0.5rem 0.5rem 0 0', 
        overflow: 'hidden',
        paddingTop: '0',
        width: '100%'
    }
    const detail_info = {
        width: '100%',
        whiteSpace: 'pre-wrap',
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
        fontSize: '0.6rem'
    }

    const img_holder = {
        position:'absolute',
        width: '100%',
        height: window.innerWidth >= 540? '40%': '25%',
        left: '0',
        top: '0',
        borderRadius: '0.5rem 0.5rem 0 0',
        overflow: 'hidden',
        marginBottom: '16px'
    }

    const link = {
        fontSize: '0.7rem',
        textDecoration: 'none',
        backgroundColor: 'white',
        color: 'black',
        fontFamily: "'Montserrat', sans-serif",
        marginLeft: '8px',
        padding: '5px',
        borderRadius: '0.5rem',
    }

    const openHSL = () => {
        const prompt = currentLang === 'EN' ? "Opening HSL Reittiopas in a new tab" : (currentLang === 'SV' ? 'Öppnar HRT Reseplanerare i en ny tab' : 'Avataan HSL Reittiopas uuteen välilehteen')
        if (window.confirm(prompt)) {
            window.open("//reittiopas.hsl.fi/reitti/ /" + modalContent.street_address_fi || modalContent.street_address_sv + ", "
                    + modalContent.address_city_en || modalContent.address_city_fi + "::" +modalContent.latitude + "," + modalContent.longitude
                    + "?locale=en", "_blank")
        }  
    }

    return (
        <div style={modal}>
            <div style={blurBackground}  onClick={toggleModal}/>
            <div style={content} className='main-background-color'>
                {modalContent.picture_url ? 
                    <div style={img_holder}>
                        <ImageHolder images={modalContent.picture_url? [modalContent.picture_url] : [default_img]} names={[]}/>
                    </div> : <div/>}
                <div style={info}>
                    { weather === null? 'null' :
                        <div style = {weather_info}>
                            <div style = {{width: '30%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row',alignContent: 'flex-start'}}>
                                <img style = {weather_icon} src={weatherIcon} alt='icon'/>
                                <p style={weather_detail}>{weatherDescriptions[weather.current.weather[0].icon] && weatherDescriptions[weather.current.weather[0].icon][currentLang]}</p>
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
                        currentLang === 'SV' ? modalContent.name_sv || modalContent.name_fi || '' : 
                        (currentLang === 'EN' ? modalContent.name_en || modalContent.name_fi || '' : 
                        modalContent.name_fi || '')
                    }</p>
                    <p>{
                        currentLang === 'SV' ? modalContent.street_address_sv|| modalContent.street_address_fi || 'Tyvärr, vi har inte adress.' : 
                        (currentLang === 'EN' ? modalContent.street_address_en || modalContent.street_address_fi || 'No address.' : 
                    modalContent.street_address_fi || 'Osoitetta ei löytynyt')}<span>{', '}</span>
                        {currentLang === 'SV' ? modalContent.address_city_sv || modalContent.address_city_fi || 'Tyvärr, vi har inte en stad.' : 
                        (currentLang === 'EN' ? modalContent.address_city_en || modalContent.address_city_fi || modalContent.address_city_sv || 'No city.' : 
                        modalContent.address_city_fi || modalContent.address_city_sv || modalContent.address_city_en || 'Kaupunkia ei löytynyt')}<span>{', '}</span> 
                        {modalContent.address_zip && modalContent.address_zip
                    }</p>
                    <div className='scroll' style={detail_info}>
                        <p>
                            {currentLang === 'SV' ? 
                            modalContent.desc_sv || (modalContent.desc_en && 'Tyvärr, vi har inte beskrivning på svenska.\n' + modalContent.desc_en) || (modalContent.desc_fi && 'Tyvärr, vi har inte beskrivning på svenska.\n' + modalContent.desc_fi) || 'Tyvärr, vi har inte beskrivning om det här plats.' : 
                            (currentLang === 'EN' ? 
                            modalContent.desc_en || (modalContent.desc_fi && 'No descripton in English.\n' + modalContent.desc_fi) || (modalContent.desc_sv && 'No descripton in English.\n' + modalContent.desc_sv) || 'No description.' : 
                            modalContent.desc_fi || (modalContent.desc_en && 'Ei suomenkielistä kuvausta.\n' + modalContent.desc_en) || (modalContent.desc_sv && 'Ei suomenkielistä kuvausta.\n' + modalContent.desc_sv) || 'Paikasta ei löydy kuvausta.')}
                        </p>
                        <a style={link} href={modalContent.www_fi} target='_blank'>Link</a>
                    </div>
                </div>
                <button className='button' style={buttonStyle} onClick={openHSL}>
                    <img style={{width: '5rem', height: '2rem'}} src={hslLogo} alt={''}/>
                    {/*{buttonText[currentLang]}*/}
                </button> 
            </div>
        </div>
    );
}
export default DetailedInfoModal;

