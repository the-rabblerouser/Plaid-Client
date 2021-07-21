import React from 'react';

import Navbar from '../Components/Navbar';
import styles from '../styles/Home.module.css';

const homePage = () => {
	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<h1>Hello You 😉</h1>
			</div>
		</>
	);
};

export default homePage;
