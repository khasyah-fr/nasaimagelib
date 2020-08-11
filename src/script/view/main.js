import DataSource from '../data/data-source.js';
import '../component/search-bar.js';
import '../component/image-list.js';
import '../component/apod-card';

let main = () => {


    let apodElement = document.querySelector("apod-card");

    let renderAPOD = async () => {
        try{
            apodElement.image = await DataSource.searchAPOD();
        } catch (message) {
            fallbackAPODResult(message);
        }
    }

    let fallbackAPODResult = message => {
        apodElement.renderError(message);
    };

    renderAPOD();

    let searchElement = document.querySelector("search-bar");
    
    let imageListElement = document.querySelector("image-list");

    let onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchImage(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
     };

    let renderResult = results => {
        imageListElement.images = results;
    };

    let fallbackResult = message => {
        imageListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;