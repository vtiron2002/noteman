import React from 'react';
import '../scss/Information.scss';

export default function Information() {
	return (
		<div className='information'>
			<div className='top'>
				<h1>
					Connected <br /> meeting notes
				</h1>
				<p>
					Centralized, searchable meeting notes that connect with your <br />{' '}
					favorite tools. Integrates beautifully with 20+ leading tools.
				</p>
				<div className='buttons'>
					<a href='#'>Start for Free</a>
					<a href='#'>
						<p>Watch the Video</p>
						<ion-icon name='play'></ion-icon>
					</a>
				</div>
			</div>
			<div className='bottom'>
				<div className='left'>
          <div></div>
					<ion-icon name='checkbox'></ion-icon>
					<p>
						Unite your meeting notes with <br /> the tools you use most
					</p>
					<hr />
					<p>
						With #tagging, @mentions, <br /> and 20+ integrations, instantly{' '}
						<br /> sync info and create tasks <br /> from any meeting note.
					</p>
					<a href='#'>
						<p>See the integrations</p>
						<ion-icon name='arrow-forward-circle'></ion-icon>
					</a>
				</div>
				<div className='right'>
          <div></div>
					<ion-icon name='save'></ion-icon>
					<p>
						Make sure everyone <br/> shows up prepared
					</p>
					<hr />
					<p>
						Agenda templates and timely <br/> reminders help ensure all <br/> meetings are set up for success.
					</p>
					<a href='#'>
						<p>See all templates</p>
						<ion-icon name='arrow-forward-circle'></ion-icon>
					</a>
				</div>
			</div>
		</div>
	);
}
