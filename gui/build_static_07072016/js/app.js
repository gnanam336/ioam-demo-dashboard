var configFn,app;configFn=function(e,t){e.theme("default").primaryPalette("blue").accentPalette("light-blue"),t.setBaseUrl("http://10.60.19.11:8080/ioam")},configFn.$inject=["$mdThemingProvider","RestangularProvider"],app=angular.module("ioamApp",["ngMaterial","restangular","md.data.table"]),app.config(configFn),function(e){var t=function(e,t,a){this.debug=!0,this.defaultMethod="toast",this.displayMDToast=function(e){a.show({hideDelay:1e4,position:"bottom right",controller:"ErrorHandlerCtrl",templateUrl:"templates/error-views/toast.tpl.html",locals:{errData:e}})},this.displayMDDialog=function(e){var a=angular.element(document.body);t.show({parent:a,controller:"ErrorHandlerCtrl",templateUrl:"templates/error-views/dialog.tpl.html",clickOutsideToClose:!0,locals:{errData:e}})},this.displayPopupByDefault=function(e){switch(this.defaultMethod){case"toast":this.displayMDToast(e);break;case"dialog":this.displayMDDialog(e)}},this.log=function(t,a){a=a||!1;var o=!0;if(a)if(a===!0)this.displayPopupByDefault(t);else{if(a.hasOwnProperty("type"))switch(a.type){case"dialog":this.displayMDDialog(t);break;case"toast":this.displayMDToast(t);break;case"default":this.displayPopupByDefault(t);break;case"hide":}else this.displayPopupByDefault(t);a.hasOwnProperty("allowToLogInConsole")&&(o="boolean"==typeof a.allowToLogInConsole?a.allowToLogInConsole:!1)}this.debug&&o&&e.error("Error occurred.",t)}};t.$inject=["$log","$mdDialog","$mdToast"],e.service("ErrorHandlerService",t)}(app),function(e){var t=function(){function e(e,a){a=a||!1;for(var o in e)e.hasOwnProperty(o)&&(a?t.data[o]=angular.copy(e[o]):t.data[o]=e[o])}var t=this;this.multiSet=e,this.data={sidePanel:!1,sidePanelName:null,apiSettings:null,openPanel:null}};t.$inject=[],e.service("SharedDataService",t)}(app),function(e){var t=function(){function e(e,t){for(var a=e,o=0;o<t.length;o++){if(!a.hasOwnProperty(t[o]))return!1;a=a[t[o]]}return!0}function t(e,t,a){var o;return function(){var i=this,n=arguments,r=function(){o=null,a||e.apply(i,n)},l=a&&!o;clearTimeout(o),o=setTimeout(r,t),l&&e.apply(i,n)}}function a(e){var t=0;return e.forEach(function(e){t+=e}),t}function o(e){return"object"==typeof e&&null!==e}this.hasOwnPropertiesPath=e,this.debounce=t,this.arraySum=a,this.isTrueObject=o};t.$inject=[],e.service("HelpersService",t)}(app),function(e){var t=function(e,t){function a(e,t,a){var o={"SLA compliance":[{"total-percent-packets-in-policy":99,"15min-percent-packets-out-of-policy":22,Delay_compliance_deviation_1:3,Delay_compliance_deviation_10:5,"total-percent_jitter_out_of_compliance":10,"15min-percent-packets-lost":2,"1hr-percent-packets-lost":2,jitter_compliance_deviation_10:8,"total-percent-packets-lost":10,"total-percent-delay_out_of_compliance":67,"1min-percent-packets-lost":6,"1hr-percent-packets-out-of-policy":34,jitter_compliance_deviation_g10:4,"total-percent-packets-out-of-policy":1,"Total packets":12334234,Path:"vpp1->vpp2->vpp3",Delay_compliance_deviation_g10:1,"1min-percent-packets-out-of-policy":0,"total-percent-packets-received":90,jitter_compliance_deviation_1:2},{"total-percent-packets-in-policy":80,"15min-percent-packets-out-of-policy":12,Delay_compliance_deviation_1:3,Delay_compliance_deviation_10:5,"total-percent_jitter_out_of_compliance":10,"15min-percent-packets-lost":0,"1hr-percent-packets-lost":1,jitter_compliance_deviation_10:8,"total-percent-packets-lost":1,"total-percent-delay_out_of_compliance":7,"1min-percent-packets-lost":0,"1hr-percent-packets-out-of-policy":15,jitter_compliance_deviation_g10:4,"total-percent-packets-out-of-policy":20,"Total packets":123123,Path:"vpp1->vpp4->vpp3",Delay_compliance_deviation_g10:1,"1min-percent-packets-out-of-policy":10,"total-percent-packets-received":99,jitter_compliance_deviation_1:1}]};t(o["SLA compliance"])}this.getSla=a};t.$inject=["Restangular","HelpersService"],e.service("ApiService",t)}(app),function(e){var t=function(){function e(e,t){var o=[];if(Array.isArray(e))return o=e.map(function(e){return a.createDonutChart(e,t)});if("object"==typeof e&&null!==e){var i={scales:{gridLines:{}},legend:{display:!1}},n={labels:["Green","Red"],datasets:[{data:[e.activePercentage,100-e.activePercentage],backgroundColor:["#009933","#ff0000"],hoverBackgroundColor:["#009933","#ff0000"]}]},r=document.getElementById(e.htmlId+"-"+t).getContext("2d"),l=new Chart(r,{type:"doughnut",data:n,options:i});return Chart.pluginService.register({beforeDraw:function(t){if(l===t){var a=t.chart.width,o=t.chart.height,i=t.chart.ctx;i.restore();var n=(o/114).toFixed(2);i.font=n+"em sans-serif",i.textBaseline="middle";var r=e.activePercentage+"%",c=Math.round((a-i.measureText(r).width)/2),p=o/2;i.fillText(r,c,p),i.save()}}}),l}}function t(e,t){var o=[];if(Array.isArray(e))return o=e.map(function(e){return a.createBarChart(e,t)});if("object"==typeof e&&null!==e){var i={scales:{gridLines:{}},legend:{display:!1}},n=[],r=[];e.bars.forEach(function(e){r.push(e.value),n.push(e.label)});var l={labels:n,datasets:[{data:r,backgroundColor:"#99bbff",hoverBackgroundColor:"#6699ff"}]},c=document.getElementById(e.htmlId+"-"+t).getContext("2d"),p=new Chart(c,{type:"bar",data:l,options:i});return p}}var a=this;this.createDonutChart=e,this.createBarChart=t};t.$inject=[],e.service("ChartService",t)}(app),function(e){var t=function(e,t,a,o,i){e.errData=t,e.closeDialog=function(){o.hide()},e.showMoreInfoInDialog=function(){e.closeToast(),i.log(e.errData,{type:"dialog",allowTologInConsole:!1})},e.closeToast=function(){a.hide().then(function(){})}};t.$inject=["$scope","errData","$mdToast","$mdDialog","ErrorHandlerService"],e.controller("ErrorHandlerCtrl",t)}(app),function(e){var t=function(e,t,a){function o(e){a.data.sidePanel=!1,a.data.sidePanelName=null}e.closeSidePanel=o,e.shared=a.data};t.$inject=["$scope","$mdSidenav","SharedDataService"],e.controller("SidePanelCtrl",t)}(app),function(e){var t=function(e,t,a,o,i){function n(){e._writeSettingsToLocalStorage(e.sFormData),e.updateSla()}function r(){var t,a;o.data.apiSettings={},a=e._readSettingsFromLocalStorage(),angular.copy(a,o.data.apiSettings),t=o.data.apiSettings,i.isTrueObject(t)&&e.acceptedSettings.forEach(function(a){e.sFormData[a]=t.hasOwnProperty(a)?t[a]:""})}e.saveSettings=n,e.fillOutForm=r,e.shared=o.data,e.sFormData={},e.acceptedSettings=["url","startTime","endTime","targetDelay","targetJitter"],e.$on("openPanel",function(t,a){"settings"===a.panelName&&e.fillOutForm()})};t.$inject=["$scope","$mdSidenav","Restangular","SharedDataService","HelpersService"],e.controller("SettingsCtrl",t)}(app),function(e){var t=function(e,t,a,o,i,n,r,l){function c(){var t=e._readSettingsFromLocalStorage();i.data.apiSettings={},angular.copy(t,i.data.apiSettings),e.updateSla()}function p(){function t(t){Array.isArray(t)&&t.forEach(function(t){e.pathNames.push(t.Path),window.setTimeout(function(){r.createDonutChart([{htmlId:"pathComplChart",activePercentage:t["total-percent-packets-in-policy"]},{htmlId:"delayComplChart",activePercentage:t["total-percent-delay_out_of_compliance"]},{htmlId:"jitterComplChart",activePercentage:t["total-percent_jitter_out_of_compliance"]},{htmlId:"pktLossChart",activePercentage:t["total-percent-packets-received"]}],t.Path),r.createBarChart([{htmlId:"pathComplDevChart",bars:[{label:"Last 1 min",value:t["1min-percent-packets-out-of-policy"]},{label:"Last 15 min",value:t["15min-percent-packets-out-of-policy"]},{label:"Last 1 hr",value:t["1hr-percent-packets-out-of-policy"]}]},{htmlId:"delayComplDevChart",bars:[{label:"<1% deviation",value:t.Delay_compliance_deviation_1},{label:"1%-10% deviation",value:t.Delay_compliance_deviation_10},{label:">10% deviation",value:t.Delay_compliance_deviation_g10}]},{htmlId:"jitterComplDevChart",bars:[{label:"<1% deviation",value:t.jitter_compliance_deviation_1},{label:"1%-10% deviation",value:t.jitter_compliance_deviation_10},{label:">10% deviation",value:t.jitter_compliance_deviation_g10}]},{htmlId:"pktLossDevChart",bars:[{label:"Last 1 min",value:t["1min-percent-packets-lost"]},{label:"Last 15 min",value:t["15min-percent-packets-lost"]},{label:"Last 1 hr",value:t["1hr-percent-packets-lost"]}]}],t.Path)},1e3)})}function a(e){n.log(e)}return l.isTrueObject(i.data.apiSettings)?void o.getSla(i.data.apiSettings,t,a):1}function s(t,a){switch(a=a||null,console.log(t),t){case"settings":i.data.sidePanel=!0,i.data.sidePanelName=t;break;default:i.data.sidePanel=!0,i.data.sidePanelName=t}e.$root.$broadcast("openPanel",{panelName:t})}function d(){var e,t;e=window.localStorage.getItem("ioamDashboardSettings");try{t=JSON.parse(e)}catch(a){return{}}return t}function u(e){var t=JSON.stringify(e);window.localStorage.setItem("ioamDashboardSettings",t)}e.init=c,e.updateSla=p,e.openPanel=s,e._readSettingsFromLocalStorage=d,e._writeSettingsToLocalStorage=u,e.shared=i.data,e.pathNames=[],e.init()};t.$inject=["$scope","$mdSidenav","$mdDialog","ApiService","SharedDataService","ErrorHandlerService","ChartService","HelpersService"],e.controller("IoamAppCtrl",t)}(app);