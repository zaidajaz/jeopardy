import React, { useState } from 'react'
import { Stepper, Step, StepLabel } from '@mui/material'

import Login from './components/Login/Login'
import Game from './components/Game/Game'

const App = () => {
	const steps = ['Enter Details', 'Play']
	const [step, setStep] = useState(1)
	return (
		<>
			<Stepper sx={{ marginTop: '5em' }} activeStep={step} alternativeLabel>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			{step === 1 && <Login setStep={setStep} />}
			{step === 2 && <Game />}
		</>
	)
}

export default App
