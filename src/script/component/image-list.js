import './image-item.js';

class ImageList extends HTMLElement {

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

     set images(images){
        this._images = images;
        this.render();
     }

     render(){
        this.shadowDOM.innerHTML = "";
        this._images.forEach(image => {
            const imageItemElement = document.createElement("image-item");
            imageItemElement.image = image;
            this.shadowDOM.appendChild(imageItemElement);
        })
     }

     renderError(message){
        this.shadowDOM.innerHTML = `
        <style>

        .placeholder {
            font-weight: lighter;
            color: rgba(0,0,0,0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        
        </style>
        `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
     }
}

customElements.define("image-list", ImageList);