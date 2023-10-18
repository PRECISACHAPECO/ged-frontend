"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8806],{59742:function(e,r,o){o.d(r,{Z:function(){return C}});var t=o(63366),s=o(87462),i=o(67294),l=o(86010),a=o(94780),n=o(29630),d=o(78884),c=o(67074),u=o(1588),m=o(34867);function x(e){return(0,m.Z)("MuiCardHeader",e)}let p=(0,u.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var f=o(85893);let h=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],v=e=>{let{classes:r}=e;return(0,a.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},x,r)},g=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,r)=>(0,s.Z)({[`& .${p.title}`]:r.title,[`& .${p.subheader}`]:r.subheader},r.root)})({display:"flex",alignItems:"center",padding:16}),j=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,r)=>r.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),Z=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,r)=>r.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),b=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,r)=>r.content})({flex:"1 1 auto"}),y=i.forwardRef(function(e,r){let o=(0,d.Z)({props:e,name:"MuiCardHeader"}),{action:i,avatar:a,className:c,component:u="div",disableTypography:m=!1,subheader:x,subheaderTypographyProps:p,title:y,titleTypographyProps:C}=o,w=(0,t.Z)(o,h),P=(0,s.Z)({},o,{component:u,disableTypography:m}),D=v(P),S=y;null==S||S.type===n.Z||m||(S=(0,f.jsx)(n.Z,(0,s.Z)({variant:a?"body2":"h5",className:D.title,component:"span",display:"block"},C,{children:S})));let I=x;return null==I||I.type===n.Z||m||(I=(0,f.jsx)(n.Z,(0,s.Z)({variant:a?"body2":"body1",className:D.subheader,color:"text.secondary",component:"span",display:"block"},p,{children:I}))),(0,f.jsxs)(g,(0,s.Z)({className:(0,l.Z)(D.root,c),as:u,ref:r,ownerState:P},w,{children:[a&&(0,f.jsx)(j,{className:D.avatar,ownerState:P,children:a}),(0,f.jsxs)(b,{className:D.content,ownerState:P,children:[S,I]}),i&&(0,f.jsx)(Z,{className:D.action,ownerState:P,children:i})]}))});var C=y},48806:function(e,r,o){o.d(r,{Z:function(){return z}});var t=o(85893),s=o(11163),i=o.n(s),l=o(67294),a=o(60664);o(60565);var n=o(66136),d=o(83830),c=o(49837),u=o(91359),m=o(79072),x=o(72389),p=o(80562),f=o(55343),h=o(44731),v=o(59742),g=o(29630),j=o(21609),Z=o(87536),b=o(47842),y=o(86501),C=o(45061),w=o(86887),P=o(46749),D=o(49540),S=o(40039),I=o(29308),k=o(84220),N=o(3893),q=o(82747);o(53934);var F=o(9041),R=o(75084),T=o(67836);let E=e=>{let{register:r,errors:o,setShowNewPassword:s,showNewPassword:i,watch:a}=e,[n,d]=(0,l.useState)({showPassword:!1,showConfirmPassword:!1}),c=()=>{d({...n,showPassword:!n.showPassword})},u=e=>{e.preventDefault()},x=()=>{d({...n,showConfirmPassword:!n.showConfirmPassword})},h=e=>{e.preventDefault()};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.ZP,{item:!0,xs:6,md:4,children:(0,t.jsx)(f.Z,{fullWidth:!0,children:(0,t.jsx)(R.Z,{variant:"outlined",size:"large",onClick:()=>s(!i),children:"Alterar senha"})})}),i&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.ZP,{item:!0,xs:6,sm:4,children:(0,t.jsx)(T.Z,{fullWidth:!0,label:"Senha",id:"input-password",variant:"outlined",size:"small",type:n.showPassword?"text":"password",name:"senha",error:!!o.senha,helperText:o.senha&&o.senha.message,InputProps:{endAdornment:(0,t.jsx)(F.Z,{position:"end",children:(0,t.jsx)(p.Z,{edge:"end",onClick:c,onMouseDown:u,children:(0,t.jsx)(j.Z,{icon:n.showPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})})},...r("senha",{minLength:{value:4,message:"Senha deve ter pelo menos 4 caracteres"}})})}),(0,t.jsx)(m.ZP,{item:!0,xs:6,sm:4,children:(0,t.jsx)(T.Z,{fullWidth:!0,label:"Confirme a senha",id:"input-confirm-password",variant:"outlined",size:"small",type:n.showConfirmPassword?"text":"password",name:"confirmaSenha",error:!!o.confirmaSenha,helperText:o.confirmaSenha&&o.confirmaSenha.message,InputProps:{endAdornment:(0,t.jsx)(F.Z,{position:"end",children:(0,t.jsx)(p.Z,{edge:"end",onClick:x,onMouseDown:h,children:(0,t.jsx)(j.Z,{icon:n.showConfirmPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})})},onChange(e){setLenghtPassword(e.target.value)},...r("confirmaSenha",{validate:e=>e===a("senha")||"As senhas n\xe3o coincidem"})})})]})]})},M=e=>{var r,o,s,F,R,T,M,z,A,O,Y,H,_,W,$,B;let{id:J}=e,{user:L,loggedUnity:V}=(0,l.useContext)(S.V),{setId:U}=(0,l.useContext)(d.X);J=1===L.papelID?J:V.unidadeID;let[K,Q]=(0,l.useState)(!1),[X,G]=(0,l.useState)(),[ee,er]=(0,l.useState)(),[eo,et]=(0,l.useState)(!1),[es,ei]=(0,l.useState)(!1),[el,ea]=(0,l.useState)(),[en,ed]=(0,l.useState)(null),ec=i(),eu=J&&J>0?"edit":"new",em=1===L.papelID?ec.pathname:"/configuracoes/unidade",ex=(0,l.useRef)(null),{settings:ep}=(0,l.useContext)(n.J6),ef=ep.mode,{trigger:eh,handleSubmit:ev,setValue:eg,getValues:ej,setError:eZ,reset:eb,control:ey,watch:eC,formState:{errors:ew},register:eP}=(0,Z.cI)(),eD=async e=>{if(9==e.length){let r=e.replace(/\D/g,"");a.h.get("https://viacep.com.br/ws/"+r+"/json/").then(e=>{e.data.localidade?(eg("fields.logradouro",e.data.logradouro),eg("fields.bairro",e.data.bairro),eg("fields.cidade",e.data.localidade),eg("fields.uf",e.data.uf),y.ZP.success("Endere\xe7o encontrado!")):y.ZP.error("Endere\xe7o n\xe3o encontrado!")})}};console.log("erross",ew);let eS=async e=>{console.log("\uD83D\uDE80 ~ datas:",e);let r=(0,q.zk)(e.fields.cnpj);if(!r){eZ("fields.cnpj",{type:"required",message:"CNPJ inv\xe1lido"});return}let o={...e,usuarioID:V.usuarioID,fields:{dataCadastro:(0,D.p6)(e.dataCadastro,"YYYY-MM-DD"),...e.fields}};delete o.cabecalhoRelatorioTitle,delete o.cabecalhoRelatorio;try{"new"===eu?await a.h.post("".concat((0,P.g_)(em),"/new/insertData"),o).then(e=>{ec.push("".concat((0,P.g_)(em))),U(e.data),y.ZP.success(P.OD.successNew)}):"edit"===eu&&(await a.h.post("".concat(em,"/updateData/").concat(J),o),y.ZP.success(P.OD.successUpdate),et(!1),ek())}catch(t){t.response&&409===t.response.status?y.ZP.error(P.OD.errorRepeated):console.log(t)}if(2==L.papelID){for(let s in V)s in o&&(V[s]=o[s]);localStorage.setItem("loggedUnity",JSON.stringify(V))}},eI=async()=>{try{await a.h.delete("".concat(em,"/").concat(J)),U(null),Q(!1),y.ZP.success(P.OD.successDelete)}catch(e){e.response&&409===e.response.status?(y.ZP.error(P.OD.pendingDelete),Q(!1)):console.log(e)}},ek=async()=>{if("edit"==eu)try{var e,r;let o=await a.h.get("".concat(em,"/").concat(J));eb(o.data),G(o.data),ea(o.data.fields.cabecalhoRelatorioTitle),ed(null===(e=o.data)||void 0===e?void 0:null===(r=e.fields)||void 0===r?void 0:r.cabecalhoRelatorio)}catch(t){console.log(t)}else G({}),eb({fields:{logradouro:"--",bairro:"--",cidade:"--",uf:"--"}})};(0,l.useEffect)(()=>{ek()},[J]);//! Crud imagem cabeçalho relatórios
let eN=()=>{ex.current.click()},eq=async e=>{let r=e.target.files[0];if(r){let o=new FormData;o.append("files[]",r),o.append("usuarioID",L.usuarioID);let t=r.type.includes("image");if(!t){y.ZP.error("O arquivo selecionado n\xe3o \xe9 uma imagem!");return}await a.h.post("".concat(em,"/updateData/report/").concat(J,"/").concat(L.usuarioID),o).then(e=>{ed(e.data),y.ZP.success("Foto atualizada com sucesso!")}).catch(e=>{var r,o,t;y.ZP.error(null!==(t=null===(r=e.response)||void 0===r?void 0:null===(o=r.data)||void 0===o?void 0:o.message)&&void 0!==t?t:"Erro ao atualizar foto de perfil, tente novamente!")})}},eF=async()=>{try{await a.h.delete("".concat(em,"/fileReport/").concat(J)),ed(null),y.ZP.success("Foto removida com sucesso!")}catch(e){console.log(e),y.ZP.error("Erro ao remover foto, tente novamente!")}};return(0,t.jsxs)(t.Fragment,{children:[!X&&(0,t.jsx)(b.Z,{}),X&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.Z,{children:(0,t.jsxs)("form",{onSubmit:ev(eS),children:[(0,t.jsx)(w.Z,{btnCancel:1===L.papelID,btnSave:!0,handleSubmit:()=>ev(eS),btnDelete:"edit"===eu&&1===L.papelID,onclickDelete:()=>Q(!0),type:eu}),(0,t.jsx)(u.Z,{children:(0,t.jsxs)(m.ZP,{container:!0,spacing:4,children:["edit"==eu&&(0,t.jsx)(m.ZP,{item:!0,xs:12,md:2,children:(0,t.jsxs)(m.ZP,{item:!0,xs:12,md:12,sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"140px",position:"relative",border:"".concat("dark"===ef?"1px solid #65656E":"1px solid #C5C6CD"),borderRadius:"8px"},children:[en&&(0,t.jsx)(x.Z,{title:"Apagar foto do perfil",placement:"top",children:(0,t.jsx)(p.Z,{size:"small",sx:{position:"absolute",top:"8px",right:"8px",zIndex:"20",color:"white",opacity:"0.8",backgroundColor:"#FF4D49","&:hover":{backgroundColor:"#FF4D49",opacity:"1"}},onClick:eF,children:(0,t.jsx)(j.Z,{icon:"material-symbols:delete-outline"})})}),(0,t.jsx)(x.Z,{title:en?"Alterar foto":"Inserir foto",placement:"top",children:(0,t.jsxs)(f.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%"},children:[(0,t.jsx)("input",{type:"file",ref:ex,style:{display:"none"},onChange:eq}),(0,t.jsx)(h.Z,{variant:"rounded",alt:"Imagem do cabe\xe7alho do relat\xf3rio",sx:{width:"100%",height:"100%",cursor:"pointer"},onClick:eN,src:null!=en?en:"https://gedagro.com.br/images/report.png"})]})})]})}),(0,t.jsx)(m.ZP,{item:!0,xs:12,md:"new"==eu?12:10,children:(0,t.jsxs)(m.ZP,{container:!0,spacing:4,children:[(0,t.jsx)(I.Z,{xs:12,md:4,title:"Nome Fantasia",name:"fields.nomeFantasia",required:!0,register:eP,control:ey,errors:null==ew?void 0:null===(r=ew.fields)||void 0===r?void 0:r.nomeFantasia}),(0,t.jsx)(I.Z,{xs:12,md:4,title:"Raz\xe3o Social",name:"fields.razaoSocial",required:!0,register:eP,control:ey,errors:null==ew?void 0:null===(o=ew.fields)||void 0===o?void 0:o.razaoSocial}),(0,t.jsx)(I.Z,{xs:12,md:4,title:"CNPJ",name:"fields.cnpj",mask:"cnpj",required:!0,register:eP,control:ey,errors:null==ew?void 0:null===(s=ew.fields)||void 0===s?void 0:s.cnpj}),(0,t.jsx)(I.Z,{xs:12,md:4,title:"Respons\xe1vel",name:"fields.responsavel",required:!0,register:eP,control:ey,errors:null==ew?void 0:null===(F=ew.fields)||void 0===F?void 0:F.responsavel}),(0,t.jsx)(I.Z,{xs:12,md:4,title:"E-mail",name:"fields.email",type:"email",required:!0,register:eP,control:ey,errors:null==ew?void 0:null===(R=ew.fields)||void 0===R?void 0:R.email}),(0,t.jsx)(I.Z,{xs:12,md:4,title:"Telefone 1",name:"fields.telefone1",mask:"telefone",required:!1,register:eP,control:ey,errors:null==ew?void 0:null===(T=ew.fields)||void 0===T?void 0:T.telefone1}),(0,t.jsx)(I.Z,{xs:12,md:4,title:"Telefone 2",name:"fields.telefone2",mask:"telefone",required:!1,register:eP,control:ey,errors:null==ew?void 0:null===(M=ew.fields)||void 0===M?void 0:M.telefone2}),(0,t.jsx)(I.Z,{xs:12,md:4,title:"CEP",name:"fields.cep",getAddressByCep:eD,mask:"cep",required:!1,register:eP,control:ey,errors:null==ew?void 0:null===(z=ew.fields)||void 0===z?void 0:z.cep}),(0,t.jsx)(I.Z,{xs:12,md:4,title:"Rua",name:"fields.logradouro",required:!1,register:eP,control:ey,errors:null==ew?void 0:null===(A=ew.fields)||void 0===A?void 0:A.logradouro}),(0,t.jsx)(I.Z,{xs:12,md:4,title:"N\xfamero",name:"fields.numero",required:!1,register:eP,control:ey,errors:null==ew?void 0:null===(O=ew.fields)||void 0===O?void 0:O.numero}),(0,t.jsx)(I.Z,{xs:12,md:4,title:"Complemento",name:"fields.complemento",required:!1,register:eP,control:ey,errors:null==ew?void 0:null===(Y=ew.fields)||void 0===Y?void 0:Y.complemento}),(0,t.jsx)(I.Z,{xs:12,md:4,title:"Bairro",name:"fields.bairro",required:!1,register:eP,control:ey,errors:null==ew?void 0:null===(H=ew.fields)||void 0===H?void 0:H.bairro}),(0,t.jsx)(I.Z,{xs:12,md:8,title:"Cidade",name:"fields.cidade",required:!1,register:eP,control:ey,errors:null==ew?void 0:null===(_=ew.fields)||void 0===_?void 0:_.cidade}),(0,t.jsx)(I.Z,{xs:12,md:4,title:"UF",name:"fields.uf",mask:"estado",required:!1,register:eP,control:ey,errors:null==ew?void 0:null===(W=ew.fields)||void 0===W?void 0:W.uf}),"edit"==eu&&2==L.papelID&&(0,t.jsx)(E,{register:eP,errors:ew,showNewPassword:eo,setShowNewPassword:et,watch:eC})]})})]})})]})}),"edit"==eu&&1==L.papelID&&(0,t.jsxs)(c.Z,{sx:{mt:4},children:[(0,t.jsx)(v.Z,{title:"Par\xe2metros"}),(0,t.jsx)(u.Z,{children:(0,t.jsx)(m.ZP,{container:!0,spacing:8,children:(0,t.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,t.jsxs)(m.ZP,{container:!0,spacing:4,children:[(0,t.jsx)(I.Z,{xs:12,md:12,title:"T\xedtulo do relat\xf3rio",name:"fields.tituloRelatorio",required:!1,register:eP,control:ey,errors:null==ew?void 0:null===($=ew.fields)||void 0===$?void 0:$.tituloRelatorio,helpText:"T\xedtulo que aparecer\xe1 no cabe\xe7alho dos relat\xf3rios"}),(0,t.jsx)(k.Z,{xs:12,md:8,multiple:!0,title:"Extens\xf5es de Arquivos Permitidas",name:"fields.extensoes",options:X.fields.allExtensions,value:X.fields.extensoes,register:eP,setValue:eg,control:ey}),(0,t.jsx)(I.Z,{xs:12,md:4,title:"Tamanho m\xe1ximo dos anexos (MB)",name:"fields.anexosTamanhoMaximo",required:!0,register:eP,control:ey,errors:null==ew?void 0:null===(B=ew.fields)||void 0===B?void 0:B.anexosTamanhoMaximo}),(0,t.jsx)(N.Z,{title:"Obrigat\xf3rio o produto no formul\xe1rio de qualifica\xe7\xe3o do fornecedor",name:"fields.obrigatorioProdutoFornecedor",value:X.fields.obrigatorioProdutoFornecedor,register:eP,helpText:"Com esta op\xe7\xe3o marcada, ser\xe1 obrigat\xf3rio selecionar um ou mais produtos no formul\xe1rio de qualifica\xe7\xe3o do fornecedor."})]})})})})]}),"edit"===eu&&X&&(0,t.jsxs)(g.Z,{variant:"caption",sx:{display:"flex",justifyContent:"end",p:4},children:["Data de cadastro:",(0,D.p6)(X.fields.dataCadastro,"DD/MM/YYYY")]})]}),(0,t.jsx)(C.Z,{title:"Excluir dado",text:"Tem certeza que deseja excluir?",openModal:K,handleClose:()=>Q(!1),handleSubmit:eI,btnCancel:!0,btnConfirm:!0})]})};var z=M},45061:function(e,r,o){var t=o(85893),s=o(75084),i=o(1890),l=o(77745),a=o(95398),n=o(76779),d=o(44642);o(21609);var c=o(19604),u=o(29630),m=o(55343),x=o(67836),p=o(67294),f=o(82747);o(84220),o(29308),o(67569),o(3893),o(88475);let h=e=>{let{title:r,text:o,handleClose:h,openModal:v,handleSubmit:g,cnpj:j,nomeFornecedor:Z,gruposAnexo:b,email:y,setEmail:C,inputEmail:w,btnCancel:P,btnConfirm:D,grupoAnexosFornecedor:S,btnCancelColor:I,btnConfirmColor:k,closeAfterSave:N,listErrors:q}=e,[F,R]=(0,p.useState)(!1);return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(i.Z,{open:v,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,r){"backdropClick"!==r&&h()},children:[(0,t.jsx)(l.Z,{id:"form-dialog-title",children:r}),(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(d.Z,{sx:{mb:3},children:[o,q&&q.status&&(0,t.jsxs)(c.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,t.jsx)(u.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:q.errors.map((e,r)=>(0,t.jsxs)(u.Z,{variant:"body2",color:"error",children:["- ",e]},r))})]})]}),w&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(m.Z,{sx:{mt:2},fullWidth:!0,children:[(0,t.jsx)(x.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==y?void 0:y.length)>0&&F,inputProps:{onChange(e){C(e.target.value),R(!(0,f.dI)(e.target.value))}}}),(null==y?void 0:y.length)>0&&F&&(0,t.jsx)(u.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,t.jsx)(c.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,t.jsxs)(n.Z,{className:"dialog-actions-dense",children:[P&&(0,t.jsx)(s.Z,{variant:"outlined",color:"primary",onClick:h,children:"Cancelar"}),D&&(0,t.jsx)(s.Z,{variant:"contained",disabled:w&&(null==y?void 0:y.length)>0&&F||q&&q.status,color:k||"error",onClick:w&&j?()=>{g(j,Z,b,y),N&&h()}:w&&!j?()=>{g(y),N&&h()}:()=>{g(),N&&h()},children:"Confirmar"})]})]})})};r.Z=h},3893:function(e,r,o){var t=o(85893),s=o(79072),i=o(61953),l=o(22841),a=o(75158),n=o(53934);let d=e=>{let{xs:r,md:o,title:d,index:c,name:u,typePage:m,value:x,disabled:p,register:f,onClick:h,helpText:v,helpTextPosition:g}=e;return(0,t.jsx)(s.ZP,{item:!0,xs:r,md:o,children:(0,t.jsx)(i.Z,{display:"flex",alignItems:"center",justifyContent:"start",sx:{gap:0},children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.Z,{control:(0,t.jsx)(a.Z,{name:u,onClick:h,...f(u),defaultChecked:x,disabled:p}),label:d,size:"small",sx:{marginRight:"4px","&:hover":{"& .MuiFormControlLabel-label":{color:"primary.main"}}}}),v&&(0,t.jsx)(n.Z,{text:v,position:null!=g?g:"top"})]})})})};r.Z=d},88475:function(e,r,o){var t=o(85893),s=o(79072),i=o(61953),l=o(29630),a=o(72389),n=o(80562),d=o(21609);let c=e=>{let{xs:r,md:o,icon:c,color:u,title:m,removeItem:x,item:p,pending:f,index:h,textSuccess:v,textError:g}=e;return v=v||"Remover este item",g=g||"Este item n\xe3o pode ser removido pois possui cadastros vinculados a ele",(0,t.jsx)(s.ZP,{item:!0,xs:r,md:o,children:(0,t.jsxs)(i.Z,{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,t.jsx)(l.Z,{variant:"caption",children:m}),(0,t.jsx)(a.Z,{title:1==f?g:v,children:(0,t.jsx)(n.Z,{color:null!=u?u:"error",size:"small",onClick(){1!=f&&x(p,h)},sx:{opacity:1==f?.5:1,cursor:1==f?"default":"pointer"},children:(0,t.jsx)(d.Z,{icon:null!=c?c:"tabler:trash-filled"})})})]})})};r.Z=c},84220:function(e,r,o){var t=o(85893),s=o(79072),i=o(55343),l=o(35966),a=o(67836),n=o(87536),d=o(53934);let c=e=>{var r;let{xs:o,md:c,title:u,options:m,name:x,type:p,limitTags:f,value:h,required:v,control:g,disabled:j,multiple:Z,setValue:b,errors:y,onChange:C,className:w,createNew:P,handleRegistroEstabelecimento:D,helpText:S,helpTextPosition:I}=e,k=m?[...m]:[];return P&&(k=[{nome:"-- Novo --"},...m]),(0,t.jsx)(s.ZP,{item:!0,xs:o,md:c,sx:{my:1},className:w,children:(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)(i.Z,{fullWidth:!0,children:(0,t.jsx)(n.Qr,{name:x,control:g,defaultValue:h,rules:{required:v},render(e){let{field:o}=e;return(0,t.jsx)(l.Z,{...o,multiple:Z,limitTags:f,size:"small",options:k,getOptionLabel:e=>(null==e?void 0:e.cnpj)?"".concat(e.cnpj," - ").concat(e.nome):null==e?void 0:e.nome,value:Z&&o.value&&o.value.length>0?o.value.map(e=>m.find(r=>r.nome===e.nome)):null!==(r=o.value)&&void 0!==r?r:{nome:""},disabled:j,onChange(e,r){r&&"-- Novo --"===r.nome?(P(),b(x,Z?[]:{nome:""})):(C&&C(r),b(x,r),"registroestabelecimento"===p&&D(r?r.id:null))},renderInput:e=>(0,t.jsx)(a.Z,{...e,label:u,placeholder:u,error:!!y}),noOptionsText:"Sem op\xe7\xf5es"})}})}),S&&(0,t.jsx)("div",{className:"absolute right-[60px] top-[12px] ",children:(0,t.jsx)(d.Z,{text:S,position:null!=I?I:"top"})})]})})};r.Z=c},47842:function(e,r,o){var t=o(85893),s=o(70754);let i=e=>{let{show:r,title:o}=e;return r&&(0,t.jsx)("div",{className:"absolute inset-0 flex items-center justify-center rounded-lg z-50",children:(0,t.jsxs)("div",{className:"flex flex-col justify-center items-center gap-2 ",children:[(0,t.jsx)(s.Z,{color:"primary"}),(0,t.jsx)("p",{className:"text-sm opacity-80",children:null!=o?o:"Carregando..."})]})})};r.Z=i},82747:function(e,r,o){function t(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let r=e.length-2,o=e.substring(0,r),t=e.substring(r),s=0,i=r-7;for(let l=r;l>=1;l--)s+=o.charAt(r-l)*i--,i<2&&(i=9);let a=s%11<2?0:11-s%11;if(a!=t.charAt(0))return!1;r+=1,o=e.substring(0,r),s=0,i=r-7;for(let n=r;n>=1;n--)s+=o.charAt(r-n)*i--,i<2&&(i=9);return(a=s%11<2?0:11-s%11)==t.charAt(1)}function s(e){let r;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let o=0;for(let t=1;t<=9;t++)o+=parseInt(e.substring(t-1,t))*(11-t);if((10==(r=10*o%11)||11===r)&&(r=0),r!==parseInt(e.substring(9,10)))return!1;o=0;for(let s=1;s<=10;s++)o+=parseInt(e.substring(s-1,s))*(12-s);return(10==(r=10*o%11)||11===r)&&(r=0),r===parseInt(e.substring(10,11))}function i(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}o.d(r,{dI:function(){return i},sw:function(){return s},zk:function(){return t}})}}]);