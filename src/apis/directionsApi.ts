import axios from "axios";

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoicGlraW5rb2kiLCJhIjoiY2txYTBuYWRkMDM2MjJuc2hqdTl5MjN2OSJ9.W-5IfA5xA6ohWqDePU122A'
    }
})

export default directionsApi;