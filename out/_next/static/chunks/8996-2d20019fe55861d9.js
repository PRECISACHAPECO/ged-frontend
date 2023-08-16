"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8996],{29308:function(e,n,o){var r=o(85893),i=o(87536),s=o(79072),a=o(55343),l=o(67836),t=o(34175);let d=e=>{let{xs:n,md:o,title:d,name:c,rows:u,value:x,type:h,mask:m,getAddressByCep:p,multiline:f,disabled:j,required:v,control:Z,errors:g,onChange:y,...w}=e;return(0,r.jsx)(s.ZP,{item:!0,xs:n,md:o,sx:{my:1},children:(0,r.jsx)(a.Z,{fullWidth:!0,children:(0,r.jsx)(i.Qr,{name:c,control:Z,rules:{required:v},render(e){let{field:n}=e;return(0,r.jsx)(l.Z,{...w,multiline:f,value:n.value,label:d,placeholder:d,rows:u,type:null!=h?h:"text",disabled:j,"aria-describedby":"validation-schema-nome",error:g,onChange(e){let o=e.target.value;"cnpj"===m?o=(0,t.PK)(o):"cep"===m?p(o=(0,t.Tc)(o)):"cep2"===m?o=(0,t.Tc)(o):"telefone"===m?o=(0,t.Bk)(o):"estado"===m?o=(0,t.CL)(o):"cpf"===m?o=(0,t.VL)(o):"rg"===m&&(o=(0,t.cH)(o)),n.onChange(o),y&&y(o)},inputProps:"cnpj"===m?{maxLength:18,type:"tel",inputMode:"numeric"}:"cep"===m||"cep2"===m?{maxLength:9,type:"tel",inputMode:"numeric"}:"telefone"===m?{maxLength:15}:"cpf"===m?{maxLength:14}:"rg"===m?{maxLength:11}:"estado"===m?{maxLength:2}:{}})}})})})};n.Z=d},34175:function(e,n,o){function r(e){return e&&(e=(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/,"$1.$2")).replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")).replace(/\.(\d{3})(\d)/,".$1/$2")).replace(/(\d{4})(\d)/,"$1-$2")),e}function i(e){return e&&(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d{1,2})$/,"$1-$2")),e}function s(e){return e&&(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{2})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1-$2")),e}function a(e){return e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/g,"($1) $2")).replace(/(\d)(\d{4})$/,"$1-$2")).replace(/\)-/,")")}function l(e){return e=(e=e.replace(/\D/g,"")).replace(/^(\d{5})(\d)/,"$1-$2")}function t(e){return e=(e=e.toUpperCase()).replace(/[^A-Z]/g,"")}o.d(n,{Bk:function(){return a},CL:function(){return t},PK:function(){return r},Tc:function(){return l},VL:function(){return i},cH:function(){return s}})},82747:function(e,n,o){function r(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=e.length-2,o=e.substring(0,n),r=e.substring(n),i=0,s=n-7;for(let a=n;a>=1;a--)i+=o.charAt(n-a)*s--,s<2&&(s=9);let l=i%11<2?0:11-i%11;if(l!=r.charAt(0))return!1;n+=1,o=e.substring(0,n),i=0,s=n-7;for(let t=n;t>=1;t--)i+=o.charAt(n-t)*s--,s<2&&(s=9);return(l=i%11<2?0:11-i%11)==r.charAt(1)}function i(e){let n;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let o=0;for(let r=1;r<=9;r++)o+=parseInt(e.substring(r-1,r))*(11-r);if((10==(n=10*o%11)||11===n)&&(n=0),n!==parseInt(e.substring(9,10)))return!1;o=0;for(let i=1;i<=10;i++)o+=parseInt(e.substring(i-1,i))*(12-i);return(10==(n=10*o%11)||11===n)&&(n=0),n===parseInt(e.substring(10,11))}function s(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}o.d(n,{dI:function(){return s},sw:function(){return i},zk:function(){return r}})},48996:function(e,n,o){o.r(n);var r=o(85893),i=o(87536),s=o(67294),a=o(60664),l=o(61953),t=o(79072),d=o(75084),c=o(29630),u=o(82747),x=o(11163),h=o.n(x),m=o(58316),p=o(55343),f=o(9041),j=o(19604),v=o(39063),Z=o(80562),g=o(21609),y=o(41664),w=o.n(y),C=o(29308);let S=e=>{var n,o,x,y,S,P,$;let{handleNext:b,setDataGlobal:D,dataGlobal:z}=e,F=h(),[A,k]=(0,s.useState)(null),[I,L]=(0,s.useState)(),[O,q]=(0,s.useState)(!1),[N,E]=(0,s.useState)(null);console.log("\uD83D\uDE80 ~ validationCnpj:",N),console.log("\uD83D\uDE80 ~ dataGlobal:",z);let U=(0,s.useRef)(null),[T,M]=(0,s.useState)({showPassword:!1,showConfirmPassword:!1}),V=()=>{M({...T,showPassword:!T.showPassword})},W=e=>{e.preventDefault()},H=()=>{M({...T,showConfirmPassword:!T.showConfirmPassword})},J=e=>{e.preventDefault()},{register:_,handleSubmit:R,setValue:B,control:K,watch:G,formState:{errors:Q}}=(0,i.cI)(),X=e=>{18===e.length?(E((0,u.zk)(e)),(0,u.zk)(e)&&a.h.post("/registro-fornecedor/getData",{cnpj:e}).then(n=>{L(e),D({...n.data,...z,sectionOne:{cnpj:e,nomeFantasia:"",razaoSocial:"",email:""}})})):(D(null),L(null),E(null))},Y=F.query.u,ee=F.query.c,en=F.query.e,eo=F.query.n,er=async(e,n)=>{if(e&&n){let o={unidadeID:e,cnpj:n,nome:eo,email:en};await a.h.post("/login-fornecedor/setAcessLink",{data:o}).then((e,n)=>{if(e.data&&e.data[0]&&e.data[0].cnpj){var r;X(e.data[0].cnpj),B("cnpj",null===(r=o.response)||void 0===r?void 0:r.data[0].cnpj),B("email",o.email),B("nomeFantasia",o.nome),B("razaoSocial",o.nome),q(!0)}})}},ei=e=>{D({...z,sectionOne:{...null==z?void 0:z.sectionOne,nomeFantasia:e.nomeFantasia,razaoSocial:e.razaoSocial,email:e.email,senha:e.senha}}),b(e)};return(0,s.useEffect)(()=>{Y&&ee&&(er(Y,ee),setTimeout(()=>{var e;null==U||null===(e=U.current)||void 0===e||e.focus()},500))},[Y,ee]),(0,s.useEffect)(()=>{var e,n,o,r,i,s;L(null==z?void 0:null===(e=z.sectionOne)||void 0===e?void 0:e.cnpj),B("cnpj",null==z?void 0:null===(n=z.sectionOne)||void 0===n?void 0:n.cnpj),B("nomeFantasia",null==z?void 0:null===(o=z.sectionOne)||void 0===o?void 0:o.nomeFantasia),B("razaoSocial",null==z?void 0:null===(r=z.sectionOne)||void 0===r?void 0:r.razaoSocial),B("email",null==z?void 0:null===(i=z.sectionOne)||void 0===i?void 0:i.email),L(null==z?void 0:null===(s=z.sectionOne)||void 0===s?void 0:s.cnpj)},[]),(!O||z)&&(0,r.jsxs)("form",{onSubmit:R(ei),children:[(0,r.jsxs)(l.Z,{sx:{mb:4},children:[(0,r.jsx)(c.Z,{variant:"h5",children:"Informa\xe7\xf5es obrigat\xf3rios"}),(0,r.jsx)(c.Z,{sx:{color:"text.secondary"},children:"Insira as informa\xe7\xf5es obrigat\xf3rias"})]}),(0,r.jsxs)(t.ZP,{container:!0,spacing:5,children:[(0,r.jsx)(C.Z,{xs:12,md:6,title:"CNPJ",name:"cnpj",defaultValue:null==z?void 0:null===(n=z.sectionOne)||void 0===n?void 0:n.cnpj,mask:"cnpj",control:K,errors:null==Q?void 0:Q.cnpj,onChange:e=>X(e)}),!N&&null!==N&&(0,r.jsx)(t.ZP,{item:!0,xs:12,md:12,children:(0,r.jsx)(j.Z,{severity:"warning",children:"CNPJ inv\xe1lido!"})}),z&&(null==z?void 0:z.status)==="notAuthorized"&&(0,r.jsx)(t.ZP,{item:!0,xs:12,md:12,children:(0,r.jsx)(j.Z,{severity:"warning",children:"Antes de realizar o cadastro, \xe9 necess\xe1rio que uma f\xe1brica habilite o seu CNPJ como um fornecedor."})}),z&&(null==z?void 0:z.status)==="hasUserNotUnity"&&(0,r.jsxs)(t.ZP,{item:!0,xs:12,md:12,children:[(0,r.jsx)("h3",{children:"CNPJ j\xe1 cadastrado"}),(0,r.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",gap:8},children:[(0,r.jsxs)(l.Z,{children:[(0,r.jsxs)(l.Z,{sx:{display:"flex",gap:2},children:[(0,r.jsx)(c.Z,{sx:{color:"text.primary"},children:"Nome Fantasia:"}),(0,r.jsx)(c.Z,{sx:{color:"text.secondary"},children:null==z?void 0:null===(o=z.unity)||void 0===o?void 0:o.nomeFantasia})]}),(0,r.jsxs)(l.Z,{sx:{display:"flex",gap:2},children:[(0,r.jsx)(c.Z,{sx:{color:"text.primary"},children:"Email Institucional:"}),(0,r.jsx)(c.Z,{sx:{color:"text.secondary"},children:null==z?void 0:null===(x=z.unity)||void 0===x?void 0:x.email})]})]}),(0,r.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,r.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,r.jsxs)(p.Z,{fullWidth:!0,children:[(0,r.jsx)(m.Z,{htmlFor:"input-password",color:Q.senha?"error":"",children:"Senha"}),(0,r.jsx)(v.Z,{label:"Senha",id:"input-password",inputRef:U,type:T.showPassword?"text":"password",name:"senha",..._("senha"),endAdornment:(0,r.jsx)(f.Z,{position:"end",children:(0,r.jsx)(Z.Z,{edge:"end",onClick:V,onMouseDown:W,children:(0,r.jsx)(g.Z,{icon:T.showPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})}),error:Q.senha&&!0,helperText:Q.senha&&Q.senha.message})]})}),(0,r.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,r.jsxs)(p.Z,{fullWidth:!0,children:[(0,r.jsx)(m.Z,{htmlFor:"input-confirm-password",style:{color:Q.confirmaSenha&&"red"},children:"Confirme a senha"}),(0,r.jsx)(v.Z,{label:"Confirme a senha",name:"confirmaSenha",..._("confirmaSenha"),id:"input-confirm-password",type:T.showConfirmPassword?"text":"password",onChange(e){k(e.target.value)},endAdornment:(0,r.jsx)(f.Z,{position:"end",children:(0,r.jsx)(Z.Z,{edge:"end",onClick:H,onMouseDown:J,children:(0,r.jsx)(g.Z,{icon:T.showConfirmPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})}),error:Q.confirmaSenha&&!0}),(0,r.jsx)(c.Z,{variant:"caption",sx:{color:"error.main"},children:Q.confirmaSenha&&Q.confirmaSenha.message})]})})]})]})]}),z&&(null==z?void 0:z.status)==="hasUserHasUnity"&&(0,r.jsxs)(t.ZP,{item:!0,xs:12,md:12,children:[(0,r.jsx)("h3",{children:"CNPJ j\xe1 cadastrado"}),(0,r.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",gap:8},children:[(0,r.jsxs)(l.Z,{children:[(0,r.jsxs)(l.Z,{sx:{display:"flex",gap:2},children:[(0,r.jsx)(c.Z,{sx:{color:"text.primary"},children:"Nome Fantasia:"}),(0,r.jsx)(c.Z,{sx:{color:"text.secondary"},children:null==z?void 0:null===(y=z.unity)||void 0===y?void 0:y.nomeFantasia})]}),(0,r.jsxs)(l.Z,{sx:{display:"flex",gap:2},children:[(0,r.jsx)(c.Z,{sx:{color:"text.primary"},children:"Email Institucional:"}),(0,r.jsx)(c.Z,{sx:{color:"text.secondary"},children:null==z?void 0:null===(S=z.unity)||void 0===S?void 0:S.email})]})]}),(0,r.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,r.jsx)(c.Z,{href:"/fornecedor",component:w(),sx:{color:"primary.main",textDecoration:"none"},children:"Fazer login"}),(0,r.jsx)(c.Z,{href:"/fornecedor",component:w(),sx:{color:"primary.main",textDecoration:"none"},children:"Esqueceu a senha?"})]})]})]}),z&&(null==z?void 0:z.status)==="isAuthorized"&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(C.Z,{xs:12,md:6,title:"Nome Fantasia",name:"nomeFantasia",defaultValue:(null==z?void 0:z.sectionOne.nomeFantasia)||eo,required:!0,control:K,errors:null==Q?void 0:Q.nomeFantasia}),(0,r.jsx)(C.Z,{xs:12,md:6,title:"Raz\xe3o Social",name:"razaoSocial",defaultValue:(null==z?void 0:null===(P=z.sectionOne)||void 0===P?void 0:P.razaoSocial)||eo,required:!0,control:K,errors:null==Q?void 0:Q.razaoSocial}),(0,r.jsx)(C.Z,{xs:12,md:6,title:"Email Institucional",name:"email",defaultValue:(null==z?void 0:null===($=z.sectionOne)||void 0===$?void 0:$.email)||en,required:!0,control:K,errors:null==Q?void 0:Q.email}),(0,r.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,r.jsxs)(p.Z,{fullWidth:!0,children:[(0,r.jsx)(m.Z,{htmlFor:"input-password",color:Q.senha?"error":"",children:"Senha"}),(0,r.jsx)(v.Z,{label:"Senha",id:"input-password",type:T.showPassword?"text":"password",name:"senha",..._("senha",{required:"Campo obrigat\xf3rio",minLength:{value:4,message:"Senha deve ter pelo menos 4 caracteres"}}),endAdornment:(0,r.jsx)(f.Z,{position:"end",children:(0,r.jsx)(Z.Z,{edge:"end",onClick:V,onMouseDown:W,children:(0,r.jsx)(g.Z,{icon:T.showPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})}),error:!!Q.senha,helperText:Q.senha&&Q.senha.message})]})}),(0,r.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,r.jsxs)(p.Z,{fullWidth:!0,children:[(0,r.jsx)(m.Z,{htmlFor:"input-confirm-password",style:{color:Q.confirmaSenha&&"red"},children:"Confirme a senha"}),(0,r.jsx)(v.Z,{label:"Confirme a senha",name:"confirmaSenha",..._("confirmaSenha",{required:"Campo obrigat\xf3rio",validate:e=>e===G("senha")||"As senhas n\xe3o coincidem"}),id:"input-confirm-password",type:T.showConfirmPassword?"text":"password",onChange(e){k(e.target.value)},endAdornment:(0,r.jsx)(f.Z,{position:"end",children:(0,r.jsx)(Z.Z,{edge:"end",onClick:H,onMouseDown:J,children:(0,r.jsx)(g.Z,{icon:T.showConfirmPassword?"mdi:eye-outline":"mdi:eye-off-outline"})})}),error:!!Q.confirmaSenha}),(0,r.jsx)(c.Z,{variant:"caption",sx:{color:"error.main"},children:Q.confirmaSenha&&Q.confirmaSenha.message})]})})]}),(0,r.jsxs)(t.ZP,{item:!0,xs:12,children:[(0,r.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,r.jsx)(d.Z,{disabled:!0,variant:"contained",startIcon:(0,r.jsx)(g.Z,{icon:"mdi:chevron-left",fontSize:20}),children:"Anterior"}),(0,r.jsx)(d.Z,{disabled:(null==z?void 0:z.status)=="hasUserHasUnity"||(null==z?void 0:z.status)=="notAuthorized"||!I,type:"submit",variant:"contained",onClick:R,endIcon:(0,r.jsx)(g.Z,{icon:"mdi:chevron-right",fontSize:20}),children:"Proximo"})]}),(null==z?void 0:z.status)!=="hasUserHasUnity"||(null==z?void 0:z.status)=="notAuthorized"&&(0,r.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center",marginTop:10,flexWrap:"wrap",justifyContent:"start"},children:[(0,r.jsx)(c.Z,{sx:{mr:2,color:"text.secondary"},children:"Fazer login?"}),(0,r.jsx)(c.Z,{href:"/fornecedor",component:w(),sx:{color:"primary.main",textDecoration:"none"},children:"Login"})]})]})]})]})};n.default=S}}]);