(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{13:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c,a,r,i,o,s,b,j=n(1),d=n.n(j),l=n(6),u=n.n(l),O=(n(13),n(2)),h=n(3),x=h.a.div(c||(c=Object(O.a)(["\n  background-color: #00ffff;\n  min-height: 200px;\n  padding-bottom: 20px;\n"]))),p=n(4),f=h.a.h2(a||(a=Object(O.a)(["\n  text-align: center;\n  line-height: 60px;\n"]))),g=h.a.h2(r||(r=Object(O.a)(["\n  text-align: center;\n  margin-top: 50px;\n  color: blue;\n  font-size: 36px;\n"]))),k=h.a.div(i||(i=Object(O.a)(["\n  margin: 0 auto;\n  width: fit-content;\n"]))),v=h.a.button(o||(o=Object(O.a)(["\n  margin: 0 10px;\n  padding: 5px;\n  background-color: #e9a6e7;\n  border-radius: 5px;\n  cursor: pointer;\n  :hover {\n    background-color: yellow;\n  }\n"]))),m=n(0),S=function(e){var t=e.options,n=e.onLeaveFeedBack;return t.map((function(e){var t=e.replace(e[0],e[0].toUpperCase());return Object(m.jsx)(v,{type:"button",onClick:function(){return n(e)},children:t},e)}))},w=h.a.p(s||(s=Object(O.a)(["\n  text-align: center;\n  font-weight: 600;\n  font-size: 24px;\n"]))),B=h.a.span(b||(b=Object(O.a)(["\n  color: #b15e5e;\n  margin-left: 20px;\n"]))),N=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return r=Math.round(t/a*100),Object(m.jsxs)("div",{children:[Object(m.jsxs)(w,{children:["Good:",Object(m.jsx)(B,{children:t})]}),Object(m.jsxs)(w,{children:["Neutral:",Object(m.jsx)(B,{children:n})]}),Object(m.jsxs)(w,{children:["Bad:",Object(m.jsx)(B,{children:c})]}),Object(m.jsxs)(w,{children:["Total:",Object(m.jsx)(B,{children:a})]}),Object(m.jsxs)(w,{children:["Positive feedback:",Object(m.jsxs)(B,{children:[r,"%"]})]})]})};function y(e){var t=e.title,n=e.titleStatistic,c=e.titleNoStatistic,a=Object(j.useState)(0),r=Object(p.a)(a,2),i=r[0],o=r[1],s=Object(j.useState)(0),b=Object(p.a)(s,2),d=b[0],l=b[1],u=Object(j.useState)(0),O=Object(p.a)(u,2),h=O[0],x=O[1],v=Object(j.useState)(0),w=Object(p.a)(v,2),B=w[0],y=w[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f,{children:t}),Object(m.jsx)(k,{children:Object(m.jsx)(S,{options:["good","neutral","bad"],onLeaveFeedBack:function(e){switch(e){case"good":o((function(e){return e+1}));break;case"neutral":l((function(e){return e+1}));break;case"bad":x((function(e){return e+1}));break;default:return}y((function(e){return e+1}))}})}),Object(m.jsx)(g,{children:n}),0!==B?Object(m.jsx)(N,{good:i,neutral:d,bad:h,total:B}):Object(m.jsx)(f,{children:c}),")"]})}var F=function(){return Object(m.jsx)(x,{children:Object(m.jsx)(y,{title:"Please leave feedback",titleStatistic:"Statistics",titleNoStatistic:"No feedback given"})})};u.a.render(Object(m.jsx)(d.a.StrictMode,{children:Object(m.jsx)(F,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.6eb4aff3.chunk.js.map