(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3666],{84469:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/apresentacao/novo",function(){return n(49783)}])},65929:function(e,t,n){"use strict";var r=n(85893),s=n(11163),a=n.n(s),o=n(67294),l=n(60664),i=n(49837),c=n(91359),u=n(79072),d=n(87536),h=n(86501),f=n(45061),x=n(46749),m=n(47842),p=n(14155),g=n(60565),v=n(83830),Z=n(29308),b=n(67569);let j=e=>{var t;let{id:n}=e,[s,j]=(0,o.useState)(!1),[w,y]=(0,o.useState)(null),C=a(),D=n&&n>0?"edit":"new",_=C.pathname,{title:E}=(0,o.useContext)(g.f),{setId:P}=(0,o.useContext)(v.X),{trigger:k,handleSubmit:S,reset:N,register:A,control:I,formState:{errors:O}}=(0,d.cI)(),F=async e=>{try{"new"===D?await l.h.post("".concat((0,x.g_)(_),"/new/insertData"),e).then(e=>{C.push("".concat((0,x.g_)(_))),P(e.data),h.ZP.success(x.OD.successNew)}):"edit"===D&&(await l.h.post("".concat(_,"/updateData/").concat(n),e),h.ZP.success(x.OD.successUpdate))}catch(t){t.response&&409===t.response.status?h.ZP.error(x.OD.errorRepeated):console.log(t)}},T=async()=>{try{await l.h.delete("".concat(_,"/").concat(n)),P(null),j(!1),h.ZP.success(x.OD.successDelete)}catch(e){e.response&&409===e.response.status?(h.ZP.error(x.OD.pendingDelete),j(!1)):console.log(e)}},q=async()=>{"new"==D&&y({fields:{nome:"",status:1}});try{let e="new"===D?"".concat((0,x.g_)(_),"/new/getData"):"".concat(_,"/getData/").concat(n);await l.h.post(e,{id:n}).then(e=>{y(e.data),console.log("\uD83D\uDE80 ~ response.data:",e.data),N(e.data)})}catch(t){console.log(t)}};return(0,o.useEffect)(()=>{q(),"new"===D&&setTimeout(()=>{k()},300)},[n]),(0,r.jsxs)(r.Fragment,{children:[!w&&(0,r.jsx)(m.Z,{}),w&&(0,r.jsx)(i.Z,{children:(0,r.jsxs)("form",{onSubmit:S(F),children:[(0,r.jsx)(p.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>S(F),btnDelete:"edit"===D,onclickDelete:()=>j(!0),type:D}),(0,r.jsx)(c.Z,{children:(0,r.jsxs)(u.ZP,{container:!0,spacing:5,children:[(0,r.jsx)(Z.Z,{xs:12,md:11,title:"Nome",name:"fields.nome",required:!0,control:I,errors:null==O?void 0:null===(t=O.fields)||void 0===t?void 0:t.nome}),(0,r.jsx)(b.Z,{xs:12,md:1,title:"Ativo",name:"fields.status",value:null==w?void 0:w.fields.status,typePage:D,register:A})]})})]})}),(0,r.jsx)(f.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir "+E,openModal:s,handleClose:()=>j(!1),handleSubmit:T,btnCancel:!0,btnConfirm:!0})]})};t.Z=j},45061:function(e,t,n){"use strict";var r=n(85893),s=n(75084),a=n(29620),o=n(77745),l=n(95398),i=n(76779),c=n(44642);n(21609);var u=n(19604),d=n(29630),h=n(55343),f=n(67836),x=n(67294),m=n(82747);n(84220),n(29308),n(67569),n(3893),n(88475);let p=e=>{let{title:t,text:n,handleClose:p,openModal:g,handleSubmit:v,cnpj:Z,nomeFornecedor:b,gruposAnexo:j,inputEmail:w,btnCancel:y,btnConfirm:C,grupoAnexosFornecedor:D,btnCancelColor:_,btnConfirmColor:E,closeAfterSave:P,listErrors:k}=e,[S,N]=(0,x.useState)(null),[A,I]=(0,x.useState)(!1);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(a.Z,{open:g,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,t){"backdropClick"!==t&&p()},children:[(0,r.jsx)(o.Z,{id:"form-dialog-title",children:t}),(0,r.jsxs)(l.Z,{children:[(0,r.jsxs)(c.Z,{sx:{mb:3},children:[n,k&&k.status&&(0,r.jsxs)(u.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,r.jsx)(d.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:k.errors.map((e,t)=>(0,r.jsxs)(d.Z,{variant:"body2",color:"error",children:["- ",e]},t))})]})]}),w&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(h.Z,{sx:{mt:2},fullWidth:!0,children:[(0,r.jsx)(f.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==S?void 0:S.length)>0&&A,inputProps:{onChange(e){N(e.target.value),I(!(0,m.dI)(e.target.value))}}}),(null==S?void 0:S.length)>0&&A&&(0,r.jsx)(d.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,r.jsx)(u.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,r.jsxs)(i.Z,{className:"dialog-actions-dense",children:[y&&(0,r.jsx)(s.Z,{variant:"outlined",color:"primary",onClick:p,children:"Cancelar"}),C&&(0,r.jsx)(s.Z,{variant:"contained",disabled:w&&(null==S?void 0:S.length)>0&&A||k&&k.status,color:E||"error",onClick:w&&Z?()=>{v(Z,b,j,S),N(null),P&&p()}:w&&!Z?()=>{v(S),N(null),P&&p()}:()=>{v(),P&&p()},children:"Confirmar"})]})]})})};t.Z=p},47842:function(e,t,n){"use strict";var r=n(85893),s=n(70754),a=n(61953);let o=e=>{let{title:t}=e;return(0,r.jsxs)(a.Z,{sx:{position:"absolute",top:"50%",left:"50%",textAlign:"center"},children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)("p",{children:null!=t?t:"Carregando..."})]})};t.Z=o},82747:function(e,t,n){"use strict";function r(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=e.length-2,n=e.substring(0,t),r=e.substring(t),s=0,a=t-7;for(let o=t;o>=1;o--)s+=n.charAt(t-o)*a--,a<2&&(a=9);let l=s%11<2?0:11-s%11;if(l!=r.charAt(0))return!1;t+=1,n=e.substring(0,t),s=0,a=t-7;for(let i=t;i>=1;i--)s+=n.charAt(t-i)*a--,a<2&&(a=9);return(l=s%11<2?0:11-s%11)==r.charAt(1)}function s(e){let t;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=0;for(let r=1;r<=9;r++)n+=parseInt(e.substring(r-1,r))*(11-r);if((10==(t=10*n%11)||11===t)&&(t=0),t!==parseInt(e.substring(9,10)))return!1;n=0;for(let s=1;s<=10;s++)n+=parseInt(e.substring(s-1,s))*(12-s);return(10==(t=10*n%11)||11===t)&&(t=0),t===parseInt(e.substring(10,11))}function a(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}n.d(t,{dI:function(){return a},sw:function(){return s},zk:function(){return r}})},49783:function(e,t,n){"use strict";n.r(t);var r=n(85893),s=n(60565),a=n(67294),o=n(65929);let l=()=>{let{setTitle:e}=(0,a.useContext)(s.f);return(0,a.useEffect)(()=>{e("Apresenta\xe7\xe3o")},[]),(0,r.jsx)(o.Z,{})};t.default=l}},function(e){e.O(0,[4186,1445,1111,5999,7536,2064,2187,8213,9774,2888,179],function(){return e(e.s=84469)}),_N_E=e.O()}]);