(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{232:function(e,t,c){},238:function(e,t,c){},425:function(e,t,c){},426:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(54),r=c.n(s),i=(c(232),c(11)),j=c(43),o=c(14),l=c(17),b=c(99),u=c(3);var d=function(e){var t=e.Component,c=Object(b.a)(e,["Component"]);return Object(u.jsx)(o.a,Object(l.a)(Object(l.a)({},c),{},{render:function(e){return Object(u.jsx)(t,Object(l.a)({},e))}}))},O=c(433),h=c(435),x=c(30),m=(c(238),a.a.createContext()),p=a.a.createContext(),f=a.a.createContext(),v=m,g=c(429),y=c(441),S=c(438),C=c(21),k=c.n(C),w=c(209),P=c.n(w),F={width:300,marginBottom:10};var I=function(e){var t=Object(n.useContext)(p),c=t.keyword,a=t.setKeyword,s=Object(n.useState)(),r=Object(i.a)(s,2),j=r[0],o=r[1],l=Object(n.useState)(!1),b=Object(i.a)(l,2),d=b[0],O=b[1],h=Object(n.useContext)(v).setAnimeContext;Object(n.useEffect)((function(){var e=setTimeout((function(){return m()}),1e3);return function(){return clearTimeout(e)}}),[c]);var m=function(){c&&k.a.get("/api/v1/anime/".concat(c),{onDownloadProgress:O(!0)}).then((function(e){o(e.data),O(!1)})).catch((function(e){return console.log(e)}))};return Object(u.jsx)("div",{children:Object(u.jsxs)(g.a,{style:F,children:[Object(u.jsx)(g.a.Addon,{children:d?Object(u.jsx)(y.a,{}):""}),Object(u.jsx)(S.a,{data:j?j.map((function(e){return e.name})):"",onChange:function(e){a(e)},onSelect:function(t){var c=P.a.find(j,(function(e){return e.name==t.value}));h({name:c.name,url:c.url}),e.history.push("/anime/".concat(c.name.replace(/\s/g,"-")))},filterBy:function(e,t){return t}}),Object(u.jsx)(g.a.Addon,{children:Object(u.jsx)(x.a,{icon:"search"})})]})})},N=c(442),E=c(443),A=c(444),R=c(432),D=c(445),K=c(437),L=c(446),T=c(447),z=c(60),B=c(95);function q(e){var t=Object.assign({},e),c=N.a.Types.StringType,n=N.a.Model({email:c().isEmail("Please enter a valid email address.").isRequired("This field is required."),password:c().isRequired("This field is required.")});return Object(u.jsx)(E.a,Object(l.a)(Object(l.a)({style:{backgroundColor:"lightgray"}},t),{},{children:Object(u.jsxs)(A.a,{model:n,children:[Object(u.jsxs)(R.a,{children:[Object(u.jsx)(D.a,{children:Object(u.jsx)("b",{children:"Email: "})}),Object(u.jsx)(K.a,{name:"email",type:"email"}),Object(u.jsx)(L.a,{tooltip:!0,children:"Required"})]}),Object(u.jsxs)(R.a,{children:[Object(u.jsx)(D.a,{children:Object(u.jsx)("b",{children:"Password: "})}),Object(u.jsx)(K.a,{name:"password",type:"password"})]}),Object(u.jsx)(R.a,{children:Object(u.jsxs)(T.a,{children:[Object(u.jsx)(z.a,{appearance:"primary",type:"submit",children:"Sign in"}),Object(u.jsx)(z.a,{appearance:"subtle",children:"Signup"})]})})]})}))}var M=function(){return Object(u.jsx)(B.a,{trigger:"click",placement:"bottom",speaker:Object(u.jsx)(q,{}),children:Object(u.jsx)(z.a,{appearance:"ghost",children:"Login"})})};var W=function(e){var t=e.onSelect,c=e.activeKey,n=Object(b.a)(e,["onSelect","activeKey"]);return Object(u.jsxs)(O.a,Object(l.a)(Object(l.a)({appearance:"sublte"},n),{},{children:[Object(u.jsx)(O.a.Header,{children:Object(u.jsx)("span",{className:"navbar-brand logo",children:"A N I M E W O R L D Z"})}),Object(u.jsxs)(O.a.Body,{className:"body-nav",children:[Object(u.jsxs)(h.a,{onSelect:t,activeKey:c,children:[Object(u.jsx)(j.b,{to:"/",children:Object(u.jsx)(h.a.Item,{eventKey:"1",icon:Object(u.jsx)(x.a,{icon:"home"}),children:"Home"})}),Object(u.jsx)(j.b,{to:"/popular",children:Object(u.jsx)(h.a.Item,{eventKey:"2",children:"Popular"})}),Object(u.jsx)(j.b,{to:"/latest",children:Object(u.jsx)(h.a.Item,{eventKey:"3",children:"Latest"})}),Object(u.jsx)(h.a.Item,{eventKey:"4",children:"About"})]}),Object(u.jsx)(h.a,{pullRight:!0,children:Object(u.jsx)(M,{})}),Object(u.jsx)(h.a,{pullRight:!0,children:Object(u.jsx)(I,Object(l.a)({},n))})]})]}))},H=c(448),J=c(434);var Z=function(e){var t=Object(n.useState)(),c=Object(i.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(!1),j=Object(i.a)(r,2),o=j[0],b=j[1],d=Object(n.useState)("waifu"),O=Object(i.a)(d,2),h=O[0],x=O[1];Object(n.useEffect)((function(){m()}),[h]);var m=function(){k.a.post("/api/v1/anime/random/keyword/".concat(h),{},{onDownloadProgress:b(!0)}).then((function(e){s(e.data.files),b(!1)})).catch((function(e){return console.log(e)}))};return Object(u.jsxs)("div",{className:"homepage",children:[Object(u.jsx)(W,Object(l.a)({activekey:1},e)),Object(u.jsx)("h4",{children:"Welcome to Anime World-Z"}),Object(u.jsx)("br",{}),Object(u.jsx)(H.a,{autoplay:!0,className:"custom-slider",shape:"bar",style:{width:"100vh",height:"60vh",display:"block",marginLeft:"auto",marginRight:"auto"},children:o?Object(u.jsx)(y.a,{center:!0}):a?a.map((function(e){return Object(u.jsx)("img",{src:e})})):""}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{children:["Choose Category:",Object(u.jsx)(J.a,{data:[{label:"waifu",value:"waifu"},{label:"neko",value:"neko"},{label:"shinobu",value:"shinobu"},{label:"megumin",value:"megumin"},{label:"pat",value:"pat"},{label:"smug",value:"smug"},{label:"smile",value:"smile"},{label:"nom",value:"nom"},{label:"slap",value:"slap"}],style:{width:224},onSelect:function(e){x(e)}}),Object(u.jsx)("br",{}),Object(u.jsx)("i",{children:"*Choose Pat for Stress Relief"})]})]})},G=c(449),Q=c(436),X=c(225);var U=function(e){var t=Object(n.useState)(),c=Object(i.a)(t,2),a=c[0],s=c[1],r=Object(n.useContext)(v).animeContext,j=Object(n.useState)(!1),o=Object(i.a)(j,2),b=o[0],d=o[1],O=Object(n.useState)(),h=Object(i.a)(O,2),m=h[0],p=h[1],g=Object(n.useState)(),S=Object(i.a)(g,2),C=S[0],w=S[1],P=Object(n.useContext)(f).setInfo;Object(n.useEffect)((function(){F()}),[r.url]);var F=function(){""!==r.url?k.a.post("/api/v1/anime",{uri:r.url},{onDownloadProgress:d(!0)}).then((function(e){p(e.data),w(e.data.result.episodes),d(!1)})).catch((function(e){return console.log(e)})):e.history.push("/")};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"nav-header",children:Object(u.jsx)(W,Object(l.a)({activekey:a,onSelect:function(e){s(e)}},e))}),Object(u.jsx)("div",{className:"anime-info",children:b?Object(u.jsx)(y.a,{center:!0,size:"md"}):m?Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:m.image,width:"250"}),Object(u.jsx)("h3",{children:m.result.name}),Object(u.jsx)("p",{children:m.result.summary}),Object(u.jsxs)("p",{children:["Released: ",m.result.released]}),Object(u.jsxs)("p",{children:["Genre: ",m.result.genres.map((function(e){return e+", "}))]}),Object(u.jsx)(G.a,{}),Object(u.jsx)("h4",{children:"Episodes:"}),Object(u.jsx)(Q.a,{hover:!0,bordered:!0,children:C.map((function(t,c){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(Q.a.Item,{style:{display:"inline-block"},children:[t.name,Object(u.jsx)(X.a,{icon:Object(u.jsx)(x.a,{icon:"play",onClick:function(){return t=c+1,P(m),void e.history.push("".concat(e.location.pathname,"/").concat(t));var t}})})]})})}))})]}):""})]})};var V=function(e){var t=Object(n.useState)(),c=Object(i.a)(t,2),a=c[0],s=c[1],r=Object(n.useContext)(v).animeContext,j=Object(o.f)().ep,l=Object(n.useState)(),b=Object(i.a)(l,2),d=b[0],O=b[1],h=Object(n.useState)(!1),m=Object(i.a)(h,2),p=m[0],g=m[1],S=Object(n.useContext)(f).info,C=Object(n.useState)(1),w=Object(i.a)(C,2),P=w[0],F=w[1];Object(n.useEffect)((function(){I()}),[r.url,j]);var I=function(){r.url?k.a.post("/api/v1/anime/episode/".concat(j),{uri:r.url},{onDownloadProgress:g(!0)}).then((function(e){O(e.data.videoLinks),g(!1)})).catch((function(e){return console.log(e)})):e.history.push("/")};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"nav-header",children:Object(u.jsx)(W,{activekey:a,onSelect:function(e){s(e)}})}),Object(u.jsx)("div",{className:"watch-episode",children:p?Object(u.jsx)(y.a,{center:!0,size:"md"}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(G.a,{}),Object(u.jsxs)("h4",{children:["Watch Episode ",j," of ",r.name]}),Object(u.jsx)(G.a,{}),d?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("iframe",{className:"episode-video-player",allowFullScreen:!0,frameBorder:!0,src:1===P?"https://".concat(d[P].url):d[P].url}),Object(u.jsx)(X.a,{icon:Object(u.jsx)(x.a,{icon:"arrow-left"}),placement:"left",style:{float:"left"},onClick:function(){e.history.push("/anime/".concat(r.name.replace(/\s/g,"-"),"/").concat(parseInt(j)-1))},disabled:1===parseInt(j),children:"Previous"}),Object(u.jsx)(X.a,{icon:Object(u.jsx)(x.a,{icon:"arrow-right"}),placement:"right",style:{float:"right"},onClick:function(){e.history.push("/anime/".concat(r.name.replace(/\s/g,"-"),"/").concat(parseInt(j)+1))},disabled:S.result.episodes.length===parseInt(j),children:"Next"}),Object(u.jsx)(G.a,{}),Object(u.jsx)("div",{children:"Select Server:"}),Object(u.jsx)(z.a,{appearance:"subtle",onClick:function(){return F(1)},children:"MultiQuality"}),Object(u.jsx)(z.a,{appearance:"subtle",onClick:function(){return F(2)},children:"StreamSB"}),Object(u.jsx)(z.a,{appearance:"subtle",onClick:function(){return F(3)},children:"Doodstream"}),Object(u.jsx)(z.a,{appearance:"subtle",onClick:function(){return F(4)},children:"Streamtape"}),Object(u.jsx)(z.a,{appearance:"subtle",onClick:function(){return F(5)},children:"Mixdrop"}),Object(u.jsx)(z.a,{appearance:"subtle",onClick:function(){return F(6)},children:"Xstreamcdn"}),Object(u.jsx)(z.a,{appearance:"subtle",onClick:function(){return F(7)},children:"Mp4upload"}),Object(u.jsx)("br",{})]}):Object(u.jsx)(y.a,{center:!0,size:"md"}),Object(u.jsx)(G.a,{})]})})]})},Y=c(439),$=c(440);var _=function(e){var t=Object(n.useState)(),c=Object(i.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(!1),j=Object(i.a)(r,2),o=j[0],b=j[1],d=Object(n.useContext)(v).setAnimeContext,O=Object(n.useState)(1),h=Object(i.a)(O,2),m=h[0],p=h[1];Object(n.useEffect)((function(){f()}),[m]);var f=function(){k.a.get("/api/v1/anime/page/".concat(m),{onDownloadProgress:b(!0)}).then((function(e){s(e.data),b(!1)})).catch((function(e){return console.log(e)}))};return Object(u.jsxs)("div",{className:"latest",children:[Object(u.jsx)(W,Object(l.a)({activekey:3},e)),Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:"Latest Release"}),Object(u.jsx)(Y.a,{prev:!0,last:!0,next:!0,first:!0,size:"md",pages:10,activePage:m,onSelect:function(e){p(e)}}),Object(u.jsx)("br",{}),o?Object(u.jsx)(y.a,{center:!0,size:"md"}):a?a.map((function(t){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)($.a,{shaded:!0,bordered:!0,bodyFill:!0,style:{display:"inline-block",width:240},children:[Object(u.jsx)("img",{src:t.img,height:"300"}),Object(u.jsx)($.a,{header:t.name,children:Object(u.jsxs)("p",{children:[Object(u.jsx)("small",{children:t.ep}),Object(u.jsx)(X.a,{icon:Object(u.jsx)(x.a,{icon:"play"}),onClick:function(){return c=t.name,void k.a.get("/api/v1/anime/".concat(c)).then((function(t){d({name:t.data[0].name,url:t.data[0].url}),e.history.push("/anime/".concat(t.data[0].name.replace(/\s/g,"-")))})).catch((function(e){return console.log(e)}));var c}})]})})]})})})):""]})]})};var ee=function(e){var t=Object(n.useState)(),c=Object(i.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(!1),j=Object(i.a)(r,2),o=j[0],b=j[1],d=Object(n.useContext)(v).setAnimeContext,O=Object(n.useState)(1),h=Object(i.a)(O,2),m=h[0],p=h[1];Object(n.useEffect)((function(){f()}),[m]);var f=function(){k.a.get("/api/v1/anime/popular/fetch/".concat(m),{onDownloadProgress:b(!0)}).then((function(e){s(e.data),b(!1)})).catch((function(e){return console.log(e)}))};return Object(u.jsxs)("div",{className:"popular",children:[Object(u.jsx)(W,Object(l.a)({activekey:2},e)),Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:"Popular Anime"}),Object(u.jsx)(Y.a,{prev:!0,last:!0,next:!0,first:!0,size:"md",pages:10,activePage:m,onSelect:function(e){p(e)}}),Object(u.jsx)("br",{}),o?Object(u.jsx)(y.a,{center:!0,size:"md"}):a?a.map((function(t){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)($.a,{shaded:!0,bordered:!0,bodyFill:!0,style:{display:"inline-block",width:240},children:[Object(u.jsx)("img",{src:t.img,height:"300"}),Object(u.jsx)($.a,{header:t.name,children:Object(u.jsxs)("p",{children:[Object(u.jsx)("small",{children:t.rel}),Object(u.jsx)(X.a,{icon:Object(u.jsx)(x.a,{icon:"play"}),onClick:function(){return c=t.name,void k.a.get("/api/v1/anime/".concat(c)).then((function(t){d({name:t.data[0].name,url:t.data[0].url}),e.history.push("/anime/".concat(t.data[0].name.replace(/\s/g,"-")))})).catch((function(e){return console.log(e)}));var c}})]})})]})})})):""]})]})};c(424),c(425);var te=function(){var e=Object(n.useState)({name:"",url:""}),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(i.a)(s,2),l=r[0],b=r[1],O=Object(n.useState)(),h=Object(i.a)(O,2),x=h[0],m=h[1];return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(j.a,{children:Object(u.jsx)(o.c,{children:Object(u.jsx)(v.Provider,{value:{animeContext:c,setAnimeContext:a},children:Object(u.jsx)(p.Provider,{value:{keyword:l,setKeyword:b},children:Object(u.jsxs)(f.Provider,{value:{info:x,setInfo:m},children:[Object(u.jsx)(d,{exact:!0,path:"/",component:Z}),Object(u.jsx)(d,{exact:!0,path:"/latest",component:_}),Object(u.jsx)(d,{exact:!0,path:"/popular",component:ee}),Object(u.jsx)(d,{exact:!0,path:"/anime/:name",component:U}),Object(u.jsx)(d,{exact:!0,path:"/anime/:name/:ep",component:V})]})})})})})})},ce=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,451)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(te,{}),document.getElementById("root")),ce()}},[[426,1,2]]]);
//# sourceMappingURL=main.19dec9f5.chunk.js.map