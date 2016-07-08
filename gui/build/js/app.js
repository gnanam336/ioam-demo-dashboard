var configFn,app;configFn=function(e,t){e.theme("default").primaryPalette("blue").accentPalette("light-blue"),t.setBaseUrl("http://10.60.19.11:8080/ioam")},configFn.$inject=["$mdThemingProvider","RestangularProvider"],app=angular.module("ioamApp",["ngMaterial","restangular","md.data.table"]),app.config(configFn),function(e){var t=function(e,t,a){this.debug=!0,this.defaultMethod="toast",this.displayMDToast=function(e){a.show({hideDelay:1e4,position:"bottom right",controller:"ErrorHandlerCtrl",templateUrl:"templates/error-views/toast.tpl.html",locals:{errData:e}})},this.displayMDDialog=function(e){var a=angular.element(document.body);t.show({parent:a,controller:"ErrorHandlerCtrl",templateUrl:"templates/error-views/dialog.tpl.html",clickOutsideToClose:!0,locals:{errData:e}})},this.displayPopupByDefault=function(e){switch(this.defaultMethod){case"toast":this.displayMDToast(e);break;case"dialog":this.displayMDDialog(e)}},this.log=function(t,a){a=a||!1;var r=!0;if(a)if(a===!0)this.displayPopupByDefault(t);else{if(a.hasOwnProperty("type"))switch(a.type){case"dialog":this.displayMDDialog(t);break;case"toast":this.displayMDToast(t);break;case"default":this.displayPopupByDefault(t);break;case"hide":}else this.displayPopupByDefault(t);a.hasOwnProperty("allowToLogInConsole")&&(r="boolean"==typeof a.allowToLogInConsole?a.allowToLogInConsole:!1)}this.debug&&r&&e.error("Error occurred.",t)}};t.$inject=["$log","$mdDialog","$mdToast"],e.service("ErrorHandlerService",t)}(app),function(e){var t=function(){function e(e,a){a=a||!1;for(var r in e)e.hasOwnProperty(r)&&(a?t.data[r]=angular.copy(e[r]):t.data[r]=e[r])}var t=this;this.multiSet=e,this.data={sidePanel:!1,sidePanelName:null,apiSettings:null,openPanel:null}};t.$inject=[],e.service("SharedDataService",t)}(app),function(e){var t=function(){function e(e,t){for(var a=e,r=0;r<t.length;r++){if(!a.hasOwnProperty(t[r]))return!1;a=a[t[r]]}return!0}function t(e,t,a){var r;return function(){var i=this,n=arguments,o=function(){r=null,a||e.apply(i,n)},l=a&&!r;clearTimeout(r),r=setTimeout(o,t),l&&e.apply(i,n)}}function a(e){var t=0;return e.forEach(function(e){t+=e}),t}function r(e){return"object"==typeof e&&null!==e}this.hasOwnPropertiesPath=e,this.debounce=t,this.arraySum=a,this.isTrueObject=r};t.$inject=[],e.service("HelpersService",t)}(app),function(e){var t=function(e,t){function a(a,r,i){var n=e.setBaseUrl(a.url).one("sla"),o={StartTime:a.startTime,EndTime:a.endTime,"target-delay":a.targetDelay,"target-jitter":a.targetJitter};n.customPOST(o).then(function(e){if(t.hasOwnPropertiesPath(e,["SLA compliance"]))r(e["SLA compliance"]);else{var a={errCode:"GET_SLA_INVALID",errTitle:"Couldn't read SLA compliance data",errMsg:"SLA compliance data is invalid.",errResolution:"Make sure that protocols match.",errObj:e};i(a)}},function(e){var t={errCode:"GET_SLA",errTitle:"Couldn't get SLA compliance data",errMsg:"You tried to read SLA compliance data from server, but for some reason it is being complicated at this point.",errResolution:"Check your connection, otherwise make sure if REST server is up.",errObj:e};i(t)})}this.getSla=a};t.$inject=["Restangular","HelpersService"],e.service("ApiService",t)}(app),function(e){var t=function(){function e(e,t){var r=[];if(Array.isArray(e))return r=e.map(function(e){return a.createDonutChart(e,t)});if("object"==typeof e&&null!==e){var i={scales:{gridLines:{}},legend:{display:!1}},n={labels:["Green","Red"],datasets:[{data:[e.activePercentage,100-e.activePercentage],backgroundColor:["#009933","#ff0000"],hoverBackgroundColor:["#009933","#ff0000"]}]},o=document.getElementById(e.htmlId+"-"+t).getContext("2d"),l=new Chart(o,{type:"doughnut",data:n,options:i});return Chart.pluginService.register({beforeDraw:function(t){if(l===t){var a=t.chart.width,r=t.chart.height,i=t.chart.ctx;i.restore();var n=(r/114).toFixed(2);i.font=n+"em sans-serif",i.textBaseline="middle";var o=e.activePercentage+"%",c=Math.round((a-i.measureText(o).width)/2),s=r/2;i.fillText(o,c,s),i.save()}}}),l}}function t(e,t){var r=[];if(Array.isArray(e))return r=e.map(function(e){return a.createBarChart(e,t)});if("object"==typeof e&&null!==e){var i={scales:{gridLines:{}},legend:{display:!1}},n=[],o=[];e.bars.forEach(function(e){o.push(e.value),n.push(e.label)});var l={labels:n,datasets:[{data:o,backgroundColor:"#99bbff",hoverBackgroundColor:"#6699ff"}]},c=document.getElementById(e.htmlId+"-"+t).getContext("2d"),s=new Chart(c,{type:"bar",data:l,options:i});return s}}var a=this;this.createDonutChart=e,this.createBarChart=t};t.$inject=[],e.service("ChartService",t)}(app),function(e){var t=function(e,t,a,r,i){e.errData=t,e.closeDialog=function(){r.hide()},e.showMoreInfoInDialog=function(){e.closeToast(),i.log(e.errData,{type:"dialog",allowTologInConsole:!1})},e.closeToast=function(){a.hide().then(function(){})}};t.$inject=["$scope","errData","$mdToast","$mdDialog","ErrorHandlerService"],e.controller("ErrorHandlerCtrl",t)}(app),function(e){var t=function(e,t,a){function r(e){a.data.sidePanel=!1,a.data.sidePanelName=null}e.closeSidePanel=r,e.shared=a.data};t.$inject=["$scope","$mdSidenav","SharedDataService"],e.controller("SidePanelCtrl",t)}(app),function(e){var t=function(e,t,a,r,i){function n(){e._writeSettingsToLocalStorage(e.sFormData),e.updateSla()}function o(){var t,a;r.data.apiSettings={},a=e._readSettingsFromLocalStorage(),angular.copy(a,r.data.apiSettings),t=r.data.apiSettings,i.isTrueObject(t)&&e.acceptedSettings.forEach(function(a){e.sFormData[a]=t.hasOwnProperty(a)?t[a]:""})}e.saveSettings=n,e.fillOutForm=o,e.shared=r.data,e.sFormData={},e.acceptedSettings=["url","startTime","endTime","targetDelay","targetJitter"],e.$on("openPanel",function(t,a){"settings"===a.panelName&&e.fillOutForm()})};t.$inject=["$scope","$mdSidenav","Restangular","SharedDataService","HelpersService"],e.controller("SettingsCtrl",t)}(app),function(e){var t=function(e,t,a,r,i,n,o,l){function c(){var t=e._readSettingsFromLocalStorage();i.data.apiSettings={},angular.copy(t,i.data.apiSettings),e.updateSla()}function s(){function t(t){Array.isArray(t)&&t.forEach(function(t){e.pathNames.push(t.Path),window.setTimeout(function(){o.createDonutChart([{htmlId:"pathComplChart",activePercentage:t["total-percent-packets-in-policy"]},{htmlId:"delayComplChart",activePercentage:t["total-percent-delay_out_of_compliance"]},{htmlId:"jitterComplChart",activePercentage:t["total-percent_jitter_out_of_compliance"]},{htmlId:"pktLossChart",activePercentage:t["total-percent-packets-received"]}],t.Path),o.createBarChart([{htmlId:"pathComplDevChart",bars:[{label:"Last 1 min",value:t["1min-percent-packets-out-of-policy"]},{label:"Last 15 min",value:t["15min-percent-packets-out-of-policy"]},{label:"Last 1 hr",value:t["1hr-percent-packets-out-of-policy"]}]},{htmlId:"delayComplDevChart",bars:[{label:"<1% deviation",value:t.Delay_compliance_deviation_1},{label:"1%-10% deviation",value:t.Delay_compliance_deviation_10},{label:">10% deviation",value:t.Delay_compliance_deviation_g10}]},{htmlId:"jitterComplDevChart",bars:[{label:"<1% deviation",value:t.jitter_compliance_deviation_1},{label:"1%-10% deviation",value:t.jitter_compliance_deviation_10},{label:">10% deviation",value:t.jitter_compliance_deviation_g10}]},{htmlId:"pktLossDevChart",bars:[{label:"Last 1 min",value:t["1min-percent-packets-lost"]},{label:"Last 15 min",value:t["15min-percent-packets-lost"]},{label:"Last 1 hr",value:t["1hr-percent-packets-lost"]}]}],t.Path)},1e3)})}function a(e){n.log(e)}return l.isTrueObject(i.data.apiSettings)?void r.getSla(i.data.apiSettings,t,a):1}function d(t,a){switch(a=a||null,console.log(t),t){case"settings":i.data.sidePanel=!0,i.data.sidePanelName=t;break;default:i.data.sidePanel=!0,i.data.sidePanelName=t}e.$root.$broadcast("openPanel",{panelName:t})}function u(){var e,t;e=window.localStorage.getItem("ioamDashboardSettings");try{t=JSON.parse(e)}catch(a){return{}}return t}function p(e){var t=JSON.stringify(e);window.localStorage.setItem("ioamDashboardSettings",t)}e.init=c,e.updateSla=s,e.openPanel=d,e._readSettingsFromLocalStorage=u,e._writeSettingsToLocalStorage=p,e.shared=i.data,e.pathNames=[],e.init()};t.$inject=["$scope","$mdSidenav","$mdDialog","ApiService","SharedDataService","ErrorHandlerService","ChartService","HelpersService"],e.controller("IoamAppCtrl",t)}(app);