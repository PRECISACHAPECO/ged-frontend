(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3825],{91359:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(87462),a=n(63366),i=n(67294),s=n(86010),o=n(94780),l=n(67074),u=n(78884),d=n(1588),c=n(34867);function m(e){return(0,c.Z)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var p=n(85893);let h=["className","component"],f=e=>{let{classes:t}=e;return(0,o.Z)({root:["root"]},m,t)},v=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),g=i.forwardRef(function(e,t){let n=(0,u.Z)({props:e,name:"MuiCardContent"}),{className:i,component:o="div"}=n,l=(0,a.Z)(n,h),d=(0,r.Z)({},n,{component:o}),c=f(d);return(0,p.jsx)(v,(0,r.Z)({as:o,className:(0,s.Z)(c.root,i),ownerState:d,ref:t},l))});var x=g},49837:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(87462),a=n(63366),i=n(67294),s=n(86010),o=n(94780),l=n(67074),u=n(78884),d=n(70918),c=n(1588),m=n(34867);function p(e){return(0,m.Z)("MuiCard",e)}(0,c.Z)("MuiCard",["root"]);var h=n(85893);let f=["className","raised"],v=e=>{let{classes:t}=e;return(0,o.Z)({root:["root"]},p,t)},g=(0,l.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),x=i.forwardRef(function(e,t){let n=(0,u.Z)({props:e,name:"MuiCard"}),{className:i,raised:o=!1}=n,l=(0,a.Z)(n,f),d=(0,r.Z)({},n,{raised:o}),c=v(d);return(0,h.jsx)(g,(0,r.Z)({className:(0,s.Z)(c.root,i),elevation:o?8:void 0,ref:t,ownerState:d},l))});var Z=x},3511:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/esqueceu-sua-senha",function(){return n(9361)}])},82747:function(e,t,n){"use strict";function r(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=e.length-2,n=e.substring(0,t),r=e.substring(t),a=0,i=t-7;for(let s=t;s>=1;s--)a+=n.charAt(t-s)*i--,i<2&&(i=9);let o=a%11<2?0:11-a%11;if(o!=r.charAt(0))return!1;t+=1,n=e.substring(0,t),a=0,i=t-7;for(let l=t;l>=1;l--)a+=n.charAt(t-l)*i--,i<2&&(i=9);return(o=a%11<2?0:11-a%11)==r.charAt(1)}function a(e){let t;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=0;for(let r=1;r<=9;r++)n+=parseInt(e.substring(r-1,r))*(11-r);if((10==(t=10*n%11)||11===t)&&(t=0),t!==parseInt(e.substring(9,10)))return!1;n=0;for(let a=1;a<=10;a++)n+=parseInt(e.substring(a-1,a))*(12-a);return(10==(t=10*n%11)||11===t)&&(t=0),t===parseInt(e.substring(10,11))}function i(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}n.d(t,{dI:function(){return i},sw:function(){return a},zk:function(){return r}})},9361:function(e,t,n){"use strict";n.r(t);var r=n(85893),a=n(41664),i=n.n(a),s=n(60664),o=n(61953),l=n(54225),u=n(67836),d=n(29630),c=n(91359),m=n(67074),p=n(62097),h=n(49837),f=n(55343),v=n(21609);n(30152);var g=n(88942),x=n(32414),Z=n(67294),j=n(87536),b=n(34175),C=n(82747),y=n(11163),w=n.n(y),P=n(86501),N=n(41099),I=n(19604);let k=(0,m.ZP)(h.Z)(e=>{let{theme:t}=e;return{[t.breakpoints.up("sm")]:{width:450}}}),E=()=>{var e,t,n;(0,p.Z)();let[a,m]=(0,Z.useState)(),[h,g]=(0,Z.useState)(),[y,E]=(0,Z.useState)(),S=w(),_=null==h?void 0:null===(e=h.email)||void 0===e?void 0:e.replace(/^(.{3}).*@/,"$1****@");(0,Z.useEffect)(()=>{m(S.query.type)},[]);let{handleSubmit:D,formState:{errors:q},setValue:z,register:A}=(0,j.cI)({});function M(e){g(""),"login"==a&&14==e.length&&(0,C.sw)(e)?s.h.post("esqueceuSenha/validation?type=".concat(a),{data:e}).then(e=>{g(e.data)}):"fornecedor"==a&&18==e.length&&(0,C.zk)(e)&&(console.log("ENVIA PRO BACKEND"),s.h.post("esqueceuSenha/validation?type=".concat(a),{data:e}).then(e=>{g(e.data)}))}console.log("errors",q);let R=e=>{let t={...e,email:null==h?void 0:h.email,nome:null==h?void 0:h.nome,usuarioID:null==h?void 0:h.usuarioID};s.h.post("/esqueceuSenha?type=".concat(a),{data:t}).then(e=>{200===e.status?P.Am.success("Email enviado com sucesso!"):P.Am.error("Erro ao enviar email, tente novamente!")})};return(0,r.jsxs)(o.Z,{className:"content-center",children:[(0,r.jsx)(k,{sx:{zIndex:1},style:{width:"min(500px, 96%)"},children:(0,r.jsxs)(c.Z,{sx:{p:e=>"".concat(e.spacing(15.5,7,8)," !important")},children:[(0,r.jsx)(o.Z,{sx:{mb:8,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,r.jsx)(N.Z,{})}),(0,r.jsxs)(o.Z,{sx:{mb:6.5},children:[(0,r.jsx)(d.Z,{variant:"h5",sx:{mb:1.5,letterSpacing:"0.18px",fontWeight:600},children:"Esqueceu sua senha? \uD83D\uDD12"}),(0,r.jsx)(d.Z,{variant:"body2",children:"login"===a?"Digite seu CPF e enviaremos instru\xe7\xf5es para redefinir sua senha":"Digite seu CNPJ e enviaremos instru\xe7\xf5es para redefinir sua senha"})]}),(0,r.jsxs)("form",{onSubmit:D(R),children:["login"===a?(0,r.jsx)(f.Z,{fullWidth:!0,children:(0,r.jsx)(u.Z,{label:"CPF",placeholder:"CPF",size:"small","aria-describedby":"validation-schema-nome",name:"cpf",...A("cpf",{required:!0,validate:e=>(0,C.sw)(e)||"CPF inv\xe1lido"}),error:q.cpf,helperText:null===(t=q.cpf)||void 0===t?void 0:t.message,inputProps:{maxLength:14,onChange(e){z("cpf",(0,b.VL)(e.target.value)),M(e.target.value),E(e.target.value)}}})}):(0,r.jsx)(f.Z,{fullWidth:!0,children:(0,r.jsx)(u.Z,{label:"CNPJ",placeholder:"CNPJ","aria-describedby":"validation-schema-nome",name:"cnpj",...A("cnpj",{required:!0,validate:e=>(0,C.zk)(e)||"CNPJ inv\xe1lido"}),error:null==q?void 0:q.cnpj,helperText:null==q?void 0:null===(n=q.cnpj)||void 0===n?void 0:n.message,inputProps:{maxLength:18,onChange(e){z("cnpj",(0,b.PK)(e.target.value)),M(e.target.value),E(e.target.value)}}})}),(null==h?void 0:h.email)&&(0,C.dI)(null==h?void 0:h.email)&&(0,r.jsx)(I.Z,{severity:"info",sx:{mt:2},children:(0,r.jsxs)(d.Z,{variant:"body2",children:["Um link para a redefini\xe7\xe3o da senha ser\xe1 enviado para ",_]})}),!h&&(null==y?void 0:y.length)==("login"==a?14:18)&&(0,r.jsx)(I.Z,{severity:"error",sx:{mt:2},children:(0,r.jsxs)(d.Z,{variant:"body2",children:["Esse ","login"==a?"CPF":"CNPJ"," n\xe3o est\xe1 na nossa base de dados!"]})}),(0,r.jsx)(l.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",sx:{mb:5.25,mt:4},disabled:!(null==h?void 0:h.email)||!(0,C.dI)(null==h?void 0:h.email),children:"Enviar"}),(0,r.jsx)(o.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,r.jsxs)(d.Z,{component:i(),href:"login"===a?"/login":"/fornecedor",sx:{display:"flex","& svg":{mr:1.5},alignItems:"center",color:"primary.main",textDecoration:"none",justifyContent:"center"},children:[(0,r.jsx)(v.Z,{icon:"mdi:chevron-left",fontSize:"2rem"}),(0,r.jsx)("span",{children:"Voltar para o login"})]})})]})]})}),(0,r.jsx)(x.Z,{image:"/images/pages/auth-v1-reset-password-mask-dark.png"})]})};E.getLayout=e=>(0,r.jsx)(g.Z,{children:e}),E.guestGuard=!0,t.default=E},32414:function(e,t,n){"use strict";var r=n(85893),a=n(61225),i=n(67074),s=n(62097);let o=(0,i.ZP)("img")(e=>{let{theme:t}=e;return{zIndex:-1,bottom:"7%",width:"100%",position:"absolute",[t.breakpoints.down("lg")]:{bottom:"10%"}}}),l=e=>{let{image:t}=e,n=(0,s.Z)(),i=(0,a.Z)(n.breakpoints.down("md")),l=t||"/images/pages/auth-v1-login-mask-".concat(n.palette.mode,".png");return i?null:(0,r.jsx)(o,{alt:"mask",src:l})};t.Z=l}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=3511)}),_N_E=e.O()}]);