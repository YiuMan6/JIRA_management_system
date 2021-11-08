import React from 'react'

const SearchPannel = props => {
	const { projects } = props
	return (
		<table>
			<thead>
				<tr>
					<th>Mingcheng</th>
					<th>负责人</th>
				</tr>
			</thead>
			<tbody>
				{projects.map(item => {
					return (
						<tr key={item.projectId}>
							<td>{item.projectName}</td>
							<td>{item.name}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

export default SearchPannel
