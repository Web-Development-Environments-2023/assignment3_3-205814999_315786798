(self["webpackChunkassignment_3_3"]=self["webpackChunkassignment_3_3"]||[]).push([[481],{8481:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>v});var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"container recipe-details"},[e.recipe?t("div",[t("h2",{staticClass:"mb-4"},[e._v(e._s(e.recipe.title))]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("img",{staticClass:"recipe-image img-fluid mb-4",attrs:{src:e.recipe.image,alt:e.recipe.title}})]),t("div",{staticClass:"col-md-6"},[t("p",{staticClass:"mb-2"},[e._v("Ready in: "+e._s(e.recipe.readyInMinutes)+" minutes")]),t("p",{staticClass:"mb-2"},[e._v("Popularity: "+e._s(e.recipe.popularity))]),t("p",{staticClass:"mb-2"},[e._v("Vegan: "+e._s(e.recipe.vegan?"Yes":"No"))]),t("p",{staticClass:"mb-2"},[e._v("Vegetarian: "+e._s(e.recipe.vegetarian?"Yes":"No"))]),t("p",{staticClass:"mb-2"},[e._v("Gluten-Free: "+e._s(e.recipe.glutenFree?"Yes":"No"))])])]),t("h3",{staticClass:"mt-4"},[e._v("Ingredients")]),t("ul",{staticClass:"list-group"},e._l(e.recipe.ingredients,(function(r){return t("li",{key:r,staticClass:"list-group-item"},[e._v(e._s(r))])})),0),t("h3",{staticClass:"mt-4"},[e._v("Instructions")]),t("ol",{staticClass:"list-group"},e._l(e.recipe.instruction,(function(r){return t("li",{key:r,staticClass:"list-group-item",domProps:{innerHTML:e._s(e.removeStepNumbering(r))}})})),0),t("h3",{staticClass:"mt-4"},[e._v("Servings")]),t("p",[e._v(e._s(e.recipe.servings))])]):t("div",[t("p",[e._v("Loading recipe...")])])])},a=[],s=t(6835),i=t(8534);t(4916),t(5306);const c={data:function(){return{recipe:null}},mounted:function(){this.created()},methods:{created:function(){var e=this;return(0,i.Z)((0,s.Z)().mark((function r(){var t;return(0,s.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.prev=1,r.next=4,e.axios.get(e.$root.store.server_domain+"/recipes/".concat(e.$route.params.recipeId));case 4:t=r.sent,200!==t.status&&e.$router.replace("/NotFound"),r.next=13;break;case 8:return r.prev=8,r.t0=r["catch"](1),console.log("error.response.status",r.t0.response.status),e.$router.replace("/NotFound"),r.abrupt("return");case 13:e.recipe=t.data,r.next=19;break;case 16:r.prev=16,r.t1=r["catch"](0),console.log(r.t1);case 19:case"end":return r.stop()}}),r,null,[[0,16],[1,8]])})))()},removeStepNumbering:function(e){return e.replace(/^\d+\.\s*/,"")}}},u=c;var o=t(1001),l=(0,o.Z)(u,n,a,!1,null,"6fe4260a",null);const v=l.exports},1530:(e,r,t)=>{"use strict";var n=t(8710).charAt;e.exports=function(e,r,t){return r+(t?n(e,r).length:1)}},7007:(e,r,t)=>{"use strict";t(4916);var n=t(1470),a=t(8052),s=t(2261),i=t(7293),c=t(5112),u=t(8880),o=c("species"),l=RegExp.prototype;e.exports=function(e,r,t,v){var p=c(e),f=!i((function(){var r={};return r[p]=function(){return 7},7!=""[e](r)})),d=f&&!i((function(){var r=!1,t=/a/;return"split"===e&&(t={},t.constructor={},t.constructor[o]=function(){return t},t.flags="",t[p]=/./[p]),t.exec=function(){return r=!0,null},t[p](""),!r}));if(!f||!d||t){var g=n(/./[p]),m=r(p,""[e],(function(e,r,t,a,i){var c=n(e),u=r.exec;return u===s||u===l.exec?f&&!i?{done:!0,value:g(r,t,a)}:{done:!0,value:c(t,r,a)}:{done:!1}}));a(String.prototype,e,m[0]),a(l,p,m[1])}v&&u(l[p],"sham",!0)}},647:(e,r,t)=>{var n=t(1702),a=t(7908),s=Math.floor,i=n("".charAt),c=n("".replace),u=n("".slice),o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,r,t,n,v,p){var f=t+e.length,d=n.length,g=l;return void 0!==v&&(v=a(v),g=o),c(p,g,(function(a,c){var o;switch(i(c,0)){case"$":return"$";case"&":return e;case"`":return u(r,0,t);case"'":return u(r,f);case"<":o=v[u(c,1,-1)];break;default:var l=+c;if(0===l)return a;if(l>d){var p=s(l/10);return 0===p?a:p<=d?void 0===n[p-1]?i(c,1):n[p-1]+i(c,1):a}o=n[l-1]}return void 0===o?"":o}))}},7651:(e,r,t)=>{var n=t(6916),a=t(9670),s=t(614),i=t(4326),c=t(2261),u=TypeError;e.exports=function(e,r){var t=e.exec;if(s(t)){var o=n(t,e,r);return null!==o&&a(o),o}if("RegExp"===i(e))return n(c,e,r);throw u("RegExp#exec called on incompatible receiver")}},5306:(e,r,t)=>{"use strict";var n=t(2104),a=t(6916),s=t(1702),i=t(7007),c=t(7293),u=t(9670),o=t(614),l=t(8554),v=t(9303),p=t(7466),f=t(1340),d=t(4488),g=t(1530),m=t(8173),h=t(647),_=t(7651),x=t(5112),C=x("replace"),b=Math.max,$=Math.min,k=s([].concat),y=s([].push),w=s("".indexOf),I=s("".slice),N=function(e){return void 0===e?e:String(e)},E=function(){return"$0"==="a".replace(/./,"$0")}(),M=function(){return!!/./[C]&&""===/./[C]("a","$0")}(),S=!c((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));i("replace",(function(e,r,t){var s=M?"$":"$0";return[function(e,t){var n=d(this),s=l(e)?void 0:m(e,C);return s?a(s,e,n,t):a(r,f(n),e,t)},function(e,a){var i=u(this),c=f(e);if("string"==typeof a&&-1===w(a,s)&&-1===w(a,"$<")){var l=t(r,i,c,a);if(l.done)return l.value}var d=o(a);d||(a=f(a));var m=i.global;if(m){var x=i.unicode;i.lastIndex=0}var C=[];while(1){var E=_(i,c);if(null===E)break;if(y(C,E),!m)break;var M=f(E[0]);""===M&&(i.lastIndex=g(c,p(i.lastIndex),x))}for(var S="",F=0,R=0;R<C.length;R++){E=C[R];for(var Z=f(E[0]),Y=b($(v(E.index),c.length),0),A=[],L=1;L<E.length;L++)y(A,N(E[L]));var P=E.groups;if(d){var T=k([Z],A,Y,c);void 0!==P&&y(T,P);var V=f(n(a,void 0,T))}else V=h(Z,c,Y,A,P,a);Y>=F&&(S+=I(c,F,Y)+V,F=Y+Z.length)}return S+I(c,F)}]}),!S||!E||M)}}]);
//# sourceMappingURL=481.24e0bd57.js.map