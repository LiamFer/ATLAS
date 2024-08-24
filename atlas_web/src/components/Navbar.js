import "./navbar.css";
import { Component } from "react";
import { Divide as Hamburger } from "hamburger-react";
import Form from "./Form";
import ReactDOM from "react-dom/client";

class Navbar extends Component {
  state = { clicked: false, scrolled: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    this.setState({ scrolled: isScrolled });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <>
        <nav className={this.state.scrolled ? "scrolled" : ""}>
          <a id="logo" href="index.html">
            ATLAS
          </a>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar expand" : "#navbar"}
            >
              <li>
                <a className="nav-link nav-link-grow-up" href="#box_atropos">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link nav-link-grow-up" href="#container">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link nav-link-grow-up" href="#app-section">
                  Download
                </a>
              </li>
              <li>
                <a className="nav-link nav-link-grow-up">Contact</a>
              </li>
              <li>
                <a
                  onClick={() => {
                    const formBox = document.createElement("div");
                    formBox.id = "formbox";
                    document.body.appendChild(formBox);
                    const root = ReactDOM.createRoot(formBox);
                    root.render(<Form />);
                  }}
                  className="nav-link nav-link-grow-up"
                >
                  Sign Up
                </a>
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
