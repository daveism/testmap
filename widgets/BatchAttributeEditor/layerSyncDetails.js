// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/Evented","dojo/_base/declare","dojo/_base/lang","dojo/_base/array"],function(d,b,c,e){return b([d],{declaredClass:"layerSyncDetails",layerID:null,numberOfRequest:0,requestComplete:0,totalRecordsToSync:0,recordsSynced:0,recordsErrors:0,deferreds:[],complete:!1,hasError:!1,constructor:function(a){b.safeMixin(this,a)},addDeferred:function(a){a.then(c.hitch(this,function(f,a,b){e.forEach(a,function(a){a&&(a.hasOwnProperty("success")&&!1===a.success)&&(a&&a.hasOwnProperty("error"))&&(this.recordsErrors+=
1,console.info(a.error))},this);this.recordsSynced+=a.length;this.requestComplete+=1;this.emit("requestComplete",{layerID:this.layerID,countRequest:a.length,countSoFar:this.recordsSynced,totalToSync:this.totalRecordsToSync,addded:f,removed:b,errors:this.recordsErrors});this.isComplete()&&this.emit("complete",{})}),c.hitch(this,function(a){this.hasError=!0;console.log("error: "+a.message+"\nLayer: "+a.layer.title+"\ndetails: "+a.details);this.requestComplete+=1;this.recordsSynced+=a.chunk.length;this.recordsErrors+=
a.chunk.length;this.emit("requestComplete",{layerID:this.layerID,countRequest:a.chunk.length,countSoFar:this.recordsSynced,totalToSync:this.totalRecordsToSync,addded:null,removed:null,errors:this.recordsErrors});this.isComplete()&&this.emit("complete",{})}));this.deferreds.push(a)},isComplete:function(){return this.complete=this.numberOfRequest===this.requestComplete?!0:!1}})});