import axios from 'axios';

const API_KEY = 'ab9cb32a9f404d0a1512c21f1c549640';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?mode=json&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, ccode = 'us'){
    const url = `${ROOT_URL}&q=${city},${ccode}`;
    const request = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: request
    }
}