---
layout: false
---
<h2>
    Stacked Bar
    <span class="api-link">
      <a href="../documentation/#stacked-bar">Stacked Bar Documentatoin</a>
    </span>
</h2>

<div class="white-panel">
  <graph data="graphData" width="100%" height="600px">
    <x field="Month" order-by="Date"></x>
    <y field="Unit Sales"></y>
    <legend></legend>
    <stacked-bar field="Owner"></stacked-bar>
  </graph>
</div>

```html
<!-- As Stacked Bar -->
<graph data="graphData" width="100%" height="600px">
  <x field="Month" order-by="Date"></x>
  <y field="Unit Sales"></y>
  <legend></legend>
  <stacked-bar field="Owner"></stacked-bar>
</graph>
```

<div class="white-panel">
  <graph data="graphData" width="100%" height="600px">
    <x group-by="Owner" field="Month" order-by="Date" type="Category" title="Cream, Get the Money"></x>
    <y field="Unit Sales" type="Measure" title="Dollah Dolah Bill Yall"></y>
    <stacked-bar field="Owner" series='SKU'></stacked-bar>
  </graph>
</div>

```html
<graph data="graphData" width="100%" height="600px">
  <x group-by="Owner" field="Month" order-by="Date" type="Category" title="Cream, Get the Money"></x>
  <y field="Unit Sales" type="Measure" title="Dollah Dolah Bill Yall"></y>
  <stacked-bar field="Owner" series='SKU'></stacked-bar>
</graph>
```
