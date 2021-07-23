import React from 'react';
import { usePlaidLink } from 'react-plaid-link';

import Button from 'react-bootstrap/Button';

const PlaidLink = ({ linkToken, setAccessToken }) => {
	const onSuccess = (token) => {
		setAccessToken(token);
	};

	const config = {
		token: linkToken,
		onSuccess,
	};

	const { open, ready } = usePlaidLink(config);

	return (
		<Button variant='dark' onClick={() => open()} disabled={!ready}>
			Link account
		</Button>
	);
};

export default PlaidLink;
