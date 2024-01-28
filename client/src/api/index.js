
const END_POINTS = require("./end-points.json");

export default async function apiCall(endPointKey) {
    const BASE_URL = "http://localhost:8000";
    console.log('fetch - I am coming');
    const response = await fetch(BASE_URL + END_POINTS[endPointKey], {
        method: "GET",
    }).then((res) => res.json());
    console.log('fetch response', response);
    return response;
}