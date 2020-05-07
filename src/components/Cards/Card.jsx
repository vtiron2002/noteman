import React from 'react';

export default function Card({ card }) {
  const todos = [1,2,3]
	return (
		<div className={`card ${card}`}>
			<div className='top'>
				<h2>Note Title</h2>
				<span>JD</span>
			</div>
			<div className='date'>
				<span>05/06/20</span>
				<span>&#183;</span>
				<span>(from)</span>
			</div>
			<div className='todos'>
				{todos.map((t) => (
					<div className='todo'>
						<small>Implementation</small>
						<div className='dueDate'>
							<span>DUE DATE</span>
							<span className='date'>05/06/2020</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
