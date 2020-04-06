export default class DataStorage {

    constructor() {
        // 
    }

    setData(data) {
        this.data = data;
    }

    updateData() {
        //
    }

    removeSmth(id) {
        if (id in this.data) {
            delete this.data.id;
        }
    }
}