import React from 'react'
import { useAuth } from '../context/AuthProvider'

const HomePage = () => {
	const { logoutHandle } = useAuth()
	return (
		<div>
			<button onClick={logoutHandle}>logout</button>
		</div>
	)
}

export default HomePage
