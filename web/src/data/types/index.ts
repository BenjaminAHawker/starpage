export type weather = {
    id:number,main:string,description:string,icon:string
}
export type weatherData = {
    base: string,
    clouds : {
        all:number
    },
    coord:{
        lon:number,
        lat:number,
    },
    dt:number,
    id:number,
    main:{
        feels_like:number,
        grnd_level:number,
        humidity:number,
        pressure:number,
        sea_level:number,
        temp:number,
        temp_max:number,
        temp_min:number
    },
    name:string,
    sys:{
        country: string,
        id: number,
        sunrise: number,
        sunset: number,
        type: number
    },
    timezone: number,
    visibility: number
    weather:weather[],
    wind:{
        deg:number,
        gust:number,
        speed:number
    }
}