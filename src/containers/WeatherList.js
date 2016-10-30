import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMapPicture from '../components/GoogleMap';

class WeatherList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderWeather(cityData){
        const cname = cityData.city.name;
        const temperatures = cityData.list.map((weather) => {
            return weather.main.temp-273;
        });
        const pressures = cityData.list.map((weather) => {
            return weather.main.pressure;
        });
        const humidities = cityData.list.map((weather) => {
            return weather.main.humidity;
        });
        const {lat, lon} = cityData.city.coord;

        return (
            <tr key={cname}>
                <td>
                    <GoogleMapPicture lat={lat} lon={lon} />
                </td>
                <td>
                    <Chart data={temperatures} color="orange" units="º"/>
                </td>
                <td>
                    <Chart data={pressures} color="green" units="hPa"/>
                </td>
                <td>
                    <Chart data={humidities} color="block" units="%"/>
                </td>
            </tr>
        );
    }

    render() {
        return (
           <table className="table table-hover">
               <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (º)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
               </thead>
               <tbody>
                    {this.props.weather.map(this.renderWeather)}
               </tbody>
           </table>
        );
    }
}

function mapStateToProps(state) {
    return {weather: state.weather};
}

export default connect(mapStateToProps)(WeatherList);