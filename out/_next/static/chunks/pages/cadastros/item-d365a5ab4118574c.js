(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2031],{68473:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/item",function(){return n(67257)}])},90492:function(e,t,n){"use strict";var r=n(85893),s=n(11163),a=n.n(s),o=n(67294),i=n(60565),l=n(83830),c=n(60664),u=n(49837),d=n(91359),x=n(79072),m=n(87536),p=n(86501),h=n(47842),f=n(45061),g=n(46749),j=n(14155),Z=n(29308),v=n(84220),b=n(67569);let C=e=>{var t,n;let{id:s}=e,[C,w]=(0,o.useState)(!1),[y,D]=(0,o.useState)(null),P=a(),S=s&&s>0?"edit":"new",I=P.pathname,{title:_,setSubtitle:k}=(0,o.useContext)(i.f),{setId:z}=(0,o.useContext)(l.X),{trigger:N,handleSubmit:E,setValue:F,reset:A,control:O,formState:{errors:M},register:T}=(0,m.cI)(),H=async e=>{try{"new"===S?await c.h.post("".concat((0,g.g_)(I),"/new/insertData"),e).then(e=>{P.push("".concat((0,g.g_)(I))),z(e.data),p.ZP.success(g.OD.successNew)}):"edit"===S&&(await c.h.post("".concat(I,"/updateData/").concat(s),e),p.ZP.success(g.OD.successUpdate)),setSavingForm(!savingForm)}catch(t){t.response&&409===t.response.status?p.ZP.error(g.OD.errorRepeated):console.log(t)}},X=async()=>{try{await c.h.delete("".concat(I,"/").concat(s)),z(null),w(!1),p.ZP.success(g.OD.successDelete)}catch(e){e.response&&409===e.response.status?(p.ZP.error(g.OD.pendingDelete),w(!1)):console.log(e)}},q=async()=>{try{let e="new"===S?"".concat((0,g.g_)(I),"/new/getData"):"".concat(I,"/getData/").concat(s);await c.h.post(e).then(e=>{D(e.data),A(e.data),console.log("\uD83D\uDE80 ~ getData:",e.data)})}catch(t){console.log(t)}};return(0,o.useEffect)(()=>{k("ID: ".concat(s)),q(),"new"===S&&setTimeout(()=>{N()},300)},[s]),(0,r.jsxs)(r.Fragment,{children:[!y&&(0,r.jsx)(h.Z,{}),y&&(0,r.jsx)(u.Z,{children:(0,r.jsxs)("form",{onSubmit:E(H),children:[(0,r.jsx)(j.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>E(H),btnDelete:"edit"===S,onclickDelete:()=>w(!0),type:S}),(0,r.jsx)(d.Z,{children:(0,r.jsxs)(x.ZP,{container:!0,spacing:5,children:[(0,r.jsx)(Z.Z,{xs:12,md:11,title:"Nome",name:"fields.nome",required:!0,control:O,errors:null==M?void 0:null===(t=M.fields)||void 0===t?void 0:t.nome}),(0,r.jsx)(b.Z,{xs:12,md:1,title:"Ativo",name:"fields.status",value:y.fields.status,typePage:S,register:T}),(0,r.jsx)(v.Z,{xs:12,md:12,title:"Formul\xe1rios",name:"formulario.fields",value:null==y?void 0:y.formulario.fields,required:!0,options:y.formulario.options,register:T,setValue:F,errors:null==M?void 0:null===(n=M.formulario)||void 0===n?void 0:n.fields})]})})]})}),(0,r.jsx)(f.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir "+_,openModal:C,handleClose:()=>w(!1),handleSubmit:X,btnCancel:!0,btnConfirm:!0})]})};t.Z=C},45061:function(e,t,n){"use strict";var r=n(85893),s=n(75084),a=n(29620),o=n(77745),i=n(95398),l=n(76779),c=n(44642);n(21609);var u=n(19604),d=n(29630),x=n(55343),m=n(67836),p=n(67294),h=n(82747);n(84220),n(29308),n(67569),n(3893),n(88475);let f=e=>{let{title:t,text:n,handleClose:f,openModal:g,handleSubmit:j,cnpj:Z,nomeFornecedor:v,gruposAnexo:b,inputEmail:C,btnCancel:w,btnConfirm:y,grupoAnexosFornecedor:D,btnCancelColor:P,btnConfirmColor:S,closeAfterSave:I,listErrors:_}=e,[k,z]=(0,p.useState)(null),[N,E]=(0,p.useState)(!1);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(a.Z,{open:g,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,t){"backdropClick"!==t&&f()},children:[(0,r.jsx)(o.Z,{id:"form-dialog-title",children:t}),(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(c.Z,{sx:{mb:3},children:[n,_&&_.status&&(0,r.jsxs)(u.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,r.jsx)(d.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:_.errors.map((e,t)=>(0,r.jsxs)(d.Z,{variant:"body2",color:"error",children:["- ",e]},t))})]})]}),C&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(x.Z,{sx:{mt:2},fullWidth:!0,children:[(0,r.jsx)(m.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==k?void 0:k.length)>0&&N,inputProps:{onChange(e){z(e.target.value),E(!(0,h.dI)(e.target.value))}}}),(null==k?void 0:k.length)>0&&N&&(0,r.jsx)(d.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,r.jsx)(u.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,r.jsxs)(l.Z,{className:"dialog-actions-dense",children:[w&&(0,r.jsx)(s.Z,{variant:"outlined",color:"primary",onClick:f,children:"Cancelar"}),y&&(0,r.jsx)(s.Z,{variant:"contained",disabled:C&&(null==k?void 0:k.length)>0&&N||_&&_.status,color:S||"error",onClick:C&&Z?()=>{j(Z,v,b,k),z(null),I&&f()}:C&&!Z?()=>{j(k),z(null),I&&f()}:()=>{j(),I&&f()},children:"Confirmar"})]})]})})};t.Z=f},93250:function(e,t,n){"use strict";var r=n(85893),s=n(49837),a=n(91359),o=n(40372);let i=e=>{let{result:t,columns:n,btnNew:i=!0,btnPrint:l=!0,openModal:c}=e;return(0,r.jsx)(s.Z,{children:(0,r.jsx)(a.Z,{sx:{pt:"0"},children:(0,r.jsx)(o.Z,{rows:t,columns:n,buttonsHeader:{btnNew:i,btnPrint:l,openModal:c}})})})};t.Z=i},47842:function(e,t,n){"use strict";var r=n(85893),s=n(70754),a=n(61953);let o=e=>{let{title:t}=e;return(0,r.jsxs)(a.Z,{sx:{position:"absolute",top:"50%",left:"50%",textAlign:"center"},children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)("p",{children:null!=t?t:"Carregando..."})]})};t.Z=o},82747:function(e,t,n){"use strict";function r(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=e.length-2,n=e.substring(0,t),r=e.substring(t),s=0,a=t-7;for(let o=t;o>=1;o--)s+=n.charAt(t-o)*a--,a<2&&(a=9);let i=s%11<2?0:11-s%11;if(i!=r.charAt(0))return!1;t+=1,n=e.substring(0,t),s=0,a=t-7;for(let l=t;l>=1;l--)s+=n.charAt(t-l)*a--,a<2&&(a=9);return(i=s%11<2?0:11-s%11)==r.charAt(1)}function s(e){let t;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=0;for(let r=1;r<=9;r++)n+=parseInt(e.substring(r-1,r))*(11-r);if((10==(t=10*n%11)||11===t)&&(t=0),t!==parseInt(e.substring(9,10)))return!1;n=0;for(let s=1;s<=10;s++)n+=parseInt(e.substring(s-1,s))*(12-s);return(10==(t=10*n%11)||11===t)&&(t=0),t===parseInt(e.substring(10,11))}function a(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}n.d(t,{dI:function(){return a},sw:function(){return s},zk:function(){return r}})},67257:function(e,t,n){"use strict";n.r(t);var r=n(85893),s=n(67294),a=n(60664),o=n(90492),i=n(93250),l=n(60565),c=n(83830),u=n(47842),d=n(11163),x=n(46749);let m=()=>{let[e,t]=(0,s.useState)(null),n=(0,d.useRouter)(),m=n.pathname,{setTitle:p,setSubtitle:h}=(0,s.useContext)(l.f),{id:f}=(0,s.useContext)(c.X),g=async()=>{await a.h.get(m).then(e=>{t(e.data),p("Item"),h(f?"ID: ".concat(f):"Total de registros: ".concat(e.data.length))})};(0,s.useEffect)(()=>{g()},[f]);let j=(0,x.OL)(m,[{title:"ID",field:"id",size:.1},{title:"Nome",field:"nome",size:.6},{title:"Formul\xe1rio",field:"formulario",size:.2},{title:"Status",field:"status",size:.1}]);return(0,r.jsx)(r.Fragment,{children:e?f&&f>0?(0,r.jsx)(o.Z,{id:f}):(0,r.jsx)(i.Z,{result:e,columns:j}):(0,r.jsx)(u.Z,{})})};m.acl={action:"read",subject:"acl-page"},t.default=m},40372:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(85893),s=n(67294),a=n(87630),o=n(75680),i=n(61953),l=n(67836),c=n(80562),u=n(50853),d=n(11163),x=n.n(d),m=n(91359),p=n(75084),h=n(41664),f=n.n(h),g=n(40039),j=n(21609);let Z=e=>{let{btnNew:t,btnPrint:n,openModal:a}=e,o=x(),{routes:l}=(0,s.useContext)(g.V);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(m.Z,{sx:{display:"flex",justifyContent:"end",alignItems:"center",p:"0",m:"0"},children:(0,r.jsxs)(i.Z,{sx:{display:"flex",gap:"8px"},children:[n&&(0,r.jsx)(p.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,r.jsx)(j.Z,{icon:"mdi:printer"}),children:"Imprimir"}),t&&l.find(e=>e.rota===o.pathname&&e.inserir)&&(0,r.jsx)(f(),{href:a?"":"".concat(o.pathname,"/novo"),children:(0,r.jsx)(p.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,r.jsx)(j.Z,{icon:"ic:outline-plus"}),onClick:a||null,children:"Novo"})})]})})})},v=e=>(0,r.jsxs)(i.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,r.jsxs)(i.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,r.jsx)(l.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,r.jsx)(i.Z,{sx:{mr:2,display:"flex"},children:(0,r.jsx)(j.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,r.jsx)(c.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,r.jsx)(j.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,r.jsx)(u.M,{})]}),(0,r.jsx)(i.Z,{children:(0,r.jsx)(Z,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,openModal:e.buttonsHeader.openModal})})]});var b=n(60565),C=n(83830);let w=e=>{let{rows:t,columns:n,buttonsHeader:i}=e,{handleSearch:l,pageSize:c,setPageSize:u,searchText:d,filteredData:x,setData:m,data:p}=(0,s.useContext)(b.f),{setId:h}=(0,s.useContext)(C.X);return m(t),(0,r.jsx)(a._,{localeText:o.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:n,pageSize:c,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:v},rows:d?x:p,onCellClick(e,t){h(e.row.id)},onPageSizeChange:e=>u(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer"}},componentsProps:{toolbar:{value:d,clearSearch:()=>l(""),onChange:e=>l(e.target.value),buttonsHeader:i}}})};var y=w}},function(e){e.O(0,[4186,1445,1111,5999,7536,2064,2187,1082,8213,9774,2888,179],function(){return e(e.s=68473)}),_N_E=e.O()}]);