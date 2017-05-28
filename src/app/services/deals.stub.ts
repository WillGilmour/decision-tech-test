export const dealsDataStub = `{
   "deals":[
		{
         "title":"Unlimited Broadband & Weekend Calls",
         "prices":[
            {
               "periods":[
                  {
                     "months":18,
                     "amount":19.5
                  },
                  {
                     "months":null,
                     "amount":28.5
                  }
               ],
               "firstYear":241,
               "totalContractCost":358,
               "upFrontCost":7,
               "upsell":null
            }
         ],
         "id":4930,
         "contractLength":18,
         "tvProduct":null,
         "standardChannels":null,
         "totalChannels":null,
         "hdChannels":null,
         "speed":{
            "label":"17",
            "sortValue":17408
         },
         "uploadSpeed":{
            "label":"1",
            "sortValue":1024
         },
         "usage":{
            "label":"Unlimited",
            "sortValue":1000
         },
         "mobile":null,
         "offer":{
            "type":"None",
            "title":"£50 cancellation credit",
            "smallLogo":"https://bucket.cdndtl.co.uk/bc/ICONS_70x70/13102016ICONS/Icon-EE-50Cancellation.png",
            "expiresAt":"2018-04-05T05:30:00Z"
         },
         "provider":{
            "id":48,
            "name":"EE",
            "logo":"https://bucket.cdndtl.co.uk/bc/providerlogos/ee_99.png"
         },
         "newLineCost":30,
         "upfrontCosts":[
            {
               "name":"Total",
               "price":7
            },
            {
               "name":"Delivery",
               "price":7
            },
            {
               "name":"Hardware",
               "price":0
            },
            {
               "name":"Installation",
               "price":0
            },
            {
               "name":"New Line",
               "price":30
            }
         ],
         "productTypes":[
            "Broadband",
            "Phone"
         ],
         "premiumFeatures":{

         },
         "popularChannels":[

         ]
      }
	]
}`;


export class DealsStub {
	
	constructor(){
		this.data = dealsDataStub;
	}

	data: string
}