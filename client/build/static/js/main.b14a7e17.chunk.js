(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(23),s=n.n(r),o=(n(41),n(42),n(7)),i=n(6),l=(n(43),n(0));function u(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"centrar-image",children:[Object(l.jsx)("img",{className:"img",src:"https://th.bing.com/th/id/R.82a5525da38ec9fd432d675263207374?rik=skqc9Xozg8J%2fqQ&pid=ImgRaw&r=0",alt:""}),Object(l.jsx)("div",{children:Object(l.jsx)(o.b,{to:"/home",children:Object(l.jsx)("button",{className:"button",children:" INGRESAR "})})}),Object(l.jsx)("br",{}),Object(l.jsx)("img",{className:"image",src:"https://th.bing.com/th/id/R.dba3b8eda6c4dcc57fbc825279ae6866?rik=ACN1JcCm%2bT13Gw&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527784884jkxg4.png&ehk=CUoFNRf%2fvK6gK4mxFpiKQqxzaMhLGtdZeKVJ07sZ6xo%3d&risl=&pid=ImgRaw&r=0",alt:""})]})})}var j=n(13),d=n(10),p=n(12),b=n(17),h=n(65);n(57);function O(e){var t=e.name,n=e.types,a=e.image,c=e.id;return Object(l.jsx)(o.b,{className:"cards",to:"/detail/".concat(c),children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("h3",{className:"name",children:t.charAt(0).toUpperCase()+t.slice(1)}),Object(l.jsx)("img",{src:a,alt:"imagen",width:"300px",height:"300px"}),Object(l.jsxs)("h4",{children:["Types: ",n.map((function(e){return e})).join(" - ")]})]})})}n(58);function m(e){for(var t=e.pokemonsPerPage,n=e.allPokemons,a=e.paginado,c=[],r=1;r<=Math.ceil(n/t);r++)c.push(r);return Object(l.jsx)("nav",{children:Object(l.jsx)("ul",{className:"paginado",children:c&&c.map((function(e){return Object(l.jsx)("li",{className:"number",children:Object(l.jsx)("button",{className:"btn",onClick:function(){return a(e)},children:e})},"num")}))})})}n(59),n(60);function f(){var e=Object(d.b)(),t=Object(a.useState)(""),n=Object(j.a)(t,2),c=n[0],r=n[1],s=function(t){t.preventDefault(),e(function(e){return function(){var t=Object(b.a)(Object(p.a)().mark((function t(n){var a;return Object(p.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("/pokemon?name=".concat(e));case 3:return a=t.sent,t.abrupt("return",n({type:"SEARCH_NAME",payload:a.data}));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",alert("No se encontr\xf3 el pokemon"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(c))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{className:"search",type:"text",onChange:function(e){return function(e){e.preventDefault(),r(e.target.value)}(e)},placeholder:"Buscar pokemon..."}),Object(l.jsx)("button",{className:"boton",type:"submit",onClick:function(e){return s(e)},children:"Buscar"})]})}function x(){return Object(l.jsxs)("header",{id:"navegador",className:"header",children:[Object(l.jsx)(o.b,{to:"/"}),Object(l.jsxs)("div",{className:"nav-buttons",children:[Object(l.jsx)(o.b,{to:"/post",children:Object(l.jsx)("button",{className:"button",style:{flex:1},children:"Crear P\xf3kemon"})}),Object(l.jsx)(f,{})]})]})}n(61);var g=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.pokemons})),n=Object(a.useState)(1),c=Object(j.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(12),i=Object(j.a)(o,1)[0],u=r*i,f=u-i,g=t.slice(f,u);return Object(a.useEffect)((function(){e(function(){var e=Object(b.a)(Object(p.a)().mark((function e(t){var n,a;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/pokemon");case 3:n=e.sent,a=n.data,t({type:"GET_POKEMONS",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:"ERROR",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"filtros",children:[Object(l.jsx)(x,{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{children:"A-Z"}),Object(l.jsxs)("select",{className:"select",name:"select",onChange:function(t){e({type:"SORT",payload:t.target.value})},children:[Object(l.jsx)("option",{value:"Filtro",children:" A-Z:"}),Object(l.jsx)("option",{value:"ASCENDENTE",children:"Ascendente"}),Object(l.jsx)("option",{value:"DESCENDENTE",children:"Descendente"})]})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{children:"FUERZA"}),Object(l.jsxs)("select",{className:"select",name:"selects",onChange:function(t){e({type:"FILTER_BY_ATTACK",payload:t.target.value})},children:[Object(l.jsx)("option",{value:"Fuerza",children:" Fuerza "}),Object(l.jsx)("option",{value:"Mayor fuerza",children:"Mayor fuerza"}),Object(l.jsx)("option",{value:"Menor fuerza",children:"Menor fuerza"})]})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{children:"TIPO"}),Object(l.jsxs)("select",{className:"select",onChange:function(t){e({type:"FILTER_BY_TYPE",payload:t.target.value})},children:[Object(l.jsx)("option",{value:"type",children:" Tipo "}),Object(l.jsx)("option",{value:"normal",children:" Normal "}),Object(l.jsx)("option",{value:"flying",children:" Flying "}),Object(l.jsx)("option",{value:"poison",children:" Poison "}),Object(l.jsx)("option",{value:"ground",children:" Ground "}),Object(l.jsx)("option",{value:"bug",children:" Bug "}),Object(l.jsx)("option",{value:"fire",children:" Fire "}),Object(l.jsx)("option",{value:"water",children:" Water "}),Object(l.jsx)("option",{value:"grass",children:" Grass "}),Object(l.jsx)("option",{value:"electric",children:" Electric "}),Object(l.jsx)("option",{value:"fairy",children:" Fairy "})]})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{children:"CREADOS-API"}),Object(l.jsxs)("select",{className:"select",onChange:function(t){e({type:"FILTER_CREATED",payload:t.target.value}),s(1)},children:[Object(l.jsx)("option",{value:"Todos",children:" Todos "}),Object(l.jsx)("option",{value:"Creados",children:" Creados "}),Object(l.jsx)("option",{value:"Existentes",children:" Existentes "})]})]})]}),Object(l.jsx)(m,{pokemonsPerPage:i,allPokemons:t.length,paginado:function(e){s(e)}}),null===g||void 0===g?void 0:g.map((function(e){return Object(l.jsx)(O,{name:e.name,image:e.image,types:e.types,id:e.id},e.id)}))]})})},v=n(21),y=n(27),k=n(4),E=(n(62),function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.types}));console.log(t);var n=Object(a.useState)({}),c=Object(j.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)({name:"",type:[],image:"",life:"",attack:"",defense:"",speed:"",height:"",wheight:""}),u=Object(j.a)(i,2),O=u[0],m=u[1];console.log(O),Object(a.useEffect)((function(){e(function(){var e=Object(b.a)(Object(p.a)().mark((function e(t){var n;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/type");case 2:return n=e.sent,e.abrupt("return",t({type:"GET_TYPE",payload:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(a.useEffect)((function(){s(function(e){var t={};return e.name||(t.name="Se requiere un nombre"),/^[A-Za-z]+$/i.test(e.name)||(t.name="Solo acepta letras "),e.life||(t.life="Colocar Life"),/^([1-9]|[1-9][0-9]|1[0-9][0-9]|200)$/.test(e.life)||(t.life="Life debe tener un valor entre 1 y 200"),e.attack||(t.attack="Attack es un par\xe1metro requerido"),/^([1-9]|[1-9][0-9]|1[0-9][0-9]|200)$/.test(e.attack)||(t.attack="Attack debe tener un valor entre 1 y 200"),e.defense||(t.defense="Defense es un par\xe1metro requerido"),/^([1-9]|[1-9][0-9]|1[0-9][0-9]|200)$/.test(e.defense)||(t.defense="Defense debe tener un valor entre 1 y 200."),e.speed||(t.speed="Speed es un par\xe1metro requerido"),/^([1-9]|[1-9][0-9]|1[0-9][0-9]|200)$/.test(e.speed)||(t.speed="Speed debe tener un valor entre 1 y 200"),e.height||(t.height="Height es un par\xe1metro requerido"),/^([1-9]|[1-9][0-9]|1[0-9][0-9]|200)$/.test(e.height)||(t.height="Height debe tener un valor entre 1 y 200"),e.wheight||(t.wheight="Weight es un par\xe1metro requerido"),/^([1-9]|[1-9][0-9]|[0-9][0-9][0-9]|[0-9][0-9][0-9][0-9]|10000)$/.test(e.wheight)||(t.wheight="Weight debe tener un valor entre 1 y 10000"),e.image||(t.image="Image es un par\xe1metro requerido"),/https?:\/\/[^.]*?(\.[^.]+?)*\/.*?\.(jpg|jpeg|gif|png|svg)/g.test(e.image)||(t.image="La URL de image debe tener un formato v\xe1lido"),(e.type.length<=1||e.type.length>=2)&&(t.type="Debe elegir al menos un type"),t}(O))}),[O]);var f=function(t){var n;t.preventDefault(),alert("Pokemon creado con \xe9xito"),m({name:"",life:"",attack:"",defense:"",speed:"",height:"",weight:"",image:"",type:[]}),e((n=O,Object(b.a)(Object(p.a)().mark((function e(){var t;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("/pokemon/",n);case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),console.log("errorpokemon",e.t0),e.abrupt("return",alert(e.t0.response.data));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))))},x=function(e){m(Object(k.a)(Object(k.a)({},O),{},Object(y.a)({},e.target.name,e.target.value)))};return Object(l.jsx)("div",{className:"caja",children:Object(l.jsxs)("form",{onSubmit:function(e){return f(e)},className:"form",children:[Object(l.jsx)("input",{type:"text",name:"name",value:O.name.toLowerCase(),onChange:x,placeholder:"Nombre"}),r.name&&Object(l.jsx)("span",{children:r.name}),Object(l.jsx)("input",{type:"number",name:"life",value:O.life,onChange:x,placeholder:"Vida"}),r.name&&Object(l.jsx)("span",{children:r.life}),Object(l.jsx)("input",{type:"number",name:"attack",value:O.attack,onChange:x,placeholder:"Fuerza"}),r.name&&Object(l.jsx)("span",{children:r.attack}),Object(l.jsx)("input",{type:"number",name:"defense",value:O.defense,onChange:x,placeholder:"Defensa"}),r.name&&Object(l.jsx)("span",{children:r.defense}),Object(l.jsx)("input",{type:"number",name:"speed",value:O.speed,onChange:x,placeholder:"Velocidad"}),r.name&&Object(l.jsx)("span",{children:r.speed}),Object(l.jsx)("input",{type:"number",name:"height",value:O.height,onChange:x,placeholder:"Altura"}),r.name&&Object(l.jsx)("span",{children:r.height}),Object(l.jsx)("input",{type:"number",name:"wheight",value:O.wheight,onChange:x,placeholder:"Peso"}),r.name&&Object(l.jsx)("span",{children:r.wheight}),Object(l.jsx)("input",{type:"file",name:"image",value:O.image,onChange:x,placeholder:"Imagen"}),r.name&&Object(l.jsx)("span",{children:r.image}),Object(l.jsxs)("div",{children:[Object(l.jsx)("select",{className:"select",onChange:function(e){m(Object(k.a)(Object(k.a)({},O),{},{type:[].concat(Object(v.a)(O.type),[e.target.value])}))},children:t.map((function(e){return Object(l.jsx)("option",{value:e.name,children:e.name},e.id)}))}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"Types:"}),O.type.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:e}),Object(l.jsx)("button",{type:"button",onClick:function(){return t=e,void m(Object(k.a)(Object(k.a)({},O),{},{type:O.type.filter((function(e){return e!==t}))}));var t},value:e,className:"button",children:"X"},e)]})}))]})]}),Object(l.jsx)("div",{children:Object(l.jsx)(o.b,{to:"/home",children:Object(l.jsx)("button",{className:"button",children:"Back"})})}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{className:"button",type:"submit"})})]})})});n(63);function N(){var e,t=Object(i.e)().id,n=Object(d.b)();Object(a.useEffect)((function(){return n(function(e){return function(){var t=Object(b.a)(Object(p.a)().mark((function t(n){var a;return Object(p.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("/pokemon/pokemons/".concat(e));case 3:return a=t.sent,t.abrupt("return",n({type:"GET_DETAILS",payload:a.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(t)),function(){n(function(){var e=Object(b.a)(Object(p.a)().mark((function e(t){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t({type:"CLEAN_DETAILS",payload:{}}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}),[n,t]);var c=Object(d.c)((function(e){return e.detail}));return console.log(c),c?Object(l.jsxs)("div",{className:"cards",children:[Object(l.jsxs)(o.b,{to:"/home",children:[Object(l.jsx)("button",{className:"button",children:"Volver"})," "]}),Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("h1",{className:"name",children:c.name}),Object(l.jsx)("h2",{children:c.id}),Object(l.jsx)("img",{className:"imagen",src:c.image,alt:"",width:"250px",height:"250px"}),Object(l.jsxs)("p",{className:"type",children:["types: ",null===(e=c.types)||void 0===e?void 0:e.map((function(e){return e}))]}),Object(l.jsxs)("p",{className:"type",children:["Vida: ",c.life," Ps - Fuerza: ",c.attack," % - Defensa:",c.defense," % - Velocidad: ",c.speed," % - Altura:",c.height," Mt - Peso: ",c.weight," Kg"]})]})]}):Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Cargando..."})})}h.a.defaults.baseURL="http://localhost:3001/";var C=function(){return Object(l.jsx)(o.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(i.a,{exact:!0,path:"/",children:Object(l.jsx)(u,{})}),Object(l.jsx)(i.a,{path:"/home",children:Object(l.jsx)(g,{})}),Object(l.jsx)(i.a,{path:"/post",children:Object(l.jsx)(E,{})}),Object(l.jsx)(i.a,{path:"/detail/:id",children:Object(l.jsx)(N,{})})]})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},w=n(29),A=n(35),P={pokemons:[],allPokemons:[],detail:null,types:[]};var S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_POKEMONS":return Object(k.a)(Object(k.a)({},e),{},{pokemons:t.payload,allPokemons:t.payload});case"FILTER_BY_TYPE":var n=e.allPokemons,a="type"===t.payload?n:n.filter((function(e){return e.types.includes(t.payload)}));return Object(k.a)(Object(k.a)({},e),{},{pokemons:a});case"FILTER_CREATED":var c="Creados"===t.payload?e.allPokemons.filter((function(e){return e.id.length>2})):e.allPokemons.filter((function(e){return e.id<=40}));return Object(k.a)(Object(k.a)({},e),{},{pokemons:"Todos"===t.payload?e.allPokemons:c});case"FILTER_BY_ATTACK":var r=Object(v.a)(e.pokemons);return r=r.sort((function(e,n){return e.attack<n.attack?"Mayor fuerza"===t.payload?1:-1:e.attack>n.attack?"Mayor fuerza"===t.payload?-1:1:0})),Object(k.a)(Object(k.a)({},e),{},{pokemons:"Fuerza"===t.payload?e.allPokemons:r});case"POST_POKEMON":return Object(k.a)({},e);case"SORT":var s=Object(v.a)(e.pokemons);return s=s.sort((function(e,n){return e.name<n.name?"ASCENDENTE"===t.payload?-1:1:e.name>n.name?"ASCENDENTE"===t.payload?1:-1:0})),Object(k.a)(Object(k.a)({},e),{},{pokemons:"Filtro"===t.payload?e.allPokemons:s});case"SEARCH_NAME":return Object(k.a)(Object(k.a)({},e),{},{pokemons:t.payload});case"GET_DETAILS":return Object(k.a)(Object(k.a)({},e),{},{detail:t.payload});case"GET_TYPE":return Object(k.a)(Object(k.a)({},e),{},{types:t.payload});case"CLEAN_DETAILS":return Object(k.a)(Object(k.a)({},e),{},{detail:e.payload});default:return e}},R=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_||w.b,_=Object(w.c)(S,R(Object(w.a)(A.a)));s.a.render(Object(l.jsx)(d.a,{store:_,children:Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(C,{})})}),document.getElementById("root")),T()}},[[64,1,2]]]);
//# sourceMappingURL=main.b14a7e17.chunk.js.map