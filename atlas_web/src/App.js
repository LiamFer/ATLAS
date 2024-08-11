import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Aboutapp from "./components/Aboutapp";
import Ourbooks from "./components/Ourbooks";
import Download from "./components/Download";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Aboutapp />
      <Ourbooks />
      <Download />
    </div>
  );
}

export default App;
