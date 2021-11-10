import React from 'react'
import { useAuth } from './context/AuthProvider'
import Authtication from './pages/authtication'
import HomePage from './pages/homepage'

const App = () => {
	const { user } = useAuth()
	return <div className="App">{user ? <HomePage /> : <Authtication />}</div>
}

export default App
