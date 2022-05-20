import React, { Component } from "react";
import './Navbar.css';
import {Button} from '../Button';
import CartWidget from '../CartWidget/CartWidget';
// import {Link} from 'react-router-dom';

class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }
  render() {

    const MenuItems = [
      {
        title: 'Inicio',
        url: '#',
        class: 'nav-links'
      },
      {
        title: 'Vehiculos',
        url: '#',
        class: 'nav-links'
      },
      {
        title: 'Electrónica',
        url: '#',
        class: 'nav-links'
      },
      {
        title: 'Libros',
        url: '#',
        class: 'nav-links'
      },
      {
        title: 'Login',
        url: '#',
        class: 'nav-links-mobile'
      }
    ]
    return (
      <div className="app">
        <nav className="NavbarItems">
          <h1 className="logo"><i className="fa-regular fa-sun"></i> Oasis Store</h1>
          <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.class} href={item.url}>
                    {item.title}
                  </a>
                </li>
              )
            })}
          </ul>
          <Button>Login</Button>
          <CartWidget></CartWidget>
        </nav>
      </div>
    )

  }
}

export default Navbar;