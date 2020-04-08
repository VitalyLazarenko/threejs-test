import Viewer from './Viewer';
import DataStorage from './DataStorage';

export default class FormContlo {
  constructor() {
    this.figure = document.getElementById('figure');
    this.range = document.getElementById('range');
    this.addFigure = document.getElementById('add-figure');
    this.listItems = document.getElementById('list');
  }

  addEventListeners() {
    this.addFigure.addEventListener('click', () => {
      console.log('add figure');
    });
    // this.addFigure.addEventListener('click', this.addNewFigure.bind(this)));
  }

  addNewFigure() {
    const figureName = figure.value;
    const figureSize = range.value;
    let newFigure = {};

    switch (figureName) {
      case 'Box':
        newFigure = Viewer.createBox(figureSize); // ?
        break;
      case 'Shpere':
        newFigure = Viewer.createSphere(figureSize); // ?
        break;
      case 'Pyramid':
        newFigure = Viewer.createPyramid(figureSize); // ?
        break;
      default:
        alert('Что-то пошло не так! :D');
        break;
    }

    listItems.appendChild(Viewer.addListItem(newFigure)); // ?
    DataStorage.setData(newFigure); // ?
  }

  bindEvent(item) {
    const deleteButton = item.querySelector('button.delete');

    deleteButton.addEventListener('click', Viewer.delItem);
  }
}
