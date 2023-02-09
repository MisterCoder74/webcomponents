class likebutton extends HTMLElement {
constructor() {
super();

var hcustomContent = this.innerHTML;
this.innerHTML = `<div class=likebutton style=\"--bg-color: ${this.getAttribute('bgcolor')}; --tx-color: ${this.getAttribute('textcolor')}; --hv-color: ${this.getAttribute('hovercolor')};\"><img style=\"vertical-align:middle\" src= ${this.getAttribute('image')} />` + hcustomContent + `</div>`;
}
}

window.customElements.define('like-button', likebutton);