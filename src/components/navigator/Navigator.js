import React from 'react';
import { Link } from 'react-router-dom';
import './Navigator.css';

function Navigator() {
	return (
		<div className="nav-bar">
			<Link to="/">All posts</Link>
		</div>
	);
}

export default Navigator;
