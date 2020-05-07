import React from 'react';
import Header from './components/Header';
import './scss/App.scss';
import Information from './components/Information';
import Cards from './components/Cards/Cards';
import './scss/Responsive.scss'

export default function App() {
	return (
		<div className='wrapper'>
			<Header />
			<Information />
			<Cards />
		</div>
	);
}
