(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{49857:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/configuracoes/produtos",function(){return s(82557)}])},82557:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return N}});var a=s(85893),t=s(67294),i=s(60664),o=s(49837),r=s(91359),l=s(87630),d=s(75680),c=s(84242),u=s(60565),x=s(83830);let h=e=>{let{rows:n,columns:s,buttonsHeader:i,selectedRows:o,setSelectedRows:r,hasChange:h,setHasChange:m}=e,{handleSearch:p,pageSize:f,setPageSize:b,searchText:j,filteredData:g,setData:v,data:C}=(0,t.useContext)(u.f),{setId:w}=(0,t.useContext)(x.X);return v(n),(0,a.jsx)(l._,{localeText:d.F.components.MuiDataGrid.defaultProps.localeText,checkboxSelection:!0,autoHeight:!0,columns:s,pageSize:f,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:c.Z},rows:j?g:C,onCellClick(e,n){r(n=>-1===n.indexOf(e.id)?[...n,e.id]:n.filter(n=>n!==e.id)),m(!0)},onPageSizeChange:e=>b(e),selectionModel:o,onSelectionModelChange(e){r(e),m(!0)},sx:{"& .MuiDataGrid-cell":{cursor:"pointer",overflow:"scroll"}},componentsProps:{toolbar:{value:j,clearSearch:()=>p(""),onChange:e=>p(e.target.value),buttonsHeader:i,hasChange:h}}})},m=e=>{let{result:n,columns:s,btnNew:t=!0,btnPrint:i=!0,btnSave:l=!0,handleSave:d,selectedRows:c,setSelectedRows:u,hasChange:x,setHasChange:m,openModal:p}=e;return(0,a.jsx)(o.Z,{children:(0,a.jsx)(r.Z,{sx:{pt:"0"},children:(0,a.jsx)(h,{rows:n,columns:s,buttonsHeader:{btnNew:t,btnPrint:i,btnSave:l,handleSave:d,openModal:p},selectedRows:c,setSelectedRows:u,hasChange:x,setHasChange:m})})})};var p=s(46124),f=s(40039),b=s(47842),j=s(11163),g=s(46749),v=s(19604),C=s(86501);let w=()=>{let[e,n]=(0,t.useState)(null),s=(0,j.useRouter)(),o=s.pathname,{setTitle:r}=(0,t.useContext)(u.f),{user:l,loggedUnity:d}=(0,t.useContext)(f.V),{id:c}=(0,t.useContext)(x.X),h=async()=>{await i.h.post(o,{unidadeID:d.unidadeID}).then(e=>{n(e.data),r({title:"Produtos",subtitle:{id:c,count:e.data.length,new:!1}})})},w=async()=>{await i.h.post("".concat(o,"/updateData"),{unidadeID:d.unidadeID,usuarioID:l.usuarioID,products:S}).then(e=>{k(!1),C.Am.success("Dados atualizados com sucesso!"),h()})};(0,t.useEffect)(()=>{h()},[c]);let N=()=>e?e.filter(e=>1===e.checked).map(e=>e.id):[],[S,Z]=(0,t.useState)(N()),[y,k]=(0,t.useState)(!1);(0,t.useEffect)(()=>{e&&Z(N())},[e]);let z=(0,g.OL)(o,[{headerName:"ID",field:"id",size:.1},{headerName:"ID MP",field:"idMinisterio",size:.1},{headerName:"Nome",field:"nome",size:.6},{headerName:"Descri\xe7\xe3o",field:"descricao",size:.2},{headerName:"Categoria",field:"categoria",size:.2},{headerName:"Status",field:{name:"status",cor:"cor"},size:.1}]);return(0,a.jsx)(a.Fragment,{children:e?c&&c>0?(0,a.jsx)(p.Z,{id:c}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v.Z,{severity:"info",sx:{mb:2},children:"Somente os produtos marcados ficar\xe3o dispon\xedveis para uso nesta unidade."}),(0,a.jsx)(v.Z,{severity:"warning",sx:{mb:2},children:"Produtos j\xe1 vinculados em outros registros o sistema n\xe3o permitir\xe1 desmarcar."}),(0,a.jsx)(m,{result:e,columns:z,btnNew:!1,btnPrint:!1,btnSave:!0,handleSave:w,selectedRows:S,setSelectedRows:Z,hasChange:y,setHasChange:k})]}):(0,a.jsx)(b.Z,{})})};w.acl={action:"read",subject:"acl-page"};var N=w},84242:function(e,n,s){"use strict";s.d(n,{Z:function(){return C}});var a=s(85893),t=s(61953),i=s(67836),o=s(80562),r=s(50853),l=s(11163),d=s.n(l),c=s(75084),u=s(41664),x=s.n(u),h=s(40039),m=s(67294),p=s(83830),f=s(46749),b=s(21609);let j=e=>{let{btnNew:n,btnPrint:s,btnSave:t,btnBack:i,handleSave:o,hasListChange:r,openModal:l}=e,u=d(),{setId:j}=(0,m.useContext)(p.X),{routes:g}=(0,m.useContext)(h.V);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"flex items-center justify-between my-2 w-full",children:[(0,a.jsx)("div",{}),(0,a.jsxs)("div",{className:"flex items-center gap-4 ",children:[(0,a.jsx)("div",{children:i&&(0,a.jsx)(c.Z,{onClick(){u.push((0,f.g_)(u.pathname)),j(null)},type:"button",variant:"outlined",color:"primary",size:"medium",children:(0,a.jsx)(b.Z,{icon:"material-symbols:arrow-back-rounded"})})}),(0,a.jsx)("div",{children:s&&(0,a.jsxs)(c.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",sx:{display:"flex",gap:2},children:[(0,a.jsx)(b.Z,{icon:"mdi:printer"}),(0,a.jsx)("span",{className:"hidden sm:block",children:"Imprimir"})]})}),(0,a.jsx)("div",{className:"",children:n&&g.find(e=>(e.rota===u.pathname||e.rota===(0,f.g_)(u.pathname))&&e.inserir)&&(0,a.jsx)(x(),{href:l?"":"".concat(u.pathname,"/novo"),children:(0,a.jsxs)(c.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",onClick:l||null,sx:{display:"flex",gap:2},children:[(0,a.jsx)(b.Z,{icon:"ic:outline-plus"}),(0,a.jsx)("span",{className:"hidden sm:block",children:"Novo"})]})})}),(0,a.jsx)("div",{children:t&&(0,a.jsxs)(c.Z,{onClick:o,disabled:!r,type:"button",variant:"outlined",color:"primary",size:"medium",sx:{display:"flex",gap:2},children:[(0,a.jsx)(b.Z,{icon:"mdi:check-bold"}),(0,a.jsx)("span",{className:"hidden sm:block",children:"Salvar"})]})})]})]})})};var g=s(61225);let v=e=>((0,g.Z)("(min-width:640px)"),(0,a.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"row",gap:2,alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,a.jsxs)(t.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,a.jsx)(i.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,a.jsx)(t.Z,{sx:{mr:2,display:"flex"},children:(0,a.jsx)(b.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,a.jsx)(o.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,a.jsx)(b.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,a.jsx)("div",{className:"hidden sm:block",children:(0,a.jsx)(r.M,{})})]}),(0,a.jsx)(j,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,btnBack:e.buttonsHeader.btnBack,btnSave:e.buttonsHeader.btnSave,handleSave:e.buttonsHeader.handleSave,hasListChange:e.hasChange,openModal:e.buttonsHeader.openModal})]}));var C=v}},function(e){e.O(0,[4186,1445,1111,5999,7536,2389,2187,9349,5876,6124,9774,2888,179],function(){return e(e.s=49857)}),_N_E=e.O()}]);