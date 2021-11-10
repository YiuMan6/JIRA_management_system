import axios, { AxiosRequestConfig } from 'axios'

const apiUrl = process.env.REACT_APP_API_URL

interface httpConfig extends AxiosRequestConfig {
	token?: string
	requestData?: object
}

const instance = axios.create({
	baseURL: apiUrl
})

export const http = async (
	endpoint: string,
	{ method, requestData, token, headers, ...customConfig }: httpConfig
) => {
	const config = {
		method,
		headers: {
			Authorization: token ? `Bearer ${token}` : '',
			'Content-Type': requestData ? 'application/json' : ''
		},
		data: {
			...(requestData || {})
		},
		...customConfig
	}
	const result = await instance(`${endpoint}`, config)
	if (result.status === 401) {
		return Promise.reject({ message: '401 error' })
	}
	return result
}
