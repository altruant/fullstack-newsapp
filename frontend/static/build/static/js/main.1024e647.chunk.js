(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/e2020.f28a10b9.png"},function(e,t,a){e.exports=a.p+"static/media/world.ffe74156.png"},function(e,t,a){e.exports=a.p+"static/media/entertainment.ffc48706.png"},function(e,t,a){e.exports=a.p+"static/media/us-news.aba47d6e.png"},function(e,t,a){e.exports=a.p+"static/media/arrow-down.7fd3e2de.svg"},function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),s=a.n(l),c=(a(22),a(7)),i=a.n(c),o=a(9),m=a(1),u=a(2),p=a(5),h=a(4),d=a(3),f=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"categories"},r.a.createElement("button",{onClick:this.props.articleFilter,"data-filter":"all",className:"home"},"Home"),r.a.createElement("button",{onClick:this.props.articleFilter,"data-filter":"Election 2020",className:"election"},"Election 2020"),r.a.createElement("button",{onClick:this.props.articleFilter,"data-filter":"US News",className:"US"},"US News"),r.a.createElement("button",{onClick:this.props.articleFilter,"data-filter":"World News",className:"World"},"World News"),r.a.createElement("button",{onClick:this.props.articleFilter,"data-filter":"Entertainment",className:"Entertainment"},"Entertainment")),r.a.createElement("div",{className:"auth-links"},r.a.createElement("button",{onClick:this.loginForm},"Login"),r.a.createElement("span",{style:{color:"#fff"}},"|"),r.a.createElement("button",{onClick:this.registerForm},"Register"))))}}]),a}(r.a.Component),g=a(12),b=a.n(g),E=a(13),v=a.n(E),y=a(14),O=a.n(y),w=a(15),j=a.n(w),N=a(16),k=a.n(N),F=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={isHover:!1},n}return Object(u.a)(a,[{key:"render",value:function(){var e="";switch(this.props.article.categories){case"Election 2020":e=b.a;break;case"Entertainment":e=O.a;break;case"US News":e=j.a;break;case"World News":e=v.a;break;default:e=""}return r.a.createElement("div",{className:"article-detail"},r.a.createElement("div",{className:"article-header"},r.a.createElement("div",{className:"article-header-top"},r.a.createElement("img",{className:"detail-img",src:this.props.article.image_url,style:{maxWidth:"100%"},alt:"#"}),r.a.createElement("h3",null,this.props.article.title)),r.a.createElement("div",{className:"article-header-bottom"},r.a.createElement("div",{className:"icon-categories"},r.a.createElement("img",{src:e,alt:"#",className:"icon"}),r.a.createElement("h3",null,this.props.article.categories)),r.a.createElement("div",{className:"arrow"},r.a.createElement("img",{src:k.a,alt:"#",className:"arrow-down"})))),r.a.createElement("div",{className:"article-body"},r.a.createElement("span",null,"Posted on ",this.props.article.created),r.a.createElement("span",null,"Modified at ",this.props.article.modified),r.a.createElement("p",null,this.props.article.body)))}}]),a}(r.a.Component),S=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return this.props.articles.filter((function(t){return e.props.cat?t.categories===e.props.cat:t})).filter((function(e){return!0===e.isTopNews})).map((function(e,t){return r.a.createElement("div",{className:"top-news",key:t},r.a.createElement(F,{article:e}))}))}}]),a}(r.a.Component),C=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return this.props.articles.filter((function(t){return e.props.cat?t.categories===e.props.cat:t})).filter((function(e){return!1===e.isTopNews})).map((function(e,t){return r.a.createElement("div",{className:"not-top-news",key:t},r.a.createElement(F,{article:e}))}))}}]),a}(r.a.Component),I=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{articleFilter:this.props.articleFilter}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("h2",{className:"top"},"Top Articles"),r.a.createElement(S,{cat:this.props.cat,articles:this.props.articles})),r.a.createElement("div",{className:"col-6"},r.a.createElement("h2",{className:"this-week"},"Posted This Week"),r.a.createElement(C,{cat:this.props.cat,articles:this.props.articles}))))}}]),a}(r.a.Component),x=a(8),T=a(6),P=a.n(T),U=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={title:"",body:"",image_url:"",categories:"",stage:""},n.handleInput=n.handleInput.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(u.a)(a,[{key:"handleInput",value:function(e){this.setState(Object(x.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(o.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/v1/",{method:"POST",headers:{"X-CSRFToken":P.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify(this.state)});case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,P.a.set("Authorization","Token ".concat(n.key));case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"navbar"},r.a.createElement("button",{onClick:this.props.logOut},"Logout")),r.a.createElement("div",{className:"header"},r.a.createElement("h2",null,"Post Article")),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{className:"form-control",type:"text",name:"title",value:this.state.title,onChange:this.handleInput,placeholder:"Title"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"body"},"Body"),r.a.createElement("textarea",{className:"form-control",name:"body",cols:"30",rows:"15",value:this.state.body,onChange:this.handleInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"url"},"Image URL"),r.a.createElement("input",{className:"form-control",type:"url",name:"image_url",value:this.state.image_url,onChange:this.handleInput,placeholder:"https://example.com"})),r.a.createElement("div",{className:"dropdowns form-group"},r.a.createElement("div",{className:"category"},r.a.createElement("label",{htmlFor:"categories"},"Article Category"),r.a.createElement("select",{className:"form-control",name:"categories",value:this.state.categories,onChange:this.handleInput},r.a.createElement("option",{value:""},"Select a Category"),r.a.createElement("option",{value:"Election 2020"},"Election 2020"),r.a.createElement("option",{value:"US News"},"US News"),r.a.createElement("option",{value:"World News"},"World News"),r.a.createElement("option",{value:"Entertainment"},"Entertainment"))),r.a.createElement("div",{className:"stage"},r.a.createElement("label",{htmlFor:"stage"},"Publishing Stage"),r.a.createElement("select",{className:"form-control",name:"stage",value:this.state.stage,onChange:this.handleInput},r.a.createElement("option",{value:""},"Select a Stage"),r.a.createElement("option",{value:"Draft"},"Draft"),r.a.createElement("option",{value:"Submitted"},"Submitted"))))),r.a.createElement("div",{className:"submit-button"},r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit")))}}]),a}(r.a.Component),W=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={username:"",password:""},n.handleInput=n.handleInput.bind(Object(p.a)(n)),n}return Object(u.a)(a,[{key:"handleInput",value:function(e){this.setState(Object(x.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:function(t){return e.props.logIn(t,e.state)}},r.a.createElement("h2",null,"Login"),r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleInput,placeholder:"Username"}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleInput,placeholder:"Password"}),r.a.createElement("button",{type:"submit"},"Login"))}}]),a}(r.a.Component),L=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},n.handleInput=n.handleInput.bind(Object(p.a)(n)),n}return Object(u.a)(a,[{key:"handleInput",value:function(e){this.setState(Object(x.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:function(t){return e.props.logIn(t,e.state)}},r.a.createElement("h2",null,"Register"),r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleInput,placeholder:"Username"}),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",name:"email",value:this.state.email,onChange:this.handleInput,placeholder:"Email"}),r.a.createElement("label",{htmlFor:"password1"},"Password"),r.a.createElement("input",{type:"password",name:"password1",value:this.state.password1,onChange:this.handleInput,placeholder:"Password"}),r.a.createElement("label",{htmlFor:"password2"},"Confirm Password"),r.a.createElement("input",{type:"password",name:"password2",value:this.state.password2,onChange:this.handleInput,placeholder:""}),r.a.createElement("button",{type:"submit"},"Register"))}}]),a}(r.a.Component),A=(a(24),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={articles:[],cat:null,isLoggedIn:!1,loginForm:!1,registerForm:!1},n.articleFilter=n.articleFilter.bind(Object(p.a)(n)),n.logOut=n.logOut.bind(Object(p.a)(n)),n.logIn=n.logIn.bind(Object(p.a)(n)),n.loginForm=n.loginForm.bind(Object(p.a)(n)),n}return Object(u.a)(a,[{key:"articleFilter",value:function(e){"all"===e.target.dataset.filter?this.setState({cat:null}):this.setState({cat:e.target.dataset.filter})}},{key:"logIn",value:function(){var e=Object(o.a)(i.a.mark((function e(t,a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/v1/rest-auth/login/",{method:"POST",headers:{"X-CSRFToken":P.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify(a)});case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,P.a.set("Authorization","Token ".concat(r.key)),localStorage.setItem("login",r.key),this.setState({isLoggedIn:!0,loginForm:!1,registerForm:!1});case 10:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"loginForm",value:function(){this.setState({loginForm:!0})}},{key:"logOut",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/rest-auth/logout/",{method:"POST",headers:{"X-CSRFToken":P.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify(this.state)});case 2:return t=e.sent,e.next=5,t.json();case 5:e.sent,P.a.remove("Authorization"),localStorage.removeItem("login"),this.setState({isLoggedIn:!1});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/").then((function(e){return e.json()})).then((function(t){return e.setState({articles:t})})).catch((function(e){return console.log("Error",e)}))}},{key:"render",value:function(){return P.a.get("Authorization")?r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{logOut:this.logOut})):r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{articles:this.state.articles,cat:this.state.cat,articleFilter:this.articleFilter}),r.a.createElement(W,{logIn:this.logIn}),r.a.createElement(L,{logIn:this.logIn}))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.1024e647.chunk.js.map