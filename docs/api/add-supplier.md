---
id: add-supplier
title: Add Supplier
---

# `addSupplierResponse(url: any, xml: any, headers: any, hide: any, handleSetState: any) => Promise<any>`

Sends a post request to the server to add a supplier and saves the `supplierId` returned from the response, to the state.

#### Arguments

1. `url` _(any)_: The path of the add product service as a string.

2. `xml` _(any)_: The SOAP request string.

3. `headers` _(any)_: The https headers object.

4. `hide` _(Function)_: Called after the response, to end the loading notification.

5. `handleSetState` _(Function)_: Callback function that calls the setState method defined in the component to set the `supplierId` after it is fetched and parsed from the xml response.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

#### Tips

Log the response first to see the structure before parsing it, it can change based on the request.

# `addSupplier: (state: any, handleSetState: any) => Promise<void>`

Creates a soap request and calls the function to run the add supplier service.

#### Arguments

1. `state` _(any)_: The state object of the `AddSupplier` component.

2. `handleSetState` _(Function)_: Callback function that calls the setState method defined in the component to set the `supplierId` after it is fetched and parsed from the xml response.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

#### Example

See [this guide](../guides/adding-processes) on how to create a request
