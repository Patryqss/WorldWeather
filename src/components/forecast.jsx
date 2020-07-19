import React, { Component } from 'react';
import { connect } from 'react-redux';

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = { activeDay: 0 };

    this.handleLefttArrow = this.handleLefttArrow.bind(this);
    this.handleRightArrow = this.handleRightArrow.bind(this);
  }

  handleLefttArrow() {
    if (this.state.activeDay > 0)
      this.setState((prevState) => {
        return { activeDay: prevState.activeDay - 1 };
      });
  }

  handleRightArrow() {
    if (this.state.activeDay < 4)
      this.setState((prevState) => {
        return { activeDay: prevState.activeDay + 1 };
      });
  }

  render() {
    let x = this.props.weather[this.state.activeDay];
    return (
      <div className="forecast">
        <div key={x.date} className="forecastDayGroup">
          <img
            src="https://i.imgur.com/c8SBkHE.png"
            className="arrow leftarrow"
            alt="leftArrow"
            onClick={this.handleLefttArrow}
          />
          <p className="forecastInfo date">{x.date}</p>
          <img
            src="https://i.imgur.com/eTnXtBr.png"
            className="arrow rightarrow"
            alt="rightArrow"
            onClick={this.handleRightArrow}
          />
          <div className="firstGroup">
            <p className="forecastInfo fMain fType">Temperature:</p>
            <p className="forecastInfo fData">{x.meanTemp}°C</p>
            <p className="forecastInfo fData">{x.morningTemp !== 'none' ? x.morningTemp + '°C' : '-'}</p>
            <p className="forecastInfo fData">{x.dayTemp !== 'none' ? x.dayTemp + '°C' : '-'}</p>
            <p className="forecastInfo fData">{x.nightTemp !== 'none' ? x.nightTemp + '°C' : '-'}</p>
            <p className="forecastInfo fData">{x.minTemp}°C</p>
            <p className="forecastInfo fData">{x.maxTemp}°C</p>
            <p className="forecastInfo fType">Mean</p>
            <p className="forecastInfo fType">6 AM</p>
            <p className="forecastInfo fType">3 PM</p>
            <p className="forecastInfo fType">9 PM</p>
            <p className="forecastInfo fType">Min</p>
            <p className="forecastInfo fType">Max</p>
          </div>
          <div className="secondGroup">
            <p className="forecastInfo fType fHum">Humidity: </p>
            <p className="forecastInfo fData fHum">{x.humidity}%</p>
            <p className="forecastInfo fType fSky">Sky: </p>
            <p className="forecastInfo fData fSky">{x.sky}</p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  weather: state.weather.weatherInfo,
});

export default connect(mapStateToProps)(Forecast);
