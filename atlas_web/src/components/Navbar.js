import "./navbar.css";
import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";

function Navbar() {
  //const [variable, setVariable] = useState();
  return (
    <>
      <nav>
        <a id="logo" href="index.html">
          ATLAS
        </a>
        <div>
          <ul id="navbar">
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

        <div id="mobile-menu">
          <Hamburger color="white"/>
        </div>

      </nav>
    </>
  );
}
export default Navbar;
