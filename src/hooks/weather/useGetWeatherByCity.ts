import { useQuery } from '@tanstack/react-query'

const getWeatherByCityFn = async ( cityName: string ) => {
    const response = await fetch(
        `${import.meta.env.VITE_OPEN_WEATHER_API_BASE_URL}?q=${cityName}&appid=${
            import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY
        }`
    )
    const data = await response.json()
    return data
}

export const useGetWeatherByCity = ( cityName: string ) => {
    return useQuery( {
        queryKey: [ 'current-weather-by-city-name', cityName ],
        queryFn: () => getWeatherByCityFn( cityName ),
    } )
}
