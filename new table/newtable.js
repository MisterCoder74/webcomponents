class mytable extends HTMLElement {
connectedCallback() {
this.innerHTML = `<table border=1 width=20%><tr><td>1,1</td><td>1,2</td><td>1,3</td></tr><tr><td>1,2</td><td>2,2</td><td>3,2</td></tr><tr><td>1,3</td><td>2,3</td><td>3,3</td></tr></table>`;
}
}

window.customElements.define('new-table', mytable);
