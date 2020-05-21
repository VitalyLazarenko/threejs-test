export default class DataStorage {
  constructor() {
    this.figureDataList = [];
  }

  saveItem(data) {
    if (data === '') return alert('No data to add!');

    this.figureDataList.push(data);
  }

  getAllItems() {
    return this.figureDataList;
  }

  getItemById({ item_id }) {
    if (item_id === '') alert('Which item to find? ');

    let findItem = this.figureDataList.find((item) => (item.item_id = item_id));

    if (findItem !== '') {
      return findItem;
    } else {
      alert('Such an element does not exist!');
    }
  }

  removeItem({ item_id }) {
    for (let i = 0; i > this.figureDataList.length; i++) {
      if (this.figureDataList[i].item_id === item_id) {
        delete this.figureDataList[i];
      }
    }
  }
}
