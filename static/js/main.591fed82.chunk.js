(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{22:function(n,e,t){n.exports=t(34)},34:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(13),i=t.n(o),c=t(8),l=t(3),u=t(1),s=t(2),d=t(14),p=t.n(d);function f(){var n=Object(u.a)(["\n  width: 120px;\n  height: 100%;\n  border-radius: 4px;\n  padding: 7.5px;\n  background-color: #79be8c;\n  font-size: 1.6rem;\n  color: #fff;\n  transition: 0.1s linear;\n\n  &:hover {\n    background-color: #64b37a;\n  }\n\n  &::placeholder {\n    color: #fff;\n  }\n"]);return f=function(){return n},n}function m(){var n=Object(u.a)(["\n  text-decoration: none;\n  font-size: 1.5rem;\n  color: #fff;\n"]);return m=function(){return n},n}function h(){var n=Object(u.a)(["\n  width: ",";\n  height: 100%;\n  text-align: center;\n  background-color: #76ce8e;\n  border-radius: 4px;\n  transition: 0.1s linear;\n  margin-right: 4px;\n  margin-left: ",";\n  padding: ",";\n"]);return h=function(){return n},n}function b(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  flex-shrink: 1;\n  width: 100%;\n  height: 40px;\n  list-style: none;\n  cursor: pointer;\n  padding: 4px 0px;\n"]);return b=function(){return n},n}function g(){var n=Object(u.a)(["\n  width: 100%;\n  height: 40px;\n  background-color: #40a35b;\n  padding: 0px 4px;\n  transition: 0.1s linear;\n"]);return g=function(){return n},n}var x=s.b.nav(g()),v=s.b.ul(b()),k=s.b.li(h(),(function(n){return n.lastEle?"auto":"75px"}),(function(n){return n.lastEle?"auto":"initial"}),(function(n){return n.lastEle?"initial":"8px 0px"})),w=s.b.a(m()),C=s.b.input(f()),E=function(n){var e=n.themeToggle,t=n.themeOption,r=n.whichColor,o=function(n){var e=[];if(n.target.classList.forEach((function(n){e.push(n)})),e.includes("list")){var t=p()("".concat(n.target.style.backgroundColor?n.target.style.backgroundColor:"#76ce8e"));return n.target.style.backgroundColor=t.lighten(.1)}},i=function(n){var e=[];if(n.target.classList.forEach((function(n){e.push(n)})),e.includes("list"))return n.target.style.backgroundColor=r};return a.a.createElement(x,{className:"nav"},a.a.createElement(v,null,a.a.createElement(k,{className:"list",onMouseEnter:function(n){return o(n)},onMouseLeave:function(n){return i(n)}},a.a.createElement(w,null,"Your List")),a.a.createElement(k,{className:"list",onClick:function(){e(!t)},onMouseEnter:function(n){return o(n)},onMouseLeave:function(n){return i(n)}},a.a.createElement(w,null,"Theme")),a.a.createElement(k,{className:"list",onMouseEnter:function(n){return o(n)},onMouseLeave:function(n){return i(n)}},a.a.createElement(w,null,"Help")),a.a.createElement(k,{className:"list",lastEle:!0},a.a.createElement(C,{className:"item",placeholder:"Search..."}))))},A=t(18),O=t(19),y=t(21),j=t(20);function B(){var n=Object(u.a)(["\n  font-size: 2.3rem;\n  vertical-align: middle;\n  color: #666;\n  cursor: pointer;\n"]);return B=function(){return n},n}function L(){var n=Object(u.a)(["\n  background-color: #5aac44;\n  border-radius: 5px;\n  color: white;\n  padding: 8px 20px;\n  margin: 5px 0px;\n  margin-right: 10px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #67ba50;\n  }\n"]);return L=function(){return n},n}function F(){var n=Object(u.a)(["\n  width: 100%;\n  height: 50px;\n  border-radius: 5px;\n  padding: 7.5px;\n  resize: none;\n"]);return F=function(){return n},n}function N(){var n=Object(u.a)(["\n  width: 100%;\n  text-align: left;\n  margin-left: 5px;\n  padding: 7.5px 3px;\n  color: #779;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #dddfe5;\n  }\n"]);return N=function(){return n},n}function S(){var n=Object(u.a)(["\n  width: 220px;\n  background-color: #ebecf0;\n  padding: 5px 4px;\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: #172b4d;\n\n  &:focus {\n    background-color: white;\n  }\n"]);return S=function(){return n},n}function D(){var n=Object(u.a)(["\n  width: 275px;\n  background-color: #ebecf0;\n  border-radius: 4px;\n  padding: 10px 7.5px;\n  margin: 0 auto;\n  margin-bottom: 15px;\n"]);return D=function(){return n},n}var T=s.b.section(D()),z=s.b.input(S()),M=s.b.button(N()),V=s.b.textarea(F()),I=s.b.button(L()),W=s.b.span(B()),q=function(n){Object(y.a)(t,n);var e=Object(j.a)(t);function t(){var n;Object(A.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=e.call.apply(e,[this].concat(a))).state={inputTitle:n.props.title,showAddField:!1,textAreaValue:""},n.hideAll=function(e){var t=e.target.className;(t.includes("main")||t.includes("input")||t.includes("nav"))&&(n.setState({showAddField:!1}),n.props.showListHandle(!1),n.props.setListInput(""))},n.setListTitle=function(e){n.setState({inputTitle:e.target.value})},n.swapAddFieldFeature=function(){n.setState({showAddField:!n.state.showAddField})},n.setTextAreaValue=function(e){n.setState({textAreaValue:e.target.value})},n.addNewCardFeature=function(e,t){n.props.addNewCard(e,t),n.setState({showAddField:!1,textAreaValue:""})},n.deleteCardFeature=function(e){n.props.deleteCard(e,n.props.id),n.setState({textAreaValue:""})},n}return Object(O.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.hideAll)}},{key:"render",value:function(){var n=this,e=this.props,t=e.listOption,r=e.id,o=e.tasks,i=this.state,c=i.showAddField,l=i.textAreaValue;return a.a.createElement(T,null,a.a.createElement(z,{value:this.state.inputTitle,onChange:function(e){return n.setListTitle(e)},className:"input"}),a.a.createElement("span",{className:"fas fa-ellipsis-h",onClick:function(){return t(r)}}),o.map((function(e){return a.a.createElement("div",{key:e,className:"card"},e,a.a.createElement("span",{className:"fas fa-highlighter",onClick:function(e){return n.deleteCardFeature(e)}}))})),c?a.a.createElement(a.a.Fragment,null,a.a.createElement(V,{value:this.state.textAreaValue,onChange:function(e){return n.setTextAreaValue(e)}}),a.a.createElement(I,{onClick:function(){return n.addNewCardFeature(r,l)}},"Add Card"),a.a.createElement(W,{className:"fas fa-times",onClick:this.swapAddFieldFeature})):a.a.createElement(M,{onClick:this.swapAddFieldFeature},a.a.createElement("span",{className:"fas fa-plus"})," Add Another Card"))}}]),t}(r.Component),H="375px",J="425px",X="768px",P="1024px",Y="1440px",$="2560px",G={mobileS:"(min-width: ".concat("320px",")"),mobileM:"(min-width: ".concat(H,")"),mobileL:"(min-width: ".concat(J,")"),tablet:"(min-width: ".concat(X,")"),laptop:"(min-width: ".concat(P,")"),laptopL:"(min-width: ".concat(Y,")"),desktop:"(min-width: ".concat($,")"),desktopL:"(min-width: ".concat($,")")};function K(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 275px;\n  height: auto;\n  background-color: ",";\n  margin: 0 auto;\n  padding: 5px;\n  border-radius: 5px;\n  transition: 0.1s linear;\n\n  @media "," {\n    margin: 0 auto 0 0;\n  }\n"]);return K=function(){return n},n}function Q(){var n=Object(u.a)(["\n  width: 50%;\n  background-color: #5aac44;\n  border-radius: 5px;\n  color: white;\n  padding: 8px 20px;\n  margin: 5px 0px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #67ba50;\n  }\n"]);return Q=function(){return n},n}function R(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 275px;\n  height: auto;\n  background-color: transparent;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  padding: 3px 5px;\n  border-radius: 5px;\n  transition: 0.1s linear;\n"]);return R=function(){return n},n}function U(){var n=Object(u.a)(["\n  width: 265px;\n  background-color: #76ce8e;\n  border-radius: 4px;\n  padding: 12px 7.5px;\n  text-align: left;\n  cursor: pointer;\n  transition: 0.1s linear;\n  box-shadow: 0px 0px 1px 0px #888;\n  &:hover {\n    background-color: #86c497;\n  }\n\n  &::placeholder {\n    color: white;\n  }\n\n  &:focus {\n    background-color: #fff;\n    ::placeholder {\n      color: black;\n    }\n  }\n"]);return U=function(){return n},n}function Z(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100vw;\n  min-height: calc(100vh - 40px);\n  background-color: #4bbf6b;\n  padding: 40px 15px 0px 15px;\n\n  @media "," {\n    flex-direction: row;\n  }\n"]);return Z=function(){return n},n}var _=s.b.main(Z(),G.laptop),nn=s.b.input(U()),en=s.b.div(R()),tn=s.b.button(Q()),rn=s.b.div(K(),(function(n){return n.bgc?"#ebecf0":"transparent"}),G.laptop),an=function(n){var e=n.wholeList,t=n.listOption,o=n.addNewCard,i=n.deleteCard,c=n.addNewList,u=Object(r.useState)(!1),s=Object(l.a)(u,2),d=s[0],p=s[1],f=Object(r.useState)(""),m=Object(l.a)(f,2),h=m[0],b=m[1];return a.a.createElement(_,{className:"main"},a.a.createElement(en,null,e.map((function(n){return a.a.createElement(q,{key:n.id,id:n.id,title:n.title,tasks:n.tasks,listOption:t,addNewCard:o,deleteCard:i,showListHandle:p,setListInput:b})}))),a.a.createElement(rn,{bgc:!!d},a.a.createElement(nn,{placeholder:"Add another list",onClick:function(){p(!0)},onChange:function(n){return function(n){b(n.target.value)}(n)},className:"list",value:h}),d?a.a.createElement(tn,{onClick:function(){return c(h,p,b)}},"Add List"):null))};function on(){var n=Object(u.a)(["\n  width: 100%;\n  padding: 10px 0px;\n  text-align: center;\n  font-size: 2rem;\n"]);return on=function(){return n},n}function cn(){var n=Object(u.a)(["\n  width: 75px;\n  height: 75px;\n  border-radius: 5px;\n  margin-right: 5px;\n  margin-left: 5px;\n  margin-bottom: 10px;\n  cursor: pointer;\n  transition: 0.1s linear;\n\n  &:hover {\n    opacity: 0.75;\n  }\n\n  @media "," {\n    width: 45%;\n    height: 85px;\n  }\n"]);return cn=function(){return n},n}function ln(){var n=Object(u.a)(["\n  position: fixed;\n  bottom: 0;\n  right: calc(50% - (375px / 2));\n  width: 375px;\n  transform: ",";\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  background-color: #f4f5f7;\n  padding: 10px;\n  transition: 0.3s linear;\n\n  @media "," {\n    top: calc(0% + 40px);\n    right: 0;\n    bottom: 0;\n    width: 375px;\n    align-content: flex-start;\n  }\n"]);return ln=function(){return n},n}var un=s.b.div(ln(),(function(n){return n.showTheme?"translateX(0px)":"translateX(100vw)"}),G.laptop),sn=s.b.div(cn(),G.laptop),dn=s.b.h3(on());var pn=function(n){var e=n.themeOption,t=n.setWhichColor,r=function(n,e,r,a){document.querySelector(".main").style.backgroundColor=n,document.querySelector(".nav").style.backgroundColor=e,document.querySelectorAll(".list").forEach((function(n){n.style.backgroundColor=r})),document.querySelectorAll(".item").forEach((function(n){n.style.backgroundColor=a})),t([r])};return a.a.createElement(un,{showTheme:e},a.a.createElement(dn,null,"Colors"),a.a.createElement(sn,{onClick:function(){return r("#0079BF","#0067A3","#3D99CE","#4D95BE")},style:{backgroundColor:"#0079BF"}}),a.a.createElement(sn,{onClick:function(){return r("#D29034","#B37B2C","#DDAB65","#C9A26C")},style:{backgroundColor:"#D29034"}}),a.a.createElement(sn,{onClick:function(){return r("#519839","#458131","#7BB168","#7DA76F")},style:{backgroundColor:"#519839"}}),a.a.createElement(sn,{onClick:function(){return r("#B04632","#963C2B","#C37263","#B5766B")},style:{backgroundColor:"#B04632"}}),a.a.createElement(sn,{onClick:function(){return r("#89609E","#755286","#A586B5","#9E86AB")},style:{backgroundColor:"#89609E"}}),a.a.createElement(sn,{onClick:function(){return r("#CD5A91","#AE4D7B","#D981AB","#C682A3")},style:{backgroundColor:"#CD5A91"}}),a.a.createElement(sn,{onClick:function(){return r("#4BBF6B","#40A35B","#76CE8E","#79BE8C")},style:{backgroundColor:"#4BBF6B"}}),a.a.createElement(sn,{onClick:function(){return r("#00AECC","#0094AE","#3DC1D8","#4DB4C6")},style:{backgroundColor:"#00AECC"}}),a.a.createElement(sn,{onClick:function(){return r("#838C91","#6F777B","#A1A8AB","#9BA0A3")},style:{backgroundColor:"#838C91"}}))},fn=function(){var n=Object(r.useState)(!1),e=Object(l.a)(n,2),t=e[0],o=e[1],i=Object(r.useState)(["#76ce8e"]),u=Object(l.a)(i,2),s=u[0],d=u[1];Object(r.useEffect)((function(){document.addEventListener("click",b)}));var p=Object(r.useState)([{id:0,title:"To Do",tasks:[],activeList:!1},{id:1,title:"In Progress",tasks:[],activeList:!1},{id:2,title:"Finished",tasks:[],activeList:!1}]),f=Object(l.a)(p,2),m=f[0],h=f[1],b=function(n){var e=n.target.className;(e.includes("main")||e.includes("input")||e.includes("item"))&&o(!1)};return a.a.createElement("main",null,a.a.createElement(E,{themeToggle:o,themeOption:t,whichColor:s}),a.a.createElement(pn,{themeOption:t,setWhichColor:d}),a.a.createElement(an,{wholeList:m,setWholeList:h,listOption:function(n){var e=Object(c.a)(m).filter((function(e){return e.id!==n}));e.sort((function(n,e){return n.id-e.id})),h(e)},addNewCard:function(n,e){var t=m.filter((function(e){return e.id===n}));t[0].tasks.includes(e)||e.length<2||t[0].tasks.push(e)},deleteCard:function(n,e){var t=m.filter((function(n){return n.id===e})),r=n.target.parentNode.textContent,a=t[0].tasks.findIndex((function(n){return n===r}));t[0].tasks.splice(a,1)},addNewList:function(n,e,t){e(!1),t(""),""!==n&&(n.length<2||h([].concat(Object(c.a)(m),[{title:n,id:"".concat(0!==m.length?m[m.length-1].id+1:0),tasks:[],activeInput:!1}])))}}))};function mn(){var n=Object(u.a)(["\n  * {\n    margin:0;\n    padding:0;\n    font-family: Arial, Helvetica, sans-serif;\n    box-sizing:border-box;\n    border:none;\n    outline:none;\n  }\n\n  html{\n    font-size:10px;\n  }\n\n  body{\n    min-width:350px;\n  }\n\n  .card{\n  display:flex;\n  justify-content:space-between;\n  width: 100%;\n  word-break: break-all;\n  margin: 10px 0px;\n  padding: 9px 7.5px;\n  font-size: 1.4rem;\n  box-shadow: 0px 1px 0.5px 0.5px #bbb;\n  background-color: #fff;\n  border-radius:3px;\n  cursor: pointer;\n  transition: 0.1s linear;\n  color:black;\n\n  &:hover {\n    background-color: #ebecf0;\n  }\n\n  &:hover > *{\n  color:#777;\n  }\n  }\n\n  .fa-highlighter{\n    color:#fff;\n    align-self:center;\n    margin-left:2px;\n  }\n  \n  .fa-ellipsis-h{\n   padding: 9px ;\n   margin-left:2px;\n   margin-bottom: 5px;\n   font-size: 13px;\n   color: #777;\n   cursor: pointer;\n\n   &:hover{\n    background-color: #dddfe5;\n   }\n  }\n\n"]);return mn=function(){return n},n}var hn=Object(s.a)(mn());var bn=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(hn,null),a.a.createElement(fn,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(bn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.591fed82.chunk.js.map