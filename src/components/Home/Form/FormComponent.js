import React, { Component } from 'react';
import PubSub from 'pubsub-js';

import FetchUtil from '../../../libs/utils/FetchUtil.js';

class FormComponent extends Component {

  constructor(props) {
	super(props);

	this.state = {
		email: "",
		message: "",
		fullname: "",
	}

	this.handleInputChange = this.handleInputChange.bind(this);
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
  	return this.state.email !== "" && this.state.message !== "" && this.state.fullname !== "";
  }

  sendEmail() {
  	  	FetchUtil.postForm("https://formspree.io/consultas@mejorcontado.com", {
  	  		email: this.state.email,
  	  		message: `Hola mi nombre es ${this.state.fullname}, ${this.state.message}`
  	  	})
		.then(ok =>  {
			if (!ok.error) return PubSub.publish('notification', 'Tu consulta fue enviada');

			return PubSub.publish('notificationError', 'Hubo un problema, tu consulta no pudo ser enviada');
		});
  }

  render() {
    return (
      <div className="contact__email">
      	<div className="contact__email__form">
	      	<div className="contact__email__form__title">
	      		Send Ethereum
	      	</div>

	      	<div className="contact__email__form__container">
		      	<div className="contact__email__form__group">
		      		<label className="contact__email__form__label" htmlFor="fullname"> Amount </label>
		      		<input className="contact__email__form__input" type="text" name="fullname" 
		      			   onChange={this.handleInputChange} value={this.state.fullname}
		      		/>
		      	</div>

		      	<div className="contact__email__form__group">
		      		<label className="contact__email__form__label" htmlFor="email"> Email </label>
		      		<input className="contact__email__form__input" type="email" name="email" 
		      			   onChange={this.handleInputChange} value={this.state.email}
		      		/> 
		      	</div>

		      	<div className="contact__email__form__group--full">
		      		<label className="contact__email__form__label" htmlFor="message"> Address </label>
		      		<textarea rows="3" name="message" className="contact__email__form__input--full"
		      				  onChange={this.handleInputChange} value={this.state.message}
		      		/>
		      	</div>

		      	<button className="contact__email__btn" disabled={!this.canSend()} onClick={e => this.sendEmail()}>
		      		<span className="btn__title"> SEND </span>
		      	</button>
	      	</div>
      	</div>
      </div>
    );
  }
}

export default FormComponent;
