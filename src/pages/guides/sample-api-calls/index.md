# Sample API calls

Gateway URL: https://status.adobe.io

Base URL: https://status.adobe.io/api/v1/

API Key: StatusAdobeIOClient

Example of a complete path for making an API call -

```bash
curl --location --request GET 'https://status.adobe.io/api/v1/events?api_key=<key> --header 'Authorization: Bearer <OAuth token>'
```

- Get Product id
    - Go to Registry -> Clouds
    - GET Product id - https://status.adobe.io/api/v1/clouds?api_key=StatusAdobeIOClient
    - Example

    ```bash
    curl --location --request GET 'https://status.adobe.io/api/v1/clouds?cloudId=503460&api_key=<key> --header 'Authorization: Bearer <OAuth token>'
    ```

    - For code samples in Javascript, CLI and Node JS - https://statusapi-doc-nld2.cloud.adobe.io/#tag/Registry

- Get all ongoing events by Product
    - Go to Events -> All Events
    - GET events by Product id - https://status.adobe.io/api/v1/events?api_key=StatusAdobeIOClient&id={Product_ID}
    - Example

    ```bash
    curl --location --request GET 'https://status.adobe.io/api/v1/events?from=2022-11-02&to=2022-11-03&api_key=StatusAdobeIOClient&productIds=503462' --header 'Authorization: Bearer <OAuth token>'
    ```

    - For code samples in Javascript, CLI and Node JS - https://statusapi-doc-nld2.cloud.adobe.io/#tag/Events
- Get all localized event messages for an event
    - GET messages by locale - https://status.adobe.io/api/v1/messages/en?api_key=StatusAdobeIOClient&languageCode=en
    - Example

    ```bash
    curl --location --request GET 'https://status.adobe.io/api/v1/messages/en?languageCode=en&api_key=<key> --header 'Authorization: Bearer <OAuth token>'
    ```

     - For code samples in Javascript, CLI and Node JS - https://statusapi-doc-nld2.cloud.adobe.io/#tag/Registry/operation/messagesUsingGET_1
