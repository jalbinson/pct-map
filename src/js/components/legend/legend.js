import React from 'react';
import redDot from '../../../images/red-dot.png';
import blueDot from '../../../images/blue-dot.png'

export default class Legend extends React.Component {


    render() {
        return (
            <div className="legend-container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="text-center">
                            <h2>To Have and To Hike</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <p>
                            Jenny and Justin's thru-hike of the Pacific Crest Trail has inspired us all and I wanted to
                            show people just how far they actually travelled. Each marker on the map is a GPS location
                            of a campsite they spent the night at.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="text-center">
                            <h3>Legend</h3>
                        </div>
                    </div>
                </div>
                <div className="row legend-row">
                    <div className="col-sm-1">
                        <img src={redDot} />
                    </div>
                    <div className="col-sm-11 legend-text">
                        These markers have blog posts associated with them.
                    </div>
                </div>
                <div className="row legend-row">
                    <div className="col-sm-1">
                        <img src={blueDot} />
                    </div>
                    <div className="col-sm-11 legend-text">
                        These markers do not have blog posts associated with them.
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-container">
                        Jamie Albinson - <a href="mailto:jcalbinson@gmail.com" target="_top">email</a> - <a href="https://github.com/jalbinson/pct-map" target="_blank">github</a>
                    </div>
                </div>
            </div>
        )
    }
}