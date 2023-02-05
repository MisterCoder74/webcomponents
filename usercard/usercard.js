class usercard extends HTMLElement {
constructor() {
super();

var hcustomContent = this.innerHTML;
this.innerHTML = `<div class=usercard><h1> ${this.getAttribute('heading')} </h1><img src= ${this.getAttribute('avatar')} /><p>` + hcustomContent + `</p></div>`;
}
}

window.customElements.define('user-card', usercard);