import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { simpleAction } from '../actions/simpleAction';

class Home extends Component {


    simpleAction = (e) => {
      e.preventDefault();
        this.props.simpleAction();
       }
  render() {
    
    return (
      <React.Fragment>
        <h1>
        home page
        </h1>
        <button onClick={this.simpleAction}>Test redux action</button>
        <h1> {this.props.result}</h1>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  simpleAction: PropTypes.func.isRequired,
   result:PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  result: state.simple.result
});



const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })


export default connect(
  //null,
     mapStateToProps,
  mapDispatchToProps
 // {simpleAction}

)(Home);

// export default connect(
//     //mapStateToProps,
//     null,  here not need maptStateToProps so send null
//   //mapDispatchToProps
//   { simpleAction }   we can also directly send dispacth action that will available in props
// )(Home);