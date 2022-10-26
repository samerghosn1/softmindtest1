import { Button } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import WineComponent from './WineComponent';

const HomePage = (props) => {
	const [wine, setWine] = useState('reds');
	const [wineData, setWineData] = useState([]);

	const getData = () => {
		axios.get(`https://api.sampleapis.com/wines/${wine}`).then((res) => {
			setWineData(res.data);
		});
	};

	useEffect(() => {
		getData();
	}, [wine]);

	return (
		<div>
			<div>
				<Button onClick={() => setWine('reds')}>Red</Button>
				<Button onClick={() => setWine('whites')}>White</Button>
				<Button onClick={() => setWine('sparkling')}>Sparkling</Button>
				<Button onClick={() => setWine('rose')}>Rose</Button>
			</div>
			<div>
				<WineComponent wineData={wineData} />
			</div>
		</div>
	);
};

export default HomePage;
