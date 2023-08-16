(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3172],{86191:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/tipo-veiculo/novo",function(){return n(29553)}])},62094:function(e,t,n){"use strict";var r=n(85893),s=n(11163),o=n.n(s),a=n(67294),l=n(60664),i=n(49837),c=n(91359),u=n(79072),d=n(87536),h=n(86501),f=n(45061),x=n(46749),m=n(14155),p=n(47842),g=n(60565),v=n(83830),b=n(29308),Z=n(67569);let j=e=>{var t;let{id:n}=e,[s,j]=(0,a.useState)(!1),[w,y]=(0,a.useState)(null),{setId:C}=(0,a.useContext)(v.X),_=o(),D=n&&n>0?"edit":"new",P=_.pathname,{title:E}=(0,a.useContext)(g.f),{trigger:k,handleSubmit:S,reset:N,control:I,formState:{errors:O},register:A}=(0,d.cI)(),F=async e=>{try{"new"===D?await l.h.post("".concat((0,x.g_)(P),"/new/insertData"),e).then(e=>{_.push("".concat((0,x.g_)(P))),C(e.data),h.ZP.success(x.OD.successNew)}):"edit"===D&&(await l.h.post("".concat(P,"/updateData/").concat(n),e),h.ZP.success(x.OD.successUpdate))}catch(t){t.response&&409===t.response.status?h.ZP.error(x.OD.errorRepeated):console.log(t)}},T=async()=>{try{await l.h.delete("".concat(P,"/").concat(n)),C(null),j(!1),h.ZP.success(x.OD.successDelete)}catch(e){e.response&&409===e.response.status?(h.ZP.error(x.OD.pendingDelete),j(!1)):console.log(e)}},q=async()=>{"new"==D&&y({fields:{nome:"",status:1}});try{let e="new"===D?"".concat((0,x.g_)(P),"/new/getData"):"".concat(P,"/getData/").concat(n);await l.h.post(e,{id:n}).then(e=>{y(e.data),N(e.data)})}catch(t){console.log(t)}};return(0,a.useEffect)(()=>{q(),"new"===D&&setTimeout(()=>{k()},300)},[n]),(0,r.jsxs)(r.Fragment,{children:[!w&&(0,r.jsx)(p.Z,{}),w&&(0,r.jsx)(i.Z,{children:(0,r.jsxs)("form",{onSubmit:S(F),children:[(0,r.jsx)(m.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>S(F),btnDelete:"edit"===D,onclickDelete:()=>j(!0),type:D}),(0,r.jsx)(c.Z,{children:(0,r.jsxs)(u.ZP,{container:!0,spacing:5,children:[(0,r.jsx)(b.Z,{xs:11,md:11,title:"Nome",name:"fields.nome",required:!0,control:I,errors:null==O?void 0:null===(t=O.fields)||void 0===t?void 0:t.nome}),(0,r.jsx)(Z.Z,{xs:1,md:1,title:"Ativo",name:"fields.status",value:null==w?void 0:w.fields.status,typePage:D,register:A})]})})]})}),(0,r.jsx)(f.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir "+E.title,openModal:s,handleClose:()=>j(!1),handleSubmit:T,btnCancel:!0,btnConfirm:!0})]})};t.Z=j},45061:function(e,t,n){"use strict";var r=n(85893),s=n(75084),o=n(1890),a=n(77745),l=n(95398),i=n(76779),c=n(44642);n(21609);var u=n(19604),d=n(29630),h=n(55343),f=n(67836),x=n(67294),m=n(82747);n(84220),n(29308),n(67569),n(3893),n(88475);let p=e=>{let{title:t,text:n,handleClose:p,openModal:g,handleSubmit:v,cnpj:b,nomeFornecedor:Z,gruposAnexo:j,email:w,setEmail:y,inputEmail:C,btnCancel:_,btnConfirm:D,grupoAnexosFornecedor:P,btnCancelColor:E,btnConfirmColor:k,closeAfterSave:S,listErrors:N}=e,[I,O]=(0,x.useState)(!1);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(o.Z,{open:g,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,t){"backdropClick"!==t&&p()},children:[(0,r.jsx)(a.Z,{id:"form-dialog-title",children:t}),(0,r.jsxs)(l.Z,{children:[(0,r.jsxs)(c.Z,{sx:{mb:3},children:[n,N&&N.status&&(0,r.jsxs)(u.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,r.jsx)(d.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:N.errors.map((e,t)=>(0,r.jsxs)(d.Z,{variant:"body2",color:"error",children:["- ",e]},t))})]})]}),C&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(h.Z,{sx:{mt:2},fullWidth:!0,children:[(0,r.jsx)(f.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==w?void 0:w.length)>0&&I,inputProps:{onChange(e){y(e.target.value),O(!(0,m.dI)(e.target.value))}}}),(null==w?void 0:w.length)>0&&I&&(0,r.jsx)(d.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,r.jsx)(u.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,r.jsxs)(i.Z,{className:"dialog-actions-dense",children:[_&&(0,r.jsx)(s.Z,{variant:"outlined",color:"primary",onClick:p,children:"Cancelar"}),D&&(0,r.jsx)(s.Z,{variant:"contained",disabled:C&&(null==w?void 0:w.length)>0&&I||N&&N.status,color:k||"error",onClick:C&&b?()=>{v(b,Z,j,w),S&&p()}:C&&!b?()=>{v(w),S&&p()}:()=>{v(),S&&p()},children:"Confirmar"})]})]})})};t.Z=p},47842:function(e,t,n){"use strict";var r=n(85893),s=n(70754),o=n(61953);let a=e=>{let{title:t}=e;return(0,r.jsxs)(o.Z,{sx:{position:"absolute",top:"50%",left:"50%",textAlign:"center"},children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)("p",{children:null!=t?t:"Carregando..."})]})};t.Z=a},82747:function(e,t,n){"use strict";function r(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=e.length-2,n=e.substring(0,t),r=e.substring(t),s=0,o=t-7;for(let a=t;a>=1;a--)s+=n.charAt(t-a)*o--,o<2&&(o=9);let l=s%11<2?0:11-s%11;if(l!=r.charAt(0))return!1;t+=1,n=e.substring(0,t),s=0,o=t-7;for(let i=t;i>=1;i--)s+=n.charAt(t-i)*o--,o<2&&(o=9);return(l=s%11<2?0:11-s%11)==r.charAt(1)}function s(e){let t;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=0;for(let r=1;r<=9;r++)n+=parseInt(e.substring(r-1,r))*(11-r);if((10==(t=10*n%11)||11===t)&&(t=0),t!==parseInt(e.substring(9,10)))return!1;n=0;for(let s=1;s<=10;s++)n+=parseInt(e.substring(s-1,s))*(12-s);return(10==(t=10*n%11)||11===t)&&(t=0),t===parseInt(e.substring(10,11))}function o(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}n.d(t,{dI:function(){return o},sw:function(){return s},zk:function(){return r}})},29553:function(e,t,n){"use strict";n.r(t);var r=n(85893),s=n(60565),o=n(67294),a=n(62094);let l=()=>{let{setTitle:e}=(0,o.useContext)(s.f);return(0,o.useEffect)(()=>{e({title:"Tipo de Ve\xedculo",subtitle:{id:null,count:null,new:!0}})},[]),(0,r.jsx)(a.Z,{})};t.default=l}},function(e){e.O(0,[4186,1445,1111,5999,7536,2064,2187,8213,9774,2888,179],function(){return e(e.s=86191)}),_N_E=e.O()}]);