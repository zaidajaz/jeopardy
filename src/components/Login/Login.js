import React, { useState } from 'react'
import { Container, Box, TextField, Button, Typography } from '@mui/material'

import { colors } from '../../variables/colors'

const Login = ({ setStep }) => {
	const [userDetails, setUserDetails] = useState({ name: '', email: '' })

	const inputStyles = {
		padding: '0.5em',
		width: '60%',
	}

	const handleInputChange = (e) => {
		setUserDetails((prev) => {
			return {
				...prev,
				[e.target.id]: e.target.value,
			}
		})
	}

	const handleSubmit = (e) => {
		if (isValid(userDetails)) {
			//TODO: read user details from userDetails object and call api
			console.log(userDetails)
			setStep(2)
		}
	}

	//TODO: complete this function
	const isValid = () => {
		return true
	}

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
					Enter Your Details
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
					<TextField
						sx={inputStyles}
						id="name"
						label="Name"
						variant="outlined"
						onChange={handleInputChange}
						value={userDetails.name}
					/>
					<TextField
						sx={inputStyles}
						id="email"
						label="Email"
						variant="outlined"
						onChange={handleInputChange}
						value={userDetails.email}
					/>
					<Button
						onClick={handleSubmit}
						sx={{
							...inputStyles,
							backgroundColor: colors.primaryColor4,
							height: '4em',
							marginTop: '2em',
						}}
						variant="contained"
					>
						Next
					</Button>
				</Box>
			</Container>
		</>
	)
}

export default Login
