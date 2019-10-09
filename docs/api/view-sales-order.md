---
id: view-sales-order
title: View Sales Order
---

# `returnOrderResponse: (url: any, xml: any, headers: any, handleSetState: any) => Promise<any>`

Sends a post request to the server to fetch the list of `orderDetails` and save it to the state.

#### Arguments

1. `url` _(any)_: The path of the `getOrders` service as a string.

2. `xml` _(any)_: The SOAP request string.

3. `headers` _(any)_: The https headers object.

4. `handleSetState` _(Function)_: Callback function that calls the setState method defined in the component to set the `orderList` after it is fetched and parsed from the `orderDetails` response.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

# `getOrderItems: (order_type: any, handleSetState: any) => Promise<void>`

Creates a soap request and calls the function to run the `getOrders` service.

#### Arguments

1. `order_type` _(any)_: The order type. [SALES_ORDER/PURCHASE_ORDER]

2. `handleSetState` _(Function)_: Callback function that calls the setState method defined in the component to set the `orderList` after it is fetched and parsed from the `orderDetails` response.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

# Receive Payment

# `receivePayment: (url: any, xml: any, headers: any, hide: any, closeModal: any) => Promise<any>`

Sends a post request to the server to receivePayment.

#### Arguments

1. `url` _(any)_: The path of the `receivePayment` service as a string.

2. `xml` _(any)_: The SOAP request string.

3. `headers` _(any)_: The https headers object.

4. `hide` _(Function)_: Closes the loading toast notification.

5. `closeModal` _(Function)_: Closes another modal.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

# `getInvoiceId: (url: any, xml: any, headers: any) => Promise<any>`

Sends a post request to the server to get the invoice ID.

#### Arguments

1. `url` _(any)_: The path of the `getInvoiceId` service as a string.

2. `xml` _(any)_: The SOAP request string.

3. `headers` _(any)_: The https headers object.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

# `receivePaymentService: (amount: any, orderId: any, userId: any, closeModal: any) => Promise<void>`

Gets the invoice ID, then calls the `collectCashOnDeliveryPayment` service to receive payment.

#### Arguments

1. `amount` _(any)_: The amount to be received.

2. `orderId` _(any)_: The order ID.

3. `userId` _(any)_: The user ID.

4. `closeModal` _(Function)_: Callback function that closes a modal.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

# Quick Ship Order (COD)

# `returnQuickShipResponse: (url: any, xml: any, headers: any, handleSetState: any) => Promise<any>`

Gets the invoice ID, then calls the `quickShipOrderReturn` service to receive payment.

#### Arguments

1. `url` _(any)_: The path of the `quickShipOrder` service as a string.

2. `xml` _(any)_: The SOAP request string.

3. `headers` _(any)_: The https headers object.

4. `handleSetState` _(Function)_: Callback function that calls the setState method defined in the component to set the `orderList` after it is fetched and parsed from the `quickShipOrderReturn` response.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

# `quickShipOrderCOD: (orderId: any, userLoginId: any, handleSetState: any) => Promise<void>`

Creates a soap request for the quick ship order COD service.

#### Arguments

1. `orderId` _(any)_: The order ID.

2. `userLoginId` _(any)_: The email address used to login to the app.

3. `handleSetState` _(Function)_: Callback function that calls the setState method defined in the component to set the `orderList` after it is fetched and parsed from the `quickShipOrderReturn` response.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

# Quick Ship Order (Credit Card)

# `returnOrderResponse: (url: any, xml: any, headers: any) => Promise<any>`

Sends a post request to the `getOrdersAndQuickShipRequest` service.

#### Arguments

1. `url` _(any)_: The path of the `quickShip` process as a string.

2. `xml` _(any)_: The SOAP request string.

3. `headers` _(any)_: The https headers object.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

# `returnOrderContentResponse: (url: any, xml: any, headers: any, hide: any, handleSetState: any) => Promise<any>`

Sends a post request to the `GetOrderContentsProcess` service to fetch the order contents and save them to the state.

#### Arguments

1. `url` _(any)_: The path of the `quickShip` process as a string.

2. `xml` _(any)_: The SOAP request string.

3. `headers` _(any)_: The https headers object.

4. `hide` _(Function)_: Called after the response, to end the loading notification.

5. `handleSetState` _(Function)_: Callback function that calls the setState method defined in the component to set the `orderWithReturn` after it is fetched and parsed from the xml response.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

# `quickShipProcess: (dataType: any, instanceId: any, orderId: any, handleSetState: any) => Promise<void>`

Creates a soap request to the call the `getOrdersAndQuickShipRequest` service and then the `GetOrderContentsProcess` service to fetch the order contents and save them to the state.

#### Arguments

1. `dataType` _(any)_: The data type of the process [SALES_ORDER/PURCHASE_ORDER].

2. `instanceId` _(any)_: The instance ID of the quick ship order process.

3. `orderId` _(any)_: The order ID for which we are placing a quick ship order.

4. `handleSetState` _(Function)_: Callback function that calls the setState method defined in the component to set the `orderWithReturn` after it is fetched and parsed from the xml response.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

# `quickShipOrder: (instanceId: any, handleSetState: any) => Promise<void>`

Creates a soap request to the call the `QuickShipOrderProcess` process and save the `receipt` to the state. Calls the `returnQuickShipResponse` function to do it.

#### Arguments

1. `instanceId` _(any)_: The instance ID of the quick ship order process.

2. `handleSetState` _(Function)_: Callback function that calls the setState method defined in the component to set the `orderList` after it is fetched and parsed from the xml response.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

#### Tips

Log the response first to see the structure before parsing it, it can change based on the request.

#### Example

See [this guide](../guides/adding-processes) on how to create a request
