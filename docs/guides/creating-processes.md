---
id: creating-processes
title: Creating a BPEL Process
---

This guide will teach you how to create a process using assembler.
Go to the [assembler home page](http://203.135.63.70/assemble_empty_node/requirement_specs.jsp) to start creating a process.

## Selecting a process

Select a process from the dropdown and give it a name. This name will be used to generate the process files later and will also be used later in the erp application.

For this tutorial we will create a **GRN By Product** process.

![](/img/assembler-intro.png)

### Creating the GRN By Product Process

Select an activity from the dropdown and click on **Add Activity**.

![](/img/activity-selection.gif)

You can't view the dropdown above but you should add the activities in the following order:

> createInventoryItem -> createShipmentReceipt -> UpdateInventory

### Mapping Attributes

Finally, after clicking on proceed you will be directed to a screen with the graph nodes displayed. If you cannot see the graph, refresh the page. Then click on each graph node and make sure its input and output attributes are mapped correctly.

Each attribute can be set as the following:
**USER**, **FIXED**, **EXPRESSION** or one of the activities from the graph.

| Name       | Meaning                                                                                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| USER       | the attribute will receive a value from the user                                                                                                                    |
| FIXED      | the attribute has a fixed constant value of type `string`.                                                                                                          |
| EXPRESSION | the attribute can be an expression. e.g a condition like `quantity == 0`. To use an expression you will also need to export the attribute `quantity` as a variable. |

#### Exporting variables

Depending on the **data type** of the attribute, it can be exported as a `string`, `boolean` or a `double` variable.
If you tick the **export** checkbox, the **export name** and **export initial value** fields will be editable. You can give it any name you like and it will be added to variable panel on the right.

Later, when you want to add the variable, click on the variable in the pane on the right and then inside the field you want to add it in.

An initial value is already set for each variable type. An `""` for string, `0` for a double and `false` for a boolean.

We will not set any export variables for this tutorial so you can skip this step.

### Setting an interactive operation

This will define the structure of your business process. If you set 3 interactive operations here, you will need to call all 3 of them one after another in the erp code base as we'll see later.

If you set one 1 interactive operation. You will only have to create one process request to run the entire process. Choose according to the nature and structure of your business process.

For this example we will only set 1 operation.

1. Click on the `createInventoryItem` graph node and then click on the checkbox to enable the text field.
2. Set the name as `GRNByProduct`. This name will be used in your request code later. (You may have to make a process multiple times in the future so to avoid having to change the code each time keep the name of your process the same.)
3. Click on the other nodes and then click on **Generate BPEL**, then click ok.
4. Download the BPEL zip file and extract it somewhere. Inside the folder copy the `GRNByProduct` folder. This is your generated process. Keep this folder safe somewhere as we will be using it later.
