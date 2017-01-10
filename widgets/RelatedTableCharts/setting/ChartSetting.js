// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/RelatedTableCharts/setting/ChartSetting.html":'\x3cdiv class\x3d"esriCTFullHeight"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"tabDiv" class\x3d"esriCTFullHeight"\x3e\r\n        \x3c!-- Settings tab --\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"settingsTabNode" class\x3d"esriCTFullHeight"\x3e\r\n            \x3cdiv class\x3d"esriCTChartSettingsNode"\x3e\r\n                \x3cdiv class\x3d"esriCTmainContainer"\x3e\r\n                    \x3c!-- Section Title --\x3e\r\n                    \x3cdiv\x3e\r\n                        \x3cdiv class\x3d"esriCTChartTitleDiv"\x3e\r\n                            \x3cdiv class\x3d"esriCTChartSettingLabel" title\x3d"${nls.sectionTitle}"\x3e\r\n                                ${nls.sectionTitle}\r\n                            \x3c/div\x3e\r\n                            \x3cdiv class\x3d"esriCTFieldInput"\x3e\r\n                                \x3cdiv class\x3d"esriCTControlWidth" data-dojo-attach-point\x3d"sectionTitleTextBox" data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n                                    required\x3d"true" trim\x3d"true" data-dojo-attach-event\x3d"change:_onSectionTitleChanged"\x3e\r\n                                \x3c/div\x3e\r\n                                \x3cdiv class\x3d"esriCTHint" title\x3d"${nls.sectionTitleHintText}"\x3e\r\n                                    ${nls.sectionTitleHintText}\r\n                                \x3c/div\x3e\r\n                            \x3c/div\x3e\r\n                        \x3c/div\x3e\r\n                    \x3c/div\x3e\r\n                    \x3c!-- Chart Title --\x3e\r\n                    \x3cdiv\x3e\r\n                        \x3cdiv class\x3d"esriCTChartTitleDiv"\x3e\r\n                            \x3cdiv class\x3d"esriCTChartSettingLabel" title\x3d"${nls.chartTitle}"\x3e\r\n                                ${nls.chartTitle}\r\n                            \x3c/div\x3e\r\n                            \x3cdiv class\x3d"esriCTFieldInput"\x3e\r\n                                \x3cdiv class\x3d"esriCTControlWidth" data-dojo-attach-point\x3d"chartTitleTextBox" data-dojo-type\x3d"dijit/form/ValidationTextBox"\x3e\r\n                                \x3c/div\x3e\r\n                                \x3cdiv class\x3d"esriCTHint" title\x3d"${nls.chartTitleHintText}"\x3e\r\n                                    ${nls.chartTitleHintText}\r\n                                \x3c/div\x3e\r\n                            \x3c/div\x3e\r\n                            \x3cdiv class\x3d"esriCTFieldSelectorDiv" data-dojo-attach-point\x3d"titleFieldSelectorDiv"\x3e\r\n                            \x3c/div\x3e\r\n                        \x3c/div\x3e\r\n                    \x3c/div\x3e\r\n                    \x3c!-- Chart Description --\x3e\r\n                    \x3cdiv\x3e\r\n                        \x3cdiv class\x3d"esriCTChartDescriptionDiv"\x3e\r\n                            \x3cdiv class\x3d"esriCTChartSettingLabel" title\x3d"${nls.chartDescription}"\x3e\r\n                                ${nls.chartDescription}\r\n                            \x3c/div\x3e\r\n                        \x3c/div\x3e\r\n                        \x3cdiv class\x3d"esriCTChartDescriptionDiv"\x3e\r\n                            \x3cdiv class\x3d"esriCTFieldInput editorDescriptionContainer"\x3e\r\n                                \x3cdiv class\x3d"editor-container" data-dojo-attach-point\x3d"editorContainer"\x3e\r\n                                    \x3cdiv data-dojo-attach-point\x3d"editor"\x3e\r\n                                    \x3c/div\x3e\r\n                                \x3c/div\x3e\r\n                                \x3cdiv class\x3d"esriCTHint" title\x3d"${nls.chartDescriptionHintText}"\x3e\r\n                                    ${nls.chartDescriptionHintText}\r\n                                \x3c/div\x3e\r\n                            \x3c/div\x3e\r\n                            \x3cdiv class\x3d"esriCTFieldSelectorDiv" data-dojo-attach-point\x3d"descriptionFieldSelectorDiv"\x3e\r\n                            \x3c/div\x3e\r\n                        \x3c/div\x3e\r\n                    \x3c/div\x3e\r\n                    \x3c!-- Select chart type--\x3e\r\n                    \x3cdiv class\x3d"esriCTChartChartTypeDiv esriCTFieldRow"\x3e\r\n                        \x3cdiv class\x3d"esriCTChartSettingLabel" data-dojo-attach-point\x3d"chartTypeLabelNode"\r\n                            title\x3d"${nls.chartType}"\x3e\r\n                            ${nls.chartType}\r\n                        \x3c/div\x3e\r\n                        \x3cdiv class\x3d"esriCTFieldInput"\x3e\r\n                            \x3cdiv class\x3d"esriCTMarginRight"\x3e\r\n                                \x3cinput class\x3d"esriCTCursorPointer" checked\x3d"checked" value\x3d"rdoBarChart" type\x3d"radio"\r\n                                    data-dojo-type\x3d"dijit/form/RadioButton" name\x3d"chart" data-dojo-type\x3d"dijit/form/RadioButton"\r\n                                    data-dojo-attach-point\x3d"rdoBarChart" /\x3e\r\n                                \x3clabel class\x3d"esriCTChartTypeEllipsis esriCTCursorPointer" for\x3d"rdoBarChart" data-dojo-attach-point\x3d"barLabel"\r\n                                    title\x3d"${nls.barChart}"\x3e\r\n                                    ${nls.barChart}\x3c/label\x3e\r\n                            \x3c/div\x3e\r\n                            \x3cdiv class\x3d"esriCTMarginRight"\x3e\r\n                                \x3cinput class\x3d"esriCTCursorPointer" value\x3d"rdoPieChart" type\x3d"radio" data-dojo-type\x3d"dijit/form/RadioButton"\r\n                                    name\x3d"chart" data-dojo-attach-point\x3d"rdoPieChart" data-dojo-attach-event\x3d"change:_onChartTypeChanged" /\x3e\r\n                                \x3clabel class\x3d"esriCTChartTypeEllipsis esriCTCursorPointer" for\x3d"rdoPieChart" data-dojo-attach-point\x3d"pieLabel"\r\n                                    title\x3d"${nls.pieChart}"\x3e\r\n                                    ${nls.pieChart}\x3c/label\x3e\r\n                            \x3c/div\x3e\r\n                            \x3cdiv class\x3d"esriCTMarginRight"\x3e\r\n                                \x3cinput class\x3d"esriCTCursorPointer" value\x3d"rdoPolarChart" type\x3d"radio" data-dojo-type\x3d"dijit/form/RadioButton"\r\n                                    name\x3d"chart" data-dojo-attach-point\x3d"rdoPolarChart" data-dojo-attach-event\x3d"change:_onChartTypeChanged" /\x3e\r\n                                \x3clabel class\x3d"esriCTChartTypeEllipsis esriCTCursorPointer" for\x3d"rdoPolarChart" data-dojo-attach-point\x3d"polarLabel"\r\n                                    title\x3d"${nls.polarChart}"\x3e\r\n                                    ${nls.polarChart}\x3c/label\x3e\r\n                            \x3c/div\x3e\r\n                        \x3c/div\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv data-dojo-attach-point\x3d"labelSection"\x3e\r\n                        \x3c!-- Data Series Field--\x3e\r\n                        \x3cdiv class\x3d"esriCTControlWidth esriCTLeftAlign esriCTFieldRow"\x3e\r\n                            \x3cdiv class\x3d"esriCTChartDescriptionDiv"\x3e\r\n                                \x3cdiv class\x3d"esriCTChartSettingLabel" title\x3d"${nls.dataSeriesField}"\x3e\r\n                                    ${nls.dataSeriesField}\r\n                                \x3c/div\x3e\r\n                                \x3cdiv class\x3d"esriCTFieldInput"\x3e\r\n                                    \x3cselect style\x3d"width: 232px;" data-dojo-attach-point\x3d"dataSeriesFieldDropdown" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n                                    \x3c/select\x3e\r\n                                \x3c/div\x3e\r\n                            \x3c/div\x3e\r\n                        \x3c/div\x3e\r\n                        \x3c!-- Label Field --\x3e\r\n                        \x3cdiv class\x3d"esriCTControlWidth esriCTLeftAlign esriCTFieldRow esriCTChartChartTypeDiv"\x3e\r\n                            \x3cdiv class\x3d"esriCTChartDescriptionDiv"\x3e\r\n                                \x3cdiv class\x3d"esriCTChartSettingLabel" title\x3d"${nls.labelField}"\x3e\r\n                                    ${nls.labelField}\r\n                                \x3c/div\x3e\r\n                                \x3cdiv class\x3d"esriCTFieldInput"\x3e\r\n                                    \x3cselect style\x3d"width: 232px;" data-dojo-attach-point\x3d"labelSeriesFieldDropdown" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n                                    \x3c/select\x3e\r\n                                \x3c/div\x3e\r\n                            \x3c/div\x3e\r\n                        \x3c/div\x3e\r\n                    \x3c/div\x3e\r\n                    \x3c!-- Chart Color --\x3e\r\n                    \x3cdiv\x3e\r\n                        \x3cdiv\x3e\r\n                            \x3cdiv class\x3d"esriCTChartSettingLabel" title\x3d" ${nls.chartColor}"\x3e\r\n                                ${nls.chartColor}\r\n                            \x3c/div\x3e\r\n                            \x3cdiv class\x3d"esriCTFieldInput"\x3e\r\n                                \x3cdiv class\x3d"esriCTChartColorMargin esriCTSingleColorContainer"\x3e\r\n                                    \x3cdiv class\x3d"jimu-trailing-margin2 esriCTLeftAlign esriCTChartColorWidth"\x3e\r\n                                        \x3cinput class\x3d"esriCTCursorPointer" checked\x3d"checked" value\x3d"rdoSingleColor" type\x3d"radio"\r\n                                            data-dojo-type\x3d"dijit/form/RadioButton" name\x3d"ChartColor" data-dojo-attach-point\x3d"rdoSingleColor" /\x3e\r\n                                        \x3clabel class\x3d"esriCTChartColorEllipsis esriCTCursorPointer" for\x3d"rdoSingleColor"\r\n                                            title\x3d"${nls.singleColor}"\x3e\r\n                                            ${nls.singleColor}\x3c/label\x3e\r\n                                    \x3c/div\x3e\r\n                                    \x3cdiv class\x3d"esriCTColorPicker" data-dojo-attach-point\x3d"colorPicker" data-dojo-type\x3d"jimu/dijit/ColorPicker"\x3e\r\n                                    \x3c/div\x3e\r\n                                \x3c/div\x3e\r\n                                \x3cdiv class\x3d"esriCTChartColorMargin esriCTChartColorHeight"\x3e\r\n                                    \x3cdiv class\x3d"jimu-trailing-margin2 esriCTLeftAlign esriCTChartColorWidth esriCTColorByThemeContainer"\x3e\r\n                                        \x3cinput class\x3d"esriCTCursorPointer" value\x3d"rdoColorByTheme" type\x3d"radio" data-dojo-type\x3d"dijit/form/RadioButton"\r\n                                            name\x3d"ChartColor" data-dojo-attach-point\x3d"rdoColorByTheme" data-dojo-attach-event\x3d"change:_onChartColorChanged" /\x3e\r\n                                        \x3clabel class\x3d"esriCTChartColorEllipsis esriCTCursorPointer" for\x3d"rdoColorByTheme"\r\n                                            title\x3d"${nls.colorByTheme}"\x3e\r\n                                            ${nls.colorByTheme}\x3c/label\x3e\r\n                                    \x3c/div\x3e\r\n                                    \x3cdiv class\x3d"esriCTThemeSelectorDiv" data-dojo-attach-point\x3d"themeSelectorDiv"\x3e\r\n                                    \x3c/div\x3e\r\n                                \x3c/div\x3e\r\n                                \x3cdiv class\x3d"esriCTChartColorMargin esriCTHidden" data-dojo-attach-point\x3d"colorByFieldContainer"\x3e\r\n                                    \x3cdiv class\x3d"jimu-trailing-margin2 esriCTLeftAlign esriCTChartColorWidth"\x3e\r\n                                        \x3cinput class\x3d"esriCTCursorPointer" value\x3d"rdoColorByFieldValue" type\x3d"radio" data-dojo-type\x3d"dijit/form/RadioButton"\r\n                                            name\x3d"ChartColor" data-dojo-attach-point\x3d"rdoColorByFieldValue" data-dojo-attach-event\x3d"change:_onChartColorChanged" /\x3e\r\n                                        \x3clabel class\x3d"esriCTChartColorEllipsis esriCTCursorPointer" for\x3d"rdoColorByFieldValue"\r\n                                            title\x3d"${nls.colorByFieldValue}"\x3e\r\n                                            ${nls.colorByFieldValue}\x3c/label\x3e\r\n                                    \x3c/div\x3e\r\n                                    \x3cselect style\x3d"width: 232px;" data-dojo-attach-point\x3d"ColorByFieldValueDropdown"\r\n                                        data-dojo-type\x3d"dijit/form/Select"\x3e\r\n                                    \x3c/select\x3e\r\n                                \x3c/div\x3e\r\n                            \x3c/div\x3e\r\n                        \x3c/div\x3e\r\n                        \x3cdiv class\x3d"esriCTColorByFieldContainer esriCTHidden" data-dojo-attach-point\x3d"colorByFieldTableContainer"\x3e\r\n                            \x3cdiv class\x3d"esriCTChartTypeDiv"\x3e\r\n                                \x3cdiv data-dojo-attach-point\x3d"colorByFieldTablePanel"\x3e\r\n                                \x3c/div\x3e\r\n                            \x3c/div\x3e\r\n                        \x3c/div\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv data-dojo-attach-point\x3d"axisSection"\x3e\r\n                        \x3c!-- X-axis label --\x3e\r\n                        \x3cdiv data-dojo-attach-point\x3d"xAxisArea"\x3e\r\n                            \x3cdiv class\x3d"esriCTChartTitleDiv"\x3e\r\n                                \x3cdiv class\x3d"esriCTChartSettingLabel" title\x3d"${nls.xAxisTitle}"\x3e\r\n                                    ${nls.xAxisTitle}\r\n                                \x3c/div\x3e\r\n                                \x3cdiv class\x3d"esriCTFieldInput"\x3e\r\n                                    \x3cdiv class\x3d"esriCTControlWidth" data-dojo-attach-point\x3d"xAxisTextBox" data-dojo-type\x3d"dijit/form/ValidationTextBox"\x3e\r\n                                    \x3c/div\x3e\r\n                                    \x3cdiv class\x3d"esriCTHint" title\x3d"${nls.xAxisHintText}"\x3e\r\n                                        ${nls.xAxisHintText}\r\n                                    \x3c/div\x3e\r\n                                \x3c/div\x3e\r\n                                \x3cdiv class\x3d"esriCTFieldSelectorDiv" data-dojo-attach-point\x3d"xAxisFieldSelectorDiv"\x3e\r\n                                \x3c/div\x3e\r\n                            \x3c/div\x3e\r\n                        \x3c/div\x3e\r\n                        \x3c!-- Y-axis label --\x3e\r\n                        \x3cdiv data-dojo-attach-point\x3d"yAxisArea"\x3e\r\n                            \x3cdiv class\x3d"esriCTChartTitleDiv"\x3e\r\n                                \x3cdiv class\x3d"esriCTChartSettingLabel" title\x3d"${nls.yAxisTitle}"\x3e\r\n                                    ${nls.yAxisTitle}\r\n                                \x3c/div\x3e\r\n                                \x3cdiv class\x3d"esriCTFieldInput"\x3e\r\n                                    \x3cdiv class\x3d"esriCTControlWidth" data-dojo-attach-point\x3d"yAxisTextBox" data-dojo-type\x3d"dijit/form/ValidationTextBox"\x3e\r\n                                    \x3c/div\x3e\r\n                                    \x3cdiv class\x3d"esriCTHint" title\x3d"${nls.yAxisHintText}"\x3e\r\n                                        ${nls.yAxisHintText}\r\n                                    \x3c/div\x3e\r\n                                \x3c/div\x3e\r\n                                \x3cdiv class\x3d"esriCTFieldSelectorDiv" data-dojo-attach-point\x3d"yAxisFieldSelectorDiv"\x3e\r\n                                \x3c/div\x3e\r\n                            \x3c/div\x3e\r\n                        \x3c/div\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv data-dojo-attach-point\x3d"polarChartSection" class\x3d"esriCTHidden esriCTPolarChartSection"\x3e\r\n                        \x3cdiv\x3e\r\n                            \x3cdiv class\x3d"esriCTChartTitleDiv"\x3e\r\n                                \x3cdiv class\x3d"esriCTChartSettingLabel" title\x3d"${nls.polarChartPolygonFillLabel}"\x3e\r\n                                    ${nls.polarChartPolygonFillLabel}\r\n                                \x3c/div\x3e\r\n                                \x3cdiv class\x3d"esriCTFieldInput"\x3e\r\n                                    \x3cdiv class\x3d"esriCTCheckBox" checked\x3d"true" data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"polarChartFillColor"\x3e\r\n                                    \x3c/div\x3e\r\n                                    \x3cdiv class\x3d"esriCTHint esriCTHintInline" title\x3d"${nls.polarChartPolygonFillHintText}"\x3e\r\n                                        ${nls.polarChartPolygonFillHintText}\r\n                                    \x3c/div\x3e\r\n                                \x3c/div\x3e\r\n                            \x3c/div\x3e\r\n                        \x3c/div\x3e\r\n                        \x3cdiv data-dojo-attach-point\x3d"polarChartFieldInfos"\x3e\r\n                        \x3c/div\x3e\r\n                        \x3cdiv class\x3d"esriCTHint" title\x3d"${nls.polarChartSelectFieldsHintText}"\x3e\r\n                            ${nls.polarChartSelectFieldsHintText}\r\n                        \x3c/div\x3e\r\n                    \x3c/div\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3c!-- Layout tab --\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"layoutTabNode"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"layoutDiv" class\x3d"esriCTLayoutContainer"\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/dom-attr dojo/dom-construct dojo/_base/declare dojo/_base/lang dojo/on dojo/Evented dojo/text!./ChartSetting.html jimu/dijit/TabContainer3 ./ChartThemeSelector ./FieldSelector jimu/dijit/ColorPicker dojo/dom-class dojo/query dojo/_base/Color dojo/_base/array esri/tasks/query esri/tasks/QueryTask dojo/dom-style jimu/dijit/Message ../ChartLayout dijit/popup dojox/charting/themes/GreySkies jimu/dijit/SimpleTable dijit/Editor dojo/_base/html dojo/sniff jimu/utils dijit/_editor/plugins/LinkDialog dijit/_editor/plugins/ViewSource dijit/_editor/plugins/FontChoice dojox/editor/plugins/Preview dijit/_editor/plugins/TextColor dojox/editor/plugins/ToolbarLineBreak dojox/editor/plugins/FindReplace dojox/editor/plugins/PasteFromWord dojox/editor/plugins/InsertAnchor dojox/editor/plugins/Blockquote dojox/editor/plugins/UploadImage ./ChooseImage jimu/dijit/CheckBox jimu/dijit/EditorTextColor jimu/dijit/EditorBackgroundColor".split(" "),
function(v,w,x,k,m,y,g,l,z,A,B,C,D,E,h,n,q,r,F,G,s,H,I,J,K,t,L,u,M,p){return y([v,w,x,z],{baseClass:"jimu-widget-RelatedTableCharts-setting",templateString:A,_widgets:[],_stringFieldType:"esriFieldTypeString",_oidFieldType:"esriFieldTypeOID",_numberFieldTypes:["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],tr:null,layerDetails:null,config:{},_chartColorType:{singleColor:"SingleColor",byThemeColor:"ColorByTheme",byFieldValue:"ColorByFieldValue"},selectedNode:null,
fieldColorPicker:null,defaultColor:"#000000",_editor:null,_displayFieldsTable:null,constructor:function(){this._widgets=[]},startup:function(){this.inherited(arguments)},postCreate:function(){this._createColorByFieldTable();this._initSelf();this._initEditor()},destroy:function(){this.tr=null;delete this.tr;r.forEach(this._widgets,function(a){a.destroy()});this._widgets=[];this.inherited(arguments)},getConfig:function(a){var b={sectionTitle:"",chartTitle:"",description:"",chartType:"",dataSeriesField:"",
labelField:"",chartColor:{},labelXAxis:"",labelYAxis:""};if(a&&""===this.sectionTitleTextBox.get("value"))return this._errorMessage(this.nls.errMsgSectionTitle),!1;b.sectionTitle=this.sectionTitleTextBox.get("value");b.chartTitle=this.chartTitleTextBox.get("value");b.description=this._editorObj.get("value");b.chartType=this._getChartType();if(a&&this.rdoColorByFieldValue.checked&&"esriCTEmptyOption"===this.ColorByFieldValueDropdown.value)return this._errorMessage(this.nls.errMsgFieldByValue),!1;b.chartColor=
g.clone(this._getChartColorConfig());if("PolarChart"!==b.chartType)b.dataSeriesField=this.dataSeriesFieldDropdown.get("value"),b.labelField=this.labelSeriesFieldDropdown.get("value"),b.labelXAxis=this.xAxisTextBox.get("value"),b.labelYAxis=this.yAxisTextBox.get("value");else{var c={},d,e=0,f;f=this._displayFieldsTable.getData();b.polarChartConfig={};for(d=0;d<f.length;d++)a={},f[d].isVisible&&(a.fieldName=f[d].fieldName,a.alias=f[d].alias,a.isVisible=f[d].isVisible,c[f[d].fieldName]=a,e++);if(3>e)return this._errorMessage(this.nls.errMsgPolarFieldsRequired),
!1;b.showPolygonFill=this.polarChartFillColor.getValue();b.polarChartConfig=c}return b},setConfig:function(a){a?(a.sectionTitle&&""!==a.sectionTitle?this.sectionTitleTextBox.set("value",a.sectionTitle):this.sectionTitleTextBox.set("value",this.layerDetails.polygonLayerInfo.title),a.chartTitle&&this.chartTitleTextBox.set("value",a.chartTitle),a.description&&this._editorObj.set("value",a.description),a.chartType?this._setChartType(a.chartType):this._setChartType("BarChart"),a.dataSeriesField&&this.dataSeriesFieldDropdown.set("value",
a.dataSeriesField),a.labelField&&this.labelSeriesFieldDropdown.set("value",a.labelField),a.chartColor&&this._setChartColorType(a.chartColor,a.chartType),this.polarChartFillColor.setValue(a.showPolygonFill),a.labelXAxis&&this.xAxisTextBox.set("value",a.labelXAxis),a.labelYAxis&&this.yAxisTextBox.set("value",a.labelYAxis),this._onChartTypeChanged()):this.sectionTitleTextBox.set("value",this.layerDetails.polygonLayerInfo.title)},_createColorByFieldTable:function(){this.colorByFieldTable=new t({fields:[{name:this.nls.fieldColorColor,
title:this.nls.fieldColorColor,"class":"label",type:"empty",width:"60px"},{name:this.nls.fieldColorLabel,title:this.nls.fieldColorLabel,"class":"label",type:"empty"}]},this.colorByFieldTablePanel);this.colorByFieldTable.startup()},_errorMessage:function(a){(new H({message:a})).message=a},_getChartType:function(){var a;this.rdoBarChart.get("checked")?a="BarChart":this.rdoPieChart.get("checked")?a="PieChart":this.rdoPolarChart.get("checked")&&(a="PolarChart");return a},_setChartType:function(a){"BarChart"===
a?this.rdoBarChart.set("checked",!0):"PieChart"===a?this.rdoPieChart.set("checked",!0):this.rdoPolarChart.set("checked",!0)},_initSelf:function(){this._initTabs();this.colorPicker.setColor(new q(this.defaultColor));this._initFieldSelectors();this._createRelatedLayerFieldOptions(this.dataSeriesFieldDropdown,!1,this._numberFieldTypes);this._createRelatedLayerFieldOptions(this.labelSeriesFieldDropdown,!0,null);this._createFieldColorPicker();this.chartThemeSelector||(this.chartThemeSelector=this._createThemeSelector(this.themeSelectorDiv));
l(this.colorPicker,"click",g.hitch(this,function(){this.rdoSingleColor.set("checked",!0)}));l(this.themeSelectorDiv,"click",g.hitch(this,function(){this.rdoColorByTheme.set("checked",!0)}));l(this.ColorByFieldValueDropdown,"click",g.hitch(this,function(){this.rdoColorByFieldValue.set("checked",!0)}));this.layerDetails.polygonLayerInfo.supportsDistinct&&(h.remove(this.colorByFieldContainer,"esriCTHidden"),this._createColorByFieldSelector());this._createPolarChartFieldsGrid()},_createPolarChartFieldsGrid:function(){this._displayFieldsTable=
new t({fields:[{name:"isVisible",title:this.nls.visibilityText,type:"checkbox","class":"update",width:"100px"},{name:"fieldName",title:this.nls.fieldNameText,type:"text",width:"230px"},{name:"alias",title:this.nls.aliasNameText,type:"text",editable:"true",width:"230px"}],selectable:!1});this._displayFieldsTable.placeAt(this.polarChartFieldInfos);this._displayFieldsTable.startup();this._createFieldsRows()},_createFieldsRows:function(){var a,b,c,d="",e="";a=this.layerDetails.relatedLayerInfo.fields;
b=this.config&&this.config.polarChartConfig;for(c=0;c<a.length;c++)-1!==this._numberFieldTypes.indexOf(a[c].type)&&(b&&b.hasOwnProperty(a[c].name)?(d=b[a[c].name].isVisible,e=b[a[c].name].alias):(d=a[c].isVisible,e=a[c].alias),this._displayFieldsTable.addRow({isVisible:""===d?!1:d,fieldName:a[c].name,alias:""===e?a[c].name:e}))},_initEditor:function(){this._initEditorPluginsCSS();this._editorObj=new L({plugins:["bold","italic","underline",p.getEditorTextColor("relatedTableCharts"),p.getEditorBackgroundColor("relatedTableCharts"),
"|","justifyLeft","justifyCenter","justifyRight","justifyFull","|","insertOrderedList","insertUnorderedList","indent","outdent"],extraPlugins:["|","createLink","unlink","pastefromword","|","undo","redo","|","chooseImage","uploadImage","toolbarlinebreak",{name:"dijit._editor.plugins.FontChoice",command:"fontName",custom:"Arial;Comic Sans MS;Courier New;Garamond;Tahoma;Times New Roman;Verdana".split(";")},"fontSize","formatBlock"],style:"font-family:Verdana;"},this.editor);u.setStyle(this._editorObj.domNode,
{width:"100%",height:"100%"});this._editorObj.startup();if(8!==M("ie"))this._editorObj.resize({w:"100%",h:"100%"});else{var a=u.getMarginBox(this.editorContainer);this._editorObj.resize({w:a.w,h:a.h})}},_initEditorPluginsCSS:function(){var a,b;a=document.getElementsByTagName("head")[0];b=window.apiUrl+"dojox/editor/plugins/resources/css/TextColor.css";n('link[href\x3d"'+b+'"]',a)[0]||p.loadStyleLink("editor_plugins_resources_TextColor",b);b=window.apiUrl+"dojox/editor/plugins/resources/editorPlugins.css";
n('link[href\x3d"'+b+'"]',a)[0]||p.loadStyleLink("editor_plugins_resources_editorPlugins",b);b=window.apiUrl+"dojox/editor/plugins/resources/css/PasteFromWord.css";n('link[href\x3d"'+b+'"]',a)[0]||p.loadStyleLink("editor_plugins_resources_PasteFromWord",b)},_createFieldColorPicker:function(){this.fieldColorPicker=new E;this.fieldColorPicker.startup();l(this.fieldColorPicker.tooltipDialog,"close",g.hitch(this,function(){var a;h.contains(this.selectedNode.parentElement.parentElement,"jimu-state-active")&&
(a=n(".jimu-state-active",this.colorByFieldTableContainer),0<a.length&&a.removeClass("jimu-state-active"))}));l(this.fieldColorPicker,"change",g.hitch(this,function(){var a,b=this.fieldColorPicker.color.toHex();a=n(".jimu-state-active .fieldColorPicker",this.colorByFieldTableContainer);0<a.length?h.contains(this.selectedNode.parentElement.parentElement,"jimu-state-active")?r.forEach(a,g.hitch(this,function(a){s.set(a,"backgroundColor",b);k.set(a.parentElement.parentElement,"field_Color",b)})):(s.set(this.selectedNode,
"backgroundColor",b),k.set(this.selectedNode.parentElement.parentElement,"field_Color",b)):(s.set(this.selectedNode,"backgroundColor",b),k.set(this.selectedNode.parentElement.parentElement,"field_Color",b))}))},_onChartColorChanged:function(){this.rdoColorByFieldValue.get("checked")?("esriCTEmptyOption"!==this.ColorByFieldValueDropdown.value&&h.remove(this.colorByFieldTableContainer,"esriCTHidden"),this.polarChartFillColor.setStatus(!0)):(this.rdoColorByTheme.get("checked")?(this.polarChartFillColor.check(),
this.polarChartFillColor.setStatus(!1)):this.polarChartFillColor.setStatus(!0),h.add(this.colorByFieldTableContainer,"esriCTHidden"))},_setChartColorType:function(a){a&&a.colorType&&(this.rdoSingleColor.set("checked",!1),a.colorType===this._chartColorType.singleColor?(this.rdoSingleColor.set("checked",!0),this.colorPicker.setColor(new q(a.colorInfo))):a.colorType===this._chartColorType.byThemeColor?(this.rdoColorByTheme.set("checked",!0),this.config.chartColor&&(this.config.chartColor.colorType===
this._chartColorType.byThemeColor&&this.chartThemeSelector)&&setTimeout(g.hitch(this,function(){this.chartThemeSelector.selectTheme(a.colorInfo)}),500)):a.colorType===this._chartColorType.byFieldValue&&(this.rdoColorByFieldValue.set("checked",!0),this.ColorByFieldValueDropdown.set("value",a.colorInfo.layerField),h.remove(this.colorByFieldTableContainer,"esriCTHidden")))},_initTabs:function(){var a,b;a={title:this.nls.settingTabTitle,content:this.settingsTabNode};b={title:this.nls.layoutTabTitle,content:this.layoutTabNode};
this.tab=new B({tabs:[a,b]});this.tab.placeAt(this.tabDiv);this.own(l(this.tab,"tabChanged",g.hitch(this,function(a){a===b.title&&this._updatePreview()})))},_updatePreview:function(){var a;m.empty(this.layoutDiv);a={chartConfig:this.getConfig(),isPreview:!0};a.chartConfig&&("esriCTEmptyOption"===a.chartConfig.labelField&&(a.chartConfig.labelField=" "),a.chartData=this._createStaticDataForLayout(a.chartConfig.chartType,a.chartConfig.labelField,a.chartConfig.dataSeriesField),a=new I({config:a}),a.placeAt(m.create("div",
{},this.layoutDiv)),a.startup())},_createStaticDataForLayout:function(a,b,c){var d={chartSeries:[],chartLabels:[],selectedTheme:K};switch(a){case "BarChart":d.chartSeries=[{y:65},{y:35},{y:40},{y:55},{y:50}];d.chartLabels=[{value:1,y:65,text:""},{value:2,y:35,text:""},{value:3,y:40,text:""},{value:4,y:55,text:""},{value:5,y:50,text:""}];d.fill="#7989a0";break;case "PieChart":d.chartSeries=[{y:65,text:"{"+c+" %}"},{y:35,text:"{"+b+"}"}];d.chartLabels=[{value:1,y:65},{value:2,y:35}];break;case "PolarChart":var e=
this._displayFieldsTable.getData(),f;d.chartSeries=[];for(b=0;5>b;b++){c={};f={};for(a=0;a<e.length;a++)e[a].isVisible&&(c[e[a].alias]=20);f[b]={data:c};d.chartSeries.push(f)}}return d},_initFieldSelectors:function(){this._createFieldSelector(this.titleFieldSelectorDiv,this.chartTitleTextBox,this.layerDetails.polygonLayerInfo.fields);this._createFieldSelector(this.descriptionFieldSelectorDiv,this.editor,this.layerDetails.polygonLayerInfo.fields);this._createFieldSelector(this.xAxisFieldSelectorDiv,
this.xAxisTextBox,this.layerDetails.polygonLayerInfo.fields);this._createFieldSelector(this.yAxisFieldSelectorDiv,this.yAxisTextBox,this.layerDetails.polygonLayerInfo.fields)},_createFieldSelector:function(a,b,c){a=new D({fields:c,showOnlyNumericFields:!1,hideOnSelect:!0},m.create("div",{},a));a.onSelect=g.hitch(this,function(a){var c;c="dijitEditor"!==b.className?k.get(b,"value"):this._editorObj.get("value");c=c+"{"+a.name+"}";b.set?b.set("value",c):"dijitEditor"!==b.className?k.set(b,"value",c):
this._editorObj.set("value",c)});this._widgets.push(a);return a},_createThemeSelector:function(a){a=new C({nls:this.nls},m.create("div",{},a));this._widgets.push(a);a.startup();return a},_onSectionTitleChanged:function(){this.emit("sectionTitleChanged",this.sectionTitleTextBox.get("value"))},showMainLoadingIndicator:function(){this.emit("showLoadingIndicator")},hideMainLoadingIndicator:function(){this.emit("hideLoadingIndicator")},_onChartTypeChanged:function(){this.rdoPolarChart.get("checked")?(h.add(this.labelSection,
"esriCTHidden"),h.add(this.axisSection,"esriCTHidden"),h.remove(this.polarChartSection,"esriCTHidden")):(h.remove(this.labelSection,"esriCTHidden"),h.add(this.polarChartSection,"esriCTHidden"),this.rdoPieChart.get("checked")?h.add(this.axisSection,"esriCTHidden"):h.remove(this.axisSection,"esriCTHidden"))},_createRelatedLayerFieldOptions:function(a,b,c){var d={},e,f;if((e=this.layerDetails.relatedLayerInfo.fields)&&0<e.length){b&&a.addOption({value:"esriCTEmptyOption",label:this.nls.defaultFieldSelectLabel,
selected:!0});for(f=0;f<e.length;f++)d=!0,c&&0>c.indexOf(e[f].type)&&(d=!1),d&&(d={value:e[f].name,label:e[f].name,selected:!1},0===f&&!b&&(d.selected=!0),a.addOption(d))}},_createColorByFieldSelector:function(){this._createRelatedLayerFieldOptions(this.ColorByFieldValueDropdown,!0);l(this.ColorByFieldValueDropdown,"change",g.hitch(this,function(a){this.showMainLoadingIndicator();"esriCTEmptyOption"===a?(this._removeTableRows(),h.add(this.colorByFieldTableContainer,"esriCTHidden"),this.hideMainLoadingIndicator()):
this._getDistintValueForLayerField(a)}))},_getDistintValueForLayerField:function(a){var b,c;this._selectedUniqueValues=[];b=new G(this.layerDetails.relatedLayerInfo.url);c=new F;c.where="1\x3d1";c.returnDistinctValues=!0;c.returnGeometry=!1;c.outFields=[a];b.execute(c,g.hitch(this,function(b){r.forEach(b.features,g.hitch(this,function(b){this._selectedUniqueValues.push(b.attributes[a])}));0<this._selectedUniqueValues.length&&b.fields&&0<b.fields.length&&b.fields[0].type?(b=g.clone(b.fields[0]),1<
this._selectedUniqueValues.length&&this._sortUniqueValueData(b.type),this._createTableRows(b)):(this._errorMessage(this.nls.errMsgFieldValuesNotFound),this.hideMainLoadingIndicator())}),g.hitch(this,function(){this._errorMessage(this.nls.errMsgFieldValuesNotFound);this.hideMainLoadingIndicator()}))},_removeTableRows:function(){var a,b;if((a=this.colorByFieldTable.getRows())&&0<a.length)for(b=0;b<a.length;b++)this.colorByFieldTable.deleteRow(a[b])},_createTableRows:function(a){var b,c;this._removeTableRows();
h.remove(this.colorByFieldTableContainer,"esriCTHidden");r.forEach(this._selectedUniqueValues,g.hitch(this,function(d){var e,f;e=this.colorByFieldTable.addRow({});f=d;e.success&&e.tr&&("esriFieldTypeDate"===a.type&&(f=this._getLocaleFormatedDate(d)),b=e.tr,c=n(".simple-table-cell",b),this._createColorPicker(b,d,c[0]),this._createLabelFields(f,c[1]));b&&l(b,"click",g.hitch(this,function(a){this._toggleRowSelection(a.currentTarget)}))}));this.hideMainLoadingIndicator()},_toggleRowSelection:function(a){h.contains(a,
"jimu-state-active")?h.remove(a,"jimu-state-active"):h.add(a,"jimu-state-active")},_createLabelFields:function(a,b){m.create("label",{innerHTML:a,title:a},b)},_createColorPicker:function(a,b,c){var d;c=m.create("div",{"class":"fieldColorPicker"},c);d=this.config&&this.config.chartColor&&this.config.chartColor.colorInfo&&this.config.chartColor.colorInfo.layerFieldValues&&this.config.chartColor.colorInfo.layerFieldValues[b]?this.config.chartColor.colorInfo.layerFieldValues[b]:this.defaultColor;s.set(c,
"backgroundColor",d);k.set(a,"fieldVal",b);k.set(a,"field_Color",d);l(c,"click",g.hitch(this,function(a){a.stopPropagation();a.preventDefault();this.selectedNode=a.currentTarget;var b=k.get(this.selectedNode.parentElement.parentElement,"field_Color");this.fieldColorPicker.setColor(new q(b));this.fieldColorPicker.picker.setColor((new q(b)).toHex(),!0);J.open({popup:this.fieldColorPicker.tooltipDialog,around:a.currentTarget})}))},_getColorByFieldValue:function(){var a,b={},c={},d;d=this.colorByFieldTable.getRows();
for(a=0;a<d.length;a++)c[k.get(d[a],"fieldVal")]=k.get(d[a],"field_Color");b.layerFieldValues=c;b.layerField=this.ColorByFieldValueDropdown.value;return b},_getChartColorConfig:function(){var a={};this.rdoSingleColor.checked?(a.colorType=this._chartColorType.singleColor,a.colorInfo=this.colorPicker.getColor().toHex()):this.rdoColorByTheme.checked?(a.colorType=this._chartColorType.byThemeColor,a.colorInfo=this.chartThemeSelector.selectedTheme):this.rdoColorByFieldValue.checked&&(a.colorType=this._chartColorType.byFieldValue,
a.colorInfo=this._getColorByFieldValue());return a},_sortUniqueValueData:function(a){"esriFieldTypeString"===a?this._selectedUniqueValues.sort():this._selectedUniqueValues.sort(g.hitch(this,function(a,c){return a-c}))},_getLocaleFormatedDate:function(a){return(new Date(a)).toLocaleDateString()}})});