import Viewer from "./Viewer";
import DataStorage from "./Data";

export default class App {

    constructor(viewerContainer) {
        // viewer
        // dataStorage
        this.viewer = new Viewer(viewerContainer);
        this.dataStorage = new DataStorage();
    }

    init() {
        this.viewer.init();
        // service.getDataFromServer(() => {
        //     this.dataStorage.setData();
        // });
        // viewer.init( братан, вот тебе данные которые нужно отрисовать, клиент попросил по бырому);
        // dataStorage.init( братан, вот тебе данные которые нужно сохранить, клиент попросил по бырому);
        this.setListeners();
    
    }

    setListeners() {
        // resize();
        // scroll();
        // close();
    }

    destroy() {
        // dataStorage.saveOnServer();
        console.log(2);
    }
}