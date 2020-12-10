import React from 'react';

import { Link } from "react-router-dom";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import { GiWaterSplash } from "react-icons/gi";

class BirdbathNavbar extends React.Component {

	render() {

		return <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
			<Navbar.Brand>
				<Link to="/">
					<GiWaterSplash size={32} style={{color: "aqua"}} />
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link as={Link} to="/about">About</Nav.Link>
					<NavDropdown title="Emulators" id="basic-nav-dropdown">
						{/* 
							Javatari doesn't load properly if the DOM is modified without a refresh,
							and I'm not clever enough (yet) to get it to work, so this will cause a
							page reload.
						*/}
						<NavDropdown.Item href="/javatari">Javatari</NavDropdown.Item>
						<NavDropdown.Item as={Link} to="/jsnes">JSNES</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				
				
			</Navbar.Collapse>
		</Navbar>
	}
}

export default BirdbathNavbar