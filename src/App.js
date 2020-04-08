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

    // 0. send event about creation Figure with props
    // 1. add on scene box
    // 2. return UUID
    // 3. create item in HTML
    // 4. save UUID in DataStorage

    this.formControl.subscribe('addFigureEvent', (figureProps) => {
      const newFigureUUID = this.addNewFigureToViewer(figureProps);
      this.dataStorage.setData(newFigureUUID);
      this.formControl.addListItem(newFigureUUID);
    });
  }

  addNewFigureToViewer(figureProps) {
    switch (name) {
      case 'Box':
        console.log(name, ' : ', size);
        newFigure = this.viewer.createBox(size); // ?
        break;
      case 'Shpere':
        console.log(name, ' : ', size);
        newFigure = this.viewer.createSphere(size); // ?
        break;
      case 'Pyramid':
        console.log(name, ' : ', size);
        newFigure = this.viewer.createPyramid(size); // ?
        break;
      default:
        alert('Что-то пошло не так! :D');
        break;
    }
  }

  destroy() {
    // dataStorage.saveOnServer();
    console.log(2);
  }
}
