(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{164:function(n,e,t){"use strict";t.r(e);var r=t(195),i=t.n(r),a=(t(196),t(199),t(103),t(73),t(104),t(185),t(201)),o=t.n(a),c=(t(45),t(46),t(12)),s=t(0),d=t(206),l=t(173),u=t.n(l),f=t(209),b=t(211),m=t(208),h=t(210),g=t(175),p=t(169),y=t(180);if("undefined"!=typeof window){var w=new Audio("https://archive.org/download/Twiddle2014-08-23.ca14.flac16/Twiddle2014-08-22.ca14.set1.t06.mp3");document.addEventListener("click",function(){w.play()},!1)}function j(n){return new Promise(function(e,t){var r=new FileReader;r.onload=function(){e(r.result)},r.onerror=t,r.readAsArrayBuffer(n)})}function v(n){return new Promise(function(e,t){var r=new FileReader;r.onload=function(){e(r.result)},r.onerror=t,r.readAsDataURL(n)})}var O=function(n,e,t){return function(){var r=o()(i.a.mark(function r(a){var c,s;return i.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t(!0),console.log("starting"),c=a.target.files,r.next=5,Promise.all(Array.from(c).map(function(){var n=o()(i.a.mark(function n(e){var t,r,a,o,c,s;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([j(e),v(e)]);case 2:return t=n.sent,r=t[0],a=t[1],n.prev=5,delete(o=d.a.load(r)).MakerNote,c=o.GPSLatitude,s=o.GPSLongitude,n.abrupt("return",[Number(c.description),-Number(s.description),a]);case 12:n.prev=12,n.t0=n.catch(5),alert(n.t0);case 15:case"end":return n.stop()}},n,null,[[5,12]])}));return function(e){return n.apply(this,arguments)}}()));case 5:s=r.sent,n(s),e(!1),t(!1);case 9:case"end":return r.stop()}},r)}));return function(n){return r.apply(this,arguments)}}()},x=null,k=null;"undefined"!=typeof window&&(x=u.a.divIcon({className:"custom-marker"}),k=u.a.icon({iconUrl:"https://i.imgur.com/okry3he.png",iconSize:[400,225]}));e.default=function(){var n=s.useState(!1),e=n[0],t=n[1],r=s.useState(!0),i=r[0],a=r[1],o=s.useState([[44.9738,-93.2578]]),d=o[0],l=o[1];return"undefined"==typeof window?null:Object(c.d)(y.a,null,Object(c.d)(g.a,null,Object(c.d)(p.a,null,Object(c.d)("div",null,Object(c.d)("input",{type:"file",onChange:O(l,a,t),multiple:!0}),Object(c.d)("div",null,"Work is in progress: ",e?"yes":"no")),Object(c.d)("div",{style:{height:600}},Object(c.d)(f.a,{center:d[0],zoom:i?17:19,style:{height:600}},Object(c.d)(b.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),i?Object(c.d)(m.a,{position:d[0],icon:k}):null,!i&&x&&d.map(function(n,e){return Object(c.d)(m.a,{position:n,key:e,icon:x},Object(c.d)(h.a,null,"Here's your shitty image. ",Object(c.d)("br",null)," ",Object(c.d)("img",{src:n[2]})))}))))))}},165:function(n,e,t){"use strict";t.d(e,"b",function(){return r}),t.d(e,"d",function(){return i}),t.d(e,"a",function(){return a}),t.d(e,"f",function(){return o}),t.d(e,"c",function(){return c}),t.d(e,"e",function(){return s});var r={brand:"#663399",lilac:"#9d7cbf",accent:"#ffb238",success:"#37b635",warning:"#ec1818",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",black:"#000"},i={sansSerif:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},a={xs:0,sm:576,md:768,lg:992,xl:1200},o={md:720,lg:960,xl:1140},c={fontSize:{regular:16,large:18},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.45,heading:1.2},containerPadding:1.5},s={header:60}},168:function(n,e,t){"use strict";t.d(e,"b",function(){return f});var r=t(12),i=t(0),a=t.n(i),o=t(6),c=t.n(o),s=t(43),d=t.n(s);t.d(e,"a",function(){return d.a});t(171);var l=a.a.createContext({});function u(n){var e=n.staticQueryData,t=n.data,i=n.query,o=n.render,c=t?t.data:e[i]&&e[i].data;return Object(r.d)(a.a.Fragment,null,c&&o(c),!c&&Object(r.d)("div",null,"Loading (StaticQuery)"))}var f=function(n){var e=n.data,t=n.query,i=n.render,a=n.children;return Object(r.d)(l.Consumer,null,function(n){return Object(r.d)(u,{data:e,query:t,render:i||a,staticQueryData:n})})};f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},169:function(n,e,t){"use strict";var r=t(166),i=t(12),a=(t(0),t(165)),o=t(170),c=Object(r.a)("div",{target:"e1c6zxln0"})("margin-left:auto;margin-right:auto;width:auto;max-width:",Object(o.a)(a.f.lg),"em;");e.a=function(n){var e=n.children,t=n.className;return Object(i.d)(c,{className:t},e)}},170:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var r=t(165),i=function(n){return n/r.c.fontSize.regular}},171:function(n,e,t){var r;n.exports=(r=t(177))&&r.default||r},175:function(n,e,t){"use strict";var r=t(166),i=t(12),a=(t(0),t(165)),o=Object(r.a)("div",{target:"e20rco30"})("display:block;flex:1;position:relative;padding:",a.c.containerPadding,"rem;margin-bottom:3rem;");e.a=function(n){var e=n.children,t=n.className;return Object(i.d)(o,{className:t},e)}},176:function(n){n.exports={data:{site:{siteMetadata:{title:"Gamehendge",description:"A starter kit for TypeScript-based Gatsby projects with sensible defaults."}}}}},177:function(n,e,t){"use strict";t.r(e);t(67);var r=t(0),i=t.n(r),a=t(6),o=t.n(a),c=t(68),s=function(n){var e=n.location,t=n.pageResources;return t?i.a.createElement(c.a,Object.assign({location:e,pageResources:t},t.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},180:function(n,e,t){"use strict";var r=t(12),i=t(176),a=t(0),o=t(181),c=t.n(o),s=t(168),d=(t(182),t(165)),l=t(170),u="\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: "+d.c.fontSize.regular+"px !important;\n    line-height: "+d.c.lineHeight.regular+" !important;\n  }\n\n  body {\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    font-family: "+d.d.sansSerif+";\n    color: "+d.b.black+";\n    background-color: "+d.b.white+";\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n  }\n\n  a {\n    color: "+d.b.brand+";\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      text-decoration: underline;\n    }\n  }\n\n  img {\n    max-width: 100%;\n    object-fit: contain;\n    position: relative;\n  }\n\n  figure {\n    margin: 2rem 0;\n  }\n\n  figcaption {\n    font-size: 80%;\n  }\n\n  table {\n    width: 100%;\n    margin-bottom: 1rem;\n    border: 1px solid "+d.b.ui.light+";\n    font-size: 85%;\n    border-collapse: collapse;\n  }\n\n  td,\n  th {\n    padding: .25rem .5rem;\n    border: 1px solid "+d.b.ui.light+";\n  }\n\n  th {\n    text-align: left;\n  }\n\n  tbody {\n    tr {\n      &:nth-of-type(odd) {\n        td {\n          background-color: "+d.b.ui.whisper+";\n        }\n        tr {\n          background-color: "+d.b.ui.whisper+";\n        }\n      }\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 1.414rem;\n    margin-bottom: .5rem;\n    color: "+d.b.black+";\n    font-weight: 600;\n    line-height: "+d.c.lineHeight.heading+";\n    text-rendering: optimizeLegibility;\n  }\n\n  h1 {\n    margin-top: 0;\n    font-size: "+d.c.headingSizes.h1+"rem;\n  }\n\n  h2 {\n    font-size: "+d.c.headingSizes.h2+"rem;\n  }\n\n  h3 {\n    font-size: "+d.c.headingSizes.h3+"rem;\n  }\n\n  h4, h5, h6 {\n    font-size: "+d.c.headingSizes.h4+"rem;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  strong {\n    color: "+d.b.black+";\n  }\n\n  ul,\n  ol,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  dt {\n    font-weight: bold;\n  }\n\n  dd {\n    margin-bottom: .5rem;\n  }\n\n  hr {\n    position: relative;\n    margin: 1.5rem 0;\n    border: 0;\n    border-top: 1px solid "+d.b.ui.light+";\n  }\n\n  blockquote {\n    margin: .8rem 0;\n    padding: .5rem 1rem;\n    border-left: .25rem solid "+d.b.ui.light+";\n    color: "+d.b.gray.calm+";\n\n    p {\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    @media (min-width: "+Object(l.a)(d.a.md)+"em) {\n      padding-right: 5rem;\n      padding-left: 1.25rem;\n    }\n  }\n\n  .custom-marker {\n    height: 12px;\n    width: 12px;\n    background: red;\n    border-radius: 100%;\n    opacity: 0.5;\n  }\n",f=t(166),b=t(183),m=t(169),h=Object(f.a)("header",{target:"e14yya1q0"})("height:",d.e.header,"px;padding:0 ",d.c.containerPadding,"rem;background-color:",d.b.brand,";color:",Object(b.a)(.5,d.b.white),";"),g=Object(f.a)(m.a,{target:"e14yya1q1"})({name:"voneje",styles:"display:flex;flex-direction:row;align-items:center;height:100%;"}),p=Object(f.a)(s.a,{target:"e14yya1q2"})("color:",d.b.white,";font-size:1.5rem;font-weight:600;&:hover,&:focus{text-decoration:none;}"),y=function(n){var e=n.title;return Object(r.d)(h,null,Object(r.d)(g,null,Object(r.d)(p,{to:"/"},e)))},w=Object(f.a)("div",{target:"e17su9850"})({name:"zf0iqh",styles:"display:flex;flex-direction:column;min-height:100vh;"}),j=function(n){var e=n.children,t=n.className;return Object(r.d)(a.Fragment,null,Object(r.d)(r.a,{styles:function(){return Object(r.c)(u)}}),Object(r.d)(w,{className:t},e))},v=Object(f.a)("main",{target:"e1qy7fsr0"})({name:"b95f0i",styles:"display:flex;flex-direction:column;flex:1;"}),O=function(n){var e=n.children,t=n.className;return Object(r.d)(v,{className:t},e)};e.a=function(n){var e=n.children;return Object(r.d)(s.b,{query:"991718019",render:function(n){return Object(r.d)(j,null,Object(r.d)("link",{rel:"stylesheet",href:"https://unpkg.com/leaflet@1.5.1/dist/leaflet.css",integrity:"sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==",crossOrigin:""}),Object(r.d)(c.a,{title:n.site.siteMetadata.title,meta:[{name:"description",content:n.site.siteMetadata.description},{name:"keywords",content:n.site.siteMetadata.keywords}]}),Object(r.d)(y,{title:n.site.siteMetadata.title}),Object(r.d)(O,null,e))},data:i})}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-43f719c107fbde61ffd0.js.map