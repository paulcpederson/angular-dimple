<h2>
    Bar Graph
    <span class="api-link">
      <a href="../documentation/#bar">Bar Graph Documentation</a>
    </span>
</h2>

<div class="white-panel">
  <graph data="graphData" width="100%" height="600px">
    <x field="Month" order-by="Date"></x>
    <y field="Unit Sales"></y>
    <legend></legend>
    <bar field="Owner" value="Black Mesa"></bar>
  </graph>
</div>

```html
<graph data="graphData" width="100%" height="600px">
  <x field="Month" order-by="Date"></x>
  <y field="Unit Sales"></y>
  <legend></legend>
  <bar field="Owner" value="Black Mesa"></bar>
</graph>
```

<div class="white-panel">
  <graph data="graphData" width="100%" height="600px">
    <x group-by="Owner" field="Month" order-by="Date" type="Category" title="Cream, Get the Money"></x>
    <y field="Unit Sales" type="Measure" title="Dollah Dolah Bill Yall"></y>
    <bar field="Owner"></bar>
  </graph>
</div>

```html
<graph data="graphData" width="100%" height="600px">
  <x group-by="Owner" field="Month" order-by="Date" type="Category" title="Cream, Get the Money"></x>
  <y field="Unit Sales" type="Measure" title="Dollah Dolah Bill Yall"></y>
  <bar field="Owner"></bar>
</graph>
```