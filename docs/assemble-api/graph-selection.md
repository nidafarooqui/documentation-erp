---
id: graph-selection
title: Graph Selection
---

This section documents the functions used in the `GraphSelection.js` file which is used to create a BPEL process graph. Here you can add or remove activities and conditionals (loop, XOR and AND).

# Some Important Variables

## `OperationArray`

Contains the entire graph. Each node in the graph is an object inside an array known as the `OperationArray`. This results in an array of objects with the following properties:

```js
let OperationData = {};
OperationData.next = "";
OperationData.previous = "";
OperationData.attributes_list = "";
OperationData.Condition = "";
OperationData.ConditionOperation = "";
OperationData.user_Operation = "";
OperationData.expression = "";
```

Conditionals like XOR and AND are stored as `xorJoin` and `xorSplit` or `parallelSplit` and `parallelJoin` with their names stored in the `user_Operation` property. The loop conditional is stored as `loops_[loopName]` and a `loope_[loopName]` however.

# The List Array

This stores the nodes as strings in an array called `list` in the order in which they are added to the d3 graph.

# The Terminating Nodes Array

Contains an list of strings that contain the `terminatingNodes`. A terminating node is a node where the graph ends. No node is added after a terminating node. They can be added anywhere in the graph but are usually found at the end of a d3 graph or inside a XOR block.

# XorCount

`XorCount` keeps track of the number of XOR blocks added to the graph.

# parallelCount

`parallelCount` keeps track of the number of AND blocks added to the graph.

# newDynamicNode

`newDynamicNode` is the name of the localStorage object which updates every time the `OperationArray` object changes. The `newDynamicNode` is stored into a sessionStorage if localStorage is not available in the browser.

# Event Handlers

## Clicking Outside a Modal

Closes the modal when clicked outside.

## Save Button

Shows a modal where you can enter a file name and click `Confirm`.

## Confirm Button

1. Saves the created process to two files [myFileName].json and [myFileName]List.json. The `list` files contains the order of the activities and [myFileName].json contains the d3 graph data.

2. Also adds the list of saved file names to `graphListFile.txt`.

All files mentioned are available at the server inside the project folder.

## Load Files Button

Loads a list of file names from the `graphListFile.txt` and displays them.

## `addFileDive(className, data)`

Appends a single div with the data to the load files modal.

#### Arguments

1. `className` _(any)_: The class name of the div.

2. `data` _(any)_: The file name to be appended to the modal.

## Selecting a File Name

Adds a `selected` class name to the file name that was clicked.

## Load Graph Button

Loads the entire session of the saved graph when the load button is clicked from the after selecting a file name from the `Load Files` modal.

All the data from the json files are loaded into the app and the graph is re rendered.

## Adding a Node to the Graph

Adds an service to the graph and sets its previous and next nodes if present. If there are none, it is set to 'NONE'. Uses a `currentOperation` as a pointer to keep track of the last service added to the graph.

## Removing a Node from a Graph

You can remove a node by selecting it and then clicking on 'Remove Activity'. The remove activity button's click event uses the `selectedOperation`, `previousOperation` and `nextOperation` to remove the node.

## Adding a Loop Conditional

### Insert Loop Block Button

Displays a loop modal to decide where to place the loop in your graph.

1. `Block Name` : The name of the loop.

2. `Insert 'Loop Start' before`: Before which service/node should the start of the loop be added.

3. `Insert 'Loop End' before`: Before which service/node should the end of the loop be added.

### Insert Button

The click event for the `Insert` button inside the loop modal. Hides the modal and adds a loop to the graph by calling the `addLoop` function.

### `addLoop(loopName)`

Sets the `previous` and `next` of the loop block and the adjacent nodes/services to the loop block. Saves the updated graph structure to the localStorage.

#### Arguments

1. `loopName` _(any)_: The name of the loop.

## Adding a XOR Block

### Insert XOR Block Button

The click handler for the 'Insert XOR Block' button. Displays the modal to insert the XOR block. Sets `xorAdded` to be true.

### Insert Button

The click event for the `Insert` button inside the XOR modal. Hides the modal and adds a XOR block to the graph by calling the `addXOR` function. Also adds a new section to the UI with the `Add` button.

## Adding an AND Block

### Insert AND Block Button

The click handler for the 'Insert AND Block' button. Displays the modal to insert the XOR block. Sets `andAdded` to be true.

### Insert Button

The click event for the `Insert` button inside the AND modal. Hides the modal and adds a AND block to the graph by calling the `addAnd` function.

## Add Nodes in Between a XOR or AND Block

![](/img/xor-ui.png)

Adds nodes inside a XOR or an AND Block on clicking `Add`. Creates a new node and sets its `previous` and `next` along with the `previous` and `next` of the adjacent nodes adds it to the graph.

## Proceed Button

Calculates the order of the graph and the `terminating nodes`, then converts each graph object to a `mapping.txt` format and posts the data to the server. The server then writes the data to a file named `RefinedMappings.txt`.

## Click event when Selecting a Graph Node

Loads the dropdowns below with the previous and next node using the `OperationArray`.

Also changes the colour of the selected node.

# Other Functions

## `replaceWithVariable(arrayToChange)`

Changes the conditionals `xorSplit` to `xors_[branchName]`and xorJoin to `xore_[branchName]`from the XOR conditonal block.

It also converts the parallel block name from `parallelSplit` to `parallels_[andVariable]` and `parallelJoin` to `parallele_[andVariable]` in the array.

The `arrayToChange` is the `list` which stores the order of the graph.

## `ifFound(tobeFound, InList)`

Finds an element `tobeFound` in a array `InList`.

#### Arguments

1. `tobeFound` _(string)_: The element to be searched.

2. `InList` _(array)_: The list in which the element is searched.

#### Returns

1. `isExisting` _(boolean)_: returns `true` if found and `false` if it does not exist.

## `loadMappingsFile()`

Fetches and saves the data of `Mappings-empty.txt` to a variable called `worker_list`.

The `Mappings-empty.txt` file which is located in `\assemble_empty_node\WebContent\ASSEMBLE_v3\OFBiz_process` contains the following data:

```txt
#ss
#se
#ts
#te
#rs
#re
```

## `drawNode()`

Renders the d3 graph.

## `getOperations()`

Fetches the services from the `xml` file loaded from the first screen, sorts them alphabetically and loads them onto the dropdowns of the `SelectedBPsList.jsp` page.

The dropdowns that are loaded are mainly the `Operation To Add`, `Previous Operation` and `Next Operation`.

## `getOperationsInModal()`

Fetches the services, sorts them alphabetically and loads them to the dropdowns of all the modals that show when you want to add a conditional (`XOR`, `AND` or `loop`).

## `getOperationsInConditions(conditionalName)`

Fetches the services, sorts them alphabetically and loads them to the dropdowns that appear below the main dropdowns when a `xor` or a `parallel` is added.

The dropdown is shown in the [Add Nodes in Between a XOR or AND Block](#add-nodes-in-between-a-xor-or-and-block) section.

#### Arguments

1. `conditionalName` _(string)_: The name of the conditional. [XOR/AND]

## `textFileToArray(fileName)`

Fetches a file from a server and converts it to an array.

#### Arguments

1. `fileName` _(string)_: The name of the file.

## `addLoop(loopName)`

Adds a loop block to the graph. Creates a `loops_[loopName]` and a `loope_[loopName]` object and adds it to the `OperationArray`.

#### Arguments

1. `loopName` _(string)_: The name of the loop to be added.

## `addXOR()`

Adds a XOR block to the graph. Creates a `xorSplit+XorCount` and a `xorSplit+XorCount` object and adds it to the `OperationArray`.

Then checks to see if the XOR is being added near the end, in the middle of a graph or inside another conditional.

The localStorage is updated after the node block is added.

The conditionals `xorSplit"+XorCount` and `xorSplit+XorCount` are also added to the dropdowns.

## `addAND()`

Adds an AND block to the graph. Creates a `parallelSplit+parallelCount` and a `parallelSplit+parallelCount` object and adds it to the `OperationArray`.

Then checks to see if the AND is being added near the end, in the middle of a graph or inside another conditional.

The localStorage is updated after the node block is added.

The conditionals `parallelSplit+parallelCount` and `parallelSplit+parallelCount` are also added to the dropdowns.

## `draw(OperationArray,svg,inner,render)`

Draws the d3 graph using the `OperationArray`.

## `changeColour(obj)`

Changes the colour of the to blue if it contains the `clicked` class or to its old colour if not.

Adds the `clicked` class to the `obj`.

## `revertAllColours(array)`

Calls the `revertColour` function to all the elements in a given array.

## `revertColour(bpOperation)`

Changes the colour of a `bpOperation` to pink.

## `revertColourPath(bpOperation)`

Reverts the colours of the ones that have a clicked class.

## `storageAvailable(type)`

Checks if the browser has a `localStorage` or a `sessionStorage`.

## `showNotification(message)`

Displays a notification modal with the `message` passed as an argument to this function.

## `ifExists(operation)`

Check if an `operation` exists in the `list` array. Returns true or false.

## `getTerminatingNodes()`

Iterates the OperationArray and determined the terminating nodes. They are saved to an array called `terminatingNodes`.

## `getList()`

Iterates the `OperationArray` and creates a list array in the order in which the nodes are added.

## `getNodesInBlock(previousList,i)`

Returns the nodes inside a block (XOR/AND).

## `getFirstElem(OperationArray)`

Returns the first node of the d3 graph.
