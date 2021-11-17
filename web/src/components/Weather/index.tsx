import React, { useEffect, useState } from "react";
import { format } from "d3-format";
import { getWeather } from "../../data/api/weather";
import { weatherData } from "../../data/types";
import {
  TempContainer,
  Temp,
  WeatherContainer,
  Arrow,
  TempGroup,
  WeatherDescriptionGroup,
  City,
} from "./weather.style";

interface props {}
const Weather: React.FC<props> = ({}) => {
  const [weather, setWeather] = useState<weatherData | undefined>(undefined);

  useEffect(() => {
    getWeather().then((res) => {
      setWeather(res);
    });
  }, []);

  console.log(weather);

  const WeatherIcon = () => {
    let icon = <></>;

    const ThunderStorm: number[] = [
      200, 201, 202, 210, 211, 212, 221, 230, 231, 232,
    ];
    const Drizzle: number[] = [300, 301, 302, 310, 311, 312, 313, 314, 321];
    const Rain: number[] = [500, 501, 502, 503, 504, 511, 520, 521, 522, 531];
    const Snow: number[] = [
      600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622,
    ];
    const Mist: number[] = [701, 711, 721, 731, 741, 751, 761, 771];
    const Tornado: number[] = [781];
    const Clear: number[] = [800];

    if (ThunderStorm.includes(weather?.weather[0].id!)) {
      icon = <i className="fa-solid fa-bolt"></i>;
    } else if (Drizzle.includes(weather?.weather[0].id!)) {
      icon = <i className="fa-solid fa-cloud-rain"></i>;
    } else if (Rain.includes(weather?.weather[0].id!)) {
      icon = <i className="fa-solid fa-cloud-showers-heavy"></i>;
    } else if (Snow.includes(weather?.weather[0].id!)) {
      icon = <i className="fa-solid fa-snowflake"></i>;
    } else if (Mist.includes(weather?.weather[0].id!)) {
      icon = <i className="fa-solid fa-smog"></i>;
    } else if (Tornado.includes(weather?.weather[0].id!)) {
      icon = <i className="fa-solid fa-poo-storm"></i>;
    } else if (Clear.includes(weather?.weather[0].id!)) {
      icon = <i className="fa-solid fa-sun"></i>;
    }

    return icon;
  };

  return (
    <WeatherContainer>
      <TempGroup>
        <TempContainer>
          <Arrow>🡹</Arrow>
          <Temp color={"red"}>
            {format("(.0f")(weather?.main.temp_max || 0)}
          </Temp>
        </TempContainer>
        <TempContainer>
          <Arrow>🡻</Arrow>
          <Temp color={"blue"}>
            {format("(.0f")(weather?.main.temp_min || 0)}
          </Temp>
        </TempContainer>
      </TempGroup>

      <WeatherDescriptionGroup>
        <City>{weather?.name || ""}</City>
        <WeatherIcon />
      </WeatherDescriptionGroup>
    </WeatherContainer>
  );
};

export default Weather;
