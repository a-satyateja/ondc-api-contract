// Full catalog refresh (Grocery)
const onSearchFullCatalogRefreshGrocery = {
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
        /** 70. This is information about the seller or business that is participating in the ONDC network */
        name: "Seller NP",
        symbol:
          "https://sellerNP.com/images/np.png" /** 71. Symbol of the seller/bpp */,
        short_desc: "Seller Marketplace",
        long_desc: "Seller Marketplace",
        images: ["https://sellerNP.com/images/np.png"],
        tags: [
          {
            code: "bpp_terms",
            list: [
              {
                code: "np_type",
                value: "ISN"
                /** 72. Values will be one of -
                 * ISN - Inventory Sharing Network
                 * Aggregator - Logistics Network
                 * FSN - Fulfilment Sharing Network */,
              },
              {
                code: "accept_bap_terms",
                value: "Y"
                /** 73. Whether seller/bpp accepts the bap terms.
                 * Y - Yes
                 * N - No */,
              },
              {
                code: "collect_payment" /** 74. Whether seller/bpp is going to collect payment, else it will be done by buyer app. */,
                value: "Y" /** 75. Y - Yes, N - No */,
              },
            ],
          },
        ],
      },
      "bpp/providers": [
        /** 76. List of providers associated with a bpp, each will have a unique id */
        {
          id: "P1" /** 77. Unique id of the provider */,
          time: {
            label: "enable"
            /** 78. Label to indicate if provider is currently active or not
             * enable - Provider is currently active
             * disable - Provider is not active
             */,
            timestamp:
              "2023-06-03T07:00:00.000Z" /** 79. Timestamp of enable/disable */,
          },
          fulfillments: [
            /** 80. List of fulfillments offered by the provider */
            {
              id: "F1",
              type: "Delivery",
              contact: {
                /** 81. Contact information for the fulfillment. Email is optional */
                phone: "9886098860" /** 82. Phone number of the provider */,
                email: "abc@xyz.com" /** 83. Email of the provider */,
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
                door: "123" /** 84. Optional */,
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
            true /** 85. Indicates whether the entity (bpp/provider) can be rated or not */,
          "@ondc/org/enabled_modes": [
            {
              code: "billable",
              list: [
                {
                  code: "gst_number",
                  value: "XXXXXXXXX" /** 86. Seller GSTIN */,
                },
                {
                  code: "pan_number",
                  value: "AAAAAAAAA" /** 87. Seller PAN */,
                },
                {
                  code: "bank_account_number",
                  value: "XXXXXXXXXX" /** 88. Seller Bank Account number */,
                },
                {
                  code: "ifsc_code",
                  value: "XXXXXXXXXX" /** 89. Seller Bank IFSC Code */,
                },
                {
                  code: "bank_name",
                  value: "ABC Bank" /** 90. Seller Bank Name */,
                },
                {
                  code: "branch_name",
                  value: "XYZ Branch" /** 91. Seller Bank Branch Name */,
                },
                {
                  code: "account_holder_name",
                  value: "Mr ABC" /** 92. Seller Bank Account Holder Name */,
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
                name: "Grocery",
              },
            },
          ],
          items: [
            {
              id: "IT1693245726820",
              parent_item_id: "IT1693245726820",
              descriptor: {
                name: "Sugar - 1KG",
                code: "GROSugar1KG",
                symbol: "https://sellerNP.com/images/np.png",
                short_desc: "Sugar - 1KG",
                long_desc: "Sugar - 1KG",
                images: ["https://sellerNP.com/images/np.png"],
                audio: "https://sellerNP.com/audio/np.mp3",
                "3d_render": "https://sellerNP.com/3d_render/np.glb",
              },
              price: {
                currency: "INR",
                value: "50",
              },
              category_id: "category1",
              fulfillment_ids: ["F1", "F2", "F3"],
              location_id: "L1",
              matched: true,
              related: true,
              recommended: true,
              tags: [
                {
                  code: "item_terms" /** 93. Terms and conditions at item level */,
                  list: [
                    {
                      code: "return_window" /** 94. Duration within which item can be returned */,
                      value: "PT30M" /** 95 ISO8601 duration format */,
                    }, // ... (previous code)

                    {
                      code: "ttl_approval" /** 96. The duration within which the Seller App needs to approve or reject the return request */,
                      value: "PT24H",
                    },
                    {
                      code: "ttl_reverseqc" /** 97. The duration for initiating reverse quality check */,
                      value: "P3D",
                    },
                    {
                      code: "return_window",
                      value: "P7D",
                    },
                    {
                      code: "seller_pickup_return",
                      value: "Y",
                    },
                    {
                      code: "time_to_ship",
                      value: "P1D",
                    },
                  ],
                },
                {
                  code: "statutory_reqs_packaged_commodities" /** 98. Statutory Requirements for Packaged Commodities */,
                  list: [
                    {
                      code: "manufacturer_or_packer_name",
                      value: "HANTEX",
                    },
                    {
                      code: "manufacturer_or_packer_address",
                      value:
                        "Hantex Head office, Oottukuzhi, Thiruvananthapuram",
                    },
                    {
                      code: "common_or_generic_name_of_commodity",
                      value: "Bedsheet",
                    },
                    {
                      code: "month_year_of_manufacture_packing_import",
                      value: "01/2023",
                    },
                  ],
                },
                {
                  code: "origin" /** 99. Identifies the origin of the item */,
                  list: [
                    {
                      code: "country",
                      value: "IND" /** 100. ISO 3166-1 alpha-3 code */,
                    },
                  ],
                },
                {
                  code: "image" /** 101. Images for statutory requirements - optional */,
                  list: [
                    {
                      code: "type",
                      value: "back_image",
                    },
                    {
                      code: "url",
                      value: "https://sellerNP.com/images/i1_back_image.png",
                    },
                  ],
                },
                {
                  code: "attribute" /** 102. Item attributes defined here (mapping of attributes to keys e.g \"Brand\" => \"brand\") - populating with valid values will enable better discoverability on buyer NPs, suggestive enums [here](https://github.com/ONDC-Official/ondc-protocol/blob/main/core/domain-retail/item_attributes.md); */,
                  list: [
                    {
                      code: "brand",
                      value: "Hiyanshi",
                    },
                    {
                      code: "colour",
                      value: "#000000",
                    },
                    {
                      code: "material",
                      value: "cotton",
                    },
                  ],
                },
              ],
            },
          ],
          creds: [
            /** 103. credentials for provider (optional); */
            {
              id: "ESG-12345678" /** 104. globally identifiable identity or unique ID provided by seller app; mandatory if creds are provided; */,
              descriptor: {
                /** 105. code is tag, short_desc is subtag for the credential; */
                code: "ESG-12345678",
                short_desc: "ESG-12345678-FF",
                name: "Dun & Bradstreet ESG Badge No.",
              },
              url: "https://abcd.cdn.com/images/badge-img" /** 106. display URL for credential, optional; */,
              tags: [
                {
                  code: "verification",
                  list: [
                    {
                      code: "verify_url",
                      value: "https://abcd.dnb.com/verify?id='ESG-12345678'",
                    },
                    {
                      code: "valid_from",
                      value: "2023-06-03T00:00:00:000Z",
                    },
                    {
                      code: "valid_to" /** 107. optional, only if available; */,
                      value: "2024-06-03T23:59:59:999Z",
                    },
                  ],
                },
              ],
            },
          ],
          tags: [
            {
              code: "order_value" /** 108. for defining order value (e.g. min order value) for provider; */,
              list: [
                {
                  code: "min_value" /** 109. minimum order value for provider (up to 2 decimals); */,
                  value: "2000.00",
                },
              ],
            },
            {
              code: "catalog_link" /** 110. option for catalog response using link or inline (default); */,
              list: [
                {
                  code: "type",
                  value:
                    "inline" /** 111. enum - \"link\" (link to zip file for items array for the provider), \"inline\" (items array in inline response, which is the default today); */,
                },
                {
                  code: "type_value" /** 112. authorized link URL, required only if type = \"link\"; in this case, items array won\u2019t be a part of inline response; */,
                  value: "https://s3.amazon.com/x-12349.zip",
                },
                {
                  code: "type_validity" /** 113. authorized link validity from last_update, required only if type = \"link\"; */,
                  value: "PT24H",
                },
                {
                  code: "last_update" /** 114. timestamp for last update of link (RFC3339), required only if type = \"link\"; */,
                  value: "2023-05-21T00:00:00:000Z",
                },
              ],
            },
            {
              code: "timing",
              list: [
                {
                  code: "type",
                  value:
                    "Order" /** 115. timing for fulfillment type, enum - \"Order\" (online order processing timings), \"Delivery\" (order shipment timings, will be same as delivery timings for hyperlocal), \"Self-Pickup\" (self-pickup timings), \"All\" (same timing for all fulfillments supported by seller); example shows store open 24x7: Monday to Sunday (0000 - 2359); */,
                },
                {
                  code: "location",
                  value: "L1" /** 116. location id for provider; */,
                },
                {
                  code: "day_from",
                  value:
                    "1" /** 117. valid value - day of week (\"1\" - Monday, \"7\" - Sunday); */,
                },
                {
                  code: "day_to",
                  value:
                    "7" /** 118. valid value - day of week (\"1\" - Monday, \"7\" - Sunday), day_to >= day_from; */,
                },
                {
                  code: "time_from",
                  value:
                    "0000" /** 119. valid value - 24hr format (\"0000\" to \"2359\"); */,
                },
                {
                  code: "time_to",
                  value:
                    "2359" /** 120. valid value - 24hr format (\"0000\" to \"2359\"), time_to >= time_from; */,
                },
              ],
            },
            {
              code: "timing",
              list: [
                {
                  code: "type",
                  value: "Self-Pickup",
                },
                {
                  code: "location",
                  value: "L1",
                },
                {
                  code: "day_from",
                  value: "1",
                },
                {
                  code: "day_to",
                  value: "7",
                },

                {
                  code: "time_from",
                  value: "0000",
                },
                {
                  code: "time_to",
                  value: "2359",
                },
              ],
            },
          ],
        },
      ],
    },
  },
};
