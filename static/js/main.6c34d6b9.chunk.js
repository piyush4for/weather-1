(this["webpackJsonpreact-weather"]=this["webpackJsonpreact-weather"]||[]).push([[0],{32:function(e,t,a){e.exports=a(44)},37:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),i=(a(37),a(20)),l=a(61),s=a(63),m=a(64),d=a(65),u=a(67),p=a(66),g=a(29),h=a.n(g),b=a(9),w="3e24f8ec3ab92f67d68bd5902b5bd088",f="https://api.openweathermap.org/data/2.5/weather?q=",x=Object(l.a)((function(e){return{app:{minHeight:"-webkit-fill-available",width:"100vw",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center",textAlign:"center",background:"radial-gradient(circle, rgba(27,131,255,1) 0%, rgba(23,134,255,1) 60%, rgba(115,184,255,1) 100%)"},icon:{height:250,width:250,margin:"-25px 0 -50px 0"},text:{color:"white",textShadow:"2px 2px 4px rgba(0, 0, 0, 1)"},time:{color:"white",textShadow:"2px 2px 4px rgba(0, 0, 0, 1)",fontSize:"3rem"},temp:{color:"white",textShadow:"2px 2px 4px rgba(0, 0, 0, 1)",fontSize:"6rem",marginRight:"-1.5rem"},search:{color:"rgba(0, 0, 0, 0.8)",backgroundColor:"rgba(255, 255, 255, 0.5)",fontSize:"2rem",alignSelf:"center"},paper:{backgroundColor:"rgba(255, 255, 255, 0)",display:"flex",maxWidth:300},button:{color:"rgba(0, 0, 0, 0.8)",alignSelf:"center"}}}));var v=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)({}),l=Object(i.a)(o,2),g=l[0],v=l[1],E=Object(n.useState)(window.innerHeight),y=Object(i.a)(E,2),j=y[0],O=y[1],S=Object(n.useState)(!1),k=Object(i.a)(S,2),D=k[0],N=k[1];window.addEventListener("resize",(function(){O(window.innerHeight)}));var C={height:j},M=x(),z=function(){N(!1),setTimeout((function(){fetch("".concat(f).concat(a,"&units=metric&lang=ru&appid=").concat(w)).then((function(e){return e.json()})).then((function(e){v(e),c(""),console.log(e)})).catch((function(e){console.log(e)})),N(!0)}),500)},H=-100-window.innerWidth/2,W=Object(b.b)({config:{mass:3},transform:D?"translate3d(0,0,0)":"translate3d(".concat(H,"px,0,0)")}),A=Object(b.b)({config:{mass:3},transform:D?"translate3d(0,0,0)":"translate3d(".concat(-H,"px,0,0)")}),B=Object(b.b)({transform:"undefined"!=typeof g.main?"translate3d(0,0,0)":"translate3d(0,50%,0)"}),I=Object(b.b)({transform:"undefined"!=typeof g.main?"translate3d(0,0,0)":"translate3d(0,-100%,0)"}),J=Object(b.b)({opacity:D?1:0}),q=["\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0412\u0442\u043e\u0440\u043d\u0438\u043a","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u041f\u044f\u0442\u043d\u0438\u0446\u0430","\u0421\u0443\u0431\u0431\u043e\u0442\u0430"][(new Date).getDay()],F=(new Date).getDate(),K=["\u042f\u043d\u0432\u0430\u0440\u044f","\u0424\u0435\u0432\u0440\u0430\u043b\u044f","\u041c\u0430\u0440\u0442\u0430","\u0410\u043f\u0440\u0435\u043b\u044f","\u041c\u0430\u044f","\u0418\u044e\u043d\u044f","\u0418\u044e\u043b\u044f","\u0410\u0432\u0433\u0443\u0441\u0442\u0430","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u041e\u043a\u0442\u044f\u0431\u0440\u044f","\u041d\u043e\u044f\u0431\u0440\u044f","\u0414\u0435\u043a\u0430\u0431\u0440\u044f"][(new Date).getMonth()],L="".concat((new Date).getHours(),":").concat((new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes());return r.a.createElement("div",{className:M.app,style:C},r.a.createElement(b.a.div,{style:B},r.a.createElement(s.a,{className:M.text},"".concat(q,", ").concat(F," ").concat(K)),r.a.createElement(s.a,{className:M.time},L)),"undefined"!=typeof g.main?r.a.createElement("div",null,r.a.createElement(b.a.div,{style:J},r.a.createElement(s.a,{className:M.text},g.name),r.a.createElement(s.a,{className:M.text},g.weather[0].description.charAt(0).toUpperCase()+g.weather[0].description.slice(1))),r.a.createElement(b.a.div,{style:W},r.a.createElement(m.a,{image:"http://openweathermap.org/img/wn/".concat(g.weather[0].icon,"@4x.png"),className:M.icon})),r.a.createElement(b.a.div,{style:A},r.a.createElement(s.a,{className:M.temp},Math.round(g.main.temp),"\xb0"))):r.a.createElement("div",null),r.a.createElement(b.a.div,{style:I},r.a.createElement(d.a,{className:M.paper,elevation:3},r.a.createElement(u.a,{variant:"filled",autoFocus:!0,className:M.search,onChange:function(e){return c(e.target.value)},value:a,onKeyPress:function(e){return"Enter"===e.key&&z()}}),r.a.createElement(p.a,{type:"submit",onClick:z,className:M.button},r.a.createElement(h.a,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.6c34d6b9.chunk.js.map