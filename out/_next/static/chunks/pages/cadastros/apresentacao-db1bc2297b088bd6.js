(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5012],{63149:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/apresentacao",function(){return n(46703)}])},65929:function(e,t,n){"use strict";var s=n(85893),r=n(11163),a=n.n(r),o=n(67294),i=n(60664),l=n(49837),c=n(91359),u=n(79072),d=n(87536),x=n(86501),p=n(45061),h=n(46749),m=n(47842),f=n(14155),g=n(60565),j=n(83830),Z=n(29308),b=n(67569);let v=e=>{var t;let{id:n}=e,[r,v]=(0,o.useState)(!1),[C,w]=(0,o.useState)(null),y=a(),P=n&&n>0?"edit":"new",D=y.pathname,{title:S}=(0,o.useContext)(g.f),{setId:_}=(0,o.useContext)(j.X),{trigger:I,handleSubmit:k,reset:z,register:N,control:E,formState:{errors:A}}=(0,d.cI)(),O=async e=>{try{"new"===P?await i.h.post("".concat((0,h.g_)(D),"/new/insertData"),e).then(e=>{y.push("".concat((0,h.g_)(D))),_(e.data),x.ZP.success(h.OD.successNew)}):"edit"===P&&(await i.h.post("".concat(D,"/updateData/").concat(n),e),x.ZP.success(h.OD.successUpdate))}catch(t){t.response&&409===t.response.status?x.ZP.error(h.OD.errorRepeated):console.log(t)}},F=async()=>{try{await i.h.delete("".concat(D,"/").concat(n)),_(null),v(!1),x.ZP.success(h.OD.successDelete)}catch(e){e.response&&409===e.response.status?(x.ZP.error(h.OD.pendingDelete),v(!1)):console.log(e)}},M=async()=>{"new"==P&&w({fields:{nome:"",status:1}});try{let e="new"===P?"".concat((0,h.g_)(D),"/new/getData"):"".concat(D,"/getData/").concat(n);await i.h.post(e,{id:n}).then(e=>{w(e.data),console.log("\uD83D\uDE80 ~ response.data:",e.data),z(e.data)})}catch(t){console.log(t)}};return(0,o.useEffect)(()=>{M(),"new"===P&&setTimeout(()=>{I()},300)},[n]),(0,s.jsxs)(s.Fragment,{children:[!C&&(0,s.jsx)(m.Z,{}),C&&(0,s.jsx)(l.Z,{children:(0,s.jsxs)("form",{onSubmit:k(O),children:[(0,s.jsx)(f.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>k(O),btnDelete:"edit"===P,onclickDelete:()=>v(!0),type:P}),(0,s.jsx)(c.Z,{children:(0,s.jsxs)(u.ZP,{container:!0,spacing:5,children:[(0,s.jsx)(Z.Z,{xs:12,md:11,title:"Nome",name:"fields.nome",required:!0,control:E,errors:null==A?void 0:null===(t=A.fields)||void 0===t?void 0:t.nome}),(0,s.jsx)(b.Z,{xs:12,md:1,title:"Ativo",name:"fields.status",value:null==C?void 0:C.fields.status,typePage:P,register:N})]})})]})}),(0,s.jsx)(p.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir "+S,openModal:r,handleClose:()=>v(!1),handleSubmit:F,btnCancel:!0,btnConfirm:!0})]})};t.Z=v},45061:function(e,t,n){"use strict";var s=n(85893),r=n(75084),a=n(29620),o=n(77745),i=n(95398),l=n(76779),c=n(44642);n(21609);var u=n(19604),d=n(29630),x=n(55343),p=n(67836),h=n(67294),m=n(82747);n(84220),n(29308),n(67569),n(3893),n(88475);let f=e=>{let{title:t,text:n,handleClose:f,openModal:g,handleSubmit:j,cnpj:Z,nomeFornecedor:b,gruposAnexo:v,inputEmail:C,btnCancel:w,btnConfirm:y,grupoAnexosFornecedor:P,btnCancelColor:D,btnConfirmColor:S,closeAfterSave:_,listErrors:I}=e,[k,z]=(0,h.useState)(null),[N,E]=(0,h.useState)(!1);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(a.Z,{open:g,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,t){"backdropClick"!==t&&f()},children:[(0,s.jsx)(o.Z,{id:"form-dialog-title",children:t}),(0,s.jsxs)(i.Z,{children:[(0,s.jsxs)(c.Z,{sx:{mb:3},children:[n,I&&I.status&&(0,s.jsxs)(u.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,s.jsx)(d.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:I.errors.map((e,t)=>(0,s.jsxs)(d.Z,{variant:"body2",color:"error",children:["- ",e]},t))})]})]}),C&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(x.Z,{sx:{mt:2},fullWidth:!0,children:[(0,s.jsx)(p.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==k?void 0:k.length)>0&&N,inputProps:{onChange(e){z(e.target.value),E(!(0,m.dI)(e.target.value))}}}),(null==k?void 0:k.length)>0&&N&&(0,s.jsx)(d.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,s.jsx)(u.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,s.jsxs)(l.Z,{className:"dialog-actions-dense",children:[w&&(0,s.jsx)(r.Z,{variant:"outlined",color:"primary",onClick:f,children:"Cancelar"}),y&&(0,s.jsx)(r.Z,{variant:"contained",disabled:C&&(null==k?void 0:k.length)>0&&N||I&&I.status,color:S||"error",onClick:C&&Z?()=>{j(Z,b,v,k),z(null),_&&f()}:C&&!Z?()=>{j(k),z(null),_&&f()}:()=>{j(),_&&f()},children:"Confirmar"})]})]})})};t.Z=f},93250:function(e,t,n){"use strict";var s=n(85893),r=n(49837),a=n(91359),o=n(40372);let i=e=>{let{result:t,columns:n,btnNew:i=!0,btnPrint:l=!0,openModal:c}=e;return(0,s.jsx)(r.Z,{children:(0,s.jsx)(a.Z,{sx:{pt:"0"},children:(0,s.jsx)(o.Z,{rows:t,columns:n,buttonsHeader:{btnNew:i,btnPrint:l,openModal:c}})})})};t.Z=i},47842:function(e,t,n){"use strict";var s=n(85893),r=n(70754),a=n(61953);let o=e=>{let{title:t}=e;return(0,s.jsxs)(a.Z,{sx:{position:"absolute",top:"50%",left:"50%",textAlign:"center"},children:[(0,s.jsx)(r.Z,{}),(0,s.jsx)("p",{children:null!=t?t:"Carregando..."})]})};t.Z=o},82747:function(e,t,n){"use strict";function s(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=e.length-2,n=e.substring(0,t),s=e.substring(t),r=0,a=t-7;for(let o=t;o>=1;o--)r+=n.charAt(t-o)*a--,a<2&&(a=9);let i=r%11<2?0:11-r%11;if(i!=s.charAt(0))return!1;t+=1,n=e.substring(0,t),r=0,a=t-7;for(let l=t;l>=1;l--)r+=n.charAt(t-l)*a--,a<2&&(a=9);return(i=r%11<2?0:11-r%11)==s.charAt(1)}function r(e){let t;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=0;for(let s=1;s<=9;s++)n+=parseInt(e.substring(s-1,s))*(11-s);if((10==(t=10*n%11)||11===t)&&(t=0),t!==parseInt(e.substring(9,10)))return!1;n=0;for(let r=1;r<=10;r++)n+=parseInt(e.substring(r-1,r))*(12-r);return(10==(t=10*n%11)||11===t)&&(t=0),t===parseInt(e.substring(10,11))}function a(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}n.d(t,{dI:function(){return a},sw:function(){return r},zk:function(){return s}})},46703:function(e,t,n){"use strict";n.r(t);var s=n(85893),r=n(67294),a=n(60664),o=n(93250),i=n(60565),l=n(83830),c=n(65929),u=n(47842),d=n(11163),x=n(46749);let p=()=>{let[e,t]=(0,r.useState)(null),n=(0,d.useRouter)(),p=n.pathname,{setTitle:h}=(0,r.useContext)(i.f),{id:m}=(0,r.useContext)(l.X),f=async()=>{await a.h.get(p).then(e=>{t(e.data),h("Apresenta\xe7\xe3o")})};(0,r.useEffect)(()=>{f()},[m]);let g=(0,x.OL)(p,[{title:"ID",field:"id",size:.1},{title:"Nome",field:"nome",size:.8},{title:"Status",field:"status",size:.1}]);return(0,s.jsx)(s.Fragment,{children:e?m&&m>0?(0,s.jsx)(c.Z,{id:m}):(0,s.jsx)(o.Z,{result:e,columns:g}):(0,s.jsx)(u.Z,{})})};t.default=p},40372:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var s=n(85893),r=n(67294),a=n(87630),o=n(75680),i=n(61953),l=n(67836),c=n(80562),u=n(50853),d=n(11163),x=n.n(d),p=n(91359),h=n(75084),m=n(41664),f=n.n(m),g=n(40039),j=n(21609);let Z=e=>{let{btnNew:t,btnPrint:n,openModal:a}=e,o=x(),{routes:l}=(0,r.useContext)(g.V);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(p.Z,{sx:{display:"flex",justifyContent:"end",alignItems:"center",p:"0",m:"0"},children:(0,s.jsxs)(i.Z,{sx:{display:"flex",gap:"8px"},children:[n&&(0,s.jsx)(h.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,s.jsx)(j.Z,{icon:"mdi:printer"}),children:"Imprimir"}),t&&l.find(e=>e.rota===o.pathname&&e.inserir)&&(0,s.jsx)(f(),{href:a?"":"".concat(o.pathname,"/novo"),children:(0,s.jsx)(h.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,s.jsx)(j.Z,{icon:"ic:outline-plus"}),onClick:a||null,children:"Novo"})})]})})})},b=e=>(0,s.jsxs)(i.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,s.jsxs)(i.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,s.jsx)(l.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,s.jsx)(i.Z,{sx:{mr:2,display:"flex"},children:(0,s.jsx)(j.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,s.jsx)(c.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,s.jsx)(j.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,s.jsx)(u.M,{})]}),(0,s.jsx)(i.Z,{children:(0,s.jsx)(Z,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,openModal:e.buttonsHeader.openModal})})]});var v=n(60565),C=n(83830);let w=e=>{let{rows:t,columns:n,buttonsHeader:i}=e,{handleSearch:l,pageSize:c,setPageSize:u,searchText:d,filteredData:x,setData:p,data:h}=(0,r.useContext)(v.f),{setId:m}=(0,r.useContext)(C.X);return p(t),(0,s.jsx)(a._,{localeText:o.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:n,pageSize:c,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:b},rows:d?x:h,onCellClick(e,t){m(e.row.id)},onPageSizeChange:e=>u(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer"}},componentsProps:{toolbar:{value:d,clearSearch:()=>l(""),onChange:e=>l(e.target.value),buttonsHeader:i}}})};var y=w}},function(e){e.O(0,[4186,1445,1111,5999,7536,2064,2187,1082,8213,9774,2888,179],function(){return e(e.s=63149)}),_N_E=e.O()}]);