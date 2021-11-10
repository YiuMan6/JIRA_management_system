import React, { FormEvent } from 'react'
import { useAuth } from '../../context/AuthProvider'

const Register = () => {
	const { user, registerHandle } = useAuth()

	const authHandle = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const username = (e.currentTarget.elements[0] as HTMLInputElement).value
		const password = (e.currentTarget.elements[1] as HTMLInputElement).value
		registerHandle({ username, password })
	}

	return (
		<form onSubmit={authHandle}>
			<div>
				<label htmlFor="username"></label>
				<input type="text" id="username"></input>
			</div>
			<div>
				<label htmlFor="password"></label>
				<input type="password" id="password"></input>
			</div>
			<button type="submit">register</button>
		</form>
	)
}
export default Register
