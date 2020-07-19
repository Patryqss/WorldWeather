import React, { Component } from 'react';
import './styles/App.css';
import { connect } from 'react-redux';

import { updateCity } from './actions/cityActions';
import { getUserLocation } from './utils/userLocation';
import Weather from './components/weather';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  componentDidMount() {
    getUserLocation()
      .then((data) => {
        this.props.updateCity(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getInputText(e) {
    this.setState({ term: e.target.value });
  }

  sendCity(e) {
    e.preventDefault();
    this.props.updateCity(this.state.term);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="logo">World Weather</h1>
          <form onSubmit={(e) => this.sendCity(e)}>
            <label htmlFor="city">Enter the city you want to check: </label>
            <input type="text" name="city" placeholder="City" onChange={(e) => this.getInputText(e)} />
            <input className="button" type="submit" value="Send" />
          </form>
          {this.props.city && <Weather />}
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  city: state.city.selected,
});

export default connect(mapStateToProps, { updateCity })(App);
