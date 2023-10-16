"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7993],{77993:function(e,t,r){r.d(t,{Z:function(){return k}});var s=r(85893),n=r(11163),i=r.n(n),l=r(67294),o=r(60565),a=r(83830),c=r(40039),d=r(60664),u=r(49837),m=r(91359),x=r(79072),p=r(29630),h=r(75084),v=r(21609),f=r(87536),j=r(86501),g=r(45061),Z=r(47842),b=r(86887),y=r(46749),C=r(84220),D=r(29308),I=r(67569),P=r(88475);let w=e=>{let{getValues:t,removeItem:r,control:n,register:i,errors:l,type:o}=e;return t("items")&&t("items").map((e,t)=>{var a,c,d,u;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(D.Z,{xs:12,md:3,title:"Nome",name:"items[".concat(t,"].nome"),required:!0,control:n,errors:null==l?void 0:null===(a=l.items)||void 0===a?void 0:null===(c=a[t])||void 0===c?void 0:c.nome}),(0,s.jsx)(D.Z,{xs:12,md:6,title:"Descri\xe7\xe3o",name:"items[".concat(t,"].descricao"),required:!1,control:n,errors:null==l?void 0:null===(d=l.items)||void 0===d?void 0:null===(u=d[t])||void 0===u?void 0:u.descricao}),(0,s.jsx)(I.Z,{xs:4,md:1,title:"Ativo",index:t,name:"items[".concat(t,"].status"),value:e.status,typePage:o,register:i}),(0,s.jsx)(I.Z,{xs:4,md:1,title:"Obrigat\xf3rio",index:t,name:"items[".concat(t,"].obrigatorio"),value:e.obrigatorio,typePage:o,register:i}),(0,s.jsx)(P.Z,{xs:4,md:1,title:"Remover",index:t,removeItem:r,item:e,pending:e.hasPending,textSuccess:"Remover este item",textError:"Este item n\xe3o pode mais ser removido pois possui anexo vinculado a ele"})]})})},N=e=>{var t,r,n,P;let{id:N}=e,{setId:k}=(0,l.useContext)(a.X),S=i(),[E,F]=(0,l.useState)(null);console.log("\uD83D\uDE80 ~ data:",E);let[O,q]=(0,l.useState)(!1),_=N&&N>0?"edit":"new",z=S.pathname,{title:A}=(0,l.useContext)(o.f),{loggedUnity:R}=(0,l.useContext)(c.V),[T,V]=(0,l.useState)(!1),[$,L]=(0,l.useState)([]),[M,W]=(0,l.useState)(!1),{trigger:K,handleSubmit:Q,setValue:U,reset:X,getValues:B,control:G,formState:{errors:H},register:J}=(0,f.cI)(),Y=async()=>{try{let e="new"===_?"".concat((0,y.g_)(z),"/new/getData"):"".concat(z,"/getData/").concat(N);await d.h.post(e,{unidadeID:R.unidadeID}).then(e=>{F(e.data),X(e.data)})}catch(t){console.log(t)}},ee=()=>{let e=[...B("items"),{nome:"",descricao:"",status:!0,obrigatorio:!0}];U("items",e),W(!M)},et=(e,t)=>{if(1===E.items.length){j.ZP.error("\xc9 necess\xe1rio ter pelo menos um item!");return}e.id&&L([...$,e.id]);let r=B("items").filter((e,r)=>r!==t);U("items",r),W(!M)},er=async e=>{e.removedItems=$,e.unidade=R.unidadeID;try{"new"===_?await d.h.post("".concat((0,y.g_)(z),"/new/insertData"),e).then(e=>{S.push("".concat((0,y.g_)(z))),k(e.data),j.ZP.success(y.OD.successNew)}):"edit"===_&&(await d.h.post("".concat(z,"/updateData/").concat(N),e),j.ZP.success(y.OD.successUpdate)),V(!T)}catch(t){t.response&&409===t.response.status?j.ZP.error(y.OD.errorRepeated):console.log(t)}},es=async()=>{try{await d.h.delete("".concat(z,"/deleteData/").concat(N)),k(null),setOpen(!1),j.ZP.success(y.OD.successDelete)}catch(e){e.response&&409===e.response.status?(j.ZP.error(y.OD.pendingDelete),q(!1)):console.log(e)}};return(0,l.useEffect)(()=>{Y(),"new"===_&&setTimeout(()=>{K()},300)},[N]),(0,s.jsxs)(s.Fragment,{children:[!E&&(0,s.jsx)(Z.Z,{}),E&&(0,s.jsxs)("form",{onSubmit:Q(er),children:[(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(b.Z,{btnCancel:!0,btnSave:!0,btnNew:!0,btnDelete:"edit"===_,onclickDelete:()=>q(!0),type:_}),E&&(0,s.jsx)(m.Z,{children:(0,s.jsxs)(x.ZP,{container:!0,spacing:4,children:[(0,s.jsx)(D.Z,{xs:11,md:11,title:"Nome",name:"fields.nome",required:!0,control:G,errors:null==H?void 0:null===(t=H.fields)||void 0===t?void 0:t.nome}),(0,s.jsx)(I.Z,{xs:1,md:1,title:"Ativo",name:"fields.status",value:E.fields.status,typePage:_,register:J}),(0,s.jsx)(D.Z,{xs:12,md:12,title:"Descri\xe7\xe3o",name:"fields.descricao",required:!1,control:G,errors:null==H?void 0:null===(r=H.fields)||void 0===r?void 0:r.descricao}),(0,s.jsx)(C.Z,{xs:12,md:12,title:"Formul\xe1rios",name:"formulario.fields",value:null!==(P=null==E?void 0:E.formulario.fields)&&void 0!==P?P:null,multiple:!0,limitTags:5,required:!0,options:E.formulario.options,register:J,setValue:U,control:G,errors:null==H?void 0:null===(n=H.formulario)||void 0===n?void 0:n.fields})]})})]}),(0,s.jsx)(u.Z,{sx:{mt:4},children:(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(p.Z,{sx:{mb:5},children:"Itens"}),(0,s.jsx)(x.ZP,{container:!0,spacing:3,children:(0,s.jsx)(w,{getValues:B,removeItem:et,control:G,register:J,errors:H,type:_},M)}),(0,s.jsx)(h.Z,{variant:"outlined",color:"primary",sx:{mt:4},startIcon:(0,s.jsx)(v.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){ee()},children:"Inserir item"})]})})]}),(0,s.jsx)(g.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir "+A.title,openModal:O,handleClose:()=>q(!1),handleSubmit:es,btnCancel:!0,btnConfirm:!0})]})};var k=N},45061:function(e,t,r){var s=r(85893),n=r(75084),i=r(1890),l=r(77745),o=r(95398),a=r(76779),c=r(44642);r(21609);var d=r(19604),u=r(29630),m=r(55343),x=r(67836),p=r(67294),h=r(82747);r(84220),r(29308),r(67569),r(3893),r(88475);let v=e=>{let{title:t,text:r,handleClose:v,openModal:f,handleSubmit:j,cnpj:g,nomeFornecedor:Z,gruposAnexo:b,email:y,setEmail:C,inputEmail:D,btnCancel:I,btnConfirm:P,grupoAnexosFornecedor:w,btnCancelColor:N,btnConfirmColor:k,closeAfterSave:S,listErrors:E}=e,[F,O]=(0,p.useState)(!1);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(i.Z,{open:f,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,t){"backdropClick"!==t&&v()},children:[(0,s.jsx)(l.Z,{id:"form-dialog-title",children:t}),(0,s.jsxs)(o.Z,{children:[(0,s.jsxs)(c.Z,{sx:{mb:3},children:[r,E&&E.status&&(0,s.jsxs)(d.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,s.jsx)(u.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:E.errors.map((e,t)=>(0,s.jsxs)(u.Z,{variant:"body2",color:"error",children:["- ",e]},t))})]})]}),D&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(m.Z,{sx:{mt:2},fullWidth:!0,children:[(0,s.jsx)(x.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==y?void 0:y.length)>0&&F,inputProps:{onChange(e){C(e.target.value),O(!(0,h.dI)(e.target.value))}}}),(null==y?void 0:y.length)>0&&F&&(0,s.jsx)(u.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,s.jsx)(d.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,s.jsxs)(a.Z,{className:"dialog-actions-dense",children:[I&&(0,s.jsx)(n.Z,{variant:"outlined",color:"primary",onClick:v,children:"Cancelar"}),P&&(0,s.jsx)(n.Z,{variant:"contained",disabled:D&&(null==y?void 0:y.length)>0&&F||E&&E.status,color:k||"error",onClick:D&&g?()=>{j(g,Z,b,y),S&&v()}:D&&!g?()=>{j(y),S&&v()}:()=>{j(),S&&v()},children:"Confirmar"})]})]})})};t.Z=v},3893:function(e,t,r){var s=r(85893),n=r(79072),i=r(61953),l=r(22841),o=r(75158),a=r(53934);let c=e=>{let{xs:t,md:r,title:c,index:d,name:u,typePage:m,value:x,disabled:p,register:h,onClick:v,helpText:f,helpTextPosition:j}=e;return(0,s.jsx)(n.ZP,{item:!0,xs:t,md:r,children:(0,s.jsx)(i.Z,{display:"flex",alignItems:"center",justifyContent:"start",sx:{gap:0},children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,{control:(0,s.jsx)(o.Z,{name:u,onClick:v,...h(u),defaultChecked:x,disabled:p}),label:c,size:"small",sx:{marginRight:"4px","&:hover":{"& .MuiFormControlLabel-label":{color:"primary.main"}}}}),f&&(0,s.jsx)(a.Z,{text:f,position:null!=j?j:"top"})]})})})};t.Z=c},88475:function(e,t,r){var s=r(85893),n=r(79072),i=r(61953),l=r(29630),o=r(72389),a=r(80562),c=r(21609);let d=e=>{let{xs:t,md:r,icon:d,color:u,title:m,removeItem:x,item:p,pending:h,index:v,textSuccess:f,textError:j}=e;return f=f||"Remover este item",j=j||"Este item n\xe3o pode ser removido pois possui cadastros vinculados a ele",(0,s.jsx)(n.ZP,{item:!0,xs:t,md:r,children:(0,s.jsxs)(i.Z,{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,s.jsx)(l.Z,{variant:"caption",children:m}),(0,s.jsx)(o.Z,{title:1==h?j:f,children:(0,s.jsx)(a.Z,{color:null!=u?u:"error",size:"small",onClick(){1!=h&&x(p,v)},sx:{opacity:1==h?.5:1,cursor:1==h?"default":"pointer"},children:(0,s.jsx)(c.Z,{icon:null!=d?d:"tabler:trash-filled"})})})]})})};t.Z=d},84220:function(e,t,r){var s=r(85893),n=r(79072),i=r(55343),l=r(35966),o=r(67836),a=r(87536),c=r(53934);let d=e=>{var t;let{xs:r,md:d,title:u,options:m,name:x,type:p,limitTags:h,value:v,required:f,control:j,disabled:g,multiple:Z,setValue:b,errors:y,onChange:C,className:D,createNew:I,handleRegistroEstabelecimento:P,helpText:w,helpTextPosition:N}=e,k=m?[...m]:[];return I&&(k=[{nome:"-- Novo --"},...m]),(0,s.jsx)(n.ZP,{item:!0,xs:r,md:d,sx:{my:1},className:D,children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(i.Z,{fullWidth:!0,children:(0,s.jsx)(a.Qr,{name:x,control:j,defaultValue:v,rules:{required:f},render(e){let{field:r}=e;return(0,s.jsx)(l.Z,{...r,multiple:Z,limitTags:h,size:"small",options:k,getOptionLabel:e=>(null==e?void 0:e.cnpj)?"".concat(e.cnpj," - ").concat(e.nome):null==e?void 0:e.nome,value:Z&&r.value&&r.value.length>0?r.value.map(e=>m.find(t=>t.nome===e.nome)):null!==(t=r.value)&&void 0!==t?t:{nome:""},disabled:g,onChange(e,t){t&&"-- Novo --"===t.nome?(I(),b(x,Z?[]:{nome:""})):(C&&C(t),b(x,t),"registroestabelecimento"===p&&P(t?t.id:null))},renderInput:e=>(0,s.jsx)(o.Z,{...e,label:u,placeholder:u,error:!!y}),noOptionsText:"Sem op\xe7\xf5es"})}})}),w&&(0,s.jsx)("div",{className:"absolute right-[60px] top-[12px] ",children:(0,s.jsx)(c.Z,{text:w,position:null!=N?N:"top"})})]})})};t.Z=d},47842:function(e,t,r){var s=r(85893),n=r(70754);let i=e=>{let{show:t,title:r}=e;return t&&(0,s.jsx)("div",{className:"absolute inset-0 flex items-center justify-center rounded-lg z-50",children:(0,s.jsxs)("div",{className:"flex flex-col justify-center items-center gap-2 ",children:[(0,s.jsx)(n.Z,{color:"primary"}),(0,s.jsx)("p",{className:"text-sm opacity-80",children:null!=r?r:"Carregando..."})]})})};t.Z=i},82747:function(e,t,r){function s(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=e.length-2,r=e.substring(0,t),s=e.substring(t),n=0,i=t-7;for(let l=t;l>=1;l--)n+=r.charAt(t-l)*i--,i<2&&(i=9);let o=n%11<2?0:11-n%11;if(o!=s.charAt(0))return!1;t+=1,r=e.substring(0,t),n=0,i=t-7;for(let a=t;a>=1;a--)n+=r.charAt(t-a)*i--,i<2&&(i=9);return(o=n%11<2?0:11-n%11)==s.charAt(1)}function n(e){let t;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let r=0;for(let s=1;s<=9;s++)r+=parseInt(e.substring(s-1,s))*(11-s);if((10==(t=10*r%11)||11===t)&&(t=0),t!==parseInt(e.substring(9,10)))return!1;r=0;for(let n=1;n<=10;n++)r+=parseInt(e.substring(n-1,n))*(12-n);return(10==(t=10*r%11)||11===t)&&(t=0),t===parseInt(e.substring(10,11))}function i(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}r.d(t,{dI:function(){return i},sw:function(){return n},zk:function(){return s}})}}]);