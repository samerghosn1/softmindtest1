import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const WineComponent = ({ wineData }) => {
	return (
		<div>
			{wineData.map((elem) => {
				return (
					<div style={{ display: 'grid' }}>
						<Card key={elem.id} sx={{ maxWidth: 345 }}>
							<CardMedia
								component='img'
								height={700}
								image={elem.image}
								sx={{ gap: 6 }}
							/>
						</Card>
					</div>
				);
			})}
		</div>
	);
};
export default WineComponent;
