import React from 'react'
import ReactDOM from 'react-dom'
import { loadDevTools } from 'jira-dev-tool'
import AuthProviders from './context/contextProvider'
import App from './App'

loadDevTools(() => {
	ReactDOM.render(
		<AuthProviders>
			<App />
		</AuthProviders>,

		document.getElementById('root')
	)
})
