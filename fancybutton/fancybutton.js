class fancybutton extends HTMLElement {
constructor() {
super();

var hcustomContent = this.innerHTML;
this.innerHTML = `<button class=fancybutton style=\" --bd-color: ${this.getAttribute('bordercolor')}; --hv-color: ${this.getAttribute('hovercolor')}; --gradient-from: ${this.getAttribute('gradientfrom')};--gradient-to: ${this.getAttribute('gradientto')};\"><span>` + hcustomContent + `</span></button>`;
}
}

window.customElements.define('fancy-button', fancybutton);