import React, { Component } from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


import Nav from '../Nav/Nav';
import HomeContainer from '../Home/HomeContainer';
import UnsubscribeContainer from '../Unsubscribe/UnsubscribeContainer';

import ErrorHandler from '../../libs/errors/error-handler.js';
import MessageUtil from '../../libs/utils/MessageUtil.js';
import Footer from '../Footer/Footer';

window.jQuery = window.$ = require('jquery');

library.add(faEnvelope);


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {};

    ErrorHandler.init();
    MessageUtil.init();
	}

  render() {
    return (
      <div className="base-container">
        <Router history={hashHistory}>
          <Route path="/" component={HomeContainer}>
             <Route path="unsubscribe" component={UnsubscribeContainer} /> 
          </Route>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
