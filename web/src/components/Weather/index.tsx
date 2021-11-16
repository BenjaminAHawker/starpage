import React, { useEffect, useState } from 'react';
import { format } from 'd3-format';
import { getWeather } from '../../data/api/weather';
import { weatherData } from '../../data/types';
import { TempWrapper, WeatherContainer } from './weather.style';


interface props{};
const Weather:React.FC<props> = ({ 

}) => {

    const [weather,setWeather] = useState<weatherData | undefined>(undefined)

    useEffect(()=>{
      getWeather().then((res)=>{
        setWeather(res)
      });
    },[]);

    console.log(weather)

    return (
        <WeatherContainer>
            {weather && 
              <TempWrapper color={'red'}>
                {format('(.0f')(weather.main.temp_max)}
              </TempWrapper>
            }
        </WeatherContainer>
    )    

};

export default Weather;