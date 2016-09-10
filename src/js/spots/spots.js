import moment from 'moment';
import spots from '../../resources/spots.json';

function parseMoment(timestamp) {
    return moment(timestamp, 'MM/DD/YYYY HH:mm:ss');
}

function formatMoment(timestamp) {
    return parseMoment(timestamp).format("dddd, MMMM Do YYYY, h:mm:ss a")
}

function getSortedSpots() {
    return spots.sort((a, b) => {
        const momentA = parseMoment(a.timestamp);
        const momentB = parseMoment(b.timestamp);

        if (momentA.isBefore(momentB)) {
            return -1;
        } else if (momentB.isBefore(momentA)) {
            return 1;
        }
        return 0;
    });
}

export function getMarkerConfig() {
    return getSortedSpots().map((spot) => {
        return {
            config: {
                position: {
                    lat: spot.latitude,
                    lng: spot.longitude,
                },
                showInfo: false
            },
            infoWindow: {
                content: `<div>${formatMoment(spot.timestamp)}</div><div>Message: ${spot.message}</div>`
            }
        }
    });
}

export function getPolylineConfig() {
    const spotPathCoordinates = getSortedSpots().map((spot) => {
        return {
            lat: spot.latitude,
            lng: spot.longitude,
        }
    });

    return {
        path: spotPathCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    };
}