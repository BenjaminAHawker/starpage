import axios from 'axios';
import { weatherData } from '../../types';

export const getWeather = async () => {
    const apiKey = import.meta.env.VITE_APP_WEATHER_API;
    const locationCode = import.meta.env.VITE_APP_LOCATION_CODE;

    const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather`,{params:{id:locationCode,appid:apiKey,units:'imperial'}})

    return weather.data as weatherData
};