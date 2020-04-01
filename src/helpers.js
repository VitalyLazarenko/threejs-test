function createElements(uuid) {
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

export default createElements;
