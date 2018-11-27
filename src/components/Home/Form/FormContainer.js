import React, { Component } from 'react';

import EmailComponent from './FormComponent';


class FormContainer extends Component {
  render() {
    return (
      <div className="form">
      	<EmailComponent />
      </div>
    );
  }
}

export default FormContainer;
