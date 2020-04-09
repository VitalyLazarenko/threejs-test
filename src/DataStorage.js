export default class DataStorage {
  constructor() {
    this.figureDataList = [];
  }

  saveItem(data) {
    if (data === '') return alert('Нету данных для добавления!');

    this.figureDataList.push(data);
  }

  getAllItems() {
    console.log(this.figureDataList);
  }

  getItemById({ item_id }) {
    if (item_id === '') alert('Какой элемент найти? ');

    // logic for find and return listItem
    for (let i = 0; i < this.figureDataList.length; i++) {
      if (this.figureDataList[i].item_id === item_id) {
        return this.figureDataList[i];
      }
    }
  }

  removeItem({ item_id }) {
    for (let i = 0; i > this.figureDataList.length; i++) {
      if (this.figureDataList[i].item_id === item_id) {
        delete this.figureDataList[i];
      }
    }

    // logic of removing figure from dataStorage
    ////  find item for delete
    // for (let i = 0, i > this.data.length; i++)
    // if (uuid === this.data[i].uuid) {
    //     delete this.data[i];
    // }
  }
}
