(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3207],{3732:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/tipo-veiculo",function(){return n(15554)}])},93250:function(e,t,n){"use strict";var s=n(85893),a=n(49837),i=n(91359),l=n(95722);let r=e=>{let{result:t,columns:n,btnNew:r=!0,btnPrint:o=!0,btnBack:c,openModal:d}=e;return(0,s.jsx)(a.Z,{children:(0,s.jsx)(i.Z,{sx:{pt:"0"},children:(0,s.jsx)(l.Z,{rows:t,columns:n,buttonsHeader:{btnNew:r,btnPrint:o,btnBack:c,openModal:d}})})})};t.Z=r},15554:function(e,t,n){"use strict";n.r(t);var s=n(85893),a=n(67294),i=n(60664),l=n(93250),r=n(62094),o=n(60565),c=n(83830),d=n(47842),u=n(11163),x=n(46749);let m=()=>{let[e,t]=(0,a.useState)(null),n=(0,u.useRouter)(),m=n.pathname,{setTitle:p}=(0,a.useContext)(o.f),{id:h}=(0,a.useContext)(c.X),b=async()=>{await i.h.get(m).then(e=>{t(e.data),p({title:"Tipo de Ve\xedculo",subtitle:{id:h,count:e.data.length,new:!1}})})};(0,a.useEffect)(()=>{b()},[h]);let f=(0,x.OL)(m,[{title:"ID",field:"id",size:.1},{title:"Nome",field:"nome",size:.8},{headerName:"Status",field:{name:"status",cor:"cor"},size:.1}]);return(0,s.jsx)(s.Fragment,{children:e?h&&h>0?(0,s.jsx)(r.Z,{id:h}):(0,s.jsx)(l.Z,{result:e,columns:f}):(0,s.jsx)(d.Z,{})})};t.default=m},84242:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var s=n(85893),a=n(61953),i=n(67836),l=n(80562),r=n(50853),o=n(11163),c=n.n(o),d=n(75084),u=n(41664),x=n.n(u),m=n(40039),p=n(67294),h=n(83830),b=n(46749),f=n(21609);let j=e=>{let{btnNew:t,btnPrint:n,btnSave:a,btnBack:i,handleSave:l,hasListChange:r,openModal:o}=e,u=c(),{setId:j}=(0,p.useContext)(h.X),{routes:v}=(0,p.useContext)(m.V);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"flex items-center justify-between my-2 w-full",children:[(0,s.jsx)("div",{}),(0,s.jsxs)("div",{className:"flex items-center gap-4 ",children:[(0,s.jsx)("div",{children:n&&(0,s.jsxs)(d.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",sx:{display:"flex",gap:2},children:[(0,s.jsx)(f.Z,{icon:"mdi:printer"}),(0,s.jsx)("span",{className:"hidden sm:block",children:"Imprimir"})]})}),(0,s.jsx)("div",{className:"",children:t&&v.find(e=>(e.rota===u.pathname||e.rota===(0,b.g_)(u.pathname))&&e.inserir)&&(0,s.jsx)(x(),{href:o?"":"".concat(u.pathname,"/novo"),children:(0,s.jsxs)(d.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",onClick:o||null,sx:{display:"flex",gap:2},children:[(0,s.jsx)(f.Z,{icon:"ic:outline-plus"}),(0,s.jsx)("span",{className:"hidden sm:block",children:"Novo"})]})})}),(0,s.jsx)("div",{children:a&&(0,s.jsxs)(d.Z,{onClick:l,disabled:!r,type:"button",variant:"outlined",color:"primary",size:"medium",sx:{display:"flex",gap:2},children:[(0,s.jsx)(f.Z,{icon:"mdi:check-bold"}),(0,s.jsx)("span",{className:"hidden sm:block",children:"Salvar"})]})})]})]})})};var v=n(61225);let g=e=>{let t=c(),{setId:n}=(0,p.useContext)(h.X);return(0,v.Z)("(min-width:640px)"),(0,s.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"row",gap:2,alignItems:"center",mb:2,justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,s.jsxs)(a.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[e.buttonsHeader.btnBack&&(0,s.jsx)(d.Z,{onClick(){t.push((0,b.g_)(t.pathname)),n(null)},type:"button",variant:"outlined",color:"primary",size:"small",children:(0,s.jsx)(f.Z,{icon:"material-symbols:arrow-back-rounded"})}),(0,s.jsx)(i.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,s.jsx)(a.Z,{sx:{mr:2,display:"flex"},children:(0,s.jsx)(f.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,s.jsx)(l.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,s.jsx)(f.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,s.jsx)("div",{className:"hidden sm:block ",children:(0,s.jsx)(r.M,{className:"!h-full"})})]}),(0,s.jsx)(j,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,btnBack:e.buttonsHeader.btnBack,btnSave:e.buttonsHeader.btnSave,handleSave:e.buttonsHeader.handleSave,hasListChange:e.hasChange,openModal:e.buttonsHeader.openModal})]})};var C=g},95722:function(e,t,n){"use strict";var s=n(85893),a=n(67294),i=n(87630),l=n(75680),r=n(84242),o=n(60565),c=n(83830);let d=e=>{let{rows:t,columns:n,buttonsHeader:d}=e,{handleSearch:u,pageSize:x,setPageSize:m,searchText:p,filteredData:h,setData:b,data:f}=(0,a.useContext)(o.f),{setId:j}=(0,a.useContext)(c.X);function v(e){let t=e.split("/");return"".concat(t[2],"-").concat(t[1],"-").concat(t[0])}return b(t),n.map(e=>{"date"===e.type&&(e.sortComparator=(e,t)=>{let n=v(e),s=v(t);return n.localeCompare(s)})}),(0,s.jsx)(i._,{localeText:l.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:n,pageSize:x,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:r.Z},rows:p?h:f,onCellClick(e,t){j(e.row.id)},onPageSizeChange:e=>m(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer",overflow:"scroll"}},componentsProps:{toolbar:{value:p,clearSearch:()=>u(""),onChange:e=>u(e.target.value),buttonsHeader:d}}})};t.Z=d}},function(e){e.O(0,[4186,1445,1111,5999,2389,2187,9349,5876,2094,9774,2888,179],function(){return e(e.s=3732)}),_N_E=e.O()}]);