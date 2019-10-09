---
id: view-supplier
title: View Supplier
---

# `fetchSupplierResponse: (url: any, xml: any, headers: any, handleSetState: any) => Promise<any>`

Sends a post request to the server to fetch the list of suppliers and save it to the state.

#### Arguments

1. `url` _(any)_: The path of the add product service as a string.

2. `xml` _(any)_: The SOAP request string.

3. `headers` _(any)_: The https headers object.

4. `handleSetState` _(Function)_: Callback function that calls the setState method defined in the component to set the `supplierList` after it is fetched and parsed from the `supplier` response.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

# `fetchSupplierList: (handleSetState: any) => Promise<void>`

Creates a soap request and calls the function to run the add product service.

#### Arguments

1. `handleSetState` _(Function)_: Callback function that calls the setState method defined in the component to set the `supplierList` after it is fetched and parsed from the `supplier` response.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

#### Tips

Log the response first to see the structure before parsing it, it can change based on the request.

#### Example

See [this guide](../guides/adding-processes) on how to create a request
