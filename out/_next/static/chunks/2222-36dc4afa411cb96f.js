(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2222],{13860:function(e){var t;t=function(){"use strict";var e="millisecond",t="second",n="minute",o="hour",s="week",a="month",r="quarter",i="year",l="date",u="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(e,t,n){var o=String(e);return!o||o.length>=t?e:""+Array(t+1-o.length).join(n)+e},m="en",f={};f[m]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||"th")+"]"}};var x=function(e){return e instanceof y},p=function e(t,n,o){var s;if(!t)return m;if("string"==typeof t){var a=t.toLowerCase();f[a]&&(s=a),n&&(f[a]=n,s=a);var r=t.split("-");if(!s&&r.length>1)return e(r[0])}else{var i=t.name;f[i]=t,s=i}return!o&&s&&(m=s),s||!o&&m},v=function(e,t){if(x(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new y(n)},b={s:h,z:function(e){var t=-e.utcOffset(),n=Math.abs(t);return(t<=0?"+":"-")+h(Math.floor(n/60),2,"0")+":"+h(n%60,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var o=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(o,a),r=n-s<0,i=t.clone().add(o+(r?-1:1),a);return+(-(o+(n-s)/(r?s-i:i-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(u){return({M:a,y:i,w:s,d:"day",D:l,h:o,m:n,s:t,ms:e,Q:r})[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};b.l=p,b.i=x,b.w=function(e,t){return v(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var y=function(){function h(e){this.$L=p(e.locale,null,!0),this.parse(e)}var m=h.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(b.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var o=t.match(d);if(o){var s=o[2]-1||0,a=(o[7]||"0").substring(0,3);return n?new Date(Date.UTC(o[1],s,o[3]||1,o[4]||0,o[5]||0,o[6]||0,a)):new Date(o[1],s,o[3]||1,o[4]||0,o[5]||0,o[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return this.$d.toString()!==u},m.isSame=function(e,t){var n=v(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return v(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<v(e)},m.$g=function(e,t,n){return b.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,r){var u=this,d=!!b.u(r)||r,c=b.p(e),h=function(e,t){var n=b.w(u.$u?Date.UTC(u.$y,t,e):new Date(u.$y,t,e),u);return d?n:n.endOf("day")},m=function(e,t){return b.w(u.toDate()[e].apply(u.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),u)},f=this.$W,x=this.$M,p=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case i:return d?h(1,0):h(31,11);case a:return d?h(1,x):h(0,x+1);case s:var y=this.$locale().weekStart||0,D=(f<y?f+7:f)-y;return h(d?p-D:p+(6-D),x);case"day":case l:return m(v+"Hours",0);case o:return m(v+"Minutes",1);case n:return m(v+"Seconds",2);case t:return m(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(s,r){var u,d=b.p(s),c="set"+(this.$u?"UTC":""),h=((u={}).day=c+"Date",u[l]=c+"Date",u[a]=c+"Month",u[i]=c+"FullYear",u[o]=c+"Hours",u[n]=c+"Minutes",u[t]=c+"Seconds",u[e]=c+"Milliseconds",u)[d],m="day"===d?this.$D+(r-this.$W):r;if(d===a||d===i){var f=this.clone().set(l,1);f.$d[h](m),f.init(),this.$d=f.set(l,Math.min(this.$D,f.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[b.p(e)]()},m.add=function(e,r){var l,u=this;e=Number(e);var d=b.p(r),c=function(t){var n=v(u);return b.w(n.date(n.date()+Math.round(t*e)),u)};if(d===a)return this.set(a,this.$M+e);if(d===i)return this.set(i,this.$y+e);if("day"===d)return c(1);if(d===s)return c(7);var h=((l={})[n]=6e4,l[o]=36e5,l[t]=1e3,l)[d]||1,m=this.$d.getTime()+e*h;return b.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||u;var o=e||"YYYY-MM-DDTHH:mm:ssZ",s=b.z(this),a=this.$H,r=this.$m,i=this.$M,l=n.weekdays,d=n.months,h=function(e,n,s,a){return e&&(e[n]||e(t,o))||s[n].slice(0,a)},m=function(e){return b.s(a%12||12,e,"0")},f=n.meridiem||function(e,t,n){var o=e<12?"AM":"PM";return n?o.toLowerCase():o},x={YY:String(this.$y).slice(-2),YYYY:this.$y,M:i+1,MM:b.s(i+1,2,"0"),MMM:h(n.monthsShort,i,d,3),MMMM:h(d,i),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,l,2),ddd:h(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(a),HH:b.s(a,2,"0"),h:m(1),hh:m(2),a:f(a,r,!0),A:f(a,r,!1),m:String(r),mm:b.s(r,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:s};return o.replace(c,function(e,t){return t||x[e]||s.replace(":","")})},m.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},m.diff=function(e,l,u){var d,c=b.p(l),h=v(e),m=(h.utcOffset()-this.utcOffset())*6e4,f=this-h,x=b.m(this,h);return x=((d={})[i]=x/12,d[a]=x,d[r]=x/3,d[s]=(f-m)/6048e5,d.day=(f-m)/864e5,d[o]=f/36e5,d[n]=f/6e4,d[t]=f/1e3,d)[c]||f,u?x:b.a(x)},m.daysInMonth=function(){return this.endOf(a).$D},m.$locale=function(){return f[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),o=p(e,t,!0);return o&&(n.$L=o),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},h}(),D=y.prototype;return v.prototype=D,[["$ms",e],["$s",t],["$m",n],["$H",o],["$W","day"],["$M",a],["$y",i],["$D",l]].forEach(function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),v.extend=function(e,t){return e.$i||(e(t,y,v),e.$i=!0),v},v.locale=p,v.isDayjs=x,v.unix=function(e){return v(1e3*e)},v.en=f[m],v.Ls=f,v.p={},v},e.exports=t()},57548:function(e,t,n){var o;o=function(e){"use strict";var t={name:"pt-br",weekdays:"domingo_segunda-feira_ter\xe7a-feira_quarta-feira_quinta-feira_sexta-feira_s\xe1bado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_s\xe1b".split("_"),weekdaysMin:"Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"),months:"janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),ordinal:function(e){return e+"\xba"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [\xe0s] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm"},relativeTime:{future:"em %s",past:"h\xe1 %s",s:"poucos segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um m\xeas",MM:"%d meses",y:"um ano",yy:"%d anos"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t},e.exports=o(n(13860))},35528:function(e,t,n){"use strict";var o=n(85893);n(21609);var s=n(84220),a=n(29308);let r=e=>{var t,n,r,i,l;let{field:u,data:d,name:c,indexData:h,disabled:m,control:f,register:x,setValue:p,errors:v}=e;return console.log("\uD83D\uDE80 ~~~~~~~~~~~~~ Product data:",u.options),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("input",{type:"hidden",name:"produtos[".concat(h,"].recebimentompProdutoID"),defaultValue:null==u?void 0:u.recebimentompProdutoID,...x("produtos[".concat(h,"].recebimentompProdutoID"))}),u&&"int"===u.tipo&&u.tabela&&(0,o.jsx)(s.Z,{xs:12,md:12,title:u.nomeCampo,name:c,value:null!==(l=null==d?void 0:d[u.tabela])&&void 0!==l?l:null,multiple:!1,disabled:m,options:u.options,register:x,setValue:p,control:f,errors:null==v?void 0:null===(t=v.products)||void 0===t?void 0:null===(n=t[h])||void 0===n?void 0:n[u.tabela]},h),u&&"string"===u.tipo&&(0,o.jsx)(a.Z,{title:u.nomeCampo,name:c,value:null==d?void 0:d[u.nomeColuna],type:u.nomeColuna,disabled:m,control:f,errors:null==v?void 0:null===(r=v.produtos)||void 0===r?void 0:null===(i=r[h])||void 0===i?void 0:i[u.nomeColuna]})]})};t.Z=r},52222:function(e,t,n){"use strict";n.d(t,{Z:function(){return H}});var o=n(85893),s=n(67294),a=n(87536),r=n(21609);n(49540);var i=n(56531),l=n(35528),u=n(79139),d=n(34282),c=n(99070),h=n(40874),m=n(60664);let f=e=>{let[t,n]=(0,s.useState)([]);return(0,s.useEffect)(()=>{let t=async()=>{await m.h.post("relatorio/recebimentoMp/dadosRecebimentoMp",{data:e}).then(e=>n(e.data))};t()},[e]),t},x=e=>{var t,n,a,r,i,l,u,d,m;let{params:x}=e,p=f(x);return console.log(" data recebimento",p),(0,o.jsx)(o.Fragment,{children:p&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.G7,{style:h.W.containerFields,children:null===(t=p.fields)||void 0===t?void 0:t.map((e,t)=>(0,o.jsxs)(s.Fragment,{children:[(0,o.jsxs)(c.G7,{style:[h.W.fields,{width:"33%"}],children:[(0,o.jsx)(c.xv,{style:h.W.fieldTitle,children:null!==(r=e.title)&&void 0!==r?r:"NI"}),(0,o.jsx)(c.xv,{style:h.W.fieldValue,children:null!==(i=e.value)&&void 0!==i?i:"NI"})]}),(t+1)%3==0&&(0,o.jsx)(c.G7,{style:h.W.separator})]},t))}),(0,o.jsx)(c.G7,{style:h.W.separator}),(0,o.jsx)(c.xv,{style:[h.W.blockTitle,{paddingTop:20}],children:"Produtos"}),(0,o.jsxs)(c.G7,{style:h.W.table,children:[(0,o.jsxs)(c.G7,{style:h.W.tableTitle,children:[(0,o.jsx)(c.xv,{style:[h.W.tableTitlecolumn,{width:"60%"}],children:"Produto"}),(0,o.jsx)(c.xv,{style:[h.W.tableTitlecolumn,{width:"20%",borderLeft:"1px solid #ddd"}],children:"Apresenta\xe7\xe3o"}),(0,o.jsx)(c.xv,{style:[h.W.tableTitlecolumn,{width:"20%",borderLeft:"1px solid #ddd"}],children:"Atividade"})]}),null===(n=p.produtos)||void 0===n?void 0:n.map((e,t)=>(0,o.jsx)(c.G7,{children:(0,o.jsxs)(c.G7,{style:h.W.tableContainer,children:[(0,o.jsx)(c.G7,{style:[h.W.tableContent,{width:"60%"}],children:(0,o.jsx)(c.xv,{style:h.W.tableContentcolumn,children:e.produto})}),(0,o.jsx)(c.G7,{style:[h.W.tableContent,{width:"20%"}],children:(0,o.jsx)(c.xv,{style:h.W.tableContentcolumn,children:null!==(l=e.apresentacao)&&void 0!==l?l:"--"})}),(0,o.jsx)(c.G7,{style:[h.W.tableContent,{width:"20%"}],children:(0,o.jsx)(c.xv,{style:h.W.tableContentcolumn,children:null!==(u=e.atividade)&&void 0!==u?u:"--"})})]})},t))]}),(0,o.jsx)(c.G7,{style:h.W.separator}),null===(a=p.blocos)||void 0===a?void 0:a.map((e,t)=>(0,o.jsxs)(c.G7,{style:e,children:[(0,o.jsx)(c.xv,{style:[h.W.blockTitle,{paddingTop:20}],children:e.nome}),(0,o.jsxs)(c.G7,{style:h.W.table,children:[(0,o.jsxs)(c.G7,{style:h.W.tableTitle,children:[(0,o.jsx)(c.xv,{style:[h.W.tableTitlecolumn,{width:"60%"}],children:"Item"}),(0,o.jsx)(c.xv,{style:[h.W.tableTitlecolumn,{width:"20%",borderLeft:"1px solid #ddd"}],children:"Resposta"}),(0,o.jsx)(c.xv,{style:[h.W.tableTitlecolumn,{width:"20%",borderLeft:"1px solid #ddd"}],children:"Observa\xe7\xe3o"})]}),e.itens.map((e,t)=>(0,o.jsxs)(c.G7,{style:h.W.tableContainer,children:[(0,o.jsx)(c.G7,{style:[h.W.tableContent,{width:"60%"}],children:(0,o.jsx)(c.xv,{style:h.W.tableContentcolumn,children:e.nome})}),(0,o.jsx)(c.G7,{style:[h.W.tableContent,{width:"20%"}],children:(0,o.jsx)(c.xv,{style:h.W.tableContentcolumn,children:null!==(d=e.resposta)&&void 0!==d?d:"--"})}),(0,o.jsx)(c.G7,{style:[h.W.tableContent,{width:"20%"}],children:(0,o.jsx)(c.xv,{style:h.W.tableContentcolumn,children:null!==(m=e.obsResposta)&&void 0!==m?m:"--"})})]}))]})]},t))]})})};var p=n(29308),v=n(88475);n(7071);var b=n(19604),y=n(49837),D=n(91359),g=n(29630),j=n(61953),$=n(75084),S=n(79072),_=n(55343),M=n(11163),C=n.n(M),w=n(46749),W=n(14155),I=n(60565),Z=n(83830),E=n(40039),O=n(47842),T=n(86501),P=n(66136),Y=n(80377);n(30381),n(13860),n(57548);let L=e=>{var t;let{id:n}=e;console.log("\uD83D\uDE80 ~ id:",n);let{user:c,loggedUnity:h}=(0,s.useContext)(E.V),[f,M]=(0,s.useState)(!1),[L,H]=(0,s.useState)(!1),[k,F]=(0,s.useState)(!1),[G,R]=(0,s.useState)(!0),[V,N]=(0,s.useState)(null),[A,U]=(0,s.useState)(!1),[z,q]=(0,s.useState)([]);console.log("\uD83D\uDE80 ~ field:",z);let[J,B]=(0,s.useState)([]),[K,Q]=(0,s.useState)([]);console.log("\uD83D\uDE80 ~ products:",K);let[X,ee]=(0,s.useState)(null),[et,en]=(0,s.useState)([]),[eo,es]=(0,s.useState)([]),[ea,er]=(0,s.useState)([]),[ei,el]=(0,s.useState)(""),[eu,ed]=(0,s.useState)(!1),[ec,eh]=(0,s.useState)({status:!1,errors:[]}),{settings:em}=(0,s.useContext)(P.J6),{setId:ef}=(0,s.useContext)(Z.X),[ex,ep]=(0,s.useState)({status:!1,message:"Voc\xea n\xe3o tem permiss\xf5es",messageType:"info"}),{setTitle:ev,setStorageId:eb,getStorageId:ey}=(0,s.useContext)(I.f),eD=C(),eg=n&&n>0?"edit":"new";console.log("\uD83D\uDE80 ~~~ type:",eg,n);let ej=eD.pathname,{trigger:e$,reset:eS,register:e_,getValues:eM,setValue:eC,control:ew,watch:eW,handleSubmit:eI,clearErrors:eZ,setError:eE,formState:{errors:eO}}=(0,a.cI)(),eT=async e=>{let t={status:e,auth:{usuarioID:c.usuarioID,papelID:c.papelID,unidadeID:h.unidadeID}};try{H(!0),await m.h.post("".concat(ej,"/changeFormStatus/").concat(n),t).then(e=>{T.ZP.success(w.OD.successUpdate),H(!1)})}catch(o){console.log(o)}},eP=()=>{let e=[...K,{recebimentompProdutoID:0,recebimentompID:n}];Q(e)},eY=[{id:1,name:"Formul\xe1rio do Recebimento de MP",component:(0,o.jsx)(x,{params:{id:n,unidadeID:1}}),route:"/relatorio/recebimentoMp/dadosRecebimentoMp",papelID:c.papelID,identification:"01",params:{fornecedorID:n}}],eL=async()=>{try{await m.h.post("".concat(ej,"/verifyFormPending/").concat(n),{parFormularioID:2}).then(e=>{R(e.data) //! true/false
})}catch(e){console.log(e)}},eH=()=>{try{M(!0),m.h.post("".concat((0,w.g_)(ej),"/new/getData"),{unidadeID:h.unidadeID}).then(e=>{console.log("getNewData: ",e.data),q(e.data.fields),Q(e.data.products),B(e.data.fieldsProduct),er(e.data.blocos),el(e.data.info),eS(e.data),ep({status:!0,message:'Esse formul\xe1rio j\xe1 foi conclu\xeddo! Para alter\xe1-lo \xe9 necess\xe1rio atualizar seu Status para "Em preenchimento" atrav\xe9s do bot\xe3o "Status"!',messageType:"info"}),M(!1)})}catch(e){console.log("\uD83D\uDE80 ~ error:",e)}},ek=()=>{M(!0),n&&m.h.post("".concat(ej,"/getData/").concat(n),{type:eg,unidadeID:h.unidadeID}).then(e=>{var t,n,o,s;console.log("getData: ",e.data.products),q(e.data.fields),Q(e.data.products),B(e.data.fieldsProduct),er(e.data.blocos),el(e.data.info),eS(e.data),N(w.WR[null==e?void 0:null===(t=e.data)||void 0===t?void 0:null===(n=t.info)||void 0===n?void 0:n.status]),ep({status:(null==e?void 0:null===(o=e.data)||void 0===o?void 0:null===(s=o.info)||void 0===s?void 0:s.status)<40,message:'Esse formul\xe1rio j\xe1 foi conclu\xeddo! Para alter\xe1-lo \xe9 necess\xe1rio atualizar seu Status para "Em preenchimento" atrav\xe9s do bot\xe3o "Status"!',messageType:"info"}),eL(),M(!1)})},eF=(e,t)=>{if(1==K.length){T.ZP.error("O formul\xe1rio deve conter pelo menos um produto!");return}(null==e?void 0:e.recebimentompProdutoID)>0&&es([...eo,null==e?void 0:e.recebimentompProdutoID]);let n=[...K];n.splice(t,1),Q(n),eS({...eM(),products:n}),e$(),T.ZP.success("Produto pr\xe9-removido. Salve para concluir!")},eG=()=>{let e=!1;return z&&z.forEach((t,n)=>{(null==t?void 0:t.nomeColuna)=="fornecedorID"&&eM("fields[".concat(n,"].fornecedor"))&&(e=!0)}),e},eR=null;z&&z.forEach((e,t)=>{eR=eW("fields[".concat(t,"].fornecedor"))}),(0,s.useEffect)(()=>{eG()},[eR]);let eV=()=>{eZ();let e=!1,t=[];null==z||z.forEach((n,o)=>{let s=n.tabela?"fields[".concat(o,"].").concat(n.tabela):"fields[".concat(o,"].").concat(n.nomeColuna),a=eM(s);console.log("\uD83D\uDE80 ~ checkErrors:",s,a),1!==n.obrigatorio||a||(eE(s,{type:"manual",message:"Campo obrigat\xf3rio"}),t.push(null==n?void 0:n.nomeCampo),e=!0)}),K.forEach((n,o)=>{J&&J.forEach((n,s)=>{let a=n.tabela?"products[".concat(o,"].").concat(n.tabela):"products[".concat(o,"].").concat(n.nomeColuna),r=eM(a);console.log("\uD83D\uDE80 ~ checkErrors produto:",a),1!==n.obrigatorio||r||(eE(a,{type:"manual",message:"Campo obrigat\xe1rio"}),t.push(null==n?void 0:n.nomeCampo),e=!0)})}),ea.forEach((n,o)=>{n.itens.forEach((n,s)=>{let a=eM("blocos[".concat(o,"].itens[").concat(s,"].resposta"));(null==n?void 0:n.obrigatorio)!==1||a||(eE("blocos[".concat(o,"].itens[").concat(s,"].resposta"),{type:"manual",message:"Campo obrigat\xe1rio"}),t.push(null==n?void 0:n.nome),e=!0)})}),eh({status:e,errors:t})},eN=()=>{eV(),ed(!0),F(!0)},eA=async e=>{e.conclusion=!0,await eI(eU)(e)},eU=async function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!0===t.conclusion&&t.status>10&&(e.status=t.status,e.obsConclusao=t.obsConclusao);let o={form:e,auth:{usuarioID:c.usuarioID,papelID:c.papelID,unidadeID:h.unidadeID}};o.form.removedProducts=eo,console.log("\uD83D\uDE80 ~ onSubmit:",o);try{"edit"==eg?(H(!0),await m.h.post("".concat(ej,"/updateData/").concat(n),o).then(e=>{T.ZP.success(w.OD.successUpdate),H(!1),e.data&&e.data.naoConformidade&&e.data.id>0&&(console.log("\uD83D\uDE80 ~ redireciona pra nao conformidade"),eD.push("/formularios/recebimento-mp/nao-conformidade/"),ef(e.data.id))})):"new"==eg?await m.h.post("".concat((0,w.g_)(ej),"/insertData"),o).then(e=>{eD.push("".concat((0,w.g_)(ej))),ef(e.data),T.ZP.success(w.OD.successNew)}):T.ZP.error(w.OD.error)}catch(s){console.log(s)}};return(0,s.useEffect)(()=>{"new"==eg?eH():ek()},[n,L]),(0,s.useEffect)(()=>{eV()},[]),(0,o.jsx)(o.Fragment,{children:f?(0,o.jsx)(O.Z,{}):(0,o.jsxs)("form",{onSubmit:eI(eU),children:[!ex.status&&(0,o.jsx)(b.Z,{severity:ex.messageType,sx:{mb:2},children:ex.message}),(0,o.jsxs)(y.Z,{children:[(0,o.jsx)(W.Z,{btnCancel:!0,btnSave:(null==ei?void 0:ei.status)<40||"new"==eg,btnSend:"edit"==eg&&(null==ei?void 0:ei.status)<50,btnPrint:!0,generateReport:w.OE,dataReports:eY,handleSubmit:()=>eI(eU),handleSend:eN,iconConclusion:"mdi:check-bold",titleConclusion:"Aprovar Recebimento",title:"Recebimento MP",btnStatus:"edit"==eg,handleBtnStatus:()=>U(!0),type:eg,status:V}),(0,o.jsx)(D.Z,{children:(0,o.jsx)(i.Z,{register:e_,errors:eO,setValue:eC,control:ew,fields:z,values:z,disabled:!ex.status})})]}),(0,o.jsx)(y.Z,{sx:{mt:4},children:(0,o.jsxs)(D.Z,{children:[(0,o.jsx)(g.Z,{color:"primary",variant:"subtitle1",sx:{fontWeight:700,mb:5},children:"PRODUTOS"}),K&&K.map((e,n)=>(0,o.jsxs)(j.Z,{display:"flex",justifyContent:"space-between",gap:4,className:"mb-4 flex-col md:flex-row",children:[J&&J.length>0&&J.map((s,a)=>(0,o.jsx)(j.Z,{flex:1,children:(0,o.jsx)(l.Z,{name:"products[".concat(n,"].").concat(null!==(t=s.tabela)&&void 0!==t?t:s.nomeColuna),field:s,data:e,indexData:n,disabled:!ex.status,register:e_,control:ew,setValue:eC,errors:eO})},a)),(0,o.jsx)(v.Z,{xs:12,md:1,title:"Remover",index:n,removeItem:eF,item:e,pending:!ex.status,textSuccess:"Remover este item",textError:"Este item n\xe3o pode mais ser removido pois j\xe1 foi respondido em um formul\xe1rio"})]},n)),(0,o.jsx)($.Z,{variant:"outlined",color:"primary",disabled:!ex.status,sx:{mt:1},startIcon:(0,o.jsx)(r.Z,{icon:"material-symbols:add-circle-outline-rounded"}),onClick(){eP()},children:"Inserir produto"})]})}),ea&&ea.map((e,t)=>(0,o.jsx)(u.Z,{index:t,blockKey:"parRecebimentompBlocoID",values:e,control:ew,register:e_,setValue:eC,errors:eO,disabled:!ex.status},t)),ei&&(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(y.Z,{sx:{mt:4},children:(0,o.jsx)(D.Z,{children:(0,o.jsx)(S.ZP,{container:!0,spacing:4,children:(0,o.jsx)(S.ZP,{item:!0,xs:12,md:12,children:(0,o.jsxs)(_.Z,{fullWidth:!0,children:[(0,o.jsx)(g.Z,{variant:"subtitle1",sx:{fontWeight:600,mb:2},children:"Observa\xe7\xf5es (campo de uso exclusivo da validadora)"}),(0,o.jsx)(p.Z,{title:"Observa\xe7\xe3o (opcional)",name:"info.obs",multiline:!0,rows:4,value:ei.obs,disabled:!ex.status,control:ew})]})})})})})}),A&&(0,o.jsx)(d.Z,{id:n,parFormularioID:2,formStatus:ei.status,hasFormPending:G,canChangeStatus:ei.status>30&&!G,openModal:A,handleClose:()=>U(!1),title:"Hist\xf3rico do Formul\xe1rio",text:"Listagem do hist\xf3rico das movimenta\xe7\xf5es do formul\xe1rio ".concat(n," de Recebimento de MP."),btnCancel:!0,btnConfirm:!0,handleSubmit:eT}),(0,o.jsx)(Y.Z,{openModal:eu,handleClose(){ed(!1),F(!1)},title:"Concluir Formul\xe1rio",text:"Deseja realmente concluir este formul\xe1rio?",info:ei,canChange:!G,register:e_,setValue:eC,getValues:eM,btnCancel:!0,btnConfirm:!0,btnConfirmColor:"primary",conclusionForm:eA,listErrors:ec})]})})};var H=L}}]);