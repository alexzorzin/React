(this.webpackJsonpproyectoreact=this.webpackJsonpproyectoreact||[]).push([[0],{83:function(e,t,c){},85:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(37),r=c.n(s),i=(c(83),c(84),c(85),c(103)),l=c(100),o=c(105),j=c(102),d=c(104),b=c(74),m=c(73),u=c(21),x=c(8),O=c(1),h=Object(a.createContext)([]),f=function(){return Object(a.useContext)(h)},p=function(e){var t=e.children,c=Object(a.useState)([]),n=Object(x.a)(c,2),s=n[0],r=n[1],i=Object(a.useState)(1),l=Object(x.a)(i,2),o=l[0],j=l[1];return Object(O.jsx)(h.Provider,{value:{cartList:s,addItem:function(e){s.find((function(t){return t.item===e.item}))?(s.map((function(t){return t.item===e.item&&(t.stock=t.stock+o),t})),console.log("Est\xe1s repitiendo")):r([].concat(Object(u.a)(s),[e]))},clearCart:function(){r([])},removeProd:function(e){var t=s.filter((function(t){return t.id!==e}));r(Object(u.a)(t))},count:o,setCount:j},children:t})},v=function(){var e=f().cartList;return Object(O.jsx)(O.Fragment,{children:0!==e.length&&Object(O.jsxs)("div",{children:[Object(O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-cart2",viewBox:"0 0 16 16",children:Object(O.jsx)("path",{d:"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"})}),e.lenght]})})},g=c(22),N=c(101),k=function(){var e=f().cartList;return Object(O.jsx)(i.a,{bg:"dark",expand:"lg",variant:"dark",children:Object(O.jsxs)(l.a,{children:[Object(O.jsx)(i.a.Brand,{href:"/React/",children:"ZShoes"}),Object(O.jsx)(i.a.Toggle,{"aria-controls":"navbarScroll"}),Object(O.jsxs)(i.a.Collapse,{id:"navbarScroll",children:[Object(O.jsxs)(o.a,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:[Object(O.jsx)(o.a.Link,{href:"#catalogo",children:"Cat\xe1logo"}),Object(O.jsxs)(j.a,{title:"Talles",id:"navbarScrollingDropdown",children:[Object(O.jsx)(g.c,{to:"/React/",activeClassName:"active",className:"link d-flex ms-2 text-decoration-none text-black",children:"Todos"}),Object(O.jsx)(g.c,{to:"/React/size/7",activeClassName:"active",className:"link d-flex ms-2 text-decoration-none text-black",children:"7"}),Object(O.jsx)(g.c,{to:"/React/size/7.5",activeClassName:"active",className:"link d-flex ms-2 text-decoration-none text-black",children:"7.5"}),Object(O.jsx)(g.c,{to:"/React/size/8",activeClassName:"active",className:"link d-flex ms-2 text-decoration-none text-black",children:"8"}),Object(O.jsx)(g.c,{to:"/React/size/9",activeClassName:"active",className:"link d-flex ms-2 text-decoration-none text-black",children:"9"})]})]}),Object(O.jsxs)(d.a,{className:"d-flex container",children:[Object(O.jsx)(b.a,{type:"search",placeholder:"Buscar modelos...",className:"me-2","aria-label":"Search"}),Object(O.jsx)(m.a,{variant:"outline-info",children:"Buscar"})]}),Object(O.jsxs)(o.a,{children:[Object(O.jsx)(g.c,{to:"/React/cart",activeClassName:"active",className:"link ms-2 text-decoration-none text-white",children:Object(O.jsx)(v,{})}),e.length>0&&Object(O.jsx)(N.a,{bg:"info",className:"p-1",children:e.length})]})]})]})})},w=c(2),C=c.n(w),y=c(5),S=c(6);function z(e){var t=e.item;return Object(O.jsxs)("div",{className:"card w-50 mt-5 mb-5 container",children:[Object(O.jsx)("div",{className:"card-header center",children:t.name}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("img",{className:"img-fluid w-25",src:t.img,alt:"foto-del-producto"}),Object(O.jsx)("div",{children:"Talle: "+t.size}),Object(O.jsx)("div",{children:"AR$"+t.price})]}),Object(O.jsx)("div",{className:"card-footer",children:Object(O.jsx)(g.b,{className:"text-black btn btn-primary",to:"/React/item/".concat(t.id),children:"Ver producto"})})]},t.id)}var R=function(e){var t=e.loading,c=e.products;return Object(O.jsx)("div",{children:t?Object(O.jsx)("h1",{className:"loading",children:"Loading..."}):Object(O.jsx)("div",{className:"tours",children:c.map((function(e){return Object(O.jsx)(z,{item:e},e.id)}))})})},I=c(16),L=c(75),A=c(76),B=Object(L.a)({apiKey:"AIzaSyBOV8xjk9KFMOocv0f7Hg0oheBQLvkET9w",authDomain:"zshoes.firebaseapp.com",projectId:"zshoes",storageBucket:"zshoes.appspot.com",messagingSenderId:"745127482128",appId:"1:745127482128:web:7824a496e5170dca69cb95",measurementId:"${config.measurementId}"}),F=Object(A.a)(B),T=c(32),E=function(){var e=Object(a.useState)([]),t=Object(x.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!0),r=Object(x.a)(s,2),i=r[0],l=r[1],o=Object(I.g)().sizeId;return Object(a.useEffect)((function(){var e=Object(T.a)(F,"stock"),t=function(){var t=Object(S.a)(C.a.mark((function t(){var c,a,s;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!o){t.next=9;break}return c=Object(T.f)(e,Object(T.g)("size","==",o)),t.next=4,Object(T.d)(Object(T.f)(c));case 4:a=t.sent,n(a.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}))),l(!1),t.next=14;break;case 9:return t.next=11,Object(T.d)(e);case 11:s=t.sent,n(s.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}))),l(!1);case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[o]),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(R,{loading:i,products:c})})},H=(c(93),function(e){var t=e.stock,c=e.onAdd,a=f(),n=a.count,s=a.setCount;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){n<t?s(n+1):alert("No queda m\xe1s stock de este producto.")},children:"+"}),Object(O.jsx)("p",{children:n}),Object(O.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){s(n<=t&&n>1?n-1:0)},children:"-"}),Object(O.jsx)("button",{className:"btn btn-primary mx-3",onClick:c,children:"Agregar al carrito"})]})}),P=function(){return Object(O.jsx)(g.b,{to:"/React/cart",children:Object(O.jsx)("button",{className:"btn btn-primary",children:"Carrito"})})},M=function(e){var t=e.item,c=f(),n=c.cartList,s=c.setCount,r=c.count,i=c.addItem,l=Object(a.useState)("countButton"),o=Object(x.a)(l,2),j=o[0],d=o[1];return console.log(n),Object(O.jsxs)("div",{className:"row mt-5 mx-5 center",children:[Object(O.jsx)("div",{className:"col-12 col-lg-6",children:Object(O.jsx)("img",{className:"w-25 img-fluid product-img",src:t.img,alt:t.name})}),Object(O.jsxs)("div",{className:"col-12 product-detail col-lg-6",children:[Object(O.jsx)("h3",{className:"text-uppercase fw-bold",children:t.name}),Object(O.jsx)("p",{className:"text-uppercase",children:"Talle: "+t.size}),Object(O.jsx)("p",{className:"fw-bold",children:"$"+t.price}),"countButton"===j?Object(O.jsx)("div",{className:"center d-flex",children:Object(O.jsx)(H,{onAdd:function(){i({item:t.name,Stock:r,img:t.img,price:t.price}),d("CartButton"),s(1),alert("Has agregado el producto al carrito")},stock:t.stock,id:t.id})}):Object(O.jsx)(P,{})]})]})},$=function(){var e=Object(a.useState)([]),t=Object(x.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!0),r=Object(x.a)(s,2),i=r[0],l=r[1],o=Object(I.g)().prodId;return Object(a.useEffect)((function(){var e=function(){var e=Object(S.a)(C.a.mark((function e(){var t,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=7;break}return t=Object(T.b)(F,"stock",o),e.next=4,Object(T.c)(t);case 4:c=e.sent,n(Object(y.a)({id:c.id},c.data())),l(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[o]),Object(O.jsx)(M,{loading:i,item:c})},D=function(){var e=Object(a.useState)(0),t=Object(x.a)(e,2),c=t[0],n=t[1],s=f().cartList;return Object(a.useEffect)((function(){s.forEach((function(e){e.price+=e.stock})),n(0)}),[s]),Object(O.jsxs)("p",{children:["Precio: AR$ ",c]})},V=function(){var e=f(),t=e.cartList,c=e.clearCart,a=e.removeProd;return console.log(t),Object(O.jsx)(O.Fragment,{children:t.length>0?Object(O.jsxs)("div",{className:"mt-5",children:[Object(O.jsx)("p",{className:"pt-5 text-uppercase fs-3 fw-bold",children:"Carrito de compras"}),t.map((function(e){return Object(O.jsx)("div",{className:"d-flex justify-content-center",children:Object(O.jsxs)("div",{className:"card w-50 my-5 mx-3",children:[Object(O.jsx)("div",{className:"card-header text-uppercase",children:e.item}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("img",{src:e.img,className:"w-25 col-5 ms-5",alt:e.item}),Object(O.jsxs)("div",{className:"col-3 mt-5",children:[e.Stock,"  x  ",e.item]}),Object(O.jsxs)("div",{className:"col-3 mt-5",children:["AR$ ",e.price*e.Stock]}),Object(O.jsx)("div",{className:"col-1 mt-5",children:Object(O.jsxs)("button",{className:"btn btn-danger btn-sm",onClick:function(){return a(e.id)},children:[Object(O.jsx)("i",{className:"fa fa-trash"}),"  Eliminar"]})})]})]},e.item)})})),Object(O.jsx)(D,{}),Object(O.jsx)("button",{className:"btn btn-primary mb-5 mx-2",onClick:c,children:"Vaciar carrito"}),Object(O.jsx)("button",{className:"btn btn-primary mb-5 mx-2",children:"Comprar"})]}):Object(O.jsxs)("div",{className:"mt-5",children:[Object(O.jsx)("p",{className:"fs-3 fw-bold",children:"Tu carrito se encuentra vac\xedo"}),Object(O.jsxs)("p",{className:"fw-normal fs-5",children:["Agregue sus productos clickeando ",Object(O.jsx)(g.b,{to:"/React",className:"fw-bold",children:"AQU\xcd"})]})]})})};var J=function(){return Object(O.jsx)(p,{children:Object(O.jsx)(g.a,{children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("header",{children:Object(O.jsx)(k,{})}),Object(O.jsxs)(I.c,{children:[Object(O.jsx)(I.a,{path:"/React/",element:Object(O.jsx)(E,{})}),Object(O.jsx)(I.a,{path:"/React/size/:sizeId",element:Object(O.jsx)(E,{})}),Object(O.jsx)(I.a,{path:"/React/item/:prodId",element:Object(O.jsx)($,{})}),Object(O.jsx)(I.a,{path:"/React/cart",element:Object(O.jsx)(V,{})})]})]})})})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,106)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(J,{})}),document.getElementById("root")),K()}},[[94,1,2]]]);
//# sourceMappingURL=main.5d81ac1f.chunk.js.map