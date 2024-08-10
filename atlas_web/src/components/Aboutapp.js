import { infosData } from "../constants";
import "./aboutapp.css";

function Aboutapp() {
  return (
    <>
      <div id="container">
        <h1>Your Personal Library on Demand</h1>
        <div id="textbox">
          The Atlas App is a revolutionary platform that brings the world of
          books to your fingertips, offering a seamless, on-demand reading
          experience similar to how Netflix delivers movies and TV shows.
          Designed for book lovers, Atlas lets you explore a vast library of
          books across genres, from classic literature to the latest
          bestsellers, all in one place.
        </div>
        <div id="infosbox">
          {infosData.map((item) => (
            <div className="infocard">
              <img className="filtercolor" src={item.icon}></img>
              <div className="infotext">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Aboutapp;
