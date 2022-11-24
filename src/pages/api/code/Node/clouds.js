const request = require('request');
const API_KEY = '<key>';

const options = {
    'method': 'GET',
    'url': `https://status.adobe.io/api/v1/clouds?api_key=${API_KEY}&cloudId=<string>`,
    'headers': {
        'Authorization': 'Bearer <token>'
    }
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});
