(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4957],{59435:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/item/novo",function(){return n(56918)}])},90492:function(e,t,n){"use strict";var r=n(85893),s=n(11163),o=n.n(s),l=n(67294),a=n(60565),i=n(83830),c=n(60664),u=n(49837),d=n(91359),f=n(79072),m=n(87536),h=n(86501),x=n(47842),p=n(45061),g=n(46749),v=n(14155),b=n(29308),Z=n(84220),j=n(67569);let w=e=>{var t,n;let{id:s}=e,[w,D]=(0,l.useState)(!1),[y,C]=(0,l.useState)(null),_=o(),E=s&&s>0?"edit":"new",P=_.pathname,{title:S}=(0,l.useContext)(a.f),{setId:k}=(0,l.useContext)(i.X),{trigger:F,handleSubmit:I,setValue:N,reset:O,control:A,formState:{errors:q},register:T}=(0,m.cI)(),X=async e=>{try{"new"===E?await c.h.post("".concat((0,g.g_)(P),"/new/insertData"),e).then(e=>{_.push("".concat((0,g.g_)(P))),k(e.data),h.ZP.success(g.OD.successNew)}):"edit"===E&&(await c.h.post("".concat(P,"/updateData/").concat(s),e),h.ZP.success(g.OD.successUpdate)),setSavingForm(!savingForm)}catch(t){t.response&&409===t.response.status?h.ZP.error(g.OD.errorRepeated):console.log(t)}},$=async()=>{try{await c.h.delete("".concat(P,"/").concat(s)),k(null),D(!1),h.ZP.success(g.OD.successDelete)}catch(e){e.response&&409===e.response.status?(h.ZP.error(g.OD.pendingDelete),D(!1)):console.log(e)}},z=async()=>{try{let e="new"===E?"".concat((0,g.g_)(P),"/new/getData"):"".concat(P,"/getData/").concat(s);await c.h.post(e).then(e=>{C(e.data),O(e.data),console.log("\uD83D\uDE80 ~ getData:",e.data)})}catch(t){console.log(t)}};return(0,l.useEffect)(()=>{z(),"new"===E&&setTimeout(()=>{F()},300)},[s]),(0,r.jsxs)(r.Fragment,{children:[!y&&(0,r.jsx)(x.Z,{}),y&&(0,r.jsx)(u.Z,{children:(0,r.jsxs)("form",{onSubmit:I(X),children:[(0,r.jsx)(v.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>I(X),btnDelete:"edit"===E,onclickDelete:()=>D(!0),type:E}),(0,r.jsx)(d.Z,{children:(0,r.jsxs)(f.ZP,{container:!0,spacing:5,children:[(0,r.jsx)(b.Z,{xs:12,md:11,title:"Nome",name:"fields.nome",required:!0,control:A,errors:null==q?void 0:null===(t=q.fields)||void 0===t?void 0:t.nome}),(0,r.jsx)(j.Z,{xs:12,md:1,title:"Ativo",name:"fields.status",value:y.fields.status,typePage:E,register:T}),(0,r.jsx)(Z.Z,{xs:12,md:12,title:"Formul\xe1rios",name:"formulario.fields",value:null==y?void 0:y.formulario.fields,required:!0,options:y.formulario.options,register:T,setValue:N,errors:null==q?void 0:null===(n=q.formulario)||void 0===n?void 0:n.fields})]})})]})}),(0,r.jsx)(p.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir "+S,openModal:w,handleClose:()=>D(!1),handleSubmit:$,btnCancel:!0,btnConfirm:!0})]})};t.Z=w},45061:function(e,t,n){"use strict";var r=n(85893),s=n(75084),o=n(29620),l=n(77745),a=n(95398),i=n(76779),c=n(44642);n(21609);var u=n(19604),d=n(29630),f=n(55343),m=n(67836),h=n(67294),x=n(82747);n(84220),n(29308),n(67569),n(3893),n(88475);let p=e=>{let{title:t,text:n,handleClose:p,openModal:g,handleSubmit:v,cnpj:b,nomeFornecedor:Z,gruposAnexo:j,inputEmail:w,btnCancel:D,btnConfirm:y,grupoAnexosFornecedor:C,btnCancelColor:_,btnConfirmColor:E,closeAfterSave:P,listErrors:S}=e,[k,F]=(0,h.useState)(null),[I,N]=(0,h.useState)(!1);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(o.Z,{open:g,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,t){"backdropClick"!==t&&p()},children:[(0,r.jsx)(l.Z,{id:"form-dialog-title",children:t}),(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(c.Z,{sx:{mb:3},children:[n,S&&S.status&&(0,r.jsxs)(u.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,r.jsx)(d.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:S.errors.map((e,t)=>(0,r.jsxs)(d.Z,{variant:"body2",color:"error",children:["- ",e]},t))})]})]}),w&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(f.Z,{sx:{mt:2},fullWidth:!0,children:[(0,r.jsx)(m.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==k?void 0:k.length)>0&&I,inputProps:{onChange(e){F(e.target.value),N(!(0,x.dI)(e.target.value))}}}),(null==k?void 0:k.length)>0&&I&&(0,r.jsx)(d.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,r.jsx)(u.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,r.jsxs)(i.Z,{className:"dialog-actions-dense",children:[D&&(0,r.jsx)(s.Z,{variant:"outlined",color:"primary",onClick:p,children:"Cancelar"}),y&&(0,r.jsx)(s.Z,{variant:"contained",disabled:w&&(null==k?void 0:k.length)>0&&I||S&&S.status,color:E||"error",onClick:w&&b?()=>{v(b,Z,j,k),F(null),P&&p()}:w&&!b?()=>{v(k),F(null),P&&p()}:()=>{v(),P&&p()},children:"Confirmar"})]})]})})};t.Z=p},47842:function(e,t,n){"use strict";var r=n(85893),s=n(70754),o=n(61953);let l=e=>{let{title:t}=e;return(0,r.jsxs)(o.Z,{sx:{position:"absolute",top:"50%",left:"50%",textAlign:"center"},children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)("p",{children:null!=t?t:"Carregando..."})]})};t.Z=l},82747:function(e,t,n){"use strict";function r(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=e.length-2,n=e.substring(0,t),r=e.substring(t),s=0,o=t-7;for(let l=t;l>=1;l--)s+=n.charAt(t-l)*o--,o<2&&(o=9);let a=s%11<2?0:11-s%11;if(a!=r.charAt(0))return!1;t+=1,n=e.substring(0,t),s=0,o=t-7;for(let i=t;i>=1;i--)s+=n.charAt(t-i)*o--,o<2&&(o=9);return(a=s%11<2?0:11-s%11)==r.charAt(1)}function s(e){let t;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=0;for(let r=1;r<=9;r++)n+=parseInt(e.substring(r-1,r))*(11-r);if((10==(t=10*n%11)||11===t)&&(t=0),t!==parseInt(e.substring(9,10)))return!1;n=0;for(let s=1;s<=10;s++)n+=parseInt(e.substring(s-1,s))*(12-s);return(10==(t=10*n%11)||11===t)&&(t=0),t===parseInt(e.substring(10,11))}function o(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}n.d(t,{dI:function(){return o},sw:function(){return s},zk:function(){return r}})},56918:function(e,t,n){"use strict";n.r(t);var r=n(85893),s=n(90492),o=n(60565),l=n(67294);let a=()=>{let{setTitle:e}=(0,l.useContext)(o.f);return(0,l.useEffect)(()=>{e({title:"Item",subtitle:{id:null,count:null,new:!0}})},[]),(0,r.jsx)(s.Z,{})};a.acl={action:"read",subject:"acl-page"},t.default=a}},function(e){e.O(0,[4186,1445,1111,5999,7536,2064,2187,8213,9774,2888,179],function(){return e(e.s=59435)}),_N_E=e.O()}]);