(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3825],{91359:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r=t(87462),a=t(63366),i=t(67294),o=t(86010),s=t(94780),l=t(67074),u=t(78884),d=t(1588),c=t(34867);function p(e){return(0,c.Z)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var f=t(85893);let m=["className","component"],h=e=>{let{classes:n}=e;return(0,s.Z)({root:["root"]},p,n)},v=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,n)=>n.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),g=i.forwardRef(function(e,n){let t=(0,u.Z)({props:e,name:"MuiCardContent"}),{className:i,component:s="div"}=t,l=(0,a.Z)(t,m),d=(0,r.Z)({},t,{component:s}),c=h(d);return(0,f.jsx)(v,(0,r.Z)({as:s,className:(0,o.Z)(c.root,i),ownerState:d,ref:n},l))});var x=g},49837:function(e,n,t){"use strict";t.d(n,{Z:function(){return Z}});var r=t(87462),a=t(63366),i=t(67294),o=t(86010),s=t(94780),l=t(67074),u=t(78884),d=t(70918),c=t(1588),p=t(34867);function f(e){return(0,p.Z)("MuiCard",e)}(0,c.Z)("MuiCard",["root"]);var m=t(85893);let h=["className","raised"],v=e=>{let{classes:n}=e;return(0,s.Z)({root:["root"]},f,n)},g=(0,l.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,n)=>n.root})(()=>({overflow:"hidden"})),x=i.forwardRef(function(e,n){let t=(0,u.Z)({props:e,name:"MuiCard"}),{className:i,raised:s=!1}=t,l=(0,a.Z)(t,h),d=(0,r.Z)({},t,{raised:s}),c=v(d);return(0,m.jsx)(g,(0,r.Z)({className:(0,o.Z)(c.root,i),elevation:s?8:void 0,ref:n,ownerState:d},l))});var Z=x},3511:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/esqueceu-sua-senha",function(){return t(9361)}])},34175:function(e,n,t){"use strict";function r(e){return e&&(e=(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/,"$1.$2")).replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")).replace(/\.(\d{3})(\d)/,".$1/$2")).replace(/(\d{4})(\d)/,"$1-$2")),e}function a(e){return e&&(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d{1,2})$/,"$1-$2")),e}function i(e){return e&&(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{2})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1-$2")),e}function o(e){return e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/g,"($1) $2")).replace(/(\d)(\d{4})$/,"$1-$2")).replace(/\)-/,")")}function s(e){return e=(e=e.replace(/\D/g,"")).replace(/^(\d{5})(\d)/,"$1-$2")}function l(e){return e=(e=e.toUpperCase()).replace(/[^A-Z]/g,"")}t.d(n,{Bk:function(){return o},CL:function(){return l},PK:function(){return r},Tc:function(){return s},VL:function(){return a},cH:function(){return i}})},82747:function(e,n,t){"use strict";function r(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=e.length-2,t=e.substring(0,n),r=e.substring(n),a=0,i=n-7;for(let o=n;o>=1;o--)a+=t.charAt(n-o)*i--,i<2&&(i=9);let s=a%11<2?0:11-a%11;if(s!=r.charAt(0))return!1;n+=1,t=e.substring(0,n),a=0,i=n-7;for(let l=n;l>=1;l--)a+=t.charAt(n-l)*i--,i<2&&(i=9);return(s=a%11<2?0:11-a%11)==r.charAt(1)}function a(e){let n;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=0;for(let r=1;r<=9;r++)t+=parseInt(e.substring(r-1,r))*(11-r);if((10==(n=10*t%11)||11===n)&&(n=0),n!==parseInt(e.substring(9,10)))return!1;t=0;for(let a=1;a<=10;a++)t+=parseInt(e.substring(a-1,a))*(12-a);return(10==(n=10*t%11)||11===n)&&(n=0),n===parseInt(e.substring(10,11))}function i(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}t.d(n,{dI:function(){return i},sw:function(){return a},zk:function(){return r}})},9361:function(e,n,t){"use strict";t.r(n);var r=t(85893),a=t(41664),i=t.n(a),o=t(60664),s=t(61953),l=t(75084),u=t(67836),d=t(29630),c=t(91359),p=t(67074),f=t(62097),m=t(49837),h=t(55343),v=t(21609);t(30152);var g=t(88942),x=t(32414),Z=t(67294),j=t(87536),$=t(34175),b=t(82747),C=t(11163),y=t.n(C),P=t(86501),w=t(41099),N=t(19604);let k=(0,p.ZP)(m.Z)(e=>{let{theme:n}=e;return{[n.breakpoints.up("sm")]:{width:450}}}),I=()=>{var e,n,t;(0,f.Z)();let[a,p]=(0,Z.useState)(),[m,g]=(0,Z.useState)(),[C,I]=(0,Z.useState)(),D=y(),E=null==m?void 0:null===(e=m.email)||void 0===e?void 0:e.replace(/^(.{3}).*@/,"$1****@");(0,Z.useEffect)(()=>{p(D.query.type)},[]);let{handleSubmit:S,formState:{errors:_},setValue:A,register:q}=(0,j.cI)({});function z(e){g(""),"login"==a&&14==e.length&&(0,b.sw)(e)?o.h.post("esqueceuSenha/validation?type=".concat(a),{data:e}).then(e=>{g(e.data)}):"fornecedor"==a&&18==e.length&&(0,b.zk)(e)&&(console.log("ENVIA PRO BACKEND"),o.h.post("esqueceuSenha/validation?type=".concat(a),{data:e}).then(e=>{g(e.data)}))}console.log("errors",_);let M=e=>{let n={...e,email:null==m?void 0:m.email,nome:null==m?void 0:m.nome,usuarioID:null==m?void 0:m.usuarioID};o.h.post("/esqueceuSenha?type=".concat(a),{data:n}).then(e=>{200===e.status?P.Am.success("Email enviado com sucesso!"):P.Am.error("Erro ao enviar email, tente novamente!")})};return(0,r.jsxs)(s.Z,{className:"content-center",children:[(0,r.jsx)(k,{sx:{zIndex:1},style:{width:"min(500px, 96%)"},children:(0,r.jsxs)(c.Z,{sx:{p:e=>"".concat(e.spacing(15.5,7,8)," !important")},children:[(0,r.jsx)(s.Z,{sx:{mb:8,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,r.jsx)(w.Z,{})}),(0,r.jsxs)(s.Z,{sx:{mb:6.5},children:[(0,r.jsx)(d.Z,{variant:"h5",sx:{mb:1.5,letterSpacing:"0.18px",fontWeight:600},children:"Esqueceu sua senha? \uD83D\uDD12"}),(0,r.jsx)(d.Z,{variant:"body2",children:"login"===a?"Digite seu CPF e enviaremos instru\xe7\xf5es para redefinir sua senha":"Digite seu CNPJ e enviaremos instru\xe7\xf5es para redefinir sua senha"})]}),(0,r.jsxs)("form",{onSubmit:S(M),children:["login"===a?(0,r.jsx)(h.Z,{fullWidth:!0,children:(0,r.jsx)(u.Z,{label:"CPF",placeholder:"CPF",size:"small","aria-describedby":"validation-schema-nome",name:"cpf",...q("cpf",{required:!0,validate:e=>(0,b.sw)(e)||"CPF inv\xe1lido"}),error:_.cpf,helperText:null===(n=_.cpf)||void 0===n?void 0:n.message,inputProps:{maxLength:14,onChange(e){A("cpf",(0,$.VL)(e.target.value)),z(e.target.value),I(e.target.value)}}})}):(0,r.jsx)(h.Z,{fullWidth:!0,children:(0,r.jsx)(u.Z,{label:"CNPJ",placeholder:"CNPJ","aria-describedby":"validation-schema-nome",name:"cnpj",...q("cnpj",{required:!0,validate:e=>(0,b.zk)(e)||"CNPJ inv\xe1lido"}),error:null==_?void 0:_.cnpj,helperText:null==_?void 0:null===(t=_.cnpj)||void 0===t?void 0:t.message,inputProps:{maxLength:18,onChange(e){A("cnpj",(0,$.PK)(e.target.value)),z(e.target.value),I(e.target.value)}}})}),(null==m?void 0:m.email)&&(0,b.dI)(null==m?void 0:m.email)&&(0,r.jsx)(N.Z,{severity:"info",sx:{mt:2},children:(0,r.jsxs)(d.Z,{variant:"body2",children:["Um link para a redefini\xe7\xe3o da senha ser\xe1 enviado para ",E]})}),!m&&(null==C?void 0:C.length)==("login"==a?14:18)&&(0,r.jsx)(N.Z,{severity:"error",sx:{mt:2},children:(0,r.jsxs)(d.Z,{variant:"body2",children:["Esse ","login"==a?"CPF":"CNPJ"," n\xe3o est\xe1 na nossa base de dados!"]})}),(0,r.jsx)(l.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",sx:{mb:5.25,mt:4},disabled:!(null==m?void 0:m.email)||!(0,b.dI)(null==m?void 0:m.email),children:"Enviar"}),(0,r.jsx)(s.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,r.jsxs)(d.Z,{component:i(),href:"login"===a?"/login":"/fornecedor",sx:{display:"flex","& svg":{mr:1.5},alignItems:"center",color:"primary.main",textDecoration:"none",justifyContent:"center"},children:[(0,r.jsx)(v.Z,{icon:"mdi:chevron-left",fontSize:"2rem"}),(0,r.jsx)("span",{children:"Voltar para o login"})]})})]})]})}),(0,r.jsx)(x.Z,{image:"/images/pages/auth-v1-reset-password-mask-dark.png"})]})};I.getLayout=e=>(0,r.jsx)(g.Z,{children:e}),I.guestGuard=!0,n.default=I},32414:function(e,n,t){"use strict";var r=t(85893),a=t(61225),i=t(67074),o=t(62097);let s=(0,i.ZP)("img")(e=>{let{theme:n}=e;return{zIndex:-1,bottom:"7%",width:"100%",position:"absolute",[n.breakpoints.down("lg")]:{bottom:"10%"}}}),l=e=>{let{image:n}=e,t=(0,o.Z)(),i=(0,a.Z)(t.breakpoints.down("md")),l=n||"/images/pages/auth-v1-login-mask-".concat(t.palette.mode,".png");return i?null:(0,r.jsx)(s,{alt:"mask",src:l})};n.Z=l}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=3511)}),_N_E=e.O()}]);