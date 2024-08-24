import Navbar from "./components/Navbar";
import Landing from "./components/landing";
import Aboutapp from "./components/Aboutapp";
import Ourbooks from "./components/Ourbooks";
import Download from "./components/Download";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Landing />
      <Navbar />
      <Aboutapp />
      <Ourbooks />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
