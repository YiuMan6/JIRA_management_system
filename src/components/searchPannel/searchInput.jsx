import React, { useState } from 'react'

const SearchInput = props => {
	const { users, setSearchParam, seachParam } = props
	return (
		<div>
			<input
				type="text"
				onChange={e =>
					setSearchParam({
						...seachParam,
						name: e.target.value
					})
				}
			></input>
			<select
				onChange={e =>
					setSearchParam({
						...seachParam,
						personId: e.target.value
					})
				}
				value={seachParam.personId}
			>
				<option>none</option>
				{users.map(user => {
					return (
						<option key={user.personId} value={user.personId}>
							{user.name}
						</option>
					)
				})}
			</select>
		</div>
	)
}

export default SearchInput
