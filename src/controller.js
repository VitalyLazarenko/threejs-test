class Controller {
  constructor(model, view) {
    this.view = view;
    this.model = model;

    view.on('add', this.addFigure.bind(this));
  }

  addFigure() {
    this.view;
  }
}

export default Controller;
