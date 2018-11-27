import React, { Component } from 'react';

var ReactLoader = require('react-loaders').Loader;


class Loader extends Component {
  render() {

    return (
    	<div className="--centered p-l-8 p-t-8 mx-auto">
      		<ReactLoader type="line-scale-pulse-out-rapid" color="#68B3D9" active/>
      	</div>
    )
  }
}

export default Loader;
