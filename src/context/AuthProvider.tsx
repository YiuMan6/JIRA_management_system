import React, { createContext, ReactNode, useContext, useState } from 'react'
import { useMount } from '../hooks/hooks'
import { AuthInfor, login, register } from '../http/auth'
import { http } from '../http/http'

interface User {
	id: number
	name: string
	token?: string
}
const AuthContext = createContext<any>(undefined)
const localStorageKey = '__auth_provider_token__'

const bootstrapUser = async () => {
	let user = null
	const token = getToken()
	if (token) {
		const { data } = await http('me', { token })
		user = data.user
	}
	return user
}
const handleUserResponse = (user: User): void => {
	window.localStorage.setItem(localStorageKey, user.token || '')
}
const getToken = (): string | null => {
	return window.localStorage.getItem(localStorageKey)
}
const removeToken = (): void => {
	window.localStorage.removeItem(localStorageKey)
}
export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<object | null>(null)

	useMount(() => {
		bootstrapUser().then(res => setUser(res))
	})

	const loginHandle = async (userdata: AuthInfor) => {
		try {
			const { data } = await login(userdata)
			handleUserResponse(data.user)
			setUser(data.user)
		} catch (err) {
			console.log('failed')
		}
	}

	const registerHandle = async (userdata: AuthInfor) => {
		try {
			const { data } = await register(userdata)
			handleUserResponse(data.user)
			setUser(data)
		} catch (err) {
			console.log('????')
		}
	}

	const logoutHandle = () => {
		setUser(null)
		removeToken()
	}
	return (
		<AuthContext.Provider
			value={{
				user,
				loginHandle,
				registerHandle,
				logoutHandle,
				children
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => {
	const context = useContext(AuthContext)
	return context
}
