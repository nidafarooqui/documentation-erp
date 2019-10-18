---
id: graph-events
title: Graph Events
---

# Important Variables

## `currentInteractiveOp`

The current interactive operation of the node.

## `interactiveOpNameMap`

The interactive operation map. A key value pair object in which the key is the operation name and the value is the current interactive operation, the operation is under.

## `newInteractiveOpNameMap`

Saves a list of interactive operations with its associated operation name.

## `UserOperationsJson`

The array of objects that stores all the services and its properties.

## `dynamicNode`

The localStorage object for saving the d3 graph.

# Click Event Handlers

## Clicking on a Graph Node

Fetches the UI from the server if it is clicked for the first time or loads the data from the table to `UserOperationsJson` from the localStorage. It hides the interactive block if there is no USER present in the inputs but otherwise it displays the entire UI for that graph.

## Save File Button

Posts the data which is a `sessionOperations` object to `saveSession.jsp` which saves it to a JSON `fileName` the user mentioned.

## Load Button

Fetches a list of file names from `attributeListFile.txt`, then displays them to a modal.

## Loading a File Button

Loads the JSON file selected from the modal and saves it to `sessionOperations`.
Also loads the data onto the input fields, checkboxes and radio buttons in the UI.

> Make sure you select all the nodes before clicking on the load button.

## Save Button

Displays a modal where you mention the name of this session and click save.

## Generate BPEL

Creates an `xmlObject` from the `UserBPOperations` and posts it to the server to create an xml file `OFBiz_DataFlow.xml` which is then read by the server.
