(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{164:function(n,e,t){"use strict";t.r(e);var r=t(195),i=t.n(r),a=(t(196),t(103),t(73),t(185),t(199)),o=t.n(a),c=(t(104),t(200),t(45),t(46),t(12)),d=t(0),l=t(206),s=t(173),u=t.n(s),f=t(209),b=t(211),m=t(208),g=t(210),h=t(175),p=t(169),y=t(180);function j(n){return new Promise(function(e,t){var r=new FileReader;r.onload=function(){e(r.result)},r.onerror=t,r.readAsArrayBuffer(n)})}function O(n){return new Promise(function(e,t){var r=new FileReader;r.onload=function(){e(r.result)},r.onerror=t,r.readAsDataURL(n)})}var w=function(n){return function(e){var t=e.target.files;console.log(t),n([]),Array.from(t).map(function(){var e=o()(i.a.mark(function e(t){var r,a,o,c,d,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([j(t),O(t)]);case 2:r=e.sent,a=r[0],o=r[1];try{delete(c=l.a.load(a)).MakerNote,d=c.GPSLatitude,s=c.GPSLongitude,console.log({GPSLatitude:d,GPSLongitude:s}),console.log(c),n(function(n){return n.concat([[Number(d.description),-Number(s.description),o]])})}catch(i){alert(i)}case 6:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}())}},v=null;"undefined"!=typeof window&&(v=u.a.divIcon({className:"custom-marker"}));e.default=function(){var n=d.useState([[51.505,-.09]]),e=n[0],t=n[1];return"undefined"==typeof window?null:Object(c.d)(y.a,null,Object(c.d)(h.a,null,Object(c.d)(p.a,null,Object(c.d)("div",null,Object(c.d)("h1",null,"Gamehendge"),Object(c.d)("input",{type:"file",onChange:w(t),multiple:!0})),Object(c.d)("div",{style:{height:600}},Object(c.d)(f.a,{center:e[0],zoom:19,style:{height:600}},Object(c.d)(b.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),v&&e.map(function(n,e){return Object(c.d)(m.a,{position:n,key:e,icon:v},Object(c.d)(g.a,null,"Here's your shitty image. ",Object(c.d)("br",null)," ",Object(c.d)("img",{src:n[2]})))}))))))}},165:function(n,e,t){"use strict";t.d(e,"b",function(){return r}),t.d(e,"d",function(){return i}),t.d(e,"a",function(){return a}),t.d(e,"f",function(){return o}),t.d(e,"c",function(){return c}),t.d(e,"e",function(){return d});var r={brand:"#663399",lilac:"#9d7cbf",accent:"#ffb238",success:"#37b635",warning:"#ec1818",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",black:"#000"},i={sansSerif:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},a={xs:0,sm:576,md:768,lg:992,xl:1200},o={md:720,lg:960,xl:1140},c={fontSize:{regular:16,large:18},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.45,heading:1.2},containerPadding:1.5},d={header:60}},168:function(n,e,t){"use strict";t.d(e,"b",function(){return f});var r=t(12),i=t(0),a=t.n(i),o=t(6),c=t.n(o),d=t(43),l=t.n(d);t.d(e,"a",function(){return l.a});t(171);var s=a.a.createContext({});function u(n){var e=n.staticQueryData,t=n.data,i=n.query,o=n.render,c=t?t.data:e[i]&&e[i].data;return Object(r.d)(a.a.Fragment,null,c&&o(c),!c&&Object(r.d)("div",null,"Loading (StaticQuery)"))}var f=function(n){var e=n.data,t=n.query,i=n.render,a=n.children;return Object(r.d)(s.Consumer,null,function(n){return Object(r.d)(u,{data:e,query:t,render:i||a,staticQueryData:n})})};f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},169:function(n,e,t){"use strict";var r=t(166),i=t(12),a=(t(0),t(165)),o=t(170),c=Object(r.a)("div",{target:"e1c6zxln0"})("margin-left:auto;margin-right:auto;width:auto;max-width:",Object(o.a)(a.f.lg),"em;");e.a=function(n){var e=n.children,t=n.className;return Object(i.d)(c,{className:t},e)}},170:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var r=t(165),i=function(n){return n/r.c.fontSize.regular}},171:function(n,e,t){var r;n.exports=(r=t(177))&&r.default||r},175:function(n,e,t){"use strict";var r=t(166),i=t(12),a=(t(0),t(165)),o=Object(r.a)("div",{target:"e20rco30"})("display:block;flex:1;position:relative;padding:",a.c.containerPadding,"rem;margin-bottom:3rem;");e.a=function(n){var e=n.children,t=n.className;return Object(i.d)(o,{className:t},e)}},176:function(n){n.exports={data:{site:{siteMetadata:{title:"Gamehendge",description:"A starter kit for TypeScript-based Gatsby projects with sensible defaults."}}}}},177:function(n,e,t){"use strict";t.r(e);t(67);var r=t(0),i=t.n(r),a=t(6),o=t.n(a),c=t(68),d=function(n){var e=n.location,t=n.pageResources;return t?i.a.createElement(c.a,Object.assign({location:e,pageResources:t},t.json)):null};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=d},180:function(n,e,t){"use strict";var r=t(12),i=t(176),a=t(0),o=t(181),c=t.n(o),d=t(168),l=(t(182),t(165)),s=t(170),u="\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: "+l.c.fontSize.regular+"px !important;\n    line-height: "+l.c.lineHeight.regular+" !important;\n  }\n\n  body {\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    font-family: "+l.d.sansSerif+";\n    color: "+l.b.black+";\n    background-color: "+l.b.white+";\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n  }\n\n  a {\n    color: "+l.b.brand+";\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      text-decoration: underline;\n    }\n  }\n\n  img {\n    max-width: 100%;\n    object-fit: contain;\n    position: relative;\n  }\n\n  figure {\n    margin: 2rem 0;\n  }\n\n  figcaption {\n    font-size: 80%;\n  }\n\n  table {\n    width: 100%;\n    margin-bottom: 1rem;\n    border: 1px solid "+l.b.ui.light+";\n    font-size: 85%;\n    border-collapse: collapse;\n  }\n\n  td,\n  th {\n    padding: .25rem .5rem;\n    border: 1px solid "+l.b.ui.light+";\n  }\n\n  th {\n    text-align: left;\n  }\n\n  tbody {\n    tr {\n      &:nth-of-type(odd) {\n        td {\n          background-color: "+l.b.ui.whisper+";\n        }\n        tr {\n          background-color: "+l.b.ui.whisper+";\n        }\n      }\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 1.414rem;\n    margin-bottom: .5rem;\n    color: "+l.b.black+";\n    font-weight: 600;\n    line-height: "+l.c.lineHeight.heading+";\n    text-rendering: optimizeLegibility;\n  }\n\n  h1 {\n    margin-top: 0;\n    font-size: "+l.c.headingSizes.h1+"rem;\n  }\n\n  h2 {\n    font-size: "+l.c.headingSizes.h2+"rem;\n  }\n\n  h3 {\n    font-size: "+l.c.headingSizes.h3+"rem;\n  }\n\n  h4, h5, h6 {\n    font-size: "+l.c.headingSizes.h4+"rem;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  strong {\n    color: "+l.b.black+";\n  }\n\n  ul,\n  ol,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  dt {\n    font-weight: bold;\n  }\n\n  dd {\n    margin-bottom: .5rem;\n  }\n\n  hr {\n    position: relative;\n    margin: 1.5rem 0;\n    border: 0;\n    border-top: 1px solid "+l.b.ui.light+";\n  }\n\n  blockquote {\n    margin: .8rem 0;\n    padding: .5rem 1rem;\n    border-left: .25rem solid "+l.b.ui.light+";\n    color: "+l.b.gray.calm+";\n\n    p {\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    @media (min-width: "+Object(s.a)(l.a.md)+"em) {\n      padding-right: 5rem;\n      padding-left: 1.25rem;\n    }\n  }\n\n  .custom-marker {\n    height: 12px;\n    width: 12px;\n    background: red;\n    border-radius: 100%;\n    opacity: 0.5;\n  }\n",f=t(166),b=t(183),m=t(169),g=Object(f.a)("header",{target:"e14yya1q0"})("height:",l.e.header,"px;padding:0 ",l.c.containerPadding,"rem;background-color:",l.b.brand,";color:",Object(b.a)(.5,l.b.white),";"),h=Object(f.a)(m.a,{target:"e14yya1q1"})({name:"voneje",styles:"display:flex;flex-direction:row;align-items:center;height:100%;"}),p=Object(f.a)(d.a,{target:"e14yya1q2"})("color:",l.b.white,";font-size:1.5rem;font-weight:600;&:hover,&:focus{text-decoration:none;}"),y=function(n){var e=n.title;return Object(r.d)(g,null,Object(r.d)(h,null,Object(r.d)(p,{to:"/"},e)))},j=Object(f.a)("div",{target:"e17su9850"})({name:"zf0iqh",styles:"display:flex;flex-direction:column;min-height:100vh;"}),O=function(n){var e=n.children,t=n.className;return Object(r.d)(a.Fragment,null,Object(r.d)(r.a,{styles:function(){return Object(r.c)(u)}}),Object(r.d)(j,{className:t},e))},w=Object(f.a)("main",{target:"e1qy7fsr0"})({name:"b95f0i",styles:"display:flex;flex-direction:column;flex:1;"}),v=function(n){var e=n.children,t=n.className;return Object(r.d)(w,{className:t},e)};e.a=function(n){var e=n.children;return Object(r.d)(d.b,{query:"991718019",render:function(n){return Object(r.d)(O,null,Object(r.d)("link",{rel:"stylesheet",href:"https://unpkg.com/leaflet@1.5.1/dist/leaflet.css",integrity:"sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==",crossOrigin:""}),Object(r.d)(c.a,{title:n.site.siteMetadata.title,meta:[{name:"description",content:n.site.siteMetadata.description},{name:"keywords",content:n.site.siteMetadata.keywords}]}),Object(r.d)(y,{title:n.site.siteMetadata.title}),Object(r.d)(v,null,e))},data:i})}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-879bfc8103104fcf92ef.js.map