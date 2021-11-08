import React, { useState, useEffect } from 'react'
import SearchInput from './searchInput'
import SearchPannel from './searchPannel'
import { useMount } from '../../hooks/hooks'

const SearchList = () => {
	const [users, SetUsers] = useState([])
	const [projects, serPorjects] = useState([])
	const [seachParam, setSearchParam] = useState({
		name: '',
		personId: ''
	})

	useMount(() => {
		SetUsers([
			{ personId: 1, name: 'Tim' },
			{ personId: 2, name: 'Leo' }
		])
		serPorjects([
			{ projectId: 1, personId: 1, name: 'Tim', projectName: 'react' },
			{ projectId: 2, personId: 1, name: 'Tim', projectName: 'Vue' }
		])
	})

	useEffect(() => {
		// serPorjects([
		// 	{ projectId: 1, personId: 1, name: 'Tim', projectName: 'react' }
		// ])
	}, [seachParam])

	return (
		<>
			<SearchInput
				users={users}
				setSearchParam={setSearchParam}
				seachParam={seachParam}
			/>
			<SearchPannel projects={projects} />
		</>
	)
}

export default SearchList
