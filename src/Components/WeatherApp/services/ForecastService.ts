import moment from "moment";
import "moment/locale/es";
import WeatherService from "./WeatherService";

const getForecastData = (data:any) => (
    data.list.filter((item :any)=> (
        moment.unix(item.dt).utc().hour() === 6 ||
        moment.unix(item.dt).utc().hour() === 12 ||
        moment.unix(item.dt).utc().hour() === 18  
    )).map((item:any) => ({
        weekDay: moment.unix(item.dt).format("ddd"),
        hour: moment.unix(item.dt).utc().hour(),
        data: new WeatherService().getData(item)
    }))
);

export default getForecastData;