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

| attribute | accepts     |                              |
| --------- | --------- | -------------------------- |
| field*    | string    | Field to define on         |
| type | Category, Measure, Percent | Defined axis type. X-Axis defaults to Category. Y-Axis defaults to Measure. |
| order-by  | string    | Field to order data on     |
| group-by  | string    | Field to group data on. Only for Categorical axis. |
| title     | string, null        | Draws title for axis. |

## Legend

The `<legend>` directive creates a legend for your graph.

#### Attributes

| Directives     		|						     |
| --------------------- | -------------------------- |
| <graph>		  		| Graph parent container     |
| <x>			  		| Set x axis 		 	     |
| <y>			  		| Set y axis  			     |
| <line>		  		| add line to graph 	     |
| <bar>		  			| add bar to graph 		     |
| <stacked-bar>			| add stacked bars to graph  |
| <area>		  		| add area to graph          |
| <stacked-area>		| add stacked area to graph  |
| <scatter-plot>		| add scatter plot to graph  |

## <x>, <y>
| attribute | accepts 	| 							 |
| --------- | --------- | -------------------------- |
| field*	| string	| Field to define on         |
| type		| Category,
			  Measure,
			  Percent	| Defined axis type.
						  X-Axis defaults to Category
						  Y-Axis defaults to Measure |
| order-by  | string    | Field to order data on     |
| group-by  | string    | Field to group data on.
						  Only for Categorical axis  |
| title 	| string,
			  null		| Draws title for axis.      |

## All Directives
| attribute | accepts 	| 							 |
| --------- | --------- | -------------------------- |
| field* 	| string	| Which field to plot 	 	 |
| value		| string	| Plot single line. Default
						  of undefined will plot all
	   					  unique value for the field |
| filter    | string:string | Filters plot data on
							  field:value			 |

