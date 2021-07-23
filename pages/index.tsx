import Head from 'next/head';
import { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navbar from '../Components/Navbar';

import styles from '../styles/Home.module.css';

export default function Home() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex: number) => {
		setIndex(selectedIndex);
	};

	return (
		<>
			<Navbar />
			<div>
				<Head>
					<title>Plaid Practice</title>
				</Head>
			</div>
			<div>
				<Carousel activeIndex={index} onSelect={handleSelect}>
					<Carousel.Item>
						<img
							className='w-100'
							style={{ height: '54rem' }}
							src='./kelly-sikkema-M98NRBuzbpc-unsplash.jpg'
							alt='First slide'
						/>
						<Carousel.Caption>
							<h1>Experience a fresh way to manage money</h1>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							style={{ height: '54rem' }}
							src='./neonbrand-4N3iHYmqy_E-unsplash.jpg'
							alt='Second slide'
						/>

						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							style={{ height: '54rem' }}
							src='./sharon-mccutcheon--8a5eJ1-mmQ-unsplash.jpg'
							alt='Third slide'
						/>

						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>
								Praesent commodo cursus magna, vel scelerisque nisl consectetur.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
			<div className='container d-flex justify-content-center mt-5'>
				<h1>Your finances, safe and secure</h1>
			</div>

			<div style={{ height: '30rem', paddingTop: '5rem' }}>
				<Row>
					<Col>
						<Card style={{ width: '80%', height: '100%', border: 'none' }}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='65'
								height='65'
								fill='currentColor'
								className='bi bi-bank2 d-flex align-self-center mb-4'
								viewBox='0 0 16 16'>
								<path d='M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z' />
							</svg>
							<Card.Body className='d-flex flex-column align-items-center'>
								<Card.Title> Budget planner</Card.Title>

								<Card.Text>
									Say goodbye to spreadsheets with customizable budgets. Easily
									add and update your categories.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card style={{ width: '80%', height: '100%', border: 'none' }}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='65'
								height='65'
								fill='currentColor'
								className='bi bi-currency-dollar d-flex align-self-center mb-4'
								viewBox='0 0 16 16'>
								<path d='M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z' />
							</svg>
							<Card.Body className='d-flex flex-column align-items-center'>
								<Card.Title>Net Worth Calculator</Card.Title>
								<Card.Text>
									Keep track of your net worth to find out if your really worth
									anything.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card style={{ width: '80%', height: '100%', border: 'none' }}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='65'
								height='65'
								fill='currentColor'
								className='bi bi-cash-coin d-flex align-self-center mb-4'
								viewBox='0 0 16 16'>
								<path
									fillRule='evenodd'
									d='M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z'
								/>
								<path d='M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z' />
								<path d='M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z' />
								<path d='M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z' />
							</svg>
							<Card.Body className='d-flex flex-column align-items-center'>
								<Card.Title>Track your spending</Card.Title>
								<Card.Text>
									Stay on top of your finances by seeing where your money comes
									and goes.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
			<div
				className='d-flex justify-content-center  mt-5'
				style={{ backgroundColor: '#393a3d', height: '30rem' }}>
				<div
					className='d-flex flex-column justify-content-center align-items-center mb-5'
					style={{ color: '#fff' }}>
					<h1 className='p-4'>Sign Up Today</h1>
					<h5> Your best financial life starts here.</h5>
				</div>
			</div>
		</>
	);
}
