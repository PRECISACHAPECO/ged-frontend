(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1994],{8061:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/grupo-anexos",function(){return n(21829)}])},93250:function(e,t,n){"use strict";var s=n(85893),a=n(49837),r=n(91359),i=n(40372);let o=e=>{let{result:t,columns:n,btnNew:o=!0,btnPrint:l=!0,openModal:u}=e;return(0,s.jsx)(a.Z,{children:(0,s.jsx)(r.Z,{sx:{pt:"0"},children:(0,s.jsx)(i.Z,{rows:t,columns:n,buttonsHeader:{btnNew:o,btnPrint:l,openModal:u}})})})};t.Z=o},21829:function(e,t,n){"use strict";n.r(t);var s=n(85893),a=n(67294),r=n(60664),i=n(93250),o=n(60565),l=n(83830),u=n(88237),c=n(47842),d=n(11163),x=n(46749);let p=()=>{let[e,t]=(0,a.useState)(null),n=(0,d.useRouter)(),p=n.pathname,{setTitle:m}=(0,a.useContext)(o.f),{id:h}=(0,a.useContext)(l.X),f=async()=>{await r.h.get(p).then(e=>{t(e.data),console.log("ta vindo",e.data),m({title:"Grupo de Anexos",subtitle:{id:h,count:e.data.length,new:!1}})})};(0,a.useEffect)(()=>{f()},[h]);let j=(0,x.OL)(p,[{headerName:"ID",field:"id",size:.1},{headerName:"Nome",field:"nome",size:.6},{headerName:"Descri\xe7\xe3o",field:"descricao",size:.6},{headerName:"Status",field:"status",size:.1}]);return(0,s.jsx)(s.Fragment,{children:e?h&&h>0?(0,s.jsx)(u.Z,{id:h}):(0,s.jsx)(i.Z,{result:e,columns:j}):(0,s.jsx)(c.Z,{})})};p.acl={action:"read",subject:"acl-page"},t.default=p},40372:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var s=n(85893),a=n(67294),r=n(87630),i=n(75680),o=n(61953),l=n(67836),u=n(80562),c=n(50853),d=n(11163),x=n.n(d),p=n(91359),m=n(75084),h=n(41664),f=n.n(h),j=n(40039),g=n(21609);let b=e=>{let{btnNew:t,btnPrint:n,openModal:r}=e,i=x(),{routes:l}=(0,a.useContext)(j.V);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(p.Z,{sx:{display:"flex",justifyContent:"end",alignItems:"center",p:"0",m:"0"},children:(0,s.jsxs)(o.Z,{sx:{display:"flex",gap:"8px"},children:[n&&(0,s.jsx)(m.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,s.jsx)(g.Z,{icon:"mdi:printer"}),children:"Imprimir"}),t&&l.find(e=>e.rota===i.pathname&&e.inserir)&&(0,s.jsx)(f(),{href:r?"":"".concat(i.pathname,"/novo"),children:(0,s.jsx)(m.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,s.jsx)(g.Z,{icon:"ic:outline-plus"}),onClick:r||null,children:"Novo"})})]})})})},Z=e=>(0,s.jsxs)(o.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,s.jsxs)(o.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,s.jsx)(l.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,s.jsx)(o.Z,{sx:{mr:2,display:"flex"},children:(0,s.jsx)(g.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,s.jsx)(u.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,s.jsx)(g.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,s.jsx)(c.M,{})]}),(0,s.jsx)(o.Z,{children:(0,s.jsx)(b,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,openModal:e.buttonsHeader.openModal})})]});var w=n(60565),C=n(83830);let v=e=>{let{rows:t,columns:n,buttonsHeader:o}=e,{handleSearch:l,pageSize:u,setPageSize:c,searchText:d,filteredData:x,setData:p,data:m}=(0,a.useContext)(w.f),{setId:h}=(0,a.useContext)(C.X);return p(t),(0,s.jsx)(r._,{localeText:i.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:n,pageSize:u,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:Z},rows:d?x:m,onCellClick(e,t){h(e.row.id)},onPageSizeChange:e=>c(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer"}},componentsProps:{toolbar:{value:d,clearSearch:()=>l(""),onChange:e=>l(e.target.value),buttonsHeader:o}}})};var N=v}},function(e){e.O(0,[4186,1445,1111,5999,7536,2064,2187,1082,8213,8237,9774,2888,179],function(){return e(e.s=8061)}),_N_E=e.O()}]);