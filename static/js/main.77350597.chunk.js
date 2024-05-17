(this["webpackJsonptodo-ampio"]=this["webpackJsonptodo-ampio"]||[]).push([[0],{125:function(e,t,i){"use strict";i.r(t);var o=i(0),d=i.n(o),a=i(27),n=i.n(a),l=i(182),s=i(185),c=i(187),r=i(188),u=i(93),m=i(183),j=i(178),p=i(177),v=i(89),h=i.n(v),b=i(90),x=i.n(b),O=i(91),f=i.n(O),g=i(88),T=i.n(g),w=i(2);var y=e=>{var t,i,o,a,n,v;const[b,O]=d.a.useState(null),g=Boolean(b);return Object(w.jsx)(l.a,{disabled:"deleted"===(null===e||void 0===e||null===(t=e.item)||void 0===t?void 0:t.status),sx:{boxShadow:1,margin:1,width:"97%",borderRadius:1,bgcolor:"background.paper",display:"flex",justifyContent:"space-between"},children:Object(w.jsxs)(l.a,{disablePadding:!0,children:[Object(w.jsxs)(p.a,{children:[Object(w.jsx)(j.a,{children:"inprogress"===(null===e||void 0===e||null===(i=e.item)||void 0===i?void 0:i.status)?Object(w.jsx)(T.a,{color:"info"}):"completed"===(null===e||void 0===e||null===(o=e.item)||void 0===o?void 0:o.status)?Object(w.jsx)(h.a,{color:"success"}):Object(w.jsx)(x.a,{color:"error"})}),Object(w.jsxs)(s.a,{children:[Object(w.jsx)(c.a,{variant:"body1",children:null===e||void 0===e||null===(a=e.item)||void 0===a?void 0:a.title}),Object(w.jsx)(c.a,{variant:"body2",style:{fontSize:"9px",color:"secondary"},children:null===e||void 0===e||null===(n=e.item)||void 0===n?void 0:n.updatedTime})]})]}),"inprogress"===(null===e||void 0===e||null===(v=e.item)||void 0===v?void 0:v.status)?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(r.a,{id:"demo-positioned-button","aria-controls":g?"demo-positioned-menu":void 0,"aria-haspopup":"true","aria-expanded":g?"true":void 0,onClick:e=>{O(e.currentTarget)},children:Object(w.jsx)(f.a,{})}),Object(w.jsxs)(u.a,{id:"demo-positioned-menu","aria-labelledby":"demo-positioned-button",anchorEl:b,open:g,onClose:()=>{O(null)},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:[Object(w.jsx)(m.a,{onClick:t=>e.handleEdit(null===e||void 0===e?void 0:e.item),children:"Edit"}),Object(w.jsx)(m.a,{onClick:t=>e.handleComplete(null===e||void 0===e?void 0:e.item),children:"Complete"}),Object(w.jsx)(m.a,{onClick:t=>e.handleDelete(null===e||void 0===e?void 0:e.item),children:"Delete"})]})]}):""]})})},C=i(184),S=i(190),D=i(191),B=i(181),k=i(189),E=i(92),F=i.n(E),L=i(66);var I=()=>{const[e,t]=Object(o.useState)(""),[d,a]=Object(o.useState)("add"),[n,l]=Object(o.useState)(null),[u,m]=Object(o.useState)([]),j=i(123);Object(o.useEffect)((()=>{const e=localStorage.getItem("todoList");m(e?JSON.parse(e):null===L||void 0===L?void 0:L.todoList)}),[]),Object(o.useEffect)((()=>{localStorage.setItem("todoList",JSON.stringify(u))}),[u]);const p=e=>new Date(e).toLocaleString("en-GB",{hour12:!1}),v=e=>{a("update"),t(e.title),l(e)},h=e=>{const t={id:e.id,title:e.title,active:e.active,status:"completed",updatedTime:p(new Date),createdTime:e.createdTime};j.fire({title:"Do you want to complete the todo?",icon:"info",showCancelButton:!0,confirmButtonText:"Save"}).then((i=>{i.isConfirmed&&(m((i=>i.map((i=>i.id===e.id?t:i)))),j.fire("Completed!","","success"))}))},b=e=>{const t={id:e.id,title:e.title,active:e.active,status:"deleted",updatedTime:p(new Date),createdTime:e.createdTime};j.fire({title:"Do you want to delete the todo?",icon:"info",showCancelButton:!0,confirmButtonText:"Save"}).then((i=>{i.isConfirmed&&(m((i=>i.map((i=>i.id===e.id?t:i)))),j.fire("Deleted!","","success"))}))};return Object(w.jsx)(C.a,{maxWidth:"sm",sx:{textAlign:"center",marginTop:5},children:Object(w.jsx)(S.a,{variant:"outlined",sx:{boxShadow:3},children:Object(w.jsxs)(D.a,{children:[Object(w.jsx)(c.a,{variant:"h5",component:"div",gutterBottom:!0,children:"Todo List"}),Object(w.jsxs)(s.a,{sx:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:3},children:[Object(w.jsx)(B.a,{variant:"outlined",size:"small",value:e,placeholder:"Add Items",onChange:e=>{t(e.target.value)},sx:{marginRight:1}}),Object(w.jsx)(r.a,{color:"primary",onClick:()=>{if(e){let i={id:"update"===d?null===n||void 0===n?void 0:n.id:(new Date).getTime(),title:e,active:!0,status:"inprogress",updatedTime:p(new Date),createdTime:"update"===d?null===n||void 0===n?void 0:n.createdTime:p(new Date)};m("update"===d?e=>e.map((e=>e.id===n.id?i:e)):e=>[...e,i]),j.fire("update"===d?"Todo update successfully!":"Todo added successfully","","success"),t(""),a(""),l(null)}else j.fire("Please add todo's title!","","warning")},children:Object(w.jsx)(F.a,{})})]}),Object(w.jsx)(k.a,{sx:{maxHeight:"65vh",overflowX:"hidden"},children:null===u||void 0===u?void 0:u.map(((e,t)=>Object(w.jsx)(y,{item:e,id:t,handleEdit:v,handleComplete:h,handleDelete:b},t)))})]})})})};var J=()=>Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(I,{})});n.a.render(Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(J,{})}),document.getElementById("root"))},66:function(e){e.exports=JSON.parse('{"todoList":[{"id":"43","title":"Grocery","active":true,"status":"completed","updatedTime":"13/08/2021","createdTime":"13/08/2021 23:27:22"},{"id":"44","title":"Fruits","active":true,"status":"inprogress","updatedTime":"13/08/2021","createdTime":"13/08/2021 23:27:22"},{"id":"45","title":"Fruits","active":true,"status":"completed","updatedTime":"13/08/2021 23:27:22","createdTime":"13/08/2021 23:27:22"},{"id":"46","title":"Fruits","active":true,"status":"deleted","updatedTime":"13/08/2021 23:27:22","createdTime":"13/08/2021 23:27:22"}]}')}},[[125,1,2]]]);
//# sourceMappingURL=main.77350597.chunk.js.map