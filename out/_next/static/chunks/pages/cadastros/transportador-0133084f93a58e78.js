(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2683],{77013:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/transportador",function(){return n(508)}])},76904:function(e,t,n){"use strict";var s=n(85893),r=n(11163),a=n.n(r),i=n(67294),o=n(60664),l=n(49837),c=n(91359),d=n(79072),u=n(87536),x=n(86501),p=n(45061),h=n(46749),m=n(99741),f=n(47842),g=n(60565),j=n(83830),Z=n(40039),b=n(29308),v=n(67569);let C=e=>{var t;let{id:n}=e,[r,C]=(0,i.useState)(!1),[w,y]=(0,i.useState)(null),{setId:D}=(0,i.useContext)(j.X),P=a(),I=n&&n>0?"edit":"new",S=P.pathname,{title:_}=(0,i.useContext)(g.f),{loggedUnity:k}=(0,i.useContext)(Z.V),{trigger:z,handleSubmit:N,reset:E,formState:{errors:A},register:M}=(0,u.cI)(),O=async e=>{let t={fields:{...e.fields,unidadeID:k.unidadeID}};try{"new"===I?await o.h.post("".concat((0,h.g_)(S),"/new/insertData"),t).then(e=>{P.push("".concat((0,h.g_)(S))),D(e.data),x.ZP.success(h.OD.successNew)}):"edit"===I&&(await o.h.post("".concat(S,"/updateData/").concat(n),e),x.ZP.success(h.OD.successUpdate))}catch(s){s.response&&409===s.response.status?x.ZP.error(h.OD.errorRepeated):console.log(s)}},F=async()=>{try{await o.h.delete("".concat(S,"/").concat(n)),D(null),C(!1),x.ZP.success(h.OD.successDelete)}catch(e){e.response&&409===e.response.status?(x.ZP.error(h.OD.pendingDelete),C(!1)):console.log(e)}},T=async()=>{"new"==I&&y({fields:{nome:"",unidadeMedida:"",status:1}});try{let e="new"===I?"".concat((0,h.g_)(S),"/new/getData"):"".concat(S,"/getData/").concat(n);await o.h.post(e,{id:n}).then(e=>{y(e.data),console.log("\uD83D\uDE80 ~ response.data:",e.data),E(e.data)})}catch(t){console.log(t)}};return(0,i.useEffect)(()=>{T(),"new"===I&&setTimeout(()=>{z()},300)},[n]),(0,s.jsxs)(s.Fragment,{children:[!w&&(0,s.jsx)(f.Z,{}),w&&(0,s.jsx)(l.Z,{children:(0,s.jsxs)("form",{onSubmit:N(O),children:[(0,s.jsx)(m.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>N(O),btnDelete:"edit"===I,onclickDelete:()=>C(!0),type:I}),(0,s.jsx)(c.Z,{children:(0,s.jsxs)(d.ZP,{container:!0,spacing:5,children:[(0,s.jsx)(b.Z,{xs:12,md:11,title:"Nome",name:"fields.nome",required:!0,register:M,errors:null==A?void 0:null===(t=A.fields)||void 0===t?void 0:t.nome}),(0,s.jsx)(v.Z,{xs:12,md:1,title:"Ativo",name:"fields.status",value:null==w?void 0:w.fields.status,typePage:I,register:M})]})})]})}),(0,s.jsx)(p.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir "+_,openModal:r,handleClose:()=>C(!1),handleSubmit:F,btnCancel:!0,btnConfirm:!0})]})};t.Z=C},45061:function(e,t,n){"use strict";var s=n(85893),r=n(75084),a=n(29620),i=n(77745),o=n(95398),l=n(76779),c=n(44642);n(21609);var d=n(19604),u=n(29630),x=n(55343),p=n(67836),h=n(67294),m=n(82747);n(84220),n(29308),n(67569),n(3893),n(88475);let f=e=>{let{title:t,text:n,handleClose:f,openModal:g,handleSubmit:j,cnpj:Z,gruposAnexo:b,inputEmail:v,btnCancel:C,btnConfirm:w,grupoAnexosFornecedor:y,btnCancelColor:D,btnConfirmColor:P,closeAfterSave:I,listErrors:S}=e,[_,k]=(0,h.useState)(null),[z,N]=(0,h.useState)(!1);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(a.Z,{open:g,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,t){"backdropClick"!==t&&f()},children:[(0,s.jsx)(i.Z,{id:"form-dialog-title",children:t}),(0,s.jsxs)(o.Z,{children:[(0,s.jsxs)(c.Z,{sx:{mb:3},children:[n,S&&S.status&&(0,s.jsxs)(d.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,s.jsx)(u.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:S.errors.map((e,t)=>(0,s.jsxs)(u.Z,{variant:"body2",color:"error",children:["- ",e]},t))})]})]}),v&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(x.Z,{sx:{mt:2},fullWidth:!0,children:[(0,s.jsx)(p.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==_?void 0:_.length)>0&&z,inputProps:{onChange(e){k(e.target.value),N(!(0,m.dI)(e.target.value))}}}),(null==_?void 0:_.length)>0&&z&&(0,s.jsx)(u.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,s.jsx)(d.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,s.jsxs)(l.Z,{className:"dialog-actions-dense",children:[C&&(0,s.jsx)(r.Z,{variant:"outlined",color:"primary",onClick:f,children:"Cancelar"}),w&&(0,s.jsx)(r.Z,{variant:"contained",disabled:v&&(null==_?void 0:_.length)>0&&z||S&&S.status,color:P||"error",onClick:v&&Z?()=>{j(Z,b,_),k(null),I&&f()}:v&&!Z?()=>{j(_),k(null),I&&f()}:()=>{j(),I&&f()},children:"Confirmar"})]})]})})};t.Z=f},93250:function(e,t,n){"use strict";var s=n(85893),r=n(49837),a=n(91359),i=n(40372);let o=e=>{let{result:t,columns:n,btnNew:o=!0,btnPrint:l=!0,openModal:c}=e;return(0,s.jsx)(r.Z,{children:(0,s.jsx)(a.Z,{sx:{pt:"0"},children:(0,s.jsx)(i.Z,{rows:t,columns:n,buttonsHeader:{btnNew:o,btnPrint:l,openModal:c}})})})};t.Z=o},47842:function(e,t,n){"use strict";var s=n(85893),r=n(70754),a=n(61953);let i=e=>{let{title:t}=e;return(0,s.jsxs)(a.Z,{sx:{position:"absolute",top:"50%",left:"50%",textAlign:"center"},children:[(0,s.jsx)(r.Z,{}),(0,s.jsx)("p",{children:null!=t?t:"Carregando..."})]})};t.Z=i},82747:function(e,t,n){"use strict";function s(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=e.length-2,n=e.substring(0,t),s=e.substring(t),r=0,a=t-7;for(let i=t;i>=1;i--)r+=n.charAt(t-i)*a--,a<2&&(a=9);let o=r%11<2?0:11-r%11;if(o!=s.charAt(0))return!1;t+=1,n=e.substring(0,t),r=0,a=t-7;for(let l=t;l>=1;l--)r+=n.charAt(t-l)*a--,a<2&&(a=9);return(o=r%11<2?0:11-r%11)==s.charAt(1)}function r(e){let t;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=0;for(let s=1;s<=9;s++)n+=parseInt(e.substring(s-1,s))*(11-s);if((10==(t=10*n%11)||11===t)&&(t=0),t!==parseInt(e.substring(9,10)))return!1;n=0;for(let r=1;r<=10;r++)n+=parseInt(e.substring(r-1,r))*(12-r);return(10==(t=10*n%11)||11===t)&&(t=0),t===parseInt(e.substring(10,11))}function a(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}n.d(t,{dI:function(){return a},sw:function(){return r},zk:function(){return s}})},508:function(e,t,n){"use strict";n.r(t);var s=n(85893),r=n(67294),a=n(60664),i=n(76904),o=n(93250),l=n(83830),c=n(60565),d=n(40039),u=n(47842),x=n(11163),p=n(46749);let h=()=>{let[e,t]=(0,r.useState)(null),n=(0,x.useRouter)(),{id:h}=(0,r.useContext)(l.X),m=n.pathname,{setTitle:f}=(0,r.useContext)(c.f),{user:g,loggedUnity:j}=(0,r.useContext)(d.V),Z=async()=>{await a.h.post(m,{unidadeID:j.unidadeID}).then(e=>{t(e.data),f("Transportador")})};(0,r.useEffect)(()=>{Z()},[h]);let b=(0,p.OL)(m,[{title:"ID",field:"id",size:.1},{title:"Nome",field:"nome",size:.8},{title:"Status",field:"status",size:.1}]);return(0,s.jsx)(s.Fragment,{children:e?h&&h>0?(0,s.jsx)(i.Z,{id:h}):(0,s.jsx)(o.Z,{result:e,columns:b}):(0,s.jsx)(u.Z,{})})};t.default=h},40372:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var s=n(85893),r=n(67294),a=n(87630),i=n(75680),o=n(61953),l=n(67836),c=n(80562),d=n(50853),u=n(11163),x=n.n(u),p=n(91359),h=n(75084),m=n(41664),f=n.n(m),g=n(40039),j=n(21609);let Z=e=>{let{btnNew:t,btnPrint:n,openModal:a}=e,i=x(),{routes:l}=(0,r.useContext)(g.V);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(p.Z,{sx:{display:"flex",justifyContent:"end",alignItems:"center",p:"0",m:"0"},children:(0,s.jsxs)(o.Z,{sx:{display:"flex",gap:"8px"},children:[n&&(0,s.jsx)(h.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,s.jsx)(j.Z,{icon:"mdi:printer"}),children:"Imprimir"}),t&&l.find(e=>e.rota===i.pathname&&e.inserir)&&(0,s.jsx)(f(),{href:a?"":"".concat(i.pathname,"/novo"),children:(0,s.jsx)(h.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",startIcon:(0,s.jsx)(j.Z,{icon:"ic:outline-plus"}),onClick:a||null,children:"Novo"})})]})})})},b=e=>(0,s.jsxs)(o.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,s.jsxs)(o.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,s.jsx)(l.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,s.jsx)(o.Z,{sx:{mr:2,display:"flex"},children:(0,s.jsx)(j.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,s.jsx)(c.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,s.jsx)(j.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,s.jsx)(d.M,{})]}),(0,s.jsx)(o.Z,{children:(0,s.jsx)(Z,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,openModal:e.buttonsHeader.openModal})})]});var v=n(60565),C=n(83830);let w=e=>{let{rows:t,columns:n,buttonsHeader:o}=e,{handleSearch:l,pageSize:c,setPageSize:d,searchText:u,filteredData:x,setData:p,data:h}=(0,r.useContext)(v.f),{setId:m}=(0,r.useContext)(C.X);return p(t),(0,s.jsx)(a._,{localeText:i.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:n,pageSize:c,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:b},rows:u?x:h,onCellClick(e,t){m(e.row.id)},onPageSizeChange:e=>d(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer"}},componentsProps:{toolbar:{value:u,clearSearch:()=>l(""),onChange:e=>l(e.target.value),buttonsHeader:o}}})};var y=w}},function(e){e.O(0,[4186,1445,1111,5999,7536,2064,2187,1082,4107,9774,2888,179],function(){return e(e.s=77013)}),_N_E=e.O()}]);