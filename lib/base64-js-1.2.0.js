!function(){"use strict";window.byteLength=function(r){return 3*r.length/4-f(r)},window.toByteArray=function(r){var t,n,e,o,a,h,c=r.length;a=f(r),h=new A(3*c/4-a),e=0<a?c-4:c;var i=0;for(n=t=0;t<e;t+=4,n+=3)o=u[r.charCodeAt(t)]<<18|u[r.charCodeAt(t+1)]<<12|u[r.charCodeAt(t+2)]<<6|u[r.charCodeAt(t+3)],h[i++]=o>>16&255,h[i++]=o>>8&255,h[i++]=255&o;2===a?(o=u[r.charCodeAt(t)]<<2|u[r.charCodeAt(t+1)]>>4,h[i++]=255&o):1===a&&(o=u[r.charCodeAt(t)]<<10|u[r.charCodeAt(t+1)]<<4|u[r.charCodeAt(t+2)]>>2,h[i++]=o>>8&255,h[i++]=255&o);return h},window.fromByteArray=function(r){for(var t,n=r.length,e=n%3,o="",a=[],h=16383,c=0,i=n-e;c<i;c+=h)a.push(C(r,c,i<c+h?i:c+h));1===e?(t=r[n-1],o+=d[t>>2],o+=d[t<<4&63],o+="=="):2===e&&(t=(r[n-2]<<8)+r[n-1],o+=d[t>>10],o+=d[t>>4&63],o+=d[t<<2&63],o+="=");return a.push(o),a.join("")};for(var d=[],u=[],A="undefined"!=typeof Uint8Array?Uint8Array:Array,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=0,n=r.length;t<n;++t)d[t]=r[t],u[r.charCodeAt(t)]=t;function f(r){var t=r.length;if(0<t%4)throw new Error("Invalid string. Length must be a multiple of 4");return"="===r[t-2]?2:"="===r[t-1]?1:0}function C(r,t,n){for(var e,o,a=[],h=t;h<n;h+=3)e=(r[h]<<16)+(r[h+1]<<8)+r[h+2],a.push(d[(o=e)>>18&63]+d[o>>12&63]+d[o>>6&63]+d[63&o]);return a.join("")}u["-".charCodeAt(0)]=62,u["_".charCodeAt(0)]=63}();