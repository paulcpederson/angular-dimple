# Angular Dimple Documentation

Angular-Dimple is a series of Angular directives that help you create graphs and visualizations.

## Graph

The `<graph>` directive is the wrapper directive for every type of chart in Angular-Dimple. This will create a div with a dynamic id, and initialize a new Dimple graph inside of it with several default options.

#### Attributes

- `data`
- `width`
- `height`

## X and Y

The `<x>` and `<y>` directives set up your axes for the graph. You can set multiple axes of each type and the graph will display them.

#### Attributes

| attribute | accepts   |                            |
| --------- | --------- | -------------------------- |
| field*    | string    | Field to define on         |
| type      | Category, Measure, Percent | Defined axis type. X-Axis defaults to Category. Y-Axis defaults to Measure. |
| order-by  | string    | Field to order data on     |
| group-by  | string    | Field to group data on. Only for Categorical axis. |
| title     | string, 'null' | Draws title for axis. If set to `title='null'` will hide title. |

## Legend

The `<legend>` directive creates a legend for your graph.

| attribute | accepts 	| 							             |
| --------- | --------- | -------------------------- |
| left		  | '#', '#%' | Sets position from left of chart in either pixels or percent. Defaults to 10%. |
| top		    | '#', '#%' | Sets position from top of chart in either pixels or percent. Defaults to 4%. |
| height	  | '#', '#%' | Sets height of legend in either pixels or percent. Defaults to 100%. |
| width     | '#', '#%' | Sets width of legend in either pixels or percent. Defaults to 90%. |
| position 	| 'left', 'right' | Set float position of legend. Defaults to left. |

## All Directives
| attribute | accepts 	| 							 |
| --------- | --------- | -------------------------- |
| field* 	| string	| Which field to plot 	 	 |
| value		| string	| Plot single line. Default
						  of undefined will plot all
	   					  unique value for the field |
| filter    | string:string | Filters plot data on
							  field:value			 |

