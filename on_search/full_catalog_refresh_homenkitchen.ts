// Full catalog refresh (Home & Kitchen)
const onSearchFullCatalogRefreshHomeAndKitchen = {
  context: {
    domain:
      "ONDC:RET16" /** 234. updated domain namespace is [here](https://github.com/ONDC-Official/ondc-protocol/tree/main/core); */,
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
        /** 235. descriptor for seller NP; */ name: "Seller NP",
        symbol:
          "https://sellerNP.com/images/np.png" /** 236. logo or image for seller NP; */,
        short_desc: "Seller Marketplace",
        long_desc: "Seller Marketplace",
        images: ["https://sellerNP.com/images/np.png"],
        tags: [
          {
            code: "bpp_terms",
            list: [
              {
                code: "np_type",
                value:
                  "MSN" /** 237. self-declaration of type of NP, enum - \"ISN\" (inventory seller), \"MSN\" (marketplace); */,
              },
              {
                code: "accept_bap_terms",
                value: "Y" /** 238. enum - \"Y\" (yes), \"N\" (no); */,
              },
              {
                code: "collect_payment" /** 239. optional - may be provided if seller NP wants to collect payment; */,
                value: "Y" /** 240. enum - \"Y\" (yes), \"N\" (no); */,
              },
            ],
          },
        ],
      },
      "bpp/providers": [
        /** 241. descriptor for seller (merchant) that processes & fulfills orders; */
        {
          id: "P1" /** 242. unique id for provider; */,
          time: {
            label:
              "enable" /** 243. enum - \"enable\" (default), \"disable\" (soft delete of provider from buyer NP cache); */,
            timestamp:
              "2023-06-03T07:00:30.000Z" /** 244. timestamp when the snapshot for this provider was taken at seller NP; */,
          },
          fulfillments: [
            /** 245. supported fulfillment modes; */
            {
              id: "F1",
              type: "Delivery",
              contact: {
                /** 246. contact details for this fulfillment mode; */
                phone: "9886098860" /** 247. phone number; */,
                email: "abc@xyz.com" /** 248. email id; */,
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
              type: "Buyer-Delivery",
              contact: {
                phone: "9886098860",
                email: "abc@xyz.com",
              },
            },
          ],
          descriptor: {
            name: "Store 1",
            symbol: "https://sellerNP.com/images/store1.png",
            short_desc: "Store 1",
            long_desc: "Store 1",
            images: ["https://sellerNP.com/images/store1.png"],
          },
          ttl: "P1D" /** 249. validity of this provider information; */,
          locations: [
            /** 250. pick up and delivery locations for this provider; */
            {
              id: "L1",
              time: {
                label:
                  "enable" /** 251. enum - \"enable\" (default), \"disable\" (soft delete of location from buyer NP cache); */,
                timestamp:
                  "2023-06-03T07:30:30.000Z" /** 252. timestamp when the snapshot for this location was taken at seller NP; */,
                days: "1,2,3,4,5,6,7",
                schedule: {
                  holidays: [
                    /** 253. list of holidays when closed */ "2023-08-15",
                  ],
                  frequency: "PT4H",
                  times: ["1100", "1900"],
                },
                range: {
                  start: "1100",
                  end: "2100",
                },
              },
              gps: "12.967555,77.749666",
              address: {
                locality:
                  "Jayanagar" /** 254. Please follow the address guidelines [here](https://github.com/ONDC-Official/standard-specifications/blob/main/location/address.md) */,
                street: "Jayanagar 4th Block",
                city: "Bengaluru",
                area_code: "560076",
                state: "KA",
              },
              circle: {
                gps: "12.967555,77.749666",
                radius: {
                  unit: "km",
                  value: "3",
                },
              },
            },
          ],
          items: [
            {
              id: "I1",
              time: {
                label:
                  "enable" /** 255. enum - \"enable\" (default), \"disable\" (soft delete of item from buyer NP cache); */,
                timestamp:
                  "2023-06-03T07:30:00.000Z" /** 256. timestamp when the snapshot for this item was taken at seller NP; */,
              },
              descriptor: {
                name: "Satin Double Bedsheet with Two Pillow Covers",
                code: "1:XXXXXXXXXXXXX" /** 257. seller's unique identifier for the item, can be kept same as the id if there is no internal code; */,
                symbol: "https://cdn.sellerNP.com/sellers/HANTEX/HAN2/1.jpg",
                long_desc:
                  "Hantex | Satin Double Bedsheet with Two Pillow Covers | Vertical Stripe Bedsheet | Horizontal Stripe Pillow Cover | Colour - Ochre, Fir Green & Pearl Beige | Viscose Rayon - Cotton Blend | Hantex | Handloom | Kerala Handcrafted Fabric | Kerala Kaithari ",
                short_desc:
                  "Satin Double Bedsheet with Two Pillow Covers | Vertical Stripe Bedsheet | Horizontal Stripe Pillow Cover | Colour - Ochre, Fir Green & Pearl Beige ",
                images: ["https://cdn.sellerNP.com/sellers/HANTEX/HAN2/1.jpg"],
              },
              quantity: {
                unitized: {
                  measure: {
                    unit: "unit" /** 258. Allowed values are defined [here](https://github.com/ONDC-Official/ondc-protocol/blob/main/core/domain-retail/quantity.md); */,
                    value: "3",
                  },
                },
                available: {
                  count: "99" /** 259. Current stock available */,
                },
                maximum: {
                  count: "99" /** 260. Maximum allowed per order */,
                },
              },
              price: {
                currency: "INR",
                value: "2808.00",
                maximum_value: "2808.0",
              },
              category_id:
                "Home Furnishings" /** 261. category id maps to the item's category; */,
              fulfillment_id: "F1",
              location_id: "L1",
              "@ondc/org/returnable":
                true /** 262. Indicates whether the item is returnable */,
              "@ondc/org/cancellable":
                true /** 263. Indicates whether the item is cancellable */,
              "@ondc/org/return_window": "PT1H",
              "@ondc/org/seller_pickup_return":
                true /** 264. Indicates whether the seller will arrange the return pickup */,
              "@ondc/org/time_to_ship": "PT45M",
              "@ondc/org/available_on_cod": false,
              "@ondc/org/contact_details_consumer_care":
                "Ramesh,ramesh@abc.com,18004254444" /** 265. Consumer care contact details in the format: name,email,phone; */,
              "@ondc/org/statutory_reqs_packaged_commodities": {
                /** 266. Packaged Commodities Rules; */
                manufacturer_or_packer_name: "HANTEX",
                manufacturer_or_packer_address:
                  "Hantex Head office, Oottukuzhi, Thiruvananthapuram",
                common_or_generic_name_of_commodity: "Bedsheet",
                month_and_year_of_manufacture: "2023-02",
                importer_details: "NA",
                net_quantity: "2.5",
                net_quantity_unit: "m",
                country_of_origin: "IND",
              },
            },
          ],
        },
      ],
    },
  },
};
