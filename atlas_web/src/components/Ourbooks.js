import { bookCovers } from "../constants";
import Atropos from "atropos/react";
import "./ourbooks.css";
import "atropos/css";

function Ourbooks() {
  return (
    <>
      <div id="bookssection">
        <h1>Some of our Books</h1>
        <div id="booksbox">
          {bookCovers.map((bookCover, index) => (
            <Atropos
              key={index}
              className="my-atropos"
              highlight={false}
              shadow={true}
              shadowOffset={30}
              stretchZ={50}
              rotateX={15}
              rotateY={15}
            >
              <div className="book-container">
                <div className="book-cover-container">
                  <img
                    className="book-cover"
                    src={bookCover}
                    alt="Book Cover"
                  />
                </div>
              </div>
            </Atropos>
          ))}
        </div>
      </div>
    </>
  );
}

export default Ourbooks;
