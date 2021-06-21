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
import Purmamarca from '../../img/paintings/Purmamarca.jpg';
import Sea from '../../img/paintings/Sea.jpg';
import Tucan from '../../img/paintings/Tucan.jpg';

import Caballo from '../../img/paintings/caballo.png';
import Camaleon from '../../img/paintings/camaleon.png';
import Perito from '../../img/paintings/peritomoreno.png';
import Leon from '../../img/paintings/leon.png';
import Calm2 from '../../img/paintings/olascalm2.png';
import Selva from '../../img/paintings/selva.png';
import Tigre from '../../img/paintings/tigre.png';
import Wave from '../../img/paintings/wave.png';

import './Paintings.css';

function Paitings() {

    const photos = [

        {
            src: Caballo,
            width: 1200,
            height: 1600
        },
        {
            src: Camaleon,
            width: 1200,
            height: 964
        },
        {
            src: Perito,
            width: 1500,
            height: 804
        },
        {
            src: Leon,
            width: 1200,
            height: 1200
        },
        {
            src: Calm2,
            width: 1000,
            height: 1486
        },
        {
            src: Selva,
            width: 945,
            height: 1200
        },
        {
            src: Tigre,
            width: 1200,
            height: 793
        },
        {
            src: Wave,
            width: 864,
            height: 1200
        },
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
        },
        {
            src: Glaciar,
            width: 1000,
            height: 563
        },
        {
            src: Ice,
            width: 1000,
            height: 716
        },
        {
            src: Papagayo,
            width: 1000,
            height: 790
        },
        {
            src: Playa,
            width: 1000,
            height: 806
        },
        {
            src: Purmamarca,
            width: 1000,
            height: 799
        },
        {
            src: Sea,
            width: 1200,
            height: 691
        },
        {
            src: Tucan,
            width: 1000,
            height: 785
        }

    ];
    return (
        <div className="photos">
            <Gallery photos={photos} direction={"column"} />
        </div>
    );
}

export default Paitings;
