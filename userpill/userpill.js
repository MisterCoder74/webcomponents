class userpill extends HTMLElement {
constructor() {
super();

var hcustomContent = this.innerHTML;
this.innerHTML = `<div class=userpill style=\"--bg-image: url(\'${this.getAttribute('image')}\'); --txt-color: ${this.getAttribute('textcolor')};\">  <div class=head><h1> ${this.getAttribute('title')} </h1></div> <div class=text>` + hcustomContent + `</div></div>`;
}
}

window.customElements.define('user-pill', userpill);