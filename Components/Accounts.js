import React from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Transactions = () => {
	const { data, error } = useSWR('http://localhost:4000/api/balance', fetcher);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>No Accounts Yet</div>;
	return (
		<>
			<h1>Accounts</h1>
			<br />
			{data &&
				data.map(({ name }) => {
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
