
# Angular Dimple Documentation

Angular Dimple is a series of Angular directives that help you create graphs and visualizations based on [Dimple.js](http://dimplejs.org/) and [d3](http://d3js.org/). It's designed to create graphs as simply as possible from flat JSON data.

---

## Graph

The `<graph>` directive is the wrapper directive for every type of chart in Angular Dimple. This is where you define what data to graph, as well as the size of the graph. The data property accepts a scope variable, and you should handle the variables creation in your own data service – Dimple Angular provides some simple methods of data filtering on a graph, but avoids intensive data compiling and manipulation.

This directive creates a div with a dynamic id, and initializes a new Dimple graph inside of it with several default options. Default heighth and width are 100% of the parent container.

```html
<graph data='data' width='100%' height='100%'>

<graph>
```

#### Attributes

| attribute | default     | description |
| --------- | ----------- | ----------- |
| data      | none        | **Required.** Angular Dimple graphs accept flat JSON files as a $scope variable, set from a service. Or something |
| width     | 100%        | Accepts a percent or a number. Sets the width of the chart, either in pixels or percent. |
| height    | 100%        | Accepts a percent or a number. Sets the width of the chart, either in pixels or percent. |
| auto-style | true       | Boolean. If false, no default dimple color, fill, or stroke styles will be applied to the graph. Allows for custom css styling. |

---

## X

The `<x>` directive sets up your x axis for the graph. Defining an x axis is required. Because it's graph. Be default, `<x>` will expect to tie to categorical data rather than measure data.

```html
<x field='Month' type='Category' order-by='Date' group-by='Owner' title='Month, Year'></x>
```

#### Attributes

| attribute | default     | description |
| --------- | ----------- | ----------- |
| field     | none        | **Required.** Field from your data to set as the X-Axis. |
| type      | Category    | Accepts 'Category', 'Measure', or 'Percent'. Defines axis type. |
| order-by  | none        | Field from your data to order the x axis by. |
| group-by  | none        | Creates small mutliple graphs grouped by a Categorical data field.
| title     | field value | Labels the x axis. If 'null', will not draw a title for the axis. |

---

## Y

The `<y>` directive sets up your y axis for the graph. One y axis is requires, but you can set multiple axes of each type and the graph will display them. By default, `<y>` will expect to plot measure data rather than categorical data.

Changing the axis to to 'Percent' will tie the largest value on the defined field to 100%, and compare the rest of the values to that.

```html
<y field='Unit Sales' type='Measure' order-by='Unit Sales' group-by='Owner' title='Sales'></x>
```

#### Attributes

| attribute | default     | description |
| --------- | ----------- | ----------- |
| field     | none        | **Required.** Field from your data to set as the Y-Axis. |
| type      | Measure     | Accepts 'Category', 'Measure', or 'Percent'. Defines axis type. |
| order-by  | none        | Field from your data to order the y axis by. |
| group-by  | none        | Creates small mutliple graphs grouped by a Categorical data field.
| title     | field value | Labels the y-axis. If 'null', will not draw a title for the axis. |

---

## Legend

The `<legend>` directive creates a legend for your graph. The legend is generated from the plotted data.

| attribute | default     | description |
| --------- | ----------- | ----------- |
| left		  | 10%         | Accepts a percent or a number. Sets position from left of chart in either pixels or percent. |
| top		    | 4%          | Accepts a percent or a number. Sets position from top of chart in either pixels or percent. |
| height	  | 100%        | Accepts a percent or a number. Sets height of legend in either pixels or percent. |
| width     | 90%         | Accepts a percent or a number. Sets width of legend in either pixels or percent. |
| position 	| left        | Accepts 'left' or 'right'. Set float position of legend. |

---

## Line
<a class="example-link" href="../examples/#/line-graph">example</a>

The `<line>` directive plots your data as a line. The `field` attribute (required) will define the field from your data to plot to the graph. The `value` attribute will plot a single line to your graph for that value in the field. You can include as many line elements in your graph as you have unique values. Leaving the `value` attribute blank will plot each unique value in the data set as it's own line.

```html
<line field="Owner"></line>

<!-- OR -->

<line field="Owner" val="Aperture"></line>
<line field="Owner" val="Black Mesa"></line>
```

#### Attributes

| attribute | description |
| --------- | ----------- |
| field     | **Required.** Field to plot as a line. |
| value     | Will plot a line where the field is the given value. |
| filter    | Accepts a string 'field:value'. Will filter the data to only points where the defined field matches the defined value. |

---

## Bar
<a class="example-link" href="../examples/#/bar">example</a>

The `<bar>` directive plots your data as series of bars. The `field` attribute (required) will define the field from your data to plot to the graph. The `value` attribute will plot the bars to your graph  for that value in the field. If no value is defined, or multiple bars are included in the graph, the data will plot as a stacked bar.

```html
<bar field="Owner" val="Aperture"></bar>

<!-- OR -->

<bar field="Owner"></bar>
```

#### Attributes

| attribute | description |
| --------- | ----------- |
| field     | **Required.** Field to plot as a line. |
| value     | Will plot a line where the field is the given value. |
| filter    | Accepts a string 'field:value'. Will filter the data to only points where the defined field matches the defined value. |

---

---

## Stacked Bar
<a class="example-link" href="../examples/#/stacked-bar">example</a>

The `<bar>` directive plots your data as series of bars. The `field` attribute (required) will define the field from your data to plot to the graph. The `value` attribute will plot the bars to your graph  for that value in the field. If no value is defined, or multiple bars are included in the graph, the data will plot as a stacked bar.

```html
<stacked-bar field="Owner" val="Aperture"></stacked-bar>

<!-- OR -->

<stacked-bar field="Owner"></stacked-bar>
```

#### Attributes

| attribute | description |
| --------- | ----------- |
| field     | **Required.** Field to plot as a line. |
| value     | Will plot a line where the field is the given value. |
| filter    | Accepts a string 'field:value'. Will filter the data to only points where the defined field matches the defined value. |

---

## Area
<a class="example-link" href="../examples/#/area-graph">example</a>

The `<area>` directive plots your data to an area chart. The `field` attribute will define the field from your data to plot to the graph. The `value` attribute will plot a single area to your graph for that value in the field. You can include as many area elements in your graph as you have unique values.

```html
<area field="Owner"></area>

<!-- OR -->

<area field="Owner" val="Aperture"></area>
<area field="Owner" val="Black Mesa"></area>
```

#### Attributes

| attribute | description |
| --------- | ----------- |
| field     | **Required.** Field to plot as a line. |
| value     | Will plot a line where the field is the given value. |
| filter    | Accepts a string 'field:value'. Will filter the data to only points where the defined field matches the defined value. |

---

## Stacked Area
<a class="example-link" href="../examples/#/stacked-area">example</a>

The `<stacked-area>` directive plots your data to a stacked area chart. The `field` attribute will define the field from your data to plot to the graph. The `value` attribute will plot a single line to your graph for that value in the field. You can include as many area elements in your graph as you have unique values.

```html
<stacked-area field="Owner"></stacked-area>

<!-- OR -->

<stacked-area field="Owner" val="Aperture"></stacked-area>
<stacked-area field="Owner" val="Black Mesa"></stacked-area>
```

### Expanded Stacked Area
<a class="example-link" href="../examples/#/stacked-area">example</a>

Setting the y axis in a stacked area graph with create an expanded stacked area, where the total combined value of the field is equal to 100%.

```html
<y field='Unit Sales' type="Percent"></y>
<stacked-area field="Owner"></stacked-area>
```

#### Attributes

| attribute | description |
| --------- | ----------- |
| field     | **Required.** Field to plot as a line. |
| value     | Will plot a line where the field is the given value. |
| filter    | Accepts a string 'field:value'. Will filter the data to only points where the defined field matches the defined value. |


---

## Scatter Plot
<a class="example-link" href="../examples/#/scatter-plot">example</a>

The `<scatter-plot>` directive plots your data to an scatter plot chart. The `field` attribute will define the field from your data to plot to the graph. The `value` attribute will plot a single scatter plot to your graph for that value in the field. You can include as many scatter plot elements in your graph as you have unique values.

Scatter Plots also use the `series` attribute. Series defines the categorical data to plot against the fields on the axes.

```html
<scatter-plot field="Owner" series="SKU"></scatter-plot>

<!-- OR -->

<scatter-plot field="Channel" val="Supermarket" series="SKU" filter="Owner:Aperture"></scatter-plot>
<scatter-plot field="Channel" val="Hypermarket" series="SKU" filter="Owner:Aperture"></scatter-plot>
```

#### Attributes

| attribute | description |
| --------- | ----------- |
| field     | **Required.** Field to plot as a line. |
| value     | Will plot a line where the field is the given value. |
| series    | Accepts a string 'field'. |
| filter    | Accepts a string 'field:value'. Will filter the data to only points where the defined field matches the defined value. |

---

## Ring
<a class="example-link" href="../examples/#/ring">example</a>

The `ring` directive creates pie and donut charts - but require a seperate type of axis that the other charts in Angular Dimple. A ring chart uses a `<p></p>` axis to plot a single measure. Adding multiple series to a ring chart will create concentric circles within the chart.

You can define both the thickness of the ring (as a percentage) and the diameter of the ring (as a percentage).

```html
<p field="Unit Sales"></p>
<ring field="Owner"></ring>

<!-- OR -->

<p field="Unit Sales"></p>
<ring field="Owner" thickness="20"></ring>
<ring field="Price Tier" thickness="20" diameter="75"></ring>>
```

#### Attributes

| attribute | description |
| --------- | ----------- |
| field     | **Required.** Field to plot as a ring. |
| thickness     | Accepts a number. Width of ring, as percent of circle size. |
| diameter    | Accepts a number. Size of ring, as percent of circle size. |




