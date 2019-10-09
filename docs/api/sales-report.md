---
id: sales-report
title: Sales Report
---

# `fetchSalesReportResponse: (url: any, xml: any, headers: any, handleSetState: any) => Promise<any>`

Sends a post request to the server to get the product wise sales report.

#### Arguments

1. `url` _(any)_: The path of the `fetchSalesReportResponse` service as a string.

2. `xml` _(any)_: The SOAP request string.

3. `headers` _(any)_: The https headers object.

4. `handleSetState` _(Function)_: Callback function that calls the setState method defined in the component to set the `receipt` after it is fetched and parsed from the response.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

#### Tips

Log the response first to see the structure before parsing it, it can change based on the request.

# `fetchSalesReport: (fromDate: any, toDate: any, handleSetState: any) => Promise<void>`

Creates a soap request using the state and calls a function to run the `getShopSalesReport` service.

#### Arguments

1. `fromDate` _(any)_: The starting date in string.

1. `toDate` _(any)_: The ending date in string.

1. `handleSetState` _(Function)_: Callback function that calls the setState method defined in the component to set the `receipt` after it is fetched and parsed from the response.

#### Returns

`Promise` _(any)_: Returns `sales report retrieved successfully` when resolved and an error message on rejection.

#### Example

See [this guide](../guides/adding-processes) on how to create a request`

#### Tips

Log the response first to see the structure before parsing it, it can change based on the request.
