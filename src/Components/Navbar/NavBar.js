import React, { Component } from "react";
import './Navbar.css';
import {Button} from '../Button'

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
      <nav className="NavbarItems">
        <h1 className="logo">Oasis Store<i className="fab fa-react"></i></h1>
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
      </nav>
    )

  }
}

export default Navbar;