import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const o=document.querySelector(".feedback-form");let t={email:"",message:""};const l=()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e!==null){t=e;for(const a in e)e.hasOwnProperty(a)&&(o.elements[a].value=e[a])}};l();const s=e=>{const a=e.target.name,r=e.target.value;t[a]=r.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(t))},m=()=>{t.email="",t.message=""},n=e=>{t.email&&t.message?(e.preventDefault(),console.log(t),e.target.reset(),m(),localStorage.removeItem("feedback-form-state")):alert("Fill please all fields")};o.addEventListener("input",s);o.addEventListener("submit",n);
//# sourceMappingURL=commonHelpers2.js.map