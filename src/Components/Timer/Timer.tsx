import React, { Component } from 'react';
import './Timer.css';
import TimerButton from '../TimerButton/TimerButton';

class Timer extends Component {
	constructor(props: any) {
		super(props);
		this.state = {
			minute: 25,
			seconds: 0,
			isOn: false,
		};
	}

	startTimer() {
		console.log('starting timer.');
	}

	stopTimer() {
		console.log('stopping timer.');
	}

	resetTimer() {
		console.log('resetting timer.');
	}

	render = () => {
		return (
			<div className="timer-container">
				<div className="time-display"></div>
				<div className="timer-button-container">
					<TimerButton buttonAction={this.startTimer} buttonValue={'Start'} />
					<TimerButton buttonAction={this.stopTimer} buttonValue={'Stop'} />
					<TimerButton buttonAction={this.resetTimer} buttonValue={'Reset'} />
				</div>
			</div>
		);
	};
}

export default Timer;
