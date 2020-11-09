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
        backgroundColor: 'rgba(0,0,0,0.9)',
        zIndex: '5',
        cursor: 'default',

    }
    const content = {
        margin: '10% auto',
        borderRadius: '0.5rem',
        width: '50vw',
        padding: '2rem',
        position: 'relative',
        zIndex: '6',
        height: '30rem'
    }
    const placeName = {
        fontSize: '30px',
    }
    const closeButton = () => (
        <button
            onClick={closeModal}
            className='button main-background-color'
            style={{
                padding: '10px',
                cursor: 'pointer',
                border: '0',
                position: 'absolute',
                top: '0.3rem',
                right: '0.5rem',
            }}
        >Close</button>
    );
    //TODO: Add functionality and styling to Find route button
    // TODO: Create styling for a photo to be displayed for each location
    return (
        <div style={modal}>
            <div style={content} className='secondary-background-color'>
                {closeButton()}
                
                <div style={{position:'absolute', width: '100%', height: '40%', left: '0', top: '0', borderRadius: '0.5rem 0.5rem 0 0', overflow: 'hidden'}}>
                    <ImageHolder images={location.picture_url? [location.picture_url] : [default_img]}/>
                </div>
                <div style={{position:'absolute', width: '100%', height: '60%', left: '0', bottom: '0', borderRadius: '0.5rem 0.5rem 0 0', overflow: 'scroll'}}>
                    <h1 style={placeName} onClick={console.log(location)}>{location.name_en || location.name_fi || location.name_sv}</h1>
                    <p>{location.street_address_fi}, {location.address_city_en}, {location.address_zip}</p>
                    <p>Information</p>
                    <p>{location.desc_fi || location.desc_sv}</p>
                    
                    <button className='button main-background-color-faded' onClick={() =>{
                        window.open("//reittiopas.hsl.fi/reitti/ /" + location.street_address_fi + ", "
                        + location.address_city_en + "::" +location.latitude + "," + location.longitude
                        + "?locale=en", "_blank")}}>
                            Find route
                    </button>
                </div>
                
                
            </div>
        </div>
    );
}
export default DetailedInfoModal;
