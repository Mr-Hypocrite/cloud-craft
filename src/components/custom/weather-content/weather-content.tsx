import { CurrentWeather } from '../current-weather'

export const WeatherContent = () => {
    return (
        <div className="flex flex-col items-end h-4/5 rounded-3xl gap-8 overflow-hidden relative text-primary">
            <CurrentWeather />
        </div>
    )
}
