import React from "react";
import './App.css'

import Weather from "./components/weather/Weather.jsx"
import Day from "./components/day/Day.jsx";
import Form from "./components/form/Form";
import axios from "axios";


const apiKey = 'ba8747d203dc7fd7311e05a92e588799'


class App extends React.Component {

    state = {
        // temp: undefined,
        // city: undefined,
        // sunrise: undefined,
        // sunset: undefined,
        // error: undefined
        list: []
    }


    gettingWeather = async (e) => {
        e.preventDefault()
        const city = e.target.elements.city.value

        if (city) {
            const apiUrl = await axios(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&appid=${apiKey}`)
            const data = apiUrl.data
            console.log(data)
            this.setState({list: data.list, country: data.city.name})
        }
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <Day/>
                <Form weatherMethod={this.gettingWeather}/>
                <h1>{this.state.country}</h1>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(5,1fr)',gap:'10px'}}>  {this.state.list.map(item => {
                    if (item.dt_txt.includes('12:00:00')) {
                    return    <Weather
                            key={item?.dt_txt}
                            time={item?.dt_txt}
                            temp={item?.main?.temp_kf}
                            weather={item.weather[0]?.description}
                            error={this.state.error}
                        />
                    }
                })}</div>
            </div>
        );
    }
}


export default App