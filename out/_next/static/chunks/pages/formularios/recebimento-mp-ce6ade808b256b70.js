(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2752],{68374:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/formularios/recebimento-mp",function(){return t(75600)}])},93250:function(e,n,t){"use strict";var s=t(85893),a=t(49837),i=t(91359),r=t(95722);let l=e=>{let{result:n,columns:t,btnNew:l=!0,btnPrint:o=!0,btnBack:d,openModal:c}=e;return(0,s.jsx)(a.Z,{children:(0,s.jsx)(i.Z,{sx:{pt:"0"},children:(0,s.jsx)(r.Z,{rows:n,columns:t,buttonsHeader:{btnNew:l,btnPrint:o,btnBack:d,openModal:c}})})})};n.Z=l},75600:function(e,n,t){"use strict";t.r(n);var s=t(85893),a=t(67294),i=t(60664),r=t(93250),l=t(55462),o=t(60565),d=t(83830),c=t(40039),u=t(47842),x=t(11163),m=t(46749);let h=()=>{let{user:e,loggedUnity:n}=(0,a.useContext)(c.V),[t,h]=(0,a.useState)(null),p=(0,x.useRouter)(),f=p.pathname,{setTitle:b}=(0,a.useContext)(o.f),{id:j}=(0,a.useContext)(d.X),v=async()=>{await i.h.get("".concat(f,"/getList/").concat(n.unidadeID)).then(e=>{h(e.data),b({title:"Recebimento de Mat\xe9ria Prima",subtitle:{id:j,count:e.data.length,new:!1}})})};(0,a.useEffect)(()=>{v()},[j]);let g=(0,m.OL)(f,[{headerName:"ID",field:"id",size:.1},{headerName:"Data",field:"data",size:.1},{headerName:"Fornecedor",field:"fornecedor",size:.2},{headerName:"CNPJ Fornecedor",field:"cnpj",size:.3},{headerName:"Total de Produtos",field:"totalProdutos",size:.2},{headerName:"Status",field:"status",size:.2}]);return(0,s.jsx)(s.Fragment,{children:t?j&&j>0?(0,s.jsx)(l.Z,{id:j}):(0,s.jsx)(r.Z,{result:t,columns:g}):(0,s.jsx)(u.Z,{})})};n.default=h},84242:function(e,n,t){"use strict";t.d(n,{Z:function(){return C}});var s=t(85893),a=t(61953),i=t(67836),r=t(80562),l=t(50853),o=t(11163),d=t.n(o),c=t(75084),u=t(41664),x=t.n(u),m=t(40039),h=t(67294),p=t(83830),f=t(46749),b=t(21609);let j=e=>{let{btnNew:n,btnPrint:t,btnSave:a,btnBack:i,handleSave:r,hasListChange:l,openModal:o}=e,u=d(),{setId:j}=(0,h.useContext)(p.X),{routes:v}=(0,h.useContext)(m.V);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"flex items-center justify-between my-2 w-full",children:[(0,s.jsx)("div",{}),(0,s.jsxs)("div",{className:"flex items-center gap-4 ",children:[(0,s.jsx)("div",{children:i&&(0,s.jsx)(c.Z,{onClick(){u.push((0,f.g_)(u.pathname)),j(null)},type:"button",variant:"outlined",color:"primary",size:"medium",children:(0,s.jsx)(b.Z,{icon:"material-symbols:arrow-back-rounded"})})}),(0,s.jsx)("div",{children:t&&(0,s.jsxs)(c.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",sx:{display:"flex",gap:2},children:[(0,s.jsx)(b.Z,{icon:"mdi:printer"}),(0,s.jsx)("span",{className:"hidden sm:block",children:"Imprimir"})]})}),(0,s.jsx)("div",{className:"",children:n&&v.find(e=>e.rota===u.pathname&&e.inserir)&&(0,s.jsx)(x(),{href:o?"":"".concat(u.pathname,"/novo"),children:(0,s.jsxs)(c.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",onClick:o||null,sx:{display:"flex",gap:2},children:[(0,s.jsx)(b.Z,{icon:"ic:outline-plus"}),(0,s.jsx)("span",{className:"hidden sm:block",children:"Novo"})]})})}),(0,s.jsx)("div",{children:a&&(0,s.jsxs)(c.Z,{onClick:r,disabled:!l,type:"button",variant:"outlined",color:"primary",size:"medium",sx:{display:"flex",gap:2},children:[(0,s.jsx)(b.Z,{icon:"mdi:check-bold"}),(0,s.jsx)("span",{className:"hidden sm:block",children:"Salvar"})]})})]})]})})};var v=t(61225);let g=e=>((0,v.Z)("(min-width:640px)"),(0,s.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"row",gap:2,alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,s.jsxs)(a.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,s.jsx)(i.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,s.jsx)(a.Z,{sx:{mr:2,display:"flex"},children:(0,s.jsx)(b.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,s.jsx)(r.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,s.jsx)(b.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,s.jsx)("div",{className:"hidden sm:block",children:(0,s.jsx)(l.M,{})})]}),(0,s.jsx)(j,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,btnBack:e.buttonsHeader.btnBack,btnSave:e.buttonsHeader.btnSave,handleSave:e.buttonsHeader.handleSave,hasListChange:e.hasChange,openModal:e.buttonsHeader.openModal})]}));var C=g},95722:function(e,n,t){"use strict";var s=t(85893),a=t(67294),i=t(87630),r=t(75680),l=t(84242),o=t(60565),d=t(83830);let c=e=>{let{rows:n,columns:t,buttonsHeader:c}=e,{handleSearch:u,pageSize:x,setPageSize:m,searchText:h,filteredData:p,setData:f,data:b}=(0,a.useContext)(o.f),{setId:j}=(0,a.useContext)(d.X);return f(n),(0,s.jsx)(i._,{localeText:r.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:t,pageSize:x,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:l.Z},rows:h?p:b,onCellClick(e,n){j(e.row.id)},onPageSizeChange:e=>m(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer",overflow:"scroll"}},componentsProps:{toolbar:{value:h,clearSearch:()=>u(""),onChange:e=>u(e.target.value),buttonsHeader:c}}})};n.Z=c}},function(e){e.O(0,[4186,1445,1111,5999,7536,6668,2187,7630,9516,1515,9297,7921,5462,9774,2888,179],function(){return e(e.s=68374)}),_N_E=e.O()}]);