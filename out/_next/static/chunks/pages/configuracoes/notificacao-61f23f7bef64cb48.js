(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[444],{65576:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/configuracoes/notificacao",function(){return n(19598)}])},47842:function(e,t,n){"use strict";var a=n(85893),r=n(70754);let s=e=>{let{show:t,title:n}=e;return t&&(0,a.jsx)("div",{className:"absolute inset-0 flex items-center justify-center rounded-lg bg-gray-900 z-50",children:(0,a.jsxs)("div",{className:"flex flex-col justify-center items-center gap-2 ",children:[(0,a.jsx)(r.Z,{color:"primary"}),(0,a.jsx)("p",{className:"text-sm opacity-80 text-white ",children:null!=n?n:"Carregando..."})]})})};t.Z=s},19598:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var a=n(85893),r=n(61953),s=n(49837),o=n(91359),c=n(29630),i=n(11163),l=n.n(i),u=n(67294),d=n(87536),x=n(5707),h=n(60664),m=n(40039),j=n(47842),p=n(86501),Z=n(46749),f=n(21609),g=n(87462),y=n(63366),v=n(86010),b=n(94780),w=n(78884),D=n(67074),_=n(1588),N=n(34867);function C(e){return(0,N.Z)("MuiTableContainer",e)}(0,_.Z)("MuiTableContainer",["root"]);let E=["className","component"],S=e=>{let{classes:t}=e;return(0,b.Z)({root:["root"]},C,t)},k=(0,D.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),I=u.forwardRef(function(e,t){let n=(0,w.Z)({props:e,name:"MuiTableContainer"}),{className:r,component:s="div"}=n,o=(0,y.Z)(n,E),c=(0,g.Z)({},n,{component:s}),i=S(c);return(0,a.jsx)(k,(0,g.Z)({ref:t,as:s,className:(0,v.Z)(i.root,r),ownerState:c},o))});var T=n(90244),M=n(93978),P=n(69417),R=n(5605),O=n(39807),X=n(67569);let z=e=>{let{category:t,values:n,register:r}=e;return(0,a.jsx)(I,{children:(0,a.jsxs)(T.Z,{sx:{minWidth:500},children:[(0,a.jsx)(M.Z,{sx:{backgroundColor:e=>"light"===e.palette.mode?"grey.50":"background.default"},children:(0,a.jsxs)(P.Z,{children:[(0,a.jsx)(R.Z,{sx:{py:3,width:"60%"},children:"Rotina"}),(0,a.jsx)(R.Z,{sx:{py:3},align:"center",children:"E-mail"}),(0,a.jsx)(R.Z,{sx:{py:3},align:"center",children:"Alerta"})]})}),(0,a.jsx)(O.Z,{children:n&&n.map((e,n)=>(0,a.jsxs)(P.Z,{hover:!0,children:[(0,a.jsx)(R.Z,{children:e.nome}),(0,a.jsx)(R.Z,{align:"center",sx:{pt:"0 !important",pb:"0 !important"},children:(0,a.jsx)(X.Z,{xs:1,md:1,name:"[".concat(t,"].rotinas.[").concat(n,"].email"),value:e.email,register:r})}),(0,a.jsx)(R.Z,{align:"center",sx:{pt:"0 !important",pb:"0 !important"},children:(0,a.jsx)(X.Z,{xs:1,md:1,name:"[".concat(t,"].rotinas.[").concat(n,"].alerta"),value:e.alerta,register:r})})]},n))})]})})},A=()=>{let e=l(),t=e.pathname,[n,i]=(0,u.useState)(null),{user:g,loggedUnity:y}=(0,u.useContext)(m.V),{handleSubmit:v,reset:b,register:w,formState:{errors:D}}=(0,d.cI)(),_=async e=>{try{await h.h.post("".concat(t,"/updateData/").concat(g.usuarioID,"/").concat(y.unidadeID),e),p.ZP.success(Z.OD.successUpdate)}catch(n){console.log(n)}},N=async()=>{try{let e=await h.h.get("".concat(t,"/getData/").concat(g.usuarioID,"/").concat(y.unidadeID));console.log("\uD83D\uDE80 ~ getData:",e.data),i(e.data),b(e.data)}catch(n){console.log(n)}};return(0,u.useEffect)(()=>{N()},[]),(0,a.jsx)(a.Fragment,{children:n?(0,a.jsxs)("form",{onSubmit:v(_),children:[(0,a.jsx)(x.Z,{btnSave:!0,handleSubmit:()=>v(_),type:"edit"}),(0,a.jsx)(r.Z,{display:"flex",flexDirection:"column",gap:4,children:n&&n.map((e,t)=>e.rotinas.length>0&&(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(o.Z,{children:(0,a.jsxs)(r.Z,{display:"flex",alignItems:"center",gap:4,children:[(0,a.jsx)(f.Z,{icon:e.icone,style:{color:e.cor},fontSize:24}),(0,a.jsx)(c.Z,{variant:"body",className:"font-medium",children:e.nome})]})}),(0,a.jsx)(o.Z,{children:(0,a.jsx)(z,{category:t,values:e.rotinas,register:w})})]},t))})]}):(0,a.jsx)(j.Z,{show:!0})})},F=()=>(0,a.jsx)(A,{});var U=F}},function(e){e.O(0,[4186,1445,1111,5999,7536,6668,2187,2368,9297,9774,2888,179],function(){return e(e.s=65576)}),_N_E=e.O()}]);