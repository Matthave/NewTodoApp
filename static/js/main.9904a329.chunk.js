(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{22:function(e,t,n){e.exports=n(34)},34:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(17),i=n.n(o),l=n(12),s=n(3),c=n(1),u=n(2);function d(){var e=Object(c.a)(["\n  width: 120px;\n  height: 100%;\n  border-radius: 4px;\n  padding: 7.5px;\n  background-color: #79be8c;\n  font-size: 1.6rem;\n  color: #fff;\n  transition: 0.1s linear;\n\n  &:hover {\n    background-color: #64b37a;\n  }\n\n  &::placeholder {\n    color: #fff;\n  }\n"]);return d=function(){return e},e}function p(){var e=Object(c.a)(["\n  text-decoration: none;\n  font-size: 1.5rem;\n  color: #fff;\n"]);return p=function(){return e},e}function f(){var e=Object(c.a)(["\n  width: ",";\n  height: 100%;\n  text-align: center;\n  background-color: #76ce8e;\n  border-radius: 4px;\n  transition: 0.1s linear;\n  margin-right: 4px;\n  margin-left: ",";\n  padding: ",";\n"]);return f=function(){return e},e}function h(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  flex-shrink: 1;\n  width: 100%;\n  height: 40px;\n  list-style: none;\n  cursor: pointer;\n  padding: 4px 0px;\n"]);return h=function(){return e},e}function g(){var e=Object(c.a)(["\n  width: 100vw;\n  height: 40px;\n  background-color: #40a35b;\n  padding: 0px 4px;\n  transition: 0.1s linear;\n"]);return g=function(){return e},e}var b=u.b.nav(g()),m=u.b.ul(h()),x=u.b.li(f(),(function(e){return e.lastEle?"auto":"75px"}),(function(e){return e.lastEle?"auto":"initial"}),(function(e){return e.lastEle?"initial":"8px 0px"})),w=u.b.a(p()),v=u.b.input(d()),k=function(e){var t=e.themeToggle,n=e.themeOption,r=e.elementHoverEnter,o=e.elementHoverLeave;return a.a.createElement(b,{className:"nav"},a.a.createElement(m,null,a.a.createElement(x,{className:"list",onMouseEnter:function(e){return r(e)},onMouseLeave:function(e){return o(e)}},a.a.createElement(w,null,"Your List")),a.a.createElement(x,{className:"list",onClick:function(){t(!n)},onMouseEnter:function(e){return r(e)},onMouseLeave:function(e){return o(e)}},a.a.createElement(w,null,"Theme")),a.a.createElement(x,{className:"list",onMouseEnter:function(e){return r(e)},onMouseLeave:function(e){return o(e)}},a.a.createElement(w,null,"Help")),a.a.createElement(x,{className:"list",lastEle:!0},a.a.createElement(v,{className:"item",placeholder:"Search..."}))))},C=n(7),y=n(8),E=n(10),L=n(9),A=function(e){Object(E.a)(n,e);var t=Object(L.a)(n);function n(){var e;Object(C.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={selected:!1,scrollHeight:0},e.mouseDownFeature=function(t){"card"===t.target.classList[0]&&(e.setState({selected:!0}),t.target.style.cursor="grabbing",t.target.style.background="#fff")},e.mouseUpFeature=function(t){if("card"===t.target.classList[0]){if(t.target.style.cursor="pointer",t.target.style.position="static",t.target.style.transform="rotate(0deg)",t.pageX<285){if(e.props.wholeList[0].tasks.includes(t.target.textContent))return e.mouseLeaveFeature(t);e.props.addNewCard(e.props.wholeList[0].id,t.target.textContent),e.props.deleteCardFeatureByMove(t,e.props.id)}else if(t.pageX>285&&t.pageX<570&&e.props.wholeList.length>=2){if(e.props.wholeList[1].tasks.includes(t.target.textContent))return e.mouseLeaveFeature(t);e.props.addNewCard(e.props.wholeList[1].id,t.target.textContent),e.props.deleteCardFeatureByMove(t,e.props.id)}else if(t.pageX>570&&t.pageX<855&&e.props.wholeList.length>=3){if(e.props.wholeList[2].tasks.includes(t.target.textContent))return e.mouseLeaveFeature(t);e.props.addNewCard(e.props.wholeList[2].id,t.target.textContent),e.props.deleteCardFeatureByMove(t,e.props.id)}else if(t.pageX>855&&t.pageX<1140&&e.props.wholeList.length>=4){if(e.props.wholeList[3].tasks.includes(t.target.textContent))return e.mouseLeaveFeature(t);e.props.addNewCard(e.props.wholeList[3].id,t.target.textContent),e.props.deleteCardFeatureByMove(t,e.props.id)}else if(t.pageX>1140&&t.pageX<1425&&e.props.wholeList.length>=5){if(e.props.wholeList[4].tasks.includes(t.target.textContent))return e.mouseLeaveFeature(t);e.props.addNewCard(e.props.wholeList[4].id,t.target.textContent),e.props.deleteCardFeatureByMove(t,e.props.id)}else if(t.pageX>1425&&e.props.wholeList.length>=6){if(e.props.wholeList[5].tasks.includes(t.target.textContent))return e.mouseLeaveFeature(t);e.props.addNewCard(e.props.wholeList[5].id,t.target.textContent),e.props.deleteCardFeatureByMove(t,e.props.id)}e.clearAllBlankSpan(),e.setState({selected:!1})}},e.clearAllBlankSpan=function(){document.querySelectorAll(".blank").forEach((function(e){e.style.width="0",e.style.height="0",e.style.backgroundColor="transparent",e.style.borderRadius="0"}))},e.mouseMoveFeature=function(t){if(e.state.selected&&"card"===t.target.classList[0]){t.target.style.left="".concat(t.clientX-130,"px"),t.target.style.top="".concat(t.clientY-26,"px"),t.target.style.position="fixed",t.target.style.transform="rotate(5deg)",t.target.style.zIndex=999;var n=document.querySelectorAll(".blank");n.forEach((function(e){e.style.width="0",e.style.height="0",e.style.backgroundColor="transparent"})),t.pageX<285?(n[0].style.width="100%",n[0].style.height="35px",n[0].style.backgroundColor="#dddfe5",n[0].style.borderRadius="5px"):t.pageX>285&&t.pageX<570&&e.props.wholeList.length>=2?(n[1].style.width="100%",n[1].style.height="35px",n[1].style.backgroundColor="#dddfe5",n[1].style.borderRadius="5px"):t.pageX>570&&t.pageX<855&&e.props.wholeList.length>=3?(n[2].style.width="100%",n[2].style.height="35px",n[2].style.backgroundColor="#dddfe5",n[2].style.borderRadius="5px"):t.pageX>855&&t.pageX<1140&&e.props.wholeList.length>=4?(n[3].style.width="100%",n[3].style.height="35px",n[3].style.backgroundColor="#dddfe5",n[3].style.borderRadius="5px"):t.pageX>1140&&t.pageX<1425&&e.props.wholeList.length>=5?(n[4].style.width="100%",n[4].style.height="35px",n[4].style.backgroundColor="#dddfe5",n[4].style.borderRadius="5px"):t.pageX>1425&&e.props.wholeList.length>=6&&(n[5].style.width="100%",n[5].style.height="35px",n[5].style.backgroundColor="#dddfe5",n[5].style.borderRadius="5px")}},e.mouseLeaveFeature=function(t){t.target.style.cursor="pointer",t.target.style.position="static",t.target.style.transform="rotate(0deg)",e.clearAllBlankSpan(),e.setState({selected:!1})},e}return Object(y.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{key:this.props.task,className:"card",onMouseDown:function(t){return e.mouseDownFeature(t)},onMouseUp:function(t){return e.mouseUpFeature(t)},onMouseMove:function(t){return e.mouseMoveFeature(t)},onMouseLeave:function(t){return e.mouseLeaveFeature(t)}},this.props.task,a.a.createElement("span",{className:"fas fa-highlighter",onClick:function(t){return e.props.deleteCardFeature(t)}}))}}]),n}(r.Component);function F(){var e=Object(c.a)(["\n  font-size: 2.3rem;\n  vertical-align: middle;\n  color: #666;\n  cursor: pointer;\n"]);return F=function(){return e},e}function O(){var e=Object(c.a)(["\n  background-color: #5aac44;\n  border-radius: 5px;\n  color: white;\n  padding: 8px 20px;\n  margin: 5px 0px;\n  margin-right: 10px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #67ba50;\n  }\n"]);return O=function(){return e},e}function j(){var e=Object(c.a)(["\n  width: 100%;\n  height: ",";\n  background-color: ",";\n  border-radius: 5px;\n  padding: 7.5px;\n  color: #779;\n  resize: none;\n  cursor: pointer;\n  transition: 0.1s linear;\n  box-shadow: ",";\n\n  &:hover {\n    background-color: ",";\n  }\n"]);return j=function(){return e},e}function B(){var e=Object(c.a)(["\n  width: 220px;\n  background-color: #ebecf0;\n  border-radius: 1px;\n  padding: 5px 4px;\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: #172b4d;\n\n  &:focus {\n    background-color: white;\n    box-shadow: 0px 0px 1px 1.5px #0079bf;\n  }\n"]);return B=function(){return e},e}function N(){var e=Object(c.a)(["\n  position: relative;\n  width: 275px;\n  margin-right: 10px;\n  align-self: flex-start;\n  background-color: #ebecf0;\n  border-radius: 4px;\n  padding: 10px 7.5px;\n  margin-bottom: 15px;\n"]);return N=function(){return e},e}var S=u.b.section(N()),M=u.b.input(B()),X=u.b.textarea(j(),(function(e){return e.showStyle?"60px":"31px"}),(function(e){return e.showStyle?"#fff":"#ebecf0"}),(function(e){return e.showStyle?"0px 0.5px 0px 0.5px #aaa":"none"}),(function(e){return e.showStyle?null:"#dddfe5"})),D=u.b.button(O()),z=u.b.span(F()),H=function(e){Object(E.a)(n,e);var t=Object(L.a)(n);function n(){var e;Object(C.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={inputTitle:e.props.title,showAddField:!1,textAreaValue:""},e.hideAll=function(t){var n=t.target.className;(n.includes("main")||n.includes("input")||n.includes("nav"))&&(e.setState({showAddField:!1}),e.props.showListHandle(!1),e.props.setListInput(""))},e.setListTitle=function(t){e.setState({inputTitle:t.target.value})},e.swapAddFieldFeature=function(t){"textArea"===t?e.setState({showAddField:!0}):e.setState({showAddField:!1})},e.setTextAreaValue=function(t){e.setState({textAreaValue:t.target.value})},e.addNewCardFeature=function(t,n){e.props.addNewCard(t,n),e.setState({showAddField:!1,textAreaValue:""})},e.addNewCardFeatureByKey=function(t,n,r){13===t.which&&e.state.showAddField&&(e.props.addNewCard(n,r),e.setState({showAddField:!1,textAreaValue:""}))},e.deleteCardFeature=function(t){e.props.deleteCard(t,e.props.id),e.setState({textAreaValue:""})},e.deleteCardFeatureByMove=function(t,n){e.props.deleteCard(t,n),e.setState({textAreaValue:""})},e}return Object(y.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("click",this.hideAll),document.addEventListener("keypress",(function(t){return e.addNewCardFeatureByKey(t,e.props.id,e.state.textAreaValue)}))}},{key:"componentWillUnmount",value:function(){var e=this;document.removeEventListener("click",this.hideAll),document.removeEventListener("keypress",(function(t){return e.addNewCardFeatureByKey(t,e.props.id,e.state.textAreaValue)}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.listOption,r=t.id,o=t.tasks,i=t.wholeList,l=this.state,s=l.showAddField,c=l.textAreaValue;return a.a.createElement(S,{className:"lists"},a.a.createElement(M,{value:this.state.inputTitle,onChange:function(t){return e.setListTitle(t)},className:"input"}),a.a.createElement("span",{className:"fas fa-ellipsis-h",onClick:function(){return n(r)}}),o.map((function(t){return a.a.createElement(A,{wholeList:i,key:t,task:t,deleteCardFeature:e.deleteCardFeature,id:r,addNewCard:e.addNewCardFeature,deleteCardFeatureByMove:e.deleteCardFeatureByMove})})),a.a.createElement("div",{className:"blank"}),a.a.createElement(X,{value:s?c:"Add Another Card",onChange:function(t){return e.setTextAreaValue(t)},onClick:function(){return e.swapAddFieldFeature("textArea")},showStyle:s}),s?a.a.createElement(a.a.Fragment,null,a.a.createElement(D,{onClick:function(){return e.addNewCardFeature(r,c)}},"Add Card"),a.a.createElement(z,{className:"fas fa-times",onClick:function(){return e.swapAddFieldFeature("SpanX")}})):null)}}]),n}(r.Component);function T(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-self: flex-start;\n  width: 275px;\n  border-radius: 4px;\n  padding: 0px 5px 5px 5px;\n  padding-top: ",";\n  background-color: ",";\n  transition: 0.1s linear;\n"]);return T=function(){return e},e}function V(){var e=Object(c.a)(["\n  align-self: flex-start;\n  width: 50%;\n  background-color: #5aac44;\n  border-radius: 5px;\n  color: white;\n  padding: 8px 20px;\n  margin-top: 5px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #67ba50;\n  }\n"]);return V=function(){return e},e}function I(){var e=Object(c.a)(["\n  display: flex;\n  width: auto;\n  flex-direction: row;\n  height: auto;\n  background-color: transparent;\n  margin-bottom: 10px;\n  padding: 3px 5px;\n  border-radius: 5px;\n  transition: 0.1s linear;\n"]);return I=function(){return e},e}function R(){var e=Object(c.a)(["\n  width: 265px;\n  background-color: #76ce8e;\n  border-radius: 4px;\n  padding: 12px 7.5px;\n  text-align: left;\n  cursor: pointer;\n  transition: 0.1s linear;\n  box-shadow: 0px 0px 1px 0px #888;\n  font-size: 15px;\n\n  &::placeholder {\n    color: white;\n  }\n\n  &:focus {\n    background-color: #fff !important;\n    ::placeholder {\n      color: black;\n    }\n  }\n"]);return R=function(){return e},e}function q(){var e=Object(c.a)(["\n  display: flex;\n  align-items: flex-start;\n  width: auto;\n  min-height: calc(100vh - 40px);\n  background-color: #4bbf6b;\n  padding: 40px 6px 0px 6px;\n  overflow-x: scroll;\n"]);return q=function(){return e},e}var W=u.b.main(q()),K=u.b.input(R()),U=u.b.div(I()),J=u.b.button(V()),P=u.b.div(T(),(function(e){return e.bgc?"5px":"0px"}),(function(e){return e.bgc?"#ebecf0":"transparent"})),Y=function(e){var t=e.wholeList,n=e.listOption,o=e.addNewCard,i=e.deleteCard,l=e.addNewList,c=e.elementHoverEnter,u=e.elementHoverLeave,d=Object(r.useState)(!1),p=Object(s.a)(d,2),f=p[0],h=p[1],g=Object(r.useState)(""),b=Object(s.a)(g,2),m=b[0],x=b[1];return a.a.createElement(W,{className:"main"},a.a.createElement(U,null,t.map((function(e){return a.a.createElement(H,{wholeList:t,key:e.id,id:e.id,title:e.title,tasks:e.tasks,listOption:n,addNewCard:o,deleteCard:i,showListHandle:h,setListInput:x})})),a.a.createElement(P,{bgc:!!f},a.a.createElement(K,{bgc:!!f,placeholder:"Add another list",onClick:function(){h(!0)},onChange:function(e){return function(e){x(e.target.value)}(e)},className:"list",value:m,onKeyPress:function(e){return function(e){13===e.which&&f&&l(m,h,x)}(e)},onMouseEnter:function(e){return c(e)},onMouseLeave:function(e){return u(e)}}),f?a.a.createElement(J,{onClick:function(){return l(m,h,x)}},"Add List"):null)))},$="375px",G="425px",Q="768px",Z="1024px",_="1440px",ee="2560px",te={mobileS:"(min-width: ".concat("320px",")"),mobileM:"(min-width: ".concat($,")"),mobileL:"(min-width: ".concat(G,")"),tablet:"(min-width: ".concat(Q,")"),laptop:"(min-width: ".concat(Z,")"),laptopL:"(min-width: ".concat(_,")"),desktop:"(min-width: ".concat(ee,")"),desktopL:"(min-width: ".concat(ee,")")};function ne(){var e=Object(c.a)(["\n  width: 100%;\n  padding: 10px 0px;\n  text-align: center;\n  font-size: 2rem;\n"]);return ne=function(){return e},e}function re(){var e=Object(c.a)(["\n  width: 75px;\n  height: 75px;\n  border-radius: 5px;\n  margin-right: 5px;\n  margin-left: 5px;\n  margin-bottom: 10px;\n  cursor: pointer;\n  transition: 0.1s linear;\n\n  &:hover {\n    opacity: 0.75;\n  }\n\n  @media "," {\n    width: 45%;\n    height: 85px;\n  }\n"]);return re=function(){return e},e}function ae(){var e=Object(c.a)(["\n  position: fixed;\n  bottom: 0;\n  right: calc(50% - (375px / 2));\n  width: 375px;\n  transform: ",";\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  background-color: #f4f5f7;\n  padding: 10px;\n  transition: 0.3s linear;\n  z-index: 999;\n\n  @media "," {\n    top: calc(0% + 40px);\n    right: 0;\n    bottom: 0;\n    width: 375px;\n    align-content: flex-start;\n  }\n"]);return ae=function(){return e},e}var oe=u.b.div(ae(),(function(e){return e.showTheme?"translateX(0px)":"translateX(100vw)"}),te.laptop),ie=u.b.div(re(),te.laptop),le=u.b.h3(ne());var se=function(e){var t=e.themeOption,n=e.setWhichColor,r=function(e,t,r,a){document.querySelector(".main").style.backgroundColor=e,document.querySelector(".nav").style.backgroundColor=t,document.querySelectorAll(".list").forEach((function(e){e.style.backgroundColor=r})),document.querySelectorAll(".item").forEach((function(e){e.style.backgroundColor=a})),n([r])};return a.a.createElement(oe,{showTheme:t},a.a.createElement(le,null,"Colors"),a.a.createElement(ie,{onClick:function(){return r("#0079BF","#0067A3","#3D99CE","#4D95BE")},style:{backgroundColor:"#0079BF"}}),a.a.createElement(ie,{onClick:function(){return r("#D29034","#B37B2C","#DDAB65","#C9A26C")},style:{backgroundColor:"#D29034"}}),a.a.createElement(ie,{onClick:function(){return r("#519839","#458131","#7BB168","#7DA76F")},style:{backgroundColor:"#519839"}}),a.a.createElement(ie,{onClick:function(){return r("#B04632","#963C2B","#C37263","#B5766B")},style:{backgroundColor:"#B04632"}}),a.a.createElement(ie,{onClick:function(){return r("#89609E","#755286","#A586B5","#9E86AB")},style:{backgroundColor:"#89609E"}}),a.a.createElement(ie,{onClick:function(){return r("#CD5A91","#AE4D7B","#D981AB","#C682A3")},style:{backgroundColor:"#CD5A91"}}),a.a.createElement(ie,{onClick:function(){return r("#4BBF6B","#40A35B","#76CE8E","#79BE8C")},style:{backgroundColor:"#4BBF6B"}}),a.a.createElement(ie,{onClick:function(){return r("#00AECC","#0094AE","#3DC1D8","#4DB4C6")},style:{backgroundColor:"#00AECC"}}),a.a.createElement(ie,{onClick:function(){return r("#838C91","#6F777B","#A1A8AB","#9BA0A3")},style:{backgroundColor:"#838C91"}}))},ce=n(21),ue=n.n(ce),de=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)(0),c=Object(s.a)(i,2),u=c[0],d=c[1],p=Object(r.useState)(["#76ce8e"]),f=Object(s.a)(p,2),h=f[0],g=f[1];Object(r.useEffect)((function(){document.addEventListener("click",v)}));var b=Object(r.useState)([{id:0,title:"To Do",tasks:[],activeList:!1},{id:1,title:"In Progress",tasks:[],activeList:!1},{id:2,title:"Finished",tasks:[],activeList:!1}]),m=Object(s.a)(b,2),x=m[0],w=m[1],v=function(e){var t=e.target.className;(t.includes("main")||t.includes("input")||t.includes("item"))&&o(!1)},C=function(e){var t=[];if(e.target.classList.forEach((function(e){t.push(e)})),t.includes("list")){var n=ue()("".concat(e.target.style.backgroundColor?e.target.style.backgroundColor:"#76ce8e"));return e.target.style.backgroundColor=n.lighten(.1)}},y=function(e){var t=[];if(e.target.classList.forEach((function(e){t.push(e)})),t.includes("list"))return e.target.style.backgroundColor=h};return a.a.createElement("main",null,a.a.createElement(k,{themeToggle:o,themeOption:n,whichColor:h,elementHoverEnter:C,elementHoverLeave:y}),a.a.createElement(se,{themeOption:n,setWhichColor:g}),a.a.createElement(Y,{wholeList:x,setWholeList:w,listOption:function(e){var t=Object(l.a)(x).filter((function(t){return t.id!==e}));t.sort((function(e,t){return e.id-t.id})),w(t)},addNewCard:function(e,t){var n=x.filter((function(t){return t.id===e}));n[0].tasks.includes(t)||t.length<2||(n[0].tasks.push(t),d(u+1))},deleteCard:function(e,t){var n=x.filter((function(e){return e.id===t})),r="".concat("card"===e.target.classList[0]?e.target.textContent:e.target.parentNode.textContent),a=n[0].tasks.findIndex((function(e){return e===r}));n[0].tasks.splice(a,1),d(u-1)},addNewList:function(e,t,n){t(!1),n(""),""!==e&&(e.length<2||w([].concat(Object(l.a)(x),[{title:e,id:"".concat(0!==x.length?x[x.length-1].id+1:0),tasks:[],activeInput:!1}])))},elementHoverEnter:C,elementHoverLeave:y}))};function pe(){var e=Object(c.a)(["\n  * {\n    margin:0;\n    padding:0;\n    font-family: Arial, Helvetica, sans-serif;\n    box-sizing:border-box;\n    border:none;\n    outline:none;\n  }\n\n  html{\n    font-size:10px;\n  }\n\n  body{\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n\n  .card{\n  top:0;\n  left:0;\n  display:flex;\n  justify-content:space-between;\n  width: 100%;\n  max-width:260px;\n  word-break: break-all;\n  margin: 10px 0px;\n  padding: 9px 7.5px;\n  font-size: 1.4rem;\n  box-shadow: 0px 0.5px 0px 0.5px #aaa;\n  background-color: #fff;\n  border-radius:3px;\n  cursor: pointer;\n  color:black;\n\n  &:hover {\n    background-color: #F4F5F7;\n  }\n\n  &:hover > *{\n  color:#777;\n  }\n  }\n\n  .fa-highlighter{\n    color:#777;\n    align-self:center;\n    margin-left:2px;\n    @media "," {\n      color:#fff;\n  }\n  }\n  \n  .fa-ellipsis-h{\n   padding: 9px ;\n   margin-left:2px;\n   margin-bottom: 5px;\n   font-size: 13px;\n   color: #777;\n   cursor: pointer;\n\n   &:hover{\n    background-color: #dddfe5;\n   }\n  }\n\n::-webkit-scrollbar{\n    height:17.5px;\n}::-webkit-scrollbar-track{\n    background:rgba(0,0,0,0.5);\n}\n::-webkit-scrollbar-thumb{\n  background:rgba(0,0,0,0.3);\n  border-radius: 10px;\n  height:10px;\n}\n::-webkit-scrollbar-thumb:hover{\n  background:rgba(0,0,0,0.5);\n}\n"]);return pe=function(){return e},e}var fe=Object(u.a)(pe(),te.laptop);var he=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(fe,null),a.a.createElement(de,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.9904a329.chunk.js.map