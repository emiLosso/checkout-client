import React, { Component } from 'react';

import FormComponent from './FormComponent';


class FormContainer extends Component {
  render() {
    return (
      <div className="form">
      	<FormComponent />
      </div>
    );
  }
}

export default FormContainer;
