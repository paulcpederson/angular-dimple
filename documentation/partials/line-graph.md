
<h2>
    Line Graph
    <span class="api-link">
      <a href="/documentation/#line">Line Graph Documentation</a>
    </span>
</h2>

<div class="white-panel">
  <graph data="graphData">
    <x field="Month" order-by="Date"></x>
    <y field="Unit Sales"></y>
    <legend></legend>
    <line field="Owner"></line>
  </graph>
</div>

```html
<!-- Default -->
<graph data="graphData">
  <x field="Month" order-by="Date"></x>
  <y field="Unit Sales"></y>
  <legend></legend>
  <line field="Owner"></line>
</graph>
```

<div class="white-panel">
  <graph data="graphData" width="100%" height="600px">
    <x group-by="Owner" field="Month" order-by="Date" type="Category" title="Cream, Get the Money"></x>
    <y field="Unit Sales" type="Measure" title="Dollah Dolah Bill Yall"></y>
    <legend left="0" top="4%" height="100%" width="90%" position="right"> </legend>
    <line field="Owner" value="Aperture"></line>
    <line field="Owner" value="Black Mesa"></line>
    <line field="Owner" value="Tyrell Corp"></line>
  </graph>
</div>

```html
<!-- With Attrs -->
<graph data="graphData" width="100%" height="600px">
  <x group-by="Owner" field="Month" order-by="Date" type="Category" title="Cream, Get the Money"></x>
  <y field="Unit Sales" type="Measure" title="Dollah Dolah Bill Yall"></y>
  <legend left="0" top="4%" height="100%" width="90%" position="right"> </legend>
  <line field="Owner" value="Aperture"></line>
  <line field="Owner" value="Black Mesa"></line>
  <line field="Owner" value="Tyrell Corp"></line>
</graph>
```