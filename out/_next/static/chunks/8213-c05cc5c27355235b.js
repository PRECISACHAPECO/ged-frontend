"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8213],{14155:function(e,t,n){n.d(t,{Z:function(){return L}});var i=n(85893),l=n(11163),r=n.n(l),o=n(67294),a=n(91359),d=n(61953),s=n(75084),c=n(72389);n(41664);var u=n(21609),p=n(46749),x=n(73812),m=n(86378),h=n(9942);n(60565);var f=n(99070),j=n(61225);let b=e=>{let{title:t,component:n}=e,l=(0,j.Z)("(min-width:640px)");return(0,i.jsx)(f.z6,{document:n,children(e){let{blob:n,url:r,loading:o,error:a}=e;return(0,i.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:l?null!=t?t:"Imprimir":""})}})};var g=n(40874),y=n(60664),v=n(83830),Z=n(40039);let C=()=>{let{id:e}=(0,o.useContext)(v.X),t=r().pathname.split("/")[2],[n,i]=(0,o.useState)([]),{user:l,loggedUnity:a}=(0,o.useContext)(Z.V),d=async()=>{await y.h.post("relatorio/header",{id:e,unidadeID:a.unidadeID,isFornecedor:"fornecedor"===t}).then(e=>i(e.data))};return(0,o.useEffect)(()=>{d()},[]),n},w=e=>{var t,n,l,r;let{title:o,titleButton:a,unidadeID:d,content:s}=e,c=C(d);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(b,{title:a,component:(0,i.jsx)(f.BB,{children:(0,i.jsxs)(f.T3,{size:"A4",style:g.W.page,children:[(0,i.jsxs)(f.G7,{style:g.W.header,children:[(0,i.jsx)(f.G7,{style:{width:"100%"},children:(0,i.jsx)(f.xv,{})}),(0,i.jsx)(f.G7,{style:{width:"100%",textAlign:"center"},children:(0,i.jsx)(f.xv,{style:g.W.title,children:null!==(r=null==c?void 0:null===(t=c.unidade)||void 0===t?void 0:t.tituloRelatorio)&&void 0!==r?r:"Cabe\xe7alho n\xe3o definido"})}),(0,i.jsx)(f.G7,{style:{width:"100%"},children:(null==c?void 0:null===(n=c.unidade)||void 0===n?void 0:n.url)?(0,i.jsx)(f.Ee,{src:null==c?void 0:null===(l=c.unidade)||void 0===l?void 0:l.url,style:{aspectRatio:1,objectFit:"contain",height:"100%",marginLeft:"auto"}}):""})]}),(0,i.jsx)(f.G7,{style:g.W.content,children:s}),(0,i.jsxs)(f.G7,{style:g.W.footer,fixed:!0,children:[(0,i.jsxs)(f.xv,{children:["Gerado em"," ",new Date().toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})]}),(0,i.jsx)(f.xv,{render(e){let{pageNumber:t,totalPages:n}=e;return"".concat(t,"/").concat(n)}})]})]})})})})};function k(e){let{disabled:t,dataReports:n,open:l,anchorEl:r,handleClick:o,handleClose:a}=e;return(0,i.jsx)("div",{children:(0,i.jsx)(x.Z,{id:"fade-menu",MenuListProps:{"aria-labelledby":"fade-button"},anchorEl:r,open:l,onClose:a,TransitionComponent:h.Z,children:n.map(e=>(0,i.jsxs)(m.Z,{onClick(){a()},children:[(0,i.jsx)("span",{children:e.identification}),(0,i.jsx)("span",{style:{padding:"0 5px"},children:"-"}),(0,i.jsx)(w,{title:e.name,content:e.component})]},e.id))})})}var $=n(10160),z=n(7071);let T=e=>{let{btnCancel:t,btnSave:n,btnSend:l,btnStatus:x,handleSubmit:m,disabledSubmit:h,handleSend:f,iconConclusion:b,titleConclusion:g,disabledSend:y,handleBtnStatus:C,btnDelete:T,onclickDelete:L,btnPrint:D,disabledPrint:B,disabled:R,dataReports:S,generateReport:E,type:I,status:N}=e,F=r(),{user:P,routes:V,loggedUnity:W}=(0,o.useContext)(Z.V),{setId:G}=(0,o.useContext)(v.X),[M,_]=(0,o.useState)(!1),[H,A]=(0,o.useState)(null),K=(0,j.Z)("(min-width:640px)"),O=Boolean(H),Q=e=>{A(e.currentTarget)},X=()=>{A(null)},q=()=>{window.scrollTo({top:0,behavior:"smooth"})},U=()=>{G(null)},Y="new"===I?(0,p.g_)(F.pathname):F.pathname,J=[{id:1,title:"Salvar",color:"primary",size:"large",type:"submit",variant:"contained",disabled:R||h,icon:(0,i.jsx)(u.Z,{icon:"material-symbols:save"}),function:m},{id:2,title:"Imprimir",color:"default",size:"large",type:"button",variant:"outlined",disabled:R||B,icon:(0,i.jsx)(w,{titleButton:(0,i.jsx)(u.Z,{icon:"material-symbols:print"}),title:"Imprimir",content:null==S?void 0:S[0].component}),function:Q},{id:3,title:"Voltar ao topo",color:"default",size:"large",type:"button",variant:"outlined",disabled:!1,icon:(0,i.jsx)(u.Z,{icon:"ion:arrow-up"}),function:q},{id:4,title:"Voltar para a p\xe1gina anterior",color:"default",size:"large",type:"button",variant:"outlined",disabled:!1,icon:(0,i.jsx)(u.Z,{icon:"material-symbols:arrow-back-rounded"}),function:U}];return(0,o.useEffect)(()=>{let e=()=>{_(!1),window.scrollY>0?_(!0):_(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)(d.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsxs)(d.Z,{sx:{display:"flex",justifyContent:"space-between",gap:"8px"},children:[t&&(0,i.jsx)(s.Z,{onClick(){G(null),F.push(Y)},type:"button",variant:"outlined",color:"primary",size:"medium",children:(0,i.jsx)(u.Z,{icon:"material-symbols:arrow-back-rounded"})}),T&&V.find(e=>e.rota===Y&&e.excluir)&&(0,i.jsxs)(s.Z,{type:"button",onClick:L,variant:"outlined",color:"error",size:"medium",sx:{display:"flex",gap:2},children:[(0,i.jsx)(u.Z,{icon:"material-symbols:delete-outline"}),(0,i.jsx)("span",{className:"hidden sm:block",children:"Excluir"})]}),x&&(0,i.jsxs)(s.Z,{type:"button",onClick:C,variant:"outlined",color:"primary",size:"medium",sx:{display:"flex",gap:2},children:[(0,i.jsx)(u.Z,{icon:"fluent:status-12-filled"}),(0,i.jsx)("span",{className:"hidden sm:block",children:"Status"})]}),N&&K&&(0,i.jsx)(d.Z,{display:"flex",alignItems:"center",justifyContent:"flex-end",children:(0,i.jsx)(z.Z,{size:"small",skin:"light",color:N.color,label:N.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}})})]}),(0,i.jsxs)(d.Z,{sx:{display:"flex",gap:"8px"},children:[D&&1===S.length&&K&&(0,i.jsxs)(s.Z,{id:"fade-button",color:"primary",disabled:R||B,variant:"outlined",size:"medium",type:"button",sx:{display:"flex",gap:2},children:[(0,i.jsx)(u.Z,{icon:"material-symbols:print"}),(0,i.jsx)(w,{titleButton:S[0].titleButton,title:S[0].title,content:S[0].component})]}),D&&S.length>1&&K&&(0,i.jsxs)(d.Z,{children:[(0,i.jsxs)(s.Z,{id:"fade-button",onClick:Q,color:"primary",disabled:R||B,variant:"outlined",size:"medium",type:"button",sx:{display:"flex",gap:2},children:[(0,i.jsx)(u.Z,{icon:"material-symbols:print"}),(0,i.jsx)("span",{className:"hidden sm:block",children:"Imprimir"})]}),(0,i.jsx)(k,{dataReports:S,handleClick:Q,handleClose:X,open:O,anchorEl:H})]}),n&&V.find(e=>e.rota===Y&&e.editar)&&(0,i.jsxs)(s.Z,{onClick:m,type:"submit",variant:"outlined",size:"medium",color:"primary",disabled:R||h,sx:{display:"flex",gap:2},children:[(0,i.jsx)(u.Z,{icon:"mdi:check-bold"}),(0,i.jsx)("span",{className:"hidden sm:block",children:"Salvar"})]}),l&&(0,i.jsxs)(s.Z,{onClick:f,type:"button",variant:"contained",size:"medium",color:"primary",disabled:R||y,sx:{display:"flex",gap:2},children:[(0,i.jsx)(u.Z,{icon:null!=b?b:"carbon:send-filled"}),(0,i.jsx)("span",{className:"hidden sm:block",children:g})]}),(0,i.jsx)("div",{className:"\n                        ".concat(M?"fadeIn":"hidden"," trasition duration-200 fixed bottom-10 right-8 z-50 flex flex-col-reverse gap-3\n                    "),children:J.map(e=>(1!==e.id||n&&V.find(e=>e.rota===Y&&e.editar))&&(2!==e.id||K)&&(2!==e.id||D)?(0,i.jsx)(c.Z,{title:e.title,placement:"left",children:(0,i.jsx)("div",{children:(0,i.jsx)($.Z,{color:e.color,size:"large",onClick:e.function,variant:"contained",type:e.type,disabled:e.disabled,children:e.icon})},e.id)},e.id):null)})]})]}),(0,i.jsx)(d.Z,{sx:{mt:4},children:N&&!K&&(0,i.jsx)(d.Z,{display:"flex",alignItems:"center",justifyContent:"flex-start",children:(0,i.jsx)(z.Z,{size:"small",skin:"light",color:N.color,label:N.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}})})})]})})};var L=T},67569:function(e,t,n){var i=n(85893),l=n(79072),r=n(61953),o=n(29630),a=n(22841),d=n(75158);let s=e=>{let{xs:t,md:n,title:s,index:c,name:u,typePage:p,value:x,edit:m,register:h,setValue:f,className:j}=e;return(0,i.jsx)(l.ZP,{item:!0,xs:t,md:n,className:j,children:(0,i.jsxs)(r.Z,{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,i.jsx)(o.Z,{variant:"caption",children:c&&0!=c?"":s}),(0,i.jsx)(a.Z,{control:(0,i.jsx)(d.Z,{sx:{ml:4},...h(u),defaultChecked:!0==x||1==x||"new"==p,onChange(e){m&&f(m,!0)}})})]})})};t.Z=s},3893:function(e,t,n){var i=n(85893),l=n(79072),r=n(61953),o=n(22841),a=n(75158);let d=e=>{let{xs:t,md:n,title:d,index:s,name:c,typePage:u,value:p,disabled:x,register:m}=e;return(0,i.jsx)(l.ZP,{item:!0,xs:t,md:n,children:(0,i.jsx)(r.Z,{display:"flex",flexDirection:"column",alignItems:"start",children:(0,i.jsx)(o.Z,{control:(0,i.jsx)(a.Z,{name:c,...m(c),defaultChecked:p,disabled:x}),label:d,sx:{"&:hover":{"& .MuiFormControlLabel-label":{color:"primary.main"}}}})})})};t.Z=d},29308:function(e,t,n){var i=n(85893),l=n(87536),r=n(79072),o=n(55343),a=n(67836),d=n(34175);let s=e=>{let{xs:t,md:n,title:s,name:c,rows:u,value:p,type:x,mask:m,getAddressByCep:h,multiline:f,disabled:j,required:b,control:g,errors:y,onChange:v,className:Z,...C}=e;return(0,i.jsx)(r.ZP,{item:!0,xs:t,md:n,sx:{my:1},className:Z,children:(0,i.jsx)(o.Z,{fullWidth:!0,children:(0,i.jsx)(l.Qr,{name:c,control:g,rules:{required:b},render(e){let{field:t}=e;return(0,i.jsx)(a.Z,{...C,multiline:f,value:null==t?void 0:t.value,label:s,placeholder:s,rows:u,type:null!=x?x:"text",disabled:j,"aria-describedby":"validation-schema-nome",error:y,onChange(e){let n=e.target.value;"cnpj"===m?n=(0,d.PK)(n):"cep"===m?h(n=(0,d.Tc)(n)):"cep2"===m?n=(0,d.Tc)(n):"telefone"===m?n=(0,d.Bk)(n):"estado"===m?n=(0,d.CL)(n):"cpf"===m?n=(0,d.VL)(n):"rg"===m&&(n=(0,d.cH)(n)),t.onChange(n),v&&v(n)},inputProps:"cnpj"===m?{maxLength:18,type:"tel",inputMode:"numeric"}:"cep"===m||"cep2"===m?{maxLength:9,type:"tel",inputMode:"numeric"}:"telefone"===m?{maxLength:15}:"cpf"===m?{maxLength:14}:"rg"===m?{maxLength:11}:"estado"===m?{maxLength:2}:{}})}})})})};t.Z=s},88475:function(e,t,n){var i=n(85893),l=n(79072),r=n(61953),o=n(29630),a=n(72389),d=n(80562),s=n(21609);let c=e=>{let{xs:t,md:n,title:c,removeItem:u,item:p,pending:x,index:m,textSuccess:h,textError:f}=e;return h=h||"Remover este item",f=f||"Este item n\xe3o pode ser removido pois possui cadastros vinculados a ele",(0,i.jsx)(l.ZP,{item:!0,xs:t,md:n,children:(0,i.jsxs)(r.Z,{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,i.jsx)(o.Z,{variant:"caption",children:c}),(0,i.jsx)(a.Z,{title:1==x?f:h,children:(0,i.jsx)(d.Z,{color:"error",onClick(){1!=x&&u(p,m)},sx:{opacity:1==x?.5:1,cursor:1==x?"default":"pointer"},children:(0,i.jsx)(s.Z,{icon:"tabler:trash-filled"})})})]})})};t.Z=c},84220:function(e,t,n){var i=n(85893),l=n(79072),r=n(55343),o=n(35966),a=n(67836),d=n(87536);let s=e=>{var t;let{xs:n,md:s,title:c,options:u,name:p,type:x,limitTags:m,value:h,required:f,control:j,disabled:b,multiple:g,setValue:y,errors:v,className:Z,handleRegistroEstabelecimento:C}=e;return(0,i.jsx)(l.ZP,{item:!0,xs:n,md:s,sx:{my:1},className:Z,children:(0,i.jsx)(r.Z,{fullWidth:!0,children:(0,i.jsx)(d.Qr,{name:p,control:j,defaultValue:h,rules:{required:f},render(e){let{field:n}=e;return(0,i.jsx)(o.Z,{...n,multiple:g,limitTags:m,options:u,getOptionLabel:e=>e.cnpj?"".concat(e.cnpj," - ").concat(e.nome):e.nome,value:g?n.value.map(e=>u.find(t=>t.nome===e.nome)):null!==(t=n.value)&&void 0!==t?t:{nome:""},disabled:b,onChange(e,t){y(p,t),"registroestabelecimento"==x&&C(t?t.id:null)},renderInput:e=>(0,i.jsx)(a.Z,{...e,label:c,placeholder:c,error:!!v}),noOptionsText:"Sem op\xe7\xf5es"})}})})})};t.Z=s},40874:function(e,t,n){n.d(t,{W:function(){return l}});var i=n(99070);let l=i.mM.create({page:{flexDirection:"column",backgroundColor:"#FFF",justifyContent:"start",paddingTop:15,paddingBottom:30},title:{},header:{position:"fixed",top:-5,left:0,right:0,margin:"0 auto",fontSize:12,height:50,width:"92%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},content:{marginHorizontal:10,fontSize:11,padding:15,flex:1},footer:{position:"absolute",bottom:20,color:"grey",width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",paddingHorizontal:25,fontSize:10},blockTitle:{paddingVertical:5},containerFields:{display:"flex",flexDirection:"row",flexWrap:"wrap",width:"100%",paddingTop:7},fields:{display:"flex",flexDirection:"column",gap:"2px",paddingBottom:10,paddingTop:10},fieldTitle:{fontSize:8,opacity:"0.8"},fieldValue:{fontSize:10},separator:{height:"1px",width:"100%",borderBottom:"1px solid #ddd"},table:{width:"100%",display:"flex",flexDirection:"column",borderRight:"1px solid #ddd",borderTop:"1px solid #ddd",borderBottom:"1px solid #ddd",borderTopLeftRadius:3,borderTopRightRadius:3,borderBottomLeftRadius:3,borderBottomRightRadius:3},tableTitle:{display:"flex",flexDirection:"row",width:"100%",fontSize:8,backgroundColor:"#EEE",borderTopLeftRadius:2,borderTopRightRadius:2,borderLeft:"1px solid #ddd"},tableTitlecolumn:{padding:8},tableContainer:{display:"flex",flexDirection:"row",width:"100%"},tableContent:{padding:8,borderLeft:"1px solid #ddd",borderTop:"1px solid #ddd"},tableContentcolumn:{fontSize:9}})},34175:function(e,t,n){function i(e){return e&&(e=(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/,"$1.$2")).replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")).replace(/\.(\d{3})(\d)/,".$1/$2")).replace(/(\d{4})(\d)/,"$1-$2")),e}function l(e){return e&&(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d{1,2})$/,"$1-$2")),e}function r(e){return e&&(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{2})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1-$2")),e}function o(e){return e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/g,"($1) $2")).replace(/(\d)(\d{4})$/,"$1-$2")).replace(/\)-/,")")}function a(e){return e=(e=e.replace(/\D/g,"")).replace(/^(\d{5})(\d)/,"$1-$2")}function d(e){return e=(e=e.toUpperCase()).replace(/[^A-Z]/g,"")}n.d(t,{Bk:function(){return o},CL:function(){return d},PK:function(){return i},Tc:function(){return a},VL:function(){return l},cH:function(){return r}})}}]);