const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer <token>");
const API_KEY = '<key>';

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch(`https://status.adobe.io/api/v1/products?api_key=${API_KEY}&cloudId=<string>&productId=<string>`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));