(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2752],{68374:function(e,o,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/formularios/recebimento-mp",function(){return a(69932)}])},93250:function(e,o,a){"use strict";var t=a(85893),n=a(49837),s=a(91359),r=a(69175);let i=e=>{let{result:o,columns:a,btnNew:i=!0,btnPrint:l=!0,btnBack:d,openModal:c,modaLog:u}=e;return(0,t.jsx)(n.Z,{children:(0,t.jsx)(s.Z,{sx:{pt:"0"},children:(0,t.jsx)(r.Z,{rows:o,columns:a,modaLog:u,buttonsHeader:{btnNew:i,btnPrint:l,btnBack:d,openModal:c}})})})};o.Z=i},69932:function(e,o,a){"use strict";a.r(o),a.d(o,{default:function(){return G}});var t=a(85893),n=a(67294),s=a(60664),r=a(93250),i=a(87536),l=a(56531),d=a(99734),c=a(34282),u=a(29308),p=a(23895),m=a(61953),x=a(49837),f=a(91359),v=a(29630),h=a(79072),g=a(55343),D=a(19604),b=a(11163),j=a.n(b),I=a(46749),Z=a(86887),C=a(83830),y=a(40039),F=a(39976),S=a(47842),w=a(86501),E=a(66136),P=a(80377);a(27304);var A=a(50287),M=a(84220),N=a(21609);let V=e=>{var o,a,r,i,d,c,p,m;let{modeloID:x,values:f,fields:v,fornecedor:g,setFornecedor:D,disabled:b,register:Z,errors:F,setValue:S,control:w,getAddressByCep:P}=e,{user:V,loggedUnity:H}=(0,n.useContext)(y.V),[R,k]=(0,n.useState)({}),[_,O]=(0,n.useState)([]),[q,z]=(0,n.useState)([]),{settings:B}=(0,n.useContext)(E.J6),L=B.mode,T=j(),{setId:X}=(0,n.useContext)(C.X),G=(e,o,a,t)=>{let n=new Date(a),s=(0,I.HD)(e,n,t);k(e=>({...e,[o]:s}))},W=async()=>{let e=await s.h.post("/cadastros/profissional/getProfissionaisAssinatura",{formularioID:2,modeloID:x});O(e.data.preenche),K(e.data.preenche)},J=async()=>{let e=await s.h.post("/formularios/fornecedor/getFornecedoresAprovados",{unidadeID:H.unidadeID});z(e.data)},K=e=>{let o=V.profissionalID,a=e.find(e=>e.id===o);a&&a.id>0&&S("fieldsHeader.profissional",a)},Q=()=>{X(g.id),T.push("/formularios/fornecedor/")};return(0,n.useEffect)(()=>{W(),J()},[]),(0,t.jsxs)(h.ZP,{container:!0,spacing:4,children:[(0,t.jsx)(A.Z,{xs:12,md:2,title:"Data da abertura",name:"fieldsHeader.abertoPor.dataInicio",type:"date",value:null==f?void 0:null===(o=f.abertoPor)||void 0===o?void 0:o.dataInicio,disabled:!0,control:w}),(0,t.jsx)(u.Z,{xs:12,md:2,title:"Hora da abertura",name:"fieldsHeader.abertoPor.horaInicio",type:"time",disabled:!0,register:Z,control:w}),(0,t.jsx)(u.Z,{xs:12,md:8,title:"Profissional que abriu",name:"fieldsHeader.abertoPor.profissional.nome",value:null==f?void 0:null===(a=f.abertoPor)||void 0===a?void 0:null===(r=a.profissional)||void 0===r?void 0:r.nome,disabled:!0,register:Z,control:w}),(0,t.jsx)(A.Z,{xs:12,md:2,title:"Data da avalia\xe7\xe3o",name:"fieldsHeader.data",type:"date",value:null!==(m=null==f?void 0:f.data)&&void 0!==m?m:new Date,disabled:b,register:Z,control:w,setDateFormat:G,typeValidation:"dataPassado",daysValidation:365,dateStatus:R,errors:null==F?void 0:null===(i=F.fieldsHeader)||void 0===i?void 0:i.data}),(0,t.jsx)(u.Z,{xs:12,md:2,title:"Hora da avalia\xe7\xe3o",name:"fieldsHeader.hora",type:"time",disabled:b,register:Z,control:w,errors:null==F?void 0:null===(d=F.fieldsHeader)||void 0===d?void 0:d.hora}),(0,t.jsx)(M.Z,{xs:12,md:4,title:"Profissional preenchimento",name:"fieldsHeader.profissional",type:"string",options:_,disabled:b,register:Z,setValue:S,control:w,errors:null==F?void 0:null===(c=F.fieldsHeader)||void 0===c?void 0:c.profissional}),(0,t.jsx)(l.Z,{register:Z,errors:F,setValue:S,control:w,fields:v,values:v,getAddressByCep:P,disabled:b}),(0,t.jsx)(M.Z,{xs:12,md:4,title:"Fornecedor",name:"fieldsHeader.fornecedor",type:"string",options:q,onChange:e=>D(e),value:null==f?void 0:f.fornecedor,disabled:b,register:Z,setValue:S,control:w,errors:null==F?void 0:null===(p=F.fieldsHeader)||void 0===p?void 0:p.fornecedor}),(0,t.jsx)(h.ZP,{item:!0,xs:12,md:4,children:g&&g.id>0&&(0,t.jsxs)("div",{onClick:Q,className:"".concat("dark"==L?"bg-[#18181a]":"bg-[#EEEEF1]"," flex flex-col gap-2 p-4 rounded-xl cursor-pointer relative"),children:[(0,t.jsx)(N.Z,{icon:"uil:external-link-alt",className:"absolute top-4 right-4 text-xl"}),(0,t.jsx)("p",{className:"text-xs",children:"Dados do Fornecedor"}),(0,t.jsxs)("p",{children:["Nome: ",g.nome]}),(0,t.jsxs)("p",{children:["Telefone: ",g.telefone]}),(0,t.jsxs)("p",{children:["Cidade: ",g.cidade]})]})})]})},H=e=>{var o,a,r,i;let{modeloID:l,values:d,disabled:c,register:p,errors:m,setValue:v,control:g}=e,{user:D}=(0,n.useContext)(y.V),[b,j]=(0,n.useState)({}),[Z,C]=(0,n.useState)([]),F=(e,o,a,t)=>{let n=new Date(a),s=(0,I.HD)(e,n,t);j(e=>({...e,[o]:s}))},S=async()=>{let e=await s.h.post("/cadastros/profissional/getProfissionaisAssinatura",{formularioID:2,modeloID:l});console.log("\uD83D\uDE80 ~ response.data:",e.data),C(e.data.aprova),w(e.data.aprova)},w=e=>{let o=D.profissionalID,a=e.find(e=>e.id===o);a&&a.id>0&&v("fieldsFooter.profissional",a)};return(0,n.useEffect)(()=>{S()},[]),(0,t.jsx)(x.Z,{children:(0,t.jsx)(f.Z,{children:(0,t.jsxs)(h.ZP,{container:!0,spacing:4,children:[(0,t.jsx)(A.Z,{xs:12,md:2,title:"Data da conclus\xe3o",name:"fieldsFooter.dataConclusao",type:"date",value:null!==(i=null==d?void 0:d.dataConclusao)&&void 0!==i?i:new Date,disabled:c,register:p,control:g,setDateFormat:F,typeValidation:"dataPassado",daysValidation:365,dateStatus:b,errors:null==m?void 0:null===(o=m.fieldsFooter)||void 0===o?void 0:o.dataConclusao}),(0,t.jsx)(u.Z,{xs:12,md:2,title:"Hora da conclus\xe3o",name:"fieldsFooter.horaConclusao",type:"time",disabled:c,register:p,control:g,errors:null==m?void 0:null===(a=m.fieldsFooter)||void 0===a?void 0:a.horaConclusao}),(0,t.jsx)(M.Z,{xs:12,md:8,title:"Profissional que aprova",name:"fieldsFooter.profissional",type:"string",options:null!=Z?Z:[],disabled:c,register:p,setValue:v,control:g,errors:null==m?void 0:null===(r=m.fieldsFooter)||void 0===r?void 0:r.profissional})]})})})};var R=a(54225),k=a(44373),_=a(3893);let O=e=>{var o,a,n,s,r,i,l,d,c,p,m,x;let{value:f,index:v,apresentacoes:h,setValue:g,register:D,control:b,errors:j}=e;return console.log("\uD83D\uDE80 ~ value:",f),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.Z,{xs:12,md:2,title:"Quantidade",name:"produtos[".concat(v,"].quantidade"),register:D,control:b,required:!0,errors:null==j?void 0:null===(o=j.produtos)||void 0===o?void 0:null===(a=o[v])||void 0===a?void 0:a.quantidade}),(0,t.jsx)(A.Z,{xs:12,md:2,required:!0,title:"Data da fabrica\xe7\xe3o",value:f.dataFabricacao,name:"produtos[".concat(v,"].dataFabricacao"),control:b,errors:null==j?void 0:null===(n=j.produtos)||void 0===n?void 0:null===(s=n[v])||void 0===s?void 0:s.dataFabricacao}),(0,t.jsx)(u.Z,{xs:12,md:2,title:"N\xba Lote",name:"produtos[".concat(v,"].lote"),required:!0,register:D,control:b,errors:null==j?void 0:null===(r=j.produtos)||void 0===r?void 0:null===(i=r[v])||void 0===i?void 0:i.lote}),(0,t.jsx)(M.Z,{xs:12,md:2,title:"Apresenta\xe7\xe3o",name:"produtos[".concat(v,"].apresentacao"),type:"string",options:null!=h?h:[],required:!0,register:D,setValue:g,control:b,errors:null==j?void 0:null===(l=j.produtos)||void 0===l?void 0:null===(d=l[v])||void 0===d?void 0:d.apresentacao}),(0,t.jsx)(u.Z,{xs:12,md:2,title:"NF",name:"produtos[".concat(v,"].nf"),required:!0,register:D,control:b,errors:null==j?void 0:null===(c=j.produtos)||void 0===c?void 0:null===(p=c[v])||void 0===p?void 0:p.nf}),(0,t.jsx)(A.Z,{xs:12,md:2,required:!0,title:"Data de validade",value:f.dataValidade,name:"produtos[".concat(v,"].dataValidade"),control:b,errors:null==j?void 0:null===(m=j.produtos)||void 0===m?void 0:null===(x=m[v])||void 0===x?void 0:x.dataValidade})]})},q=e=>{let{recebimentoMpID:o,fornecedorID:a,getValues:r,setValue:i,register:l,control:d,errors:c}=e,[u,p]=(0,n.useState)([]),[x,f]=(0,n.useState)([]),[g,D]=(0,n.useState)(!1),b=async()=>{try{if(a&&a>0){let e=await s.h.post("/cadastros/produto/getProdutosFornecedor",{recebimentoMpID:o,fornecedorID:a});p(e.data),i("produtos",e.data)}else p([])}catch(t){console.log("\uD83D\uDE80 ~ error:",t)}},j=async()=>{try{let e=await s.h.get("/cadastros/apresentacao");f(e.data)}catch(o){console.log("\uD83D\uDE80 ~ error:",o)}},I=e=>{D(!g),i("produtos[".concat(e,"].checked"),!r("produtos[".concat(e,"].checked")));let o=[...u];o[e].checked=!o[e].checked,p(o)};return(0,n.useEffect)(()=>{b(),j()},[a]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(v.Z,{color:"primary",variant:"subtitle1",sx:{fontWeight:700,mb:2},children:"Produtos aprovados do fornecedor"}),!a&&(0,t.jsx)(v.Z,{color:"warning",variant:"subtitle1",className:"italic",children:(0,t.jsxs)(m.Z,{display:"flex",alignItems:"center",sx:{gap:1},children:[(0,t.jsx)(N.Z,{icon:"typcn:warning",color:"#FFC107"}),(0,t.jsx)("p",{children:"Nenhum fornecedor selecionado!"})]})}),a&&!u.length&&(0,t.jsx)(v.Z,{color:"warning",variant:"subtitle1",className:"italic",children:(0,t.jsxs)(m.Z,{display:"flex",alignItems:"center",sx:{gap:1},children:[(0,t.jsx)(N.Z,{icon:"typcn:warning",color:"#FFC107"}),(0,t.jsx)("p",{children:"Nenhum produto aprovado para o fornecedor selecionado!"})]})}),u&&u.length>0&&u.map((e,o)=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("input",{type:"hidden",value:e.produtoID,name:"produtos[".concat(o,"].produtoID"),...l("produtos[".concat(o,"].produtoID"))}),(0,t.jsxs)(h.ZP,{container:!0,spacing:4,sx:{pb:2},children:[(0,t.jsx)(h.ZP,{item:!0,xs:12,md:4,children:(0,t.jsx)(_.Z,{title:e.nome,name:"produtos[".concat(o,"].checked"),value:u[o].checked,onClick:()=>I(o),register:l})}),(0,t.jsx)(h.ZP,{item:!0,xs:12,md:8,children:(0,t.jsxs)(m.Z,{display:"flex",alignItems:"center",justifyContent:"end",sx:{gap:4,mt:3},children:[(0,t.jsxs)(v.Z,{variant:"body2",children:["\xdaltima avalia\xe7\xe3o: ",e.ultimaAvaliacao]}),(0,t.jsxs)(v.Z,{variant:"body2",children:["Pr\xf3xima avalia\xe7\xe3o: ",e.proximaAvialacao," (",1==e.diasRestantes?"".concat(e.diasRestantes," dia"):"".concat(e.diasRestantes," dias"),")"]}),(0,t.jsx)(R.Z,{variant:"outlined",size:"small",children:(0,t.jsxs)(m.Z,{display:"flex",alignItems:"center",sx:{gap:1},children:[(0,t.jsx)(N.Z,{icon:"fluent:form-new-20-regular",width:18,height:18}),"Nova avalia\xe7\xe3o"]})}),(0,t.jsx)(R.Z,{variant:"outlined",size:"small",children:(0,t.jsxs)(m.Z,{display:"flex",alignItems:"center",sx:{gap:1},children:[(0,t.jsx)(N.Z,{icon:"raphael:lab",width:18,height:18}),"Laborat\xf3rio (dev)"]})})]})}),u&&u[o].checked&&(0,t.jsx)(O,{value:e,apresentacoes:x,index:o,setValue:i,register:l,control:d,errors:c},o)]}),o<u.length-1&&(0,t.jsx)(k.Z,{})]}))]})};var z=a(41088),B=a(92629);let L=e=>{let o,{id:a}=e,{menu:r,user:l,loggedUnity:b}=(0,n.useContext)(y.V),[A,M]=(0,n.useState)(!1),[N,R]=(0,n.useState)(!1),[k,_]=(0,n.useState)(!1),[O,L]=(0,n.useState)(!1),[T,X]=(0,n.useState)(!1),[G,W]=(0,n.useState)(!1),[J,K]=(0,n.useState)(!1),[Q,U]=(0,n.useState)(!0),[Y,$]=(0,n.useState)(!0),[ee,eo]=(0,n.useState)(null),[ea,et]=(0,n.useState)(null),[en,es]=(0,n.useState)([]),[er,ei]=(0,n.useState)([]),[el,ed]=(0,n.useState)(null),{createNewNotification:ec}=(0,n.useContext)(F.u),[eu,ep]=(0,n.useState)(!1),[em,ex]=(0,n.useState)([]),[ef,ev]=(0,n.useState)([]),[eh,eg]=(0,n.useState)([]),[eD,eb]=(0,n.useState)(null),[ej,eI]=(0,n.useState)([]),[eZ,eC]=(0,n.useState)(null),[ey,eF]=(0,n.useState)(""),[eS,ew]=(0,n.useState)(!1),[eE,eP]=(0,n.useState)(!1),[eA,eM]=(0,n.useState)({status:!1,errors:[]}),{settings:eN}=(0,n.useContext)(E.J6),{setId:eV}=(0,n.useContext)(C.X),{startLoading:eH,stopLoading:eR}=(0,z.Z)(),[ek,e_]=(0,n.useState)(!1),[eO,eq]=(0,n.useState)({status:!1,message:"Voc\xea n\xe3o tem permiss\xf5es",messageType:"info"}),ez=j(),eB=a&&a>0?"edit":"new",eL=ez.pathname,{reset:eT,register:eX,getValues:eG,setValue:eW,control:eJ,watch:eK,handleSubmit:eQ,clearErrors:eU,setError:eY,formState:{errors:e$}}=(0,i.cI)();console.log("errors: ",e$);let e0=()=>{eV(ea.parRecebimentoMpModeloID),ez.push("/configuracoes/formularios/recebimento-mp/")},e1={id:4,name:"Formul\xe1rio do recebimentpMp",nameComponent:"DadosRecebimentoMp",type:"report",params:{data:{id:a,unidadeID:b.unidadeID,papelID:l.papelID},route:"recebimentoMp/dadosRecebimentoMp"},icon:"fluent:print-24-regular"},e2=[];e2.push(e1),1==l.papelID&&(o=!1,r.map(e=>{e.menu.map(e=>{e.submenu&&e.submenu.length>0&&e.submenu.map(e=>{"/configuracoes/formularios"==e.rota&&(o=!0)})})}),o)&&e2.push({id:5,name:"Configura\xe7\xf5es do formul\xe1rio",description:"Alterar as configura\xe7\xf5es do modelo de formul\xe1rio.",route:null,type:null,action:e0,modal:!1,icon:"bi:gear",identification:null});let e3=async()=>{},e8=()=>{M(!0);try{s.h.post("".concat(eL,"/getData/").concat(a),{type:eB,profissionalID:l.profissionalID,unidadeID:b.unidadeID}).then(e=>{var o,a;M(!1),ex(e.data.fieldsHeader),eo(e.data.fieldsHeader.fornecedor),ev(e.data.fieldsFooter),eg(e.data.fields),es(e.data.produtos),eI(e.data.blocos),ei(e.data.grupoAnexo),eF(e.data.info),et(e.data.unidade),eb(e.data.link),eC(e.data.ultimaMovimentacao),e5(e.data.blocos),eT(e.data);let t=I.WR[null==e?void 0:null===(o=e.data)||void 0===o?void 0:null===(a=o.info)||void 0===a?void 0:a.status];ed(t),eq({status:e.data.info.status<40,message:e.data.info.status>40?"Esse formul\xe1rio j\xe1 foi conclu\xeddo, n\xe3o \xe9 mais poss\xedvel alterar as informa\xe7\xf5es!":e.data.info.status<40?"Formul\xe1rio aberto para preenchimento!":40==e.data.info.status?"Este formul\xe1rio est\xe1 aguardando aprova\xe7\xe3o!":null,messageType:"info"}),e3()}).catch(e=>{console.log("\uD83D\uDE80 ~ error:",e),M(!1)})}catch(e){console.log("\uD83D\uDE80 ~ error:",e),M(!1)}},e4=()=>{eU();let e=!1,o=[];null==eh||eh.forEach((a,t)=>{let n=a.tabela?"fields[".concat(t,"].").concat(a.tabela):"fields[".concat(t,"].").concat(a.nomeColuna),s=eG(n);1!==a.obrigatorio||s||(eY(n,{type:"manual",message:"Campo obrigat\xf3rio"}),o.push(null==a?void 0:a.nomeCampo),e=!0)}),en&&en.length>0&&en.forEach((a,t)=>{a.produtoAnexosDescricao.forEach((n,s)=>{1===n.obrigatorio&&0==n.anexos.length&&(eY("produtos[".concat(t,"].produtoAnexosDescricao[").concat(s,"].anexos"),{type:"manual",message:"Campo obrigat\xf3rio"}),o.push("Anexo: ".concat(null==a?void 0:a.nome," / ").concat(null==n?void 0:n.nome)),e=!0)})}),ej.forEach((a,t)=>{a.itens.forEach((a,n)=>{let s=eG("blocos[".concat(t,"].itens[").concat(n,"].resposta"));(null==a?void 0:a.obrigatorio)!==1||s||(eY("blocos[".concat(t,"].itens[").concat(n,"].resposta"),{type:"manual",message:"Campo obrigat\xe1rio"}),o.push(null==a?void 0:a.nome),e=!0),a.respostaConfig&&1==a.respostaConfig.anexo&&a.respostaConfig.anexosSolicitados.length>0&&a.respostaConfig.anexosSolicitados.forEach((s,r)=>{1==s.obrigatorio&&s.anexos&&0==s.anexos.length&&(eY("blocos[".concat(t,"].itens[").concat(n,"].respostaConfig.anexosSolicitados[").concat(r,"].anexos"),{type:"manual",message:"Campo obrigat\xe1rio"}),o.push("Anexo: ".concat(null==a?void 0:a.nome," / ").concat(null==s?void 0:s.nome)),e=!0)})})}),er&&er.length>0&&er.forEach((a,t)=>{a.itens.forEach((n,s)=>{1===n.obrigatorio&&0==n.anexos.length&&(eY("grupoAnexo[".concat(t,"].itens[").concat(s,"].anexos"),{type:"manual",message:"Campo obrigat\xe1rio"}),o.push("Anexo: ".concat(null==a?void 0:a.nome," / ").concat(null==n?void 0:n.nome)),e=!0)})}),eM({status:e,errors:o})},e7=async e=>{if(9===e.length){let o=e.replace(/[^0-9]/g,"");try{let a=await s.h.get("https://viacep.com.br/ws/".concat(o,"/json/"));a.data.localidade?(eh.forEach(async(e,o)=>{("logradouro"===e.nomeColuna||"bairro"===e.nomeColuna||"cidade"===e.nomeColuna||"estado"===e.nomeColuna)&&(await eW("fields[".concat(o,"].logradouro"),a.data.logradouro),await eW("fields[".concat(o,"].bairro"),a.data.bairro),await eW("fields[".concat(o,"].cidade"),a.data.localidade),await eW("fields[".concat(o,"].estado"),a.data.uf))}),w.ZP.success("Endere\xe7o encontrado!")):w.ZP.error("Endere\xe7o n\xe3o encontrado!")}catch(t){console.error(t)}}},e9=()=>{e4(),ew(!0),K(!0)},e5=e=>{let o=!0;e.forEach(e=>{e.itens.forEach(e=>{e.respostaConfig&&1==e.respostaConfig.bloqueiaFormulario&&(o=!1)})}),$(o)},e6=async e=>{e.conclusion=!0,await eQ(oo)(e)},oe=(e,o,t)=>{let n=30==e?"Em preenchimento":40==e?"Conclu\xeddo":50==e?"Reprovado":60==e?"Aprovado parcialmente":70==e?"Aprovado":"Pendente",s={titulo:"Formul\xe1rio de Fornecedor ".concat(n),descricao:"O formul\xe1rio de Fornecedor #".concat(a," est\xe1 ").concat(n,"."),url:"/formularios/fornecedor/",urlID:a,tipoNotificacaoID:6,usuarioGeradorID:l.usuarioID,usuarioID:0,unidadeID:b.unidadeID,papelID:1};if(s&&(ec(s),o)){let r={titulo:"Fornecedor gerado",descricao:"O formul\xe1rio de Fornecedor #".concat(a," est\xe1 ").concat(n," e gerou uma n\xe3o conformidade."),url:"/formularios/fornecedor/nao-conformidade/",urlID:t,tipoNotificacaoID:5,usuarioGeradorID:l.usuarioID,usuarioID:0,unidadeID:b.unidadeID,papelID:1};ec(r)}},oo=async function(e){var o;let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];eH(),!0===t.conclusion&&(e.status=t.status,e.obsConclusao=t.obsConclusao);let n={form:e,auth:{usuarioID:l.usuarioID,profissionalID:null!==(o=l.profissionalID)&&void 0!==o?o:0,papelID:l.papelID,unidadeID:b.unidadeID}};try{"edit"==eB?(W(!0),await s.h.post("".concat(eL,"/updateData/").concat(a),n).then(o=>{w.ZP.success(I.OD.successUpdate),W(!1),oe(e.status,e.naoConformidade,null)})):"new"==eB?await s.h.post("".concat((0,I.g_)(eL),"/insertData"),n).then(e=>{ez.push("".concat((0,I.g_)(eL))),eV(e.data),w.ZP.success(I.OD.successNew)}):w.ZP.error(I.OD.error)}catch(r){console.log(r)}finally{eR()}},oa=async(e,o)=>{_(!0);let t=e.target.files;if(t&&t.length>0){var n;let r=new FormData;for(let i=0;i<t.length;i++)r.append("files[]",t[i]);r.append("usuarioID",l.usuarioID),r.append("unidadeID",b.unidadeID),r.append("grupoAnexoItemID",null!==(n=o.grupoAnexoItemID)&&void 0!==n?n:null),await s.h.post("".concat(eL,"/saveAnexo/").concat(a,"/grupo-anexo/").concat(l.usuarioID,"/").concat(ea.unidadeID),r).then(e=>{_(!1);let o=eG();oo(o)}).catch(e=>{var o,a,t;_(!1),w.ZP.error(null!==(t=null===(o=e.response)||void 0===o?void 0:null===(a=o.data)||void 0===a?void 0:a.message)&&void 0!==t?t:"Erro ao atualizar anexo, tente novamente!")})}},ot=async(e,o)=>{X(!0);let t=e.target.files;if(t&&t.length>0){var n,r;let i=new FormData;for(let d=0;d<t.length;d++)i.append("files[]",t[d]);i.append("usuarioID",l.usuarioID),i.append("unidadeID",b.unidadeID),i.append("parRecebimentoMpModeloBlocoID",null!==(n=o.parRecebimentoMpModeloBlocoID)&&void 0!==n?n:null),i.append("itemOpcaoAnexoID",null!==(r=o.itemOpcaoAnexoID)&&void 0!==r?r:null),await s.h.post("".concat(eL,"/saveAnexo/").concat(a,"/item/").concat(l.usuarioID,"/").concat(ea.unidadeID),i).then(e=>{X(!1);let o=eG();oo(o)}).catch(e=>{var o,a,t;X(!1),w.ZP.error(null!==(t=null===(o=e.response)||void 0===o?void 0:null===(a=o.data)||void 0===a?void 0:a.message)&&void 0!==t?t:"Erro ao atualizar anexo, tente novamente!!!!")})}},on=async e=>{try{var o;let a=await s.h.post("/cadastros/item/getItemConfigs",{itemID:e.itemID,alternativaItemID:null!==(o=e.alternativa.id)&&void 0!==o?o:null}),t=ej.map(o=>({...o,itens:o.itens.map(o=>o.itemID==e.itemID?{...o,respostaConfig:{...a.data}}:o)}));eI(t)}catch(n){console.log("error",n)}},os=async e=>{e&&await s.h.delete("".concat(eL,"/deleteAnexo/").concat(a,"/").concat(e.anexoID,"/").concat(ea.unidadeID,"/").concat(l.usuarioID,"/item")).then(e=>{let o=eG();oo(o)}).catch(e=>{var o,a,t;w.ZP.error(null!==(t=null===(o=e.response)||void 0===o?void 0:null===(a=o.data)||void 0===a?void 0:a.message)&&void 0!==t?t:"Erro ao remover anexo, tente novamente!")})},or=e=>{let o=[...ej];o.map((o,a)=>{o.itens.map((o,t)=>{eW("blocos[".concat(a,"].itens[").concat(t,"].resposta"),o.alternativas[e])})}),eI(o=>o.map(o=>({...o,itens:o.itens.map(o=>({...o,resposta:o.alternativas[e]&&o.alternativas[e].id>0?o.alternativas[e]:null}))}))),console.log("id do fornecedorrr",eG("fieldsHeader.fornecedor.id")),R(!N);let a=eG();oo(a)};return(0,n.useEffect)(()=>{"edit"==eB&&e8()},[a,G]),(0,n.useEffect)(()=>{e4()},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(S.Z,{show:A}),(0,t.jsxs)("form",{onSubmit:eQ(oo),children:[(0,t.jsx)(Z.Z,{btnCancel:!0,btnSave:ey.status<40,btnSend:ey.status>=40,btnPrint:"edit"==eB,btnDelete:ey.status<40,onclickDelete:()=>e_(!0),actionsData:e2,actions:!0,handleSubmit:()=>eQ(oo),handleSend:e9,iconConclusion:"mdi:check-bold",titleConclusion:"Concluir Formul\xe1rio",title:"Recebimento de MP",handleBtnStatus:()=>ep(!0),type:eB,status:el}),(0,t.jsxs)(m.Z,{display:"flex",flexDirection:"column",sx:{gap:4},children:[ey&&""!=ey.cabecalhoModelo&&(0,t.jsx)(x.Z,{children:(0,t.jsx)(f.Z,{children:(0,t.jsx)(v.Z,{variant:"subtitle1",sx:{mb:2},children:ey.cabecalhoModelo})})}),(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(B.Z,{title:"Excluir Formul\xe1rio",description:"Tem certeza que deseja exluir o formulario?",params:{route:"formularios/recebimento-mp/delete/".concat(a),messageSucceded:"Formul\xe1rio exclu\xeddo com sucesso!",MessageError:"Dado possui pend\xeancia!"},open:ek,handleClose:()=>e_(!1)}),(0,t.jsx)(f.Z,{children:ea&&(0,t.jsx)(m.Z,{display:"flex",flexDirection:"column",sx:{gap:1},children:(0,t.jsx)(V,{modeloID:ea.parRecebimentoMpModeloID,values:em,fornecedor:ee,setFornecedor:eo,fields:eh,getValues:eG,disabled:!eO.status,register:eX,errors:e$,setValue:eW,control:eJ,getAddressByCep:e7})})})]}),(0,t.jsx)(x.Z,{children:(0,t.jsx)(f.Z,{children:(0,t.jsx)(q,{recebimentoMpID:a,fornecedorID:eG("fieldsHeader.fornecedor.id"),getValues:eG,setValue:eW,register:eX,control:eJ,errors:e$},G)})}),ej&&ej.map((e,o)=>(0,t.jsx)(d.Z,{index:o,blockKey:"parRecebimentoMpModeloBlocoID",handleFileSelect:ot,setItemResposta:on,handleRemoveAnexoItem:os,setBlocos:eI,changeAllOptions:or,values:e,control:eJ,register:eX,setValue:eW,errors:null==e$?void 0:e$.blocos,disabled:!eO.status},N)),er&&er.map((e,o)=>(0,t.jsx)(p.Z,{values:{grupo:e,loadingFile:k,indexGrupo:o,handleFileSelect:oa,handleRemove:handleRemoveAnexoGroup,folder:"grupo-anexo",disabled:!eO.status,error:e$}},o)),ey&&(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(x.Z,{children:(0,t.jsx)(f.Z,{children:(0,t.jsx)(h.ZP,{container:!0,spacing:4,children:(0,t.jsx)(h.ZP,{item:!0,xs:12,md:12,children:(0,t.jsxs)(g.Z,{fullWidth:!0,children:[(0,t.jsx)(v.Z,{variant:"subtitle1",sx:{fontWeight:600,mb:2},children:"Observa\xe7\xf5es (campo de uso exclusivo da validadora)"}),(0,t.jsx)(u.Z,{title:"Observa\xe7\xe3o (opcional)",name:"info.obs",multiline:!0,rows:4,value:ey.obs,disabled:!eO.status,control:eJ})]})})})})})}),ea&&ef&&!ef.concluded&&(0,t.jsx)(H,{modeloID:ea.parRecebimentoMpModeloID,values:ef,register:eX,disabled:!1,errors:e$,setValue:eW,control:eJ}),ef&&ef.concluded&&(0,t.jsx)(v.Z,{variant:"caption",children:"Conclu\xeddo por ".concat(ef.conclusion.profissional.nome," em ").concat(ef.conclusion.dataFim," ").concat(ef.conclusion.horaFim,".")}),eO.message&&(0,t.jsx)(D.Z,{severity:"warning",children:eO.message}),eZ&&(0,t.jsxs)(D.Z,{severity:"info",children:["\xdaltima movimenta\xe7\xe3o: Profissional ".concat(eZ.nome," do(a) ").concat(eZ.nomeFantasia," movimentou o formul\xe1rio de ").concat(eZ.statusAnterior," para ").concat(eZ.statusAtual," em ").concat(eZ.dataHora,"."),eZ.observacao&&(0,t.jsxs)("p",{children:[(0,t.jsx)("br",{}),'Mensagem: "',eZ.observacao,'"']})]}),eu&&(0,t.jsx)(c.Z,{title:"Hist\xf3rico do Formul\xe1rio",text:"Listagem do hist\xf3rico das movimenta\xe7\xf5es do formul\xe1rio ".concat(a," do Recebimento de MP."),id:a,parFormularioID:2,formStatus:ey.status,hasFormPending:Q,canChangeStatus:!Q&&ey.status>30,openModal:eu,handleClose:()=>ep(!1),btnCancel:!0,btnConfirm:!0,handleSubmit:changeFormStatus}),(0,t.jsx)(P.Z,{openModal:eS,handleClose(){ew(!1),K(!1)},title:"Concluir Formul\xe1rio",text:"Deseja realmente concluir este formul\xe1rio?",info:ey,canChange:!Q,register:eX,setValue:eW,getValues:eG,btnCancel:!0,btnConfirm:!0,btnConfirmColor:"primary",conclusionForm:e6,listErrors:eA,canApprove:Y})]})]})]})};var T=a(60565);let X=()=>{let{user:e,loggedUnity:o}=(0,n.useContext)(y.V),[a,i]=(0,n.useState)(null),l=(0,b.useRouter)(),d=l.pathname,{setTitle:c}=(0,n.useContext)(T.f),{id:u}=(0,n.useContext)(C.X),p=async()=>{await s.h.get("".concat(d,"/getList/").concat(o.unidadeID)).then(e=>{i(e.data),c({title:"Recebimento de MP",subtitle:{id:u,count:e.data.length,new:!1}})})};(0,n.useEffect)(()=>{p()},[u]);let m=(0,I.OL)(d,[{headerName:"ID",field:"id",size:.1},{headerName:"Data",field:"data",size:.1,type:"date"},{headerName:"Fornecedor",field:"fornecedor",size:.2},{headerName:"Profissional",field:"profissional",size:.2},{headerName:"Modelo",field:"modelo",size:.2},{headerName:"Status",field:{name:"status",cor:"cor"},size:.2}]);return(0,t.jsx)(t.Fragment,{children:a?u&&u>0?(0,t.jsx)(L,{id:u}):(0,t.jsx)(r.Z,{result:a,columns:m}):(0,t.jsx)(S.Z,{show:!0})})};var G=X}},function(e){e.O(0,[9349,1515,7842,9525,8934,5815,9152,9774,2888,179],function(){return e(e.s=68374)}),_N_E=e.O()}]);