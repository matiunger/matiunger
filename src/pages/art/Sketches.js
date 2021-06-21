import React from 'react';
import Gallery from "react-photo-gallery";
import Ale from '../../img/sketches/Ale.jpg';
import Alex from '../../img/sketches/Alex.jpg';
import Angel_Cappa from '../../img/sketches/Angel_Cappa.jpg';
import Falcioni from '../../img/sketches/Falcioni.jpg';
import Federer from '../../img/sketches/Federer.jpg';
import Hangling from '../../img/sketches/Hangling.jpg';
import Iggy_Pop from '../../img/sketches/Iggy_Pop.jpg';
import Ilse from '../../img/sketches/Ilse.jpg';
import Lanata from '../../img/sketches/Lanata.jpg';
import Maradona from '../../img/sketches/Maradona.jpg';
import Sonia from '../../img/sketches/Sonia.jpg';
import Steve_Jobs from '../../img/sketches/Steve_Jobs.jpg';

import './Paintings.css';

function Sketches() {

    const photos = [
        {
            src: Ale,
            width: 708,
            height: 1200
        },
        {
            src: Alex,
            width: 715,
            height: 1200
        },
        {
            src: Angel_Cappa,
            width: 852,
            height: 1200
        },
        {
            src: Falcioni,
            width: 849,
            height: 1200
        },
        {
            src: Federer,
            width: 666,
            height: 1000
        },
        {
            src: Hangling,
            width: 846,
            height: 1200
        },
        {
            src: Iggy_Pop,
            width: 744,
            height: 1200
        },
        {
            src: Ilse,
            width: 930,
            height: 1200
        },
        {
            src: Lanata,
            width: 883,
            height: 1200
        },
        {
            src: Maradona,
            width: 791,
            height: 1200
        },
        {
            src: Sonia,
            width: 666,
            height: 1000
        },
        {
            src: Steve_Jobs,
            width: 739,
            height: 1200
        }

    ];
    return (
        <div className="photos">
            <Gallery photos={photos} direction={"row"} targetRowHeight={400} />
        </div>
    );
}

export default Sketches;
