import "./landing.css";
import "atropos/css";
import Atropos from "atropos/react";

function Landing() {
  return (
    <>
      <div id="box_atropos">

        <Atropos
          id="box"
          className="my-atropos"
          highlight={false}
          shadow={false}
          shadowOffset={10}
          stretchZ={80}
        >
          <div id="main_box">
            <div id="textbox">
              <h1 data-atropos-offset="-6" data-atropos-opacity="0.5;1">
                Explore the Possibilities
              </h1>
              <h1 data-atropos-offset="5" data-atropos-opacity="0.5;1">
                Of Reading with ATLAS
              </h1>
            </div>
            <button class="button-green" data-atropos-offset="6">
              START NOW
            </button>
          </div>
        </Atropos>
      </div>
    </>
  );
}
export default Landing;