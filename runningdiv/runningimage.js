class runningdiv extends HTMLElement {
constructor() {
super();


var hcustomContent = this.innerHTML;
this.innerHTML = `<div class=runningdiv style=\"--bg-color: ${this.getAttribute('bgcolor')}; --tx-color: ${this.getAttribute('textcolor')};\" onmouseover=moveaway()><img style=\"vertical-align:middle\" src= ${this.getAttribute('image')} />`  + hcustomContent + `</div>`;
}
}


window.customElements.define('running-div', runningdiv);

function moveaway(){

document.querySelectorAll(".runningdiv").style.left = Math.random() * (window.innerWidth - 100) + 'px';
document.querySelectorAll(".runningdiv").style.top = Math.random() * (window.innerHeight - 100) + 'px';
}