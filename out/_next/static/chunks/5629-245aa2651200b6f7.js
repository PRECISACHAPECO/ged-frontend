"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5629],{45629:function(e,n,t){t.d(n,{Z:function(){return T}});var s=t(85893),a=t(11163),o=t.n(a),r=t(67294),i=t(83830),l=t(66136),c=t(60664),d=t(21609),u=t(49837),m=t(91359),x=t(79072),h=t(72389),p=t(80562),g=t(55343),f=t(44731),v=t(59742),j=t(75084),Z=t(87536),b=t(86501),y=t(86887),C=t(46749),P=t(40039),w=t(50287),D=t(29308),F=t(88475);let I=e=>{let{data:n,getValues:t,control:a,name:o,errors:r,removeItem:i}=e;return t("cargosFuncoes").map((e,n)=>{var t,o,l,c,d,u,m,x;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(w.Z,{xs:12,md:2,required:!0,title:"Data",value:e.data,name:"cargosFuncoes[".concat(n,"].data"),control:a,errors:null==r?void 0:null===(t=r.cargosFuncoes)||void 0===t?void 0:null===(o=t[n])||void 0===o?void 0:o.data}),(0,s.jsx)(D.Z,{xs:12,md:4,required:!0,title:"Forma\xe7\xe3o / Cargo",name:"cargosFuncoes.[".concat(n,"].formacaoCargo"),control:a,errors:null==r?void 0:null===(l=r.cargosFuncoes)||void 0===l?void 0:null===(c=l[n])||void 0===c?void 0:c.formacaoCargo}),(0,s.jsx)(D.Z,{xs:12,md:3,title:"Conselho",name:"cargosFuncoes.[".concat(n,"].conselho"),control:a,errors:null==r?void 0:null===(d=r.cargosFuncoes)||void 0===d?void 0:null===(u=d[n])||void 0===u?void 0:u.conselho}),(0,s.jsx)(w.Z,{xs:12,md:2,title:"Data Inativa\xe7\xe3o",value:e.dataInativacao,name:"cargosFuncoes[".concat(n,"].dataInativacao"),control:a,errors:null==r?void 0:null===(m=r.cargosFuncoes)||void 0===m?void 0:null===(x=m[n])||void 0===x?void 0:x.dataInativacao}),(0,s.jsx)(F.Z,{xs:4,md:1,title:"Remover",index:n,removeItem:i,item:e,textSuccess:"Remover este item",textError:"Este item n\xe3o pode mais ser removido pois possui anexo vinculado a ele"})]})})};var S=t(29630),k=t(9041),E=t(67836),V=t(3893),A=t(82747),N=t(19604);let z=e=>{var n,t,a,o,i,l;let{control:u,setError:m,errors:h,data:g,register:f,watch:v,getValues:j,setValue:Z,userNewVerifyCPF:b,setUserNewVerifyCPF:y,userExistVerifyCPF:C,setUserExistVerifyCPF:P,resetFields:F,routeVeryfyCNP:I}=e,[z,M]=(0,r.useState)(null),[_,q]=(0,r.useState)({showPassword:!1,showConfirmPassword:!1}),R=()=>{q({..._,showPassword:!_.showPassword})},U=e=>{e.preventDefault()},O=()=>{q({..._,showConfirmPassword:!_.showConfirmPassword})},W=e=>{e.preventDefault()},L=()=>{let e=j("fields").cpf;e&&e.length<14&&(Z("isUsuario",!1),F()),(0,A.sw)(e)?(m("fields.cpf",null),v()):m("fields.cpf",{type:"manual",message:"CPF inv\xe1lido"}),v()},T=async()=>{F();let e=j("isUsuario");if(!e){let n={cpf:j("fields").cpf};try{await c.h.post(I,n),y(!0)}catch(t){409==t.response.status?P(!0):console.log(t)}}},$=()=>{T()};return g&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(D.Z,{md:12,title:"Nome",name:"fields.nome",required:!0,control:u,errors:null==h?void 0:null===(n=h.fields)||void 0===n?void 0:n.nome}),(0,s.jsx)(D.Z,{xs:12,md:4,title:"CPF",mask:"cpf",name:"fields.cpf",required:null!=C&&C,control:u,errors:null==h?void 0:null===(t=h.fields)||void 0===t?void 0:t.cpf,onChange:L}),(0,s.jsx)(w.Z,{xs:12,md:4,required:!0,title:"Data de Nascimento",value:null==g?void 0:null===(a=g.fields)||void 0===a?void 0:a.dataNascimento,name:"fields.dataNascimento",control:u,errors:null==h?void 0:null===(o=h.fields)||void 0===o?void 0:o.dataNascimento}),(0,s.jsx)(D.Z,{xs:12,md:4,title:"Email",type:"email",required:null!=C&&C,name:"fields.email",control:u,errors:null==h?void 0:null===(i=h.fields)||void 0===i?void 0:i.email,onChange:L}),(0,s.jsx)(D.Z,{xs:12,md:3,title:"Matricula",name:"fields.matricula",control:u,errors:null==h?void 0:null===(l=h.fields)||void 0===l?void 0:l.matricula}),(0,s.jsx)(V.Z,{xs:12,md:3,onClick:$,title:"Usu\xe1rio do sistema",name:"isUsuario",value:g.fields.usuarioID>0,register:f,disabled:!(j("fields").email&&(0,A.sw)(j("fields").cpf)),helpText:"Preencha o CPF(Deve ser um CPF v\xe1lido) e email para habilitar essa fun\xe7\xe3o."}),C&&(0,s.jsx)(x.ZP,{item:!0,xs:12,md:6,children:(0,s.jsx)(N.Z,{severity:"warning",sx:{mt:2},children:(0,s.jsx)(S.Z,{variant:"body2",children:"Esse profissional j\xe1 possui acesso ao sistema. A senha n\xe3o ser\xe1 alterada!"})})}),b&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x.ZP,{item:!0,xs:12,sm:3,children:(0,s.jsx)(E.Z,{fullWidth:!0,label:"Senha",id:"input-password",variant:"outlined",size:"small",type:_.showPassword?"text":"password",name:"senha",error:!!h.senha,helperText:h.senha&&h.senha.message,InputProps:{endAdornment:(0,s.jsx)(k.Z,{position:"end",children:(0,s.jsx)(p.Z,{edge:"end",onClick:R,onMouseDown:U,children:(0,s.jsx)(d.Z,{icon:_.showPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})})},...f("senha",{minLength:{value:4,message:"Senha deve ter pelo menos 4 caracteres"}})})}),(0,s.jsx)(x.ZP,{item:!0,xs:12,sm:3,children:(0,s.jsx)(E.Z,{fullWidth:!0,label:"Confirme a senha",id:"input-confirm-password",variant:"outlined",size:"small",type:_.showConfirmPassword?"text":"password",name:"confirmaSenha",error:!!h.confirmaSenha,helperText:h.confirmaSenha&&h.confirmaSenha.message,InputProps:{endAdornment:(0,s.jsx)(k.Z,{position:"end",children:(0,s.jsx)(p.Z,{edge:"end",onClick:O,onMouseDown:W,children:(0,s.jsx)(d.Z,{icon:_.showConfirmPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})})},onChange(e){M(e.target.value)},...f("confirmaSenha",{validate:e=>e===v("senha")||"As senhas n\xe3o coincidem"})})})]})]})};var M=t(76992),_=t(29618),q=t(47028),R=t(67569);let U=e=>{let{submenu:n,indexMenuGroup:t,indexMenu:a,indexSubmenu:o,register:r,setValue:i}=e;return(0,s.jsxs)(x.ZP,{container:!0,spacing:5,sx:{my:2},children:[(0,s.jsx)(x.ZP,{item:!0,xs:4,md:8,children:(0,s.jsx)(S.Z,{variant:"subtitle1",children:n.nome})}),(0,s.jsx)("input",{type:"hidden",value:n.rota,name:"menu[".concat(t,"].menu[").concat(a,"].submenu[").concat(o,"].rota"),...r("menu[".concat(t,"].menu[").concat(a,"].submenu[").concat(o,"].rota"))}),(0,s.jsx)(R.Z,{xs:2,md:1,name:"menu[".concat(t,"].menu[").concat(a,"].submenu[").concat(o,"].ler"),value:n.ler,register:r,setValue:i,edit:"menu[".concat(t,"].menu[").concat(a,"].submenu[").concat(o,"].edit")}),(0,s.jsx)(R.Z,{xs:2,md:1,name:"menu[".concat(t,"].menu[").concat(a,"].submenu[").concat(o,"].inserir"),value:n.inserir,register:r,setValue:i,edit:"menu[".concat(t,"].menu[").concat(a,"].submenu[").concat(o,"].edit")}),(0,s.jsx)(R.Z,{xs:2,md:1,name:"menu[".concat(t,"].menu[").concat(a,"].submenu[").concat(o,"].editar"),value:n.editar,register:r,setValue:i,edit:"menu[".concat(t,"].menu[").concat(a,"].submenu[").concat(o,"].edit")}),(0,s.jsx)(R.Z,{xs:2,md:1,name:"menu[".concat(t,"].menu[").concat(a,"].submenu[").concat(o,"].excluir"),value:n.excluir,register:r,setValue:i,edit:"menu[".concat(t,"].menu[").concat(a,"].submenu[").concat(o,"].edit")})]})},O=e=>{let{menu:n,indexMenuGroup:t,indexMenu:a,expandedItem:o,handleChangeItem:r,register:i,setValue:l}=e;return n.rota?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(x.ZP,{container:!0,spacing:5,sx:{my:2},children:[(0,s.jsx)(x.ZP,{item:!0,xs:4,md:8,children:(0,s.jsx)(S.Z,{variant:"subtitle1",children:n.nome})}),(0,s.jsx)("input",{type:"hidden",value:n.rota,name:"menu[".concat(t,"].menu[").concat(a,"].rota"),...i("menu[".concat(t,"].menu[").concat(a,"].rota"))}),(0,s.jsx)(R.Z,{xs:2,md:1,name:"menu[".concat(t,"].menu[").concat(a,"].ler"),value:n.ler,register:i,setValue:l,edit:"menu[".concat(t,"].menu[").concat(a,"].edit")}),(0,s.jsx)(R.Z,{xs:2,md:1,name:"menu[".concat(t,"].menu[").concat(a,"].inserir"),value:n.inserir,register:i,setValue:l,edit:"menu[".concat(t,"].menu[").concat(a,"].edit")}),(0,s.jsx)(R.Z,{xs:2,md:1,name:"menu[".concat(t,"].menu[").concat(a,"].editar"),value:n.editar,register:i,setValue:l,edit:"menu[".concat(t,"].menu[").concat(a,"].edit")}),(0,s.jsx)(R.Z,{xs:2,md:1,name:"menu[".concat(t,"].menu[").concat(a,"].excluir"),value:n.excluir,register:i,setValue:l,edit:"menu[".concat(t,"].menu[").concat(a,"].edit")})]})}):(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(M.Z,{expanded:o==="item-".concat(t,"-").concat(a),onChange:r("item-".concat(t,"-").concat(a)),sx:{border:"1px solid #e0e0e0",boxShadow:"none"},children:[(0,s.jsx)(_.Z,{id:"controlled-panel-header-1","aria-controls":"controlled-panel-content-1",expandIcon:(0,s.jsx)(d.Z,{icon:"mdi:chevron-down"}),sx:{display:"flex",alignItems:"center"},children:(0,s.jsx)(S.Z,{children:n.nome})}),(0,s.jsx)(q.Z,{children:n.submenu&&n.submenu.map((e,n)=>(0,s.jsx)(U,{submenu:e,indexMenuGroup:t,indexMenu:a,indexSubmenu:n,register:i,setValue:l},n))})]})})},W=e=>{let{register:n,setValue:t,menu:a,control:o}=e,{settings:i}=(0,r.useContext)(l.J6),[c,u]=(0,r.useState)(!1),[m,h]=(0,r.useState)(!1),p=e=>(n,t)=>{h(!!t&&e)},g=i.mode;return(0,s.jsxs)(M.Z,{expanded:"panel"===c,onChange(e,n){u(!!n&&"panel")},sx:{border:"".concat("dark"===g?"1px solid #65656E":"1px solid #C5C6CD"),boxShadow:"none"},children:[(0,s.jsx)(_.Z,{id:"controlled-panel-header-1","aria-controls":"controlled-panel-content-1",expandIcon:(0,s.jsx)(d.Z,{icon:"mdi:chevron-down"}),sx:{display:"flex",alignItems:"center"},children:(0,s.jsx)(S.Z,{children:"Permiss\xf5es de Acesso"})}),(0,s.jsx)(q.Z,{children:a&&a.map((e,a)=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(x.ZP,{container:!0,spacing:4,sx:{my:2},children:[(0,s.jsx)(x.ZP,{item:!0,xs:4,md:8,children:(0,s.jsx)(S.Z,{variant:"body2",children:e.nome})}),(0,s.jsx)(x.ZP,{item:!0,xs:2,md:1,children:(0,s.jsx)(S.Z,{variant:"body2",sx:{textAlign:"center"},children:"Ler"})}),(0,s.jsx)(x.ZP,{item:!0,xs:2,md:1,children:(0,s.jsx)(S.Z,{variant:"body2",sx:{textAlign:"center"},children:"Inserir"})}),(0,s.jsx)(x.ZP,{item:!0,xs:2,md:1,children:(0,s.jsx)(S.Z,{variant:"body2",sx:{textAlign:"center"},children:"Editar"})}),(0,s.jsx)(x.ZP,{item:!0,xs:2,md:1,children:(0,s.jsx)(S.Z,{variant:"body2",sx:{textAlign:"center"},children:"Excluir"})})]}),e.menu&&e.menu.map((e,o)=>(0,s.jsx)(O,{menu:e,indexMenuGroup:a,expandedItem:m,handleChangeItem:p,indexMenu:o,register:n,setValue:t},o))]}))})]})},L=e=>{let{id:n}=e,t=(0,r.useRef)(null),{setId:a}=(0,r.useContext)(i.X),{user:w,loggedUnity:D}=(0,r.useContext)(P.V),[F,S]=(0,r.useState)(null),[k,E]=(0,r.useState)(!1),[V,A]=(0,r.useState)([]),[N,M]=(0,r.useState)(null),{settings:_}=(0,r.useContext)(l.J6),q=_.mode,[R,U]=(0,r.useState)(!1),[O,L]=(0,r.useState)(!1),[T,$]=(0,r.useState)(!1),G=o(),J=n&&n>0?"edit":"new",Y=G.pathname,Q="edit"==J?"".concat(Y,"/verifyCPF"):"".concat((0,C.g_)(Y),"/verifyCPF"),{control:X,handleSubmit:B,reset:H,setError:K,setValue:ee,getValues:en,watch:et,register:es,formState:{errors:ea}}=(0,Z.cI)({}),eo=()=>{L(!1),U(!1),$(!1)},er=async e=>{let t={...e,fields:{...e.fields,unidadeID:D.unidadeID},removedItems:V};console.log("\uD83D\uDE80 ~ values:",t);try{if("new"===J){let s=await c.h.post("".concat((0,C.g_)(Y),"/new/insertData"),t);G.push("".concat((0,C.g_)(Y))),a(s.data),b.ZP.success(C.OD.successNew)}else"edit"===J&&(await c.h.post("".concat(Y,"/updateData/").concat(n),t),b.ZP.success(C.OD.successUpdate));eo(),ei()}catch(o){o.response&&409===o.response.status?b.ZP.error(C.OD.errorRepeated):console.log(o)}},ei=async()=>{let e="new"===J?"".concat((0,C.g_)(Y),"/new/getData"):"".concat(Y,"/getData/").concat(n,"?unidadeID=").concat(D.unidadeID,"&papelID=").concat(D.papelID,"&admin=").concat(w.admin);try{let t=await c.h.post(e);H(t.data),console.log("\uD83D\uDE80 ~ response.data:",t.data),M(t.data.imagem),S(t.data)}catch(s){console.log(s)}},el=()=>{let e=new Date,n="".concat(String(e.getMonth()+1).padStart(2,"0"),"/").concat(String(e.getDate()).padStart(2,"0"),"/").concat(e.getFullYear()),t=[...en("cargosFuncoes"),{conselho:"",data:n,dataInativacao:"",formacaoCargo:"",status:!0}];ee("cargosFuncoes",t),E(!k)},ec=(e,n)=>{if(1===F.cargosFuncoes.length){b.ZP.error("\xc9 necess\xe1rio ter pelo menos um Cargo/Fun\xe7\xe3o!");return}e.id&&A([...V,e.id]);let t=en("cargosFuncoes").filter((e,t)=>t!==n);ee("cargosFuncoes",t),E(!k)},ed=async e=>{let t=e.target.files[0];if(t){let s=new FormData;s.append("files[]",t),s.append("usuarioID",w.usuarioID);let a=t.type.includes("image");if(!a){b.ZP.error("O arquivo selecionado n\xe3o \xe9 uma imagem!");return}await c.h.post("".concat(Y,"/photo-profile/").concat(n,"/").concat(D.unidadeID,"/").concat(w.usuarioID),s).then(e=>{M(e.data),b.ZP.success("Foto atualizada com sucesso!")}).catch(e=>{var n,t,s;b.ZP.error(null!==(s=null===(n=e.response)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.message)&&void 0!==s?s:"Erro ao atualizar foto de perfil, tente novamente!")})}},eu=async()=>{try{await c.h.delete("".concat(Y,"/photo-profile/").concat(n,"/").concat(D.unidadeID)),M(null),b.ZP.success("Foto removida com sucesso!")}catch(e){console.log(e),b.ZP.error("Erro ao remover foto, tente novamente!")}},em=()=>{t.current.click()};return(0,r.useEffect)(()=>{ei()},[n]),(0,r.useEffect)(()=>{console.log("entra akiii"),F&&F.fields.usuarioID>0&&(console.log("entra akiii tmbm"),$(!0))},[F]),console.log("user exist default",T),console.log("userExist nEW",O),F&&(0,s.jsx)("form",{onSubmit:B(er),children:(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(y.Z,{btnCancel:!0,btnSave:!0,btnNew:!0,handleSubmit:()=>B(er),btnDelete:"edit"===J,onclickDelete:()=>setOpen(!0),type:J}),(0,s.jsx)(m.Z,{children:(0,s.jsxs)(x.ZP,{container:!0,spacing:5,children:[(0,s.jsx)(x.ZP,{item:!0,xs:12,md:2,children:(0,s.jsxs)(x.ZP,{item:!0,xs:12,md:12,sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"140px",position:"relative",border:"".concat("dark"===q?"1px solid #65656E":"1px solid #C5C6CD"),borderRadius:"8px"},children:[N&&(0,s.jsx)(h.Z,{title:"Apagar foto do perfil",placement:"top",children:(0,s.jsx)(p.Z,{size:"small",sx:{position:"absolute",top:"8px",right:"8px",zIndex:"20",color:"white",opacity:"0.8",backgroundColor:"#FF4D49","&:hover":{backgroundColor:"#FF4D49",opacity:"1"}},onClick:eu,children:(0,s.jsx)(d.Z,{icon:"material-symbols:delete-outline"})})}),(0,s.jsx)(h.Z,{title:N?"Alterar foto":"Inserir foto",placement:"top",children:(0,s.jsxs)(g.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%"},children:[(0,s.jsx)("input",{type:"file",ref:t,style:{display:"none"},onChange:ed}),(0,s.jsx)(f.Z,{variant:"rounded",alt:"Imagem do cabe\xe7alho do relat\xf3rio",sx:{width:"100%",height:"100%",cursor:"pointer"},onClick:em,src:null!=N?N:"https://gedagro.com.br/images/report.png"})]})})]})}),(0,s.jsx)(x.ZP,{item:!0,xs:12,md:10,children:(0,s.jsx)(x.ZP,{container:!0,spacing:5,children:(0,s.jsx)(z,{data:F,control:X,errors:ea,register:es,watch:et,getValues:en,setError:K,setValue:ee,userNewVerifyCPF:O,setUserNewVerifyCPF:L,userExistVerifyCPF:R,setUserExistVerifyCPF:U,resetFields:eo,routeVeryfyCNP:Q})})})]})})]}),(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(v.Z,{title:"Cargos / Fun\xe7\xf5es"}),(0,s.jsx)(m.Z,{children:(0,s.jsxs)(x.ZP,{container:!0,spacing:5,children:[F&&(0,s.jsx)(I,{getValues:en,control:X,errors:ea,removeItem:ec},k),(0,s.jsx)(j.Z,{variant:"outlined",color:"primary",sx:{mt:4,ml:4},startIcon:(0,s.jsx)(d.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){el()},children:"Inserir item"})]})})]}),(T||O)&&(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(v.Z,{title:"Permiss\xf5es"}),(0,s.jsx)(m.Z,{children:(0,s.jsx)(W,{menu:F.menu,control:X,register:es,setValue:ee})})]})]})})};var T=L},3893:function(e,n,t){var s=t(85893),a=t(79072),o=t(61953),r=t(22841),i=t(75158),l=t(53934);let c=e=>{let{xs:n,md:t,title:c,index:d,name:u,typePage:m,value:x,disabled:h,register:p,onClick:g,helpText:f,helpTextPosition:v}=e;return(0,s.jsx)(a.ZP,{item:!0,xs:n,md:t,children:(0,s.jsx)(o.Z,{display:"flex",alignItems:"center",justifyContent:"start",sx:{gap:0},children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Z,{control:(0,s.jsx)(i.Z,{name:u,onClick:g,...p(u),defaultChecked:x,disabled:h}),label:c,size:"small",sx:{marginRight:"4px","&:hover":{"& .MuiFormControlLabel-label":{color:"primary.main"}}}}),f&&(0,s.jsx)(l.Z,{text:f,position:null!=v?v:"top"})]})})})};n.Z=c},50287:function(e,n,t){var s=t(85893),a=t(79072),o=t(55343),r=t(67836),i=t(87536);let l=e=>{let{xs:n,md:t,title:l,isRequired:c,disabled:d,type:u,value:m,name:x,setDateFormat:h,typeValidation:p,daysValidation:g,dateStatus:f,errors:v,control:j}=e,Z=e=>{let n=new Date(e),t=n.getDate().toString().padStart(2,"0"),s=(n.getMonth()+1).toString().padStart(2,"0"),a=n.getFullYear();return"".concat(a,"-").concat(s,"-").concat(t)};return(0,s.jsx)(a.ZP,{item:!0,xs:n,md:t,sx:{my:1},children:(0,s.jsx)(o.Z,{fullWidth:!0,children:(0,s.jsx)(i.Qr,{name:x,control:j,render(e){var n,t;let{field:a}=e;return(0,s.jsx)(r.Z,{type:"date",size:"small",label:l,disabled:!!d,defaultValue:m?Z(m):"",onChange(e){a.onChange(e),p&&h(p,u,e.target.value,g)},variant:"outlined",fullWidth:!0,InputLabelProps:{shrink:!0},inputProps:{min:null==f?void 0:null===(n=f[u])||void 0===n?void 0:n.dataIni,max:null==f?void 0:null===(t=f[u])||void 0===t?void 0:t.dataFim}})}})})})};n.Z=l},88475:function(e,n,t){var s=t(85893),a=t(79072),o=t(61953),r=t(29630),i=t(72389),l=t(80562),c=t(21609);let d=e=>{let{xs:n,md:t,icon:d,color:u,title:m,removeItem:x,item:h,pending:p,index:g,textSuccess:f,textError:v}=e;return f=f||"Remover este item",v=v||"Este item n\xe3o pode ser removido pois possui cadastros vinculados a ele",(0,s.jsx)(a.ZP,{item:!0,xs:n,md:t,children:(0,s.jsxs)(o.Z,{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,s.jsx)(r.Z,{variant:"caption",children:m}),(0,s.jsx)(i.Z,{title:1==p?v:f,children:(0,s.jsx)(l.Z,{color:null!=u?u:"error",size:"small",onClick(){1!=p&&x(h,g)},sx:{opacity:1==p?.5:1,cursor:1==p?"default":"pointer"},children:(0,s.jsx)(c.Z,{icon:null!=d?d:"tabler:trash-filled"})})})]})})};n.Z=d},82747:function(e,n,t){function s(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=e.length-2,t=e.substring(0,n),s=e.substring(n),a=0,o=n-7;for(let r=n;r>=1;r--)a+=t.charAt(n-r)*o--,o<2&&(o=9);let i=a%11<2?0:11-a%11;if(i!=s.charAt(0))return!1;n+=1,t=e.substring(0,n),a=0,o=n-7;for(let l=n;l>=1;l--)a+=t.charAt(n-l)*o--,o<2&&(o=9);return(i=a%11<2?0:11-a%11)==s.charAt(1)}function a(e){let n;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=0;for(let s=1;s<=9;s++)t+=parseInt(e.substring(s-1,s))*(11-s);if((10==(n=10*t%11)||11===n)&&(n=0),n!==parseInt(e.substring(9,10)))return!1;t=0;for(let a=1;a<=10;a++)t+=parseInt(e.substring(a-1,a))*(12-a);return(10==(n=10*t%11)||11===n)&&(n=0),n===parseInt(e.substring(10,11))}function o(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}t.d(n,{dI:function(){return o},sw:function(){return a},zk:function(){return s}})}}]);