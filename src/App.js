import React from 'react';
import './App.css';
import routes from './routes';
import { withRouter } from 'react-router-dom';

//importing Component
import Nav from './Components/Nav/Nav';

function App(props) {
	return (
		<div className="App">
			{/* {props.location.pathname === '/' ? null : <Nav />} */}
			<Nav />
			{routes}
		</div>
	);
}

export default withRouter(App);
