(this["webpackJsonpdepop-shop"]=this["webpackJsonpdepop-shop"]||[]).push([[0],{18:function(e,t,n){e.exports=n.p+"static/media/depop_logo.d323bd3c.png"},23:function(e,t,n){e.exports=n(53)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(17),r=n.n(c),i=(n(28),n(22)),o=n(4),s=n(3),u=(n(29),function(e){var t=e.likedItems,n=e.unlikeItem;return l.a.createElement("ul",{className:"likes-list"},t.map((function(e){var t=e.id,a=e.title;return l.a.createElement("li",{key:t},l.a.createElement("b",null,a)," ",l.a.createElement("button",{onClick:function(){return n(t)}},"X"))})))}),m=function(e){var t=e.likes,n=e.onClick;return l.a.createElement("button",{className:"likes-count",disabled:0===t,onClick:n},"".concat(t," Like").concat(1===t?"":"s"))},d=function(e){var t=e.likedItems,n=e.unlikeItem,c=Object(a.useState)(!1),r=Object(s.a)(c,2),i=r[0],o=r[1];return Object(a.useEffect)((function(){0===t.length&&o(!1)}),[t]),l.a.createElement("div",{className:"likes"},l.a.createElement(m,{likes:t.length,onClick:function(){return o(!i)}}),i&&0!==t.length&&l.a.createElement(u,{likedItems:t,unlikeItem:n}))},f=n(18),E=n.n(f),b=(n(30),function(e){return l.a.createElement("div",{className:"header"},l.a.createElement("img",{className:"depop-logo",src:E.a,alt:"depop logo"}),l.a.createElement(d,e))}),g=n(19),p=n(20),k=(n(35),function(e){var t=e.id,n=e.img,a=e.title,c=e.size,r=e.price,i=e.seller,o=e.sold,s=e.brand,u=e.liked,m=e.toggleLike;return l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"item-img-container"},l.a.createElement("img",{className:"item-img",alt:a,src:n}),o&&l.a.createElement("div",{className:"sold"},"SOLD"),l.a.createElement("button",{className:"like-button ".concat(u?"liked":""),onClick:function(){return m(t,a)}},l.a.createElement(g.a,{className:"heart",icon:p.a}))),l.a.createElement("p",null,l.a.createElement("b",null,i)," ",a),l.a.createElement("p",null,s&&l.a.createElement("span",null,"Brand: ",l.a.createElement("b",null,s))," ",c&&l.a.createElement("span",null,"Size: ",l.a.createElement("b",null,c))),l.a.createElement("p",null,"Price ",l.a.createElement("b",null,"\xa3".concat(r))))});k.defaultProps={size:null,brand:null};var v=k,h=(n(36),function(){return l.a.createElement("div",{className:"loader"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null))}),N=function(e){var t=e.filters,n=e.filter,a=e.toggleFilter,c=e.label;return l.a.createElement("button",{className:t.includes(n)?"active":"",onClick:function(){return a(n)}},c)},O=function(e){var t=e.items,n=e.loading,c=e.toggleLike,r=Object(a.useState)([]),i=Object(s.a)(r,2),u=i[0],m=i[1],d=Object(a.useMemo)((function(){return t.filter((function(e){return!(u.includes("sold")&&!1!==e.sold||u.includes("liked")&&!1===e.liked)}))}),[u,t]),f=function(e){return u.includes(e)?(t=e,m(u.filter((function(e){return e!==t})))):function(e){return m([].concat(Object(o.a)(u),[e]))}(e);var t},E=n?0:d.length;return l.a.createElement("div",{className:"items-container"},l.a.createElement("div",{className:"items-header"},l.a.createElement("h4",{className:"results-number"},"".concat(E," Result").concat(1===E?"":"s")),l.a.createElement("div",{className:"filter-buttons"},l.a.createElement(N,{filters:u,filter:"sold",toggleFilter:f,label:"Hide Sold Items"}),l.a.createElement(N,{filters:u,filter:"liked",toggleFilter:f,label:"Show Liked Items"}))),l.a.createElement("div",{className:"items-body"},n?l.a.createElement(h,null):d.map((function(e){return l.a.createElement(v,Object.assign({key:e.id,toggleLike:c},e))}))))};O.defaultProps={items:[]};var j=O,I=n(21),w=n.n(I),S=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),u=Object(s.a)(r,2),m=u[0],d=u[1],f=Object(a.useState)(!0),E=Object(s.a)(f,2),g=E[0],p=E[1];Object(a.useEffect)((function(){w.a.get("https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/products").then((function(e){c(e.data.map((function(e){return{id:e.id,title:e.title,img:e.img,price:e.price,brand:e.brand,size:e.size,seller:e.seller,sold:e.sold}}))),p(!1)})).catch((function(){alert("There was an error fetching the data. Please refresh the page.")}))}),[]);var k=function(e){return d(m.filter((function(t){return t.id!==e})))},v=function(e){return m.some((function(t){return t.id===e}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,{likedItems:m,unlikeItem:k}),l.a.createElement(j,{items:n.map((function(e){return Object(i.a)({},e,{liked:v(e.id)})})),loading:g,toggleLike:function(e,t){return v(e)?k(e):d([].concat(Object(o.a)(m),[{id:e,title:t}]))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.64343dd8.chunk.js.map