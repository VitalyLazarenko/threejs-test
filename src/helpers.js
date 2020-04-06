function createElements(uuid, idItem) {
  const label = document.createElement('label');
  label.textContent = uuid;
  label.className = 'title';

  const delButton = document.createElement('button');
  delButton.className = 'delete';
  delButton.innerText = 'del';

  const listItem = document.createElement('li');
  listItem.className = 'list-item';
  listItem.title = uuid;
  listItem.appendChild(label);
  listItem.appendChild(delButton);
  listItem.setAttribute('item-id', idItem);

  bindEvent(listItem);

  return listItem;
}

export default createElements;
