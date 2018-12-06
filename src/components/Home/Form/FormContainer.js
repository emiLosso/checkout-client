import React, { Component } from 'react';

import FormComponent from './FormComponent';


class FormContainer extends Component {

  constructor(props) {
	super(props);
  }

  render() {
    return (
      <div className="form">
      	<FormComponent 
  			amount= {this.props.amount}
  			currency= {this.props.currency}
  			address= {this.props.address}
      	/>
      </div>
    );
  }
}

export default FormContainer;
