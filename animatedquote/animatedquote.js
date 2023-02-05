class animatedquote extends HTMLElement {
constructor() {
super();

var hcustomContent = this.innerHTML;
this.innerHTML = `<div class=animated-border-quote style=\"--txt-align: ${this.getAttribute('textalign')};\"><blockquote><p>` + hcustomContent + `</p><cite> ${this.getAttribute('author')} </cite></blockquote></div>`;
}
}

window.customElements.define('animated-quote', animatedquote );