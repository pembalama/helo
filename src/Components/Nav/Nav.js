import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import axios from 'axios';

// import './Nav.css';

// need to change buttons into images provided.
export class Nav extends Component {
	// componentDidMount = () => {
	// 	axios.get('/api/auth/user').then(res => {
	// 		this.props.makeUser(res.data);
	// 	});
	// };

	// handleLogout = () => {
	// 	axios.delete('/api/auth/logout').then(() => {
	// 		this.props.logoutUser();
	// 	});
	// };
	render() {
		return (
			<div className="nav-bar">
				<div className="top-nav">
					<Link to="/dashboard">Home</Link>
					<Link to="/new">New Post</Link>
				</div>
				<Link to="/">Logout</Link>
			</div>
		);
	}
}

// const mapStateToProps = reduxState => reduxState;

// export default connect(mapStateToProps, { logoutUser, updateUser, makeUser })(
// 	Nav
// );

export default Nav;
