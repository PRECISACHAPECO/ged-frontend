(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2810],{85390:function(e,r,a){"use strict";a.d(r,{Z:function(){return j}});var o=a(63366),t=a(87462),n=a(67294);a(59864);var i=a(86010),s=a(94780),l=a(67074),d=a(78884),c=a(36622),u=a(1588),p=a(34867);function m(e){return(0,p.Z)("MuiToggleButtonGroup",e)}let h=(0,u.Z)("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]);var x=a(85893);let f=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],v=e=>{let{classes:r,orientation:a,fullWidth:o,disabled:t}=e,n={root:["root","vertical"===a&&"vertical",o&&"fullWidth"],grouped:["grouped",`grouped${(0,c.Z)(a)}`,t&&"disabled"]};return(0,s.Z)(n,m,r)},g=(0,l.ZP)("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver(e,r){let{ownerState:a}=e;return[{[`& .${h.grouped}`]:r.grouped},{[`& .${h.grouped}`]:r[`grouped${(0,c.Z)(a.orientation)}`]},r.root,"vertical"===a.orientation&&r.vertical,a.fullWidth&&r.fullWidth]}})(({ownerState:e,theme:r})=>(0,t.Z)({display:"inline-flex",borderRadius:(r.vars||r).shape.borderRadius},"vertical"===e.orientation&&{flexDirection:"column"},e.fullWidth&&{width:"100%"},{[`& .${h.grouped}`]:(0,t.Z)({},"horizontal"===e.orientation?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${h.selected} + .${h.grouped}.${h.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${h.selected} + .${h.grouped}.${h.selected}`]:{borderTop:0,marginTop:0}})})),b=n.forwardRef(function(e,r){let a=(0,d.Z)({props:e,name:"MuiToggleButtonGroup"}),{children:s,className:l,color:c="standard",disabled:u=!1,exclusive:p=!1,fullWidth:m=!1,onChange:h,orientation:b="horizontal",size:j="medium",value:Z}=a,C=(0,o.Z)(a,f),y=(0,t.Z)({},a,{disabled:u,fullWidth:m,orientation:b,size:j}),F=v(y),N=(e,r)=>{let a;if(!h)return;let o=Z&&Z.indexOf(r);Z&&o>=0?(a=Z.slice()).splice(o,1):a=Z?Z.concat(r):[r],h(e,a)},z=(e,r)=>{h&&h(e,Z===r?null:r)};return(0,x.jsx)(g,(0,t.Z)({role:"group",className:(0,i.Z)(F.root,l),ref:r,ownerState:y},C,{children:n.Children.map(s,e=>{var r;return n.isValidElement(e)?n.cloneElement(e,{className:(0,i.Z)(F.grouped,e.props.className),onChange:p?z:N,selected:void 0===e.props.selected?(r=e.props.value,void 0!==Z&&void 0!==r&&(Array.isArray(Z)?Z.indexOf(r)>=0:r===Z)):e.props.selected,size:e.props.size||j,fullWidth:m,color:e.props.color||c,disabled:e.props.disabled||u}):null})}))});var j=b},87054:function(e,r,a){"use strict";a.d(r,{Z:function(){return C}});var o=a(63366),t=a(87462),n=a(67294),i=a(86010),s=a(94780),l=a(41796),d=a(50522),c=a(36622),u=a(78884),p=a(67074),m=a(1588),h=a(34867);function x(e){return(0,h.Z)("MuiToggleButton",e)}let f=(0,m.Z)("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]);var v=a(85893);let g=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],b=e=>{let{classes:r,fullWidth:a,selected:o,disabled:t,size:n,color:i}=e,l={root:["root",o&&"selected",t&&"disabled",a&&"fullWidth",`size${(0,c.Z)(n)}`,i]};return(0,s.Z)(l,x,r)},j=(0,p.ZP)(d.Z,{name:"MuiToggleButton",slot:"Root",overridesResolver(e,r){let{ownerState:a}=e;return[r.root,r[`size${(0,c.Z)(a.size)}`]]}})(({theme:e,ownerState:r})=>{let a,o="standard"===r.color?e.palette.text.primary:e.palette[r.color].main;return e.vars&&(o="standard"===r.color?e.vars.palette.text.primary:e.vars.palette[r.color].main,a="standard"===r.color?e.vars.palette.text.primaryChannel:e.vars.palette[r.color].mainChannel),(0,t.Z)({},e.typography.button,{borderRadius:(e.vars||e).shape.borderRadius,padding:11,border:`1px solid ${(e.vars||e).palette.divider}`,color:(e.vars||e).palette.action.active},r.fullWidth&&{width:"100%"},{[`&.${f.disabled}`]:{color:(e.vars||e).palette.action.disabled,border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${f.selected}`]:{color:o,backgroundColor:e.vars?`rgba(${a} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(o,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${a} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,l.Fq)(o,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${a} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(o,e.palette.action.selectedOpacity)}}}},"small"===r.size&&{padding:7,fontSize:e.typography.pxToRem(13)},"large"===r.size&&{padding:15,fontSize:e.typography.pxToRem(15)})}),Z=n.forwardRef(function(e,r){let a=(0,u.Z)({props:e,name:"MuiToggleButton"}),{children:n,className:s,color:l="standard",disabled:d=!1,disableFocusRipple:c=!1,fullWidth:p=!1,onChange:m,onClick:h,selected:x,size:f="medium",value:Z}=a,C=(0,o.Z)(a,g),y=(0,t.Z)({},a,{color:l,disabled:d,disableFocusRipple:c,fullWidth:p,size:f}),F=b(y),N=e=>{h&&(h(e,Z),e.defaultPrevented)||!m||m(e,Z)};return(0,v.jsx)(j,(0,t.Z)({className:(0,i.Z)(F.root,s),disabled:d,focusRipple:!c,ref:r,onClick:N,onChange:m,value:Z,ownerState:y,"aria-pressed":x},C,{children:n}))});var C=Z},50364:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/formularios/fornecedor-old",function(){return a(1225)}])},93250:function(e,r,a){"use strict";var o=a(85893),t=a(49837),n=a(91359),i=a(95722);let s=e=>{let{result:r,columns:a,btnNew:s=!0,btnPrint:l=!0,btnBack:d,openModal:c}=e;return(0,o.jsx)(t.Z,{children:(0,o.jsx)(n.Z,{sx:{pt:"0"},children:(0,o.jsx)(i.Z,{rows:r,columns:a,buttonsHeader:{btnNew:s,btnPrint:l,btnBack:d,openModal:c}})})})};r.Z=s},1225:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return E}});var o=a(85893),t=a(67294),n=a(60664),i=a(93250),s=a(47180),l=a(60565),d=a(83830),c=a(40039),u=a(1890),p=a(77745),m=a(95398),h=a(44642),x=a(79072),f=a(55343),v=a(67836),g=a(29630),b=a(19604),j=a(75084),Z=a(35966),C=a(76779),y=a(11163);a(84220);var F=a(21609),N=a(49540),z=a(34175),S=a(82747),w=a(87536),P=a(86501),D=a(45061);let k=e=>{var r;let{handleClose:a,openModal:i,makeFornecedor:s,loadingSave:d}=e;(0,y.useRouter)();let[k,I]=(0,t.useState)(!1),{user:R,loggedUnity:T}=(0,t.useContext)(c.V),{handleSearch:E}=(0,t.useContext)(l.f),[$,M]=(0,t.useState)(null),[A,B]=(0,t.useState)(null),[O,L]=(0,t.useState)(!1),[_,J]=(0,t.useState)(null),[W,q]=(0,t.useState)(!1),[H,G]=(0,t.useState)(!1),[V,X]=(0,t.useState)(!1),[K,U]=(0,t.useState)(!1),[Q,Y]=(0,t.useState)([]),[ee,er]=(0,t.useState)([]),[ea,eo]=(0,t.useState)(""),{handleSubmit:et,reset:en,formState:{errors:ei},setValue:es,register:el}=(0,w.cI)({}),ed=()=>{U(!0),setTimeout(()=>{U(!1)},5e3);let e=(0,N.q)((0,N.X1)(A.toString())),r=(0,N.q)((0,N.X1)(T.unidadeID.toString())),a=window.location.origin,o="".concat(a,"/registro?c=").concat(e,"&u=").concat(r,"&n=").concat(encodeURIComponent(ea),"&e=").concat(_);navigator.clipboard.writeText(o)},ec=async e=>{e&&18===e.length&&((0,S.zk)(e)?(I(!0),q(!1),await n.h.post("/formularios/fornecedor/cnpj",{unidadeID:T.unidadeID,cnpj:e}).then(r=>{var a,o;M(r.data),B(e),eo(null===(a=r.data)||void 0===a?void 0:a.nomeFornecedor),J(null===(o=r.data)||void 0===o?void 0:o.email),I(!1)})):(M(null),B(null),q(!0)))},eu=async()=>{E(A),a()},ep=async()=>{I(!0),await n.h.post("/formularios/fornecedor/fornecedorStatus",{unidadeID:T.unidadeID,cnpj:A,status:1}).then(e=>{200===e.status?(M(e.data),P.Am.success("Fornecedor reativado com sucesso")):P.Am.error("Erro ao reativar fornecedor"),I(!1)})},em=()=>{X(!0)},eh=async()=>{await n.h.post("/formularios/fornecedor/getGruposAnexo",{unidadeID:T.unidadeID}).then(e=>{Y(e.data)}).catch(e=>{console.log("\uD83D\uDE80 ~ error:",e)})},ex=e=>{console.log("\uD83D\uDE80 ~ onSubmit ~ values:",e)};return(0,t.useEffect)(()=>{eh()},[]),(0,t.useEffect)(()=>{ec(A),et(ex)},[d]),(0,t.useEffect)(()=>{en(),M(null),B(null),eo(null),J(null)},[i]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(u.Z,{open:i,onClose:a,"aria-labelledby":"form-dialog-title",children:[(0,o.jsx)(p.Z,{id:"form-dialog-title",children:"Habilitar novo fornecedor"}),(0,o.jsxs)(m.Z,{children:[(0,o.jsxs)(h.Z,{sx:{mb:3},children:["Insira o CNPJ da empresa que deseja habilitar como um novo fornecedor. Com isso, a empresa ficar\xe1 apta a preencher formul\xe1rios para a ",T.nomeFantasia,"."]}),(0,o.jsx)("form",{onSubmit:et(ex),children:(0,o.jsxs)(x.ZP,{container:!0,children:[(0,o.jsx)(x.ZP,{item:!0,xs:12,md:12,children:(0,o.jsxs)(f.Z,{fullWidth:!0,children:[(0,o.jsx)(v.Z,{label:"CNPJ",placeholder:"CNPJ","aria-describedby":"validation-schema-nome",name:"cnpj",error:W,...el("cnpj",{required:!0,validate:e=>(0,S.zk)(e)||"CNPJ inv\xe1lido"}),helperText:null===(r=ei.cnpj)||void 0===r?void 0:r.message,inputProps:{maxLength:18,onChange(e){M(null),es("cnpj",(0,z.PK)(e.target.value)),B((0,z.PK)(e.target.value)),ec(e.target.value),L(!1)}}}),W&&(0,o.jsx)(g.Z,{variant:"body2",color:"error",children:"Por favor, insira um CNPJ v\xe1lido!"})]})}),$&&$.isFornecedor&&!$.hasFormulario&&O&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x.ZP,{item:!0,xs:12,md:12,sx:{mt:4},children:(0,o.jsx)(f.Z,{fullWidth:!0,children:(0,o.jsx)(v.Z,{defaultValue:"",type:"email",label:"E-mail",placeholder:"E-mail","aria-describedby":"validation-schema-nome",name:"email",...el("email",{required:!0,validate:e=>e.includes("@")||"E-mail inv\xe1lido"}),error:H,helperText:H?"Insira um e-mail v\xe1lido":null,inputProps:{onChange(e){es("email",e.target.value),J(e.target.value),G(!(0,S.dI)(e.target.value))}}})})}),(0,o.jsx)(x.ZP,{item:!0,xs:12,md:12,sx:{mt:2},children:(0,o.jsx)(b.Z,{severity:"info",children:"Um e-mail ser\xe1 enviado para o fornecedor com as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio"})})]})]})}),$&&(0,o.jsx)(x.ZP,{container:!0,sx:{mt:2},children:(0,o.jsx)(x.ZP,{item:!0,xs:12,md:12,children:$.isFornecedor&&$.hasFormulario?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(b.Z,{severity:"success",children:["Esse CNPJ est\xe1 habilitado como um Fornecedor da ",T.nomeFantasia]}),(0,o.jsx)(j.Z,{startIcon:(0,o.jsx)(F.Z,{icon:K?"mdi:check-bold":"iconamoon:copy-bold"}),sx:{mt:2},onClick:K?null:ed,style:{cursor:K?"default":"pointer"},children:K?"Copiado!":"Copiar Link do Formul\xe1rio"})]}):$.isFornecedor&&!$.hasFormulario?(0,o.jsx)(b.Z,{severity:"warning",children:"Esse CNPJ j\xe1 \xe9 seu fornecedor, mas n\xe3o h\xe1 nenhum formul\xe1rio criado"}):!$.isFornecedor&&$.hasFormulario?(0,o.jsx)(b.Z,{severity:"warning",children:"Esse CNPJ n\xe3o est\xe1 mais ativo como um fornecedor mas possui formul\xe1rios preenchidos"}):$.isFornecedor||$.hasFormulario?null:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x.ZP,{item:!0,xs:12,md:12,sx:{my:1},children:(0,o.jsx)(f.Z,{fullWidth:!0,children:(0,o.jsx)(v.Z,{defaultValue:"",label:"Nome do Fornecedor",placeholder:"Nome do Fornecedor","aria-describedby":"validation-schema-nome",name:"nomeFornecedor",inputProps:{onChange(e){es("nomeFornecedor",e.target.value),eo(e.target.value)}}})})}),(0,o.jsx)(x.ZP,{item:!0,xs:12,md:12,sx:{mt:3},children:(0,o.jsx)(f.Z,{fullWidth:!0,children:(0,o.jsx)(Z.Z,{multiple:!0,limitTags:5,options:Q,getOptionLabel:e=>e.nome,defaultValue:[],onChange(e,r){er(r)},renderInput:e=>(0,o.jsx)(v.Z,{...e,label:"Grupos de Anexo",placeholder:"Grupos de Anexo"})})})}),(0,o.jsx)(b.Z,{severity:"info",sx:{mt:3},children:"Esse CNPJ ainda n\xe3o \xe9 seu fornecedor"})]})})})]}),(0,o.jsxs)(C.Z,{className:"dialog-actions-dense",sx:{mx:2,mb:2},children:[(0,o.jsx)(j.Z,{variant:"outlined",onClick:a,children:"Fechar"}),$&&($.isFornecedor&&$.hasFormulario||!$.isFornecedor&&$.hasFormulario||!$.isFornecedor&&!$.hasFormulario)&&(0,o.jsx)(j.Z,{variant:"contained",onClick:$.isFornecedor&&$.hasFormulario?eu:!$.isFornecedor&&$.hasFormulario?ep:$.isFornecedor||$.hasFormulario?null:em,children:$.isFornecedor&&$.hasFormulario?"Filtrar formul\xe1rios":!$.isFornecedor&&$.hasFormulario?"Reativar fornecedor":$.isFornecedor||$.hasFormulario?null:"Avan\xe7ar"})]})]}),(0,o.jsx)(D.Z,{title:"Confirmar novo fornecedor",text:"Tem certeza que deseja tornar o CNPJ ".concat(A," um fornecedor ativo na ").concat(T.nomeFantasia," ? Se sim, o mesmo poder\xe1 preencher formul\xe1rios de Fornecedor para a sua empresa."),handleClose(){X(!1)},openModal:V,handleSubmit:s,inputEmail:!0,setEmail:J,email:_,closeAfterSave:!0,cnpj:A,gruposAnexo:ee,nomeFornecedor:ea,grupoAnexosFornecedor:!0,btnCancel:!0,btnConfirm:!0,btnConfirmColor:"primary"})]})};var I=a(47842),R=a(46749);let T=()=>{let{user:e,loggedUnity:r}=(0,t.useContext)(c.V),[a,u]=(0,t.useState)(null),p=(0,y.useRouter)(),m=p.pathname,{setTitle:h,setSearchText:x,setFilteredData:f,handleSearch:v}=(0,t.useContext)(l.f),[g,b]=(0,t.useState)(null),[j,Z]=(0,t.useState)(!1),[C,F]=(0,t.useState)(!1),{id:N}=(0,t.useContext)(d.X),z=()=>{Z(!0)},S=async(a,o,t,i)=>{try{F(!0),await n.h.post("".concat(m,"/makeFornecedor"),{usuarioID:e.usuarioID,unidadeID:r.unidadeID,papelID:e.papelID,cnpj:a,email:i,nomeFornecedor:o,gruposAnexo:t}).then(e=>{200===e.status?(P.Am.success("Fornecedor habilitado com sucesso"),i&&sendMail(i,a,o)):P.Am.error("Erro ao tornar fornecedor"),F(!1)})}catch(s){console.log(s)}},w=async()=>{await n.h.post("".concat(m,"/getList"),{unidadeID:r.unidadeID,papelID:e.papelID,cnpj:e.cnpj?e.cnpj:null}).then(e=>{u(e.data),console.log("\uD83D\uDE80 ~ response.data:",e.data),h({title:"Fornecedor",subtitle:{id:N,count:e.data.length,new:!1}})})};(0,t.useEffect)(()=>{w()},[N,C]);let D=1==e.papelID?[{headerName:"ID",field:"id",size:1},{headerName:"Fornecedor",field:"fornecedor",size:1},{headerName:"CNPJ",field:"cnpj",size:1},{headerName:"Data da Avalia\xe7\xe3o",field:"data",size:1},{headerName:"Cidade",field:"cidade",size:1},{headerName:"Respons\xe1vel",field:"responsavel",size:1},{headerName:"Status",field:{name:"status",cor:"cor"},size:1}]:2==e.papelID?[{headerName:"ID",field:"id",size:1},{headerName:"F\xe1brica",field:"fabrica",size:1},{headerName:"CNPJ",field:"cnpj",size:1},{headerName:"Data da Avalia\xe7\xe3o",field:"data",size:1},{headerName:"Cidade",field:"cidade",size:1},{headerName:"Respons\xe1vel",field:"responsavel",size:1},{headerName:"Status",field:{name:"status",cor:"cor"},size:1}]:[],T=(0,R.OL)(m,D);return(0,t.useEffect)(()=>{b(p.query.s)},[]),(0,t.useEffect)(()=>{setTimeout(()=>{x(g),v(g)},100)},[g]),(0,o.jsxs)(o.Fragment,{children:[a?N&&N>0?(0,o.jsx)(s.Z,{id:N}):(0,o.jsx)(i.Z,{result:a,columns:T,btnNew:1==e.papelID,openModal:1==e.papelID?z:null}):(0,o.jsx)(I.Z,{}),(0,o.jsx)(k,{openModal:j,handleClose:()=>Z(!1),makeFornecedor:S,loadingSave:C})]})};var E=T},84242:function(e,r,a){"use strict";a.d(r,{Z:function(){return Z}});var o=a(85893),t=a(61953),n=a(67836),i=a(80562),s=a(50853),l=a(11163),d=a.n(l),c=a(75084),u=a(41664),p=a.n(u),m=a(40039),h=a(67294),x=a(83830),f=a(46749),v=a(21609);let g=e=>{let{btnNew:r,btnPrint:a,btnSave:t,btnBack:n,handleSave:i,hasListChange:s,openModal:l}=e,u=d(),{setId:g}=(0,h.useContext)(x.X),{routes:b}=(0,h.useContext)(m.V);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"flex items-center justify-between my-2 w-full",children:[(0,o.jsx)("div",{}),(0,o.jsxs)("div",{className:"flex items-center gap-4 ",children:[(0,o.jsx)("div",{children:n&&(0,o.jsx)(c.Z,{onClick(){u.push((0,f.g_)(u.pathname)),g(null)},type:"button",variant:"outlined",color:"primary",size:"medium",children:(0,o.jsx)(v.Z,{icon:"material-symbols:arrow-back-rounded"})})}),(0,o.jsx)("div",{children:a&&(0,o.jsxs)(c.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",sx:{display:"flex",gap:2},children:[(0,o.jsx)(v.Z,{icon:"mdi:printer"}),(0,o.jsx)("span",{className:"hidden sm:block",children:"Imprimir"})]})}),(0,o.jsx)("div",{className:"",children:r&&b.find(e=>(e.rota===u.pathname||e.rota===(0,f.g_)(u.pathname))&&e.inserir)&&(0,o.jsx)(p(),{href:l?"":"".concat(u.pathname,"/novo"),children:(0,o.jsxs)(c.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",onClick:l||null,sx:{display:"flex",gap:2},children:[(0,o.jsx)(v.Z,{icon:"ic:outline-plus"}),(0,o.jsx)("span",{className:"hidden sm:block",children:"Novo"})]})})}),(0,o.jsx)("div",{children:t&&(0,o.jsxs)(c.Z,{onClick:i,disabled:!s,type:"button",variant:"outlined",color:"primary",size:"medium",sx:{display:"flex",gap:2},children:[(0,o.jsx)(v.Z,{icon:"mdi:check-bold"}),(0,o.jsx)("span",{className:"hidden sm:block",children:"Salvar"})]})})]})]})})};var b=a(61225);let j=e=>((0,b.Z)("(min-width:640px)"),(0,o.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"row",gap:2,alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,o.jsxs)(t.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,o.jsx)(n.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,o.jsx)(t.Z,{sx:{mr:2,display:"flex"},children:(0,o.jsx)(v.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,o.jsx)(i.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,o.jsx)(v.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,o.jsx)("div",{className:"hidden sm:block",children:(0,o.jsx)(s.M,{})})]}),(0,o.jsx)(g,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,btnBack:e.buttonsHeader.btnBack,btnSave:e.buttonsHeader.btnSave,handleSave:e.buttonsHeader.handleSave,hasListChange:e.hasChange,openModal:e.buttonsHeader.openModal})]}));var Z=j},95722:function(e,r,a){"use strict";var o=a(85893),t=a(67294),n=a(87630),i=a(75680),s=a(84242),l=a(60565),d=a(83830);let c=e=>{let{rows:r,columns:a,buttonsHeader:c}=e,{handleSearch:u,pageSize:p,setPageSize:m,searchText:h,filteredData:x,setData:f,data:v}=(0,t.useContext)(l.f),{setId:g}=(0,t.useContext)(d.X);return f(r),(0,o.jsx)(n._,{localeText:i.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:a,pageSize:p,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:s.Z},rows:h?x:v,onCellClick(e,r){g(e.row.id)},onPageSizeChange:e=>m(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer",overflow:"scroll"}},componentsProps:{toolbar:{value:h,clearSearch:()=>u(""),onChange:e=>u(e.target.value),buttonsHeader:c}}})};r.Z=c}},function(e){e.O(0,[4186,1445,1111,5999,7536,2389,2187,9349,1515,5876,7921,7180,9774,2888,179],function(){return e(e.s=50364)}),_N_E=e.O()}]);