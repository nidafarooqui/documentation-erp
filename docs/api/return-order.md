---
id: return-order
title: Return Order
---

# `returnItemsDetail: (url: any, xml: any, headers: any) => Promise<any>`

Sends a post request to the server to retrive the order items.

#### Arguments

1. `url` _(any)_: The path of the `returnItemsDetail` service as a string.

2. `xml` _(any)_: The SOAP request string.

3. `headers` _(any)_: The https headers object.

#### Returns

`Promise` _(any)_: Returns with an `orderObject` on resolve or an error message on rejection. The `orderOject` contains the data returned after calling the `returnItemsDetail` service.

# `getReturnItems: (orderId: any) => Promise<any>`

Creates a soap request and calls the function to run the `returnItemsDetail` service.

#### Arguments

1. `orderId` _(any)_: The order id of the order to be returned.

#### Returns

`Promise` _(any)_: Returns the response of the service which contains the details of the return order.

# `returnOrderHeader: (url: any, xml: any, headers: any) => Promise<any>`

Sends a post request to retrieve the `returnHeaderId`.

#### Arguments

1. `url` _(any)_: The path of the `returnOrderHeader` service as a string.

2. `xml` _(any)_: The SOAP request string.

3. `headers` _(any)_: The https headers object.

#### Returns

`Promise` _(any)_: Returns the `returnHeaderId` of the `createReturnHeader`service on resolve or an error message on rejection.

# `getReturnHeaderId: (currency: any, dfId: any, needsRI: any, returnHeaderType: any) => Promise<any>`

Creates a soap request and calls the `returnOrderHeader` function to run the `createReturnHeader` service.

#### Arguments

1. `currency` _(any)_: The currency of the order which is `CURRENCY` constant in the `constants.js` file.

2. `dfId` _(any)_: The destination facility id of the return order which is `FACILITY_ID` constant in the `constants.js` file.

3. `needsRI` _(any)_: Need inventory receive which defaults to `Y`.

4. `returnHeaderType` _(any)_: Called after the response, to end the loading notification.

#### Returns

`Promise` _(any)_: Returns the `returnHeaderId` on successfully creating an order header or an error message on rejection.

# `acceptReturn: (url: any, xml: any, headers: any, loading: any) => Promise<any>`

Posts a soap request to run the `returnItemsDetail` service.

#### Arguments

1. `url` _(any)_: The path of the `returnItemsDetail` service as a string.

2. `xml` _(any)_: The SOAP request string.

3. `headers` _(any)_: The https headers object.

4. `loading` _(Function)_: Called after the response, to end the loading notification.

#### Returns

`Promise` _(any)_: Returns the response of the service which contains a `Success` message on successfully returning an order or an error message on rejection.

# `returnOrderItemsProcess: (state: any, returnHeaderType: any) => Promise<boolean>`

Creates a soap request and calls the `acceptReturn` function to run the `ReturnOrderProcessRequest` process.

#### Arguments

1. `state` _(any)_: The state of the `ReturnOrderForm` component.

2. `returnHeaderType` _(any)_: The return header type prop passed from the `ReturnPurchaseOrder` component .

#### Returns

`Promise` _(boolean)_: Returns `true` on resolving or an error message on rejection.

#### Tips

Log the response first to see the structure before parsing it, it can change based on the request.

#### Example

See [this guide](../guides/adding-processes) on how to create a request
