import React from 'react'

const Counter = ({ id, value, name, onIncrement, onDecrement, onDelete }) => {
	// const value = 0
	const formatValue = () => {
		return value === 0 ? 'empty' : value
	}

	const getBadgeClasses = () => {
		let classes = 'badge m-2 '
		classes += value === 0 ? 'bg-warning' : 'bg-primary'
		return classes
	}
	const getDecrementClasses = () => {
		let classes = 'btn btn-sm m-2 '
		classes += value === 0 ? 'btn-primary disabled' : 'btn-primary'
		return classes
	}

	return (
		<div>
			<span>{name}</span>
			<span className={getBadgeClasses()}>{formatValue()}</span>
			<button
				className='btn btn-primary btn-sm m-2'
				onClick={() => onIncrement(id)}
			>
				+
			</button>
			<button className={getDecrementClasses()} onClick={() => onDecrement(id)}>
				-
			</button>
			<button className='btn btn-danger' onClick={() => onDelete(id)}>
				Delete
			</button>
		</div>
	)
}

export default Counter
