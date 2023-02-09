class starrating extends HTMLElement {
constructor() {
super();

var imgchain = '';
var ratingvalue = parseInt(this.getAttribute('value'));
for(var i = 1; i <= ratingvalue; i++){
imgchain += '<img src=\"rating_icon.png\">'

}
var hcustomContent = this.innerHTML;
this.innerHTML = `<div class=starrating style=\"--bg-color: ${this.getAttribute('color')}; --hv-color: ${this.getAttribute('hovercolor')};\">` + imgchain + `</div>`+ hcustomContent;
}
}

window.customElements.define('star-rating', starrating);