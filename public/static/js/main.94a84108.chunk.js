(this["webpackJsonpvideo-games-ui"]=this["webpackJsonpvideo-games-ui"]||[]).push([[0],{18:function(e,t,a){e.exports=a(30)},23:function(e,t,a){},24:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),u=a.n(l),c=(a(23),a(24),a(6)),m=a(7),o=a(1),i=function(){return r.a.createElement("nav",null,r.a.createElement(c.b,{to:"/",className:"link"},"Home"),r.a.createElement(c.b,{to:"/VideoGames",className:"link"},"Video Games"),r.a.createElement(c.b,{to:"/BoardGames",className:"link"},"Board Games"),r.a.createElement(c.b,{to:"/CardGames",className:"link"},"Card Games"),r.a.createElement(c.b,{to:"/OutdoorGames",className:"link"},"Outdoor Games"),r.a.createElement(c.b,{to:"/MindGames",className:"link"},"Mind Games"))},s=function(e){var t,a=e.game,n=e.deleteGame,l=e.updateGame;return t=1===parseInt(a.num_players_max)?r.a.createElement("p",null,"Single Player"):a.num_players_min===a.num_players_max?r.a.createElement("p",null,"Players: ",a.num_players_max):r.a.createElement("p",null,"Players: ",a.num_players_min,"-",a.num_players_max),r.a.createElement("div",null,r.a.createElement("h4",null,a.title),r.a.createElement("p",null,a.platform),t,r.a.createElement("p",null,a.desc),r.a.createElement("button",{onClick:function(){return n(a._id)}},"Delete"),r.a.createElement("button",{onClick:function(){return l(a)}},"Edit"))},p=function(e){var t=e.refreshGames,a=Object(n.useState)(""),l=Object(o.a)(a,2),u=l[0],c=l[1],m=Object(n.useState)(""),i=Object(o.a)(m,2),s=i[0],p=i[1],d=Object(n.useState)(""),h=Object(o.a)(d,2),f=h[0],E=h[1],v=Object(n.useState)(""),b=Object(o.a)(v,2),y=b[0],g=b[1],O=Object(n.useState)(""),G=Object(o.a)(O,2),j=G[0],_=G[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={title:u,platform:s,num_players_min:f,num_players_max:y,desc:j};fetch("".concat("","/api/video-games"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(t).then((function(){return c("")})).then((function(){return p("")})).then((function(){return E("")})).then((function(){return g("")})).then((function(){return _("")}))}},r.a.createElement("h3",null,"Add Video Game"),r.a.createElement("input",{type:"text",value:u,placeholder:"Game Title",onChange:function(e){var t=e.target;return c(t.value)},required:!0}),r.a.createElement("input",{type:"text",value:s,placeholder:"Platform",onChange:function(e){var t=e.target;return p(t.value)},required:!0}),r.a.createElement("input",{type:"number",value:f,placeholder:"Minimun Players",onChange:function(e){var t=e.target;return E(t.value)},min:"1",required:!0}),r.a.createElement("input",{type:"number",value:y,placeholder:"Max Players",onChange:function(e){var t=e.target;return g(t.value)},min:f,required:!0}),r.a.createElement("input",{type:"text",value:j,placeholder:"Game Description",onChange:function(e){var t=e.target;return _(t.value)},required:!0}),r.a.createElement("input",{type:"submit",value:"Add to Games"}))},d=function(e){var t=e.refreshGames,a=e.game,l=e.id,u=Object(n.useState)(a.title),c=Object(o.a)(u,2),m=c[0],i=c[1],s=Object(n.useState)(a.platform),p=Object(o.a)(s,2),d=p[0],h=p[1],f=Object(n.useState)(a.num_players_min),E=Object(o.a)(f,2),v=E[0],b=E[1],y=Object(n.useState)(a.num_players_max),g=Object(o.a)(y,2),O=g[0],G=g[1],j=Object(n.useState)(a.desc),_=Object(o.a)(j,2),C=_[0],S=_[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={title:m,platform:d,num_players_min:v,num_players_max:O,desc:C};fetch("".concat("","/api/video-games/").concat(l),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(t).then((function(){return i("")})).then((function(){return h("")})).then((function(){return b("")})).then((function(){return G("")})).then((function(){return S("")}))}},r.a.createElement("h3",null,"Edit Video Game"),r.a.createElement("input",{type:"text",value:m,placeholder:"Game Title",onChange:function(e){var t=e.target;return i(t.value)},required:!0}),r.a.createElement("input",{type:"text",value:d,placeholder:"Platform",onChange:function(e){var t=e.target;return h(t.value)},required:!0}),r.a.createElement("input",{type:"number",value:v,placeholder:"Minimun Players",onChange:function(e){var t=e.target;return b(t.value)},min:"1",required:!0}),r.a.createElement("input",{type:"number",value:O,placeholder:"Max Players",onChange:function(e){var t=e.target;return G(t.value)},min:v,required:!0}),r.a.createElement("input",{type:"text",value:C,placeholder:"Game Description",onChange:function(e){var t=e.target;return S(t.value)},required:!0}),r.a.createElement("input",{type:"submit",value:"Update Game"}),r.a.createElement("input",{type:"button",value:"Cancel Edit",onClick:t}))},h=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1],u=Object(n.useState)(!0),c=Object(o.a)(u,2),m=c[0],h=c[1],f=Object(n.useState)(),E=Object(o.a)(f,2),v=E[0],b=E[1];Object(n.useEffect)((function(){y()}),[]);var y=function(){fetch("".concat("","/api/video-games")).then((function(e){return e.json()})).then((function(e){return l(e)})).then((function(){return h(!0)}))},g=function(e){fetch("".concat("","/api/video-games/").concat(e),{method:"DELETE"}).then((function(e){return e.json()})).then(y)},O=function(e){h(!1),b(e)},G=a.map((function(e){return r.a.createElement(s,{key:e._id,game:e,deleteGame:g,updateGame:O})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,null),r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"Video Game Collection"),function(){var e;if(m)e=r.a.createElement(p,{key:"createForm",refreshGames:y});else{var t=v;console.log("Data's ID: ".concat(t._id)),e=r.a.createElement(d,{key:t._id,id:t._id,game:t,refreshGames:y})}return e}(),r.a.createElement("main",null,G)))},f=function(e){var t,a=e.game,n=e.deleteGame,l=e.updateGame;return t=1===parseInt(a.num_players_max)?r.a.createElement("p",null,"Single Player"):a.num_players_min===a.num_players_max?r.a.createElement("p",null,"Players: ",a.num_players_max):r.a.createElement("p",null,"Players: ",a.num_players_min,"-",a.num_players_max),r.a.createElement("div",null,r.a.createElement("h4",null,a.name),t,r.a.createElement("p",null,a.desc),r.a.createElement("button",{onClick:function(){return n(a._id)}},"Delete"),r.a.createElement("button",{onClick:function(){return l(a)}},"Edit"))},E=function(e){var t=e.refreshGames,a=Object(n.useState)(""),l=Object(o.a)(a,2),u=l[0],c=l[1],m=Object(n.useState)(""),i=Object(o.a)(m,2),s=i[0],p=i[1],d=Object(n.useState)(""),h=Object(o.a)(d,2),f=h[0],E=h[1],v=Object(n.useState)(""),b=Object(o.a)(v,2),y=b[0],g=b[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={name:u,num_players_min:s,num_players_max:f,desc:y};fetch("".concat("","/api/board-games"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(t).then((function(){return c("")})).then((function(){return p("")})).then((function(){return E("")})).then((function(){return g("")}))}},r.a.createElement("h3",null,"Add Board Game"),r.a.createElement("input",{type:"text",value:u,placeholder:"Game Name",onChange:function(e){var t=e.target;return c(t.value)},required:!0}),r.a.createElement("input",{type:"number",value:s,placeholder:"Minimun Players",onChange:function(e){var t=e.target;return p(t.value)},min:"1",required:!0}),r.a.createElement("input",{type:"number",value:f,placeholder:"Max Players",onChange:function(e){var t=e.target;return E(t.value)},min:s,required:!0}),r.a.createElement("input",{type:"text",value:y,placeholder:"Game Description",onChange:function(e){var t=e.target;return g(t.value)},required:!0}),r.a.createElement("input",{type:"submit",value:"Add to Games"}))},v=function(e){var t=e.refreshGames,a=e.game,l=e.id,u=Object(n.useState)(a.name),c=Object(o.a)(u,2),m=c[0],i=c[1],s=Object(n.useState)(a.num_players_min),p=Object(o.a)(s,2),d=p[0],h=p[1],f=Object(n.useState)(a.num_players_max),E=Object(o.a)(f,2),v=E[0],b=E[1],y=Object(n.useState)(a.desc),g=Object(o.a)(y,2),O=g[0],G=g[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={name:m,num_players_min:d,num_players_max:v,desc:O};fetch("".concat("","/api/board-games/").concat(l),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(t).then((function(){return i("")})).then((function(){return h("")})).then((function(){return b("")})).then((function(){return G("")}))}},r.a.createElement("h3",null,"Add Board Game"),r.a.createElement("input",{type:"text",value:m,placeholder:"Game Name",onChange:function(e){var t=e.target;return i(t.value)},required:!0}),r.a.createElement("input",{type:"number",value:d,placeholder:"Minimun Players",onChange:function(e){var t=e.target;return h(t.value)},min:"1",required:!0}),r.a.createElement("input",{type:"number",value:v,placeholder:"Max Players",onChange:function(e){var t=e.target;return b(t.value)},min:d,required:!0}),r.a.createElement("input",{type:"text",value:O,placeholder:"Game Description",onChange:function(e){var t=e.target;return G(t.value)},required:!0}),r.a.createElement("input",{type:"submit",value:"Update Game"}),r.a.createElement("input",{type:"button",value:"Cancel Edit",onClick:t}))},b=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1],u=Object(n.useState)(!0),c=Object(o.a)(u,2),m=c[0],s=c[1],p=Object(n.useState)(),d=Object(o.a)(p,2),h=d[0],b=d[1];Object(n.useEffect)((function(){y()}),[]);var y=function(){fetch("".concat("","/api/board-games")).then((function(e){return e.json()})).then((function(e){return l(e)})).then((function(){return s(!0)}))},g=function(e){fetch("".concat("","/api/board-games/").concat(e),{method:"DELETE"}).then((function(e){return e.json()})).then(y)},O=function(e){s(!1),b(e)},G=a.map((function(e){return r.a.createElement(f,{key:e._id,game:e,deleteGame:g,updateGame:O})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,null),r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"Board Game Collection"),function(){var e;if(m)e=r.a.createElement(E,{key:"createForm",refreshGames:y});else{var t=h;console.log("Data's ID: ".concat(t._id)),e=r.a.createElement(v,{key:t._id,id:t._id,game:t,refreshGames:y})}return e}(),r.a.createElement("main",null,G)))},y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,null),r.a.createElement("h1",null,"Card Game Collection"),r.a.createElement("p",null,"Still in development. Check out completed Video Games and Board Games pages."))},g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,null),r.a.createElement("h1",null,"Mind Games"),r.a.createElement("p",null,"Still in development. Check out completed Video Games and Board Games pages."))},O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,null),r.a.createElement("h1",null,"Outdoor Games"),r.a.createElement("p",null,"Still in development. Check out completed Video Games and Board Games pages."))},G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,null),r.a.createElement("h1",null,"Home"),r.a.createElement("p",null,"View features of this app on the Video Games and Board Games pages. Other pages are still in development."))};var j=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/VideoGames"},r.a.createElement(h,null)),r.a.createElement(m.a,{path:"/BoardGames"},r.a.createElement(b,null)),r.a.createElement(m.a,{path:"/CardGames"},r.a.createElement(y,null)),r.a.createElement(m.a,{path:"/MindGames"},r.a.createElement(g,null)),r.a.createElement(m.a,{path:"/OutdoorGames"},r.a.createElement(O,null)),r.a.createElement(m.a,{path:"/",exact:!0},r.a.createElement(G,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.94a84108.chunk.js.map