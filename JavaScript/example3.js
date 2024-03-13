const fetch = require('node-fetch');

const getResponse = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}

// re-write getResponse function using async-await
const getResponseAsync = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getResponse();