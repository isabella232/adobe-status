const request = require('request');
const API_KEY = '<key>';
const LOCALE = 'es'; // update needed locale 

const options = {
    'method': 'GET',
    'url': `https://status.adobe.io/api/v1/messages/${LOCALE}?api_key=${API_KEY}`,
    'headers': {
        'Authorization': 'Bearer <token>'
    }
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});
