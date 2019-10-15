---
id: graph-rendering
title: Graph Rendering
---

Reads the `RefinedMapping.txt` file and renders the d3 graph from it by saving each service to the `OperationArray` as an object with the following properties:

```js
var OperationData = {};
OperationData.previous = "";
OperationData.next = "";
OperationData.attributes_list = "";
OperationData.Condition = "";
OperationData.ConditionOperation = "";
OperationData.userVariable = "";
```

SVG elements are constructed and a d3 graph is rendered by running the callback `render` at the end.

Each object of the `OperationArray` is added as an html node in the SVG element.

```js
g.setNode(id, {
  labelType: "svg",
  label: svg_label,
  rx: 5,
  ry: 5
});
```

A conditional node has other styles and properties added to it.

```js
g.setNode(id, {
  labelType: "html",
  label: loopBeginHtml,
  rx: 0,
  ry: 0,
  width: 42,
  height: 42,
  transform: "translate(200,0)",
  padding: 0,
  style: "stroke: #C89EC4; stroke-width: 2",
  class: "loopGate"
});
```
