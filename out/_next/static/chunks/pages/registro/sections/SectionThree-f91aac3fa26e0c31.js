(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9336],{45765:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/registro/sections/SectionThree",function(){return o(93778)}])},82747:function(e,n,o){"use strict";function i(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=e.length-2,o=e.substring(0,n),i=e.substring(n),r=0,t=n-7;for(let s=n;s>=1;s--)r+=o.charAt(n-s)*t--,t<2&&(t=9);let l=r%11<2?0:11-r%11;if(l!=i.charAt(0))return!1;n+=1,o=e.substring(0,n),r=0,t=n-7;for(let c=n;c>=1;c--)r+=o.charAt(n-c)*t--,t<2&&(t=9);return(l=r%11<2?0:11-r%11)==i.charAt(1)}function r(e){let n;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let o=0;for(let i=1;i<=9;i++)o+=parseInt(e.substring(i-1,i))*(11-i);if((10==(n=10*o%11)||11===n)&&(n=0),n!==parseInt(e.substring(9,10)))return!1;o=0;for(let r=1;r<=10;r++)o+=parseInt(e.substring(r-1,r))*(12-r);return(10==(n=10*o%11)||11===n)&&(n=0),n===parseInt(e.substring(10,11))}function t(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}o.d(n,{dI:function(){return t},sw:function(){return r},zk:function(){return i}})},93778:function(e,n,o){"use strict";o.r(n);var i=o(85893),r=o(60664),t=o(61953),s=o(79072),l=o(75084),c=o(29630),a=o(86501),d=o(21609),u=o(17288);o(61310);var x=o(67294),f=o(82747);let v=e=>{var n,o,v,h,p,m,j;let{handlePrev:Z,dataGlobal:y,setDataGlobal:g}=e,[w,b]=(0,x.useState)(!0),[T,E]=(0,x.useState)(!1),O=(0,u.a)(),_=()=>{if(y.sectionOne.email&&(0,f.dI)(y.sectionOne.email)){let e={cnpj:y.sectionOne.cnpj,nomeFornecedor:y.sectionOne.nomeFantasia,destinatario:y.sectionOne.email};r.h.post("/registro-fornecedor/sendMailNewFornecedor",{data:e}).then(e=>{a.ZP.success("E-mail enviado com sucesso")}).catch(e=>{console.error("Erro ao enviar email",e)})}},P=()=>{E(!0),r.h.post("/registro-fornecedor/registerNew",{data:y}).then(e=>{if(201===e.status)a.ZP.error(e.data.message);else{a.ZP.success("Cadastro efetuado com sucesso!");let{cnpj:n,senha:o}=null==y?void 0:y.sectionOne;return _(),O.loginFornecedor({cnpj:n,password:o,rememberMe:w})}}).then(()=>{setTimeout(()=>{a.ZP.success("Efetuando login no sistema")},2e3)}).catch(e=>{a.ZP.error("Erro: "+e.message)}).finally(()=>{E(!1)})};return(0,x.useEffect)(()=>{var e,n,o,i,r,t;let s={logradouro:null==y?void 0:null===(e=y.sectionTwo)||void 0===e?void 0:e.logradouro,numero:null==y?void 0:null===(n=y.sectionTwo)||void 0===n?void 0:n.numero,complemento:null==y?void 0:null===(o=y.sectionTwo)||void 0===o?void 0:o.complemento,bairro:null==y?void 0:null===(i=y.sectionTwo)||void 0===i?void 0:i.bairro,cidade:null==y?void 0:null===(r=y.sectionTwo)||void 0===r?void 0:r.cidade,uf:null==y?void 0:null===(t=y.sectionTwo)||void 0===t?void 0:t.uf},l=Object.entries(s).map(e=>{let[n,o]=e;if(o)return"".concat(o,", ")}).join("").slice(0,-2)+".";g({...y,sectionThree:{endereco:l}})},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.Z,{sx:{mb:4},children:[(0,i.jsx)(c.Z,{variant:"h5",children:"Verifique as informa\xe7\xf5es"}),(0,i.jsx)(c.Z,{sx:{color:"text.secondary"},children:"Envie se estiver tudo certo"})]}),(0,i.jsx)(s.ZP,{container:!0,spacing:5,children:(0,i.jsxs)(s.ZP,{item:!0,xs:12,children:[(0,i.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,i.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)(c.Z,{variant:"caption",sx:{color:"text.secondary"},children:"CNPJ"}),(0,i.jsx)(c.Z,{sx:{color:"text.primary"},children:null==y?void 0:null===(n=y.sectionOne)||void 0===n?void 0:n.cnpj})]}),(0,i.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)(c.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Nome Fantasia"}),(0,i.jsx)(c.Z,{sx:{color:"text.primary"},children:null==y?void 0:null===(o=y.sectionOne)||void 0===o?void 0:o.nomeFantasia})]}),(0,i.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)(c.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Raz\xe3o Social"}),(0,i.jsx)(c.Z,{sx:{color:"text.primary"},children:null==y?void 0:null===(v=y.sectionOne)||void 0===v?void 0:v.razaoSocial})]}),(0,i.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)(c.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Email Institucional"}),(0,i.jsx)(c.Z,{sx:{color:"text.primary"},children:null==y?void 0:null===(h=y.sectionOne)||void 0===h?void 0:h.email})]}),(0,i.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)(c.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Telefone"}),(0,i.jsx)(c.Z,{sx:{color:"text.primary"},children:null==y?void 0:null===(p=y.sectionTwo)||void 0===p?void 0:p.telefone})]}),(0,i.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)(c.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Cep"}),(0,i.jsx)(c.Z,{sx:{color:"text.primary"},children:null==y?void 0:null===(m=y.sectionTwo)||void 0===m?void 0:m.cep})]}),(0,i.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)(c.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Endere\xe7o"}),(0,i.jsx)(c.Z,{sx:{color:"text.primary"},children:null==y?void 0:null===(j=y.sectionThree)||void 0===j?void 0:j.endereco})]})]}),(0,i.jsxs)(t.Z,{sx:{display:"flex",justifyContent:"space-between",mt:5},children:[(0,i.jsx)(l.Z,{color:"secondary",variant:"contained",onClick:Z,startIcon:(0,i.jsx)(d.Z,{icon:"mdi:chevron-left",fontSize:20}),children:"Anterior"}),(0,i.jsx)(l.Z,{type:"submit",onClick:P,color:"success",variant:"contained",disabled:T,children:"Concluir"})]})]})})]})};n.default=v},61310:function(){}},function(e){e.O(0,[2521,9774,2888,179],function(){return e(e.s=45765)}),_N_E=e.O()}]);