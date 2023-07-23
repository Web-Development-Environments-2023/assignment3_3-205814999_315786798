(self["webpackChunkassignment_3_3"]=self["webpackChunkassignment_3_3"]||[]).push([[241],{241:(a,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>y});var t=function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[a._v("Register")]),r("b-form",{on:{submit:function(e){return e.preventDefault(),a.onRegister(e)},reset:function(e){return e.preventDefault(),a.onReset(e)}}},[r("b-form-group",{attrs:{id:"input-group-username","label-cols-sm":"3",label:"Username:","label-for":"username"}},[r("b-form-input",{attrs:{id:"username",type:"text",state:a.validateState("username")},model:{value:a.$v.form.username.$model,callback:function(e){a.$set(a.$v.form.username,"$model",e)},expression:"$v.form.username.$model"}}),a.$v.form.username.required?a.$v.form.username.length?a._e():r("b-form-invalid-feedback",[a._v(" Username length should be between 3-8 characters long ")]):r("b-form-invalid-feedback",[a._v(" Username is required ")]),a.$v.form.username.alpha?a._e():r("b-form-invalid-feedback",[a._v(" Username alphabetical characters required ")])],1),r("b-form-group",{attrs:{id:"input-group-firstName","label-cols-sm":"3",label:"firstName:","label-for":"firstName"}},[r("b-form-input",{attrs:{id:"firstName",type:"text",state:a.validateState("firstName")},model:{value:a.$v.form.firstName.$model,callback:function(e){a.$set(a.$v.form.firstName,"$model",e)},expression:"$v.form.firstName.$model"}})],1),r("b-form-group",{attrs:{id:"input-group-lastName","label-cols-sm":"3",label:"lastName:","label-for":"lastName"}},[r("b-form-input",{attrs:{id:"lastName",type:"text",state:a.validateState("lastName")},model:{value:a.$v.form.lastName.$model,callback:function(e){a.$set(a.$v.form.lastName,"$model",e)},expression:"$v.form.lastName.$model"}})],1),r("b-form-group",{attrs:{id:"input-group-country","label-cols-sm":"3",label:"Country:","label-for":"country"}},[r("b-form-select",{attrs:{id:"country",options:a.countries,state:a.validateState("country")},model:{value:a.$v.form.country.$model,callback:function(e){a.$set(a.$v.form.country,"$model",e)},expression:"$v.form.country.$model"}}),r("b-form-invalid-feedback",[a._v(" Country is required ")])],1),r("b-form-group",{attrs:{id:"input-group-Password","label-cols-sm":"3",label:"Password:","label-for":"password"}},[r("b-form-input",{attrs:{id:"password",type:"password",state:a.validateState("password")},model:{value:a.$v.form.password.$model,callback:function(e){a.$set(a.$v.form.password,"$model",e)},expression:"$v.form.password.$model"}}),a.$v.form.password.required?a.$v.form.password.$error?r("b-form-text",{attrs:{"text-variant":"info"}},[a._v(" Your password should be "),r("strong",[a._v("strong")]),a._v(". "),r("br"),a._v(" For that, your password should be also: ")]):a._e():r("b-form-invalid-feedback",[a._v(" Password is required ")]),a.$v.form.password.required&&!a.$v.form.password.length?r("b-form-invalid-feedback",[a._v(" Have length between 5-10 characters long ")]):a._e()],1),r("b-form-group",{attrs:{id:"input-group-confirmedPassword","label-cols-sm":"3",label:"Confirm Password:","label-for":"confirmedPassword"}},[r("b-form-input",{attrs:{id:"confirmedPassword",type:"password",state:a.validateState("confirmedPassword")},model:{value:a.$v.form.confirmedPassword.$model,callback:function(e){a.$set(a.$v.form.confirmedPassword,"$model",e)},expression:"$v.form.confirmedPassword.$model"}}),a.$v.form.confirmedPassword.required?a.$v.form.confirmedPassword.sameAsPassword?a._e():r("b-form-invalid-feedback",[a._v(" The confirmed password is not equal to the original password ")]):r("b-form-invalid-feedback",[a._v(" Password confirmation is required ")])],1),r("b-form-group",{attrs:{id:"input-group-email","label-cols-sm":"3",label:"email:","label-for":"email"}},[r("b-form-input",{attrs:{id:"email",type:"text",state:a.validateState("email")},model:{value:a.$v.form.email.$model,callback:function(e){a.$set(a.$v.form.email,"$model",e)},expression:"$v.form.email.$model"}})],1),r("b-button",{attrs:{type:"reset",variant:"danger"}},[a._v("Reset")]),r("b-button",{staticClass:"ml-5 w-75",staticStyle:{width:"250px"},attrs:{type:"submit",variant:"primary"}},[a._v("Register")]),r("div",{staticClass:"mt-2"},[a._v(" You have an account already? "),r("router-link",{attrs:{to:"login"}},[a._v(" Log in here")])],1)],1),a.form.submitError?r("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[a._v(" Register failed: "+a._s(a.form.submitError)+" ")]):a._e()],1)},n=[],o=r(6835),i=r(8534);r(9753);function s(a,e){(null==e||e>a.length)&&(e=a.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=a[r];return t}function l(a){if(Array.isArray(a))return s(a)}r(2526),r(1817),r(1539),r(2165),r(8783),r(3948),r(1038);function u(a){if("undefined"!==typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}r(7042),r(6647),r(3710),r(9714),r(8309),r(4916),r(7601);function d(a,e){if(a){if("string"===typeof a)return s(a,e);var r=Object.prototype.toString.call(a).slice(8,-1);return"Object"===r&&a.constructor&&(r=a.constructor.name),"Map"===r||"Set"===r?Array.from(a):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(a,e):void 0}}r(1703);function m(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(a){return l(a)||u(a)||d(a)||m()}r(7658);const f=["Afghanistan","Åland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","United States Minor Outlying Islands","Virgin Islands (British)","Virgin Islands (U.S.)","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cabo Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo (Democratic Republic of the)","Cook Islands","Costa Rica","Croatia","Cuba","Curaçao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Côte d'Ivoire","Iran (Islamic Republic of)","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia (the former Yugoslav Republic of)","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (Republic of)","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Korea (Democratic People's Republic of)","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of Kosovo","Réunion","Romania","Russian Federation","Rwanda","Saint Barthélemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Korea (Republic of)","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom of Great Britain and Northern Ireland","United States of America","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"];var p=r(379);const v={name:"Register",data:function(){return{form:{username:"",firstName:"",lastName:"",country:null,password:"",confirmedPassword:"",email:"",submitError:void 0},countries:[{value:null,text:"",disabled:!0}],errors:[],validated:!1}},validations:{form:{username:{required:p.C1,length:function(a){return(0,p.Ei)(3)(a)&&(0,p.BS)(8)(a)},alpha:p.Fq},firstName:{required:p.C1},lastName:{required:p.C1},country:{required:p.C1},password:{required:p.C1,length:function(a){return(0,p.Ei)(5)(a)&&(0,p.BS)(10)(a)}},confirmedPassword:{required:p.C1,sameAsPassword:(0,p.sH)("password")},email:{required:p.C1}}},mounted:function(){var a;(a=this.countries).push.apply(a,c(f))},methods:{validateState:function(a){var e=this.$v.form[a],r=e.$dirty,t=e.$error;return r?!t:null},Register:function(){var a=this;return(0,i.Z)((0,o.Z)().mark((function e(){var r;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.axios.post("http://localhost:3000/Register",{username:a.form.username,firstname:a.form.firstName,lastname:a.form.lastName,country:a.form.country,password:a.form.password,email:a.form.email});case 3:if(r=e.sent,!r||!r.data){e.next=8;break}a.$router.push("/login"),e.next=9;break;case 8:throw new Error("Invalid response from the server");case 9:e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](0),console.log(e.t0),a.form.submitError=e.t0.message||"Registration failed";case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))()},onRegister:function(){console.log("register method called"),this.$v.form.$touch(),this.$v.form.$anyError||(console.log("register method go"),this.Register())},onReset:function(){var a=this;this.form={username:"",firstName:"",lastName:"",country:null,password:"",confirmedPassword:"",email:""},this.$nextTick((function(){a.$v.$reset()}))}}},b=v;var g=r(1001),h=(0,g.Z)(b,t,n,!1,null,"5ab8d1bb",null);const y=h.exports},8457:(a,e,r)=>{"use strict";var t=r(9974),n=r(6916),o=r(7908),i=r(3411),s=r(7659),l=r(4411),u=r(6244),d=r(6135),m=r(4121),c=r(1246),f=Array;a.exports=function(a){var e=o(a),r=l(this),p=arguments.length,v=p>1?arguments[1]:void 0,b=void 0!==v;b&&(v=t(v,p>2?arguments[2]:void 0));var g,h,y,w,x,S,$=c(e),I=0;if(!$||this===f&&s($))for(g=u(e),h=r?new this(g):f(g);g>I;I++)S=b?v(e[I],I):e[I],d(h,I,S);else for(w=m(e,$),x=w.next,h=r?new this:[];!(y=n(x,w)).done;I++)S=b?i(w,v,[y.value,I],!0):y.value,d(h,I,S);return h.length=I,h}},3411:(a,e,r)=>{var t=r(9670),n=r(9212);a.exports=function(a,e,r,o){try{return o?e(t(r)[0],r[1]):e(r)}catch(i){n(a,"throw",i)}}},2261:(a,e,r)=>{"use strict";var t=r(6916),n=r(1702),o=r(1340),i=r(7066),s=r(2999),l=r(2309),u=r(30),d=r(9909).get,m=r(9441),c=r(7168),f=l("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,v=p,b=n("".charAt),g=n("".indexOf),h=n("".replace),y=n("".slice),w=function(){var a=/a/,e=/b*/g;return t(p,a,"a"),t(p,e,"a"),0!==a.lastIndex||0!==e.lastIndex}(),x=s.BROKEN_CARET,S=void 0!==/()??/.exec("")[1],$=w||S||x||m||c;$&&(v=function(a){var e,r,n,s,l,m,c,$=this,I=d($),R=o(a),C=I.raw;if(C)return C.lastIndex=$.lastIndex,e=t(v,C,R),$.lastIndex=C.lastIndex,e;var N=I.groups,k=x&&$.sticky,A=t(i,$),P=$.source,E=0,M=R;if(k&&(A=h(A,"y",""),-1===g(A,"g")&&(A+="g"),M=y(R,$.lastIndex),$.lastIndex>0&&(!$.multiline||$.multiline&&"\n"!==b(R,$.lastIndex-1))&&(P="(?: "+P+")",M=" "+M,E++),r=new RegExp("^(?:"+P+")",A)),S&&(r=new RegExp("^"+P+"$(?!\\s)",A)),w&&(n=$.lastIndex),s=t(p,k?r:$,M),k?s?(s.input=y(s.input,E),s[0]=y(s[0],E),s.index=$.lastIndex,$.lastIndex+=s[0].length):$.lastIndex=0:w&&s&&($.lastIndex=$.global?s.index+s[0].length:n),S&&s&&s.length>1&&t(f,s[0],r,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(s[l]=void 0)})),s&&N)for(s.groups=m=u(null),l=0;l<N.length;l++)c=N[l],m[c[0]]=s[c[1]];return s}),a.exports=v},7066:(a,e,r)=>{"use strict";var t=r(9670);a.exports=function(){var a=t(this),e="";return a.hasIndices&&(e+="d"),a.global&&(e+="g"),a.ignoreCase&&(e+="i"),a.multiline&&(e+="m"),a.dotAll&&(e+="s"),a.unicode&&(e+="u"),a.unicodeSets&&(e+="v"),a.sticky&&(e+="y"),e}},4706:(a,e,r)=>{var t=r(6916),n=r(2597),o=r(7976),i=r(7066),s=RegExp.prototype;a.exports=function(a){var e=a.flags;return void 0!==e||"flags"in s||n(a,"flags")||!o(s,a)?e:t(i,a)}},2999:(a,e,r)=>{var t=r(7293),n=r(7854),o=n.RegExp,i=t((function(){var a=o("a","y");return a.lastIndex=2,null!=a.exec("abcd")})),s=i||t((function(){return!o("a","y").sticky})),l=i||t((function(){var a=o("^r","gy");return a.lastIndex=2,null!=a.exec("str")}));a.exports={BROKEN_CARET:l,MISSED_STICKY:s,UNSUPPORTED_Y:i}},9441:(a,e,r)=>{var t=r(7293),n=r(7854),o=n.RegExp;a.exports=t((function(){var a=o(".","s");return!(a.dotAll&&a.exec("\n")&&"s"===a.flags)}))},7168:(a,e,r)=>{var t=r(7293),n=r(7854),o=n.RegExp;a.exports=t((function(){var a=o("(?<a>b)","g");return"b"!==a.exec("b").groups.a||"bc"!=="b".replace(a,"$<a>c")}))},1038:(a,e,r)=>{var t=r(2109),n=r(8457),o=r(7072),i=!o((function(a){Array.from(a)}));t({target:"Array",stat:!0,forced:i},{from:n})},9753:(a,e,r)=>{var t=r(2109),n=r(3157);t({target:"Array",stat:!0},{isArray:n})},3710:(a,e,r)=>{var t=r(1702),n=r(8052),o=Date.prototype,i="Invalid Date",s="toString",l=t(o[s]),u=t(o.getTime);String(new Date(NaN))!=i&&n(o,s,(function(){var a=u(this);return a===a?l(this):i}))},4916:(a,e,r)=>{"use strict";var t=r(2109),n=r(2261);t({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},7601:(a,e,r)=>{"use strict";r(4916);var t=r(2109),n=r(6916),o=r(614),i=r(9670),s=r(1340),l=function(){var a=!1,e=/[ac]/;return e.exec=function(){return a=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&a}(),u=/./.test;t({target:"RegExp",proto:!0,forced:!l},{test:function(a){var e=i(this),r=s(a),t=e.exec;if(!o(t))return n(u,e,r);var l=n(t,e,r);return null!==l&&(i(l),!0)}})},9714:(a,e,r)=>{"use strict";var t=r(6530).PROPER,n=r(8052),o=r(9670),i=r(1340),s=r(7293),l=r(4706),u="toString",d=RegExp.prototype,m=d[u],c=s((function(){return"/a/b"!=m.call({source:"a",flags:"b"})})),f=t&&m.name!=u;(c||f)&&n(RegExp.prototype,u,(function(){var a=o(this),e=i(a.source),r=i(l(a));return"/"+e+"/"+r}),{unsafe:!0})}}]);
//# sourceMappingURL=241.2af49f1b.js.map