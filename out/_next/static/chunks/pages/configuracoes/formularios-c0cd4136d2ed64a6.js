(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6364],{92689:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/configuracoes/formularios",function(){return n(73561)}])},93250:function(e,t,n){"use strict";var s=n(85893),a=n(49837),l=n(91359),i=n(95722);let r=e=>{let{result:t,columns:n,btnNew:r=!0,btnPrint:o=!0,btnBack:c,openModal:d}=e;return(0,s.jsx)(a.Z,{children:(0,s.jsx)(l.Z,{sx:{pt:"0"},children:(0,s.jsx)(i.Z,{rows:t,columns:n,buttonsHeader:{btnNew:r,btnPrint:o,btnBack:c,openModal:d}})})})};t.Z=r},47842:function(e,t,n){"use strict";var s=n(85893),a=n(70754);let l=e=>{let{show:t,title:n}=e;return t&&(0,s.jsx)("div",{className:"absolute inset-0 flex items-center justify-center rounded-lg z-50",children:(0,s.jsxs)("div",{className:"flex flex-col justify-center items-center gap-2 ",children:[(0,s.jsx)(a.Z,{color:"primary"}),(0,s.jsx)("p",{className:"text-sm opacity-80",children:null!=n?n:"Carregando..."})]})})};t.Z=l},73561:function(e,t,n){"use strict";n.r(t);var s=n(85893),a=n(67294),l=n(60664),i=n(93250),r=n(60565),o=n(83830),c=n(47842),d=n(11163),u=n(46749);let m=()=>{let[e,t]=(0,a.useState)(null),n=(0,d.useRouter)(),m=n.pathname,{setTitle:x}=(0,a.useContext)(r.f),{id:p,setId:h}=(0,a.useContext)(o.X);(0,a.useEffect)(()=>{let e=async()=>{await l.h.get(m).then(e=>{t(e.data),x({title:"Formul\xe1rios",subtitle:{id:p,count:e.data.length,new:!1}})})};e()},[p]);let f=(0,u.OL)(m,[{title:"ID",field:"id",size:.2},{title:"Nome",field:"nome",size:.8}]),j=e=>{n.push("".concat(m,"/").concat(e)),h(null)};return(0,s.jsx)(s.Fragment,{children:e?p&&p>0?1==p?j("fornecedor"):2==p?j("recebimento-mp"):3==p?(0,s.jsx)("h3",{children:"Em desenvolvimento..."}):4==p?j("limpeza"):null:(0,s.jsx)(i.Z,{result:e,columns:f}):(0,s.jsx)(c.Z,{})})};t.default=m},84242:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var s=n(85893),a=n(61953),l=n(67836),i=n(80562),r=n(50853),o=n(11163),c=n.n(o),d=n(75084),u=n(41664),m=n.n(u),x=n(40039),p=n(67294),h=n(83830),f=n(46749),j=n(21609);let b=e=>{let{btnNew:t,btnPrint:n,btnSave:a,btnBack:l,handleSave:i,hasListChange:r,openModal:o}=e,u=c(),{setId:b}=(0,p.useContext)(h.X),{routes:v}=(0,p.useContext)(x.V);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"flex items-center justify-between my-2 w-full",children:[(0,s.jsx)("div",{}),(0,s.jsxs)("div",{className:"flex items-center gap-4 ",children:[(0,s.jsx)("div",{children:n&&(0,s.jsxs)(d.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",sx:{display:"flex",gap:2},children:[(0,s.jsx)(j.Z,{icon:"mdi:printer"}),(0,s.jsx)("span",{className:"hidden sm:block",children:"Imprimir"})]})}),(0,s.jsx)("div",{className:"",children:t&&v.find(e=>(e.rota===u.pathname||e.rota===(0,f.g_)(u.pathname))&&e.inserir)&&(0,s.jsx)(m(),{href:o?"":"".concat(u.pathname,"/novo"),children:(0,s.jsxs)(d.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",onClick:o||null,sx:{display:"flex",gap:2},children:[(0,s.jsx)(j.Z,{icon:"ic:outline-plus"}),(0,s.jsx)("span",{className:"hidden sm:block",children:"Novo"})]})})}),(0,s.jsx)("div",{children:a&&(0,s.jsxs)(d.Z,{onClick:i,disabled:!r,type:"button",variant:"outlined",color:"primary",size:"medium",sx:{display:"flex",gap:2},children:[(0,s.jsx)(j.Z,{icon:"mdi:check-bold"}),(0,s.jsx)("span",{className:"hidden sm:block",children:"Salvar"})]})})]})]})})};var v=n(61225);let g=e=>{let t=c(),{setId:n}=(0,p.useContext)(h.X);return(0,v.Z)("(min-width:640px)"),(0,s.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"row",gap:2,alignItems:"center",mb:2,justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,s.jsxs)(a.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[e.buttonsHeader.btnBack&&(0,s.jsx)(d.Z,{onClick(){t.push((0,f.g_)(t.pathname)),n(null)},type:"button",variant:"outlined",color:"primary",size:"small",children:(0,s.jsx)(j.Z,{icon:"material-symbols:arrow-back-rounded"})}),(0,s.jsx)(l.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,s.jsx)(a.Z,{sx:{mr:2,display:"flex"},children:(0,s.jsx)(j.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,s.jsx)(i.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,s.jsx)(j.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,s.jsx)("div",{className:"hidden sm:block ",children:(0,s.jsx)(r.M,{className:"!h-full"})})]}),(0,s.jsx)(b,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,btnBack:e.buttonsHeader.btnBack,btnSave:e.buttonsHeader.btnSave,handleSave:e.buttonsHeader.handleSave,hasListChange:e.hasChange,openModal:e.buttonsHeader.openModal})]})};var C=g},95722:function(e,t,n){"use strict";var s=n(85893),a=n(67294),l=n(87630),i=n(75680),r=n(84242),o=n(60565),c=n(83830);let d=e=>{let{rows:t,columns:n,buttonsHeader:d}=e,{handleSearch:u,pageSize:m,setPageSize:x,searchText:p,filteredData:h,setData:f,data:j}=(0,a.useContext)(o.f),{setId:b}=(0,a.useContext)(c.X);function v(e){let t=e.split("/");return"".concat(t[2],"-").concat(t[1],"-").concat(t[0])}return f(t),n.map(e=>{"date"===e.type&&(e.sortComparator=(e,t)=>{let n=v(e),s=v(t);return n.localeCompare(s)})}),(0,s.jsx)(l._,{localeText:i.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:n,pageSize:m,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:r.Z},rows:p?h:j,onCellClick(e,t){b(e.row.id)},onPageSizeChange:e=>x(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer",overflow:"scroll"}},componentsProps:{toolbar:{value:p,clearSearch:()=>u(""),onChange:e=>u(e.target.value),buttonsHeader:d}}})};t.Z=d}},function(e){e.O(0,[2389,9349,9774,2888,179],function(){return e(e.s=92689)}),_N_E=e.O()}]);