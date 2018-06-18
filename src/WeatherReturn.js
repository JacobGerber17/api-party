import React, { Component } from 'react'

class WeatherReturn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      location: {}
    }

    this.fetchUserData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.zip !== this.props.match.params.zip) {
      this.fetchUserData()
    }
  }

  fetchUserData = () => {
    const { params } = this.props.match
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${params.zip}&APPID=7aba79cb7a3ebfa12d894c1d9b3cbd18`)
      .then(response => response.json())
      .then(location => this.setState({ location }))
  }

  render() {
    const { location } = this.state
    return (
      <div className="WeatherReturn">
        <h2>City: {location.name}</h2>
        {/* <ul>
            <li>Current Weather: {location.weather.main} ({location.weather.description})</li>
            <li>Current Temp: {location}</li>
            <li>Current Humidity: {location.main.humidity}%</li>
            <li>Wind Speed: {location.wind.speed}</li>
        </ul> */}
      </div>
    )
  }
}

export default WeatherReturn