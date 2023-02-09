class runningdiv extends HTMLElement {
constructor() {
super();


var hcustomContent = this.innerHTML;
this.innerHTML = `<div class=runningdiv style=\"--bg-color: ${this.getAttribute('bgcolor')}; --tx-color: ${this.getAttribute('textcolor')};\" onmouseover=moveaway()>`  + hcustomContent + `</div>`;
}
}


window.customElements.define('running-div', runningdiv);

function moveaway(){

document.querySelector(".runningdiv").style.left = Math.random() * (window.innerWidth - 100) + 'px';
document.querySelector(".runningdiv").style.top = Math.random() * (window.innerHeight - 100) + 'px';
}