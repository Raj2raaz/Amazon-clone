import axios from "axios";

const instance = axios.create({
    // The API (cloud function) URL
    baseURL: 'http://localhost:5001/clone-3047d/us-central1/api/'
});

export default instance;
