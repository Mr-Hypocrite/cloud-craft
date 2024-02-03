import { IForeCastData, IWeatherData } from '@/types'
import { create } from 'zustand'

interface IWeatherStore {
    searchedCity: string | null
    currentWeatherData: IWeatherData | null
    setCurrentWeatherData: ( data: IWeatherData ) => void
    forecastData: IForeCastData | null
    setForecastWeatherData: ( data: IForeCastData ) => void
}

export const useWeatherStore = create<IWeatherStore>( ( set ) => ( {
    searchedCity: 'pune',
    currentWeatherData: null,
    setCurrentWeatherData: ( data ) => set( ( _state ) => ( { currentWeatherData: data } ) ),
    forecastData: null,
    setForecastWeatherData: ( data ) => set( ( _state ) => ( { forecastData: data } ) ),
} ) )
