export default class DataStorage {
  constructor() {
    this.data = [];
  }

  setData(data) {
    this.data = this.data.push(data);
  }

  getData() {
    //
  }

  removeSmth(uuid) {
    if (uuid in this.data) {
      delete this.data.id;
    }

    //  find item for delete
    // for (let i = 0, i > this.data.length; i++)
    // if (uuid === this.data[i].uuid) {
    //     delete this.data[i];
    // }
  }
}
