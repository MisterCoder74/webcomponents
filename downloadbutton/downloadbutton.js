class downloadbutton extends HTMLElement {
constructor() {
super();

var hcustomContent = this.innerHTML;
this.innerHTML = `<div class=downloadbutton style=\"--bg-color: ${this.getAttribute('bgcolor')}; --tx-color: ${this.getAttribute('textcolor')}; --hv-color: ${this.getAttribute('hovercolor')};\"><img style=\"vertical-align:middle\" src= ${this.getAttribute('image')} />` + hcustomContent + `</div>`;
}
}

window.customElements.define('download-button', downloadbutton);