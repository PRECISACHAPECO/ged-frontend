(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{49857:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/configuracoes/produtos",function(){return s(82557)}])},43816:function(e,n,s){"use strict";var t=s(85893),a=s(11163),i=s.n(a),o=s(54225),r=s(41664),l=s.n(r),d=s(40039),c=s(67294),u=s(83830),m=s(46749),h=s(21609),x=s(41088);let p=e=>{let{btnNew:n,btnPrint:s,btnSave:a,btnBack:r,type:p,partialRoute:b,handleSave:f,hasListChange:j,openModal:g}=e,v=i(),{setId:w}=(0,c.useContext)(u.X),{routes:C}=(0,c.useContext)(d.V),{isLoading:Z}=(0,x.Z)(),y="new"===p&&b?(0,m.g_)((0,m.g_)(v.pathname)):"new"===p||b?(0,m.g_)(v.pathname):v.pathname;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"flex items-center justify-between my-2 w-full",children:[(0,t.jsx)("div",{children:r&&(0,t.jsx)(o.Z,{onClick(){w(null),"new"==p&&v.push(y)},type:"button",variant:"outlined",color:"primary",size:"medium",children:(0,t.jsx)(h.Z,{icon:"grommet-icons:form-previous-link"})})}),(0,t.jsxs)("div",{className:"flex items-center gap-4 right-0 ",children:[(0,t.jsx)("div",{children:s&&(0,t.jsxs)(o.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",sx:{display:"flex",gap:2},children:[(0,t.jsx)(h.Z,{icon:"mdi:printer"}),(0,t.jsx)("span",{className:"hidden sm:block",children:"Imprimir"})]})}),(0,t.jsx)("div",{className:"",children:n&&C.find(e=>(e.rota===v.pathname||e.rota===(0,m.g_)(v.pathname))&&e.inserir)&&(0,t.jsx)(l(),{href:g?"":"".concat(v.pathname,"/novo"),children:(0,t.jsxs)(o.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",onClick:g||null,sx:{display:"flex",gap:2},children:[(0,t.jsx)(h.Z,{icon:"ic:outline-plus"}),(0,t.jsx)("span",{className:"hidden sm:block",children:"Novo"})]})})}),(0,t.jsx)("div",{children:a&&(0,t.jsxs)(o.Z,{onClick:f,disabled:!j||Z,type:"button",variant:"outlined",color:Z?"secondary":"primary",size:"medium",sx:{display:"flex",gap:2},children:[(0,t.jsx)(h.Z,{icon:"mdi:check-bold"}),(0,t.jsx)("span",{className:"hidden sm:block",children:"Salvar"})]})})]})]})})};n.Z=p},82557:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return Z}});var t=s(85893),a=s(67294),i=s(60664),o=s(49837),r=s(91359),l=s(87630),d=s(75680),c=s(22096),u=s(60565),m=s(83830);let h=e=>{let{rows:n,columns:s,buttonsHeader:i,selectedRows:o,setSelectedRows:r,hasChange:m,setHasChange:h}=e,{handleSearch:x,pageSize:p,setPageSize:b,searchText:f,filteredData:j,setData:g,data:v}=(0,a.useContext)(u.f);return g(n),(0,t.jsx)(l._,{localeText:d.F.components.MuiDataGrid.defaultProps.localeText,checkboxSelection:!0,autoHeight:!0,columns:s,pageSize:p,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:c.Z},rows:f?j:v,onCellClick(e,n){r(n=>-1===n.indexOf(e.id)?[...n,e.id]:n.filter(n=>n!==e.id)),h(!0)},onPageSizeChange:e=>b(e),selectionModel:o,onSelectionModelChange(e){r(e),h(!0)},sx:{"& .MuiDataGrid-cell":{cursor:"pointer",overflow:"scroll"}},componentsProps:{toolbar:{value:f,clearSearch:()=>x(""),onChange:e=>x(e.target.value),buttonsHeader:i,hasChange:m}}})},x=e=>{let{result:n,columns:s,btnNew:a=!0,btnPrint:i=!0,btnSave:l=!0,handleSave:d,selectedRows:c,setSelectedRows:u,hasChange:m,setHasChange:x,openModal:p}=e;return(0,t.jsx)(o.Z,{children:(0,t.jsx)(r.Z,{sx:{pt:"0"},children:(0,t.jsx)(h,{rows:n,columns:s,buttonsHeader:{btnNew:a,btnPrint:i,btnSave:l,handleSave:d,openModal:p},selectedRows:c,setSelectedRows:u,hasChange:m,setHasChange:x})})})};var p=s(46124),b=s(40039),f=s(47842),j=s(11163),g=s(46749),v=s(19604),w=s(86501);let C=()=>{let[e,n]=(0,a.useState)(null),s=(0,j.useRouter)(),o=s.pathname,{setTitle:r}=(0,a.useContext)(u.f),{user:l,loggedUnity:d}=(0,a.useContext)(b.V),{id:c}=(0,a.useContext)(m.X),h=async()=>{await i.h.post(o,{unidadeID:d.unidadeID}).then(e=>{n(e.data),r({title:"Produtos",subtitle:{id:c,count:e.data.length,new:!1}})})},C=async()=>{await i.h.post("".concat(o,"/updateData"),{unidadeID:d.unidadeID,usuarioID:l.usuarioID,products:y}).then(e=>{k(!1),w.Am.success("Dados atualizados com sucesso!"),h()})};(0,a.useEffect)(()=>{h()},[c]);let Z=()=>e?e.filter(e=>1===e.checked).map(e=>e.id):[],[y,N]=(0,a.useState)(Z()),[S,k]=(0,a.useState)(!1);(0,a.useEffect)(()=>{e&&N(Z())},[e]);let z=(0,g.OL)(o,[{headerName:"ID",field:"id",size:.1},{headerName:"ID MP",field:"idMinisterio",size:.1},{headerName:"Nome",field:"nome",size:.6},{headerName:"Descri\xe7\xe3o",field:"descricao",size:.2},{headerName:"Categoria",field:"categoria",size:.2},{headerName:"Status",field:{name:"status",cor:"cor"},size:.1}]);return(0,t.jsx)(t.Fragment,{children:e?c&&c>0?(0,t.jsx)(p.Z,{id:c}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(v.Z,{severity:"info",sx:{mb:2},children:"Somente os produtos marcados ficar\xe3o dispon\xedveis para uso nesta unidade."}),(0,t.jsx)(v.Z,{severity:"warning",sx:{mb:2},children:"Produtos j\xe1 vinculados em outros registros o sistema n\xe3o permitir\xe1 desmarcar."}),(0,t.jsx)(x,{result:e,columns:z,btnNew:!1,btnPrint:!1,btnSave:!0,handleSave:C,selectedRows:y,setSelectedRows:N,hasChange:S,setHasChange:k})]}):(0,t.jsx)(f.Z,{})})};C.acl={action:"read",subject:"acl-page"};var Z=C},22096:function(e,n,s){"use strict";var t=s(85893),a=s(61953),i=s(67836),o=s(80562),r=s(50853),l=s(43816);s(40039);var d=s(67294),c=s(83830),u=s(11163),m=s.n(u),h=s(54225),x=s(46749),p=s(21609);let b=e=>{let n=m(),{setId:s}=(0,d.useContext)(c.X);return(0,t.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"row",gap:2,alignItems:"center",mb:2,justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,t.jsxs)(a.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[e.buttonsHeader.btnBack&&(0,t.jsx)(h.Z,{onClick(){n.push((0,x.g_)(n.pathname)),s(null)},type:"button",variant:"outlined",color:"primary",size:"small",children:(0,t.jsx)(p.Z,{icon:"material-symbols:arrow-back-rounded"})}),(0,t.jsx)(i.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,t.jsx)(a.Z,{sx:{mr:2,display:"flex"},children:(0,t.jsx)(p.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,t.jsx)(o.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,t.jsx)(p.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,t.jsx)("div",{className:"hidden sm:block ",children:(0,t.jsx)(r.M,{className:"!h-full !z-50"})})]}),(0,t.jsx)(l.Z,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,btnBack:e.buttonsHeader.btnBack,btnSave:e.buttonsHeader.btnSave,handleSave:e.buttonsHeader.handleSave,hasListChange:e.hasChange,openModal:e.buttonsHeader.openModal})]})};n.Z=b}},function(e){e.O(0,[9349,6124,9774,2888,179],function(){return e(e.s=49857)}),_N_E=e.O()}]);