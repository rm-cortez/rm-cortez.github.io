"use strict"
define("ember-project/adapters/-json-api",["exports","@ember-data/adapter/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-project/app",["exports","@ember/application","ember-resolver","ember-load-initializers","ember-project/config/environment"],(function(e,t,r,n,i){function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class a extends t.default{constructor(){super(...arguments),o(this,"modulePrefix",i.default.modulePrefix),o(this,"podModulePrefix",i.default.podModulePrefix),o(this,"Resolver",r.default)}}e.default=a,(0,n.default)(a,i.default.modulePrefix)})),define("ember-project/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-project/components/consume-view",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/service","@glimmer/tracking","@ember/object","@ember/array","fetch"],(function(e,t,r,n,i,o,a,l,c){var u,d,s,m,p,f,b
function g(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t,r,n,i){var o={}
return Object.keys(n).forEach((function(e){o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const _=(0,r.createTemplateFactory)({id:"dG4kN4P3",block:'[[[11,"button"],[24,0,"material-icons mdc-button mdc-button--raised "],[24,4,"button"],[4,[38,0],["click",[30,0,["consumeFiles"]]],null],[12],[1,"\\n  Consume Files\\n"],[13],[1,"\\n\\n"],[10,0],[14,"role","separator"],[14,0,"mdc-list-divider"],[12],[13],[1,"\\n\\n\\n"],[10,0],[14,0,"slider-div"],[12],[1,"\\n  "],[10,0],[15,0,[29,["mdc-slider ",[52,[30,0,["showSlider"]],"","hideSlider"]]]],[12],[1,"\\n    "],[10,"input"],[14,0,"mdc-slider__input"],[14,"min","0"],[14,"max","100"],[14,2,"0"],[14,3,"volume"],[14,"aria-label","Continuous slider demo"],[14,4,"range"],[12],[13],[1,"\\n    "],[10,0],[14,0,"mdc-slider__track"],[12],[1,"\\n      "],[10,0],[14,0,"mdc-slider__track--inactive"],[12],[13],[1,"\\n      "],[10,0],[14,0,"mdc-slider__track--active"],[12],[1,"\\n        "],[10,0],[14,0,"mdc-slider__track--active_fill"],[12],[13],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"mdc-slider__thumb"],[12],[1,"\\n      "],[10,0],[14,0,"mdc-slider__thumb-knob"],[12],[13],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n"],[13],[1,"\\n\\n\\n"],[10,"ul"],[12],[1,"\\n"],[42,[28,[37,3],[[28,[37,3],[[30,0,["processFiles"]]],null]],null],null,[[[1,"  "],[10,"li"],[12],[1,"\\n    "],[10,0],[14,0,"log-total"],[12],[1,"\\n\\n        File: "],[1,[30,1,["logName"]]],[1,"\\n\\n    "],[13],[1,"\\n\\n    -    contained "],[1,[30,1,["totalLogs"]]],[1," logs\\n\\n\\n   "],[13],[1,"\\n"]],[1]],null],[13],[1,"\\n\\n\\n"],[10,"aside"],[14,0,"mdc-snackbar"],[12],[1,"\\n  "],[10,0],[14,0,"mdc-snackbar__surface"],[14,"role","status"],[14,"aria-relevant","additions"],[12],[1,"\\n    "],[10,0],[14,0,"mdc-snackbar__label"],[14,"aria-atomic","false"],[12],[1,"\\n      Total Files: "],[10,"b"],[12],[1,[30,0,["totalLogFiles"]]],[13],[1,"   Total Logs: "],[10,"b"],[12],[1,[30,0,["LogsInFiles"]]],[13],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n"],[13],[1,"\\n"]],["logs"],false,["on","if","each","-track-array"]]',moduleName:"ember-project/components/consume-view.hbs",isStrictMode:!1})
let y=(u=(0,i.inject)("logger"),d=class extends n.default{constructor(){super(...arguments),g(this,"logger",s,this),g(this,"LogsInFiles",m,this),g(this,"showSlider",p,this),g(this,"totalLogFiles",f,this),g(this,"processFiles",b,this),h(this,"logsCount",100),h(this,"snackbar",null),h(this,"slider",null)}async consumeFiles(){this.logger.filesArr=[],this.LogsInFiles=0,this.totalLogFiles=0,this.showSlider=!0,this.processFiles=(0,l.A)([]),null==this.snackbar&&(this.snackbar=mdc.snackbar.MDCSnackbar.attachTo(document.querySelector(".mdc-snackbar"))),null==this.slider&&(this.slider=mdc.slider.MDCSlider.attachTo(document.querySelector(".mdc-slider"))),this.snackbar.close(),this.slider.setValue(0)
for(var e=0;e<this.logsCount;e++){var t=`logs_${e}.json`,r=await(0,c.default)(`logs/${t}`),n=await r.json(),i={logName:t,id:n.id,totalLogs:n.logs.length,logs:n.logs}
this.processFiles.pushObject(i),this.LogsInFiles+=n.logs.length,this.totalLogFiles++,this.slider.setValue(this.processFiles.length),this.processFiles.length==this.logsCount&&(this.logger.filesArr=this.processFiles,this.logger.createTally(),setTimeout((()=>{this.showSlider=!1,this.snackbar.open()}),500))}}},s=v(d.prototype,"logger",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=v(d.prototype,"LogsInFiles",[o.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),p=v(d.prototype,"showSlider",[o.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),f=v(d.prototype,"totalLogFiles",[o.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),b=v(d.prototype,"processFiles",[o.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return(0,l.A)([])}}),v(d.prototype,"consumeFiles",[a.action],Object.getOwnPropertyDescriptor(d.prototype,"consumeFiles"),d.prototype),d)
e.default=y,(0,t.setComponentTemplate)(_,y)})),define("ember-project/components/logger-component",["exports","@ember/component","@ember/template-factory","@glimmer/component","@glimmer/tracking","@ember/service","@ember/object"],(function(e,t,r,n,i,o,a){var l,c,u,d
function s(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function m(e,t,r,n,i){var o={}
return Object.keys(n).forEach((function(e){o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const p=(0,r.createTemplateFactory)({id:"uhEMAFLO",block:'[[[10,"button"],[14,0,"material-icons mdc-button mdc-button--raised  "],[14,"aria-label","Open drawer menu"],[14,"onclick","drawerOpen()"],[14,"title","drawer modal"],[14,4,"button"],[12],[1,"\\n    Logs\\n  "],[13],[1,"\\n\\n  "],[10,"aside"],[14,0,"mdc-drawer mdc-drawer--modal"],[12],[1,"\\n    "],[10,0],[14,0,"mdc-drawer__header"],[12],[1,"\\n      "],[10,"h3"],[14,0,"mdc-drawer__title"],[12],[1,[30,1]],[1," Logs"],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"mdc-drawer__content"],[12],[1,"\\n      "],[10,"nav"],[14,0,"mdc-list"],[12],[1,"\\n\\n"],[41,[28,[37,1],[[30,0,["logger","filesArr","length"]],0],null],[[[1,"        "],[10,3],[14,0,"mdc-list-item mdc-list-item--activated"],[14,6,"#"],[14,"aria-current","page"],[14,"aria-label","No Logs Found"],[12],[1,"\\n          "],[10,1],[14,0,"mdc-list-item__ripple"],[12],[13],[1,"\\n          "],[10,"i"],[14,0,"material-icons mdc-list-item__graphic"],[14,"aria-hidden","true"],[12],[1,"description"],[13],[1,"\\n          "],[10,1],[14,0,"mdc-list-item__text"],[12],[1,"No Logs Found"],[13],[1,"\\n        "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[42,[28,[37,3],[[28,[37,3],[[30,0,["logger","filesArr"]]],null]],null],null,[[[1,"        "],[11,3],[16,0,[29,["mdc-list-item  ",[52,[28,[37,1],[[30,3],0],null],"mdc-list-item--activated",""]]]],[24,6,"#"],[24,"aria-current","page"],[16,"aria-label",[29,[[30,2,["logName"]]," file"]]],[4,[38,4],["click",[28,[37,5],[[30,0,["renderLog"]],[30,3],[30,1]],null]],null],[12],[1,"\\n            "],[10,1],[14,0,"mdc-list-item__ripple"],[12],[13],[1,"\\n            "],[10,"i"],[14,0,"material-icons mdc-list-item__graphic"],[14,"aria-hidden","true"],[12],[1,"description"],[13],[1,"\\n            "],[10,1],[14,0,"mdc-list-item__text"],[12],[1,[30,2,["logName"]]],[13],[1,"\\n        "],[13],[1,"\\n"]],[2,3]],null],[1,"      "],[13],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n  "],[10,0],[14,0,"mdc-drawer-scrim"],[12],[13],[1,"\\n\\n  "],[10,0],[14,0,"log-div"],[12],[1,"\\n    "],[10,"pre"],[12],[1,""],[1,[30,0,["log"]]],[1,"    "],[13],[1,"\\n  "],[13],[1,"\\n\\n  "],[10,"aside"],[14,0,"mdc-snackbar"],[12],[1,"\\n    "],[10,0],[14,0,"mdc-snackbar__surface"],[14,"role","status"],[14,"aria-relevant","additions"],[12],[1,"\\n      "],[10,0],[14,0,"mdc-snackbar__label"],[14,"aria-atomic","false"],[12],[1,"\\n        No Files were consumed\\n      "],[13],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n\\n  "],[10,"script"],[14,4,"text/javascript"],[12],[1,"\\n\\n    var drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector(\'.mdc-drawer\'));\\n    var snackbar = mdc.snackbar.MDCSnackbar.attachTo(document.querySelector(\'.mdc-snackbar\'));\\n\\n\\n    document.querySelectorAll(\'.mdc-list-item\').forEach( item => {\\n      item.addEventListener(\'click\', (event) => {\\n\\n          event.preventDefault()\\n          drawer.open = false;\\n      });\\n    })\\n\\n    function drawerOpen(){\\n\\n      if(document.querySelector(\'.mdc-list > a\').getAttribute(\'aria-label\') == \'No Logs Found\'){\\n        snackbar.open()\\n      }\\n      else\\n        drawer.open = true\\n\\n      }\\n\\n  "],[13],[1,"\\n"]],["@type","logs","index"],false,["if","eq","each","-track-array","on","fn"]]',moduleName:"ember-project/components/logger-component.hbs",isStrictMode:!1})
let f=(l=(0,o.inject)("logger"),c=class extends n.default{constructor(){super(...arguments),s(this,"logger",u,this),s(this,"log",d,this)}renderLog(e,t){this.log="Produce"==t?{id:this.logger.filesArr[e].id,logName:this.logger.filesArr[e].logName,totalLogs:this.logger.filesArr[e].logs.length,logs:this.logger.filesArr[e].logs}:this.logger.tallyArr[e],this.log=JSON.stringify(this.log,null,2)}},u=m(c.prototype,"logger",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=m(c.prototype,"log",[i.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m(c.prototype,"renderLog",[a.action],Object.getOwnPropertyDescriptor(c.prototype,"renderLog"),c.prototype),c)
e.default=f,(0,t.setComponentTemplate)(p,f)})),define("ember-project/components/nav",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/service"],(function(e,t,r,n,i){var o,a
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const l=(0,r.createTemplateFactory)({id:"eCYxrWEb",block:'[[[10,0],[14,0,"mdc-tab-bar"],[14,"role","tablist"],[12],[1,"\\n  "],[10,0],[14,0,"mdc-tab-scroller"],[12],[1,"\\n    "],[10,0],[14,0,"mdc-tab-scroller__scroll-area"],[12],[1,"\\n      "],[10,0],[14,0,"mdc-tab-scroller__scroll-content"],[12],[1,"\\n        "],[8,[39,0],[[24,0,"mdc-tab"],[24,"role","tab"],[24,"aria-selected","false"],[24,"tabindex","0"]],[["@route"],["consume"]],[["default"],[[[[1,"\\n          "],[10,1],[15,0,[29,["mdc-tab__content ",[52,[28,[37,2],[[30,0,["router","currentRouteName"]],"consume"],null],"mdc-tab-active",""]]]],[12],[1,"\\n            "],[10,1],[14,0,"mdc-tab__icon material-icons"],[14,"aria-hidden","true"],[12],[1,"backup"],[13],[1,"\\n            "],[10,1],[14,0,"mdc-tab__text-label"],[12],[1,"Consume"],[13],[1,"\\n          "],[13],[1,"\\n          "],[10,1],[14,0,"mdc-tab-indicator mdc-tab-indicator--active"],[12],[1,"\\n            "],[10,1],[14,0,"mdc-tab-indicator__content mdc-tab-indicator__content--underline"],[12],[13],[1,"\\n          "],[13],[1,"\\n          "],[10,1],[14,0,"mdc-tab__ripple"],[12],[13],[1,"\\n        "]],[]]]]],[1,"\\n        "],[8,[39,0],[[24,0,"mdc-tab"],[24,"role","tab"],[24,"aria-selected","false"],[24,"tabindex","0"]],[["@route"],["produce"]],[["default"],[[[[1,"\\n          "],[10,1],[15,0,[29,["mdc-tab__content ",[52,[28,[37,2],[[30,0,["router","currentRouteName"]],"produce"],null],"mdc-tab-active",""]]]],[12],[1,"\\n            "],[10,1],[14,0,"mdc-tab__icon material-icons"],[14,"aria-hidden","true"],[12],[1,"wysiwyg"],[13],[1,"\\n            "],[10,1],[14,0,"mdc-tab__text-label"],[12],[1,"Produce"],[13],[1,"\\n          "],[13],[1,"\\n          "],[10,1],[14,0,"mdc-tab-indicator mdc-tab-indicator--active"],[12],[1,"\\n            "],[10,1],[14,0,"mdc-tab-indicator__content mdc-tab-indicator__content--underline"],[12],[13],[1,"\\n          "],[13],[1,"\\n          "],[10,1],[14,0,"mdc-tab__ripple"],[12],[13],[1,"\\n        "]],[]]]]],[1,"\\n        "],[8,[39,0],[[24,0,"mdc-tab"],[24,"role","tab"],[24,"aria-selected","false"],[24,"tabindex","0"]],[["@route"],["transform"]],[["default"],[[[[1,"\\n          "],[10,1],[15,0,[29,["mdc-tab__content ",[52,[28,[37,2],[[30,0,["router","currentRouteName"]],"transform"],null],"mdc-tab-active",""]]]],[12],[1,"\\n            "],[10,1],[14,0,"mdc-tab__icon material-icons"],[14,"aria-hidden","true"],[12],[1,"article"],[13],[1,"\\n            "],[10,1],[14,0,"mdc-tab__text-label"],[12],[1,"Transform"],[13],[1,"\\n          "],[13],[1,"\\n          "],[10,1],[14,0,"mdc-tab-indicator mdc-tab-indicator--active"],[12],[1,"\\n            "],[10,1],[14,0,"mdc-tab-indicator__content mdc-tab-indicator__content--underline"],[12],[13],[1,"\\n          "],[13],[1,"\\n          "],[10,1],[14,0,"mdc-tab__ripple"],[12],[13],[1,"\\n        "]],[]]]]],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n"],[13],[1,"\\n\\n"],[41,[28,[37,2],[[30,0,["router","currentRouteName"]],"index"],null],[[[10,0],[14,0,"requirements-div"],[12],[1,"\\n  "],[10,"h1"],[12],[1,"Requirements"],[13],[1,"\\n  "],[10,0],[14,0,"requirements-list"],[12],[1,"\\n    "],[10,"ol"],[12],[1,"\\n      "],[10,"li"],[12],[1,"Read in the json content from the file."],[13],[1,"\\n      "],[10,"li"],[12],[1,"Read in the json content from the file."],[13],[1,"\\n      "],[10,"li"],[12],[1,"Produce the json content as a log message."],[13],[1,"\\n      "],[10,"li"],[12],[1,"Consume that json message."],[13],[1,"\\n      "],[10,"li"],[12],[1,"Transform the json message into a tally of all the number of logs for each unique email address."],[13],[1,"\\n      "],[10,"li"],[12],[1,"\\n        Produce a message that includes that tally.  Here is an example of a tally message:\\n        "],[10,"pre"],[12],[1,"{\\n  \\"logs_id\\": \\"603cdba2-232c-4c15-a6ad-c427b9a1a199\\",\\n  \\"tally\\":[\\n    {\\n    \\"email\\": \\"first.user@domain.com\\",\\n    \\"total\\":2\\n    },\\n    {\\n    \\"email\\": \\"another.user@example.com\\",\\n    \\"total\\":1\\n    }\\n  ]\\n}\\n        "],[13],[1,"\\n      "],[13],[1,"\\n      "],[10,"li"],[12],[1,"Maintain a global tally of all log counts for each unique email address"],[13],[1,"\\n      "],[10,"li"],[12],[1,"Consume each tally message produced by step 2."],[13],[1,"\\n      "],[10,"li"],[12],[1,"Update the global tally according to the additions included in the message."],[13],[1,"\\n      "],[10,"li"],[12],[1,"Print out the updated global tally."],[13],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n"],[13],[1,"\\n"]],[]],null],[1,"\\n"],[10,"script"],[12],[1,"\\n    mdc.tabBar.MDCTabBar.attachTo(document.querySelector(\'.mdc-tab-bar\'));\\n"],[13],[1,"\\n"]],[],false,["link-to","if","eq"]]',moduleName:"ember-project/components/nav.hbs",isStrictMode:!1})
let c=(o=class extends n.default{constructor(){var e,t,r,n
super(...arguments),e=this,t="router",n=this,(r=a)&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}},u=o.prototype,d="router",s=[i.inject],m={configurable:!0,enumerable:!0,writable:!0,initializer:null},f={},Object.keys(m).forEach((function(e){f[e]=m[e]})),f.enumerable=!!f.enumerable,f.configurable=!!f.configurable,("value"in f||f.initializer)&&(f.writable=!0),f=s.slice().reverse().reduce((function(e,t){return t(u,d,e)||e}),f),p&&void 0!==f.initializer&&(f.value=f.initializer?f.initializer.call(p):void 0,f.initializer=void 0),void 0===f.initializer&&(Object.defineProperty(u,d,f),f=null),a=f,o)
var u,d,s,m,p,f
e.default=c,(0,t.setComponentTemplate)(l,c)})),define("ember-project/components/toolbar",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/service"],(function(e,t,r,n,i){var o,a
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const l=(0,r.createTemplateFactory)({id:"fZO0Lyuo",block:'[[[10,"header"],[14,0,"mdc-top-app-bar mdc-top-app-bar--fixed"],[12],[1,"\\n  "],[10,0],[14,0,"mdc-top-app-bar__row"],[12],[1,"\\n    "],[10,"section"],[14,0,"mdc-top-app-bar__section mdc-top-app-bar__section--align-start"],[12],[1,"\\n      "],[10,0],[14,0,"logo-container"],[12],[1,"\\n        "],[10,3],[14,6,"http://rcsproductions.us"],[12],[1,"\\n          "],[10,"img"],[15,"src",[29,[[30,0,["rootURL"]],"img/logo-f8771e0efb5ae52a8d0cec982a9465cf.png"]]],[14,"alt","logo"],[14,"width","50"],[14,"height","50"],[12],[13],[1,"\\n        "],[13],[1,"\\n      "],[13],[1,"\\n      "],[8,[39,0],[[24,0,"mdc-icon-button project-title"],[24,"role","button"]],[["@route"],["index"]],[["default"],[[[[1,"\\n        "],[10,1],[14,0,"mdc-top-app-bar__title"],[12],[1,"\\n          Ember Project\\n        "],[13],[1,"\\n      "]],[]]]]],[1,"\\n  "],[13],[1,"\\n  "],[10,"section"],[14,0,"mdc-top-app-bar__section mdc-top-app-bar__section--align-end"],[14,"role","toolbar"],[12],[1,"\\n    "],[8,[39,0],[[16,0,[29,["material-icons mdc-top-app-bar__action-item mdc-icon-button ",[52,[28,[37,2],[[30,0,["router","currentRouteName"]],"index"],null],"mdc-fab",""]]]],[24,"aria-label","info"],[24,"aria-describedby","tooltip-id"]],[["@route"],["index"]],[["default"],[[[[1,"\\n      source\\n    "]],[]]]]],[1,"\\n  "],[13],[1,"\\n"],[13],[1,"\\n"],[10,0],[14,1,"tooltip-id"],[14,0,"mdc-tooltip"],[14,"role","tooltip"],[14,"aria-hidden","true"],[12],[1,"\\n  "],[10,0],[14,0,"mdc-tooltip__surface mdc-tooltip__surface-animation"],[12],[1,"\\n    Requirements\\n  "],[13],[1,"\\n"],[13],[1,"\\n"],[13],[1,"\\n"]],[],false,["link-to","if","eq"]]',moduleName:"ember-project/components/toolbar.hbs",isStrictMode:!1})
let c=(o=class extends n.default{constructor(){var e,t,r,n
super(...arguments),e=this,t="router",n=this,(r=a)&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}},u=o.prototype,d="router",s=[i.inject],m={configurable:!0,enumerable:!0,writable:!0,initializer:null},f={},Object.keys(m).forEach((function(e){f[e]=m[e]})),f.enumerable=!!f.enumerable,f.configurable=!!f.configurable,("value"in f||f.initializer)&&(f.writable=!0),f=s.slice().reverse().reduce((function(e,t){return t(u,d,e)||e}),f),p&&void 0!==f.initializer&&(f.value=f.initializer?f.initializer.call(p):void 0,f.initializer=void 0),void 0===f.initializer&&(Object.defineProperty(u,d,f),f=null),a=f,o)
var u,d,s,m,p,f
e.default=c,(0,t.setComponentTemplate)(l,c)})),define("ember-project/data-adapter",["exports","@ember-data/debug"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-project/helpers/and",["exports","ember-truth-helpers/helpers/and"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"and",{enumerable:!0,get:function(){return t.and}}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-project/helpers/app-version",["exports","@ember/component/helper","ember-project/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,r,n){function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const i=r.default.APP.version
let o=t.versionOnly||t.hideSha,a=t.shaOnly||t.hideVersion,l=null
return o&&(t.showExtended&&(l=i.match(n.versionExtendedRegExp)),l||(l=i.match(n.versionRegExp))),a&&(l=i.match(n.shaRegExp)),l?l[0]:i}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=i,e.default=void 0
var o=(0,t.helper)(i)
e.default=o})),define("ember-project/helpers/eq",["exports","ember-truth-helpers/helpers/equal"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"equal",{enumerable:!0,get:function(){return t.equal}})})),define("ember-project/helpers/gt",["exports","ember-truth-helpers/helpers/gt"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"gt",{enumerable:!0,get:function(){return t.gt}})})),define("ember-project/helpers/gte",["exports","ember-truth-helpers/helpers/gte"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"gte",{enumerable:!0,get:function(){return t.gte}})})),define("ember-project/helpers/is-array",["exports","ember-truth-helpers/helpers/is-array"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isArray",{enumerable:!0,get:function(){return t.isArray}})})),define("ember-project/helpers/is-empty",["exports","ember-truth-helpers/helpers/is-empty"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-project/helpers/is-equal",["exports","ember-truth-helpers/helpers/is-equal"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isEqual",{enumerable:!0,get:function(){return t.isEqual}})})),define("ember-project/helpers/lt",["exports","ember-truth-helpers/helpers/lt"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lt",{enumerable:!0,get:function(){return t.lt}})})),define("ember-project/helpers/lte",["exports","ember-truth-helpers/helpers/lte"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lte",{enumerable:!0,get:function(){return t.lte}})})),define("ember-project/helpers/not-eq",["exports","ember-truth-helpers/helpers/not-equal"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"notEqualHelper",{enumerable:!0,get:function(){return t.notEqualHelper}})})),define("ember-project/helpers/not",["exports","ember-truth-helpers/helpers/not"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"not",{enumerable:!0,get:function(){return t.not}})})),define("ember-project/helpers/or",["exports","ember-truth-helpers/helpers/or"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"or",{enumerable:!0,get:function(){return t.or}})})),define("ember-project/helpers/page-title",["exports","ember-page-title/helpers/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("ember-project/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("ember-project/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("ember-project/helpers/xor",["exports","ember-truth-helpers/helpers/xor"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"xor",{enumerable:!0,get:function(){return t.xor}})})),define("ember-project/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-project/config/environment"],(function(e,t,r){let n,i
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(n=r.default.APP.name,i=r.default.APP.version)
var o={name:"App Version",initialize:(0,t.default)(n,i)}
e.default=o})),define("ember-project/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize(){(arguments[1]||arguments[0]).register("container-debug-adapter:main",t.default)}}
e.default=r})),define("ember-project/initializers/ember-data-data-adapter",["exports","@ember-data/debug/setup"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-project/initializers/ember-data",["exports","ember-data","ember-data/setup-container"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:r.default}
e.default=n})),define("ember-project/initializers/export-application-global",["exports","ember","ember-project/config/environment"],(function(e,t,r){function n(){var e=arguments[1]||arguments[0]
if(!1!==r.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var i,o=r.default.exportApplicationGlobal
i="string"==typeof o?o:t.default.String.classify(r.default.modulePrefix),n[i]||(n[i]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[i]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.initialize=n
var i={name:"export-application-global",initialize:n}
e.default=i}))
define("ember-project/instance-initializers/ember-data",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t={name:"ember-data",initialize(){}}
e.default=t})),define("ember-project/router",["exports","@ember/routing/router","ember-project/config/environment"],(function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class i extends t.default{constructor(){super(...arguments),n(this,"location",r.default.locationType),n(this,"rootURL",r.default.rootURL)}}e.default=i,i.map((function(){this.route("consume"),this.route("produce"),this.route("transform")}))})),define("ember-project/routes/consume",["exports","@ember/routing/route","@ember/application"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class n extends t.default{getLogs(){return new Promise(((e,t)=>{(0,r.getOwner)(this).lookup("service:logger").processLogs().then((t=>{e(t)}))}))}}e.default=n})),define("ember-project/routes/produce",["exports","@ember/routing/route"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class r extends t.default{}e.default=r})),define("ember-project/routes/transform",["exports","@ember/routing/route"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class r extends t.default{}e.default=r})),define("ember-project/serializers/-default",["exports","@ember-data/serializer/json"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-project/serializers/-json-api",["exports","@ember-data/serializer/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-project/serializers/-rest",["exports","@ember-data/serializer/rest"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-project/services/logger",["exports","@ember/service","fetch"],(function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class i extends t.default{constructor(){super(...arguments),n(this,"filesArr",[]),n(this,"tallyArr",[])}createTally(){this.filesArr.forEach((e=>{let t={id:e.id,logName:e.logName,totalEmails:0,tally:[]}
var r=new Set
e.logs.forEach((e=>{r.add(e.email)}))
var n=Array.from(r)
t.totalEmails=n.length,n.forEach(((r,n)=>{t.tally.push({email:r,total:e.logs.filter((e=>e.email==r)).length})})),t.tally.sort(((e,t)=>e.total-t.total)),this.tallyArr.push(t)}))}}e.default=i})),define("ember-project/services/page-title-list",["exports","ember-page-title/services/page-title-list"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-project/services/page-title",["exports","ember-page-title/services/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-project/services/store",["exports","ember-data/store"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-project/templates/application",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"GrskcDLK",block:'[[[1,[28,[35,0],["EmberProject"],null]],[1,"\\n"],[8,[39,1],null,null,[["default"],[[[],[]]]]],[1,"\\n"],[10,0],[14,0,"mdc-layout-grid"],[12],[1,"\\n  "],[10,0],[14,0,"mdc-layout-grid__inner"],[12],[1,"\\n    "],[10,0],[14,0,"mdc-layout-grid__cell mdc-layout-grid__cell--span-12"],[12],[1,"\\n      "],[10,"main"],[14,0,"mdc-top-app-bar--fixed-adjust"],[12],[1,"\\n        "],[8,[39,2],null,null,[["default"],[[[],[]]]]],[1,"\\n        "],[46,[28,[37,4],null,null],null,null,null],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n"],[13],[1,"\\n"],[10,"script"],[12],[1,"\\n    mdc.tooltip.MDCTooltip.attachTo(document.querySelector(\'.mdc-tooltip\'));\\n"],[13],[1,"\\n"]],[],false,["page-title","toolbar","nav","component","-outlet"]]',moduleName:"ember-project/templates/application.hbs",isStrictMode:!1})
e.default=r})),define("ember-project/templates/consume",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"JWs9ar3c",block:'[[[1,[28,[35,0],["Consume"],null]],[1,"\\n"],[10,0],[14,0,"ConsumeView-div"],[12],[1,"\\n  "],[8,[39,1],null,[["@type"],["Produce"]],[["default"],[[[],[]]]]],[1,"\\n"],[13],[1,"\\n\\n"],[3," <h1>Consumed Files</h1>\\n\\n<ul>\\n{{#each @model.logArr as |logs|}}\\n  <li>\\n    <div class=\\"log-total\\">\\n\\n        File:&nbsp;{{logs.logName}}\\n\\n    </div>\\n\\n    - &nbsp;&nbsp; contained {{logs.totalLogs}} logs\\n\\n\\n   </li>\\n  {{/each}}</ul>\\n\\n<aside class=\\"mdc-snackbar\\">\\n  <div class=\\"mdc-snackbar__surface\\" role=\\"status\\" aria-relevant=\\"additions\\">\\n    <div class=\\"mdc-snackbar__label\\" aria-atomic=\\"false\\">\\n      Files: &nbsp;<b>{{@model.logArr.length}}</b>  &nbsp;-&nbsp;  Total: &nbsp;<b>{{@model.totalLogs}}</b>\\n    </div>\\n  </div>\\n</aside>\\n\\n<script type=\\"text/javascript\\">\\n\\n  var snackbar = mdc.snackbar.MDCSnackbar.attachTo(document.querySelector(\'.mdc-snackbar\'));\\n  snackbar.open()\\n\\n<\/script> "],[1,"\\n\\n\\n"]],[],false,["page-title","consume-view"]]',moduleName:"ember-project/templates/consume.hbs",isStrictMode:!1})
e.default=r})),define("ember-project/templates/produce",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"sDHgdyfR",block:'[[[1,[28,[35,0],["Produce"],null]],[1,"\\n\\n"],[10,0],[14,0,"LoggerComponent-div"],[12],[1,"\\n  "],[10,"h1"],[12],[1,"Produce"],[13],[1,"\\n  "],[8,[39,1],null,[["@type"],["Produce"]],[["default"],[[[],[]]]]],[1,"\\n"],[13],[1,"\\n"]],[],false,["page-title","logger-component"]]',moduleName:"ember-project/templates/produce.hbs",isStrictMode:!1})
e.default=r})),define("ember-project/templates/transform",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"N/PFz80F",block:'[[[1,[28,[35,0],["Transform"],null]],[1,"\\n\\n"],[10,0],[14,0,"LoggerComponent-div"],[12],[1,"\\n  "],[10,"h1"],[12],[1,"Transform"],[13],[1,"\\n  "],[8,[39,1],null,[["@type"],["Transform"]],[["default"],[[[],[]]]]],[1,"\\n"],[13],[1,"\\n"]],[],false,["page-title","logger-component"]]',moduleName:"ember-project/templates/transform.hbs",isStrictMode:!1})
e.default=r})),define("ember-project/transforms/boolean",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.BooleanTransform}})})),define("ember-project/transforms/date",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.DateTransform}})})),define("ember-project/transforms/number",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.NumberTransform}})})),define("ember-project/transforms/string",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.StringTransform}})})),define("ember-project/config/environment",[],(function(){try{var e="ember-project/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("ember-project/app").default.create({name:"ember-project",version:"0.0.0+2fd34131"})
