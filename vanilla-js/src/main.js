import 'regenerator-runtime/runtime';

import createImgList from './createImgList';
import ImgStateContainer from './ImgStateContainer';

function configureImages(imgCollection) {
  const beautifulImgList = [];
  for (let i = 0; i < imgCollection.length; i++) {
    const img = imgCollection[i];
    beautifulImgList.push(new ImgStateContainer(img, i));
  }
}

window.onload = event => {
  const imgNames = [
    'dandelion',
    'butterfly',
  ];

  createImgList(imgNames)
    .then(() => {
      const imgCollection = document.querySelectorAll('.img-clk');
      configureImages(imgCollection);
    });
}
