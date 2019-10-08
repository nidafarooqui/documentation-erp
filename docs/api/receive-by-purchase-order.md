---
id: receive-by-purchase-order
title: Receive By Purchase Order
---

# `getOrderItemsResponse: (url: any, xml: any, headers: any, orderId: any, handleSetState: any) => Promise<any>`

Sends a post request to the server to retrieve a list of order items.

#### Arguments

1. `url` _(any)_: The path of the add product service as a string.

2. `xml` _(any)_: The SOAP request string.

3. `headers` _(any)_: The https headers object.

4. `orderId` _(Function)_: passes the orderId to save it to the state.

5. `handleSetState` _(Function)_: Callback function that calls the setState method defined in the component to set the `receipt` after it is fetched and parsed from the response.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

# `getOrderItems: (orderId: any, handleSetState: any) => Promise<void>`

Creates a soap request using the state and calls a function to run the `orderItems` service.

#### Arguments

1. `orderId` _(any)_: The order Id of the purchase order.

2. `handleSetState` _(Function)_: Callback function that is passed to `getOrderItemsResponse`.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

# `getOrderItemsResponse: (url: any, xml: any, headers: any, orderId: any, handleSetState: any) => Promise<any>`

Sends a post request to the server to retrieve a list of order items.

#### Arguments

1. `url` _(any)_: The path of the add product service as a string.

2. `xml` _(any)_: The SOAP request string.

3. `headers` _(any)_: The https headers object.

4. `orderId` _(Function)_: passes the orderId to save it to the state.

5. `handleSetState` _(Function)_: Callback function that calls the setState method defined in the component to set the `receipt` after it is fetched and parsed from the response.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

#### Tips

Log the response first to see the structure before parsing it, it can change based on the request.

# `receiveInventoryItemsResponse: (url: any, xml: any, headers: any) => Promise<any>`

Creates a soap request using the state and calls a function to run the `receiveInventory` service.

#### Arguments

1. `url` _(any)_: The path of the add product service as a string.

2. `xml` _(any)_: The SOAP request string.

3. `headers` _(any)_: The https headers object.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

# `receiveInventoryItems: (orderId: any, facility: any, product: any, supplierId: any, receivedBy: any, instanceId: any, handleSetState: any) => Promise<Object, handleSetState: any>`

#### Arguments

1. `orderId` _(any)_: The path of the add product service as a string.

2. `facility` _(any)_: The SOAP request string.

3. `product` _(any)_: The https headers object.

4. `supplierId` _(any)_: The SOAP request string.

5. `receivedBy` _(any)_: The https headers object.

6. `instanceId` _(Function)_: passes the orderId to save it to the state.

7. `handleSetState` _(Function)_: Callback function that calls the setState method defined in the component to set the `receipt` after it is fetched and parsed from the response.

#### Returns

`Promise` _(Object)_: Returns a promise object when resolved or rejects after calling the service. The promise object contains the following:

```javascript
{
    orderId: any;
    headers: {
        headers: {
            crossDomain: boolean;
            "Content-Type": string;
            SOAPAction: string;
            "Access-Control-Allow-Origin": string;
        };
    };
    handleSetState: any;
}
```

#### Example

See [this guide](../guides/adding-processes) on how to create a request`

#### Tips

Log the response first to see the structure before parsing it, it can change based on the request.
