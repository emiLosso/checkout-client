import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import HomeContainer from '../Home/HomeContainer';

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
        <Router>
          <div>
            <Route path="/form/:amount/:currency/:address" component={HomeContainer} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
