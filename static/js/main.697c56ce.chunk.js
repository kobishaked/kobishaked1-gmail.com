(this["webpackJsonpreading-list"]=this["webpackJsonpreading-list"]||[]).push([[0],{13:function(n,e,t){n.exports=t.p+"static/media/Reading_illustration.bb184da9.png"},15:function(n,e,t){n.exports=t(22)},22:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(9),i=t.n(o),u=t(1),c=t(2),l=t(3),d=t(4),f=Object(r.createContext)({}),s=function(n){var e=Object(r.useState)({booksList:[],addBook:function(n){i(Object(d.a)((function(e){e.booksList.push(n)})))},removeBook:function(n){i(Object(d.a)((function(e){e.booksList=e.booksList.filter((function(e){return e.id!==n.id}))})))}}),t=Object(l.a)(e,2),o=t[0],i=t[1];return Object(r.useEffect)((function(){localStorage.getItem("books")&&i(Object(d.a)((function(n){n.booksList=JSON.parse(localStorage.getItem("books"))})))}),[]),Object(r.useEffect)((function(){i(Object(d.a)((function(n){localStorage.setItem("books",JSON.stringify(o.booksList))})))}),[o]),a.a.createElement(f.Provider,{value:o},n.children)},b=f;function p(){var n=Object(u.a)(["\n    font-size: 13px;\n    padding: 5px 10px;\n    max-width: 250px;\n    text-align: center;\n    margin: 0px auto 0px;\n    background: ",";\n    border-radius: 30px;\n"]);return p=function(){return n},n}function m(){var n=Object(u.a)(["\n    margin: 20px 0px 10px 0px;\n    color: #499DE2;\n    text-align: center;\n    font-size: 35px;\n"]);return m=function(){return n},n}var g=function(){var n=Object(r.useContext)(b).booksList,e="";switch(n.length){case 0:e=a.a.createElement(h,{color:"orange"}," currently you don't have any books in the list");break;case 1:e=a.a.createElement(h,null," currently you have ",a.a.createElement("b",null,"one book")," left to read");break;default:e=a.a.createElement(h,null," currently you have ",a.a.createElement("b",null,n.length," books")," left to read")}return a.a.createElement(a.a.Fragment,null,a.a.createElement(x,null," Reading List"),e)},x=c.a.h1(m()),h=c.a.p(p(),(function(n){return"orange"===n.color?"#FF4800":"#00CD71"}));function v(){var n=Object(u.a)(["\n    font-size: 0.7em;\n    padding: 0;\n    color: #ddd;\n    margin: 5px 0px 0px 0px;\n"]);return v=function(){return n},n}function E(){var n=Object(u.a)(["\n    font-weight: bold;\n    color: #fff;\n    padding: 0;\n    font-size: 0.9em;\n    margin: 0;\n"]);return E=function(){return n},n}function k(){var n=Object(u.a)(["\n    padding: 5px;\n    background: #4A4E7C;\n    border-radius: 4px;\n    cursor: pointer;\n    margin: 3px auto;\n    &:hover{\n        opacity: 0.7;\n        text-decoration: line-through;  \n    }\n"]);return k=function(){return n},n}function O(){var n=Object(u.a)(["\n    max-width: 60%;\n    padding: 0px;\n    margin: auto;\n    list-style-type: none;\n"]);return O=function(){return n},n}var j=function(){var n=Object(r.useContext)(b),e=n.booksList,t=(n.addBook,n.removeBook);return a.a.createElement(y,null,e.map((function(n){return a.a.createElement(w,{key:n.id,onClick:function(){return t(n)}},a.a.createElement(C,null,n.title," "),a.a.createElement(L,null," ",n.author))})))},y=c.a.ul(O()),w=c.a.li(k()),C=c.a.h1(E()),L=c.a.p(v()),S=t(23);function z(){var n=Object(u.a)(["\nfont-size: 10px;\n   max-width: 80px;\n    background: #499DE2;\n    border: 0;\n    padding: 3px 5px;\n    text-align: end;\n    border-radius: 30px;\n    color: white;\n    align-self: flex-end;\n"]);return z=function(){return n},n}function B(){var n=Object(u.a)(["\n    font-size: 10px;\n    height: 20px;\n    padding: 10px;\n    box-sizing: border-box;\n    margin: 3px 0;\n    border-radius: 30px;\n    border: 0;\n    outline: none;\n"]);return B=function(){return n},n}function F(){var n=Object(u.a)(["\n   max-width: 60%;\n   display: flex;\n   flex-direction: column;\n \n   margin: 3px auto;\n"]);return F=function(){return n},n}var D=function(){var n=Object(r.useContext)(b).addBook,e=Object(r.useState)(null),t=Object(l.a)(e,2),o=t[0],i=t[1],u=Object(r.useState)(null),c=Object(l.a)(u,2),d=c[0],f=c[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(I,{onSubmit:function(e){e.preventDefault(),n({title:o,author:d,id:Object(S.a)()}),i(""),f("")}},a.a.createElement(J,{type:"text",placeholder:"book title",onChange:function(n){return i(n.target.value)},value:o,required:!0}),a.a.createElement(J,{type:"text",placeholder:"author name",onChange:function(n){return f(n.target.value)},value:d,required:!0}),a.a.createElement(q,{type:"submit",value:"add book"})))},I=c.a.form(F()),J=c.a.input(B()),q=c.a.input.attrs({type:"submit"})(z()),N=t(13),R=t.n(N);function A(){var n=Object(u.a)(["\n    width: 50%;\n    height: 100%;\n  \n    @media (max-width: 600px) {\n        display: none;\n      }\n\n"]);return A=function(){return n},n}function P(){var n=Object(u.a)(["\n    background-color: #E4E4F0;\n    width: 50%;\n    \n \n    @media (max-width: 600px) {\n        width: 100%;\n        height: 100vh;\n    }\n    \n"]);return P=function(){return n},n}function _(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    background-color: #ecf0f1;\n    height: 100vh;\n"]);return _=function(){return n},n}var G=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(H,null,a.a.createElement(K,null,a.a.createElement(s,null,a.a.createElement(g,null),a.a.createElement(j,null),a.a.createElement(D,null))),a.a.createElement(M,{src:R.a,width:"80%",align:"right",background:"transparent"})))},H=c.a.div(_()),K=c.a.div(P()),M=c.a.img(A());i.a.render(a.a.createElement(G,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.697c56ce.chunk.js.map