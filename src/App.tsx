import { Main } from '@/components'
import { useGetForecastByCoord, useGetWeatherByCity } from '@/hooks'
import { useEffect, useMemo } from 'react'
import { useWeatherStore } from './store'

export const App = () => {
    const city = useWeatherStore( ( { searchedCity } ) => searchedCity )
    const { data: currentWeatherData } = useGetWeatherByCity( city )
    const coord = useMemo( () => currentWeatherData.coord, [ currentWeatherData ] )
    const { data: forecastData } = useGetForecastByCoord( coord )
    const setCurrentWeatherData = useWeatherStore( ( state ) => state.setCurrentWeatherData )
    const setCurrentForecastData = useWeatherStore( ( state ) => state.setForecastWeatherData )

    useEffect( () => {
        if ( currentWeatherData ) {
            setCurrentWeatherData( currentWeatherData )
        }
        if ( forecastData ) {
            setCurrentForecastData( forecastData )
        }
    }, [ currentWeatherData, forecastData ] )

    return (
        <div className="bg-background p-2 w-screen h-screen flex flex-col gap-4">
            <Main />
        </div>
    )
}
