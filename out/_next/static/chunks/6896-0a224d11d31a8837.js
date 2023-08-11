"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6896],{45061:function(e,t,l){var a=l(85893),o=l(75084),n=l(1890),r=l(77745),s=l(95398),i=l(76779),d=l(44642);l(21609);var c=l(19604),u=l(29630),x=l(55343),m=l(67836),v=l(67294),p=l(82747);l(84220),l(29308),l(67569),l(3893),l(88475);let h=e=>{let{title:t,text:l,handleClose:h,openModal:j,handleSubmit:b,cnpj:f,nomeFornecedor:Z,gruposAnexo:g,email:C,setEmail:y,inputEmail:D,btnCancel:I,btnConfirm:P,grupoAnexosFornecedor:S,btnCancelColor:k,btnConfirmColor:w,closeAfterSave:F,listErrors:W}=e,[A,E]=(0,v.useState)(!1);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(n.Z,{open:j,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,t){"backdropClick"!==t&&h()},children:[(0,a.jsx)(r.Z,{id:"form-dialog-title",children:t}),(0,a.jsxs)(s.Z,{children:[(0,a.jsxs)(d.Z,{sx:{mb:3},children:[l,W&&W.status&&(0,a.jsxs)(c.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,a.jsx)(u.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:W.errors.map((e,t)=>(0,a.jsxs)(u.Z,{variant:"body2",color:"error",children:["- ",e]},t))})]})]}),D&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(x.Z,{sx:{mt:2},fullWidth:!0,children:[(0,a.jsx)(m.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==C?void 0:C.length)>0&&A,inputProps:{onChange(e){y(e.target.value),E(!(0,p.dI)(e.target.value))}}}),(null==C?void 0:C.length)>0&&A&&(0,a.jsx)(u.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,a.jsx)(c.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,a.jsxs)(i.Z,{className:"dialog-actions-dense",children:[I&&(0,a.jsx)(o.Z,{variant:"outlined",color:"primary",onClick:h,children:"Cancelar"}),P&&(0,a.jsx)(o.Z,{variant:"contained",disabled:D&&(null==C?void 0:C.length)>0&&A||W&&W.status,color:w||"error",onClick:D&&f?()=>{b(f,Z,g,C),F&&h()}:D&&!f?()=>{b(C),F&&h()}:()=>{b(),F&&h()},children:"Confirmar"})]})]})})};t.Z=h},11935:function(e,t,l){l.d(t,{Z:function(){return D}});var a=l(85893),o=l(75084),n=l(1890),r=l(77745),s=l(95398),i=l(76779),d=l(44642),c=l(40039);l(21609);var u=l(19604),x=l(29630),m=l(67294),v=l(79072),p=l(55343),h=l(61953),j=l(41470),b=l(22841),f=l(15497),Z=l(75158),g=l(67836);let C=e=>{let{title:t,name:l,value:o,papelID:n,setResult:r,options:s}=e;return(0,a.jsxs)(v.ZP,{container:!0,spacing:2,sx:{mt:4},children:[n&&1==n&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v.ZP,{item:!0,xs:12,md:12,children:(0,a.jsxs)(p.Z,{fullWidth:!0,children:[(0,a.jsx)(x.Z,{variant:"subtitle1",sx:{fontWeight:600,mb:2},children:t}),(0,a.jsx)(h.Z,{display:"flex",gap:8,children:(0,a.jsx)(j.Z,{row:!0,"aria-label":"colored",name:"colored",value:o.status,onChange(e,t){r({...o,status:t})},children:s&&s.map((e,t)=>(0,a.jsx)(b.Z,{value:e.value,name:l,control:(0,a.jsx)(f.Z,{color:e.color}),label:e.label}))})})]})}),o.status&&(50==o.status||60==o.status)&&(0,a.jsx)(v.ZP,{item:!0,xs:12,md:12,children:(0,a.jsx)(b.Z,{label:"Gerar n\xe3o conformidade",control:(0,a.jsx)(Z.Z,{name:"naoConformidade",value:null==o?void 0:o.naoConformidade,checked:50==o.status,onChange(e){r({...o,naoConformidade:e.target.checked})}})})})]}),(0,a.jsx)(v.ZP,{item:!0,xs:12,md:12,children:(0,a.jsx)(p.Z,{fullWidth:!0,children:(0,a.jsx)(g.Z,{label:"Observa\xe7\xe3o de conclus\xe3o (opcional)",placeholder:"Observa\xe7\xe3o de conclus\xe3o (opcional)",defaultValue:o.obsConclusao,multiline:!0,rows:4,onChange(e,t){r({...o,obsConclusao:e.target.value})}})})})]})},y=e=>{let{title:t,text:l,handleClose:v,openModal:p,conclusionForm:h,info:j,canChange:b,btnCancel:f,btnConfirm:Z,listErrors:g}=e;console.log("\uD83D\uDE80 ~ canChange:",b),console.log("\uD83D\uDE80 ~ DialogFormConclusion title:",t);let{user:y,loggedUnity:D}=(0,m.useContext)(c.V),[I,P]=(0,m.useState)({});return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(n.Z,{open:p,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,t){"backdropClick"!==t&&v()},children:[(0,a.jsx)(r.Z,{id:"form-dialog-title",children:t}),(0,a.jsx)(s.Z,{children:(0,a.jsx)(d.Z,{sx:{mb:3},children:b?(0,a.jsxs)(a.Fragment,{children:[l,g&&g.status&&(0,a.jsxs)(u.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,a.jsx)(x.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:g.errors.map((e,t)=>(0,a.jsxs)(x.Z,{variant:"body2",color:"error",children:["- ",e]},t))})]}),g&&!g.status&&(0,a.jsx)(u.Z,{severity:"warning",sx:{mt:2},children:"Ap\xf3s concluir o formul\xe1rio, o mesmo n\xe3o poder\xe1 mais ser alterado!"}),(0,a.jsx)(C,{title:1==y.papelID?"Resultado do Processo":"Observa\xe7\xe3o",name:"status",value:I,setResult:P,papelID:y.papelID,options:[{value:70,color:"success",label:"Aprovado"},{value:60,color:"warning",label:"Aprovado Parcial"},{value:50,color:"error",label:"Reprovado"}]})]}):(0,a.jsx)(u.Z,{severity:"warning",sx:{mb:0},children:"O Status n\xe3o pode mais ser alterado pois j\xe1 est\xe1 sendo utilizado em outro formul\xe1rio!"})})}),(0,a.jsxs)(i.Z,{className:"dialog-actions-dense",children:[f&&(0,a.jsx)(o.Z,{variant:"outlined",color:"primary",onClick:v,children:"Fechar"}),Z&&b&&(0,a.jsx)(o.Z,{variant:"contained",disabled:g&&g.status||1==y.papelID&&!I.status,color:"primary",onClick(){v(),h(I)},children:"Concluir"})]})]})})};var D=y},34282:function(e,t,l){var a=l(85893),o=l(67294),n=l(75084),r=l(1890),s=l(77745),i=l(95398),d=l(76779),c=l(44642),u=l(21609),x=l(60664),m=l(79072),v=l(55343),p=l(35966),h=l(67836),j=l(19604),b=l(61953),f=l(46749),Z=l(40039),g=l(7071),C=l(67074),y=l(17494),D=l(87413),I=l(29630),P=l(72162),S=l(9601),k=l(51221),w=l(36599),F=l(45061);let W=(0,C.ZP)(w.Z)({paddingLeft:0,paddingRight:0,"& .MuiTimelineItem-root":{width:"100%","&:before":{display:"none"}}}),A=e=>{var t;let{id:l,parFormularioID:C,formStatus:w,hasFormPending:A,title:E,text:V,handleClose:R,openModal:O,handleSubmit:z,btnCancel:N,btnConfirm:M,canChangeStatus:_,btnConfirmColor:L}=e,[H,K]=(0,o.useState)(!1),{user:$,loggedUnity:q}=(0,o.useContext)(Z.V),[T,B]=(0,o.useState)(null),[G,Q]=(0,o.useState)(""),[Y,J]=(0,o.useState)(!1);console.log("selectedStatus: ",T);let U=async()=>{try{await x.h.post("/formularios/fornecedor/getMovementHistory/".concat(l),{parFormularioID:C}).then(e=>{K(e.data)})}catch(e){console.log(e)}},X=[];for(let ee in f.WR)30==parseInt(ee)&&parseInt(ee)!=w&&X.push({id:parseInt(ee),nome:f.WR[ee].title});return(0,o.useEffect)(()=>{U()},[Y]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.Z,{open:O,onClose:R,"aria-labelledby":"form-dialog-title",children:[(0,a.jsx)(s.Z,{id:"form-dialog-title",children:E}),(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(c.Z,{sx:{mb:3},children:V}),_&&(0,a.jsxs)(m.ZP,{container:!0,spacing:4,children:[(0,a.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,a.jsx)(v.Z,{fullWidth:!0,children:(0,a.jsx)(p.Z,{options:X,defaultValue:X.find(e=>e.id===T),id:"autocomplete-outlined",getOptionLabel:e=>e.nome,onChange(e,t){B(null==t?void 0:t.id)},renderInput:e=>(0,a.jsx)(h.Z,{...e,name:"formulario.status",label:"Alterar Status do Formul\xe1rio",placeholder:"Alterar Status do Formul\xe1rio"})})})}),T&&T>0&&(0,a.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,a.jsx)(v.Z,{fullWidth:!0,children:(0,a.jsx)(h.Z,{id:"outlined-multiline-static",label:"Observa\xe7\xe3o",multiline:!0,rows:4,placeholder:"Observa\xe7\xe3o",variant:"outlined",onChange:e=>Q(e.target.value)})})})]}),$&&1==$.papelID&&A&&(0,a.jsx)(j.Z,{severity:"warning",sx:{mb:4},children:"O Status n\xe3o pode mais ser alterado pois j\xe1 est\xe1 sendo utilizado em outro formul\xe1rio!"}),(0,a.jsx)(b.Z,{children:(0,a.jsx)(W,{children:H&&H.length>0&&H.map((e,t)=>(0,a.jsxs)(D.Z,{children:[(0,a.jsxs)(S.Z,{children:[(0,a.jsx)(y.Z,{color:f.WR[e.statusAtual].color}),(0,a.jsx)(k.Z,{})]}),(0,a.jsxs)(P.Z,{sx:{"& svg":{verticalAlign:"bottom",mx:4}},children:[(0,a.jsxs)(b.Z,{sx:{mb:2,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,a.jsxs)(I.Z,{variant:"body2",sx:{mr:2,fontWeight:600,color:"text.primary"},children:[e.data+" - "+e.hora+" ",0==t&&(0,a.jsx)(g.Z,{size:"small",skin:"light",color:f.WR[e.statusAtual].color,label:"Atual",sx:{"& .MuiChip-label":{textTransform:"capitalize"}}})]}),(0,a.jsx)(I.Z,{variant:"caption",children:e.usuario})]}),(0,a.jsxs)(b.Z,{sx:{mb:2,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[(0,a.jsxs)(I.Z,{variant:"body2",sx:{color:"text.primary"},children:[(0,a.jsx)("span",{children:f.WR[e.statusAnterior].title}),(0,a.jsx)(u.Z,{icon:"mdi:arrow-right",fontSize:20,style:{display:"inline-block"}}),(0,a.jsx)("span",{children:f.WR[e.statusAtual].title})]}),(0,a.jsx)(I.Z,{variant:"caption",children:e.unidade})]}),null!=e.observacao&&(0,a.jsx)(b.Z,{children:(0,a.jsx)(I.Z,{variant:"caption",children:e.observacao})})]})]}))})})]}),(0,a.jsxs)(d.Z,{className:"dialog-actions-dense",children:[N&&(0,a.jsx)(n.Z,{variant:"outlined",color:"primary",onClick:R,children:"Fechar"}),M&&$&&1==$.papelID&&!A&&_&&(0,a.jsx)(n.Z,{variant:"contained",color:"primary",onClick:()=>1==C?J(!0):z(T,G),disabled:!T,children:"Confirmar"})]})]}),(0,a.jsx)(F.Z,{openModal:Y,handleClose:()=>J(!1),title:"Confirmar Altera\xe7\xe3o",text:'Deseja realmente alterar o status do formul\xe1rio para "'.concat(null===(t=f.WR[T])||void 0===t?void 0:t.title,'" ? O mesmo ficar\xe1 dispon\xedvel para a edi\xe7\xe3o do Fornecedor novamente.'),btnCancel:!0,btnConfirm:!0,btnConfirmColor:"primary",handleSubmit(){z(T,G),J(!1),B(null)}})]})};t.Z=A},79139:function(e,t,l){l.d(t,{Z:function(){return h}});var a=l(85893),o=l(49837),n=l(91359),r=l(79072),s=l(29630),i=l(67294),d=l(55343),c=l(46749),u=l(29308),x=l(84220),m=l(50287);let v=e=>{var t,l,o,n,s,v,p,h,j;let{blockIndex:b,index:f,values:Z,register:g,control:C,errors:y,setValue:D,disabled:I}=e,[P,S]=(0,i.useState)({}),k=(e,t,l,a)=>{console.log("\uD83D\uDE80 ~ type, name, value, numDays:",e,t,l,a);let o=new Date(l),n=(0,c.HD)(e,o,a);console.log("status",n),S(e=>({...e,[t]:n}))};return(0,i.useEffect)(()=>{"Data"===Z.alternativa&&k("dataPassado",null,Z.resposta,365)},[]),(0,a.jsxs)(r.ZP,{index:f,container:!0,spacing:4,sx:{mb:4,display:"flex",alignItems:"center"},children:[(0,a.jsx)("input",{type:"hidden",name:"blocos[".concat(b,"].itens[").concat(f,"].itemID"),defaultValue:Z.itemID,...g("blocos[".concat(b,"].itens[").concat(f,"].itemID"))}),(0,a.jsx)(r.ZP,{item:!0,xs:12,md:6,children:Z.ordem+" - "+Z.nome}),(0,a.jsxs)(r.ZP,{item:!0,xs:12,md:3,children:[(0,a.jsx)("input",{type:"hidden",name:"blocos[".concat(b,"].itens[").concat(f,"].tipoAlternativa"),defaultValue:Z.alternativa,...g("blocos[".concat(b,"].itens[").concat(f,"].tipoAlternativa"))}),(0,a.jsxs)(d.Z,{fullWidth:!0,children:[Z&&Z.alternativas&&Z.alternativas.length>1&&(0,a.jsx)(x.Z,{title:"Selecione uma resposta",options:Z.alternativas,name:"blocos[".concat(b,"].itens[").concat(f,"].resposta"),idName:"alternativaID",value:Z.resposta,disabled:I,control:C,register:g,setValue:D,errors:null===(o=null==y?void 0:null===(t=y.blocos)||void 0===t?void 0:null===(l=t[b])||void 0===l?void 0:l.itens[f])||void 0===o?void 0:o.resposta}),0==Z.alternativas.length&&"Data"==Z.alternativa&&(0,a.jsx)(m.Z,{xs:12,md:12,title:"Data da avalia\xe7\xe3o",disabled:I,value:Z.resposta,type:null,name:"blocos[".concat(b,"].itens[").concat(f,"].resposta"),errors:null===(v=null==y?void 0:null===(n=y.blocos)||void 0===n?void 0:null===(s=n[b])||void 0===s?void 0:s.itens[f])||void 0===v?void 0:v.resposta,control:C,setDateFormat:k,typeValidation:"dataPassado",daysValidation:365,dateStatus:P,register:g}),0==Z.alternativas.length&&"Dissertativa"==Z.alternativa&&(0,a.jsx)(u.Z,{title:"Descreva a resposta",name:"blocos[".concat(b,"].itens[").concat(f,"].resposta"),value:Z.resposta,multiline:!0,disabled:I,control:C,errors:null===(j=null==y?void 0:null===(p=y.blocos)||void 0===p?void 0:null===(h=p[b])||void 0===h?void 0:h.itens[f])||void 0===j?void 0:j.resposta})]})]}),Z&&1==Z.obs&&(0,a.jsx)(r.ZP,{item:!0,xs:12,md:3,children:(0,a.jsx)(d.Z,{fullWidth:!0,children:(0,a.jsx)(u.Z,{title:"Observa\xe7\xe3o",name:"blocos[".concat(b,"].itens[").concat(f,"].observacao"),value:null==Z?void 0:Z.observacao,multiline:!0,disabled:I,control:C})})})]})},p=e=>{let{index:t,values:l,blockKey:i,register:d,control:c,setValue:u,errors:x,disabled:m}=e;return console.log("\uD83D\uDE80 ~ BLOCK:",t,l),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(o.Z,{sx:{mt:4},children:(0,a.jsx)(n.Z,{children:(0,a.jsxs)(r.ZP,{container:!0,children:[(0,a.jsx)(r.ZP,{item:!0,xs:12,md:12,children:(0,a.jsx)(s.Z,{color:"primary",variant:"subtitle1",sx:{fontWeight:700,mb:6},children:null==l?void 0:l.nome})}),l.itens&&l.itens.map((e,l)=>(0,a.jsx)(v,{blockIndex:t,index:l,values:e,control:c,register:d,setValue:u,errors:x,disabled:m},l))]})})},t)})};var h=p},56531:function(e,t,l){var a=l(85893),o=l(79072),n=l(67294),r=l(46749),s=l(40039),i=l(11163),d=l.n(i),c=l(29308),u=l(84220),x=l(50287);let m=e=>{let{register:t,errors:l,setValue:i,fields:m,values:v,disabled:p,control:h,setCopiedDataContext:j}=e;console.log("\uD83D\uDE80 ~ Filds errors:",l);let[b,f]=(0,n.useState)({}),[Z,g]=(0,n.useState)(null),{loggedUnity:C,user:y}=(0,n.useContext)(s.V),D=d();(0,r.g_)(D.pathname);let I=(e,t,l,a)=>{let o=new Date(l),n=(0,r.HD)(e,o,a);console.log("status",n),f(e=>({...e,[t]:n}))},P=()=>{m&&m.map((e,t)=>{if((null==e?void 0:e.nomeColuna)=="registroEstabelecimentoID"){var l;g((null==e?void 0:null===(l=e[e.tabela])||void 0===l?void 0:l.id)>0?null==e?void 0:e[e.tabela].id:null)}})},S=e=>{switch(e){case"telefone":case"telefone1":case"telefone2":return"telefone";case"cep":return"cep";case"cnpj":return"cnpj";default:return null}};return(0,n.useEffect)(()=>{P()},[]),(0,a.jsx)(o.ZP,{container:!0,spacing:4,children:m&&m.map((e,o)=>{var n,r,s,d,m,v;return(0,a.jsxs)(a.Fragment,{children:[e&&"int"===e.tipo&&e.tabela&&(0,a.jsx)(u.Z,{xs:12,md:3,title:e.nomeCampo,name:"fields[".concat(o,"].").concat(e.tabela),type:e.tabela,options:e.options,value:null==e?void 0:e[e.tabela],mask:e.tabela,disabled:p,register:t,setValue:i,control:h,errors:null==l?void 0:null===(n=l.fields)||void 0===n?void 0:null===(r=n[o])||void 0===r?void 0:r[e.tabela],handleRegistroEstabelecimento:g}),e&&"date"==e.tipo&&(0,a.jsx)(x.Z,{xs:12,md:3,title:"Data da avalia\xe7\xe3o",disabled:p,value:null==e?void 0:e[e.nomeColuna],type:e.nomeColuna,name:"fields[".concat(o,"].").concat(e.nomeColuna),errors:null==l?void 0:null===(s=l.fields)||void 0===s?void 0:null===(d=s[o])||void 0===d?void 0:d[e.nomeColuna],control:h,setDateFormat:I,typeValidation:"dataPassado",daysValidation:365,dateStatus:b,register:t}),e&&"string"==e.tipo&&("numeroRegistro"!=e.nomeColuna||Z>1)&&(0,a.jsx)(c.Z,{xs:12,md:3,title:e.nomeCampo,name:"fields[".concat(o,"].").concat(e.nomeColuna),value:null==e?void 0:e[e.nomeColuna],type:e.nomeColuna,mask:S(e.nomeColuna),disabled:!!p||"cnpj"==e.nomeColuna,control:h,errors:null==l?void 0:null===(m=l.fields)||void 0===m?void 0:null===(v=m[o])||void 0===v?void 0:v[e.nomeColuna]})]})})})};t.Z=m},50287:function(e,t,l){var a=l(85893),o=l(79072),n=l(55343),r=l(67836),s=l(87536);let i=e=>{let{xs:t,md:l,title:i,isRequired:d,disabled:c,type:u,value:x,name:m,setDateFormat:v,typeValidation:p,daysValidation:h,dateStatus:j,errors:b,control:f}=e;console.log("\uD83D\uDE80 ~ type:",u);let Z=e=>{let t=new Date(e),l=t.getDate().toString().padStart(2,"0"),a=(t.getMonth()+1).toString().padStart(2,"0"),o=t.getFullYear();return"".concat(o,"-").concat(a,"-").concat(l)};return(0,a.jsx)(o.ZP,{item:!0,xs:t,md:l,sx:{my:1},children:(0,a.jsx)(n.Z,{fullWidth:!0,children:(0,a.jsx)(s.Qr,{name:m,control:f,render(e){var t,l;let{field:o}=e;return(0,a.jsx)(r.Z,{type:"date",label:i,disabled:!!c,defaultValue:x?Z(x):"",onChange(e){o.onChange(e),p&&v(p,u,e.target.value,h)},variant:"outlined",fullWidth:!0,InputLabelProps:{shrink:!0},inputProps:{min:null==j?void 0:null===(t=j[u])||void 0===t?void 0:t.dataIni,max:null==j?void 0:null===(l=j[u])||void 0===l?void 0:l.dataFim}})}})})})};t.Z=i},47842:function(e,t,l){var a=l(85893),o=l(70754),n=l(61953);let r=e=>{let{title:t}=e;return(0,a.jsxs)(n.Z,{sx:{position:"absolute",top:"50%",left:"50%",textAlign:"center"},children:[(0,a.jsx)(o.Z,{}),(0,a.jsx)("p",{children:null!=t?t:"Carregando..."})]})};t.Z=r},82747:function(e,t,l){function a(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=e.length-2,l=e.substring(0,t),a=e.substring(t),o=0,n=t-7;for(let r=t;r>=1;r--)o+=l.charAt(t-r)*n--,n<2&&(n=9);let s=o%11<2?0:11-o%11;if(s!=a.charAt(0))return!1;t+=1,l=e.substring(0,t),o=0,n=t-7;for(let i=t;i>=1;i--)o+=l.charAt(t-i)*n--,n<2&&(n=9);return(s=o%11<2?0:11-o%11)==a.charAt(1)}function o(e){let t;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let l=0;for(let a=1;a<=9;a++)l+=parseInt(e.substring(a-1,a))*(11-a);if((10==(t=10*l%11)||11===t)&&(t=0),t!==parseInt(e.substring(9,10)))return!1;l=0;for(let o=1;o<=10;o++)l+=parseInt(e.substring(o-1,o))*(12-o);return(10==(t=10*l%11)||11===t)&&(t=0),t===parseInt(e.substring(10,11))}function n(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}l.d(t,{dI:function(){return n},sw:function(){return o},zk:function(){return a}})}}]);