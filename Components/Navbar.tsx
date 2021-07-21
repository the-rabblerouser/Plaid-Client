import Link from 'next/link';
import React, { useState } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const PlaidNavbar = () => {
	return (
		<>
			<Navbar collapseOnSelect expand='lg'>
				<Container>
					<Navbar.Brand>
						<Link href='/'>
							<a>Plaid Practice</a>
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className='justify-content-end'>
						<Nav.Item>
							<Link href='/homePage'>
								<a className='me-5'>homePage</a>
							</Link>
						</Nav.Item>
						<Navbar.Text>
							Signed in as: <a href='#login'></a>
						</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default PlaidNavbar;
