(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],[,,function(e,t,n){e.exports={"modal-backdrop":"ModelWindow_modal-backdrop__ev6o-","modal-window":"ModelWindow_modal-window__14m86","modal-header":"ModelWindow_modal-header__2IBEH","close-button":"ModelWindow_close-button__1ZAd7","modal-body":"ModelWindow_modal-body__20OAk","error-message":"ModelWindow_error-message__3qozT",button:"ModelWindow_button__a2RwR"}},,,function(e,t,n){e.exports={form:"AddUserForm_form__jJc2d",input:"AddUserForm_input__1kDxm",button:"AddUserForm_button__s31hG"}},function(e,t,n){e.exports={"user-info":"UserInfo_user-info__1bzWu",label:"UserInfo_label__3oKnU",delete:"UserInfo_delete__nsCVZ"}},,,function(e,t,n){e.exports={App:"App_App__16ZpL","delete-all":"App_delete-all__3WDz6"}},,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(10),c=n.n(r),s=(n(16),n(11)),l=n(3),a=n(5),d=n(2),i=n(0),u=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:d["modal-backdrop"],onClick:e.onConfirm}),Object(i.jsxs)("div",{className:d["modal-window"],children:[Object(i.jsx)("div",{className:d["modal-header"],children:Object(i.jsx)("h2",{children:"Invalid Input"})}),Object(i.jsx)("div",{className:d["modal-body"],children:Object(i.jsx)("p",{className:d["error-message"],children:e.errors})}),Object(i.jsx)("button",{type:"button",className:d.button,onClick:e.onConfirm,children:"Close"})]})]})},j=function(e){var t=Object(o.useState)(""),n=Object(l.a)(t,2),r=n[0],c=n[1],s=Object(o.useState)(""),d=Object(l.a)(s,2),j=d[0],b=d[1],m=Object(o.useState)(""),p=Object(l.a)(m,2),O=p[0],h=p[1];return Object(i.jsxs)("div",{children:[O&&Object(i.jsx)(u,{errors:O,onConfirm:function(){h(null)}}),Object(i.jsxs)("form",{className:a.form,children:[Object(i.jsxs)("div",{className:a.input,children:[Object(i.jsx)("label",{children:"Enter your Name"}),Object(i.jsx)("input",{type:"text",value:r,onChange:function(e){c(e.target.value)}})]}),Object(i.jsxs)("div",{className:a.input,children:[Object(i.jsx)("label",{children:"Enter your Age"}),Object(i.jsx)("input",{type:"number",value:j,onChange:function(e){b(e.target.value)}})]}),Object(i.jsx)("button",{type:"submit",className:a.button,onClick:function(t){t.preventDefault();var n={id:Math.random().toString(),name:r,age:j};0!==r.trim().length&&0!==j.trim().length||h("Error: Input fields are empty!"),+j<0&&h("Error: Age must be greater than 0!"),e.addUserInList(n),c(""),b("")},children:"Add User"})]})]})},b=n(6),m=function(e){return Object(i.jsx)("li",{children:Object(i.jsxs)("div",{className:b["user-info"],children:[Object(i.jsx)("p",{className:b.label,children:"Username:"}),Object(i.jsx)("p",{children:e.name}),Object(i.jsx)("p",{className:b.label,children:"Age:"}),Object(i.jsx)("p",{children:e.age}),Object(i.jsx)("button",{type:"button",className:b.delete,onClick:function(){e.ondelete(e.id)},children:"Delete"})]})})},p=function(e){var t=e.renderUsers.map((function(t){return Object(i.jsx)(m,{name:t.name,age:t.age,id:t.id,ondelete:e.onDelete})}));return Object(i.jsx)("ul",{style:{listStyleType:"none"},children:t})},O=n(9),h=[],_=function(){var e=Object(o.useState)((function(){try{var e=window.localStorage.getItem("users");return e?JSON.parse(e):h}catch(t){return console.log(t),h}})),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(o.useEffect)((function(){try{window.localStorage.setItem("users",JSON.stringify(n))}catch(e){console.log(e)}}),[n]),Object(i.jsxs)("div",{className:O.App,children:[Object(i.jsx)("h1",{children:"Add User App"}),Object(i.jsx)(j,{addUserInList:function(e){console.log(e),r([e].concat(Object(s.a)(n)))}}),0!==n.length&&Object(i.jsx)("button",{type:"button",class:O["delete-all"],onClick:function(){r([])},children:"Delete All"}),Object(i.jsx)(p,{renderUsers:n,onDelete:function(e){var t=n.filter((function(t){return t.id!==e}));r(t)}})]})};c.a.render(Object(i.jsx)(_,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.af61a2c2.chunk.js.map