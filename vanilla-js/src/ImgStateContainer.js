export default class ImgStateContainer {
  constructor(imgElement, i) {
    this.img = imgElement;
    this.img.id = this.img.alt || `img${i}`;
    this.clickCount = 0;

    this.img.onclick = this.incrementClickCount;
  }

  incrementClickCount = () => {
    this.clickCount++
    const imgCounter = document.getElementById(`${this.img.alt}-counter`);
    imgCounter.textContent = this.clickCount;
  }

}

/**
 * To add a new element to the HTML DOM, you must create the element (element node) first,
 * and then append it to an existing element.
 * https://www.w3schools.com/js/js_htmldom_nodes.asp
 *
 * The most performant way to add elements to the DOM
 * https://howchoo.com/g/mmu0nguznjg/learn-the-slow-and-fast-way-to-append-elements-to-the-dom#conclusion
*/

