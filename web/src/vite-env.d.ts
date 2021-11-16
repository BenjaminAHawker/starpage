/// <reference types="vite/client" />

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module '*.json'

interface ImportMetaEnv {
    VITE_APP_WEATHER_API: string,
    VITE_APP_LOCATION_CODE:string,
}