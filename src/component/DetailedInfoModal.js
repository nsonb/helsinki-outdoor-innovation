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
        return (
                <div style={modal}>
                    <div style={content}>
                        { closeButton() }
                        <h1 style={placeName}>{location.name_en || location.name_fi || location.name_sv}</h1>
                        <img src={""} alt={"empty pic"}/>
                        <p>Description</p>
                        <p>Information</p>
                        <button onClick={() => console.log("route")}>Find route</button>
                    </div>
                </div>
        );
    }
export default DetailedInfoModal;
