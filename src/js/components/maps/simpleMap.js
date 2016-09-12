import React from 'react';
import {
    GoogleMapLoader,
    GoogleMap,
    Marker,
    Polyline,
    InfoWindow
} from 'react-google-maps';

export default class SimpleMap extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            markers: props.markers,
            polyline: props.polyline,
            center: {
                lat: 41.34286,
                lng: -122.96147
            }
        };
    }

    markerClick(marker) {
        marker.config.showInfo = true;
        this.setState(this.state);
    }

    markerClose(marker) {
        marker.config.showInfo = false;
        this.setState(this.state);
    }

    renderInfoWindow(ref, marker) {
        return (
            <InfoWindow
                {...marker.infoWindow}
                key={`${ref}_info_window`}
                onCloseclick={this.markerClose.bind(this, marker)}
            />
        );
    }

    render() {
        return (
            <section style={{height: "100%"}}>
                <GoogleMapLoader
                    containerElement={
                        <div
                            style={{
                                height: "100%",
                            }}
                        />
                    }
                    googleMapElement={
                        <GoogleMap defaultZoom={5} defaultCenter={this.state.center}>
                            {this.state.markers.map((marker, index) => {
                                const ref = `marker_${index}`;
                                return (
                                    <Marker
                                        {...marker.config}
                                        key={index}
                                        ref={ref}
                                        onClick={this.markerClick.bind(this, marker)}
                                    >
                                        {marker.config.showInfo ? this.renderInfoWindow(ref, marker) : null}
                                    </Marker>
                                )
                            })}

                            <Polyline
                                {...this.state.polyline}
                            />
                        </GoogleMap>
                    }
                />
            </section>
        );
    }
}