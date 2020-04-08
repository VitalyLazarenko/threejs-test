import Viewer from './Viewer';
import DataStorage from './DataStorage';

export default class FormControl {
  constructor() {
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
    const name = figure.value;
    const size = range.value;
    let newFigure = {};

    switch (name) {
      case 'Box':
        console.log(name, ' : ', size);
        newFigure = Viewer.createBox(size); // ?
        break;
      case 'Shpere':
        console.log(name, ' : ', size);
        newFigure = Viewer.createSphere(size); // ?
        break;
      case 'Pyramid':
        console.log(name, ' : ', size);
        newFigure = Viewer.createPyramid(size); // ?
        break;
      default:
        alert('Что-то пошло не так! :D');
        break;
    }

    // console.log(newFigure);

    // listItems.appendChild(Viewer.addListItem(newFigure)); // ?
    // DataStorage.setData(newFigure); // ?
  }

  bindEvent(item) {
    const deleteButton = item.querySelector('button.delete');

    deleteButton.addEventListener('click', delItem);
  }
}
