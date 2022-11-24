const request = require('request');
const API_KEY = '<key>';

const options = {
    'method': 'GET',
    'url': `https://status.adobe.io/api/v1/events/maintenance?api_key=${API_KEY}&cloudIds=<string>&environmentIds=<string>&from=<date>&offeringIds=<string>&productIds=<string>&regionIds=<string>&search=<string>&serviceIds=<string>&to=<date>`,
    'headers': {
        'Authorization': 'Bearer <token>'
    }
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});
