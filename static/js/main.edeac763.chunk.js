(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(24),a=n(7),r=(n(33),n(34),n(2)),s=(n(35),n(4)),i=n(0),j=(n(36),n(3)),o=function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})};function l(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){if(!e.ok)throw new Error("Something went wrong");return e.json()}));var e}var b="f",d="m",h=["Name","Sex","Born","Died","Mother","Father"],u=n(9),x=n.n(u),O=function(e){var t=e.person;return Object(j.jsx)(a.b,{to:"".concat(t.slug),replace:!0,className:x()({"has-text-danger":t.sex===b}),children:t.name})},m=function(e){var t=e.person,n=t.sex===b,c=t.slug,s=t.name,i=t.sex,o=t.born,l=t.died,d=t.mother,h=t.motherName,u=t.father,m=t.fatherName,p=Object(r.q)().personSlug;return Object(j.jsxs)("tr",{"data-cy":"person",className:x()({"has-background-warning":c===p}),children:[Object(j.jsx)("td",{children:Object(j.jsx)(a.b,{to:c,className:x()({"has-text-danger":n}),children:s})}),Object(j.jsx)("td",{children:i}),Object(j.jsx)("td",{children:o}),Object(j.jsx)("td",{children:l}),Object(j.jsx)("td",{children:d?Object(j.jsx)(O,{person:d}):h||"-"}),Object(j.jsx)("td",{children:u?Object(j.jsx)(O,{person:u}):m||"-"})]})},p=n(22);function f(e,t){return e.find((function(e){var n=e.sex,c=e.name;return n===d&&c===t.fatherName}))}function v(e,t){return e.find((function(e){var n=e.sex,c=e.name;return n===b&&c===t.motherName}))}var g=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)([]),r=Object(s.a)(a,2),b=r[0],d=r[1],u=Object(i.useState)(!1),x=Object(s.a)(u,2),O=x[0],g=x[1];Object(i.useEffect)((function(){c(!0),l().then((function(e){var t=function(e){return e.map((function(t){return Object(p.a)(Object(p.a)({},t),{},{mother:v(e,t),father:f(e,t)})}))}(e);d(t)})).catch((function(){g(!0)})).finally((function(){return c(!1)}))}),[]);var N=!O&&!!b.length,w=!b.length&&!O&&!n;return Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("div",{className:"box table-container",children:[n?Object(j.jsx)(o,{}):Object(j.jsx)(j.Fragment,{children:N&&Object(j.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsx)("tr",{children:h.map((function(e){return Object(j.jsx)("th",{children:e},e)}))})}),Object(j.jsx)("tbody",{children:b.map((function(e){return Object(j.jsx)(m,{person:e})}))})]})}),O&&Object(j.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),w&&Object(j.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})]})})},N=function(e){var t=e.isActive;return x()("navbar-item",{"has-background-grey-lighter":t})},w=function(){return Object(j.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(a.c,{className:N,to:"/",children:"Home"}),Object(j.jsx)(a.c,{className:N,to:"people",children:"People"})]})})})},y=function(){return Object(j.jsx)("h1",{className:"title",children:"Home Page"})},S=function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})},P=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"People Page"}),Object(j.jsx)(g,{})]})},k=function(){return Object(j.jsxs)("div",{"data-cy":"app",children:[Object(j.jsx)(w,{}),Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(r.d,{children:[Object(j.jsx)(r.b,{path:"/",element:Object(j.jsx)(y,{})}),Object(j.jsx)(r.b,{path:"people",element:Object(j.jsx)(P,{}),children:Object(j.jsx)(r.b,{path:":personSlug",element:Object(j.jsx)(g,{})})}),Object(j.jsx)(r.b,{path:"*",element:Object(j.jsx)(S,{})}),Object(j.jsx)(r.b,{path:"/home",element:Object(j.jsx)(r.a,{to:"/",replace:!0})})]})})})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(j.jsx)(a.a,{children:Object(j.jsx)(k,{})}))}},[[38,1,2]]]);
//# sourceMappingURL=main.edeac763.chunk.js.map