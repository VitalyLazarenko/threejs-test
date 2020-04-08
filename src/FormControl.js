import Viewer from './Viewer';
import DataStorage from './DataStorage';

export default class FormControl {
	constructor() {
		this.callbacks = {};
		this.figure = document.getElementById('figure');
		this.range = document.getElementById('range');
		this.addFigure = document.getElementById('add-figure');
		this.listItems = document.getElementById('list');
	}

	init() {
		this.addFigure.addEventListener('click', this.addNewFigure.bind(this));
	}

	addEventListeners() {
		// this.addFigure.addEventListener('click', () => {
		//   console.log('add figure');
		// });
	}

	addNewFigure() {
		this.dispatch('addFigureEvent', {
			name: this.figure.value,
			size: this.range.value
		});
	}

	// ---------- EVENT SYSTEM ----------
	subscribe(eventName, cb) {
		if (!this.callbacks[eventName]) {
			this.callbacks[eventName] = [];
		}
		this.callbacks[eventName].push(cb);
	}

	dispatch(eventName, props = {}) {
		if (eventName in this.callbacks) {
			this.callbacks[eventName].forEach(cb => cb(props));
		}
	}
	// ---------- END OF EVENT SYSTEM ----------

	bindEvent(item) {
		const deleteButton = item.querySelector('button.delete');

		deleteButton.addEventListener('click', delItem);
	}
}
