(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4269)}])},4269:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return u}});var t=r(5893),o=r(6758),l=r.n(o),a=r(7294);let s={[-1]:{content:function(e){let{color:n}=e;return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"trend-down",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:n,children:(0,t.jsx)("path",{d:"M640-240v-80h104L536-526 376-366 80-664l56-56 240 240 160-160 264 264v-104h80v240H640Z"})})}({color:"#10BB10"}),color:"#10BB10",className:"bg-green-100"},1:{content:function(e){let{color:n}=e;return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"trend-up",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:n,children:(0,t.jsx)("path",{d:"m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z"})})}({color:"#FF2020"}),color:"#FF2020",className:"bg-red-100"},0:{content:"–",color:"#AAAA20",className:"bg-yellow-200"}};function c(e){let{oldPrice:n,newPrice:r}=e,o=function(e){if(void 0===e)return{content:"–",color:"#595959",className:"bg-stone-300"};let n=Math.sign(e);return!function(e){if(!(e in s))throw Error(e+"is not a proper trendId")}(n),s[n]}(n&&r-n);return(0,t.jsxs)("p",{className:"rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",children:["Na benchu jest teraz",(0,t.jsx)("br",{}),r," ",(0,t.jsx)("span",{className:"font-bold "+o.className,style:{color:o.color,float:"right"},children:o.content}),(0,t.jsx)("br",{}),"os\xf3b."]})}function i(e){let{description:n,buttonHandler:r}=e;return(0,t.jsx)("button",{className:"rounded-lg border px-5 py-4 bg-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",onClick:e=>{e.stopPropagation(),r()},children:n})}function u(){let[e,n]=(0,a.useState)(void 0);return(0,t.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between p-24 ".concat(l().className),children:[(0,t.jsx)(i,{description:"Kliknij aby sprawdzić ile os\xf3b jest na benchu!",buttonHandler:function(){var e;e=function(e){n(n=>({oldValue:null==n?void 0:n.newValue,newValue:e}))},fetch("http://localhost:3000/bench-size",{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(n=>e(n.size))}}),e&&(0,t.jsx)(c,{oldPrice:e.oldValue,newPrice:e.newValue})]})}},6758:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);