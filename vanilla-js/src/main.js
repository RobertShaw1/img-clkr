
class BeautifulImg {
  constructor(imgElement, i) {
    this.img = imgElement;
    this.img.id = this.img.alt || `img${i}`;
    this.clickCount = 0;

    this.img.onclick = this.incrementClickCount;
  }

  incrementClickCount = () => {
    this.clickCount++
    this.img.nextElementSibling.textContent = this.clickCount;
  }

}


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
