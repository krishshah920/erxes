(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{192:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),i=(n(0),n(206)),l={id:"upgrade",title:"Upgrade",sidebar_label:"Upgrade"},c={id:"installation/upgrade",title:"Upgrade",description:"Following the steps in this document you can upgrade the system version.",source:"@site/docs/installation/upgrade.md",permalink:"/installation/upgrade",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/installation/upgrade.md",lastUpdatedBy:"Jason-2020",lastUpdatedAt:1590118681,sidebar_label:"Upgrade",sidebar:"docs",previous:{title:"DigitalOcean Marketplace",permalink:"/installation/digitalocean"},next:{title:"Subscription getting started",permalink:"/user/subscription-getting-started"}},o=[{value:"Upgrading from v0.9+ to the latest release vx.x.x",id:"upgrading-from-v09-to-the-latest-release-vxxx",children:[{value:"Breaking Changes",id:"breaking-changes",children:[]},{value:"Env changes",id:"env-changes",children:[]}]}],b={rightToc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Following the steps in this document you can upgrade the system version."),Object(i.b)("h2",{id:"upgrading-from-v09-to-the-latest-release-vxxx"},"Upgrading from v0.9+ to the latest release vx.x.x"),Object(i.b)("h3",{id:"breaking-changes"},"Breaking Changes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Since version ",Object(i.b)("inlineCode",{parentName:"li"},"latest vx.x.x")," Erxes started using RabbitMQ as message broker service. To update, please see example changes at docker ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"docker"}),"installation guide.")),Object(i.b)("li",{parentName:"ul"},"Engage module is moved to ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/erxes/erxes-engages-email-sender"}),"separate repository"),". Also docker ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"docker"}),"installation guide")," is updated to reflect related changes.")),Object(i.b)("h3",{id:"env-changes"},"Env changes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"erxes"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"REACT_APP_INTEGRATIONS_API_URL")," - is no longer used"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"erxes-api"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ENGAGES_API_DOMAIN")," - erxes-engages service endpoint"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RABBITMQ_HOST")," - RabbitMQ connection uri"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"erxes-widgets-api"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RABBITMQ_HOST")," - RabbitMQ connection uri"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"erxes-integrations"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RABBITMQ_HOST")," - RabbitMQ connection uri"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"erxes-engages"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PORT")," - engages service running port"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"NODE_ENV")," - node environment"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DEBUG")," - enable logging"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"MAIN_API_DOMAIN")," - erxes api url"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"MONGO_URL")," - MongoDB connection uri"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RABBITMQ_HOST")," - RabbitMQ connection uri")))))}p.isMDXComponent=!0},206:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(l,".").concat(d)]||s[d]||u[d]||i;return n?a.a.createElement(m,c(c({ref:t},b),{},{components:n})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);