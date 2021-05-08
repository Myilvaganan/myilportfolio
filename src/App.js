/* eslint-disable react/jsx-pascal-case */
import './dist/css/App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
/* import ParticleBackground from "./components/ParticleBackground"; */
import { Switch, Route } from 'react-router-dom';
import HomePage from './screens/HomePage';
import AboutPage from './screens/AboutPage';
import PortfolioPage from './screens/PortfolioPage';
import TechPage from './screens/TechPage';
import ContactPage from './screens/ContactPage';
import { AnimatePresence } from 'framer-motion';

function App() {
	const [ navToggle, setNavToggle ] = useState(false);

	const navClick = () => {
		setNavToggle(!navToggle);
	};

	return (
		<div className='App'>
			<div className={`side-bar ${navToggle ? 'nav-toggle' : ' '}`}>
				<NavBar />
			</div>

			<div className='nav-btn' onClick={navClick}>
				<div className='lines-1' />
				<div className='lines-2' />
				<div className='lines-3' />
			</div>
			{/*  <ParticleBackground /> */}
			<div className='main-content'>
				<div className='content'>
					<AnimatePresence exitBeforeEnter>
						<Switch>
							<Route exact path='/myilportfolio'>
								<HomePage />
							</Route>
							<Route exact path='/about'>
								<AboutPage />
							</Route>
							<Route exact path='/portfolios'>
								<PortfolioPage />
							</Route>
							<Route exact path='/work'>
								<TechPage />
							</Route>
							<Route exact path='/contact'>
								<ContactPage />
							</Route>
						</Switch>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}

export default App;
