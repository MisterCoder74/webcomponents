class productcard extends HTMLElement {
constructor() {
super();

var hcustomContent = this.innerHTML;
this.innerHTML = `<div class=productcard style=\"--bg-color: ${this.getAttribute('bgcolor')}; --bd-color: ${this.getAttribute('bordercolor')};\"><div id=cardimage style=\" --bd-color: ${this.getAttribute('bordercolor')};\"><img src= ${this.getAttribute('image')} /></div><div id=cardtitle style=\"--tx-color: ${this.getAttribute('textcolor')};  --tx-justify: ${this.getAttribute('align')};\"><b>${this.getAttribute('productname')}</b></div> <div id=cardbody style=\"--tx-color: ${this.getAttribute('textcolor')}; --tx-justify: ${this.getAttribute('align')};\"><p>` + hcustomContent + `</p></div></div>`;
}
}

window.customElements.define('product-card', productcard);