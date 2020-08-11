class ApodCard extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set image(image){
        this._image = image;
        this.render();
    }

    render(){
        //TypeError: APOD karena fungsi render dievaluasi sebelum User menginput ke search bar. Hadeh javascript.
        let APOD = this._image;
        if(APOD.media_type === "video"){
            this.shadowDOM.innerHTML = `
                <style>
                * {
                    margin: 0;
                    padding: 8px;
                    box-sizing: border-box;
                }
                
                :host{
                    display: block;
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                }
                
                .iframe {
                    width: 100%;
                    max-height: 300px;
                    object-fit: cover;
                    object-position: center;
                }
                
                .card-title {
                    padding: 24px;
                }
                
                .card-desc {
                    font-weight: lighter;
                }
                    
                </style>

                <div class="card">
                    <h4 class="card-maintitle">Astronomy Picture Of The Day : ${APOD.title}</h4>
                    <iframe
                        src="${APOD.url}">
                    </iframe>
                    <h4 class="card-desc"> ${APOD.explanation} </h5>
                </div>`
        } else {
            this.shadowDOM.innerHTML = `
                <style>

                * {
                    margin: 0;
                    padding: 8px;
                    box-sizing: border-box;
                }

                :host{
                    display: block;
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                }

                .card-img {
                    width: 100%;
                    max-height: 300px;
                    object-fit: cover;
                    object-position: center;
                }
                
                .card-title {
                    padding: 24px;
                }

                .card-desc {
                    font-weight: lighter;
                }
                
                </style>

                <div class="card">
                    <h4 class="card-title">Astronomy Picture Of The Day : ${APOD.title}</h4>
                    <img src="${APOD.url}" class="card-img" alt="Astronomy Picture of The Day">
                    <h4 class="card-desc"> ${APOD.explanation} </h5>
                </div>`;
        }
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

customElements.define("apod-card", ApodCard);