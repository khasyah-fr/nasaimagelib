class DataSource {
    
    static searchImage(keyword) {
        const API_KEY = "G6FfLXIoPOQO1ydMHFJGewyhbOFAk2UTLrPo8gx1";
        const Base_URL = "https://images-api.nasa.gov";
        return fetch(`${Base_URL}/search?q=${keyword}&media_type=image`)
        .then( response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson){
                return Promise.resolve(responseJson.collection.items);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        });
    }

    static searchAPOD() {   
        const API_KEY = "G6FfLXIoPOQO1ydMHFJGewyhbOFAk2UTLrPo8gx1";
        const Base_URL = "https://api.nasa.gov/planetary/apod";
        return fetch(`${Base_URL}?api_key=${API_KEY}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson){
                return Promise.resolve(responseJson);
            } else {
                return Promise.reject("No Photo For Today");
            }
        });
    }
}

export default DataSource;
