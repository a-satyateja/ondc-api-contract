// /on_search

// Full catalog refresh (F&B)
const onSearchFullCatalogRefreshFB = {
  context: {
    domain: "ONDC:RET11",
    country: "IND",
    city: "std:080",
    action: "on_search",
    core_version: "1.2.0",
    bap_id: "buyerNP.com",
    bap_uri: "https://buyerNP.com/ondc",
    bpp_id: "sellerNP.com",
    bpp_uri: "https://sellerNP.com/ondc",
    transaction_id: "T1",
    message_id: "M1",
    timestamp: "2023-06-03T08:00:30.000Z",
  },
  message: {
    catalog: {
      "bpp/fulfillments": [
        {
          id: "1",
          type: "Delivery",
        },
        {
          id: "2",
          type: "Self-Pickup",
        },
        {
          id: "3",
          type: "Delivery and Self-Pickup",
        },
      ],
      "bpp/descriptor": {
        /** 40. This is information about the seller or business that is participating in the ONDC network */
        name: "Seller NP",
        symbol:
          "https://sellerNP.com/images/np.png" /** 41. Symbol of the seller/bpp */,
        short_desc: "Seller Marketplace",
        long_desc: "Seller Marketplace",
        images: ["https://sellerNP.com/images/np.png"],
        tags: [
          {
            code: "bpp_terms",
            list: [
              {
                code: "np_type",
                value: "ISN",
                /** 42. Values will be one of -
                 * ISN - Inventory Sharing Network
                 * Aggregator - Logistics Network
                 * FSN - Fulfilment Sharing Network */
              },
              {
                code: "accept_bap_terms",
                value: "Y",
                /** 43. Whether seller/bpp accepts the bap terms.
                 * Y - Yes
                 * N - No */
              },
              {
                code: "collect_payment" /** 44. Whether seller/bpp is going to collect payment, else it will be done by buyer app. */,
                value: "Y" /** 45. Y - Yes, N - No */,
              },
            ],
          },
        ],
      },
      "bpp/providers": [
        /** 46. List of providers associated with a bpp, each will have a unique id */
        {
          id: "P1" /** 47. Unique id of the provider */,
          time: {
            label: "enable",
            /** 48. Label to indicate if provider is currently active or not
             * enable - Provider is currently active
             * disable - Provider is not active
             */ timestamp:
              "2023-06-03T07:00:00.000Z" /** 49. Timestamp of enable/disable */,
          },
          fulfillments: [
            /** 50. List of fulfillments offered by the provider */
            {
              id: "F1",
              type: "Delivery",
              contact: {
                /** 51. Contact information for the fulfillment. Email is optional */
                phone: "9886098860" /** 52. Phone number of the provider */,
                email: "abc@xyz.com" /** 53. Email of the provider */,
              },
            },
            {
              id: "F2",
              type: "Self-Pickup",
              contact: {
                phone: "9886098860",
                email: "abc@xyz.com",
              },
            },
            {
              id: "F3",
              type: "Delivery and Self-Pickup",
              contact: {
                phone: "9886098860",
                email: "abc@xyz.com",
              },
            },
          ],
          locations: [
            {
              id: "L1",
              gps: "12.974002,77.613458",
              address: {
                door: "123" /** 54. Optional */,
                name: "ABC Seller",
                building: "ABC Building",
                street: "Bannerghatta Road",
                locality: "Bilekahalli",
                ward: "BTM Layout",
                city: "Bengaluru",
                state: "Karnataka",
                country: "IND",
                area_code: "560076",
              },
            },
          ],
          rateable:
            true /** 55. Indicates whether the entity (bpp/provider) can be rated or not */,
          "@ondc/org/enabled_modes": [
            {
              code: "billable",
              list: [
                {
                  code: "gst_number",
                  value: "XXXXXXXXX" /** 56. Seller GSTIN */,
                },
                {
                  code: "pan_number",
                  value: "AAAAAAAAA" /** 57. Seller PAN */,
                },
                {
                  code: "bank_account_number",
                  value: "XXXXXXXXXX" /** 58. Seller Bank Account number */,
                },
                {
                  code: "ifsc_code",
                  value: "XXXXXXXXXX" /** 59. Seller Bank IFSC Code */,
                },
                {
                  code: "bank_name",
                  value: "ABC Bank" /** 60. Seller Bank Name */,
                },
                {
                  code: "branch_name",
                  value: "XYZ Branch" /** 61. Seller Bank Branch Name */,
                },
                {
                  code: "account_holder_name",
                  value: "Mr ABC" /** 62. Seller Bank Account Holder Name */,
                },
              ],
            },
          ],
          descriptor: {
            name: "ABC Seller",
            short_desc: "ABC Seller",
            long_desc: "ABC Seller",
            images: ["https://sellerNP.com/images/np.png"],
          },
          categories: [
            {
              id: "category1",
              descriptor: {
                name: "Food and beverages",
              },
            },
          ],
          items: [
            {
              id: "IT1693245726820",
              parent_item_id: "IT1693245726820",
              descriptor: {
                name: "Masala Dosa",
                code: "PUNMasalaDosa",
                symbol: "https://sellerNP.com/images/np.png",
                short_desc: "Crispy crepe filled with spiced potato filling",
                long_desc:
                  "Crispy crepe made from fermented rice and lentil batter, filled with a spiced potato filling, served with coconut chutney and sambar",
                images: ["https://sellerNP.com/images/np.png"],
                audio: "https://sellerNP.com/audio/np.mp3",
                "3d_render": "https://sellerNP.com/3d_render/np.glb",
              },
              price: {
                currency: "INR",
                value: "100",
              },
              category_id: "category1",
              fulfillment_ids: ["F1", "F2", "F3"],
              location_id: "L1",
              matched: true,
              related: true,
              recommended: true,
              tags: [
                {
                  code: "item_terms" /** 63. Terms and conditions at item level */,
                  list: [
                    {
                      code: "return_window" /** 64. Duration within which item can be returned */,
                      value: "PT30M" /** 65. ISO8601 duration format */,
                    },
                    {
                      code: "returnable",
                      value: "Y",
                    },
                    {
                      code: "cancellable",
                      value: "Y",
                    },
                    {
                      code: "time_to_ship" /** 66. Time required to ship (or prepare in case of self pickup) the item */,
                      value: "PT10M" /** 67. ISO8601 duration format */,
                    },
                  ],
                },
                {
                  code: "fssai_lic_no" /** 68. Mandatory for F&B */,
                  value: "11223344005566" /** 69. FSSAI license number */,
                },
              ],
            },
          ],
        },
      ],
    },
  },
};
