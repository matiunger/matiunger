import React from 'react';
import Gallery from "react-photo-gallery";
import Timetab1 from '../../img/timetab/screenshot1.jpeg';
import Timetab2 from '../../img/timetab/screenshot2.jpeg';
import Timetab3 from '../../img/timetab/screenshot3.jpeg';
import Timetab4 from '../../img/timetab/months_columns.png';

import Button from '@material-ui/core/Button';

import './Project.css';


function Timetab() {

    const photos = [
        {
            src: Timetab1,
            width: 1280,
            height: 800
        },
        {
            src: Timetab2,
            width: 1280,
            height: 800
        },
        {
            src: Timetab3,
            width: 1280,
            height: 800
        },
        {
            src: Timetab4,
            width: 1280,
            height: 800
        }
    ];
    return (
        <div className="photos">
            <p>A beautiful new tab page to take control of your time.</p>
            <ul>
                <li>Displays the time, sunrise, sunset and moon phase</li>
                <li>Easy timer creation</li>
                <li>Changing backgrounds according to the time</li>
                <li>Different themes and dark mode</li>
                <li>Day in 10 min blocks view</li>
                <li>Year progress view</li>
                <li>Months columns view</li>
                <li>Life calendar view</li>
                <li>Multi-language: english, spanish and german</li>
            </ul>
            <p>
                <Button variant="contained" color="primary" href="https://chrome.google.com/webstore/detail/timetab/liobdfgkcgpgfeoemlcoelichpjpbkhe" target="_blank" disableElevation>
                    Download extension
                </Button>
            </p>
            <Gallery photos={photos} direction={"row"} targetRowHeight={300} />
        </div>
    );
}

export default Timetab;
