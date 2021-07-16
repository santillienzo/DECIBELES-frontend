import React from 'react';
import GoogleMaps from 'simple-react-google-maps';

import crendentials from '../../config/credentials'
let key = crendentials.mapskey;

const Map = () => {
    return (
        <GoogleMaps
            apiKey={key}
            style={{
                display: "inline-block",
                position: "",
                height: "450px",
                width:"100%"
                }}
            zoom={18}
            center={{
                lat: -33.088775225299784,
                lng: -68.4758350089905
            }}
            markers={[
                {
                    lat: -33.088775225299784,
                    lng: -68.4758350089905
                }
            ]}
        />
    );
};

export default Map;