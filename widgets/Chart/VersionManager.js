// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["jimu/shared/BaseVersionManager"],function(h){function d(){this.versions=[{version:"1.0",upgrader:function(a){return a}},{version:"1.1",upgrader:function(a){for(var b=null,c=null,e=null,d=null,g="#5d9cd3 #eb7b3a #a5a5a5 #febf29 #4673c2 #72ad4c".split(" "),f=0;f<a.charts.length;f++)b=a.charts[f],d=b.mode,c=b.types,e=b.colors,delete b.types,delete b.colors,e="feature"===d||"category"===d?1===b.valueFields.length?[e[0]]:g:[e[0]],0<=c.indexOf("column")&&(b.column={horizontalAxis:!0,verticalAxis:!0,
colors:e}),0<=c.indexOf("bar")&&(b.bar={horizontalAxis:!0,verticalAxis:!0,colors:e}),0<=c.indexOf("line")&&(b.line={horizontalAxis:!0,verticalAxis:!0,colors:e}),0<=c.indexOf("pie")&&(b.pie={label:!0,colors:g});return a}},{version:"1.2",upgrader:function(a){return a}},{version:"1.3",upgrader:function(a){return a}},{version:"1.4",upgrader:function(a){return a}},{version:"2.0Beta",upgrader:function(a){return a}},{version:"2.0",upgrader:function(a){return a}},{version:"2.0.1",upgrader:function(a){return a}},
{version:"2.1",upgrader:function(a){for(var b=null,c=0;c<a.charts.length;c++)b=a.charts[c],b.webMapLayerId="";return a}},{version:"2.2",upgrader:function(a){return a}}]}d.prototype=new h;return d.prototype.constructor=d});