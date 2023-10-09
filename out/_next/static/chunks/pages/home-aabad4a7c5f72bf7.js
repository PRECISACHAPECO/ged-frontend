(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{18694:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return a(94062)}])},37645:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let a=s.default,l=(null==t?void 0:t.suspense)?{}:{loading(e){let{error:t,isLoading:a,pastDelay:r}=e;return null}};if(e instanceof Promise?l.loader=()=>e:"function"==typeof e?l.loader=e:"object"==typeof e&&(l=r({},l,e)),(l=r({},l,t)).suspense&&(delete l.ssr,delete l.loading),l.loadableGenerated&&delete(l=r({},l,l.loadableGenerated)).loadableGenerated,"boolean"==typeof l.ssr&&!l.suspense){if(!l.ssr)return delete l.ssr,o(a,l);delete l.ssr}return a(l)},t.noSSR=o;var r=a(6495).Z,l=a(92648).Z,s=(l(a(67294)),l(a(14588)));function o(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},33644:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,a(92648).Z)(a(67294));let l=r.default.createContext(null);t.LoadableContext=l},14588:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(6495).Z,l=(0,a(92648).Z)(a(67294)),s=a(33644);let{useSyncExternalStore:o}=a(67294),i=[],n=[],c=!1;function d(e){let t=e(),a={loading:!0,loaded:null,error:null};return a.promise=t.then(e=>(a.loading=!1,a.loaded=e,e)).catch(e=>{throw a.loading=!1,a.error=e,e}),a}class u{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=r({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function p(e){return function(e,t){let a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);a.suspense&&(a.lazy=l.default.lazy(a.loader));let i=null;function d(){if(!i){let t=new u(e,a);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()}if(!c){let p=a.webpack?a.webpack():a.modules;p&&n.push(e=>{for(let t of p)if(-1!==e.indexOf(t))return d()})}function h(){d();let e=l.default.useContext(s.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach(t=>{e(t)})}let m=a.suspense?function(e,t){return h(),l.default.createElement(a.lazy,r({},e,{ref:t}))}:function(e,t){h();let r=o(i.subscribe,i.getCurrentValue,i.getCurrentValue);return l.default.useImperativeHandle(t,()=>({retry:i.retry}),[]),l.default.useMemo(()=>{var t;return r.loading||r.error?l.default.createElement(a.loading,{isLoading:r.loading,pastDelay:r.pastDelay,timedOut:r.timedOut,error:r.error,retry:i.retry}):r.loaded?l.default.createElement((t=r.loaded)&&t.__esModule?t.default:t,e):null},[e,r])};return m.preload=()=>d(),m.displayName="LoadableComponent",l.default.forwardRef(m)}(d,e)}function h(e,t){let a=[];for(;e.length;){let r=e.pop();a.push(r(t))}return Promise.all(a).then(()=>{if(e.length)return h(e,t)})}p.preloadAll=()=>new Promise((e,t)=>{h(i).then(e,t)}),p.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let a=()=>(c=!0,t());h(n,e).then(a,a)})},window.__NEXT_PRELOADREADY=p.preloadReady,t.default=p},94062:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return z}});var r=a(85893),l=a(79072),s=a(60565),o=a(40039),i=a(67294),n=a(21609),c=a(49837),d=a(29630),u=a(91359),p=a(11163),h=a.n(p),m=a(44731),x=a(62097),f=a(41796),g=a(19550);let b=(0,i.forwardRef)((e,t)=>{let{sx:a,src:l,skin:s,color:o}=e,i=(0,x.Z)(),n=(0,g.Z)(),c=(e,t)=>"light"===e?{...n["".concat(t,"Light")]}:"light-static"===e?{color:n["".concat(t,"Light")].color,backgroundColor:(0,f.$n)(i.palette[t].main,.88)}:{...n["".concat(t,"Filled")]},d={primary:c(s,"primary"),secondary:c(s,"secondary"),success:c(s,"success"),error:c(s,"error"),warning:c(s,"warning"),info:c(s,"info")};return(0,r.jsx)(m.Z,{ref:t,...e,sx:!l&&s&&o?Object.assign(d[o],a):a})});b.defaultProps={skin:"filled",color:"primary"};var y=a(66136);let j=e=>{let{settings:t}=(0,i.useContext)(y.J6),a=t.mode,{title:l,color:s,icon:o,stats:p="positive"}=e,m=h(),x=()=>{m.push("/formularios/fornecedor/?s=".concat(e.title))};return(0,r.jsx)(c.Z,{onClick:x,className:"cursor-pointer ".concat("dark"==a?"hover:bg-[#232327]":"hover:bg-[#EEEEF1]","  shadow-xl transition-all"),children:(0,r.jsx)(u.Z,{children:(0,r.jsxs)("div",{className:" space-y-4",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsx)(b,{skin:"light",variant:"rounded",color:s,children:o}),(0,r.jsx)(d.Z,{variant:"body1",children:l})]}),(0,r.jsx)("div",{children:(0,r.jsx)(n.Z,{icon:"uil:external-link-alt",className:"text-base text-[#35553B]"})})]}),(0,r.jsx)("div",{className:"w-full flex justify-center",children:(0,r.jsx)(d.Z,{variant:"h2",sx:{fontWeight:600},children:p})})]})})})};var v=a(67074);let w=(0,v.ZP)("div")(e=>{let{theme:t}=e;return{"& .apexcharts-canvas":{"& line[stroke='transparent']":{display:"none"},"& .apexcharts-tooltip":{boxShadow:t.shadows[3],borderColor:t.palette.divider,background:t.palette.background.paper,"& .apexcharts-tooltip-title":{fontWeight:600,borderColor:t.palette.divider,background:t.palette.background.paper},"&.apexcharts-theme-light":{color:t.palette.text.primary},"&.apexcharts-theme-dark":{color:t.palette.common.white},"& .apexcharts-tooltip-series-group:first-of-type":{paddingBottom:0},"& .bar-chart":{padding:t.spacing(2,2.5)}},"& .apexcharts-xaxistooltip":{borderColor:t.palette.divider,background:"light"===t.palette.mode?t.palette.grey[50]:t.palette.customColors.bodyBg,"&:after":{borderBottomColor:"light"===t.palette.mode?t.palette.grey[50]:t.palette.customColors.bodyBg},"&:before":{borderBottomColor:t.palette.divider}},"& .apexcharts-yaxistooltip":{borderColor:t.palette.divider,background:"light"===t.palette.mode?t.palette.grey[50]:t.palette.customColors.bodyBg,"&:after":{borderLeftColor:"light"===t.palette.mode?t.palette.grey[50]:t.palette.customColors.bodyBg},"&:before":{borderLeftColor:t.palette.divider}},"& .apexcharts-xaxistooltip-text, & .apexcharts-yaxistooltip-text":{color:t.palette.text.primary},"& .apexcharts-yaxis .apexcharts-yaxis-texts-g .apexcharts-yaxis-label":{textAnchor:"rtl"===t.direction?"start":void 0},"& .apexcharts-text, & .apexcharts-tooltip-text, & .apexcharts-datalabel-label, & .apexcharts-datalabel, & .apexcharts-xaxistooltip-text, & .apexcharts-yaxistooltip-text, & .apexcharts-legend-text":{fontFamily:"".concat(t.typography.fontFamily," !important")},"& .apexcharts-pie-label":{filter:"none",fill:t.palette.common.white},"& .apexcharts-marker":{boxShadow:"none"}}}});var Z=a(5152),_=a.n(Z);let k=_()(()=>Promise.all([a.e(4814),a.e(7229)]).then(a.bind(a,47229)),{loadableGenerated:{webpack:()=>[47229]},ssr:!1});var D=a(5026);let C=e=>{let{data:t}=e,a=(0,x.Z)(),[l,s]=(0,i.useState)([]);(0,i.useEffect)(()=>{s(t)},[]);let o={chart:{offsetY:-9,offsetX:-16,parentHeightOffset:0,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:8,columnWidth:"35%",endingShape:"rounded",startingShape:"rounded",colors:{ranges:[{to:50,from:40,color:(0,D.E)(a.palette.primary.main,1)}]}}},markers:{size:3.5,strokeWidth:2,fillOpacity:1,strokeOpacity:1,colors:[a.palette.background.paper,a.palette.error.main],strokeColors:(0,D.E)(a.palette.primary.main,1)},stroke:{width:[0,2],colors:[a.palette.customColors.trackBg,a.palette.error.main]},legend:{show:!1},dataLabels:{enabled:!1},colors:[(0,D.E)(a.palette.customColors.trackBg,1)],grid:{strokeDashArray:7,borderColor:a.palette.divider},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},xaxis:{categories:null==l?void 0:l.map(e=>e.month),tickPlacement:"on",labels:{show:!0},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{min:0,show:!0,tickAmount:4,labels:{formatter:e=>e>999?"".concat((e/1e3).toFixed(0)):e,style:{fontSize:"0.75rem",colors:a.palette.text.disabled}}}},p=[{name:"MP",type:"column",data:null==l?void 0:l.map(e=>e.mp)},{name:"N\xe3o Conformidade",type:"line",data:null==l?void 0:l.map(e=>e.nc),color:a.palette.error.main}];return(0,r.jsx)(c.Z,{children:(0,r.jsxs)(u.Z,{sx:{"& .apexcharts-xcrosshairs.apexcharts-active":{opacity:0}},children:[(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsx)(b,{skin:"light",variant:"rounded",color:"primary",children:(0,r.jsx)(n.Z,{icon:"icon-park-outline:receive",className:"text-base text-[#35553B]"})}),(0,r.jsx)(d.Z,{sx:{mr:4},variant:"body1",children:"Recebimento MP e N\xe3o Conformidade"})]}),(0,r.jsx)(k,{type:"line",height:208,series:p,options:o})]})})};a(41664),a(51514),(0,v.ZP)(l.ZP)(e=>{let{theme:t}=e;return{[t.breakpoints.down("sm")]:{borderBottom:"1px solid ".concat(t.palette.divider)},[t.breakpoints.up("sm")]:{borderRight:"1px solid ".concat(t.palette.divider)}}}),new Date("".concat(new Date().getFullYear(),"-01-01")).getTime(),new Date("".concat(new Date().getFullYear(),"-04-02")).getTime(),new Date("".concat(new Date().getFullYear(),"-02-18")).getTime(),new Date("".concat(new Date().getFullYear(),"-05-30")).getTime(),new Date("".concat(new Date().getFullYear(),"-02-07")).getTime(),new Date("".concat(new Date().getFullYear(),"-04-31")).getTime(),new Date("".concat(new Date().getFullYear(),"-01-14")).getTime(),new Date("".concat(new Date().getFullYear(),"-06-30")).getTime(),new Date("".concat(new Date().getFullYear(),"-04-01")).getTime(),new Date("".concat(new Date().getFullYear(),"-07-31")).getTime();var N=a(60664),P=a(61953);P.Z,n.Z,P.Z,n.Z,a(99070);var E=a(7071);let T=e=>{let{percent:t}=e;console.log("\uD83D\uDE80 ~ percent:",t);let a=(0,x.Z)(),l={chart:{sparkline:{enabled:!0}},stroke:{lineCap:"round"},colors:[(0,D.E)(t>=100?a.palette.error.main:t>80?a.palette.warning.main:a.palette.info.main,1)],plotOptions:{radialBar:{hollow:{size:"55%"},track:{background:"#e1e1e1"},dataLabels:{name:{show:!1},value:{show:!1,offsetY:5,fontWeight:600,fontSize:"1rem",color:a.palette.text.primary}}}},grid:{padding:{bottom:-12}},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}}};return(0,r.jsx)(k,{type:"radialBar",height:119,series:[t>0?t:100],options:l})};var F=a(44373);let O=e=>{let{data:t}=e;return console.log("\uD83D\uDE80 ~ GraphLimpeza: ",t),(0,r.jsx)(c.Z,{children:t&&t.map(e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Z,{children:(0,r.jsxs)(l.ZP,{container:!0,className:"flex items-center",spacing:2,children:[(0,r.jsx)(l.ZP,{item:!0,xs:12,children:(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsx)(b,{skin:"light",variant:"rounded",color:"primary",children:(0,r.jsx)(n.Z,{icon:"carbon:clean",className:"text-base text-[#35553B]"})}),(0,r.jsxs)(d.Z,{variant:"body1",className:"font-bold",children:[e.nome," (",e.ciclo," ",e.ciclo>1?"dias":"dia",")"]})]})}),(0,r.jsx)(l.ZP,{item:!0,xs:6,md:6,children:(0,r.jsxs)("div",{className:"relative flex justify-center items-center h-full",children:[(0,r.jsx)(d.Z,{variant:"h4",className:"absolute font-bold top-[35%]",children:e.diasRestantes}),(0,r.jsx)(d.Z,{variant:"caption",className:"absolute bottom-[22%]",children:1==e.diasRestantes?"dia":"dias"}),(0,r.jsx)(T,{percent:e.porcentagem})]})}),(0,r.jsx)(l.ZP,{item:!0,xs:6,md:6,children:(0,r.jsx)(P.Z,{display:"flex",alignItems:"center",sx:{gap:8},children:(0,r.jsxs)(P.Z,{display:"flex",flexDirection:"column",sx:{gap:2},children:[(0,r.jsxs)(P.Z,{children:[(0,r.jsx)(d.Z,{variant:"caption",children:"\xdaltimo"}),(0,r.jsx)(d.Z,{variant:"body2",children:e.ultimo})]}),(0,r.jsxs)(P.Z,{children:[(0,r.jsx)(d.Z,{variant:"caption",children:"Limite"}),(0,r.jsx)(d.Z,{variant:"body2",children:e.limite})]})]})})})]})}),(0,r.jsx)(F.Z,{sx:{my:"0 !important"}})]}))})},B=()=>{var e;let{loggedUnity:t}=(0,i.useContext)(o.V),[a,s]=(0,i.useState)(null),[c,d]=(0,i.useState)(null),[u,p]=(0,i.useState)(null),h=async()=>{try{let e=await N.h.get("dashboard/fabrica/getData/".concat(t.unidadeID));s(e.data.fornecedorPorStatus),d(e.data.totalRecebimentoNC),p(e.data.limpeza)}catch(a){console.log(a)}};return(0,i.useEffect)(()=>{h()},[]),a&&(0,r.jsx)(w,{children:(0,r.jsxs)(l.ZP,{container:!0,spacing:6,className:"match-height",children:[a.map(t=>(0,r.jsx)(l.ZP,{item:!0,xs:6,md:3,children:(0,r.jsx)(j,{stats:t.stats,color:t.color,title:null!==(e=t.title)&&void 0!==e?e:"0",chipText:"Last 4 Month",icon:(0,r.jsx)(n.Z,{icon:"mdi:truck-fast-outline"})})})),(0,r.jsx)(l.ZP,{item:!0,xs:12,md:9,children:(0,r.jsx)(C,{data:c})}),(0,r.jsx)(l.ZP,{item:!0,xs:12,md:3,children:(0,r.jsx)(O,{data:u})})]})})};var L=a(83830);let S=e=>{let{row:t}=e,{settings:a}=(0,i.useContext)(y.J6),{setId:l}=(0,i.useContext)(L.X),s=a.mode,o=h(),p=()=>{l(t.fornecedorID),o.push("/formularios/fornecedor")};return(0,r.jsx)(c.Z,{onClick:p,className:"cursor-pointer ".concat("dark"===s?"hover:bg-[#232327]":"hover:bg-[#EEEEF1]","  shadow-xl transition-all"),children:(0,r.jsx)(u.Z,{children:(0,r.jsxs)("div",{className:"space-y-4 p-1",children:[(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsxs)("div",{className:"flex gap-4",children:[(0,r.jsx)(m.Z,{variant:"rounded",sx:{width:70,height:70},className:"p-1 ".concat("dark"===s?"!bg-[#e0e0e0]":"!bg-[#f5f5f5]"),children:(0,r.jsx)("img",{src:t.logo,alt:"Imagem do logo da f\xe1brica"})}),(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)(E.Z,{size:"small",skin:"light",color:t.cor,label:t.status,sx:{mx:2,"& .MuiChip-label":{textTransform:"capitalize"}}}),(0,r.jsxs)("div",{className:"leading-4",children:[(0,r.jsxs)(d.Z,{variant:"body2",children:["Aberto em ",t.dataCriacao_formatada]}),(0,r.jsxs)(d.Z,{variant:"caption",children:["h\xe1 ",t.quantidadeDias," dias"]})]})]})]}),(0,r.jsx)("div",{children:(0,r.jsx)(n.Z,{icon:"uil:external-link-alt",className:"text-base text-[#35553B]"})})]}),(0,r.jsx)("div",{className:"w-full flex justify-between",children:(0,r.jsx)(d.Z,{variant:"body1",className:"!font-medium",children:t.fabrica})})]})})})},R=()=>{let{loggedUnity:e}=(0,i.useContext)(o.V),[t,a]=(0,i.useState)(null),s=async()=>{let t={cnpj:e.cnpj};try{let r=await N.h.post("dashboard/fornecedor/getData",t);a(r.data.lastForms)}catch(l){console.log(l)}};return(0,i.useEffect)(()=>{s()},[]),(0,r.jsx)(w,{children:(0,r.jsx)(l.ZP,{container:!0,spacing:6,className:"match-height",children:t&&t.map((e,t)=>(console.log("\uD83D\uDE80 ~ row:",e),(0,r.jsx)(l.ZP,{item:!0,xs:6,md:3,children:(0,r.jsx)(S,{row:e,icon:(0,r.jsx)(n.Z,{icon:"mdi:truck-fast-outline"})})},t)))})})},Y=()=>{let{setTitle:e}=(0,i.useContext)(s.f),{user:t}=(0,i.useContext)(o.V);return console.log("user",t),(0,i.useEffect)(()=>{e({title:1==t.papelID?"Home":2==t.papelID?"Dashboard":"",subtitle:""})},[]),1===t.papelID?(0,r.jsx)(l.ZP,{container:!0,spacing:6,children:(0,r.jsx)(l.ZP,{item:!0,xs:12,children:(0,r.jsx)(B,{})})}):2===t.papelID?(0,r.jsx)(l.ZP,{container:!0,spacing:6,children:(0,r.jsx)(l.ZP,{item:!0,xs:12,children:(0,r.jsx)(R,{})})}):null};var z=Y},5152:function(e,t,a){e.exports=a(37645)}},function(e){e.O(0,[4186,1445,1111,5999,1289,9774,2888,179],function(){return e(e.s=18694)}),_N_E=e.O()}]);