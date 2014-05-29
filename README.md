# Angular Dimple

A simple angular library wrapping dimple charts as angular directives.

## Setup

To get setup, simply:

1. Make sure you have d3 and dimple
2. Download the minified javascript in dist
3. Include the library as a module in your app

## Use

All the angular directives behave in pretty much the same way. Simply use the directive, passing in a model from your scope as the `data=` attribute.

For example, in the controller for your app, if you had something like `$scope.graphData` which is json that looks like this:

```json
[
  {
    "Month": "Jan-11",
    "storeId": 1,
    "Sales": 14
  },{
    "Month": "Feb-11",
    "storeId": 1,
    "Sales": 14
  },{
    "Month": "March-11",
    "storeId": 1,
    "Sales": 17
  },{
    "Month": "Jan-11",
    "storeId": 2,
    "Sales": 14
  },{
    "Month": "Feb-11",
    "storeId": 2,
    "Sales": 16
  },{
    "Month": "March-11",
    "storeId": 2,
    "Sales": 8
  }
]
```

You'd set up a line-graph like this:

```html
<graph data="graphData">
  <x-axis field="Month"></x-axis>
  <y-axis field="Sales"></y-axis>
  <line field="storeId" value="2"></line>
  <line field="storeId" value="1"></line>
</graph>
```

This would give you a line graph with an x-axis of "Month", a y-axis of "Sales" and two lines, each corresponding to a different store from your dataset.

Passing a line tag with a field and no value will draw a line on the chart for each unique value for that field in your data. So you could plot a line for each unique `storeId` without having to specify them all by name like this:

```html
<graph data="graphData">
  <x-axis field="Month"></x-axis>
  <y-axis field="Sales"></y-axis>
  <line field="storeId"></line>
</graph>
```

#### Line Graphs

```html
<graph data="graphData">
  <x-axis field="Month"></x-axis>
  <y-axis field="Sales"></y-axis>
  <line field="storeId" value="2"></line>
  <line field="storeId" value="1"></line>
</graph>
```

#### Area Charts

```html
<graph data="graphData">
  <x-axis field="Month"></x-axis>
  <y-axis field="Sales"></y-axis>
  <area field="storeId" value="2"></area>
  <area field="storeId" value="1"></area>
</graph>
```

#### Stacked Area Charts

```html
<graph data="graphData">
  <x-axis field="Month"></x-axis>
  <y-axis field="Sales"></y-axis>
  <stacked-area field="storeId"></stacked-area>
</graph>
```

#### Bar Graphs

```html
<graph data="graphData" orientation="horizontal">
  <x-axis field="Month"></x-axis>
  <y-axis field="Sales"></y-axis>
  <bar field="storeId" value="2"></bar>
  <bar field="storeId" value="1"></bar>
</graph>
```

#### Stacked Bar Graphs

```html
<graph data="graphData" orientation="horizontal">
  <x-axis field="Month"></x-axis>
  <y-axis field="Sales"></y-axis>
  <stacked-bar field="storeId" value="2"></stacked-bar>
</graph>
```

#### Scatter Plot

Scatter plots require one extra field (`series`) to be passed through to the `<scatter-plot>` element. Let's say you have some data with heights and weights formatted like this:

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

Assuming you set that on your scope as `$scope.scatterData`, you can use the following directive to make a scatter plot:

```
<graph data="scatterData" width="100%" height="600px">
  <x field="Height" type="Measure"></x>
  <y field="Weight" type="Measure"></y>
  <scatter-plot series="Height"></scatter-plot>
</graph>
```

* Note: right now if your data set has two heights which are the same, it will average the two weights together. This comes from dimple, but we'd like to change that default behavior, see [this issue](https://github.com/esripdx/angular-dimple/issues/15).*

## Contributing

1. Fork & clone
1. `npm install`
1. `grunt` to run development environment
1. Test with `grunt test`
1. Open a pull request!

## License

[ISC](http://en.wikipedia.org/wiki/ISC_license)
