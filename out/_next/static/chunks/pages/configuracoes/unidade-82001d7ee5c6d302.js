(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6138],{94516:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/configuracoes/unidade",function(){return n(78736)}])},93250:function(e,t,n){"use strict";var i=n(85893),s=n(49837),a=n(91359),r=n(40372);let o=e=>{let{result:t,columns:n,btnNew:o=!0,btnPrint:l=!0,openModal:u}=e;return(0,i.jsx)(s.Z,{children:(0,i.jsx)(a.Z,{sx:{pt:"0"},children:(0,i.jsx)(r.Z,{rows:t,columns:n,buttonsHeader:{btnNew:o,btnPrint:l,openModal:u}})})})};t.Z=o},78736:function(e,t,n){"use strict";n.r(t);var i=n(85893),s=n(67294),a=n(60664);n(40372);var r=n(93250),o=n(88773),l=n(60565),u=n(83830),c=n(40039),d=n(47842),x=n(11163),p=n(46749);let m=()=>{let[e,t]=(0,s.useState)(null),n=(0,x.useRouter)(),m=n.pathname,{setTitle:h}=(0,s.useContext)(l.f),{id:f}=(0,s.useContext)(u.X),{user:j,loggedUnity:g}=(0,s.useContext)(c.V);(0,s.useEffect)(()=>{let e=async()=>{await a.h.get("".concat(m,"?admin=").concat(j.admin,"&unidadeID=").concat(g.unidadeID,"&usuarioID=").concat(j.usuarioID)).then(e=>{t(e.data),h({title:"Unidade",subtitle:{id:f,count:e.data.length,new:!1}})})};e()},[f]);let Z=(0,p.OL)(m,[{title:"ID",field:"id",size:.1},{title:"Nome",field:"nome",size:.8},{title:"Status",field:"status",size:.1}]);return(0,i.jsx)(i.Fragment,{children:e?f&&f>0?(0,i.jsx)(o.Z,{id:f}):(0,i.jsx)(r.Z,{result:e,columns:Z}):(0,i.jsx)(d.Z,{})})};t.default=m},40372:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var i=n(85893),s=n(67294),a=n(87630),r=n(75680),o=n(61953),l=n(67836),u=n(80562),c=n(50853),d=n(11163),x=n.n(d),p=n(91359),m=n(75084),h=n(41664),f=n.n(h),j=n(40039),g=n(21609);let Z=e=>{let{btnNew:t,btnPrint:n,openModal:a}=e,r=x(),{routes:l}=(0,s.useContext)(j.V);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(p.Z,{sx:{display:"flex",justifyContent:"end",alignItems:"center",p:"0",m:"0"},children:(0,i.jsxs)(o.Z,{sx:{display:"flex",gap:"8px"},children:[n&&(0,i.jsx)(m.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,i.jsx)(g.Z,{icon:"mdi:printer"}),children:"Imprimir"}),t&&l.find(e=>e.rota===r.pathname&&e.inserir)&&(0,i.jsx)(f(),{href:a?"":"".concat(r.pathname,"/novo"),children:(0,i.jsx)(m.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,i.jsx)(g.Z,{icon:"ic:outline-plus"}),onClick:a||null,children:"Novo"})})]})})})},b=e=>(0,i.jsxs)(o.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,i.jsxs)(o.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,i.jsx)(l.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,i.jsx)(o.Z,{sx:{mr:2,display:"flex"},children:(0,i.jsx)(g.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,i.jsx)(u.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,i.jsx)(g.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,i.jsx)(c.M,{})]}),(0,i.jsx)(o.Z,{children:(0,i.jsx)(Z,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,openModal:e.buttonsHeader.openModal})})]});var C=n(60565),w=n(83830);let v=e=>{let{rows:t,columns:n,buttonsHeader:o}=e,{handleSearch:l,pageSize:u,setPageSize:c,searchText:d,filteredData:x,setData:p,data:m}=(0,s.useContext)(C.f),{setId:h}=(0,s.useContext)(w.X);return p(t),(0,i.jsx)(a._,{localeText:r.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:n,pageSize:u,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:b},rows:d?x:m,onCellClick(e,t){h(e.row.id)},onPageSizeChange:e=>c(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer"}},componentsProps:{toolbar:{value:d,clearSearch:()=>l(""),onChange:e=>l(e.target.value),buttonsHeader:o}}})};var y=v}},function(e){e.O(0,[4186,1445,1111,5999,7536,2064,2187,1082,8213,8773,9774,2888,179],function(){return e(e.s=94516)}),_N_E=e.O()}]);