---
id: edit-product
title: Edit Product
---

# `editProductResponse(url: any, xml: any, headers: any, hide: any) => Promise<any>`

Sends a post request to the server to edit a product.

#### Arguments

1. `url` _(any)_: The path of the add product service as a string.

2. `xml` _(any)_: The SOAP request string.

3. `headers` _(any)_: The https headers object.

4. `hide` _(Function)_: Called after the response, to end the loading notification.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

#### Tips

Log the response first to see the structure before parsing it, it can change based on the request.

# editProduct: (state: any) => Promise<void>`

Creates a soap request using the state and calls a function to run the edit product service.

#### Arguments

1. `state` _(any)_: The state object of the `EditProduct` component.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

#### Example

See [this guide](../guides/adding-processes) on how to create a request`

#### Tips

Log the response first to see the structure before parsing it, it can change based on the request.
