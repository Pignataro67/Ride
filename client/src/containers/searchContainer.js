import React, { Component } from 'react';
import Search from '../components/search/Search';
import Cardlabel from '../components/CardLabel';
import Card from '../components/Card';
import * as searchActions from '../actions/fetchLocations';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SearchContainer extends Component {

  render() {
    let cardLabel = "Enter your trip locations below:"
  return (
    <Card>
      <CardLabel cardLabel={cardLabel}/>
      <Search {...this.props}/>
    </Card>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = (dispatch) => {
  return {...bindActionCreators(searchActions, dispatch)}
}
 
export default connect(mapStateToProps, mapDispatchToProps, (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps, 
    actions: dispatchProps, 
    router: ownProps,
  };
})(SearchContainer);