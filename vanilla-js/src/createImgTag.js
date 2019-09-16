export default function createImgTag(imgName) {
  let img = document.createElement('img');
  img.src = `./assets/${imgName}.jpg`;
  img.alt = imgName;
  img.className = 'clickable img-clk rounded-sm';

  return img;
}
