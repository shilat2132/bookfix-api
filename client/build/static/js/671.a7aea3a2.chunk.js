"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[671],{671:(e,a,t)=>{t.d(a,{W:()=>h});var n=t(7689),r=t(1087),o=t(3517),s=t(3855),l=t(2791),c=t(1694),i=t.n(c),d=t(5341),u=t(162),m=t(184);const p=l.forwardRef(((e,a)=>{let{as:t,bsPrefix:n,variant:r="primary",size:o,active:s=!1,disabled:l=!1,className:c,...p}=e;const b=(0,u.vE)(n,"btn"),[x,{tagName:f}]=(0,d.FT)({tagName:t,disabled:l,...p}),h=f;return(0,m.jsx)(h,{...x,...p,ref:a,disabled:l,className:i()(c,b,s&&"active",r&&"".concat(b,"-").concat(r),o&&"".concat(b,"-").concat(o),p.href&&l&&"disabled")})}));p.displayName="Button";const b=p;var x=t(5316);const f=e=>{let{handleClose:a}=e;const[t,o]=(0,l.useState)(),s=(0,r.wh)(),c=(0,n.UO)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(x.Z.Header,{closeButton:!0,children:(0,m.jsx)(x.Z.Title,{children:"\u05d4\u05d0\u05dd \u05d1\u05e8\u05e6\u05d5\u05e0\u05da \u05dc\u05de\u05d7\u05d5\u05e7 \u05d0\u05ea \u05d4\u05e1\u05e4\u05e8?"})}),(0,m.jsxs)(x.Z.Body,{children:[(0,m.jsx)("input",{placeholder:"\u05e1\u05d9\u05e1\u05de\u05ea \u05de\u05e0\u05d4\u05dc",required:!0,id:"secretOfDelete",name:"secret",type:"text"}),s.data&&(0,m.jsxs)("p",{className:"errorMessage",children:[s.data.error," "]}),t&&(0,m.jsxs)("p",{className:"errorMessage",children:[t," "]})]}),(0,m.jsxs)(x.Z.Footer,{children:[(0,m.jsx)(b,{variant:"secondary",onClick:a,children:"\u05e1\u05d2\u05d9\u05e8\u05d4"}),(0,m.jsx)(b,{variant:"danger",onClick:function(){const e=document.getElementById("secretOfDelete").value;if(!e||0===e.length)return o("\u05e2\u05dc\u05d9\u05da \u05dc\u05d4\u05d6\u05d9\u05df \u05e1\u05d9\u05e1\u05de\u05d4"),void(s.data=void 0);t&&o(null),s.submit({secret:e},{method:"DELETE",action:"/".concat(c.collection,"/").concat(c.id,"/delete")})},children:"\u05de\u05d7\u05d9\u05e7\u05d4"})]})]})},h=e=>{let{method:a,collection:t,item:c}=e;const i=(0,n.nA)(),[d,u]=(0,l.useState)(!1),p=()=>u(!1),b="books"===t,h="PATCH"===a;let j;c&&(j=c.doc);const y=[{name:"title",isRequired:!0,label:"\u05e9\u05dd \u05d4\u05e1\u05e4\u05e8"},{name:"cover",isRequired:!0,label:"\u05db\u05e8\u05d9\u05db\u05d4"},{name:"price",inputType:"number",isRequired:!0,label:"\u05de\u05d7\u05d9\u05e8"},{name:"zenere",inputType:b?"select":"text",isRequired:b,label:"\u05d6'\u05d0\u05e0\u05e8"},{name:"summary",inputType:"textarea",isRequired:!0,label:"\u05ea\u05e7\u05e6\u05d9\u05e8"},{name:"payBtn",inputType:"textarea",isRequired:!1,label:"\u05db\u05e4\u05ea\u05d5\u05e8 \u05e7\u05e0\u05d9\u05d9\u05d4"}];return"books"===t?y.push({name:"authorHasMoreBooks",inputType:"select",isRequired:!1,label:"\u05d4\u05d0\u05dd \u05dc\u05e1\u05d5\u05e4\u05e8 \u05d9\u05e9 \u05e2\u05d5\u05d3 \u05e1\u05e4\u05e8\u05d9\u05dd \u05dc\u05de\u05db\u05d9\u05e8\u05d4?"},{name:"author",isRequired:b,label:"\u05e9\u05dd \u05d4\u05e1\u05d5\u05e4\u05e8"}):y.splice(3,0,{name:"publishYear",inputType:"number",isRequired:!0,label:"\u05e9\u05e0\u05ea \u05d4\u05d5\u05e6\u05d0\u05d4"},{name:"series",isRequired:!1,label:"\u05e9\u05dd \u05e1\u05d3\u05e8\u05d4 (\u05d0\u05dd \u05d7\u05dc\u05e7 \u05de\u05e1\u05d3\u05e8\u05d4)"},{name:"seriesNum",isRequired:!1,label:"\u05de\u05e1\u05e4\u05e8 \u05d4\u05e1\u05e4\u05e8 \u05d1\u05e1\u05d3\u05e8\u05d4"},{name:"prologe",inputType:"textarea",isRequired:!1,label:"\u05e4\u05e8\u05d5\u05dc\u05d5\u05d2"},{name:"aboutStory",inputType:"textarea",isRequired:!1,label:"\u05e2\u05dc \u05d4\u05e1\u05e4\u05e8"}),(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(r.l0,{method:a,className:o.Z.form,children:[y.map(((e,a)=>{if("select"===e.inputType){let t;return t="zenere"===e.name?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("option",{value:"\u05e4\u05e0\u05d8\u05d6\u05d9\u05d4",children:"\u05e4\u05e0\u05d8\u05d6\u05d9\u05d4"}),(0,m.jsx)("option",{value:"\u05e8\u05d5\u05de\u05e0\u05d8\u05d9\u05e7\u05d4",children:"\u05e8\u05d5\u05de\u05e0\u05d8\u05d9\u05e7\u05d4"}),(0,m.jsx)("option",{value:"\u05de\u05ea\u05d7",children:"\u05de\u05ea\u05d7"}),(0,m.jsx)("option",{value:"\u05d0\u05e0\u05d2\u05dc\u05d9\u05ea",children:"\u05d0\u05e0\u05d2\u05dc\u05d9\u05ea"}),(0,m.jsx)("option",{value:"\u05e2\u05d9\u05d5\u05df",children:"\u05e2\u05d9\u05d5\u05df"})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("option",{value:"true",children:"\u05db\u05df"}),(0,m.jsx)("option",{value:"false",children:"\u05dc\u05d0"})]}),(0,m.jsxs)(s.Z.Select,{defaultValue:h?j[e.name]:"",required:e.isRequired,className:o.Z.select,name:e.name,"aria-label":e.label,children:[(0,m.jsx)("option",{value:"",children:e.label}),t]},a)}return"textarea"===e.inputType?(0,m.jsxs)(s.Z.Group,{className:"mb-3 ".concat(o.Z.formGroup),controlId:"formGroup".concat(e.name),children:[(0,m.jsx)(s.Z.Label,{children:e.label}),(0,m.jsx)(s.Z.Control,{defaultValue:h?j[e.name]:"",name:e.name,as:"textarea",rows:3,required:e.isRequired})]},a):(0,m.jsxs)(s.Z.Group,{className:"mb-3 ".concat(o.Z.formGroup),controlId:"formGroup".concat(e.name),children:[(0,m.jsx)(s.Z.Label,{children:e.label}),(0,m.jsx)(s.Z.Control,{defaultValue:h?j[e.name]:"",name:e.name,type:e.inputType||"text",required:e.isRequired})]},a)})),(0,m.jsxs)(s.Z.Group,{className:"mb-3 ".concat(o.Z.formGroup),controlId:"formGroupPassword",children:[(0,m.jsx)(s.Z.Label,{children:"\u05e1\u05d9\u05e1\u05de\u05ea \u05de\u05e0\u05d4\u05dc"}),(0,m.jsx)(s.Z.Control,{name:"secret",type:"text",required:!0})]}),(0,m.jsxs)("div",{className:"text-center",children:[i&&i.error&&(0,m.jsxs)("p",{className:"errorMessage",children:[i.error," "]}),(0,m.jsxs)(x.Z,{show:d,onHide:p,children:[(0,m.jsx)(f,{handleClose:p})," "]}),(0,m.jsx)("button",{className:"".concat(o.Z.button," ").concat(o.Z.deleteBtn),type:"button",onClick:()=>u(!0),children:"\u05de\u05d7\u05d9\u05e7\u05ea \u05e4\u05e8\u05d9\u05d8"}),(0,m.jsx)("button",{className:"".concat(o.Z.button),children:"\u05e1\u05d9\u05d9\u05dd"})]})]})})}},5316:(e,a,t)=>{t.d(a,{Z:()=>S});var n,r=t(1694),o=t.n(r),s=t(3070),l=t(7357),c=t(8376),i=t(6382);function d(e){if((!n&&0!==n||e)&&l.Z){var a=document.createElement("div");a.style.position="absolute",a.style.top="-9999px",a.style.width="50px",a.style.height="50px",a.style.overflow="scroll",document.body.appendChild(a),n=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return n}var u=t(7731),m=t(9007),p=t(3201),b=t(1683),x=t(3690),f=t(2791),h=t(1889),j=t(5592),y=t(2709),v=t(162),N=t(184);const g=f.forwardRef(((e,a)=>{let{className:t,bsPrefix:n,as:r="div",...s}=e;return n=(0,v.vE)(n,"modal-body"),(0,N.jsx)(r,{ref:a,className:o()(t,n),...s})}));g.displayName="ModalBody";const Z=g;var R=t(9820);const w=f.forwardRef(((e,a)=>{let{bsPrefix:t,className:n,contentClassName:r,centered:s,size:l,fullscreen:c,children:i,scrollable:d,...u}=e;t=(0,v.vE)(t,"modal");const m="".concat(t,"-dialog"),p="string"===typeof c?"".concat(t,"-fullscreen-").concat(c):"".concat(t,"-fullscreen");return(0,N.jsx)("div",{...u,ref:a,className:o()(m,n,l&&"".concat(t,"-").concat(l),s&&"".concat(m,"-centered"),d&&"".concat(m,"-scrollable"),c&&p),children:(0,N.jsx)("div",{className:o()("".concat(t,"-content"),r),children:i})})}));w.displayName="ModalDialog";const E=w,T=f.forwardRef(((e,a)=>{let{className:t,bsPrefix:n,as:r="div",...s}=e;return n=(0,v.vE)(n,"modal-footer"),(0,N.jsx)(r,{ref:a,className:o()(t,n),...s})}));T.displayName="ModalFooter";const C=T;var k=t(8024);const q=f.forwardRef(((e,a)=>{let{bsPrefix:t,className:n,closeLabel:r="Close",closeButton:s=!1,...l}=e;return t=(0,v.vE)(t,"modal-header"),(0,N.jsx)(k.Z,{ref:a,...l,className:o()(n,t),closeLabel:r,closeButton:s})}));q.displayName="ModalHeader";const F=q;const B=(0,t(7472).Z)("h4"),_=f.forwardRef(((e,a)=>{let{className:t,bsPrefix:n,as:r=B,...s}=e;return n=(0,v.vE)(n,"modal-title"),(0,N.jsx)(r,{ref:a,className:o()(t,n),...s})}));_.displayName="ModalTitle";const D=_;function M(e){return(0,N.jsx)(y.Z,{...e,timeout:null})}function G(e){return(0,N.jsx)(y.Z,{...e,timeout:null})}const P=f.forwardRef(((e,a)=>{let{bsPrefix:t,className:n,style:r,dialogClassName:y,contentClassName:g,children:Z,dialogAs:w=E,"aria-labelledby":T,"aria-describedby":C,"aria-label":k,show:q=!1,animation:F=!0,backdrop:B=!0,keyboard:_=!0,onEscapeKeyDown:D,onShow:P,onHide:S,container:H,autoFocus:O=!0,enforceFocus:I=!0,restoreFocus:A=!0,restoreFocusOptions:L,onEntered:z,onExit:K,onExiting:U,onEnter:W,onEntering:V,onExited:Y,backdropClassName:J,manager:Q,...X}=e;const[$,ee]=(0,f.useState)({}),[ae,te]=(0,f.useState)(!1),ne=(0,f.useRef)(!1),re=(0,f.useRef)(!1),oe=(0,f.useRef)(null),[se,le]=(0,u.Z)(),ce=(0,p.Z)(a,le),ie=(0,m.Z)(S),de=(0,v.SC)();t=(0,v.vE)(t,"modal");const ue=(0,f.useMemo)((()=>({onHide:ie})),[ie]);function me(){return Q||(0,j.t)({isRTL:de})}function pe(e){if(!l.Z)return;const a=me().getScrollbarWidth()>0,t=e.scrollHeight>(0,c.Z)(e).documentElement.clientHeight;ee({paddingRight:a&&!t?d():void 0,paddingLeft:!a&&t?d():void 0})}const be=(0,m.Z)((()=>{se&&pe(se.dialog)}));(0,b.Z)((()=>{(0,i.Z)(window,"resize",be),null==oe.current||oe.current()}));const xe=()=>{ne.current=!0},fe=e=>{ne.current&&se&&e.target===se.dialog&&(re.current=!0),ne.current=!1},he=()=>{te(!0),oe.current=(0,x.Z)(se.dialog,(()=>{te(!1)}))},je=e=>{"static"!==B?re.current||e.target!==e.currentTarget?re.current=!1:null==S||S():(e=>{e.target===e.currentTarget&&he()})(e)},ye=(0,f.useCallback)((e=>(0,N.jsx)("div",{...e,className:o()("".concat(t,"-backdrop"),J,!F&&"show")})),[F,J,t]),ve={...r,...$};ve.display="block";return(0,N.jsx)(R.Z.Provider,{value:ue,children:(0,N.jsx)(h.Z,{show:q,ref:ce,backdrop:B,container:H,keyboard:!0,autoFocus:O,enforceFocus:I,restoreFocus:A,restoreFocusOptions:L,onEscapeKeyDown:e=>{_?null==D||D(e):(e.preventDefault(),"static"===B&&he())},onShow:P,onHide:S,onEnter:(e,a)=>{e&&pe(e),null==W||W(e,a)},onEntering:(e,a)=>{null==V||V(e,a),(0,s.ZP)(window,"resize",be)},onEntered:z,onExit:e=>{null==oe.current||oe.current(),null==K||K(e)},onExiting:U,onExited:e=>{e&&(e.style.display=""),null==Y||Y(e),(0,i.Z)(window,"resize",be)},manager:me(),transition:F?M:void 0,backdropTransition:F?G:void 0,renderBackdrop:ye,renderDialog:e=>(0,N.jsx)("div",{role:"dialog",...e,style:ve,className:o()(n,t,ae&&"".concat(t,"-static"),!F&&"show"),onClick:B?je:void 0,onMouseUp:fe,"aria-label":k,"aria-labelledby":T,"aria-describedby":C,children:(0,N.jsx)(w,{...X,onMouseDown:xe,className:y,contentClassName:g,children:Z})})})})}));P.displayName="Modal";const S=Object.assign(P,{Body:Z,Header:F,Title:D,Footer:C,Dialog:E,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},3517:(e,a,t)=>{t.d(a,{Z:()=>n});const n={formGroup:"form_formGroup__aK5wG",button:"form_button__nRBFc",deleteBtn:"form_deleteBtn__iaFnd",form:"form_form__jfdk4"}}}]);
//# sourceMappingURL=671.a7aea3a2.chunk.js.map