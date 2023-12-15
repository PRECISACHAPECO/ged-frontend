"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8806],{59742:function(e,o,r){r.d(o,{Z:function(){return C}});var t=r(63366),a=r(87462),i=r(67294),s=r(86010),n=r(94780),l=r(29630),d=r(78884),c=r(67074),u=r(1588),m=r(34867);function x(e){return(0,m.Z)("MuiCardHeader",e)}let f=(0,u.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var p=r(85893);let h=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],v=e=>{let{classes:o}=e;return(0,n.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},x,o)},g=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,o)=>(0,a.Z)({[`& .${f.title}`]:o.title,[`& .${f.subheader}`]:o.subheader},o.root)})({display:"flex",alignItems:"center",padding:16}),Z=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,o)=>o.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),j=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,o)=>o.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),b=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,o)=>o.content})({flex:"1 1 auto"}),y=i.forwardRef(function(e,o){let r=(0,d.Z)({props:e,name:"MuiCardHeader"}),{action:i,avatar:n,className:c,component:u="div",disableTypography:m=!1,subheader:x,subheaderTypographyProps:f,title:y,titleTypographyProps:C}=r,P=(0,t.Z)(r,h),w=(0,a.Z)({},r,{component:u,disableTypography:m}),D=v(w),I=y;null==I||I.type===l.Z||m||(I=(0,p.jsx)(l.Z,(0,a.Z)({variant:n?"body2":"h5",className:D.title,component:"span",display:"block"},C,{children:I})));let S=x;return null==S||S.type===l.Z||m||(S=(0,p.jsx)(l.Z,(0,a.Z)({variant:n?"body2":"body1",className:D.subheader,color:"text.secondary",component:"span",display:"block"},f,{children:S}))),(0,p.jsxs)(g,(0,a.Z)({className:(0,s.Z)(D.root,c),as:u,ref:o,ownerState:w},P,{children:[n&&(0,p.jsx)(Z,{className:D.avatar,ownerState:w,children:n}),(0,p.jsxs)(b,{className:D.content,ownerState:w,children:[I,S]}),i&&(0,p.jsx)(j,{className:D.action,ownerState:w,children:i})]}))});var C=y},48806:function(e,o,r){r.d(o,{Z:function(){return M}});var t=r(85893),a=r(11163),i=r.n(a),s=r(67294),n=r(60664);r(60565);var l=r(66136),d=r(83830),c=r(49837),u=r(91359),m=r(79072),x=r(17575),f=r(80562),p=r(55343),h=r(44731),v=r(59742),g=r(29630),Z=r(21609),j=r(87536),b=r(47842),y=r(86501);r(45061);var C=r(86887),P=r(46749),w=r(49540),D=r(40039),I=r(29308),S=r(84220),k=r(3893),F=r(82747);r(53934);var q=r(9041),N=r(54225),R=r(67836);let T=e=>{let{register:o,errors:r,setShowNewPassword:a,showNewPassword:i,watch:n}=e,[l,d]=(0,s.useState)({showPassword:!1,showConfirmPassword:!1}),c=()=>{d({...l,showPassword:!l.showPassword})},u=e=>{e.preventDefault()},x=()=>{d({...l,showConfirmPassword:!l.showConfirmPassword})},h=e=>{e.preventDefault()};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.ZP,{item:!0,xs:6,md:4,children:(0,t.jsx)(p.Z,{fullWidth:!0,children:(0,t.jsx)(N.Z,{variant:"outlined",size:"large",startIcon:(0,t.jsx)(Z.Z,{icon:"uil:padlock"}),onClick:()=>a(!i),children:"Alterar senha"})})}),i&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.ZP,{item:!0,xs:6,sm:4,children:(0,t.jsx)(R.Z,{fullWidth:!0,label:"Nova senha",id:"input-password",variant:"outlined",size:"small",type:l.showPassword?"text":"password",name:"senha",error:!!r.senha,helperText:r.senha&&r.senha.message,InputProps:{endAdornment:(0,t.jsx)(q.Z,{position:"end",children:(0,t.jsx)(f.Z,{edge:"end",onClick:c,onMouseDown:u,children:(0,t.jsx)(Z.Z,{icon:l.showPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})})},...o("senha",{minLength:{value:4,message:"Senha deve ter pelo menos 4 caracteres"}})})}),(0,t.jsx)(m.ZP,{item:!0,xs:6,sm:4,children:(0,t.jsx)(R.Z,{fullWidth:!0,label:"Confirmar nova senha",id:"input-confirm-password",variant:"outlined",size:"small",type:l.showConfirmPassword?"text":"password",name:"confirmaSenha",error:!!r.confirmaSenha,helperText:r.confirmaSenha&&r.confirmaSenha.message,InputProps:{endAdornment:(0,t.jsx)(q.Z,{position:"end",children:(0,t.jsx)(f.Z,{edge:"end",onClick:x,onMouseDown:h,children:(0,t.jsx)(Z.Z,{icon:l.showConfirmPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})})},onChange(e){setLenghtPassword(e.target.value)},...o("confirmaSenha",{validate:e=>e===n("senha")||"As senhas n\xe3o coincidem"})})})]})]})};var E=r(92629);let z=e=>{var o,r,a,q,N,R,z,M,A,O,H,J,U,_,V,W;let{id:$}=e,{user:B,setUser:L,loggedUnity:Y,setLoggedUnity:Q}=(0,s.useContext)(D.V),{setId:X}=(0,s.useContext)(d.X);$=1===B.papelID?$:Y.unidadeID;let[K,G]=(0,s.useState)(!1),[ee,eo]=(0,s.useState)(),[er,et]=(0,s.useState)(),[ea,ei]=(0,s.useState)(!1),[es,en]=(0,s.useState)(!1),[el,ed]=(0,s.useState)(),[ec,eu]=(0,s.useState)(null),[em,ex]=(0,s.useState)(!1),ef=i(),ep=$&&$>0?"edit":"new",eh=1===B.papelID?ef.pathname:"/configuracoes/unidade",ev=(0,s.useRef)(null),{settings:eg}=(0,s.useContext)(l.J6),eZ=eg.mode,{trigger:ej,handleSubmit:eb,setValue:ey,getValues:eC,setError:eP,reset:ew,control:eD,watch:eI,formState:{errors:eS},register:ek}=(0,j.cI)(),eF=async e=>{if(9==e.length){let o=e.replace(/\D/g,"");n.h.get("https://viacep.com.br/ws/"+o+"/json/").then(e=>{e.data.localidade?(ey("fields.logradouro",e.data.logradouro),ey("fields.bairro",e.data.bairro),ey("fields.cidade",e.data.localidade),ey("fields.uf",e.data.uf),y.ZP.success("Endere\xe7o encontrado!")):y.ZP.error("Endere\xe7o n\xe3o encontrado!")})}};console.log("erross",eS);let eq=async e=>{let o=(0,F.zk)(e.fields.cnpj);if(!o){eP("fields.cnpj",{type:"required",message:"CNPJ inv\xe1lido"});return}let r={...e,usuarioID:B.usuarioID,unidadeID:Y.unidadeID,fields:{...e.fields,dataCadastro:new Date().toISOString().substring(0,10)}};delete r.cabecalhoRelatorioTitle,delete r.cabecalhoRelatorio;try{"new"===ep?await n.h.post("".concat((0,P.g_)(eh),"/new/insertData"),r).then(e=>{ef.push("".concat((0,P.g_)(eh))),X(e.data),y.ZP.success(P.OD.successNew)}):"edit"===ep&&(await n.h.post("".concat(eh,"/updateData/").concat($),r),y.ZP.success(P.OD.successUpdate),ei(!1),eR()),2===B.papelID&&Q({...Y,nomeFantasia:e.fields.nomeFantasia,complemento:e.fields.complemento,razaoSocial:e.fields.razaoSocial,responsavel:e.fields.responsavel,email:e.fields.email,telefone1:e.fields.telefone1,telefone2:e.fields.telefone2,cep:e.fields.cep,logradouro:e.fields.logradouro,numero:e.fields.numero,complemento:e.fields.complemento,bairro:e.fields.bairro,cidade:e.fields.cidade,uf:e.fields.uf})}catch(t){t.response&&409===t.response.status?y.ZP.error(P.OD.errorRepeated):console.log(t)}finally{eN()}},eN=async()=>{localStorage.removeItem("loggedUnity"),localStorage.setItem("loggedUnity",JSON.stringify(Y))},eR=async()=>{if("edit"==ep)try{var e,o;let r=await n.h.get("".concat(eh,"/").concat($));ew(r.data),console.log("\uD83D\uDE80 ~ response:",r.data),eo(r.data),ed(r.data.fields.cabecalhoRelatorioTitle),eu(null===(e=r.data)||void 0===e?void 0:null===(o=e.fields)||void 0===o?void 0:o.cabecalhoRelatorio)}catch(t){console.log(t)}else eo({}),ew({fields:{logradouro:"--",bairro:"--",cidade:"--",uf:"--"}})};(0,s.useEffect)(()=>{eR()},[$]);//! Crud imagem cabeçalho relatórios
let eT=()=>{ev.current.click()},eE=async e=>{let o=e.target.files[0];if(o){let r=new FormData;r.append("files[]",o),r.append("usuarioID",B.usuarioID);let t=o.type.includes("image");if(!t){y.ZP.error("O arquivo selecionado n\xe3o \xe9 uma imagem!");return}await n.h.post("".concat(eh,"/updateData/report/").concat($,"/").concat(B.usuarioID,"/").concat(Y.unidadeID),r).then(e=>{eu(e.data),y.ZP.success("Foto atualizada com sucesso!");let o=JSON.parse(localStorage.getItem("userData"));o.imagem=e.data,localStorage.setItem("userData",JSON.stringify(o)),L(o)}).catch(e=>{var o,r,t;y.ZP.error(null!==(t=null===(o=e.response)||void 0===o?void 0:null===(r=o.data)||void 0===r?void 0:r.message)&&void 0!==t?t:"Erro ao atualizar foto de perfil, tente novamente!")})}},ez=async()=>{try{await n.h.delete("".concat(eh,"/fileReport/").concat($,"/").concat(B.usuarioID,"/").concat(Y.unidadeID)),eu(null),y.ZP.success("Foto removida com sucesso!")}catch(e){console.log(e),y.ZP.error("Erro ao remover foto, tente novamente!")}};return(0,t.jsxs)(t.Fragment,{children:[!ee&&(0,t.jsx)(b.Z,{}),ee&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("form",{onSubmit:eb(eq),children:[(0,t.jsx)(C.Z,{btnCancel:1===B.papelID,btnSave:!0,handleSubmit:()=>eb(eq),btnDelete:"edit"===ep&&1===B.papelID,onclickDelete:()=>ex(!0),type:ep}),(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(E.Z,{title:"Excluir Unidade",description:"Tem certeza que deseja exluir a unidade?",params:{route:"configuracoes/unidade/".concat($),messageSucceded:"Unidade exclu\xedda com sucesso!",MessageError:"Dado possui pend\xeancia!"},open:em,handleClose:()=>ex(!1)}),(0,t.jsx)(u.Z,{children:(0,t.jsxs)(m.ZP,{container:!0,spacing:4,children:["edit"==ep&&(0,t.jsx)(m.ZP,{item:!0,xs:12,md:2,children:(0,t.jsxs)(m.ZP,{item:!0,xs:12,md:12,sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"140px",position:"relative",border:"".concat("dark"===eZ?"1px solid #65656E":"1px solid #C5C6CD"),borderRadius:"8px"},children:[ec&&(0,t.jsx)(x.Z,{title:"Apagar foto do perfil",placement:"top",children:(0,t.jsx)(f.Z,{size:"small",sx:{position:"absolute",top:"8px",right:"8px",zIndex:"20",color:"white",opacity:"0.8",backgroundColor:"#FF4D49","&:hover":{backgroundColor:"#FF4D49",opacity:"1"}},onClick:ez,children:(0,t.jsx)(Z.Z,{icon:"material-symbols:delete-outline"})})}),(0,t.jsx)(x.Z,{title:ec?"Alterar foto":"Inserir foto",placement:"top",children:(0,t.jsxs)(p.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%"},children:[(0,t.jsx)("input",{type:"file",ref:ev,style:{display:"none"},onChange:eE}),(0,t.jsx)(h.Z,{variant:"rounded",alt:"Imagem do cabe\xe7alho do relat\xf3rio",sx:{width:"100%",height:"100%",cursor:"pointer"},onClick:eT,src:null!=ec?ec:"https://gedagro.com.br/images/report.png"})]})})]})}),(0,t.jsx)(m.ZP,{item:!0,xs:12,md:"new"==ep?12:10,children:(0,t.jsxs)(m.ZP,{container:!0,spacing:4,children:[(0,t.jsx)(I.Z,{xs:12,md:4,title:"Nome Fantasia",name:"fields.nomeFantasia",required:!0,register:ek,control:eD,errors:null==eS?void 0:null===(o=eS.fields)||void 0===o?void 0:o.nomeFantasia}),(0,t.jsx)(I.Z,{xs:12,md:4,title:"Raz\xe3o Social",name:"fields.razaoSocial",required:!0,register:ek,control:eD,errors:null==eS?void 0:null===(r=eS.fields)||void 0===r?void 0:r.razaoSocial}),(0,t.jsx)(I.Z,{xs:12,md:4,title:"CNPJ",name:"fields.cnpj",mask:"cnpj",required:!0,register:ek,control:eD,errors:null==eS?void 0:null===(a=eS.fields)||void 0===a?void 0:a.cnpj}),(0,t.jsx)(I.Z,{xs:12,md:4,title:"Respons\xe1vel",name:"fields.responsavel",required:!0,register:ek,control:eD,errors:null==eS?void 0:null===(q=eS.fields)||void 0===q?void 0:q.responsavel}),(0,t.jsx)(I.Z,{xs:12,md:4,title:"E-mail",name:"fields.email",type:"email",required:!0,register:ek,control:eD,errors:null==eS?void 0:null===(N=eS.fields)||void 0===N?void 0:N.email}),(0,t.jsx)(I.Z,{xs:12,md:4,title:"Telefone 1",name:"fields.telefone1",mask:"telefone",required:!1,register:ek,control:eD,errors:null==eS?void 0:null===(R=eS.fields)||void 0===R?void 0:R.telefone1}),(0,t.jsx)(I.Z,{xs:12,md:4,title:"Telefone 2",name:"fields.telefone2",mask:"telefone",required:!1,register:ek,control:eD,errors:null==eS?void 0:null===(z=eS.fields)||void 0===z?void 0:z.telefone2}),(0,t.jsx)(I.Z,{xs:12,md:4,title:"CEP",name:"fields.cep",getAddressByCep:eF,mask:"cep",required:!1,register:ek,control:eD,errors:null==eS?void 0:null===(M=eS.fields)||void 0===M?void 0:M.cep}),(0,t.jsx)(I.Z,{xs:12,md:4,title:"Rua",name:"fields.logradouro",required:!1,register:ek,control:eD,errors:null==eS?void 0:null===(A=eS.fields)||void 0===A?void 0:A.logradouro}),(0,t.jsx)(I.Z,{xs:12,md:4,title:"N\xfamero",name:"fields.numero",required:!1,register:ek,control:eD,errors:null==eS?void 0:null===(O=eS.fields)||void 0===O?void 0:O.numero}),(0,t.jsx)(I.Z,{xs:12,md:4,title:"Complemento",name:"fields.complemento",required:!1,register:ek,control:eD,errors:null==eS?void 0:null===(H=eS.fields)||void 0===H?void 0:H.complemento}),(0,t.jsx)(I.Z,{xs:12,md:4,title:"Bairro",name:"fields.bairro",required:!1,register:ek,control:eD,errors:null==eS?void 0:null===(J=eS.fields)||void 0===J?void 0:J.bairro}),(0,t.jsx)(I.Z,{xs:12,md:8,title:"Cidade",name:"fields.cidade",required:!1,register:ek,control:eD,errors:null==eS?void 0:null===(U=eS.fields)||void 0===U?void 0:U.cidade}),(0,t.jsx)(I.Z,{xs:12,md:4,title:"UF",name:"fields.uf",mask:"estado",required:!1,register:ek,control:eD,errors:null==eS?void 0:null===(_=eS.fields)||void 0===_?void 0:_.uf}),"edit"==ep&&2==B.papelID&&(0,t.jsx)(T,{register:ek,errors:eS,showNewPassword:ea,setShowNewPassword:ei,watch:eI})]})})]})})]})]}),"edit"==ep&&1==B.papelID&&(0,t.jsxs)(c.Z,{sx:{mt:4},children:[(0,t.jsx)(v.Z,{title:"Par\xe2metros"}),(0,t.jsx)(u.Z,{children:(0,t.jsx)(m.ZP,{container:!0,spacing:8,children:(0,t.jsxs)(m.ZP,{item:!0,xs:12,md:12,children:[(0,t.jsxs)(m.ZP,{container:!0,spacing:4,children:[(0,t.jsx)(I.Z,{xs:12,md:12,title:"T\xedtulo do relat\xf3rio",name:"fields.tituloRelatorio",required:!1,register:ek,control:eD,errors:null==eS?void 0:null===(V=eS.fields)||void 0===V?void 0:V.tituloRelatorio,helpText:"T\xedtulo que aparecer\xe1 no cabe\xe7alho dos relat\xf3rios"}),(0,t.jsx)(S.Z,{xs:12,md:8,multiple:!0,title:"Extens\xf5es de Arquivos Permitidas",name:"fields.extensoes",options:ee.fields.allExtensions,value:ee.fields.extensoes,register:ek,setValue:ey,control:eD}),(0,t.jsx)(I.Z,{xs:12,md:4,title:"Tamanho m\xe1ximo dos anexos (MB)",name:"fields.anexosTamanhoMaximo",required:!0,register:ek,control:eD,errors:null==eS?void 0:null===(W=eS.fields)||void 0===W?void 0:W.anexosTamanhoMaximo}),(0,t.jsx)(k.Z,{title:"Obrigat\xf3rio o produto no formul\xe1rio de qualifica\xe7\xe3o do fornecedor",name:"fields.obrigatorioProdutoFornecedor",value:ee.fields.obrigatorioProdutoFornecedor,register:ek,helpText:"Com esta op\xe7\xe3o marcada, ser\xe1 obrigat\xf3rio selecionar um ou mais produtos no formul\xe1rio de qualifica\xe7\xe3o do fornecedor."})]}),(0,t.jsx)(m.ZP,{container:!0,spacing:4,children:(0,t.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,t.jsx)(k.Z,{title:"Habilita quem preenche o formul\xe1rio de qualifica\xe7\xe3o do fornecedor (F\xe1brica ou Fornecedor)",name:"fields.habilitaQuemPreencheFormFornecedor",value:ee.fields.habilitaQuemPreencheFormFornecedor,register:ek,helpText:"Com esta op\xe7\xe3o marcada, ser\xe1 definido quem preenche o formul\xe1rio de qualifica\xe7\xe3o do fornecedor na cria\xe7\xe3o de um novo formul\xe1rio, caso contr\xe1rio somente o fornecedor poder\xe1 preencher."})})})]})})})]}),"edit"===ep&&ee&&(0,t.jsxs)(g.Z,{variant:"caption",sx:{display:"flex",justifyContent:"end",p:4},children:["Data de cadastro:",(0,w.p6)(ee.fields.dataCadastro,"DD/MM/YYYY")]})]})]})};var M=z},45061:function(e,o,r){var t=r(85893),a=r(54225),i=r(1890),s=r(77745),n=r(95398),l=r(76779),d=r(44642);r(21609);var c=r(19604),u=r(29630),m=r(55343),x=r(67836),f=r(67294),p=r(82747);r(84220),r(29308),r(67569),r(3893),r(88475);let h=e=>{let{title:o,text:r,handleClose:h,openModal:v,handleSubmit:g,cnpj:Z,nomeFornecedor:j,gruposAnexo:b,email:y,setEmail:C,inputEmail:P,btnCancel:w,btnConfirm:D,grupoAnexosFornecedor:I,btnCancelColor:S,btnConfirmColor:k,closeAfterSave:F,listErrors:q}=e,[N,R]=(0,f.useState)(!1);return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(i.Z,{open:v,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,o){"backdropClick"!==o&&h()},children:[(0,t.jsx)(s.Z,{id:"form-dialog-title",children:o}),(0,t.jsxs)(n.Z,{children:[(0,t.jsxs)(d.Z,{sx:{mb:3},children:[r,q&&q.status&&(0,t.jsxs)(c.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,t.jsx)(u.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:q.errors.map((e,o)=>(0,t.jsxs)(u.Z,{variant:"body2",color:"error",children:["- ",e]},o))})]})]}),P&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(m.Z,{sx:{mt:2},fullWidth:!0,children:[(0,t.jsx)(x.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==y?void 0:y.length)>0&&N,inputProps:{onChange(e){C(e.target.value),R(!(0,p.dI)(e.target.value))}}}),(null==y?void 0:y.length)>0&&N&&(0,t.jsx)(u.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,t.jsx)(c.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,t.jsxs)(l.Z,{className:"dialog-actions-dense",children:[w&&(0,t.jsx)(a.Z,{variant:"outlined",color:"primary",onClick:h,children:"Cancelar"}),D&&(0,t.jsx)(a.Z,{variant:"contained",disabled:P&&(null==y?void 0:y.length)>0&&N||q&&q.status,color:k||"error",onClick:P&&Z?()=>{g(Z,j,b,y),F&&h()}:P&&!Z?()=>{g(y),F&&h()}:()=>{g(),F&&h()},children:"Confirmar"})]})]})})};o.Z=h},92629:function(e,o,r){var t=r(85893),a=r(54225),i=r(1890),s=r(77745),n=r(95398),l=r(76779),d=r(29630),c=r(60664),u=r(67294),m=r(83830),x=r(86501),f=r(40039);let p=e=>{let{title:o,description:r,open:p,handleClose:h,params:v}=e,{setId:g}=(0,u.useContext)(m.X),{user:Z,loggedUnity:j}=(0,u.useContext)(f.V),b=async()=>{try{await c.h.delete("".concat(v.route,"/").concat(Z.usuarioID,"/").concat(j.unidadeID)),x.ZP.success(v.messageSucceded),g(null)}catch(e){console.log(e),x.ZP.error(v.MessageError)}finally{h()}};return(0,t.jsxs)(i.Z,{open:p,children:[(0,t.jsx)(s.Z,{id:"form-dialog-title",children:o}),(0,t.jsx)(n.Z,{children:(0,t.jsx)(d.Z,{variant:"body1",children:r})}),(0,t.jsxs)(l.Z,{className:"dialog-actions-dense",children:[(0,t.jsx)(a.Z,{variant:"outlined",color:"secondary",onClick:h,children:"Cancelar"}),(0,t.jsx)(a.Z,{variant:"contained",color:"error",onClick:b,children:"Confirmar"})]})]})};o.Z=p},67569:function(e,o,r){var t=r(85893),a=r(79072),i=r(61953),s=r(29630),n=r(22841),l=r(75158);let d=e=>{let{xs:o,md:r,title:d,index:c,name:u,typePage:m,value:x,edit:f,register:p,setValue:h,className:v}=e;return(0,t.jsx)(a.ZP,{item:!0,xs:o,md:r,className:v,children:(0,t.jsxs)(i.Z,{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,t.jsx)(s.Z,{variant:"caption",children:c&&0!=c?"":d}),(0,t.jsx)(n.Z,{control:(0,t.jsx)(l.Z,{size:"small",sx:{ml:4},...p(u),defaultChecked:!0==x||1==x||"new"==m,onChange(e){f&&h(f,!0)}})})]})})};o.Z=d},3893:function(e,o,r){var t=r(85893),a=r(79072),i=r(61953),s=r(22841),n=r(75158),l=r(53934);let d=e=>{let{xs:o,md:r,title:d,index:c,name:u,typePage:m,value:x,disabled:f,register:p,onClick:h,helpText:v,helpTextPosition:g}=e;return(0,t.jsx)(a.ZP,{item:!0,xs:o,md:r,children:(0,t.jsx)(i.Z,{display:"flex",alignItems:"center",justifyContent:"start",sx:{gap:0},children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.Z,{control:(0,t.jsx)(n.Z,{name:u,onClick:h,...p(u),defaultChecked:x,disabled:f}),label:d,size:"small",sx:{marginRight:"4px","&:hover":{"& .MuiFormControlLabel-label":{color:"primary.main"}}}}),v&&(0,t.jsx)(l.Z,{text:v,position:null!=g?g:"top"})]})})})};o.Z=d},88475:function(e,o,r){var t=r(85893),a=r(79072),i=r(61953),s=r(29630),n=r(17575),l=r(80562),d=r(21609);let c=e=>{let{xs:o,md:r,icon:c,color:u,title:m,removeItem:x,item:f,pending:p,index:h,textSuccess:v,textError:g}=e;return v=v||"Remover este item",g=g||"Este item n\xe3o pode ser removido pois possui cadastros vinculados a ele",(0,t.jsx)(a.ZP,{item:!0,xs:o,md:r,children:(0,t.jsxs)(i.Z,{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,t.jsx)(s.Z,{variant:"caption",children:m}),(0,t.jsx)(n.Z,{title:1==p?g:v,children:(0,t.jsx)(l.Z,{color:null!=u?u:"error",size:"small",onClick(){1!=p&&x(f,h)},sx:{opacity:1==p?.5:1,cursor:1==p?"default":"pointer"},children:(0,t.jsx)(d.Z,{icon:null!=c?c:"tabler:trash-filled"})})})]})})};o.Z=c},84220:function(e,o,r){var t=r(85893),a=r(79072),i=r(55343),s=r(35966),n=r(67836),l=r(87536),d=r(53934);let c=e=>{var o;let{xs:r,md:c,title:u,options:m,name:x,type:f,limitTags:p,value:h,required:v,control:g,disabled:Z,multiple:j,setValue:b,errors:y,onChange:C,className:P,createNew:w,handleRegistroEstabelecimento:D,helpText:I,helpTextPosition:S}=e,k=w?[{nome:"-- Novo --"},...null!=m?m:[]]:m;return(0,t.jsx)(a.ZP,{item:!0,xs:r,md:c,sx:{my:1},className:P,children:(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)(i.Z,{fullWidth:!0,children:(0,t.jsx)(l.Qr,{name:x,control:g,defaultValue:h,rules:{required:v},render(e){let{field:r}=e;return(0,t.jsx)(s.Z,{...r,multiple:j,limitTags:p,size:"small",options:k,getOptionLabel:e=>(null==e?void 0:e.cnpj)?"".concat(e.cnpj," - ").concat(e.nome):null==e?void 0:e.nome,value:j&&r.value&&r.value.length>0?r.value.map(e=>m.find(o=>o.id===e.id)):null!==(o=r.value)&&void 0!==o?o:{nome:""},disabled:Z,onChange(e,o){o&&"-- Novo --"==e.target.innerText?w():(C&&C(o),b(x,o),"registroestabelecimento"===f&&D(o?o.id:null))},renderInput:e=>(0,t.jsx)(n.Z,{...e,label:u,placeholder:u,error:!!y}),noOptionsText:"Sem op\xe7\xf5es"})}})}),I&&(0,t.jsx)("div",{className:"absolute right-[60px] top-[12px] ",children:(0,t.jsx)(d.Z,{text:I,position:null!=S?S:"top"})})]})})};o.Z=c},82747:function(e,o,r){function t(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let o=e.length-2,r=e.substring(0,o),t=e.substring(o),a=0,i=o-7;for(let s=o;s>=1;s--)a+=r.charAt(o-s)*i--,i<2&&(i=9);let n=a%11<2?0:11-a%11;if(n!=t.charAt(0))return!1;o+=1,r=e.substring(0,o),a=0,i=o-7;for(let l=o;l>=1;l--)a+=r.charAt(o-l)*i--,i<2&&(i=9);return(n=a%11<2?0:11-a%11)==t.charAt(1)}function a(e){let o;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let r=0;for(let t=1;t<=9;t++)r+=parseInt(e.substring(t-1,t))*(11-t);if((10==(o=10*r%11)||11===o)&&(o=0),o!==parseInt(e.substring(9,10)))return!1;r=0;for(let a=1;a<=10;a++)r+=parseInt(e.substring(a-1,a))*(12-a);return(10==(o=10*r%11)||11===o)&&(o=0),o===parseInt(e.substring(10,11))}function i(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}r.d(o,{dI:function(){return i},sw:function(){return a},zk:function(){return t}})}}]);