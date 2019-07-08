import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ConfirmRouteContainer from '../containers/confirmRouteContainer';
import ResultsContainer from './containers/sesultsContainer';
import SearchContainer from './containers/searchContainer';
import Background from './images/Background.jpg'
import { getMapboxKey } from './actions/mapboxActions'
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getMapboxKey()
  }

  render() {
  return (
    <div style ={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '125vw',
      height: '125vh',
      backgroundImage: `url(${Background})`
      }} className="App">
        <Router>
          <div>
          <Route exact path="/" component ={SearchContainer}/>
          <Route exact path="/confirm_route" component={ConfirmRouteContainer}/>
          <Route exact path="/results" component={ResultsContainer}/>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {statrtingLocation: state.StartingLocation, destination: state.destination}
}

const mapDispatchToProps = (dispatch) => {
  return {getMapboxKey: () => dispatch(getMapboxKey())}
}

export default connect(mapStateToProps, mapDispatchToProps) (App);