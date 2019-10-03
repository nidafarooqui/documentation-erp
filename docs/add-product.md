---
id: add-product
title: Add Product
---

# `addProductResponse(url: any, xml: any, headers: any, hide: any, handleSetState: any) => Promise<any>`

Calls the add product service and saves the `productId` to the state.

#### Arguments

1. `url` _(any)_: The path of the add product service.

2. `xml` _(any)_: The SOAP request.

3. `headers` _(any)_: The https headers.

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

- Log the response first to see the structure before parsing it, it can change based on the request.

- It is up to you to choose the state format. You can use plain objects or something like [Immutable](http://facebook.github.io/immutable-js/). If you're not sure, start with plain objects.

- If your state is a plain object, make sure you never mutate it! For example, instead of returning something like `Object.assign(state, newData)` from your reducers, return `Object.assign({}, state, newData)`. This way you don't override the previous `state`. You can also write `return { ...state, ...newData }` if you enable the [object spread operator proposal](../recipes/UsingObjectSpreadOperator.md).

- For universal apps that run on the server, create a store instance with every request so that they are isolated. Dispatch a few data fetching actions to a store instance and wait for them to complete before rendering the app on the server.

- When a store is created, Redux dispatches a dummy action to your reducer to populate the store with the initial state. You are not meant to handle the dummy action directly. Just remember that your reducer should return some kind of initial state if the state given to it as the first argument is `undefined`, and you're all set.

- To apply multiple store enhancers, you may use [`compose()`](./compose.md).
