---
title: Guides - Status API
description: This is the guides overview page of Status API 
---

# Get Started

Adobe Status API's provide detailed information and real time updates about Adobe cloud products and services outage, disruption and maintenance events. Use these APIs to integrate into your own monitoring system or dashboards to view near real-time events from Adobe Status that can be filtered based on Product, Product Offering, Region, Environment (where available), Locale and Event types.
API paths:

Gateway URL: https://status.adobe.io

Base URL: https://status.adobe.io/api/v1/

API Key: StatusAdobeIOClient


Example of a complete path for making an API call - 

```bash
curl --location --request GET 'https://status.adobe.io/api/v1/events?api_key=<key> --header 'Authorization: Bearer <JWT token>'
```



## Prerequisites

Users associated with Adobe products can able to access the Adobe Status API <br /><br />

- To access Adobe Status API, you would need to have at least one entitlement for Adobe products/services in your organization, and administrative permission for your org to create integrations.
- You need to have a JWT access token to access Status API

## JWT Access Token

Use the [Adobe Developer Console](https://developer.adobe.com/console/home) to obtain client credentials and JWT access token by creating a new Project. Once you create a project, you can add Adobe Status API that includes API Keys (Client ID) and other access credentials. You can then obtain a secure access token from Adobe for each API session.

To learn more about creating projects in Adobe Developer Console, read the [Console getting started guide](https://developer.adobe.com/developer-console/docs/guides/getting-started/).

<InlineAlert variant="info" slots="text"/>

Note: A project can include one or more services. In many cases, you will use the same client credentials to access multiple Adobe products and services.

## Onboard to Status API

### Steps

1. Login to [Adobe Developer Console](https://developer.adobe.com/console/home)
2. Create a new project ![New Project](../../../static/images/steps/new-project.png "New Project")
3. Add Adobe Status API to the project. Adobe Status API card will show up if there is at least one entitlement for Adobe products/services in your organization, and administrative permission for your org to create integrations. ![Add API](../../../static/images/steps/add-api.png "Add API") ![Choose API](../../../static/images/steps/choose-api.png "Choose API")
4. Create a new service account (JWT) credential with key pair ![Key Pair](../../../static/images/steps/key-pair.png "Key Pair")
5. Generate key pair and download it. It contains all your app settings, along with the only copy of your private key. Since Adobe does not record your private key, make sure to securely store the downloaded file. ![Key Pair Download](../../../static/images/steps/key-pair-download.png "Key Pair Download")
6. Select product profile and save the configured Status API ![Profile Choose](../../../static/images/steps/profile-choose.png "Profile Choose")
7. Once client Id and client secret created for you, follow these instructions to generate JWT access token  - https://developer.adobe.com/developer-console/docs/guides/authentication/JWT/ . This token is needed while accessing Adobe Status API. The token is valid for 24 hours after it has been issued. 
    - To manually generate JWT access token from [Developer Console](https://developer.adobe.com/console/home), private key is mandatory. Go to your Project -> Service Account (JWT) -> Generate JWT -> Generate custom JWT, paste your private key there and click ‘Generate’. A JWT access token will be generated for you. ![Generate JWT](../../../static/images/steps/generate-jwt.png "Generate JWT") ![JWT Result](../../../static/images/steps/jwt-result.png "JWT Result")
    - To programmatically generate JWT access token, you will need client ID, technical account ID, Org ID, Client secret and private key. These can be obtained from Project -> Service Account (JWT). Sample codes to generate JWT access token - https://statusapi-doc-nld2.cloud.adobe.io/#section/Authentication. See API Endpoint Reference section for credentials to access the sample codes. ![JWT Credentials](../../../static/images/steps/credentials.png "JWT Credentials")


## Product Hierarchy

On Status.adobe.com, the hierarchy for product taxonomy is Adobe Cloud -> Product -> Product Offering -> Business Services -> Regions - > Environments (Where applicable). You will need to call Clouds API to get a list of all Clouds and Products and use those ids to call either the Registry API’s or the Events API’s.

Registry API’s will provide taxonomy details like Product Offerings, Business Services, Regions, Environments, Locales and Event canned Messages. Events API’s will provide events details like ongoing events, events from the past 40 days, and future maintenances, for all Adobe Clouds and Products. The parameters that you can use to call these APIs are defined in the API Endpoint Reference document.

## Sample API calls

- Get Product id
    - Go to Registry -> Clouds
    - GET Product id - https://status.adobe.io/api/v1/clouds?api_key=StatusAdobeIOClient
    - Example 
    ```bash
    curl --location --request GET 'https://status.adobe.io/api/v1/clouds?cloudId=503460&api_key=<key> --header 'Authorization: Bearer <JWT token>'
    ```

    - For code samples in Javascript, CLI and Node JS - https://statusapi-doc-nld2.cloud.adobe.io/#tag/Registry

- Get all ongoing events by Product
    - Go to Events -> All Events
    - GET events by Product id - https://status.adobe.io/api/v1/events?api_key=StatusAdobeIOClient&id={Product_ID}
    - Example
    ```bash
    curl --location --request GET 'https://status.adobe.io/api/v1/events?from=2022-11-02&to=2022-11-03&api_key=StatusAdobeIOClient&productIds=503462' --header 'Authorization: Bearer <JWT token>'
    ```
    - For code samples in Javascript, CLI and Node JS - https://statusapi-doc-nld2.cloud.adobe.io/#tag/Events
- Get all localized event messages for an event
    - GET messages by locale - https://status.adobe.io/api/v1/messages/en?api_key=StatusAdobeIOClient&languageCode=en
    - Example 
    ```bash
    curl --location --request GET 'https://status.adobe.io/api/v1/messages/en?languageCode=en&api_key=<key> --header 'Authorization: Bearer <JWT token>'
    ```
     - For code samples in Javascript, CLI and Node JS - https://statusapi-doc-nld2.cloud.adobe.io/#tag/Registry/operation/messagesUsingGET_1



