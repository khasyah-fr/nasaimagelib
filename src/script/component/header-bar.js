class HeaderBar extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: block;
            width: 100%;
            background-color: #0b3d91;
            color: #ffffff;
        }
        h2 {
            padding: 14px;
            text-decoration: underline 4px;
            text-decoration-color: #99231b;
        }
        </style>
        <h2>NASA Image Library</h2>`;
    }
}

customElements.define("header-bar", HeaderBar);