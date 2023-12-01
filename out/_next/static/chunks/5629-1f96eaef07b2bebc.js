"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5629],{45629:function(e,a,t){t.d(a,{Z:function(){return B}});var n=t(85893),s=t(11163),o=t.n(s),i=t(67294),r=t(83830),c=t(66136),l=t(60664),d=t(21609),u=t(49837),m=t(91359),x=t(79072),h=t(72389),p=t(80562),g=t(55343),v=t(44731),f=t(59742),j=t(54225),Z=t(87536),y=t(86501),D=t(86887),P=t(46749),w=t(40039),C=t(50287),I=t(29308),b=t(88475),F=t(99384);let S=e=>{let{data:a,getValues:t,control:s,register:o,name:i,errors:r,removeItem:c}=e,{setDateFormat:l,dateStatus:d}=(0,F.Z)();return t("cargosFuncoes").map((e,a)=>{var t,i,u,m,x,h,p,g;return console.log("\uD83D\uDE80 ~ item:",e[a]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(C.Z,{xs:12,md:2,title:"Data",type:"date",required:!0,name:"cargosFuncoes.".concat([a],".data"),register:o,control:s,setDateFormat:l,value:e.data,typeValidation:"dataPassado",daysValidation:1e19,dateStatus:d,errors:null==r?void 0:null===(t=r.cargosFuncoes)||void 0===t?void 0:null===(i=t[a])||void 0===i?void 0:i.data}),(0,n.jsx)(I.Z,{xs:12,md:4,required:!0,title:"Forma\xe7\xe3o / Cargo",name:"cargosFuncoes.".concat([a],".formacaoCargo"),control:s,errors:null==r?void 0:null===(u=r.cargosFuncoes)||void 0===u?void 0:null===(m=u[a])||void 0===m?void 0:m.formacaoCargo}),(0,n.jsx)(I.Z,{xs:12,md:3,title:"Conselho",name:"cargosFuncoes.".concat([a],".conselho"),control:s,errors:null==r?void 0:null===(x=r.cargosFuncoes)||void 0===x?void 0:null===(h=x[a])||void 0===h?void 0:h.conselho}),(0,n.jsx)(C.Z,{xs:12,md:2,title:"Data Inativa\xe7\xe3o",name:"cargosFuncoes.".concat([a],".dataInativacao"),type:"date",value:e.dataInativacao,control:s,setDateFormat:l,typeValidation:"dataPassado",daysValidation:1e19,dateStatus:d,errors:null==r?void 0:null===(p=r.cargosFuncoes)||void 0===p?void 0:null===(g=p[a])||void 0===g?void 0:g.dataInativacao}),(0,n.jsx)(b.Z,{xs:4,md:1,title:"Remover",index:a,removeItem:c,item:e,textSuccess:"Remover este item",textError:"Este item n\xe3o pode mais ser removido pois possui anexo vinculado a ele"})]})})};var V=t(29630),E=t(9041),k=t(3893),N=t(82747),A=t(19604),M=t(67836),O=t(16590);let q=e=>{var a,t,s,o,r,c;let{control:u,setError:m,errors:h,data:v,register:f,watch:Z,getValues:y,setValue:D,userNewVerifyCPF:P,setUserNewVerifyCPF:w,userExistVerifyCPF:b,setUserExistVerifyCPF:S,resetFields:q,routeVeryfyCNP:z,userExistDefault:_}=e,[U,R]=(0,i.useState)(null),[J,T]=(0,i.useState)(!1),{setDateFormat:L,dateStatus:W}=(0,F.Z)(),[G,H]=(0,i.useState)({showPassword:!1,showConfirmPassword:!1}),X=()=>{H({...G,showPassword:!G.showPassword})},Y=e=>{e.preventDefault()},B=()=>{H({...G,showConfirmPassword:!G.showConfirmPassword})},K=e=>{e.preventDefault()},Q=()=>{let e=y("fields").cpf;e&&e.length<14&&(D("isUsuario",!1),q()),(0,N.sw)(e)?(m("fields.cpf",null),Z()):m("fields.cpf",{type:"manual",message:"CPF inv\xe1lido"}),Z()},$=async()=>{q();let e=y("isUsuario");if(!e){let a={cpf:y("fields").cpf};try{await l.h.post(z,a),w(!0)}catch(t){409==t.response.status?S(!0):console.log(t)}}},ee=()=>{$()};return v&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(I.Z,{md:12,title:"Nome",name:"fields.nome",required:!0,control:u,errors:null==h?void 0:null===(a=h.fields)||void 0===a?void 0:a.nome}),(0,n.jsx)(I.Z,{xs:12,md:4,title:"CPF",mask:"cpf",name:"fields.cpf",required:!0,control:u,errors:null==h?void 0:null===(t=h.fields)||void 0===t?void 0:t.cpf,onChange:Q}),(0,n.jsx)(C.Z,{xs:12,md:4,title:"Data de Nascimento",name:"fields.dataNascimento",type:"date",required:!0,value:null==v?void 0:null===(s=v.fields)||void 0===s?void 0:s.dataNascimento,register:f,control:u,setDateFormat:L,typeValidation:"dataPassado",daysValidation:1e19,dateStatus:W,errors:null==h?void 0:null===(o=h.fields)||void 0===o?void 0:o.dataNascimento}),(0,n.jsx)(I.Z,{xs:12,md:4,title:"Email",type:"email",required:null!=b&&b,name:"fields.email",control:u,errors:null==h?void 0:null===(r=h.fields)||void 0===r?void 0:r.email,onChange:Q}),(0,n.jsx)(I.Z,{xs:12,md:P?3:4,title:"Matricula",name:"fields.matricula",control:u,errors:null==h?void 0:null===(c=h.fields)||void 0===c?void 0:c.matricula}),(0,n.jsx)(k.Z,{xs:12,md:4,onClick:ee,title:"Usu\xe1rio do sistema",name:"isUsuario",value:v.fields.usuarioID>0,register:f,disabled:!(y("fields").email&&(0,N.sw)(y("fields").cpf)),helpText:"Preencha com um CPF e email v\xe1lidos para habilitar esta fun\xe7\xe3o"}),b&&(0,n.jsx)(x.ZP,{item:!0,xs:12,children:(0,n.jsx)(A.Z,{severity:"warning",sx:{mt:2},children:(0,n.jsx)(V.Z,{variant:"body2",children:"Esse profissional j\xe1 possui acesso ao sistema. A senha n\xe3o ser\xe1 alterada!"})})}),P&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x.ZP,{item:!0,xs:12,sm:3,children:(0,n.jsx)(M.Z,{fullWidth:!0,label:"Senha",id:"input-password",variant:"outlined",size:"small",type:G.showPassword?"text":"password",name:"senha",error:!!h.senha,helperText:h.senha&&h.senha.message,InputProps:{endAdornment:(0,n.jsx)(E.Z,{position:"end",children:(0,n.jsx)(p.Z,{edge:"end",onClick:X,onMouseDown:Y,children:(0,n.jsx)(d.Z,{icon:G.showPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})})},...f("senha",{minLength:{value:4,message:"Senha deve ter pelo menos 4 caracteres"}})})}),(0,n.jsx)(x.ZP,{item:!0,xs:12,sm:3,children:(0,n.jsx)(M.Z,{fullWidth:!0,label:"Confirme a senha",id:"input-confirm-password",variant:"outlined",size:"small",type:G.showConfirmPassword?"text":"password",name:"confirmaSenha",error:!!h.confirmaSenha,helperText:h.confirmaSenha&&h.confirmaSenha.message,InputProps:{endAdornment:(0,n.jsx)(E.Z,{position:"end",children:(0,n.jsx)(p.Z,{edge:"end",onClick:B,onMouseDown:K,children:(0,n.jsx)(d.Z,{icon:G.showConfirmPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})})},onChange(e){R(e.target.value)},...f("confirmaSenha",{validate:e=>e===Z("senha")||"As senhas n\xe3o coincidem"})})})]}),(_||P)&&(0,n.jsx)(x.ZP,{item:!0,xs:12,sm:4,children:(0,n.jsx)(g.Z,{fullWidth:!0,children:(0,n.jsx)(j.Z,{variant:"outlined",color:"primary",size:"medium",startIcon:(0,n.jsx)(d.Z,{icon:"uil:padlock"}),onClick:()=>T(!0),children:"Alterar senha"})})}),(0,n.jsx)(O.Z,{openModal:J,handleClose:()=>T(!1),setOpenModalNewPassword:T})]})};var z=t(76992),_=t(29618),U=t(47028),R=t(67569);let J=e=>{let{submenu:a,indexMenuGroup:t,indexMenu:s,indexSubmenu:o,register:i,setValue:r}=e;return(0,n.jsxs)(x.ZP,{container:!0,spacing:5,sx:{my:2},children:[(0,n.jsx)(x.ZP,{item:!0,xs:4,md:8,children:(0,n.jsx)(V.Z,{variant:"subtitle1",children:a.nome})}),(0,n.jsx)("input",{type:"hidden",value:a.rota,name:"menu[".concat(t,"].menu[").concat(s,"].submenu[").concat(o,"].rota"),...i("menu[".concat(t,"].menu[").concat(s,"].submenu[").concat(o,"].rota"))}),(0,n.jsx)(R.Z,{xs:2,md:1,name:"menu[".concat(t,"].menu[").concat(s,"].submenu[").concat(o,"].ler"),value:a.ler,register:i,setValue:r,edit:"menu[".concat(t,"].menu[").concat(s,"].submenu[").concat(o,"].edit")}),(0,n.jsx)(R.Z,{xs:2,md:1,name:"menu[".concat(t,"].menu[").concat(s,"].submenu[").concat(o,"].inserir"),value:a.inserir,register:i,setValue:r,edit:"menu[".concat(t,"].menu[").concat(s,"].submenu[").concat(o,"].edit")}),(0,n.jsx)(R.Z,{xs:2,md:1,name:"menu[".concat(t,"].menu[").concat(s,"].submenu[").concat(o,"].editar"),value:a.editar,register:i,setValue:r,edit:"menu[".concat(t,"].menu[").concat(s,"].submenu[").concat(o,"].edit")}),(0,n.jsx)(R.Z,{xs:2,md:1,name:"menu[".concat(t,"].menu[").concat(s,"].submenu[").concat(o,"].excluir"),value:a.excluir,register:i,setValue:r,edit:"menu[".concat(t,"].menu[").concat(s,"].submenu[").concat(o,"].edit")})]})},T=e=>{let{menu:a,indexMenuGroup:t,indexMenu:s,expandedItem:o,handleChangeItem:i,register:r,setValue:c,getValues:l}=e;return a.rota?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(x.ZP,{container:!0,spacing:5,sx:{my:2},children:[(0,n.jsx)(x.ZP,{item:!0,xs:4,md:8,children:(0,n.jsx)(V.Z,{variant:"subtitle1",children:a.nome})}),(0,n.jsx)("input",{type:"hidden",value:a.rota,name:"menu[".concat(t,"].menu[").concat(s,"].rota"),...r("menu[".concat(t,"].menu[").concat(s,"].rota"))}),(0,n.jsx)(R.Z,{xs:2,md:1,name:"menu[".concat(t,"].menu[").concat(s,"].ler"),value:a.ler,register:r,setValue:c,edit:"menu[".concat(t,"].menu[").concat(s,"].edit")}),(0,n.jsx)(R.Z,{xs:2,md:1,name:"menu[".concat(t,"].menu[").concat(s,"].inserir"),value:a.inserir,register:r,setValue:c,edit:"menu[".concat(t,"].menu[").concat(s,"].edit")}),(0,n.jsx)(R.Z,{xs:2,md:1,name:"menu[".concat(t,"].menu[").concat(s,"].editar"),value:a.editar,register:r,setValue:c,edit:"menu[".concat(t,"].menu[").concat(s,"].edit")}),(0,n.jsx)(R.Z,{xs:2,md:1,name:"menu[".concat(t,"].menu[").concat(s,"].excluir"),value:a.excluir,register:r,setValue:c,edit:"menu[".concat(t,"].menu[").concat(s,"].edit")})]})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(z.Z,{expanded:o==="item-".concat(t,"-").concat(s),onChange:i("item-".concat(t,"-").concat(s)),sx:{border:"1px solid #e0e0e0",boxShadow:"none"},children:[(0,n.jsx)(_.Z,{id:"controlled-panel-header-1","aria-controls":"controlled-panel-content-1",expandIcon:(0,n.jsx)(d.Z,{icon:"mdi:chevron-down"}),sx:{display:"flex",alignItems:"center"},children:(0,n.jsx)(V.Z,{children:a.nome})}),(0,n.jsx)(U.Z,{children:a.submenu&&a.submenu.map((e,a)=>(0,n.jsx)(J,{submenu:e,indexMenuGroup:t,indexMenu:s,indexSubmenu:a,register:r,setValue:c},a))})]})})},L=e=>{let{register:a,setValue:t,menu:s,control:o,getValues:r}=e,{settings:l}=(0,i.useContext)(c.J6),[u,m]=(0,i.useState)("panel"),[h,p]=(0,i.useState)(!1),g=e=>(a,t)=>{p(!!t&&e)},v=l.mode;return(0,n.jsxs)(z.Z,{expanded:"panel"===u,onChange(e,a){m(!!a&&"panel")},sx:{border:"".concat("dark"===v?"1px solid #65656E":"1px solid #C5C6CD"),boxShadow:"none"},children:[(0,n.jsx)(_.Z,{id:"controlled-panel-header-1","aria-controls":"controlled-panel-content-1",expandIcon:(0,n.jsx)(d.Z,{icon:"mdi:chevron-down"}),sx:{display:"flex",alignItems:"center"},children:(0,n.jsx)(V.Z,{children:"Permiss\xf5es de Acesso"})}),(0,n.jsx)(U.Z,{children:s&&s.map((e,s)=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(x.ZP,{container:!0,spacing:4,sx:{my:2},children:[(0,n.jsx)(x.ZP,{item:!0,xs:4,md:8,children:(0,n.jsx)(V.Z,{variant:"body2",children:e.nome})}),(0,n.jsx)(x.ZP,{item:!0,xs:2,md:1,children:(0,n.jsx)(V.Z,{variant:"body2",sx:{textAlign:"center"},children:"Ler"})}),(0,n.jsx)(x.ZP,{item:!0,xs:2,md:1,children:(0,n.jsx)(V.Z,{variant:"body2",sx:{textAlign:"center"},children:"Inserir"})}),(0,n.jsx)(x.ZP,{item:!0,xs:2,md:1,children:(0,n.jsx)(V.Z,{variant:"body2",sx:{textAlign:"center"},children:"Editar"})}),(0,n.jsx)(x.ZP,{item:!0,xs:2,md:1,children:(0,n.jsx)(V.Z,{variant:"body2",sx:{textAlign:"center"},children:"Excluir"})})]}),e.menu&&e.menu.map((e,o)=>(0,n.jsx)(T,{getValues:r,menu:e,indexMenuGroup:s,expandedItem:h,handleChangeItem:g,indexMenu:o,register:a,setValue:t},o))]}))})]})};var W=t(45061),G=t(60565),H=t(41088),X=t(84220);let Y=e=>{let{id:a}=e,t=(0,i.useRef)(null),[s,C]=(0,i.useState)(!1),{setId:I}=(0,i.useContext)(r.X),{user:b,setUser:F,loggedUnity:V}=(0,i.useContext)(w.V),{title:E}=(0,i.useContext)(G.f),[k,N]=(0,i.useState)(null),[A,M]=(0,i.useState)(!1),[O,z]=(0,i.useState)([]),[_,U]=(0,i.useState)(!1),[R,J]=(0,i.useState)(null),{settings:T}=(0,i.useContext)(c.J6),Y=T.mode,{startLoading:B,stopLoading:K}=(0,H.Z)(),[Q,$]=(0,i.useState)(!1),[ee,ea]=(0,i.useState)(!1),[et,en]=(0,i.useState)(!1),es=o(),eo=a&&a>0?"edit":"new",ei=es.pathname,er="edit"==eo?"".concat(ei,"/verifyCPF"):"".concat((0,P.g_)(ei),"/verifyCPF"),{control:ec,handleSubmit:el,reset:ed,setError:eu,setValue:em,getValues:ex,watch:eh,register:ep,formState:{errors:eg}}=(0,Z.cI)({}),ev=()=>{ea(!1),$(!1),en(!1)},ef=async e=>{B();let t={...e,usualioLogado:b.usuarioID,unidadeID:V.unidadeID,fields:{...e.fields,dataNascimento:e.fields.dataNascimento.substring(0,10),unidadeID:V.unidadeID},cargosFuncoes:e.cargosFuncoes.map(e=>({...e,data:e.data.substring(0,10),dataInativacao:e.dataInativacao?e.dataInativacao.substring(0,10):null})),removedItems:O};try{if("new"===eo){let n=await l.h.post("".concat((0,P.g_)(ei),"/new/insertData"),t);es.push("".concat((0,P.g_)(ei))),I(n.data),y.ZP.success(P.OD.successNew)}else"edit"===eo&&(await l.h.post("".concat(ei,"/updateData/").concat(a),t),y.ZP.success(P.OD.successUpdate));ev(),ej()}catch(s){s.response&&409===s.response.status?y.ZP.error(P.OD.errorRepeated):console.log(s)}finally{K()}},ej=async()=>{let e="new"===eo?"".concat((0,P.g_)(ei),"/new/getData"):"".concat(ei,"/getData/").concat(a,"?unidadeID=").concat(V.unidadeID,"&papelID=").concat(V.papelID,"&admin=").concat(b.admin);try{let t=await l.h.post(e);console.log("\uD83D\uDE80 ~ getData:",t.data),ed(t.data),J(t.data.imagem),N(t.data)}catch(n){console.log(n)}},eZ=async()=>{try{await l.h.delete("".concat(ei,"/").concat(a,"/").concat(b.usuarioID,"/").concat(V.unidadeID)),I(null),C(!1),y.ZP.success(P.OD.successDelete)}catch(e){e.response&&409===e.response.status?(y.ZP.error(P.OD.pendingDelete),C(!1)):console.log(e)}},ey=()=>{let e=new Date,a="".concat(String(e.getMonth()+1).padStart(2,"0"),"/").concat(String(e.getDate()).padStart(2,"0"),"/").concat(e.getFullYear()),t=[...ex("cargosFuncoes"),{conselho:"",data:a,dataInativacao:"",formacaoCargo:"",status:!0}];em("cargosFuncoes",t),M(!A)},eD=(e,a)=>{if(1===k.cargosFuncoes.length){y.ZP.error("\xc9 necess\xe1rio ter pelo menos um Cargo/Fun\xe7\xe3o!");return}e.id&&z([...O,e.id]);let t=ex("cargosFuncoes").filter((e,t)=>t!==a);em("cargosFuncoes",t),M(!A)},eP=async e=>{let t=e.target.files[0];if(t){let n=new FormData;n.append("files[]",t),n.append("usuarioID",b.usuarioID);let s=t.type.includes("image");if(!s){y.ZP.error("O arquivo selecionado n\xe3o \xe9 uma imagem!");return}await l.h.post("".concat(ei,"/photo-profile/").concat(a,"/").concat(V.unidadeID,"/").concat(b.usuarioID),n).then(e=>{J(e.data),y.ZP.success("Foto atualizada com sucesso!");let a=JSON.parse(localStorage.getItem("userData"));a.imagem=e.data,localStorage.setItem("userData",JSON.stringify(a)),F(a)}).catch(e=>{var a,t,n;y.ZP.error(null!==(n=null===(a=e.response)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:t.message)&&void 0!==n?n:"Erro ao atualizar foto de perfil, tente novamente!")})}},ew=async()=>{try{await l.h.delete("".concat(ei,"/photo-profile/").concat(a,"/").concat(V.unidadeID,"/").concat(b.usuarioID)),J(null),y.ZP.success("Foto removida com sucesso!")}catch(e){console.log(e),y.ZP.error("Erro ao remover foto, tente novamente!")}},eC=()=>{t.current.click()},eI=e=>{let a=e.map(e=>({...e,menu:e.menu.map(e=>({...e,edit:!!e.rota}))}));return a},eb=async e=>{let a={usuarioID:e.usuarioID,unidadeID:V.unidadeID,papelID:1};try{let t=await l.h.post("".concat(ei,"/copyPermissions/"),a),n=eI(t.data);em("menu",n),N({...k,menu:n}),U(!_),y.ZP.success("Permiss\xf5es copiadas com sucesso!")}catch(s){console.log(s)}};return(0,i.useEffect)(()=>{ej()},[a]),(0,i.useEffect)(()=>{k&&k.fields.usuarioID>0&&en(!0)},[k]),k&&(0,n.jsx)("form",{onSubmit:el(ef),children:(0,n.jsxs)("div",{className:"space-y-4",children:[(0,n.jsxs)(u.Z,{children:[(0,n.jsx)(D.Z,{btnCancel:!0,btnSave:!0,btnNew:!0,handleSubmit:()=>el(ef),btnDelete:"edit"===eo,onclickDelete:()=>C(!0),type:eo}),(0,n.jsx)(m.Z,{children:(0,n.jsxs)(x.ZP,{container:!0,spacing:5,children:["edit"==eo&&(0,n.jsx)(x.ZP,{item:!0,xs:12,md:2,children:(0,n.jsxs)(x.ZP,{item:!0,xs:12,md:12,sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"140px",position:"relative",border:"".concat("dark"===Y?"1px solid #65656E":"1px solid #C5C6CD"),borderRadius:"8px"},children:[R&&(0,n.jsx)(h.Z,{title:"Apagar foto do perfil",placement:"top",children:(0,n.jsx)(p.Z,{size:"small",sx:{position:"absolute",top:"8px",right:"8px",zIndex:"20",color:"white",opacity:"0.8",backgroundColor:"#FF4D49","&:hover":{backgroundColor:"#FF4D49",opacity:"1"}},onClick:ew,children:(0,n.jsx)(d.Z,{icon:"material-symbols:delete-outline"})})}),(0,n.jsx)(h.Z,{title:R?"Alterar foto":"Inserir foto",placement:"top",children:(0,n.jsxs)(g.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%"},children:[(0,n.jsx)("input",{type:"file",ref:t,style:{display:"none"},onChange:eP}),(0,n.jsx)(v.Z,{variant:"rounded",alt:"Imagem do cabe\xe7alho do relat\xf3rio",sx:{width:"100%",height:"100%",cursor:"pointer"},onClick:eC,src:null!=R?R:"https://gedagro.com.br/images/report.png"})]})})]})}),(0,n.jsx)(x.ZP,{item:!0,xs:12,md:"edit"==eo?10:12,children:(0,n.jsx)(x.ZP,{container:!0,spacing:5,children:(0,n.jsx)(q,{data:k,control:ec,errors:eg,register:ep,watch:eh,getValues:ex,setError:eu,setValue:em,userNewVerifyCPF:ee,setUserNewVerifyCPF:ea,userExistVerifyCPF:Q,setUserExistVerifyCPF:$,resetFields:ev,routeVeryfyCNP:er,userExistDefault:et})})})]})})]}),(0,n.jsxs)(u.Z,{children:[(0,n.jsx)(f.Z,{title:"Cargos / Fun\xe7\xf5es"}),(0,n.jsx)(m.Z,{children:(0,n.jsxs)(x.ZP,{container:!0,spacing:5,children:[k&&(0,n.jsx)(S,{getValues:ex,control:ec,register:ep,errors:eg,removeItem:eD},A),(0,n.jsx)(j.Z,{variant:"outlined",color:"primary",sx:{mt:4,ml:4},startIcon:(0,n.jsx)(d.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){ey()},children:"Inserir item"})]})})]}),(et||ee)&&(0,n.jsxs)(u.Z,{children:[(0,n.jsx)(f.Z,{title:"Permiss\xf5es"}),(0,n.jsxs)(m.Z,{children:[(0,n.jsx)(x.ZP,{container:!0,spacing:4,className:"my-3",children:(0,n.jsx)(X.Z,{xs:12,md:12,title:"Copiar permiss\xf5es do profissional",name:"professional",value:null,options:null==k?void 0:k.professionals,onChange:eb,register:ep,setValue:em,control:ec})}),(0,n.jsx)(L,{menu:k.menu,control:ec,register:ep,setValue:em,getValues:ex},_)]})]}),(0,n.jsx)(W.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir "+E.title,openModal:s,handleClose:()=>C(!1),handleSubmit:eZ,btnCancel:!0,btnConfirm:!0})]})})};var B=Y},99384:function(e,a,t){var n=t(67294),s=t(46749);let o=()=>{let[e,a]=(0,n.useState)({}),t=(e,t,n,o)=>{let i=new Date(n),r=(0,s.HD)(e,i,o);a(e=>({...e,[t]:r}))};return{setDateFormat:t,dateStatus:e}};a.Z=o}}]);