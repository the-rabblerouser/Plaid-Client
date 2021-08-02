import React from 'react';
import useSWR from 'swr';
import _ from 'lodash';

import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Transactions = () => {
	const { data, error } = useSWR('http://localhost:4000/api/balance', fetcher);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>No Accounts Yet</div>;

	const { depository, credit, investment, loan } = _.chain(data)
		.groupBy('type')
		.value();

	return (
		<>
			<h1>Accounts</h1>
			<br />
			<Container className='d-flex justify-content-center'>
				<Accordion defaultActiveKey='0' className='w-50'>
					<Accordion.Item eventKey='Cash'>
						<Accordion.Header>Cash</Accordion.Header>
						{depository.map(({ account_id, name, balances }) => {
							return (
								<>
									<div
										key={account_id}
										style={{
											display: 'flex',
											flexDirection: 'row',
											justifyContent: 'space-between',
										}}>
										<Accordion.Body>{name}</Accordion.Body>
										<Accordion.Body>${balances.current}</Accordion.Body>
									</div>
								</>
							);
						})}
					</Accordion.Item>
					<Accordion.Item eventKey='Credit Cards'>
						<Accordion.Header>Credit Cards</Accordion.Header>
						{credit.map(({ account_id, name }) => {
							return <Accordion.Body key={account_id}>{name}</Accordion.Body>;
						})}
					</Accordion.Item>
					<Accordion.Item eventKey='Investments'>
						<Accordion.Header>Investments</Accordion.Header>
						{investment.map(({ account_id, name }) => {
							return <Accordion.Body key={account_id}>{name}</Accordion.Body>;
						})}
					</Accordion.Item>
					<Accordion.Item eventKey='Loans'>
						<Accordion.Header>Loans</Accordion.Header>
						{loan.map(({ account_id, name }) => {
							return <Accordion.Body key={account_id}>{name}</Accordion.Body>;
						})}
					</Accordion.Item>
				</Accordion>
			</Container>
		</>
	);
};

export default Transactions;
