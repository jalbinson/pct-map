require('../styles/main.css');

import React from 'react';
import ReactDOM from 'react-dom';
import SimpleMap from './maps/googleMaps.js';
import {
    getMarkerConfig,
    getPolylineConfig
} from './spots/spots.js';

class Main extends React.Component {

    render() {
        return (
            <div style={{height: '100vh'}}>
                <SimpleMap
                    markers={getMarkerConfig()}
                    polyline={getPolylineConfig()}
                />
            </div>
        );
    }

}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);