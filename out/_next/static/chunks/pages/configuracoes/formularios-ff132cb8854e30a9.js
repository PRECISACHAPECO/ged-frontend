(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6364],{92689:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/configuracoes/formularios",function(){return o(63798)}])},63798:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return E}});var i=o(85893),s=o(67294),n=o(60664),a=o(93250),r=o(60565),l=o(83830),d=o(87536),c=o(49837),m=o(91359),u=o(85214),x=o(79072),v=o(29630),h=o(61953),p=o(75084),b=o(11163),j=o.n(b),Z=o(46749),g=o(5707),k=o(40039),I=o(86501),f=o(47842),D=o(21609),P=o(1948),S=o(84220),y=o(29308),B=o(67569),C=o(3893),F=o(88475);o(53934);let N=e=>{var t,o;let{id:a}=e,{user:r,loggedUnity:l}=(0,s.useContext)(k.V),[b,N]=(0,s.useState)(),[R,q]=(0,s.useState)(null),[E,O]=(0,s.useState)(),[w,V]=(0,s.useState)(),[W,_]=(0,s.useState)(!1),[M,A]=(0,s.useState)(),[T,X]=(0,s.useState)(!1),[z,U]=(0,s.useState)([]),[L,G]=(0,s.useState)([]),H=j(),J=H.pathname,{setValue:K,register:Q,handleSubmit:Y,reset:$,control:ee,formState:{errors:et}}=(0,d.cI)(),eo=async e=>{let t={unidadeID:l.unidadeID,header:e.header,blocks:e.blocks,arrRemovedBlocks:L,arrRemovedItems:z,orientacoes:e.orientations};N(null),console.log("\uD83D\uDE80 ~ onSubmit:",t);try{await n.h.put("".concat(J,"/fornecedor/updateData"),t).then(e=>{I.ZP.success(Z.OD.successUpdate),X(!T)})}catch(o){console.log(o)}},ei=(e,t,o,i)=>{let s=i.itens;s=s.filter(t=>{let o=e.itens.some(e=>e.item&&t.id===e.item.id);return!o});let n=[...o];n[t].optionsBlock.itens=s,O(n)},es=e=>{var t;let o=[...E];o[e].itens.push({ordem:(null===(t=o[e].itens)||void 0===t?void 0:t.length)+1,obs:1,status:1,obrigatorio:1}),O(o),K("blocks.[".concat(e,"].itens.[").concat(o[e].itens.length-1,"].new"),!0),ei(o[e],e,E,R)},en=(e,t,o)=>{if(console.log("\uD83D\uDE80 ~ length:",E[t].itens.length),1===E[t].itens.length){I.ZP.error("Voc\xea deve ter ao menos um item!");return}let i=[...z];i.push(e),U(i);let s=[...E],n=[...E[t].itens];n.splice(o,1),s[t].itens=n,O(s),K("blocks.[".concat(t,"].itens"),n),ei(E[t],t,E,R)},ea=(e,t)=>{let o=!0;if(e&&e.itens.map(e=>{1==e.hasPending&&(o=!1)}),!o){I.ZP.error("Este bloco n\xe3o pode ser removido pois possui itens respondidos em um formul\xe1rio");return}let i=[...L];i.push(e.dados.parFornecedorBlocoID),G(i);let s=[...E];s.splice(t,1),O(s),K("blocks",s),I.ZP.success("Bloco pr\xe9-removido. Salve para concluir!")},er=e=>{A(null),n.h.post("/formularios/fornecedor/getItemScore",{data:e}).then(e=>{A(e.data)}),A&&_(!0)},el=()=>{let e=[...E];e.push({dados:{ordem:e.length+1,nome:"",status:1},categorias:[],atividades:[],optionsBlock:{itens:[...R.itens],alternativas:[...R.alternativas]},itens:[{parFormularioID:1,new:!0,ordem:"1",nome:"",status:1,item:null,alternativa:null}]}),O(e)},ed=()=>{try{n.h.post("".concat(J,"/fornecedor/getData"),{unidadeID:l.unidadeID}).then(e=>{N(e.data.header),O(e.data.blocks),q({categorias:e.data.options.categorias,atividades:e.data.options.atividades,itens:e.data.options.itens,alternativas:e.data.options.alternativas}),V(e.data.orientations),$(e.data),setTimeout(()=>{e.data.blocks.map((t,o)=>{ei(t,o,e.data.blocks,e.data.options)})},3e3)})}catch(e){console.log(e)}};return(0,s.useEffect)(()=>{ed()},[a,T]),(0,i.jsx)(i.Fragment,{children:b?(0,i.jsxs)("form",{onSubmit:Y(eo),children:[b&&(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(g.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>Y(eo),type:"edit"}),(0,i.jsx)(m.Z,{children:(0,i.jsx)(u.Z,{component:"nav","aria-label":"main mailbox",children:(0,i.jsxs)(x.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(x.ZP,{item:!0,md:4,xs:4,children:(0,i.jsx)(v.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Nome do Campo"})}),(0,i.jsx)(x.ZP,{item:!0,md:3,xs:4,children:(0,i.jsx)(v.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Mostra no Formul\xe1rio"})}),(0,i.jsx)(x.ZP,{item:!0,md:3,xs:4,children:(0,i.jsx)(v.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Obrigat\xf3rio"})}),b.map((e,t)=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("input",{type:"hidden",name:"header.[".concat(t,"].parFornecedorID"),defaultValue:e.parFornecedorID,...Q("header.[".concat(t,"].parFornecedorID"))}),(0,i.jsx)(x.ZP,{item:!0,md:4,xs:6,children:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(h.Z,{display:"flex",alignItems:"center",sx:{gap:2},children:e.nomeCampo})})}),(0,i.jsx)(x.ZP,{item:!0,md:3,xs:3,children:(0,i.jsx)(C.Z,{title:"",name:"header.[".concat(t,"].mostra"),value:e.mostra,register:Q,disabled:"cnpj"==e.nomeColuna})}),(0,i.jsx)(x.ZP,{item:!0,md:3,xs:3,children:(0,i.jsx)(C.Z,{title:"",name:"header.[".concat(t,"].obrigatorio"),value:e.obrigatorio,register:Q,disabled:"cnpj"==e.nomeColuna})})]}))]})})})]}),!E&&(0,i.jsx)(f.Z,{}),E&&E.map((e,s)=>{var n,a,r,l,d,u,b,j,Z,g;return(0,i.jsx)(c.Z,{md:12,sx:{mt:4},children:(0,i.jsxs)(m.Z,{children:[(0,i.jsx)("input",{type:"hidden",name:"blocks.[".concat(s,"].dados.parFornecedorBlocoID"),value:e.dados.parFornecedorBlocoID,...Q("blocks.[".concat(s,"].dados.parFornecedorBlocoID"))}),(0,i.jsxs)(x.ZP,{container:!0,spacing:4,children:[(0,i.jsx)(y.Z,{className:"order-1",xs:10,md:1,title:"Sequ\xeancia",name:"blocks.[".concat(s,"].dados.ordem"),value:e.dados.ordem,required:!0,control:ee,errors:null==et?void 0:null===(n=et.blocks)||void 0===n?void 0:null===(a=n[s])||void 0===a?void 0:null===(r=a.dados)||void 0===r?void 0:r.ordem}),(0,i.jsx)(y.Z,{className:"order-3 md:order-2",xs:10,md:9,title:"Nome do Bloco",name:"blocks.[".concat(s,"].dados.nome"),value:e.dados.nome,required:!0,control:ee,errors:null==et?void 0:null===(l=et.blocks)||void 0===l?void 0:null===(d=l[s])||void 0===d?void 0:null===(u=d.dados)||void 0===u?void 0:u.nome}),(0,i.jsx)(B.Z,{className:"order-2 md:order-3",xs:2,md:1,title:"Ativo",name:"blocks.[".concat(s,"].dados.status"),value:E[s].dados.status,register:Q}),(0,i.jsx)(B.Z,{className:"order-4 ",xs:2,md:1,title:"Observa\xe7\xe3o",name:"blocks.[".concat(s,"].dados.obs"),value:E[s].dados.obs,register:Q}),(0,i.jsx)(S.Z,{className:"order-5",xs:12,md:5,multiple:!0,title:"Mostrar esse bloco quando \xe9",name:"blocks.[".concat(s,"].categorias"),value:e.categorias,required:!0,options:R.categorias,register:Q,setValue:K,control:ee,errors:null==et?void 0:null===(b=et.blocks)||void 0===b?void 0:null===(j=b[s])||void 0===j?void 0:j.categorias}),(0,i.jsx)(S.Z,{className:"order-6",xs:12,md:7,multiple:!0,title:"Atividade(s)",name:"blocks.[".concat(s,"].atividades"),value:e.atividades,required:!1,options:R.atividades,register:Q,setValue:K,control:ee,errors:null==et?void 0:null===(Z=et.blocks)||void 0===Z?void 0:null===(g=Z[s])||void 0===g?void 0:g.atividades})]}),(0,i.jsx)(v.Z,{variant:"subtitle1",sx:{fontWeight:600,mt:4},children:"Itens"}),e.itens&&e.itens.map((e,n)=>{var a,r,l,d,c,m,u,b,j,Z,g,k,I;return(0,i.jsxs)(x.ZP,{id:"item-".concat(s,"-").concat(n),container:!0,spacing:2,sx:{my:1},children:[(0,i.jsx)("input",{type:"hidden",name:"blocks.[".concat(s,"].itens.[").concat(n,"].parFornecedorBlocoItemID"),value:e.parFornecedorBlocoItemID,...Q("blocks.[".concat(s,"].itens.[").concat(n,"].parFornecedorBlocoItemID"))}),(0,i.jsx)(y.Z,{xs:12,md:1,title:"Sequ\xeancia",name:"blocks.[".concat(s,"].itens.[").concat(n,"].ordem"),value:e.ordem,required:!0,control:ee,errors:null==et?void 0:null===(a=et.blocks)||void 0===a?void 0:null===(r=a[s])||void 0===r?void 0:null===(l=r.itens)||void 0===l?void 0:null===(d=l[n])||void 0===d?void 0:d.ordem}),(0,i.jsx)(S.Z,{xs:12,md:4,title:E[s].itens[n].itemID?"Item [".concat(E[s].itens[n].itemID,"]"):"Item",name:"blocks.[".concat(s,"].itens.[").concat(n,"].item"),value:null!==(t=E[s].itens[n].item)&&void 0!==t?t:null,required:!0,disabled:1==e.hasPending,options:null===(c=E[s].optionsBlock)||void 0===c?void 0:c.itens,register:Q,setValue:K,control:ee,errors:null==et?void 0:null===(m=et.blocks)||void 0===m?void 0:null===(u=m[s])||void 0===u?void 0:null===(b=u.itens)||void 0===b?void 0:null===(j=b[n])||void 0===j?void 0:j.item}),(0,i.jsx)(S.Z,{xs:12,md:2,title:"Alternativa",name:"blocks.[".concat(s,"].itens.[").concat(n,"].alternativa"),value:null!==(o=E[s].itens[n].alternativa)&&void 0!==o?o:null,required:!0,disabled:1==e.hasPending,options:R.alternativas,register:Q,setValue:K,control:ee,errors:null==et?void 0:null===(Z=et.blocks)||void 0===Z?void 0:null===(g=Z[s])||void 0===g?void 0:null===(k=g.itens)||void 0===k?void 0:null===(I=k[n])||void 0===I?void 0:I.alternativa}),(0,i.jsx)(B.Z,{xs:2,md:1,title:"Ativo",index:n,name:"blocks.[".concat(s,"].itens.[").concat(n,"].status"),value:E[s].itens[n].status,register:Q}),(0,i.jsx)(B.Z,{xs:2,md:1,title:"Obs",index:n,name:"blocks.[".concat(s,"].itens.[").concat(n,"].obs"),value:E[s].itens[n].obs,register:Q}),(0,i.jsx)(B.Z,{xs:2,md:1,title:"Obrigat\xf3rio",index:n,name:"blocks.[".concat(s,"].itens.[").concat(n,"].obrigatorio"),value:E[s].itens[n].obrigatorio,register:Q}),(0,i.jsx)(x.ZP,{item:!0,xs:2,md:1,children:(0,i.jsxs)(h.Z,{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,i.jsx)(v.Z,{variant:"caption",children:0==n?"Pontua\xe7\xe3o":""}),(0,i.jsx)(p.Z,{style:0===e.pontuacao?{opacity:.3}:{},title:e.parFornecedorBlocoID?"Definir pontua\xe7\xe3o para as respostas":"Salve o bloco para definir a pontua\xe7\xe3o",disabled:!e.parFornecedorBlocoID,onClick:()=>er(e),children:(0,i.jsx)(D.Z,{icon:"ic:baseline-assessment"})})]})}),(0,i.jsx)(F.Z,{xs:2,md:1,title:0==n?"Remover":"",index:s,removeItem:en,item:e,pending:e.hasPending,textSuccess:"Remover este item",textError:"Este item n\xe3o pode mais ser removido pois j\xe1 foi respondido em um formul\xe1rio"})]},n)}),W&&M&&(0,i.jsx)(P.Z,{openModal:W,setOpenModalConfirmScore:_,itemScore:M,setItemScore:A}),(0,i.jsx)(x.ZP,{container:!0,spacing:4,sx:{mt:4},children:(0,i.jsxs)(x.ZP,{item:!0,xs:12,md:12,children:[(0,i.jsx)(p.Z,{variant:"outlined",color:"primary",startIcon:(0,i.jsx)(D.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){es(s)},children:"Inserir Item"}),(0,i.jsx)(p.Z,{variant:"outlined",color:"error",startIcon:(0,i.jsx)(D.Z,{icon:"tabler:trash-filled"}),onClick(){ea(e,s)},sx:{ml:2},children:"Remover Bloco"})]})})]})},s)}),(0,i.jsx)(x.ZP,{item:!0,xs:12,md:12,sx:{mt:4},children:(0,i.jsx)(p.Z,{variant:"outlined",color:"primary",startIcon:(0,i.jsx)(D.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){el()},children:"Inserir Bloco"})}),w&&(0,i.jsx)(c.Z,{md:12,sx:{mt:4},children:(0,i.jsx)(m.Z,{children:(0,i.jsx)(x.ZP,{container:!0,spacing:4,children:(0,i.jsx)(y.Z,{xs:12,md:12,title:"Orienta\xe7\xf5es",name:"orientations.obs",required:!1,value:null==w?void 0:w.obs,multiline:!0,rows:4,control:ee})})})})]}):(0,i.jsx)(f.Z,{})})},R=e=>{var t,o;let{id:a}=e,{user:r,loggedUnity:h}=(0,s.useContext)(k.V),[b,P]=(0,s.useState)(),[N,R]=(0,s.useState)(),[q,E]=(0,s.useState)(null),[O,w]=(0,s.useState)([]),[V,W]=(0,s.useState)(null),[_,M]=(0,s.useState)(!1),[A,T]=(0,s.useState)([]),X=j(),z=X.pathname,{setId:U}=(0,s.useContext)(l.X),{setValue:L,register:G,reset:H,control:J,handleSubmit:K,formState:{errors:Q}}=(0,d.cI)(),Y=async e=>{let t={unidadeID:h.unidadeID,header:e.header,products:e.products,blocks:e.blocks,arrRemovedItems:A,orientacoes:e.orientacoes};P(null),console.log("onSubmit: ",t);try{await n.h.put("".concat(z,"/recebimentoMp/updateData"),t).then(e=>{I.ZP.success(Z.OD.successUpdate),M(!_)})}catch(o){console.log(o)}},$=e=>{let t=[...O];t[e].itens.push({ordem:t[e].itens.length+1,obs:1,status:1,obrigatorio:1}),w(t),ei(t[e],e,O,q)},ee=()=>{let e=[...O];e.push({dados:{ordem:e.length+1,nome:"",status:1},itens:[{ordem:1,obs:1,status:1,obrigatorio:1}]}),w(e)},et=()=>{try{n.h.post("".concat(z,"/recebimentoMp/getData"),{unidadeID:h.unidadeID}).then(e=>{var t,o;console.log("getData: ",e.data),P(e.data.header),R(e.data.products),w(e.data.blocks),W(null===(t=e.data)||void 0===t?void 0:null===(o=t.orientacoes)||void 0===o?void 0:o.obs),E(e.data.options),H(e.data),setTimeout(()=>{e.data.blocks.map((t,o)=>{ei(t,o,e.data.blocks,e.data.options)})},3e3)})}catch(e){console.log(e)}},eo=(e,t,o)=>{if(console.log("\uD83D\uDE80 ~ length:",O[t].itens.length),1===O[t].itens.length){I.ZP.error("Voc\xea deve ter ao menos um item!");return}let i=[...A];i.push(e),T(i);let s=[...O],n=[...O[t].itens];n.splice(o,1),s[t].itens=n,w(s),console.log("\uD83D\uDE80 ~ newBlock:",n),L("blocks.[".concat(t,"].itens"),n),ei(O[t],t,O,q)},ei=(e,t,o,i)=>{let s=i.itens;s=s.filter(t=>{let o=e.itens.some(e=>e.item&&t.id===e.item.id);return!o});let n=[...o];n[t].optionsBlock.itens=s,w(n)};return(0,s.useEffect)(()=>{et()},[a,_]),console.log("errors: ",Q),(0,i.jsx)(i.Fragment,{children:b?(0,i.jsxs)("form",{onSubmit:K(Y),children:[b&&(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(g.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>K(Y),type:"edit"}),(0,i.jsx)(m.Z,{children:(0,i.jsx)(u.Z,{component:"nav","aria-label":"main mailbox",children:(0,i.jsxs)(x.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(x.ZP,{item:!0,md:4,xs:4,children:(0,i.jsx)(v.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Nome do Campo"})}),(0,i.jsx)(x.ZP,{item:!0,md:3,xs:4,children:(0,i.jsx)(v.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Mostra no Formul\xe1rio"})}),(0,i.jsx)(x.ZP,{item:!0,md:3,xs:4,children:(0,i.jsx)(v.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Obrigat\xf3rio"})}),b.map((e,t)=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("input",{type:"hidden",name:"header.[".concat(t,"].parRecebimentompID"),defaultValue:e.parRecebimentompID,...G("headers.[".concat(t,"].parRecebimentompID"))}),(0,i.jsx)(x.ZP,{item:!0,md:4,xs:6,children:e.nomeCampo}),(0,i.jsx)(x.ZP,{item:!0,md:3,xs:3,children:(0,i.jsx)(C.Z,{title:"",name:"header.[".concat(t,"].mostra"),value:e.mostra,register:G})}),(0,i.jsx)(x.ZP,{item:!0,md:3,xs:3,children:(0,i.jsx)(C.Z,{title:"",name:"header.[".concat(t,"].obrigatorio"),value:e.obrigatorio,register:G})})]}))]})})})]}),N&&(0,i.jsx)(c.Z,{sx:{mt:4},children:(0,i.jsx)(m.Z,{children:(0,i.jsx)(u.Z,{component:"nav","aria-label":"main mailbox",children:(0,i.jsxs)(x.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(x.ZP,{item:!0,md:4,xs:4,children:(0,i.jsx)(v.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Nome do Campo"})}),(0,i.jsx)(x.ZP,{item:!0,md:3,xs:4,children:(0,i.jsx)(v.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Mostra no Formul\xe1rio"})}),(0,i.jsx)(x.ZP,{item:!0,md:3,xs:4,children:(0,i.jsx)(v.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Obrigat\xf3rio"})}),N.map((e,t)=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("input",{type:"hidden",name:"products.[".concat(t,"].parRecebimentoMpProdutoID"),defaultValue:e.parRecebimentompProdutoID,...G("products.[".concat(t,"].parRecebimentoMpProdutoID"))}),(0,i.jsx)(x.ZP,{item:!0,md:4,xs:6,children:e.nomeCampo}),(0,i.jsx)(x.ZP,{item:!0,md:3,xs:3,children:(0,i.jsx)(C.Z,{title:"",name:"products.[".concat(t,"].mostra"),value:e.mostra,register:G})}),(0,i.jsx)(x.ZP,{item:!0,md:3,xs:3,children:(0,i.jsx)(C.Z,{title:"",name:"products.[".concat(t,"].obrigatorio"),value:e.obrigatorio,register:G})})]}))]})})})}),O&&O.map((e,s)=>{var n,a,r,l,d,u;return(0,i.jsx)(c.Z,{md:12,sx:{mt:4},children:(0,i.jsxs)(m.Z,{children:[(0,i.jsx)(v.Z,{variant:"subtitle1",sx:{fontWeight:600,mb:4},children:"Bloco ".concat(s+1)}),(0,i.jsx)("input",{type:"hidden",name:"blocks.[".concat(s,"].parRecebimentompBlocoID"),defaultValue:e.dados.parRecebimentompBlocoID,...G("blocks.[".concat(s,"].parRecebimentompBlocoID"))}),(0,i.jsxs)(x.ZP,{container:!0,spacing:4,children:[(0,i.jsx)(y.Z,{className:"order-1",xs:10,md:1,title:"Sequ\xeancia",name:"blocks.[".concat(s,"].dados.ordem"),value:e.dados.ordem,required:!0,control:J,errors:null==Q?void 0:null===(n=Q.blocks)||void 0===n?void 0:null===(a=n[s])||void 0===a?void 0:null===(r=a.dados)||void 0===r?void 0:r.ordem}),(0,i.jsx)(y.Z,{className:"order-3 md:order-2",xs:10,md:9,title:"Nome do Bloco",name:"blocks.[".concat(s,"].dados.nome"),value:e.dados.nome,required:!0,control:J,errors:null==Q?void 0:null===(l=Q.blocks)||void 0===l?void 0:null===(d=l[s])||void 0===d?void 0:null===(u=d.dados)||void 0===u?void 0:u.nome}),(0,i.jsx)(B.Z,{className:"order-2 md:order-3",xs:2,md:1,title:"Ativo",name:"blocks.[".concat(s,"].dados.status"),value:O[s].dados.status,register:G}),(0,i.jsx)(B.Z,{className:"order-4",xs:2,md:1,title:"Observa\xe7\xe3o",name:"blocks.[".concat(s,"].dados.obs"),value:O[s].dados.obs,register:G})]}),(0,i.jsxs)(x.ZP,{container:!0,spacing:4,sx:{mt:0},children:[(0,i.jsx)(x.ZP,{item:!0,xs:12,md:12,children:(0,i.jsx)(v.Z,{variant:"subtitle1",sx:{fontWeight:600},children:"Itens"})}),e.itens&&e.itens.map((e,n)=>{var a,r,l,d,c,m,u,x,v,h,p,b;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("input",{type:"hidden",name:"blocks.[".concat(s,"].itens.[").concat(n,"].parRecebimentompBlocoItemID"),defaultValue:e.parRecebimentompBlocoItemID,...G("blocks.[".concat(s,"].itens.[").concat(n,"].parRecebimentompBlocoItemID"))}),(0,i.jsx)(y.Z,{xs:12,md:1,title:"Sequ\xeancia",name:"blocks.[".concat(s,"].itens.[").concat(n,"].ordem"),value:e.ordem,required:!0,control:J,errors:null==Q?void 0:null===(a=Q.blocks)||void 0===a?void 0:null===(r=a[s])||void 0===r?void 0:null===(l=r.itens)||void 0===l?void 0:null===(d=l[n])||void 0===d?void 0:d.ordem}),(0,i.jsx)(S.Z,{xs:12,md:5,title:O[s].itens[n].itemID?"Item [".concat(O[s].itens[n].itemID,"]"):"Item",name:"blocks.[".concat(s,"].itens.[").concat(n,"].item"),value:null!==(t=O[s].itens[n].item)&&void 0!==t?t:null,required:!0,disabled:1==e.hasPending,options:q.itens,register:G,setValue:L,control:J,errors:null==Q?void 0:null===(c=Q.blocks)||void 0===c?void 0:null===(m=c[s])||void 0===m?void 0:null===(u=m.itens)||void 0===u?void 0:null===(x=u[n])||void 0===x?void 0:x.item}),(0,i.jsx)(S.Z,{xs:12,md:2,title:"Alternativa",name:"blocks.[".concat(s,"].itens.[").concat(n,"].alternativa"),value:null!==(o=O[s].itens[n].alternativa)&&void 0!==o?o:null,required:!0,disabled:1==e.hasPending,options:q.alternativas,register:G,setValue:L,control:J,errors:null==Q?void 0:null===(v=Q.blocks)||void 0===v?void 0:null===(h=v[s])||void 0===h?void 0:null===(p=h.itens)||void 0===p?void 0:null===(b=p[n])||void 0===b?void 0:b.alternativa}),(0,i.jsx)(B.Z,{xs:3,md:1,title:"Ativo",index:n,name:"blocks.[".concat(s,"].itens.[").concat(n,"].status"),value:O[s].itens[n].status,register:G}),(0,i.jsx)(B.Z,{xs:3,md:1,title:"Obs",index:n,name:"blocks.[".concat(s,"].itens.[").concat(n,"].obs"),value:O[s].itens[n].obs,register:G}),(0,i.jsx)(B.Z,{xs:3,md:1,title:"Obrigat\xf3rio",index:n,name:"blocks.[".concat(s,"].itens.[").concat(n,"].obrigatorio"),value:O[s].itens[n].obrigatorio,register:G}),(0,i.jsx)(F.Z,{xs:3,md:1,title:0==n?"Remover":"",index:s,removeItem:eo,item:e,pending:e.hasPending,textSuccess:"Remover este item",textError:"Este item n\xe3o pode mais ser removido pois j\xe1 foi respondido em um formul\xe1rio"})]})}),(0,i.jsx)(x.ZP,{item:!0,xs:12,md:12,children:(0,i.jsx)(p.Z,{variant:"outlined",color:"primary",startIcon:(0,i.jsx)(D.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){$(s)},children:"Inserir Item"})})]})]})},s)}),(0,i.jsx)(x.ZP,{item:!0,xs:12,md:12,sx:{mt:4},children:(0,i.jsx)(p.Z,{variant:"outlined",color:"primary",startIcon:(0,i.jsx)(D.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){ee()},children:"Inserir Bloco"})}),b&&(0,i.jsx)(c.Z,{md:12,sx:{mt:4},children:(0,i.jsx)(m.Z,{children:(0,i.jsx)(x.ZP,{container:!0,spacing:4,children:(0,i.jsx)(x.ZP,{item:!0,xs:12,md:12,children:(0,i.jsx)(y.Z,{xs:12,md:12,title:"Orienta\xe7\xf5es",name:"orientacoes.obs",required:!1,value:null==V?void 0:V.obs,multiline:!0,rows:4,control:J})})})})})]}):(0,i.jsx)(f.Z,{})})},q=()=>{let[e,t]=(0,s.useState)(null),o=(0,b.useRouter)(),d=o.pathname,{setTitle:c}=(0,s.useContext)(r.f),{id:m,setId:u}=(0,s.useContext)(l.X);(0,s.useEffect)(()=>{let e=async()=>{await n.h.get(d).then(e=>{t(e.data),c({title:"Formul\xe1rios",subtitle:{id:m,count:e.data.length,new:!1}})})};e()},[m]);let x=(0,Z.OL)(d,[{title:"ID",field:"id",size:.2},{title:"Nome",field:"nome",size:.8}]);return(0,i.jsx)(i.Fragment,{children:e?m&&m>0?1==m?(0,i.jsx)(N,{id:m}):2==m?(0,i.jsx)(R,{id:m}):3==m?(0,i.jsx)("h3",{children:"Em desenvolvimento..."}):4==m?void o.push("".concat(d,"/limpeza")):null:(0,i.jsx)(a.Z,{result:e,columns:x}):(0,i.jsx)(f.Z,{})})};var E=q}},function(e){e.O(0,[4186,1445,1111,5999,7536,6668,2187,7630,9516,9297,2064,9774,2888,179],function(){return e(e.s=92689)}),_N_E=e.O()}]);