---
title: Guides - Status API
description: This is the guides overview page of Status API 
---

# Getting started with the Adobe Status API

There are several steps to take before using the Status APIs.

Permissions: Configure permissions for the developer in the Adobe Admin Console.  
API Client: Create a client configuration in the Adobe Developer Console.  
Authentication: Obtain the necessary credentials to send data to Adobe.  

Once the setup is complete you can refer to -  
Product hierarchy: View of Product taxonomy on status.adobe.com.  
Sample API calls: Some examples of API signature and prerequisites to call Status API's.  

## Permissions

Before starting to use the Status API, you must make sure that your account has the correct permissions to send requests. Even if you successfully authenticate with an Adobe ID, you cannot make requests to Adobe unless your account contains the correct organization permissions.

Your Organization needs to have entitlements for at least one Adobe product to be able to access Adobe APIs.

Give a developer correct API permissions as a product profile admin:

1. Navigate to adminconsole.adobe.com.
2. Check the organization name in the top right to make sure that you are logged in to the correct company.
3. Click Products, then click on any Adobe product that you want to assign permissions to.
4. Select the desired product profile, or create a new product profile.
5. Under the Permissions tab, assign the desired permissions to the product profile.
6. Once the desired permissions are set, click the Developers tab.
7. Click Add Developer, and enter the user name or email address that you want to assign the permissions to.
8. Click Save.
See Managing developers in the Enterprise Admin user guide for more information.

## API Client

Once you are a developer for a Adobe product profile, you can create an Sttaus API client in the Adobe Developer Console.

1. Login to [Adobe Developer Console](https://developer.adobe.com/console/home)
2. Create a new project ![New Project](../../../static/images/steps/new-project.png "New Project")
3. Add Adobe Status API to the project. Adobe Status API card will show up if there is at least one entitlement for Adobe products/services in your organization, and administrative permission for your org to create integrations. ![Add API](../../../static/images/steps/add-api.png "Add API") ![Choose API](../../../static/images/steps/choose-api.png "Choose API")

To learn more about creating projects in Adobe Developer Console, read the [Console getting started guide](https://developer.adobe.com/developer-console/docs/guides/getting-started/).
At this point, you decide how you want to authenticate with the API.

## Authentication

Status API needs JWT token for authentication. Follow the steps below to setup your access token -

1. Create a new service account (JWT) credential with key pair ![Key Pair](../../../static/images/steps/key-pair.png "Key Pair")
2. Generate key pair and download it. It contains all your app settings, along with the only copy of your private key. Since Adobe does not record your private key, make sure to securely store the downloaded file. ![Key Pair Download](../../../static/images/steps/key-pair-download.png "Key Pair Download")
3. Select product profile and save the configured Status API ![Profile Choose](../../../static/images/steps/profile-choose.png "Profile Choose")
4. Once client Id and client secret created for you, follow these instructions to generate JWT access token  - https://developer.adobe.com/developer-console/docs/guides/authentication/JWT/ . This token is needed while accessing Adobe Status API. The token is valid for 24 hours after it has been issued.
    - To manually generate JWT access token from [Developer Console](https://developer.adobe.com/console/home), private key is mandatory. Go to your Project -> Service Account (JWT) -> Generate JWT -> Generate custom JWT, paste your private key there and click ‘Generate’. A JWT access token will be generated for you. ![Generate JWT](../../../static/images/steps/generate-jwt.png "Generate JWT") ![JWT Result](../../../static/images/steps/jwt-result.png "JWT Result")
    - To programmatically generate JWT access token, you will need client ID, technical account ID, Org ID, Client secret and private key. These can be obtained from Project -> Service Account (JWT). Sample codes to generate JWT access token - https://statusapi-doc-nld2.cloud.adobe.io/#section/Authentication. See API Endpoint Reference section for credentials to access the sample codes. ![JWT Credentials](../../../static/images/steps/credentials.png "JWT Credentials")

Note: A project can include one or more services. In many cases, you will use the same client credentials to access multiple Adobe products and services.

## Product Hierarchy

On Status.adobe.com, the hierarchy for product taxonomy is Adobe Cloud -> Product -> Product Offering -> Business Services -> Regions - > Environments (Where applicable). You will need to call Clouds API to get a list of all Clouds and Products and use those ids to call either the Registry API’s or the Events API’s.

Registry API’s will provide taxonomy details like Product Offerings, Business Services, Regions, Environments, Locales and Event canned Messages. Events API’s will provide events details like ongoing events, events from the past 40 days, and future maintenances, for all Adobe Clouds and Products. The parameters that you can use to call these APIs are defined in the API Endpoint Reference document.

## Sample API calls

Gateway URL: https://status.adobe.io

Base URL: https://status.adobe.io/api/v1/

API Key: StatusAdobeIOClient

Example of a complete path for making an API call -

```bash
curl --location --request GET 'https://status.adobe.io/api/v1/events?api_key=<key> --header 'Authorization: Bearer <JWT token>'
```

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
