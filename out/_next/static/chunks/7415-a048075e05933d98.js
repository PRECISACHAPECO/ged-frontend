"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7415],{97415:function(e,t,n){var l=n(85893),s=n(11163),r=n.n(s),o=n(67294),a=n(60664),i=n(49837),c=n(91359),d=n(79072),u=n(87536),m=n(86501),x=n(47842),h=n(45061),p=n(46749),f=n(86887),j=n(60565),v=n(83830),g=n(29308),Z=n(67569);let b=e=>{var t,n;let{id:s}=e,{title:b}=(0,o.useContext)(j.f),{setId:y}=(0,o.useContext)(v.X),[C,D]=(0,o.useState)(!1),[w,N]=(0,o.useState)(null),k=r(),P=s&&s>0?"edit":"new",E=k.pathname,I=(0,o.useRef)(null),{trigger:S,handleSubmit:F,reset:O,register:_,control:z,formState:{errors:A}}=(0,u.cI)(),R=async e=>{try{"new"===P?await a.h.post("".concat((0,p.g_)(E),"/new/insertData"),e).then(e=>{k.push("".concat((0,p.g_)(E))),y(e.data),m.ZP.success(p.OD.successNew)}):"edit"===P&&(await a.h.post("".concat(E,"/updateData/").concat(s),e),m.ZP.success(p.OD.successUpdate))}catch(t){t.response&&409===t.response.status?m.ZP.error(p.OD.errorRepeated):console.log(t)}},T=async()=>{try{await a.h.delete("".concat(E,"/").concat(s)),y(null),D(!1),m.ZP.success(p.OD.successDelete)}catch(e){e.response&&409===e.response.status?(m.ZP.error(p.OD.pendingDelete),D(!1)):console.log(e)}},q=async()=>{"new"==P&&N({fields:{nome:"",status:1}});try{let e="new"===P?"".concat((0,p.g_)(E),"/new/getData"):"".concat(E,"/getData/").concat(s);("new"===P||s>0)&&(console.log("\uD83D\uDE80 ~ route:",e),await a.h.post(e).then(e=>{N(e.data),console.log("\uD83D\uDE80 ~ response.data:",e.data),O(e.data)}))}catch(t){console.log(t)}};return(0,o.useEffect)(()=>{console.log("getData: ",s),q(),"new"===P&&setTimeout(()=>{I.current.focus(),S()},300)},[s]),(0,l.jsxs)(l.Fragment,{children:[!w&&(0,l.jsx)(x.Z,{}),w&&(0,l.jsx)(i.Z,{children:(0,l.jsxs)("form",{onSubmit:F(R),children:[(0,l.jsx)(f.Z,{btnCancel:!0,btnSave:!0,btnNew:!0,handleSubmit:()=>F(R),btnDelete:"edit"===P,onclickDelete:()=>D(!0),type:P}),(0,l.jsx)(c.Z,{children:(0,l.jsxs)(d.ZP,{container:!0,spacing:5,children:[(0,l.jsx)(g.Z,{xs:11,md:11,title:"Nome",name:"fields.nome",required:!0,control:z,errors:null==A?void 0:null===(t=A.fields)||void 0===t?void 0:t.nome}),(0,l.jsx)(Z.Z,{xs:1,md:1,title:"Ativo",name:"fields.status",value:null==w?void 0:null===(n=w.fields)||void 0===n?void 0:n.status,typePage:P,register:_})]})})]})}),(0,l.jsx)(h.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir "+b.title,openModal:C,handleClose:()=>D(!1),handleSubmit:T,btnCancel:!0,btnConfirm:!0})]})};t.Z=b},45061:function(e,t,n){var l=n(85893),s=n(75084),r=n(1890),o=n(77745),a=n(95398),i=n(76779),c=n(44642);n(21609);var d=n(19604),u=n(29630),m=n(55343),x=n(67836),h=n(67294),p=n(82747);n(84220),n(29308),n(67569),n(3893),n(88475);let f=e=>{let{title:t,text:n,handleClose:f,openModal:j,handleSubmit:v,cnpj:g,nomeFornecedor:Z,gruposAnexo:b,email:y,setEmail:C,inputEmail:D,btnCancel:w,btnConfirm:N,grupoAnexosFornecedor:k,btnCancelColor:P,btnConfirmColor:E,closeAfterSave:I,listErrors:S}=e,[F,O]=(0,h.useState)(!1);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(r.Z,{open:j,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,t){"backdropClick"!==t&&f()},children:[(0,l.jsx)(o.Z,{id:"form-dialog-title",children:t}),(0,l.jsxs)(a.Z,{children:[(0,l.jsxs)(c.Z,{sx:{mb:3},children:[n,S&&S.status&&(0,l.jsxs)(d.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,l.jsx)(u.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:S.errors.map((e,t)=>(0,l.jsxs)(u.Z,{variant:"body2",color:"error",children:["- ",e]},t))})]})]}),D&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(m.Z,{sx:{mt:2},fullWidth:!0,children:[(0,l.jsx)(x.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==y?void 0:y.length)>0&&F,inputProps:{onChange(e){C(e.target.value),O(!(0,p.dI)(e.target.value))}}}),(null==y?void 0:y.length)>0&&F&&(0,l.jsx)(u.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,l.jsx)(d.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,l.jsxs)(i.Z,{className:"dialog-actions-dense",children:[w&&(0,l.jsx)(s.Z,{variant:"outlined",color:"primary",onClick:f,children:"Cancelar"}),N&&(0,l.jsx)(s.Z,{variant:"contained",disabled:D&&(null==y?void 0:y.length)>0&&F||S&&S.status,color:E||"error",onClick:D&&g?()=>{v(g,Z,b,y),I&&f()}:D&&!g?()=>{v(y),I&&f()}:()=>{v(),I&&f()},children:"Confirmar"})]})]})})};t.Z=f},3893:function(e,t,n){var l=n(85893),s=n(79072),r=n(61953),o=n(22841),a=n(75158),i=n(53934);let c=e=>{let{xs:t,md:n,title:c,index:d,name:u,typePage:m,value:x,disabled:h,register:p,onClick:f,helpText:j,helpTextPosition:v}=e;return(0,l.jsx)(s.ZP,{item:!0,xs:t,md:n,children:(0,l.jsx)(r.Z,{display:"flex",alignItems:"center",justifyContent:"start",sx:{gap:0},children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Z,{control:(0,l.jsx)(a.Z,{name:u,onClick:f,...p(u),defaultChecked:x,disabled:h}),label:c,size:"small",sx:{marginRight:"4px","&:hover":{"& .MuiFormControlLabel-label":{color:"primary.main"}}}}),j&&(0,l.jsx)(i.Z,{text:j,position:null!=v?v:"top"})]})})})};t.Z=c},88475:function(e,t,n){var l=n(85893),s=n(79072),r=n(61953),o=n(29630),a=n(72389),i=n(80562),c=n(21609);let d=e=>{let{xs:t,md:n,icon:d,color:u,title:m,removeItem:x,item:h,pending:p,index:f,textSuccess:j,textError:v}=e;return j=j||"Remover este item",v=v||"Este item n\xe3o pode ser removido pois possui cadastros vinculados a ele",(0,l.jsx)(s.ZP,{item:!0,xs:t,md:n,children:(0,l.jsxs)(r.Z,{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,l.jsx)(o.Z,{variant:"caption",children:m}),(0,l.jsx)(a.Z,{title:1==p?v:j,children:(0,l.jsx)(i.Z,{color:null!=u?u:"error",size:"small",onClick(){1!=p&&x(h,f)},sx:{opacity:1==p?.5:1,cursor:1==p?"default":"pointer"},children:(0,l.jsx)(c.Z,{icon:null!=d?d:"tabler:trash-filled"})})})]})})};t.Z=d},84220:function(e,t,n){var l=n(85893),s=n(79072),r=n(55343),o=n(35966),a=n(67836),i=n(87536),c=n(53934);let d=e=>{var t;let{xs:n,md:d,title:u,options:m,name:x,type:h,limitTags:p,value:f,required:j,control:v,disabled:g,multiple:Z,setValue:b,errors:y,onChange:C,className:D,createNew:w,handleRegistroEstabelecimento:N,helpText:k,helpTextPosition:P}=e,E=m?[...m]:[];return w&&(E=[{nome:"-- Novo --"},...m]),(0,l.jsx)(s.ZP,{item:!0,xs:n,md:d,sx:{my:1},className:D,children:(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)(r.Z,{fullWidth:!0,children:(0,l.jsx)(i.Qr,{name:x,control:v,defaultValue:f,rules:{required:j},render(e){let{field:n}=e;return(0,l.jsx)(o.Z,{...n,multiple:Z,limitTags:p,size:"small",options:E,getOptionLabel:e=>(null==e?void 0:e.cnpj)?"".concat(e.cnpj," - ").concat(e.nome):null==e?void 0:e.nome,value:Z&&n.value&&n.value.length>0?n.value.map(e=>m.find(t=>t.nome===e.nome)):null!==(t=n.value)&&void 0!==t?t:{nome:""},disabled:g,onChange(e,t){t&&"-- Novo --"===t.nome?(w(),b(x,Z?[]:{nome:""})):(C&&C(t),b(x,t),"registroestabelecimento"===h&&N(t?t.id:null))},renderInput:e=>(0,l.jsx)(a.Z,{...e,label:u,placeholder:u,error:!!y}),noOptionsText:"Sem op\xe7\xf5es"})}})}),k&&(0,l.jsx)("div",{className:"absolute right-[60px] top-[12px] ",children:(0,l.jsx)(c.Z,{text:k,position:null!=P?P:"top"})})]})})};t.Z=d},47842:function(e,t,n){var l=n(85893),s=n(70754);let r=e=>{let{show:t,title:n}=e;return t&&(0,l.jsx)("div",{className:"absolute inset-0 flex items-center justify-center rounded-lg z-50",children:(0,l.jsxs)("div",{className:"flex flex-col justify-center items-center gap-2 ",children:[(0,l.jsx)(s.Z,{color:"primary"}),(0,l.jsx)("p",{className:"text-sm opacity-80",children:null!=n?n:"Carregando..."})]})})};t.Z=r},82747:function(e,t,n){function l(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=e.length-2,n=e.substring(0,t),l=e.substring(t),s=0,r=t-7;for(let o=t;o>=1;o--)s+=n.charAt(t-o)*r--,r<2&&(r=9);let a=s%11<2?0:11-s%11;if(a!=l.charAt(0))return!1;t+=1,n=e.substring(0,t),s=0,r=t-7;for(let i=t;i>=1;i--)s+=n.charAt(t-i)*r--,r<2&&(r=9);return(a=s%11<2?0:11-s%11)==l.charAt(1)}function s(e){let t;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=0;for(let l=1;l<=9;l++)n+=parseInt(e.substring(l-1,l))*(11-l);if((10==(t=10*n%11)||11===t)&&(t=0),t!==parseInt(e.substring(9,10)))return!1;n=0;for(let s=1;s<=10;s++)n+=parseInt(e.substring(s-1,s))*(12-s);return(10==(t=10*n%11)||11===t)&&(t=0),t===parseInt(e.substring(10,11))}function r(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}n.d(t,{dI:function(){return r},sw:function(){return s},zk:function(){return l}})}}]);