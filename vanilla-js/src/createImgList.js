import createImgTag from './createImgTag';

export default async function createImgList(arr) {
  let div = document.createElement('div');
  let p = document.createElement('p');
  let span = document.createElement('span');
  span.className = 'counter';
  span.textContent = 0;
  let documentFragment = document.createDocumentFragment();

  for (let i = 0; i < arr.length; i++) {
    const photo = arr[i];
    const img = createImgTag(photo);
    const imgContainer = div.cloneNode(true);
    const paragraph = p.cloneNode(true);
    const count = span.cloneNode(true);
    count.id = `${photo}-counter`
    paragraph.textContent = 'Number of times clicked: '
    paragraph.appendChild(count);

    imgContainer.textContent = photo;
    imgContainer.appendChild(img);
    imgContainer.appendChild(paragraph);
    imgContainer.className = 'flex flex-col m-1 mb-3 p-2 h-25 w-35'
    documentFragment.appendChild(imgContainer);
  }

  const main = document.getElementById('main');
  main.appendChild(documentFragment)
}
