(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[8],{265:function(e,t,n){e.exports={form:"login_form__AqY3e",errorMassage:"login_errorMassage__2jcCQ"}},273:function(e,t,n){"use strict";n.r(t);var r=n(2),s=n(4),i=n(5),o=n(10),a=n(11),u=n(0),c=n.n(u),l=n(265),b=n.n(l),j=n(44),d=n(67),h=n(80),m=n(3),p=n(1),g=Object(h.b)("input"),O=function(e){var t=e.isAuth,n=e.login,r=e.password,s=e.thunkLogin,i=d.a().shape({login:d.c().min(5,"\u043c\u0438\u043d\u0438\u043c\u0443\u043c 5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").email("\u041d\u0435 email").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),password:d.c().min(10,"\u043c\u0438\u043d\u0438\u043c\u0443\u043c 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e")});return t?Object(p.jsx)(m.a,{to:"/profile"}):Object(p.jsx)(j.b,{initialValues:{login:n,password:r},validationSchema:i,onSubmit:function(e,t){var n=t.setSubmitting,r=t.setStatus;s(e.login,e.password,e.isAuth,r),n(!1)},children:function(e){var t=e.values,n=e.errors,r=e.touched,s=e.handleChange,i=e.handleBlur,o=e.handleSubmit,a=e.isSubmitting,u=e.status;return Object(p.jsxs)("form",{onSubmit:o,children:[Object(p.jsx)("p",{className:b.a.errorMassage,children:u}),Object(h.a)(g,n.login,u,r.login,"login","login","login","Login",s,i,t.login),Object(h.a)(g,n.password,u,r.password,"password","password","Password","Password",s,i,t.password),Object(h.a)(g,null,null,null,"checkbox","rememberMe","rememberMe","rememberMe",s,i,null,"remember me"),Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"submit",disabled:a,children:"Submit"})]})}})},f=function(e){return Object(p.jsxs)("div",{className:b.a.form,children:[Object(p.jsx)("h1",{children:"Login"}),Object(p.jsx)(O,Object(r.a)({},e))]})},w=n(24),x=n(27),v=function(e){Object(o.a)(n,e);var t=Object(a.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.thunkLogin()}},{key:"render",value:function(){return Object(p.jsx)(f,Object(r.a)({},this.props))}}]),n}(c.a.Component);t.default=Object(w.b)((function(e){return{userId:e.auth.userId,email:e.auth.email,login:e.auth.login,isAuth:e.auth.isAuth}}),{thunkLogin:x.d})(v)}}]);
//# sourceMappingURL=8.66040adf.chunk.js.map