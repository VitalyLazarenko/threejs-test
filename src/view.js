import { createElements } from './helpers';

class View {
  constructor() {
    this.addFigure = document.getElementById('add-figure');
    this.sizeFigure = document.getElementById('range');
    this.nameFigure = document.getElementById('figure');
    this.list = document.getElementById('list');

    this.addFigure.addEventListener('click', this.handleAddFigure.bind(this));

    this.settings = {
      minX: -30,
      maxX: 30,
      minY: -17,
      maxY: 17,
      minZ: 30,
      maxZ: -30,
    };
  }

  handleAddFigure() {
    let figure;

    switch (this.nameFigure.value) {
      case 'Box':
        figure = createBox(this.sizeFigure.value);
        break;
      case 'Shpere':
        figure = createSphere(this.sizeFigure.value);
        break;
      case 'Pyramid':
        figure = createPyramid(this.sizeFigure.value);
        break;
      default:
        alert('Что-то пошло не так! :D');
        break;
    }

    createElement(figure.uuid);
    // add item to model
  }

  createBox(size) {
    const geometry = new THREE.BoxGeometry(size, size, size);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
    });
    const box = new THREE.Mesh(geometry, material);
    cube.position.x =
      Math.floor(
        Math.random() * (this.settings.maxX - this.settings.minX + 1)
      ) + this.settings.minX;
    cube.position.y =
      Math.floor(
        Math.random() * (this.settings.maxY - this.settings.minY + 1)
      ) + this.settings.minY;
    cube.position.z =
      Math.floor(
        Math.random() * (this.settings.maxZ - this.settings.minZ + 1)
      ) + this.settings.minZ;

    scene.add(box);

    return box;
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
        Math.random() * (this.settings.maxX - this.settings.minX + 1)
      ) + this.settings.minX;
    sphere.position.y =
      Math.floor(
        Math.random() * (this.settings.maxY - this.settings.minY + 1)
      ) + this.settings.minY;
    sphere.position.z =
      Math.floor(
        Math.random() * (this.settings.maxZ - this.settings.minZ + 1)
      ) + this.settings.minZ;

    scene.add(sphere);

    return sphere;
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
        Math.random() * (this.settings.maxX - this.settings.minX + 1)
      ) + this.settings.minX;
    pyramid.position.y =
      Math.floor(
        Math.random() * (this.settings.maxY - this.settings.minY + 1)
      ) + this.settings.minY;
    pyramid.position.z =
      Math.floor(
        Math.random() * (this.settings.maxZ - this.settings.minZ + 1)
      ) + this.settings.minZ;

    scene.add(pyramid);

    return pyramid;
  }

  createElement(uuid) {
    const id = new data();
    const item = createElements(uuid, id);

    return this.addEventListeners(item);
  }

  addEventListeners(item) {
    const deleteButton = item.querySelector('button.delete');

    deleteButton.addEventListener('click', this.removeItem.bind(this));

    return item;
  }

  removeItem({ target }) {
    const listItem = target.parentNode;

    const uuid = itemList.title;

    let allChildren = scene.children;

    let delMesh;

    for (let i = 0; i < allChildren.length; i++) {
      if (allChildren[i].uuid === uuid) {
        delMesh = allChildren[i];
      }
    }

    scene.remove(delMesh);
    listItems.removeChild(listItem);

    // remove item from model
  }

  // add scene and updateScene
}

export default View;
