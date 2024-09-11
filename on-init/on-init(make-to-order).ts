const payload = {
  context: {
    domain: "ONDC:RET11",
    action: "on_init",
    core_version: "1.2.0",
    bap_id: "buyerNP.com",
    bap_uri: "https://buyerNP.com/ondc",
    bpp_id: "sellerNP.com",
    bpp_uri: "https://sellerNP.com/ondc",
    transaction_id: "T2",
    message_id: "M3",
    city: "std:080",
    country: "IND",
    timestamp: "2023-06-03T09:00:30.000Z",
  },
  message: {
    order: {
      provider: {
        id: "P1",
        locations: [
          {
            id: "L1",
          },
        ],
      },
      items: [
        {
          id: "I1",
          fulfillment_id: "F1",
          quantity: {
            count: 1,
          },
          parent_item_id: "DI1",
          tags: [
            {
              code: "type",
              list: [
                {
                  code: "type",
                  value: "item",
                },
              ],
            },
          ],
        },
        {
          id: "C1",
          fulfillment_id: "F1",
          quantity: {
            count: 1,
          },
          parent_item_id: "DI1",
          tags: [
            {
              code: "type",
              list: [
                {
                  code: "type",
                  value: "customization",
                },
              ],
            },
            {
              code: "parent",
              list: [
                {
                  code: "id",
                  value: "CG1",
                },
              ],
            },
          ],
        },
        {
          id: "C7",
          fulfillment_id: "F1",
          quantity: {
            count: 1,
          },
          parent_item_id: "DI1",
          tags: [
            {
              code: "type",
              list: [
                {
                  code: "type",
                  value: "customization",
                },
              ],
            },
            {
              code: "parent",
              list: [
                {
                  code: "id",
                  value: "CG2",
                },
              ],
            },
          ],
        },
        {
          id: "C14",
          fulfillment_id: "F1",
          quantity: {
            count: 1,
          },
          parent_item_id: "DI1",
          tags: [
            {
              code: "type",
              list: [
                {
                  code: "type",
                  value: "customization",
                },
              ],
            },
            {
              code: "parent",
              list: [
                {
                  code: "id",
                  value: "CG3",
                },
              ],
            },
          ],
        },
        {
          id: "C16",
          fulfillment_id: "F1",
          quantity: {
            count: 1,
          },
          parent_item_id: "DI1",
          tags: [
            {
              code: "type",
              list: [
                {
                  code: "type",
                  value: "customization",
                },
              ],
            },
            {
              code: "parent",
              list: [
                {
                  code: "id",
                  value: "CG3",
                },
              ],
            },
          ],
        },
        {
          id: "I1",
          fulfillment_id: "F1",
          quantity: {
            count: 1,
          },
          parent_item_id: "DI2",
          tags: [
            {
              code: "type",
              list: [
                {
                  code: "type",
                  value: "item",
                },
              ],
            },
          ],
        },
        {
          id: "C2",
          fulfillment_id: "F1",
          quantity: {
            count: 1,
          },
          parent_item_id: "DI2",
          tags: [
            {
              code: "type",
              list: [
                {
                  code: "type",
                  value: "customization",
                },
              ],
            },
            {
              code: "parent",
              list: [
                {
                  code: "id",
                  value: "CG1",
                },
              ],
            },
          ],
        },
        {
          id: "C7",
          fulfillment_id: "F1",
          quantity: {
            count: 1,
          },
          parent_item_id: "DI2",
          tags: [
            {
              code: "type",
              list: [
                {
                  code: "type",
                  value: "customization",
                },
              ],
            },
            {
              code: "parent",
              list: [
                {
                  code: "id",
                  value: "CG2",
                },
              ],
            },
          ],
        },
        {
          id: "C14",
          fulfillment_id: "F1",
          quantity: {
            count: 1,
          },
          parent_item_id: "DI2",
          tags: [
            {
              code: "type",
              list: [
                {
                  code: "type",
                  value: "customization",
                },
              ],
            },
            {
              code: "parent",
              list: [
                {
                  code: "id",
                  value: "CG3",
                },
              ],
            },
          ],
        },
        {
          id: "C15",
          fulfillment_id: "F1",
          quantity: {
            count: 1,
          },
          parent_item_id: "DI2",
          tags: [
            {
              code: "type",
              list: [
                {
                  code: "type",
                  value: "customization",
                },
              ],
            },
            {
              code: "parent",
              list: [
                {
                  code: "id",
                  value: "CG3",
                },
              ],
            },
          ],
        },
      ],
      billing: {
        name: "ONDC buyer",
        address: {
          name: "my house or door or floor #",
          building: "my building name or house #",
          locality: "my street name",
          city: "Bengaluru",
          state: "Karnataka",
          country: "IND",
          area_code: "560037",
        },
        tax_number: "XXXXXXXXXXXXXXX",
        email: "nobody@nomail.com",
        phone: "9886098860",
        created_at: "2023-06-03T09:00:00.000Z",
        updated_at: "2023-06-03T09:00:00.000Z",
      },
      fulfillments: [
        {
          id: "F1",
          type: "Delivery",
          tracking: false,
          end: {
            location: {
              gps: "12.453544,77.928379",
              address: {
                name: "my house or door or floor #",
                building: "my building name or house #",
                locality: "my street name",
                city: "Bengaluru",
                state: "Karnataka",
                country: "IND",
                area_code: "560037",
              },
            },
            contact: {
              phone: "9886098860",
            },
          },
          tags: [
            {
              code: "rto_action",
              list: [
                {
                  code: "return_to_origin",
                  value: "yes",
                },
              ],
            },
          ],
        },
      ],
      quote: {
        price: {
          currency: "INR",
          value: "1955.65",
        },
        breakup: [
          {
            "@ondc/org/item_id": "I1",
            "@ondc/org/item_quantity": {
              count: 1,
            },
            title: "Farm House Pizza",
            "@ondc/org/title_type": "item",
            price: {
              currency: "INR",
              value: "269.00",
            },
            item: {
              parent_item_id: "DI1",
              quantity: {
                available: {
                  count: "99",
                },
                maximum: {
                  count: "99",
                },
              },
              price: {
                currency: "INR",
                value: "269.00",
              },
              tags: [
                {
                  code: "type",
                  list: [
                    {
                      code: "type",
                      value: "item",
                    },
                  ],
                },
              ],
            },
          },
          {
            "@ondc/org/item_id": "C1",
            "@ondc/org/item_quantity": {
              count: 1,
            },
            title: "New Hand Tossed",
            "@ondc/org/title_type": "item",
            price: {
              currency: "INR",
              value: "0.00",
            },
            item: {
              parent_item_id: "DI1",
              quantity: {
                available: {
                  count: "99",
                },
                maximum: {
                  count: "99",
                },
              },
              price: {
                currency: "INR",
                value: "0.00",
              },
              tags: [
                {
                  code: "type",
                  list: [
                    {
                      code: "type",
                      value: "customization",
                    },
                  ],
                },
                {
                  code: "parent",
                  list: [
                    {
                      code: "id",
                      value: "CG1",
                    },
                  ],
                },
              ],
            },
          },
          {
            "@ondc/org/item_id": "C7",
            "@ondc/org/item_quantity": {
              count: 1,
            },
            title: "Large",
            "@ondc/org/title_type": "item",
            price: {
              currency: "INR",
              value: "450.00",
            },
            item: {
              parent_item_id: "DI1",
              quantity: {
                available: {
                  count: "99",
                },
                maximum: {
                  count: "99",
                },
              },
              price: {
                currency: "INR",
                value: "450.00",
              },
              tags: [
                {
                  code: "type",
                  list: [
                    {
                      code: "type",
                      value: "customization",
                    },
                  ],
                },
                {
                  code: "parent",
                  list: [
                    {
                      code: "id",
                      value: "CG2",
                    },
                  ],
                },
              ],
            },
          },
          {
            "@ondc/org/item_id": "C14",
            "@ondc/org/item_quantity": {
              count: 1,
            },
            title: "Grilled Mushrooms",
            "@ondc/org/title_type": "item",
            price: {
              currency: "INR",
              value: "80.00",
            },
            item: {
              parent_item_id: "DI1",
              quantity: {
                available: {
                  count: "99",
                },
                maximum: {
                  count: "99",
                },
              },
              price: {
                currency: "INR",
                value: "80.00",
              },
              tags: [
                {
                  code: "type",
                  list: [
                    {
                      code: "type",
                      value: "customization",
                    },
                  ],
                },
                {
                  code: "parent",
                  list: [
                    {
                      code: "id",
                      value: "CG3",
                    },
                  ],
                },
              ],
            },
          },
          {
            "@ondc/org/item_id": "C16",
            "@ondc/org/item_quantity": {
              count: 1,
            },
            title: "Pepper Barbeque Chicken",
            "@ondc/org/title_type": "item",
            price: {
              currency: "INR",
              value: "95.00",
            },
            item: {
              parent_item_id: "DI1",
              quantity: {
                available: {
                  count: "99",
                },
                maximum: {
                  count: "99",
                },
              },
              price: {
                currency: "INR",
                value: "95.00",
              },
              tags: [
                {
                  code: "type",
                  list: [
                    {
                      code: "type",
                      value: "customization",
                    },
                  ],
                },
                {
                  code: "parent",
                  list: [
                    {
                      code: "id",
                      value: "CG3",
                    },
                  ],
                },
              ],
            },
          },
          {
            "@ondc/org/item_id": "I1",
            "@ondc/org/item_quantity": {
              count: 1,
            },
            title: "Farm House Pizza",
            "@ondc/org/title_type": "item",
            price: {
              currency: "INR",
              value: "269.00",
            },
            item: {
              parent_item_id: "DI2",
              quantity: {
                available: {
                  count: "99",
                },
                maximum: {
                  count: "99",
                },
              },
              price: {
                currency: "INR",
                value: "269.00",
              },
              tags: [
                {
                  code: "type",
                  list: [
                    {
                      code: "type",
                      value: "item",
                    },
                  ],
                },
              ],
            },
          },
          {
            "@ondc/org/item_id": "C2",
            "@ondc/org/item_quantity": {
              count: 1,
            },
            title: "100% Wheat Thin Crust",
            "@ondc/org/title_type": "item",
            price: {
              currency: "INR",
              value: "0.00",
            },
            item: {
              parent_item_id: "DI2",
              quantity: {
                available: {
                  count: "99",
                },
                maximum: {
                  count: "99",
                },
              },
              price: {
                currency: "INR",
                value: "0.00",
              },
              tags: [
                {
                  code: "type",
                  list: [
                    {
                      code: "type",
                      value: "customization",
                    },
                  ],
                },
                {
                  code: "parent",
                  list: [
                    {
                      code: "id",
                      value: "CG1",
                    },
                  ],
                },
              ],
            },
          },
          {
            "@ondc/org/item_id": "C7",
            "@ondc/org/item_quantity": {
              count: 1,
            },
            title: "Large",
            "@ondc/org/title_type": "item",
            price: {
              currency: "INR",
              value: "450.00",
            },
            item: {
              parent_item_id: "DI2",
              quantity: {
                available: {
                  count: "99",
                },
                maximum: {
                  count: "99",
                },
              },
              price: {
                currency: "INR",
                value: "450.00",
              },
              tags: [
                {
                  code: "type",
                  list: [
                    {
                      code: "type",
                      value: "customization",
                    },
                  ],
                },
                {
                  code: "parent",
                  list: [
                    {
                      code: "id",
                      value: "CG2",
                    },
                  ],
                },
              ],
            },
          },
          {
            "@ondc/org/item_id": "C14",
            "@ondc/org/item_quantity": {
              count: 1,
            },
            title: "Grilled Mushrooms",
            "@ondc/org/title_type": "item",
            price: {
              currency: "INR",
              value: "80.00",
            },
            item: {
              parent_item_id: "DI2",
              quantity: {
                available: {
                  count: "99",
                },
                maximum: {
                  count: "99",
                },
              },
              price: {
                currency: "INR",
                value: "80.00",
              },
              tags: [
                {
                  code: "type",
                  list: [
                    {
                      code: "type",
                      value: "customization",
                    },
                  ],
                },
                {
                  code: "parent",
                  list: [
                    {
                      code: "id",
                      value: "CG3",
                    },
                  ],
                },
              ],
            },
          },
          {
            "@ondc/org/item_id": "C15",
            "@ondc/org/item_quantity": {
              count: 1,
            },
            title: "Fresh Tomato",
            "@ondc/org/title_type": "item",
            price: {
              currency: "INR",
              value: "80.00",
            },
            item: {
              parent_item_id: "DI2",
              quantity: {
                available: {
                  count: "99",
                },
                maximum: {
                  count: "99",
                },
              },
              price: {
                currency: "INR",
                value: "80.00",
              },
              tags: [
                {
                  code: "type",
                  list: [
                    {
                      code: "type",
                      value: "customization",
                    },
                  ],
                },
                {
                  code: "parent",
                  list: [
                    {
                      code: "id",
                      value: "CG3",
                    },
                  ],
                },
              ],
            },
          },
          {
            "@ondc/org/item_id": "I1",
            title: "Tax",
            "@ondc/org/title_type": "tax",
            price: {
              currency: "INR",
              value: "13.45",
            },
            item: {
              parent_item_id: "DI1",
              tags: [
                {
                  code: "type",
                  list: [
                    {
                      code: "type",
                      value: "item",
                    },
                  ],
                },
              ],
            },
          },
          {
            "@ondc/org/item_id": "C1",
            title: "Tax",
            "@ondc/org/title_type": "tax",
            price: {
              currency: "INR",
              value: "0.00",
            },
            item: {
              parent_item_id: "DI1",
              tags: [
                {
                  code: "type",
                  list: [
                    {
                      code: "type",
                      value: "customization",
                    },
                  ],
                },
                {
                  code: "parent",
                  list: [
                    {
                      code: "id",
                      value: "CG1",
                    },
                  ],
                },
              ],
            },
          },
          {
            "@ondc/org/item_id": "C7",
            title: "Tax",
            "@ondc/org/title_type": "tax",
            price: {
              currency: "INR",
              value: "22.50",
            },
            item: {
              parent_item_id: "DI1",
              tags: [
                {
                  code: "type",
                  list: [
                    {
                      code: "type",
                      value: "customization",
                    },
                  ],
                },
                {
                  code: "parent",
                  list: [
                    {
                      code: "id",
                      value: "CG2",
                    },
                  ],
                },
              ],
            },
          },
          {
            "@ondc/org/item_id": "C14",
            title: "Tax",
            "@ondc/org/title_type": "tax",
            price: {
              currency: "INR",
              value: "4.00",
            },
            item: {
              parent_item_id: "DI1",
              tags: [
                {
                  code: "type",
                  list: [
                    {
                      code: "type",
                      value: "customization",
                    },
                  ],
                },
                {
                  code: "parent",
                  list: [
                    {
                      code: "id",
                      value: "CG3",
                    },
                  ],
                },
              ],
            },
          },
          {
            "@ondc/org/item_id": "C16",
            title: "Tax",
            "@ondc/org/title_type": "tax",
            price: {
              currency: "INR",
              value: "4.75",
            },
            item: {
              parent_item_id: "DI1",
              tags: [
                {
                  code: "type",
                  list: [
                    {
                      code: "type",
                      value: "customization",
                    },
                  ],
                },
                {
                  code: "parent",
                  list: [
                    {
                      code: "id",
                      value: "CG1",
                    },
                  ],
                },
              ],
            },
          },
          {
            "@ondc/org/item_id": "I1",
            title: "Tax",
            "@ondc/org/title_type": "tax",
            price: {
              currency: "INR",
              value: "13.45",
            },
            item: {
              parent_item_id: "DI2",
              tags: [
                {
                  code: "type",
                  list: [
                    {
                      code: "type",
                      value: "item",
                    },
                  ],
                },
              ],
            },
          },
          {
            "@ondc/org/item_id": "C2",
            title: "Tax",
            "@ondc/org/title_type": "tax",
            price: {
              currency: "INR",
              value: "22.50",
            },
            item: {
              parent_item_id: "DI2",
              tags: [
                {
                  code: "type",
                  list: [
                    {
                      code: "type",
                      value: "customization",
                    },
                  ],
                },
                {
                  code: "parent",
                  list: [
                    {
                      code: "id",
                      value: "CG1",
                    },
                  ],
                },
              ],
            },
          },
          {
            "@ondc/org/item_id": "C7",
            title: "Tax",
            "@ondc/org/title_type": "tax",
            price: {
              currency: "INR",
              value: "22.50",
            },
            item: {
              parent_item_id: "DI2",
              tags: [
                {
                  code: "type",
                  list: [
                    {
                      code: "type",
                      value: "customization",
                    },
                  ],
                },
                {
                  code: "parent",
                  list: [
                    {
                      code: "id",
                      value: "CG2",
                    },
                  ],
                },
              ],
            },
          },
          {
            "@ondc/org/item_id": "C14",
            title: "Tax",
            "@ondc/org/title_type": "tax",
            price: {
              currency: "INR",
              value: "4.00",
            },
            item: {
              parent_item_id: "DI2",
              tags: [
                {
                  code: "type",
                  list: [
                    {
                      code: "type",
                      value: "customization",
                    },
                  ],
                },
                {
                  code: "parent",
                  list: [
                    {
                      code: "id",
                      value: "CG3",
                    },
                  ],
                },
              ],
            },
          },
          {
            "@ondc/org/item_id": "C15",
            title: "Tax",
            "@ondc/org/title_type": "tax",
            price: {
              currency: "INR",
              value: "4.00",
            },
            item: {
              parent_item_id: "DI2",
              tags: [
                {
                  code: "type",
                  list: [
                    {
                      code: "type",
                      value: "customization",
                    },
                  ],
                },
                {
                  code: "parent",
                  list: [
                    {
                      code: "id",
                      value: "CG3",
                    },
                  ],
                },
              ],
            },
          },
          {
            "@ondc/org/item_id": "F1",
            title: "Delivery charges",
            "@ondc/org/title_type": "delivery",
            price: {
              currency: "INR",
              value: "50.00",
            },
          },
          {
            "@ondc/org/item_id": "F1",
            title: "Tax",
            "@ondc/org/title_type": "tax",
            price: {
              currency: "INR",
              value: "9.00",
            },
            item: {
              tags: [
                {
                  code: "quote",
                  list: [
                    {
                      code: "type",
                      value: "fulfillment",
                    },
                  ],
                },
              ],
            },
          },
          {
            "@ondc/org/item_id": "F1",
            title: "Packing charges",
            "@ondc/org/title_type": "packing",
            price: {
              currency: "INR",
              value: "25.00",
            },
          },
          {
            "@ondc/org/item_id": "F1",
            title: "Convenience Fee",
            "@ondc/org/title_type": "misc",
            price: {
              currency: "INR",
              value: "10.00",
            },
          },
        ],
        ttl: "PT1H",
      },
      payment: {
        type: "ON-ORDER",
        collected_by: "BPP",
        uri: "https://snp.com/pg",
        status: "NOT-PAID",
        "@ondc/org/buyer_app_finder_fee_type": "percent",
        "@ondc/org/buyer_app_finder_fee_amount": "3",
        "@ondc/org/settlement_basis": "delivery",
        "@ondc/org/settlement_window": "P1D",
        "@ondc/org/withholding_amount": "10.00",
        tags: [
          {
            code: "bpp_collect",
            list: [
              {
                code: "success",
                value: "Y",
              },
              {
                code: "error",
                value: "..",
              },
            ],
          },
        ],
        "@ondc/org/settlement_details": [
          {
            settlement_counterparty: "seller-app",
            settlement_phase: "sale-amount",
            settlement_type: "upi",
            beneficiary_name: "xxxxx",
            upi_address: "gft@oksbi",
            settlement_bank_account_no: "XXXXXXXXXX",
            settlement_ifsc_code: "XXXXXXXXX",
            bank_name: "xxxx",
            branch_name: "xxxx",
          },
        ],
      },
      cancellation_terms: [
        {
          fulfillment_state: {
            descriptor: {
              code: "Pending",
              short_desc: "002",
            },
          },
          cancellation_fee: {
            percentage: "0.00",
            amount: {
              currency: "INR",
              value: "0.00",
            },
          },
        },
        {
          fulfillment_state: {
            descriptor: {
              code: "Packed",
              short_desc: "001,003",
            },
          },
          cancellation_fee: {
            percentage: "10.00",
            amount: {
              currency: "INR",
              value: "195.57",
            },
          },
        },
        {
          fulfillment_state: {
            descriptor: {
              code: "Order-picked-up",
              short_desc: "001,003",
            },
          },
          cancellation_fee: {
            percentage: "10.00",
            amount: {
              currency: "INR",
              value: "195.57",
            },
          },
        },
        {
          fulfillment_state: {
            descriptor: {
              code: "Out-for-delivery",
              short_desc: "009",
            },
          },
          cancellation_fee: {
            percentage: "0.00",
            amount: {
              currency: "INR",
              value: "0.00",
            },
          },
        },
        {
          fulfillment_state: {
            descriptor: {
              code: "Out-for-delivery",
              short_desc: "010,011,012,013,014,015",
            },
          },
          cancellation_fee: {
            percentage: "20.00",
            amount: {
              currency: "INR",
              value: "391.14",
            },
          },
        },
      ],
      tags: [
        {
          code: "bpp_terms",
          list: [
            {
              code: "max_liability",
              value: "2",
            },
            {
              code: "max_liability_cap",
              value: "10000.00",
            },
            {
              code: "mandatory_arbitration",
              value: "false",
            },
            {
              code: "court_jurisdiction",
              value: "Bengaluru",
            },
            {
              code: "delay_interest",
              value: "7.50",
            },
            {
              code: "tax_number",
              value: "gst_number_of_sellerNP",
            },
            {
              code: "provider_tax_number",
              value: "PAN_number_of_provider",
            },
          ],
        },
      ],
    },
  },
};
