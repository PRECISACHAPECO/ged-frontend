"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5102],{93778:function(e,o,i){i.r(o);var n=i(85893),l=i(60664),t=i(61953),r=i(79072),a=i(75084),s=i(29630),c=i(86501),d=i(21609),u=i(17288);i(61310);var x=i(67294),m=i(82747),p=i(39976);let v=e=>{var o,i,v,f,h,j,b;let{handlePrev:Z,dataGlobal:g,setDataGlobal:y}=e;console.log("\uD83D\uDE80 ~ dataGlobal:",g);let[S,C]=(0,x.useState)(!0),[w,T]=(0,x.useState)(!1),D=(0,u.a)(),{createNeWNotification:M}=(0,x.useContext)(p.u),I=()=>{if(g.sectionOne.email&&(0,m.dI)(g.sectionOne.email)){let e={cnpj:g.sectionOne.cnpj,nomeFornecedor:g.sectionOne.nomeFantasia,destinatario:g.sectionOne.email};l.h.post("/registro-fornecedor/sendMailNewFornecedor",{data:e}).then(e=>{c.ZP.success("E-mail enviado com sucesso")}).catch(e=>{console.error("Erro ao enviar email",e)})}},P=()=>{T(!0),l.h.post("/registro-fornecedor/registerNew",{data:g}).then(e=>{if(201===e.status)c.ZP.error(e.data.message);else{let o={titulo:"Cadastro realizado com sucesso",descricao:"Ol\xe1 ".concat(g.sectionOne.nomeFantasia,", seja bem-vindo(a) ao GEDagro!"),url:null,urlID:null,tipoNotificacaoID:1,usuarioGeradorID:null,usuarioID:e.data.usuarioID,unidadeID:e.data.unidadeID};M(o),c.ZP.success("Cadastro efetuado com sucesso!");let{cnpj:i,senha:n}=null==g?void 0:g.sectionOne;return I(),D.loginFornecedor({cnpj:i,password:n,rememberMe:S})}}).then(()=>{setTimeout(()=>{c.ZP.success("Efetuando login no sistema")},2e3)}).catch(e=>{c.ZP.error("Erro: "+e.message)}).finally(()=>{T(!1)})};return(0,x.useEffect)(()=>{var e,o,i,n,l,t;let r={logradouro:null==g?void 0:null===(e=g.sectionTwo)||void 0===e?void 0:e.logradouro,numero:null==g?void 0:null===(o=g.sectionTwo)||void 0===o?void 0:o.numero,complemento:null==g?void 0:null===(i=g.sectionTwo)||void 0===i?void 0:i.complemento,bairro:null==g?void 0:null===(n=g.sectionTwo)||void 0===n?void 0:n.bairro,cidade:null==g?void 0:null===(l=g.sectionTwo)||void 0===l?void 0:l.cidade,uf:null==g?void 0:null===(t=g.sectionTwo)||void 0===t?void 0:t.uf},a=Object.entries(r).map(e=>{let[o,i]=e;if(i)return"".concat(i,", ")}).join("").slice(0,-2)+".";y({...g,sectionThree:{endereco:a}})},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.Z,{sx:{mb:4},children:[(0,n.jsx)(s.Z,{variant:"h5",children:"Verifique as informa\xe7\xf5es"}),(0,n.jsx)(s.Z,{sx:{color:"text.secondary"},children:"Envie se estiver tudo certo"})]}),(0,n.jsx)(r.ZP,{container:!0,spacing:5,children:(0,n.jsxs)(r.ZP,{item:!0,xs:12,children:[(0,n.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,n.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,n.jsx)(s.Z,{variant:"caption",sx:{color:"text.secondary"},children:"CNPJ"}),(0,n.jsx)(s.Z,{sx:{color:"text.primary"},children:null==g?void 0:null===(o=g.sectionOne)||void 0===o?void 0:o.cnpj})]}),(0,n.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,n.jsx)(s.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Nome Fantasia"}),(0,n.jsx)(s.Z,{sx:{color:"text.primary"},children:null==g?void 0:null===(i=g.sectionOne)||void 0===i?void 0:i.nomeFantasia})]}),(0,n.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,n.jsx)(s.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Raz\xe3o Social"}),(0,n.jsx)(s.Z,{sx:{color:"text.primary"},children:null==g?void 0:null===(v=g.sectionOne)||void 0===v?void 0:v.razaoSocial})]}),(0,n.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,n.jsx)(s.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Email Institucional"}),(0,n.jsx)(s.Z,{sx:{color:"text.primary"},children:null==g?void 0:null===(f=g.sectionOne)||void 0===f?void 0:f.email})]}),(0,n.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,n.jsx)(s.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Telefone"}),(0,n.jsx)(s.Z,{sx:{color:"text.primary"},children:null==g?void 0:null===(h=g.sectionTwo)||void 0===h?void 0:h.telefone})]}),(0,n.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,n.jsx)(s.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Cep"}),(0,n.jsx)(s.Z,{sx:{color:"text.primary"},children:null==g?void 0:null===(j=g.sectionTwo)||void 0===j?void 0:j.cep})]}),(0,n.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,n.jsx)(s.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Endere\xe7o"}),(0,n.jsx)(s.Z,{sx:{color:"text.primary"},children:null==g?void 0:null===(b=g.sectionThree)||void 0===b?void 0:b.endereco})]})]}),(0,n.jsxs)(t.Z,{sx:{display:"flex",justifyContent:"space-between",mt:5},children:[(0,n.jsx)(a.Z,{color:"secondary",variant:"contained",onClick:Z,startIcon:(0,n.jsx)(d.Z,{icon:"mdi:chevron-left",fontSize:20}),children:"Anterior"}),(0,n.jsx)(a.Z,{type:"submit",onClick:P,color:"success",variant:"contained",disabled:w,children:"Concluir"})]})]})})]})};o.default=v},29342:function(e,o,i){i.r(o);var n=i(85893),l=i(61953),t=i(79072),r=i(75084),a=i(29630),s=i(87536),c=i(60664),d=i(21609),u=i(29308),x=i(67294);let m=e=>{var o,i,m,p,v,f,h,j;let{handleNext:b,handlePrev:Z,setDataGlobal:g,dataGlobal:y}=e,{control:S,handleSubmit:C,setValue:w,formState:{errors:T}}=(0,s.cI)({}),D=e=>{g({...y,sectionTwo:{...y.sectionTwo,...e}}),b()},M=async e=>{9===e.length&&c.h.get("https://viacep.com.br/ws/".concat(e,"/json/")).then(e=>{I(e.data)})},I=e=>{w("logradouro",null==e?void 0:e.logradouro),w("bairro",null==e?void 0:e.bairro),w("cidade",null==e?void 0:e.localidade),w("uf",null==e?void 0:e.uf)};return(0,x.useEffect)(()=>{var e,o,i,n,l,t,r,a;w("telefone",null==y?void 0:null===(e=y.sectionTwo)||void 0===e?void 0:e.telefone),w("cep",null==y?void 0:null===(o=y.sectionTwo)||void 0===o?void 0:o.cep),w("logradouro",null==y?void 0:null===(i=y.sectionTwo)||void 0===i?void 0:i.logradouro),w("numero",null==y?void 0:null===(n=y.sectionTwo)||void 0===n?void 0:n.numero),w("complemento",null==y?void 0:null===(l=y.sectionTwo)||void 0===l?void 0:l.complemento),w("bairro",null==y?void 0:null===(t=y.sectionTwo)||void 0===t?void 0:t.bairro),w("cidade",null==y?void 0:null===(r=y.sectionTwo)||void 0===r?void 0:r.cidade),w("uf",null==y?void 0:null===(a=y.sectionTwo)||void 0===a?void 0:a.uf)},[]),y&&(0,n.jsxs)("form",{onSubmit:C(D),children:[(0,n.jsxs)(l.Z,{sx:{mb:4},children:[(0,n.jsx)(a.Z,{variant:"h5",children:"Informa\xe7\xf5es opcionais"}),(0,n.jsx)(a.Z,{sx:{color:"text.secondary"},children:"Insira as informa\xe7\xf5es opcionais"})]}),(0,n.jsxs)(t.ZP,{container:!0,spacing:5,children:[(0,n.jsx)(u.Z,{xs:12,md:6,title:"Telefone",name:"telefone",defaultValue:null==y?void 0:null===(o=y.sectionTwo)||void 0===o?void 0:o.telefone,mask:"telefone",control:S,errors:null==T?void 0:T.telefone}),(0,n.jsx)(u.Z,{xs:12,md:6,title:"Cep",name:"cep",defaultValue:null==y?void 0:null===(i=y.sectionTwo)||void 0===i?void 0:i.cep,mask:"cep2",control:S,errors:null==T?void 0:T.cnpj,onChange:e=>M(e)}),(0,n.jsx)(u.Z,{xs:12,md:6,title:"Rua",name:"logradouro",defaultValue:null==y?void 0:null===(m=y.sectionTwo)||void 0===m?void 0:m.logradouro,control:S,errors:null==T?void 0:T.logradouro}),(0,n.jsx)(u.Z,{xs:12,md:6,title:"N\xfamero",name:"numero",defaultValue:null==y?void 0:null===(p=y.sectionTwo)||void 0===p?void 0:p.numero,control:S,errors:null==T?void 0:T.numero}),(0,n.jsx)(u.Z,{xs:12,md:6,title:"Complemento",name:"complemento",defaultValue:null==y?void 0:null===(v=y.sectionTwo)||void 0===v?void 0:v.complemento,control:S,errors:null==T?void 0:T.complemento}),(0,n.jsx)(u.Z,{xs:12,md:6,title:"Bairro",name:"bairro",defaultValue:null==y?void 0:null===(f=y.sectionTwo)||void 0===f?void 0:f.bairro,control:S,errors:null==T?void 0:T.bairro}),(0,n.jsx)(u.Z,{xs:12,md:6,title:"Cidade",name:"cidade",defaultValue:null==y?void 0:null===(h=y.sectionTwo)||void 0===h?void 0:h.cidade,control:S,errors:null==T?void 0:T.cidade}),(0,n.jsx)(u.Z,{xs:12,md:6,title:"Estado",name:"uf",defaultValue:null==y?void 0:null===(j=y.sectionTwo)||void 0===j?void 0:j.uf,control:S,errors:null==T?void 0:T.uf,mask:"estado"}),(0,n.jsx)(t.ZP,{item:!0,xs:12,children:(0,n.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,n.jsx)(r.Z,{color:"secondary",variant:"contained",onClick:Z,startIcon:(0,n.jsx)(d.Z,{icon:"mdi:chevron-left",fontSize:20}),children:"Anterior"}),(0,n.jsx)(r.Z,{type:"submit",variant:"contained",onClick:C,endIcon:(0,n.jsx)(d.Z,{icon:"mdi:chevron-right",fontSize:20}),children:"Proximo"})]})})]})]})};o.default=m},25102:function(e,o,i){i.r(o),i.d(o,{default:function(){return y}});var n=i(85893),l=i(67294),t=i(44044),r=i(98948),a=i(94071),s=i(29630),c=i(29342),d=i(48996),u=i(93778),x=i(61953),m=i(67074),p=i(62097),v=i(41796),f=i(21609);let h=(0,m.ZP)(x.Z)(()=>({width:20,height:20,borderWidth:3,borderRadius:"50%",borderStyle:"solid"})),j=e=>{let{active:o,completed:i,error:l}=e,t=(0,p.Z)();return l?(0,n.jsx)(f.Z,{icon:"mdi:alert",fontSize:20,color:t.palette.error.main,transform:"scale(1.2)"}):i?(0,n.jsx)(f.Z,{icon:"mdi:check-circle",fontSize:20,color:t.palette.primary.main,transform:"scale(1.2)"}):(0,n.jsx)(h,{sx:{borderColor:o?"primary.main":(0,v.Fq)(t.palette.primary.main,.3)}})},b=(0,m.ZP)(x.Z)(e=>{let{theme:o}=e;return{[o.breakpoints.down("md")]:{"& .MuiStepper-horizontal:not(.MuiStepper-alternativeLabel)":{flexDirection:"column",alignItems:"flex-start"}},"& .MuiStep-root":{"& .step-label":{display:"flex",alignItems:"center",justifyContent:"center"},"& .step-number":{fontWeight:600,letterSpacing:.25,fontSize:"2.125rem",marginRight:o.spacing(2.5),color:o.palette.text.primary},"& .step-title":{fontWeight:500,fontSize:"0.875rem",letterSpacing:"0.1px",color:o.palette.text.primary},"& .step-subtitle":{fontWeight:400,fontSize:"0.75rem",letterSpacing:"0.4px",color:o.palette.text.secondary},"& .MuiStepLabel-root.Mui-disabled":{"& .step-number":{color:o.palette.text.disabled}},"& .Mui-error":{"& .MuiStepLabel-labelContainer, & .step-number, & .step-title, & .step-subtitle":{color:o.palette.error.main}}},"& .MuiStepConnector-root":{"& .MuiStepConnector-line":{borderWidth:3,borderRadius:3},"&.Mui-active, &.Mui-completed":{"& .MuiStepConnector-line":{borderColor:o.palette.primary.main}},"&.Mui-disabled .MuiStepConnector-line":{borderColor:(0,v.Fq)(o.palette.primary.main,.3)}},"& .MuiStepper-alternativeLabel":{"& .MuiStepConnector-root":{top:10},"& .MuiStepLabel-labelContainer":{display:"flex",alignItems:"center",flexDirection:"column","& > * + *":{marginTop:o.spacing(1)}}},"& .MuiStepper-vertical":{"& .MuiStep-root":{"& .step-label":{justifyContent:"flex-start"},"& .MuiStepContent-root":{borderWidth:3,marginLeft:o.spacing(2.25),borderColor:o.palette.primary.main},"& .button-wrapper":{marginTop:o.spacing(4)},"&.active + .MuiStepConnector-root .MuiStepConnector-line":{borderColor:o.palette.primary.main}},"& .MuiStepConnector-root":{marginLeft:o.spacing(2.25),"& .MuiStepConnector-line":{borderRadius:0}}}}}),Z=[{title:"Dados obrigat\xf3rios",subtitle:"Insira os dados obrigat\xf3rios"},{title:"Dados opcionais",subtitle:"Insira os dados opcionais"},{title:"Finalizar",subtitle:"Finalize o cadastro"}],g=()=>{let[e,o]=(0,l.useState)(0),[i,x]=(0,l.useState)(),m=()=>{o(e+1)},p=()=>{0!==e&&o(e-1)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{sx:{mb:10},children:(0,n.jsx)(r.Z,{activeStep:e,children:Z.map((e,o)=>(0,n.jsx)(t.Z,{children:(0,n.jsx)(a.Z,{StepIconComponent:j,children:(0,n.jsxs)("div",{className:"step-label",children:[(0,n.jsx)(s.Z,{className:"step-number",children:"0".concat(o+1)}),(0,n.jsxs)("div",{children:[(0,n.jsx)(s.Z,{className:"step-title",children:e.title}),(0,n.jsx)(s.Z,{className:"step-subtitle",children:e.subtitle})]})]})})},o))})}),(e=>{switch(e){case 0:return(0,n.jsx)(d.default,{handleNext:m,setDataGlobal:x,dataGlobal:i});case 1:return(0,n.jsx)(c.default,{handleNext:m,handlePrev:p,setDataGlobal:x,dataGlobal:i});case 2:return(0,n.jsx)(u.default,{handlePrev:p,setDataGlobal:x,dataGlobal:i});default:return null}})(e)]})};var y=g}}]);