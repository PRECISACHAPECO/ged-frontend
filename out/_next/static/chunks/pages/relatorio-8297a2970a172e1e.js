(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9845],{83102:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/relatorio",function(){return l(44360)}])},52189:function(e,t,l){"use strict";var o=l(85893),i=l(64004);l(67294);var n=l(42404),d=l(17844);let r=()=>{var e,t,l,r,s,a,c,x,u;let h=(0,d.Z)(),p=null==h?void 0:null===(e=h.header)||void 0===e?void 0:e.filter(e=>"Nome Fantasia"===e.name)[0].value;return h&&(0,o.jsxs)(i.G7,{style:{width:"100%"},children:[(0,o.jsx)(i.G7,{style:{padding:3,backgroundColor:"#eee",marginTop:20,border:"1px solid #ddd"},children:(0,o.jsx)(i.xv,{style:{width:"100%",textAlign:"center",fontSize:12},children:"QUALIFICA\xc7\xc3O DE FORNECEDORES"})}),(0,o.jsx)(i.G7,{style:{marginTop:20},children:(0,o.jsxs)(i.xv,{style:{fontSize:10},children:["A empresa ",(0,o.jsx)(i.xv,{children:null==h?void 0:h.unidade})," possui como norma de BPF a avalia\xe7\xe3o de seus fornecedores quanto as mat\xe9rias primas e ingredientes por estes fornecidos."]})}),"Fornecedor",(0,o.jsx)(i.G7,{style:{marginTop:20},children:(0,o.jsxs)(i.xv,{style:{fontSize:10},children:["Fornecedor: ",(0,o.jsx)(i.xv,{style:{fontWeight:"bold",fontSize:10},children:p})]})}),(0,o.jsx)(i.G7,{style:{marginTop:20},children:(0,o.jsxs)(i.xv,{style:{fontSize:10},children:[(null==h?void 0:null===(t=h.produtos)||void 0===t?void 0:t.length)>1?"Produtos fornecidos: ":"Produto fornecido: ",null==h?void 0:null===(l=h.produtos)||void 0===l?void 0:l.map((e,t)=>(0,o.jsxs)(i.xv,{children:[(0,o.jsx)(i.xv,{style:{fontWeight:"bold",fontSize:10},children:e.produtos}),t!==h.produtos.length-1&&", "]},t))]})}),(0,o.jsx)(i.G7,{style:{marginTop:20},children:(0,o.jsx)(i.G7,{style:n.W.containerFields,children:null===(r=h.header)||void 0===r?void 0:r.map((e,t)=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.G7,{style:[n.W.fields,{width:"33%"}],children:[(0,o.jsx)(i.xv,{style:n.W.fieldTitle,children:null!==(a=e.name)&&void 0!==a?a:"NI"}),(0,o.jsx)(i.xv,{style:n.W.fieldValue,children:null!==(c=e.value)&&void 0!==c?c:"NI"})]}),(t+1)%3==0&&(0,o.jsx)(i.G7,{style:n.W.separator})]}))})}),null===(s=h.blocks)||void 0===s?void 0:s.map((e,t)=>(0,o.jsx)(i.G7,{style:[e,{marginTop:30}],children:(0,o.jsxs)(i.G7,{style:n.W.table,children:[(0,o.jsxs)(i.G7,{style:n.W.tableTitle,children:[(0,o.jsx)(i.xv,{style:[n.W.tableTitlecolumn,{width:"60%"}],children:e.nome}),(0,o.jsx)(i.xv,{style:[n.W.tableTitlecolumn,{width:"20%",borderLeft:"1px solid #ddd"}],children:"Resposta"}),(0,o.jsx)(i.xv,{style:[n.W.tableTitlecolumn,{width:"20%",borderLeft:"1px solid #ddd"}],children:"Observa\xe7\xe3o"})]}),e.itens.map((e,t)=>(0,o.jsxs)(i.G7,{style:n.W.tableContainer,children:[(0,o.jsx)(i.G7,{style:[n.W.tableContent,{width:"60%"}],children:(0,o.jsx)(i.xv,{style:n.W.tableContentcolumn,children:e.nome})}),(0,o.jsx)(i.G7,{style:[n.W.tableContent,{width:"20%"}],children:(0,o.jsx)(i.xv,{style:n.W.tableContentcolumn,children:null!==(x=e.resposta)&&void 0!==x?x:""})}),(0,o.jsx)(i.G7,{style:[n.W.tableContent,{width:"20%"}],children:(0,o.jsx)(i.xv,{style:n.W.tableContentcolumn,children:null!==(u=e.obsResposta)&&void 0!==u?u:""})})]}))]})},t))]})};t.Z=r},17844:function(e,t,l){"use strict";var o=l(60664),i=l(67294);let n=()=>{let[e,t]=(0,i.useState)([]),l=localStorage.getItem("report"),n=JSON.parse(l),d=async()=>{let e={...n.params.data};try{let l=await o.h.post("relatorio/".concat(n.params.route),e);t(l.data)}catch(i){console.log(i)}};return(0,i.useEffect)(()=>{n&&d()},[]),e};t.Z=n},42404:function(e,t,l){"use strict";l.d(t,{W:function(){return i}});var o=l(64004);let i=o.mM.create({page:{flexDirection:"column",backgroundColor:"#FFF",justifyContent:"start",paddingTop:15,paddingBottom:30},title:{},header:{position:"fixed",top:-10,left:0,right:0,margin:"0 auto",fontSize:12,height:50,width:"92%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},content:{marginHorizontal:10,fontSize:11,padding:15,flex:1},footer:{position:"absolute",bottom:20,color:"grey",width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",paddingHorizontal:25,fontSize:10},blockTitle:{paddingVertical:5},containerFields:{display:"flex",flexDirection:"row",flexWrap:"wrap",width:"100%",paddingTop:2},fields:{display:"flex",flexDirection:"column",gap:"2px",paddingBottom:5,paddingTop:5},fieldTitle:{fontSize:8,opacity:"0.8"},fieldValue:{fontSize:10},separator:{height:"1px",width:"100%",borderBottom:"1px solid #ddd"},table:{width:"100%",display:"flex",flexDirection:"column",borderRight:"1px solid #ddd",borderTop:"1px solid #ddd",borderBottom:"1px solid #ddd",borderTopLeftRadius:3,borderTopRightRadius:3,borderBottomLeftRadius:3,borderBottomRightRadius:3},tableTitle:{display:"flex",flexDirection:"row",width:"100%",fontSize:8,backgroundColor:"#EEE",borderTopLeftRadius:2,borderTopRightRadius:2,borderLeft:"1px solid #ddd"},tableTitlecolumn:{padding:8},tableContainer:{display:"flex",flexDirection:"row",width:"100%"},tableContent:{padding:8,borderLeft:"1px solid #ddd",borderTop:"1px solid #ddd"},tableContentcolumn:{fontSize:9}})},44360:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return w}});var o=l(85893),i=l(67294),n=l(88942),d=l(97108),r=l(10160),s=l(21609),a=l(64004),c=l(15758),x=l(30140),u=l(52189),h=l(42404),p=l(17844);let f=()=>{var e,t,l,i,n,d,r,s,c;let x=(0,p.Z)(),u=null==x?void 0:null===(e=x.header)||void 0===e?void 0:e.filter(e=>"Nome Fantasia"===e.name)[0].value;return x&&(0,o.jsxs)(a.G7,{style:{width:"100%"},children:[(0,o.jsx)(a.G7,{style:{padding:3,backgroundColor:"#eee",marginTop:20,border:"1px solid #ddd"},children:(0,o.jsx)(a.xv,{style:{width:"100%",textAlign:"center",fontSize:12},children:"RECEBIMENTO MP"})}),(0,o.jsx)(a.G7,{style:{marginTop:20},children:(0,o.jsxs)(a.xv,{style:{fontSize:10},children:["A empresa ",(0,o.jsx)(a.xv,{children:null==x?void 0:x.unidade})," possui como norma de BPF a avalia\xe7\xe3o de seus fornecedores quanto as mat\xe9rias primas e ingredientes por estes fornecidos."]})}),"Fornecedor",(0,o.jsx)(a.G7,{style:{marginTop:20},children:(0,o.jsxs)(a.xv,{style:{fontSize:10},children:["Fornecedor: ",(0,o.jsx)(a.xv,{style:{fontWeight:"bold",fontSize:10},children:u})]})}),(0,o.jsx)(a.G7,{style:{marginTop:20},children:(0,o.jsxs)(a.xv,{style:{fontSize:10},children:[(null==x?void 0:null===(t=x.produtos)||void 0===t?void 0:t.length)>1?"Produtos fornecidos: ":"Produto fornecido: ",null==x?void 0:null===(l=x.produtos)||void 0===l?void 0:l.map((e,t)=>(0,o.jsxs)(a.xv,{children:[(0,o.jsx)(a.xv,{style:{fontWeight:"bold",fontSize:10},children:e.produtos}),t!==x.produtos.length-1&&", "]},t))]})}),(0,o.jsx)(a.G7,{style:{marginTop:20},children:(0,o.jsx)(a.G7,{style:h.W.containerFields,children:null===(i=x.header)||void 0===i?void 0:i.map((e,t)=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.G7,{style:[h.W.fields,{width:"33%"}],children:[(0,o.jsx)(a.xv,{style:h.W.fieldTitle,children:null!==(d=e.name)&&void 0!==d?d:"NI"}),(0,o.jsx)(a.xv,{style:h.W.fieldValue,children:null!==(r=e.value)&&void 0!==r?r:"NI"})]}),(t+1)%3==0&&(0,o.jsx)(a.G7,{style:h.W.separator})]}))})}),null===(n=x.blocks)||void 0===n?void 0:n.map((e,t)=>(0,o.jsx)(a.G7,{style:[e,{marginTop:30}],children:(0,o.jsxs)(a.G7,{style:h.W.table,children:[(0,o.jsxs)(a.G7,{style:h.W.tableTitle,children:[(0,o.jsx)(a.xv,{style:[h.W.tableTitlecolumn,{width:"60%"}],children:e.nome}),(0,o.jsx)(a.xv,{style:[h.W.tableTitlecolumn,{width:"20%",borderLeft:"1px solid #ddd"}],children:"Resposta"}),(0,o.jsx)(a.xv,{style:[h.W.tableTitlecolumn,{width:"20%",borderLeft:"1px solid #ddd"}],children:"Observa\xe7\xe3o"})]}),e.itens.map((e,t)=>(0,o.jsxs)(a.G7,{style:h.W.tableContainer,children:[(0,o.jsx)(a.G7,{style:[h.W.tableContent,{width:"60%"}],children:(0,o.jsx)(a.xv,{style:h.W.tableContentcolumn,children:e.nome})}),(0,o.jsx)(a.G7,{style:[h.W.tableContent,{width:"20%"}],children:(0,o.jsx)(a.xv,{style:h.W.tableContentcolumn,children:null!==(s=e.resposta)&&void 0!==s?s:""})}),(0,o.jsx)(a.G7,{style:[h.W.tableContent,{width:"20%"}],children:(0,o.jsx)(a.xv,{style:h.W.tableContentcolumn,children:null!==(c=e.obsResposta)&&void 0!==c?c:""})})]}))]})},t))]})},v=()=>{let e={DadosFornecedor:u.Z,DadosRecebimentoMp:f};return e},m=e=>{let{nameComponent:t}=e,l=v(),i=l[t];return(0,o.jsx)(a.BB,{children:(0,o.jsxs)(a.T3,{size:"A4",style:{paddingHorizontal:25},children:[(0,o.jsx)(x.Z,{}),i&&(0,o.jsx)(i,{}),(0,o.jsx)(c.Z,{})]})})},j=e=>{let{nameComponent:t}=e,l=()=>{console.log("Assinatura eletronica")},i=()=>{window.close()},n=[{id:1,title:"Fechar",color:"primary",size:"large",variant:"outlined",icon:"ooui:close",function:i},{id:2,title:"Assinar digitalmente",color:"primary",size:"large",variant:"outlined",icon:"fluent:signature-24-filled",function:l}];return(0,o.jsxs)("div",{className:"fixed bottom-10 right-8 flex flex-col gap-2",children:[n&&n.map(e=>(0,o.jsx)("div",{style:{textAlign:"center"},onClick:e.function,children:(0,o.jsx)(r.Z,{color:e.color,size:e.size,variant:e.variant,children:(0,o.jsx)(s.Z,{icon:e.icon})})},e.id)),(0,o.jsx)("div",{children:(0,o.jsx)(a.WD,{document:(0,o.jsx)(m,{nameComponent:t}),fileName:t,targetDirectory:"C:/Users/Jonatan/Desktop/teste",children(e){let{blob:t,url:l,loading:i,error:n}=e;return(0,o.jsx)("div",{style:{textAlign:"center"},children:(0,o.jsx)(r.Z,{color:"primary",size:"large",variant:"outlined",children:(0,o.jsx)(s.Z,{icon:"basil:download-solid"})})})}})})]})},y=()=>(0,o.jsx)(a.T3,{size:"A4",children:(0,o.jsx)(a.G7,{children:(0,o.jsx)(a.xv,{style:{color:"red",fontSize:20,padding:10},children:"Erro ao carregar o relat\xf3rio. Entre em contato com o suporte."})})});var g=l(11163);l(40039);let b=()=>{let e=localStorage.getItem("report"),t=JSON.parse(e),l=null==t?void 0:t.nameComponent,r=v(),s=r[l],[a,c]=i.useState({}),x=(0,g.useRouter)();return(0,i.useEffect)(()=>{c(x.query)},[x.query]),(0,o.jsx)(n.Z,{children:s?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(j,{nameComponent:l}),(0,o.jsx)(d.Z,{params:null==x?void 0:x.query,children:(0,o.jsx)(s,{params:null==x?void 0:x.query})})]}):(0,o.jsx)(y,{})})};b.getLayout=e=>(0,o.jsx)(n.Z,{children:e}),b.setConfig=()=>({mode:"dark"});var w=b}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=83102)}),_N_E=e.O()}]);