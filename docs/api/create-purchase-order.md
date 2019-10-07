---
id: create-purchase-order
title: Create Purchase Order
---

# `createPurchaseOrderProcess: () => Promise<void>`

Runs the create purchase order process and saves the receipt to the state.

# `setTableData: (name?: string, id: any, imgURL: any, quantity?: number, unitPrice: any, subTotal: any) => void`

Adds the product information to the table component and saves it to the state.

#### Arguments

1. `name` _(string)_: The name of the product.

2. `id` _(any)_: The product id.

3. `imgURL` _(any)_: The URL of the product image..

4. `quantity` _(number)_: The product quantity.

5. `unitPrice` _(any)_: The price of one product.

6. `subTotal` _(any)_: The total price of the product.

# `setProductState: () => void`

Retrieves the product information by filterering the `productList` by the product name from the state and sends it to `setTatbelData` to save it to the `tableData` state.

Returns with an error message if the state of the productName or id or quantity has not been saved or the product id does not exist.
