import "./download.css";

function Download() {
  return (
    <>
      <div id="app-section">
        <div id="blurred"></div>
        <h1 id="pagetitle">DOWNLOAD THE APP</h1>

        <div id="downloadboxes">
          <div className="download-box">
            <img src="https://i.pinimg.com/originals/a9/76/7d/a9767d35192a99c9a45b5376fff4a709.gif"></img>
            <div>
              <button class="button-green">GET MOBILE</button>
              <p>Download the Atlas Mobile App</p>
            </div>
          </div>
          <div className="download-box">
            <img src="https://media.tenor.com/aNHKkEhomm4AAAAC/anime-keyboard.gif"></img>
            <div>
              <button class="button-green">GET DESKTOP</button>
              <p>Download the Atlas Desktop Version</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Download;
