(this.webpackJsonpultra=this.webpackJsonpultra||[]).push([[0],{130:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),s=t(32),o=t.n(s),r=(t(68),t(16)),c=t(17),l=t(21),d=t(20),j=(t(69),t(70),t(134)),h=t(135),u=t(58),m=t.p+"static/media/ocean.f0a104af.jpeg",b=(t(71),t(59)),g=t(26),p=t(10),O=t(1),x=function(e){var n=e.onRouteChange;e.isSignedIn;return Object(O.jsx)(p.Animated,{animationIn:"fadeIn",animationInDuration:3e3,isVisible:!0,children:Object(O.jsx)(j.a,{children:Object(O.jsx)(h.a,{className:"justify-content-md-center",children:Object(O.jsxs)(u.a,{id:"col",children:[Object(O.jsx)("img",{alt:"logo",src:m}),Object(O.jsx)("p",{children:"ultra"}),Object(O.jsxs)(b.a,{variant:"light",id:"dropdown-basic-button",title:"Enter",children:[Object(O.jsx)(g.a.Item,{onClick:function(){return n("signin")},children:"Login"}),Object(O.jsx)(g.a.Item,{onClick:function(){return n("register")},children:"Register"})]})]})})})})},f=t(8),C=t(14),I=t.p+"static/media/signInImage.07c7fd39.jpg",v=function(e){Object(l.a)(t,e);var n=Object(d.a)(t);function t(e){var a;return Object(r.a)(this,t),(a=n.call(this,e)).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){fetch("https://still-fjord-41724.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id?(a.props.loadUser(e),a.props.onRouteChange("home")):alert("Incorrect username/password")}))},a.state={signInEmail:"",signInPassword:""},a}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.onRouteChange;return Object(O.jsx)(j.a,{children:Object(O.jsx)(h.a,{className:"justify-content-md-center",children:Object(O.jsxs)(u.a,{id:"col",children:[Object(O.jsx)(p.Animated,{animationIn:"fadeIn",animationInDuration:3e3,isVisible:!0,children:Object(O.jsx)("img",{alt:"logo",src:I})}),Object(O.jsx)(p.Animated,{animationIn:"fadeIn",animationInDelay:750,isVisible:!0,children:Object(O.jsx)("p",{children:"ultra"})}),Object(O.jsxs)(f.a,{children:[Object(O.jsxs)(f.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(O.jsx)(f.a.Label,{children:"Email address"}),Object(O.jsx)(f.a.Control,{onChange:this.onEmailChange,type:"email"})]}),Object(O.jsxs)(f.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(O.jsx)(f.a.Label,{children:"Password"}),Object(O.jsx)(f.a.Control,{onChange:this.onPasswordChange,type:"password"})]}),Object(O.jsx)(C.a,{onClick:this.onSubmitSignIn,variant:"light",type:"button",children:"Submit"}),Object(O.jsx)(h.a,{children:Object(O.jsx)(C.a,{id:"buttonLink",onClick:function(){return e("landingPage")},children:"Back to homepage"})})]})]})})})}}]),t}(i.a.Component),w=t.p+"static/media/registerImage.a0ed9d90.jpg",y=function(e){Object(l.a)(t,e);var n=Object(d.a)(t);function t(e){var a;return Object(r.a)(this,t),(a=n.call(this,e)).onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onNameChange=function(e){a.setState({name:e.target.value})},a.onSubmitRegister=function(){fetch("https://still-fjord-41724.herokuapp.com/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password,name:a.state.name})}).then((function(e){return e.json()})).then((function(e){e.id?(a.props.loadUser(e),a.props.onRouteChange("home")):alert("Please enter valid credentials.")}))},a.state={email:"",password:"",name:""},a}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return Object(O.jsx)(j.a,{children:Object(O.jsx)(h.a,{className:"justify-content-md-center",children:Object(O.jsxs)(u.a,{id:"col",children:[Object(O.jsx)(p.Animated,{animationIn:"fadeIn",animationInDuration:3e3,isVisible:!0,children:Object(O.jsx)("img",{alt:"logo",src:w})}),Object(O.jsx)(p.Animated,{animationIn:"fadeIn",animationInDelay:750,isVisible:!0,children:Object(O.jsx)("p",{children:"ultra"})}),Object(O.jsxs)(f.a,{children:[Object(O.jsxs)(f.a.Group,{className:"mb-3",controlId:"input",children:[Object(O.jsx)(f.a.Label,{children:"Name"}),Object(O.jsx)(f.a.Control,{onChange:this.onNameChange,type:"input"})]}),Object(O.jsxs)(f.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(O.jsx)(f.a.Label,{children:"Email address"}),Object(O.jsx)(f.a.Control,{onChange:this.onEmailChange,type:"email"}),Object(O.jsx)(f.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(O.jsxs)(f.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(O.jsx)(f.a.Label,{children:"Password"}),Object(O.jsx)(f.a.Control,{onChange:this.onPasswordChange,type:"password"})]}),Object(O.jsx)(C.a,{onClick:this.onSubmitRegister,variant:"light",type:"button",children:"Submit"}),Object(O.jsx)(h.a,{children:Object(O.jsx)(C.a,{id:"buttonLink",onClick:function(){return e.props.onRouteChange("landingPage")},children:" Back to homepage"})})]})]})})})}}]),t}(i.a.Component),S=t.p+"static/media/homeImage.26acebe7.jpg";function k(e){var n=e.name;e.onRouteChange;return n=n.charAt(0).toUpperCase()+n.slice(1),Object(O.jsxs)(j.a,{children:[Object(O.jsx)(h.a,{className:"justify-content-md-center",children:Object(O.jsxs)(u.a,{id:"col",children:[Object(O.jsx)(p.Animated,{animationIn:"fadeIn",animationInDuration:3e3,isVisible:!0,children:Object(O.jsx)("img",{alt:"logo",src:S})}),Object(O.jsx)(p.Animated,{animationIn:"fadeIn",animationInDelay:750,isVisible:!0,children:Object(O.jsx)("p",{children:"ultra"})})]})}),Object(O.jsx)(h.a,{children:Object(O.jsxs)("p",{children:[n,", thank you for registering. We are currently under development and will launch soon.."]})})]})}var R={input:"",isSignedIn:!1,route:"",user:{email:"",password:"",name:""}},P=function(e){Object(l.a)(t,e);var n=Object(d.a)(t);function t(){var e;return Object(r.a)(this,t),(e=n.call(this)).loadUser=function(n){e.setState({user:{email:n.email,password:n.password,name:n.name}})},e.onInputChange=function(n){e.setState({input:n.target.value})},e.onRouteChange=function(n){"signout"===n?e.setState(R):"home"===n&&e.setState({isSignedIn:!0}),e.setState({route:n})},e.state=R,e}return Object(c.a)(t,[{key:"render",value:function(){var e,n=this.state,t=n.route,a=n.isSignedIn,i=this.state.user.name;switch(t){case"landingPage":e=Object(O.jsx)(x,{isSignedIn:a,onRouteChange:this.onRouteChange});break;case"signin":e=Object(O.jsx)(v,{loadUser:this.loadUser,onRouteChange:this.onRouteChange});break;case"register":e=Object(O.jsx)(y,{loadUser:this.loadUser,onRouteChange:this.onRouteChange});break;case"home":e=Object(O.jsx)(k,{name:i,onRouteChange:this.onRouteChange});break;default:e=Object(O.jsx)(x,{isSignedIn:a,onRouteChange:this.onRouteChange})}return e}}]),t}(a.Component);o.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(P,{})}),document.getElementById("root"))},68:function(e,n,t){},69:function(e,n,t){},71:function(e,n,t){}},[[130,1,2]]]);
//# sourceMappingURL=main.aa30f28a.chunk.js.map