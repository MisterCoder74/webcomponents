class hnav extends HTMLElement {
constructor() {
super();

var hcustomContent = this.innerHTML;
this.innerHTML = `<div class=hnav style=\"background-image: url(${this.getAttribute('image')}); --justify: ${this.getAttribute('align')}; --bg-color: ${this.getAttribute('bgcolor')}; --tx-color: ${this.getAttribute('textcolor')}; --hv-color: ${this.getAttribute('hovercolor')};\">` + hcustomContent + `</div>`;
}
}

window.customElements.define('h-nav', hnav);