const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer <token>");
const API_KEY = '<key>';

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch(`https://status.adobe.io//api/v1/events/scheduled?api_key=${API_KEY}&cloudIds=<string>&environmentIds=<string>&from=<date>&offeringIds=<string>&productIds=<string>&regionIds=<string>&search=<string>&serviceIds=<string>&to=<date>`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));