import { useWeatherStore } from '@/store'

export const CurrentWeather = () => {
    const weatherData = useWeatherStore( ( { currentWeatherData } ) => currentWeatherData )
    let date
    if ( weatherData?.dt ) {
        date = new Date( weatherData?.dt * 1000 ).toLocaleString( 'en-US' )
    }

    return (
        <div className="flex flex-col gap-2 bg-primaryContainer text-onPrimaryContainer w-full p-4 rounded-2xl">
            <span className="text--label--large">{date}</span>
            <div className="flex w-full justify-between">
                <div className="flex flex-col">
                    <h4 className="text--headline--small">{weatherData?.weather[ 0 ].main}</h4>
                    <h4 className="text--body--medium">{weatherData?.weather[ 0 ].description}</h4>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-moon"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                </svg>
            </div>
            <h1 className="text--display--large">{weatherData?.main.temp} &deg;C</h1>
            <h4 className="text--body--medium">Feels like {weatherData?.main.feels_like} &deg;C</h4>
        </div>
    )
}
