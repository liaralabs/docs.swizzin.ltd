(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(6),r=(n(0),n(144)),s={id:"faqs",title:"Frequently Asked Questions",sidebar_label:"Frequently Asked Questions"},o={unversionedId:"getting-started/faqs",id:"getting-started/faqs",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"I just installed swizzin and the dashboard shows that it's using all my RAM. WTF?!",source:"@site/docs/getting-started/faqs.md",slug:"/getting-started/faqs",permalink:"/getting-started/faqs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/getting-started/faqs.md",version:"current",sidebar_label:"Frequently Asked Questions",sidebar:"docs",previous:{title:"Getting started with box",permalink:"/getting-started/box-basics"},next:{title:"Applications Index",permalink:"/applications/"}},l=[{value:"I just installed swizzin and the dashboard shows that it&#39;s using all my RAM. WTF?!",id:"i-just-installed-swizzin-and-the-dashboard-shows-that-its-using-all-my-ram-wtf",children:[]},{value:"I literally just installed my machine and the dashboard says swizzin is using XXXGB. WHY?! That&#39;s simply absurd.",id:"i-literally-just-installed-my-machine-and-the-dashboard-says-swizzin-is-using-xxxgb-why-thats-simply-absurd",children:[]},{value:"The dashboard states I have 0 out of 0 remaining disk space. What&#39;s going on?",id:"the-dashboard-states-i-have-0-out-of-0-remaining-disk-space-whats-going-on",children:[]},{value:"RuTorrent says I have no space left on my disk",id:"rutorrent-says-i-have-no-space-left-on-my-disk",children:[]},{value:"Application XYZ is not running! Everything is broken! What do I do?",id:"application-xyz-is-not-running-everything-is-broken-what-do-i-do",children:[]},{value:"... Docker?",id:"-docker",children:[]}],c={rightToc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"i-just-installed-swizzin-and-the-dashboard-shows-that-its-using-all-my-ram-wtf"},"I just installed swizzin and the dashboard shows that it's using all my RAM. WTF?!"),Object(r.b)("p",null,"The panel reports three statistics related to memory consumption: ",Object(r.b)("inlineCode",{parentName:"p"},"real"),", ",Object(r.b)("inlineCode",{parentName:"p"},"cache")," and ",Object(r.b)("inlineCode",{parentName:"p"},"physical"),"."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"real")," memory usage is considered RAM that cannot be used by other processes, as it has been reserved by the current process."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"cache")," takes into consideration things like dirty pages and other transient items in your RAM. These pages can be cleared upon request by the kernel if an application requests to use more RAM."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"physical")," is ",Object(r.b)("inlineCode",{parentName:"p"},"real + cache")),Object(r.b)("p",null,"It's likely that your freshly installed machine simply has a high ",Object(r.b)("inlineCode",{parentName:"p"},"cache")," usage but low ",Object(r.b)("inlineCode",{parentName:"p"},"real")," usage. If this is the case (but ",Object(r.b)("inlineCode",{parentName:"p"},"physical")," still reads 99%), you have nothing to worry about -- this is simply Linux performing a it should. If, instead, your ",Object(r.b)("inlineCode",{parentName:"p"},"real")," usage is consuming the majority of your RAM, you ",Object(r.b)("strong",{parentName:"p"},"do")," have problems. Consider using a program such as ",Object(r.b)("inlineCode",{parentName:"p"},"top")," or ",Object(r.b)("inlineCode",{parentName:"p"},"htop")," to help you narrow down and identify the rogue application."),Object(r.b)("h2",{id:"i-literally-just-installed-my-machine-and-the-dashboard-says-swizzin-is-using-xxxgb-why-thats-simply-absurd"},"I literally just installed my machine and the dashboard says swizzin is using XXXGB. WHY?! That's simply absurd."),Object(r.b)("p",null,"swizzin hasn't used the space, don't worry. By default, when using the ext4 partition format, the disk reserves 5% of the space in the partition for the potential scenario whereby the disk runs out of space. If this happens, and your whole server is formatted under a root partition scheme (i.e. no separate /home directory), your server will still have some space reserved to perform essential tasks such as (but not limited to): system updates, logging and various other things, such as bash auto(tab)-completion (crazy, right?)."),Object(r.b)("p",null,"Since the reservation is percentage based, the larger your partition, the higher the reserved space."),Object(r.b)("p",null,"You can remove the reserved space on the partition ",Object(r.b)("inlineCode",{parentName:"p"},"sda3")," with the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo tune2fs -m 0 /dev/sda3\n")),Object(r.b)("p",null,"You can also enter other non-zero values to customize the reserved space:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo tune2fs -m 1 /dev/sda3\n")),Object(r.b)("p",null,"Will reserve 1% instead."),Object(r.b)("p",null,"It's unlikely that the partition on ",Object(r.b)("em",{parentName:"p"},"your")," server is sda3, so you'll need to use the command ",Object(r.b)("inlineCode",{parentName:"p"},"lsblk")," to determine which partition exactly to modify."),Object(r.b)("h2",{id:"the-dashboard-states-i-have-0-out-of-0-remaining-disk-space-whats-going-on"},"The dashboard states I have 0 out of 0 remaining disk space. What's going on?"),Object(r.b)("p",null,"Did you install the ",Object(r.b)("inlineCode",{parentName:"p"},"quota")," package? You need to use the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/scripts/setdisk"}),Object(r.b)("inlineCode",{parentName:"a"},"setdisk"))," script to define the limits per user. The default quota is undefined, which is the source of this error."),Object(r.b)("p",null,"If you just installed every package just because and you don't actually need quotas, feel free to remove the package with ",Object(r.b)("inlineCode",{parentName:"p"},"box remove quota")),Object(r.b)("h2",{id:"rutorrent-says-i-have-no-space-left-on-my-disk"},"RuTorrent says I have no space left on my disk"),Object(r.b)("p",null,"Please see the chapter above."),Object(r.b)("h2",{id:"application-xyz-is-not-running-everything-is-broken-what-do-i-do"},"Application XYZ is not running! Everything is broken! What do I do?"),Object(r.b)("p",null,"Please consult the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/troubleshooting"}),"Troubleshooting")," guide for more information."),Object(r.b)("h2",{id:"-docker"},"... Docker?"),Object(r.b)("p",null,"No."),Object(r.b)("p",null,"You cannot run Swizzin in a docker. The way docker works does not mix well with the amount of different resources swizzin relies on that are present in a standard Debian/Ubuntu Installation."),Object(r.b)("p",null,"Swizzin installs all applications in their non-containerized, bare-metal form. This for performance and maintainability reasons. "))}d.isMDXComponent=!0},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,h=u["".concat(s,".").concat(b)]||u[b]||p[b]||r;return n?i.a.createElement(h,o(o({ref:t},c),{},{components:n})):i.a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);