(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7836],{19964:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/configuracoes/usuario",function(){return t(78241)}])},93250:function(e,n,t){"use strict";var s=t(85893),i=t(49837),a=t(91359),l=t(40372);let r=e=>{let{result:n,columns:t,btnNew:r=!0,btnPrint:o=!0,openModal:c}=e;return(0,s.jsx)(i.Z,{children:(0,s.jsx)(a.Z,{sx:{pt:"0"},children:(0,s.jsx)(l.Z,{rows:n,columns:t,buttonsHeader:{btnNew:r,btnPrint:o,openModal:c}})})})};n.Z=r},78241:function(e,n,t){"use strict";t.r(n);var s=t(85893),i=t(67294),a=t(60664),l=t(93250),r=t(60565),o=t(83830),c=t(40039),d=t(25519),u=t(47842),x=t(11163),p=t(46749);let m=()=>{let[e,n]=(0,i.useState)(null),t=(0,x.useRouter)(),m=t.pathname,{setTitle:h}=(0,i.useContext)(r.f),{id:f}=(0,i.useContext)(o.X),{loggedUnity:j}=(0,i.useContext)(c.V);(0,i.useEffect)(()=>{let e=async()=>{await a.h.get("".concat(m,"?unidadeID=").concat(j.unidadeID,"&papelID=").concat(j.papelID)).then(e=>{n(e.data),h({title:"Usu\xe1rio",subtitle:{id:f,count:e.data.length,new:!1}})})};e()},[f]);let b=(0,p.OL)(m,[{title:"ID",field:"id",size:.1},{title:"Nome",field:"nome",size:.8},{title:"Status",field:"status",size:.1}]);return(0,s.jsx)(s.Fragment,{children:e?f?(0,s.jsx)(d.Z,{id:f}):(0,s.jsx)(l.Z,{result:e,columns:b}):(0,s.jsx)(u.Z,{})})};n.default=m},40372:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var s=t(85893),i=t(67294),a=t(87630),l=t(75680),r=t(61953),o=t(67836),c=t(80562),d=t(50853),u=t(11163),x=t.n(u),p=t(75084),m=t(41664),h=t.n(m),f=t(40039),j=t(21609);let b=e=>{let{btnNew:n,btnPrint:t,openModal:a}=e,l=x(),{routes:r}=(0,i.useContext)(f.V);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"flex items-center justify-end sm:justify-normal gap-4 my-2 ",children:[(0,s.jsx)("div",{children:t&&(0,s.jsxs)(p.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",sx:{display:"flex",gap:2},children:[(0,s.jsx)(j.Z,{icon:"mdi:printer"}),(0,s.jsx)("span",{className:"hidden sm:block",children:"Imprimir"})]})}),(0,s.jsx)("div",{className:"",children:n&&r.find(e=>e.rota===l.pathname&&e.inserir)&&(0,s.jsx)(h(),{href:a?"":"".concat(l.pathname,"/novo"),children:(0,s.jsxs)(p.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",onClick:a||null,sx:{display:"flex",gap:2},children:[(0,s.jsx)(j.Z,{icon:"ic:outline-plus"}),(0,s.jsx)("span",{className:"hidden sm:block",children:"Novo"})]})})})]})})};var g=t(61225);let w=e=>((0,g.Z)("(min-width:640px)"),(0,s.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"row",gap:2,alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,s.jsxs)(r.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,s.jsx)(o.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,s.jsx)(r.Z,{sx:{mr:2,display:"flex"},children:(0,s.jsx)(j.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,s.jsx)(c.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,s.jsx)(j.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,s.jsx)("div",{className:"hidden sm:block",children:(0,s.jsx)(d.M,{})})]}),(0,s.jsx)(b,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,openModal:e.buttonsHeader.openModal})]}));var v=t(60565),C=t(83830);let Z=e=>{let{rows:n,columns:t,buttonsHeader:r}=e,{handleSearch:o,pageSize:c,setPageSize:d,searchText:u,filteredData:x,setData:p,data:m}=(0,i.useContext)(v.f),{setId:h}=(0,i.useContext)(C.X);return p(n),(0,s.jsx)(a._,{localeText:l.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:t,pageSize:c,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:w},rows:u?x:m,onCellClick(e,n){h(e.row.id)},onPageSizeChange:e=>d(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer",overflow:"scroll"}},componentsProps:{toolbar:{value:u,clearSearch:()=>o(""),onChange:e=>o(e.target.value),buttonsHeader:r}}})};var y=Z}},function(e){e.O(0,[4186,1445,1111,5999,7536,2064,2187,1082,7284,8213,5519,9774,2888,179],function(){return e(e.s=19964)}),_N_E=e.O()}]);