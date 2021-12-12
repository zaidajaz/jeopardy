import React, { useState } from 'react'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export const GameTile = ({ title, id }) => {
	const [showDialog, setShowDialog] = useState(false)

	const handleButtonClick = (e) => {
		setShowDialog(true)
	}

	const handleClose = () => {
		setShowDialog(false)
	}

	return (
		<>
			<Button
				onClick={handleButtonClick}
				sx={{ width: '100%' }}
				variant="outlined"
			>
				{title}
			</Button>
			<Dialog open={showDialog} onClose={handleClose}>
				<DialogTitle>Subscribe</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Q. We will show question for the id {id + 1} here
					</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="answer"
						label="Enter your answer here"
						type="text"
						fullWidth
						variant="standard"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleClose}>Submit</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}
