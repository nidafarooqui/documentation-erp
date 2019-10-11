---
id: graph-selection
title: Graph Selection
---

This section documents the functions used in the `GraphSelection.js` file which is used to create a BPEL process graph. Here you can add or remove activities and conditionals (loop, XOR and AND).

# Event Handlers

## Clicking Outside a Modal

Closes the modal when clicked outside.

## Save Button

Shows a modal where you can enter a file name and click `Confirm`.

## Confirm Button

1. Saves the created process to two files [myFileName].json and [myFileName]List.json. The `list` files contains the order of the activities and [myFileName].json contains the d3 graph data.

2. Also adds the list of saved file names to `graphListFile.txt`.

All files mentioned are available at the server inside the project folder.

## Load Files

Loads a list of file names from the `graphListFile.txt` and displays them.

## Selecting a File Name

Adds a `selected` class name to the file name that was clicked.

## Load Graph

Loads the entire session of the saved graph when the load button is clicked from the after selecting a file name from the `Load Files` modal.

All the data from the json files are loaded into the app and the graph is re rendered.

Duis et egestas libero, imperdiet faucibus ipsum. Sed posuere eget urna vel feugiat. Vivamus a arcu sagittis, fermentum urna dapibus, congue lectus. Fusce vulputate porttitor nisl, ac cursus elit volutpat vitae. Nullam vitae ipsum egestas, convallis quam non, porta nibh. Morbi gravida erat nec neque bibendum, eu pellentesque velit posuere. Fusce aliquam erat eu massa eleifend tristique.

Sed consequat sollicitudin ipsum eget tempus. Integer a aliquet velit. In justo nibh, pellentesque non suscipit eget, gravida vel lacus. Donec odio ante, malesuada in massa quis, pharetra tristique ligula. Donec eros est, tristique eget finibus quis, semper non nisl. Vivamus et elit nec enim ornare placerat. Sed posuere odio a elit cursus sagittis.

Phasellus feugiat purus eu tortor ultrices finibus. Ut libero nibh, lobortis et libero nec, dapibus posuere eros. Sed sagittis euismod justo at consectetur. Nulla finibus libero placerat, cursus sapien at, eleifend ligula. Vivamus elit nisl, hendrerit ac nibh eu, ultrices tempus dui. Nam tellus neque, commodo non rhoncus eu, gravida in risus. Nullam id iaculis tortor.

Nullam at odio in sem varius tempor sit amet vel lorem. Etiam eu hendrerit nisl. Fusce nibh mauris, vulputate sit amet ex vitae, congue rhoncus nisl. Sed eget tellus purus. Nullam tempus commodo erat ut tristique. Cras accumsan massa sit amet justo consequat eleifend. Integer scelerisque vitae tellus id consectetur.
