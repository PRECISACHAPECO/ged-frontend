(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2031],{68473:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/item",function(){return n(67257)}])},93250:function(e,t,n){"use strict";var s=n(85893),i=n(49837),a=n(91359),l=n(95722);let r=e=>{let{result:t,columns:n,btnNew:r=!0,btnPrint:o=!0,openModal:d}=e;return(0,s.jsx)(i.Z,{children:(0,s.jsx)(a.Z,{sx:{pt:"0"},children:(0,s.jsx)(l.Z,{rows:t,columns:n,buttonsHeader:{btnNew:r,btnPrint:o,openModal:d}})})})};t.Z=r},67257:function(e,t,n){"use strict";n.r(t);var s=n(85893),i=n(67294),a=n(60664),l=n(90492),r=n(93250),o=n(60565),d=n(83830),c=n(47842),u=n(11163),x=n(46749);let m=()=>{let[e,t]=(0,i.useState)(null),n=(0,u.useRouter)(),m=n.pathname,{setTitle:p}=(0,i.useContext)(o.f),{id:h}=(0,i.useContext)(d.X),f=async()=>{await a.h.get(m).then(e=>{t(e.data),p({title:"Item",subtitle:{id:h,count:e.data.length,new:!1}})})};(0,i.useEffect)(()=>{f()},[h]);let j=(0,x.OL)(m,[{title:"ID",field:"id",size:.1},{title:"Nome",field:"nome",size:.6},{title:"Formul\xe1rio",field:"formulario",size:.2},{title:"Status",field:"status",size:.1}]);return(0,s.jsx)(s.Fragment,{children:e?h&&h>0?(0,s.jsx)(l.Z,{id:h}):(0,s.jsx)(r.Z,{result:e,columns:j}):(0,s.jsx)(c.Z,{})})};m.acl={action:"read",subject:"acl-page"},t.default=m},84242:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var s=n(85893),i=n(61953),a=n(67836),l=n(80562),r=n(50853),o=n(11163),d=n.n(o),c=n(75084),u=n(41664),x=n.n(u),m=n(40039),p=n(67294),h=n(21609);let f=e=>{let{btnNew:t,btnPrint:n,btnSave:i,handleSave:a,hasListChange:l,openModal:r}=e,o=d(),{routes:u}=(0,p.useContext)(m.V);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"flex items-center justify-end sm:justify-normal gap-4 my-2 ",children:[(0,s.jsx)("div",{children:n&&(0,s.jsxs)(c.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",sx:{display:"flex",gap:2},children:[(0,s.jsx)(h.Z,{icon:"mdi:printer"}),(0,s.jsx)("span",{className:"hidden sm:block",children:"Imprimir"})]})}),(0,s.jsx)("div",{className:"",children:t&&u.find(e=>e.rota===o.pathname&&e.inserir)&&(0,s.jsx)(x(),{href:r?"":"".concat(o.pathname,"/novo"),children:(0,s.jsxs)(c.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",onClick:r||null,sx:{display:"flex",gap:2},children:[(0,s.jsx)(h.Z,{icon:"ic:outline-plus"}),(0,s.jsx)("span",{className:"hidden sm:block",children:"Novo"})]})})}),(0,s.jsx)("div",{children:i&&(0,s.jsxs)(c.Z,{onClick:a,disabled:!l,type:"button",variant:"outlined",color:"primary",size:"medium",sx:{display:"flex",gap:2},children:[(0,s.jsx)(h.Z,{icon:"mdi:check-bold"}),(0,s.jsx)("span",{className:"hidden sm:block",children:"Salvar"})]})})]})})};var j=n(61225);let b=e=>((0,j.Z)("(min-width:640px)"),(0,s.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"row",gap:2,alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,s.jsxs)(i.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,s.jsx)(a.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,s.jsx)(i.Z,{sx:{mr:2,display:"flex"},children:(0,s.jsx)(h.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,s.jsx)(l.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,s.jsx)(h.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,s.jsx)("div",{className:"hidden sm:block",children:(0,s.jsx)(r.M,{})})]}),(0,s.jsx)(f,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,btnSave:e.buttonsHeader.btnSave,handleSave:e.buttonsHeader.handleSave,hasListChange:e.hasChange,openModal:e.buttonsHeader.openModal})]}));var v=b},95722:function(e,t,n){"use strict";var s=n(85893),i=n(67294),a=n(87630),l=n(75680),r=n(84242),o=n(60565),d=n(83830);let c=e=>{let{rows:t,columns:n,buttonsHeader:c}=e,{handleSearch:u,pageSize:x,setPageSize:m,searchText:p,filteredData:h,setData:f,data:j}=(0,i.useContext)(o.f),{setId:b}=(0,i.useContext)(d.X);return f(t),(0,s.jsx)(a._,{localeText:l.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:n,pageSize:x,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:r.Z},rows:p?h:j,onCellClick(e,t){b(e.row.id)},onPageSizeChange:e=>m(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer",overflow:"scroll"}},componentsProps:{toolbar:{value:p,clearSearch:()=>u(""),onChange:e=>u(e.target.value),buttonsHeader:c}}})};t.Z=c}},function(e){e.O(0,[4186,1445,1111,5999,7536,6668,2187,1082,9297,492,9774,2888,179],function(){return e(e.s=68473)}),_N_E=e.O()}]);