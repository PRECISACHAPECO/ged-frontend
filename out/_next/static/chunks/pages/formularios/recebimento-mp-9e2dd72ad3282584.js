(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2752],{68374:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/formularios/recebimento-mp",function(){return a(63506)}])},93250:function(e,t,a){"use strict";var o=a(85893),n=a(49837),s=a(91359),i=a(95722);let r=e=>{let{result:t,columns:a,btnNew:r=!0,btnPrint:l=!0,btnBack:c,openModal:d}=e;return(0,o.jsx)(n.Z,{children:(0,o.jsx)(s.Z,{sx:{pt:"0"},children:(0,o.jsx)(i.Z,{rows:t,columns:a,buttonsHeader:{btnNew:r,btnPrint:l,btnBack:c,openModal:d}})})})};t.Z=r},63506:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return R}});var o=a(85893),n=a(67294),s=a(60664),i=a(93250),r=a(87536),l=a(56531),c=a(79139),d=a(34282),u=a(29308),m=a(19604),p=a(49837),x=a(91359),h=a(79072),f=a(55343),b=a(29630),g=a(11163),v=a.n(g),D=a(46749),j=a(86887),C=a(60565),I=a(83830),Z=a(40039),S=a(39976),w=a(47842),y=a(86501),P=a(66136),M=a(80377);let N=e=>{let{id:t}=e,{user:a,loggedUnity:i}=(0,n.useContext)(Z.V),[g,C]=(0,n.useState)(!1),[N,k]=(0,n.useState)(!1),[R,E]=(0,n.useState)(!1),[_,z]=(0,n.useState)(!0),[F,O]=(0,n.useState)(null),{createNewNotification:H}=(0,n.useContext)(S.u),[T,V]=(0,n.useState)(!1),[B,A]=(0,n.useState)([]),[X,G]=(0,n.useState)(null),[L,W]=(0,n.useState)([]),[U,J]=(0,n.useState)(""),[K,q]=(0,n.useState)(!1),[Q,Y]=(0,n.useState)({status:!1,errors:[]}),{settings:$}=(0,n.useContext)(P.J6),{setId:ee}=(0,n.useContext)(I.X),[et,ea]=(0,n.useState)({status:!1,message:"Voc\xea n\xe3o tem permiss\xf5es",messageType:"info"}),eo=v(),en=t&&t>0?"edit":"new",es=eo.pathname,{reset:ei,register:er,getValues:el,setValue:ec,control:ed,watch:eu,handleSubmit:em,clearErrors:ep,setError:ex,formState:{errors:eh}}=(0,r.cI)(),ef=async e=>{let o={status:e,auth:{usuarioID:a.usuarioID,papelID:a.papelID,unidadeID:i.unidadeID}};try{k(!0),await s.h.post("".concat(es,"/changeFormStatus/").concat(t),o).then(t=>{y.ZP.success(D.OD.successUpdate),k(!1),eZ(e,null,null)})}catch(n){console.log(n)}},eb=[{id:1,name:"Dados do Recebimento de MP",component:(0,o.jsx)(ReportRecebimentoMP,{params:{id:t,unidadeID:1}}),route:"/relatorio/recebimentoMp/dadosRecebimentoMp",papelID:a.papelID,identification:"01",params:{fornecedorID:t}},{id:2,name:"Declara\xe7\xe3o de prolifici\xeancia",component:(0,o.jsx)(ReportRecebimentoMP,{params:{id:t,unidadeID:1}}),route:"/relatorio/recebimentoMp/dadosRecebimentoMp",papelID:a.papelID,identification:"02",params:{fornecedorID:t}}],eg=async()=>{try{await s.h.post("".concat(es,"/verifyFormPending/").concat(t),{parFormularioID:4}).then(e=>{z(e.data) //! true/false
})}catch(e){console.log(e)}},ev=()=>{try{C(!0),s.h.post("".concat((0,D.g_)(es),"/new/getData"),{unidadeID:i.unidadeID}).then(e=>{console.log("getNewData: ",e.data),A(e.data.fields),W(e.data.blocos),J(e.data.info),ei(e.data),ea({status:!0,message:'Esse formul\xe1rio j\xe1 foi conclu\xeddo! Para alter\xe1-lo \xe9 necess\xe1rio atualizar seu Status para "Em preenchimento" atrav\xe9s do bot\xe3o "Status"!',messageType:"info"}),C(!1)})}catch(e){console.log("\uD83D\uDE80 ~ error:",e)}},eD=()=>{C(!0),t&&s.h.post("".concat(es,"/getData/").concat(t),{type:en,unidadeID:i.unidadeID}).then(e=>{var t,a,o,n;console.log("getData: ",e.data),A(e.data.fields),W(e.data.blocos),J(e.data.info),ei(e.data),O(D.WR[null==e?void 0:null===(t=e.data)||void 0===t?void 0:null===(a=t.info)||void 0===a?void 0:a.status]),ea({status:(null==e?void 0:null===(o=e.data)||void 0===o?void 0:null===(n=o.info)||void 0===n?void 0:n.status)<40,message:'Esse formul\xe1rio j\xe1 foi conclu\xeddo! Para alter\xe1-lo \xe9 necess\xe1rio atualizar seu Status para "Em preenchimento" atrav\xe9s do bot\xe3o "Status"!',messageType:"info"}),eg(),C(!1)})},ej=()=>{ep();let e=!1,t=[];null==B||B.forEach((a,o)=>{let n=a.tabela?"fields[".concat(o,"].").concat(a.tabela):"fields[".concat(o,"].").concat(a.nomeColuna),s=el(n);1!==a.obrigatorio||s||(ex(n,{type:"manual",message:"Campo obrigat\xf3rio"}),t.push(null==a?void 0:a.nomeCampo),e=!0)}),L.forEach((a,o)=>{a.itens.forEach((a,n)=>{let s=el("blocos[".concat(o,"].itens[").concat(n,"].resposta"));(null==a?void 0:a.obrigatorio)!==1||s||(ex("blocos[".concat(o,"].itens[").concat(n,"].resposta"),{type:"manual",message:"Campo obrigat\xe1rio"}),t.push(null==a?void 0:a.nome),e=!0)})}),Y({status:e,errors:t})},eC=()=>{ej(),q(!0),E(!0)},eI=async e=>{e.conclusion=!0,await em(eS)(e)},eZ=(e,o,n)=>{let s=30==e?"Em preenchimento":40==e?"Conclu\xeddo":50==e?"Reprovado":60==e?"Aprovado parcialmente":70==e?"Aprovado":"Pendente",r={titulo:"Formul\xe1rio de Recebimento de MP ".concat(s),descricao:"O formul\xe1rio de Recebimento de MP #".concat(t," est\xe1 ").concat(s,"."),url:"/formularios/recebimento-mp/",urlID:t,tipoNotificacaoID:4,usuarioGeradorID:a.usuarioID,usuarioID:0,unidadeID:i.unidadeID,papelID:1};if(r&&(H(r),o)){let l={titulo:"Recebimento de MP gerado",descricao:"O formul\xe1rio de Recebimento de MP #".concat(t," est\xe1 ").concat(s," e gerou uma n\xe3o conformidade."),url:"/formularios/recebimento-mp/nao-conformidade/",urlID:n,tipoNotificacaoID:5,usuarioGeradorID:a.usuarioID,usuarioID:0,unidadeID:i.unidadeID,papelID:1};H(l)}},eS=async function(e){let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!0===o.conclusion&&o.status>10&&(e.status=o.status,e.obsConclusao=o.obsConclusao);let n={form:e,auth:{usuarioID:a.usuarioID,papelID:a.papelID,unidadeID:i.unidadeID}};try{"edit"==en?(k(!0),await s.h.post("".concat(es,"/updateData/").concat(t),n).then(t=>{y.ZP.success(D.OD.successUpdate),k(!1);let a=null;t.data&&t.data.naoConformidade&&t.data.id>0&&(eo.push("/formularios/recebimento-mp/nao-conformidade/"),ee(t.data.id),a=t.data.id),eZ(e.status,e.naoConformidade,a)})):"new"==en?await s.h.post("".concat((0,D.g_)(es),"/insertData"),n).then(e=>{eo.push("".concat((0,D.g_)(es))),ee(e.data),y.ZP.success(D.OD.successNew)}):y.ZP.error(D.OD.error)}catch(r){console.log(r)}};return(0,n.useEffect)(()=>{"new"==en?ev():eD()},[t,N]),(0,n.useEffect)(()=>{ej()},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(w.Z,{show:g}),(0,o.jsxs)("form",{onSubmit:em(eS),children:[!et.status&&(0,o.jsx)(m.Z,{severity:et.messageType,sx:{mb:2},children:et.message}),(0,o.jsxs)(p.Z,{children:[(0,o.jsx)(j.Z,{btnCancel:!0,btnSave:(null==U?void 0:U.status)<40||"new"==en,btnSend:"edit"==en&&(null==U?void 0:U.status)<50,btnPrint:"edit"==en,generateReport:D.generateReport,actionsData:eb,actions:!0,handleSubmit:()=>em(eS),handleSend:eC,iconConclusion:"mdi:check-bold",titleConclusion:"Aprovar Recebimento de MP",title:"Recebimento de MP",btnStatus:"edit"==en,handleBtnStatus:()=>V(!0),type:en,status:F}),(0,o.jsx)(x.Z,{children:(0,o.jsx)(l.Z,{register:er,errors:eh,setValue:ec,control:ed,fields:B,values:B,disabled:!et.status})})]}),L&&L.map((e,t)=>(0,o.jsx)(c.Z,{index:t,blockKey:"parRecebimentoMpModeloBlocoID",values:e,control:ed,register:er,setValue:ec,errors:eh,disabled:!et.status},t)),U&&(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(p.Z,{sx:{mt:4},children:(0,o.jsx)(x.Z,{children:(0,o.jsx)(h.ZP,{container:!0,spacing:4,children:(0,o.jsx)(h.ZP,{item:!0,xs:12,md:12,children:(0,o.jsxs)(f.Z,{fullWidth:!0,children:[(0,o.jsx)(b.Z,{variant:"subtitle1",sx:{fontWeight:600,mb:2},children:"Observa\xe7\xf5es (campo de uso exclusivo da validadora)"}),(0,o.jsx)(u.Z,{title:"Observa\xe7\xe3o (opcional)",name:"info.obs",multiline:!0,rows:4,value:U.obs,disabled:!et.status,control:ed})]})})})})})}),T&&(0,o.jsx)(d.Z,{id:t,parFormularioID:2,formStatus:U.status,hasFormPending:_,canChangeStatus:U.status>30&&!_,openModal:T,handleClose:()=>V(!1),title:"Hist\xf3rico do Formul\xe1rio",text:"Listagem do hist\xf3rico das movimenta\xe7\xf5es do formul\xe1rio ".concat(t," de Recebimento de MP."),btnCancel:!0,btnConfirm:!0,handleSubmit:ef}),(0,o.jsx)(M.Z,{openModal:K,handleClose(){q(!1),E(!1)},title:"Concluir Formul\xe1rio",text:"Deseja realmente concluir este formul\xe1rio?",info:U,canChange:!_,register:er,setValue:ec,getValues:el,btnCancel:!0,btnConfirm:!0,btnConfirmColor:"primary",conclusionForm:eI,listErrors:Q})]})]})},k=()=>{let{user:e,loggedUnity:t}=(0,n.useContext)(Z.V),[a,r]=(0,n.useState)(null),l=(0,g.useRouter)(),c=l.pathname,{setTitle:d}=(0,n.useContext)(C.f),{id:u}=(0,n.useContext)(I.X),m=async()=>{await s.h.get("".concat(c,"/getList/").concat(t.unidadeID)).then(e=>{r(e.data),d({title:"Recebimento de MP",subtitle:{id:u,count:e.data.length,new:!1}})})};(0,n.useEffect)(()=>{m()},[u]);let p=(0,D.OL)(c,[{headerName:"ID",field:"id",size:.1},{headerName:"Data",field:"data",size:.1},{headerName:"Profissional",field:"profissional",size:.2},{headerName:"Modelo",field:"modelo",size:.2},{headerName:"Status",field:"status",size:.2}]);return(0,o.jsx)(o.Fragment,{children:a?u&&u>0?(0,o.jsx)(N,{id:u}):(0,o.jsx)(i.Z,{result:a,columns:p}):(0,o.jsx)(w.Z,{show:!0})})};var R=k},84242:function(e,t,a){"use strict";a.d(t,{Z:function(){return j}});var o=a(85893),n=a(61953),s=a(67836),i=a(80562),r=a(50853),l=a(11163),c=a.n(l),d=a(75084),u=a(41664),m=a.n(u),p=a(40039),x=a(67294),h=a(83830),f=a(46749),b=a(21609);let g=e=>{let{btnNew:t,btnPrint:a,btnSave:n,btnBack:s,handleSave:i,hasListChange:r,openModal:l}=e,u=c(),{setId:g}=(0,x.useContext)(h.X),{routes:v}=(0,x.useContext)(p.V);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"flex items-center justify-between my-2 w-full",children:[(0,o.jsx)("div",{}),(0,o.jsxs)("div",{className:"flex items-center gap-4 ",children:[(0,o.jsx)("div",{children:s&&(0,o.jsx)(d.Z,{onClick(){u.push((0,f.g_)(u.pathname)),g(null)},type:"button",variant:"outlined",color:"primary",size:"medium",children:(0,o.jsx)(b.Z,{icon:"material-symbols:arrow-back-rounded"})})}),(0,o.jsx)("div",{children:a&&(0,o.jsxs)(d.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",sx:{display:"flex",gap:2},children:[(0,o.jsx)(b.Z,{icon:"mdi:printer"}),(0,o.jsx)("span",{className:"hidden sm:block",children:"Imprimir"})]})}),(0,o.jsx)("div",{className:"",children:t&&v.find(e=>(e.rota===u.pathname||e.rota===(0,f.g_)(u.pathname))&&e.inserir)&&(0,o.jsx)(m(),{href:l?"":"".concat(u.pathname,"/novo"),children:(0,o.jsxs)(d.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",onClick:l||null,sx:{display:"flex",gap:2},children:[(0,o.jsx)(b.Z,{icon:"ic:outline-plus"}),(0,o.jsx)("span",{className:"hidden sm:block",children:"Novo"})]})})}),(0,o.jsx)("div",{children:n&&(0,o.jsxs)(d.Z,{onClick:i,disabled:!r,type:"button",variant:"outlined",color:"primary",size:"medium",sx:{display:"flex",gap:2},children:[(0,o.jsx)(b.Z,{icon:"mdi:check-bold"}),(0,o.jsx)("span",{className:"hidden sm:block",children:"Salvar"})]})})]})]})})};var v=a(61225);let D=e=>((0,v.Z)("(min-width:640px)"),(0,o.jsxs)(n.Z,{sx:{display:"flex",flexDirection:"row",gap:2,alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,o.jsxs)(n.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,o.jsx)(s.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,o.jsx)(n.Z,{sx:{mr:2,display:"flex"},children:(0,o.jsx)(b.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,o.jsx)(i.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,o.jsx)(b.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,o.jsx)("div",{className:"hidden sm:block",children:(0,o.jsx)(r.M,{})})]}),(0,o.jsx)(g,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,btnBack:e.buttonsHeader.btnBack,btnSave:e.buttonsHeader.btnSave,handleSave:e.buttonsHeader.handleSave,hasListChange:e.hasChange,openModal:e.buttonsHeader.openModal})]}));var j=D},95722:function(e,t,a){"use strict";var o=a(85893),n=a(67294),s=a(87630),i=a(75680),r=a(84242),l=a(60565),c=a(83830);let d=e=>{let{rows:t,columns:a,buttonsHeader:d}=e,{handleSearch:u,pageSize:m,setPageSize:p,searchText:x,filteredData:h,setData:f,data:b}=(0,n.useContext)(l.f),{setId:g}=(0,n.useContext)(c.X);return f(t),(0,o.jsx)(s._,{localeText:i.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:a,pageSize:m,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:r.Z},rows:x?h:b,onCellClick(e,t){g(e.row.id)},onPageSizeChange:e=>p(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer",overflow:"scroll"}},componentsProps:{toolbar:{value:x,clearSearch:()=>u(""),onChange:e=>u(e.target.value),buttonsHeader:d}}})};t.Z=d}},function(e){e.O(0,[4186,1445,1111,5999,7536,2389,2187,9349,1515,5876,7921,9774,2888,179],function(){return e(e.s=68374)}),_N_E=e.O()}]);