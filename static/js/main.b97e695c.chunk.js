(this["webpackJsonppokemon-api"]=this["webpackJsonppokemon-api"]||[]).push([[0],{21:function(e,t,s){},40:function(e,t,s){},42:function(e,t,s){"use strict";s.r(t);var n=s(2),a=s.n(n),c=s(15),i=s.n(c),o=(s(21),s(5)),j=s(16),h=s.n(j),d=(s(40),s(0)),p=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),s=t[0],a=t[1],c=Object(n.useState)(!1),i=Object(o.a)(c,2),j=i[0],p=i[1],r=Object(n.useState)({name:"",species:"",img:"",hp:"",attack:"",defense:"",type:""}),l=Object(o.a)(r,2),b=l[0],m=l[1];return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsxs)("div",{className:"app__titleSection",children:[Object(d.jsx)("h1",{children:"Pokemon"}),Object(d.jsx)("input",{onChange:function(e){return a(e.target.value)},type:"text",placeholder:"enter pokemon name"}),Object(d.jsx)("button",{onClick:function(){h.a.get("https://pokeapi.co/api/v2/pokemon/".concat(s)).then((function(e){m({name:s,species:e.data.species.name,img:e.data.sprites.other.dream_world.front_default,hp:e.data.stats[0].base_stat,attack:e.data.stats[1].base_stat,defense:e.data.stats[2].base_stat,type:e.data.types[0].type.name,weight:e.data.weight}),p(!0)}))},children:"Search Pokemon"})]}),Object(d.jsx)("div",{className:"displayPokemon",children:j?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"image",children:Object(d.jsx)("img",{src:b.img,alt:""})}),Object(d.jsxs)("div",{className:"displayContent",children:[Object(d.jsxs)("h3",{children:["Species: ",b.species]}),Object(d.jsxs)("h3",{children:["Hp: ",b.hp]}),Object(d.jsxs)("h3",{children:["Attack: ",b.attack]}),Object(d.jsxs)("h3",{children:["Defence: ",b.defense]}),Object(d.jsxs)("h3",{children:["Type: ",b.type]}),Object(d.jsxs)("h3",{children:["Weight: ",b.weight]})]})]}):Object(d.jsx)("h1",{children:"Please choose a pokemon"})})]})},r=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,43)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),c(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),r()}},[[42,1,2]]]);
//# sourceMappingURL=main.b97e695c.chunk.js.map