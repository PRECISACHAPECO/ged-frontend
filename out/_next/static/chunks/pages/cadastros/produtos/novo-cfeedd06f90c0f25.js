(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[168],{5250:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/produtos/novo",function(){return n(6104)}])},8867:function(e,t,n){"use strict";var r=n(85893),s=n(11163),a=n.n(s),i=n(67294),l=n(60664),o=n(49837),c=n(91359),d=n(79072),u=n(87536),f=n(86501),h=n(45061),x=n(46749),m=n(99741),p=n(47842),g=n(60565),v=n(83830),Z=n(40039),b=n(29308),j=n(67569);let w=e=>{var t,n;let{id:s}=e,[w,D]=(0,i.useState)(!1),[C,y]=(0,i.useState)(null),{setId:_}=(0,i.useContext)(v.X),P=a(),E=s&&s>0?"edit":"new",k=P.pathname,{title:S}=(0,i.useContext)(g.f),{loggedUnity:I}=(0,i.useContext)(Z.V),{trigger:N,handleSubmit:O,reset:A,formState:{errors:F},register:q}=(0,u.cI)(),M=async e=>{let t={fields:{...e.fields,unidadeID:I.unidadeID}};try{"new"===E?await l.h.post("".concat((0,x.g_)(k),"/new/insertData"),t).then(e=>{P.push("".concat((0,x.g_)(k))),_(e.data),f.ZP.success(x.OD.successNew)}):"edit"===E&&(await l.h.post("".concat(k,"/updateData/").concat(s),e),f.ZP.success(x.OD.successUpdate))}catch(n){n.response&&409===n.response.status?f.ZP.error(x.OD.errorRepeated):console.log(n)}},T=async()=>{try{await l.h.delete("".concat(k,"/").concat(s)),_(null),D(!1),f.ZP.success(x.OD.successDelete)}catch(e){e.response&&409===e.response.status?(f.ZP.error(x.OD.pendingDelete),D(!1)):console.log(e)}},X=async()=>{"new"==E&&y({fields:{nome:"",status:1}});try{let e="new"===E?"".concat((0,x.g_)(k),"/new/getData"):"".concat(k,"/getData/").concat(s);await l.h.post(e,{id:s}).then(e=>{y(e.data),console.log("\uD83D\uDE80 ~ response.data:",e.data),A(e.data)})}catch(t){console.log(t)}};return(0,i.useEffect)(()=>{X(),"new"===E&&setTimeout(()=>{N()},300)},[s]),(0,r.jsxs)(r.Fragment,{children:[!C&&(0,r.jsx)(p.Z,{}),C&&(0,r.jsx)(o.Z,{children:(0,r.jsxs)("form",{onSubmit:O(M),children:[(0,r.jsx)(m.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>O(M),btnDelete:"edit"===E,onclickDelete:()=>D(!0),type:E}),(0,r.jsx)(c.Z,{children:(0,r.jsxs)(d.ZP,{container:!0,spacing:5,children:[(0,r.jsx)(b.Z,{xs:12,md:8,title:"Nome",name:"fields.nome",required:!0,register:q,errors:null==F?void 0:null===(t=F.fields)||void 0===t?void 0:t.nome}),(0,r.jsx)(b.Z,{xs:12,md:3,title:"Unidade de Medida",name:"fields.unidadeMedida",required:!0,register:q,errors:null==F?void 0:null===(n=F.fields)||void 0===n?void 0:n.unidadeMedida}),(0,r.jsx)(j.Z,{xs:12,md:1,title:"Ativo",name:"fields.status",value:null==C?void 0:C.fields.status,typePage:E,register:q})]})})]})}),(0,r.jsx)(h.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir "+S,openModal:w,handleClose:()=>D(!1),handleSubmit:T,btnCancel:!0,btnConfirm:!0})]})};t.Z=w},45061:function(e,t,n){"use strict";var r=n(85893),s=n(75084),a=n(29620),i=n(77745),l=n(95398),o=n(76779),c=n(44642);n(21609);var d=n(19604),u=n(29630),f=n(55343),h=n(67836),x=n(67294),m=n(82747);n(84220),n(29308),n(67569),n(3893),n(88475);let p=e=>{let{title:t,text:n,handleClose:p,openModal:g,handleSubmit:v,cnpj:Z,gruposAnexo:b,inputEmail:j,btnCancel:w,btnConfirm:D,grupoAnexosFornecedor:C,btnCancelColor:y,btnConfirmColor:_,closeAfterSave:P,listErrors:E}=e,[k,S]=(0,x.useState)(null),[I,N]=(0,x.useState)(!1);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(a.Z,{open:g,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,t){"backdropClick"!==t&&p()},children:[(0,r.jsx)(i.Z,{id:"form-dialog-title",children:t}),(0,r.jsxs)(l.Z,{children:[(0,r.jsxs)(c.Z,{sx:{mb:3},children:[n,E&&E.status&&(0,r.jsxs)(d.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,r.jsx)(u.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:E.errors.map((e,t)=>(0,r.jsxs)(u.Z,{variant:"body2",color:"error",children:["- ",e]},t))})]})]}),j&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(f.Z,{sx:{mt:2},fullWidth:!0,children:[(0,r.jsx)(h.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==k?void 0:k.length)>0&&I,inputProps:{onChange(e){S(e.target.value),N(!(0,m.dI)(e.target.value))}}}),(null==k?void 0:k.length)>0&&I&&(0,r.jsx)(u.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,r.jsx)(d.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,r.jsxs)(o.Z,{className:"dialog-actions-dense",children:[w&&(0,r.jsx)(s.Z,{variant:"outlined",color:"primary",onClick:p,children:"Cancelar"}),D&&(0,r.jsx)(s.Z,{variant:"contained",disabled:j&&(null==k?void 0:k.length)>0&&I||E&&E.status,color:_||"error",onClick:j&&Z?()=>{v(Z,b,k),S(null),P&&p()}:j&&!Z?()=>{v(k),S(null),P&&p()}:()=>{v(),P&&p()},children:"Confirmar"})]})]})})};t.Z=p},47842:function(e,t,n){"use strict";var r=n(85893),s=n(70754),a=n(61953);let i=e=>{let{title:t}=e;return(0,r.jsxs)(a.Z,{sx:{position:"absolute",top:"50%",left:"50%",textAlign:"center"},children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)("p",{children:null!=t?t:"Carregando..."})]})};t.Z=i},82747:function(e,t,n){"use strict";function r(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=e.length-2,n=e.substring(0,t),r=e.substring(t),s=0,a=t-7;for(let i=t;i>=1;i--)s+=n.charAt(t-i)*a--,a<2&&(a=9);let l=s%11<2?0:11-s%11;if(l!=r.charAt(0))return!1;t+=1,n=e.substring(0,t),s=0,a=t-7;for(let o=t;o>=1;o--)s+=n.charAt(t-o)*a--,a<2&&(a=9);return(l=s%11<2?0:11-s%11)==r.charAt(1)}function s(e){let t;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=0;for(let r=1;r<=9;r++)n+=parseInt(e.substring(r-1,r))*(11-r);if((10==(t=10*n%11)||11===t)&&(t=0),t!==parseInt(e.substring(9,10)))return!1;n=0;for(let s=1;s<=10;s++)n+=parseInt(e.substring(s-1,s))*(12-s);return(10==(t=10*n%11)||11===t)&&(t=0),t===parseInt(e.substring(10,11))}function a(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}n.d(t,{dI:function(){return a},sw:function(){return s},zk:function(){return r}})},6104:function(e,t,n){"use strict";n.r(t);var r=n(85893),s=n(8867),a=n(60565),i=n(67294);let l=()=>{let{setTitle:e}=(0,i.useContext)(a.f);return(0,i.useEffect)(()=>{e("Produto")},[]),(0,r.jsx)(s.Z,{})};l.acl={action:"read",subject:"acl-page"},t.default=l}},function(e){e.O(0,[4186,1445,1111,5999,7536,2064,2187,4107,9774,2888,179],function(){return e(e.s=5250)}),_N_E=e.O()}]);