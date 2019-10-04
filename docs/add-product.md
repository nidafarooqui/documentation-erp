---
id: add-product
title: Add Product
---

# `addProductResponse(url: any, xml: any, headers: any, hide: any, handleSetState: any) => Promise<any>`

Sends a post request to the server to add a product and saves the `productId` returned from the response, to the state.

#### Arguments

1. `url` _(any)_: The path of the add product serviceas a string.

2. `xml` _(any)_: The SOAP request string.

3. `headers` _(any)_: The https headers object.

4. `hide` _(Function)_: Called after the response, to end the loading notification.

5. `handleSetState` _(Function)_: Callback function that calls the setState method defined in the component to set the `productId` after it is fetched and parsed from the xml response.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

#### Example

```js
const addProductResponse = (url, xml, headers, hide, handleSetState) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, xml, headers)
      .then(response => {
        const oParser = new DOMParser();
        const oDOM = oParser.parseFromString(response.data, "application/xml");
        const productId = oDOM.getElementsByTagName("productId")[0].textContent;
        const responseMessage = oDOM.getElementsByTagName("responseMessage")[0]
          .textContent;
        hide();
        handleSetState(productId);
        return resolve(responseMessage);
      })
      .catch(error => {
        if (typeof error === "string") {
          message.error(error, 2.5);
          return reject(error);
        } else {
          message.error(error.message, 2.5);
          return reject(error.message);
        }
      });
  });
};
```

#### Tips

Log the response first to see the structure before parsing it, it can change based on the request.

# `addProduct: (state: any, handleSetState: any) => Promise<void>`

Creates a soap request and calls the function to run the add product service.

#### Arguments

1. `state` _(any)_: The state object of the `AddProduct` component.

2. `handleSetState` _(Function)_: Callback function that calls the setState method defined in the component to set the `productId` after it is fetched and parsed from the xml response.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

#### Example

See [this guide](/documentation-erp/adding-processes) on how to create a request
