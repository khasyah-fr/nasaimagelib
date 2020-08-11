class ImageItem extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set image(image){
        this._image = image;
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
            :host{
                display: block;
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
            }
            
            .imagePic {
                width: 100%;
                max-height: 300px;
                object-fit: cover;
                object-position: center;
            }
            
            .image-info {
                padding: 24px;
            }
            
            .image-info > h2 {
                font-weight: lighter;
            }
            
            </style>

           <img class="imagePic" src="${this._image.links[0].href}" alt="Fan Art">
           <div class="image-info">
               <h2>${this._image.data[0].title}</h2>
           </div>`;
    }
}

customElements.define("image-item", ImageItem);