import React from 'react'

const Weather = (props) => {
    const weatherIcon = {
        Thunderstorm: 'wi-thunderstorm',
        Drizzle: 'wi-sleet',
        Rain: 'wi-rain',
        Snow: 'wi-snow',
        Atmosphare: "wi-fog",
        Clear: 'wi-day-sunny',
        Cloud: 'wi-cloud'
    }
    const calCelsius = (temp) => {
        const cel = Math.floor(temp - 273.15)
        return cel
    }
    const getIcon = (rangeId) => {
        switch (true) {
            case rangeId >= 200 && rangeId <= 232:
                return weatherIcon.Thunderstorm
                
            case rangeId >= 300 && rangeId <= 321:
                return weatherIcon.Drizzle
                
            case rangeId >= 500 && rangeId <= 531:
                return weatherIcon.Rain
                
            case rangeId >= 600 && rangeId <= 622:
                return weatherIcon.Snow
                
            case rangeId >= 701 && rangeId <= 781:
                return weatherIcon.Atmosphare
                
            case rangeId === 800:
                return weatherIcon.Clear
                
            case rangeId >= 801 && rangeId <= 804:
                return weatherIcon.Cloud
                
            default:
                return ''
                
        }

    }
    return (
        <div className='weather-container right'>
            <div >
                {props.error && <p>Error: {props.error}</p>}
                {props.city && props.country && <p>Location: {props.city},{props.country}</p>}
                {props.temprature && <p>Temprature: {calCelsius(props.temprature)}&deg;C</p>}
                {props.min_temp && <p>Min Temprature: {calCelsius(props.min_temp)}&deg;C </p>}
                {props.max_temp && <p>Max Temprature: {calCelsius(props.max_temp)}&deg;C </p>}
                {props.humidity && <p>Humidity: {props.humidity}</p>}
                {props.description && <p>Description: {props.description}</p>}
                <i className={`wi ${getIcon(props.rangeId)} display-4`}></i>

            </div>
        </div>
    )
}

export default Weather
