"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8773],{59742:function(e,t,r){r.d(t,{Z:function(){return C}});var o=r(63366),a=r(87462),l=r(67294),s=r(86010),i=r(94780),n=r(29630),d=r(78884),c=r(67074),u=r(1588),m=r(34867);function p(e){return(0,m.Z)("MuiCardHeader",e)}let x=(0,u.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var f=r(85893);let h=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],v=e=>{let{classes:t}=e;return(0,i.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)},g=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,a.Z)({[`& .${x.title}`]:t.title,[`& .${x.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),Z=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),j=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),b=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),y=l.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiCardHeader"}),{action:l,avatar:i,className:c,component:u="div",disableTypography:m=!1,subheader:p,subheaderTypographyProps:x,title:y,titleTypographyProps:C}=r,D=(0,o.Z)(r,h),P=(0,a.Z)({},r,{component:u,disableTypography:m}),w=v(P),k=y;null==k||k.type===n.Z||m||(k=(0,f.jsx)(n.Z,(0,a.Z)({variant:i?"body2":"h5",className:w.title,component:"span",display:"block"},C,{children:k})));let R=p;return null==R||R.type===n.Z||m||(R=(0,f.jsx)(n.Z,(0,a.Z)({variant:i?"body2":"body1",className:w.subheader,color:"text.secondary",component:"span",display:"block"},x,{children:R}))),(0,f.jsxs)(g,(0,a.Z)({className:(0,s.Z)(w.root,c),as:u,ref:t,ownerState:P},D,{children:[i&&(0,f.jsx)(Z,{className:w.avatar,ownerState:P,children:i}),(0,f.jsxs)(b,{className:w.content,ownerState:P,children:[k,R]}),l&&(0,f.jsx)(j,{className:w.action,ownerState:P,children:l})]}))});var C=y},88773:function(e,t,r){var o=r(85893),a=r(11163),l=r.n(a),s=r(67294),i=r(60664);r(60565);var n=r(66136),d=r(83830),c=r(49837),u=r(91359),m=r(79072),p=r(59742),x=r(72389),f=r(80562),h=r(55343),v=r(44731),g=r(29630),Z=r(21609),j=r(87536),b=r(47842),y=r(86501),C=r(45061),D=r(14155),P=r(46749),w=r(49540),k=r(40039),R=r(29308),S=r(84220);let E=e=>{var t,r,a,E,I,q,F,N,M,A,T,z,Y,H,O;let{id:_}=e,{user:$,setLoggedUnity:U,loggedUnity:B}=(0,s.useContext)(k.V),{setId:J}=(0,s.useContext)(d.X);console.log("\uD83D\uDE80 ~ id:",_=1===$.papelID?_:B.unidadeID);let[V,K]=(0,s.useState)(!1),[W,X]=(0,s.useState)(),[G,L]=(0,s.useState)(),[Q,ee]=(0,s.useState)(!1),[et,er]=(0,s.useState)(),[eo,ea]=(0,s.useState)(null),el=l(),es=_&&_>0?"edit":"new",ei=1===$.papelID?el.pathname:"/configuracoes/unidade",en=(0,s.useRef)(null),{settings:ed}=(0,s.useContext)(n.J6),ec=ed.mode,{trigger:eu,handleSubmit:em,setValue:ep,reset:ex,control:ef,formState:{errors:eh},register:ev}=(0,j.cI)(),eg=async e=>{if(9==e.length){console.log("\uD83D\uDE80 ~ cep:",e);let t=e.replace(/\D/g,"");i.h.get("https://viacep.com.br/ws/"+t+"/json/").then(e=>{e.data.localidade?(ep("fields.logradouro",e.data.logradouro),ep("fields.bairro",e.data.bairro),ep("fields.cidade",e.data.localidade),ep("fields.uf",e.data.uf),y.ZP.success("Endere\xe7o encontrado!")):y.ZP.error("Endere\xe7o n\xe3o encontrado!")})}},eZ=async e=>{let t={...e.fields,dataCadastro:(0,w.p6)(e.dataCadastro,"YYYY-MM-DD")};console.log("\uD83D\uDE80 ~ data:",t),delete t.cabecalhoRelatorioTitle,delete t.cabecalhoRelatorio;let r=new FormData;r.append("fileReport",G);try{"new"===es?await i.h.post("".concat((0,P.g_)(ei),"/new/insertData"),t).then(e=>{let t=e.data;G&&i.h.post("".concat((0,P.g_)(ei),"/updateData/report/").concat(t),r),el.push("".concat((0,P.g_)(ei))),J(e.data),y.ZP.success(P.OD.successNew)}):"edit"===es&&(await i.h.post("".concat(ei,"/updateData/").concat(_),t),G&&(await i.h.post("".concat(ei,"/updateData/report/").concat(_),r),y.ZP.success(P.OD.successUpdate)),G||y.ZP.success(P.OD.successUpdate),eb())}catch(o){o.response&&409===o.response.status?y.ZP.error(P.OD.errorRepeated):console.log(o)}for(let a in B)a in t&&(B[a]=t[a]);localStorage.setItem("loggedUnity",JSON.stringify(B))},ej=async()=>{try{await i.h.delete("".concat(ei,"/").concat(_)),J(null),K(!1),y.ZP.success(P.OD.successDelete)}catch(e){e.response&&409===e.response.status?(y.ZP.error(P.OD.pendingDelete),K(!1)):console.log(e)}},eb=async()=>{if(console.log("no getdata...."),"edit"==es)try{var e,t;let r=await i.h.get("".concat(ei,"/").concat(_));ex(r.data),console.log("\uD83D\uDE80 ~ response.data:",r.data),X(r.data),er(r.data.fields.cabecalhoRelatorioTitle),ea(null===(e=r.data)||void 0===e?void 0:null===(t=e.fields)||void 0===t?void 0:t.cabecalhoRelatorio)}catch(o){console.log(o)}else X({}),ex({fields:{logradouro:"--",bairro:"--",cidade:"--",uf:"--"}})};(0,s.useEffect)(()=>{eb()},[_]);//! Crud imagem cabeçalho relatórios
let ey=()=>{en.current.click()},eC=async e=>{let t=e.target.files[0];if(t){let r=new FormData;r.append("fileReport",t),await i.h.post("".concat(ei,"/updateData/report/").concat(_),r).then(e=>{ea(e.data),y.ZP.success("Foto atualizada com sucesso!")}).catch(e=>{console.log(e),y.ZP.error("Erro ao atualizar foto, tente novamente!")})}},eD=async()=>{try{await i.h.delete("".concat(ei,"/fileReport/").concat(_)),ea(null),y.ZP.success("Foto removida com sucesso!")}catch(e){console.log(e),y.ZP.error("Erro ao remover foto, tente novamente!")}};return(0,o.jsxs)(o.Fragment,{children:[!W&&(0,o.jsx)(b.Z,{}),W&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.Z,{children:(0,o.jsxs)("form",{onSubmit:em(eZ),children:[(0,o.jsx)(D.Z,{btnCancel:1===$.papelID,btnSave:!0,handleSubmit:()=>em(eZ),btnDelete:"edit"===es&&1===$.papelID,onclickDelete:()=>K(!0),type:es}),(0,o.jsx)(u.Z,{children:(0,o.jsxs)(m.ZP,{container:!0,spacing:4,children:[(0,o.jsx)(R.Z,{xs:12,md:4,title:"Nome Fantasia",name:"fields.nomeFantasia",required:!0,register:ev,control:ef,errors:null==eh?void 0:null===(t=eh.fields)||void 0===t?void 0:t.nomeFantasia}),(0,o.jsx)(R.Z,{xs:12,md:4,title:"Raz\xe3o Social",name:"fields.razaoSocial",required:!0,register:ev,control:ef,errors:null==eh?void 0:null===(r=eh.fields)||void 0===r?void 0:r.razaoSocial}),(0,o.jsx)(R.Z,{xs:12,md:4,title:"CNPJ",name:"fields.cnpj",mask:"cnpj",required:!0,register:ev,control:ef,errors:null==eh?void 0:null===(a=eh.fields)||void 0===a?void 0:a.cnpj}),(0,o.jsx)(R.Z,{xs:12,md:4,title:"Respons\xe1vel",name:"fields.responsavel",required:!0,register:ev,control:ef,errors:null==eh?void 0:null===(E=eh.fields)||void 0===E?void 0:E.responsavel}),(0,o.jsx)(R.Z,{xs:12,md:4,title:"E-mail",name:"fields.email",type:"email",required:!0,register:ev,control:ef,errors:null==eh?void 0:null===(I=eh.fields)||void 0===I?void 0:I.email}),(0,o.jsx)(R.Z,{xs:12,md:4,title:"Telefone 1",name:"fields.telefone1",mask:"telefone",required:!1,register:ev,control:ef,errors:null==eh?void 0:null===(q=eh.fields)||void 0===q?void 0:q.telefone1}),(0,o.jsx)(R.Z,{xs:12,md:4,title:"Telefone 2",name:"fields.telefone2",mask:"telefone",required:!1,register:ev,control:ef,errors:null==eh?void 0:null===(F=eh.fields)||void 0===F?void 0:F.telefone2}),(0,o.jsx)(R.Z,{xs:12,md:4,title:"CEP",name:"fields.cep",getAddressByCep:eg,mask:"cep",required:!1,register:ev,control:ef,errors:null==eh?void 0:null===(N=eh.fields)||void 0===N?void 0:N.cep}),(0,o.jsx)(R.Z,{xs:12,md:4,title:"Rua",name:"fields.logradouro",required:!1,register:ev,control:ef,errors:null==eh?void 0:null===(M=eh.fields)||void 0===M?void 0:M.logradouro}),(0,o.jsx)(R.Z,{xs:12,md:4,title:"N\xfamero",name:"fields.numero",required:!1,register:ev,control:ef,errors:null==eh?void 0:null===(A=eh.fields)||void 0===A?void 0:A.numero}),(0,o.jsx)(R.Z,{xs:12,md:4,title:"Complemento",name:"fields.complemento",required:!1,register:ev,control:ef,errors:null==eh?void 0:null===(T=eh.fields)||void 0===T?void 0:T.complemento}),(0,o.jsx)(R.Z,{xs:12,md:4,title:"Bairro",name:"fields.bairro",required:!1,register:ev,control:ef,errors:null==eh?void 0:null===(z=eh.fields)||void 0===z?void 0:z.bairro}),(0,o.jsx)(R.Z,{xs:12,md:4,title:"Cidade",name:"fields.cidade",required:!1,register:ev,control:ef,errors:null==eh?void 0:null===(Y=eh.fields)||void 0===Y?void 0:Y.cidade}),(0,o.jsx)(R.Z,{xs:12,md:4,title:"UF",name:"fields.uf",mask:"estado",required:!1,register:ev,control:ef,errors:null==eh?void 0:null===(H=eh.fields)||void 0===H?void 0:H.uf})]})})]})}),1==$.admin&&"edit"==es&&(0,o.jsxs)(c.Z,{sx:{mt:4},children:[(0,o.jsx)(p.Z,{title:"Par\xe2metros"}),(0,o.jsx)(u.Z,{children:(0,o.jsxs)(m.ZP,{container:!0,spacing:8,children:[(0,o.jsx)(m.ZP,{item:!0,xs:12,md:2,children:(0,o.jsxs)(m.ZP,{item:!0,xs:12,md:12,sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"140px",position:"relative",border:"".concat("dark"===ec?"1px solid #65656E":"1px solid #C5C6CD"),borderRadius:"8px"},children:[eo&&(0,o.jsx)(x.Z,{title:"Apagar foto do perfil",placement:"top",children:(0,o.jsx)(f.Z,{size:"small",sx:{position:"absolute",top:"8px",right:"8px",zIndex:"20",color:"white",opacity:"0.8",backgroundColor:"#FF4D49","&:hover":{backgroundColor:"#FF4D49",opacity:"1"}},onClick:eD,children:(0,o.jsx)(Z.Z,{icon:"material-symbols:delete-outline"})})}),(0,o.jsx)(x.Z,{title:eo?"Alterar foto":"Inserir foto",placement:"top",children:(0,o.jsxs)(h.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%"},children:[(0,o.jsx)("input",{type:"file",ref:en,style:{display:"none"},onChange:eC}),(0,o.jsx)(v.Z,{variant:"rounded",alt:"Imagem do cabe\xe7alho do relat\xf3rio",sx:{width:"100%",height:"100%",cursor:"pointer"},onClick:ey,src:null!=eo?eo:"https://gedagro.com.br/images/report.png"})]})})]})}),(0,o.jsx)(m.ZP,{item:!0,xs:12,md:10,children:(0,o.jsxs)(m.ZP,{container:!0,spacing:4,children:[(0,o.jsx)(R.Z,{xs:12,md:12,title:"T\xedtulo do relat\xf3rio",name:"fields.tituloRelatorio",required:!1,register:ev,control:ef,errors:null==eh?void 0:null===(O=eh.fields)||void 0===O?void 0:O.tituloRelatorio}),(0,o.jsx)(S.Z,{xs:12,md:12,multiple:!0,title:"Extens\xf5es de Arquivos Permitidas",name:"fields.extensoes",options:W.fields.allExtensions,value:W.fields.extensoes,register:ev,setValue:ep,control:ef})]})})]})})]}),"edit"===es&&W&&(0,o.jsxs)(g.Z,{variant:"caption",sx:{display:"flex",justifyContent:"end",p:4},children:["Data de cadastro:",(0,w.p6)(W.fields.dataCadastro,"DD/MM/YYYY")]})]}),(0,o.jsx)(C.Z,{title:"Excluir dado",text:"Tem certeza que deseja excluir?",openModal:V,handleClose:()=>K(!1),handleSubmit:ej,btnCancel:!0,btnConfirm:!0})]})};t.Z=E},45061:function(e,t,r){var o=r(85893),a=r(75084),l=r(1890),s=r(77745),i=r(95398),n=r(76779),d=r(44642);r(21609);var c=r(19604),u=r(29630),m=r(55343),p=r(67836),x=r(67294),f=r(82747);r(84220),r(29308),r(67569),r(3893),r(88475);let h=e=>{let{title:t,text:r,handleClose:h,openModal:v,handleSubmit:g,cnpj:Z,nomeFornecedor:j,gruposAnexo:b,email:y,setEmail:C,inputEmail:D,btnCancel:P,btnConfirm:w,grupoAnexosFornecedor:k,btnCancelColor:R,btnConfirmColor:S,closeAfterSave:E,listErrors:I}=e,[q,F]=(0,x.useState)(!1);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(l.Z,{open:v,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,t){"backdropClick"!==t&&h()},children:[(0,o.jsx)(s.Z,{id:"form-dialog-title",children:t}),(0,o.jsxs)(i.Z,{children:[(0,o.jsxs)(d.Z,{sx:{mb:3},children:[r,I&&I.status&&(0,o.jsxs)(c.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,o.jsx)(u.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:I.errors.map((e,t)=>(0,o.jsxs)(u.Z,{variant:"body2",color:"error",children:["- ",e]},t))})]})]}),D&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(m.Z,{sx:{mt:2},fullWidth:!0,children:[(0,o.jsx)(p.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==y?void 0:y.length)>0&&q,inputProps:{onChange(e){C(e.target.value),F(!(0,f.dI)(e.target.value))}}}),(null==y?void 0:y.length)>0&&q&&(0,o.jsx)(u.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,o.jsx)(c.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,o.jsxs)(n.Z,{className:"dialog-actions-dense",children:[P&&(0,o.jsx)(a.Z,{variant:"outlined",color:"primary",onClick:h,children:"Cancelar"}),w&&(0,o.jsx)(a.Z,{variant:"contained",disabled:D&&(null==y?void 0:y.length)>0&&q||I&&I.status,color:S||"error",onClick:D&&Z?()=>{g(Z,j,b,y),E&&h()}:D&&!Z?()=>{g(y),E&&h()}:()=>{g(),E&&h()},children:"Confirmar"})]})]})})};t.Z=h},47842:function(e,t,r){var o=r(85893),a=r(70754),l=r(61953);let s=e=>{let{title:t}=e;return(0,o.jsxs)(l.Z,{sx:{position:"absolute",top:"50%",left:"50%",textAlign:"center"},children:[(0,o.jsx)(a.Z,{}),(0,o.jsx)("p",{children:null!=t?t:"Carregando..."})]})};t.Z=s},82747:function(e,t,r){function o(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=e.length-2,r=e.substring(0,t),o=e.substring(t),a=0,l=t-7;for(let s=t;s>=1;s--)a+=r.charAt(t-s)*l--,l<2&&(l=9);let i=a%11<2?0:11-a%11;if(i!=o.charAt(0))return!1;t+=1,r=e.substring(0,t),a=0,l=t-7;for(let n=t;n>=1;n--)a+=r.charAt(t-n)*l--,l<2&&(l=9);return(i=a%11<2?0:11-a%11)==o.charAt(1)}function a(e){let t;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let r=0;for(let o=1;o<=9;o++)r+=parseInt(e.substring(o-1,o))*(11-o);if((10==(t=10*r%11)||11===t)&&(t=0),t!==parseInt(e.substring(9,10)))return!1;r=0;for(let a=1;a<=10;a++)r+=parseInt(e.substring(a-1,a))*(12-a);return(10==(t=10*r%11)||11===t)&&(t=0),t===parseInt(e.substring(10,11))}function l(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}r.d(t,{dI:function(){return l},sw:function(){return a},zk:function(){return o}})}}]);