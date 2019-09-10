import BeautifulImg from './BeautifulImg';

function configureImages(imgCollection) {
  const beautifulImgList = [];
  for (let i = 0; i < imgCollection.length; i++) {
    const img = imgCollection[i];
    beautifulImgList.push(new BeautifulImg(img, i));
  }
}

window.onload = event => {
  const imgCollection = document.querySelectorAll('.img-clk');
  configureImages(imgCollection);
}
