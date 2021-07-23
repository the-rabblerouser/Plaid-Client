import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import Nav from 'react-bootstrap/Nav';

import Navbar from '../Components/Navbar';
import PlaidLink from '../Components/PlaidLink';
import Transactions from '../Components/Transactions';
import Accounts from '../Components/Accounts';

import styles from '../styles/Home.module.css';

const homePage = () => {
	const router = useRouter();
	const [linkToken, setLinkToken] = useState(null);
	const [toggle, setToggle] = useState(true);

	const generateToken = async () => {
		// get public_token
		const response = await axios.get(
			'http://localhost:4000/api/create_link_token'
		);
		const { link_token } = await response.data;
		setLinkToken(link_token);
	};

	useEffect(() => {
		generateToken();
	}, []);

	const setAccessToken = async (public_token) => {
		await axios.post('http://localhost:4000/api/set_access_token', {
			public_token,
		});
		router.reload();
	};

	return (
		<>
			<Navbar />
			<div className='container d-flex justify-content-end mt-5'>
				{linkToken != null ? (
					<PlaidLink linkToken={linkToken} setAccessToken={setAccessToken} />
				) : (
					<></>
				)}
			</div>
			<div className={styles.container}>
				<Nav variant='pills' defaultActiveKey='link-2'>
					<Nav.Item>
						<Nav.Link
							onSelect={() => {
								setToggle(true);
							}}
							eventKey='link-2'>
							Net Worth
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link
							onSelect={() => {
								setToggle(false);
							}}
							eventKey='link-1'>
							Transactions
						</Nav.Link>
					</Nav.Item>
				</Nav>
				{toggle ? <Accounts /> : <Transactions />}
			</div>
		</>
	);
};

export default homePage;
