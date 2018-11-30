import React, { Component } from 'react';
import PubSub from 'pubsub-js';

import FetchUtil from '../../../libs/utils/FetchUtil.js';
import Constants from '../../../constants.js';

class FormComponent extends Component {

  constructor(props) {
	super(props);

	this.state = {
		email: "",
		address: "",
		amount: "",
	}

	this.handleInputChange = this.handleInputChange.bind(this);
	this.url = Constants.apiUrls.process_checkout()
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  canSend() {
  	return this.state.email !== "" && this.state.address !== "" && this.state.amount !== "";
  }


  submitForm() {
  	  	FetchUtil.post(this.url, {
  	  		amount: this.state.amount,
            address: this.state.address,
  	  		email: this.state.email
  	  	})
		.then(res =>  {
			console.log("res", res)
			if (res) return alert("An email has been sent to your account - " + res['email']);
			return alert("error");
		});
  }

  render() {
    return (
      <div className="checkout__email">
      	<div className="checkout__email__form">
	      	<div className="checkout__email__form__title">
	      		Send Ethereum
	      	</div>

	      	<div className="checkout__email__form__container">
		      	<div className="checkout__email__form__group">
		      		<label className="checkout__email__form__label" htmlFor="fullname"> Amount </label>
		      		<input className="checkout__email__form__input" type="text" name="amount" 
		      			   onChange={this.handleInputChange} value={this.state.amount}
		      		/>
		      	</div>

		      	<div className="checkout__email__form__group">
		      		<label className="checkout__email__form__label" htmlFor="email"> Email </label>
		      		<input className="checkout__email__form__input" type="email" name="email" 
		      			   onChange={this.handleInputChange} value={this.state.email}
		      		/> 
		      	</div>

		      	<div className="checkout__email__form__group--full">
		      		<label className="checkout__email__form__label" htmlFor="message"> Address </label>
		      		<input className="checkout__email__form__input--full" type="text" name="address" 
		      				  onChange={this.handleInputChange} value={this.state.address}
		      		/>
		      	</div>

		      	<button className="checkout__email__btn" disabled={!this.canSend()} onClick={e => this.submitForm()}>
		      		<span className="btn__title"> SEND </span>
		      	</button>
	      	</div>
      	</div>
      </div>
    );
  }
}

export default FormComponent;
