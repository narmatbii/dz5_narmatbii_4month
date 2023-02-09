import React, {Component} from 'react';
import Background from '../../assets/ImagesWeather.jpeg'

class Weather extends Component {
    render() {
        return (
            <div style={{background:`url(${Background}) no-repeat center/cover`,color:'black',borderRadius:'8px'}}>
                <h5>time: {this.props.time}</h5>
                <h5>weather: {this.props.weather}</h5>
                <h5>temp: {this.props.temp} °C</h5>
            </div>
        );
    }
}

export default Weather;