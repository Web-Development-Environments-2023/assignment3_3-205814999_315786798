"use strict";(self["webpackChunkassignment_3_3"]=self["webpackChunkassignment_3_3"]||[]).push([[114],{114:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("b-container",{attrs:{fluid:""}},[r("b-row",[e.$root.store.username?r("b-col",[e.personalRecipes.length>0?r("RecipePreviewList",{attrs:{title:"Favorite Recipes",recipes:e.personalRecipes}}):r("div",[r("p",[e._v("No Favorite recipes available.")])])],1):e._e()],1)],1)],1)},s=[],a=r(6835),i=r(8534),c=r(4465);const o={name:"MainPage",components:{RecipePreviewList:c.Z},data:function(){return{personalRecipes:[]}},mounted:function(){var e=this;return(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.updateRecipes();case 1:case"end":return t.stop()}}),t)})))()},methods:{updateRecipes:function(){var e=this;return(0,i.Z)((0,a.Z)().mark((function t(){var r;return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,!e.$root.store.username){t.next=6;break}return t.next=4,e.axios.get(e.$root.store.server_domain+"/users/favorites");case 4:r=t.sent,e.personalRecipes=r.data;case 6:t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}},u=o;var p=r(1001),l=(0,p.Z)(u,n,s,!1,null,"f6706ea6",null);const v=l.exports}}]);
//# sourceMappingURL=114.ad6fd907.js.map