(this.webpackJsonpanimeworldz=this.webpackJsonpanimeworldz||[]).push([[0],{108:function(e,t,a){},133:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(13),r=a.n(i),s=(a(108),a(12)),o=a(97),l=a(211),j=a(76),d=a(175),b=a(192),u=a(50),h=a(16),p=a(178),O=a(187),x=a(188),m=a(189),f=a(181),g=a(190),v=a(186),y=a(179),w=a(185),k=a(183),N=a(184),C=a(180),S=a(182),W=a(2),A=Object(d.a)((function(e){return{closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:"#e6e6e6"}}}));function I(e){var t=e.isOpen,a=e.handleWatchClick,c=e.handleClose,n=e.data,i=Object(h.a)(),r=A(),s=Object(p.a)(i.breakpoints.down("sm"));return Object(W.jsx)("div",{children:null!==n?Object(W.jsxs)(y.a,{fullScreen:s,open:t,onClose:c,"aria-labelledby":"responsive-dialog-title",PaperProps:{style:{backgroundImage:"linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.3) 100%),url(".concat(n.img,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",color:"#e6e6e6"}},children:[Object(W.jsxs)(C.a,{id:"responsive-dialog-title",children:[n.title,Object(W.jsx)(f.a,{"aria-label":"close",className:r.closeButton,onClick:c,children:Object(W.jsx)(S.a,{})})]}),Object(W.jsx)(k.a,{children:Object(W.jsxs)(N.a,{style:{fontWeight:"bolder",color:"#e6e6e6"},children:["Other Names: ",n.other_name]})}),Object(W.jsx)(k.a,{children:Object(W.jsxs)(N.a,{style:{fontWeight:"bolder",color:"#e6e6e6"},children:["Genres: ",n.genre.join(", ")]})}),Object(W.jsxs)(k.a,{children:[Object(W.jsx)(N.a,{style:{fontWeight:"bolder",color:"#e6e6e6"},children:"Plot Summary :"}),Object(W.jsx)(N.a,{style:{fontWeight:"bolder",color:"#e6e6e6"},children:n.plot_summary})]}),Object(W.jsx)(k.a,{children:Object(W.jsxs)(N.a,{style:{fontWeight:"bolder",color:"#e6e6e6"},children:["Released: ",n.released]})}),Object(W.jsx)(k.a,{children:Object(W.jsxs)(N.a,{style:{fontWeight:"bolder",color:"#e6e6e6"},children:["Status: ",n.status]})}),Object(W.jsx)(k.a,{children:Object(W.jsxs)(N.a,{style:{fontWeight:"bolder",color:"#e6e6e6"},children:["Episodes: ",n.episode_count]})}),Object(W.jsx)(k.a,{children:Object(W.jsxs)(N.a,{style:{fontWeight:"bolder",color:"#e6e6e6"},children:["Type: ",n.type]})}),Object(W.jsx)(w.a,{children:Object(W.jsx)(v.a,{autoFocus:!0,variant:"contained",onClick:function(){return a(n.slug)},color:"default",fullWidth:!0,children:"Start Watching"})})]}):""})}var B=a(19),L=a.n(B),P=a(14),E=Object(d.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper,height:"330px"},imageList:{flexWrap:"nowrap",transform:"translateZ(0)"},title:{color:e.palette.default},titleBar:{background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},img:{"&:hover":{opacity:.8,transform:"scale(1.1)",cursor:"pointer"}}}}));var R=function(e){var t,a=e.Anime,c=Object(h.a)(),i=Object(p.a)(c.breakpoints.down("xs")),r=Object(p.a)(c.breakpoints.down("sm")),o=Object(p.a)(c.breakpoints.down("md"));t=i?2:r?3:o?4:6;var l=E(),j=Object(P.f)(),d=n.a.useState(null),b=Object(s.a)(d,2),u=b[0],v=b[1],y=n.a.useState(!1),w=Object(s.a)(y,2),k=w[0],N=w[1],C=function(e){L.a.post("/api/v1/anime",{uri:e}).then((function(e){v(e.data)})).catch((function(e){return console.log(e)}))};return Object(W.jsx)("div",{className:l.root,children:0!==a.length?Object(W.jsxs)(O.a,{className:l.imageList,cols:t,children:[a.map((function(e){return Object(W.jsxs)(x.a,{className:l.img,style:{height:"300px",padding:"12px"},children:[Object(W.jsx)("img",{src:e.img,alt:e.name,onClick:function(){return function(e){C(e.link),N(!0)}(e)}}),Object(W.jsx)(m.a,{title:e.name,subtitle:e.release,classes:{root:l.titleBar,title:l.title},actionIcon:Object(W.jsx)(f.a,{onClick:function(){return function(e){N(!1),j.push({pathname:"/anime/".concat(e.link.replace(/\/category\//g,""))})}(e)},children:Object(W.jsx)(g.a,{className:l.title})})})]},e.img)})),null!==u?Object(W.jsx)(I,{isOpen:k,handleWatchClick:function(e){N(!1),j.push({pathname:"/anime/".concat(e)})},data:u,handleClose:function(){N(!1),v(null)}}):""]}):Object(W.jsx)("div",{style:{height:400}})})},D=Object(d.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},imageList:{flexWrap:"nowrap",transform:"translateZ(0)"},title:{color:e.palette.default},titleBar:{background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},img:{"&:hover":{opacity:.8,transform:"scale(1.1)",cursor:"pointer"}}}}));var M=function(e){var t,a=e.Anime,c=Object(h.a)(),i=Object(P.f)(),r=D(),o=n.a.useState(null),l=Object(s.a)(o,2),j=l[0],d=l[1],b=n.a.useState(!1),u=Object(s.a)(b,2),v=u[0],y=u[1],w=Object(p.a)(c.breakpoints.down("xs")),k=Object(p.a)(c.breakpoints.down("sm")),N=Object(p.a)(c.breakpoints.down("md"));t=w?2:k?3:N?4:6;var C=function(e){L.a.post("/api/v1/anime",{uri:e}).then((function(e){d(e.data)})).catch((function(e){return console.log(e)}))};return Object(W.jsx)("div",{className:r.root,style:{height:330},children:0!==a.length?Object(W.jsxs)(O.a,{className:r.imageList,cols:t,children:[a.map((function(e){return Object(W.jsxs)(x.a,{className:r.img,style:{height:"300px",padding:"12px"},children:[Object(W.jsx)("img",{src:e.img,alt:e.name,onClick:function(){return function(e){C(e.href),y(!0)}(e)}}),Object(W.jsx)(m.a,{title:e.name,subtitle:e.recent_episode,classes:{root:r.titleBar,title:r.title},actionIcon:Object(W.jsx)(f.a,{"aria-label":"star ".concat(e.name),onClick:function(){return function(e){y(!1),i.push({pathname:"/anime/".concat(e.href.replace(/\/category\//g,"")),state:{ep:e.recent_episode.replace(/Episode /g,"")}})}(e)},children:Object(W.jsx)(g.a,{className:r.title})})})]},e.img)})),Object(W.jsx)(I,{isOpen:v,handleWatchClick:function(e){y(!1),i.push({pathname:"/anime/".concat(e)})},data:j,handleClose:function(){y(!1),d(null)}})]}):Object(W.jsx)("div",{style:{height:400}})})},T=a(213),F=a(191),_=Object(d.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},imageList:{flexWrap:"nowrap",transform:"translateZ(0)"},title:{color:e.palette.default},titleBar:{background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"}}}));var H=function(e){var t,a=e.Anime,c=Object(h.a)(),n=_(),i=Object(p.a)(c.breakpoints.down("xs")),r=Object(p.a)(c.breakpoints.down("sm")),s=Object(p.a)(c.breakpoints.down("md"));return t=i?2:r?3:s?4:6,Object(W.jsx)("div",{className:"root",children:Object(W.jsx)(O.a,{className:n.imageList,cols:t,children:a.map((function(e){return Object(W.jsxs)(x.a,{style:{height:300,padding:"12px"},children:[Object(W.jsx)("img",{src:e.img,alt:e.name}),Object(W.jsx)(m.a,{title:e.title,subtitle:"Airing: ".concat(new Date(e.airing_time).toLocaleTimeString()),classes:{root:n.titleBar,title:n.title},actionIcon:Object(W.jsx)(v.a,{children:"Ep ".concat(e.episode)})})]},e.img)}))})})};var G=function(e){var t=e.schedule,a=Object(c.useState)((new Date).getDay()),n=Object(s.a)(a,2),i=n[0],r=n[1],o=function(e){var t=e.children,a=e.value,c=e.index;return Object(W.jsx)("div",{role:"tabpanel",hidden:a!==c,id:"vertical-tabpanel-".concat(c),"aria-labelledby":"vertical-tab-".concat(c),style:{padding:"10px"},children:a===c&&Object(W.jsx)("h1",{children:t})})},l=Object(d.a)((function(e){return{root:{backgroundColor:e.palette.background.paper}}}))();return Object(W.jsxs)("div",{className:l.root,children:[Object(W.jsxs)(T.a,{value:i,onChange:function(e,t){r(t)},variant:"scrollable",scrollButtons:"auto",children:[Object(W.jsx)(F.a,{label:"Sunday"}),Object(W.jsx)(F.a,{label:"Monday"}),Object(W.jsx)(F.a,{label:"Tuesday"}),Object(W.jsx)(F.a,{label:"Wednesday"}),Object(W.jsx)(F.a,{label:"Thrusday"}),Object(W.jsx)(F.a,{label:"Friday"}),Object(W.jsx)(F.a,{label:"Saturday"})]}),0!==Object.keys(t).length?Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(o,{value:i,index:0,children:Object(W.jsx)(H,{Anime:t.sunday})}),Object(W.jsx)(o,{value:i,index:1,children:Object(W.jsx)(H,{Anime:t.monday})}),Object(W.jsx)(o,{value:i,index:2,children:Object(W.jsx)(H,{Anime:t.tuesday})}),Object(W.jsx)(o,{value:i,index:3,children:Object(W.jsx)(H,{Anime:t.wednesday})}),Object(W.jsx)(o,{value:i,index:4,children:Object(W.jsx)(H,{Anime:t.thursday})}),Object(W.jsx)(o,{value:i,index:5,children:Object(W.jsx)(H,{Anime:t.friday})}),Object(W.jsx)(o,{value:i,index:6,children:Object(W.jsx)(H,{Anime:t.saturday})})]}):""]})},z=Object(c.createContext)(),K=Object(c.createContext)(null),Z=Object(c.createContext)(!0);var J=function(){var e=Object(c.useContext)(z).popular,t=Object(c.useState)([]),a=Object(s.a)(t,2),n=a[0],i=a[1],r=Object(c.useContext)(K).schedule,o=Object(d.a)({root:{maxWidth:"100vw"},title:{padding:"10px",flexGrow:1},grids:{display:"flex"},spinner:{padding:"5px"}});Object(c.useEffect)((function(){L.a.get("/api/v1/anime/recent/1",{}).then((function(e){i(e.data)})).catch((function(e){return console.log(e)}))}),[]);var l=o();return Object(W.jsx)("div",{className:l.root,children:Object(W.jsxs)(b.a,{item:!0,container:!0,spacing:2,children:[Object(W.jsx)(b.a,{item:!0,xs:12,className:l.grids,children:Object(W.jsx)(u.a,{className:l.title,variant:"h5",children:"Most Popular Anime"})}),Object(W.jsx)(R,{Anime:e}),Object(W.jsx)(b.a,{item:!0,xs:12,className:l.grids,children:Object(W.jsx)(u.a,{className:l.title,variant:"h5",children:"Most Recent Anime"})}),Object(W.jsx)(M,{Anime:n}),Object(W.jsxs)(b.a,{item:!0,xs:12,children:[Object(W.jsx)(u.a,{className:l.title,variant:"h5",children:"Schedule"}),Object(W.jsx)(G,{schedule:r})]})]})})},U=a(9),Y=a(198),q=a(199),Q=a(136),V=a(200),X=a(201),$=a(202),ee=a(203),te=a(204),ae=a(215),ce=a(216),ne=a(214),ie=a(217),re=a(15),se=a(196),oe=a(197),le=a(205),je=a(206),de=a(193),be=a(195),ue=a(194),he=Object(d.a)((function(e){return{root:{display:"flex",Height:"100px",width:"400px",padding:"5px","&:hover":{opacity:.8,cursor:"pointer"}},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:100,height:100},playIcon:{height:38,width:38}}}));function pe(e){var t=e.results,a=e.handleResetKeyword,c=he(),n=Object(P.f)();return Object(W.jsx)(W.Fragment,{children:t.map((function(e){return Object(W.jsxs)(de.a,{className:c.root,onClick:function(){return t=e.link,n.push({pathname:"/anime/".concat(t.replace(/\/category\//g,"")),state:{ep:1}}),void a();var t},children:[Object(W.jsx)(ue.a,{className:c.cover,image:e.img,title:e.title}),Object(W.jsx)("div",{className:c.details,children:Object(W.jsxs)(be.a,{className:c.content,children:[Object(W.jsx)(u.a,{children:e.title}),Object(W.jsx)(u.a,{variant:"subtitle1",color:"textSecondary",children:e.released})]})})]})}))})}var Oe=Object(d.a)((function(e){var t;return{root:(t={maxHeight:"400px",maxWidth:"500px",position:"fixed"},Object(U.a)(t,e.breakpoints.down("xs"),{right:10,top:60}),Object(U.a)(t,"right",80),Object(U.a)(t,"zIndex",100),Object(U.a)(t,"top",70),t),paper:{width:"100%",height:"100%"},btnMore:{bottom:0}}}));var xe=function(e){var t,a=e.results,c=e.handleResetKeyword,n=Oe();return 0!==a.length&&(t=a.slice(0,4)),Object(W.jsx)(W.Fragment,{children:t?Object(W.jsxs)("div",{className:n.root,children:[Object(W.jsx)(j.a,{className:n.paper,elevation:10,children:Object(W.jsx)(pe,{results:t,handleResetKeyword:c})}),Object(W.jsx)(v.a,{fullWidth:!0,variant:"contained",color:"secondary",className:n.btn,children:"See More"})]}):""})},me=240,fe=Object(d.a)((function(e){var t,a;return a={root:{display:"flex"},drawer:Object(U.a)({},e.breakpoints.up("sm"),{width:me,flexShrink:0}),appBar:Object(U.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(me,"px)"),marginLeft:me}),menuButton:Object(U.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:me},content:{flexGrow:1,padding:e.spacing(3)},page:(t={},Object(U.a)(t,e.breakpoints.down("xs"),{width:"100%"}),Object(U.a)(t,"width","calc(100% - ".concat(me,"px)")),t)},Object(U.a)(a,"drawer",{width:me}),Object(U.a)(a,"active",{background:"rgba(255, 255, 255, 0.16)"}),Object(U.a)(a,"title",{padding:15,letterSpacing:"0.1rem"}),Object(U.a)(a,"appbar",{width:"calc(100% - ".concat(me,"px)")}),Object(U.a)(a,"time",Object(U.a)({flexGrow:1},e.breakpoints.down("xs"),{display:"none"})),Object(U.a)(a,"footer",{position:"absolute",bottom:0,left:"40%"}),Object(U.a)(a,"search",Object(U.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(re.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(re.a)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"})),Object(U.a)(a,"searchIcon",{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}),Object(U.a)(a,"inputInput",Object(U.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})),a}));var ge=function(e){var t=e.window,a=e.children,i=Object(h.a)(),r=fe(),o=Object(P.f)(),l=Object(P.g)(),j=Object(c.useState)([]),d=Object(s.a)(j,2),b=d[0],p=d[1],O=Object(c.useState)((new Date).toLocaleTimeString()),x=Object(s.a)(O,2),m=x[0],g=x[1],v=Object(c.useContext)(Z),y=v.darkMode,w=v.setDarkMode,k=Object(c.useState)(""),N=Object(s.a)(k,2),C=N[0],S=N[1],A=n.a.useState(!1),I=Object(s.a)(A,2),B=I[0],E=I[1];Object(c.useEffect)((function(){setInterval((function(){g((new Date).toLocaleTimeString())}),1e3)}),[]);var R=[{text:"HomePage",icon:Object(W.jsx)(se.a,{}),path:"/"},{text:"Waifu Pics",icon:Object(W.jsx)(oe.a,{}),path:"/waifu"}],D=Object(W.jsxs)("div",{children:[Object(W.jsx)("div",{children:Object(W.jsx)(u.a,{variant:"h5",className:r.title,children:"ANIMEWORLD-Z"})}),Object(W.jsx)(Y.a,{}),Object(W.jsx)(q.a,{children:R.map((function(e,t){return Object(W.jsxs)(Q.a,{button:!0,onClick:function(){return o.push(e.path)},className:l.pathname===e.path?r.active:null,children:[Object(W.jsx)(V.a,{children:e.icon}),Object(W.jsx)(X.a,{primary:e.text})]},t)}))}),Object(W.jsx)("div",{className:r.footer,children:Object(W.jsx)(u.a,{variant:"h6",className:r.version,children:"v2.1"})})]}),M=function(){E(!B)};Object(c.useEffect)((function(){var e=setTimeout((function(){C?L.a.get("/api/v1/anime/".concat(C)).then((function(e){p(e.data)})).catch((function(e){return console.log(e)})):p([])}),1e3);return function(){return clearTimeout(e)}}),[C]);var T=void 0!==t?function(){return t().document.body}:void 0;return Object(W.jsxs)("div",{className:r.root,children:[Object(W.jsx)($.a,{}),""!==C?Object(W.jsx)(xe,{results:b,handleResetKeyword:function(){S("")}}):"",Object(W.jsx)(ee.a,{className:r.appBar,color:"dafault",children:Object(W.jsxs)(te.a,{children:[Object(W.jsx)(f.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:M,className:r.menuButton,children:Object(W.jsx)(le.a,{})}),Object(W.jsx)(u.a,{className:r.time,children:m}),Object(W.jsxs)("div",{className:r.search,children:[Object(W.jsx)("div",{className:r.searchIcon,children:Object(W.jsx)(je.a,{})}),Object(W.jsx)(ae.a,{placeholder:"Search\u2026",classes:{root:r.inputRoot,input:r.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){var t=e.target.value;S(t)},value:C})]}),Object(W.jsx)(ce.a,{checked:y,onChange:function(e){w(e.target.checked)}})]})}),Object(W.jsxs)("nav",{className:r.drawer,children:[Object(W.jsx)(ne.a,{smUp:!0,implementation:"css",children:Object(W.jsx)(ie.a,{container:T,variant:"temporary",anchor:"rtl"===i.direction?"right":"left",open:B,onClose:M,classes:{paper:r.drawerPaper},ModalProps:{keepMounted:!0},children:D})}),Object(W.jsx)(ne.a,{xsDown:!0,implementation:"css",children:Object(W.jsx)(ie.a,{classes:{paper:r.drawerPaper},variant:"permanent",open:!0,children:D})})]}),Object(W.jsxs)("div",{className:r.page,children:[Object(W.jsx)("div",{className:r.toolbar}),a]})]})},ve=a(98),ye=a(207),we=a(94),ke=Object(d.a)((function(e){var t,a,c;return{container:{},detailCover:(t={},Object(U.a)(t,e.breakpoints.up("md"),{display:"flex",flexDirection:"row",justifyContent:"center",textAlign:"left"}),Object(U.a)(t,"justifyContent","space-around"),Object(U.a)(t,"alignItems","center"),Object(U.a)(t,"display","flex"),Object(U.a)(t,"flexDirection","column"),Object(U.a)(t,"textAlign","center"),t),image:{position:"absolute",marginRight:"auto",width:"100%",maxHeight:"50%",filter:"blur(90px)"},animeInfoCover:{width:"70%",height:"500px"},cover:(a={},Object(U.a)(a,e.breakpoints.down("sm"),{width:"100%"}),Object(U.a)(a,"objectFit","cover"),Object(U.a)(a,"filter","blur(0px)"),Object(U.a)(a,"padding","20px"),Object(U.a)(a,"height","100%"),a),title:{filter:"blur(0px)"},detail:{filter:"blur(0px)"},episode:{filter:"blur(0px)",textAlign:"center"},frame:Object(U.a)({},e.breakpoints.down("sm"),{width:"420px",height:"290px"}),epList:{filter:"blur(0px)",marginLeft:"20%",width:"50vw",maxHeight:"400px",overflowY:"scroll",padding:"5px"},episodeButton:(c={},Object(U.a)(c,e.breakpoints.down("xs"),{width:"100%"}),Object(U.a)(c,"filter","blur(0px)"),Object(U.a)(c,"width","120px"),c),spinner:{filter:"blur(0px)",position:"absolute",left:"45%",top:"50%"}}}));var Ne=function(e){var t=Object(c.useState)(1),a=Object(s.a)(t,2),n=a[0],i=a[1],r=Object(c.useState)(),o=Object(s.a)(r,2),l=o[0],d=o[1],b=Object(c.useState)(!1),h=Object(s.a)(b,2),p=h[0],O=h[1],x=Object(P.h)().slug,m=Object(c.useState)(),f=Object(s.a)(m,2),g=f[0],y=f[1],w=Object(c.useState)(),k=Object(s.a)(w,2),N=k[0],C=k[1],S=ke();return Object(c.useEffect)((function(){L.a.post("/api/v1/anime",{uri:"/category/"+x},{onDownloadProgress:O(!0)}).then((function(e){O(!1),d(e.data)})).catch((function(e){return console.log(e)})),e.location.state&&i(parseInt(e.location.state.ep))}),[x]),Object(c.useEffect)((function(){L.a.post("/api/v1/anime/episode",{slug:x,ep:n}).then((function(e){y(e.data),C(e.data.links)})).catch((function(e){return console.log(e)}))}),[x,n]),Object(W.jsxs)(j.a,{style:{maxWidth:"100vw",maxHeight:"200vh"},children:[Object(W.jsx)("div",{children:p?Object(W.jsx)(ye.a,{className:S.spinner,color:"secondary"}):l?Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("img",{className:S.image,src:l.img}),Object(W.jsxs)("div",{className:S.detailCover,children:[Object(W.jsx)("div",{className:S.animeInfoCover,children:Object(W.jsx)("img",{className:S.cover,src:l.img})}),Object(W.jsxs)("div",{children:[Object(W.jsx)(u.a,{variant:"h5",className:S.title,children:l.title}),Object(W.jsxs)(u.a,{className:S.detail,children:[Object(W.jsxs)("span",{style:{fontStyle:"italic"},children:[Object(W.jsx)("span",{style:{fontWeight:"bold"},children:"Other Names:"}),l.other_name," ",Object(W.jsx)("br",{})]}),l.plot_summary," ",Object(W.jsx)("br",{}),Object(W.jsx)("span",{style:{fontWeight:"bold"},children:"Genre: "}),l.genre.join(", ")," ",Object(W.jsx)("br",{}),Object(W.jsx)("span",{style:{fontWeight:"bold"},children:"Released: "}),l.released," ",Object(W.jsx)("br",{}),Object(W.jsx)("span",{style:{fontWeight:"bold"},children:"Status: "}),l.status," ",Object(W.jsx)("br",{}),Object(W.jsx)("span",{style:{fontWeight:"bold"},children:"Type: "}),l.type," ",Object(W.jsx)("br",{})]})]})]})]}):""}),g?Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)("div",{className:S.episode,children:[Object(W.jsx)("br",{}),Object(W.jsxs)(u.a,{variant:"h4",children:["Watch ",g.name," Episode ",g.episode]}),Object(W.jsx)("br",{}),Object(W.jsx)(we.a,{url:N?N[0].link:"",width:"1200px",height:"680px",display:"initial",position:"relative",className:S.frame,frameBorder:"0",gesture:"media",allow:"fullscreen",scrolling:"no",styles:{padding:"10px"}}),Object(W.jsxs)(u.a,{children:["Please"," ",Object(W.jsx)("a",{href:"",onClick:function(){return window.location.reload()},style:{textDecoration:"None",color:"lightcoral"},children:"Reload"})," ","if the video does not loading"]})]}),Object(W.jsx)(Y.a,{}),Object(W.jsx)(u.a,{variant:"h4",style:{textAlign:"center"},children:"Episodes"}),Object(W.jsx)("div",{className:S.epList,children:l?Object(ve.a)(Array(parseInt(l.episode_count))).map((function(e,t){return Object(W.jsxs)(v.a,{variant:n===t+1?"contained":"outlined",color:n===t+1?"secondary":"",className:S.episodeButton,onClick:function(){i(t+1)},children:["Episode ",t+1]})})):""})]}):""]})},Ce=a(212),Se=a(208),We=a(209),Ae=a(210),Ie=a(95),Be=Object(d.a)((function(e){return{fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(4)},select:{position:"fixed",bottom:e.spacing(2),right:e.spacing(13),width:"150px"}}}));var Le=function(){var e=Object(c.useRef)(null),t=Object(c.useState)([]),a=Object(s.a)(t,2),n=a[0],i=a[1],r=Object(c.useState)(0),o=Object(s.a)(r,2),l=o[0],j=o[1],d=Object(c.useState)("waifu"),b=Object(s.a)(d,2),u=b[0],h=b[1],p=Be();Object(c.useEffect)((function(){L.a.post("https://api.waifu.pics/many/sfw/".concat(u),{}).then((function(e){return i(e.data)})).catch((function(e){return console.log(e)}))}),[l,u]);var O=[];return 0!==n.length&&n.files.map((function(e){O.push({src:e,width:4,height:4})})),Object(W.jsxs)("div",{className:p.root,ref:e,onScroll:function(){if(e.current){var t=e.current,a=t.scrollTop,c=t.scrollHeight;a+t.clientHeight===c&&console.log("reached bottom")}},children:[Object(W.jsx)(Ie.a,{photos:O||""}),Object(W.jsxs)(Ce.a,{value:u,onChange:function(e){h(e.target.value)},className:p.select,color:"secondary",variant:"outlined",autoFocus:!0,children:[Object(W.jsx)(Se.a,{value:"waifu",children:"Waifu"}),Object(W.jsx)(Se.a,{value:"neko",children:"Neko"}),Object(W.jsx)(Se.a,{value:"megumin",children:"Megumin"}),Object(W.jsx)(Se.a,{value:"cuddle",children:"Cuddle"}),Object(W.jsx)(Se.a,{value:"pat",children:"Pat"}),Object(W.jsx)(Se.a,{value:"slap",children:"Slap"}),Object(W.jsx)(Se.a,{value:"dance",children:"Dance"})]}),Object(W.jsx)(We.a,{color:"secondary","aria-label":"refresh",className:p.fab,onClick:function(){return j((function(e){return e+1}))},children:Object(W.jsx)(Ae.a,{})})]})};var Pe=function(){var e=Object(c.useState)(!0),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)({}),r=Object(s.a)(i,2),d=r[0],b=r[1],u=Object(c.useState)([]),h=Object(s.a)(u,2),p=h[0],O=h[1],x=Object(o.a)({palette:{type:a?"dark":"light"}});Object(c.useEffect)((function(){f(),m()}),[]);var m=function(){L.a.get("/api/v1/anime/popular/1",{}).then((function(e){O(e.data)})).catch((function(e){return console.log(e)}))},f=function(){L.a.post("/api/v1/schedule",{day:""}).then((function(e){b(e.data)})).catch((function(e){return console.log(e)}))};return Object(W.jsx)(l.a,{theme:x,children:Object(W.jsx)(j.a,{children:Object(W.jsx)(Z.Provider,{value:{darkMode:a,setDarkMode:n},children:Object(W.jsx)(K.Provider,{value:{schedule:d},children:Object(W.jsx)(z.Provider,{value:{popular:p},children:Object(W.jsx)(ge,{children:Object(W.jsxs)(P.c,{children:[Object(W.jsx)(P.a,{exact:!0,path:"/",component:J}),Object(W.jsx)(P.a,{exact:!0,path:"/anime/:slug",component:Ne}),Object(W.jsx)(P.a,{exact:!0,path:"/waifu",component:Le})]})})})})})})})},Ee=a(37);r.a.render(Object(W.jsx)(n.a.StrictMode,{children:Object(W.jsx)(Ee.a,{children:Object(W.jsx)(Pe,{})})}),document.getElementById("root"))}},[[133,1,2]]]);