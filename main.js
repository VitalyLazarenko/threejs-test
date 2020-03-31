const figure = document.getElementById('figure');
const range = document.getElementById('range');
const addFigure = document.getElementById('add-figure');
const listItems = document.getElementById('list');

const state = {
  uuid: [],
  window: {
    minX: -30,
    maxX: 30,
    minY: -17,
    maxY: 17
  }
};

function addNewFigure() {
  const figureName = figure.value;
  const figureSize = range.value;
  let uuid;

  switch (figureName) {
    case 'Box':
      uuid = createBox(figureSize);
      break;
    case 'Shpere':
      uuid = createSphere(figureSize);
      break;
    case 'Pyramid':
      uuid = createPyramid(figureSize);
      break;
    default:
      alert('Что-то пошло не так! :D');
      break;
  }

  listItems.appendChild(addListItem(uuid));
}

function addListItem(uuid) {
  const label = document.createElement('label');
  label.innerText = uuid;
  label.className = 'title';

  const delButton = document.createElement('button');
  delButton.className = 'delete';
  delButton.innerText = 'del';

  const listItem = document.createElement('li');
  listItem.className = 'list-item';
  listItem.title = uuid;
  listItem.appendChild(label);
  listItem.appendChild(delButton);

  bindEvent(listItem);

  return listItem;
}

function delListItem() {
  const itemList = this.parentNode;
  const uuid = itemList.title;

  let allChildren = scene.children;

  let delMesh;

  for (let i = 0; i < allChildren.length; i++) {
    if (allChildren[i].uuid === uuid) {
      delMesh = allChildren[i];
    }
  }

  scene.remove(delMesh);
  listItems.removeChild(itemList);
}

function bindEvent(item) {
  const deleteButton = item.querySelector('button.delete');

  deleteButton.addEventListener('click', delListItem);
}

addFigure.addEventListener('click', addNewFigure);

const createBox = size => {
  const geometry = new THREE.BoxGeometry(size, size, size);
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.x =
    Math.floor(Math.random() * (state.window.maxX - state.window.minX + 1)) +
    state.window.minX;
  cube.position.y =
    Math.floor(Math.random() * (state.window.maxY - state.window.minY + 1)) +
    state.window.minY;

  scene.add(cube);

  const uuid = cube.uuid;

  return uuid;
};

const createSphere = size => {
  const geometry = new THREE.SphereGeometry(size, 32, 32);
  const material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    wireframe: true
  });
  const sphere = new THREE.Mesh(geometry, material);

  sphere.position.x =
    Math.floor(Math.random() * (state.window.maxX - state.window.minX + 1)) +
    state.window.minX;
  sphere.position.y =
    Math.floor(Math.random() * (state.window.maxY - state.window.minY + 1)) +
    state.window.minY;

  scene.add(sphere);
  const uuid = sphere.uuid;

  return uuid;
};

const createPyramid = size => {
  const geometry = new THREE.CylinderGeometry(0, size, size, 4);
  const material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    wireframe: true
  });

  const pyramid = new THREE.Mesh(geometry, material);

  pyramid.position.x =
    Math.floor(Math.random() * (state.window.maxX - state.window.minX + 1)) +
    state.window.minX;
  pyramid.position.y =
    Math.floor(Math.random() * (state.window.maxY - state.window.minY + 1)) +
    state.window.minY;

  scene.add(pyramid);

  const uuid = pyramid.uuid;

  return uuid;
};

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  120,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(1000, 840);
document.getElementById('view').appendChild(renderer.domElement);

camera.position.z = 9;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
