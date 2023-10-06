"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5348],{45061:function(e,r,t){var n=t(85893),l=t(75084),i=t(1890),a=t(77745),o=t(95398),s=t(76779),c=t(44642);t(21609);var d=t(19604),u=t(29630),m=t(55343),x=t(67836),h=t(67294),f=t(82747);t(84220),t(29308),t(67569),t(3893),t(88475);let p=e=>{let{title:r,text:t,handleClose:p,openModal:v,handleSubmit:g,cnpj:j,nomeFornecedor:Z,gruposAnexo:b,email:y,setEmail:C,inputEmail:k,btnCancel:I,btnConfirm:N,grupoAnexosFornecedor:P,btnCancelColor:F,btnConfirmColor:S,closeAfterSave:w,listErrors:z}=e,[E,D]=(0,h.useState)(!1);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(i.Z,{open:v,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,onClose(e,r){"backdropClick"!==r&&p()},children:[(0,n.jsx)(a.Z,{id:"form-dialog-title",children:r}),(0,n.jsxs)(o.Z,{children:[(0,n.jsxs)(c.Z,{sx:{mb:3},children:[t,z&&z.status&&(0,n.jsxs)(d.Z,{variant:"outlined",severity:"error",sx:{mt:2},children:["Por favor, verifique os campos abaixo:",(0,n.jsx)(u.Z,{variant:"subtitle1",color:"error",sx:{mt:2},children:z.errors.map((e,r)=>(0,n.jsxs)(u.Z,{variant:"body2",color:"error",children:["- ",e]},r))})]})]}),k&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(m.Z,{sx:{mt:2},fullWidth:!0,children:[(0,n.jsx)(x.Z,{defaultValue:"",type:"email",label:"E-mail do Fornecedor (opcional)",placeholder:"E-mail do Fornecedor (opcional)","aria-describedby":"validation-schema-nome",name:"email",error:(null==y?void 0:y.length)>0&&E,inputProps:{onChange(e){C(e.target.value),D(!(0,f.dI)(e.target.value))}}}),(null==y?void 0:y.length)>0&&E&&(0,n.jsx)(u.Z,{variant:"body2",color:"error",children:"Por favor, insira um e-mail v\xe1lido!"})]}),(0,n.jsx)(d.Z,{severity:"info",sx:{mt:2},children:"Se o e-mail for preenchido, o mesmo receber\xe1 as instru\xe7\xf5es de cadastro e preenchimento do formul\xe1rio no e-mail."})]})]}),(0,n.jsxs)(s.Z,{className:"dialog-actions-dense",children:[I&&(0,n.jsx)(l.Z,{variant:"outlined",color:"primary",onClick:p,children:"Cancelar"}),N&&(0,n.jsx)(l.Z,{variant:"contained",disabled:k&&(null==y?void 0:y.length)>0&&E||z&&z.status,color:S||"error",onClick:k&&j?()=>{g(j,Z,b,y),w&&p()}:k&&!j?()=>{g(y),w&&p()}:()=>{g(),w&&p()},children:"Confirmar"})]})]})})};r.Z=p},3893:function(e,r,t){var n=t(85893),l=t(79072),i=t(61953),a=t(22841),o=t(75158);let s=e=>{let{xs:r,md:t,title:s,index:c,name:d,typePage:u,value:m,disabled:x,register:h,onChange:f,...p}=e;return(0,n.jsx)(l.ZP,{item:!0,xs:r,md:t,children:(0,n.jsx)(i.Z,{display:"flex",flexDirection:"column",alignItems:"start",children:(0,n.jsx)(a.Z,{control:(0,n.jsx)(o.Z,{...p,name:d,...h(d),defaultChecked:m,disabled:x,onChange:f}),label:s,size:"small",sx:{"&:hover":{"& .MuiFormControlLabel-label":{color:"primary.main"}}}})})})};r.Z=s},50287:function(e,r,t){var n=t(85893),l=t(79072),i=t(55343),a=t(67836),o=t(87536);let s=e=>{let{xs:r,md:t,title:s,isRequired:c,disabled:d,type:u,value:m,name:x,setDateFormat:h,typeValidation:f,daysValidation:p,dateStatus:v,errors:g,control:j}=e,Z=e=>{let r=new Date(e),t=r.getDate().toString().padStart(2,"0"),n=(r.getMonth()+1).toString().padStart(2,"0"),l=r.getFullYear();return"".concat(l,"-").concat(n,"-").concat(t)};return(0,n.jsx)(l.ZP,{item:!0,xs:r,md:t,sx:{my:1},children:(0,n.jsx)(i.Z,{fullWidth:!0,children:(0,n.jsx)(o.Qr,{name:x,control:j,render(e){var r,t;let{field:l}=e;return(0,n.jsx)(a.Z,{type:"date",size:"small",label:s,disabled:!!d,defaultValue:m?Z(m):"",onChange(e){l.onChange(e),f&&h(f,u,e.target.value,p)},variant:"outlined",fullWidth:!0,InputLabelProps:{shrink:!0},inputProps:{min:null==v?void 0:null===(r=v[u])||void 0===r?void 0:r.dataIni,max:null==v?void 0:null===(t=v[u])||void 0===t?void 0:t.dataFim}})}})})})};r.Z=s},88475:function(e,r,t){var n=t(85893),l=t(79072),i=t(61953),a=t(29630),o=t(72389),s=t(80562),c=t(21609);let d=e=>{let{xs:r,md:t,title:d,removeItem:u,item:m,pending:x,index:h,textSuccess:f,textError:p}=e;return f=f||"Remover este item",p=p||"Este item n\xe3o pode ser removido pois possui cadastros vinculados a ele",(0,n.jsx)(l.ZP,{item:!0,xs:r,md:t,children:(0,n.jsxs)(i.Z,{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,n.jsx)(a.Z,{variant:"caption",children:d}),(0,n.jsx)(o.Z,{title:1==x?p:f,children:(0,n.jsx)(s.Z,{color:"error",size:"small",onClick(){1!=x&&u(m,h)},sx:{opacity:1==x?.5:1,cursor:1==x?"default":"pointer"},children:(0,n.jsx)(c.Z,{icon:"tabler:trash-filled"})})})]})})};r.Z=d},84220:function(e,r,t){var n=t(85893),l=t(79072),i=t(55343),a=t(35966),o=t(67836),s=t(87536);let c=e=>{var r;let{xs:t,md:c,title:d,options:u,name:m,type:x,limitTags:h,value:f,required:p,control:v,disabled:g,multiple:j,setValue:Z,errors:b,onChange:y,className:C,createNew:k,handleRegistroEstabelecimento:I}=e,N=[...u];return k&&(N=[{nome:"-- Novo --"},...u]),(0,n.jsx)(l.ZP,{item:!0,xs:t,md:c,sx:{my:1},className:C,children:(0,n.jsx)(i.Z,{fullWidth:!0,children:(0,n.jsx)(s.Qr,{name:m,control:v,defaultValue:f,rules:{required:p},render(e){let{field:t}=e;return(0,n.jsx)(a.Z,{...t,multiple:j,limitTags:h,size:"small",options:N,getOptionLabel:e=>(null==e?void 0:e.cnpj)?"".concat(e.cnpj," - ").concat(e.nome):null==e?void 0:e.nome,value:j&&t.value&&t.value.length>0?t.value.map(e=>u.find(r=>r.nome===e.nome)):null!==(r=t.value)&&void 0!==r?r:{nome:""},disabled:g,onChange(e,r){r&&"-- Novo --"===r.nome?(k(),Z(m,j?[]:{nome:""})):(y&&y(r),Z(m,r),"registroestabelecimento"===x&&I(r?r.id:null))},renderInput:e=>(0,n.jsx)(o.Z,{...e,label:d,placeholder:d,error:!!b}),noOptionsText:"Sem op\xe7\xf5es"})}})})})};r.Z=c},47842:function(e,r,t){var n=t(85893),l=t(70754);let i=e=>{let{show:r,title:t}=e;return r&&(0,n.jsx)("div",{className:"absolute inset-0 flex items-center justify-center rounded-lg bg-gray-900 z-50",children:(0,n.jsxs)("div",{className:"flex flex-col justify-center items-center gap-2 ",children:[(0,n.jsx)(l.Z,{color:"primary"}),(0,n.jsx)("p",{className:"text-sm opacity-80 text-white ",children:null!=t?t:"Carregando..."})]})})};r.Z=i},82747:function(e,r,t){function n(e){if(14!==(e=null==e?void 0:e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let r=e.length-2,t=e.substring(0,r),n=e.substring(r),l=0,i=r-7;for(let a=r;a>=1;a--)l+=t.charAt(r-a)*i--,i<2&&(i=9);let o=l%11<2?0:11-l%11;if(o!=n.charAt(0))return!1;r+=1,t=e.substring(0,r),l=0,i=r-7;for(let s=r;s>=1;s--)l+=t.charAt(r-s)*i--,i<2&&(i=9);return(o=l%11<2?0:11-l%11)==n.charAt(1)}function l(e){let r;if(11!==(e=e.replace(/[^\d]+/g,"")).length||/^(\d)\1+$/.test(e))return!1;let t=0;for(let n=1;n<=9;n++)t+=parseInt(e.substring(n-1,n))*(11-n);if((10==(r=10*t%11)||11===r)&&(r=0),r!==parseInt(e.substring(9,10)))return!1;t=0;for(let l=1;l<=10;l++)t+=parseInt(e.substring(l-1,l))*(12-l);return(10==(r=10*t%11)||11===r)&&(r=0),r===parseInt(e.substring(10,11))}function i(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}t.d(r,{dI:function(){return i},sw:function(){return l},zk:function(){return n}})}}]);