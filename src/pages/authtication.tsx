import React, { useState } from 'react'
import Login from '../components/login/login'
import Register from '../components/register/register'

const Authtication = () => {
	const [isAuth, setIsAuth] = useState(true)

	const authHandle = () => setIsAuth(!isAuth)

	return (
		<>
			{isAuth ? <Login /> : <Register />}
			<button onClick={authHandle}>切换到{isAuth ? '注册' : '登录'}</button>
		</>
	)
}

export default Authtication
