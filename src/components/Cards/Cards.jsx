import React from 'react';
import '../../scss/Cards.scss';
import Card from './Card';

export default function Cards() {
	const cards = ['topLeft', 'bottomLeft', 'topRight', 'bottomRight'];
	return (
		<div className='cards'>
			{cards.map(card => <Card card={card} />)}
		</div>
	);
}
