(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5462],{13860:function(e){var t;t=function(){"use strict";var e="millisecond",t="second",n="minute",o="hour",a="week",s="month",r="quarter",i="year",l="date",u="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=function(e,t,n){var o=String(e);return!o||o.length>=t?e:""+Array(t+1-o.length).join(n)+e},h="en",f={};f[h]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||"th")+"]"}};var p=function(e){return e instanceof y},x=function e(t,n,o){var a;if(!t)return h;if("string"==typeof t){var s=t.toLowerCase();f[s]&&(a=s),n&&(f[s]=n,a=s);var r=t.split("-");if(!a&&r.length>1)return e(r[0])}else{var i=t.name;f[i]=t,a=i}return!o&&a&&(h=a),a||!o&&h},v=function(e,t){if(p(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new y(n)},b={s:m,z:function(e){var t=-e.utcOffset(),n=Math.abs(t);return(t<=0?"+":"-")+m(Math.floor(n/60),2,"0")+":"+m(n%60,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var o=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(o,s),r=n-a<0,i=t.clone().add(o+(r?-1:1),s);return+(-(o+(n-a)/(r?a-i:i-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(u){return({M:s,y:i,w:a,d:"day",D:l,h:o,m:n,s:t,ms:e,Q:r})[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};b.l=x,b.i=p,b.w=function(e,t){return v(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var y=function(){function m(e){this.$L=x(e.locale,null,!0),this.parse(e)}var h=m.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(b.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var o=t.match(d);if(o){var a=o[2]-1||0,s=(o[7]||"0").substring(0,3);return n?new Date(Date.UTC(o[1],a,o[3]||1,o[4]||0,o[5]||0,o[6]||0,s)):new Date(o[1],a,o[3]||1,o[4]||0,o[5]||0,o[6]||0,s)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return b},h.isValid=function(){return this.$d.toString()!==u},h.isSame=function(e,t){var n=v(e);return this.startOf(t)<=n&&n<=this.endOf(t)},h.isAfter=function(e,t){return v(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<v(e)},h.$g=function(e,t,n){return b.u(e)?this[t]:this.set(n,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,r){var u=this,d=!!b.u(r)||r,c=b.p(e),m=function(e,t){var n=b.w(u.$u?Date.UTC(u.$y,t,e):new Date(u.$y,t,e),u);return d?n:n.endOf("day")},h=function(e,t){return b.w(u.toDate()[e].apply(u.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),u)},f=this.$W,p=this.$M,x=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case i:return d?m(1,0):m(31,11);case s:return d?m(1,p):m(0,p+1);case a:var y=this.$locale().weekStart||0,D=(f<y?f+7:f)-y;return m(d?x-D:x+(6-D),p);case"day":case l:return h(v+"Hours",0);case o:return h(v+"Minutes",1);case n:return h(v+"Seconds",2);case t:return h(v+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(a,r){var u,d=b.p(a),c="set"+(this.$u?"UTC":""),m=((u={}).day=c+"Date",u[l]=c+"Date",u[s]=c+"Month",u[i]=c+"FullYear",u[o]=c+"Hours",u[n]=c+"Minutes",u[t]=c+"Seconds",u[e]=c+"Milliseconds",u)[d],h="day"===d?this.$D+(r-this.$W):r;if(d===s||d===i){var f=this.clone().set(l,1);f.$d[m](h),f.init(),this.$d=f.set(l,Math.min(this.$D,f.daysInMonth())).$d}else m&&this.$d[m](h);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[b.p(e)]()},h.add=function(e,r){var l,u=this;e=Number(e);var d=b.p(r),c=function(t){var n=v(u);return b.w(n.date(n.date()+Math.round(t*e)),u)};if(d===s)return this.set(s,this.$M+e);if(d===i)return this.set(i,this.$y+e);if("day"===d)return c(1);if(d===a)return c(7);var m=((l={})[n]=6e4,l[o]=36e5,l[t]=1e3,l)[d]||1,h=this.$d.getTime()+e*m;return b.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||u;var o=e||"YYYY-MM-DDTHH:mm:ssZ",a=b.z(this),s=this.$H,r=this.$m,i=this.$M,l=n.weekdays,d=n.months,m=function(e,n,a,s){return e&&(e[n]||e(t,o))||a[n].slice(0,s)},h=function(e){return b.s(s%12||12,e,"0")},f=n.meridiem||function(e,t,n){var o=e<12?"AM":"PM";return n?o.toLowerCase():o},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:i+1,MM:b.s(i+1,2,"0"),MMM:m(n.monthsShort,i,d,3),MMMM:m(d,i),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:m(n.weekdaysMin,this.$W,l,2),ddd:m(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(s),HH:b.s(s,2,"0"),h:h(1),hh:h(2),a:f(s,r,!0),A:f(s,r,!1),m:String(r),mm:b.s(r,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:a};return o.replace(c,function(e,t){return t||p[e]||a.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(e,l,u){var d,c=b.p(l),m=v(e),h=(m.utcOffset()-this.utcOffset())*6e4,f=this-m,p=b.m(this,m);return p=((d={})[i]=p/12,d[s]=p,d[r]=p/3,d[a]=(f-h)/6048e5,d.day=(f-h)/864e5,d[o]=f/36e5,d[n]=f/6e4,d[t]=f/1e3,d)[c]||f,u?p:b.a(p)},h.daysInMonth=function(){return this.endOf(s).$D},h.$locale=function(){return f[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),o=x(e,t,!0);return o&&(n.$L=o),n},h.clone=function(){return b.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},m}(),D=y.prototype;return v.prototype=D,[["$ms",e],["$s",t],["$m",n],["$H",o],["$W","day"],["$M",s],["$y",i],["$D",l]].forEach(function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),v.extend=function(e,t){return e.$i||(e(t,y,v),e.$i=!0),v},v.locale=x,v.isDayjs=p,v.unix=function(e){return v(1e3*e)},v.en=f[h],v.Ls=f,v.p={},v},e.exports=t()},57548:function(e,t,n){var o;o=function(e){"use strict";var t={name:"pt-br",weekdays:"domingo_segunda-feira_ter\xe7a-feira_quarta-feira_quinta-feira_sexta-feira_s\xe1bado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_s\xe1b".split("_"),weekdaysMin:"Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"),months:"janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),ordinal:function(e){return e+"\xba"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [\xe0s] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm"},relativeTime:{future:"em %s",past:"h\xe1 %s",s:"poucos segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um m\xeas",MM:"%d meses",y:"um ano",yy:"%d anos"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t},e.exports=o(n(13860))},35528:function(e,t,n){"use strict";var o=n(85893);n(21609);var a=n(84220),s=n(29308);let r=e=>{var t,n,r,i,l;let{field:u,data:d,name:c,indexData:m,disabled:h,control:f,register:p,setValue:x,errors:v}=e;return console.log("\uD83D\uDE80 ~~~~~~~~~~~~~ Product data:",u.options),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("input",{type:"hidden",name:"produtos[".concat(m,"].recebimentompProdutoID"),defaultValue:null==u?void 0:u.recebimentompProdutoID,...p("produtos[".concat(m,"].recebimentompProdutoID"))}),u&&"int"===u.tipo&&u.tabela&&(0,o.jsx)(a.Z,{xs:12,md:12,title:u.nomeCampo,name:c,value:null!==(l=null==d?void 0:d[u.tabela])&&void 0!==l?l:null,multiple:!1,disabled:h,options:u.options,register:p,setValue:x,control:f,errors:null==v?void 0:null===(t=v.products)||void 0===t?void 0:null===(n=t[m])||void 0===n?void 0:n[u.tabela]},m),u&&"string"===u.tipo&&(0,o.jsx)(s.Z,{title:u.nomeCampo,name:c,value:null==d?void 0:d[u.nomeColuna],type:u.nomeColuna,disabled:h,control:f,errors:null==v?void 0:null===(r=v.produtos)||void 0===r?void 0:null===(i=r[m])||void 0===i?void 0:i[u.nomeColuna]})]})};t.Z=r},55462:function(e,t,n){"use strict";var o=n(85893),a=n(67294),s=n(87536),r=n(21609);n(49540);var i=n(56531),l=n(35528),u=n(79139),d=n(34282),c=n(96351),m=n(29308),h=n(88475);n(7071);var f=n(19604),p=n(49837),x=n(91359),v=n(29630),b=n(61953),y=n(75084),D=n(79072),g=n(55343),j=n(11163),$=n.n(j),M=n(46749),S=n(60664),_=n(5707),C=n(60565),I=n(83830),w=n(40039),W=n(39976),Z=n(47842),O=n(86501),P=n(66136),T=n(80377);n(30381),n(13860),n(57548);let Y=e=>{var t;let{id:n}=e,{user:j,loggedUnity:Y}=(0,a.useContext)(w.V),[L,E]=(0,a.useState)(!1),[G,H]=(0,a.useState)(!1),[F,k]=(0,a.useState)(!1),[R,N]=(0,a.useState)(!0),[V,A]=(0,a.useState)(null),{createNewNotification:U}=(0,a.useContext)(W.u),[z,q]=(0,a.useState)(!1),[J,B]=(0,a.useState)([]),[K,Q]=(0,a.useState)([]),[X,ee]=(0,a.useState)([]),[et,en]=(0,a.useState)(null),[eo,ea]=(0,a.useState)([]),[es,er]=(0,a.useState)([]),[ei,el]=(0,a.useState)([]),[eu,ed]=(0,a.useState)(""),[ec,em]=(0,a.useState)(!1),[eh,ef]=(0,a.useState)({status:!1,errors:[]}),{settings:ep}=(0,a.useContext)(P.J6),{setId:ex}=(0,a.useContext)(I.X),[ev,eb]=(0,a.useState)({status:!1,message:"Voc\xea n\xe3o tem permiss\xf5es",messageType:"info"}),{setTitle:ey,setStorageId:eD,getStorageId:eg}=(0,a.useContext)(C.f),ej=$(),e$=n&&n>0?"edit":"new",eM=ej.pathname,{trigger:eS,reset:e_,register:eC,getValues:eI,setValue:ew,control:eW,watch:eZ,handleSubmit:eO,clearErrors:eP,setError:eT,formState:{errors:eY}}=(0,s.cI)(),eL=async e=>{let t={status:e,auth:{usuarioID:j.usuarioID,papelID:j.papelID,unidadeID:Y.unidadeID}};try{H(!0),await S.h.post("".concat(eM,"/changeFormStatus/").concat(n),t).then(t=>{O.ZP.success(M.OD.successUpdate),H(!1),eq(e,null,null)})}catch(o){console.log(o)}},eE=()=>{let e=[...X,{recebimentompProdutoID:0,recebimentompID:n}];ee(e)},eG=[{id:1,name:"Dados do Recebimento de MP",component:(0,o.jsx)(c.Z,{params:{id:n,unidadeID:1}}),route:"/relatorio/recebimentoMp/dadosRecebimentoMp",papelID:j.papelID,identification:"01",params:{fornecedorID:n}},{id:2,name:"Declara\xe7\xe3o de prolifici\xeancia",component:(0,o.jsx)(c.Z,{params:{id:n,unidadeID:1}}),route:"/relatorio/recebimentoMp/dadosRecebimentoMp",papelID:j.papelID,identification:"02",params:{fornecedorID:n}}],eH=async()=>{try{await S.h.post("".concat(eM,"/verifyFormPending/").concat(n),{parFormularioID:2}).then(e=>{N(e.data) //! true/false
})}catch(e){console.log(e)}},eF=()=>{try{E(!0),S.h.post("".concat((0,M.g_)(eM),"/new/getData"),{unidadeID:Y.unidadeID}).then(e=>{console.log("getNewData: ",e.data),B(e.data.fields),ee(e.data.products),Q(e.data.fieldsProduct),el(e.data.blocos),ed(e.data.info),e_(e.data),eb({status:!0,message:'Esse formul\xe1rio j\xe1 foi conclu\xeddo! Para alter\xe1-lo \xe9 necess\xe1rio atualizar seu Status para "Em preenchimento" atrav\xe9s do bot\xe3o "Status"!',messageType:"info"}),E(!1)})}catch(e){console.log("\uD83D\uDE80 ~ error:",e)}},ek=()=>{E(!0),n&&S.h.post("".concat(eM,"/getData/").concat(n),{type:e$,unidadeID:Y.unidadeID}).then(e=>{var t,n,o,a;console.log("getData: ",e.data),B(e.data.fields),ee(e.data.products),Q(e.data.fieldsProduct),el(e.data.blocos),ed(e.data.info),e_(e.data),A(M.WR[null==e?void 0:null===(t=e.data)||void 0===t?void 0:null===(n=t.info)||void 0===n?void 0:n.status]),eb({status:(null==e?void 0:null===(o=e.data)||void 0===o?void 0:null===(a=o.info)||void 0===a?void 0:a.status)<40,message:'Esse formul\xe1rio j\xe1 foi conclu\xeddo! Para alter\xe1-lo \xe9 necess\xe1rio atualizar seu Status para "Em preenchimento" atrav\xe9s do bot\xe3o "Status"!',messageType:"info"}),eH(),E(!1)})},eR=(e,t)=>{if(1==X.length){O.ZP.error("O formul\xe1rio deve conter pelo menos um produto!");return}(null==e?void 0:e.recebimentompProdutoID)>0&&er([...es,null==e?void 0:e.recebimentompProdutoID]);let n=[...X];n.splice(t,1),ee(n),e_({...eI(),products:n}),eS(),O.ZP.success("Produto pr\xe9-removido. Salve para concluir!")},eN=()=>{let e=!1;return J&&J.forEach((t,n)=>{(null==t?void 0:t.nomeColuna)=="fornecedorID"&&eI("fields[".concat(n,"].fornecedor"))&&(e=!0)}),e},eV=null;J&&J.forEach((e,t)=>{eV=eZ("fields[".concat(t,"].fornecedor"))}),(0,a.useEffect)(()=>{eN()},[eV]);let eA=()=>{eP();let e=!1,t=[];null==J||J.forEach((n,o)=>{let a=n.tabela?"fields[".concat(o,"].").concat(n.tabela):"fields[".concat(o,"].").concat(n.nomeColuna),s=eI(a);1!==n.obrigatorio||s||(eT(a,{type:"manual",message:"Campo obrigat\xf3rio"}),t.push(null==n?void 0:n.nomeCampo),e=!0)}),X.forEach((n,o)=>{K&&K.forEach((n,a)=>{let s=n.tabela?"products[".concat(o,"].").concat(n.tabela):"products[".concat(o,"].").concat(n.nomeColuna),r=eI(s);1!==n.obrigatorio||r||(eT(s,{type:"manual",message:"Campo obrigat\xe1rio"}),t.push(null==n?void 0:n.nomeCampo),e=!0)})}),ei.forEach((n,o)=>{n.itens.forEach((n,a)=>{let s=eI("blocos[".concat(o,"].itens[").concat(a,"].resposta"));(null==n?void 0:n.obrigatorio)!==1||s||(eT("blocos[".concat(o,"].itens[").concat(a,"].resposta"),{type:"manual",message:"Campo obrigat\xe1rio"}),t.push(null==n?void 0:n.nome),e=!0)})}),ef({status:e,errors:t})},eU=()=>{eA(),em(!0),k(!0)},ez=async e=>{e.conclusion=!0,await eO(eJ)(e)},eq=(e,t,o)=>{let a=30==e?"Em preenchimento":40==e?"Conclu\xeddo":50==e?"Reprovado":60==e?"Aprovado parcialmente":70==e?"Aprovado":"Pendente",s={titulo:"Formul\xe1rio de MP ".concat(a),descricao:"O formul\xe1rio de Recebimento de MP #".concat(n," est\xe1 ").concat(a,"."),url:"/formularios/recebimento-mp/",urlID:n,tipoNotificacaoID:4,usuarioGeradorID:j.usuarioID,usuarioID:0,unidadeID:Y.unidadeID,papelID:1};if(s&&(U(s),t)){let r={titulo:"N\xe3o conformidade gerada",descricao:"O formul\xe1rio de Recebimento de MP #".concat(n," est\xe1 ").concat(a," e gerou uma n\xe3o conformidade."),url:"/formularios/recebimento-mp/nao-conformidade/",urlID:o,tipoNotificacaoID:5,usuarioGeradorID:j.usuarioID,usuarioID:0,unidadeID:Y.unidadeID,papelID:1};U(r)}},eJ=async function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!0===t.conclusion&&t.status>10&&(e.status=t.status,e.obsConclusao=t.obsConclusao);let o={form:e,auth:{usuarioID:j.usuarioID,papelID:j.papelID,unidadeID:Y.unidadeID}};o.form.removedProducts=es;try{"edit"==e$?(H(!0),await S.h.post("".concat(eM,"/updateData/").concat(n),o).then(t=>{O.ZP.success(M.OD.successUpdate),H(!1);let n=null;t.data&&t.data.naoConformidade&&t.data.id>0&&(ej.push("/formularios/recebimento-mp/nao-conformidade/"),ex(t.data.id),n=t.data.id),eq(e.status,e.naoConformidade,n)})):"new"==e$?await S.h.post("".concat((0,M.g_)(eM),"/insertData"),o).then(e=>{ej.push("".concat((0,M.g_)(eM))),ex(e.data),O.ZP.success(M.OD.successNew)}):O.ZP.error(M.OD.error)}catch(a){console.log(a)}};return(0,a.useEffect)(()=>{"new"==e$?eF():ek()},[n,G]),(0,a.useEffect)(()=>{eA()},[]),(0,o.jsx)(o.Fragment,{children:L?(0,o.jsx)(Z.Z,{}):(0,o.jsxs)("form",{onSubmit:eO(eJ),children:[!ev.status&&(0,o.jsx)(f.Z,{severity:ev.messageType,sx:{mb:2},children:ev.message}),(0,o.jsxs)(p.Z,{children:[(0,o.jsx)(_.Z,{btnCancel:!0,btnSave:(null==eu?void 0:eu.status)<40||"new"==e$,btnSend:"edit"==e$&&(null==eu?void 0:eu.status)<50,btnPrint:"edit"==e$,generateReport:M.OE,actionsData:eG,actions:!0,handleSubmit:()=>eO(eJ),handleSend:eU,iconConclusion:"mdi:check-bold",titleConclusion:"Aprovar Recebimento",title:"Recebimento MP",btnStatus:"edit"==e$,handleBtnStatus:()=>q(!0),type:e$,status:V}),(0,o.jsx)(x.Z,{children:(0,o.jsx)(i.Z,{register:eC,errors:eY,setValue:ew,control:eW,fields:J,values:J,disabled:!ev.status})})]}),(0,o.jsx)(p.Z,{sx:{mt:4},children:(0,o.jsxs)(x.Z,{children:[(0,o.jsx)(v.Z,{color:"primary",variant:"subtitle1",sx:{fontWeight:700,mb:5},children:"PRODUTOS"}),X&&X.map((e,n)=>(0,o.jsxs)(b.Z,{display:"flex",justifyContent:"space-between",gap:4,className:"mb-4 flex-col md:flex-row",children:[K&&K.length>0&&K.map((a,s)=>(0,o.jsx)(b.Z,{flex:1,children:(0,o.jsx)(l.Z,{name:"products[".concat(n,"].").concat(null!==(t=a.tabela)&&void 0!==t?t:a.nomeColuna),field:a,data:e,indexData:n,disabled:!ev.status,register:eC,control:eW,setValue:ew,errors:eY})},s)),(0,o.jsx)(h.Z,{xs:12,md:1,title:"Remover",index:n,removeItem:eR,item:e,pending:!ev.status,textSuccess:"Remover este item",textError:"Este item n\xe3o pode mais ser removido pois j\xe1 foi respondido em um formul\xe1rio"})]},n)),(0,o.jsx)(y.Z,{variant:"outlined",color:"primary",disabled:!ev.status,sx:{mt:1},startIcon:(0,o.jsx)(r.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){eE()},children:"Inserir produto"})]})}),ei&&ei.map((e,t)=>(0,o.jsx)(u.Z,{index:t,blockKey:"parRecebimentompBlocoID",values:e,control:eW,register:eC,setValue:ew,errors:eY,disabled:!ev.status},t)),eu&&(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(p.Z,{sx:{mt:4},children:(0,o.jsx)(x.Z,{children:(0,o.jsx)(D.ZP,{container:!0,spacing:4,children:(0,o.jsx)(D.ZP,{item:!0,xs:12,md:12,children:(0,o.jsxs)(g.Z,{fullWidth:!0,children:[(0,o.jsx)(v.Z,{variant:"subtitle1",sx:{fontWeight:600,mb:2},children:"Observa\xe7\xf5es (campo de uso exclusivo da validadora)"}),(0,o.jsx)(m.Z,{title:"Observa\xe7\xe3o (opcional)",name:"info.obs",multiline:!0,rows:4,value:eu.obs,disabled:!ev.status,control:eW})]})})})})})}),z&&(0,o.jsx)(d.Z,{id:n,parFormularioID:2,formStatus:eu.status,hasFormPending:R,canChangeStatus:eu.status>30&&!R,openModal:z,handleClose:()=>q(!1),title:"Hist\xf3rico do Formul\xe1rio",text:"Listagem do hist\xf3rico das movimenta\xe7\xf5es do formul\xe1rio ".concat(n," de Recebimento de MP."),btnCancel:!0,btnConfirm:!0,handleSubmit:eL}),(0,o.jsx)(T.Z,{openModal:ec,handleClose(){em(!1),k(!1)},title:"Concluir Formul\xe1rio",text:"Deseja realmente concluir este formul\xe1rio?",info:eu,canChange:!R,register:eC,setValue:ew,getValues:eI,btnCancel:!0,btnConfirm:!0,btnConfirmColor:"primary",conclusionForm:ez,listErrors:eh})]})})};t.Z=Y},96351:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var o=n(85893),a=n(67294),s=n(99070),r=n(40874),i=n(60664);let l=e=>{let[t,n]=(0,a.useState)([]);return(0,a.useEffect)(()=>{let t=async()=>{await i.h.post("relatorio/recebimentoMp/dadosRecebimentoMp",{data:e}).then(e=>n(e.data))};t()},[e]),t},u=e=>{var t,n,i,u,d,c,m,h,f;let{params:p}=e,x=l(p);return console.log(" data recebimento",x),(0,o.jsx)(o.Fragment,{children:x&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.G7,{style:r.W.containerFields,children:null===(t=x.fields)||void 0===t?void 0:t.map((e,t)=>(0,o.jsxs)(a.Fragment,{children:[(0,o.jsxs)(s.G7,{style:[r.W.fields,{width:"33%"}],children:[(0,o.jsx)(s.xv,{style:r.W.fieldTitle,children:null!==(u=e.title)&&void 0!==u?u:"NI"}),(0,o.jsx)(s.xv,{style:r.W.fieldValue,children:null!==(d=e.value)&&void 0!==d?d:"NI"})]}),(t+1)%3==0&&(0,o.jsx)(s.G7,{style:r.W.separator})]},t))}),(0,o.jsx)(s.G7,{style:r.W.separator}),(0,o.jsx)(s.xv,{style:[r.W.blockTitle,{paddingTop:20}],children:"Produtos"}),(0,o.jsxs)(s.G7,{style:r.W.table,children:[(0,o.jsxs)(s.G7,{style:r.W.tableTitle,children:[(0,o.jsx)(s.xv,{style:[r.W.tableTitlecolumn,{width:"60%"}],children:"Produto"}),(0,o.jsx)(s.xv,{style:[r.W.tableTitlecolumn,{width:"20%",borderLeft:"1px solid #ddd"}],children:"Apresenta\xe7\xe3o"}),(0,o.jsx)(s.xv,{style:[r.W.tableTitlecolumn,{width:"20%",borderLeft:"1px solid #ddd"}],children:"Atividade"})]}),null===(n=x.produtos)||void 0===n?void 0:n.map((e,t)=>(0,o.jsx)(s.G7,{children:(0,o.jsxs)(s.G7,{style:r.W.tableContainer,children:[(0,o.jsx)(s.G7,{style:[r.W.tableContent,{width:"60%"}],children:(0,o.jsx)(s.xv,{style:r.W.tableContentcolumn,children:e.produto})}),(0,o.jsx)(s.G7,{style:[r.W.tableContent,{width:"20%"}],children:(0,o.jsx)(s.xv,{style:r.W.tableContentcolumn,children:null!==(c=e.apresentacao)&&void 0!==c?c:"--"})}),(0,o.jsx)(s.G7,{style:[r.W.tableContent,{width:"20%"}],children:(0,o.jsx)(s.xv,{style:r.W.tableContentcolumn,children:null!==(m=e.atividade)&&void 0!==m?m:"--"})})]})},t))]}),(0,o.jsx)(s.G7,{style:r.W.separator}),null===(i=x.blocos)||void 0===i?void 0:i.map((e,t)=>(0,o.jsxs)(s.G7,{style:e,children:[(0,o.jsx)(s.xv,{style:[r.W.blockTitle,{paddingTop:20}],children:e.nome}),(0,o.jsxs)(s.G7,{style:r.W.table,children:[(0,o.jsxs)(s.G7,{style:r.W.tableTitle,children:[(0,o.jsx)(s.xv,{style:[r.W.tableTitlecolumn,{width:"60%"}],children:"Item"}),(0,o.jsx)(s.xv,{style:[r.W.tableTitlecolumn,{width:"20%",borderLeft:"1px solid #ddd"}],children:"Resposta"}),(0,o.jsx)(s.xv,{style:[r.W.tableTitlecolumn,{width:"20%",borderLeft:"1px solid #ddd"}],children:"Observa\xe7\xe3o"})]}),e.itens.map((e,t)=>(0,o.jsxs)(s.G7,{style:r.W.tableContainer,children:[(0,o.jsx)(s.G7,{style:[r.W.tableContent,{width:"60%"}],children:(0,o.jsx)(s.xv,{style:r.W.tableContentcolumn,children:e.nome})}),(0,o.jsx)(s.G7,{style:[r.W.tableContent,{width:"20%"}],children:(0,o.jsx)(s.xv,{style:r.W.tableContentcolumn,children:null!==(h=e.resposta)&&void 0!==h?h:"--"})}),(0,o.jsx)(s.G7,{style:[r.W.tableContent,{width:"20%"}],children:(0,o.jsx)(s.xv,{style:r.W.tableContentcolumn,children:null!==(f=e.obsResposta)&&void 0!==f?f:"--"})})]}))]})]},t))]})})};var d=u}}]);