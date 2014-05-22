<h2>
    Expanded Stacked Area
    <span class="api-link">
      <a href="../documentation/#stacked-area">Expanded Stacked Area Documentation</a>
    </span>
</h2>

<graph data="graphData">
  <x field="Month" order-by="Date"></x>
  <y field="Unit Sales" type="Percent"></y>
  <legend></legend>
  <stacked-area field="Owner"></area>
</graph>

```html
<!-- Default Stacked -->
<graph data="graphData">
  <x field="Month" order-by="Date"></x>
  <y field="Unit Sales" type="Percent"></y>
  <legend></legend>
  <stacked-area field="Owner"></area>
</graph>
```

<graph data="graphData" width="100%" height="600px">
  <x group-by="Owner" field="Month" order-by="Date" type="Category" title="Cream, Get the Money"></x>
  <y field="Unit Sales" type="Percent" title="Dollah Dolah Bill Yall"></y>
  <stacked-area field="Owner" value="Aperture" series='SKU'></stacked-area>
  <stacked-area field="Owner" value="Black Mesa" series='SKU'></stacked-area>
  <stacked-area field="Owner" value="Tyrell Corp" series='SKU'></stacked-area>
</graph>

```html
<!-- Grouped, with Attrs -->
<graph data="graphData" width="100%" height="600px">
  <x group-by="Owner" field="Month" order-by="Date" type="Category" title="Cream, Get the Money"></x>
  <y field="Unit Sales" type="Percent" title="Dollah Dolah Bill Yall"></y>
  <stacked-area field="Owner" value="Aperture" series='SKU'></stacked-area>
  <stacked-area field="Owner" value="Black Mesa" series='SKU'></stacked-area>
  <stacked-area field="Owner" value="Tyrell Corp" series='SKU'></stacked-area>
</graph>
```