// Search by city
const searchByCity = {
  context: {
    domain:
      "ONDC:RET10" /** 12. updated domain namespace defined [here](https://github.com/ONDC-Official/ondc-protocol/tree/main/core); */,
    action: "search",
    country: "IND",
    city: "std:080" /** 13. city code for search that identifies the cities where sellers have stores. List of city codes, with pincode mapping, are [here](https://github.com/ONDC-Official/standard-specifications/blob/main/location/city_code.csv); */,
    core_version: "1.2.0",
    bap_id: "buyerNP.com" /** 14. subscriber id for buyer app; */,
    bap_uri:
      "https://buyerNP.com/ondc" /** 15. subscriber URI for buyer app; */,
    transaction_id: "T1",
    message_id: "M1",
    timestamp:
      "2023-06-03T08:00:00.000Z" /** 16. RFC3339 compliant timestamp; */,
    ttl: "PT30S" /** 17. validity of message; */,
  },
  message: {
    intent: {
      category: {
        /** 18. optional */
        id: "Foodgrains" /** 19. category id will be from this list; */,
      },
      fulfillment: {
        /** 20. optional, when not specified, all fulfillment types supported by provider should be returned in response;
                            - type: 
                                - Delivery
                                - Pickup
                                - OnDemand 
                            - customer
                            - provider_id // only if more than one provider for same network pariticipant */
        type: "Delivery",
      },
      payment: {
        "@ondc/org/buyer_app_finder_fee_type":
          "percent" /** 21. enum - \"percent\", \"amount\"; */,
        "@ondc/org/buyer_app_finder_fee_amount":
          "3" /** 22. buyer NP finder fee calculations are detailed [here](https://github.com/ONDC-Official/ondc-protocol/blob/main/core/fee-models.md); */,
      },
      tags: [
        {
          code: "bap_terms" /** 23. static terms for transaction level contract; */,
          list: [
            {
              code: "static_terms",
              value: "",
            },
            {
              code: "static_terms_new",
              value:
                "https://github.com/ONDC-Official/NP-Static-Terms/buyerNP_BNP/1.0/tc.pdf",
            },
            {
              code: "effective_date",
              value: "2023-10-01T00:00:00.000Z",
            },
          ],
        },
      ],
    },
  },
};

// Search by city (response as downloadable link)
const searchByCityDownloadableLink = {
  context: {
    domain: "ONDC:RET10",
    action: "search",
    country: "IND",
    city: "std:080",
    core_version: "1.2.0",
    bap_id: "buyerNP.com",
    bap_uri: "https://buyerNP.com/ondc",
    transaction_id: "T1",
    message_id: "M1",
    timestamp: "2023-06-03T08:00:00.000Z",
    ttl: "PT30S",
  },
  message: {
    intent: {
      payment: {
        "@ondc/org/buyer_app_finder_fee_type": "percent",
        "@ondc/org/buyer_app_finder_fee_amount": "3",
      },
      tags: [
        {
          code: "catalog_full",
          list: [
            {
              code: "payload_type",
              value: "link",
            },
          ],
        },
        {
          code: "bap_terms" /** 24. static terms for transaction level contract; */,
          list: [
            {
              code: "static_terms",
              value: "",
            },
            {
              code: "static_terms_new",
              value:
                "https://github.com/ONDC-Official/NP-Static-Terms/buyerNP_BNP/1.0/tc.pdf",
            },
            {
              code: "effective_date",
              value: "2023-10-01T00:00:00.000Z",
            },
          ],
        },
      ],
    },
  },
};

// Search by item
const searchByItem = {
  context: {
    domain:
      "ONDC:RET10" /** 26. updated domains defined [here](https://github.com/ONDC-Official/ondc-protocol/tree/main/core); */,
    action: "search",
    country: "IND",
    city: "std:080",
    core_version: "1.2.0",
    bap_id: "buyerNP.com",
    bap_uri: "https://buyerNP.com/ondc",
    transaction_id: "T1",
    message_id: "M1",
    timestamp: "2023-06-03T08:00:00.000Z",
    ttl: "PT30S",
  },
  message: {
    intent: {
      item: {
        descriptor: {
          name: "coffee",
        },
      },
      fulfillment: {
        type: "Delivery" /** 27. optional, when not specified, all fulfillment types supported by provider should be returned in response; */,
        end: {
          location: {
            gps: "12.974002,77.613458" /** 28. minimum 6 digit decimal precision for gps coordinates; */,
            address: {
              /** 29. optional; */ area_code: "560001",
            },
          },
        },
      },
      payment: {
        "@ondc/org/buyer_app_finder_fee_type": "percent",
        "@ondc/org/buyer_app_finder_fee_amount": "3",
      },
      tags: [
        {
          code: "bap_terms" /** 30. static terms for transaction level contract; */,
          list: [
            {
              code: "static_terms",
              value: "",
            },
            {
              code: "static_terms_new",
              value:
                "https://github.com/ONDC-Official/NP-Static-Terms/buyerNP_BNP/1.0/tc.pdf",
            },
            {
              code: "effective_date",
              value: "2023-10-01T00:00:00.000Z",
            },
          ],
        },
      ],
    },
  },
};

// Search by fulfillment end location
const searchByFulfillmentEndLocation = {
  context: {
    domain:
      "ONDC:RET10" /** 32. updated domains defined [here](https://github.com/ONDC-Official/ondc-protocol/tree/main/core); */,
    action: "search",
    country: "IND",
    city: "std:080",
    core_version: "1.2.0",
    bap_id: "buyerNP.com",
    bap_uri: "https://buyerNP.com/ondc",
    transaction_id: "T1",
    message_id: "M1",
    timestamp: "2023-06-03T08:00:00.000Z",
    ttl: "PT30S",
  },
  message: {
    intent: {
      fulfillment: {
        type: "Delivery" /** 33. optional, when not specified, all fulfillment types supported by provider should be returned in response */,
        end: {
          location: {
            gps: "12.974002,77.613458" /** 34. minimum 6 digit decimal precision for gps coordinates; */,
            address: {
              area_code: "560001",
            },
          },
        },
      },
      payment: {
        "@ondc/org/buyer_app_finder_fee_type": "percent",
        "@ondc/org/buyer_app_finder_fee_amount": "3",
      },
      tags: [
        {
          code: "bap_terms" /** 35. static terms for transaction level contract; */,
          list: [
            {
              code: "static_terms",
              value: "",
            },
            {
              code: "static_terms_new",
              value:
                "https://github.com/ONDC-Official/NP-Static-Terms/buyerNP_BNP/1.0/tc.pdf",
            },
            {
              code: "effective_date",
              value: "2023-10-01T00:00:00.000Z",
            },
          ],
        },
      ],
    },
  },
};

// Request incremental catalog refresh (pull)
const requestIncrementalCatalogRefreshPull = {
  context: {
    domain: "ONDC:RET10",
    action: "search",
    country: "IND",
    city: "*",
    core_version: "1.2.0",
    bap_id: "buyerNP.com",
    bap_uri: "https://buyerNP.com/ondc",
    transaction_id: "T1",
    message_id: "M1",
    timestamp: "2023-06-03T09:00:00.000Z",
    ttl: "PT30S",
  },
  message: {
    intent: {
      payment: {
        "@ondc/org/buyer_app_finder_fee_type": "percent",
        "@ondc/org/buyer_app_finder_fee_amount": "3",
      },
      tags: [
        {
          code: "catalog_inc" /** 36. start_time < Context.timestamp, end_time <= Context.timestamp, end_time > start_time; */,
          list: [
            {
              code: "start_time",
              value: "2023-06-03T08:00:00.000Z",
            },
            {
              code: "end_time",
              value:
                "2023-06-03T09:00:00.000Z" /** 37. should match the current time, i.e. Context.timestamp, so that the latest available update is sent; */,
            },
          ],
        },
        {
          code: "bap_terms" /** 38. static terms for transaction level contract; */,
          list: [
            {
              code: "static_terms",
              value: "",
            },
            {
              code: "static_terms_new",
              value:
                "https://github.com/ONDC-Official/NP-Static-Terms/buyerNP_BNP/1.0/tc.pdf",
            },
            {
              code: "effective_date",
              value: "2023-10-01T00:00:00.000Z",
            },
          ],
        },
      ],
    },
  },
};

// Request for incremental catalog refresh (push)
const requestIncrementalCatalogRefreshPush = {
  context: {
    domain: "ONDC:RET10",
    action: "search",
    country: "IND",
    city: "*",
    core_version: "1.2.0",
    bap_id: "buyerNP.com",
    bap_uri: "https://buyerNP.com/ondc",
    transaction_id: "T1",
    message_id: "M1",
    timestamp: "2023-06-03T08:00:00.000Z",
    ttl: "PT30S",
  },
  message: {
    intent: {
      payment: {
        "@ondc/org/buyer_app_finder_fee_type": "percent",
        "@ondc/org/buyer_app_finder_fee_amount": "3",
      },
      tags: [
        {
          code: "catalog_inc",
          list: [
            {
              code: "mode",
              value: "start",
            },
          ],
        },
        {
          code: "bap_terms" /** 39. static terms for transaction level contract; */,
          list: [
            {
              code: "static_terms",
              value: "",
            },
            {
              code: "static_terms_new",
              value:
                "https://github.com/ONDC-Official/NP-Static-Terms/buyerNP_BNP/1.0/tc.pdf",
            },
            {
              code: "effective_date",
              value: "2023-10-01T00:00:00.000Z",
            },
          ],
        },
      ],
    },
  },
};

// Stop incremental refresh (push)
const stopIncrementalRefreshPush = {
  context: {
    domain: "ONDC:RET10",
    action: "search",
    country: "IND",
    city: "*",
    core_version: "1.2.0",
    bap_id: "buyerNP.com",
    bap_uri: "https://buyerNP.com/ondc",
    transaction_id: "T1",
    message_id: "M1",
    timestamp: "2023-06-03T08:00:00.000Z",
    ttl: "PT30S",
  },
  message: {
    intent: {
      payment: {
        "@ondc/org/buyer_app_finder_fee_type": "percent",
        "@ondc/org/buyer_app_finder_fee_amount": "3",
      },
      tags: [
        {
          code: "catalog_inc",
          list: [
            {
              code: "mode",
              value: "stop",
            },
          ],
        },
      ],
    },
  },
};
