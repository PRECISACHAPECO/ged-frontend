(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9981],{34928:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastros/item/[id]",function(){return r(41814)}])},90492:function(e,t,r){"use strict";var n=r(85893),s=r(11163),o=r.n(s),a=r(67294),l=r(60565),i=r(83830),c=r(60664),u=r(49837),d=r(91359),f=r(79072),m=r(87536),h=r(86501),x=r(47842),p=r(45061),g=r(46749),v=r(14155),Z=r(29308),b=r(84220),j=r(67569);let w=e=>{var t,r;let{id:s}=e,[w,D]=(0,a.useState)(!1),[y,C]=(0,a.useState)(null),_=o(),E=s&&s>0?"edit":"new",P=_.pathname,{title:S,setSubtitle:k}=(0,a.useContext)(l.f),{setId:I}=(0,a.useContext)(i.X),{trigger:F,handleSubmit:N,setValue:O,reset:A,control:q,formState:{errors:T},register:X}=(0,m.cI)(),$=async e=>{try{"new"===E?await c.h.post("".concat((0,g.g_)(P),"/new/insertData"),e).then(e=>{_.push("".concat((0,g.g_)(P))),I(e.data),h.ZP.success(g.OD.successNew)}):"edit"===E&&(await c.h.post("".concat(P,"/updateData/").concat(s),e),h.ZP.success(g.OD.successUpdate)),setSavingForm(!savingForm)}catch(t){t.response&&409===t.response.status?h.ZP.error(g.OD.errorRepeated):console.log(t)}},z=async()=>{try{await c.h.delete("".concat(P,"/").concat(s)),I(null),D(!1),h.ZP.success(g.OD.successDelete)}catch(e){e.response&&409===e.response.status?(h.ZP.error(g.OD.pendingDelete),D(!1)):console.log(e)}},V=async()=>{try{let e="new"===E?"".concat((0,g.g_)(P),"/new/getData"):"".concat(P,"/getData/").concat(s);await c.h.post(e).then(e=>{C(e.data),A(e.data),console.log("\uD83D\uDE80 ~ getData:",e.data)})}catch(t){console.log(t)}};return(0,a.useEffect)(()=>{k("ID: ".concat(s)),V(),"new"===E&&setTimeout(()=>{F()},300)},[s]),(0,n.jsxs)(n.Fragment,{children:[!y&&(0,n.jsx)(x.Z,{}),y&&(0,n.jsx)(u.Z,{children:(0,n.jsxs)("form",{onSubmit:N($),children:[(0,n.jsx)(v.Z,{btnCancel:!0,btnSave:!0,handleSubmit:()=>N($),btnDelete:"edit"===E,onclickDelete:()=>D(!0),type:E}),(0,n.jsx)(d.Z,{children:(0,n.jsxs)(f.ZP,{container:!0,spacing:5,children:[(0,n.jsx)(Z.Z,{xs:12,md:11,title:"Nome",name:"fields.nome",required:!0,control:q,errors:null==T?void 0:null===(t=T.fields)||void 0===t?void 0:t.nome}),(0,n.jsx)(j.Z,{xs:12,md:1,title:"Ativo",name:"fields.status",value:y.fields.status,typePage:E,register:X}),(0,n.jsx)(b.Z,{xs:12,md:12,title:"Formul\xe1rios",name:"formulario.fields",value:null==y?void 0:y.formulario.fields,required:!0,options:y.formulario.options,register:X,setValue:O,errors:null==T?void 0:null===(r=T.formulario)||void 0===r?void 0:r.fields})]})})]})}),(0,n.jsx)(p.Z,{text:"Tem certeza que deseja excluir?",title:"Excluir "+S,openModal:w,handleClose:()=>D(!1),handleSubmit:z,btnCancel:!0,btnConfirm:!0})]})};t.Z=w},45061:function(e,t,r){"use strict";var n=r(85893),s=r(75084),o=r(29620),a=r(77745),l=r(95398),i=r(76779),c=r(44642);r(21609);var u=r(19604),d=r(29630),f=r(55343),m=r(67836),h=r(67294),x=r(82747);r(84220),r(29308),r(67569),r(3893),r(88475);let p=e=>{let{title:t,text:r,handleClose:p,openModal:g,handleSubmit:v,cnpj:Z,nomeFornecedor:b,gruposAnexo:j,inputEmail:w,btnCancel:D,btnConfirm:y,grupoAnexosFornecedor:C,btnCancelColor:_,btnConfirmColor:E,closeAfterSave:P,listErrors:S}=e,[k,I]=(0,h.useState)(null),[F,N]=(0,h.useState)(!1);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(o.Z,{open:g,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,t){"backdropClick"!==t&&p()},children:[(0,n.jsx)(a.Z,{id:"form-dialog-title",children:t}),(0,n.jsxs)(l.Z,{children:[(0,n.jsxs)(c.Z,{sx:{mb:3},children:[r,S&&S.status&&(0,n.jsxs)(u.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,n.jsx)(d.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:S.errors.map((e,t)=>(0,n.jsxs)(d.Z,{variant:"body2",color:"error",children:["- ",e]},t))})]})]}),w&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(f.Z,{sx:{mt:2},fullWidth:!0,children:[(0,n.jsx)(m.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==k?void 0:k.length)>0&&F,inputProps:{onChange(e){I(e.target.value),N(!(0,x.dI)(e.target.value))}}}),(null==k?void 0:k.length)>0&&F&&(0,n.jsx)(d.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,n.jsx)(u.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,n.jsxs)(i.Z,{className:"dialog-actions-dense",children:[D&&(0,n.jsx)(s.Z,{variant:"outlined",color:"primary",onClick:p,children:"Cancelar"}),y&&(0,n.jsx)(s.Z,{variant:"contained",disabled:w&&(null==k?void 0:k.length)>0&&F||S&&S.status,color:E||"error",onClick:w&&Z?()=>{v(Z,b,j,k),I(null),P&&p()}:w&&!Z?()=>{v(k),I(null),P&&p()}:()=>{v(),P&&p()},children:"Confirmar"})]})]})})};t.Z=p},47842:function(e,t,r){"use strict";var n=r(85893),s=r(70754),o=r(61953);let a=e=>{let{title:t}=e;return(0,n.jsxs)(o.Z,{sx:{position:"absolute",top:"50%",left:"50%",textAlign:"center"},children:[(0,n.jsx)(s.Z,{}),(0,n.jsx)("p",{children:null!=t?t:"Carregando..."})]})};t.Z=a},82747:function(e,t,r){"use strict";function n(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=e.length-2,r=e.substring(0,t),n=e.substring(t),s=0,o=t-7;for(let a=t;a>=1;a--)s+=r.charAt(t-a)*o--,o<2&&(o=9);let l=s%11<2?0:11-s%11;if(l!=n.charAt(0))return!1;t+=1,r=e.substring(0,t),s=0,o=t-7;for(let i=t;i>=1;i--)s+=r.charAt(t-i)*o--,o<2&&(o=9);return(l=s%11<2?0:11-s%11)==n.charAt(1)}function s(e){let t;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let r=0;for(let n=1;n<=9;n++)r+=parseInt(e.substring(n-1,n))*(11-n);if((10==(t=10*r%11)||11===t)&&(t=0),t!==parseInt(e.substring(9,10)))return!1;r=0;for(let s=1;s<=10;s++)r+=parseInt(e.substring(s-1,s))*(12-s);return(10==(t=10*r%11)||11===t)&&(t=0),t===parseInt(e.substring(10,11))}function o(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}r.d(t,{dI:function(){return o},sw:function(){return s},zk:function(){return n}})},41814:function(e,t,r){"use strict";r.r(t);var n=r(85893),s=r(90492),o=r(60565),a=r(67294);let l=()=>{let{setTitle:e}=(0,a.useContext)(o.f);return(0,a.useEffect)(()=>{e("Item")},[]),(0,n.jsx)(s.Z,{})};l.acl={action:"read",subject:"acl-page"},t.default=l}},function(e){e.O(0,[4186,1445,1111,5999,7536,2064,2187,8213,9774,2888,179],function(){return e(e.s=34928)}),_N_E=e.O()}]);