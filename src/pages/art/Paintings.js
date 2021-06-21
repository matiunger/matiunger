import React from 'react';
import Gallery from "react-photo-gallery";
import Amarnecer from '../../img/paintings/Amarnecer.jpg';
import Calm from '../../img/paintings/Calm.jpg';
import CrazyEyes from '../../img/paintings/Crazy_eyes.jpg';
import Flowers from '../../img/paintings/Flowers.jpg';
import Fruits from '../../img/paintings/Fruits.jpg';
import Glaciar from '../../img/paintings/Glaciar.jpg';
import Ice from '../../img/paintings/Ice.jpg';
import Papagayo from '../../img/paintings/Papagayo.jpg';
import Playa from '../../img/paintings/Playa.jpg';




import './Paintings.css';

function Paitings() {

    const requestImageFile = require.context('', true);


    const photos = [
        {
            src: Amarnecer,
            width: 1000,
            height: 759
        },
        {
            src: Calm,
            width: 791,
            height: 1000
        },
        {
            src: CrazyEyes,
            width: 1000,
            height: 797
        },
        {
            src: Flowers,
            width: 1000,
            height: 808
        },
        {
            src: Fruits,
            width: 1000,
            height: 813
        }
    ];
    return (
        <div className="paintings">
            <Gallery photos={photos} direction={"column"} />
        </div>
    );
}

export default Paitings;
