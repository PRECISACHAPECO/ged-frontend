(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5696],{98850:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/cargo",function(){return n(58064)}])},47842:function(e,t,n){"use strict";var s=n(85893),i=n(70754),a=n(61953);let l=e=>{let{title:t}=e;return(0,s.jsxs)(a.Z,{sx:{position:"absolute",top:"50%",left:"50%",textAlign:"center"},children:[(0,s.jsx)(i.Z,{}),(0,s.jsx)("p",{children:null!=t?t:"Carregando..."})]})};t.Z=l},58064:function(e,t,n){"use strict";n.r(t);var s=n(85893),i=n(67294),a=n(60664),l=n(40372),r=n(91359),o=n(60565),c=n(47842),d=n(11163),u=n(46749),x=n(49837);let p=()=>{let[e,t]=(0,i.useState)(null),n=(0,d.useRouter)(),p=n.pathname,{setTitle:m}=(0,i.useContext)(o.f);(0,i.useEffect)(()=>{let e=async()=>{await a.h.get(p).then(e=>{t(e.data),m({title:"Cargo",subtitle:{id:id,count:e.data.length,new:!1}})})};e()},[]);let h=(0,u.OL)(p,[{title:"ID",field:"id",size:.1},{title:"Nome",field:"nome",size:.8},{title:"Status",field:"status",size:.1}]);return(0,s.jsxs)(s.Fragment,{children:[!e&&(0,s.jsx)(c.Z,{}),e&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(x.Z,{children:(0,s.jsx)(r.Z,{sx:{pt:"0"},children:(0,s.jsx)(l.Z,{rows:e,columns:h,buttonsHeader:{btnNew:!0,btnPrint:!0}})})})})]})};t.default=p},40372:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var s=n(85893),i=n(67294),a=n(87630),l=n(75680),r=n(61953),o=n(67836),c=n(80562),d=n(50853),u=n(11163),x=n.n(u),p=n(75084),m=n(41664),h=n.n(m),f=n(40039),j=n(21609);let g=e=>{let{btnNew:t,btnPrint:n,openModal:a}=e,l=x(),{routes:r}=(0,i.useContext)(f.V);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"flex items-center justify-end sm:justify-normal gap-4 my-2 ",children:[(0,s.jsx)("div",{children:n&&(0,s.jsxs)(p.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",sx:{display:"flex",gap:2},children:[(0,s.jsx)(j.Z,{icon:"mdi:printer"}),(0,s.jsx)("span",{className:"hidden sm:block",children:"Imprimir"})]})}),(0,s.jsx)("div",{className:"",children:t&&r.find(e=>e.rota===l.pathname&&e.inserir)&&(0,s.jsx)(h(),{href:a?"":"".concat(l.pathname,"/novo"),children:(0,s.jsxs)(p.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",onClick:a||null,sx:{display:"flex",gap:2},children:[(0,s.jsx)(j.Z,{icon:"ic:outline-plus"}),(0,s.jsx)("span",{className:"hidden sm:block",children:"Novo"})]})})})]})})};var b=n(61225);let w=e=>((0,b.Z)("(min-width:640px)"),(0,s.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"row",gap:2,alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,s.jsxs)(r.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,s.jsx)(o.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,s.jsx)(r.Z,{sx:{mr:2,display:"flex"},children:(0,s.jsx)(j.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,s.jsx)(c.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,s.jsx)(j.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,s.jsx)("div",{className:"hidden sm:block",children:(0,s.jsx)(d.M,{})})]}),(0,s.jsx)(g,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,openModal:e.buttonsHeader.openModal})]}));var v=n(60565),C=n(83830);let Z=e=>{let{rows:t,columns:n,buttonsHeader:r}=e,{handleSearch:o,pageSize:c,setPageSize:d,searchText:u,filteredData:x,setData:p,data:m}=(0,i.useContext)(v.f),{setId:h}=(0,i.useContext)(C.X);return p(t),(0,s.jsx)(a._,{localeText:l.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:n,pageSize:c,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:w},rows:u?x:m,onCellClick(e,t){h(e.row.id)},onPageSizeChange:e=>d(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer",overflow:"scroll"}},componentsProps:{toolbar:{value:u,clearSearch:()=>o(""),onChange:e=>o(e.target.value),buttonsHeader:r}}})};var y=Z}},function(e){e.O(0,[2064,1082,9774,2888,179],function(){return e(e.s=98850)}),_N_E=e.O()}]);