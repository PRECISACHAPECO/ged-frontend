(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1421],{5071:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/formularios/recebimento-mp/novo",function(){return n(7224)}])},24527:function(e,t,n){"use strict";var o=n(85893),i=n(79072),r=n(49837),s=n(91359),a=n(61953),l=n(29630),c=n(67294),u=n(21609),d=n(66136);let m=e=>{let{xs:t,md:n,icon:m,title:x,subtitle:f,action:h,handleClick:p}=e,{settings:g}=(0,c.useContext)(d.J6),j=g.mode;return(0,o.jsx)(i.ZP,{item:!0,xs:t,md:n,children:(0,o.jsx)(r.Z,{onClick:p,className:"cursor-pointer ".concat("dark"==j?"hover:bg-[#232327]":"hover:bg-[#EEEEF1]","  shadow-xl transition-all"),children:(0,o.jsx)(s.Z,{className:"text-center",children:(0,o.jsxs)(a.Z,{display:"flex",flexDirection:"column",alignItems:"center",sx:{gap:3,padding:6},children:[(0,o.jsx)(u.Z,{icon:m,width:38}),(0,o.jsx)(l.Z,{variant:"h6",className:"!font-extrabold",children:x}),(0,o.jsx)(l.Z,{variant:"subtitle2",children:f}),(0,o.jsxs)("div",{className:"flex items-center gap-1 text-[#4a8b57] ",children:[(0,o.jsx)(u.Z,{icon:"new"==h?"icon-park-solid:add-one":"grommet-icons:form-next-link",width:16}),(0,o.jsx)(l.Z,{variant:"body2",color:"primary",children:"new"==h?"Criar novo":"Acessar"})]})]})})})})};t.Z=m},7224:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var o=n(85893);n(96729);var i=n(61953),r=n(54225),s=n(79072),a=n(86501),l=n(47842);n(84220);var c=n(83830),u=n(40039);n(86887);var d=n(66136),m=n(87536),x=n(21609),f=n(67294),h=n(60664),p=n(11163),g=n.n(p),j=n(24527);let b=()=>{let{user:e,loggedUnity:t}=(0,f.useContext)(u.V),{setId:n}=(0,f.useContext)(c.X),[p,b]=(0,f.useState)([]),[v,Z]=(0,f.useState)(null),[w,y]=(0,f.useState)(!1),C=g(),{settings:_}=(0,f.useContext)(d.J6);_.mode;let{reset:k,register:D,getValues:E,setValue:I,control:N,watch:P,handleSubmit:S,clearErrors:M,setError:X,formState:{errors:F}}=(0,m.cI)(),J=async o=>{try{let i={model:o.model,profissionalID:e.profissionalID,usuarioID:e.usuarioID,unidadeID:t.unidadeID},r=await h.h.post("/formularios/recebimento-mp/insertData",i);r&&(a.ZP.success("Novo formul\xe1rio criado!"),n(r.data.recebimentoMpID),C.push("/formularios/recebimento-mp/"))}catch(s){console.log(s)}},O=async()=>{try{y(!0);let e=await h.h.get("/formularios/recebimento-mp/getModels/".concat(t.unidadeID));console.log(e.data),1===e.data.length?J({model:e.data[0]}):(b(e.data),y(!1))}catch(n){console.log(n)}},T=async e=>{try{J({model:{id:e}})}catch(t){console.log(t)}};return(0,f.useEffect)(()=>{O()},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Z,{show:w}),(0,o.jsx)("form",{onSubmit:S(J),children:(0,o.jsxs)(i.Z,{display:"flex",flexDirection:"column",sx:{gap:4},children:[(0,o.jsx)("div",{children:(0,o.jsx)(r.Z,{onClick(){n(null),C.push("/formularios/recebimento-mp/")},type:"button",variant:"outlined",color:"primary",size:"medium",children:(0,o.jsx)(x.Z,{icon:"grommet-icons:form-previous-link"})})}),(0,o.jsx)(s.ZP,{container:!0,spacing:4,children:p&&p.length>1&&p.map((e,t)=>(0,o.jsx)(j.Z,{xs:12,md:3,icon:"fluent:form-multiple-48-regular",title:e.nome,action:"new",subtitle:"Ciclo de ".concat(e.ciclo," dias"),handleClick:()=>T(e.id)},t))})]})})]})};var v=n(60565);let Z=()=>{let{setTitle:e}=(0,f.useContext)(v.f);return(0,f.useEffect)(()=>{e({title:"Recebimento de Mat\xe9ria Prima",subtitle:{id:null,count:null,new:!0}})},[]),(0,o.jsx)(b,{})};var w=Z}},function(e){e.O(0,[1515,7842,8934,5815,9152,6729,9774,2888,179],function(){return e(e.s=5071)}),_N_E=e.O()}]);