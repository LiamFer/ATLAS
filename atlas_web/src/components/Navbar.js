import "./navbar.css";
import { Component, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav>
          <a id="logo" href="index.html">
            ATLAS
          </a>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar expand" : "#navbar"}
            >
              <li>
                <a className="nav-link nav-link-grow-up">Home</a>
              </li>
              <li>
                <a className="nav-link nav-link-grow-up">About</a>
              </li>
              <li>
                <a className="nav-link nav-link-grow-up">Download</a>
              </li>
              <li>
                <a className="nav-link nav-link-grow-up">Contact</a>
              </li>
            </ul>
          </div>

          <div id="mobile-menu" onClick={this.handleClick}>
            <Hamburger color="white" />
          </div>
        </nav>
      </>
    );
  }
}
export default Navbar;
