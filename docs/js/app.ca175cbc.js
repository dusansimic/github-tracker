webpackJsonp([1],{"+VGo":function(t,e){},0:function(t,e,n){t.exports=n("NHnr")},"4+hh":function(t,e){},"7dV8":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("/5sW"),o=n("Lgyv"),a=n.n(o),l=(n("4+hh"),n("giDI"),n("UnSZ")),i=n.n(l),r=n("McBZ"),u=n.n(r),c={name:"BottomBar"},d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"phone-viewpoer"},[n("md-bottom-bar",{staticClass:"md-primary",attrs:{"md-sync-route":""}},[n("md-bottom-bar-item",{attrs:{to:"/issues",id:"bottom-bar-item-issues","md-label":"Issues","md-icon":"./../assets/git-merge.svg"}},[n("i",{staticClass:"md-icon md-icon-font md-bottom-bar-icon md-theme-default customIcon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 14 16"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}})])]),n("span",{staticClass:"md-bottom-bar-label"},[t._v("Issues")])]),n("md-bottom-bar-item",{attrs:{to:"/pulls",id:"bottom-bar-item-pulls","md-label":"Pulls","md-icon":"./../assets/git-pull-request.svg"}},[n("i",{staticClass:"md-icon md-icon-font md-bottom-bar-icon md-theme-default customIcon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 12 16"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"}})])]),n("span",{staticClass:"md-bottom-bar-label"},[t._v("Pulls")])]),n("md-bottom-bar-item",{attrs:{to:"/profile",id:"bottom-bar-item-profile","md-label":"Profile","md-icon":"person"}})],1)],1)])},m=[],p=n("XyMi");function h(t){n("Vunz")}var f=!1,v=h,g="data-v-06332682",b=null,w=Object(p["a"])(c,d,m,f,v,g,b),C=w.exports,k={name:"app",components:{BottomBar:C},data:function(){return{menuVisible:!1}},methods:{toggleMenu:function(){this.menuVisible=!this.menuVisible}}},_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("md-app",{attrs:{"md-mode":"reveal"}},[n("md-app-toolbar",{staticClass:"md-primary"},[n("span",{staticClass:"md-title"},[t._v("GitHub Tracker")])]),n("md-app-content",[n("router-view",{attrs:{id:"routerView"}})],1)],1),n("BottomBar",{attrs:{id:"bottomBar"}})],1)},y=[];function z(t){n("+VGo"),n("UwBb")}var $=!1,O=z,T="data-v-1bc3cd54",x=null,I=Object(p["a"])(k,_,y,$,O,T,x),E=I.exports,S=n("/ocq"),V=n("Oy1H"),j=n.n(V),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("md-empty-state",{staticClass:"md-accent",attrs:{"md-icon":"fingerprint","md-label":"Token not set","md-description":"Please set token in profile page."}},[n("md-button",{staticClass:"md-primary md-raised",attrs:{to:"/profile"}},[t._v("Set token")])],1)],1)},H=[],P=null,A=!1,B=null,q=null,D=null,L=Object(p["a"])(P,M,H,A,B,q,D),N=L.exports,U={name:"issue",props:["issue"]},G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"issue"},[n("md-list-item",[n("md-avatar",[n("img",{attrs:{src:t.issue.author.avatarUrl,alt:t.issue.author.login}})]),n("div",{staticClass:"md-list-item-text"},[n("span",["CLOSED"===t.issue.state?n("svg",{staticClass:"customIconClosed",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M7 10h2v2H7v-2zm2-6H7v5h2V4zm1.5 1.5l-1 1L12 9l4-4.5-1-1L12 7l-1.5-1.5zM8 13.7A5.71 5.71 0 0 1 2.3 8c0-3.14 2.56-5.7 5.7-5.7 1.83 0 3.45.88 4.5 2.2l.92-.92A6.947 6.947 0 0 0 8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7l-1.52 1.52c-.66 2.41-2.86 4.19-5.48 4.19v-.01z"}})]):n("svg",{staticClass:"customIconOpen",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}})]),n("span",[t._v(t._s(" "+t.issue.title))])]),n("span",[t._v(t._s(t.issue.repository.owner.login)+"/"+t._s(t.issue.repository.name))])])],1),n("md-divider",{staticClass:"md-inset"})],1)},J=[];function R(t){n("aetQ")}var F=!1,Q=R,Y=null,Z=null,W=Object(p["a"])(U,G,J,F,Q,Y,Z),X=W.exports,K={name:"latest",components:{NoToken:N,Issue:X},data:function(){return{latestIssues:[]}},methods:{deepEqual:function(t,e){if(t===e)return!0;if("object"===j()(t)&&null!==t&&"object"===j()(e)&&null!==e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t){if(!e.hasOwnProperty(n))return!1;if(!this.deepEqual(t[n],e[n]))return!1}return!0}return!1},getLatest:function(){var t=this;this.$getItem("latestIssues").then(function(e){void 0===e&&null===e||(t.latestIssues=e)});var e={query:"query {\n        viewer {\n          issues(orderBy: {direction: DESC, field: CREATED_AT}, first: 10) {\n            nodes {\n              author {\n                avatarUrl,\n                login\n              },\n              state,\n              repository {\n                name,\n                owner {\n                  login\n                }\n              },\n              title\n            }\n          }\n        }\n      }"};fetch("https://api.github.com/graphql",{method:"POST",headers:new Headers({Authorization:"bearer ".concat(this.$localStorage.get("token")),"Content-Length":JSON.stringify(e).length,"Content-Type":"application/json"}),body:JSON.stringify(e)}).then(function(t){return t.json()}).then(function(e){t.latestIssues=e.data.viewer.issues.nodes,t.$getItem("latestIssues").then(function(e){t.deepEqual(e,t.latestIssues)||(console.log("It is equal"),t.$setItem("latestIssues",t.latestIssues))})}).catch(function(t){console.error(t)})}},mounted:function(){this.$localStorage.get("token")&&this.getLatest()}},tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"latest"},[this.$localStorage.get("token")?n("div",[n("md-list",{staticClass:"md-tripple-line"},t._l(t.latestIssues,function(t){return n("div",{key:t.title},[n("Issue",{attrs:{issue:t}})],1)}))],1):n("NoToken")],1)},et=[],nt=!1,st=null,ot=null,at=null,lt=Object(p["a"])(K,tt,et,nt,st,ot,at),it=lt.exports,rt={name:"pull",props:["pull"]},ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pull"},[n("md-list-item",[n("md-avatar",[n("img",{attrs:{src:t.pull.author.avatarUrl,alt:t.pull.author.login}})]),n("div",{staticClass:"md-list-item-text"},[n("span",["MERGED"===t.pull.state?n("svg",{staticClass:"customIconMerged",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M10 7.01c-.73 0-1.38.41-1.73 1.02v-.02C7.22 7.99 6 7.65 5.14 6.99c-.75-.58-1.5-1.61-1.89-2.44A1.993 1.993 0 0 0 2 1C.89 1 0 1.9 0 3.01a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2a1.993 1.993 0 0 0 1-3.72V7.68c.67.7 1.44 1.27 2.3 1.69.86.42 2.03.63 2.97.64v-.02c.36.61 1 1.02 1.73 1.02 1.11 0 2-.89 2-2 0-1.11-.89-2-2-2zm-6.8 6c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.21c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm8 6c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"}})]):"CLOSED"===t.pull.state?n("svg",{staticClass:"customIconClosed",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"}})]):n("svg",{staticClass:"customIconOpen",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"}})]),n("span",[t._v(t._s(" "+t.pull.title))])]),n("span",[t._v(t._s(t.pull.repository.owner.login)+"/"+t._s(t.pull.repository.name))])])],1),n("md-divider",{staticClass:"md-inset"})],1)},ct=[];function dt(t){n("7dV8")}var mt=!1,pt=dt,ht=null,ft=null,vt=Object(p["a"])(rt,ut,ct,mt,pt,ht,ft),gt=vt.exports,bt={name:"pulls",components:{NoToken:N,Pull:gt},data:function(){return{latestPulls:[]}},methods:{deepEqual:function(t,e){if(t===e)return!0;if("object"===j()(t)&&null!==t&&"object"===j()(e)&&null!==e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t){if(!e.hasOwnProperty(n))return!1;if(!this.deepEqual(t[n],e[n]))return!1}return!0}return!1},getLatest:function(){var t=this;this.$getItem("latestPulls").then(function(e){void 0===e&&null===e||(t.latestPulls=e)});var e={query:"query {\n        viewer {\n          pullRequests(orderBy: {direction: DESC, field: UPDATED_AT}, first: 10, states: OPEN) {\n            nodes {\n              author {\n                avatarUrl,\n                login\n              },\n              state,\n              repository {\n                name,\n                owner {\n                  login\n                }\n              },\n              title\n            }\n          }\n        }\n      }"};fetch("https://api.github.com/graphql",{method:"POST",headers:new Headers({Authorization:"bearer ".concat(this.$localStorage.get("token")),"Content-Length":JSON.stringify(e).length,"Content-Type":"application/json"}),body:JSON.stringify(e)}).then(function(t){return t.json()}).then(function(e){t.latestPulls=e.data.viewer.pullRequests.nodes,t.$getItem("latestPulls").then(function(e){t.deepEqual(e,t.latestPulls)||t.$setItem("latestPulls",t.latestPulls)})}).catch(function(t){console.error(t)})}},mounted:function(){this.$localStorage.get("token")&&this.getLatest()}},wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pulls"},[this.$localStorage.get("token")?n("div",[n("md-list",{staticClass:"md-tripple-line"},t._l(t.latestPulls,function(t){return n("div",{key:t.title},[n("Pull",{attrs:{pull:t}})],1)}))],1):n("NoToken")],1)},Ct=[],kt=!1,_t=null,yt=null,zt=null,$t=Object(p["a"])(bt,wt,Ct,kt,_t,yt,zt),Ot=$t.exports,Tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},xt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"favourites"},[n("h1",[t._v("favourites")])])}],It=null,Et=!1,St=null,Vt=null,jt=null,Mt=Object(p["a"])(It,Tt,xt,Et,St,Vt,jt),Ht=Mt.exports,Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("md-empty-state",{staticClass:"md-primary",attrs:{"md-icon":"done","md-label":"Token is set","md-description":"You are ready to use the app."}},[n("md-button",{staticClass:"md-primary md-raised",on:{click:function(t){this.$localStorage.remove("token"),this.$store.dipsatch("setToken")}}},[t._v("Delete token")])],1)],1)},At=[],Bt=null,qt=!1,Dt=null,Lt=null,Nt=null,Ut=Object(p["a"])(Bt,Pt,At,qt,Dt,Lt,Nt),Gt=Ut.exports,Jt={name:"profile",components:{HasToken:Gt},data:function(){return{gitHubToken:null,gotToken:this.$localStorage.get("token")}},methods:{storeToken:function(){this.$localStorage.set("token",this.gitHubToken),this.gotToken=this.$localStorage.get("token")},deleteToken:function(){this.$localStorage.remove("token")}}},Rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[this.$localStorage.get("token")?n("HasToken"):n("form",{attrs:{novalidate:""},on:{submit:function(t){t.preventDefault()}}},[n("md-card",[n("md-card-header",[n("div",{staticClass:"md-title"},[t._v("Set token")])]),n("md-card-content",[n("md-field",[n("label",[t._v("Token")]),n("md-input",{attrs:{type:"password"},model:{value:t.gitHubToken,callback:function(e){t.gitHubToken=e},expression:"gitHubToken"}})],1)],1),n("md-card-actions",[n("md-button",{on:{click:function(e){t.deleteToken()}}},[t._v("Delete")]),n("md-button",{staticClass:"md-primary",attrs:{type:"submit"},on:{click:function(e){t.storeToken()}}},[t._v("Set")])],1)],1)],1)],1)},Ft=[],Qt=!1,Yt=null,Zt=null,Wt=null,Xt=Object(p["a"])(Jt,Rt,Ft,Qt,Yt,Zt,Wt),Kt=Xt.exports;s["default"].use(S["a"]);var te=new S["a"]({routes:[{path:"/issues",name:"issues",component:it},{path:"/pulls",name:"pulls",component:Ot},{path:"/favourites",name:"favourites",component:Ht},{path:"/profile",name:"profile",component:Kt}]}),ee=n("NYxO");s["default"].use(ee["a"]);var ne=new ee["a"].Store({state:{},mutations:{},actions:{}}),se=n("ydGU");Object(se["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),s["default"].use(a.a),s["default"].use(i.a),s["default"].use(u.a),s["default"].prototype.$storageConfig({name:"trackerData"}),s["default"].config.productionTip=!1,new s["default"]({router:te,store:ne,render:function(t){return t(E)}}).$mount("#app")},UwBb:function(t,e){},Vunz:function(t,e){},aetQ:function(t,e){},giDI:function(t,e){}},[0]);
//# sourceMappingURL=app.ca175cbc.js.map