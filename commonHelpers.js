import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f,i as p}from"./assets/vendor-77e16229.js";const c=document.querySelector("#datetime-picker"),o=document.querySelector("button[data-start]"),y=document.querySelector("span[data-days]"),h=document.querySelector("span[data-hours]"),S=document.querySelector("span[data-minutes]"),b=document.querySelector("span[data-seconds]");let d;const C={title:"ERROR",titleColor:"red",titleSize:"24px",message:"Please choose a date in the future",messageSize:"16px",backgroundColor:"rgba(225, 0, 0, 0.3)",position:"center",closeOnEscape:!0,timeout:3e3,overlay:!0,overlayClose:!0},T={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=Date.now();t[0]<=e?(p.show(C),o.disabled=!0):(o.disabled=!1,d=t[0])}};o.disabled=!0;o.addEventListener("click",g);function g(){const t=setInterval(()=>{const e=Date.now(),n=d-e;if(n<=0){clearInterval(t),c.disabled=!1,o.disabled=!1;return}const{days:r,hours:u,minutes:a,seconds:i}=q(n);v({days:r,hours:u,minutes:a,seconds:i}),c.disabled=!0,o.disabled=!0},1e3)}function q(t){const a=s(Math.floor(t/864e5)),i=s(Math.floor(t%864e5/36e5)),l=s(Math.floor(t%864e5%36e5/6e4)),m=s(Math.floor(t%864e5%36e5%6e4/1e3));return{days:a,hours:i,minutes:l,seconds:m}}function s(t){return String(t).padStart(2,"0")}function v({days:t,hours:e,minutes:n,seconds:r}){y.textContent=`${t}`,h.textContent=`${e}`,S.textContent=`${n}`,b.textContent=`${r}`}f(c,T);
//# sourceMappingURL=commonHelpers.js.map
