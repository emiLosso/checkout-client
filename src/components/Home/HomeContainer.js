import React, { Component } from 'react';

import FormContainer from './Form/FormContainer';


class HomeContainer extends Component {

  constructor(props) {
	super(props);
  }

  render() {
    return (
      <div className="home">
  		<FormContainer 
  			amount= {this.props.match.params.amount}
  			currency= {this.props.match.params.currency}
  			address= {this.props.match.params.address}
  		/>
      </div>
    );
  }
}

export default HomeContainer;
