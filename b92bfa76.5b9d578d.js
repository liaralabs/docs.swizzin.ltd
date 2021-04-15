(window.webpackJsonp=window.webpackJsonp||[]).push([[64,15],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(158)),o=n(56),s={id:"btsync",title:"Resilio (bt)Sync",sidebar_label:"Resilio (bt)Sync"},c={unversionedId:"applications/btsync",id:"applications/btsync",isDocsHomePage:!1,title:"Resilio (bt)Sync",description:"Resilio Sync (formerly BitTorrent Sync) is a peer-to-peer file synchronization tool available for Windows, Mac, Linux, Android, iOS, Windows Phone, Amazon Kindle Fire and BSD. It can sync files between devices on a local network, or between remote devices over the Internet via a modified version of the BitTorrent protocol.",source:"@site/docs/applications/btsync.mdx",slug:"/applications/btsync",permalink:"/applications/btsync",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/btsync.mdx",version:"current",sidebar_label:"Resilio (bt)Sync",sidebar:"docs",previous:{title:"Radarr",permalink:"/applications/radarr"},next:{title:"Nextcloud",permalink:"/applications/nextcloud"}},l=[{value:"Initial Setup",id:"initial-setup",children:[]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Service Management",id:"service-management",children:[]},{value:"Configuration &amp; Usage",id:"configuration--usage",children:[]}],u={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Resilio Sync (formerly BitTorrent Sync) is a peer-to-peer file synchronization tool available for Windows, Mac, Linux, Android, iOS, Windows Phone, Amazon Kindle Fire and BSD. It can sync files between devices on a local network, or between remote devices over the Internet via a modified version of the BitTorrent protocol. "),Object(i.b)("h2",{id:"initial-setup"},"Initial Setup"),Object(i.b)("p",null,"Installing Resilio is easy. Simply issue the following command from SSH:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"sudo box install btsync\n")),Object(i.b)("p",null,"This command will configure and install btsync for your user."),Object(i.b)("h2",{id:"how-to-access"},"How to Access"),Object(i.b)("p",null,"After Resilio Sync has been configured for your user, the application can be accessed from your web browser at ",Object(i.b)("inlineCode",{parentName:"p"},"https://<domain.ltd>:8888/gui")),Object(i.b)("h2",{id:"service-management"},"Service Management"),Object(i.b)("p",null,"The systemd service for btsync is an override for the default one shipped with the application. The swizzin file lives at"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"/etc/systemd/system/resilio-sync.service\n")),Object(i.b)(o.default,{service:"resilio-sync",mdxType:"SystemdTabs"}),Object(i.b)("h2",{id:"configuration--usage"},"Configuration & Usage"),Object(i.b)("p",null,"The Resilio Sync user guide can be found ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.resilio.com/hc/en-us/categories/200140177-Get-started-with-Sync"}),"here")))}b.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,m=b["".concat(o,".").concat(p)]||b[p]||d[p]||i;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},159:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(162),o=n(161),s=n(57),c=n.n(s),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,s=e.defaultValue,b=e.values,d=e.groupId,p=e.className,m=Object(i.a)(),f=m.tabGroupChoices,y=m.setTabGroupChoices,v=Object(a.useState)(s),O=v[0],h=v[1],j=Object(a.useState)(!1),w=j[0],g=j[1];if(null!=d){var T=f[d];null!=T&&T!==O&&b.some((function(e){return e.value===T}))&&h(T)}var x=function(e){h(e),null!=d&&y(d,e)},S=[],k=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},N=function(){g(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",k),window.addEventListener("mousedown",N),function(){window.removeEventListener("keydown",k),window.removeEventListener("mousedown",N)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},p)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(o.a)("tabs__item",t,c.a.tabItem,{"tabs__item--active":O===t}),style:w?{}:{outline:"none"},key:t,ref:function(e){return S.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(S,e.target,e),k(e)},onFocus:function(){return x(t)},onClick:function(){x(t),g(!1)},onPointerDown:function(){return g(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===O}))[0]))}},160:function(e,t,n){"use strict";var a=n(3),r=n(0),i=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},56:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(158)),o=n(159),s=n(160),c=n(163),l={},u={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",version:"current"},b=[],d={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"code"},Object(i.b)(o.a,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"status",mdxType:"TabItem"},Object(i.b)(c.a,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(s.a,{value:"start",mdxType:"TabItem"},Object(i.b)(c.a,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(s.a,{value:"stop",mdxType:"TabItem"},Object(i.b)(c.a,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(s.a,{value:"restart",mdxType:"TabItem"},Object(i.b)(c.a,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(s.a,{value:"enable",mdxType:"TabItem"},Object(i.b)(c.a,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(s.a,{value:"disable",mdxType:"TabItem"},Object(i.b)(c.a,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}p.isMDXComponent=!0}}]);