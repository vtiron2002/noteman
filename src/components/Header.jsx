import React from 'react';
import '../scss/Header.scss';

export default function Header() {
	const links = [
		'Features',
		'Integrations',
		'Pricing',
		'Log in',
		'Start for Free',
	];
	return (
		<header>
			<h1 className='logo'>
				note<span>man</span>
			</h1>
			<ul>
				{links.map((l) => (
					<li>
						<a href='#'>{l}</a>
					</li>
				))}
			</ul>
		</header>
	);
}
