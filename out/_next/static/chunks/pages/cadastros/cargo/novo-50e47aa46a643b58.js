(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9388],{70275:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/cargo/novo",function(){return r(21227)}])},45061:function(e,n,r){"use strict";var t=r(85893),s=r(75084),o=r(29620),l=r(77745),a=r(95398),i=r(76779),c=r(44642);r(21609);var u=r(19604),d=r(29630),h=r(55343),m=r(67836),x=r(67294),f=r(82747);r(84220),r(29308),r(67569),r(3893),r(88475);let p=e=>{let{title:n,text:r,handleClose:p,openModal:b,handleSubmit:g,cnpj:j,nomeFornecedor:Z,gruposAnexo:v,inputEmail:y,btnCancel:C,btnConfirm:w,grupoAnexosFornecedor:P,btnCancelColor:_,btnConfirmColor:k,closeAfterSave:E,listErrors:D}=e,[S,N]=(0,x.useState)(null),[O,I]=(0,x.useState)(!1);return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(o.Z,{open:b,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,n){"backdropClick"!==n&&p()},children:[(0,t.jsx)(l.Z,{id:"form-dialog-title",children:n}),(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(c.Z,{sx:{mb:3},children:[r,D&&D.status&&(0,t.jsxs)(u.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,t.jsx)(d.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:D.errors.map((e,n)=>(0,t.jsxs)(d.Z,{variant:"body2",color:"error",children:["- ",e]},n))})]})]}),y&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(h.Z,{sx:{mt:2},fullWidth:!0,children:[(0,t.jsx)(m.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==S?void 0:S.length)>0&&O,inputProps:{onChange(e){N(e.target.value),I(!(0,f.dI)(e.target.value))}}}),(null==S?void 0:S.length)>0&&O&&(0,t.jsx)(d.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,t.jsx)(u.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,t.jsxs)(i.Z,{className:"dialog-actions-dense",children:[C&&(0,t.jsx)(s.Z,{variant:"outlined",color:"primary",onClick:p,children:"Cancelar"}),w&&(0,t.jsx)(s.Z,{variant:"contained",disabled:y&&(null==S?void 0:S.length)>0&&O||D&&D.status,color:k||"error",onClick:y&&j?()=>{g(j,Z,v,S),N(null),E&&p()}:y&&!j?()=>{g(S),N(null),E&&p()}:()=>{g(),E&&p()},children:"Confirmar"})]})]})})};n.Z=p},82747:function(e,n,r){"use strict";function t(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let n=e.length-2,r=e.substring(0,n),t=e.substring(n),s=0,o=n-7;for(let l=n;l>=1;l--)s+=r.charAt(n-l)*o--,o<2&&(o=9);let a=s%11<2?0:11-s%11;if(a!=t.charAt(0))return!1;n+=1,r=e.substring(0,n),s=0,o=n-7;for(let i=n;i>=1;i--)s+=r.charAt(n-i)*o--,o<2&&(o=9);return(a=s%11<2?0:11-s%11)==t.charAt(1)}function s(e){let n;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let r=0;for(let t=1;t<=9;t++)r+=parseInt(e.substring(t-1,t))*(11-t);if((10==(n=10*r%11)||11===n)&&(n=0),n!==parseInt(e.substring(9,10)))return!1;r=0;for(let s=1;s<=10;s++)r+=parseInt(e.substring(s-1,s))*(12-s);return(10==(n=10*r%11)||11===n)&&(n=0),n===parseInt(e.substring(10,11))}function o(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}r.d(n,{dI:function(){return o},sw:function(){return s},zk:function(){return t}})},21227:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return _}});var t=r(85893),s=r(60565),o=r(67294),l=r(11163),a=r.n(l),i=r(60664),c=r(49837),u=r(91359),d=r(79072),h=r(55343),m=r(67836),x=r(22841),f=r(75158),p=r(74231),b=r(87536),g=r(47533),j=r(32631),Z=r(86501),v=r(45061),y=r(46749),C=r(14155);let w=()=>{let[e,n]=(0,o.useState)(!1),{id:r}=a().query,l=a(),w=(0,y.Lo)(l.pathname),P=(0,y.g_)(l.pathname),_=(0,o.useRef)(null),{title:k}=(0,o.useContext)(s.f),E=p.Ry().shape({nome:p.Z_().required("Campo obrigat\xf3rio")}),{control:D,handleSubmit:S,formState:{errors:N},reset:O}=(0,b.cI)({resolver:(0,g.X)(E)}),I=async e=>{try{"new"===w?(await i.h.post("".concat(P,"/novo"),e),l.push(P),Z.ZP.success(y.OD.successNew),O(e)):"edit"===w&&(await i.h.put("".concat(P,"/").concat(r),e),Z.ZP.success(y.OD.successUpdate),console.log("editado"))}catch(n){n.response&&409===n.response.status?Z.ZP.error(y.OD.errorRepeated):console.log(n)}},q=async()=>{try{await i.h.delete("".concat(P,"/").concat(r)),l.push(P),Z.ZP.success(y.OD.successDelete)}catch(e){e.response&&409===e.response.status?(Z.ZP.error(y.OD.pendingDelete),n(!1)):console.log(e)}};return(0,o.useEffect)(()=>{if("new"===w)_.current.focus();else{let e=async()=>{try{let e=await i.h.get("".concat(P,"/").concat(r));O(e.data)}catch(n){console.log(n)}};e()}},[]),(0,t.jsxs)(t.Fragment,{children:[!data&&(0,t.jsx)(Loading,{}),data&&(0,t.jsx)(c.Z,{children:(0,t.jsxs)("form",{onSubmit:S(I),children:[(0,t.jsx)(C.Z,{btnCancel:!0,btnSave:!0,disabled:Object.keys(N).length>0,handleSubmit:()=>S(I),btnDelete:"edit"===w,onclickDelete:()=>n(!0)}),(0,t.jsx)(u.Z,{children:(0,t.jsxs)(d.ZP,{container:!0,spacing:5,children:[(0,t.jsx)(d.ZP,{item:!0,xs:12,md:11,children:(0,t.jsxs)(h.Z,{fullWidth:!0,children:[(0,t.jsx)(b.Qr,{name:"nome",control:D,render(e){let{field:{value:n,onChange:r}}=e;return(0,t.jsx)(m.Z,{value:null!=n?n:"",label:"Nome",onChange:r,placeholder:"Nome",error:Boolean(N.nome),"aria-describedby":"validation-schema-nome",inputRef:_})}}),N.nome&&(0,t.jsx)(j.Z,{sx:{color:"error.main"},id:"validation-schema-nome",children:N.nome.message})]})}),(0,t.jsx)(d.ZP,{item:!0,xs:12,md:1,children:(0,t.jsx)(h.Z,{children:(0,t.jsx)(b.Qr,{name:"status",control:D,rules:{required:!1},render(e){let{field:{value:n,onChange:r}}=e;return(0,t.jsx)(x.Z,{control:(0,t.jsx)(f.Z,{checked:"new"===w||null!=n&&n,onChange:r}),label:"Status",labelPlacement:"top",sx:{mr:8}})}})})})]})})]})}),(0,t.jsx)(v.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir "+k,openModal:e,handleClose:()=>n(!1),handleSubmit:q,btnCancel:!0,btnConfirm:!0})]})},P=()=>{let{setTitle:e}=(0,o.useContext)(s.f);return(0,o.useEffect)(()=>{e({title:"Cargo",subtitle:{id:null,count:null,new:!0}})},[]),(0,t.jsx)(w,{})};var _=P}},function(e){e.O(0,[4186,1445,1111,5999,7536,2064,2187,9491,8213,9774,2888,179],function(){return e(e.s=70275)}),_N_E=e.O()}]);