import React, { ReactNode } from 'react'
import { AuthProvider } from '../context/AuthProvider'

const AuthProviders = ({ children }: { children: ReactNode }) => {
	return <AuthProvider>{children}</AuthProvider>
}

export default AuthProviders
