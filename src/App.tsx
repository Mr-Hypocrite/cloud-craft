import { Tabs, TabsContent, TabsList, TabsTrigger, WeatherContent } from '@/components'
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
        <Tabs defaultValue="weather" className="bg-background p-2 w-screen h-screen flex flex-col">
            <TabsContent value="weather" className="grow overflow-scroll invisible-scrollbar">
                <WeatherContent />
            </TabsContent>
            <TabsContent value="settings" className="grow overflow-scroll"></TabsContent>
            <TabsContent value="bookmarks" className="grow overflow-scroll"></TabsContent>
            <TabsList className="w-full justify-between px-4 py-6">
                <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
                <TabsTrigger value="weather">Weather</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
        </Tabs>
    )
}
