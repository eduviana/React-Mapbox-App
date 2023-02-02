import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoicGlraW5rb2kiLCJhIjoiY2txYTBuYWRkMDM2MjJuc2hqdTl5MjN2OSJ9.W-5IfA5xA6ohWqDePU122A'
    }
})

export default searchApi;