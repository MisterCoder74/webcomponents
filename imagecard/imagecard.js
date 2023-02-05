class imagecard extends HTMLElement {
constructor() {
super();

var hcustomContent = this.innerHTML;
this.innerHTML = `<div class=imagecard style=\"background-image: url(${this.getAttribute('image')}); --bd-color: ${this.getAttribute('bordercolor')};\"><div id=cardtitle style=\"--tx-color: ${this.getAttribute('textcolor')};  --tx-justify: ${this.getAttribute('align')};\"><b>${this.getAttribute('title')}</b></div> <div id=cardbody style=\"--tx-color: ${this.getAttribute('textcolor')}; --tx-justify: ${this.getAttribute('align')};\"><p>` + hcustomContent + `</p></div></div>`;
}
}

window.customElements.define('image-card', imagecard);