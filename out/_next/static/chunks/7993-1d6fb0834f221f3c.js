"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7993],{77993:function(e,t,r){r.d(t,{Z:function(){return N}});var n=r(85893),s=r(11163),i=r.n(s),o=r(67294),l=r(60565),a=r(83830),c=r(40039),d=r(60664),u=r(49837),m=r(91359),x=r(79072),h=r(29630),v=r(75084),p=r(21609),f=r(87536),g=r(86501),j=r(45061),Z=r(47842),b=r(36188),y=r(46749),D=r(84220),C=r(29308),I=r(67569),P=r(88475);let w=e=>{let{getValues:t,removeItem:r,control:s,register:i,errors:o,type:l}=e;return t("items")&&t("items").map((e,t)=>{var a,c,d,u;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(C.Z,{xs:12,md:3,title:"Nome",name:"items[".concat(t,"].nome"),required:!0,control:s,errors:null==o?void 0:null===(a=o.items)||void 0===a?void 0:null===(c=a[t])||void 0===c?void 0:c.nome}),(0,n.jsx)(C.Z,{xs:12,md:6,title:"Descri\xe7\xe3o",name:"items[".concat(t,"].descricao"),required:!1,control:s,errors:null==o?void 0:null===(d=o.items)||void 0===d?void 0:null===(u=d[t])||void 0===u?void 0:u.descricao}),(0,n.jsx)(I.Z,{xs:4,md:1,title:"Ativo",index:t,name:"items[".concat(t,"].status"),value:e.status,typePage:l,register:i}),(0,n.jsx)(I.Z,{xs:4,md:1,title:"Obrigat\xf3rio",index:t,name:"items[".concat(t,"].obrigatorio"),value:e.obrigatorio,typePage:l,register:i}),(0,n.jsx)(P.Z,{xs:4,md:1,title:"Remover",index:t,removeItem:r,item:e,pending:e.hasPending,textSuccess:"Remover este item",textError:"Este item n\xe3o pode mais ser removido pois possui anexo vinculado a ele"})]})})},k=e=>{var t,r,s,P;let{id:k}=e,{setId:N}=(0,o.useContext)(a.X),S=i(),[E,O]=(0,o.useState)(null);console.log("\uD83D\uDE80 ~ data:",E);let[F,q]=(0,o.useState)(!1),_=k&&k>0?"edit":"new",z=S.pathname,{title:A}=(0,o.useContext)(l.f),{loggedUnity:T}=(0,o.useContext)(c.V),[V,R]=(0,o.useState)(!1),[$,L]=(0,o.useState)([]),[M,W]=(0,o.useState)(!1),{trigger:K,handleSubmit:Q,setValue:U,reset:X,getValues:B,control:G,formState:{errors:H},register:J}=(0,f.cI)(),Y=async()=>{try{let e="new"===_?"".concat((0,y.g_)(z),"/new/getData"):"".concat(z,"/getData/").concat(k);await d.h.post(e,{unidadeID:T.unidadeID}).then(e=>{O(e.data),X(e.data)})}catch(t){console.log(t)}},ee=()=>{let e=[...B("items"),{nome:"",descricao:"",status:!0,obrigatorio:!0}];U("items",e),W(!M)},et=(e,t)=>{if(1===E.items.length){g.ZP.error("\xc9 necess\xe1rio ter pelo menos um item!");return}e.id&&L([...$,e.id]);let r=B("items").filter((e,r)=>r!==t);U("items",r),W(!M)},er=async e=>{e.removedItems=$,e.unidade=T.unidadeID;try{"new"===_?await d.h.post("".concat((0,y.g_)(z),"/new/insertData"),e).then(e=>{S.push("".concat((0,y.g_)(z))),N(e.data),g.ZP.success(y.OD.successNew)}):"edit"===_&&(await d.h.post("".concat(z,"/updateData/").concat(k),e),g.ZP.success(y.OD.successUpdate)),R(!V)}catch(t){t.response&&409===t.response.status?g.ZP.error(y.OD.errorRepeated):console.log(t)}},en=async()=>{try{await d.h.delete("".concat(z,"/deleteData/").concat(k)),N(null),setOpen(!1),g.ZP.success(y.OD.successDelete)}catch(e){e.response&&409===e.response.status?(g.ZP.error(y.OD.pendingDelete),q(!1)):console.log(e)}};return(0,o.useEffect)(()=>{Y(),"new"===_&&setTimeout(()=>{K()},300)},[k]),(0,n.jsxs)(n.Fragment,{children:[!E&&(0,n.jsx)(Z.Z,{}),E&&(0,n.jsxs)("form",{onSubmit:Q(er),children:[(0,n.jsxs)(u.Z,{children:[(0,n.jsx)(b.Z,{btnCancel:!0,btnSave:!0,btnNew:!0,btnDelete:"edit"===_,onclickDelete:()=>q(!0),type:_}),E&&(0,n.jsx)(m.Z,{children:(0,n.jsxs)(x.ZP,{container:!0,spacing:4,children:[(0,n.jsx)(C.Z,{xs:11,md:11,title:"Nome",name:"fields.nome",required:!0,control:G,errors:null==H?void 0:null===(t=H.fields)||void 0===t?void 0:t.nome}),(0,n.jsx)(I.Z,{xs:1,md:1,title:"Ativo",name:"fields.status",value:E.fields.status,typePage:_,register:J}),(0,n.jsx)(C.Z,{xs:12,md:12,title:"Descri\xe7\xe3o",name:"fields.descricao",required:!1,control:G,errors:null==H?void 0:null===(r=H.fields)||void 0===r?void 0:r.descricao}),(0,n.jsx)(D.Z,{xs:12,md:12,title:"Formul\xe1rios",name:"formulario.fields",value:null!==(P=null==E?void 0:E.formulario.fields)&&void 0!==P?P:null,multiple:!0,limitTags:5,required:!0,options:E.formulario.options,register:J,setValue:U,control:G,errors:null==H?void 0:null===(s=H.formulario)||void 0===s?void 0:s.fields})]})})]}),(0,n.jsx)(u.Z,{sx:{mt:4},children:(0,n.jsxs)(m.Z,{children:[(0,n.jsx)(h.Z,{sx:{mb:5},children:"Itens"}),(0,n.jsx)(x.ZP,{container:!0,spacing:3,children:(0,n.jsx)(w,{getValues:B,removeItem:et,control:G,register:J,errors:H,type:_},M)}),(0,n.jsx)(v.Z,{variant:"outlined",color:"primary",sx:{mt:4},startIcon:(0,n.jsx)(p.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){ee()},children:"Inserir item"})]})})]}),(0,n.jsx)(j.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir "+A.title,openModal:F,handleClose:()=>q(!1),handleSubmit:en,btnCancel:!0,btnConfirm:!0})]})};var N=k},45061:function(e,t,r){var n=r(85893),s=r(75084),i=r(1890),o=r(77745),l=r(95398),a=r(76779),c=r(44642);r(21609);var d=r(19604),u=r(29630),m=r(55343),x=r(67836),h=r(67294),v=r(82747);r(84220),r(29308),r(67569),r(3893),r(88475);let p=e=>{let{title:t,text:r,handleClose:p,openModal:f,handleSubmit:g,cnpj:j,nomeFornecedor:Z,gruposAnexo:b,email:y,setEmail:D,inputEmail:C,btnCancel:I,btnConfirm:P,grupoAnexosFornecedor:w,btnCancelColor:k,btnConfirmColor:N,closeAfterSave:S,listErrors:E}=e,[O,F]=(0,h.useState)(!1);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(i.Z,{open:f,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,t){"backdropClick"!==t&&p()},children:[(0,n.jsx)(o.Z,{id:"form-dialog-title",children:t}),(0,n.jsxs)(l.Z,{children:[(0,n.jsxs)(c.Z,{sx:{mb:3},children:[r,E&&E.status&&(0,n.jsxs)(d.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,n.jsx)(u.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:E.errors.map((e,t)=>(0,n.jsxs)(u.Z,{variant:"body2",color:"error",children:["- ",e]},t))})]})]}),C&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(m.Z,{sx:{mt:2},fullWidth:!0,children:[(0,n.jsx)(x.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==y?void 0:y.length)>0&&O,inputProps:{onChange(e){D(e.target.value),F(!(0,v.dI)(e.target.value))}}}),(null==y?void 0:y.length)>0&&O&&(0,n.jsx)(u.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,n.jsx)(d.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,n.jsxs)(a.Z,{className:"dialog-actions-dense",children:[I&&(0,n.jsx)(s.Z,{variant:"outlined",color:"primary",onClick:p,children:"Cancelar"}),P&&(0,n.jsx)(s.Z,{variant:"contained",disabled:C&&(null==y?void 0:y.length)>0&&O||E&&E.status,color:N||"error",onClick:C&&j?()=>{g(j,Z,b,y),S&&p()}:C&&!j?()=>{g(y),S&&p()}:()=>{g(),S&&p()},children:"Confirmar"})]})]})})};t.Z=p},3893:function(e,t,r){var n=r(85893),s=r(79072),i=r(61953),o=r(22841),l=r(75158);let a=e=>{let{xs:t,md:r,title:a,index:c,name:d,typePage:u,value:m,disabled:x,register:h,onChange:v,...p}=e;return(0,n.jsx)(s.ZP,{item:!0,xs:t,md:r,children:(0,n.jsx)(i.Z,{display:"flex",flexDirection:"column",alignItems:"start",children:(0,n.jsx)(o.Z,{control:(0,n.jsx)(l.Z,{...p,name:d,...h(d),defaultChecked:m,disabled:x,onChange:v}),label:a,size:"small",sx:{"&:hover":{"& .MuiFormControlLabel-label":{color:"primary.main"}}}})})})};t.Z=a},88475:function(e,t,r){var n=r(85893),s=r(79072),i=r(61953),o=r(29630),l=r(72389),a=r(80562),c=r(21609);let d=e=>{let{xs:t,md:r,title:d,removeItem:u,item:m,pending:x,index:h,textSuccess:v,textError:p}=e;return v=v||"Remover este item",p=p||"Este item n\xe3o pode ser removido pois possui cadastros vinculados a ele",(0,n.jsx)(s.ZP,{item:!0,xs:t,md:r,children:(0,n.jsxs)(i.Z,{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,n.jsx)(o.Z,{variant:"caption",children:d}),(0,n.jsx)(l.Z,{title:1==x?p:v,children:(0,n.jsx)(a.Z,{color:"error",size:"small",onClick(){1!=x&&u(m,h)},sx:{opacity:1==x?.5:1,cursor:1==x?"default":"pointer"},children:(0,n.jsx)(c.Z,{icon:"tabler:trash-filled"})})})]})})};t.Z=d},84220:function(e,t,r){var n=r(85893),s=r(79072),i=r(55343),o=r(35966),l=r(67836),a=r(87536);let c=e=>{var t;let{xs:r,md:c,title:d,options:u,name:m,type:x,limitTags:h,value:v,required:p,control:f,disabled:g,multiple:j,setValue:Z,errors:b,onChange:y,className:D,createNew:C,handleRegistroEstabelecimento:I}=e,P=[...u];return C&&(P=[{nome:"-- Novo --"},...u]),(0,n.jsx)(s.ZP,{item:!0,xs:r,md:c,sx:{my:1},className:D,children:(0,n.jsx)(i.Z,{fullWidth:!0,children:(0,n.jsx)(a.Qr,{name:m,control:f,defaultValue:v,rules:{required:p},render(e){let{field:r}=e;return(0,n.jsx)(o.Z,{...r,multiple:j,limitTags:h,size:"small",options:P,getOptionLabel:e=>(null==e?void 0:e.cnpj)?"".concat(e.cnpj," - ").concat(e.nome):null==e?void 0:e.nome,value:j&&r.value&&r.value.length>0?r.value.map(e=>u.find(t=>t.nome===e.nome)):null!==(t=r.value)&&void 0!==t?t:{nome:""},disabled:g,onChange(e,t){t&&"-- Novo --"===t.nome?(C(),Z(m,j?[]:{nome:""})):(y&&y(t),Z(m,t),"registroestabelecimento"===x&&I(t?t.id:null))},renderInput:e=>(0,n.jsx)(l.Z,{...e,label:d,placeholder:d,error:!!b}),noOptionsText:"Sem op\xe7\xf5es"})}})})})};t.Z=c},47842:function(e,t,r){var n=r(85893),s=r(70754);let i=e=>{let{show:t,title:r}=e;return t&&(0,n.jsx)("div",{className:"absolute inset-0 flex items-center justify-center rounded-lg bg-gray-900 z-50",children:(0,n.jsxs)("div",{className:"flex flex-col justify-center items-center gap-2 ",children:[(0,n.jsx)(s.Z,{color:"primary"}),(0,n.jsx)("p",{className:"text-sm opacity-80 text-white ",children:null!=r?r:"Carregando..."})]})})};t.Z=i},82747:function(e,t,r){function n(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=e.length-2,r=e.substring(0,t),n=e.substring(t),s=0,i=t-7;for(let o=t;o>=1;o--)s+=r.charAt(t-o)*i--,i<2&&(i=9);let l=s%11<2?0:11-s%11;if(l!=n.charAt(0))return!1;t+=1,r=e.substring(0,t),s=0,i=t-7;for(let a=t;a>=1;a--)s+=r.charAt(t-a)*i--,i<2&&(i=9);return(l=s%11<2?0:11-s%11)==n.charAt(1)}function s(e){let t;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let r=0;for(let n=1;n<=9;n++)r+=parseInt(e.substring(n-1,n))*(11-n);if((10==(t=10*r%11)||11===t)&&(t=0),t!==parseInt(e.substring(9,10)))return!1;r=0;for(let s=1;s<=10;s++)r+=parseInt(e.substring(s-1,s))*(12-s);return(10==(t=10*r%11)||11===t)&&(t=0),t===parseInt(e.substring(10,11))}function i(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}r.d(t,{dI:function(){return i},sw:function(){return s},zk:function(){return n}})}}]);