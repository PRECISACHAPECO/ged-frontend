(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2683],{77013:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/transportador",function(){return n(508)}])},76904:function(e,t,n){"use strict";var s=n(85893),r=n(11163),a=n.n(r),i=n(67294),l=n(60664),o=n(49837),c=n(91359),d=n(79072),u=n(87536),x=n(86501),m=n(45061),h=n(46749),p=n(14155),f=n(47842),j=n(60565),g=n(83830),b=n(40039),v=n(29308),Z=n(67569);let w=e=>{var t;let{id:n}=e,[r,w]=(0,i.useState)(!1),[C,y]=(0,i.useState)(null),{setId:D}=(0,i.useContext)(g.X),P=a(),N=n&&n>0?"edit":"new",k=P.pathname,{title:S}=(0,i.useContext)(j.f),{loggedUnity:I}=(0,i.useContext)(b.V),{trigger:_,handleSubmit:z,reset:E,control:A,formState:{errors:M},register:O}=(0,u.cI)(),F=async e=>{let t={fields:{...e.fields,unidadeID:I.unidadeID}};try{"new"===N?await l.h.post("".concat((0,h.g_)(k),"/new/insertData"),t).then(e=>{P.push("".concat((0,h.g_)(k))),D(e.data),x.ZP.success(h.OD.successNew)}):"edit"===N&&(await l.h.post("".concat(k,"/updateData/").concat(n),e),x.ZP.success(h.OD.successUpdate))}catch(s){s.response&&409===s.response.status?x.ZP.error(h.OD.errorRepeated):console.log(s)}},T=async()=>{try{await l.h.delete("".concat(k,"/").concat(n)),D(null),w(!1),x.ZP.success(h.OD.successDelete)}catch(e){e.response&&409===e.response.status?(x.ZP.error(h.OD.pendingDelete),w(!1)):console.log(e)}},H=async()=>{"new"==N&&y({fields:{nome:"",unidadeMedida:"",status:1}});try{let e="new"===N?"".concat((0,h.g_)(k),"/new/getData"):"".concat(k,"/getData/").concat(n);await l.h.post(e,{id:n}).then(e=>{y(e.data),console.log("\uD83D\uDE80 ~ response.data:",e.data),E(e.data)})}catch(t){console.log(t)}};return(0,i.useEffect)(()=>{H(),"new"===N&&setTimeout(()=>{_()},300)},[n]),(0,s.jsxs)(s.Fragment,{children:[!C&&(0,s.jsx)(f.Z,{}),C&&(0,s.jsx)(o.Z,{children:(0,s.jsxs)("form",{onSubmit:z(F),children:[(0,s.jsx)(p.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>z(F),btnDelete:"edit"===N,onclickDelete:()=>w(!0),type:N}),(0,s.jsx)(c.Z,{children:(0,s.jsxs)(d.ZP,{container:!0,spacing:5,children:[(0,s.jsx)(v.Z,{xs:11,md:11,title:"Nome",name:"fields.nome",required:!0,control:A,errors:null==M?void 0:null===(t=M.fields)||void 0===t?void 0:t.nome}),(0,s.jsx)(Z.Z,{xs:1,md:1,title:"Ativo",name:"fields.status",value:null==C?void 0:C.fields.status,typePage:N,register:O})]})})]})}),(0,s.jsx)(m.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir "+S.title,openModal:r,handleClose:()=>w(!1),handleSubmit:T,btnCancel:!0,btnConfirm:!0})]})};t.Z=w},45061:function(e,t,n){"use strict";var s=n(85893),r=n(75084),a=n(1890),i=n(77745),l=n(95398),o=n(76779),c=n(44642);n(21609);var d=n(19604),u=n(29630),x=n(55343),m=n(67836),h=n(67294),p=n(82747);n(84220),n(29308),n(67569),n(3893),n(88475);let f=e=>{let{title:t,text:n,handleClose:f,openModal:j,handleSubmit:g,cnpj:b,nomeFornecedor:v,gruposAnexo:Z,email:w,setEmail:C,inputEmail:y,btnCancel:D,btnConfirm:P,grupoAnexosFornecedor:N,btnCancelColor:k,btnConfirmColor:S,closeAfterSave:I,listErrors:_}=e,[z,E]=(0,h.useState)(!1);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(a.Z,{open:j,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,t){"backdropClick"!==t&&f()},children:[(0,s.jsx)(i.Z,{id:"form-dialog-title",children:t}),(0,s.jsxs)(l.Z,{children:[(0,s.jsxs)(c.Z,{sx:{mb:3},children:[n,_&&_.status&&(0,s.jsxs)(d.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,s.jsx)(u.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:_.errors.map((e,t)=>(0,s.jsxs)(u.Z,{variant:"body2",color:"error",children:["- ",e]},t))})]})]}),y&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(x.Z,{sx:{mt:2},fullWidth:!0,children:[(0,s.jsx)(m.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==w?void 0:w.length)>0&&z,inputProps:{onChange(e){C(e.target.value),E(!(0,p.dI)(e.target.value))}}}),(null==w?void 0:w.length)>0&&z&&(0,s.jsx)(u.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,s.jsx)(d.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,s.jsxs)(o.Z,{className:"dialog-actions-dense",children:[D&&(0,s.jsx)(r.Z,{variant:"outlined",color:"primary",onClick:f,children:"Cancelar"}),P&&(0,s.jsx)(r.Z,{variant:"contained",disabled:y&&(null==w?void 0:w.length)>0&&z||_&&_.status,color:S||"error",onClick:y&&b?()=>{g(b,v,Z,w),I&&f()}:y&&!b?()=>{g(w),I&&f()}:()=>{g(),I&&f()},children:"Confirmar"})]})]})})};t.Z=f},93250:function(e,t,n){"use strict";var s=n(85893),r=n(49837),a=n(91359),i=n(40372);let l=e=>{let{result:t,columns:n,btnNew:l=!0,btnPrint:o=!0,openModal:c}=e;return(0,s.jsx)(r.Z,{children:(0,s.jsx)(a.Z,{sx:{pt:"0"},children:(0,s.jsx)(i.Z,{rows:t,columns:n,buttonsHeader:{btnNew:l,btnPrint:o,openModal:c}})})})};t.Z=l},47842:function(e,t,n){"use strict";var s=n(85893),r=n(70754),a=n(61953);let i=e=>{let{title:t}=e;return(0,s.jsxs)(a.Z,{sx:{position:"absolute",top:"50%",left:"50%",textAlign:"center"},children:[(0,s.jsx)(r.Z,{}),(0,s.jsx)("p",{children:null!=t?t:"Carregando..."})]})};t.Z=i},82747:function(e,t,n){"use strict";function s(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=e.length-2,n=e.substring(0,t),s=e.substring(t),r=0,a=t-7;for(let i=t;i>=1;i--)r+=n.charAt(t-i)*a--,a<2&&(a=9);let l=r%11<2?0:11-r%11;if(l!=s.charAt(0))return!1;t+=1,n=e.substring(0,t),r=0,a=t-7;for(let o=t;o>=1;o--)r+=n.charAt(t-o)*a--,a<2&&(a=9);return(l=r%11<2?0:11-r%11)==s.charAt(1)}function r(e){let t;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=0;for(let s=1;s<=9;s++)n+=parseInt(e.substring(s-1,s))*(11-s);if((10==(t=10*n%11)||11===t)&&(t=0),t!==parseInt(e.substring(9,10)))return!1;n=0;for(let r=1;r<=10;r++)n+=parseInt(e.substring(r-1,r))*(12-r);return(10==(t=10*n%11)||11===t)&&(t=0),t===parseInt(e.substring(10,11))}function a(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}n.d(t,{dI:function(){return a},sw:function(){return r},zk:function(){return s}})},508:function(e,t,n){"use strict";n.r(t);var s=n(85893),r=n(67294),a=n(60664),i=n(76904),l=n(93250),o=n(83830),c=n(60565),d=n(40039),u=n(47842),x=n(11163),m=n(46749);let h=()=>{let[e,t]=(0,r.useState)(null),n=(0,x.useRouter)(),{id:h}=(0,r.useContext)(o.X),p=n.pathname,{setTitle:f}=(0,r.useContext)(c.f),{user:j,loggedUnity:g}=(0,r.useContext)(d.V),b=async()=>{await a.h.post(p,{unidadeID:g.unidadeID}).then(e=>{t(e.data),f({title:"Transportador",subtitle:{id:h,count:e.data.length,new:!1}})})};(0,r.useEffect)(()=>{b()},[h]);let v=(0,m.OL)(p,[{title:"ID",field:"id",size:.1},{title:"Nome",field:"nome",size:.8},{title:"Status",field:"status",size:.1}]);return(0,s.jsx)(s.Fragment,{children:e?h&&h>0?(0,s.jsx)(i.Z,{id:h}):(0,s.jsx)(l.Z,{result:e,columns:v}):(0,s.jsx)(u.Z,{})})};t.default=h},40372:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var s=n(85893),r=n(67294),a=n(87630),i=n(75680),l=n(61953),o=n(67836),c=n(80562),d=n(50853),u=n(11163),x=n.n(u),m=n(75084),h=n(41664),p=n.n(h),f=n(40039),j=n(21609);let g=e=>{let{btnNew:t,btnPrint:n,openModal:a}=e,i=x(),{routes:l}=(0,r.useContext)(f.V);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"flex items-center justify-end sm:justify-normal gap-4 my-2 ",children:[(0,s.jsx)("div",{children:n&&(0,s.jsxs)(m.Z,{onClick:()=>window.print(),type:"button",variant:"outlined",color:"primary",size:"medium",sx:{display:"flex",gap:2},children:[(0,s.jsx)(j.Z,{icon:"mdi:printer"}),(0,s.jsx)("span",{className:"hidden sm:block",children:"Imprimir"})]})}),(0,s.jsx)("div",{className:"",children:t&&l.find(e=>e.rota===i.pathname&&e.inserir)&&(0,s.jsx)(p(),{href:a?"":"".concat(i.pathname,"/novo"),children:(0,s.jsxs)(m.Z,{type:"button",variant:"outlined",color:"primary",size:"medium",onClick:a||null,sx:{display:"flex",gap:2},children:[(0,s.jsx)(j.Z,{icon:"ic:outline-plus"}),(0,s.jsx)("span",{className:"hidden sm:block",children:"Novo"})]})})})]})})};var b=n(61225);let v=e=>((0,b.Z)("(min-width:640px)"),(0,s.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"row",gap:2,alignItems:"baseline",justifyContent:"space-between",p:e=>e.spacing(8,0,0,0)},children:[(0,s.jsxs)(l.Z,{sx:{display:"flex",gap:"8px",textAlig:"end"},children:[(0,s.jsx)(o.Z,{size:"medium",value:e.value,onChange:e.onChange,placeholder:"Buscar…",variant:"standard",InputProps:{startAdornment:(0,s.jsx)(l.Z,{sx:{mr:2,display:"flex"},children:(0,s.jsx)(j.Z,{icon:"mdi:magnify",fontSize:20})}),endAdornment:(0,s.jsx)(c.Z,{size:"medium",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,s.jsx)(j.Z,{icon:"mdi:close",fontSize:20})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}}),(0,s.jsx)("div",{className:"hidden sm:block",children:(0,s.jsx)(d.M,{})})]}),(0,s.jsx)(g,{btnNew:e.buttonsHeader.btnNew,btnPrint:e.buttonsHeader.btnPrint,openModal:e.buttonsHeader.openModal})]}));var Z=n(60565),w=n(83830);let C=e=>{let{rows:t,columns:n,buttonsHeader:l}=e,{handleSearch:o,pageSize:c,setPageSize:d,searchText:u,filteredData:x,setData:m,data:h}=(0,r.useContext)(Z.f),{setId:p}=(0,r.useContext)(w.X);return m(t),(0,s.jsx)(a._,{localeText:i.F.components.MuiDataGrid.defaultProps.localeText,autoHeight:!0,columns:n,pageSize:c,rowsPerPageOptions:[10,20,30,40,50,100],components:{Toolbar:v},rows:u?x:h,onCellClick(e,t){p(e.row.id)},onPageSizeChange:e=>d(e),sx:{"& .MuiDataGrid-cell":{cursor:"pointer",overflow:"scroll"}},componentsProps:{toolbar:{value:u,clearSearch:()=>o(""),onChange:e=>o(e.target.value),buttonsHeader:l}}})};var y=C}},function(e){e.O(0,[4186,1445,1111,5999,7536,2064,2187,1082,8213,9774,2888,179],function(){return e(e.s=77013)}),_N_E=e.O()}]);