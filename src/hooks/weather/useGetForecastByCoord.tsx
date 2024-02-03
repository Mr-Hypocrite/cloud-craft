import { IForeCastData } from '@/types'
import { useQuery } from '@tanstack/react-query'

type GetWeatherForecastCoordParams = {
    lat: number
    lon: number
}

const getForecastByCoordFn = async ( { lat, lon }: GetWeatherForecastCoordParams ) => {
    if ( lat && lon ) {
        const response = await fetch(
            `${import.meta.env.VITE_OPEN_WEATHER_API_BASE_URL}forecast?lat=${lat}&lon=${lon}&units=metric&appid=${
                import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY
            }`
        )
        const data = await response.json()
        return data
    }
    return null
}

export const useGetForecastByCoord = ( { lat, lon }: GetWeatherForecastCoordParams ) => {
    return useQuery<IForeCastData>( {
        queryKey: [ 'forecast-by-city-lat-lon', lat, lon ],
        queryFn: () => getForecastByCoordFn( { lat, lon } ),
    } )
}
