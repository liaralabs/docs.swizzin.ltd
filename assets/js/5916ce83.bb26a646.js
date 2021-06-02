(window.webpackJsonp=window.webpackJsonp||[]).push([[38,16,80],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return m}));var a=n(3),o=n(8),r=(n(0),n(163)),i=n(166),s=n(167),c=n(57),l=n(60),u={id:"wireguard",title:"Wireguard",sidebar_label:"Wireguard"},d={unversionedId:"applications/wireguard",id:"applications/wireguard",isDocsHomePage:!1,title:"Wireguard",description:"WireGuard is an extremely simple yet fast and modern VPN that utilizes state-of-the-art cryptography",source:"@site/docs/applications/wireguard.mdx",sourceDirName:"applications",slug:"/applications/wireguard",permalink:"/applications/wireguard",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/wireguard.mdx",version:"current",sidebar_label:"Wireguard",frontMatter:{id:"wireguard",title:"Wireguard",sidebar_label:"Wireguard"},sidebar:"docs",previous:{title:"Webmin",permalink:"/applications/webmin"},next:{title:"X2go",permalink:"/applications/x2go"}},p=[{value:"Initial Setup",id:"initial-setup",children:[{value:"Managing service",id:"managing-service",children:[]}]},{value:"How to Access",id:"how-to-access",children:[{value:"Client Install",id:"client-install",children:[]},{value:"Client Setup",id:"client-setup",children:[]},{value:"Generating QR Code for clients",id:"generating-qr-code-for-clients",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"WG doesn&#39;t work for any user except for the master",id:"wg-doesnt-work-for-any-user-except-for-the-master",children:[]},{value:"My connection is not being kept alive",id:"my-connection-is-not-being-kept-alive",children:[]},{value:"wg-quick: `wg100x&#39; already exists",id:"wg-quick-wg100x-already-exists",children:[]}]}],b={toc:p};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"WireGuard is an extremely simple yet fast and modern VPN that utilizes state-of-the-art cryptography"),Object(r.b)("h2",{id:"initial-setup"},"Initial Setup"),Object(r.b)("p",null,"Installing wireguard is easy. Simply issue the following command from SSH:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box install wireguard\n")),Object(r.b)("p",null,"At the end of the installation, the location of the config file for your user will be printed (",Object(r.b)("inlineCode",{parentName:"p"},"/home/<user>/.wireguard/<user>.conf"),")"),Object(r.b)("h3",{id:"managing-service"},"Managing service"),Object(r.b)(c.default,{service:"wg-quick@wg1000",mdxType:"SystemdTabs"}),Object(r.b)("h2",{id:"how-to-access"},"How to Access"),Object(r.b)("h3",{id:"client-install"},"Client Install"),Object(r.b)("p",null,"In order to use the Wireguard tunnel, you'll need to install the client on your local computer or mobile phone. In order to get started, please check the ",Object(r.b)("a",{parentName:"p",href:"https://www.wireguard.com/install/"},"Wireguard site")," for help on installing Wireguard on the operating system of your choice."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"If you prefer, an alternate client called ",Object(r.b)("a",{parentName:"p",href:"https://tunsafe.com/download"},"TunSafe")," exists and is already a bit more mature than the official Wireguard client for Windows. ",Object(r.b)("strong",{parentName:"p"},"While the client itself is open-source and developed by a community member with prior credibility, it bears mentioning that using this client completely, 100% at your own risk as it is not developed or maintained by the Wireguard team. You have been warned.")))),Object(r.b)("h3",{id:"client-setup"},"Client Setup"),Object(r.b)("p",null,"Wireguard is available on many platforms. Setting it up for use with your swizzin configuration should be fairly straight-forward, but in case you need a little help getting your client setup, here are some instructions for popular operating systems."),Object(r.b)(i.a,{defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"Linux/macOS",value:"nixlike"},{label:"iOS",value:"ios"},{label:"Android",value:"android"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"nixlike",mdxType:"TabItem"},Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Simply copy-paste the content of the file outputted at the end of the server setup into a file in /etc/wireguard.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/wireguard/wg0.conf\nsudo chmod 600 /etc/wireguard/wg0.conf\nsudo wg-quick up wg0\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Wireguard should now be up and tunnelling all you traffic through swizzin."),Object(r.b)("li",{parentName:"ol"},"On Linux systems, you can configure a systemd service to automatically run and enable this configuration on each boot:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable wg-quick@wg0\n"))),Object(r.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Copy-paste the contents of the file outputted at the end of configuration into a file onto your local desktop,eg: ",Object(r.b)("inlineCode",{parentName:"li"},"swizzin.conf.d")),Object(r.b)("li",{parentName:"ol"},"Open TunSafe, click and drag the configuration file you just created to the TunSafe window. TunSafe will automatically import the client configuration and connect. Easy!"))),Object(r.b)(s.a,{value:"android",mdxType:"TabItem"},Object(r.b)("p",null,"Configuration is easiest if you use utilize the QR Encode function."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Connect to your server from a computer and issue the commands:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"u=$(whoami)\nqrencode -t ansiutf8 < ~/.wireguard/$u.conf\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"In your client on your phone, add a new tunnel and chose the ",Object(r.b)("inlineCode",{parentName:"li"},"QR Code")," option. Scan the QR code which was generated in your terminal."),Object(r.b)("li",{parentName:"ol"},"Enable the tunnel by ticking the switch."))),Object(r.b)(s.a,{value:"ios",mdxType:"TabItem"},Object(r.b)("p",null,"Configuration is easiest if you use utilize the QR Encode function."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Connect to your server from a computer and issue the commands:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"u=$(whoami)\nqrencode -t ansiutf8 < ~/.wireguard/$u.conf\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"In your client on your phone, add a new tunnel and chose the ",Object(r.b)("inlineCode",{parentName:"li"},"QR Code")," option. Scan the QR code which was generated in your terminal."),Object(r.b)("li",{parentName:"ol"},"Enable the tunnel by ticking the switch.")))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Check if it worked")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"After configuring your Wireguard Client, ",Object(r.b)("a",{parentName:"p",href:"https://duckduckgo.com/?q=ip+address&ia=answer"},"check your IP Address"),"."))),Object(r.b)("h3",{id:"generating-qr-code-for-clients"},"Generating QR Code for clients"),Object(r.b)("p",null,"You can quickly set up WG on your client by using the scannable qr-code. You can run the folllowing command to generate a quick QR inside of your terminal session, which you can scan with your device's camera."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"qrencode -t ansiutf8 < ~/.wireguard/*.conf\n")),Object(r.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(r.b)(l.default,{mdxType:"Troubleshooting"}),Object(r.b)("h3",{id:"wg-doesnt-work-for-any-user-except-for-the-master"},"WG doesn't work for any user except for the master"),Object(r.b)("p",null,"The multi-user functionality has been patched in at a later stage, probably after you have installed it. Please make sure to run ",Object(r.b)("inlineCode",{parentName:"p"},"box update")," and then remove and install wireguard again (",Object(r.b)("inlineCode",{parentName:"p"},"box remove wireguard && box install wireguard"),"). We have opted against patching this automatically as some administrators might not want to give their users WG access without knowing first."),Object(r.b)("h3",{id:"my-connection-is-not-being-kept-alive"},"My connection is not being kept alive"),Object(r.b)("p",null,"This can happen when you are behind an NAT. Uncomment the following line at the end of your config. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-plaintext"},"PersistentKeepalive = 25\n")),Object(r.b)("h3",{id:"wg-quick-wg100x-already-exists"},"wg-quick: `wg100x' already exists"),Object(r.b)("p",null,"The service might have been shut down but the kernel process is probably still running. Verify using ",Object(r.b)("inlineCode",{parentName:"p"},"htop")," or some other process manager, and see if you can find any processes starting with ",Object(r.b)("inlineCode",{parentName:"p"},"wg"),", that match the id. You can then manually shut the service down using the following command."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"wg-quick down wg100x\n")))}m.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||r;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},166:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(170),i=n(165),s=n(58),c=n.n(s),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,s=e.defaultValue,d=e.values,p=e.groupId,b=e.className,m=Object(r.a)(),h=m.tabGroupChoices,g=m.setTabGroupChoices,y=Object(a.useState)(s),f=y[0],v=y[1],j=Object(a.useState)(!1),O=j[0],w=j[1];if(null!=p){var k=h[p];null!=k&&k!==f&&d.some((function(e){return e.value===k}))&&v(k)}var N=function(e){v(e),null!=p&&g(p,e)},x=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},C=function(){w(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",T),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",T),window.removeEventListener("mousedown",C)}}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},b)},d.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(i.a)("tabs__item",t,c.a.tabItem,{"tabs__item--active":f===t}),style:O?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),T(e)},onFocus:function(){return N(t)},onClick:function(){N(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}},167:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},168:function(e,t,n){"use strict";var a=n(0),o=n(172);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},169:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a=n(23),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},r=n(0),i={Prism:a.a,theme:o};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},p=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=c({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=c({},n,{backgroundColor:null}),o};function b(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var m=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?p(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,r=c({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(r.style=i.plain),void 0!==o&&(r.style=void 0!==r.style?c({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),s(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return r[n[0]];var i=a?{display:"inline-block"}:{},s=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[i].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,r=e.token,i=c({},b(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(i.style=void 0!==i.style?c({},i.style,o):o),void 0!==n&&(i.key=n),a&&(i.className+=" "+a),i})),s(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,r=this.getThemeDict(this.props),i=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],r=0,i=0,s=[],c=[s];i>-1;){for(;(r=a[i]++)<o[i];){var p=void 0,b=t[i],m=n[i][r];if("string"==typeof m?(b=i>0?b:["plain"],p=m):(b=d(b,m.type),m.alias&&(b=d(b,m.alias)),p=m.content),"string"==typeof p){var h=p.split(l),g=h.length;s.push({types:b,content:h[0]});for(var y=1;y<g;y++)u(s),c.push(s=[]),s.push({types:b,content:h[y]})}else i++,t.push(b),n.push(p),a.push(0),o.push(p.length)}i--,t.pop(),n.pop(),a.pop(),o.pop()}return u(s),c}(void 0!==i?this.tokenize(t,a,i,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);t.a=m},170:function(e,t,n){"use strict";var a=n(0),o=n(171);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},171:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},172:function(e,t,n){"use strict";var a=n(0),o=n.n(a).a.createContext(void 0);t.a=o},173:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,o,r]=t;if(a&&r){a=parseInt(a),r=parseInt(r);const e=a<r?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(r+=e);for(let t=a;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n(3),o=n(0),r=n.n(o),i=n(165),s=n(169);var c=n(173),l=n.n(c),u={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},d=n(168),p=n(164),b=function(){var e=Object(p.useThemeConfig)().prism,t=Object(d.a)().isDarkTheme,n=e.theme||u,a=e.darkTheme||n;return t?a:n},m=n(175),h=n(59),g=n.n(h),y=/{([\d,-]+)}/,f=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")};function v(e){var t=e.children,n=e.className,c=e.metastring,u=e.title,d=Object(p.useThemeConfig)().prism,h=Object(o.useState)(!1),v=h[0],j=h[1],O=Object(o.useState)(!1),w=O[0],k=O[1];Object(o.useEffect)((function(){k(!0)}),[]);var N=Object(p.parseCodeBlockTitle)(c)||u,x=Object(o.useRef)(null),T=[],C=b(),E=Array.isArray(t)?t.join(""):t;if(c&&y.test(c)){var S=c.match(y)[1];T=l()(S).filter((function(e){return e>0}))}var P=n&&n.replace(/language-/,"");!P&&d.defaultLanguage&&(P=d.defaultLanguage);var I=E.replace(/\n$/,"");if(0===T.length&&void 0!==P){for(var z,D="",W=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return f(["js","jsBlock"]);case"jsx":case"tsx":return f(["js","jsBlock","jsx"]);case"html":return f(["js","jsBlock","html"]);case"python":case"py":return f(["python"]);default:return f()}}(P),B=E.replace(/\n$/,"").split("\n"),M=0;M<B.length;){var L=M+1,R=B[M].match(W);if(null!==R){switch(R.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":D+=L+",";break;case"highlight-start":z=L;break;case"highlight-end":D+=z+"-"+(L-1)+","}B.splice(M,1)}else M+=1}T=l()(D),I=B.join("\n")}var q=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let r=!1;o.rangeCount>0&&(r=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}n.remove(),r&&(o.removeAllRanges(),o.addRange(r)),a&&a.focus()}(I),j(!0),setTimeout((function(){return j(!1)}),2e3)};return r.a.createElement(s.a,Object(a.a)({},s.b,{key:String(w),theme:C,code:I,language:P}),(function(e){var t,n=e.className,o=e.style,s=e.tokens,c=e.getLineProps,l=e.getTokenProps;return r.a.createElement("div",{className:g.a.codeBlockContainer},N&&r.a.createElement("div",{style:o,className:g.a.codeBlockTitle},N),r.a.createElement("div",{className:Object(i.a)(g.a.codeBlockContent,P)},r.a.createElement("div",{tabIndex:0,className:Object(i.a)(n,g.a.codeBlock,"thin-scrollbar",(t={},t[g.a.codeBlockWithTitle]=N,t))},r.a.createElement("div",{className:g.a.codeBlockLines,style:o},s.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=c({line:e,key:t});return T.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return r.a.createElement("span",Object(a.a)({key:t},l({token:e,key:t})))})))})))),r.a.createElement("button",{ref:x,type:"button","aria-label":Object(m.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(i.a)(g.a.copyButton),onClick:q},v?r.a.createElement(m.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.a.createElement(m.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(8),r=(n(0),n(163)),i=n(166),s=n(167),c=n(174),l={},u={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",version:"current",frontMatter:{}},d=[],p={toc:d};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"code"},Object(r.b)(i.a,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"status",mdxType:"TabItem"},Object(r.b)(c.a,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(s.a,{value:"start",mdxType:"TabItem"},Object(r.b)(c.a,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(s.a,{value:"stop",mdxType:"TabItem"},Object(r.b)(c.a,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(s.a,{value:"restart",mdxType:"TabItem"},Object(r.b)(c.a,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(s.a,{value:"enable",mdxType:"TabItem"},Object(r.b)(c.a,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(s.a,{value:"disable",mdxType:"TabItem"},Object(r.b)(c.a,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}b.isMDXComponent=!0},60:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(8),r=(n(0),n(163)),i={},s={unversionedId:"snippets/troubleshooting",id:"snippets/troubleshooting",isDocsHomePage:!1,title:"troubleshooting",description:"You can always also try the general troubleshooting tips written in our guide. They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!",source:"@site/docs/snippets/troubleshooting.md",sourceDirName:"snippets",slug:"/snippets/troubleshooting",permalink:"/snippets/troubleshooting",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/troubleshooting.md",version:"current",frontMatter:{}},c=[],l={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You can always also try the ",Object(r.b)("a",{parentName:"p",href:"/guides/troubleshooting"},"general troubleshooting tips written in our guide"),". They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!"))))}u.isMDXComponent=!0}}]);