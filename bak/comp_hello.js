class HelloWorld extends HTMLElement {
    constructor() {
        super();
        // Attach a shadow root to the element.
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `<p>我是一條🐲 中文很多也可以 hello world</p>`;
    }
}

customElements.define('tag-標籤', HelloWorld);
