import '../styles/main.scss';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import SimpleMap from './components/maps/simpleMap.js';
import Legend from './components/legend/legend.js';
import {
    getMarkerConfig,
    getPolylineConfig
} from './spots/spots.js';

class Main extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-sm-8">
                    <SimpleMap
                        markers={getMarkerConfig()}
                        polyline={getPolylineConfig()}
                    />
                </div>
                <div className="col-sm-4">
                    <Legend />
                </div>
            </div>
        );
    }

}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);