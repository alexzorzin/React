(this.webpackJsonpproyectoreact=this.webpackJsonpproyectoreact||[]).push([[0],{61:function(e,t,c){},63:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var a=c(0),i=c.n(a),s=c(22),n=c.n(s),r=(c(61),c(62),c(63),c(79)),o=c(77),l=c(81),d=c(78),j=c(80),m=c(55),b=c(54),u=c(1),x=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-cart2",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"})})})},h=c(19),O=function(){return Object(u.jsx)(r.a,{bg:"dark",expand:"lg",variant:"dark",children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(r.a.Brand,{href:"/React/",children:"ZShoes"}),Object(u.jsx)(r.a.Toggle,{"aria-controls":"navbarScroll"}),Object(u.jsxs)(r.a.Collapse,{id:"navbarScroll",children:[Object(u.jsxs)(l.a,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:[Object(u.jsx)(l.a.Link,{href:"#catalogo",children:"Cat\xe1logo"}),Object(u.jsxs)(d.a,{title:"Talles",id:"navbarScrollingDropdown",children:[Object(u.jsx)(h.c,{to:"/React/",activeClassName:"active",className:"link d-flex ms-2 text-decoration-none text-black",children:"Todos"}),Object(u.jsx)(h.c,{to:"/React/size/7",activeClassName:"active",className:"link d-flex ms-2 text-decoration-none text-black",children:"7"}),Object(u.jsx)(h.c,{to:"/React/size/7.5",activeClassName:"active",className:"link d-flex ms-2 text-decoration-none text-black",children:"7.5"}),Object(u.jsx)(h.c,{to:"/React/size/8",activeClassName:"active",className:"link d-flex ms-2 text-decoration-none text-black",children:"8"}),Object(u.jsx)(h.c,{to:"/React/size/9",activeClassName:"active",className:"link d-flex ms-2 text-decoration-none text-black",children:"9"})]})]}),Object(u.jsxs)(j.a,{className:"d-flex container",children:[Object(u.jsx)(m.a,{type:"search",placeholder:"Buscar modelos...",className:"me-2","aria-label":"Search"}),Object(u.jsx)(b.a,{variant:"outline-info",children:"Buscar"})]}),Object(u.jsx)(l.a,{children:Object(u.jsx)(l.a.Link,{href:"#cart",children:Object(u.jsx)(x,{})})})]})]})})},f=c(6);function p(e){var t=Object(a.useState)(0),c=Object(f.a)(t,2),i=c[0],s=c[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){i<e.stock?s(i+1):alert("No hay suficiente stock.")},children:"+"}),Object(u.jsx)("p",{children:i}),Object(u.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){s(i>1?i-1:0)},children:"-"}),Object(u.jsx)("button",{className:"btn btn-primary mx-3",onClick:function(){alert("Has a\xf1adido el producto correctamente")},children:"Agregar al carrito"})]})}function g(e){var t=e.item;return Object(u.jsxs)("div",{className:"card w-50 mt-5 mb-5 container",children:[Object(u.jsx)("div",{className:"card-header center",children:t.name}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("img",{className:"img-fluid w-25",src:t.img,alt:"foto-del-producto"}),Object(u.jsx)("div",{children:"Talle: "+t.size}),Object(u.jsx)("div",{children:"AR$"+t.price})]}),Object(u.jsx)("div",{children:Object(u.jsx)(h.b,{className:"text-black",to:"/React/item/".concat(t.id),children:"Ver producto"})}),Object(u.jsx)("div",{style:{display:"flex",justifyContent:"center"},className:"card-footer",children:Object(u.jsx)(p,{stock:t.stock})})]},t.id)}function v(e){return Object(u.jsx)(u.Fragment,{children:e.list.map((function(e,t){return Object(u.jsx)(g,{item:e},t)}))})}var w=c(7),N=[{id:1,stock:4,name:"Nike AirForce One",size:"8",price:16999,img:"https://www.courir.es/dw/image/v2/BCCL_PRD/on/demandware.static/-/Sites-master-catalog-courir/default/dw26559699/images/hi-res/001488854_101.png?sw=600&sh=600&sm=fit"},{id:2,stock:15,name:"Nike Court Vision Low",size:"7.5",price:11e3,img:"https://http2.mlstatic.com/D_NQ_NP_812575-MLA40853945365_022020-O.webp"},{id:3,stock:42,name:"Adidas Advantage",size:"9",price:9199,img:"https://http2.mlstatic.com/D_NQ_NP_667341-MLA48011270907_102021-O.webp"},{id:4,stock:58,name:"Puma Electron E",size:"9",price:9599,img:"https://http2.mlstatic.com/D_NQ_NP_792759-MLA47957265972_102021-O.webp"},{id:5,stock:11,name:"Adidas Superstar",size:"7",price:16e3,img:"https://images.footlocker.com/is/image/FLEU/316772989204_01?wid=763&hei=538&fmt=png-alpha"},{id:6,stock:3,name:"Nike Air Max 97",size:"8",price:25599,img:"https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw26473373/products/NI_921733-603/NI_921733-603-1.JPG"},{id:7,stock:34,name:"Vans Old Skool",size:"7.5",price:10999,img:"https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw0dadcf9f/products/VA_VN000D3HY28/VA_VN000D3HY28-1.JPG"},{id:8,stock:19,name:"Puma City Rider",size:"7.5",price:14e3,img:"https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwefbf0983/products/PU_382044-03/PU_382044-03-1.JPG"},{id:9,stock:21,name:"Adidas Stan Smith",size:"9",price:17999,img:"https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw727144c7/products/AD_FY5460/AD_FY5460-1.JPG"}],k=function(){var e=new Promise((function(e,t){setTimeout((function(){e(N)}),2e3)})),t=Object(a.useState)([]),c=Object(f.a)(t,2),i=c[0],s=c[1],n=Object(a.useState)(!0),r=Object(f.a)(n,2),o=r[0],l=r[1],d=Object(w.g)().sizeId;return Object(a.useEffect)((function(){d?e.then((function(e){s(e.filter((function(e){return e.size===d})))})).catch((function(e){return console.log(e)})).finally((function(){return l(!1)})):e.then((function(e){s(e)})).catch((function(e){return console.log(e)})).finally((function(){return l(!1)}))}),[d]),Object(u.jsx)(u.Fragment,{children:o?Object(u.jsx)("h1",{children:"Espere por favor..."}):Object(u.jsx)(v,{list:i})})},y=(c(69),function(e){var t=e.item;return Object(u.jsxs)("div",{className:"row mt-5 mx-5 center",children:[Object(u.jsx)("div",{className:"col-12 col-lg-6",children:Object(u.jsx)("img",{className:"w-25 img-fluid product-img",src:t.img,alt:t.name})}),Object(u.jsxs)("div",{className:"col-12 product-detail col-lg-6",children:[Object(u.jsx)("h3",{className:"text-uppercase fw-bold",children:t.name}),Object(u.jsx)("p",{className:"text-uppercase",children:"Talle: "+t.size}),Object(u.jsx)("p",{className:"fw-bold",children:"$"+t.price}),Object(u.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(u.jsx)(p,{stock:t.stock,id:t.id})})]})]})}),z=function(){var e=Object(a.useState)({}),t=Object(f.a)(e,2),c=t[0],i=t[1],s=Object(a.useState)(!0),n=Object(f.a)(s,2),r=n[0],o=n[1],l=Object(w.g)().prodId;return Object(a.useEffect)((function(){new Promise((function(e,t){setTimeout((function(){e(N.find((function(e){return e.id==l})))}),2e3)})).then((function(e){i(e)})).catch((function(e){return console.log(e)})).finally((function(){return o(!1)}))}),[l]),Object(u.jsx)(u.Fragment,{children:r?Object(u.jsx)("h1",{children:"Espere por favor..."}):Object(u.jsx)(y,{item:c})})};var _=function(){return Object(u.jsx)(h.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{children:Object(u.jsx)(O,{})}),Object(u.jsxs)(w.c,{children:[Object(u.jsx)(w.a,{path:"/React/",element:Object(u.jsx)(k,{})}),Object(u.jsx)(w.a,{path:"/React/size/:sizeId",element:Object(u.jsx)(k,{})}),Object(u.jsx)(w.a,{path:"/React/item/:prodId",element:Object(u.jsx)(z,{})})]})]})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,82)).then((function(t){var c=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),a(e),i(e),s(e),n(e)}))};n.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root")),S()}},[[70,1,2]]]);
//# sourceMappingURL=main.adc5937a.chunk.js.map