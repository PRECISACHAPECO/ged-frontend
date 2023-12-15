"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4217],{84217:function(e,t,n){var l=n(85893),s=n(11163),r=n.n(s),a=n(67294),i=n(60664),o=n(49837),c=n(91359),d=n(79072),u=n(87536),x=n(86501),m=n(45061),h=n(86887),p=n(46749),f=n(47842),j=n(60565),v=n(83830),Z=n(29308),g=n(67569),b=n(41088),y=n(40039);let C=e=>{var t,n;let{id:s}=e,[C,D]=(0,a.useState)(!1),[w,I]=(0,a.useState)(null),k=r(),P=s&&s>0?"edit":"new",N=k.pathname,{title:S}=(0,a.useContext)(j.f),{setId:E}=(0,a.useContext)(v.X),{user:F,loggedUnity:O}=(0,a.useContext)(y.V),{startLoading:z,stopLoading:_}=(0,b.Z)(),{trigger:A,handleSubmit:T,reset:q,control:L,formState:{errors:R},register:V}=(0,u.cI)(),$=async e=>{let t={...e,usuarioID:F.usuarioID,unidadeID:O.unidadeID};z();try{"new"===P?await i.h.post("".concat((0,p.g_)(N),"/new/insertData"),t).then(e=>{k.push("".concat((0,p.g_)(N))),E(e.data),x.ZP.success(p.OD.successNew)}):"edit"===P&&(await i.h.post("".concat(N,"/updateData/").concat(s),t),x.ZP.success(p.OD.successUpdate))}catch(n){n.response&&409===n.response.status?x.ZP.error(p.OD.errorRepeated):console.log(n)}finally{_()}},M=async()=>{try{await i.h.delete("".concat(N,"/").concat(s,"/").concat(F.usuarioID,"/").concat(O.unidadeID)),E(null),D(!1),x.ZP.success(p.OD.successDelete)}catch(e){e.response&&409===e.response.status?(x.ZP.error(p.OD.pendingDelete),D(!1)):console.log(e)}},W=async()=>{"new"==P&&I({fields:{nome:"",status:1}});try{let e="new"===P?"".concat(N,"/new/getData"):"".concat(N,"/getData/").concat(s);await i.h.post(e,{id:s}).then(e=>{I(e.data),q(e.data)})}catch(t){console.log(t)}};return(0,a.useEffect)(()=>{W(),"new"===P&&setTimeout(()=>{A()},300)},[s]),(0,l.jsxs)(l.Fragment,{children:[!w&&(0,l.jsx)(f.Z,{}),w&&(0,l.jsxs)("form",{onSubmit:T($),children:[(0,l.jsx)(h.Z,{btnCancel:!0,btnSave:!0,btnNew:!0,handleSubmit:()=>T($),btnDelete:"edit"===P,onclickDelete:()=>D(!0),type:P}),(0,l.jsx)(o.Z,{children:(0,l.jsx)(c.Z,{children:(0,l.jsxs)(d.ZP,{container:!0,spacing:5,children:[(0,l.jsx)(Z.Z,{xs:11,md:11,title:"Nome",name:"fields.nome",required:!0,control:L,errors:null==R?void 0:null===(t=R.fields)||void 0===t?void 0:t.nome}),(0,l.jsx)(g.Z,{xs:1,md:1,title:"Ativo",name:"fields.status",value:null==w?void 0:null===(n=w.fields)||void 0===n?void 0:n.status,typePage:P,register:V})]})})})]}),(0,l.jsx)(m.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir "+S.title,openModal:C,handleClose:()=>D(!1),handleSubmit:M,btnCancel:!0,btnConfirm:!0})]})};t.Z=C},45061:function(e,t,n){var l=n(85893),s=n(54225),r=n(1890),a=n(77745),i=n(95398),o=n(76779),c=n(44642);n(21609);var d=n(19604),u=n(29630),x=n(55343),m=n(67836),h=n(67294),p=n(82747);n(84220),n(29308),n(67569),n(3893),n(88475);let f=e=>{let{title:t,text:n,handleClose:f,openModal:j,handleSubmit:v,cnpj:Z,nomeFornecedor:g,gruposAnexo:b,email:y,setEmail:C,inputEmail:D,btnCancel:w,btnConfirm:I,grupoAnexosFornecedor:k,btnCancelColor:P,btnConfirmColor:N,closeAfterSave:S,listErrors:E}=e,[F,O]=(0,h.useState)(!1);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(r.Z,{open:j,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,t){"backdropClick"!==t&&f()},children:[(0,l.jsx)(a.Z,{id:"form-dialog-title",children:t}),(0,l.jsxs)(i.Z,{children:[(0,l.jsxs)(c.Z,{sx:{mb:3},children:[n,E&&E.status&&(0,l.jsxs)(d.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,l.jsx)(u.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:E.errors.map((e,t)=>(0,l.jsxs)(u.Z,{variant:"body2",color:"error",children:["- ",e]},t))})]})]}),D&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(x.Z,{sx:{mt:2},fullWidth:!0,children:[(0,l.jsx)(m.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==y?void 0:y.length)>0&&F,inputProps:{onChange(e){C(e.target.value),O(!(0,p.dI)(e.target.value))}}}),(null==y?void 0:y.length)>0&&F&&(0,l.jsx)(u.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,l.jsx)(d.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,l.jsxs)(o.Z,{className:"dialog-actions-dense",children:[w&&(0,l.jsx)(s.Z,{variant:"outlined",color:"primary",onClick:f,children:"Cancelar"}),I&&(0,l.jsx)(s.Z,{variant:"contained",disabled:D&&(null==y?void 0:y.length)>0&&F||E&&E.status,color:N||"error",onClick:D&&Z?()=>{v(Z,g,b,y),S&&f()}:D&&!Z?()=>{v(y),S&&f()}:()=>{v(),S&&f()},children:"Confirmar"})]})]})})};t.Z=f},67569:function(e,t,n){var l=n(85893),s=n(79072),r=n(61953),a=n(29630),i=n(22841),o=n(75158);let c=e=>{let{xs:t,md:n,title:c,index:d,name:u,typePage:x,value:m,edit:h,register:p,setValue:f,className:j}=e;return(0,l.jsx)(s.ZP,{item:!0,xs:t,md:n,className:j,children:(0,l.jsxs)(r.Z,{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,l.jsx)(a.Z,{variant:"caption",children:d&&0!=d?"":c}),(0,l.jsx)(i.Z,{control:(0,l.jsx)(o.Z,{size:"small",sx:{ml:4},...p(u),defaultChecked:!0==m||1==m||"new"==x,onChange(e){h&&f(h,!0)}})})]})})};t.Z=c},3893:function(e,t,n){var l=n(85893),s=n(79072),r=n(61953),a=n(22841),i=n(75158),o=n(53934);let c=e=>{let{xs:t,md:n,title:c,index:d,name:u,typePage:x,value:m,disabled:h,register:p,onClick:f,helpText:j,helpTextPosition:v}=e;return console.log("\uD83D\uDE80 ~ CheckLabel:",m),(0,l.jsx)(s.ZP,{item:!0,xs:null!=t?t:"12",md:null!=n?n:"12",children:(0,l.jsx)(r.Z,{display:"flex",alignItems:"center",justifyContent:"start",sx:{gap:0},children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Z,{control:(0,l.jsx)(i.Z,{name:u,onClick:f,...p(u),defaultChecked:m,disabled:h}),label:c,size:"small",sx:{marginRight:"4px","&:hover":{"& .MuiFormControlLabel-label":{color:"primary.main"}}}}),j&&(0,l.jsx)(o.Z,{text:j,position:null!=v?v:"top"})]})})})};t.Z=c},88475:function(e,t,n){var l=n(85893),s=n(79072),r=n(61953),a=n(29630),i=n(17575),o=n(80562),c=n(21609);let d=e=>{let{xs:t,md:n,icon:d,color:u,title:x,removeItem:m,item:h,pending:p,index:f,textSuccess:j,textError:v}=e;return j=j||"Remover este item",v=v||"Este item n\xe3o pode ser removido pois possui cadastros vinculados a ele",(0,l.jsx)(s.ZP,{item:!0,xs:t,md:n,children:(0,l.jsxs)(r.Z,{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,l.jsx)(a.Z,{variant:"caption",children:x}),(0,l.jsx)(i.Z,{title:1==p?v:j,children:(0,l.jsx)(o.Z,{color:null!=u?u:"error",size:"small",onClick(){1!=p&&m(h,f)},sx:{opacity:1==p?.5:1,cursor:1==p?"default":"pointer"},children:(0,l.jsx)(c.Z,{icon:null!=d?d:"tabler:trash-filled"})})})]})})};t.Z=d},84220:function(e,t,n){var l=n(85893),s=n(79072),r=n(55343),a=n(35966),i=n(67836),o=n(87536),c=n(53934);let d=e=>{var t;let{xs:n,md:d,title:u,options:x,name:m,type:h,limitTags:p,value:f,required:j,control:v,disabled:Z,multiple:g,setValue:b,errors:y,onChange:C,className:D,createNew:w,handleRegistroEstabelecimento:I,helpText:k,helpTextPosition:P}=e,N=w?[{nome:"-- Novo --"},...null!=x?x:[]]:x;return(0,l.jsx)(s.ZP,{item:!0,xs:n,md:d,sx:{my:1},className:D,children:(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)(r.Z,{fullWidth:!0,children:(0,l.jsx)(o.Qr,{name:m,control:v,defaultValue:f,rules:{required:j},render(e){let{field:n}=e;return(0,l.jsx)(a.Z,{...n,multiple:g,limitTags:p,size:"small",options:N,getOptionLabel:e=>(null==e?void 0:e.cnpj)?"".concat(e.cnpj," - ").concat(e.nome):null==e?void 0:e.nome,value:g&&n.value&&n.value.length>0?n.value.map(e=>x.find(t=>t.id===e.id)):null!==(t=n.value)&&void 0!==t?t:{nome:""},disabled:Z,onChange(e,t){t&&"-- Novo --"==e.target.innerText?w():(C&&C(t),b(m,t),"registroestabelecimento"===h&&I(t?t.id:null))},renderInput:e=>(0,l.jsx)(i.Z,{...e,label:u,placeholder:u,error:!!y}),noOptionsText:"Sem op\xe7\xf5es"})}})}),k&&(0,l.jsx)("div",{className:"absolute right-[60px] top-[12px] ",children:(0,l.jsx)(c.Z,{text:k,position:null!=P?P:"top"})})]})})};t.Z=d},82747:function(e,t,n){function l(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=e.length-2,n=e.substring(0,t),l=e.substring(t),s=0,r=t-7;for(let a=t;a>=1;a--)s+=n.charAt(t-a)*r--,r<2&&(r=9);let i=s%11<2?0:11-s%11;if(i!=l.charAt(0))return!1;t+=1,n=e.substring(0,t),s=0,r=t-7;for(let o=t;o>=1;o--)s+=n.charAt(t-o)*r--,r<2&&(r=9);return(i=s%11<2?0:11-s%11)==l.charAt(1)}function s(e){let t;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=0;for(let l=1;l<=9;l++)n+=parseInt(e.substring(l-1,l))*(11-l);if((10==(t=10*n%11)||11===t)&&(t=0),t!==parseInt(e.substring(9,10)))return!1;n=0;for(let s=1;s<=10;s++)n+=parseInt(e.substring(s-1,s))*(12-s);return(10==(t=10*n%11)||11===t)&&(t=0),t===parseInt(e.substring(10,11))}function r(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}n.d(t,{dI:function(){return r},sw:function(){return s},zk:function(){return l}})}}]);