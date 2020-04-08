export default class DataStorage {
  constructor() {
    this.figureDataList = [];
  }

  saveListItem(data) {
    
  }

  getItems() {
    return this.figureDataList;
  }

  getItemById(uuid) {
    // logic for find and return listItem
  }

  removeListItem(uuid) {
    // logic of removing figure from dataStorage

    ////  find item for delete
    // for (let i = 0, i > this.data.length; i++)
    // if (uuid === this.data[i].uuid) {
    //     delete this.data[i];
    // }
  }
}
