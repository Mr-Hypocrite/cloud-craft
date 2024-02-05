import { useWeatherStore } from '@/store'
import { Card } from '../card'

const DateTime = () => {
    const weatherData = useWeatherStore( ( { currentWeatherData } ) => currentWeatherData )
    if ( weatherData ) {
        const date = new Date( weatherData?.dt * 1000 ).toLocaleString( 'en-US' )
        return <div className="absolute text-primary left-4 top-4">{date}</div>
    }
}

export const Main = () => {
    const weatherData = useWeatherStore( ( { currentWeatherData } ) => currentWeatherData )

    console.log( weatherData )

    return (
        <div className="flex flex-col items-end justify-center h-4/5 p-4 rounded-3xl gap-8 overflow-hidden relative text-primary">
            <DateTime />
            <div className="text-right mt-10">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{weatherData?.weather[ 0 ].main}</h4>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    {weatherData?.weather[ 0 ].description}
                </h4>
                <h1 className="scroll-m-20 text-7xl font-extrabold tracking-tight lg:text-8xl">
                    {weatherData?.main.temp} &deg;C
                </h1>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Feels like {weatherData?.main.feels_like} &deg;C
                </h4>
            </div>
            <div className="flex gap-6 justify-center w-full overflow-x-auto">
                <Card>
                    <h6>Wind</h6>
                    <h6>{weatherData?.wind.speed} m/s</h6>
                </Card>
                <Card>
                    <h6>Visibility</h6>
                    <h6>{weatherData?.visibility} m</h6>
                </Card>
                <Card>
                    <h6>Humidity</h6>
                    <h6>{weatherData?.main?.humidity}%</h6>
                </Card>
                <Card>
                    <h6>Pressure</h6>
                    <h6>{weatherData?.main?.pressure} hPa</h6>
                </Card>
            </div>
        </div>
    )
}
