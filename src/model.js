class Model {
  constructor(state = []) {
    this.state = state;
  }

  getItem(uuid) {
    return this.state.find(item => item.uuid === uuid);
  }

  setItem(item) {
    this.state.push(item);
  }

  updateItem(uuid) {
    // обновление списка с uuid
    const item = this.getItem(uuid);
  }

  removeItem(uuid) {}
}

export default Model;
