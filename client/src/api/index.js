
const END_POINTS = require("./end-points.json");

export default async function apiCall(endPointKey, method, body) {
    const BASE_URL = "http://localhost:8000";
    console.log('fetch - I am coming');
    const fetchOptions = {
        method: "GET",
        'Content-Type': "application/json"
    };
    if (method === 'POST') {
        fetchOptions.method = method;
        fetchOptions.body = JSON.stringify(body);
    }
    const response = await fetch(BASE_URL + END_POINTS[endPointKey], fetchOptions).then((res) => res.json());
    console.log('fetch response', response);
    return response;
}