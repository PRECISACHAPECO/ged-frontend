(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6364],{92689:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/configuracoes/formularios",function(){return t(73561)}])},93250:function(e,n,t){"use strict";var s=t(85893),i=t(49837),r=t(91359),o=t(40372);let a=e=>{let{result:n,columns:t,btnNew:a=!0,btnPrint:l=!0,openModal:u}=e;return(0,s.jsx)(i.Z,{children:(0,s.jsx)(r.Z,{sx:{pt:"0"},children:(0,s.jsx)(o.Z,{rows:n,columns:t,buttonsHeader:{btnNew:a,btnPrint:l,openModal:u}})})})};n.Z=a},73561:function(e,n,t){"use strict";t.r(n);var s=t(85893),i=t(67294),r=t(60664),o=t(93250),a=t(60565),l=t(83830),u=t(24700),c=t(19011),d=t(47842),x=t(11163),p=t(46749);let m=()=>{let[e,n]=(0,i.useState)(null),t=(0,x.useRouter)(),m=t.pathname,{setTitle:h}=(0,i.useContext)(a.f),{id:f}=(0,i.useContext)(l.X);(0,i.useEffect)(()=>{let e=async()=>{await r.h.get(m).then(e=>{n(e.data),h("Formul\xe1rios")})};e()},[f]);let j=(0,p.OL)(m,[{title:"ID",field:"id",size:.2},{title:"Nome",field:"nome",size:.8}]);return(0,s.jsx)(s.Fragment,{children:e?f&&f>0?1==f?(0,s.jsx)(u.Z,{id:f}):2==f?(0,s.jsx)(c.Z,{id:f}):(0,s.jsx)("h3",{children:"Em desenvolvimento..."}):(0,s.jsx)(o.Z,{result:e,columns:j}):(0,s.jsx)(d.Z,{})})};n.default=m},40372:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var s=t(85893),i=t(67294),r=t(87630),o=t(75680),a=t(61953),l=t(67836),u=t(80562),c=t(50853),d=t(11163),x=t.n(d),p=t(91359),m=t(75084),h=t(41664),f=t.n(h),j=t(40039),Z=t(21609);let g=e=>{let{btnNew:n,btnPrint:t,openModal:r}=e,o=x(),{routes:l}=(0,i.useContext)(j.V);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(p.Z,{sx:{display:"flex",justifyContent:"end",alignItems:"center",p:"0",m:"0"},children:(0,s.jsxs)(a.Z,{sx:{display:"flex",gap:"8px"},children:[t&&(0,s.jsx)(m.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,s.jsx)(Z.Z,{icon:"mdi:printer"}),children:"Imprimir"}),n&&l.find(e=>e.rota===o.pathname&&e.inserir)&&(0,s.jsx)(f(),{href:r?"":"".concat(o.pathname,"/novo"),children:(0,s.jsx)(m.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,s.jsx)(Z.Z,{icon:"ic:outline-plus"}),onClick:r||null,children:"Novo"})})]})})})},b=e=>(0,s.jsxs)(a.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,s.jsxs)(a.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,s.jsx)(l.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,s.jsx)(a.Z,{sx:{mr:2,display:"flex"},children:(0,s.jsx)(Z.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,s.jsx)(u.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,s.jsx)(Z.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,s.jsx)(c.M,{})]}),(0,s.jsx)(a.Z,{children:(0,s.jsx)(g,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,openModal:e.buttonsHeader.openModal})})]});var C=t(60565),w=t(83830);let v=e=>{let{rows:n,columns:t,buttonsHeader:a}=e,{handleSearch:l,pageSize:u,setPageSize:c,searchText:d,filteredData:x,setData:p,data:m}=(0,i.useContext)(C.f),{setId:h}=(0,i.useContext)(w.X);return p(n),(0,s.jsx)(r._,{localeText:o.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:t,pageSize:u,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:b},rows:d?x:m,onCellClick(e,n){h(e.row.id)},onPageSizeChange:e=>c(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer"}},componentsProps:{toolbar:{value:d,clearSearch:()=>l(""),onChange:e=>l(e.target.value),buttonsHeader:a}}})};var y=v}},function(e){e.O(0,[4186,1445,1111,5999,7536,2064,2187,1082,8213,6549,9774,2888,179],function(){return e(e.s=92689)}),_N_E=e.O()}]);