(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6051],{66371:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/configuracoes/formularios/fornecedor",function(){return n(10640)}])},24527:function(e,t,n){"use strict";var s=n(85893),a=n(79072),r=n(49837),i=n(91359),o=n(61953),c=n(29630),l=n(67294),u=n(21609),d=n(66136);let x=e=>{let{xs:t,md:n,icon:x,title:m,color:h,subtitle:f,action:j,handleClick:p}=e,{settings:Z}=(0,l.useContext)(d.J6),g=Z.mode;return(0,s.jsx)(a.ZP,{item:!0,xs:t,md:n,children:(0,s.jsx)(r.Z,{onClick:p,className:"cursor-pointer ".concat(null!=h?h:""," ").concat("dark"==g?"hover:bg-[#232327]":"hover:bg-[#EEEEF1]"," ").concat(h&&"dark"==g?"!text-[#232327]":"","  shadow-xl transition-all"),children:(0,s.jsx)(i.Z,{className:"text-center",children:(0,s.jsxs)(o.Z,{display:"flex",flexDirection:"column",alignItems:"center",sx:{gap:3,padding:6},children:[(0,s.jsx)(u.Z,{icon:x,width:38}),(0,s.jsx)(c.Z,{variant:"h6",className:"!font-extrabold ".concat(h&&"dark"==g?"!text-[#232327]":""),children:m}),(0,s.jsx)(c.Z,{variant:"subtitle2",className:"".concat(h&&"dark"==g?"!text-[#232327]/80":""),children:f}),(0,s.jsxs)("div",{className:"flex items-center gap-1 text-[#4a8b57] ",children:[(0,s.jsx)(u.Z,{icon:"new"==j?"icon-park-solid:add-one":"grommet-icons:form-next-link",width:16}),(0,s.jsx)(c.Z,{variant:"body2",color:"primary",children:"new"==j?"Criar novo":"Acessar"})]})]})})})})};t.Z=x},93250:function(e,t,n){"use strict";var s=n(85893),a=n(49837),r=n(91359),i=n(69175);let o=e=>{let{result:t,columns:n,btnNew:o=!0,btnPrint:c=!0,btnBack:l,openModal:u,modaLog:d}=e;return(0,s.jsx)(a.Z,{children:(0,s.jsx)(r.Z,{sx:{pt:"0"},children:(0,s.jsx)(i.Z,{rows:t,columns:n,modaLog:d,buttonsHeader:{btnNew:o,btnPrint:c,btnBack:l,openModal:u}})})})};t.Z=o},70988:function(e,t,n){"use strict";n.r(t);var s=n(85893),a=n(79072);n(86501),n(47842),n(84220);var r=n(83830),i=n(40039);n(86887);var o=n(66136);n(21609);var c=n(67294);n(60664);var l=n(11163),u=n.n(l),d=n(24527),x=n(43816);let m=e=>{let{values:t}=e,{user:n,loggedUnity:l}=(0,c.useContext)(i.V),{setId:m}=(0,c.useContext)(r.X),[h,f]=(0,c.useState)([]),[j,p]=(0,c.useState)(null),[Z,g]=(0,c.useState)(!1);u();let{settings:w}=(0,c.useContext)(o.J6);w.mode;let v=e=>{m(e)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x.Z,{btnBack:!0,btnNew:!0,type:"new",partialRoute:!1}),(0,s.jsx)(a.ZP,{container:!0,spacing:4,children:t&&t.map((e,t)=>(0,s.jsx)(d.Z,{xs:12,md:3,icon:"fluent:form-multiple-48-regular",title:e.nome,subtitle:"Ciclo de ".concat(e.ciclo," dias"),action:"edit",handleClick:()=>v(e.id)},t))})]})};t.default=m},10640:function(e,t,n){"use strict";n.r(t);var s=n(85893),a=n(67294),r=n(60664);n(93250);var i=n(60565),o=n(83830),c=n(27823),l=n(47842),u=n(11163),d=n(46749),x=n(40039),m=n(70988);let h=()=>{let[e,t]=(0,a.useState)(null),n=(0,u.useRouter)(),h=n.pathname,{setTitle:f}=(0,a.useContext)(i.f),{id:j,setId:p}=(0,a.useContext)(o.X),{loggedUnity:Z}=(0,a.useContext)(x.V);return(0,a.useEffect)(()=>{let e=async()=>{console.log("getList"),await r.h.get("".concat(h,"/getList/").concat(Z.unidadeID)).then(e=>{t(e.data),f({title:"Formul\xe1rios de Fornecedor",subtitle:{id:j,count:e.data.length,new:!1}})})};e()},[j]),(0,d.OL)(h,[{title:"ID",field:"id",size:.2},{title:"Nome",field:"nome",size:.8}]),(0,s.jsx)(s.Fragment,{children:e?j&&j>0?(0,s.jsx)(c.Z,{id:j}):(0,s.jsx)(m.default,{values:e}):(0,s.jsx)(l.Z,{show:!0})})};t.default=h}},function(e){e.O(0,[1797,9525,7282,2350,7823,9774,2888,179],function(){return e(e.s=66371)}),_N_E=e.O()}]);