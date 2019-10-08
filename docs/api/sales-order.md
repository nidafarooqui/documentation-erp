---
id: sales-order
title: Sales Order
---

# `runService: (url: any, xml: any, headers: any, hide: any) => Promise<any>`

Sends a post request for every soap request that is passed through the `xml` string.

#### Arguments

1. `url` _(any)_: The path of the add product service as a string.

2. `xml` _(any)_: The SOAP request string.

3. `headers` _(any)_: The https headers object.

4. `hide` _(Function)_: Called after the response, to end the loading notification.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

# `confirmOrder: (url: any, xml: any, headers: any, hide: any, handleSetState: any) => Promise<any>`

Sends a post request to the `getOrderDetails` service and returns the order details of the completed sales order.

#### Arguments

1. `url` _(any)_: The path of the add product service as a string.

2. `xml` _(any)_: The SOAP request string.

3. `headers` _(any)_: The https headers object.

4. `hide` _(Function)_: Called after the response, to end the loading notification.

5. `handleSetState` _(Function)_: Callback function that calls the setState method defined in the component to set the `supplierId` after it is fetched and parsed from the xml response.

#### Returns

`Promise` _(any)_: Returns the `orderId` on resolving and an error on rejection.

# `salesOrderProcess: (state: any, handleState: any) => Promise<void>`

Creates a soap request and calls `runService` function to run the sales order process and then fetches and saves the sales order details from the `confirmOrder` function.

#### Arguments

1. `state` _(any)_: The state object of the `AddProduct` component.

2. `handleState` _(Function)_: Callback function that calls the setState method defined in the component to set the `receipt` after it is fetched and parsed from the xml response of the `confirmOrder` service.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the process.

#### Example

See [this guide](../guides/adding-processes) on how to create a request
