import './dist/css/App.css';
import {useState} from 'react';
import NavBar from "./components/NavBar";
/* import ParticleBackground from "./components/ParticleBackground"; */
import { Switch, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import AboutPage from "./screens/AboutPage";
import PortfolioPage from "./screens/PortfolioPage";
import TechPage from "./screens/TechPage";
import ContactPage from "./screens/ContactPage";

function App() {

  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle);
  }

  return (
    <div className="App">
      <div className={`side-bar ${navToggle ? "nav-toggle" : " "}`}>
        <NavBar />
      </div>

      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
       {/*  <ParticleBackground /> */}
        <div className="content">
          <Switch>
            <Route path="/myilportfolio" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/portfolios" exact>
              <PortfolioPage />
            </Route>
            <Route path="/work" exact>
              <TechPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
