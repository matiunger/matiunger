import React from 'react';
import Gallery from "react-photo-gallery";
import Bungalow1 from '../../img/bungalow/bungalow1.jpg';
import Bungalow2 from '../../img/bungalow/bungalow2.jpg';
import Bungalow3 from '../../img/bungalow/bungalow3.jpg';
import Bungalow4 from '../../img/bungalow/bungalow4.jpg';
import Bungalow5 from '../../img/bungalow/bungalow5.jpg';
import Bungalow6 from '../../img/bungalow/bungalow6.jpg';
import Bungalow7 from '../../img/bungalow/bungalow7.jpg';
import Bungalow8 from '../../img/bungalow/bungalow8.jpg';


import './Paintings.css';

function Bungalow() {
    
    const photos = [
        {
            src: Bungalow1,
            width: 2000,
            height: 1500
        },
        {
            src: Bungalow8,
            width: 1330,
            height: 1036
        },
        {
            src: Bungalow2,
            width: 2000,
            height: 1500
        },
        {
            src: Bungalow3,
            width: 2000,
            height: 1332
        },
        {
            src: Bungalow4,
            width: 2000,
            height: 1332
        },
        {
            src: Bungalow5,
            width: 1332,
            height: 2000
        },
        {
            src: Bungalow6,
            width: 2000,
            height: 1332
        },
        {
            src: Bungalow7,
            width: 1332,
            height: 2000
        }
        
    ];
    return (
        <div className="photos">
            <p>Mural painting. Bungalow R49, Olympic Village, Munich</p>
            <Gallery photos={photos} direction={"column"} />
        </div>
    );
}

export default Bungalow;
