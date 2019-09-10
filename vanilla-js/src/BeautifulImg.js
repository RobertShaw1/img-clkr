export default class BeautifulImg {
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
