import Viewer from './Viewer';
import DataStorage from './DataStorage';
import FormControl from './FormControl';

export default class App {
  constructor(viewerContainer) {
    // viewer
    // dataStorage
    this.viewer = new Viewer(viewerContainer);
    this.dataStorage = new DataStorage();
    this.formControl = new FormControl();
  }

  init() {
    this.formControl.init();
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
