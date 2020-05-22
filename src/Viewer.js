export default class Viewer {
  constructor(viewerContainer) {
    this.viewerContainer = viewerContainer;
    this.renderer = new THREE.WebGLRenderer();
    this.viewerContainer.appendChild(this.renderer.domElement);

    this.renderHeight = this.viewerContainer.offsetHeight;
    this.renderWidth = this.viewerContainer.offsetWidth;

    this.scene = new THREE.Scene();
    this.axesHelper = new THREE.AxesHelper(15);
    this.camera = new THREE.PerspectiveCamera(
      25,
      this.renderWidth / this.renderHeight,
      0.1,
      1000
    );

    this.randomCoordinatesLimits = {
      x: {
        min: -30,
        max: 30,
      },
      y: {
        min: -17,
        max: 17,
      },
      z: {
        min: -30,
        max: 30,
      },
    };
  }

  init() {
    this.scene.add(this.axesHelper);
    this.renderer.setSize(this.renderWidth, this.renderHeight);
    this.camera.position.z = 120;
    this.controls = new THREE.OrbitControls(
      this.camera,
      this.renderer.domElement
    );
    this._animate();
  }

  createFigure(name, size) {
    let geometry;
    let material;
    switch (name) {
      case 'Box':
        geometry = new THREE.BoxGeometry(size, size, size);
        material = new THREE.MeshBasicMaterial({
          color: 0x00ff00,
          wireframe: true,
        });
        break;
      case 'Shpere':
        geometry = new THREE.SphereGeometry(size, 32, 32);
        material = new THREE.MeshBasicMaterial({
          color: 0x0000ff,
          wireframe: true,
        });
        break;
      case 'Pyramid':
        geometry = new THREE.CylinderGeometry(0, size, size, 4);
        material = new THREE.MeshBasicMaterial({
          color: 0xff0000,
          wireframe: true,
        });
        break;
      default:
        alert('Something went wrong! :D');
        break;
    }

    const figure = new THREE.Mesh(geometry, material);

    figure.position.x = this.createRandomCordinates('x');
    figure.position.y = this.createRandomCordinates('y');
    figure.position.z = this.createRandomCordinates('z');

    this.scene.add(figure);

    return {
      item_id: String(Date.now()),
      uuid: figure.uuid,
      name: name,
      size: size,
    };
  }

  generateRandomCordinate(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  createRandomCordinates(axis) {
    return this.generateRandomCordinate(
      this.randomCoordinatesLimits[axis].min,
      this.randomCoordinatesLimits[axis].max
    );
  }

  deleteFigure({ uuid }) {
    let removeFigure;

    for (let i = 0; i < this.scene.children.length; i++) {
      if (this.scene.children[i].uuid === uuid) {
        removeFigure = this.scene.children[i];
      }
    }

    this.scene.remove(removeFigure);
  }

  _animate() {
    requestAnimationFrame(() => this._animate());
    this.renderer.render(this.scene, this.camera);
    this.controls.update();
  }
}
