import React from "react";
import PropTypes from "prop-types";
import WeatherData from "./../WeatherLocation/WeatherData"

const ForecastItem = ({weekDay, hour, data}) => (
    <div>
        <h3>{weekDay} - {hour}:00 hrs</h3>
        <WeatherData data={data}></WeatherData>
    </div>
);


ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    })
}

export default ForecastItem;