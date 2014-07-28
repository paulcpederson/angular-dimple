<h2>
    Ring Chart
    <span class="api-link">
      <a href="../documentation/#ring">Ring Chart Documentation</a>
    </span>
</h2>

<div class="white-panel">
  <graph data="graphData" width="100%" height="600px">
    <p field="Unit Sales"></p>
    <legend></legend>
    <ring field="Owner" stroke="20"></ring>
  </graph>
</div>

```html
<!-- Default Stacked -->
  <graph data="graphData" width="100%" height="600px">
    <p field="Unit Sales"></p>
    <legend></legend>
    <ring field="Owner" stroke="20"></ring>
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
    <p field="Unit Sales"></p>
    <legend></legend>
    <ring field="Owner" width="20"></ring>
	<ring field="Price Tier" width="20" radius="75"></ring>
  </graph>
</div>

```html
<!-- Default Stacked -->
  <graph data="graphData" width="100%" height="600px">
    <p field="Unit Sales"></p>
    <legend></legend>
    <ring field="Owner" width="20"></ring>
	<ring field="Price Tier" width="20" radius="75"></ring>
  </graph>
```