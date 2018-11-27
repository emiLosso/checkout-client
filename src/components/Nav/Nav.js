import React, { Component } from 'react';
// eslint-disable-next-line
import { IndexLink, hashHistory } from 'react-router';

import Footer from '../Footer/Footer';

import logo from '../../img/logo.png';


class Nav extends Component {

  render() {

    return (
      <div className="screen">
        <nav className="nav">
          <div className="nav__links">
            <IndexLink to='/' className="nav__link" activeClassName="nav__link--active" >
              <span> NOSOTROS </span>
            </IndexLink>

            <IndexLink to='/' className="nav__link" activeClassName="nav__link--active" >
              <span> CONTACTO </span>
            </IndexLink>

            <IndexLink to='/' className="nav__link" activeClassName="nav__link--active" >
              <span> BUSCAR </span>
            </IndexLink>
          </div>

          <div className="nav__logo">
            <img className="nav__logo__img" alt="logo"
                 src={logo} onClick={ e => hashHistory.push('/')}
            >
            </img>
          </div>
        </nav>

        {this.props.children}
        
        <Footer />
      </div>
    );
  }
}

export default Nav;
