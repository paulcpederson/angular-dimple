<h2>
    Scatter Plot
    <span class="api-link">
      <a href="../documentation/#scatter-plot">Scatter Plot Documentation</a>
    </span>
</h2>

<div class="white-panel">
  <graph data="graphData" height="600px">
    <x field="Operating Profit" type="Measure"></x>
    <y field="Unit Sales" type="Measure"></y>
    <legend></legend>
    <scatter-plot field="Owner" value="Aperture" series="SKU"></scatter-plot>
  </graph>
</div>

```html
<!-- With Attrs -->
<graph data="graphData" height="600px">
  <x field="Operating Profit" type="Measure"></x>
  <y field="Unit Sales" type="Measure"></y>
  <legend></legend>
  <!-- plot all of Aperture's SKU's against profit and sales
       'series' is the data you'd like to plot on the graph -->
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
  <!-- plot the SKU of each channel as a different color,
       using 'filter' to only show entries for Aperture. -->
  <scatter-plot field="Channel" series="SKU" filter="Owner:Aperture"></scatter-plot>
</graph>
```

<div class="white-panel">
  <graph data="simpleData" width="100%" height="600px">
    <x field="Height" type="Measure"></x>
    <y field="Weight" type="Measure"></y>
    <scatter-plot field="Height" series="Weight" label="Group A"></scatter-plot>
  </graph>
</div>

```html
<graph data="simpleData" width="100%" height="600px">
  <x field="Height" type="Measure"></x>
  <y field="Weight" type="Measure"></y>
  <!-- pass a 'label' to the scatter-plot to group entries,
       here, all data points are plotted but they're colored the same -->
  <scatter-plot field="Height" series="Weight" label="Group A"></scatter-plot>
</graph>
```

```json
[
  {
    "Height": 64,
    "Weight": 190
  },{
    "Height": 68,
    "Weight": 195
  },{
    "Height": 69,
    "Weight": 198
  },{
    "Height": 70,
    "Weight": 205
  },{
    "Height": 67,
    "Weight": 198
  },{
    "Height": 76,
    "Weight": 195
  }
]
```