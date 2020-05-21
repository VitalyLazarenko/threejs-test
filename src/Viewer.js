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

    this.randomSettings = {
      minX: -30,
      maxX: 30,
      minY: -17,
      maxY: 17,
      minZ: 30,
      maxZ: -30,
    };
  }

  init() {
    this.scene.add(this.axesHelper);
    this.renderer.setSize(this.renderWidth, this.renderHeight);
    this.camera.position.z = 120;
    this._animate();
  }

  createFigure(name, size) {
    let newFigure;
    switch (name) {
      case 'Box':
        newFigure = this.createBox(size);
        break;
      case 'Shpere':
        newFigure = this.createSphere(size);
        break;
      case 'Pyramid':
        newFigure = this.createPyramid(size);
        break;
      default:
        alert('Something went wrong! :D');
        break;
    }
    return newFigure;
  }

  createBox(size) {
    const geometry = new THREE.BoxGeometry(size, size, size);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
    });

    const cube = new THREE.Mesh(geometry, material);

    cube.position.x =
      Math.floor(
        Math.random() *
          (this.randomSettings.maxX - this.randomSettings.minX + 1)
      ) + this.randomSettings.minX;
    cube.position.y =
      Math.floor(
        Math.random() *
          (this.randomSettings.maxY - this.randomSettings.minY + 1)
      ) + this.randomSettings.minY;
    cube.position.z =
      Math.floor(
        Math.random() *
          (this.randomSettings.maxZ - this.randomSettings.minZ + 1)
      ) + this.randomSettings.minZ;

    this.scene.add(cube);

    return {
      item_id: String(Date.now()),
      uuid: cube.uuid,
      name: 'Box',
      size: size,
    };
  }

  createSphere(size) {
    const geometry = new THREE.SphereGeometry(size, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0x0000ff,
      wireframe: true,
    });
    const sphere = new THREE.Mesh(geometry, material);

    sphere.position.x =
      Math.floor(
        Math.random() *
          (this.randomSettings.maxX - this.randomSettings.minX + 1)
      ) + this.randomSettings.minX;
    sphere.position.y =
      Math.floor(
        Math.random() *
          (this.randomSettings.maxY - this.randomSettings.minY + 1)
      ) + this.randomSettings.minY;
    sphere.position.z =
      Math.floor(
        Math.random() *
          (this.randomSettings.maxZ - this.randomSettings.minZ + 1)
      ) + this.randomSettings.minZ;

    this.scene.add(sphere);

    return {
      item_id: String(Date.now()),
      uuid: sphere.uuid,
      name: 'sphere',
      size: size,
    };
  }

  createPyramid(size) {
    const geometry = new THREE.CylinderGeometry(0, size, size, 4);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true,
    });

    const pyramid = new THREE.Mesh(geometry, material);

    pyramid.position.x =
      Math.floor(
        Math.random() *
          (this.randomSettings.maxX - this.randomSettings.minX + 1)
      ) + this.randomSettings.minX;
    pyramid.position.y =
      Math.floor(
        Math.random() *
          (this.randomSettings.maxY - this.randomSettings.minY + 1)
      ) + this.randomSettings.minY;
    pyramid.position.z =
      Math.floor(
        Math.random() *
          (this.randomSettings.maxZ - this.randomSettings.minZ + 1)
      ) + this.randomSettings.minZ;

    this.scene.add(pyramid);

    return {
      item_id: String(Date.now()),
      uuid: pyramid.uuid,
      name: 'piramid',
      size: size,
    };
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
  }
}
