import React, { Component } from 'react'
import './App.css';
import Titles from './component/Titles';
import Form from './component/Form';
import Weather from './Weather';

const API_KEY="1fb18f6e74ecd8c496b6c556f59413e8"


export default class App extends Component {
  state={
    temprature:undefined,
    max_temp:undefined,
    min_temp:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined,
    icon_range:undefined
  }

   getWeather=(e)=>{
    e.preventDefault()
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    if(city&&country){
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`)
      .then((res)=>res.json())
      .then((data)=>{
        
          console.log(data)
          this.setState({
            temprature:data.main.temp,
            max_temp:data.main.temp_max,
            min_temp:data.main.temp_min,
            city:data.name,
            country:data.sys.country,
            humidity:data.main.humidity,
            description:data.weather[0].description,
            error:'',
            icon_range:data.weather[0].id
          })
      
      })
    }else{
      this.setState({
        temprature:undefined,
        max_temp:undefined,
        min_temp:undefined,
        city:undefined,
        country:undefined,
        humidity:undefined,
        description:undefined,
        icon_range:undefined,
        error:'Please Select City and Country'
    })
  }
   }

  render() {
    return (
      <div>
      <Titles/>
      <div className='flex'>
      <Form getWeather={this.getWeather}/>
        <Weather 
          temprature={this.state.temprature}
          max_temp={this.state.max_temp}
          min_temp={this.state.min_temp}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
          rangeId={this.state.icon_range}
        />

      </div>
       

       </div> 
        

    )
  }
}

