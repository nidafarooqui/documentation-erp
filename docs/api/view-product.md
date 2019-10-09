---
id: view-product
title: View Product
---

# `fetchGRNDetailsResponse: (url: any, xml: any, headers: any, handleSetState: any) => Promise<any>`

Sends a post request to the server to fetch the grn details from the `grnByProductId` and save it to the state.

#### Arguments

1. `url` _(any)_: The path of the `grnByProductId` service as a string.

2. `xml` _(any)_: The SOAP request string.

3. `headers` _(any)_: The https headers object.

4. `handleSetState` _(Function)_: Callback function that calls the setState method defined in the component to set the `grnDetails` after it is fetched and parsed from the `grnSearchLists` response.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

# `fetchGRNDetails: (productId: any, handleSetState: any) => Promise<void>`

Creates a soap request and calls the function to run the `grnByProductId` service.

#### Arguments

1. `productId` _(any)_: The product ID.

2. `handleSetState` _(Function)_: Callback function that calls the setState method defined in the component to set the `grnDetails` after it is fetched and parsed from the `grnSearchLists` response.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

#### Tips

Log the response first to see the structure before parsing it, it can change based on the request.

#### Example

See [this guide](../guides/adding-processes) on how to create a request
