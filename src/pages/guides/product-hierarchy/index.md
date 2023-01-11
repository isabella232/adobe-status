# Product Hierarchy

On Status.adobe.com, the hierarchy for product taxonomy is Adobe Cloud -> Product -> Product Offering -> Business Services -> Regions - > Environments (Where applicable). You will need to call Clouds API to get a list of all Clouds and Products and use those ids to call either the Registry API’s or the Events API’s.

Registry API’s will provide taxonomy details like Product Offerings, Business Services, Regions, Environments, Locales and Event canned Messages. Events API’s will provide events details like ongoing events, events from the past 40 days, and future maintenances, for all Adobe Clouds and Products. The parameters that you can use to call these APIs are defined in the API Endpoint Reference document.
