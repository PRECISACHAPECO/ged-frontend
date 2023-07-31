(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3207],{3732:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/tipo-veiculo",function(){return n(15554)}])},62094:function(e,t,n){"use strict";var r=n(85893),s=n(11163),a=n.n(s),i=n(67294),o=n(60664),l=n(49837),c=n(91359),u=n(79072),d=n(87536),x=n(86501),p=n(45061),h=n(46749),m=n(14155),f=n(47842),g=n(60565),j=n(83830),Z=n(29308),b=n(67569);let v=e=>{var t;let{id:n}=e,[s,v]=(0,i.useState)(!1),[C,w]=(0,i.useState)(null),{setId:y}=(0,i.useContext)(j.X),P=a(),S=n&&n>0?"edit":"new",D=P.pathname,{title:_}=(0,i.useContext)(g.f),{trigger:I,handleSubmit:k,reset:z,control:N,formState:{errors:E},register:A}=(0,d.cI)(),O=async e=>{try{"new"===S?await o.h.post("".concat((0,h.g_)(D),"/new/insertData"),e).then(e=>{P.push("".concat((0,h.g_)(D))),y(e.data),x.ZP.success(h.OD.successNew)}):"edit"===S&&(await o.h.post("".concat(D,"/updateData/").concat(n),e),x.ZP.success(h.OD.successUpdate))}catch(t){t.response&&409===t.response.status?x.ZP.error(h.OD.errorRepeated):console.log(t)}},F=async()=>{try{await o.h.delete("".concat(D,"/").concat(n)),y(null),v(!1),x.ZP.success(h.OD.successDelete)}catch(e){e.response&&409===e.response.status?(x.ZP.error(h.OD.pendingDelete),v(!1)):console.log(e)}},M=async()=>{"new"==S&&w({fields:{nome:"",status:1}});try{let e="new"===S?"".concat((0,h.g_)(D),"/new/getData"):"".concat(D,"/getData/").concat(n);await o.h.post(e,{id:n}).then(e=>{w(e.data),z(e.data)})}catch(t){console.log(t)}};return(0,i.useEffect)(()=>{M(),"new"===S&&setTimeout(()=>{I()},300)},[n]),(0,r.jsxs)(r.Fragment,{children:[!C&&(0,r.jsx)(f.Z,{}),C&&(0,r.jsx)(l.Z,{children:(0,r.jsxs)("form",{onSubmit:k(O),children:[(0,r.jsx)(m.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>k(O),btnDelete:"edit"===S,onclickDelete:()=>v(!0),type:S}),(0,r.jsx)(c.Z,{children:(0,r.jsxs)(u.ZP,{container:!0,spacing:5,children:[(0,r.jsx)(Z.Z,{xs:12,md:11,title:"Nome",name:"fields.nome",required:!0,control:N,errors:null==E?void 0:null===(t=E.fields)||void 0===t?void 0:t.nome}),(0,r.jsx)(b.Z,{xs:12,md:1,title:"Ativo",name:"fields.status",value:null==C?void 0:C.fields.status,typePage:S,register:A})]})})]})}),(0,r.jsx)(p.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir "+_,openModal:s,handleClose:()=>v(!1),handleSubmit:F,btnCancel:!0,btnConfirm:!0})]})};t.Z=v},45061:function(e,t,n){"use strict";var r=n(85893),s=n(75084),a=n(29620),i=n(77745),o=n(95398),l=n(76779),c=n(44642);n(21609);var u=n(19604),d=n(29630),x=n(55343),p=n(67836),h=n(67294),m=n(82747);n(84220),n(29308),n(67569),n(3893),n(88475);let f=e=>{let{title:t,text:n,handleClose:f,openModal:g,handleSubmit:j,cnpj:Z,nomeFornecedor:b,gruposAnexo:v,inputEmail:C,btnCancel:w,btnConfirm:y,grupoAnexosFornecedor:P,btnCancelColor:S,btnConfirmColor:D,closeAfterSave:_,listErrors:I}=e,[k,z]=(0,h.useState)(null),[N,E]=(0,h.useState)(!1);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(a.Z,{open:g,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,t){"backdropClick"!==t&&f()},children:[(0,r.jsx)(i.Z,{id:"form-dialog-title",children:t}),(0,r.jsxs)(o.Z,{children:[(0,r.jsxs)(c.Z,{sx:{mb:3},children:[n,I&&I.status&&(0,r.jsxs)(u.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,r.jsx)(d.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:I.errors.map((e,t)=>(0,r.jsxs)(d.Z,{variant:"body2",color:"error",children:["- ",e]},t))})]})]}),C&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(x.Z,{sx:{mt:2},fullWidth:!0,children:[(0,r.jsx)(p.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==k?void 0:k.length)>0&&N,inputProps:{onChange(e){z(e.target.value),E(!(0,m.dI)(e.target.value))}}}),(null==k?void 0:k.length)>0&&N&&(0,r.jsx)(d.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,r.jsx)(u.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,r.jsxs)(l.Z,{className:"dialog-actions-dense",children:[w&&(0,r.jsx)(s.Z,{variant:"outlined",color:"primary",onClick:f,children:"Cancelar"}),y&&(0,r.jsx)(s.Z,{variant:"contained",disabled:C&&(null==k?void 0:k.length)>0&&N||I&&I.status,color:D||"error",onClick:C&&Z?()=>{j(Z,b,v,k),z(null),_&&f()}:C&&!Z?()=>{j(k),z(null),_&&f()}:()=>{j(),_&&f()},children:"Confirmar"})]})]})})};t.Z=f},93250:function(e,t,n){"use strict";var r=n(85893),s=n(49837),a=n(91359),i=n(40372);let o=e=>{let{result:t,columns:n,btnNew:o=!0,btnPrint:l=!0,openModal:c}=e;return(0,r.jsx)(s.Z,{children:(0,r.jsx)(a.Z,{sx:{pt:"0"},children:(0,r.jsx)(i.Z,{rows:t,columns:n,buttonsHeader:{btnNew:o,btnPrint:l,openModal:c}})})})};t.Z=o},47842:function(e,t,n){"use strict";var r=n(85893),s=n(70754),a=n(61953);let i=e=>{let{title:t}=e;return(0,r.jsxs)(a.Z,{sx:{position:"absolute",top:"50%",left:"50%",textAlign:"center"},children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)("p",{children:null!=t?t:"Carregando..."})]})};t.Z=i},82747:function(e,t,n){"use strict";function r(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=e.length-2,n=e.substring(0,t),r=e.substring(t),s=0,a=t-7;for(let i=t;i>=1;i--)s+=n.charAt(t-i)*a--,a<2&&(a=9);let o=s%11<2?0:11-s%11;if(o!=r.charAt(0))return!1;t+=1,n=e.substring(0,t),s=0,a=t-7;for(let l=t;l>=1;l--)s+=n.charAt(t-l)*a--,a<2&&(a=9);return(o=s%11<2?0:11-s%11)==r.charAt(1)}function s(e){let t;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=0;for(let r=1;r<=9;r++)n+=parseInt(e.substring(r-1,r))*(11-r);if((10==(t=10*n%11)||11===t)&&(t=0),t!==parseInt(e.substring(9,10)))return!1;n=0;for(let s=1;s<=10;s++)n+=parseInt(e.substring(s-1,s))*(12-s);return(10==(t=10*n%11)||11===t)&&(t=0),t===parseInt(e.substring(10,11))}function a(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}n.d(t,{dI:function(){return a},sw:function(){return s},zk:function(){return r}})},15554:function(e,t,n){"use strict";n.r(t);var r=n(85893),s=n(67294),a=n(60664),i=n(93250),o=n(62094),l=n(60565),c=n(83830),u=n(47842),d=n(11163),x=n(46749);let p=()=>{let[e,t]=(0,s.useState)(null),n=(0,d.useRouter)(),p=n.pathname,{setTitle:h}=(0,s.useContext)(l.f),{id:m}=(0,s.useContext)(c.X),f=async()=>{await a.h.get(p).then(e=>{t(e.data),h("Tipo de Ve\xedculo")})};(0,s.useEffect)(()=>{f()},[m]);let g=(0,x.OL)(p,[{title:"ID",field:"id",size:.1},{title:"Nome",field:"nome",size:.8},{title:"Status",field:"status",size:.1}]);return(0,r.jsx)(r.Fragment,{children:e?m&&m>0?(0,r.jsx)(o.Z,{id:m}):(0,r.jsx)(i.Z,{result:e,columns:g}):(0,r.jsx)(u.Z,{})})};t.default=p},40372:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(85893),s=n(67294),a=n(87630),i=n(75680),o=n(61953),l=n(67836),c=n(80562),u=n(50853),d=n(11163),x=n.n(d),p=n(91359),h=n(75084),m=n(41664),f=n.n(m),g=n(40039),j=n(21609);let Z=e=>{let{btnNew:t,btnPrint:n,openModal:a}=e,i=x(),{routes:l}=(0,s.useContext)(g.V);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(p.Z,{sx:{display:"flex",justifyContent:"end",alignItems:"center",p:"0",m:"0"},children:(0,r.jsxs)(o.Z,{sx:{display:"flex",gap:"8px"},children:[n&&(0,r.jsx)(h.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,r.jsx)(j.Z,{icon:"mdi:printer"}),children:"Imprimir"}),t&&l.find(e=>e.rota===i.pathname&&e.inserir)&&(0,r.jsx)(f(),{href:a?"":"".concat(i.pathname,"/novo"),children:(0,r.jsx)(h.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,r.jsx)(j.Z,{icon:"ic:outline-plus"}),onClick:a||null,children:"Novo"})})]})})})},b=e=>(0,r.jsxs)(o.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,r.jsxs)(o.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,r.jsx)(l.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,r.jsx)(o.Z,{sx:{mr:2,display:"flex"},children:(0,r.jsx)(j.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,r.jsx)(c.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,r.jsx)(j.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,r.jsx)(u.M,{})]}),(0,r.jsx)(o.Z,{children:(0,r.jsx)(Z,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,openModal:e.buttonsHeader.openModal})})]});var v=n(60565),C=n(83830);let w=e=>{let{rows:t,columns:n,buttonsHeader:o}=e,{handleSearch:l,pageSize:c,setPageSize:u,searchText:d,filteredData:x,setData:p,data:h}=(0,s.useContext)(v.f),{setId:m}=(0,s.useContext)(C.X);return p(t),(0,r.jsx)(a._,{localeText:i.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:n,pageSize:c,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:b},rows:d?x:h,onCellClick(e,t){m(e.row.id)},onPageSizeChange:e=>u(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer"}},componentsProps:{toolbar:{value:d,clearSearch:()=>l(""),onChange:e=>l(e.target.value),buttonsHeader:o}}})};var y=w}},function(e){e.O(0,[4186,1445,1111,5999,7536,2064,2187,1082,8213,9774,2888,179],function(){return e(e.s=3732)}),_N_E=e.O()}]);