class userbadge extends HTMLElement {
constructor() {
super();

var hcustomContent = this.innerHTML;
this.innerHTML = `<div class=userbadge><h1> ${this.getAttribute('heading')} </h1><div class=box><img src= ${this.getAttribute('avatar')} /><p>` + hcustomContent + `</p></div></div>`;
}
}

window.customElements.define('user-badge', userbadge);