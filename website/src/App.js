import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Events } from "./components/Events";
import { Projects } from "./components/Project";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Events />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;