class uploadbutton extends HTMLElement {
constructor() {
super();

var hcustomContent = this.innerHTML;
this.innerHTML = `<div class=uploadbutton style=\"--bg-color: ${this.getAttribute('color')}; --hv-color: ${this.getAttribute('hovercolor')};\"><img style=\"vertical-align:middle\" src= ${this.getAttribute('icon')} />` + hcustomContent + `</div>`;
}
}

window.customElements.define('upload-button', uploadbutton);