import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Weather.css'
import WeatherReturn from './WeatherReturn'

class Weather extends Component {
  state = {
    zip: '',
  }

  handleChange = (ev) => {
    this.setState({ zip: ev.target.value })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/weather/${this.state.zip}`)
  }

  render() {
    return (
      <div className="Weather">
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text" 
              pattern="[0-9]{5}"
              value={this.state.zip}
              onChange={this.handleChange}
              placeholder="Enter Five Digit Zip Code"
              
            />
          </div>
          <div>
            <button type="submit">
              Look Up Weather
            </button>
          </div>
        </form>

        <Route path="/weather/:zip" component={WeatherReturn} />
      </div>
    )
  }
}

export default Weather