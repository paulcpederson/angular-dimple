---
layout: false
---
<h2>
    Area Graph
    <span class="api-link">
      <a href="/documentation/#area">Area Graph Documentation</a>
    </span>
</h2>

<div class="white-panel">
 <graph data="graphData" width="100%" height="600px">
    <x field="Month" order-by="Date"></x>
    <y field="Unit Sales"></y>
    <legend></legend>
    <area field="Owner"></area>
  </graph>
</div>

```
<!-- Default -->
<div class="white-panel">
 <graph data="graphData" width="100%" height="600px">
    <x field="Month" order-by="Date"></x>
    <y field="Unit Sales"></y>
    <legend></legend>
    <area field="Owner"></area>
  </graph>
</div>
```

<!-- Grouped Area -->
<div class="white-panel">
 <graph data="graphData" width="100%" height="600px">
    <x group-by="Owner" field="Month" order-by="Date" title="Cream, Get the Money"></x>
    <y field="Unit Sales" type="Measure" title="Dollah Dolah Bill Yall"></y>

    <area field="Owner" value="Aperture"></area>
    <area field="Owner" value="Black Mesa"></area>
    <area field="Owner" value="Tyrell Corp"></area>
  </graph>
</div>

```
<!-- Grouped Area -->
<div class="white-panel">
 <graph data="graphData" width="100%" height="600px">
    <x group-by="Owner" field="Month" order-by="Date" title="Cream, Get the Money"></x>
    <y field="Unit Sales" type="Measure" title="Dollah Dolah Bill Yall"></y>

    <area field="Owner" value="Aperture"></area>
    <area field="Owner" value="Black Mesa"></area>
    <area field="Owner" value="Tyrell Corp"></area>
  </graph>
</div>
```