(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9336],{45765:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/registro/sections/SectionThree",function(){return n(93778)}])},82747:function(e,o,n){"use strict";function i(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let o=e.length-2,n=e.substring(0,o),i=e.substring(o),r=0,t=o-7;for(let s=o;s>=1;s--)r+=n.charAt(o-s)*t--,t<2&&(t=9);let l=r%11<2?0:11-r%11;if(l!=i.charAt(0))return!1;o+=1,n=e.substring(0,o),r=0,t=o-7;for(let c=o;c>=1;c--)r+=n.charAt(o-c)*t--,t<2&&(t=9);return(l=r%11<2?0:11-r%11)==i.charAt(1)}function r(e){let o;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=0;for(let i=1;i<=9;i++)n+=parseInt(e.substring(i-1,i))*(11-i);if((10==(o=10*n%11)||11===o)&&(o=0),o!==parseInt(e.substring(9,10)))return!1;n=0;for(let r=1;r<=10;r++)n+=parseInt(e.substring(r-1,r))*(12-r);return(10==(o=10*n%11)||11===o)&&(o=0),o===parseInt(e.substring(10,11))}function t(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}n.d(o,{dI:function(){return t},sw:function(){return r},zk:function(){return i}})},93778:function(e,o,n){"use strict";n.r(o);var i=n(85893),r=n(60664),t=n(61953),s=n(79072),l=n(75084),c=n(29630),a=n(86501),d=n(21609),u=n(17288);n(61310);var x=n(67294),f=n(82747),v=n(39976);let h=e=>{var o,n,h,p,m,j,Z;let{handlePrev:y,dataGlobal:g,setDataGlobal:D}=e,[I,b]=(0,x.useState)(!0),[w,O]=(0,x.useState)(!1),T=(0,u.a)(),{createNewNotification:E}=(0,x.useContext)(v.u),C=()=>{if(g.sectionOne.email&&(0,f.dI)(g.sectionOne.email)){let e={cnpj:g.sectionOne.cnpj,nomeFornecedor:g.sectionOne.nomeFantasia,destinatario:g.sectionOne.email};r.h.post("/registro-fornecedor/sendMailNewFornecedor",{data:e}).then(e=>{a.ZP.success("E-mail enviado com sucesso")}).catch(e=>{console.error("Erro ao enviar email",e)})}},_=e=>{let o={titulo:"Cadastro realizado com sucesso",descricao:"Ol\xe1 ".concat(e.factory.nomeFantasia,", o fornecedor ").concat(g.sectionOne.nomeFantasia," acabou de realizar o cadastro."),url:null,urlID:null,tipoNotificacaoID:1,usuarioGeradorID:null,usuarioID:0,unidadeID:e.factory.unidadeID,papelID:1},n={titulo:"Cadastro realizado com sucesso",descricao:"Ol\xe1 ".concat(g.sectionOne.nomeFantasia,", seja bem-vindo(a) ao GEDagro!"),url:null,urlID:null,tipoNotificacaoID:1,usuarioGeradorID:null,usuarioID:e.supplier.usuarioID,unidadeID:e.supplier.unidadeID};E(n),E(o)},N=()=>{O(!0),r.h.post("/registro-fornecedor/registerNew",{data:g}).then(e=>{if(201===e.status)a.ZP.error(e.data.message);else{_(e.data),a.ZP.success("Cadastro efetuado com sucesso!");let{cnpj:o,senha:n}=null==g?void 0:g.sectionOne;return C(),T.loginFornecedor({cnpj:o,password:n,rememberMe:I})}}).then(()=>{setTimeout(()=>{a.ZP.success("Efetuando login no sistema")},2e3)}).catch(e=>{a.ZP.error("Erro: "+e.message)}).finally(()=>{O(!1)})};return(0,x.useEffect)(()=>{var e,o,n,i,r,t;let s={logradouro:null==g?void 0:null===(e=g.sectionTwo)||void 0===e?void 0:e.logradouro,numero:null==g?void 0:null===(o=g.sectionTwo)||void 0===o?void 0:o.numero,complemento:null==g?void 0:null===(n=g.sectionTwo)||void 0===n?void 0:n.complemento,bairro:null==g?void 0:null===(i=g.sectionTwo)||void 0===i?void 0:i.bairro,cidade:null==g?void 0:null===(r=g.sectionTwo)||void 0===r?void 0:r.cidade,uf:null==g?void 0:null===(t=g.sectionTwo)||void 0===t?void 0:t.uf},l=Object.entries(s).map(e=>{let[o,n]=e;if(n)return"".concat(n,", ")}).join("").slice(0,-2)+".";D({...g,sectionThree:{endereco:l}})},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.Z,{sx:{mb:4},children:[(0,i.jsx)(c.Z,{variant:"h5",children:"Verifique as informa\xe7\xf5es"}),(0,i.jsx)(c.Z,{sx:{color:"text.secondary"},children:"Envie se estiver tudo certo"})]}),(0,i.jsx)(s.ZP,{container:!0,spacing:5,children:(0,i.jsxs)(s.ZP,{item:!0,xs:12,children:[(0,i.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,i.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)(c.Z,{variant:"caption",sx:{color:"text.secondary"},children:"CNPJ"}),(0,i.jsx)(c.Z,{sx:{color:"text.primary"},children:null==g?void 0:null===(o=g.sectionOne)||void 0===o?void 0:o.cnpj})]}),(0,i.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)(c.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Nome Fantasia"}),(0,i.jsx)(c.Z,{sx:{color:"text.primary"},children:null==g?void 0:null===(n=g.sectionOne)||void 0===n?void 0:n.nomeFantasia})]}),(0,i.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)(c.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Raz\xe3o Social"}),(0,i.jsx)(c.Z,{sx:{color:"text.primary"},children:null==g?void 0:null===(h=g.sectionOne)||void 0===h?void 0:h.razaoSocial})]}),(0,i.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)(c.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Email Institucional"}),(0,i.jsx)(c.Z,{sx:{color:"text.primary"},children:null==g?void 0:null===(p=g.sectionOne)||void 0===p?void 0:p.email})]}),(0,i.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)(c.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Telefone"}),(0,i.jsx)(c.Z,{sx:{color:"text.primary"},children:null==g?void 0:null===(m=g.sectionTwo)||void 0===m?void 0:m.telefone})]}),(0,i.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)(c.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Cep"}),(0,i.jsx)(c.Z,{sx:{color:"text.primary"},children:null==g?void 0:null===(j=g.sectionTwo)||void 0===j?void 0:j.cep})]}),(0,i.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)(c.Z,{variant:"caption",sx:{color:"text.secondary"},children:"Endere\xe7o"}),(0,i.jsx)(c.Z,{sx:{color:"text.primary"},children:null==g?void 0:null===(Z=g.sectionThree)||void 0===Z?void 0:Z.endereco})]})]}),(0,i.jsxs)(t.Z,{sx:{display:"flex",justifyContent:"space-between",mt:5},children:[(0,i.jsx)(l.Z,{color:"secondary",variant:"contained",onClick:y,startIcon:(0,i.jsx)(d.Z,{icon:"mdi:chevron-left",fontSize:20}),children:"Anterior"}),(0,i.jsx)(l.Z,{type:"submit",onClick:N,color:"success",variant:"contained",disabled:w,children:"Concluir"})]})]})})]})};o.default=h},61310:function(){}},function(e){e.O(0,[2521,9774,2888,179],function(){return e(e.s=45765)}),_N_E=e.O()}]);