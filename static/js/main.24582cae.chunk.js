(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(7),n=a.n(i),s=(a(15),a(9)),r=a(2),c=a(1),l=(a(16),a(10)),o=(a(17),a(18),a(0)),m=function(e){var t=e.title,a=e.description,i=e.imgUrl,n=e.imdbUrl;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{src:i,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8",children:t})})]}),Object(o.jsxs)("div",{className:"content",children:[a,Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:n,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(m,Object(l.a)({},e),e.imdbId)}))})},j=a(4),p=a.n(j),b=(a(20),/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/),h=function(e){var t=e.onAddMovie,a=Object(c.useState)(""),i=Object(r.a)(a,2),n=i[0],s=i[1],l=Object(c.useState)(""),m=Object(r.a)(l,2),d=m[0],j=m[1],h=Object(c.useState)(""),u=Object(r.a)(h,2),O=u[0],f=u[1],g=Object(c.useState)(""),_=Object(r.a)(g,2),v=_[0],x=_[1],w=Object(c.useState)(""),N=Object(r.a)(w,2),M=N[0],B=N[1],y=Object(c.useState)(""),I=Object(r.a)(y,2),T=I[0],U=I[1],k=Object(c.useState)(""),S=Object(r.a)(k,2),z=S[0],A=S[1],D=Object(c.useState)(""),V=Object(r.a)(D,2),Y=V[0],C=V[1],Z=Object(c.useState)(""),F=Object(r.a)(Z,2),X=F[0],P=F[1],E=Object(c.useState)(!1),L=Object(r.a)(E,2),J=L[0],G=L[1],Q=function(){var e=[X,Y,z,T],t=[n,O,v,M].every((function(e){return""!==e})),a=e.every((function(e){return""===e}));G(!(!t||!a))};return Object(o.jsxs)("form",{className:"app-form",method:"post",name:"onAdd",onSubmit:function(e){e.preventDefault(),s(""),j(""),f(""),x(""),B(""),G(!1),t({title:n,description:d,imgUrl:O,imdbUrl:v,imdbId:M})},children:[Object(o.jsx)("h1",{className:"app-form__title",children:"Add new movie"}),Object(o.jsxs)("label",{className:"app-form__field",children:[Object(o.jsx)("h2",{children:"Title"}),Object(o.jsx)("input",{className:p()("app-form__input",{"app-form__input--error":T}),type:"text",name:"title",placeholder:"Idiocracy",value:n,onChange:function(e){var t,a=e.target;t=a.value,s(t),U("")},onBlur:function(){return n.trim()?(U(""),Q(),!0):(U("Please enter a title"),Q(),!1)}}),Object(o.jsx)("span",{className:"app-form__error",children:T})]}),Object(o.jsxs)("label",{className:"app-form__field",children:[Object(o.jsx)("h2",{children:"Description"}),Object(o.jsx)("textarea",{className:"app-form__input",name:"description",placeholder:"Prophetic film...",value:d,onChange:function(e){var t=e.target;return j(t.value)}})]}),Object(o.jsxs)("label",{className:"app-form__field",children:[Object(o.jsx)("h2",{children:"Poster"}),Object(o.jsx)("input",{className:p()("app-form__input",{"app-form__input--error":z}),type:"text",name:"imgUrl",placeholder:"https://m.media-amazon.com/images/",value:O,onChange:function(e){var t,a=e.target;t=a.value,f(t),A("")},onBlur:function(){return O.trim()&&b.test(O)?(A(""),Q(),!0):(A("Please enter a valid link"),Q(),!1)}}),Object(o.jsx)("span",{className:"app-form__error",children:z})]}),Object(o.jsxs)("label",{className:"app-form__field",children:[Object(o.jsx)("h2",{children:"IMDB link"}),Object(o.jsx)("input",{className:p()("app-form__input",{"app-form__input--error":Y}),type:"text",name:"imdbUrl",placeholder:"https://www.imdb.com/title",value:v,onChange:function(e){var t,a=e.target;t=a.value,x(t),C("")},onBlur:function(){return v.trim()&&b.test(v)?(C(""),Q(),!0):(C("Please enter a valid link"),Q(),!1)}}),Object(o.jsx)("span",{className:"app-form__error",children:Y})]}),Object(o.jsxs)("label",{className:"app-form__field",children:[Object(o.jsx)("h2",{children:"IMDB id"}),Object(o.jsx)("input",{className:p()("app-form__input",{"app-form__input--error":X}),type:"text",name:"imdbId",placeholder:"tt1234567",value:M,onChange:function(e){var t,a=e.target;t=a.value,B(t),P("")},onBlur:function(){return M.trim()?(P(""),Q(),!0):(P("Please enter a valid id"),Q(),!1)}}),Object(o.jsx)("span",{className:"app-form__error",children:X})]}),Object(o.jsx)("button",{className:"app-form__btn",type:"submit",name:"submit",disabled:!J,children:"Add movie"})]})},u=a(8),O=function(){var e=Object(c.useState)(u),t=Object(r.a)(e,2),a=t[0],i=t[1];return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(d,{movies:a})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(h,{onAddMovie:function(e){a.some((function(t){return t.imdbId===e.imdbId}))||i([].concat(Object(s.a)(a),[e]))}})})]})};n.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.24582cae.chunk.js.map