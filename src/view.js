import { createElements } from './helpers';

class View {
  constructor() {
    this.addFigure = document.getElementById('add-figure');
    this.sizeFigure = document.getElementById('range');
    this.nameFigure = document.getElementById('figure');
    this.list = document.getElementById('list');

    this.addFigure.addEventListener('click', this.handleAddFigure.bind(this));
  }

  createElement(uuid) {
    const item = createElements(uuid);

    return this.addEventListeners(item);
  }

  addEventListeners(item) {
    const deleteButton = item.querySelector('button.delete');

    deleteButton.addEventListener('click', this.handleDelListItem.bind(this));

    return item;
  }

  handleAddFigure() {
    let uuid;

    switch (this.nameFigure.value) {
      case 'Box':
        uuid = createBox(this.sizeFigure.value);
        break;
      case 'Shpere':
        uuid = createSphere(this.sizeFigure.value);
        break;
      case 'Pyramid':
        uuid = createPyramid(this.sizeFigure.value);
        break;
      default:
        alert('Что-то пошло не так! :D');
        break;
    }

    // add item to model
  }

  handleDelListItem({ target }) {
    const listItem = target.parentNode;

    // remove item from model
  }

  findLisyItem(id) {
    // поиск нужной фигуры в списке
  }

  addItem(figure) {
    // выбор фигуры которую нужно созать
    // добавить новый uuid в список
  }

  removeItem(item) {
    const listItem = this.findLisyItem(item.id);

    this.list.removeChild(listItem);
  }
}

export default View;
