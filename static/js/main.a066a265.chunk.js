(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{112:function(n,e,a){"use strict";a.r(e);var t=a(0),r=a.n(t),i=a(10),o=a.n(i),c=(a(84),a(37)),d=a(21),u=a(4),s=a(38),m=a.n(s),p=a(54),g=a(22),l=a(24);function b(n,e,a){var t=Array.from(n),r=t.splice(e,1),i=Object(g.a)(r,1)[0];return t.splice(a,0,i),t}a(86);var j=a(133),f=a(137),O=a(139),h=a(135),x=a(140),I=a(71),v=a.n(I),N=a(72),y=a.n(N),w=a(70),S=a.n(w),k=a(36),C=a(2),T=function(n){var e=n.draggableStyle,a=n.virtualStyle,t=Object(u.a)(Object(u.a)({},a),e);return Object(u.a)(Object(u.a)({},t),{},{backgroundColor:"#fff",color:"rgba(0, 0, 0, 0.87)"})},R=Object(j.a)((function(n){return{number:{width:"auto",paddingRight:"15px"}}})),P=function(n){var e=n.provided,a=n.item,t=n.style,r=n.isDragging,i=n.index,o=void 0===i?"":i,c=R();return Object(C.jsxs)(O.a,Object(u.a)(Object(u.a)(Object(u.a)({button:!0,divider:!0},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,style:T({draggableStyle:e.draggableProps.style,virtualStyle:t}),className:"item ".concat(r?"is-dragging":""),children:[Object(C.jsx)("p",{className:c.number,children:o+1}),Object(C.jsx)(x.a,{primary:a.name,secondary:a.groupName})]}))},_=r.a.memo((function(n){var e=n.data,a=n.index,t=n.style,r=e[a];return r?Object(C.jsx)(l.b,{draggableId:r.id,index:a,children:function(n){return Object(C.jsx)(P,{provided:n,item:r,style:t,index:a})}},r.id):null}),k.b),E=r.a.memo((function(n){var e=n.column,a=n.index,r=n.open,i=n.titleWrqpRef,o=Object(t.useRef)();Object(t.useLayoutEffect)((function(){var n=o.current;n&&n.scrollTo(0)}),[a]);var c=function(n){return!r&&n&&i.current&&(i.current.style.backgroundColor="#bbb",i.current.style.boxShadow="0px 77px 0px 0px #bbb"),r||n||!i.current||(i.current.style.backgroundColor=r?"#f5f5f5":"#ddd",i.current.style.boxShadow="none"),Object(d.a)({transition:"background .4s",background:r?n?"#bbb":"#f5f5f5":n?"#bbb":"transparent",width:!r&&".1%",left:!r&&"40%",top:!r&&"-50px",opacity:!r&&"0"},"transition","opacity .4s")},u=function(){var n=window.innerWidth,e=window.innerHeight;return n>900?r?e-75:40:r?333:40};return Object(C.jsx)(l.c,{droppableId:e.id,mode:"virtual",renderClone:function(n,a,t){return Object(C.jsx)(P,{provided:n,isDragging:a.isDragging,item:e.items[t.source.index]})},children:function(n,a){var t=a.isUsingPlaceholder?e.items.length+1:e.items.length;return"\u0440\u0430\u0437\u043d\u043e\u0435"===e.id?Object(C.jsx)(k.a,{height:u(),itemCount:t,itemSize:60,outerRef:n.innerRef,itemData:e.items,className:"task-list",style:c(a.isDraggingOver),ref:o,children:_}):"\u0440\u0430\u0437\u043d\u043e\u0435"!==e.id?Object(C.jsx)(k.a,{height:window.innerWidth>900?r?398:40:r?333:40,itemCount:t,itemSize:60,outerRef:n.innerRef,itemData:e.items,className:"task-list",style:c(a.isDraggingOver),ref:o,children:_}):void 0}})})),A=Object(j.a)((function(n){var e;return{column:{margin:"3px",marginBottom:"0px",marginTop:"0px",backgroundColor:"rgb(221, 221, 221)"},title__wrap:(e={border:"1px solid #ddd",borderTop:"3px solid #fff",borderBottom:"0",padding:"25px 15px",transition:"background .4s"},Object(d.a)(e,"transition","boxShadow .4s"),Object(d.a)(e,"&:hover",{opacity:".9"}),e),listItemText:{fontSize:".9rem",textTransform:"uppercase",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",paddingLeft:"8px"},icon:{minWidth:"33px",position:"relative"},lengthGroup:{position:"absolute",fontSize:"12px",top:"-105%",left:"55%",backgroundColor:"red",color:"#fff",borderRadius:"50%",padding:"7% 13%",textAlign:"center",verticalAlign:"center",lineHeight:"1em"},small:{width:n.spacing(3),height:n.spacing(3)},ItemList_wrap:{backgroundColor:"#f5f5f5",transition:"background .4s"}}})),D=r.a.memo((function(n){var e=n.column,a=n.index,r=n.columnId,i=void 0===r?null:r,o=A(),c="\u0440\u0430\u0437\u043d\u043e\u0435"===i,d=Object(t.useState)(c),s=Object(g.a)(d,2),m=s[0],p=s[1],b=Object(t.useRef)();return Object(C.jsx)(l.b,{draggableId:e.id,index:a,children:function(n,t){return Object(C.jsxs)("div",Object(u.a)(Object(u.a)({className:o.column},n.draggableProps),{},{ref:n.innerRef,children:[Object(C.jsxs)(O.a,Object(u.a)(Object(u.a)({button:!0,onClick:function(){return function(){"\u0440\u0430\u0437\u043d\u043e\u0435"!==(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)&&p(!m)}(e.id)}},n.dragHandleProps),{},{className:o.title__wrap,style:(r=t.isDragging,{background:r?"#a0a0ff":m?"#f4f4f4":"#ddd"}),ref:b,children:[Object(C.jsxs)(h.a,{className:o.icon,children:[e.items.length>0&&Object(C.jsx)("p",{className:o.lengthGroup,children:e.items.length}),Object(C.jsx)(S.a,{})]}),Object(C.jsx)(x.a,{primary:e.name,className:o.title,classes:{primary:o.listItemText}}),"\u0440\u0430\u0437\u043d\u043e\u0435"!==e.id&&(m?Object(C.jsx)(v.a,{}):Object(C.jsx)(y.a,{}))]})),Object(C.jsx)("div",{className:o.ItemList_wrap,children:Object(C.jsx)(f.a,{component:"div",disablePadding:!0,className:o.ItemList_wrap2,style:{height:!m&&"0px",paddingTop:m&&"3px"},children:Object(C.jsx)(E,{column:e,index:a,open:m,titleWrqpRef:b})})})]}));var r}})})),L=a(73),z=a.n(L),W=a(138),F=Object(j.a)((function(n){return{root:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center","& > * + *":{marginLeft:n.spacing(2)}}}}));function H(){var n=F();return Object(C.jsx)("div",{className:n.root,children:Object(C.jsx)(W.a,{})})}for(var U=a(45),q=JSON.parse('[\n    {\n       "id": 1,\n       "name": "\u043a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044c",\n       "groupId": 21,\n       "groupName": "\u043e\u0432\u043e\u0449\u0438 \u0438 \u0444\u0440\u0443\u043a\u0442\u044b"\n    },\n    {\n       "id": 2,\n       "name": "\u043f\u043e\u043c\u0438\u0434\u043e\u0440\u044b",\n       "groupId": 21,\n       "groupName": "\u043e\u0432\u043e\u0449\u0438 \u0438 \u0444\u0440\u0443\u043a\u0442\u044b"\n    },\n    {\n       "id": 3,\n       "name": "\u043a\u043b\u0443\u0431\u043d\u0438\u043a\u0430",\n       "groupId": 21,\n       "groupName": "\u043e\u0432\u043e\u0449\u0438 \u0438 \u0444\u0440\u0443\u043a\u0442\u044b"\n    },\n    {\n       "id": 4,\n       "name": "\u0448\u043e\u043a\u043e\u043b\u0430\u0434",\n       "groupId": 8,\n       "groupName": "\u043a\u043e\u043d\u0434\u0438\u0442\u0435\u0440\u0441\u043a\u0438\u0435 \u0438\u0437\u0434\u0435\u043b\u0438\u044f"\n    },\n    {\n       "id": 5,\n       "name": "\u0442\u043e\u043c\u0430\u0442\u044b",\n       "groupId": 21,\n       "groupName": "\u043e\u0432\u043e\u0449\u0438 \u0438 \u0444\u0440\u0443\u043a\u0442\u044b"\n    },\n    {\n       "id": 6,\n       "name": "\u044f\u0431\u043b\u043e\u043a\u043e",\n       "groupId": 21,\n       "groupName": "\u043e\u0432\u043e\u0449\u0438 \u0438 \u0444\u0440\u0443\u043a\u0442\u044b"\n    },\n    {\n       "id": 7,\n       "name": "\u043f\u0438\u0432\u043e",\n       "groupId": 14,\n       "groupName": "\u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438"\n    },\n    {\n       "id": 8,\n       "name": "\u0430\u0440\u0430\u0445\u0438\u0441",\n       "groupId": 22,\n       "groupName": "\u043e\u0440\u0435\u0445\u0438 \u0438 \u0441\u0443\u0445\u043e\u0444\u0440\u0443\u043a\u0442\u044b"\n    },\n    {\n       "id": 9,\n       "name": "\u0442\u0443\u0430\u043b\u0435\u0442\u043d\u0430\u044f \u0431\u0443\u043c\u0430\u0433\u0430",\n       "groupId": 17,\n       "groupName": "\u0434\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u0445\u043e\u0437\u044f\u0439\u0441\u0442\u0432\u043e"\n    },\n    {\n       "id": 10,\n       "name": "\u044f\u0433\u043e\u0434\u044b",\n       "groupId": 21,\n       "groupName": "\u043e\u0432\u043e\u0449\u0438 \u0438 \u0444\u0440\u0443\u043a\u0442\u044b"\n    },\n    {\n       "id": 11,\n       "name": "\u0441\u0430\u043b\u0430\u0442",\n       "groupId": 21,\n       "groupName": "\u043e\u0432\u043e\u0449\u0438 \u0438 \u0444\u0440\u0443\u043a\u0442\u044b"\n    },\n    {\n       "id": 12,\n       "name": "\u0433\u0440\u0430\u043d\u043e\u043b\u0430",\n       "groupId": 6,\n       "groupName": "\u0431\u0430\u043a\u0430\u043b\u0435\u044f"\n    },\n    {\n       "id": 13,\n       "name": "\u043f\u0430\u043f\u043a\u0438",\n       "groupId": 17,\n       "groupName": "\u0434\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u0445\u043e\u0437\u044f\u0439\u0441\u0442\u0432\u043e"\n    },\n    {\n       "id": 14,\n       "name": "\u0432\u0430\u0442\u043d\u044b\u0435 \u0434\u0438\u0441\u043a\u0438",\n       "groupId": 17,\n       "groupName": "\u0434\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u0445\u043e\u0437\u044f\u0439\u0441\u0442\u0432\u043e"\n    },\n    {\n       "id": 15,\n       "name": "\u043a\u043e\u0444\u0435",\n       "groupId": 13,\n       "groupName": "\u0447\u0430\u0439 \u0438 \u043a\u043e\u0444\u0435"\n    },\n    {\n       "id": 16,\n       "name": "\u0431\u0430\u043d\u0430\u043d\u044b",\n       "groupId": 21,\n       "groupName": "\u043e\u0432\u043e\u0449\u0438 \u0438 \u0444\u0440\u0443\u043a\u0442\u044b"\n    },\n    {\n       "id": 17,\n       "name": "\u043b\u0430\u0432\u0430\u0448",\n       "groupId": 7,\n       "groupName": "\u0432\u044b\u043f\u0435\u0447\u043a\u0430"\n    },\n    {\n       "id": 18,\n       "name": "\u0431\u0430\u043a\u043b\u0430\u0436\u0430\u043d\u044b",\n       "groupId": 21,\n       "groupName": "\u043e\u0432\u043e\u0449\u0438 \u0438 \u0444\u0440\u0443\u043a\u0442\u044b"\n    },\n    {\n       "id": 19,\n       "name": "\u0448\u0430\u043c\u043f\u0443\u043d\u044c",\n       "groupId": 17,\n       "groupName": "\u0434\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u0445\u043e\u0437\u044f\u0439\u0441\u0442\u0432\u043e"\n    },\n    {\n       "id": 20,\n       "name": "\u0432\u043e\u0434\u0430 \u043c\u0438\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f",\n       "groupId": 12,\n       "groupName": "\u043d\u0430\u043f\u0438\u0442\u043a\u0438"\n    },\n    {\n       "id": 21,\n       "name": "\u043a\u0443\u043a\u0443\u0440\u0443\u0437\u0430",\n       "groupId": 21,\n       "groupName": "\u043e\u0432\u043e\u0449\u0438 \u0438 \u0444\u0440\u0443\u043a\u0442\u044b"\n    },\n    {\n       "id": 22,\n       "name": "\u043e\u0432\u0441\u044f\u043d\u043a\u0430",\n       "groupId": 6,\n       "groupName": "\u0431\u0430\u043a\u0430\u043b\u0435\u044f"\n    },\n    {\n       "id": 23,\n       "name": "\u0442\u0430\u043c\u043f\u043e\u043d\u044b",\n       "groupId": 17,\n       "groupName": "\u0434\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u0445\u043e\u0437\u044f\u0439\u0441\u0442\u0432\u043e"\n    },\n    {\n       "id": 24,\n       "name": "\u0440\u0430\u0441\u0442\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043c\u043e\u043b\u043e\u043a\u043e",\n       "groupId": 4,\n       "groupName": "\u043c\u043e\u043b\u043e\u0447\u043d\u044b\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b"\n    },\n    {\n       "id": 25,\n       "name": "\u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a",\n       "groupId": 1,\n       "groupName": "\u0440\u0430\u0437\u043d\u043e\u0435"\n    },\n    {\n       "id": 26,\n       "name": "\u0436\u0432\u0430\u0447\u043a\u0443",\n       "groupId": 2,\n       "groupName": "\u043a\u0443\u043b\u0438\u043d\u0430\u0440\u0438\u044f"\n    },\n    {\n       "id": 27,\n       "name": "\u043e\u0433\u0443\u0440\u0435\u0446",\n       "groupId": 21,\n       "groupName": "\u043e\u0432\u043e\u0449\u0438 \u0438 \u0444\u0440\u0443\u043a\u0442\u044b"\n    },\n    {\n       "id": 28,\n       "name": "\u043f\u0435\u0440\u0435\u0446",\n       "groupId": 21,\n       "groupName": "\u043e\u0432\u043e\u0449\u0438 \u0438 \u0444\u0440\u0443\u043a\u0442\u044b"\n    },\n    {\n       "id": 29,\n       "name": "\u0433\u0440\u0443\u0448\u0430",\n       "groupId": 21,\n       "groupName": "\u043e\u0432\u043e\u0449\u0438 \u0438 \u0444\u0440\u0443\u043a\u0442\u044b"\n    },\n    {\n       "id": 30,\n       "name": "\u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u0438\u0435 \u0442\u0440\u0430\u0432\u044b",\n       "groupId": 11,\n       "groupName": "\u043f\u0440\u0438\u043f\u0440\u0430\u0432\u044b"\n    },\n    {\n       "id": 31,\n       "name": "\u0430\u0432\u043e\u043a\u0430\u0434\u043e",\n       "groupId": 21,\n       "groupName": "\u043e\u0432\u043e\u0449\u0438 \u0438 \u0444\u0440\u0443\u043a\u0442\u044b"\n    },\n    {\n       "id": 32,\n       "name": "\u043f\u0435\u0440\u0441\u0438\u043a\u0438",\n       "groupId": 21,\n       "groupName": "\u043e\u0432\u043e\u0449\u0438 \u0438 \u0444\u0440\u0443\u043a\u0442\u044b"\n    },\n    {\n       "id": 33,\n       "name": "\u0447\u0430\u0439 \u0441 \u0442\u0440\u0430\u0432\u0430\u043c\u0438",\n       "groupId": 13,\n       "groupName": "\u0447\u0430\u0439 \u0438 \u043a\u043e\u0444\u0435"\n    },\n    {\n       "id": 34,\n       "name": "\u043a\u043b\u0435\u0439",\n       "groupId": 17,\n       "groupName": "\u0434\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u0445\u043e\u0437\u044f\u0439\u0441\u0442\u0432\u043e"\n    },\n    {\n       "id": 35,\n       "name": "\u0441\u0442\u0438\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0440\u043e\u0448\u043e\u043a",\n       "groupId": 17,\n       "groupName": "\u0434\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u0445\u043e\u0437\u044f\u0439\u0441\u0442\u0432\u043e"\n    },\n    {\n       "id": 36,\n       "name": "\u0442\u0440\u0430\u0432\u044f\u043d\u043e\u0439 \u0447\u0430\u0439",\n       "groupId": 13,\n       "groupName": "\u0447\u0430\u0439 \u0438 \u043a\u043e\u0444\u0435"\n    },\n    {\n       "id": 37,\n       "name": "\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e \u0434\u043b\u044f \u043f\u0440\u043e\u0447\u0438\u0441\u0442\u043a\u0438 \u0442\u0440\u0443\u0431",\n       "groupId": 17,\n       "groupName": "\u0434\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u0445\u043e\u0437\u044f\u0439\u0441\u0442\u0432\u043e"\n    },\n    {\n       "id": 38,\n       "name": "\u043a\u0430\u0440\u0442\u043e\u0448\u043a\u0430",\n       "groupId": 21,\n       "groupName": "\u043e\u0432\u043e\u0449\u0438 \u0438 \u0444\u0440\u0443\u043a\u0442\u044b"\n    },\n    {\n       "id": 39,\n       "name": "\u043f\u0435\u0442\u0440\u0443\u0448\u043a\u0430",\n       "groupId": 21,\n       "groupName": "\u043e\u0432\u043e\u0449\u0438 \u0438 \u0444\u0440\u0443\u043a\u0442\u044b"\n    },\n    {\n       "id": 40,\n       "name": "\u0441\u043e\u043b\u044c",\n       "groupId": 11,\n       "groupName": "\u043f\u0440\u0438\u043f\u0440\u0430\u0432\u044b"\n    },\n    {\n       "id": 41,\n       "name": "\u043c\u043e\u0440\u043a\u043e\u0432\u044c",\n       "groupId": 21,\n       "groupName": "\u043e\u0432\u043e\u0449\u0438 \u0438 \u0444\u0440\u0443\u043a\u0442\u044b"\n    },\n    {\n       "id": 42,\n       "name": "\u0433\u0435\u043b\u044c \u0434\u043b\u044f \u0434\u0443\u0448\u0430",\n       "groupId": 17,\n       "groupName": "\u0434\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u0445\u043e\u0437\u044f\u0439\u0441\u0442\u0432\u043e"\n    },\n    {\n       "id": 43,\n       "name": "\u0433\u043e\u0440\u0448\u043e\u043a \u0434\u043b\u044f \u0433\u0438\u0431\u0438\u0441\u043a\u0443\u0441\u0430",\n       "groupId": 17,\n       "groupName": "\u0434\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u0445\u043e\u0437\u044f\u0439\u0441\u0442\u0432\u043e"\n    },\n    {\n       "id": 44,\n       "name": "\u043e\u0447\u0438\u0441\u0442\u0438\u0442\u0435\u043b\u044c \u0442\u0440\u0443\u0431",\n       "groupId": 17,\n       "groupName": "\u0434\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u0445\u043e\u0437\u044f\u0439\u0441\u0442\u0432\u043e"\n    }\n ]'),B=Object(c.a)(q),J=1;J<=22;J++)for(var G=0;G<=1e4;G++)B.push({id:"".concat(J,"_").concat(G),name:"name_".concat(J,"_").concat(G),groupId:J,groupName:"groupName_".concat(J,"_").concat(G)});var M=B,X=JSON.parse('[\n     {"id":1,"name":"\u0440\u0430\u0437\u043d\u043e\u0435","img":"other.png"},\n     {"id":2,"name":"\u043a\u0443\u043b\u0438\u043d\u0430\u0440\u0438\u044f","img":"cookery.png"},\n     {"id":3,"name":"\u0434\u0435\u043b\u0438\u043a\u0430\u0442\u0435\u0441\u044b","img":"delicatessen.png"},\n     {"id":4,"name":"\u043c\u043e\u043b\u043e\u0447\u043d\u044b\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b","img":"milk.png"},\n     {"id":5,"name":"\u043c\u043e\u0440\u0441\u043a\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b","img":"sea-foods.png"},\n     {"id":6,"name":"\u0431\u0430\u043a\u0430\u043b\u0435\u044f","img":"cereal.png"},\n     {"id":7,"name":"\u0432\u044b\u043f\u0435\u0447\u043a\u0430","img":"bakery.png"},\n     {"id":8,"name":"\u043a\u043e\u043d\u0434\u0438\u0442\u0435\u0440\u0441\u043a\u0438\u0435 \u0438\u0437\u0434\u0435\u043b\u0438\u044f","img":"sweets.png"},\n     {"id":9,"name":"\u043a\u043e\u043d\u0441\u0435\u0440\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b","img":"canned-food.png"},\n     {"id":10,"name":"\u043c\u0430\u0441\u043b\u0430","img":"oils.png"},\n     {"id":11,"name":"\u043f\u0440\u0438\u043f\u0440\u0430\u0432\u044b","img":"spices.png"},\n     {"id":12,"name":"\u043d\u0430\u043f\u0438\u0442\u043a\u0438","img":"drinks.png"},\n     {"id":13,"name":"\u0447\u0430\u0439 \u0438 \u043a\u043e\u0444\u0435","img":"coffee-and-tea.png"},\n     {"id":14,"name":"\u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438","img":"alcohol.png"},\n     {"id":15,"name":"\u0442\u0430\u0431\u0430\u0447\u043d\u044b\u0435 \u0438\u0437\u0434\u0435\u043b\u0438\u044f","img":"tobacco.png"},\n     {"id":16,"name":"\u0441\u044b\u0440\u044b","img":"cheese.png"},\n     {"id":17,"name":"\u0434\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u0445\u043e\u0437\u044f\u0439\u0441\u0442\u0432\u043e","img":"household.png"},\n     {"id":18,"name":"\u0430\u043f\u0442\u0435\u043a\u0430","img":"pharmacy.png"},\n     {"id":19,"name":"\u0437\u0430\u043c\u043e\u0440\u043e\u0436\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b","img":"frozen-food.png"},\n     {"id":20,"name":"\u0434\u043e\u043c\u0430\u0448\u043d\u0438\u0435 \u043f\u0438\u0442\u043e\u043c\u0446\u044b","img":"pets.png"},\n     {"id":21,"name":"\u043e\u0432\u043e\u0449\u0438 \u0438 \u0444\u0440\u0443\u043a\u0442\u044b","img":"vegetables&fruits.png"},\n     {"id":22,"name":"\u043e\u0440\u0435\u0445\u0438 \u0438 \u0441\u0443\u0445\u043e\u0444\u0440\u0443\u043a\u0442\u044b","img":"nuts-and-dried-fruits.png"}\n]'),K={columns:function(){var n={};return X.forEach((function(e){var a;n["".concat(e.name)]={id:"".concat(e.name),id0:e.id,name:e.name,img:e.img,items:(a=e.id,M.filter((function(n){return n.groupId===a})).map((function(n){if(n.groupId===a)return{id:"".concat(n.id),name:n.name,groupId:n.groupId,groupName:n.groupName}})))}})),n}(),columnOrder:X.map((function(n){return n.name}))};var Q=function(){var n=Object(t.useState)((function(){return K})),e=Object(g.a)(n,2),a=e[0],i=e[1],o=Object(t.useState)(null),s=Object(g.a)(o,2),j=s[0],f=s[1],O=Object(t.useState)(null),h=Object(g.a)(O,2),x=h[0],I=h[1],v=Object(t.useState)(null),N=Object(g.a)(v,2),y=N[0],w=N[1],S=Object(t.useState)(null),k=Object(g.a)(S,2),T=k[0],R=k[1],P=Object(t.useState)(!1),_=Object(g.a)(P,2),E=_[0],A=_[1],L=Object(U.b)().enqueueSnackbar,W=new URLSearchParams(window.location.search).get("code"),F=W?"?code=".concat(W):"",q=z.a.create({baseURL:"https://helper-pepper.com/api/",withCredentials:!1,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"}});return Object(t.useEffect)(Object(p.a)(m.a.mark((function n(){var e,a;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(j||x){n.next=17;break}return A(!0),n.prev=2,n.next=5,q.get("products".concat(F));case 5:return 200===(e=n.sent).status&&f(e.data),n.next=9,q.get("groups".concat(F));case 9:200===(a=n.sent).status&&I(a.data),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(2),L("Can't Connect To Server!",{variant:"error"});case 16:A(!1);case 17:case"end":return n.stop()}}),n,null,[[2,13]])}))),[]),Object(t.useEffect)((function(){if(j&&x){var n=function(n){return j.filter((function(e){return e.groupId===n})).map((function(e){if(e.groupId===n)return{id:"".concat(e.id),name:e.name,groupId:e.groupId,groupName:e.groupName}}))},e={columns:function(){var e={};return x.forEach((function(a){e["".concat(a.name)]={id:"".concat(a.name),id0:a.id,name:a.name,img:a.img,items:n(a.id)}})),e}(),columnOrder:x.map((function(n){return n.name}))};i(e)}}),[j,x]),Object(t.useEffect)(Object(p.a)(m.a.mark((function n(){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!y||!T){n.next=11;break}return n.prev=1,n.next=4,q.put("product/".concat(y,"/group/").concat(T).concat(F));case 4:200===n.sent.status&&(L("Update success!",{variant:"success"}),w(null),R(null)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),L("Update error!",{variant:"error"});case 11:case"end":return n.stop()}}),n,null,[[1,8]])}))),[y,T]),E?Object(C.jsx)(H,{}):0===a.columnOrder.length?Object(C.jsx)("h1",{className:"fake-page",children:"State is empty!"}):Object(C.jsx)(l.a,{onDragEnd:function(n){var e;if(n.destination)if("column"!==n.type)if(n.source.droppableId!==n.destination.droppableId){var t=a.columns[n.source.droppableId],r=a.columns[n.destination.droppableId],o=t.items[n.source.index],s=Object(u.a)(Object(u.a)({},t),{},{items:Object(c.a)(t.items)});s.items.splice(n.source.index,1);var m=Object(u.a)(Object(u.a)({},r),{},{items:Object(c.a)(r.items)});m.items.splice(0,0,o);var p=Object(u.a)(Object(u.a)({},a),{},{columns:Object(u.a)(Object(u.a)({},a.columns),{},(e={},Object(d.a)(e,s.id,s),Object(d.a)(e,m.id,m),e))});i(p),w(o.id),R(m.id0)}else{var g=a.columns[n.source.droppableId],l=b(g.items,n.source.index,0),j=Object(u.a)(Object(u.a)({},a),{},{columns:Object(u.a)(Object(u.a)({},a.columns),{},Object(d.a)({},g.id,Object(u.a)(Object(u.a)({},g),{},{items:l})))});i(j)}else{var f=b(a.columnOrder,n.source.index,n.destination.index);i(Object(u.a)(Object(u.a)({},a),{},{columnOrder:f}))}},children:Object(C.jsx)("div",{className:"app",children:Object(C.jsxs)("div",{className:"columns_wrap",children:[Object(C.jsx)("div",{children:Object(C.jsx)(l.c,{droppableId:"all-droppables1",type:"column",children:function(n){return Object(C.jsxs)("div",Object(u.a)(Object(u.a)({className:"columns"},n.droppableProps),{},{ref:n.innerRef,children:[a.columnOrder.map((function(n,e){return Object(C.jsx)(r.a.Fragment,{children:"\u0440\u0430\u0437\u043d\u043e\u0435"===n&&Object(C.jsx)(D,{columnId:n,column:a.columns[n],index:e})},n)})),n.placeholder]}))}})}),Object(C.jsx)(l.c,{droppableId:"all-droppables",type:"column",children:function(n){return Object(C.jsxs)("div",Object(u.a)(Object(u.a)({className:"columns"},n.droppableProps),{},{ref:n.innerRef,children:[a.columnOrder.map((function(n,e){return Object(C.jsx)(r.a.Fragment,{children:"\u0440\u0430\u0437\u043d\u043e\u0435"!==n&&Object(C.jsx)(D,{column:a.columns[n],index:e})},n)})),n.placeholder]}))}})]})})})},V=function(n){n&&n instanceof Function&&a.e(3).then(a.bind(null,142)).then((function(e){var a=e.getCLS,t=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;a(n),t(n),r(n),i(n),o(n)}))},Y=a(74),Z=a(11),$=3,nn={vertical:"bottom",horizontal:"left"};window.innerWidth<900&&($=1,nn.vertical="top",nn.horizontal="left"),o.a.render(Object(C.jsx)(U.a,{maxSnack:$,dense:!0,anchorOrigin:nn,children:Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(Y.a,{children:Object(C.jsx)(Z.c,{children:Object(C.jsx)(Z.a,{path:"/",children:Object(C.jsx)(Q,{})})})})})}),document.getElementById("root")),V()},84:function(n,e,a){},86:function(n,e,a){}},[[112,1,2]]]);
//# sourceMappingURL=main.a066a265.chunk.js.map