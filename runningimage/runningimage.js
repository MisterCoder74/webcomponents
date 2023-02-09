class runningimage extends HTMLElement {
constructor() {
super();


var hcustomContent = this.innerHTML;
this.innerHTML = `<div class=runningimage style=\"--bd-color: ${this.getAttribute('bordercolor')};\" onmouseover=moveaway()><img style=\"vertical-align:middle\" src= ${this.getAttribute('image')} />`  + hcustomContent + `</div>`;
}
}


window.customElements.define('running-image', runningimage);

function moveaway(){

document.querySelector(".runningimage").style.left = Math.random() * (window.innerWidth - 100) + 'px';
document.querySelector(".runningimage").style.top = Math.random() * (window.innerHeight - 100) + 'px';
}