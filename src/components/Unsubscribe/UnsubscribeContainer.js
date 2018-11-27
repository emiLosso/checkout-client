import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FetchUtil from '../../libs/utils/FetchUtil.js';
import Constants from '../../constants.js';


class UnsubscribeContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
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

  canUnsubscribe() {
    return this.state.email !== "";
  }

  unsubscribe() {
    FetchUtil.post(Constants.apiUrls.unsubscribe(), {email: this.state.email})
      .then(ok =>  {
        if (!ok.errors) {
          this.setState({ email: "" })
          return PubSub.publish('notification', 'Cancelaste tu subscripción con éxito');
        }

        return PubSub.publish('notificationError', 'Hubo un problema, no pudimos cancelar tu subscripción, comprueba que tu email sea correcto');
    });
  }

  render() {

    return (
      <div className="unsubscribe">
          <div className="unsubscribe__form">
            <div className="unsubscribe__form__title">
              Escribe tu email para dejar de recibir correos del newsletter
            </div>

            <div className="unsubscribe__form__container">
              <FontAwesomeIcon icon={['far', 'envelope']}  className="unsubscribe__icon"/>
              <input className="unsubscribe__input" type="email" name="email"
                   placeholder="dirección de email"
                   onChange={this.handleInputChange} value={this.state.email}
              />

              <button className="unsubscribe__btn" disabled={!this.canUnsubscribe()} onClick={e => this.unsubscribe()}>
                <span className="btn__title"> CANCELAR SUBSCRIPCIÓN </span>
              </button>
            </div>
          </div>
      </div>
    );
  }
}

export default UnsubscribeContainer;
