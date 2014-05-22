<h2>
    Scatter Plot
    <span class="api-link">
      <a href="/documentation/#scatter-plot">Scatter Plot Documentation</a>
    </span>
</h2>

<div class="white-panel">
  <graph data="graphData">
    <x field="Operating Profit" type="Measure"></x>
    <y field="Unit Sales" type="Measure"></y>
    <legend></legend>
    <scatter-plot field="Owner" value="Aperture" series="SKU"></scatter-plot>
  </graph>
</div>

```html
<!-- With Attrs -->
<graph data="graphData">
  <x field="Operating Profit" type="Measure"></x>
  <y field="Unit Sales" type="Measure"></y>
  <legend></legend>
  <scatter-plot field="Owner" value="Aperture" series="SKU"></scatter-plot>
</graph>
```
<div class="white-panel">
  <graph data="graphData" width="100%" height="600px">
    <x field="Operating Profit" type="Measure" title="Profit, Aperture"></x>
    <y field="Unit Sales" type="Measure"></y>
    <legend></legend>
    <scatter-plot field="Channel" series="SKU" filter="Owner:Aperture"></scatter-plot>
  </graph>
</div>

```html
<graph data="graphData" width="100%" height="600px">
  <x field="Operating Profit" type="Measure" title="Profit, Aperture"></x>
  <y field="Unit Sales" type="Measure"></y>
  <legend></legend>
  <scatter-plot field="Channel" series="SKU" filter="Owner:Aperture"></scatter-plot>
</graph>
```