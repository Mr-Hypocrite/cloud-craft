import { Mainmenu } from '@/components'
import { useGetForecastByCoord, useGetWeatherByCity } from '@/hooks'
import { useEffect, useMemo, useState } from 'react'

export const App = () => {
    const [ city, _setCity ] = useState( 'pune' )
    const { data: currentWeatherData } = useGetWeatherByCity( 'pune' )
    const coord = useMemo( () => currentWeatherData.coord, [ currentWeatherData ] )
    const { data: forecastData } = useGetForecastByCoord( coord )

    return (
        <div className="bg-background p-2 w-screen h-screen flex flex-col gap-4">
            <Mainmenu />
            <div className="bg-slate-300 w-full max-h-32 h-1/5 rounded-3xl"></div>
        </div>
    )
}
