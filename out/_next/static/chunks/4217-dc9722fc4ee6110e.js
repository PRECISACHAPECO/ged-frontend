"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4217],{84217:function(e,t,n){var r=n(85893),l=n(11163),s=n.n(l),a=n(67294),o=n(60664),i=n(49837),c=n(91359),d=n(79072),u=n(87536),m=n(86501),x=n(45061),h=n(36188),f=n(46749),p=n(47842),v=n(60565),j=n(83830),g=n(29308),Z=n(67569);let b=e=>{var t,n;let{id:l}=e,[b,y]=(0,a.useState)(!1),[C,w]=(0,a.useState)(null),D=s(),P=l&&l>0?"edit":"new",k=D.pathname,{title:N}=(0,a.useContext)(v.f),{setId:I}=(0,a.useContext)(j.X),{trigger:S,handleSubmit:E,reset:O,control:z,formState:{errors:F},register:_}=(0,u.cI)(),A=async e=>{try{"new"===P?await o.h.post("".concat((0,f.g_)(k),"/new/insertData"),e).then(e=>{D.push("".concat((0,f.g_)(k))),I(e.data),m.ZP.success(f.OD.successNew)}):"edit"===P&&(await o.h.post("".concat(k,"/updateData/").concat(l),e),m.ZP.success(f.OD.successUpdate))}catch(t){t.response&&409===t.response.status?m.ZP.error(f.OD.errorRepeated):console.log(t)}},T=async()=>{try{await o.h.delete("".concat(k,"/").concat(l)),I(null),y(!1),m.ZP.success(f.OD.successDelete)}catch(e){e.response&&409===e.response.status?(m.ZP.error(f.OD.pendingDelete),y(!1)):console.log(e)}},q=async()=>{"new"==P&&w({fields:{nome:"",status:1}});try{let e="new"===P?"".concat(k,"/new/getData"):"".concat(k,"/getData/").concat(l);await o.h.post(e,{id:l}).then(e=>{w(e.data),O(e.data)})}catch(t){console.log(t)}};return(0,a.useEffect)(()=>{q(),"new"===P&&setTimeout(()=>{S()},300)},[l]),(0,r.jsxs)(r.Fragment,{children:[!C&&(0,r.jsx)(p.Z,{}),C&&(0,r.jsx)(i.Z,{children:(0,r.jsxs)("form",{onSubmit:E(A),children:[(0,r.jsx)(h.Z,{btnCancel:!0,btnSave:!0,btnNew:!0,handleSubmit:()=>E(A),btnDelete:"edit"===P,onclickDelete:()=>y(!0),type:P}),(0,r.jsx)(c.Z,{children:(0,r.jsxs)(d.ZP,{container:!0,spacing:5,children:[(0,r.jsx)(g.Z,{xs:11,md:11,title:"Nome",name:"fields.nome",required:!0,control:z,errors:null==F?void 0:null===(t=F.fields)||void 0===t?void 0:t.nome}),(0,r.jsx)(Z.Z,{xs:1,md:1,title:"Ativo",name:"fields.status",value:null==C?void 0:null===(n=C.fields)||void 0===n?void 0:n.status,typePage:P,register:_})]})})]})}),(0,r.jsx)(x.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir "+N.title,openModal:b,handleClose:()=>y(!1),handleSubmit:T,btnCancel:!0,btnConfirm:!0})]})};t.Z=b},45061:function(e,t,n){var r=n(85893),l=n(75084),s=n(1890),a=n(77745),o=n(95398),i=n(76779),c=n(44642);n(21609);var d=n(19604),u=n(29630),m=n(55343),x=n(67836),h=n(67294),f=n(82747);n(84220),n(29308),n(67569),n(3893),n(88475);let p=e=>{let{title:t,text:n,handleClose:p,openModal:v,handleSubmit:j,cnpj:g,nomeFornecedor:Z,gruposAnexo:b,email:y,setEmail:C,inputEmail:w,btnCancel:D,btnConfirm:P,grupoAnexosFornecedor:k,btnCancelColor:N,btnConfirmColor:I,closeAfterSave:S,listErrors:E}=e,[O,z]=(0,h.useState)(!1);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(s.Z,{open:v,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,t){"backdropClick"!==t&&p()},children:[(0,r.jsx)(a.Z,{id:"form-dialog-title",children:t}),(0,r.jsxs)(o.Z,{children:[(0,r.jsxs)(c.Z,{sx:{mb:3},children:[n,E&&E.status&&(0,r.jsxs)(d.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,r.jsx)(u.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:E.errors.map((e,t)=>(0,r.jsxs)(u.Z,{variant:"body2",color:"error",children:["- ",e]},t))})]})]}),w&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(m.Z,{sx:{mt:2},fullWidth:!0,children:[(0,r.jsx)(x.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==y?void 0:y.length)>0&&O,inputProps:{onChange(e){C(e.target.value),z(!(0,f.dI)(e.target.value))}}}),(null==y?void 0:y.length)>0&&O&&(0,r.jsx)(u.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,r.jsx)(d.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,r.jsxs)(i.Z,{className:"dialog-actions-dense",children:[D&&(0,r.jsx)(l.Z,{variant:"outlined",color:"primary",onClick:p,children:"Cancelar"}),P&&(0,r.jsx)(l.Z,{variant:"contained",disabled:w&&(null==y?void 0:y.length)>0&&O||E&&E.status,color:I||"error",onClick:w&&g?()=>{j(g,Z,b,y),S&&p()}:w&&!g?()=>{j(y),S&&p()}:()=>{j(),S&&p()},children:"Confirmar"})]})]})})};t.Z=p},3893:function(e,t,n){var r=n(85893),l=n(79072),s=n(61953),a=n(22841),o=n(75158);let i=e=>{let{xs:t,md:n,title:i,index:c,name:d,typePage:u,value:m,disabled:x,register:h,onChange:f,...p}=e;return(0,r.jsx)(l.ZP,{item:!0,xs:t,md:n,children:(0,r.jsx)(s.Z,{display:"flex",flexDirection:"column",alignItems:"start",children:(0,r.jsx)(a.Z,{control:(0,r.jsx)(o.Z,{...p,name:d,...h(d),defaultChecked:m,disabled:x,onChange:f}),label:i,size:"small",sx:{"&:hover":{"& .MuiFormControlLabel-label":{color:"primary.main"}}}})})})};t.Z=i},88475:function(e,t,n){var r=n(85893),l=n(79072),s=n(61953),a=n(29630),o=n(72389),i=n(80562),c=n(21609);let d=e=>{let{xs:t,md:n,title:d,removeItem:u,item:m,pending:x,index:h,textSuccess:f,textError:p}=e;return f=f||"Remover este item",p=p||"Este item n\xe3o pode ser removido pois possui cadastros vinculados a ele",(0,r.jsx)(l.ZP,{item:!0,xs:t,md:n,children:(0,r.jsxs)(s.Z,{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,r.jsx)(a.Z,{variant:"caption",children:d}),(0,r.jsx)(o.Z,{title:1==x?p:f,children:(0,r.jsx)(i.Z,{color:"error",size:"small",onClick(){1!=x&&u(m,h)},sx:{opacity:1==x?.5:1,cursor:1==x?"default":"pointer"},children:(0,r.jsx)(c.Z,{icon:"tabler:trash-filled"})})})]})})};t.Z=d},84220:function(e,t,n){var r=n(85893),l=n(79072),s=n(55343),a=n(35966),o=n(67836),i=n(87536);let c=e=>{var t;let{xs:n,md:c,title:d,options:u,name:m,type:x,limitTags:h,value:f,required:p,control:v,disabled:j,multiple:g,setValue:Z,errors:b,onChange:y,className:C,createNew:w,handleRegistroEstabelecimento:D}=e,P=[...u];return w&&(P=[{nome:"-- Novo --"},...u]),(0,r.jsx)(l.ZP,{item:!0,xs:n,md:c,sx:{my:1},className:C,children:(0,r.jsx)(s.Z,{fullWidth:!0,children:(0,r.jsx)(i.Qr,{name:m,control:v,defaultValue:f,rules:{required:p},render(e){let{field:n}=e;return(0,r.jsx)(a.Z,{...n,multiple:g,limitTags:h,size:"small",options:P,getOptionLabel:e=>(null==e?void 0:e.cnpj)?"".concat(e.cnpj," - ").concat(e.nome):null==e?void 0:e.nome,value:g&&n.value&&n.value.length>0?n.value.map(e=>u.find(t=>t.nome===e.nome)):null!==(t=n.value)&&void 0!==t?t:{nome:""},disabled:j,onChange(e,t){t&&"-- Novo --"===t.nome?(w(),Z(m,g?[]:{nome:""})):(y&&y(t),Z(m,t),"registroestabelecimento"===x&&D(t?t.id:null))},renderInput:e=>(0,r.jsx)(o.Z,{...e,label:d,placeholder:d,error:!!b}),noOptionsText:"Sem op\xe7\xf5es"})}})})})};t.Z=c},47842:function(e,t,n){var r=n(85893),l=n(70754);let s=e=>{let{show:t,title:n}=e;return t&&(0,r.jsx)("div",{className:"absolute inset-0 flex items-center justify-center rounded-lg bg-gray-900 z-50",children:(0,r.jsxs)("div",{className:"flex flex-col justify-center items-center gap-2 ",children:[(0,r.jsx)(l.Z,{color:"primary"}),(0,r.jsx)("p",{className:"text-sm opacity-80 text-white ",children:null!=n?n:"Carregando..."})]})})};t.Z=s},82747:function(e,t,n){function r(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=e.length-2,n=e.substring(0,t),r=e.substring(t),l=0,s=t-7;for(let a=t;a>=1;a--)l+=n.charAt(t-a)*s--,s<2&&(s=9);let o=l%11<2?0:11-l%11;if(o!=r.charAt(0))return!1;t+=1,n=e.substring(0,t),l=0,s=t-7;for(let i=t;i>=1;i--)l+=n.charAt(t-i)*s--,s<2&&(s=9);return(o=l%11<2?0:11-l%11)==r.charAt(1)}function l(e){let t;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=0;for(let r=1;r<=9;r++)n+=parseInt(e.substring(r-1,r))*(11-r);if((10==(t=10*n%11)||11===t)&&(t=0),t!==parseInt(e.substring(9,10)))return!1;n=0;for(let l=1;l<=10;l++)n+=parseInt(e.substring(l-1,l))*(12-l);return(10==(t=10*n%11)||11===t)&&(t=0),t===parseInt(e.substring(10,11))}function s(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}n.d(t,{dI:function(){return s},sw:function(){return l},zk:function(){return r}})}}]);