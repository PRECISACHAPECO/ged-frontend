(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9184],{9164:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/transportador/[id]",function(){return n(61536)}])},76904:function(e,t,n){"use strict";var r=n(85893),s=n(11163),a=n.n(s),o=n(67294),l=n(60664),i=n(49837),c=n(91359),u=n(79072),d=n(87536),h=n(86501),f=n(45061),x=n(46749),m=n(14155),p=n(47842),g=n(60565),Z=n(83830),b=n(40039),v=n(29308),j=n(67569);let w=e=>{var t;let{id:n}=e,[s,w]=(0,o.useState)(!1),[D,C]=(0,o.useState)(null),{setId:y}=(0,o.useContext)(Z.X),_=a(),E=n&&n>0?"edit":"new",P=_.pathname,{title:k}=(0,o.useContext)(g.f),{loggedUnity:S}=(0,o.useContext)(b.V),{trigger:I,handleSubmit:N,reset:O,formState:{errors:A},register:F}=(0,d.cI)(),T=async e=>{let t={fields:{...e.fields,unidadeID:S.unidadeID}};try{"new"===E?await l.h.post("".concat((0,x.g_)(P),"/new/insertData"),t).then(e=>{_.push("".concat((0,x.g_)(P))),y(e.data),h.ZP.success(x.OD.successNew)}):"edit"===E&&(await l.h.post("".concat(P,"/updateData/").concat(n),e),h.ZP.success(x.OD.successUpdate))}catch(r){r.response&&409===r.response.status?h.ZP.error(x.OD.errorRepeated):console.log(r)}},q=async()=>{try{await l.h.delete("".concat(P,"/").concat(n)),y(null),w(!1),h.ZP.success(x.OD.successDelete)}catch(e){e.response&&409===e.response.status?(h.ZP.error(x.OD.pendingDelete),w(!1)):console.log(e)}},X=async()=>{"new"==E&&C({fields:{nome:"",unidadeMedida:"",status:1}});try{let e="new"===E?"".concat((0,x.g_)(P),"/new/getData"):"".concat(P,"/getData/").concat(n);await l.h.post(e,{id:n}).then(e=>{C(e.data),console.log("\uD83D\uDE80 ~ response.data:",e.data),O(e.data)})}catch(t){console.log(t)}};return(0,o.useEffect)(()=>{X(),"new"===E&&setTimeout(()=>{I()},300)},[n]),(0,r.jsxs)(r.Fragment,{children:[!D&&(0,r.jsx)(p.Z,{}),D&&(0,r.jsx)(i.Z,{children:(0,r.jsxs)("form",{onSubmit:N(T),children:[(0,r.jsx)(m.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>N(T),btnDelete:"edit"===E,onclickDelete:()=>w(!0),type:E}),(0,r.jsx)(c.Z,{children:(0,r.jsxs)(u.ZP,{container:!0,spacing:5,children:[(0,r.jsx)(v.Z,{xs:12,md:11,title:"Nome",name:"fields.nome",required:!0,register:F,errors:null==A?void 0:null===(t=A.fields)||void 0===t?void 0:t.nome}),(0,r.jsx)(j.Z,{xs:12,md:1,title:"Ativo",name:"fields.status",value:null==D?void 0:D.fields.status,typePage:E,register:F})]})})]})}),(0,r.jsx)(f.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir "+k,openModal:s,handleClose:()=>w(!1),handleSubmit:q,btnCancel:!0,btnConfirm:!0})]})};t.Z=w},45061:function(e,t,n){"use strict";var r=n(85893),s=n(75084),a=n(29620),o=n(77745),l=n(95398),i=n(76779),c=n(44642);n(21609);var u=n(19604),d=n(29630),h=n(55343),f=n(67836),x=n(67294),m=n(82747);n(84220),n(29308),n(67569),n(3893),n(88475);let p=e=>{let{title:t,text:n,handleClose:p,openModal:g,handleSubmit:Z,cnpj:b,nomeFornecedor:v,gruposAnexo:j,inputEmail:w,btnCancel:D,btnConfirm:C,grupoAnexosFornecedor:y,btnCancelColor:_,btnConfirmColor:E,closeAfterSave:P,listErrors:k}=e,[S,I]=(0,x.useState)(null),[N,O]=(0,x.useState)(!1);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(a.Z,{open:g,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,t){"backdropClick"!==t&&p()},children:[(0,r.jsx)(o.Z,{id:"form-dialog-title",children:t}),(0,r.jsxs)(l.Z,{children:[(0,r.jsxs)(c.Z,{sx:{mb:3},children:[n,k&&k.status&&(0,r.jsxs)(u.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,r.jsx)(d.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:k.errors.map((e,t)=>(0,r.jsxs)(d.Z,{variant:"body2",color:"error",children:["- ",e]},t))})]})]}),w&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(h.Z,{sx:{mt:2},fullWidth:!0,children:[(0,r.jsx)(f.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==S?void 0:S.length)>0&&N,inputProps:{onChange(e){I(e.target.value),O(!(0,m.dI)(e.target.value))}}}),(null==S?void 0:S.length)>0&&N&&(0,r.jsx)(d.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,r.jsx)(u.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,r.jsxs)(i.Z,{className:"dialog-actions-dense",children:[D&&(0,r.jsx)(s.Z,{variant:"outlined",color:"primary",onClick:p,children:"Cancelar"}),C&&(0,r.jsx)(s.Z,{variant:"contained",disabled:w&&(null==S?void 0:S.length)>0&&N||k&&k.status,color:E||"error",onClick:w&&b?()=>{Z(b,v,j,S),I(null),P&&p()}:w&&!b?()=>{Z(S),I(null),P&&p()}:()=>{Z(),P&&p()},children:"Confirmar"})]})]})})};t.Z=p},47842:function(e,t,n){"use strict";var r=n(85893),s=n(70754),a=n(61953);let o=e=>{let{title:t}=e;return(0,r.jsxs)(a.Z,{sx:{position:"absolute",top:"50%",left:"50%",textAlign:"center"},children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)("p",{children:null!=t?t:"Carregando..."})]})};t.Z=o},82747:function(e,t,n){"use strict";function r(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=e.length-2,n=e.substring(0,t),r=e.substring(t),s=0,a=t-7;for(let o=t;o>=1;o--)s+=n.charAt(t-o)*a--,a<2&&(a=9);let l=s%11<2?0:11-s%11;if(l!=r.charAt(0))return!1;t+=1,n=e.substring(0,t),s=0,a=t-7;for(let i=t;i>=1;i--)s+=n.charAt(t-i)*a--,a<2&&(a=9);return(l=s%11<2?0:11-s%11)==r.charAt(1)}function s(e){let t;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=0;for(let r=1;r<=9;r++)n+=parseInt(e.substring(r-1,r))*(11-r);if((10==(t=10*n%11)||11===t)&&(t=0),t!==parseInt(e.substring(9,10)))return!1;n=0;for(let s=1;s<=10;s++)n+=parseInt(e.substring(s-1,s))*(12-s);return(10==(t=10*n%11)||11===t)&&(t=0),t===parseInt(e.substring(10,11))}function a(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}n.d(t,{dI:function(){return a},sw:function(){return s},zk:function(){return r}})},61536:function(e,t,n){"use strict";n.r(t);var r=n(85893),s=n(76904),a=n(60565),o=n(67294);let l=()=>{let{setTitle:e}=(0,o.useContext)(a.f);return(0,o.useEffect)(()=>{e("Transportador")},[]),(0,r.jsx)(s.Z,{})};t.default=l}},function(e){e.O(0,[4186,1445,1111,5999,7536,2064,2187,8213,9774,2888,179],function(){return e(e.s=9164)}),_N_E=e.O()}]);