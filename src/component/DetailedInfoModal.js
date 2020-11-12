import React from 'react';
import ImageHolder from './ImageHolder';
import default_img from '../default-img/no-image.jpg';

import fall from '../default-img/melonta_kauppatori_Maija_Astikainen-3.jpg';
import spring from '../default-img/Lammassaari_island_Jussi+Hellsten.jpg';
import summer from '../default-img/Finland_Helsinki_Vallisaari_highres_byJuliaKivela_9868.jpg';
import winter from '../default-img/johanna_vilhunen_talvi_2013_4_2874.jpg';

// For showing the user more detailed info about a single place
// Accepts json format of information about the place that is then displayed

const DetailedInfoModal = ({location, closeModal}) => {

    //TODO: Add functionality and styling to Find route button
    // Styles for the page
    const modal = {
        position: 'fixed',
        display: 'block',
        overflow: 'auto',
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
        height: '30rem'
    }

    const placeName = {
        fontSize: '24px',
        marginTop: '16px',
        marginBottom: '16px'
    }

    const info = {
        display: 'block',
        position:'absolute',
        height: (location.picture_url? '49%': '79%'),
        left: '0', bottom: '14%',
        borderRadius: '0.5rem 0.5rem 0 0',
        overflow: 'hidden',
        padding: '1rem'
    }

    const detail_info = {
        width: '100%',
        height: '100%'
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

    return (
        <div style={modal}>
            <div style={blurBackground}  onClick={() => closeModal()}></div>
            <div style={content} className='main-background-color'>
                {location.picture_url ?
                    <div style={{position:'absolute', width: '100%', height: '30%', left: '0', top: '0', borderRadius: '0.5rem 0.5rem 0 0', overflow: 'hidden', marginBottom: '16px'}}>
                        <ImageHolder images={location.picture_url? [location.picture_url] : [default_img]}/>
                    </div> : null}

                <div style={info}>
                    <p style={placeName} onClick={console.log(location)}>{location.name_en || location.name_fi || location.name_sv}</p>
                    <p>{location.street_address_fi}, {location.address_city_en}, {location.address_zip}</p>
                    <p>Information</p>
                    <div className='scroll' style={detail_info}>
                        <p>
                            {location.desc_fi || location.desc_sv}
                        </p>
                    </div>

                </div>
                <button className='button secondary-background-color-faded' style={buttonStyle} onClick={() =>{
                    window.open("//reittiopas.hsl.fi/reitti/ /" + location.street_address_fi + ", "
                    + location.address_city_en + "::" +location.latitude + "," + location.longitude
                    + "?locale=en", "_blank")}}>
                        Find route
                </button>
            </div>
        </div>
    );
}
export default DetailedInfoModal;
