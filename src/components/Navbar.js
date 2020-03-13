import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/makeshift_icon.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  render() {
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container" >
            <span aria-hidden="true" style={{ width: "70px" }}></span>
            <div className="navbar-brand">
                <Link to="/" className="navbar-item" title="Logo">
                <img src={logo} alt="MakeShift" />
                    <font color="#3A3A3A"><b>MakeShift</b></font>
                </Link>
            
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        
        </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start">
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Features
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            Product Overview
                        </a>
                        <a class="navbar-item">
                            Manager Features
                        </a>
                        <a class="navbar-item">
                            Employee Features
                        </a>
                        <a class="navbar-item">
                            Time + Attendance
                        </a>
                        <a class="navbar-item">
                            Integrations
                        </a>
                    </div>
                </div>

              <Link className="navbar-item" to="/TEMP">
                Benefits
              </Link>

              <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Industries
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            Hospitality
                        </a>
                        <a class="navbar-item">
                            Golf
                        </a>
                        <a class="navbar-item">
                            Recreation
                        </a>
                        <a class="navbar-item">
                            Restaurants
                        </a>
                        <a class="navbar-item">
                            Healthcare
                        </a>
                        <hr class="navbar-divider"></hr>
                        <a class="navbar-item">
                            All Industries
                        </a>
                        
                    </div>
                </div>

              <Link className="navbar-item" to="/TEMP">
                Support
              </Link>
              <Link className="navbar-item" to="/TEMP">
                Pricing
              </Link>
              <Link className="navbar-item" to="/TEMP">
                Log In
              </Link>
              <Link className="navbar-item" to="/TEMP">
                Contact Us
              </Link>
              <Link className="navbar-item" to="/TEMP">
                <b>Get Started</b>
              </Link>
            </div>
            
            <span aria-hidden="true" style={{ width: "70px" }}></span>
            
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
{/*
var navbar_style={
    position: "fixed",
    boxShadow: "0px 8px 10px rgba(102, 116, 129, 0.12)",
    width: "100%",
    background: "#FFFFFF",
    height: "94px",    
}

var item_style={
    color: "#313840"
}
*/}