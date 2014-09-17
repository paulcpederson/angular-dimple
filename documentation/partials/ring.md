<h2>
    Ring Chart
    <span class="api-link">
      <a href="../documentation/#ring">Ring Chart Documentation</a>
    </span>
</h2>

<div class="white-panel">
  <graph data="graphData" width="100%" height="600px">
    <r field="Unit Sales"></r>
    <legend></legend>
    <ring field="Owner" thickness="20"></ring>
  </graph>
</div>

```html
<!-- Default Stacked -->
  <graph data="graphData" width="100%" height="600px">
    <r field="Unit Sales"></r>
    <legend></legend>
    <ring field="Owner" thickness="20"></ring>
  </graph>
```

<h2>
    Multi Ring Chart
    <span class="api-link">
      <a href="../documentation/#ring">Ring Chart Documentation</a>
    </span>
</h2>

<div class="white-panel">
  <graph data="graphData" width="100%" height="600px">
    <r field="Unit Sales"></r>
    <legend></legend>
    <ring field="Owner" thickness="20"></ring>
	  <ring field="Price Tier" thickness="20" diameter="75"></ring>
  </graph>
</div>

```html
<!-- Default Stacked -->
  <graph data="graphData" width="100%" height="600px">
    <r field="Unit Sales"></r>
    <legend></legend>
    <ring field="Owner" thickness="20"></ring>
	  <ring field="Price Tier" thickness="20" diameter="75"></ring>
  </graph>
```