import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/weatherAction';

import Forecast from './forecast';

class Weather extends Component {
  componentDidMount() {
    this.props.fetchWeather(this.props.city);
  }

  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city) {
      this.props.fetchWeather(this.props.city);
    }
  }

  render() {
    return (
      <div className="weatherContainer">
        <p className="intro">
          {this.props.weather === 'City not found' && 'City not found'}
          {this.props.weather !== 'City not found' && `Weather forecast for: ${this.props.city}`}
        </p>
        {this.props.weather !== 'City not found' && this.props.weather.length > 0 && <Forecast />}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  city: state.city.selected,
  weather: state.weather.weatherInfo,
});

export default connect(mapStateToProps, { fetchWeather })(Weather);
