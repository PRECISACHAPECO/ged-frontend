"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5876],{72819:function(e,t,n){var i=n(85893),l=n(95398),r=n(19604),a=n(44642),o=n(76779),s=n(75084),c=n(1890),d=n(77745),u=n(67294),x=n(87536);n(29308);var p=n(21609);let h=e=>{let{title:t,description:n,setOpenModal:h,openModal:m,children:f,handleConclusion:j,handleCopyLink:g,size:b}=e,{control:v,register:y,handleSubmit:Z,reset:C,getValues:k,setValue:w,formState:{errors:z}}=(0,x.cI)();console.log("\uD83D\uDE80 ~ DialogActs control:",v);let $=e=>{Z(S)(e)},S=e=>{C(),h(!1),j(e)};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(c.Z,{open:m,onClose:()=>h(!1),fullWidth:!!b,maxWidth:b||null,children:(0,i.jsxs)("form",{children:[(0,i.jsx)(d.Z,{id:"form-dialog-title",children:t}),(0,i.jsx)(l.Z,{children:(0,i.jsx)(r.Z,{severity:"info",children:n})}),(0,i.jsx)(l.Z,{children:(0,i.jsx)(a.Z,{sx:{py:2},children:u.cloneElement(f,{getValues:k,control:v,register:y,setValue:w,errors:z,reset:C,onSubmit:S})})}),(0,i.jsxs)(o.Z,{className:"dialog-actions-dense",children:[(0,i.jsx)(s.Z,{variant:"outlined",color:"primary",onClick:()=>h(!1),children:"Fechar"}),j&&(0,i.jsx)(s.Z,{type:"button",variant:"contained",color:"primary",onClick:$,children:"Confirmar"}),g&&(0,i.jsx)(s.Z,{variant:"contained",color:"primary",startIcon:(0,i.jsx)(p.Z,{icon:"uil:copy",fontSize:20}),onClick:g,children:"Copiar Link"})]})]})})})};t.Z=h},86887:function(e,t,n){n.d(t,{Z:function(){return S}});var i=n(85893),l=n(11163),r=n.n(l),a=n(67294),o=n(91359),s=n(61953),c=n(21609),d=n(46749),u=n(40039),x=n(83830);n(6122);var p=n(7071),h=n(61225),m=n(75084),f=n(73812),j=n(86378),g=n(72819);n(60565);let b=e=>{let{anchorEl:t,open:n,handleClose:l,handleClick:r,actionsData:o}=e,[s,d]=(0,a.useState)(!1),[u,x]=(0,a.useState)(null),p=e=>{localStorage.setItem("report",JSON.stringify(e))};return(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsxs)(m.Z,{type:"button",onClick:r,variant:"outlined",color:"primary",size:"medium",sx:{display:"flex",gap:2},children:[(0,i.jsx)(c.Z,{icon:"akar-icons:edit"}),(0,i.jsx)("span",{className:"hidden sm:block",children:"A\xe7\xf5es"})]}),(0,i.jsx)(f.Z,{id:"basic-menu",anchorEl:t,open:n,onClose:l,MenuListProps:{"aria-labelledby":"basic-button"},PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:null==o?void 0:o.map(e=>(0,i.jsxs)(j.Z,{onClick(){l(),p(e)},style:{textAlign:"left",display:"flex",alignItems:"center",gap:"4px"},children:[e.identification?(0,i.jsxs)("span",{style:{padding:"0 7px"},children:[(0,i.jsx)("span",{children:e.identification})," -"]}):(0,i.jsx)(c.Z,{icon:e.icon}),"report"==e.type?(0,i.jsx)("a",{href:"/relatorio",target:"_blank",rel:"noopener noreferrer",children:e.name}):(0,i.jsx)("p",{onClick:e.modal?()=>{d(!0),x(e)}:e.action,children:e.name})]},e.id))}),u&&(0,i.jsx)(g.Z,{title:u.name,description:u.description,handleConclusion:u.action,size:u.size,setOpenModal:d,openModal:s,children:u.component})]})};var v=n(72389),y=n(10160);let Z=e=>{let{isVisible:t,dataButtons:n,btnSave:l,btnPrint:r,matches:a,routes:o,currentUrl:s}=e;return(0,i.jsx)("div",{className:"\n                        ".concat(t?"fadeIn":"hidden"," trasition duration-200 fixed bottom-10 right-8 z-50 flex flex-col-reverse gap-3\n                    "),children:n.map(e=>(1!==e.id||l&&o.find(e=>e.rota===s&&e.editar))&&(2!==e.id||a)&&(2!==e.id||r)?(0,i.jsx)(v.Z,{title:e.title,placement:"left",children:(0,i.jsx)("div",{children:(0,i.jsx)(y.Z,{color:e.color,size:"large",onClick:e.function,variant:"contained",type:e.type,disabled:e.disabled,children:e.icon})},e.id)},e.id):null)})};var C=n(41664),k=n.n(C);let w=e=>{let{btnSend:t,btnSave:n,btnNew:l,routes:a,currentUrl:o,disabled:s,disabledSend:d,disabledSubmit:u,handleSubmit:x,handleSend:p,iconConclusion:h,titleConclusion:f}=e,j=r();return(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[l&&a.find(e=>e.rota===j.pathname&&e.inserir)&&(0,i.jsx)(k(),{href:"".concat(j.pathname,"/novo"),children:(0,i.jsxs)(m.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",sx:{display:"flex",gap:2},children:[(0,i.jsx)(c.Z,{icon:"ic:outline-plus"}),(0,i.jsx)("span",{className:"hidden sm:block",children:"Novo"})]})}),n&&a.find(e=>e.rota===o&&e.editar)&&(0,i.jsxs)(m.Z,{onClick:x,type:"submit",variant:"outlined",size:"medium",color:"primary",disabled:s||u,sx:{display:"flex",gap:2},children:[(0,i.jsx)(c.Z,{icon:"mdi:check-bold"}),(0,i.jsx)("span",{className:"hidden sm:block",children:"Salvar"})]}),t&&(0,i.jsxs)(m.Z,{onClick:p,type:"button",variant:"contained",size:"medium",color:"primary",disabled:s||d,sx:{display:"flex",gap:2},children:[(0,i.jsx)(c.Z,{icon:null!=h?h:"carbon:send-filled"}),(0,i.jsx)("span",{className:"hidden sm:block",children:f})]})]})},z=e=>{let{routes:t,currentUrl:n,btnCancel:l,btnDelete:r,btnStatus:a,btnClose:o,handleModalClose:d,handleBtnStatus:u,status:x,setId:h,router:f,type:j,onclickDelete:g}=e;return(0,i.jsxs)("div",{className:"flex gap-2",children:[l&&!o&&(0,i.jsx)(m.Z,{onClick(){h(null),"new"==j&&f.push(n)},type:"button",variant:"outlined",color:"primary",size:"medium",children:(0,i.jsx)(c.Z,{icon:"material-symbols:arrow-back-rounded"})}),r&&t.find(e=>e.rota===n&&e.excluir)&&(0,i.jsxs)(m.Z,{type:"button",onClick:g,variant:"outlined",color:"error",size:"medium",sx:{display:"flex",gap:2},children:[(0,i.jsx)(c.Z,{icon:"material-symbols:delete-outline"}),(0,i.jsx)("span",{className:"hidden sm:block",children:"Excluir"})]}),o&&(0,i.jsx)(m.Z,{type:"button",onClick:d,variant:"outlined",color:"primary",size:"medium",sx:{display:"flex",gap:2},children:(0,i.jsx)("span",{className:"hidden sm:block",children:"Fechar"})}),a&&(0,i.jsxs)(m.Z,{type:"button",onClick:u,variant:"outlined",color:"primary",size:"medium",sx:{display:"flex",gap:2},children:[(0,i.jsx)(c.Z,{icon:"fluent:status-12-filled"}),(0,i.jsx)("span",{className:"hidden sm:block",children:"Status"})]}),x&&(0,i.jsx)(s.Z,{display:"flex",alignItems:"center",justifyContent:"flex-end",children:(0,i.jsx)(p.Z,{size:"small",skin:"light",color:x.color,label:x.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}})})]})},$=e=>{let{btnCancel:t,btnSave:n,btnSend:l,btnStatus:m,handleSubmit:f,btnNew:j,btnClose:g,handleModalClose:v,disabledSubmit:y,handleSend:C,iconConclusion:k,titleConclusion:$,disabledSend:S,handleBtnStatus:N,onclickDelete:L,btnDelete:D,btnPrint:E,disabledPrint:I,disabled:P,actions:M,actionsData:A,type:B,status:T,partialRoute:V}=e,_=r(),{routes:F}=(0,a.useContext)(u.V),{setId:G}=(0,a.useContext)(x.X),[O,H]=(0,a.useState)(!1),[U,R]=(0,a.useState)(null),W=(0,h.Z)("(min-width:640px)"),J=Boolean(U),K=e=>{R(e.currentTarget)},q=()=>{R(null)},Q=()=>{window.scrollTo({top:0,behavior:"smooth"})},X=()=>{G(null)},Y="new"===B&&V?(0,d.g_)((0,d.g_)(_.pathname)):"new"===B||V?(0,d.g_)(_.pathname):_.pathname,ee=[{id:1,title:"Salvar",color:"primary",size:"large",type:"submit",variant:"contained",disabled:P||y,icon:(0,i.jsx)(c.Z,{icon:"material-symbols:save"}),function:f},{id:2,title:"Voltar ao topo",color:"default",size:"large",type:"button",variant:"outlined",disabled:!1,icon:(0,i.jsx)(c.Z,{icon:"ion:arrow-up"}),function:Q},{id:3,title:"Voltar para a p\xe1gina anterior",color:"default",size:"large",type:"button",variant:"outlined",disabled:!1,icon:(0,i.jsx)(c.Z,{icon:"material-symbols:arrow-back-rounded"}),function:X}];return(0,a.useEffect)(()=>{let e=()=>{H(!1),window.scrollY>0?H(!0):H(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(o.Z,{children:[(0,i.jsxs)("div",{className:"flex items-center justify-between",children:[(0,i.jsx)(z,{routes:F,currentUrl:Y,btnCancel:t,btnDelete:D,btnStatus:m,btnClose:g,handleModalClose:v,status:T,handleBtnStatus:N,onclickDelete:L,setId:G,router:_,type:B}),(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[M&&(0,i.jsx)(b,{anchorEl:U,open:J,handleClose:q,handleClick:K,disabled:P,disabledPrint:I,btnPrint:E,actionsData:A,matches:W}),(0,i.jsx)(w,{btnSave:n,btnNew:j,btnSend:l,routes:F,currentUrl:Y,handleSubmit:f,disabled:P,disabledSend:S,disabledSubmit:y,handleSend:C,iconConclusion:k,titleConclusion:$})]})]}),(0,i.jsx)(Z,{isVisible:O,dataButtons:ee,btnSave:n,btnPrint:E,matches:W,routes:F,currentUrl:Y}),(0,i.jsx)(s.Z,{sx:{mt:4},children:T&&!W&&(0,i.jsx)(s.Z,{display:"flex",alignItems:"center",justifyContent:"flex-start",children:(0,i.jsx)(p.Z,{size:"small",skin:"light",color:T.color,label:T.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}})})})]})})};var S=$},53934:function(e,t,n){var i=n(85893),l=n(72389),r=n(21609);let a=e=>{let{text:t,position:n}=e;return(0,i.jsx)(l.Z,{title:t,placement:null!=n?n:"top",arrow:!0,children:(0,i.jsx)("p",{children:(0,i.jsx)(r.Z,{icon:"clarity:help-solid",className:"cursor-pointer text-base"})})})};t.Z=a},67569:function(e,t,n){var i=n(85893),l=n(79072),r=n(61953),a=n(29630),o=n(22841),s=n(75158);let c=e=>{let{xs:t,md:n,title:c,index:d,name:u,typePage:x,value:p,edit:h,register:m,setValue:f,className:j}=e;return(0,i.jsx)(l.ZP,{item:!0,xs:t,md:n,className:j,children:(0,i.jsxs)(r.Z,{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,i.jsx)(a.Z,{variant:"caption",children:d&&0!=d?"":c}),(0,i.jsx)(o.Z,{control:(0,i.jsx)(s.Z,{size:"small",sx:{ml:4},...m(u),defaultChecked:!0==p||1==p||"new"==x,onChange(e){h&&f(h,!0)}})})]})})};t.Z=c},29308:function(e,t,n){var i=n(85893),l=n(87536),r=n(79072),a=n(55343),o=n(67836),s=n(9041),c=n(80562),d=n(34175),u=n(21609),x=n(53934);let p=e=>{let{xs:t,md:n,title:p,name:h,rows:m,value:f,type:j,mask:g,getAddressByCep:b,multiline:v,disabled:y,required:Z,control:C,errors:k,onChange:w,className:z,help:$,clearField:S,helpText:N,helpTextPosition:L,...D}=e;return(0,i.jsx)(r.ZP,{item:!0,xs:t,md:n,sx:{my:1},className:z,children:(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)(a.Z,{fullWidth:!0,sx:{position:"relative"},children:(0,i.jsx)(l.Qr,{name:h,control:C,rules:{required:Z},render(e){let{field:t}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o.Z,{...D,multiline:v,value:null==t?void 0:t.value,label:p,placeholder:p,rows:m,type:null!=j?j:"text",size:"small",disabled:y,"aria-describedby":"validation-schema-nome",error:k,onChange(e){let n=e.target.value;"cnpj"===g?n=(0,d.PK)(n):"cep"===g?b(n=(0,d.Tc)(n)):"cep2"===g?n=(0,d.Tc)(n):"telefone"===g?n=(0,d.Bk)(n):"estado"===g?n=(0,d.CL)(n):"cpf"===g?n=(0,d.VL)(n):"rg"===g&&(n=(0,d.cH)(n)),t.onChange(n),w&&w(n)},InputLabelProps:{shrink:!0},inputProps:"cnpj"===g?{maxLength:18,type:"tel",inputMode:"numeric"}:"cep"===g||"cep2"===g?{maxLength:9,type:"tel",inputMode:"numeric"}:"telefone"===g?{maxLength:15}:"cpf"===g?{maxLength:14}:"rg"===g?{maxLength:11}:"estado"===g?{maxLength:2}:{},InputProps:{endAdornment:S&&(0,i.jsx)(s.Z,{position:"end",children:(0,i.jsx)(c.Z,{onClick:S,children:(0,i.jsx)(u.Z,{icon:"clarity:close-line",fontSize:20})})})}})})}})}),N&&(0,i.jsx)("div",{className:"absolute ".concat("number"==j?"right-10":"right-4","  top-[12px]"),children:(0,i.jsx)(x.Z,{text:N,position:null!=L?L:"top"})})]})})};t.Z=p},6122:function(e,t,n){n.d(t,{Z:function(){return p}});var i=n(85893),l=n(67294),r=n(99070),a=n(60664),o=n(11163),s=n.n(o);let c={header:{position:"fixed",top:-5,left:0,right:0,margin:"0 auto",fontSize:12,height:50,width:"92%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},title:{textAlign:"center"},imageContainer:{width:"100%",height:"100%",display:"flex",justifyContent:"flex-end"},image:{aspectRatio:1,objectFit:"contain",height:"100%",marginLeft:"auto"}},d=()=>{var e,t,n,o;let d=s().pathname.split("/")[2],[u,x]=(0,l.useState)([]),p=localStorage.getItem("report"),h=JSON.parse(p),m=async()=>{let e={...h,isFornecedor:"fornecedor"===d};try{let t=await a.h.post("relatorio/header",e);x(t.data)}catch(n){console.error("Erro ao buscar os dados do cabe\xe7alho:",n)}};return(0,l.useEffect)(()=>{m()},[]),(0,i.jsxs)(r.G7,{style:c.header,children:[(0,i.jsx)(r.G7,{style:{width:"100%"},children:(0,i.jsx)(r.xv,{})}),(0,i.jsx)(r.G7,{style:{width:"100%"},children:(0,i.jsx)(r.xv,{style:[c.title,c.content],children:null!==(o=null==u?void 0:null===(e=u.unidade)||void 0===e?void 0:e.tituloRelatorio)&&void 0!==o?o:"Cabe\xe7alho n\xe3o definido"})}),(0,i.jsx)(r.G7,{style:c.imageContainer,children:(null==u?void 0:null===(t=u.unidade)||void 0===t?void 0:t.url)?(0,i.jsx)(r.Ee,{src:null==u?void 0:null===(n=u.unidade)||void 0===n?void 0:n.url,style:c.image}):""})]})},u=()=>{let e=r.mM.create({footer:{position:"absolute",bottom:20,color:"grey",width:"100vw",display:"flex",flexDirection:"row",justifyContent:"space-between",paddingHorizontal:25,fontSize:10}});return(0,i.jsxs)(r.G7,{fixed:!0,style:e.footer,children:[(0,i.jsxs)(r.xv,{children:["Gerado em"," ",new Date().toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})]}),(0,i.jsx)(r.xv,{render(e){let{pageNumber:t,totalPages:n}=e;return"".concat(t,"/").concat(n)}})]})},x=e=>{let{children:t}=e;return(0,i.jsx)(r.Z$,{style:{width:"100%",height:"100vh"},children:(0,i.jsx)(r.BB,{children:(0,i.jsxs)(r.T3,{size:"A4",style:{paddingHorizontal:25},children:[(0,i.jsx)(d,{}),t,(0,i.jsx)(u,{})]})})})};var p=x},34175:function(e,t,n){function i(e){return e&&(e=(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/,"$1.$2")).replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")).replace(/\.(\d{3})(\d)/,".$1/$2")).replace(/(\d{4})(\d)/,"$1-$2")),e}function l(e){return e&&(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d{1,2})$/,"$1-$2")),e}function r(e){return e&&(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{2})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1-$2")),e}function a(e){return e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/g,"($1) $2")).replace(/(\d)(\d{4})$/,"$1-$2")).replace(/\)-/,")")}function o(e){return e=(e=e.replace(/\D/g,"")).replace(/^(\d{5})(\d)/,"$1-$2")}function s(e){return e=(e=e.toUpperCase()).replace(/[^A-Z]/g,"")}n.d(t,{Bk:function(){return a},CL:function(){return s},PK:function(){return i},Tc:function(){return o},VL:function(){return l},cH:function(){return r}})}}]);