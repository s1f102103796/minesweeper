(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(o,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(85)}])},85:function(o,e,n){"use strict";n.r(e);var l=n(5893),s=n(7294),t=n(2729),a=n.n(t);let c=()=>{let[o,e]=(0,s.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),[n,t]=(0,s.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),c=[[-1,0],[-1,-1],[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1]];o.some(o=>o.some(o=>0!==o)),o.some((o,e)=>o.some((o,l)=>1===o&&1===n[e][l]));let i=0,r=0,_=0,d=0===o.flat().filter(o=>1===o).length,m=[[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1]],u=(o,e)=>{if(1===n[o][e]){console.log("BAKUHATU!"),m[o][e]=11;return}let l=0;for(let s=0;s<8;s++){let t=c[s][0],a=c[s][1];void 0!==n[o+t]&&void 0!==n[o+t][e+a]&&(1===n[o+t][e+a]&&l++,console.log("hachikai"))}if(console.log("checkbomb",l),l>=1){m[o][e]=l;return}m[o][e]=0;for(let n=0;n<8;n++)e+c[n][0]<0||e+c[n][0]>=9||o+c[n][1]<0||o+c[n][1]>=9||-1!==m[o+c[n][1]][e+c[n][0]]||(console.log("qqqqq",o+c[n][1],e+c[n][0]),u(o+c[n][1],e+c[n][0]))},b=(l,s)=>{if(console.log("選択",l,s),1===o[l][s])return;let a=[...o];if(a[l][s]=1,e(a),console.log("update"),d){for(console.log("aaaa");_<10;)console.log(i=Math.floor(9*Math.random()),r=Math.floor(9*Math.random())),1!==a[r][i]&&1!==n[r][i]&&(n[r][i]=1,_++);t(n)}console.log("bombmap"),console.table(n),console.log("board"),console.table(m),console.table(o)};return(()=>{for(let e=0;e<9;e++)for(let n=0;n<9;n++)1===o[e][n]&&u(e,n)})(),(0,l.jsx)("div",{className:a().container,children:(0,l.jsx)("div",{className:a().board,children:m.map((o,e)=>o.map((o,n)=>(0,l.jsxs)("div",{className:a().cell,onClick:()=>b(e,n),children:[-1===o&&(0,l.jsx)("div",{className:a().stone}),0===o&&(0,l.jsx)("div",{className:a().stone0}),o>0&&o<9&&(0,l.jsx)("div",{className:a().number,style:{backgroundPosition:-30*o+30}}),11===o&&(0,l.jsx)("div",{className:a().bomb})]},"".concat(e,"-").concat(n))))})})};e.default=c},2729:function(o){o.exports={container:"index_container__gnN1f",board:"index_board__2d6xe",cell:"index_cell__3W8ZQ",stone:"index_stone__oeDmm",number:"index_number__l0yF_",stone0:"index_stone0__GU0r7",bomb:"index_bomb__UtPjB"}}},function(o){o.O(0,[774,888,179],function(){return o(o.s=8312)}),_N_E=o.O()}]);