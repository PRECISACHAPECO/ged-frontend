(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1132],{94156:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/formularios/limpeza",function(){return t(60603)}])},93250:function(e,a,t){"use strict";var o=t(85893),s=t(49837),n=t(91359),i=t(95722);let r=e=>{let{result:a,columns:t,btnNew:r=!0,btnPrint:l=!0,btnBack:d,openModal:c}=e;return(0,o.jsx)(s.Z,{children:(0,o.jsx)(n.Z,{sx:{pt:"0"},children:(0,o.jsx)(i.Z,{rows:a,columns:t,buttonsHeader:{btnNew:r,btnPrint:l,btnBack:d,openModal:c}})})})};a.Z=r},60603:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return _}});var o=t(85893),s=t(67294),n=t(60664),i=t(93250),r=t(87536),l=t(56531),d=t(79139),c=t(34282),u=t(96351),m=t(29308),p=t(19604),x=t(49837),h=t(91359),f=t(79072),b=t(55343),g=t(29630),v=t(11163),D=t.n(v),j=t(46749),C=t(36188),I=t(60565),Z=t(83830),S=t(40039),w=t(39976),y=t(47842),z=t(86501),N=t(66136),P=t(80377);let k=e=>{let{id:a}=e,{user:t,loggedUnity:i}=(0,s.useContext)(S.V),[v,I]=(0,s.useState)(!1),[k,E]=(0,s.useState)(!1),[_,M]=(0,s.useState)(!1),[F,L]=(0,s.useState)(!0),[O,H]=(0,s.useState)(null),{createNewNotification:T}=(0,s.useContext)(w.u),[V,B]=(0,s.useState)(!1),[R,A]=(0,s.useState)([]),[X,G]=(0,s.useState)(null),[W,U]=(0,s.useState)([]),[J,K]=(0,s.useState)(""),[q,Q]=(0,s.useState)(!1),[Y,$]=(0,s.useState)({status:!1,errors:[]}),{settings:ee}=(0,s.useContext)(N.J6),{setId:ea}=(0,s.useContext)(Z.X),[et,eo]=(0,s.useState)({status:!1,message:"Voc\xea n\xe3o tem permiss\xf5es",messageType:"info"}),es=D(),en=a&&a>0?"edit":"new",ei=es.pathname,{reset:er,register:el,getValues:ed,setValue:ec,control:eu,watch:em,handleSubmit:ep,clearErrors:ex,setError:eh,formState:{errors:ef}}=(0,r.cI)(),eb=async e=>{let o={status:e,auth:{usuarioID:t.usuarioID,papelID:t.papelID,unidadeID:i.unidadeID}};try{E(!0),await n.h.post("".concat(ei,"/changeFormStatus/").concat(a),o).then(a=>{z.ZP.success(j.OD.successUpdate),E(!1),eS(e,null,null)})}catch(s){console.log(s)}},eg=[{id:1,name:"Dados do Recebimento de MP",component:(0,o.jsx)(u.Z,{params:{id:a,unidadeID:1}}),route:"/relatorio/recebimentoMp/dadosRecebimentoMp",papelID:t.papelID,identification:"01",params:{fornecedorID:a}},{id:2,name:"Declara\xe7\xe3o de prolifici\xeancia",component:(0,o.jsx)(u.Z,{params:{id:a,unidadeID:1}}),route:"/relatorio/recebimentoMp/dadosRecebimentoMp",papelID:t.papelID,identification:"02",params:{fornecedorID:a}}],ev=async()=>{try{await n.h.post("".concat(ei,"/verifyFormPending/").concat(a),{parFormularioID:4}).then(e=>{L(e.data) //! true/false
})}catch(e){console.log(e)}},eD=()=>{try{I(!0),n.h.post("".concat((0,j.g_)(ei),"/new/getData"),{unidadeID:i.unidadeID}).then(e=>{console.log("getNewData: ",e.data),A(e.data.fields),U(e.data.blocos),K(e.data.info),er(e.data),eo({status:!0,message:'Esse formul\xe1rio j\xe1 foi conclu\xeddo! Para alter\xe1-lo \xe9 necess\xe1rio atualizar seu Status para "Em preenchimento" atrav\xe9s do bot\xe3o "Status"!',messageType:"info"}),I(!1)})}catch(e){console.log("\uD83D\uDE80 ~ error:",e)}},ej=()=>{I(!0),a&&n.h.post("".concat(ei,"/getData/").concat(a),{type:en,unidadeID:i.unidadeID}).then(e=>{var a,t,o,s;console.log("getData: ",e.data),A(e.data.fields),U(e.data.blocos),K(e.data.info),er(e.data),H(j.WR[null==e?void 0:null===(a=e.data)||void 0===a?void 0:null===(t=a.info)||void 0===t?void 0:t.status]),eo({status:(null==e?void 0:null===(o=e.data)||void 0===o?void 0:null===(s=o.info)||void 0===s?void 0:s.status)<40,message:'Esse formul\xe1rio j\xe1 foi conclu\xeddo! Para alter\xe1-lo \xe9 necess\xe1rio atualizar seu Status para "Em preenchimento" atrav\xe9s do bot\xe3o "Status"!',messageType:"info"}),ev(),I(!1)})},eC=()=>{ex();let e=!1,a=[];null==R||R.forEach((t,o)=>{let s=t.tabela?"fields[".concat(o,"].").concat(t.tabela):"fields[".concat(o,"].").concat(t.nomeColuna),n=ed(s);1!==t.obrigatorio||n||(eh(s,{type:"manual",message:"Campo obrigat\xf3rio"}),a.push(null==t?void 0:t.nomeCampo),e=!0)}),W.forEach((t,o)=>{t.itens.forEach((t,s)=>{let n=ed("blocos[".concat(o,"].itens[").concat(s,"].resposta"));(null==t?void 0:t.obrigatorio)!==1||n||(eh("blocos[".concat(o,"].itens[").concat(s,"].resposta"),{type:"manual",message:"Campo obrigat\xe1rio"}),a.push(null==t?void 0:t.nome),e=!0)})}),$({status:e,errors:a})},eI=()=>{eC(),Q(!0),M(!0)},eZ=async e=>{e.conclusion=!0,await ep(ew)(e)},eS=(e,o,s)=>{let n=30==e?"Em preenchimento":40==e?"Conclu\xeddo":50==e?"Reprovado":60==e?"Aprovado parcialmente":70==e?"Aprovado":"Pendente",r={titulo:"Formul\xe1rio de Limpeza ".concat(n),descricao:"O formul\xe1rio de Limpeza #".concat(a," est\xe1 ").concat(n,"."),url:"/formularios/limpeza/",urlID:a,tipoNotificacaoID:6,usuarioGeradorID:t.usuarioID,usuarioID:0,unidadeID:i.unidadeID,papelID:1};if(r&&(T(r),o)){let l={titulo:"Limpeza gerada",descricao:"O formul\xe1rio de Limpeza #".concat(a," est\xe1 ").concat(n," e gerou uma n\xe3o conformidade."),url:"/formularios/limpeza/nao-conformidade/",urlID:s,tipoNotificacaoID:5,usuarioGeradorID:t.usuarioID,usuarioID:0,unidadeID:i.unidadeID,papelID:1};T(l)}},ew=async function(e){let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!0===o.conclusion&&o.status>10&&(e.status=o.status,e.obsConclusao=o.obsConclusao);let s={form:e,auth:{usuarioID:t.usuarioID,papelID:t.papelID,unidadeID:i.unidadeID}};try{"edit"==en?(E(!0),await n.h.post("".concat(ei,"/updateData/").concat(a),s).then(a=>{z.ZP.success(j.OD.successUpdate),E(!1);let t=null;a.data&&a.data.naoConformidade&&a.data.id>0&&(es.push("/formularios/limpeza/nao-conformidade/"),ea(a.data.id),t=a.data.id),eS(e.status,e.naoConformidade,t)})):"new"==en?await n.h.post("".concat((0,j.g_)(ei),"/insertData"),s).then(e=>{es.push("".concat((0,j.g_)(ei))),ea(e.data),z.ZP.success(j.OD.successNew)}):z.ZP.error(j.OD.error)}catch(r){console.log(r)}};return(0,s.useEffect)(()=>{"new"==en?eD():ej()},[a,k]),(0,s.useEffect)(()=>{eC()},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y.Z,{show:v}),(0,o.jsxs)("form",{onSubmit:ep(ew),children:[!et.status&&(0,o.jsx)(p.Z,{severity:et.messageType,sx:{mb:2},children:et.message}),(0,o.jsxs)(x.Z,{children:[(0,o.jsx)(C.Z,{btnCancel:!0,btnSave:(null==J?void 0:J.status)<40||"new"==en,btnSend:"edit"==en&&(null==J?void 0:J.status)<50,btnPrint:"edit"==en,generateReport:j.OE,actionsData:eg,actions:!0,handleSubmit:()=>ep(ew),handleSend:eI,iconConclusion:"mdi:check-bold",titleConclusion:"Aprovar Limpeza",title:"Limpeza",btnStatus:"edit"==en,handleBtnStatus:()=>B(!0),type:en,status:O}),(0,o.jsx)(h.Z,{children:(0,o.jsx)(l.Z,{register:el,errors:ef,setValue:ec,control:eu,fields:R,values:R,disabled:!et.status})})]}),W&&W.map((e,a)=>(0,o.jsx)(d.Z,{index:a,blockKey:"parLimpezaModeloBlocoID",values:e,control:eu,register:el,setValue:ec,errors:ef,disabled:!et.status},a)),J&&(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(x.Z,{sx:{mt:4},children:(0,o.jsx)(h.Z,{children:(0,o.jsx)(f.ZP,{container:!0,spacing:4,children:(0,o.jsx)(f.ZP,{item:!0,xs:12,md:12,children:(0,o.jsxs)(b.Z,{fullWidth:!0,children:[(0,o.jsx)(g.Z,{variant:"subtitle1",sx:{fontWeight:600,mb:2},children:"Observa\xe7\xf5es (campo de uso exclusivo da validadora)"}),(0,o.jsx)(m.Z,{title:"Observa\xe7\xe3o (opcional)",name:"info.obs",multiline:!0,rows:4,value:J.obs,disabled:!et.status,control:eu})]})})})})})}),V&&(0,o.jsx)(c.Z,{id:a,parFormularioID:2,formStatus:J.status,hasFormPending:F,canChangeStatus:J.status>30&&!F,openModal:V,handleClose:()=>B(!1),title:"Hist\xf3rico do Formul\xe1rio",text:"Listagem do hist\xf3rico das movimenta\xe7\xf5es do formul\xe1rio ".concat(a," de Limpeza e Higieniza\xe7\xe3o."),btnCancel:!0,btnConfirm:!0,handleSubmit:eb}),(0,o.jsx)(P.Z,{openModal:q,handleClose(){Q(!1),M(!1)},title:"Concluir Formul\xe1rio",text:"Deseja realmente concluir este formul\xe1rio?",info:J,canChange:!F,register:el,setValue:ec,getValues:ed,btnCancel:!0,btnConfirm:!0,btnConfirmColor:"primary",conclusionForm:eZ,listErrors:Y})]})]})},E=()=>{let{user:e,loggedUnity:a}=(0,s.useContext)(S.V),[t,r]=(0,s.useState)(null),l=(0,v.useRouter)(),d=l.pathname,{setTitle:c}=(0,s.useContext)(I.f),{id:u}=(0,s.useContext)(Z.X),m=async()=>{await n.h.get("".concat(d,"/getList/").concat(a.unidadeID)).then(e=>{r(e.data),c({title:"Limpeza e Higieniza\xe7\xe3o",subtitle:{id:u,count:e.data.length,new:!1}})})};(0,s.useEffect)(()=>{m()},[u]);let p=(0,j.OL)(d,[{headerName:"ID",field:"id",size:.1},{headerName:"Data",field:"data",size:.1},{headerName:"Profissional",field:"profissional",size:.2},{headerName:"Modelo",field:"modelo",size:.2},{headerName:"Status",field:"status",size:.2}]);return(0,o.jsx)(o.Fragment,{children:t?u&&u>0?(0,o.jsx)(k,{id:u}):(0,o.jsx)(i.Z,{result:t,columns:p}):(0,o.jsx)(y.Z,{show:!0})})};var _=E},84242:function(e,a,t){"use strict";t.d(a,{Z:function(){return j}});var o=t(85893),s=t(61953),n=t(67836),i=t(80562),r=t(50853),l=t(11163),d=t.n(l),c=t(75084),u=t(41664),m=t.n(u),p=t(40039),x=t(67294),h=t(83830),f=t(46749),b=t(21609);let g=e=>{let{btnNew:a,btnPrint:t,btnSave:s,btnBack:n,handleSave:i,hasListChange:r,openModal:l}=e,u=d(),{setId:g}=(0,x.useContext)(h.X),{routes:v}=(0,x.useContext)(p.V);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"flex items-center justify-between my-2 w-full",children:[(0,o.jsx)("div",{}),(0,o.jsxs)("div",{className:"flex items-center gap-4 ",children:[(0,o.jsx)("div",{children:n&&(0,o.jsx)(c.Z,{onClick(){u.push((0,f.g_)(u.pathname)),g(null)},type:"button",variant:"outlined",color:"primary",size:"medium",children:(0,o.jsx)(b.Z,{icon:"material-symbols:arrow-back-rounded"})})}),(0,o.jsx)("div",{children:t&&(0,o.jsxs)(c.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",sx:{display:"flex",gap:2},children:[(0,o.jsx)(b.Z,{icon:"mdi:printer"}),(0,o.jsx)("span",{className:"hidden sm:block",children:"Imprimir"})]})}),(0,o.jsx)("div",{className:"",children:a&&v.find(e=>e.rota===u.pathname&&e.inserir)&&(0,o.jsx)(m(),{href:l?"":"".concat(u.pathname,"/novo"),children:(0,o.jsxs)(c.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",onClick:l||null,sx:{display:"flex",gap:2},children:[(0,o.jsx)(b.Z,{icon:"ic:outline-plus"}),(0,o.jsx)("span",{className:"hidden sm:block",children:"Novo"})]})})}),(0,o.jsx)("div",{children:s&&(0,o.jsxs)(c.Z,{onClick:i,disabled:!r,type:"button",variant:"outlined",color:"primary",size:"medium",sx:{display:"flex",gap:2},children:[(0,o.jsx)(b.Z,{icon:"mdi:check-bold"}),(0,o.jsx)("span",{className:"hidden sm:block",children:"Salvar"})]})})]})]})})};var v=t(61225);let D=e=>((0,v.Z)("(min-width:640px)"),(0,o.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"row",gap:2,alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,o.jsxs)(s.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,o.jsx)(n.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,o.jsx)(s.Z,{sx:{mr:2,display:"flex"},children:(0,o.jsx)(b.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,o.jsx)(i.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,o.jsx)(b.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,o.jsx)("div",{className:"hidden sm:block",children:(0,o.jsx)(r.M,{})})]}),(0,o.jsx)(g,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,btnBack:e.buttonsHeader.btnBack,btnSave:e.buttonsHeader.btnSave,handleSave:e.buttonsHeader.handleSave,hasListChange:e.hasChange,openModal:e.buttonsHeader.openModal})]}));var j=D},95722:function(e,a,t){"use strict";var o=t(85893),s=t(67294),n=t(87630),i=t(75680),r=t(84242),l=t(60565),d=t(83830);let c=e=>{let{rows:a,columns:t,buttonsHeader:c}=e,{handleSearch:u,pageSize:m,setPageSize:p,searchText:x,filteredData:h,setData:f,data:b}=(0,s.useContext)(l.f),{setId:g}=(0,s.useContext)(d.X);return f(a),(0,o.jsx)(n._,{localeText:i.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:t,pageSize:m,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:r.Z},rows:x?h:b,onCellClick(e,a){g(e.row.id)},onPageSizeChange:e=>p(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer",overflow:"scroll"}},componentsProps:{toolbar:{value:x,clearSearch:()=>u(""),onChange:e=>u(e.target.value),buttonsHeader:c}}})};a.Z=c}},function(e){e.O(0,[4186,1445,1111,5999,7536,2389,1289,1082,1515,2708,7686,9774,2888,179],function(){return e(e.s=94156)}),_N_E=e.O()}]);