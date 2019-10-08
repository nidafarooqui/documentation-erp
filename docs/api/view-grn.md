---
id: view-grn
title: View GRN
---

# `fetchGRNListService: (url: any, xml: any, headers: any, handleSetState: any) => Promise<any>`

Sends a post request to the server to fetch the `grnList` and save it to the state.

#### Arguments

1. `url` _(any)_: The path of the add product service as a string.

2. `xml` _(any)_: The SOAP request string.

3. `headers` _(any)_: The https headers object.

4. `handleSetState` _(Function)_: Callback function that calls the setState method defined in the component to set the `productId` after it is fetched and parsed from the xml response.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

# `getGRNList: (handleState: any) => Promise<any>`

Creates a soap request and calls the function to run the `listGRN` service.

#### Arguments

1. `handleSetState` _(Function)_: Callback function that calls the setState method defined in the component to set the `productId` after it is fetched and parsed from the xml response.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

# `fetchGRNDetailsService: (url: any, xml: any, headers: any, handleSetState: any) => Promise<any>`

Sends a post request to the server to fetch the `grndetails` and save it to the state.

#### Arguments

1. `url` _(any)_: The path of the add product service as a string.

2. `xml` _(any)_: The SOAP request string.

3. `headers` _(any)_: The https headers object.

4. `handleSetState` _(Function)_: Callback function that calls the setState method defined in the component to set the `productId` after it is fetched and parsed from the xml response.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

# `getGRNDetails: (orderId: any, handleState: any) => Promise<any>`

Creates a soap request and calls the function to run the `listGRN` service.

#### Arguments

1. `orderId` _(any)_: The `orderId` from which we will retrieve the GRN details.

2. `handleSetState` _(Function)_: Callback function that calls the setState method defined in the component to set the `grnDetails` after it is fetched and parsed from the xml response.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

# `editGRNResponse: (url: any, xml: any, headers: any) => Promise<any>`

Sends a post request to the server to fetch the `grnList` and save it to the state.

#### Arguments

1. `url` _(any)_: The path of the add product service as a string.

2. `xml` _(any)_: The SOAP request string.

3. `headers` _(any)_: The https headers object.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

# `editGRN: (grnDetailsList: any) => Promise<void>`

Creates a soap request and calls the function to run the `editGRNDetails` service.

#### Arguments

1. `handleSetState` _(Function)_: Callback function that calls the setState method defined in the component to set the `productId` after it is fetched and parsed from the xml response.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

#### Tips

Log the response first to see the structure before parsing it, it can change based on the request.

#### Example

See [this guide](../guides/adding-processes) on how to create a request
