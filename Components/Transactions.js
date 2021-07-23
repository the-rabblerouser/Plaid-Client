import React from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Transactions = () => {
	const { data, error } = useSWR(
		'http://localhost:4000/api/transactions',
		fetcher
	);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;
	return (
		<>
			<h1>Transactions</h1>
			{data &&
				data.map(({ account_id, name }) => {
					return (
						<div key={Math.floor(Math.random() * 1000000)}>
							<p>{name}</p>
						</div>
					);
				})}
		</>
	);
};

export default Transactions;
