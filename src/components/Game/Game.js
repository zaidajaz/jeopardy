import React from 'react'
import {
	Container,
	Box,
	TextField,
	Button,
	Typography,
	Grid,
	Item,
} from '@mui/material'

import { GameTile } from '../GameTile/GameTile'

import { colors } from '../../variables/colors'

const scores = [
	100, 100, 100, 100, 200, 200, 200, 200, 300, 300, 300, 300, 400, 400, 400,
	400, 500, 500, 500, 500,
]

const headingStyles = {
	color: colors.secondarColor5,
	marginBottom: '2em',
	textAlign: 'center',
}

const Game = () => {
	return (
		<>
			<Container fixed>
				<Typography
					variant="h4"
					component="h4"
					sx={{
						color: colors.secondarColor5,
						margin: '2em auto',
						textAlign: 'center',
					}}
				>
					Let's Play the Game
				</Typography>
				<Box
					sx={{
						height: '80vh',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'flex-start',
					}}
				>
					<Grid container spacing={2}>
						<Grid item xs={3}>
							<Typography variant="h6" component="h6" sx={headingStyles}>
								Cloud Security
							</Typography>
						</Grid>
						<Grid item xs={3}>
							<Typography variant="h6" component="h6" sx={headingStyles}>
								Grow Your Business
							</Typography>
						</Grid>
						<Grid item xs={3}>
							<Typography variant="h6" component="h6" sx={headingStyles}>
								Stop Threats
							</Typography>
						</Grid>
						<Grid item xs={3}>
							<Typography variant="h6" component="h6" sx={headingStyles}>
								Prove Compliance
							</Typography>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						{scores.map((score, _id) => {
							return (
								<Grid item xs={3} key={_id}>
									<GameTile id={_id} title={score} />
								</Grid>
							)
						})}
					</Grid>
				</Box>
			</Container>
		</>
	)
}

export default Game
