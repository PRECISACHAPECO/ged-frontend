(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1994],{8061:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/grupo-anexos",function(){return t(21829)}])},93250:function(e,n,t){"use strict";var s=t(85893),a=t(49837),r=t(91359),i=t(40372);let o=e=>{let{result:n,columns:t,btnNew:o=!0,btnPrint:l=!0,openModal:u}=e;return(0,s.jsx)(a.Z,{children:(0,s.jsx)(r.Z,{sx:{pt:"0"},children:(0,s.jsx)(i.Z,{rows:n,columns:t,buttonsHeader:{btnNew:o,btnPrint:l,openModal:u}})})})};n.Z=o},21829:function(e,n,t){"use strict";t.r(n);var s=t(85893),a=t(67294),r=t(60664),i=t(93250),o=t(60565),l=t(83830),u=t(88237),c=t(47842),d=t(11163),x=t(46749);let p=()=>{let[e,n]=(0,a.useState)(null),t=(0,d.useRouter)(),p=t.pathname,{setTitle:m}=(0,a.useContext)(o.f),{id:h}=(0,a.useContext)(l.X),f=async()=>{await r.h.get(p).then(e=>{n(e.data),console.log("ta vindo",e.data),m("Requisitos de anexos")})};(0,a.useEffect)(()=>{f()},[h]);let j=(0,x.OL)(p,[{headerName:"ID",field:"id",size:.1},{headerName:"Nome",field:"nome",size:.6},{headerName:"Descri\xe7\xe3o",field:"descricao",size:.6},{headerName:"Status",field:"status",size:.1}]);return(0,s.jsx)(s.Fragment,{children:e?h&&h>0?(0,s.jsx)(u.Z,{id:h}):(0,s.jsx)(i.Z,{result:e,columns:j}):(0,s.jsx)(c.Z,{})})};p.acl={action:"read",subject:"acl-page"},n.default=p},40372:function(e,n,t){"use strict";t.d(n,{Z:function(){return N}});var s=t(85893),a=t(67294),r=t(87630),i=t(75680),o=t(61953),l=t(67836),u=t(80562),c=t(50853),d=t(11163),x=t.n(d),p=t(91359),m=t(75084),h=t(41664),f=t.n(h),j=t(40039),g=t(21609);let Z=e=>{let{btnNew:n,btnPrint:t,openModal:r}=e,i=x(),{routes:l}=(0,a.useContext)(j.V);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(p.Z,{sx:{display:"flex",justifyContent:"end",alignItems:"center",p:"0",m:"0"},children:(0,s.jsxs)(o.Z,{sx:{display:"flex",gap:"8px"},children:[t&&(0,s.jsx)(m.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,s.jsx)(g.Z,{icon:"mdi:printer"}),children:"Imprimir"}),n&&l.find(e=>e.rota===i.pathname&&e.inserir)&&(0,s.jsx)(f(),{href:r?"":"".concat(i.pathname,"/novo"),children:(0,s.jsx)(m.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,s.jsx)(g.Z,{icon:"ic:outline-plus"}),onClick:r||null,children:"Novo"})})]})})})},b=e=>(0,s.jsxs)(o.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,s.jsxs)(o.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,s.jsx)(l.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,s.jsx)(o.Z,{sx:{mr:2,display:"flex"},children:(0,s.jsx)(g.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,s.jsx)(u.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,s.jsx)(g.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,s.jsx)(c.M,{})]}),(0,s.jsx)(o.Z,{children:(0,s.jsx)(Z,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,openModal:e.buttonsHeader.openModal})})]});var C=t(60565),w=t(83830);let v=e=>{let{rows:n,columns:t,buttonsHeader:o}=e,{handleSearch:l,pageSize:u,setPageSize:c,searchText:d,filteredData:x,setData:p,data:m}=(0,a.useContext)(C.f),{setId:h}=(0,a.useContext)(w.X);return p(n),(0,s.jsx)(r._,{localeText:i.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:t,pageSize:u,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:b},rows:d?x:m,onCellClick(e,n){h(e.row.id)},onPageSizeChange:e=>c(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer"}},componentsProps:{toolbar:{value:d,clearSearch:()=>l(""),onChange:e=>l(e.target.value),buttonsHeader:o}}})};var N=v}},function(e){e.O(0,[4186,1445,1111,5999,7536,2064,2187,1082,8213,8237,9774,2888,179],function(){return e(e.s=8061)}),_N_E=e.O()}]);