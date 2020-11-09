import React from 'react';

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
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: '999',
        cursor: 'default',

    }
    const content = {
        margin: '15% auto',
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        width: '50vw',
        padding: '2rem',
        position: 'relative',
    }
    const placeName = {
        fontSize: '30px',
    }
    const closeButton = () => (
        <button
            onClick={closeModal}
            style={{
                color: '#000000',
                padding: '10px',
                cursor: 'pointer',
                backgroundColor: 'transparent',
                border: '0',
                position: 'absolute',
                top: '0.3rem',
                right: '0.5rem',
            }}
        >Close</button>
    );
    const findRoute = {

    }
    //TODO: Add styling to Find route button
    // TODO: Create styling for a photo to be displayed for each location
    return (
        <div style={modal}>
            <div style={content}>
                {closeButton()}
                <h1 style={placeName} onClick={console.log(location)}>{location.name_en || location.name_fi || location.name_sv}</h1>
                <p>{location.street_address_fi}, {location.address_city_en}, {location.address_zip}</p>
                <img src={""} alt={""}/>
                <p>{location.desc_fi || location.desc_sv}</p>
                <p>Information</p>
                <button style={findRoute} onClick={() =>{
                    window.open("//reittiopas.hsl.fi/reitti/ /" + location.street_address_fi + ", "
                    + location.address_city_en + "::" +location.latitude + "," + location.longitude
                    + "?locale=en", "_blank")}}>Find route</button>
            </div>
        </div>
    );
}
export default DetailedInfoModal;
