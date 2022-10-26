import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const WineComponent = ({ wineData }) => {
	return (
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
			{wineData.map((elem) => {
				return (
					<div style={{ padding: 10 }}>
						<Card sx={{ maxWidth: 345 }}>
							<CardHeader title={elem.wine} />

							<CardMedia
								component='img'
								height='400'
								image={elem.image}
								alt={elem.wine}
								sx={{ padding: '16px 16px 0 16px', objectFit: 'contain' }}
							/>
							<CardContent>
								<Typography variant='body2' color='text.secondary'>
									Made in {elem.winery} winery located in {elem.location}
								</Typography>
							</CardContent>
						</Card>
					</div>
				);
			})}
		</div>
	);
};
export default WineComponent;
