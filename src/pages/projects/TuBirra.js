import React from 'react';
import Gallery from "react-photo-gallery";
import TuBirra1 from '../../img/tubirra/tubirra1.png';
import TuBirra2 from '../../img/tubirra/tubirra2.png';
import TuBirra3 from '../../img/tubirra/tubirra3.png';
import TuBirra4 from '../../img/tubirra/tubirra4.png';
import TuBirra5 from '../../img/tubirra/tubirra5.png';


import './Project.css';


function TuBirra() {

    const photos = [
        {
            src: TuBirra1,
            width: 925,
            height: 489
        },
        {
            src: TuBirra3,
            width: 982,
            height: 527
        },
        {
            src: TuBirra4,
            width: 982,
            height: 527
        },
        {
            src: TuBirra5,
            width: 925,
            height: 527
        },
        {
            src: TuBirra2,
            width: 549,
            height: 737
        },

    ];
    return (
        <div className="photos">
            <p>tubirra.com recommends the best styles of beer for your taste</p>
            <p><a href="http://www.tubirra.com" target="_blank">http://www.tubirra.com</a></p>
            <Gallery photos={photos} direction={"row"} targetRowHeight={300} />
        </div>
    );
}

export default TuBirra;
