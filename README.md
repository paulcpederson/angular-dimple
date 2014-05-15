# Angular Dimple

A simple angular library wrapping dimple charts as angular directives.

## Setup

To get setup, simply:

1. Make sure you have d3 and dimple
2. Download the minified javascript in dist

## Use

All the angular directives behave in pretty much the same way. Simply use the directive, passing in a model from your scope as the `data=` attribute.

For example, in the controller for your app, if you had something like `$scope.graphData` which was a csv (or json, or tsv, or javascript object) that looked like this:

```
  StoreId, Month, Sales
  1, December, 12
  1, November, 14
  1, October, 18
  1, September, 12
  1, August, 10
  2, December, 19
  2, November, 24
  2, October, 36
  2, September, 24
  2, August, 8
}
```

You'd set up a line-graph like this:

```
<line-graph data="graphData">
  <x-axis field="Month" order-by="date"></x-axis>
  <y-axis field="Sales" order-by="number"></y-axis>
  <line field="storeId" value="2"></line>
  <line field="storeId" value="1"></line>
</line-graph>
```

This would give you a line graph with an x-axis of "Month", a y-axis of "Sales" and two lines, each corresponding to a different store from your dataset.

#### Line Graphs

```html
<line-graph data="graphData">
  <x-axis field="Month" order-by="date"></x-axis>
  <y-axis field="Sales" order-by="number"></y-axis>
  <line field="storeId" value="2"></line>
  <line field="storeId" value="1"></line>
</line-graph>
```

#### Stacked Area Charts

```html
<line-graph data="graphData">
  <x-axis field="Month" order-by="date"></x-axis>
  <y-axis field="Sales" order-by="number"></y-axis>
  <stacked-area field="storeId" value="2"></stacked-area>
  <stacked-area field="storeId" value="1"></stacked-area>
</line-graph>
```

#### Bar Graphs

```html
<bar-graph data="graphData" orientation="horizontal">
  <x-axis field="Month" order-by="date"></x-axis>
  <y-axis field="Sales" order-by="number"></y-axis>
  <bar field="storeId" value="2"></bar>
  <bar field="storeId" value="1"></bar>
</bar-graph>
```html


#### Future Graph Types

We'd like to accomplish all of the following charts as directives:

- Line
- Multiple Line
- Area
- Stacked Area
- 100% Stacked Area
- Bar
- Multiple Bar
- Stacked Bar
- Donut

## Contributing

1. Fork the Repo
2. Clone to your machine
3. `npm install`
4. `grunt` to run development environment
5. Test with `grunt test`.
6. Open a pull-request!

## Liscence

[ISC](http://en.wikipedia.org/wiki/ISC_license)
