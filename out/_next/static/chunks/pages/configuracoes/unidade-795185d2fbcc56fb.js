(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6138],{94516:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/configuracoes/unidade",function(){return t(78736)}])},93250:function(e,n,t){"use strict";var s=t(85893),a=t(49837),i=t(91359),l=t(95722);let r=e=>{let{result:n,columns:t,btnNew:r=!0,btnPrint:o=!0,btnBack:c,openModal:d}=e;return(0,s.jsx)(a.Z,{children:(0,s.jsx)(i.Z,{sx:{pt:"0"},children:(0,s.jsx)(l.Z,{rows:n,columns:t,buttonsHeader:{btnNew:r,btnPrint:o,btnBack:c,openModal:d}})})})};n.Z=r},78736:function(e,n,t){"use strict";t.r(n);var s=t(85893),a=t(67294),i=t(60664);t(95722);var l=t(93250),r=t(48806),o=t(60565),c=t(83830),d=t(40039),u=t(47842),x=t(11163),m=t(46749);let h=()=>{let[e,n]=(0,a.useState)(null),t=(0,x.useRouter)(),h=t.pathname,{setTitle:p}=(0,a.useContext)(o.f),{id:b}=(0,a.useContext)(c.X),{user:f,loggedUnity:j}=(0,a.useContext)(d.V);(0,a.useEffect)(()=>{let e=async()=>{await i.h.get("".concat(h,"?admin=").concat(f.admin,"&unidadeID=").concat(j.unidadeID,"&usuarioID=").concat(f.usuarioID)).then(e=>{n(e.data),p({title:"Unidade",subtitle:{id:b,count:e.data.length,new:!1}})})};e()},[b]);let v=(0,m.OL)(h,[{title:"ID",field:"id",size:.1},{title:"Nome",field:"nome",size:.8},{headerName:"Status",field:{name:"status",cor:"cor"},size:.1}]);return(0,s.jsx)(s.Fragment,{children:e?b&&b>0?(0,s.jsx)(r.Z,{id:b}):(0,s.jsx)(l.Z,{result:e,columns:v}):(0,s.jsx)(u.Z,{})})};n.default=h},84242:function(e,n,t){"use strict";t.d(n,{Z:function(){return C}});var s=t(85893),a=t(61953),i=t(67836),l=t(80562),r=t(50853),o=t(11163),c=t.n(o),d=t(75084),u=t(41664),x=t.n(u),m=t(40039),h=t(67294),p=t(83830),b=t(46749),f=t(21609);let j=e=>{let{btnNew:n,btnPrint:t,btnSave:a,btnBack:i,handleSave:l,hasListChange:r,openModal:o}=e,u=c(),{setId:j}=(0,h.useContext)(p.X),{routes:v}=(0,h.useContext)(m.V);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"flex items-center justify-between my-2 w-full",children:[(0,s.jsx)("div",{}),(0,s.jsxs)("div",{className:"flex items-center gap-4 ",children:[(0,s.jsx)("div",{children:t&&(0,s.jsxs)(d.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",sx:{display:"flex",gap:2},children:[(0,s.jsx)(f.Z,{icon:"mdi:printer"}),(0,s.jsx)("span",{className:"hidden sm:block",children:"Imprimir"})]})}),(0,s.jsx)("div",{className:"",children:n&&v.find(e=>(e.rota===u.pathname||e.rota===(0,b.g_)(u.pathname))&&e.inserir)&&(0,s.jsx)(x(),{href:o?"":"".concat(u.pathname,"/novo"),children:(0,s.jsxs)(d.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",onClick:o||null,sx:{display:"flex",gap:2},children:[(0,s.jsx)(f.Z,{icon:"ic:outline-plus"}),(0,s.jsx)("span",{className:"hidden sm:block",children:"Novo"})]})})}),(0,s.jsx)("div",{children:a&&(0,s.jsxs)(d.Z,{onClick:l,disabled:!r,type:"button",variant:"outlined",color:"primary",size:"medium",sx:{display:"flex",gap:2},children:[(0,s.jsx)(f.Z,{icon:"mdi:check-bold"}),(0,s.jsx)("span",{className:"hidden sm:block",children:"Salvar"})]})})]})]})})};var v=t(61225);let g=e=>{let n=c(),{setId:t}=(0,h.useContext)(p.X);return(0,v.Z)("(min-width:640px)"),(0,s.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"row",gap:2,alignItems:"center",mb:2,justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,s.jsxs)(a.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[e.buttonsHeader.btnBack&&(0,s.jsx)(d.Z,{onClick(){n.push((0,b.g_)(n.pathname)),t(null)},type:"button",variant:"outlined",color:"primary",size:"small",children:(0,s.jsx)(f.Z,{icon:"material-symbols:arrow-back-rounded"})}),(0,s.jsx)(i.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,s.jsx)(a.Z,{sx:{mr:2,display:"flex"},children:(0,s.jsx)(f.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,s.jsx)(l.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,s.jsx)(f.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,s.jsx)("div",{className:"hidden sm:block ",children:(0,s.jsx)(r.M,{className:"!h-full"})})]}),(0,s.jsx)(j,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,btnBack:e.buttonsHeader.btnBack,btnSave:e.buttonsHeader.btnSave,handleSave:e.buttonsHeader.handleSave,hasListChange:e.hasChange,openModal:e.buttonsHeader.openModal})]})};var C=g},95722:function(e,n,t){"use strict";var s=t(85893),a=t(67294),i=t(87630),l=t(75680),r=t(84242),o=t(60565),c=t(83830);let d=e=>{let{rows:n,columns:t,buttonsHeader:d}=e,{handleSearch:u,pageSize:x,setPageSize:m,searchText:h,filteredData:p,setData:b,data:f}=(0,a.useContext)(o.f),{setId:j}=(0,a.useContext)(c.X);return b(n),(0,s.jsx)(i._,{localeText:l.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:t,pageSize:x,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:r.Z},rows:h?p:f,onCellClick(e,n){j(e.row.id)},onPageSizeChange:e=>m(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer",overflow:"scroll"}},componentsProps:{toolbar:{value:h,clearSearch:()=>u(""),onChange:e=>u(e.target.value),buttonsHeader:d}}})};n.Z=d}},function(e){e.O(0,[4186,1445,1111,5999,2389,2187,9349,5876,8806,9774,2888,179],function(){return e(e.s=94516)}),_N_E=e.O()}]);