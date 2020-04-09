import Viewer from './Viewer';
import DataStorage from './DataStorage';

export default class FormControl {
  constructor() {
    this.callbacks = {};
    this.figure = document.getElementById('figure');
    this.range = document.getElementById('range');
    this.addFigure = document.getElementById('add-figure');
    this.listItems = document.getElementById('list');
    // this.deleteButton = document.getElementById('delete');
  }

  init() {
    this.addFigure.addEventListener('click', this.addNewFigure.bind(this));
  }

  addNewFigure() {
    this.dispatch('addFigureEvent', {
      name: this.figure.value,
      size: this.range.value,
    });
  }

  addListItem({ item_id, uuid, name, size }) {
    const label = document.createElement('label');
    label.textContent = `${name.toUpperCase()}: ${size} : ${uuid}`;
    label.className = 'title';

    const delButton = document.createElement('button');
    delButton.className = 'delete';
    delButton.textContent = 'delete';
    delButton.id = 'delete';
    delButton.setAttribute('item-id', item_id);

    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.appendChild(label);
    listItem.appendChild(delButton);
    listItem.id = item_id;

    this.bindEvent(listItem);

    this.listItems.appendChild(listItem);

    return listItem;
  }

  bindEvent(item) {
    const deleteButton = item.querySelector('button.delete');

    deleteButton.addEventListener('click', this.delListItem.bind(this));
  }

  delListItem() {
    document.addEventListener('click', (e) => {
      const item_id = e.target.attributes[2].value;
      this.dispatch('removeFigureEvent', { item_id: item_id });

      const item = document.getElementById(`${e.target.attributes[2].value}`);

      this.listItems.removeChild(item);
    });

    // this.dispatch('removeFigureEvent', { uuid: uuid });

    // listItems.removeChild(item);
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
      this.callbacks[eventName].forEach((cb) => cb(props));
    }
  }
  // ---------- END OF EVENT SYSTEM ----------
}
