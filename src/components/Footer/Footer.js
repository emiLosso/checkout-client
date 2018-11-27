import React, { Component } from 'react';

import logo from '../../img/logo.png';
import log_ig from '../../img/instagram.png';
import { IndexLink, hashHistory } from 'react-router';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
          <div className="footer__instagram">
          	Powered by Ripio
          </div>
      </div>
    );
  }
}

export default Footer;
