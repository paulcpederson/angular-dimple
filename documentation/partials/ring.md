<h2>
    Ring Chart
    <span class="api-link">
      <a href="../documentation/#stacked-area">Stacked Area Documentation</a>
    </span>
</h2>

<div class="white-panel">
  <graph data="graphData" width="100%" height="600px">
    <x field="Month" order-by="Date"></x>
    <y field="Unit Sales"></y>
    <legend></legend>
    <stacked-area field="Owner"></area>
  </graph>
</div>

<div id="chartContainer">
  <script type="text/javascript">
    var svg = dimple.newSvg("#chartContainer", 590, 400);
    d3.tsv("/data/example_data.tsv", function (data) {
      var myChart = new dimple.chart(svg, data);
      myChart.setBounds(20, 20, 460, 360)
      myChart.addMeasureAxis("p", "Unit Sales");
      var ring = myChart.addSeries("Owner", dimple.plot.pie);
      ring.innerRadius = "50%";
      myChart.addLegend(500, 20, 90, 300, "left");
      myChart.draw();
    });
  </script>
</div>

```html
<div id="chartContainer">
  <script type="text/javascript">
    var svg = dimple.newSvg("#chartContainer", 590, 400);
    d3.tsv("/data/example_data.tsv", function (data) {
      var myChart = new dimple.chart(svg, data);
      myChart.setBounds(20, 20, 460, 360)
      myChart.addMeasureAxis("p", "Unit Sales");
      var ring = myChart.addSeries("Owner", dimple.plot.pie);
      ring.innerRadius = "50%";
      myChart.addLegend(500, 20, 90, 300, "left");
      myChart.draw();
    });
  </script>
</div>
```


```html
<!-- Default Stacked -->
<graph data="graphData">
  <x field="Month" order-by="Date"></x>
  <y field="Unit Sales"></y>
  <legend></legend>
  <stacked-area field="Owner"></area>
</graph>
```