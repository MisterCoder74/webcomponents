class userbadge extends HTMLElement {
constructor() {
super();

var hcustomContent = this.innerHTML;
this.innerHTML = `<div class=userbadge><h1> ${this.getAttribute('title')} </h1><div class=box><img src= ${this.getAttribute('image')} /><p>` + hcustomContent + `</p></div></div>`;
}
}

window.customElements.define('user-badge', userbadge);