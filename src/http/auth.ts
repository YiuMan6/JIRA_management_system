import { http } from './http'

export interface AuthInfor {
	username: string
	password: string
}

export const login = async (detail: AuthInfor): Promise<any> => {
	return http('/login', { requestData: detail, method: 'POST' })
}

export const register = async (detail: AuthInfor): Promise<any> => {
	return http('/register', { requestData: detail, method: 'POST' })
}
