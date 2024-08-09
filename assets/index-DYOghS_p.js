var Ql=Object.defineProperty;var ec=(r,e,t)=>e in r?Ql(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var ye=(r,e,t)=>ec(r,typeof e!="symbol"?e+"":e,t);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/const $n="165",Wi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},tc=0,ps=1,ic=2,ms=1,rc=2,$t=3,hi=0,Et=1,Qt=2,ui=0,ji=1,fs=2,gs=3,_s=4,nc=5,Ci=100,ac=101,sc=102,oc=103,lc=104,cc=200,hc=201,uc=202,dc=203,Qn=204,ea=205,pc=206,mc=207,fc=208,gc=209,_c=210,vc=211,xc=212,Mc=213,bc=214,yc=0,Sc=1,Ec=2,Qr=3,Tc=4,wc=5,Ac=6,Rc=7,ta=0,Cc=1,Pc=2,di=0,Lc=1,Uc=2,Dc=3,vs=4,Oc=5,Nc=6,Ic=7,xs=300,Pi=301,Yi=302,ia=303,ra=304,en=306,na=1e3,Li=1001,aa=1002,Dt=1003,Fc=1004,tn=1005,Nt=1006,sa=1007,Ui=1008,pi=1009,Bc=1010,zc=1011,rn=1012,Ms=1013,qi=1014,mi=1015,Pr=1016,bs=1017,ys=1018,Ki=1020,kc=35902,Hc=1021,Vc=1022,jt=1023,Gc=1024,Wc=1025,Zi=1026,Ji=1027,Xc=1028,Ss=1029,jc=1030,Es=1031,Ts=1033,oa=33776,la=33777,ca=33778,ha=33779,ws=35840,As=35841,Rs=35842,Cs=35843,Ps=36196,Ls=37492,Us=37496,Ds=37808,Os=37809,Ns=37810,Is=37811,Fs=37812,Bs=37813,zs=37814,ks=37815,Hs=37816,Vs=37817,Gs=37818,Ws=37819,Xs=37820,js=37821,ua=36492,Ys=36494,qs=36495,Yc=36283,Ks=36284,Zs=36285,Js=36286,qc=3200,Kc=3201,$s=0,Zc=1,fi="",It="srgb",gi="srgb-linear",da="display-p3",nn="display-p3-linear",an="linear",et="srgb",sn="rec709",on="p3",$i=7680,Qs=519,Jc=512,$c=513,Qc=514,eo=515,eh=516,th=517,ih=518,rh=519,to=35044,io="300 es",ei=2e3,ln=2001;class Di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let n=0,a=i.length;n<a;n++)i[n].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ro=1234567;const Qi=Math.PI/180,Lr=180/Math.PI;function er(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_t[r&255]+_t[r>>8&255]+_t[r>>16&255]+_t[r>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]).toLowerCase()}function vt(r,e,t){return Math.max(e,Math.min(t,r))}function pa(r,e){return(r%e+e)%e}function nh(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function ah(r,e,t){return r!==e?(t-r)/(e-r):0}function Ur(r,e,t){return(1-t)*r+t*e}function sh(r,e,t,i){return Ur(r,e,1-Math.exp(-t*i))}function oh(r,e=1){return e-Math.abs(pa(r,e*2)-e)}function lh(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function ch(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function hh(r,e){return r+Math.floor(Math.random()*(e-r+1))}function uh(r,e){return r+Math.random()*(e-r)}function dh(r){return r*(.5-Math.random())}function ph(r){r!==void 0&&(ro=r);let e=ro+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mh(r){return r*Qi}function fh(r){return r*Lr}function gh(r){return(r&r-1)===0&&r!==0}function _h(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function vh(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function xh(r,e,t,i,n){const a=Math.cos,s=Math.sin,o=a(t/2),l=s(t/2),c=a((e+i)/2),h=s((e+i)/2),p=a((e-i)/2),u=s((e-i)/2),f=a((i-e)/2),g=s((i-e)/2);switch(n){case"XYX":r.set(o*h,l*p,l*u,o*c);break;case"YZY":r.set(l*u,o*h,l*p,o*c);break;case"ZXZ":r.set(l*p,l*u,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function tr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function bt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Mh={DEG2RAD:Qi,RAD2DEG:Lr,generateUUID:er,clamp:vt,euclideanModulo:pa,mapLinear:nh,inverseLerp:ah,lerp:Ur,damp:sh,pingpong:oh,smoothstep:lh,smootherstep:ch,randInt:hh,randFloat:uh,randFloatSpread:dh,seededRandom:ph,degToRad:mh,radToDeg:fh,isPowerOfTwo:gh,ceilPowerOfTwo:_h,floorPowerOfTwo:vh,setQuaternionFromProperEuler:xh,normalize:bt,denormalize:tr};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*n+e.x,this.y=a*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,i,n,a,s,o,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,s,o,l,c)}set(e,t,i,n,a,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],u=i[2],f=i[5],g=i[8],_=n[0],d=n[3],m=n[6],E=n[1],x=n[4],T=n[7],O=n[2],C=n[5],R=n[8];return a[0]=s*_+o*E+l*O,a[3]=s*d+o*x+l*C,a[6]=s*m+o*T+l*R,a[1]=c*_+h*E+p*O,a[4]=c*d+h*x+p*C,a[7]=c*m+h*T+p*R,a[2]=u*_+f*E+g*O,a[5]=u*d+f*x+g*C,a[8]=u*m+f*T+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-i*a*h+i*o*l+n*a*c-n*s*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*s-o*c,u=o*l-h*a,f=c*a-s*l,g=t*p+i*u+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=p*_,e[1]=(n*c-h*i)*_,e[2]=(o*i-n*s)*_,e[3]=u*_,e[4]=(h*t-n*l)*_,e[5]=(n*a-o*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(s*t-i*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-n*c,n*l,-n*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ma.makeScale(e,t)),this}rotate(e){return this.premultiply(ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ma=new Oe;function no(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Dr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function bh(){const r=Dr("canvas");return r.style.display="block",r}const ao={};function so(r){r in ao||(ao[r]=!0,console.warn(r))}function yh(r,e,t){return new Promise(function(i,n){function a(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const oo=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lo=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cn={[gi]:{transfer:an,primaries:sn,toReference:r=>r,fromReference:r=>r},[It]:{transfer:et,primaries:sn,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[nn]:{transfer:an,primaries:on,toReference:r=>r.applyMatrix3(lo),fromReference:r=>r.applyMatrix3(oo)},[da]:{transfer:et,primaries:on,toReference:r=>r.convertSRGBToLinear().applyMatrix3(lo),fromReference:r=>r.applyMatrix3(oo).convertLinearToSRGB()}},Sh=new Set([gi,nn]),qe={enabled:!0,_workingColorSpace:gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Sh.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=cn[e].toReference,n=cn[t].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return cn[r].primaries},getTransfer:function(r){return r===fi?an:cn[r].transfer}};function ir(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function fa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let rr;class Eh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rr===void 0&&(rr=Dr("canvas")),rr.width=e.width,rr.height=e.height;const i=rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Dr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),a=n.data;for(let s=0;s<a.length;s++)a[s]=ir(a[s]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ir(t[i]/255)*255):t[i]=ir(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Th=0;class co{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=er(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?a.push(ga(n[s].image)):a.push(ga(n[s]))}else a=ga(n);i.url=a}return t||(e.images[this.uuid]=i),i}}function ga(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Eh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wh=0;class At extends Di{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,i=Li,n=Li,a=Nt,s=Ui,o=jt,l=pi,c=At.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=er(),this.name="",this.source=new co(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xs)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case na:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case na:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null,At.DEFAULT_MAPPING=xs,At.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,i=0,n=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*n+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*n+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*n+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,a;const s=e.elements,o=s[0],l=s[4],c=s[8],h=s[1],p=s[5],u=s[9],f=s[2],g=s[6],_=s[10];if(Math.abs(l-h)<.01&&Math.abs(c-f)<.01&&Math.abs(u-g)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+f)<.1&&Math.abs(u+g)<.1&&Math.abs(o+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const m=(o+1)/2,E=(p+1)/2,x=(_+1)/2,T=(l+h)/4,O=(c+f)/4,C=(u+g)/4;return m>E&&m>x?m<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(m),n=T/i,a=O/i):E>x?E<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(E),i=T/n,a=C/n):x<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(x),i=O/a,n=C/a),this.set(i,n,a,t),this}let d=Math.sqrt((g-u)*(g-u)+(c-f)*(c-f)+(h-l)*(h-l));return Math.abs(d)<.001&&(d=1),this.x=(g-u)/d,this.y=(c-f)/d,this.z=(h-l)/d,this.w=Math.acos((o+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ah extends Di{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new At(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new co(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends Ah{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ho extends At{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rh extends At{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oi{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,a,s,o){let l=i[n+0],c=i[n+1],h=i[n+2],p=i[n+3];const u=a[s+0],f=a[s+1],g=a[s+2],_=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(p!==_||l!==u||c!==f||h!==g){let d=1-o;const m=l*u+c*f+h*g+p*_,E=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const O=Math.sqrt(x),C=Math.atan2(O,m*E);d=Math.sin(d*C)/O,o=Math.sin(o*C)/O}const T=o*E;if(l=l*d+u*T,c=c*d+f*T,h=h*d+g*T,p=p*d+_*T,d===1-o){const O=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=O,c*=O,h*=O,p*=O}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,n,a,s){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],p=a[s],u=a[s+1],f=a[s+2],g=a[s+3];return e[t]=o*g+h*p+l*f-c*u,e[t+1]=l*g+h*u+c*p-o*f,e[t+2]=c*g+h*f+o*u-l*p,e[t+3]=h*g-o*p-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),p=o(a/2),u=l(i/2),f=l(n/2),g=l(a/2);switch(s){case"XYZ":this._x=u*h*p+c*f*g,this._y=c*f*p-u*h*g,this._z=c*h*g+u*f*p,this._w=c*h*p-u*f*g;break;case"YXZ":this._x=u*h*p+c*f*g,this._y=c*f*p-u*h*g,this._z=c*h*g-u*f*p,this._w=c*h*p+u*f*g;break;case"ZXY":this._x=u*h*p-c*f*g,this._y=c*f*p+u*h*g,this._z=c*h*g+u*f*p,this._w=c*h*p-u*f*g;break;case"ZYX":this._x=u*h*p-c*f*g,this._y=c*f*p+u*h*g,this._z=c*h*g-u*f*p,this._w=c*h*p+u*f*g;break;case"YZX":this._x=u*h*p+c*f*g,this._y=c*f*p+u*h*g,this._z=c*h*g-u*f*p,this._w=c*h*p-u*f*g;break;case"XZY":this._x=u*h*p-c*f*g,this._y=c*f*p-u*h*g,this._z=c*h*g+u*f*p,this._w=c*h*p+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],h=t[6],p=t[10],u=i+o+p;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(a-c)*f,this._z=(s-n)*f}else if(i>o&&i>p){const f=2*Math.sqrt(1+i-o-p);this._w=(h-l)/f,this._x=.25*f,this._y=(n+s)/f,this._z=(a+c)/f}else if(o>p){const f=2*Math.sqrt(1+o-i-p);this._w=(a-c)/f,this._x=(n+s)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+p-i-o);this._w=(s-n)/f,this._x=(a+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+s*o+n*c-a*l,this._y=n*h+s*l+a*o-i*c,this._z=a*h+s*c+i*l-n*o,this._w=s*h-i*o-n*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+n*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=n,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),p=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=s*p+this._w*u,this._x=i*p+this._x*u,this._y=n*p+this._y*u,this._z=a*p+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*n,this.y=a[1]*t+a[4]*i+a[7]*n,this.z=a[2]*t+a[5]*i+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*n+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*n+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*n+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*n-o*i),h=2*(o*t-a*n),p=2*(a*i-s*t);return this.x=t+l*c+s*p-o*h,this.y=i+l*h+o*c-a*p,this.z=n+l*p+a*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n,this.y=a[1]*t+a[5]*i+a[9]*n,this.z=a[2]*t+a[6]*i+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=n*l-a*o,this.y=a*s-i*l,this.z=i*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _a.copy(this).projectOnVector(e),this.sub(_a)}reflect(e){return this.sub(_a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _a=new D,uo=new Oi;class Or{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ft.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ft.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ft.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Ft):Ft.fromBufferAttribute(a,s),Ft.applyMatrix4(e.matrixWorld),this.expandByPoint(Ft);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hn.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hn.copy(i.boundingBox)),hn.applyMatrix4(e.matrixWorld),this.union(hn)}const n=e.children;for(let a=0,s=n.length;a<s;a++)this.expandByObject(n[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ft),Ft.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),un.subVectors(this.max,Nr),nr.subVectors(e.a,Nr),ar.subVectors(e.b,Nr),sr.subVectors(e.c,Nr),vi.subVectors(ar,nr),xi.subVectors(sr,ar),Ni.subVectors(nr,sr);let t=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Ni.z,Ni.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Ni.z,0,-Ni.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Ni.y,Ni.x,0];return!va(t,nr,ar,sr,un)||(t=[1,0,0,0,1,0,0,0,1],!va(t,nr,ar,sr,un))?!1:(dn.crossVectors(vi,xi),t=[dn.x,dn.y,dn.z],va(t,nr,ar,sr,un))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ft).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ft).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new D,new D,new D,new D,new D,new D,new D,new D],Ft=new D,hn=new Or,nr=new D,ar=new D,sr=new D,vi=new D,xi=new D,Ni=new D,Nr=new D,un=new D,dn=new D,Ii=new D;function va(r,e,t,i,n){for(let a=0,s=r.length-3;a<=s;a+=3){Ii.fromArray(r,a);const o=n.x*Math.abs(Ii.x)+n.y*Math.abs(Ii.y)+n.z*Math.abs(Ii.z),l=e.dot(Ii),c=t.dot(Ii),h=i.dot(Ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ch=new Or,Ir=new D,xa=new D;class pn{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ch.setFromPoints(e).getCenter(i);let n=0;for(let a=0,s=e.length;a<s;a++)n=Math.max(n,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ir.subVectors(e,this.center);const t=Ir.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Ir,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ir.copy(e.center).add(xa)),this.expandByPoint(Ir.copy(e.center).sub(xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new D,Ma=new D,mn=new D,Mi=new D,ba=new D,fn=new D,ya=new D;class Sa{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Ma.copy(e).add(t).multiplyScalar(.5),mn.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(Ma);const a=e.distanceTo(t)*.5,s=-this.direction.dot(mn),o=Mi.dot(this.direction),l=-Mi.dot(mn),c=Mi.lengthSq(),h=Math.abs(1-s*s);let p,u,f,g;if(h>0)if(p=s*l-o,u=s*o-l,g=a*h,p>=0)if(u>=-g)if(u<=g){const _=1/h;p*=_,u*=_,f=p*(p+s*u+2*o)+u*(s*p+u+2*l)+c}else u=a,p=Math.max(0,-(s*u+o)),f=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(s*u+o)),f=-p*p+u*(u+2*l)+c;else u<=-g?(p=Math.max(0,-(-s*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),f=-p*p+u*(u+2*l)+c):u<=g?(p=0,u=Math.min(Math.max(-a,-l),a),f=u*(u+2*l)+c):(p=Math.max(0,-(s*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),f=-p*p+u*(u+2*l)+c);else u=s>0?-a:a,p=Math.max(0,-(s*u+o)),f=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),n&&n.copy(Ma).addScaledVector(mn,u),f}intersectSphere(e,t){ii.subVectors(e.center,this.origin);const i=ii.dot(this.direction),n=ii.dot(ii)-i*i,a=e.radius*e.radius;if(n>a)return null;const s=Math.sqrt(a-n),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,a,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(a=(e.min.y-u.y)*h,s=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,s=(e.min.y-u.y)*h),i>s||a>n||((a>i||isNaN(i))&&(i=a),(s<n||isNaN(n))&&(n=s),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,i,n,a){ba.subVectors(t,e),fn.subVectors(i,e),ya.crossVectors(ba,fn);let s=this.direction.dot(ya),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Mi.subVectors(this.origin,e);const l=o*this.direction.dot(fn.crossVectors(Mi,fn));if(l<0)return null;const c=o*this.direction.dot(ba.cross(Mi));if(c<0||l+c>s)return null;const h=-o*Mi.dot(ya);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,i,n,a,s,o,l,c,h,p,u,f,g,_,d){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,s,o,l,c,h,p,u,f,g,_,d)}set(e,t,i,n,a,s,o,l,c,h,p,u,f,g,_,d){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=n,m[1]=a,m[5]=s,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=p,m[14]=u,m[3]=f,m[7]=g,m[11]=_,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/or.setFromMatrixColumn(e,0).length(),a=1/or.setFromMatrixColumn(e,1).length(),s=1/or.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const u=s*h,f=s*p,g=o*h,_=o*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=f+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+f*c,t[10]=s*l}else if(e.order==="YXZ"){const u=l*h,f=l*p,g=c*h,_=c*p;t[0]=u+_*o,t[4]=g*o-f,t[8]=s*c,t[1]=s*p,t[5]=s*h,t[9]=-o,t[2]=f*o-g,t[6]=_+u*o,t[10]=s*l}else if(e.order==="ZXY"){const u=l*h,f=l*p,g=c*h,_=c*p;t[0]=u-_*o,t[4]=-s*p,t[8]=g+f*o,t[1]=f+g*o,t[5]=s*h,t[9]=_-u*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const u=s*h,f=s*p,g=o*h,_=o*p;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+_,t[1]=l*p,t[5]=_*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const u=s*l,f=s*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*p,t[8]=g*p+f,t[1]=p,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*p+g,t[10]=u-_*p}else if(e.order==="XZY"){const u=s*l,f=s*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=u*p+_,t[5]=s*h,t[9]=f*p-g,t[2]=g*p-f,t[6]=o*h,t[10]=_*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ph,e,Lh)}lookAt(e,t,i){const n=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),bi.crossVectors(i,Pt),bi.lengthSq()===0&&(Math.abs(i.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),bi.crossVectors(i,Pt)),bi.normalize(),gn.crossVectors(Pt,bi),n[0]=bi.x,n[4]=gn.x,n[8]=Pt.x,n[1]=bi.y,n[5]=gn.y,n[9]=Pt.y,n[2]=bi.z,n[6]=gn.z,n[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],u=i[9],f=i[13],g=i[2],_=i[6],d=i[10],m=i[14],E=i[3],x=i[7],T=i[11],O=i[15],C=n[0],R=n[4],L=n[8],y=n[12],b=n[1],P=n[5],G=n[9],V=n[13],K=n[2],Z=n[6],X=n[10],$=n[14],W=n[3],se=n[7],ge=n[11],Se=n[15];return a[0]=s*C+o*b+l*K+c*W,a[4]=s*R+o*P+l*Z+c*se,a[8]=s*L+o*G+l*X+c*ge,a[12]=s*y+o*V+l*$+c*Se,a[1]=h*C+p*b+u*K+f*W,a[5]=h*R+p*P+u*Z+f*se,a[9]=h*L+p*G+u*X+f*ge,a[13]=h*y+p*V+u*$+f*Se,a[2]=g*C+_*b+d*K+m*W,a[6]=g*R+_*P+d*Z+m*se,a[10]=g*L+_*G+d*X+m*ge,a[14]=g*y+_*V+d*$+m*Se,a[3]=E*C+x*b+T*K+O*W,a[7]=E*R+x*P+T*Z+O*se,a[11]=E*L+x*G+T*X+O*ge,a[15]=E*y+x*V+T*$+O*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],u=e[10],f=e[14],g=e[3],_=e[7],d=e[11],m=e[15];return g*(+a*l*p-n*c*p-a*o*u+i*c*u+n*o*f-i*l*f)+_*(+t*l*f-t*c*u+a*s*u-n*s*f+n*c*h-a*l*h)+d*(+t*c*p-t*o*f-a*s*p+i*s*f+a*o*h-i*c*h)+m*(-n*o*h-t*l*p+t*o*u+n*s*p-i*s*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],u=e[10],f=e[11],g=e[12],_=e[13],d=e[14],m=e[15],E=p*d*c-_*u*c+_*l*f-o*d*f-p*l*m+o*u*m,x=g*u*c-h*d*c-g*l*f+s*d*f+h*l*m-s*u*m,T=h*_*c-g*p*c+g*o*f-s*_*f-h*o*m+s*p*m,O=g*p*l-h*_*l-g*o*u+s*_*u+h*o*d-s*p*d,C=t*E+i*x+n*T+a*O;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=E*R,e[1]=(_*u*a-p*d*a-_*n*f+i*d*f+p*n*m-i*u*m)*R,e[2]=(o*d*a-_*l*a+_*n*c-i*d*c-o*n*m+i*l*m)*R,e[3]=(p*l*a-o*u*a-p*n*c+i*u*c+o*n*f-i*l*f)*R,e[4]=x*R,e[5]=(h*d*a-g*u*a+g*n*f-t*d*f-h*n*m+t*u*m)*R,e[6]=(g*l*a-s*d*a-g*n*c+t*d*c+s*n*m-t*l*m)*R,e[7]=(s*u*a-h*l*a+h*n*c-t*u*c-s*n*f+t*l*f)*R,e[8]=T*R,e[9]=(g*p*a-h*_*a-g*i*f+t*_*f+h*i*m-t*p*m)*R,e[10]=(s*_*a-g*o*a+g*i*c-t*_*c-s*i*m+t*o*m)*R,e[11]=(h*o*a-s*p*a-h*i*c+t*p*c+s*i*f-t*o*f)*R,e[12]=O*R,e[13]=(h*_*n-g*p*n+g*i*u-t*_*u-h*i*d+t*p*d)*R,e[14]=(g*o*n-s*_*n-g*i*l+t*_*l+s*i*d-t*o*d)*R,e[15]=(s*p*n-h*o*n+h*i*l-t*p*l-s*i*u+t*o*u)*R,this}scale(e){const t=this.elements,i=e.x,n=e.y,a=e.z;return t[0]*=i,t[4]*=n,t[8]*=a,t[1]*=i,t[5]*=n,t[9]*=a,t[2]*=i,t[6]*=n,t[10]*=a,t[3]*=i,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,h=a*o;return this.set(c*s+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*s,0,c*l-n*o,h*l+n*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,a,s){return this.set(1,i,a,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,h=s+s,p=o+o,u=a*c,f=a*h,g=a*p,_=s*h,d=s*p,m=o*p,E=l*c,x=l*h,T=l*p,O=i.x,C=i.y,R=i.z;return n[0]=(1-(_+m))*O,n[1]=(f+T)*O,n[2]=(g-x)*O,n[3]=0,n[4]=(f-T)*C,n[5]=(1-(u+m))*C,n[6]=(d+E)*C,n[7]=0,n[8]=(g+x)*R,n[9]=(d-E)*R,n[10]=(1-(u+_))*R,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let a=or.set(n[0],n[1],n[2]).length();const s=or.set(n[4],n[5],n[6]).length(),o=or.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],Bt.copy(this);const l=1/a,c=1/s,h=1/o;return Bt.elements[0]*=l,Bt.elements[1]*=l,Bt.elements[2]*=l,Bt.elements[4]*=c,Bt.elements[5]*=c,Bt.elements[6]*=c,Bt.elements[8]*=h,Bt.elements[9]*=h,Bt.elements[10]*=h,t.setFromRotationMatrix(Bt),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,n,a,s,o=ei){const l=this.elements,c=2*a/(t-e),h=2*a/(i-n),p=(t+e)/(t-e),u=(i+n)/(i-n);let f,g;if(o===ei)f=-(s+a)/(s-a),g=-2*s*a/(s-a);else if(o===ln)f=-s/(s-a),g=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,a,s,o=ei){const l=this.elements,c=1/(t-e),h=1/(i-n),p=1/(s-a),u=(t+e)*c,f=(i+n)*h;let g,_;if(o===ei)g=(s+a)*p,_=-2*p;else if(o===ln)g=a*p,_=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const or=new D,Bt=new tt,Ph=new D(0,0,0),Lh=new D(1,1,1),bi=new D,gn=new D,Pt=new D,po=new tt,mo=new Oi;class Zt{constructor(e=0,t=0,i=0,n=Zt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,a=n[0],s=n[4],o=n[8],l=n[1],c=n[5],h=n[9],p=n[2],u=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-vt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-vt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return po.makeRotationFromQuaternion(e),this.setFromRotationMatrix(po,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mo.setFromEuler(this),this.setFromQuaternion(mo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zt.DEFAULT_ORDER="XYZ";class fo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Uh=0;const go=new D,lr=new Oi,ri=new tt,_n=new D,Fr=new D,Dh=new D,Oh=new Oi,_o=new D(1,0,0),vo=new D(0,1,0),xo=new D(0,0,1),Mo={type:"added"},Nh={type:"removed"},cr={type:"childadded",child:null},Ea={type:"childremoved",child:null};class Mt extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new D,t=new Zt,i=new Oi,n=new D(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new tt},normalMatrix:{value:new Oe}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.multiply(lr),this}rotateOnWorldAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.premultiply(lr),this}rotateX(e){return this.rotateOnAxis(_o,e)}rotateY(e){return this.rotateOnAxis(vo,e)}rotateZ(e){return this.rotateOnAxis(xo,e)}translateOnAxis(e,t){return go.copy(e).applyQuaternion(this.quaternion),this.position.add(go.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_o,e)}translateY(e){return this.translateOnAxis(vo,e)}translateZ(e){return this.translateOnAxis(xo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_n.copy(e):_n.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Fr,_n,this.up):ri.lookAt(_n,Fr,this.up),this.quaternion.setFromRotationMatrix(ri),n&&(ri.extractRotation(n.matrixWorld),lr.setFromRotationMatrix(ri),this.quaternion.premultiply(lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mo),cr.child=e,this.dispatchEvent(cr),cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nh),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mo),cr.child=e,this.dispatchEvent(cr),cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,e,Dh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,Oh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let a=0,s=n.length;a<s;a++){const o=n[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];a(e.shapes,p)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));n.material=o}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),p=s(e.shapes),u=s(e.skeletons),f=s(e.animations),g=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}Mt.DEFAULT_UP=new D(0,1,0),Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zt=new D,ni=new D,Ta=new D,ai=new D,hr=new D,ur=new D,bo=new D,wa=new D,Aa=new D,Ra=new D;class Xt{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),zt.subVectors(e,t),n.cross(zt);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,i,n,a){zt.subVectors(n,t),ni.subVectors(i,t),Ta.subVectors(e,t);const s=zt.dot(zt),o=zt.dot(ni),l=zt.dot(Ta),c=ni.dot(ni),h=ni.dot(Ta),p=s*c-o*o;if(p===0)return a.set(0,0,0),null;const u=1/p,f=(c*l-o*h)*u,g=(s*h-o*l)*u;return a.set(1-f-g,g,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,i,n,a,s,o,l){return this.getBarycoord(e,t,i,n,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ai.x),l.addScaledVector(s,ai.y),l.addScaledVector(o,ai.z),l)}static isFrontFacing(e,t,i,n){return zt.subVectors(i,t),ni.subVectors(e,t),zt.cross(ni).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zt.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),zt.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,a){return Xt.getInterpolation(e,this.a,this.b,this.c,t,i,n,a)}containsPoint(e){return Xt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,a=this.c;let s,o;hr.subVectors(n,i),ur.subVectors(a,i),wa.subVectors(e,i);const l=hr.dot(wa),c=ur.dot(wa);if(l<=0&&c<=0)return t.copy(i);Aa.subVectors(e,n);const h=hr.dot(Aa),p=ur.dot(Aa);if(h>=0&&p<=h)return t.copy(n);const u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(i).addScaledVector(hr,s);Ra.subVectors(e,a);const f=hr.dot(Ra),g=ur.dot(Ra);if(g>=0&&f<=g)return t.copy(a);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(ur,o);const d=h*g-f*p;if(d<=0&&p-h>=0&&f-g>=0)return bo.subVectors(a,n),o=(p-h)/(p-h+(f-g)),t.copy(n).addScaledVector(bo,o);const m=1/(d+_+u);return s=_*m,o=u*m,t.copy(i).addScaledVector(hr,s).addScaledVector(ur,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},vn={h:0,s:0,l:0};function Ca(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}let Ne=class{constructor(r,e,t){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(r,e,t)}set(r,e,t){if(e===void 0&&t===void 0){const i=r;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(r,e,t);return this}setScalar(r){return this.r=r,this.g=r,this.b=r,this}setHex(r,e=It){return r=Math.floor(r),this.r=(r>>16&255)/255,this.g=(r>>8&255)/255,this.b=(r&255)/255,qe.toWorkingColorSpace(this,e),this}setRGB(r,e,t,i=qe.workingColorSpace){return this.r=r,this.g=e,this.b=t,qe.toWorkingColorSpace(this,i),this}setHSL(r,e,t,i=qe.workingColorSpace){if(r=pa(r,1),e=vt(e,0,1),t=vt(t,0,1),e===0)this.r=this.g=this.b=t;else{const n=t<=.5?t*(1+e):t+e-t*e,a=2*t-n;this.r=Ca(a,n,r+1/3),this.g=Ca(a,n,r),this.b=Ca(a,n,r-1/3)}return qe.toWorkingColorSpace(this,i),this}setStyle(r,e=It){function t(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+r+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(r)){let n;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return t(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,e);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return t(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,e);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return t(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+r)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(r)){const n=i[1],a=n.length;if(a===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(n,16),e);console.warn("THREE.Color: Invalid hex color "+r)}else if(r&&r.length>0)return this.setColorName(r,e);return this}setColorName(r,e=It){const t=yo[r.toLowerCase()];return t!==void 0?this.setHex(t,e):console.warn("THREE.Color: Unknown color "+r),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(r){return this.r=r.r,this.g=r.g,this.b=r.b,this}copySRGBToLinear(r){return this.r=ir(r.r),this.g=ir(r.g),this.b=ir(r.b),this}copyLinearToSRGB(r){return this.r=fa(r.r),this.g=fa(r.g),this.b=fa(r.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(r=It){return qe.fromWorkingColorSpace(xt.copy(this),r),Math.round(vt(xt.r*255,0,255))*65536+Math.round(vt(xt.g*255,0,255))*256+Math.round(vt(xt.b*255,0,255))}getHexString(r=It){return("000000"+this.getHex(r).toString(16)).slice(-6)}getHSL(r,e=qe.workingColorSpace){qe.fromWorkingColorSpace(xt.copy(this),e);const t=xt.r,i=xt.g,n=xt.b,a=Math.max(t,i,n),s=Math.min(t,i,n);let o,l;const c=(s+a)/2;if(s===a)o=0,l=0;else{const h=a-s;switch(l=c<=.5?h/(a+s):h/(2-a-s),a){case t:o=(i-n)/h+(i<n?6:0);break;case i:o=(n-t)/h+2;break;case n:o=(t-i)/h+4;break}o/=6}return r.h=o,r.s=l,r.l=c,r}getRGB(r,e=qe.workingColorSpace){return qe.fromWorkingColorSpace(xt.copy(this),e),r.r=xt.r,r.g=xt.g,r.b=xt.b,r}getStyle(r=It){qe.fromWorkingColorSpace(xt.copy(this),r);const e=xt.r,t=xt.g,i=xt.b;return r!==It?`color(${r} ${e.toFixed(3)} ${t.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(t*255)},${Math.round(i*255)})`}offsetHSL(r,e,t){return this.getHSL(yi),this.setHSL(yi.h+r,yi.s+e,yi.l+t)}add(r){return this.r+=r.r,this.g+=r.g,this.b+=r.b,this}addColors(r,e){return this.r=r.r+e.r,this.g=r.g+e.g,this.b=r.b+e.b,this}addScalar(r){return this.r+=r,this.g+=r,this.b+=r,this}sub(r){return this.r=Math.max(0,this.r-r.r),this.g=Math.max(0,this.g-r.g),this.b=Math.max(0,this.b-r.b),this}multiply(r){return this.r*=r.r,this.g*=r.g,this.b*=r.b,this}multiplyScalar(r){return this.r*=r,this.g*=r,this.b*=r,this}lerp(r,e){return this.r+=(r.r-this.r)*e,this.g+=(r.g-this.g)*e,this.b+=(r.b-this.b)*e,this}lerpColors(r,e,t){return this.r=r.r+(e.r-r.r)*t,this.g=r.g+(e.g-r.g)*t,this.b=r.b+(e.b-r.b)*t,this}lerpHSL(r,e){this.getHSL(yi),r.getHSL(vn);const t=Ur(yi.h,vn.h,e),i=Ur(yi.s,vn.s,e),n=Ur(yi.l,vn.l,e);return this.setHSL(t,i,n),this}setFromVector3(r){return this.r=r.x,this.g=r.y,this.b=r.z,this}applyMatrix3(r){const e=this.r,t=this.g,i=this.b,n=r.elements;return this.r=n[0]*e+n[3]*t+n[6]*i,this.g=n[1]*e+n[4]*t+n[7]*i,this.b=n[2]*e+n[5]*t+n[8]*i,this}equals(r){return r.r===this.r&&r.g===this.g&&r.b===this.b}fromArray(r,e=0){return this.r=r[e],this.g=r[e+1],this.b=r[e+2],this}toArray(r=[],e=0){return r[e]=this.r,r[e+1]=this.g,r[e+2]=this.b,r}fromBufferAttribute(r,e){return this.r=r.getX(e),this.g=r.getY(e),this.b=r.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const xt=new Ne;Ne.NAMES=yo;let Ih=0;class dr extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=er(),this.name="",this.type="Material",this.blending=ji,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qn,this.blendDst=ea,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qs,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(i.blending=this.blending),this.side!==hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qn&&(i.blendSrc=this.blendSrc),this.blendDst!==ea&&(i.blendDst=this.blendDst),this.blendEquation!==Ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qs&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=n(e.textures),s=n(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class So extends dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new D,xn=new Ae;class kt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=to,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return so("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix3(e),this.setXY(t,xn.x,xn.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=tr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tr(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tr(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tr(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,a){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),n=bt(n,this.array),a=bt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==to&&(e.usage=this.usage),e}}class Eo extends kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class To extends kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Yt extends kt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Fh=0;const Ot=new tt,Pa=new Mt,pr=new D,Lt=new Or,Br=new Or,mt=new D;class Wt extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(no(e)?To:Eo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Oe().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,i){return Ot.makeTranslation(e,t,i),this.applyMatrix4(Ot),this}scale(e,t,i){return Ot.makeScale(e,t,i),this.applyMatrix4(Ot),this}lookAt(e){return Pa.lookAt(e),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const a=t[i];Lt.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Br.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Lt.min,Br.min),Lt.expandByPoint(mt),mt.addVectors(Lt.max,Br.max),Lt.expandByPoint(mt)):(Lt.expandByPoint(Br.min),Lt.expandByPoint(Br.max))}Lt.getCenter(i);let n=0;for(let a=0,s=e.count;a<s;a++)mt.fromBufferAttribute(e,a),n=Math.max(n,i.distanceToSquared(mt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)mt.fromBufferAttribute(o,c),l&&(pr.fromBufferAttribute(e,c),mt.add(pr)),n=Math.max(n,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new D,l[L]=new D;const c=new D,h=new D,p=new D,u=new Ae,f=new Ae,g=new Ae,_=new D,d=new D;function m(L,y,b){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,y),p.fromBufferAttribute(i,b),u.fromBufferAttribute(a,L),f.fromBufferAttribute(a,y),g.fromBufferAttribute(a,b),h.sub(c),p.sub(c),f.sub(u),g.sub(u);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(p,-f.y).multiplyScalar(P),d.copy(p).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[L].add(_),o[y].add(_),o[b].add(_),l[L].add(d),l[y].add(d),l[b].add(d))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,y=E.length;L<y;++L){const b=E[L],P=b.start,G=b.count;for(let V=P,K=P+G;V<K;V+=3)m(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const x=new D,T=new D,O=new D,C=new D;function R(L){O.fromBufferAttribute(n,L),C.copy(O);const y=o[L];x.copy(y),x.sub(O.multiplyScalar(O.dot(y))).normalize(),T.crossVectors(C,y);const b=T.dot(l[L])<0?-1:1;s.setXYZW(L,x.x,x.y,x.z,b)}for(let L=0,y=E.length;L<y;++L){const b=E[L],P=b.start,G=b.count;for(let V=P,K=P+G;V<K;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const n=new D,a=new D,s=new D,o=new D,l=new D,c=new D,h=new D,p=new D;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),_=e.getX(u+1),d=e.getX(u+2);n.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),s.fromBufferAttribute(t,d),h.subVectors(s,a),p.subVectors(n,a),h.cross(p),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,d),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)n.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),h.subVectors(s,a),p.subVectors(n,a),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,d=l.length;_<d;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new kt(u,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,p=c.length;h<p;h++){const u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){const f=c[p];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],p=a[c];for(let u=0,f=p.length;u<f;u++)h.push(p[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wo=new tt,Fi=new Sa,Mn=new pn,Ao=new D,mr=new D,fr=new D,gr=new D,La=new D,bn=new D,yn=new Ae,Sn=new Ae,En=new Ae,Ro=new D,Co=new D,Po=new D,Tn=new D,wn=new D;class Tt extends Mt{constructor(e=new Wt,t=new So){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(a&&o){bn.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],p=a[l];h!==0&&(La.fromBufferAttribute(p,e),s?bn.addScaledVector(La,h):bn.addScaledVector(La.sub(t),h))}t.add(bn)}return t}raycast(e,t){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mn.copy(i.boundingSphere),Mn.applyMatrix4(a),Fi.copy(e.ray).recast(e.near),!(Mn.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(Mn,Ao)===null||Fi.origin.distanceToSquared(Ao)>(e.far-e.near)**2))&&(wo.copy(a).invert(),Fi.copy(e.ray).applyMatrix4(wo),!(i.boundingBox!==null&&Fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Fi)))}_computeIntersections(e,t,i){let n;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,p=a.attributes.normal,u=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,_=u.length;g<_;g++){const d=u[g],m=s[d.materialIndex],E=Math.max(d.start,f.start),x=Math.min(o.count,Math.min(d.start+d.count,f.start+f.count));for(let T=E,O=x;T<O;T+=3){const C=o.getX(T),R=o.getX(T+1),L=o.getX(T+2);n=An(this,m,e,i,c,h,p,C,R,L),n&&(n.faceIndex=Math.floor(T/3),n.face.materialIndex=d.materialIndex,t.push(n))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let d=g,m=_;d<m;d+=3){const E=o.getX(d),x=o.getX(d+1),T=o.getX(d+2);n=An(this,s,e,i,c,h,p,E,x,T),n&&(n.faceIndex=Math.floor(d/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,_=u.length;g<_;g++){const d=u[g],m=s[d.materialIndex],E=Math.max(d.start,f.start),x=Math.min(l.count,Math.min(d.start+d.count,f.start+f.count));for(let T=E,O=x;T<O;T+=3){const C=T,R=T+1,L=T+2;n=An(this,m,e,i,c,h,p,C,R,L),n&&(n.faceIndex=Math.floor(T/3),n.face.materialIndex=d.materialIndex,t.push(n))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let d=g,m=_;d<m;d+=3){const E=d,x=d+1,T=d+2;n=An(this,s,e,i,c,h,p,E,x,T),n&&(n.faceIndex=Math.floor(d/3),t.push(n))}}}}function Bh(r,e,t,i,n,a,s,o){let l;if(e.side===Et?l=i.intersectTriangle(s,a,n,!0,o):l=i.intersectTriangle(n,a,s,e.side===hi,o),l===null)return null;wn.copy(o),wn.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(wn);return c<t.near||c>t.far?null:{distance:c,point:wn.clone(),object:r}}function An(r,e,t,i,n,a,s,o,l,c){r.getVertexPosition(o,mr),r.getVertexPosition(l,fr),r.getVertexPosition(c,gr);const h=Bh(r,e,t,i,mr,fr,gr,Tn);if(h){n&&(yn.fromBufferAttribute(n,o),Sn.fromBufferAttribute(n,l),En.fromBufferAttribute(n,c),h.uv=Xt.getInterpolation(Tn,mr,fr,gr,yn,Sn,En,new Ae)),a&&(yn.fromBufferAttribute(a,o),Sn.fromBufferAttribute(a,l),En.fromBufferAttribute(a,c),h.uv1=Xt.getInterpolation(Tn,mr,fr,gr,yn,Sn,En,new Ae)),s&&(Ro.fromBufferAttribute(s,o),Co.fromBufferAttribute(s,l),Po.fromBufferAttribute(s,c),h.normal=Xt.getInterpolation(Tn,mr,fr,gr,Ro,Co,Po,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new D,materialIndex:0};Xt.getNormal(mr,fr,gr,p.normal),h.face=p}return h}class Kr extends Wt{constructor(e=1,t=1,i=1,n=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:a,depthSegments:s};const o=this;n=Math.floor(n),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],h=[],p=[];let u=0,f=0;g("z","y","x",-1,-1,i,t,e,s,a,0),g("z","y","x",1,-1,i,t,-e,s,a,1),g("x","z","y",1,1,e,i,t,n,s,2),g("x","z","y",1,-1,e,i,-t,n,s,3),g("x","y","z",1,-1,e,t,i,n,a,4),g("x","y","z",-1,-1,e,t,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(p,2));function g(_,d,m,E,x,T,O,C,R,L,y){const b=T/R,P=O/L,G=T/2,V=O/2,K=C/2,Z=R+1,X=L+1;let $=0,W=0;const se=new D;for(let ge=0;ge<X;ge++){const Se=ge*P-V;for(let Ve=0;Ve<Z;Ve++){const je=Ve*b-G;se[_]=je*E,se[d]=Se*x,se[m]=K,c.push(se.x,se.y,se.z),se[_]=0,se[d]=0,se[m]=C>0?1:-1,h.push(se.x,se.y,se.z),p.push(Ve/R),p.push(1-ge/L),$+=1}}for(let ge=0;ge<L;ge++)for(let Se=0;Se<R;Se++){const Ve=u+Se+Z*ge,je=u+Se+Z*(ge+1),j=u+(Se+1)+Z*(ge+1),ne=u+(Se+1)+Z*ge;l.push(Ve,je,ne),l.push(je,j,ne),W+=6}o.addGroup(f,W,y),f+=W,u+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _r(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function yt(r){const e={};for(let t=0;t<r.length;t++){const i=_r(r[t]);for(const n in i)e[n]=i[n]}return e}function zh(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Lo(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Uo={clone:_r,merge:yt};var kh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kh,this.fragmentShader=Hh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=zh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Do extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Si=new D,Oo=new Ae,No=new Ae;class wt extends Do{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(Qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,t){return this.getViewBounds(e,Oo,No),t.subVectors(No,Oo)}setViewOffset(e,t,i,n,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qi*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,a=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*n/l,t-=s.offsetY*i/c,n*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vr=-90,xr=1;class Vh extends Mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new wt(vr,xr,e,t);n.layers=this.layers,this.add(n);const a=new wt(vr,xr,e,t);a.layers=this.layers,this.add(a);const s=new wt(vr,xr,e,t);s.layers=this.layers,this.add(s);const o=new wt(vr,xr,e,t);o.layers=this.layers,this.add(o);const l=new wt(vr,xr,e,t);l.layers=this.layers,this.add(l);const c=new wt(vr,xr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ln)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,h]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,a),e.setRenderTarget(i,1,n),e.render(t,s),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(p,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ua extends At{constructor(e,t,i,n,a,s,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Pi,super(e,t,i,n,a,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gh extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Ua(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Kr(5,5,5),a=new si({name:"CubemapFromEquirect",uniforms:_r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Et,blending:ui});a.uniforms.tEquirect.value=t;const s=new Tt(n,a),o=t.minFilter;return t.minFilter===Ui&&(t.minFilter=Nt),new Vh(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,n){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,n);e.setRenderTarget(a)}}const Da=new D,Wh=new D,Xh=new Oe;class oi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Da.subVectors(i,t).cross(Wh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Da),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Xh.getNormalMatrix(e),n=this.coplanarPoint(Da).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new pn,Rn=new D;class Oa{constructor(e=new oi,t=new oi,i=new oi,n=new oi,a=new oi,s=new oi){this.planes=[e,t,i,n,a,s]}set(e,t,i,n,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ei){const i=this.planes,n=e.elements,a=n[0],s=n[1],o=n[2],l=n[3],c=n[4],h=n[5],p=n[6],u=n[7],f=n[8],g=n[9],_=n[10],d=n[11],m=n[12],E=n[13],x=n[14],T=n[15];if(i[0].setComponents(l-a,u-c,d-f,T-m).normalize(),i[1].setComponents(l+a,u+c,d+f,T+m).normalize(),i[2].setComponents(l+s,u+h,d+g,T+E).normalize(),i[3].setComponents(l-s,u-h,d-g,T-E).normalize(),i[4].setComponents(l-o,u-p,d-_,T-x).normalize(),t===ei)i[5].setComponents(l+o,u+p,d+_,T+x).normalize();else if(t===ln)i[5].setComponents(o,p,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Rn.x=n.normal.x>0?e.max.x:e.min.x,Rn.y=n.normal.y>0?e.max.y:e.min.y,Rn.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Rn)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Io(){let r=null,e=!1,t=null,i=null;function n(a,s){t(a,s),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function jh(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,p=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const h=l.array,p=l._updateRange,u=l.updateRanges;if(r.bindBuffer(c,o),p.count===-1&&u.length===0&&r.bufferSubData(c,0,h),u.length!==0){for(let f=0,g=u.length;f<g;f++){const _=u[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}p.count!==-1&&(r.bufferSubData(c,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count),p.count=-1),l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:a,update:s}}class Ar extends Wt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,p=e/o,u=t/l,f=[],g=[],_=[],d=[];for(let m=0;m<h;m++){const E=m*u-s;for(let x=0;x<c;x++){const T=x*p-a;g.push(T,-E,0),_.push(0,0,1),d.push(x/o),d.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<o;E++){const x=E+c*m,T=E+c*(m+1),O=E+1+c*(m+1),C=E+1+c*m;f.push(x,T,C),f.push(T,O,C)}this.setIndex(f),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Kh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$h=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,iu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ru=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,au=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,su=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ou=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,gu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_u=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Su="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Tu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Au=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ru=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Du=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ou=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ku=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ju=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ku=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ju=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$u=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ed=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,td=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,id=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ad=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,od=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ld=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,md=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_d=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Md=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ed=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Td=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ad=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Cd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ld=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ud=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Od=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Id=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$d=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ep=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ap=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,op=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,up=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_p=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ep=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:Yh,alphahash_pars_fragment:qh,alphamap_fragment:Kh,alphamap_pars_fragment:Zh,alphatest_fragment:Jh,alphatest_pars_fragment:$h,aomap_fragment:Qh,aomap_pars_fragment:eu,batching_pars_vertex:tu,batching_vertex:iu,begin_vertex:ru,beginnormal_vertex:nu,bsdfs:au,iridescence_fragment:su,bumpmap_pars_fragment:ou,clipping_planes_fragment:lu,clipping_planes_pars_fragment:cu,clipping_planes_pars_vertex:hu,clipping_planes_vertex:uu,color_fragment:du,color_pars_fragment:pu,color_pars_vertex:mu,color_vertex:fu,common:gu,cube_uv_reflection_fragment:_u,defaultnormal_vertex:vu,displacementmap_pars_vertex:xu,displacementmap_vertex:Mu,emissivemap_fragment:bu,emissivemap_pars_fragment:yu,colorspace_fragment:Su,colorspace_pars_fragment:Eu,envmap_fragment:Tu,envmap_common_pars_fragment:wu,envmap_pars_fragment:Au,envmap_pars_vertex:Ru,envmap_physical_pars_fragment:zu,envmap_vertex:Cu,fog_vertex:Pu,fog_pars_vertex:Lu,fog_fragment:Uu,fog_pars_fragment:Du,gradientmap_pars_fragment:Ou,lightmap_pars_fragment:Nu,lights_lambert_fragment:Iu,lights_lambert_pars_fragment:Fu,lights_pars_begin:Bu,lights_toon_fragment:ku,lights_toon_pars_fragment:Hu,lights_phong_fragment:Vu,lights_phong_pars_fragment:Gu,lights_physical_fragment:Wu,lights_physical_pars_fragment:Xu,lights_fragment_begin:ju,lights_fragment_maps:Yu,lights_fragment_end:qu,logdepthbuf_fragment:Ku,logdepthbuf_pars_fragment:Zu,logdepthbuf_pars_vertex:Ju,logdepthbuf_vertex:$u,map_fragment:Qu,map_pars_fragment:ed,map_particle_fragment:td,map_particle_pars_fragment:id,metalnessmap_fragment:rd,metalnessmap_pars_fragment:nd,morphinstance_vertex:ad,morphcolor_vertex:sd,morphnormal_vertex:od,morphtarget_pars_vertex:ld,morphtarget_vertex:cd,normal_fragment_begin:hd,normal_fragment_maps:ud,normal_pars_fragment:dd,normal_pars_vertex:pd,normal_vertex:md,normalmap_pars_fragment:fd,clearcoat_normal_fragment_begin:gd,clearcoat_normal_fragment_maps:_d,clearcoat_pars_fragment:vd,iridescence_pars_fragment:xd,opaque_fragment:Md,packing:bd,premultiplied_alpha_fragment:yd,project_vertex:Sd,dithering_fragment:Ed,dithering_pars_fragment:Td,roughnessmap_fragment:wd,roughnessmap_pars_fragment:Ad,shadowmap_pars_fragment:Rd,shadowmap_pars_vertex:Cd,shadowmap_vertex:Pd,shadowmask_pars_fragment:Ld,skinbase_vertex:Ud,skinning_pars_vertex:Dd,skinning_vertex:Od,skinnormal_vertex:Nd,specularmap_fragment:Id,specularmap_pars_fragment:Fd,tonemapping_fragment:Bd,tonemapping_pars_fragment:zd,transmission_fragment:kd,transmission_pars_fragment:Hd,uv_pars_fragment:Vd,uv_pars_vertex:Gd,uv_vertex:Wd,worldpos_vertex:Xd,background_vert:jd,background_frag:Yd,backgroundCube_vert:qd,backgroundCube_frag:Kd,cube_vert:Zd,cube_frag:Jd,depth_vert:$d,depth_frag:Qd,distanceRGBA_vert:ep,distanceRGBA_frag:tp,equirect_vert:ip,equirect_frag:rp,linedashed_vert:np,linedashed_frag:ap,meshbasic_vert:sp,meshbasic_frag:op,meshlambert_vert:lp,meshlambert_frag:cp,meshmatcap_vert:hp,meshmatcap_frag:up,meshnormal_vert:dp,meshnormal_frag:pp,meshphong_vert:mp,meshphong_frag:fp,meshphysical_vert:gp,meshphysical_frag:_p,meshtoon_vert:vp,meshtoon_frag:xp,points_vert:Mp,points_frag:bp,shadow_vert:yp,shadow_frag:Sp,sprite_vert:Ep,sprite_frag:Tp},le={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},qt={basic:{uniforms:yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:yt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:yt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:yt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:yt([le.points,le.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:yt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:yt([le.common,le.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:yt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:yt([le.sprite,le.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:yt([le.common,le.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:yt([le.lights,le.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};qt.physical={uniforms:yt([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Cn={r:0,b:0,g:0},zi=new Zt,wp=new tt;function Ap(r,e,t,i,n,a,s){const o=new Ne(0);let l=a===!0?0:1,c,h,p=null,u=0,f=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?t:e).get(x)),x}function _(E){let x=!1;const T=g(E);T===null?m(o,l):T&&T.isColor&&(m(T,1),x=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,s):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(r.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function d(E,x){const T=g(x);T&&(T.isCubeTexture||T.mapping===en)?(h===void 0&&(h=new Tt(new Kr(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:_r(qt.backgroundCube.uniforms),vertexShader:qt.backgroundCube.vertexShader,fragmentShader:qt.backgroundCube.fragmentShader,side:Et,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),zi.copy(x.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wp.makeRotationFromEuler(zi)),h.material.toneMapped=qe.getTransfer(T.colorSpace)!==et,(p!==T||u!==T.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,p=T,u=T.version,f=r.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Tt(new Ar(2,2),new si({name:"BackgroundMaterial",uniforms:_r(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=qe.getTransfer(T.colorSpace)!==et,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||u!==T.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,p=T,u=T.version,f=r.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,x){E.getRGB(Cn,Lo(r)),i.buffers.color.setClear(Cn.r,Cn.g,Cn.b,x,s)}return{getClearColor:function(){return o},setClearColor:function(E,x=1){o.set(E),l=x,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,m(o,l)},render:_,addToRenderList:d}}function Rp(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=u(null);let a=n,s=!1;function o(b,P,G,V,K){let Z=!1;const X=p(V,G,P);a!==X&&(a=X,c(a.object)),Z=f(b,V,G,K),Z&&g(b,V,G,K),K!==null&&e.update(K,r.ELEMENT_ARRAY_BUFFER),(Z||s)&&(s=!1,T(b,P,G,V),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return r.createVertexArray()}function c(b){return r.bindVertexArray(b)}function h(b){return r.deleteVertexArray(b)}function p(b,P,G){const V=G.wireframe===!0;let K=i[b.id];K===void 0&&(K={},i[b.id]=K);let Z=K[P.id];Z===void 0&&(Z={},K[P.id]=Z);let X=Z[V];return X===void 0&&(X=u(l()),Z[V]=X),X}function u(b){const P=[],G=[],V=[];for(let K=0;K<t;K++)P[K]=0,G[K]=0,V[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:V,object:b,attributes:{},index:null}}function f(b,P,G,V){const K=a.attributes,Z=P.attributes;let X=0;const $=G.getAttributes();for(const W in $)if($[W].location>=0){const se=K[W];let ge=Z[W];if(ge===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(ge=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(ge=b.instanceColor)),se===void 0||se.attribute!==ge||ge&&se.data!==ge.data)return!0;X++}return a.attributesNum!==X||a.index!==V}function g(b,P,G,V){const K={},Z=P.attributes;let X=0;const $=G.getAttributes();for(const W in $)if($[W].location>=0){let se=Z[W];se===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(se=b.instanceColor));const ge={};ge.attribute=se,se&&se.data&&(ge.data=se.data),K[W]=ge,X++}a.attributes=K,a.attributesNum=X,a.index=V}function _(){const b=a.newAttributes;for(let P=0,G=b.length;P<G;P++)b[P]=0}function d(b){m(b,0)}function m(b,P){const G=a.newAttributes,V=a.enabledAttributes,K=a.attributeDivisors;G[b]=1,V[b]===0&&(r.enableVertexAttribArray(b),V[b]=1),K[b]!==P&&(r.vertexAttribDivisor(b,P),K[b]=P)}function E(){const b=a.newAttributes,P=a.enabledAttributes;for(let G=0,V=P.length;G<V;G++)P[G]!==b[G]&&(r.disableVertexAttribArray(G),P[G]=0)}function x(b,P,G,V,K,Z,X){X===!0?r.vertexAttribIPointer(b,P,G,K,Z):r.vertexAttribPointer(b,P,G,V,K,Z)}function T(b,P,G,V){_();const K=V.attributes,Z=G.getAttributes(),X=P.defaultAttributeValues;for(const $ in Z){const W=Z[$];if(W.location>=0){let se=K[$];if(se===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(se=b.instanceColor)),se!==void 0){const ge=se.normalized,Se=se.itemSize,Ve=e.get(se);if(Ve===void 0)continue;const je=Ve.buffer,j=Ve.type,ne=Ve.bytesPerElement,pe=j===r.INT||j===r.UNSIGNED_INT||se.gpuType===Ms;if(se.isInterleavedBufferAttribute){const he=se.data,Fe=he.stride,Ce=se.offset;if(he.isInstancedInterleavedBuffer){for(let Ge=0;Ge<W.locationSize;Ge++)m(W.location+Ge,he.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ge=0;Ge<W.locationSize;Ge++)d(W.location+Ge);r.bindBuffer(r.ARRAY_BUFFER,je);for(let Ge=0;Ge<W.locationSize;Ge++)x(W.location+Ge,Se/W.locationSize,j,ge,Fe*ne,(Ce+Se/W.locationSize*Ge)*ne,pe)}else{if(se.isInstancedBufferAttribute){for(let he=0;he<W.locationSize;he++)m(W.location+he,se.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let he=0;he<W.locationSize;he++)d(W.location+he);r.bindBuffer(r.ARRAY_BUFFER,je);for(let he=0;he<W.locationSize;he++)x(W.location+he,Se/W.locationSize,j,ge,Se*ne,Se/W.locationSize*he*ne,pe)}}else if(X!==void 0){const ge=X[$];if(ge!==void 0)switch(ge.length){case 2:r.vertexAttrib2fv(W.location,ge);break;case 3:r.vertexAttrib3fv(W.location,ge);break;case 4:r.vertexAttrib4fv(W.location,ge);break;default:r.vertexAttrib1fv(W.location,ge)}}}}E()}function O(){L();for(const b in i){const P=i[b];for(const G in P){const V=P[G];for(const K in V)h(V[K].object),delete V[K];delete P[G]}delete i[b]}}function C(b){if(i[b.id]===void 0)return;const P=i[b.id];for(const G in P){const V=P[G];for(const K in V)h(V[K].object),delete V[K];delete P[G]}delete i[b.id]}function R(b){for(const P in i){const G=i[P];if(G[b.id]===void 0)continue;const V=G[b.id];for(const K in V)h(V[K].object),delete V[K];delete G[b.id]}}function L(){y(),s=!0,a!==n&&(a=n,c(a.object))}function y(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:L,resetDefaultState:y,dispose:O,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:d,disableUnusedAttributes:E}}function Cp(r,e,t){let i;function n(c){i=c}function a(c,h){r.drawArrays(i,c,h),t.update(h,i,1)}function s(c,h,p){p!==0&&(r.drawArraysInstanced(i,c,h,p),t.update(h,i,p))}function o(c,h,p){if(p===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let f=0;f<p;f++)this.render(c[f],h[f]);else{u.multiDrawArraysWEBGL(i,c,0,h,0,p);let f=0;for(let g=0;g<p;g++)f+=h[g];t.update(f,i,1)}}function l(c,h,p,u){if(p===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)s(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,p);let g=0;for(let _=0;_<p;_++)g+=h[_];for(let _=0;_<u.length;_++)t.update(g,i,u[_])}}this.setMode=n,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Pp(r,e,t,i){let n;function a(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){return!(C!==jt&&i.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const R=C===Pr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==pi&&i.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==mi&&!R)}function l(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=t.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=f>0,O=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,maxTextures:u,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:d,maxVertexUniforms:m,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:T,maxSamples:O}}function Lp(r){const e=this;let t=null,i=0,n=!1,a=!1;const s=new oi,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const f=p.length!==0||u||i!==0||n;return n=u,i=p.length,f},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){t=h(p,u,0)},this.setState=function(p,u,f){const g=p.clippingPlanes,_=p.clipIntersection,d=p.clipShadows,m=r.get(p);if(!n||g===null||g.length===0||a&&!d)a?h(null):c();else{const E=a?0:i,x=E*4;let T=m.clippingState||null;l.value=T,T=h(g,u,x,f);for(let O=0;O!==x;++O)T[O]=t[O];m.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,u,f,g){const _=p!==null?p.length:0;let d=null;if(_!==0){if(d=l.value,g!==!0||d===null){const m=f+_*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(d===null||d.length<m)&&(d=new Float32Array(m));for(let x=0,T=f;x!==_;++x,T+=4)s.copy(p[x]).applyMatrix4(E,o),s.normal.toArray(d,T),d[T+3]=s.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,d}}function Up(r){let e=new WeakMap;function t(s,o){return o===ia?s.mapping=Pi:o===ra&&(s.mapping=Yi),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===ia||o===ra)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Gh(l.height);return c.fromEquirectangularTexture(r,s),e.set(s,c),s.addEventListener("dispose",n),t(c.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Pn extends Do{constructor(e=-1,t=1,i=1,n=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Mr=4,Fo=[.125,.215,.35,.446,.526,.582],ki=20,Na=new Pn,Bo=new Ne;let Ia=null,Fa=0,Ba=0,za=!1;const Hi=(1+Math.sqrt(5))/2,br=1/Hi,zo=[new D(-Hi,br,0),new D(Hi,br,0),new D(-br,0,Hi),new D(br,0,Hi),new D(0,Hi,-br),new D(0,Hi,br),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class ko{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Ia=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,n,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Go(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ia,Fa,Ba),this._renderer.xr.enabled=za,e.scissorTest=!1,Ln(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pi||e.mapping===Yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ia=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:Pr,format:jt,colorSpace:gi,depthBuffer:!1},n=Ho(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ho(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dp(a)),this._blurMaterial=Op(a,e,t)}return n}_compileMaterial(e){const t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,Na)}_sceneToCubeUV(e,t,i,n){const a=new wt(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Bo),l.toneMapping=di,l.autoClear=!1;const p=new So({name:"PMREM.Background",side:Et,depthWrite:!1,depthTest:!1}),u=new Tt(new Kr,p);let f=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,f=!0):(p.color.copy(Bo),f=!0);for(let _=0;_<6;_++){const d=_%3;d===0?(a.up.set(0,s[_],0),a.lookAt(o[_],0,0)):d===1?(a.up.set(0,0,s[_]),a.lookAt(0,o[_],0)):(a.up.set(0,s[_],0),a.lookAt(0,0,o[_]));const m=this._cubeSize;Ln(n,d*m,_>2?m:0,m,m),l.setRenderTarget(n),f&&l.render(u,a),l.render(e,a)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Pi||e.mapping===Yi;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Go()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vo());const a=n?this._cubemapMaterial:this._equirectMaterial,s=new Tt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Ln(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Na)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let a=1;a<n;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=zo[(n-a-1)%zo.length];this._blur(e,a-1,a,s,o)}t.autoClear=i}_blur(e,t,i,n,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,n,"latitudinal",a),this._halfBlur(s,e,i,i,n,"longitudinal",a)}_halfBlur(e,t,i,n,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new Tt(this._lodPlanes[n],c),u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*ki-1),_=a/g,d=isFinite(a)?1+Math.floor(h*_):ki;d>ki&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ki}`);const m=[];let E=0;for(let R=0;R<ki;++R){const L=R/_,y=Math.exp(-L*L/2);m.push(y),R===0?E+=y:R<d&&(E+=2*y)}for(let R=0;R<m.length;R++)m[R]=m[R]/E;u.envMap.value=e.texture,u.samples.value=d,u.weights.value=m,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-i;const T=this._sizeLods[n],O=3*T*(n>x-Mr?n-x+Mr:0),C=4*(this._cubeSize-T);Ln(t,O,C,3*T,2*T),l.setRenderTarget(t),l.render(p,Na)}}function Dp(r){const e=[],t=[],i=[];let n=r;const a=r-Mr+1+Fo.length;for(let s=0;s<a;s++){const o=Math.pow(2,n);t.push(o);let l=1/o;s>r-Mr?l=Fo[s-r+Mr-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,p=1+c,u=[h,h,p,h,p,p,h,h,p,p,h,p],f=6,g=6,_=3,d=2,m=1,E=new Float32Array(_*g*f),x=new Float32Array(d*g*f),T=new Float32Array(m*g*f);for(let C=0;C<f;C++){const R=C%3*2/3-1,L=C>2?0:-1,y=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];E.set(y,_*g*C),x.set(u,d*g*C);const b=[C,C,C,C,C,C];T.set(b,m*g*C)}const O=new Wt;O.setAttribute("position",new kt(E,_)),O.setAttribute("uv",new kt(x,d)),O.setAttribute("faceIndex",new kt(T,m)),e.push(O),n>Mr&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ho(r,e,t){const i=new _i(r,e,t);return i.texture.mapping=en,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ln(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function Op(r,e,t){const i=new Float32Array(ki),n=new D(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Vo(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Go(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function ka(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Np(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ia||l===ra,h=l===Pi||l===Yi;if(c||h){let p=e.get(o);const u=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new ko(r)),p=c?t.fromEquirectangular(o,p):t.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&n(f)?(t===null&&(t=new ko(r)),p=c?t.fromEquirectangular(o):t.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",a),p.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function Ip(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&so("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Fp(r,e,t,i){const n={},a=new WeakMap;function s(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let d=0,m=_.length;d<m;d++)e.remove(_[d])}u.removeEventListener("dispose",s),delete n[u.id];const f=a.get(u);f&&(e.remove(f),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(p,u){return n[u.id]===!0||(u.addEventListener("dispose",s),n[u.id]=!0,t.memory.geometries++),u}function l(p){const u=p.attributes;for(const g in u)e.update(u[g],r.ARRAY_BUFFER);const f=p.morphAttributes;for(const g in f){const _=f[g];for(let d=0,m=_.length;d<m;d++)e.update(_[d],r.ARRAY_BUFFER)}}function c(p){const u=[],f=p.index,g=p.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let x=0,T=E.length;x<T;x+=3){const O=E[x+0],C=E[x+1],R=E[x+2];u.push(O,C,C,R,R,O)}}else if(g!==void 0){const E=g.array;_=g.version;for(let x=0,T=E.length/3-1;x<T;x+=3){const O=x+0,C=x+1,R=x+2;u.push(O,C,C,R,R,O)}}else return;const d=new(no(u)?To:Eo)(u,1);d.version=_;const m=a.get(p);m&&e.remove(m),a.set(p,d)}function h(p){const u=a.get(p);if(u){const f=p.index;f!==null&&u.version<f.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function Bp(r,e,t){let i;function n(u){i=u}let a,s;function o(u){a=u.type,s=u.bytesPerElement}function l(u,f){r.drawElements(i,f,a,u*s),t.update(f,i,1)}function c(u,f,g){g!==0&&(r.drawElementsInstanced(i,f,a,u*s,g),t.update(f,i,g))}function h(u,f,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let d=0;d<g;d++)this.render(u[d]/s,f[d]);else{_.multiDrawElementsWEBGL(i,f,0,a,u,0,g);let d=0;for(let m=0;m<g;m++)d+=f[m];t.update(d,i,1)}}function p(u,f,g,_){if(g===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<u.length;m++)c(u[m]/s,f[m],_[m]);else{d.multiDrawElementsInstancedWEBGL(i,f,0,a,u,0,_,0,g);let m=0;for(let E=0;E<g;E++)m+=f[E];for(let E=0;E<_.length;E++)t.update(m,i,_[E])}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function zp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case r.TRIANGLES:t.triangles+=o*(a/3);break;case r.LINES:t.lines+=o*(a/2);break;case r.LINE_STRIP:t.lines+=o*(a-1);break;case r.LINE_LOOP:t.lines+=o*a;break;case r.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function kp(r,e,t){const i=new WeakMap,n=new Qe;function a(s,o,l){const c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==p){let g=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",g)};var f=g;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,d=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,E=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let O=0;_===!0&&(O=1),d===!0&&(O=2),m===!0&&(O=3);let C=o.attributes.position.count*O,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const L=new Float32Array(C*R*4*p),y=new ho(L,C,R,p);y.type=mi,y.needsUpdate=!0;const b=O*4;for(let P=0;P<p;P++){const G=E[P],V=x[P],K=T[P],Z=C*R*4*P;for(let X=0;X<G.count;X++){const $=X*b;_===!0&&(n.fromBufferAttribute(G,X),L[Z+$+0]=n.x,L[Z+$+1]=n.y,L[Z+$+2]=n.z,L[Z+$+3]=0),d===!0&&(n.fromBufferAttribute(V,X),L[Z+$+4]=n.x,L[Z+$+5]=n.y,L[Z+$+6]=n.z,L[Z+$+7]=0),m===!0&&(n.fromBufferAttribute(K,X),L[Z+$+8]=n.x,L[Z+$+9]=n.y,L[Z+$+10]=n.z,L[Z+$+11]=K.itemSize===4?n.w:1)}}u={count:p,texture:y,size:new Ae(C,R)},i.set(o,u),o.addEventListener("dispose",g)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let g=0;for(let d=0;d<c.length;d++)g+=c[d];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:a}}function Hp(r,e,t,i){let n=new WeakMap;function a(l){const c=i.render.frame,h=l.geometry,p=e.get(l,h);if(n.get(p)!==c&&(e.update(p),n.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;n.get(u)!==c&&(u.update(),n.set(u,c))}return p}function s(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}class Wo extends At{constructor(e,t,i,n,a,s,o,l,c,h=Zi){if(h!==Zi&&h!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Zi&&(i=qi),i===void 0&&h===Ji&&(i=Ki),super(null,n,a,s,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Xo=new At,jo=new Wo(1,1);jo.compareFunction=eo;const Yo=new ho,qo=new Rh,Ko=new Ua,Zo=[],Jo=[],$o=new Float32Array(16),Qo=new Float32Array(9),el=new Float32Array(4);function yr(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let a=Zo[n];if(a===void 0&&(a=new Float32Array(n),Zo[n]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,r[s].toArray(a,o)}return a}function ut(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function dt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Un(r,e){let t=Jo[e];t===void 0&&(t=new Int32Array(e),Jo[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Vp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Gp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;r.uniform2fv(this.addr,e),dt(t,e)}}function Wp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;r.uniform3fv(this.addr,e),dt(t,e)}}function Xp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;r.uniform4fv(this.addr,e),dt(t,e)}}function jp(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,i))return;el.set(i),r.uniformMatrix2fv(this.addr,!1,el),dt(t,i)}}function Yp(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,i))return;Qo.set(i),r.uniformMatrix3fv(this.addr,!1,Qo),dt(t,i)}}function qp(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,i))return;$o.set(i),r.uniformMatrix4fv(this.addr,!1,$o),dt(t,i)}}function Kp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Zp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;r.uniform2iv(this.addr,e),dt(t,e)}}function Jp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;r.uniform3iv(this.addr,e),dt(t,e)}}function $p(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;r.uniform4iv(this.addr,e),dt(t,e)}}function Qp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function em(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;r.uniform2uiv(this.addr,e),dt(t,e)}}function tm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;r.uniform3uiv(this.addr,e),dt(t,e)}}function im(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;r.uniform4uiv(this.addr,e),dt(t,e)}}function rm(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);const a=this.type===r.SAMPLER_2D_SHADOW?jo:Xo;t.setTexture2D(e||a,n)}function nm(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||qo,n)}function am(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Ko,n)}function sm(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Yo,n)}function om(r){switch(r){case 5126:return Vp;case 35664:return Gp;case 35665:return Wp;case 35666:return Xp;case 35674:return jp;case 35675:return Yp;case 35676:return qp;case 5124:case 35670:return Kp;case 35667:case 35671:return Zp;case 35668:case 35672:return Jp;case 35669:case 35673:return $p;case 5125:return Qp;case 36294:return em;case 36295:return tm;case 36296:return im;case 35678:case 36198:case 36298:case 36306:case 35682:return rm;case 35679:case 36299:case 36307:return nm;case 35680:case 36300:case 36308:case 36293:return am;case 36289:case 36303:case 36311:case 36292:return sm}}function lm(r,e){r.uniform1fv(this.addr,e)}function cm(r,e){const t=yr(e,this.size,2);r.uniform2fv(this.addr,t)}function hm(r,e){const t=yr(e,this.size,3);r.uniform3fv(this.addr,t)}function um(r,e){const t=yr(e,this.size,4);r.uniform4fv(this.addr,t)}function dm(r,e){const t=yr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function pm(r,e){const t=yr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function mm(r,e){const t=yr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function fm(r,e){r.uniform1iv(this.addr,e)}function gm(r,e){r.uniform2iv(this.addr,e)}function _m(r,e){r.uniform3iv(this.addr,e)}function vm(r,e){r.uniform4iv(this.addr,e)}function xm(r,e){r.uniform1uiv(this.addr,e)}function Mm(r,e){r.uniform2uiv(this.addr,e)}function bm(r,e){r.uniform3uiv(this.addr,e)}function ym(r,e){r.uniform4uiv(this.addr,e)}function Sm(r,e,t){const i=this.cache,n=e.length,a=Un(t,n);ut(i,a)||(r.uniform1iv(this.addr,a),dt(i,a));for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Xo,a[s])}function Em(r,e,t){const i=this.cache,n=e.length,a=Un(t,n);ut(i,a)||(r.uniform1iv(this.addr,a),dt(i,a));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||qo,a[s])}function Tm(r,e,t){const i=this.cache,n=e.length,a=Un(t,n);ut(i,a)||(r.uniform1iv(this.addr,a),dt(i,a));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Ko,a[s])}function wm(r,e,t){const i=this.cache,n=e.length,a=Un(t,n);ut(i,a)||(r.uniform1iv(this.addr,a),dt(i,a));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Yo,a[s])}function Am(r){switch(r){case 5126:return lm;case 35664:return cm;case 35665:return hm;case 35666:return um;case 35674:return dm;case 35675:return pm;case 35676:return mm;case 5124:case 35670:return fm;case 35667:case 35671:return gm;case 35668:case 35672:return _m;case 35669:case 35673:return vm;case 5125:return xm;case 36294:return Mm;case 36295:return bm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Sm;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return Tm;case 36289:case 36303:case 36311:case 36292:return wm}}class Rm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=om(t.type)}}class Cm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Am(t.type)}}class Pm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let a=0,s=n.length;a!==s;++a){const o=n[a];o.setValue(e,t[o.id],i)}}}const Ha=/(\w+)(\])?(\[|\.)?/g;function tl(r,e){r.seq.push(e),r.map[e.id]=e}function Lm(r,e,t){const i=r.name,n=i.length;for(Ha.lastIndex=0;;){const a=Ha.exec(i),s=Ha.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===n){tl(t,c===void 0?new Rm(o,r,e):new Cm(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new Pm(o),tl(t,h)),t=h}}}class Dn{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=e.getActiveUniform(t,n),s=e.getUniformLocation(t,a.name);Lm(a,s,this)}}setValue(e,t,i,n){const a=this.map[t];a!==void 0&&a.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,a=e.length;n!==a;++n){const s=e[n];s.id in t&&i.push(s)}return i}}function il(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const Um=37297;let Dm=0;function Om(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=n;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}function Nm(r){const e=qe.getPrimaries(qe.workingColorSpace),t=qe.getPrimaries(r);let i;switch(e===t?i="":e===on&&t===sn?i="LinearDisplayP3ToLinearSRGB":e===sn&&t===on&&(i="LinearSRGBToLinearDisplayP3"),r){case gi:case nn:return[i,"LinearTransferOETF"];case It:case da:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function rl(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+Om(r.getShaderSource(e),s)}else return n}function Im(r,e){const t=Nm(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Fm(r,e){let t;switch(e){case Lc:t="Linear";break;case Uc:t="Reinhard";break;case Dc:t="OptimizedCineon";break;case vs:t="ACESFilmic";break;case Nc:t="AgX";break;case Ic:t="Neutral";break;case Oc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Bm(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function zm(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function km(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=r.getActiveAttrib(e,n),s=a.name;let o=1;a.type===r.FLOAT_MAT2&&(o=2),a.type===r.FLOAT_MAT3&&(o=3),a.type===r.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:r.getAttribLocation(e,s),locationSize:o}}return t}function zr(r){return r!==""}function nl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function al(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Va(r){return r.replace(Hm,Gm)}const Vm=new Map;function Gm(r,e){let t=Ie[e];if(t===void 0){const i=Vm.get(e);if(i!==void 0)t=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Va(t)}const Wm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sl(r){return r.replace(Wm,Xm)}function Xm(r,e,t,i){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function ol(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jm(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ms?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===rc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===$t&&(e="SHADOWMAP_TYPE_VSM"),e}function Ym(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Pi:case Yi:e="ENVMAP_TYPE_CUBE";break;case en:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qm(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Yi:e="ENVMAP_MODE_REFRACTION";break}return e}function Km(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ta:e="ENVMAP_BLENDING_MULTIPLY";break;case Cc:e="ENVMAP_BLENDING_MIX";break;case Pc:e="ENVMAP_BLENDING_ADD";break}return e}function Zm(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Jm(r,e,t,i){const n=r.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=jm(t),c=Ym(t),h=qm(t),p=Km(t),u=Zm(t),f=Bm(t),g=zm(a),_=n.createProgram();let d,m,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zr).join(`
`),d.length>0&&(d+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zr).join(`
`),m.length>0&&(m+=`
`)):(d=[ol(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),m=[ol(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?Ie.tonemapping_pars_fragment:"",t.toneMapping!==di?Fm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,Im("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zr).join(`
`)),s=Va(s),s=nl(s,t),s=al(s,t),o=Va(o),o=nl(o,t),o=al(o,t),s=sl(s),o=sl(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,d=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["#define varying in",t.glslVersion===io?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===io?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=E+d+s,T=E+m+o,O=il(n,n.VERTEX_SHADER,x),C=il(n,n.FRAGMENT_SHADER,T);n.attachShader(_,O),n.attachShader(_,C),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function R(P){if(r.debug.checkShaderErrors){const G=n.getProgramInfoLog(_).trim(),V=n.getShaderInfoLog(O).trim(),K=n.getShaderInfoLog(C).trim();let Z=!0,X=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,_,O,C);else{const $=rl(n,O,"vertex"),W=rl(n,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+$+`
`+W)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(V===""||K==="")&&(X=!1);X&&(P.diagnostics={runnable:Z,programLog:G,vertexShader:{log:V,prefix:d},fragmentShader:{log:K,prefix:m}})}n.deleteShader(O),n.deleteShader(C),L=new Dn(n,_),y=km(n,_)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=n.getProgramParameter(_,Um)),b},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=C,this}let $m=0;class Qm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ef(e),t.set(e,i)),i}}class ef{constructor(e){this.id=$m++,this.code=e,this.usedTimes=0}}function tf(r,e,t,i,n,a,s){const o=new fo,l=new Qm,c=new Set,h=[],p=n.logarithmicDepthBuffer,u=n.vertexTextures;let f=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function d(y,b,P,G,V){const K=G.fog,Z=V.geometry,X=y.isMeshStandardMaterial?G.environment:null,$=(y.isMeshStandardMaterial?t:e).get(y.envMap||X),W=$&&$.mapping===en?$.image.height:null,se=g[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const ge=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Se=ge!==void 0?ge.length:0;let Ve=0;Z.morphAttributes.position!==void 0&&(Ve=1),Z.morphAttributes.normal!==void 0&&(Ve=2),Z.morphAttributes.color!==void 0&&(Ve=3);let je,j,ne,pe;if(se){const ke=qt[se];je=ke.vertexShader,j=ke.fragmentShader}else je=y.vertexShader,j=y.fragmentShader,l.update(y),ne=l.getVertexShaderID(y),pe=l.getFragmentShaderID(y);const he=r.getRenderTarget(),Fe=V.isInstancedMesh===!0,Ce=V.isBatchedMesh===!0,Ge=!!y.map,U=!!y.matcap,We=!!$,He=!!y.aoMap,Ze=!!y.lightMap,be=!!y.bumpMap,Xe=!!y.normalMap,Be=!!y.displacementMap,Pe=!!y.emissiveMap,rt=!!y.metalnessMap,w=!!y.roughnessMap,v=y.anisotropy>0,H=y.clearcoat>0,Q=y.dispersion>0,te=y.iridescence>0,ee=y.sheen>0,xe=y.transmission>0,oe=v&&!!y.anisotropyMap,ce=H&&!!y.clearcoatMap,Re=H&&!!y.clearcoatNormalMap,ae=H&&!!y.clearcoatRoughnessMap,ve=te&&!!y.iridescenceMap,ze=te&&!!y.iridescenceThicknessMap,Te=ee&&!!y.sheenColorMap,ue=ee&&!!y.sheenRoughnessMap,Le=!!y.specularMap,Ue=!!y.specularColorMap,A=!!y.specularIntensityMap,S=xe&&!!y.transmissionMap,J=xe&&!!y.thicknessMap,z=!!y.gradientMap,Y=!!y.alphaMap,ie=y.alphaTest>0,fe=!!y.alphaHash,Je=!!y.extensions;let it=di;y.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(it=r.toneMapping);const Ke={shaderID:se,shaderType:y.type,shaderName:y.name,vertexShader:je,fragmentShader:j,defines:y.defines,customVertexShaderID:ne,customFragmentShaderID:pe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ce,batchingColor:Ce&&V._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&V.instanceColor!==null,instancingMorph:Fe&&V.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:he===null?r.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:gi,alphaToCoverage:!!y.alphaToCoverage,map:Ge,matcap:U,envMap:We,envMapMode:We&&$.mapping,envMapCubeUVHeight:W,aoMap:He,lightMap:Ze,bumpMap:be,normalMap:Xe,displacementMap:u&&Be,emissiveMap:Pe,normalMapObjectSpace:Xe&&y.normalMapType===Zc,normalMapTangentSpace:Xe&&y.normalMapType===$s,metalnessMap:rt,roughnessMap:w,anisotropy:v,anisotropyMap:oe,clearcoat:H,clearcoatMap:ce,clearcoatNormalMap:Re,clearcoatRoughnessMap:ae,dispersion:Q,iridescence:te,iridescenceMap:ve,iridescenceThicknessMap:ze,sheen:ee,sheenColorMap:Te,sheenRoughnessMap:ue,specularMap:Le,specularColorMap:Ue,specularIntensityMap:A,transmission:xe,transmissionMap:S,thicknessMap:J,gradientMap:z,opaque:y.transparent===!1&&y.blending===ji&&y.alphaToCoverage===!1,alphaMap:Y,alphaTest:ie,alphaHash:fe,combine:y.combine,mapUv:Ge&&_(y.map.channel),aoMapUv:He&&_(y.aoMap.channel),lightMapUv:Ze&&_(y.lightMap.channel),bumpMapUv:be&&_(y.bumpMap.channel),normalMapUv:Xe&&_(y.normalMap.channel),displacementMapUv:Be&&_(y.displacementMap.channel),emissiveMapUv:Pe&&_(y.emissiveMap.channel),metalnessMapUv:rt&&_(y.metalnessMap.channel),roughnessMapUv:w&&_(y.roughnessMap.channel),anisotropyMapUv:oe&&_(y.anisotropyMap.channel),clearcoatMapUv:ce&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Re&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:ue&&_(y.sheenRoughnessMap.channel),specularMapUv:Le&&_(y.specularMap.channel),specularColorMapUv:Ue&&_(y.specularColorMap.channel),specularIntensityMapUv:A&&_(y.specularIntensityMap.channel),transmissionMapUv:S&&_(y.transmissionMap.channel),thicknessMapUv:J&&_(y.thicknessMap.channel),alphaMapUv:Y&&_(y.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Xe||v),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Z.attributes.uv&&(Ge||Y),fog:!!K,useFog:y.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:V.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ve,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:it,decodeVideoTexture:Ge&&y.map.isVideoTexture===!0&&qe.getTransfer(y.map.colorSpace)===et,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Qt,flipSided:y.side===Et,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Je&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Je&&y.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function m(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)b.push(P),b.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(E(b,y),x(b,y),b.push(r.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function E(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function x(y,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.doubleSided&&o.enable(10),b.flipSided&&o.enable(11),b.useDepthPacking&&o.enable(12),b.dithering&&o.enable(13),b.transmission&&o.enable(14),b.sheen&&o.enable(15),b.opaque&&o.enable(16),b.pointsUvs&&o.enable(17),b.decodeVideoTexture&&o.enable(18),b.alphaToCoverage&&o.enable(19),y.push(o.mask)}function T(y){const b=g[y.type];let P;if(b){const G=qt[b];P=Uo.clone(G.uniforms)}else P=y.uniforms;return P}function O(y,b){let P;for(let G=0,V=h.length;G<V;G++){const K=h[G];if(K.cacheKey===b){P=K,++P.usedTimes;break}}return P===void 0&&(P=new Jm(r,b,y,a),h.push(P)),P}function C(y){if(--y.usedTimes===0){const b=h.indexOf(y);h[b]=h[h.length-1],h.pop(),y.destroy()}}function R(y){l.remove(y)}function L(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:T,acquireProgram:O,releaseProgram:C,releaseShaderCache:R,programs:h,dispose:L}}function rf(){let r=new WeakMap;function e(a){let s=r.get(a);return s===void 0&&(s={},r.set(a,s)),s}function t(a){r.delete(a)}function i(a,s,o){r.get(a)[s]=o}function n(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function nf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ll(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function cl(){const r=[];let e=0;const t=[],i=[],n=[];function a(){e=0,t.length=0,i.length=0,n.length=0}function s(p,u,f,g,_,d){let m=r[e];return m===void 0?(m={id:p.id,object:p,geometry:u,material:f,groupOrder:g,renderOrder:p.renderOrder,z:_,group:d},r[e]=m):(m.id=p.id,m.object=p,m.geometry=u,m.material=f,m.groupOrder=g,m.renderOrder=p.renderOrder,m.z=_,m.group=d),e++,m}function o(p,u,f,g,_,d){const m=s(p,u,f,g,_,d);f.transmission>0?i.push(m):f.transparent===!0?n.push(m):t.push(m)}function l(p,u,f,g,_,d){const m=s(p,u,f,g,_,d);f.transmission>0?i.unshift(m):f.transparent===!0?n.unshift(m):t.unshift(m)}function c(p,u){t.length>1&&t.sort(p||nf),i.length>1&&i.sort(u||ll),n.length>1&&n.sort(u||ll)}function h(){for(let p=e,u=r.length;p<u;p++){const f=r[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:a,push:o,unshift:l,finish:h,sort:c}}function af(){let r=new WeakMap;function e(i,n){const a=r.get(i);let s;return a===void 0?(s=new cl,r.set(i,[s])):n>=a.length?(s=new cl,a.push(s)):s=a[n],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function sf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ne};break;case"SpotLight":t={position:new D,direction:new D,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function of(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let lf=0;function cf(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function hf(r){const e=new sf,t=of(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const n=new D,a=new tt,s=new tt;function o(c){let h=0,p=0,u=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let f=0,g=0,_=0,d=0,m=0,E=0,x=0,T=0,O=0,C=0,R=0;c.sort(cf);for(let y=0,b=c.length;y<b;y++){const P=c[y],G=P.color,V=P.intensity,K=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=G.r*V,p+=G.g*V,u+=G.b*V;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],V);R++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,W=t.get(P);W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.directionalShadow[f]=W,i.directionalShadowMap[f]=Z,i.directionalShadowMatrix[f]=P.shadow.matrix,E++}i.directional[f]=X,f++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(G).multiplyScalar(V),X.distance=K,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[_]=X;const $=P.shadow;if(P.map&&(i.spotLightMap[O]=P.map,O++,$.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[_]=$.matrix,P.castShadow){const W=t.get(P);W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=Z,T++}_++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(G).multiplyScalar(V),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[d]=X,d++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const $=P.shadow,W=t.get(P);W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=P.shadow.matrix,x++}i.point[g]=X,g++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(V),X.groundColor.copy(P.groundColor).multiplyScalar(V),i.hemi[m]=X,m++}}d>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;const L=i.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==d||L.hemiLength!==m||L.numDirectionalShadows!==E||L.numPointShadows!==x||L.numSpotShadows!==T||L.numSpotMaps!==O||L.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=d,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=T+O-C,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=d,L.hemiLength=m,L.numDirectionalShadows=E,L.numPointShadows=x,L.numSpotShadows=T,L.numSpotMaps=O,L.numLightProbes=R,i.version=lf++)}function l(c,h){let p=0,u=0,f=0,g=0,_=0;const d=h.matrixWorldInverse;for(let m=0,E=c.length;m<E;m++){const x=c[m];if(x.isDirectionalLight){const T=i.directional[p];T.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(d),p++}else if(x.isSpotLight){const T=i.spot[f];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(d),f++}else if(x.isRectAreaLight){const T=i.rectArea[g];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(d),s.identity(),a.copy(x.matrixWorld),a.premultiply(d),s.extractRotation(a),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(s),T.halfHeight.applyMatrix4(s),g++}else if(x.isPointLight){const T=i.point[u];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(d),u++}else if(x.isHemisphereLight){const T=i.hemi[_];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(d),_++}}}return{setup:o,setupView:l,state:i}}function hl(r){const e=new hf(r),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function a(h){t.push(h)}function s(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function uf(r){let e=new WeakMap;function t(n,a=0){const s=e.get(n);let o;return s===void 0?(o=new hl(r),e.set(n,[o])):a>=s.length?(o=new hl(r),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class df extends dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pf extends dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ff=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gf(r,e,t){let i=new Oa;const n=new Ae,a=new Ae,s=new Qe,o=new df({depthPacking:Kc}),l=new pf,c={},h=t.maxTextureSize,p={[hi]:Et,[Et]:hi,[Qt]:Qt},u=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:mf,fragmentShader:ff}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Wt;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Tt(g,u),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ms;let m=this.type;this.render=function(C,R,L){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||C.length===0)return;const y=r.getRenderTarget(),b=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),G=r.state;G.setBlending(ui),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const V=m!==$t&&this.type===$t,K=m===$t&&this.type!==$t;for(let Z=0,X=C.length;Z<X;Z++){const $=C[Z],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);const se=W.getFrameExtents();if(n.multiply(se),a.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/se.x),n.x=a.x*se.x,W.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/se.y),n.y=a.y*se.y,W.mapSize.y=a.y)),W.map===null||V===!0||K===!0){const Se=this.type!==$t?{minFilter:Dt,magFilter:Dt}:{};W.map!==null&&W.map.dispose(),W.map=new _i(n.x,n.y,Se),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const ge=W.getViewportCount();for(let Se=0;Se<ge;Se++){const Ve=W.getViewport(Se);s.set(a.x*Ve.x,a.y*Ve.y,a.x*Ve.z,a.y*Ve.w),G.viewport(s),W.updateMatrices($,Se),i=W.getFrustum(),T(R,L,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===$t&&E(W,L),W.needsUpdate=!1}m=this.type,d.needsUpdate=!1,r.setRenderTarget(y,b,P)};function E(C,R){const L=e.update(_);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new _i(n.x,n.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(R,null,L,u,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(R,null,L,f,_,null)}function x(C,R,L,y){let b=null;const P=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)b=P;else if(b=L.isPointLight===!0?l:o,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const G=b.uuid,V=R.uuid;let K=c[G];K===void 0&&(K={},c[G]=K);let Z=K[V];Z===void 0&&(Z=b.clone(),K[V]=Z,R.addEventListener("dispose",O)),b=Z}if(b.visible=R.visible,b.wireframe=R.wireframe,y===$t?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:p[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const G=r.properties.get(b);G.light=L}return b}function T(C,R,L,y,b){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===$t)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const G=e.update(C),V=C.material;if(Array.isArray(V)){const K=G.groups;for(let Z=0,X=K.length;Z<X;Z++){const $=K[Z],W=V[$.materialIndex];if(W&&W.visible){const se=x(C,W,y,b);C.onBeforeShadow(r,C,R,L,G,se,$),r.renderBufferDirect(L,null,G,se,C,$),C.onAfterShadow(r,C,R,L,G,se,$)}}}else if(V.visible){const K=x(C,V,y,b);C.onBeforeShadow(r,C,R,L,G,K,null),r.renderBufferDirect(L,null,G,K,C,null),C.onAfterShadow(r,C,R,L,G,K,null)}}const P=C.children;for(let G=0,V=P.length;G<V;G++)T(P[G],R,L,y,b)}function O(C){C.target.removeEventListener("dispose",O);for(const R in c){const L=c[R],y=C.target.uuid;y in L&&(L[y].dispose(),delete L[y])}}}function _f(r){function e(){let S=!1;const J=new Qe;let z=null;const Y=new Qe(0,0,0,0);return{setMask:function(ie){z!==ie&&!S&&(r.colorMask(ie,ie,ie,ie),z=ie)},setLocked:function(ie){S=ie},setClear:function(ie,fe,Je,it,Ke){Ke===!0&&(ie*=it,fe*=it,Je*=it),J.set(ie,fe,Je,it),Y.equals(J)===!1&&(r.clearColor(ie,fe,Je,it),Y.copy(J))},reset:function(){S=!1,z=null,Y.set(-1,0,0,0)}}}function t(){let S=!1,J=null,z=null,Y=null;return{setTest:function(ie){ie?pe(r.DEPTH_TEST):he(r.DEPTH_TEST)},setMask:function(ie){J!==ie&&!S&&(r.depthMask(ie),J=ie)},setFunc:function(ie){if(z!==ie){switch(ie){case yc:r.depthFunc(r.NEVER);break;case Sc:r.depthFunc(r.ALWAYS);break;case Ec:r.depthFunc(r.LESS);break;case Qr:r.depthFunc(r.LEQUAL);break;case Tc:r.depthFunc(r.EQUAL);break;case wc:r.depthFunc(r.GEQUAL);break;case Ac:r.depthFunc(r.GREATER);break;case Rc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}z=ie}},setLocked:function(ie){S=ie},setClear:function(ie){Y!==ie&&(r.clearDepth(ie),Y=ie)},reset:function(){S=!1,J=null,z=null,Y=null}}}function i(){let S=!1,J=null,z=null,Y=null,ie=null,fe=null,Je=null,it=null,Ke=null;return{setTest:function(ke){S||(ke?pe(r.STENCIL_TEST):he(r.STENCIL_TEST))},setMask:function(ke){J!==ke&&!S&&(r.stencilMask(ke),J=ke)},setFunc:function(ke,gt,ot){(z!==ke||Y!==gt||ie!==ot)&&(r.stencilFunc(ke,gt,ot),z=ke,Y=gt,ie=ot)},setOp:function(ke,gt,ot){(fe!==ke||Je!==gt||it!==ot)&&(r.stencilOp(ke,gt,ot),fe=ke,Je=gt,it=ot)},setLocked:function(ke){S=ke},setClear:function(ke){Ke!==ke&&(r.clearStencil(ke),Ke=ke)},reset:function(){S=!1,J=null,z=null,Y=null,ie=null,fe=null,Je=null,it=null,Ke=null}}}const n=new e,a=new t,s=new i,o=new WeakMap,l=new WeakMap;let c={},h={},p=new WeakMap,u=[],f=null,g=!1,_=null,d=null,m=null,E=null,x=null,T=null,O=null,C=new Ne(0,0,0),R=0,L=!1,y=null,b=null,P=null,G=null,V=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,X=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec($)[1]),Z=X>=1):$.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Z=X>=2);let W=null,se={};const ge=r.getParameter(r.SCISSOR_BOX),Se=r.getParameter(r.VIEWPORT),Ve=new Qe().fromArray(ge),je=new Qe().fromArray(Se);function j(S,J,z,Y){const ie=new Uint8Array(4),fe=r.createTexture();r.bindTexture(S,fe),r.texParameteri(S,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(S,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Je=0;Je<z;Je++)S===r.TEXTURE_3D||S===r.TEXTURE_2D_ARRAY?r.texImage3D(J,0,r.RGBA,1,1,Y,0,r.RGBA,r.UNSIGNED_BYTE,ie):r.texImage2D(J+Je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ie);return fe}const ne={};ne[r.TEXTURE_2D]=j(r.TEXTURE_2D,r.TEXTURE_2D,1),ne[r.TEXTURE_CUBE_MAP]=j(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[r.TEXTURE_2D_ARRAY]=j(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ne[r.TEXTURE_3D]=j(r.TEXTURE_3D,r.TEXTURE_3D,1,1),n.setClear(0,0,0,1),a.setClear(1),s.setClear(0),pe(r.DEPTH_TEST),a.setFunc(Qr),be(!1),Xe(ps),pe(r.CULL_FACE),He(ui);function pe(S){c[S]!==!0&&(r.enable(S),c[S]=!0)}function he(S){c[S]!==!1&&(r.disable(S),c[S]=!1)}function Fe(S,J){return h[S]!==J?(r.bindFramebuffer(S,J),h[S]=J,S===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=J),S===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=J),!0):!1}function Ce(S,J){let z=u,Y=!1;if(S){z=p.get(J),z===void 0&&(z=[],p.set(J,z));const ie=S.textures;if(z.length!==ie.length||z[0]!==r.COLOR_ATTACHMENT0){for(let fe=0,Je=ie.length;fe<Je;fe++)z[fe]=r.COLOR_ATTACHMENT0+fe;z.length=ie.length,Y=!0}}else z[0]!==r.BACK&&(z[0]=r.BACK,Y=!0);Y&&r.drawBuffers(z)}function Ge(S){return f!==S?(r.useProgram(S),f=S,!0):!1}const U={[Ci]:r.FUNC_ADD,[ac]:r.FUNC_SUBTRACT,[sc]:r.FUNC_REVERSE_SUBTRACT};U[oc]=r.MIN,U[lc]=r.MAX;const We={[cc]:r.ZERO,[hc]:r.ONE,[uc]:r.SRC_COLOR,[Qn]:r.SRC_ALPHA,[_c]:r.SRC_ALPHA_SATURATE,[fc]:r.DST_COLOR,[pc]:r.DST_ALPHA,[dc]:r.ONE_MINUS_SRC_COLOR,[ea]:r.ONE_MINUS_SRC_ALPHA,[gc]:r.ONE_MINUS_DST_COLOR,[mc]:r.ONE_MINUS_DST_ALPHA,[vc]:r.CONSTANT_COLOR,[xc]:r.ONE_MINUS_CONSTANT_COLOR,[Mc]:r.CONSTANT_ALPHA,[bc]:r.ONE_MINUS_CONSTANT_ALPHA};function He(S,J,z,Y,ie,fe,Je,it,Ke,ke){if(S===ui){g===!0&&(he(r.BLEND),g=!1);return}if(g===!1&&(pe(r.BLEND),g=!0),S!==nc){if(S!==_||ke!==L){if((d!==Ci||x!==Ci)&&(r.blendEquation(r.FUNC_ADD),d=Ci,x=Ci),ke)switch(S){case ji:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case fs:r.blendFunc(r.ONE,r.ONE);break;case gs:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _s:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case ji:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case fs:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case gs:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _s:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}m=null,E=null,T=null,O=null,C.set(0,0,0),R=0,_=S,L=ke}return}ie=ie||J,fe=fe||z,Je=Je||Y,(J!==d||ie!==x)&&(r.blendEquationSeparate(U[J],U[ie]),d=J,x=ie),(z!==m||Y!==E||fe!==T||Je!==O)&&(r.blendFuncSeparate(We[z],We[Y],We[fe],We[Je]),m=z,E=Y,T=fe,O=Je),(it.equals(C)===!1||Ke!==R)&&(r.blendColor(it.r,it.g,it.b,Ke),C.copy(it),R=Ke),_=S,L=!1}function Ze(S,J){S.side===Qt?he(r.CULL_FACE):pe(r.CULL_FACE);let z=S.side===Et;J&&(z=!z),be(z),S.blending===ji&&S.transparent===!1?He(ui):He(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),a.setFunc(S.depthFunc),a.setTest(S.depthTest),a.setMask(S.depthWrite),n.setMask(S.colorWrite);const Y=S.stencilWrite;s.setTest(Y),Y&&(s.setMask(S.stencilWriteMask),s.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),s.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),Pe(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?pe(r.SAMPLE_ALPHA_TO_COVERAGE):he(r.SAMPLE_ALPHA_TO_COVERAGE)}function be(S){y!==S&&(S?r.frontFace(r.CW):r.frontFace(r.CCW),y=S)}function Xe(S){S!==tc?(pe(r.CULL_FACE),S!==b&&(S===ps?r.cullFace(r.BACK):S===ic?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):he(r.CULL_FACE),b=S}function Be(S){S!==P&&(Z&&r.lineWidth(S),P=S)}function Pe(S,J,z){S?(pe(r.POLYGON_OFFSET_FILL),(G!==J||V!==z)&&(r.polygonOffset(J,z),G=J,V=z)):he(r.POLYGON_OFFSET_FILL)}function rt(S){S?pe(r.SCISSOR_TEST):he(r.SCISSOR_TEST)}function w(S){S===void 0&&(S=r.TEXTURE0+K-1),W!==S&&(r.activeTexture(S),W=S)}function v(S,J,z){z===void 0&&(W===null?z=r.TEXTURE0+K-1:z=W);let Y=se[z];Y===void 0&&(Y={type:void 0,texture:void 0},se[z]=Y),(Y.type!==S||Y.texture!==J)&&(W!==z&&(r.activeTexture(z),W=z),r.bindTexture(S,J||ne[S]),Y.type=S,Y.texture=J)}function H(){const S=se[W];S!==void 0&&S.type!==void 0&&(r.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function te(){try{r.compressedTexImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ee(){try{r.texSubImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function xe(){try{r.texSubImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function oe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ce(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Re(){try{r.texStorage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ae(){try{r.texStorage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ve(){try{r.texImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ze(){try{r.texImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Te(S){Ve.equals(S)===!1&&(r.scissor(S.x,S.y,S.z,S.w),Ve.copy(S))}function ue(S){je.equals(S)===!1&&(r.viewport(S.x,S.y,S.z,S.w),je.copy(S))}function Le(S,J){let z=l.get(J);z===void 0&&(z=new WeakMap,l.set(J,z));let Y=z.get(S);Y===void 0&&(Y=r.getUniformBlockIndex(J,S.name),z.set(S,Y))}function Ue(S,J){const z=l.get(J).get(S);o.get(J)!==z&&(r.uniformBlockBinding(J,z,S.__bindingPointIndex),o.set(J,z))}function A(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},W=null,se={},h={},p=new WeakMap,u=[],f=null,g=!1,_=null,d=null,m=null,E=null,x=null,T=null,O=null,C=new Ne(0,0,0),R=0,L=!1,y=null,b=null,P=null,G=null,V=null,Ve.set(0,0,r.canvas.width,r.canvas.height),je.set(0,0,r.canvas.width,r.canvas.height),n.reset(),a.reset(),s.reset()}return{buffers:{color:n,depth:a,stencil:s},enable:pe,disable:he,bindFramebuffer:Fe,drawBuffers:Ce,useProgram:Ge,setBlending:He,setMaterial:Ze,setFlipSided:be,setCullFace:Xe,setLineWidth:Be,setPolygonOffset:Pe,setScissorTest:rt,activeTexture:w,bindTexture:v,unbindTexture:H,compressedTexImage2D:Q,compressedTexImage3D:te,texImage2D:ve,texImage3D:ze,updateUBOMapping:Le,uniformBlockBinding:Ue,texStorage2D:Re,texStorage3D:ae,texSubImage2D:ee,texSubImage3D:xe,compressedTexSubImage2D:oe,compressedTexSubImage3D:ce,scissor:Te,viewport:ue,reset:A}}function vf(r,e,t,i,n,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,h=new WeakMap;let p;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return f?new OffscreenCanvas(w,v):Dr("canvas")}function _(w,v,H){let Q=1;const te=rt(w);if((te.width>H||te.height>H)&&(Q=H/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ee=Math.floor(Q*te.width),xe=Math.floor(Q*te.height);p===void 0&&(p=g(ee,xe));const oe=v?g(ee,xe):p;return oe.width=ee,oe.height=xe,oe.getContext("2d").drawImage(w,0,0,ee,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ee+"x"+xe+")."),oe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),w;return w}function d(w){return w.generateMipmaps&&w.minFilter!==Dt&&w.minFilter!==Nt}function m(w){r.generateMipmap(w)}function E(w,v,H,Q,te=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ee=v;if(v===r.RED&&(H===r.FLOAT&&(ee=r.R32F),H===r.HALF_FLOAT&&(ee=r.R16F),H===r.UNSIGNED_BYTE&&(ee=r.R8)),v===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(ee=r.R8UI),H===r.UNSIGNED_SHORT&&(ee=r.R16UI),H===r.UNSIGNED_INT&&(ee=r.R32UI),H===r.BYTE&&(ee=r.R8I),H===r.SHORT&&(ee=r.R16I),H===r.INT&&(ee=r.R32I)),v===r.RG&&(H===r.FLOAT&&(ee=r.RG32F),H===r.HALF_FLOAT&&(ee=r.RG16F),H===r.UNSIGNED_BYTE&&(ee=r.RG8)),v===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(ee=r.RG8UI),H===r.UNSIGNED_SHORT&&(ee=r.RG16UI),H===r.UNSIGNED_INT&&(ee=r.RG32UI),H===r.BYTE&&(ee=r.RG8I),H===r.SHORT&&(ee=r.RG16I),H===r.INT&&(ee=r.RG32I)),v===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&(ee=r.RGB9_E5),v===r.RGBA){const xe=te?an:qe.getTransfer(Q);H===r.FLOAT&&(ee=r.RGBA32F),H===r.HALF_FLOAT&&(ee=r.RGBA16F),H===r.UNSIGNED_BYTE&&(ee=xe===et?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(ee=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(ee=r.RGB5_A1)}return(ee===r.R16F||ee===r.R32F||ee===r.RG16F||ee===r.RG32F||ee===r.RGBA16F||ee===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function x(w,v){let H;return w?v===null||v===qi||v===Ki?H=r.DEPTH24_STENCIL8:v===mi?H=r.DEPTH32F_STENCIL8:v===rn&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===qi||v===Ki?H=r.DEPTH_COMPONENT24:v===mi?H=r.DEPTH_COMPONENT32F:v===rn&&(H=r.DEPTH_COMPONENT16),H}function T(w,v){return d(w)===!0||w.isFramebufferTexture&&w.minFilter!==Dt&&w.minFilter!==Nt?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function O(w){const v=w.target;v.removeEventListener("dispose",O),R(v),v.isVideoTexture&&h.delete(v)}function C(w){const v=w.target;v.removeEventListener("dispose",C),y(v)}function R(w){const v=i.get(w);if(v.__webglInit===void 0)return;const H=w.source,Q=u.get(H);if(Q){const te=Q[v.__cacheKey];te.usedTimes--,te.usedTimes===0&&L(w),Object.keys(Q).length===0&&u.delete(H)}i.remove(w)}function L(w){const v=i.get(w);r.deleteTexture(v.__webglTexture);const H=w.source,Q=u.get(H);delete Q[v.__cacheKey],s.memory.textures--}function y(w){const v=i.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(v.__webglFramebuffer[Q]))for(let te=0;te<v.__webglFramebuffer[Q].length;te++)r.deleteFramebuffer(v.__webglFramebuffer[Q][te]);else r.deleteFramebuffer(v.__webglFramebuffer[Q]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[Q])}else{if(Array.isArray(v.__webglFramebuffer))for(let Q=0;Q<v.__webglFramebuffer.length;Q++)r.deleteFramebuffer(v.__webglFramebuffer[Q]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Q=0;Q<v.__webglColorRenderbuffer.length;Q++)v.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[Q]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const H=w.textures;for(let Q=0,te=H.length;Q<te;Q++){const ee=i.get(H[Q]);ee.__webglTexture&&(r.deleteTexture(ee.__webglTexture),s.memory.textures--),i.remove(H[Q])}i.remove(w)}let b=0;function P(){b=0}function G(){const w=b;return w>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+n.maxTextures),b+=1,w}function V(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function K(w,v){const H=i.get(w);if(w.isVideoTexture&&Be(w),w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){const Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{je(H,w,v);return}}t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+v)}function Z(w,v){const H=i.get(w);if(w.version>0&&H.__version!==w.version){je(H,w,v);return}t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+v)}function X(w,v){const H=i.get(w);if(w.version>0&&H.__version!==w.version){je(H,w,v);return}t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+v)}function $(w,v){const H=i.get(w);if(w.version>0&&H.__version!==w.version){j(H,w,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+v)}const W={[na]:r.REPEAT,[Li]:r.CLAMP_TO_EDGE,[aa]:r.MIRRORED_REPEAT},se={[Dt]:r.NEAREST,[Fc]:r.NEAREST_MIPMAP_NEAREST,[tn]:r.NEAREST_MIPMAP_LINEAR,[Nt]:r.LINEAR,[sa]:r.LINEAR_MIPMAP_NEAREST,[Ui]:r.LINEAR_MIPMAP_LINEAR},ge={[Jc]:r.NEVER,[rh]:r.ALWAYS,[$c]:r.LESS,[eo]:r.LEQUAL,[Qc]:r.EQUAL,[ih]:r.GEQUAL,[eh]:r.GREATER,[th]:r.NOTEQUAL};function Se(w,v){if(v.type===mi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Nt||v.magFilter===sa||v.magFilter===tn||v.magFilter===Ui||v.minFilter===Nt||v.minFilter===sa||v.minFilter===tn||v.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,W[v.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,W[v.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,W[v.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,se[v.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,se[v.minFilter]),v.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,ge[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Dt||v.minFilter!==tn&&v.minFilter!==Ui||v.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");r.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,n.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ve(w,v){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",O));const Q=v.source;let te=u.get(Q);te===void 0&&(te={},u.set(Q,te));const ee=V(v);if(ee!==w.__cacheKey){te[ee]===void 0&&(te[ee]={texture:r.createTexture(),usedTimes:0},s.memory.textures++,H=!0),te[ee].usedTimes++;const xe=te[w.__cacheKey];xe!==void 0&&(te[w.__cacheKey].usedTimes--,xe.usedTimes===0&&L(v)),w.__cacheKey=ee,w.__webglTexture=te[ee].texture}return H}function je(w,v,H){let Q=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Q=r.TEXTURE_3D);const te=Ve(w,v),ee=v.source;t.bindTexture(Q,w.__webglTexture,r.TEXTURE0+H);const xe=i.get(ee);if(ee.version!==xe.__version||te===!0){t.activeTexture(r.TEXTURE0+H);const oe=qe.getPrimaries(qe.workingColorSpace),ce=v.colorSpace===fi?null:qe.getPrimaries(v.colorSpace),Re=v.colorSpace===fi||oe===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let ae=_(v.image,!1,n.maxTextureSize);ae=Pe(v,ae);const ve=a.convert(v.format,v.colorSpace),ze=a.convert(v.type);let Te=E(v.internalFormat,ve,ze,v.colorSpace,v.isVideoTexture);Se(Q,v);let ue;const Le=v.mipmaps,Ue=v.isVideoTexture!==!0,A=xe.__version===void 0||te===!0,S=ee.dataReady,J=T(v,ae);if(v.isDepthTexture)Te=x(v.format===Ji,v.type),A&&(Ue?t.texStorage2D(r.TEXTURE_2D,1,Te,ae.width,ae.height):t.texImage2D(r.TEXTURE_2D,0,Te,ae.width,ae.height,0,ve,ze,null));else if(v.isDataTexture)if(Le.length>0){Ue&&A&&t.texStorage2D(r.TEXTURE_2D,J,Te,Le[0].width,Le[0].height);for(let z=0,Y=Le.length;z<Y;z++)ue=Le[z],Ue?S&&t.texSubImage2D(r.TEXTURE_2D,z,0,0,ue.width,ue.height,ve,ze,ue.data):t.texImage2D(r.TEXTURE_2D,z,Te,ue.width,ue.height,0,ve,ze,ue.data);v.generateMipmaps=!1}else Ue?(A&&t.texStorage2D(r.TEXTURE_2D,J,Te,ae.width,ae.height),S&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ae.width,ae.height,ve,ze,ae.data)):t.texImage2D(r.TEXTURE_2D,0,Te,ae.width,ae.height,0,ve,ze,ae.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ue&&A&&t.texStorage3D(r.TEXTURE_2D_ARRAY,J,Te,Le[0].width,Le[0].height,ae.depth);for(let z=0,Y=Le.length;z<Y;z++)if(ue=Le[z],v.format!==jt)if(ve!==null)if(Ue){if(S)if(v.layerUpdates.size>0){for(const ie of v.layerUpdates){const fe=ue.width*ue.height;t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,z,0,0,ie,ue.width,ue.height,1,ve,ue.data.slice(fe*ie,fe*(ie+1)),0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,z,0,0,0,ue.width,ue.height,ae.depth,ve,ue.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,z,Te,ue.width,ue.height,ae.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?S&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,z,0,0,0,ue.width,ue.height,ae.depth,ve,ze,ue.data):t.texImage3D(r.TEXTURE_2D_ARRAY,z,Te,ue.width,ue.height,ae.depth,0,ve,ze,ue.data)}else{Ue&&A&&t.texStorage2D(r.TEXTURE_2D,J,Te,Le[0].width,Le[0].height);for(let z=0,Y=Le.length;z<Y;z++)ue=Le[z],v.format!==jt?ve!==null?Ue?S&&t.compressedTexSubImage2D(r.TEXTURE_2D,z,0,0,ue.width,ue.height,ve,ue.data):t.compressedTexImage2D(r.TEXTURE_2D,z,Te,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?S&&t.texSubImage2D(r.TEXTURE_2D,z,0,0,ue.width,ue.height,ve,ze,ue.data):t.texImage2D(r.TEXTURE_2D,z,Te,ue.width,ue.height,0,ve,ze,ue.data)}else if(v.isDataArrayTexture)if(Ue){if(A&&t.texStorage3D(r.TEXTURE_2D_ARRAY,J,Te,ae.width,ae.height,ae.depth),S)if(v.layerUpdates.size>0){let z;switch(ze){case r.UNSIGNED_BYTE:switch(ve){case r.ALPHA:z=1;break;case r.LUMINANCE:z=1;break;case r.LUMINANCE_ALPHA:z=2;break;case r.RGB:z=3;break;case r.RGBA:z=4;break;default:throw new Error(`Unknown texel size for format ${ve}.`)}break;case r.UNSIGNED_SHORT_4_4_4_4:case r.UNSIGNED_SHORT_5_5_5_1:case r.UNSIGNED_SHORT_5_6_5:z=1;break;default:throw new Error(`Unknown texel size for type ${ze}.`)}const Y=ae.width*ae.height*z;for(const ie of v.layerUpdates)t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ie,ae.width,ae.height,1,ve,ze,ae.data.slice(Y*ie,Y*(ie+1)));v.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ve,ze,ae.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Te,ae.width,ae.height,ae.depth,0,ve,ze,ae.data);else if(v.isData3DTexture)Ue?(A&&t.texStorage3D(r.TEXTURE_3D,J,Te,ae.width,ae.height,ae.depth),S&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ve,ze,ae.data)):t.texImage3D(r.TEXTURE_3D,0,Te,ae.width,ae.height,ae.depth,0,ve,ze,ae.data);else if(v.isFramebufferTexture){if(A)if(Ue)t.texStorage2D(r.TEXTURE_2D,J,Te,ae.width,ae.height);else{let z=ae.width,Y=ae.height;for(let ie=0;ie<J;ie++)t.texImage2D(r.TEXTURE_2D,ie,Te,z,Y,0,ve,ze,null),z>>=1,Y>>=1}}else if(Le.length>0){if(Ue&&A){const z=rt(Le[0]);t.texStorage2D(r.TEXTURE_2D,J,Te,z.width,z.height)}for(let z=0,Y=Le.length;z<Y;z++)ue=Le[z],Ue?S&&t.texSubImage2D(r.TEXTURE_2D,z,0,0,ve,ze,ue):t.texImage2D(r.TEXTURE_2D,z,Te,ve,ze,ue);v.generateMipmaps=!1}else if(Ue){if(A){const z=rt(ae);t.texStorage2D(r.TEXTURE_2D,J,Te,z.width,z.height)}S&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve,ze,ae)}else t.texImage2D(r.TEXTURE_2D,0,Te,ve,ze,ae);d(v)&&m(Q),xe.__version=ee.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function j(w,v,H){if(v.image.length!==6)return;const Q=Ve(w,v),te=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+H);const ee=i.get(te);if(te.version!==ee.__version||Q===!0){t.activeTexture(r.TEXTURE0+H);const xe=qe.getPrimaries(qe.workingColorSpace),oe=v.colorSpace===fi?null:qe.getPrimaries(v.colorSpace),ce=v.colorSpace===fi||xe===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Re=v.isCompressedTexture||v.image[0].isCompressedTexture,ae=v.image[0]&&v.image[0].isDataTexture,ve=[];for(let Y=0;Y<6;Y++)!Re&&!ae?ve[Y]=_(v.image[Y],!0,n.maxCubemapSize):ve[Y]=ae?v.image[Y].image:v.image[Y],ve[Y]=Pe(v,ve[Y]);const ze=ve[0],Te=a.convert(v.format,v.colorSpace),ue=a.convert(v.type),Le=E(v.internalFormat,Te,ue,v.colorSpace),Ue=v.isVideoTexture!==!0,A=ee.__version===void 0||Q===!0,S=te.dataReady;let J=T(v,ze);Se(r.TEXTURE_CUBE_MAP,v);let z;if(Re){Ue&&A&&t.texStorage2D(r.TEXTURE_CUBE_MAP,J,Le,ze.width,ze.height);for(let Y=0;Y<6;Y++){z=ve[Y].mipmaps;for(let ie=0;ie<z.length;ie++){const fe=z[ie];v.format!==jt?Te!==null?Ue?S&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie,0,0,fe.width,fe.height,Te,fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie,Le,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?S&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie,0,0,fe.width,fe.height,Te,ue,fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie,Le,fe.width,fe.height,0,Te,ue,fe.data)}}}else{if(z=v.mipmaps,Ue&&A){z.length>0&&J++;const Y=rt(ve[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,J,Le,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ae){Ue?S&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ve[Y].width,ve[Y].height,Te,ue,ve[Y].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Le,ve[Y].width,ve[Y].height,0,Te,ue,ve[Y].data);for(let ie=0;ie<z.length;ie++){const fe=z[ie].image[Y].image;Ue?S&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie+1,0,0,fe.width,fe.height,Te,ue,fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie+1,Le,fe.width,fe.height,0,Te,ue,fe.data)}}else{Ue?S&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Te,ue,ve[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Le,Te,ue,ve[Y]);for(let ie=0;ie<z.length;ie++){const fe=z[ie];Ue?S&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie+1,0,0,Te,ue,fe.image[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie+1,Le,Te,ue,fe.image[Y])}}}d(v)&&m(r.TEXTURE_CUBE_MAP),ee.__version=te.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ne(w,v,H,Q,te,ee){const xe=a.convert(H.format,H.colorSpace),oe=a.convert(H.type),ce=E(H.internalFormat,xe,oe,H.colorSpace);if(!i.get(v).__hasExternalTextures){const Re=Math.max(1,v.width>>ee),ae=Math.max(1,v.height>>ee);te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,ee,ce,Re,ae,v.depth,0,xe,oe,null):t.texImage2D(te,ee,ce,Re,ae,0,xe,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),Xe(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,te,i.get(H).__webglTexture,0,be(v)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,te,i.get(H).__webglTexture,ee),t.bindFramebuffer(r.FRAMEBUFFER,null)}function pe(w,v,H){if(r.bindRenderbuffer(r.RENDERBUFFER,w),v.depthBuffer){const Q=v.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,ee=x(v.stencilBuffer,te),xe=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=be(v);Xe(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,ee,v.width,v.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,ee,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ee,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,w)}else{const Q=v.textures;for(let te=0;te<Q.length;te++){const ee=Q[te],xe=a.convert(ee.format,ee.colorSpace),oe=a.convert(ee.type),ce=E(ee.internalFormat,xe,oe,ee.colorSpace),Re=be(v);H&&Xe(v)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,ce,v.width,v.height):Xe(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re,ce,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ce,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function he(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K(v.depthTexture,0);const H=i.get(v.depthTexture).__webglTexture,Q=be(v);if(v.depthTexture.format===Zi)Xe(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,H,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,H,0);else if(v.depthTexture.format===Ji)Xe(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,H,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,H,0);else throw new Error("Unknown depthTexture format")}function Fe(w){const v=i.get(w),H=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");he(v.__webglFramebuffer,w)}else if(H){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]=r.createRenderbuffer(),pe(v.__webglDepthbuffer[Q],w,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=r.createRenderbuffer(),pe(v.__webglDepthbuffer,w,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ce(w,v,H){const Q=i.get(w);v!==void 0&&ne(Q.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&Fe(w)}function Ge(w){const v=w.texture,H=i.get(w),Q=i.get(v);w.addEventListener("dispose",C);const te=w.textures,ee=w.isWebGLCubeRenderTarget===!0,xe=te.length>1;if(xe||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=v.version,s.memory.textures++),ee){H.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[oe]=[];for(let ce=0;ce<v.mipmaps.length;ce++)H.__webglFramebuffer[oe][ce]=r.createFramebuffer()}else H.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)H.__webglFramebuffer[oe]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(xe)for(let oe=0,ce=te.length;oe<ce;oe++){const Re=i.get(te[oe]);Re.__webglTexture===void 0&&(Re.__webglTexture=r.createTexture(),s.memory.textures++)}if(w.samples>0&&Xe(w)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let oe=0;oe<te.length;oe++){const ce=te[oe];H.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[oe]);const Re=a.convert(ce.format,ce.colorSpace),ae=a.convert(ce.type),ve=E(ce.internalFormat,Re,ae,ce.colorSpace,w.isXRRenderTarget===!0),ze=be(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,ze,ve,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,H.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),pe(H.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ee){t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),Se(r.TEXTURE_CUBE_MAP,v);for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0)for(let ce=0;ce<v.mipmaps.length;ce++)ne(H.__webglFramebuffer[oe][ce],w,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ce);else ne(H.__webglFramebuffer[oe],w,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);d(v)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let oe=0,ce=te.length;oe<ce;oe++){const Re=te[oe],ae=i.get(Re);t.bindTexture(r.TEXTURE_2D,ae.__webglTexture),Se(r.TEXTURE_2D,Re),ne(H.__webglFramebuffer,w,Re,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,0),d(Re)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(oe=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,Q.__webglTexture),Se(oe,v),v.mipmaps&&v.mipmaps.length>0)for(let ce=0;ce<v.mipmaps.length;ce++)ne(H.__webglFramebuffer[ce],w,v,r.COLOR_ATTACHMENT0,oe,ce);else ne(H.__webglFramebuffer,w,v,r.COLOR_ATTACHMENT0,oe,0);d(v)&&m(oe),t.unbindTexture()}w.depthBuffer&&Fe(w)}function U(w){const v=w.textures;for(let H=0,Q=v.length;H<Q;H++){const te=v[H];if(d(te)){const ee=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,xe=i.get(te).__webglTexture;t.bindTexture(ee,xe),m(ee),t.unbindTexture()}}}const We=[],He=[];function Ze(w){if(w.samples>0){if(Xe(w)===!1){const v=w.textures,H=w.width,Q=w.height;let te=r.COLOR_BUFFER_BIT;const ee=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=i.get(w),oe=v.length>1;if(oe)for(let ce=0;ce<v.length;ce++)t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ce=0;ce<v.length;ce++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xe.__webglColorRenderbuffer[ce]);const Re=i.get(v[ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Re,0)}r.blitFramebuffer(0,0,H,Q,0,0,H,Q,te,r.NEAREST),l===!0&&(We.length=0,He.length=0,We.push(r.COLOR_ATTACHMENT0+ce),w.depthBuffer&&w.resolveDepthBuffer===!1&&(We.push(ee),He.push(ee),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,He)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let ce=0;ce<v.length;ce++){t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,xe.__webglColorRenderbuffer[ce]);const Re=i.get(v[ce]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.TEXTURE_2D,Re,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function be(w){return Math.min(n.maxSamples,w.samples)}function Xe(w){const v=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Be(w){const v=s.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function Pe(w,v){const H=w.colorSpace,Q=w.format,te=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==gi&&H!==fi&&(qe.getTransfer(H)===et?(Q!==jt||te!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),v}function rt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=P,this.setTexture2D=K,this.setTexture2DArray=Z,this.setTexture3D=X,this.setTextureCube=$,this.rebindTextures=Ce,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Xe}function xf(r,e){function t(i,n=fi){let a;const s=qe.getTransfer(n);if(i===pi)return r.UNSIGNED_BYTE;if(i===bs)return r.UNSIGNED_SHORT_4_4_4_4;if(i===ys)return r.UNSIGNED_SHORT_5_5_5_1;if(i===kc)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Bc)return r.BYTE;if(i===zc)return r.SHORT;if(i===rn)return r.UNSIGNED_SHORT;if(i===Ms)return r.INT;if(i===qi)return r.UNSIGNED_INT;if(i===mi)return r.FLOAT;if(i===Pr)return r.HALF_FLOAT;if(i===Hc)return r.ALPHA;if(i===Vc)return r.RGB;if(i===jt)return r.RGBA;if(i===Gc)return r.LUMINANCE;if(i===Wc)return r.LUMINANCE_ALPHA;if(i===Zi)return r.DEPTH_COMPONENT;if(i===Ji)return r.DEPTH_STENCIL;if(i===Xc)return r.RED;if(i===Ss)return r.RED_INTEGER;if(i===jc)return r.RG;if(i===Es)return r.RG_INTEGER;if(i===Ts)return r.RGBA_INTEGER;if(i===oa||i===la||i===ca||i===ha)if(s===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===oa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===la)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===oa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===la)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ca)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ha)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ws||i===As||i===Rs||i===Cs)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===ws)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===As)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rs)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ps||i===Ls||i===Us)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Ps||i===Ls)return s===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Us)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ds||i===Os||i===Ns||i===Is||i===Fs||i===Bs||i===zs||i===ks||i===Hs||i===Vs||i===Gs||i===Ws||i===Xs||i===js)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Ds)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Os)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ns)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Is)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fs)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bs)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zs)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ks)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hs)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vs)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gs)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ws)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xs)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===js)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ua||i===Ys||i===qs)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===ua)return s===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ys)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qs)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yc||i===Ks||i===Zs||i===Js)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===ua)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Ks)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zs)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Js)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ki?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}class Mf extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class On extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bf={type:"move"};class Ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new On,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new On,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new On,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const d=t.getJointPose(_,i),m=this._getHandJoint(c,_);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bf)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new On;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const yf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ef{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new At,a=e.properties.get(n);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new si({vertexShader:yf,fragmentShader:Sf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new Ar(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class Tf extends Di{constructor(e,t){super();const i=this;let n=null,a=1,s=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,f=null,g=null;const _=new Ef,d=t.getContextAttributes();let m=null,E=null;const x=[],T=[],O=new Ae;let C=null;const R=new wt;R.layers.enable(1),R.viewport=new Qe;const L=new wt;L.layers.enable(2),L.viewport=new Qe;const y=[R,L],b=new Mf;b.layers.enable(1),b.layers.enable(2);let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ne=x[j];return ne===void 0&&(ne=new Ga,x[j]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(j){let ne=x[j];return ne===void 0&&(ne=new Ga,x[j]=ne),ne.getGripSpace()},this.getHand=function(j){let ne=x[j];return ne===void 0&&(ne=new Ga,x[j]=ne),ne.getHandSpace()};function V(j){const ne=T.indexOf(j.inputSource);if(ne===-1)return;const pe=x[ne];pe!==void 0&&(pe.update(j.inputSource,j.frame,c||s),pe.dispatchEvent({type:j.type,data:j.inputSource}))}function K(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",K),n.removeEventListener("inputsourceschange",Z);for(let j=0;j<x.length;j++){const ne=T[j];ne!==null&&(T[j]=null,x[j].disconnect(ne))}P=null,G=null,_.reset(),e.setRenderTarget(m),f=null,u=null,p=null,n=null,E=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(j){if(n=j,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",K),n.addEventListener("inputsourceschange",Z),d.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(O),n.renderState.layers===void 0){const ne={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(n,t,ne),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new _i(f.framebufferWidth,f.framebufferHeight,{format:jt,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let ne=null,pe=null,he=null;d.depth&&(he=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=d.stencil?Ji:Zi,pe=d.stencil?Ki:qi);const Fe={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:a};p=new XRWebGLBinding(n,t),u=p.createProjectionLayer(Fe),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new _i(u.textureWidth,u.textureHeight,{format:jt,type:pi,depthTexture:new Wo(u.textureWidth,u.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(o),je.setContext(n),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function Z(j){for(let ne=0;ne<j.removed.length;ne++){const pe=j.removed[ne],he=T.indexOf(pe);he>=0&&(T[he]=null,x[he].disconnect(pe))}for(let ne=0;ne<j.added.length;ne++){const pe=j.added[ne];let he=T.indexOf(pe);if(he===-1){for(let Ce=0;Ce<x.length;Ce++)if(Ce>=T.length){T.push(pe),he=Ce;break}else if(T[Ce]===null){T[Ce]=pe,he=Ce;break}if(he===-1)break}const Fe=x[he];Fe&&Fe.connect(pe)}}const X=new D,$=new D;function W(j,ne,pe){X.setFromMatrixPosition(ne.matrixWorld),$.setFromMatrixPosition(pe.matrixWorld);const he=X.distanceTo($),Fe=ne.projectionMatrix.elements,Ce=pe.projectionMatrix.elements,Ge=Fe[14]/(Fe[10]-1),U=Fe[14]/(Fe[10]+1),We=(Fe[9]+1)/Fe[5],He=(Fe[9]-1)/Fe[5],Ze=(Fe[8]-1)/Fe[0],be=(Ce[8]+1)/Ce[0],Xe=Ge*Ze,Be=Ge*be,Pe=he/(-Ze+be),rt=Pe*-Ze;ne.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(rt),j.translateZ(Pe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const w=Ge+Pe,v=U+Pe,H=Xe-rt,Q=Be+(he-rt),te=We*U/v*w,ee=He*U/v*w;j.projectionMatrix.makePerspective(H,Q,te,ee,w,v),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function se(j,ne){ne===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ne.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(n===null)return;_.texture!==null&&(j.near=_.depthNear,j.far=_.depthFar),b.near=L.near=R.near=j.near,b.far=L.far=R.far=j.far,(P!==b.near||G!==b.far)&&(n.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,G=b.far,R.near=P,R.far=G,L.near=P,L.far=G,R.updateProjectionMatrix(),L.updateProjectionMatrix(),j.updateProjectionMatrix());const ne=j.parent,pe=b.cameras;se(b,ne);for(let he=0;he<pe.length;he++)se(pe[he],ne);pe.length===2?W(b,R,L):b.projectionMatrix.copy(R.projectionMatrix),ge(j,b,ne)};function ge(j,ne,pe){pe===null?j.matrix.copy(ne.matrixWorld):(j.matrix.copy(pe.matrixWorld),j.matrix.invert(),j.matrix.multiply(ne.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Lr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let Se=null;function Ve(j,ne){if(h=ne.getViewerPose(c||s),g=ne,h!==null){const pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let he=!1;pe.length!==b.cameras.length&&(b.cameras.length=0,he=!0);for(let Ce=0;Ce<pe.length;Ce++){const Ge=pe[Ce];let U=null;if(f!==null)U=f.getViewport(Ge);else{const He=p.getViewSubImage(u,Ge);U=He.viewport,Ce===0&&(e.setRenderTargetTextures(E,He.colorTexture,u.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(E))}let We=y[Ce];We===void 0&&(We=new wt,We.layers.enable(Ce),We.viewport=new Qe,y[Ce]=We),We.matrix.fromArray(Ge.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ge.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(U.x,U.y,U.width,U.height),Ce===0&&(b.matrix.copy(We.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),he===!0&&b.cameras.push(We)}const Fe=n.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const Ce=p.getDepthInformation(pe[0]);Ce&&Ce.isValid&&Ce.texture&&_.init(e,Ce,n.renderState)}}for(let pe=0;pe<x.length;pe++){const he=T[pe],Fe=x[pe];he!==null&&Fe!==void 0&&Fe.update(he,ne,c||s)}Se&&Se(j,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const je=new Io;je.setAnimationLoop(Ve),this.setAnimationLoop=function(j){Se=j},this.dispose=function(){}}}const Vi=new Zt,wf=new tt;function Af(r,e){function t(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function i(d,m){m.color.getRGB(d.fogColor.value,Lo(r)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function n(d,m,E,x,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(d,m):m.isMeshToonMaterial?(a(d,m),p(d,m)):m.isMeshPhongMaterial?(a(d,m),h(d,m)):m.isMeshStandardMaterial?(a(d,m),u(d,m),m.isMeshPhysicalMaterial&&f(d,m,T)):m.isMeshMatcapMaterial?(a(d,m),g(d,m)):m.isMeshDepthMaterial?a(d,m):m.isMeshDistanceMaterial?(a(d,m),_(d,m)):m.isMeshNormalMaterial?a(d,m):m.isLineBasicMaterial?(s(d,m),m.isLineDashedMaterial&&o(d,m)):m.isPointsMaterial?l(d,m,E,x):m.isSpriteMaterial?c(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,t(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,t(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===Et&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,t(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===Et&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,t(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,t(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const E=e.get(m),x=E.envMap,T=E.envMapRotation;x&&(d.envMap.value=x,Vi.copy(T),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),d.envMapRotation.value.setFromMatrix4(wf.makeRotationFromEuler(Vi)),d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap&&(d.lightMap.value=m.lightMap,d.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,d.lightMapTransform)),m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,d.aoMapTransform))}function s(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,t(m.map,d.mapTransform))}function o(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function l(d,m,E,x){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*E,d.scale.value=x*.5,m.map&&(d.map.value=m.map,t(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function c(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,t(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function h(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function p(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function u(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,d.roughnessMapTransform)),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function f(d,m,E){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Et&&d.clearcoatNormalScale.value.negate())),m.dispersion>0&&(d.dispersion.value=m.dispersion),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=E.texture,d.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,m){m.matcap&&(d.matcap.value=m.matcap)}function _(d,m){const E=e.get(m).light;d.referencePosition.value.setFromMatrixPosition(E.matrixWorld),d.nearDistance.value=E.shadow.camera.near,d.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Rf(r,e,t,i){let n={},a={},s=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,x){const T=x.program;i.uniformBlockBinding(E,T)}function c(E,x){let T=n[E.id];T===void 0&&(g(E),T=h(E),n[E.id]=T,E.addEventListener("dispose",d));const O=x.program;i.updateUBOMapping(E,O);const C=e.render.frame;a[E.id]!==C&&(u(E),a[E.id]=C)}function h(E){const x=p();E.__bindingPointIndex=x;const T=r.createBuffer(),O=E.__size,C=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,O,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,T),T}function p(){for(let E=0;E<o;E++)if(s.indexOf(E)===-1)return s.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){const x=n[E.id],T=E.uniforms,O=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let C=0,R=T.length;C<R;C++){const L=Array.isArray(T[C])?T[C]:[T[C]];for(let y=0,b=L.length;y<b;y++){const P=L[y];if(f(P,C,y,O)===!0){const G=P.__offset,V=Array.isArray(P.value)?P.value:[P.value];let K=0;for(let Z=0;Z<V.length;Z++){const X=V[Z],$=_(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,G+K,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,K),K+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,G,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(E,x,T,O){const C=E.value,R=x+"_"+T;if(O[R]===void 0)return typeof C=="number"||typeof C=="boolean"?O[R]=C:O[R]=C.clone(),!0;{const L=O[R];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return O[R]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function g(E){const x=E.uniforms;let T=0;const O=16;for(let R=0,L=x.length;R<L;R++){const y=Array.isArray(x[R])?x[R]:[x[R]];for(let b=0,P=y.length;b<P;b++){const G=y[b],V=Array.isArray(G.value)?G.value:[G.value];for(let K=0,Z=V.length;K<Z;K++){const X=V[K],$=_(X),W=T%O;W!==0&&O-W<$.boundary&&(T+=O-W),G.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=T,T+=$.storage}}}const C=T%O;return C>0&&(T+=O-C),E.__size=T,E.__cache={},this}function _(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function d(E){const x=E.target;x.removeEventListener("dispose",d);const T=s.indexOf(x.__bindingPointIndex);s.splice(T,1),r.deleteBuffer(n[x.id]),delete n[x.id],delete a[x.id]}function m(){for(const E in n)r.deleteBuffer(n[E]);s=[],n={},a={}}return{bind:l,update:c,dispose:m}}class ul{constructor(e={}){const{canvas:t=bh(),context:i=null,depth:n=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=s;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,d=null;const m=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this.toneMapping=di,this.toneMappingExposure=1;const x=this;let T=!1,O=0,C=0,R=null,L=-1,y=null;const b=new Qe,P=new Qe;let G=null;const V=new Ne(0);let K=0,Z=t.width,X=t.height,$=1,W=null,se=null;const ge=new Qe(0,0,Z,X),Se=new Qe(0,0,Z,X);let Ve=!1;const je=new Oa;let j=!1,ne=!1;const pe=new tt,he=new D,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function Ge(){return R===null?$:1}let U=i;function We(M,N){return t.getContext(M,N)}try{const M={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$n}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",Y,!1),U===null){const N="webgl2";if(U=We(N,M),U===null)throw We(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let He,Ze,be,Xe,Be,Pe,rt,w,v,H,Q,te,ee,xe,oe,ce,Re,ae,ve,ze,Te,ue,Le,Ue;function A(){He=new Ip(U),He.init(),ue=new xf(U,He),Ze=new Pp(U,He,e,ue),be=new _f(U),Xe=new zp(U),Be=new rf,Pe=new vf(U,He,be,Be,Ze,ue,Xe),rt=new Up(x),w=new Np(x),v=new jh(U),Le=new Rp(U,v),H=new Fp(U,v,Xe,Le),Q=new Hp(U,H,v,Xe),ve=new kp(U,Ze,Pe),ce=new Lp(Be),te=new tf(x,rt,w,He,Ze,Le,ce),ee=new Af(x,Be),xe=new af,oe=new uf(He),ae=new Ap(x,rt,w,be,Q,u,l),Re=new gf(x,Q,Ze),Ue=new Rf(U,Xe,Ze,be),ze=new Cp(U,He,Xe),Te=new Bp(U,He,Xe),Xe.programs=te.programs,x.capabilities=Ze,x.extensions=He,x.properties=Be,x.renderLists=xe,x.shadowMap=Re,x.state=be,x.info=Xe}A();const S=new Tf(x,U);this.xr=S,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const M=He.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=He.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(Z,X,!1))},this.getSize=function(M){return M.set(Z,X)},this.setSize=function(M,N,F=!0){if(S.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=M,X=N,t.width=Math.floor(M*$),t.height=Math.floor(N*$),F===!0&&(t.style.width=M+"px",t.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(Z*$,X*$).floor()},this.setDrawingBufferSize=function(M,N,F){Z=M,X=N,$=F,t.width=Math.floor(M*F),t.height=Math.floor(N*F),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(b)},this.getViewport=function(M){return M.copy(ge)},this.setViewport=function(M,N,F,k){M.isVector4?ge.set(M.x,M.y,M.z,M.w):ge.set(M,N,F,k),be.viewport(b.copy(ge).multiplyScalar($).round())},this.getScissor=function(M){return M.copy(Se)},this.setScissor=function(M,N,F,k){M.isVector4?Se.set(M.x,M.y,M.z,M.w):Se.set(M,N,F,k),be.scissor(P.copy(Se).multiplyScalar($).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(M){be.setScissorTest(Ve=M)},this.setOpaqueSort=function(M){W=M},this.setTransparentSort=function(M){se=M},this.getClearColor=function(M){return M.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(M=!0,N=!0,F=!0){let k=0;if(M){let I=!1;if(R!==null){const re=R.texture.format;I=re===Ts||re===Es||re===Ss}if(I){const re=R.texture.type,de=re===pi||re===qi||re===rn||re===Ki||re===bs||re===ys,me=ae.getClearColor(),_e=ae.getClearAlpha(),we=me.r,De=me.g,Ee=me.b;de?(f[0]=we,f[1]=De,f[2]=Ee,f[3]=_e,U.clearBufferuiv(U.COLOR,0,f)):(g[0]=we,g[1]=De,g[2]=Ee,g[3]=_e,U.clearBufferiv(U.COLOR,0,g))}else k|=U.COLOR_BUFFER_BIT}N&&(k|=U.DEPTH_BUFFER_BIT),F&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",Y,!1),xe.dispose(),oe.dispose(),Be.dispose(),rt.dispose(),w.dispose(),Q.dispose(),Le.dispose(),Ue.dispose(),te.dispose(),S.dispose(),S.removeEventListener("sessionstart",gt),S.removeEventListener("sessionend",ot),Rt.stop()};function J(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const M=Xe.autoReset,N=Re.enabled,F=Re.autoUpdate,k=Re.needsUpdate,I=Re.type;A(),Xe.autoReset=M,Re.enabled=N,Re.autoUpdate=F,Re.needsUpdate=k,Re.type=I}function Y(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ie(M){const N=M.target;N.removeEventListener("dispose",ie),fe(N)}function fe(M){Je(M),Be.remove(M)}function Je(M){const N=Be.get(M).programs;N!==void 0&&(N.forEach(function(F){te.releaseProgram(F)}),M.isShaderMaterial&&te.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,F,k,I,re){N===null&&(N=Fe);const de=I.isMesh&&I.matrixWorld.determinant()<0,me=Kl(M,N,F,k,I);be.setMaterial(k,de);let _e=F.index,we=1;if(k.wireframe===!0){if(_e=H.getWireframeAttribute(F),_e===void 0)return;we=2}const De=F.drawRange,Ee=F.attributes.position;let Ye=De.start*we,lt=(De.start+De.count)*we;re!==null&&(Ye=Math.max(Ye,re.start*we),lt=Math.min(lt,(re.start+re.count)*we)),_e!==null?(Ye=Math.max(Ye,0),lt=Math.min(lt,_e.count)):Ee!=null&&(Ye=Math.max(Ye,0),lt=Math.min(lt,Ee.count));const st=lt-Ye;if(st<0||st===1/0)return;Le.setup(I,k,me,F,_e);let ht,nt=ze;if(_e!==null&&(ht=v.get(_e),nt=Te,nt.setIndex(ht)),I.isMesh)k.wireframe===!0?(be.setLineWidth(k.wireframeLinewidth*Ge()),nt.setMode(U.LINES)):nt.setMode(U.TRIANGLES);else if(I.isLine){let Me=k.linewidth;Me===void 0&&(Me=1),be.setLineWidth(Me*Ge()),I.isLineSegments?nt.setMode(U.LINES):I.isLineLoop?nt.setMode(U.LINE_LOOP):nt.setMode(U.LINE_STRIP)}else I.isPoints?nt.setMode(U.POINTS):I.isSprite&&nt.setMode(U.TRIANGLES);if(I.isBatchedMesh)I._multiDrawInstances!==null?nt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances):nt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else if(I.isInstancedMesh)nt.renderInstances(Ye,st,I.count);else if(F.isInstancedBufferGeometry){const Me=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Ct=Math.min(F.instanceCount,Me);nt.renderInstances(Ye,st,Ct)}else nt.render(Ye,st)};function it(M,N,F){M.transparent===!0&&M.side===Qt&&M.forceSinglePass===!1?(M.side=Et,M.needsUpdate=!0,Jr(M,N,F),M.side=hi,M.needsUpdate=!0,Jr(M,N,F),M.side=Qt):Jr(M,N,F)}this.compile=function(M,N,F=null){F===null&&(F=M),d=oe.get(F),d.init(N),E.push(d),F.traverseVisible(function(I){I.isLight&&I.layers.test(N.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),M!==F&&M.traverseVisible(function(I){I.isLight&&I.layers.test(N.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),d.setupLights();const k=new Set;return M.traverse(function(I){const re=I.material;if(re)if(Array.isArray(re))for(let de=0;de<re.length;de++){const me=re[de];it(me,F,I),k.add(me)}else it(re,F,I),k.add(re)}),E.pop(),d=null,k},this.compileAsync=function(M,N,F=null){const k=this.compile(M,N,F);return new Promise(I=>{function re(){if(k.forEach(function(de){Be.get(de).currentProgram.isReady()&&k.delete(de)}),k.size===0){I(M);return}setTimeout(re,10)}He.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Ke=null;function ke(M){Ke&&Ke(M)}function gt(){Rt.stop()}function ot(){Rt.start()}const Rt=new Io;Rt.setAnimationLoop(ke),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(M){Ke=M,S.setAnimationLoop(M),M===null?Rt.stop():Rt.start()},S.addEventListener("sessionstart",gt),S.addEventListener("sessionend",ot),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),S.enabled===!0&&S.isPresenting===!0&&(S.cameraAutoUpdate===!0&&S.updateCamera(N),N=S.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,N,R),d=oe.get(M,E.length),d.init(N),E.push(d),pe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),je.setFromProjectionMatrix(pe),ne=this.localClippingEnabled,j=ce.init(this.clippingPlanes,ne),_=xe.get(M,m.length),_.init(),m.push(_),S.enabled===!0&&S.isPresenting===!0){const re=x.xr.getDepthSensingMesh();re!==null&&li(re,N,-1/0,x.sortObjects)}li(M,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(W,se),Ce=S.enabled===!1||S.isPresenting===!1||S.hasDepthSensing()===!1,Ce&&ae.addToRenderList(_,M),this.info.render.frame++,j===!0&&ce.beginShadows();const F=d.state.shadowsArray;Re.render(F,M,N),j===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=_.opaque,I=_.transmissive;if(d.setupLights(),N.isArrayCamera){const re=N.cameras;if(I.length>0)for(let de=0,me=re.length;de<me;de++){const _e=re[de];ls(k,I,M,_e)}Ce&&ae.render(M);for(let de=0,me=re.length;de<me;de++){const _e=re[de];Rr(_,M,_e,_e.viewport)}}else I.length>0&&ls(k,I,M,N),Ce&&ae.render(M),Rr(_,M,N);R!==null&&(Pe.updateMultisampleRenderTarget(R),Pe.updateRenderTargetMipmap(R)),M.isScene===!0&&M.onAfterRender(x,M,N),Le.resetDefaultState(),L=-1,y=null,E.pop(),E.length>0?(d=E[E.length-1],j===!0&&ce.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function li(M,N,F,k){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)F=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||je.intersectsSprite(M)){k&&he.setFromMatrixPosition(M.matrixWorld).applyMatrix4(pe);const re=Q.update(M),de=M.material;de.visible&&_.push(M,re,de,F,he.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||je.intersectsObject(M))){const re=Q.update(M),de=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),he.copy(M.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),he.copy(re.boundingSphere.center)),he.applyMatrix4(M.matrixWorld).applyMatrix4(pe)),Array.isArray(de)){const me=re.groups;for(let _e=0,we=me.length;_e<we;_e++){const De=me[_e],Ee=de[De.materialIndex];Ee&&Ee.visible&&_.push(M,re,Ee,F,he.z,De)}}else de.visible&&_.push(M,re,de,F,he.z,null)}}const I=M.children;for(let re=0,de=I.length;re<de;re++)li(I[re],N,F,k)}function Rr(M,N,F,k){const I=M.opaque,re=M.transmissive,de=M.transparent;d.setupLightsView(F),j===!0&&ce.setGlobalState(x.clippingPlanes,F),k&&be.viewport(b.copy(k)),I.length>0&&Zr(I,N,F),re.length>0&&Zr(re,N,F),de.length>0&&Zr(de,N,F),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function ls(M,N,F,k){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[k.id]===void 0&&(d.state.transmissionRenderTarget[k.id]=new _i(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Pr:pi,minFilter:Ui,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const I=d.state.transmissionRenderTarget[k.id],re=k.viewport||b;I.setSize(re.z,re.w);const de=x.getRenderTarget();x.setRenderTarget(I),x.getClearColor(V),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),Ce?ae.render(F):x.clear();const me=x.toneMapping;x.toneMapping=di;const _e=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),d.setupLightsView(k),j===!0&&ce.setGlobalState(x.clippingPlanes,k),Zr(M,F,k),Pe.updateMultisampleRenderTarget(I),Pe.updateRenderTargetMipmap(I),He.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let De=0,Ee=N.length;De<Ee;De++){const Ye=N[De],lt=Ye.object,st=Ye.geometry,ht=Ye.material,nt=Ye.group;if(ht.side===Qt&&lt.layers.test(k.layers)){const Me=ht.side;ht.side=Et,ht.needsUpdate=!0,cs(lt,F,k,st,ht,nt),ht.side=Me,ht.needsUpdate=!0,we=!0}}we===!0&&(Pe.updateMultisampleRenderTarget(I),Pe.updateRenderTargetMipmap(I))}x.setRenderTarget(de),x.setClearColor(V,K),_e!==void 0&&(k.viewport=_e),x.toneMapping=me}function Zr(M,N,F){const k=N.isScene===!0?N.overrideMaterial:null;for(let I=0,re=M.length;I<re;I++){const de=M[I],me=de.object,_e=de.geometry,we=k===null?de.material:k,De=de.group;me.layers.test(F.layers)&&cs(me,N,F,_e,we,De)}}function cs(M,N,F,k,I,re){M.onBeforeRender(x,N,F,k,I,re),M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),I.onBeforeRender(x,N,F,k,M,re),I.transparent===!0&&I.side===Qt&&I.forceSinglePass===!1?(I.side=Et,I.needsUpdate=!0,x.renderBufferDirect(F,N,k,I,M,re),I.side=hi,I.needsUpdate=!0,x.renderBufferDirect(F,N,k,I,M,re),I.side=Qt):x.renderBufferDirect(F,N,k,I,M,re),M.onAfterRender(x,N,F,k,I,re)}function Jr(M,N,F){N.isScene!==!0&&(N=Fe);const k=Be.get(M),I=d.state.lights,re=d.state.shadowsArray,de=I.state.version,me=te.getParameters(M,I.state,re,N,F),_e=te.getProgramCacheKey(me);let we=k.programs;k.environment=M.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(M.isMeshStandardMaterial?w:rt).get(M.envMap||k.environment),k.envMapRotation=k.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,we===void 0&&(M.addEventListener("dispose",ie),we=new Map,k.programs=we);let De=we.get(_e);if(De!==void 0){if(k.currentProgram===De&&k.lightsStateVersion===de)return us(M,me),De}else me.uniforms=te.getUniforms(M),M.onBuild(F,me,x),M.onBeforeCompile(me,x),De=te.acquireProgram(me,_e),we.set(_e,De),k.uniforms=me.uniforms;const Ee=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ee.clippingPlanes=ce.uniform),us(M,me),k.needsLights=Jl(M),k.lightsStateVersion=de,k.needsLights&&(Ee.ambientLightColor.value=I.state.ambient,Ee.lightProbe.value=I.state.probe,Ee.directionalLights.value=I.state.directional,Ee.directionalLightShadows.value=I.state.directionalShadow,Ee.spotLights.value=I.state.spot,Ee.spotLightShadows.value=I.state.spotShadow,Ee.rectAreaLights.value=I.state.rectArea,Ee.ltc_1.value=I.state.rectAreaLTC1,Ee.ltc_2.value=I.state.rectAreaLTC2,Ee.pointLights.value=I.state.point,Ee.pointLightShadows.value=I.state.pointShadow,Ee.hemisphereLights.value=I.state.hemi,Ee.directionalShadowMap.value=I.state.directionalShadowMap,Ee.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Ee.spotShadowMap.value=I.state.spotShadowMap,Ee.spotLightMatrix.value=I.state.spotLightMatrix,Ee.spotLightMap.value=I.state.spotLightMap,Ee.pointShadowMap.value=I.state.pointShadowMap,Ee.pointShadowMatrix.value=I.state.pointShadowMatrix),k.currentProgram=De,k.uniformsList=null,De}function hs(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=Dn.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function us(M,N){const F=Be.get(M);F.outputColorSpace=N.outputColorSpace,F.batching=N.batching,F.batchingColor=N.batchingColor,F.instancing=N.instancing,F.instancingColor=N.instancingColor,F.instancingMorph=N.instancingMorph,F.skinning=N.skinning,F.morphTargets=N.morphTargets,F.morphNormals=N.morphNormals,F.morphColors=N.morphColors,F.morphTargetsCount=N.morphTargetsCount,F.numClippingPlanes=N.numClippingPlanes,F.numIntersection=N.numClipIntersection,F.vertexAlphas=N.vertexAlphas,F.vertexTangents=N.vertexTangents,F.toneMapping=N.toneMapping}function Kl(M,N,F,k,I){N.isScene!==!0&&(N=Fe),Pe.resetTextureUnits();const re=N.fog,de=k.isMeshStandardMaterial?N.environment:null,me=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:gi,_e=(k.isMeshStandardMaterial?w:rt).get(k.envMap||de),we=k.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,De=!!F.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ee=!!F.morphAttributes.position,Ye=!!F.morphAttributes.normal,lt=!!F.morphAttributes.color;let st=di;k.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(st=x.toneMapping);const ht=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,nt=ht!==void 0?ht.length:0,Me=Be.get(k),Ct=d.state.lights;if(j===!0&&(ne===!0||M!==y)){const Ut=M===y&&k.id===L;ce.setState(k,M,Ut)}let Cr=!1;k.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Ct.state.version||Me.outputColorSpace!==me||I.isBatchedMesh&&Me.batching===!1||!I.isBatchedMesh&&Me.batching===!0||I.isBatchedMesh&&Me.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Me.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Me.instancing===!1||!I.isInstancedMesh&&Me.instancing===!0||I.isSkinnedMesh&&Me.skinning===!1||!I.isSkinnedMesh&&Me.skinning===!0||I.isInstancedMesh&&Me.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Me.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Me.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Me.instancingMorph===!1&&I.morphTexture!==null||Me.envMap!==_e||k.fog===!0&&Me.fog!==re||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ce.numPlanes||Me.numIntersection!==ce.numIntersection)||Me.vertexAlphas!==we||Me.vertexTangents!==De||Me.morphTargets!==Ee||Me.morphNormals!==Ye||Me.morphColors!==lt||Me.toneMapping!==st||Me.morphTargetsCount!==nt)&&(Cr=!0):(Cr=!0,Me.__version=k.version);let Jt=Me.currentProgram;Cr===!0&&(Jt=Jr(k,N,I));let $r=!1,Ri=!1,Kn=!1;const pt=Jt.getUniforms(),ci=Me.uniforms;if(be.useProgram(Jt.program)&&($r=!0,Ri=!0,Kn=!0),k.id!==L&&(L=k.id,Ri=!0),$r||y!==M){pt.setValue(U,"projectionMatrix",M.projectionMatrix),pt.setValue(U,"viewMatrix",M.matrixWorldInverse);const Ut=pt.map.cameraPosition;Ut!==void 0&&Ut.setValue(U,he.setFromMatrixPosition(M.matrixWorld)),Ze.logarithmicDepthBuffer&&pt.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&pt.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,Ri=!0,Kn=!0)}if(I.isSkinnedMesh){pt.setOptional(U,I,"bindMatrix"),pt.setOptional(U,I,"bindMatrixInverse");const Ut=I.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),pt.setValue(U,"boneTexture",Ut.boneTexture,Pe))}I.isBatchedMesh&&(pt.setOptional(U,I,"batchingTexture"),pt.setValue(U,"batchingTexture",I._matricesTexture,Pe),pt.setOptional(U,I,"batchingColorTexture"),I._colorsTexture!==null&&pt.setValue(U,"batchingColorTexture",I._colorsTexture,Pe));const Zn=F.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&ve.update(I,F,Jt),(Ri||Me.receiveShadow!==I.receiveShadow)&&(Me.receiveShadow=I.receiveShadow,pt.setValue(U,"receiveShadow",I.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(ci.envMap.value=_e,ci.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(ci.envMapIntensity.value=N.environmentIntensity),Ri&&(pt.setValue(U,"toneMappingExposure",x.toneMappingExposure),Me.needsLights&&Zl(ci,Kn),re&&k.fog===!0&&ee.refreshFogUniforms(ci,re),ee.refreshMaterialUniforms(ci,k,$,X,d.state.transmissionRenderTarget[M.id]),Dn.upload(U,hs(Me),ci,Pe)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Dn.upload(U,hs(Me),ci,Pe),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&pt.setValue(U,"center",I.center),pt.setValue(U,"modelViewMatrix",I.modelViewMatrix),pt.setValue(U,"normalMatrix",I.normalMatrix),pt.setValue(U,"modelMatrix",I.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ut=k.uniformsGroups;for(let Jn=0,$l=Ut.length;Jn<$l;Jn++){const ds=Ut[Jn];Ue.update(ds,Jt),Ue.bind(ds,Jt)}}return Jt}function Zl(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Jl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(M,N,F){Be.get(M.texture).__webglTexture=N,Be.get(M.depthTexture).__webglTexture=F;const k=Be.get(M);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=F===void 0,k.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,N){const F=Be.get(M);F.__webglFramebuffer=N,F.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,F=0){R=M,O=N,C=F;let k=!0,I=null,re=!1,de=!1;if(M){const me=Be.get(M);me.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(U.FRAMEBUFFER,null),k=!1):me.__webglFramebuffer===void 0?Pe.setupRenderTarget(M):me.__hasExternalTextures&&Pe.rebindTextures(M,Be.get(M.texture).__webglTexture,Be.get(M.depthTexture).__webglTexture);const _e=M.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(de=!0);const we=Be.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(we[N])?I=we[N][F]:I=we[N],re=!0):M.samples>0&&Pe.useMultisampledRTT(M)===!1?I=Be.get(M).__webglMultisampledFramebuffer:Array.isArray(we)?I=we[F]:I=we,b.copy(M.viewport),P.copy(M.scissor),G=M.scissorTest}else b.copy(ge).multiplyScalar($).floor(),P.copy(Se).multiplyScalar($).floor(),G=Ve;if(be.bindFramebuffer(U.FRAMEBUFFER,I)&&k&&be.drawBuffers(M,I),be.viewport(b),be.scissor(P),be.setScissorTest(G),re){const me=Be.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,me.__webglTexture,F)}else if(de){const me=Be.get(M.texture),_e=N||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,me.__webglTexture,F||0,_e)}L=-1},this.readRenderTargetPixels=function(M,N,F,k,I,re,de){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Be.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me){be.bindFramebuffer(U.FRAMEBUFFER,me);try{const _e=M.texture,we=_e.format,De=_e.type;if(!Ze.textureFormatReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-k&&F>=0&&F<=M.height-I&&U.readPixels(N,F,k,I,ue.convert(we),ue.convert(De),re)}finally{const _e=R!==null?Be.get(R).__webglFramebuffer:null;be.bindFramebuffer(U.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(M,N,F,k,I,re,de){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Be.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me){be.bindFramebuffer(U.FRAMEBUFFER,me);try{const _e=M.texture,we=_e.format,De=_e.type;if(!Ze.textureFormatReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=M.width-k&&F>=0&&F<=M.height-I){const Ee=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ee),U.bufferData(U.PIXEL_PACK_BUFFER,re.byteLength,U.STREAM_READ),U.readPixels(N,F,k,I,ue.convert(we),ue.convert(De),0),U.flush();const Ye=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await yh(U,Ye,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,Ee),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,re)}finally{U.deleteBuffer(Ee),U.deleteSync(Ye)}return re}}finally{const _e=R!==null?Be.get(R).__webglFramebuffer:null;be.bindFramebuffer(U.FRAMEBUFFER,_e)}}},this.copyFramebufferToTexture=function(M,N=null,F=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,M=arguments[1]);const k=Math.pow(2,-F),I=Math.floor(M.image.width*k),re=Math.floor(M.image.height*k),de=N!==null?N.x:0,me=N!==null?N.y:0;Pe.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,F,0,0,de,me,I,re),be.unbindTexture()},this.copyTextureToTexture=function(M,N,F=null,k=null,I=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,M=arguments[1],N=arguments[2],I=arguments[3]||0,F=null);let re,de,me,_e,we,De;F!==null?(re=F.max.x-F.min.x,de=F.max.y-F.min.y,me=F.min.x,_e=F.min.y):(re=M.image.width,de=M.image.height,me=0,_e=0),k!==null?(we=k.x,De=k.y):(we=0,De=0);const Ee=ue.convert(N.format),Ye=ue.convert(N.type);Pe.setTexture2D(N,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);const lt=U.getParameter(U.UNPACK_ROW_LENGTH),st=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ht=U.getParameter(U.UNPACK_SKIP_PIXELS),nt=U.getParameter(U.UNPACK_SKIP_ROWS),Me=U.getParameter(U.UNPACK_SKIP_IMAGES),Ct=M.isCompressedTexture?M.mipmaps[I]:M.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Ct.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ct.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,me),U.pixelStorei(U.UNPACK_SKIP_ROWS,_e),M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,I,we,De,re,de,Ee,Ye,Ct.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,I,we,De,Ct.width,Ct.height,Ee,Ct.data):U.texSubImage2D(U.TEXTURE_2D,I,we,De,Ee,Ye,Ct),U.pixelStorei(U.UNPACK_ROW_LENGTH,lt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,st),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ht),U.pixelStorei(U.UNPACK_SKIP_ROWS,nt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Me),I===0&&N.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(M,N,F=null,k=null,I=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,k=arguments[1]||null,M=arguments[2],N=arguments[3],I=arguments[4]||0);let re,de,me,_e,we,De,Ee,Ye,lt;const st=M.isCompressedTexture?M.mipmaps[I]:M.image;F!==null?(re=F.max.x-F.min.x,de=F.max.y-F.min.y,me=F.max.z-F.min.z,_e=F.min.x,we=F.min.y,De=F.min.z):(re=st.width,de=st.height,me=st.depth,_e=0,we=0,De=0),k!==null?(Ee=k.x,Ye=k.y,lt=k.z):(Ee=0,Ye=0,lt=0);const ht=ue.convert(N.format),nt=ue.convert(N.type);let Me;if(N.isData3DTexture)Pe.setTexture3D(N,0),Me=U.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)Pe.setTexture2DArray(N,0),Me=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);const Ct=U.getParameter(U.UNPACK_ROW_LENGTH),Cr=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Jt=U.getParameter(U.UNPACK_SKIP_PIXELS),$r=U.getParameter(U.UNPACK_SKIP_ROWS),Ri=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,st.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,st.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,_e),U.pixelStorei(U.UNPACK_SKIP_ROWS,we),U.pixelStorei(U.UNPACK_SKIP_IMAGES,De),M.isDataTexture||M.isData3DTexture?U.texSubImage3D(Me,I,Ee,Ye,lt,re,de,me,ht,nt,st.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(Me,I,Ee,Ye,lt,re,de,me,ht,st.data):U.texSubImage3D(Me,I,Ee,Ye,lt,re,de,me,ht,nt,st),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ct),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Cr),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Jt),U.pixelStorei(U.UNPACK_SKIP_ROWS,$r),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ri),I===0&&N.generateMipmaps&&U.generateMipmap(Me),be.unbindTexture()},this.initRenderTarget=function(M){Be.get(M).__webglFramebuffer===void 0&&Pe.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Pe.setTextureCube(M,0):M.isData3DTexture?Pe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Pe.setTexture2DArray(M,0):Pe.setTexture2D(M,0),be.unbindTexture()},this.resetState=function(){O=0,C=0,R=null,be.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===da?"display-p3":"srgb",t.unpackColorSpace=qe.workingColorSpace===nn?"display-p3":"srgb"}}class os{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=i}clone(){return new os(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Cf extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zt,this.environmentIntensity=1,this.environmentRotation=new Zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Wa extends dr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nn=new D,In=new D,dl=new tt,kr=new Sa,Fn=new pn,Xa=new D,pl=new D;class Pf extends Mt{constructor(e=new Wt,t=new Wa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,a=t.count;n<a;n++)Nn.fromBufferAttribute(t,n-1),In.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Nn.distanceTo(In);e.setAttribute("lineDistance",new Yt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fn.copy(i.boundingSphere),Fn.applyMatrix4(n),Fn.radius+=a,e.ray.intersectsSphere(Fn)===!1)return;dl.copy(n).invert(),kr.copy(e.ray).applyMatrix4(dl);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,p=i.attributes.position;if(h!==null){const u=Math.max(0,s.start),f=Math.min(h.count,s.start+s.count);for(let g=u,_=f-1;g<_;g+=c){const d=h.getX(g),m=h.getX(g+1),E=Bn(this,e,kr,l,d,m);E&&t.push(E)}if(this.isLineLoop){const g=h.getX(f-1),_=h.getX(u),d=Bn(this,e,kr,l,g,_);d&&t.push(d)}}else{const u=Math.max(0,s.start),f=Math.min(p.count,s.start+s.count);for(let g=u,_=f-1;g<_;g+=c){const d=Bn(this,e,kr,l,g,g+1);d&&t.push(d)}if(this.isLineLoop){const g=Bn(this,e,kr,l,f-1,u);g&&t.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}}function Bn(r,e,t,i,n,a){const s=r.geometry.attributes.position;if(Nn.fromBufferAttribute(s,n),In.fromBufferAttribute(s,a),t.distanceSqToSegment(Nn,In,Xa,pl)>i)return;Xa.applyMatrix4(r.matrixWorld);const o=e.ray.origin.distanceTo(Xa);if(!(o<e.near||o>e.far))return{distance:o,point:pl.clone().applyMatrix4(r.matrixWorld),index:n,face:null,faceIndex:null,object:r}}const ml=new D,fl=new D;class gl extends Pf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,a=t.count;n<a;n+=2)ml.fromBufferAttribute(t,n),fl.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+ml.distanceTo(fl);e.setAttribute("lineDistance",new Yt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const zn=new D,kn=new D,ja=new D,Hn=new Xt;class _l extends Wt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),n=Math.cos(Qi*t),a=e.getIndex(),s=e.getAttribute("position"),o=a?a.count:s.count,l=[0,0,0],c=["a","b","c"],h=new Array(3),p={},u=[];for(let f=0;f<o;f+=3){a?(l[0]=a.getX(f),l[1]=a.getX(f+1),l[2]=a.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);const{a:g,b:_,c:d}=Hn;if(g.fromBufferAttribute(s,l[0]),_.fromBufferAttribute(s,l[1]),d.fromBufferAttribute(s,l[2]),Hn.getNormal(ja),h[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[1]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[2]=`${Math.round(d.x*i)},${Math.round(d.y*i)},${Math.round(d.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let m=0;m<3;m++){const E=(m+1)%3,x=h[m],T=h[E],O=Hn[c[m]],C=Hn[c[E]],R=`${x}_${T}`,L=`${T}_${x}`;L in p&&p[L]?(ja.dot(p[L].normal)<=n&&(u.push(O.x,O.y,O.z),u.push(C.x,C.y,C.z)),p[L]=null):R in p||(p[R]={index0:l[m],index1:l[E],normal:ja.clone()})}}for(const f in p)if(p[f]){const{index0:g,index1:_}=p[f];zn.fromBufferAttribute(s,g),kn.fromBufferAttribute(s,_),u.push(zn.x,zn.y,zn.z),u.push(kn.x,kn.y,kn.z)}this.setAttribute("position",new Yt(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class vl extends dr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ne(16777215),this.specular=new Ne(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$s,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const xl={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Lf{constructor(e,t,i){const n=this;let a=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,a===!1&&n.onStart!==void 0&&n.onStart(h,s,o),a=!0},this.itemEnd=function(h){s++,n.onProgress!==void 0&&n.onProgress(h,s,o),s===o&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){const p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){const f=c[p],g=c[p+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Uf=new Lf;class Ya{constructor(e){this.manager=e!==void 0?e:Uf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,a){i.load(e,n,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ya.DEFAULT_MATERIAL_NAME="__DEFAULT";class Df extends Ya{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=xl.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;const o=Dr("img");function l(){h(),xl.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(p){h(),n&&n(p),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class Of extends Ya{constructor(e){super(e)}load(e,t,i,n){const a=new Ua;a.colorSpace=It;const s=new Df(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function l(c){s.load(e[c],function(h){a.images[c]=h,o++,o===6&&(a.needsUpdate=!0,t&&t(a))},void 0,n)}for(let c=0;c<e.length;++c)l(c);return a}}class Ml extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Nf extends Ml{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const qa=new tt,bl=new D,yl=new D;class If{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oa,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;bl.setFromMatrixPosition(e.matrixWorld),t.position.copy(bl),yl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yl),t.updateMatrixWorld(),qa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Sl=new tt,Hr=new D,Ka=new D;class Ff extends If{constructor(){super(new wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Hr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Hr),Ka.copy(i.position),Ka.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ka),i.updateMatrixWorld(),n.makeTranslation(-Hr.x,-Hr.y,-Hr.z),Sl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sl)}}class Bf extends Ml{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Ff}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class El{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$n}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$n);const Tl={type:"change"},Za={type:"start"},wl={type:"end"},Vn=new Sa,Al=new oi,zf=Math.cos(70*Mh.DEG2RAD);class kf extends Di{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wi.ROTATE,MIDDLE:Wi.DOLLY,RIGHT:Wi.PAN},this.touches={ONE:Xi.ROTATE,TWO:Xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",ce),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ce),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Tl),i.update(),a=n.NONE},this.update=function(){const A=new D,S=new Oi().setFromUnitVectors(e.up,new D(0,1,0)),J=S.clone().invert(),z=new D,Y=new Oi,ie=new D,fe=2*Math.PI;return function(Je=null){const it=i.object.position;A.copy(it).sub(i.target),A.applyQuaternion(S),o.setFromVector3(A),i.autoRotate&&a===n.NONE&&G(b(Je)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ke=i.minAzimuthAngle,ke=i.maxAzimuthAngle;isFinite(Ke)&&isFinite(ke)&&(Ke<-Math.PI?Ke+=fe:Ke>Math.PI&&(Ke-=fe),ke<-Math.PI?ke+=fe:ke>Math.PI&&(ke-=fe),Ke<=ke?o.theta=Math.max(Ke,Math.min(ke,o.theta)):o.theta=o.theta>(Ke+ke)/2?Math.max(Ke,o.theta):Math.min(ke,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let gt=!1;if(i.zoomToCursor&&C||i.object.isOrthographicCamera)o.radius=ge(o.radius);else{const ot=o.radius;o.radius=ge(o.radius*c),gt=ot!=o.radius}if(A.setFromSpherical(o),A.applyQuaternion(J),it.copy(i.target).add(A),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),i.zoomToCursor&&C){let ot=null;if(i.object.isPerspectiveCamera){const Rt=A.length();ot=ge(Rt*c);const li=Rt-ot;i.object.position.addScaledVector(T,li),i.object.updateMatrixWorld(),gt=!!li}else if(i.object.isOrthographicCamera){const Rt=new D(O.x,O.y,0);Rt.unproject(i.object);const li=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),gt=li!==i.object.zoom;const Rr=new D(O.x,O.y,0);Rr.unproject(i.object),i.object.position.sub(Rr).add(Rt),i.object.updateMatrixWorld(),ot=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ot!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ot).add(i.object.position):(Vn.origin.copy(i.object.position),Vn.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Vn.direction))<zf?e.lookAt(i.target):(Al.setFromNormalAndCoplanarPoint(i.object.up,i.target),Vn.intersectPlane(Al,i.target))))}else if(i.object.isOrthographicCamera){const ot=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),ot!==i.object.zoom&&(i.object.updateProjectionMatrix(),gt=!0)}return c=1,C=!1,gt||z.distanceToSquared(i.object.position)>s||8*(1-Y.dot(i.object.quaternion))>s||ie.distanceToSquared(i.target)>s?(i.dispatchEvent(Tl),z.copy(i.object.position),Y.copy(i.object.quaternion),ie.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ve),i.domElement.removeEventListener("pointerdown",rt),i.domElement.removeEventListener("pointercancel",v),i.domElement.removeEventListener("wheel",te),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",v),i.domElement.getRootNode().removeEventListener("keydown",xe,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ce),i._domElementKeyEvents=null)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=n.NONE;const s=1e-6,o=new El,l=new El;let c=1;const h=new D,p=new Ae,u=new Ae,f=new Ae,g=new Ae,_=new Ae,d=new Ae,m=new Ae,E=new Ae,x=new Ae,T=new D,O=new Ae;let C=!1;const R=[],L={};let y=!1;function b(A){return A!==null?2*Math.PI/60*i.autoRotateSpeed*A:2*Math.PI/60/60*i.autoRotateSpeed}function P(A){const S=Math.abs(A*.01);return Math.pow(.95,i.zoomSpeed*S)}function G(A){l.theta-=A}function V(A){l.phi-=A}const K=function(){const A=new D;return function(S,J){A.setFromMatrixColumn(J,0),A.multiplyScalar(-S),h.add(A)}}(),Z=function(){const A=new D;return function(S,J){i.screenSpacePanning===!0?A.setFromMatrixColumn(J,1):(A.setFromMatrixColumn(J,0),A.crossVectors(i.object.up,A)),A.multiplyScalar(S),h.add(A)}}(),X=function(){const A=new D;return function(S,J){const z=i.domElement;if(i.object.isPerspectiveCamera){const Y=i.object.position;A.copy(Y).sub(i.target);let ie=A.length();ie*=Math.tan(i.object.fov/2*Math.PI/180),K(2*S*ie/z.clientHeight,i.object.matrix),Z(2*J*ie/z.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(K(S*(i.object.right-i.object.left)/i.object.zoom/z.clientWidth,i.object.matrix),Z(J*(i.object.top-i.object.bottom)/i.object.zoom/z.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function $(A){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(A){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function se(A,S){if(!i.zoomToCursor)return;C=!0;const J=i.domElement.getBoundingClientRect(),z=A-J.left,Y=S-J.top,ie=J.width,fe=J.height;O.x=z/ie*2-1,O.y=-(Y/fe)*2+1,T.set(O.x,O.y,1).unproject(i.object).sub(i.object.position).normalize()}function ge(A){return Math.max(i.minDistance,Math.min(i.maxDistance,A))}function Se(A){p.set(A.clientX,A.clientY)}function Ve(A){se(A.clientX,A.clientX),m.set(A.clientX,A.clientY)}function je(A){g.set(A.clientX,A.clientY)}function j(A){u.set(A.clientX,A.clientY),f.subVectors(u,p).multiplyScalar(i.rotateSpeed);const S=i.domElement;G(2*Math.PI*f.x/S.clientHeight),V(2*Math.PI*f.y/S.clientHeight),p.copy(u),i.update()}function ne(A){E.set(A.clientX,A.clientY),x.subVectors(E,m),x.y>0?$(P(x.y)):x.y<0&&W(P(x.y)),m.copy(E),i.update()}function pe(A){_.set(A.clientX,A.clientY),d.subVectors(_,g).multiplyScalar(i.panSpeed),X(d.x,d.y),g.copy(_),i.update()}function he(A){se(A.clientX,A.clientY),A.deltaY<0?W(P(A.deltaY)):A.deltaY>0&&$(P(A.deltaY)),i.update()}function Fe(A){let S=!1;switch(A.code){case i.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,i.keyPanSpeed),S=!0;break;case i.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,-i.keyPanSpeed),S=!0;break;case i.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?G(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(i.keyPanSpeed,0),S=!0;break;case i.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?G(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(-i.keyPanSpeed,0),S=!0;break}S&&(A.preventDefault(),i.update())}function Ce(A){if(R.length===1)p.set(A.pageX,A.pageY);else{const S=Ue(A),J=.5*(A.pageX+S.x),z=.5*(A.pageY+S.y);p.set(J,z)}}function Ge(A){if(R.length===1)g.set(A.pageX,A.pageY);else{const S=Ue(A),J=.5*(A.pageX+S.x),z=.5*(A.pageY+S.y);g.set(J,z)}}function U(A){const S=Ue(A),J=A.pageX-S.x,z=A.pageY-S.y,Y=Math.sqrt(J*J+z*z);m.set(0,Y)}function We(A){i.enableZoom&&U(A),i.enablePan&&Ge(A)}function He(A){i.enableZoom&&U(A),i.enableRotate&&Ce(A)}function Ze(A){if(R.length==1)u.set(A.pageX,A.pageY);else{const J=Ue(A),z=.5*(A.pageX+J.x),Y=.5*(A.pageY+J.y);u.set(z,Y)}f.subVectors(u,p).multiplyScalar(i.rotateSpeed);const S=i.domElement;G(2*Math.PI*f.x/S.clientHeight),V(2*Math.PI*f.y/S.clientHeight),p.copy(u)}function be(A){if(R.length===1)_.set(A.pageX,A.pageY);else{const S=Ue(A),J=.5*(A.pageX+S.x),z=.5*(A.pageY+S.y);_.set(J,z)}d.subVectors(_,g).multiplyScalar(i.panSpeed),X(d.x,d.y),g.copy(_)}function Xe(A){const S=Ue(A),J=A.pageX-S.x,z=A.pageY-S.y,Y=Math.sqrt(J*J+z*z);E.set(0,Y),x.set(0,Math.pow(E.y/m.y,i.zoomSpeed)),$(x.y),m.copy(E);const ie=(A.pageX+S.x)*.5,fe=(A.pageY+S.y)*.5;se(ie,fe)}function Be(A){i.enableZoom&&Xe(A),i.enablePan&&be(A)}function Pe(A){i.enableZoom&&Xe(A),i.enableRotate&&Ze(A)}function rt(A){i.enabled!==!1&&(R.length===0&&(i.domElement.setPointerCapture(A.pointerId),i.domElement.addEventListener("pointermove",w),i.domElement.addEventListener("pointerup",v)),!ue(A)&&(ze(A),A.pointerType==="touch"?Re(A):H(A)))}function w(A){i.enabled!==!1&&(A.pointerType==="touch"?ae(A):Q(A))}function v(A){switch(Te(A),R.length){case 0:i.domElement.releasePointerCapture(A.pointerId),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",v),i.dispatchEvent(wl),a=n.NONE;break;case 1:const S=R[0],J=L[S];Re({pointerId:S,pageX:J.x,pageY:J.y});break}}function H(A){let S;switch(A.button){case 0:S=i.mouseButtons.LEFT;break;case 1:S=i.mouseButtons.MIDDLE;break;case 2:S=i.mouseButtons.RIGHT;break;default:S=-1}switch(S){case Wi.DOLLY:if(i.enableZoom===!1)return;Ve(A),a=n.DOLLY;break;case Wi.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enablePan===!1)return;je(A),a=n.PAN}else{if(i.enableRotate===!1)return;Se(A),a=n.ROTATE}break;case Wi.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enableRotate===!1)return;Se(A),a=n.ROTATE}else{if(i.enablePan===!1)return;je(A),a=n.PAN}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(Za)}function Q(A){switch(a){case n.ROTATE:if(i.enableRotate===!1)return;j(A);break;case n.DOLLY:if(i.enableZoom===!1)return;ne(A);break;case n.PAN:if(i.enablePan===!1)return;pe(A);break}}function te(A){i.enabled===!1||i.enableZoom===!1||a!==n.NONE||(A.preventDefault(),i.dispatchEvent(Za),he(ee(A)),i.dispatchEvent(wl))}function ee(A){const S=A.deltaMode,J={clientX:A.clientX,clientY:A.clientY,deltaY:A.deltaY};switch(S){case 1:J.deltaY*=16;break;case 2:J.deltaY*=100;break}return A.ctrlKey&&!y&&(J.deltaY*=10),J}function xe(A){A.key==="Control"&&(y=!0,i.domElement.getRootNode().addEventListener("keyup",oe,{passive:!0,capture:!0}))}function oe(A){A.key==="Control"&&(y=!1,i.domElement.getRootNode().removeEventListener("keyup",oe,{passive:!0,capture:!0}))}function ce(A){i.enabled===!1||i.enablePan===!1||Fe(A)}function Re(A){switch(Le(A),R.length){case 1:switch(i.touches.ONE){case Xi.ROTATE:if(i.enableRotate===!1)return;Ce(A),a=n.TOUCH_ROTATE;break;case Xi.PAN:if(i.enablePan===!1)return;Ge(A),a=n.TOUCH_PAN;break;default:a=n.NONE}break;case 2:switch(i.touches.TWO){case Xi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;We(A),a=n.TOUCH_DOLLY_PAN;break;case Xi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;He(A),a=n.TOUCH_DOLLY_ROTATE;break;default:a=n.NONE}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(Za)}function ae(A){switch(Le(A),a){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ze(A),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;be(A),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Be(A),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Pe(A),i.update();break;default:a=n.NONE}}function ve(A){i.enabled!==!1&&A.preventDefault()}function ze(A){R.push(A.pointerId)}function Te(A){delete L[A.pointerId];for(let S=0;S<R.length;S++)if(R[S]==A.pointerId){R.splice(S,1);return}}function ue(A){for(let S=0;S<R.length;S++)if(R[S]==A.pointerId)return!0;return!1}function Le(A){let S=L[A.pointerId];S===void 0&&(S=new Ae,L[A.pointerId]=S),S.set(A.pageX,A.pageY)}function Ue(A){const S=A.pointerId===R[0]?R[1]:R[0];return L[S]}i.domElement.addEventListener("contextmenu",ve),i.domElement.addEventListener("pointerdown",rt),i.domElement.addEventListener("pointercancel",v),i.domElement.addEventListener("wheel",te,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",xe,{passive:!0,capture:!0}),this.update()}}class Hf{constructor(e="",t=!0,i=40){ye(this,"scene");ye(this,"camera");ye(this,"camera_front");ye(this,"camera_top");ye(this,"camera_right");ye(this,"renderer");ye(this,"canvas");ye(this,"headlight");ye(this,"controls");ye(this,"radius");ye(this,"angle");ye(this,"resoX");ye(this,"resoY");ye(this,"current");this.scene=new Cf,this.camera_front=new Pn(-20,20,20,-20,.1,200),this.camera_front.position.set(30,0,0),this.camera_front.lookAt(new D),this.camera_top=new Pn(-20,20,20,-20,.1,200),this.camera_top.position.set(0,30,0),this.camera_top.lookAt(new D),this.camera_right=new Pn(-20,20,20,-20,.1,200),this.camera_right.position.set(0,0,30),this.camera_right.lookAt(new D),this.radius=i,this.angle=.125,e!=""?(this.canvas=document.getElementById(e),this.renderer=new ul({canvas:this.canvas}),this.resoX=this.canvas.width,this.resoY=this.canvas.height):(this.renderer=new ul,this.resoX=window.innerWidth,this.resoY=window.innerHeight,this.renderer.setSize(this.resoX,this.resoY),document.body.appendChild(this.renderer.domElement),this.canvas=this.renderer.domElement),this.camera=new wt(50,this.resoX/this.resoY,.1,1e3),this.camera.position.set(this.radius*Math.cos(this.angle*2*Math.PI),this.radius/3,this.radius*Math.cos(this.angle*2*Math.PI)),this.camera.lookAt(new D),this.current="Perspective",this.controls=new kf(this.camera,this.renderer.domElement),this.headlight=new Bf(16777215,1,100),t&&(this.headlight.position.set(this.camera.position.x,this.camera.position.y,this.camera.position.z),this.scene.add(this.headlight));let n=this;window.addEventListener("resize",a,!1);function a(){n.camera.aspect=window.innerWidth/window.innerHeight,n.camera.updateProjectionMatrix(),n.renderer.setSize(window.innerWidth,window.innerHeight),n.render()}}headlight_update(){this.headlight.position.set(this.camera.position.x,this.camera.position.y,this.camera.position.z)}render(){this.current=="Perspective"?this.renderer.render(this.scene,this.camera):this.current=="Front"?this.renderer.render(this.scene,this.camera_front):this.current=="Right"?this.renderer.render(this.scene,this.camera_right):this.renderer.render(this.scene,this.camera_top)}}function Vf(r){if(!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=r,document.head.appendChild(e),r}}function Sr(r,e){var t=r.__state.conversionName.toString(),i=Math.round(r.r),n=Math.round(r.g),a=Math.round(r.b),s=r.a,o=Math.round(r.h),l=r.s.toFixed(1),c=r.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var h=r.hex.toString(16);h.length<6;)h="0"+h;return"#"+h}else{if(t==="CSS_RGB")return"rgb("+i+","+n+","+a+")";if(t==="CSS_RGBA")return"rgba("+i+","+n+","+a+","+s+")";if(t==="HEX")return"0x"+r.hex.toString(16);if(t==="RGB_ARRAY")return"["+i+","+n+","+a+"]";if(t==="RGBA_ARRAY")return"["+i+","+n+","+a+","+s+"]";if(t==="RGB_OBJ")return"{r:"+i+",g:"+n+",b:"+a+"}";if(t==="RGBA_OBJ")return"{r:"+i+",g:"+n+",b:"+a+",a:"+s+"}";if(t==="HSV_OBJ")return"{h:"+o+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+o+",s:"+l+",v:"+c+",a:"+s+"}"}return"unknown format"}var Rl=Array.prototype.forEach,Vr=Array.prototype.slice,q={BREAK:{},extend:function(r){return this.each(Vr.call(arguments,1),function(e){var t=this.isObject(e)?Object.keys(e):[];t.forEach((function(i){this.isUndefined(e[i])||(r[i]=e[i])}).bind(this))},this),r},defaults:function(r){return this.each(Vr.call(arguments,1),function(e){var t=this.isObject(e)?Object.keys(e):[];t.forEach((function(i){this.isUndefined(r[i])&&(r[i]=e[i])}).bind(this))},this),r},compose:function(){var r=Vr.call(arguments);return function(){for(var e=Vr.call(arguments),t=r.length-1;t>=0;t--)e=[r[t].apply(this,e)];return e[0]}},each:function(r,e,t){if(r){if(Rl&&r.forEach&&r.forEach===Rl)r.forEach(e,t);else if(r.length===r.length+0){var i=void 0,n=void 0;for(i=0,n=r.length;i<n;i++)if(i in r&&e.call(t,r[i],i)===this.BREAK)return}else for(var a in r)if(e.call(t,r[a],a)===this.BREAK)return}},defer:function(r){setTimeout(r,0)},debounce:function(r,e,t){var i=void 0;return function(){var n=this,a=arguments;function s(){i=null,t||r.apply(n,a)}var o=t||!i;clearTimeout(i),i=setTimeout(s,e),o&&r.apply(n,a)}},toArray:function(r){return r.toArray?r.toArray():Vr.call(r)},isUndefined:function(r){return r===void 0},isNull:function(r){return r===null},isNaN:function(r){function e(t){return r.apply(this,arguments)}return e.toString=function(){return r.toString()},e}(function(r){return isNaN(r)}),isArray:Array.isArray||function(r){return r.constructor===Array},isObject:function(r){return r===Object(r)},isNumber:function(r){return r===r+0},isString:function(r){return r===r+""},isBoolean:function(r){return r===!1||r===!0},isFunction:function(r){return r instanceof Function}},Gf=[{litmus:q.isString,conversions:{THREE_CHAR_HEX:{read:function(r){var e=r.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return e===null?!1:{space:"HEX",hex:parseInt("0x"+e[1].toString()+e[1].toString()+e[2].toString()+e[2].toString()+e[3].toString()+e[3].toString(),0)}},write:Sr},SIX_CHAR_HEX:{read:function(r){var e=r.match(/^#([A-F0-9]{6})$/i);return e===null?!1:{space:"HEX",hex:parseInt("0x"+e[1].toString(),0)}},write:Sr},CSS_RGB:{read:function(r){var e=r.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return e===null?!1:{space:"RGB",r:parseFloat(e[1]),g:parseFloat(e[2]),b:parseFloat(e[3])}},write:Sr},CSS_RGBA:{read:function(r){var e=r.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return e===null?!1:{space:"RGB",r:parseFloat(e[1]),g:parseFloat(e[2]),b:parseFloat(e[3]),a:parseFloat(e[4])}},write:Sr}}},{litmus:q.isNumber,conversions:{HEX:{read:function(r){return{space:"HEX",hex:r,conversionName:"HEX"}},write:function(r){return r.hex}}}},{litmus:q.isArray,conversions:{RGB_ARRAY:{read:function(r){return r.length!==3?!1:{space:"RGB",r:r[0],g:r[1],b:r[2]}},write:function(r){return[r.r,r.g,r.b]}},RGBA_ARRAY:{read:function(r){return r.length!==4?!1:{space:"RGB",r:r[0],g:r[1],b:r[2],a:r[3]}},write:function(r){return[r.r,r.g,r.b,r.a]}}}},{litmus:q.isObject,conversions:{RGBA_OBJ:{read:function(r){return q.isNumber(r.r)&&q.isNumber(r.g)&&q.isNumber(r.b)&&q.isNumber(r.a)?{space:"RGB",r:r.r,g:r.g,b:r.b,a:r.a}:!1},write:function(r){return{r:r.r,g:r.g,b:r.b,a:r.a}}},RGB_OBJ:{read:function(r){return q.isNumber(r.r)&&q.isNumber(r.g)&&q.isNumber(r.b)?{space:"RGB",r:r.r,g:r.g,b:r.b}:!1},write:function(r){return{r:r.r,g:r.g,b:r.b}}},HSVA_OBJ:{read:function(r){return q.isNumber(r.h)&&q.isNumber(r.s)&&q.isNumber(r.v)&&q.isNumber(r.a)?{space:"HSV",h:r.h,s:r.s,v:r.v,a:r.a}:!1},write:function(r){return{h:r.h,s:r.s,v:r.v,a:r.a}}},HSV_OBJ:{read:function(r){return q.isNumber(r.h)&&q.isNumber(r.s)&&q.isNumber(r.v)?{space:"HSV",h:r.h,s:r.s,v:r.v}:!1},write:function(r){return{h:r.h,s:r.s,v:r.v}}}}}],Gr=void 0,Gn=void 0,Ja=function(){Gn=!1;var r=arguments.length>1?q.toArray(arguments):arguments[0];return q.each(Gf,function(e){if(e.litmus(r))return q.each(e.conversions,function(t,i){if(Gr=t.read(r),Gn===!1&&Gr!==!1)return Gn=Gr,Gr.conversionName=i,Gr.conversion=t,q.BREAK}),q.BREAK}),Gn},Cl=void 0,Wn={hsv_to_rgb:function(r,e,t){var i=Math.floor(r/60)%6,n=r/60-Math.floor(r/60),a=t*(1-e),s=t*(1-n*e),o=t*(1-(1-n)*e),l=[[t,o,a],[s,t,a],[a,t,o],[a,s,t],[o,a,t],[t,a,s]][i];return{r:l[0]*255,g:l[1]*255,b:l[2]*255}},rgb_to_hsv:function(r,e,t){var i=Math.min(r,e,t),n=Math.max(r,e,t),a=n-i,s=void 0,o=void 0;if(n!==0)o=a/n;else return{h:NaN,s:0,v:0};return r===n?s=(e-t)/a:e===n?s=2+(t-r)/a:s=4+(r-e)/a,s/=6,s<0&&(s+=1),{h:s*360,s:o,v:n/255}},rgb_to_hex:function(r,e,t){var i=this.hex_with_component(0,2,r);return i=this.hex_with_component(i,1,e),i=this.hex_with_component(i,0,t),i},component_from_hex:function(r,e){return r>>e*8&255},hex_with_component:function(r,e,t){return t<<(Cl=e*8)|r&~(255<<Cl)}},Wf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Ht=function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")},Vt=function(){function r(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),e}}(),Ei=function r(e,t,i){e===null&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(n===void 0){var a=Object.getPrototypeOf(e);return a===null?void 0:r(a,t,i)}else{if("value"in n)return n.value;var s=n.get;return s===void 0?void 0:s.call(i)}},Ti=function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)},wi=function(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r},ft=function(){function r(){if(Ht(this,r),this.__state=Ja.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Vt(r,[{key:"toString",value:function(){return Sr(this)}},{key:"toHexString",value:function(){return Sr(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),r}();function $a(r,e,t){Object.defineProperty(r,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(ft.recalculateRGB(this,e,t),this.__state[e])},set:function(i){this.__state.space!=="RGB"&&(ft.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i}})}function Qa(r,e){Object.defineProperty(r,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(ft.recalculateHSV(this),this.__state[e])},set:function(t){this.__state.space!=="HSV"&&(ft.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=t}})}ft.recalculateRGB=function(r,e,t){if(r.__state.space==="HEX")r.__state[e]=Wn.component_from_hex(r.__state.hex,t);else if(r.__state.space==="HSV")q.extend(r.__state,Wn.hsv_to_rgb(r.__state.h,r.__state.s,r.__state.v));else throw new Error("Corrupted color state")},ft.recalculateHSV=function(r){var e=Wn.rgb_to_hsv(r.r,r.g,r.b);q.extend(r.__state,{s:e.s,v:e.v}),q.isNaN(e.h)?q.isUndefined(r.__state.h)&&(r.__state.h=0):r.__state.h=e.h},ft.COMPONENTS=["r","g","b","h","s","v","hex","a"],$a(ft.prototype,"r",2),$a(ft.prototype,"g",1),$a(ft.prototype,"b",0),Qa(ft.prototype,"h"),Qa(ft.prototype,"s"),Qa(ft.prototype,"v"),Object.defineProperty(ft.prototype,"a",{get:function(){return this.__state.a},set:function(r){this.__state.a=r}}),Object.defineProperty(ft.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Wn.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(r){this.__state.space="HEX",this.__state.hex=r}});var Gi=function(){function r(e,t){Ht(this,r),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Vt(r,[{key:"onChange",value:function(e){return this.__onChange=e,this}},{key:"onFinishChange",value:function(e){return this.__onFinishChange=e,this}},{key:"setValue",value:function(e){return this.object[this.property]=e,this.__onChange&&this.__onChange.call(this,e),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),r}(),Xf={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Pl={};q.each(Xf,function(r,e){q.each(r,function(t){Pl[t]=e})});var jf=/(\d+(\.\d+)?)px/;function Kt(r){if(r==="0"||q.isUndefined(r))return 0;var e=r.match(jf);return q.isNull(e)?0:parseFloat(e[1])}var B={makeSelectable:function(r,e){r===void 0||r.style===void 0||(r.onselectstart=e?function(){return!1}:function(){},r.style.MozUserSelect=e?"auto":"none",r.style.KhtmlUserSelect=e?"auto":"none",r.unselectable=e?"on":"off")},makeFullscreen:function(r,e,t){var i=t,n=e;q.isUndefined(n)&&(n=!0),q.isUndefined(i)&&(i=!0),r.style.position="absolute",n&&(r.style.left=0,r.style.right=0),i&&(r.style.top=0,r.style.bottom=0)},fakeEvent:function(r,e,t,i){var n=t||{},a=Pl[e];if(!a)throw new Error("Event type "+e+" not supported.");var s=document.createEvent(a);switch(a){case"MouseEvents":{var o=n.x||n.clientX||0,l=n.y||n.clientY||0;s.initMouseEvent(e,n.bubbles||!1,n.cancelable||!0,window,n.clickCount||1,0,0,o,l,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var c=s.initKeyboardEvent||s.initKeyEvent;q.defaults(n,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),c(e,n.bubbles||!1,n.cancelable,window,n.ctrlKey,n.altKey,n.shiftKey,n.metaKey,n.keyCode,n.charCode);break}default:{s.initEvent(e,n.bubbles||!1,n.cancelable||!0);break}}q.defaults(s,i),r.dispatchEvent(s)},bind:function(r,e,t,i){var n=i||!1;return r.addEventListener?r.addEventListener(e,t,n):r.attachEvent&&r.attachEvent("on"+e,t),B},unbind:function(r,e,t,i){var n=i||!1;return r.removeEventListener?r.removeEventListener(e,t,n):r.detachEvent&&r.detachEvent("on"+e,t),B},addClass:function(r,e){if(r.className===void 0)r.className=e;else if(r.className!==e){var t=r.className.split(/ +/);t.indexOf(e)===-1&&(t.push(e),r.className=t.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return B},removeClass:function(r,e){if(e)if(r.className===e)r.removeAttribute("class");else{var t=r.className.split(/ +/),i=t.indexOf(e);i!==-1&&(t.splice(i,1),r.className=t.join(" "))}else r.className=void 0;return B},hasClass:function(r,e){return new RegExp("(?:^|\\s+)"+e+"(?:\\s+|$)").test(r.className)||!1},getWidth:function(r){var e=getComputedStyle(r);return Kt(e["border-left-width"])+Kt(e["border-right-width"])+Kt(e["padding-left"])+Kt(e["padding-right"])+Kt(e.width)},getHeight:function(r){var e=getComputedStyle(r);return Kt(e["border-top-width"])+Kt(e["border-bottom-width"])+Kt(e["padding-top"])+Kt(e["padding-bottom"])+Kt(e.height)},getOffset:function(r){var e=r,t={left:0,top:0};if(e.offsetParent)do t.left+=e.offsetLeft,t.top+=e.offsetTop,e=e.offsetParent;while(e);return t},isActive:function(r){return r===document.activeElement&&(r.type||r.href)}},Ll=function(r){Ti(e,r);function e(t,i){Ht(this,e);var n=wi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),a=n;n.__prev=n.getValue(),n.__checkbox=document.createElement("input"),n.__checkbox.setAttribute("type","checkbox");function s(){a.setValue(!a.__prev)}return B.bind(n.__checkbox,"change",s,!1),n.domElement.appendChild(n.__checkbox),n.updateDisplay(),n}return Vt(e,[{key:"setValue",value:function(t){var i=Ei(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,t);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Ei(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Gi),Yf=function(r){Ti(e,r);function e(t,i,n){Ht(this,e);var a=wi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),s=n,o=a;if(a.__select=document.createElement("select"),q.isArray(s)){var l={};q.each(s,function(c){l[c]=c}),s=l}return q.each(s,function(c,h){var p=document.createElement("option");p.innerHTML=h,p.setAttribute("value",c),o.__select.appendChild(p)}),a.updateDisplay(),B.bind(a.__select,"change",function(){var c=this.options[this.selectedIndex].value;o.setValue(c)}),a.domElement.appendChild(a.__select),a}return Vt(e,[{key:"setValue",value:function(t){var i=Ei(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,t);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return B.isActive(this.__select)?this:(this.__select.value=this.getValue(),Ei(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Gi),qf=function(r){Ti(e,r);function e(t,i){Ht(this,e);var n=wi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),a=n;function s(){a.setValue(a.__input.value)}function o(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}return n.__input=document.createElement("input"),n.__input.setAttribute("type","text"),B.bind(n.__input,"keyup",s),B.bind(n.__input,"change",s),B.bind(n.__input,"blur",o),B.bind(n.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),n.updateDisplay(),n.domElement.appendChild(n.__input),n}return Vt(e,[{key:"updateDisplay",value:function(){return B.isActive(this.__input)||(this.__input.value=this.getValue()),Ei(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Gi);function Ul(r){var e=r.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var Dl=function(r){Ti(e,r);function e(t,i,n){Ht(this,e);var a=wi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),s=n||{};return a.__min=s.min,a.__max=s.max,a.__step=s.step,q.isUndefined(a.__step)?a.initialValue===0?a.__impliedStep=1:a.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(a.initialValue))/Math.LN10))/10:a.__impliedStep=a.__step,a.__precision=Ul(a.__impliedStep),a}return Vt(e,[{key:"setValue",value:function(t){var i=t;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),Ei(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(t){return this.__min=t,this}},{key:"max",value:function(t){return this.__max=t,this}},{key:"step",value:function(t){return this.__step=t,this.__impliedStep=t,this.__precision=Ul(t),this}}]),e}(Gi);function Kf(r,e){var t=Math.pow(10,e);return Math.round(r*t)/t}var Xn=function(r){Ti(e,r);function e(t,i,n){Ht(this,e);var a=wi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,n));a.__truncationSuspended=!1;var s=a,o=void 0;function l(){var g=parseFloat(s.__input.value);q.isNaN(g)||s.setValue(g)}function c(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}function h(){c()}function p(g){var _=o-g.clientY;s.setValue(s.getValue()+_*s.__impliedStep),o=g.clientY}function u(){B.unbind(window,"mousemove",p),B.unbind(window,"mouseup",u),c()}function f(g){B.bind(window,"mousemove",p),B.bind(window,"mouseup",u),o=g.clientY}return a.__input=document.createElement("input"),a.__input.setAttribute("type","text"),B.bind(a.__input,"change",l),B.bind(a.__input,"blur",h),B.bind(a.__input,"mousedown",f),B.bind(a.__input,"keydown",function(g){g.keyCode===13&&(s.__truncationSuspended=!0,this.blur(),s.__truncationSuspended=!1,c())}),a.updateDisplay(),a.domElement.appendChild(a.__input),a}return Vt(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():Kf(this.getValue(),this.__precision),Ei(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Dl);function Ol(r,e,t,i,n){return i+(n-i)*((r-e)/(t-e))}var es=function(r){Ti(e,r);function e(t,i,n,a,s){Ht(this,e);var o=wi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,{min:n,max:a,step:s})),l=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),B.bind(o.__background,"mousedown",c),B.bind(o.__background,"touchstart",u),B.addClass(o.__background,"slider"),B.addClass(o.__foreground,"slider-fg");function c(_){document.activeElement.blur(),B.bind(window,"mousemove",h),B.bind(window,"mouseup",p),h(_)}function h(_){_.preventDefault();var d=l.__background.getBoundingClientRect();return l.setValue(Ol(_.clientX,d.left,d.right,l.__min,l.__max)),!1}function p(){B.unbind(window,"mousemove",h),B.unbind(window,"mouseup",p),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function u(_){_.touches.length===1&&(B.bind(window,"touchmove",f),B.bind(window,"touchend",g),f(_))}function f(_){var d=_.touches[0].clientX,m=l.__background.getBoundingClientRect();l.setValue(Ol(d,m.left,m.right,l.__min,l.__max))}function g(){B.unbind(window,"touchmove",f),B.unbind(window,"touchend",g),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return Vt(e,[{key:"updateDisplay",value:function(){var t=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=t*100+"%",Ei(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Dl),Nl=function(r){Ti(e,r);function e(t,i,n){Ht(this,e);var a=wi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),s=a;return a.__button=document.createElement("div"),a.__button.innerHTML=n===void 0?"Fire":n,B.bind(a.__button,"click",function(o){return o.preventDefault(),s.fire(),!1}),B.addClass(a.__button,"button"),a.domElement.appendChild(a.__button),a}return Vt(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Gi),ts=function(r){Ti(e,r);function e(t,i){Ht(this,e);var n=wi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));n.__color=new ft(n.getValue()),n.__temp=new ft(0);var a=n;n.domElement=document.createElement("div"),B.makeSelectable(n.domElement,!1),n.__selector=document.createElement("div"),n.__selector.className="selector",n.__saturation_field=document.createElement("div"),n.__saturation_field.className="saturation-field",n.__field_knob=document.createElement("div"),n.__field_knob.className="field-knob",n.__field_knob_border="2px solid ",n.__hue_knob=document.createElement("div"),n.__hue_knob.className="hue-knob",n.__hue_field=document.createElement("div"),n.__hue_field.className="hue-field",n.__input=document.createElement("input"),n.__input.type="text",n.__input_textShadow="0 1px 1px ",B.bind(n.__input,"keydown",function(_){_.keyCode===13&&p.call(this)}),B.bind(n.__input,"blur",p),B.bind(n.__selector,"mousedown",function(){B.addClass(this,"drag").bind(window,"mouseup",function(){B.removeClass(a.__selector,"drag")})}),B.bind(n.__selector,"touchstart",function(){B.addClass(this,"drag").bind(window,"touchend",function(){B.removeClass(a.__selector,"drag")})});var s=document.createElement("div");q.extend(n.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),q.extend(n.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:n.__field_knob_border+(n.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),q.extend(n.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),q.extend(n.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),q.extend(s.style,{width:"100%",height:"100%",background:"none"}),Il(s,"top","rgba(0,0,0,0)","#000"),q.extend(n.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),Jf(n.__hue_field),q.extend(n.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:n.__input_textShadow+"rgba(0,0,0,0.7)"}),B.bind(n.__saturation_field,"mousedown",o),B.bind(n.__saturation_field,"touchstart",o),B.bind(n.__field_knob,"mousedown",o),B.bind(n.__field_knob,"touchstart",o),B.bind(n.__hue_field,"mousedown",l),B.bind(n.__hue_field,"touchstart",l);function o(_){f(_),B.bind(window,"mousemove",f),B.bind(window,"touchmove",f),B.bind(window,"mouseup",c),B.bind(window,"touchend",c)}function l(_){g(_),B.bind(window,"mousemove",g),B.bind(window,"touchmove",g),B.bind(window,"mouseup",h),B.bind(window,"touchend",h)}function c(){B.unbind(window,"mousemove",f),B.unbind(window,"touchmove",f),B.unbind(window,"mouseup",c),B.unbind(window,"touchend",c),u()}function h(){B.unbind(window,"mousemove",g),B.unbind(window,"touchmove",g),B.unbind(window,"mouseup",h),B.unbind(window,"touchend",h),u()}function p(){var _=Ja(this.value);_!==!1?(a.__color.__state=_,a.setValue(a.__color.toOriginal())):this.value=a.__color.toString()}function u(){a.__onFinishChange&&a.__onFinishChange.call(a,a.__color.toOriginal())}n.__saturation_field.appendChild(s),n.__selector.appendChild(n.__field_knob),n.__selector.appendChild(n.__saturation_field),n.__selector.appendChild(n.__hue_field),n.__hue_field.appendChild(n.__hue_knob),n.domElement.appendChild(n.__input),n.domElement.appendChild(n.__selector),n.updateDisplay();function f(_){_.type.indexOf("touch")===-1&&_.preventDefault();var d=a.__saturation_field.getBoundingClientRect(),m=_.touches&&_.touches[0]||_,E=m.clientX,x=m.clientY,T=(E-d.left)/(d.right-d.left),O=1-(x-d.top)/(d.bottom-d.top);return O>1?O=1:O<0&&(O=0),T>1?T=1:T<0&&(T=0),a.__color.v=O,a.__color.s=T,a.setValue(a.__color.toOriginal()),!1}function g(_){_.type.indexOf("touch")===-1&&_.preventDefault();var d=a.__hue_field.getBoundingClientRect(),m=_.touches&&_.touches[0]||_,E=m.clientY,x=1-(E-d.top)/(d.bottom-d.top);return x>1?x=1:x<0&&(x=0),a.__color.h=x*360,a.setValue(a.__color.toOriginal()),!1}return n}return Vt(e,[{key:"updateDisplay",value:function(){var t=Ja(this.getValue());if(t!==!1){var i=!1;q.each(ft.COMPONENTS,function(s){if(!q.isUndefined(t[s])&&!q.isUndefined(this.__color.__state[s])&&t[s]!==this.__color.__state[s])return i=!0,{}},this),i&&q.extend(this.__color.__state,t)}q.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var n=this.__color.v<.5||this.__color.s>.5?255:0,a=255-n;q.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+n+","+n+","+n+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Il(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),q.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+n+","+n+","+n+")",textShadow:this.__input_textShadow+"rgba("+a+","+a+","+a+",.7)"})}}]),e}(Gi),Zf=["-moz-","-o-","-webkit-","-ms-",""];function Il(r,e,t,i){r.style.background="",q.each(Zf,function(n){r.style.cssText+="background: "+n+"linear-gradient("+e+", "+t+" 0%, "+i+" 100%); "})}function Jf(r){r.style.background="",r.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",r.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var $f={load:function(r,e){var t=e||document,i=t.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=r,t.getElementsByTagName("head")[0].appendChild(i)},inject:function(r,e){var t=e||document,i=document.createElement("style");i.type="text/css",i.innerHTML=r;var n=t.getElementsByTagName("head")[0];try{n.appendChild(i)}catch{}}},Qf=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,eg=function(r,e){var t=r[e];return q.isArray(arguments[2])||q.isObject(arguments[2])?new Yf(r,e,arguments[2]):q.isNumber(t)?q.isNumber(arguments[2])&&q.isNumber(arguments[3])?q.isNumber(arguments[4])?new es(r,e,arguments[2],arguments[3],arguments[4]):new es(r,e,arguments[2],arguments[3]):q.isNumber(arguments[4])?new Xn(r,e,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Xn(r,e,{min:arguments[2],max:arguments[3]}):q.isString(t)?new qf(r,e):q.isFunction(t)?new Nl(r,e,""):q.isBoolean(t)?new Ll(r,e):null};function tg(r){setTimeout(r,1e3/60)}var ig=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||tg,rg=function(){function r(){Ht(this,r),this.backgroundElement=document.createElement("div"),q.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),B.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),q.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;B.bind(this.backgroundElement,"click",function(){e.hide()})}return Vt(r,[{key:"show",value:function(){var e=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),q.defer(function(){e.backgroundElement.style.opacity=1,e.domElement.style.opacity=1,e.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var e=this,t=function i(){e.domElement.style.display="none",e.backgroundElement.style.display="none",B.unbind(e.domElement,"webkitTransitionEnd",i),B.unbind(e.domElement,"transitionend",i),B.unbind(e.domElement,"oTransitionEnd",i)};B.bind(this.domElement,"webkitTransitionEnd",t),B.bind(this.domElement,"transitionend",t),B.bind(this.domElement,"oTransitionEnd",t),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-B.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-B.getHeight(this.domElement)/2+"px"}}]),r}(),ng=Vf(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);$f.inject(ng);var Fl="dg",Bl=72,zl=20,Wr="Default",Xr=function(){try{return!!window.localStorage}catch{return!1}}(),jr=void 0,kl=!0,Er=void 0,is=!1,Hl=[],$e=function r(e){var t=this,i=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),B.addClass(this.domElement,Fl),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],i=q.defaults(i,{closeOnTop:!1,autoPlace:!0,width:r.DEFAULT_WIDTH}),i=q.defaults(i,{resizable:i.autoPlace,hideable:i.autoPlace}),q.isUndefined(i.load)?i.load={preset:Wr}:i.preset&&(i.load.preset=i.preset),q.isUndefined(i.parent)&&i.hideable&&Hl.push(this),i.resizable=q.isUndefined(i.parent)&&i.resizable,i.autoPlace&&q.isUndefined(i.scrollable)&&(i.scrollable=!0);var n=Xr&&localStorage.getItem(Tr(this,"isLocal"))==="true",a=void 0,s=void 0;if(Object.defineProperties(this,{parent:{get:function(){return i.parent}},scrollable:{get:function(){return i.scrollable}},autoPlace:{get:function(){return i.autoPlace}},closeOnTop:{get:function(){return i.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:i.load.preset},set:function(p){t.parent?t.getRoot().preset=p:i.load.preset=p,lg(this),t.revert()}},width:{get:function(){return i.width},set:function(p){i.width=p,ss(t,p)}},name:{get:function(){return i.name},set:function(p){i.name=p,s&&(s.innerHTML=i.name)}},closed:{get:function(){return i.closed},set:function(p){i.closed=p,i.closed?B.addClass(t.__ul,r.CLASS_CLOSED):B.removeClass(t.__ul,r.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=p?r.TEXT_OPEN:r.TEXT_CLOSED)}},load:{get:function(){return i.load}},useLocalStorage:{get:function(){return n},set:function(p){Xr&&(n=p,p?B.bind(window,"unload",a):B.unbind(window,"unload",a),localStorage.setItem(Tr(t,"isLocal"),p))}}}),q.isUndefined(i.parent)){if(this.closed=i.closed||!1,B.addClass(this.domElement,r.CLASS_MAIN),B.makeSelectable(this.domElement,!1),Xr&&n){t.useLocalStorage=!0;var o=localStorage.getItem(Tr(this,"gui"));o&&(i.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=r.TEXT_CLOSED,B.addClass(this.__closeButton,r.CLASS_CLOSE_BUTTON),i.closeOnTop?(B.addClass(this.__closeButton,r.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(B.addClass(this.__closeButton,r.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),B.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{i.closed===void 0&&(i.closed=!0);var l=document.createTextNode(i.name);B.addClass(l,"controller-name"),s=rs(t,l);var c=function(p){return p.preventDefault(),t.closed=!t.closed,!1};B.addClass(this.__ul,r.CLASS_CLOSED),B.addClass(s,"title"),B.bind(s,"click",c),i.closed||(this.closed=!1)}i.autoPlace&&(q.isUndefined(i.parent)&&(kl&&(Er=document.createElement("div"),B.addClass(Er,Fl),B.addClass(Er,r.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Er),kl=!1),Er.appendChild(this.domElement),B.addClass(this.domElement,r.CLASS_AUTO_PLACE)),this.parent||ss(t,i.width)),this.__resizeHandler=function(){t.onResizeDebounced()},B.bind(window,"resize",this.__resizeHandler),B.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),B.bind(this.__ul,"transitionend",this.__resizeHandler),B.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),i.resizable&&og(this),a=function(){Xr&&localStorage.getItem(Tr(t,"isLocal"))==="true"&&localStorage.setItem(Tr(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=a;function h(){var p=t.getRoot();p.width+=1,q.defer(function(){p.width-=1})}i.parent||h()};$e.toggleHide=function(){is=!is,q.each(Hl,function(r){r.domElement.style.display=is?"none":""})},$e.CLASS_AUTO_PLACE="a",$e.CLASS_AUTO_PLACE_CONTAINER="ac",$e.CLASS_MAIN="main",$e.CLASS_CONTROLLER_ROW="cr",$e.CLASS_TOO_TALL="taller-than-window",$e.CLASS_CLOSED="closed",$e.CLASS_CLOSE_BUTTON="close-button",$e.CLASS_CLOSE_TOP="close-top",$e.CLASS_CLOSE_BOTTOM="close-bottom",$e.CLASS_DRAG="drag",$e.DEFAULT_WIDTH=245,$e.TEXT_CLOSED="Close Controls",$e.TEXT_OPEN="Open Controls",$e._keydownHandler=function(r){document.activeElement.type!=="text"&&(r.which===Bl||r.keyCode===Bl)&&$e.toggleHide()},B.bind(window,"keydown",$e._keydownHandler,!1),q.extend($e.prototype,{add:function(r,e){return Yr(this,r,e,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(r,e){return Yr(this,r,e,{color:!0})},remove:function(r){this.__ul.removeChild(r.__li),this.__controllers.splice(this.__controllers.indexOf(r),1);var e=this;q.defer(function(){e.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Er.removeChild(this.domElement);var r=this;q.each(this.__folders,function(e){r.removeFolder(e)}),B.unbind(window,"keydown",$e._keydownHandler,!1),Vl(this)},addFolder:function(r){if(this.__folders[r]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+r+'"');var e={name:r,parent:this};e.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[r]&&(e.closed=this.load.folders[r].closed,e.load=this.load.folders[r]);var t=new $e(e);this.__folders[r]=t;var i=rs(this,t.domElement);return B.addClass(i,"folder"),t},removeFolder:function(r){this.__ul.removeChild(r.domElement.parentElement),delete this.__folders[r.name],this.load&&this.load.folders&&this.load.folders[r.name]&&delete this.load.folders[r.name],Vl(r);var e=this;q.each(r.__folders,function(t){r.removeFolder(t)}),q.defer(function(){e.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var r=this.getRoot();if(r.scrollable){var e=B.getOffset(r.__ul).top,t=0;q.each(r.__ul.childNodes,function(i){r.autoPlace&&i===r.__save_row||(t+=B.getHeight(i))}),window.innerHeight-e-zl<t?(B.addClass(r.domElement,$e.CLASS_TOO_TALL),r.__ul.style.height=window.innerHeight-e-zl+"px"):(B.removeClass(r.domElement,$e.CLASS_TOO_TALL),r.__ul.style.height="auto")}r.__resize_handle&&q.defer(function(){r.__resize_handle.style.height=r.__ul.offsetHeight+"px"}),r.__closeButton&&(r.__closeButton.style.width=r.width+"px")},onResizeDebounced:q.debounce(function(){this.onResize()},50),remember:function(){if(q.isUndefined(jr)&&(jr=new rg,jr.domElement.innerHTML=Qf),this.parent)throw new Error("You can only call remember on a top level GUI.");var r=this;q.each(Array.prototype.slice.call(arguments),function(e){r.__rememberedObjects.length===0&&sg(r),r.__rememberedObjects.indexOf(e)===-1&&r.__rememberedObjects.push(e)}),this.autoPlace&&ss(this,this.width)},getRoot:function(){for(var r=this;r.parent;)r=r.parent;return r},getSaveObject:function(){var r=this.load;return r.closed=this.closed,this.__rememberedObjects.length>0&&(r.preset=this.preset,r.remembered||(r.remembered={}),r.remembered[this.preset]=jn(this)),r.folders={},q.each(this.__folders,function(e,t){r.folders[t]=e.getSaveObject()}),r},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=jn(this),ns(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(r){this.load.remembered||(this.load.remembered={},this.load.remembered[Wr]=jn(this,!0)),this.load.remembered[r]=jn(this),this.preset=r,as(this,r,!0),this.saveToLocalStorageIfPossible()},revert:function(r){q.each(this.__controllers,function(e){this.getRoot().load.remembered?Gl(r||this.getRoot(),e):e.setValue(e.initialValue),e.__onFinishChange&&e.__onFinishChange.call(e,e.getValue())},this),q.each(this.__folders,function(e){e.revert(e)}),r||ns(this.getRoot(),!1)},listen:function(r){var e=this.__listening.length===0;this.__listening.push(r),e&&Xl(this.__listening)},updateDisplay:function(){q.each(this.__controllers,function(r){r.updateDisplay()}),q.each(this.__folders,function(r){r.updateDisplay()})}});function rs(r,e,t){var i=document.createElement("li");return e&&i.appendChild(e),t?r.__ul.insertBefore(i,t):r.__ul.appendChild(i),r.onResize(),i}function Vl(r){B.unbind(window,"resize",r.__resizeHandler),r.saveToLocalStorageIfPossible&&B.unbind(window,"unload",r.saveToLocalStorageIfPossible)}function ns(r,e){var t=r.__preset_select[r.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function ag(r,e,t){if(t.__li=e,t.__gui=r,q.extend(t,{options:function(a){if(arguments.length>1){var s=t.__li.nextElementSibling;return t.remove(),Yr(r,t.object,t.property,{before:s,factoryArgs:[q.toArray(arguments)]})}if(q.isArray(a)||q.isObject(a)){var o=t.__li.nextElementSibling;return t.remove(),Yr(r,t.object,t.property,{before:o,factoryArgs:[a]})}},name:function(a){return t.__li.firstElementChild.firstElementChild.innerHTML=a,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof es){var i=new Xn(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});q.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(a){var s=t[a],o=i[a];t[a]=i[a]=function(){var l=Array.prototype.slice.call(arguments);return o.apply(i,l),s.apply(t,l)}}),B.addClass(e,"has-slider"),t.domElement.insertBefore(i.domElement,t.domElement.firstElementChild)}else if(t instanceof Xn){var n=function(a){if(q.isNumber(t.__min)&&q.isNumber(t.__max)){var s=t.__li.firstElementChild.firstElementChild.innerHTML,o=t.__gui.__listening.indexOf(t)>-1;t.remove();var l=Yr(r,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return l.name(s),o&&l.listen(),l}return a};t.min=q.compose(n,t.min),t.max=q.compose(n,t.max)}else t instanceof Ll?(B.bind(e,"click",function(){B.fakeEvent(t.__checkbox,"click")}),B.bind(t.__checkbox,"click",function(a){a.stopPropagation()})):t instanceof Nl?(B.bind(e,"click",function(){B.fakeEvent(t.__button,"click")}),B.bind(e,"mouseover",function(){B.addClass(t.__button,"hover")}),B.bind(e,"mouseout",function(){B.removeClass(t.__button,"hover")})):t instanceof ts&&(B.addClass(e,"color"),t.updateDisplay=q.compose(function(a){return e.style.borderLeftColor=t.__color.toString(),a},t.updateDisplay),t.updateDisplay());t.setValue=q.compose(function(a){return r.getRoot().__preset_select&&t.isModified()&&ns(r.getRoot(),!0),a},t.setValue)}function Gl(r,e){var t=r.getRoot(),i=t.__rememberedObjects.indexOf(e.object);if(i!==-1){var n=t.__rememberedObjectIndecesToControllers[i];if(n===void 0&&(n={},t.__rememberedObjectIndecesToControllers[i]=n),n[e.property]=e,t.load&&t.load.remembered){var a=t.load.remembered,s=void 0;if(a[r.preset])s=a[r.preset];else if(a[Wr])s=a[Wr];else return;if(s[i]&&s[i][e.property]!==void 0){var o=s[i][e.property];e.initialValue=o,e.setValue(o)}}}}function Yr(r,e,t,i){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var n=void 0;if(i.color)n=new ts(e,t);else{var a=[e,t].concat(i.factoryArgs);n=eg.apply(r,a)}i.before instanceof Gi&&(i.before=i.before.__li),Gl(r,n),B.addClass(n.domElement,"c");var s=document.createElement("span");B.addClass(s,"property-name"),s.innerHTML=n.property;var o=document.createElement("div");o.appendChild(s),o.appendChild(n.domElement);var l=rs(r,o,i.before);return B.addClass(l,$e.CLASS_CONTROLLER_ROW),n instanceof ts?B.addClass(l,"color"):B.addClass(l,Wf(n.getValue())),ag(r,l,n),r.__controllers.push(n),n}function Tr(r,e){return document.location.href+"."+e}function as(r,e,t){var i=document.createElement("option");i.innerHTML=e,i.value=e,r.__preset_select.appendChild(i),t&&(r.__preset_select.selectedIndex=r.__preset_select.length-1)}function Wl(r,e){e.style.display=r.useLocalStorage?"block":"none"}function sg(r){var e=r.__save_row=document.createElement("li");B.addClass(r.domElement,"has-save"),r.__ul.insertBefore(e,r.__ul.firstChild),B.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",B.addClass(t,"button gears");var i=document.createElement("span");i.innerHTML="Save",B.addClass(i,"button"),B.addClass(i,"save");var n=document.createElement("span");n.innerHTML="New",B.addClass(n,"button"),B.addClass(n,"save-as");var a=document.createElement("span");a.innerHTML="Revert",B.addClass(a,"button"),B.addClass(a,"revert");var s=r.__preset_select=document.createElement("select");if(r.load&&r.load.remembered?q.each(r.load.remembered,function(p,u){as(r,u,u===r.preset)}):as(r,Wr,!1),B.bind(s,"change",function(){for(var p=0;p<r.__preset_select.length;p++)r.__preset_select[p].innerHTML=r.__preset_select[p].value;r.preset=this.value}),e.appendChild(s),e.appendChild(t),e.appendChild(i),e.appendChild(n),e.appendChild(a),Xr){var o=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(Tr(r,"isLocal"))==="true"&&l.setAttribute("checked","checked"),Wl(r,o),B.bind(l,"change",function(){r.useLocalStorage=!r.useLocalStorage,Wl(r,o)})}var h=document.getElementById("dg-new-constructor");B.bind(h,"keydown",function(p){p.metaKey&&(p.which===67||p.keyCode===67)&&jr.hide()}),B.bind(t,"click",function(){h.innerHTML=JSON.stringify(r.getSaveObject(),void 0,2),jr.show(),h.focus(),h.select()}),B.bind(i,"click",function(){r.save()}),B.bind(n,"click",function(){var p=prompt("Enter a new preset name.");p&&r.saveAs(p)}),B.bind(a,"click",function(){r.revert()})}function og(r){var e=void 0;r.__resize_handle=document.createElement("div"),q.extend(r.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(a){return a.preventDefault(),r.width+=e-a.clientX,r.onResize(),e=a.clientX,!1}function i(){B.removeClass(r.__closeButton,$e.CLASS_DRAG),B.unbind(window,"mousemove",t),B.unbind(window,"mouseup",i)}function n(a){return a.preventDefault(),e=a.clientX,B.addClass(r.__closeButton,$e.CLASS_DRAG),B.bind(window,"mousemove",t),B.bind(window,"mouseup",i),!1}B.bind(r.__resize_handle,"mousedown",n),B.bind(r.__closeButton,"mousedown",n),r.domElement.insertBefore(r.__resize_handle,r.domElement.firstElementChild)}function ss(r,e){r.domElement.style.width=e+"px",r.__save_row&&r.autoPlace&&(r.__save_row.style.width=e+"px"),r.__closeButton&&(r.__closeButton.style.width=e+"px")}function jn(r,e){var t={};return q.each(r.__rememberedObjects,function(i,n){var a={},s=r.__rememberedObjectIndecesToControllers[n];q.each(s,function(o,l){a[l]=e?o.initialValue:o.getValue()}),t[n]=a}),t}function lg(r){for(var e=0;e<r.__preset_select.length;e++)r.__preset_select[e].value===r.preset&&(r.__preset_select.selectedIndex=e)}function Xl(r){r.length!==0&&ig.call(window,function(){Xl(r)}),q.each(r,function(e){e.updateDisplay()})}var cg=$e;class hg{parse(e){let t="",i=0,n=0,a=0;const s=new D,o=new Ne,l=new D,c=new Ae,h=[];function p(g){let _=0,d=0,m=0;const E=g.geometry,x=new Oe,T=E.getAttribute("position"),O=E.getAttribute("normal"),C=E.getAttribute("uv"),R=E.getIndex();if(t+="o "+g.name+`
`,g.material&&g.material.name&&(t+="usemtl "+g.material.name+`
`),T!==void 0)for(let L=0,y=T.count;L<y;L++,_++)s.fromBufferAttribute(T,L),s.applyMatrix4(g.matrixWorld),t+="v "+s.x+" "+s.y+" "+s.z+`
`;if(C!==void 0)for(let L=0,y=C.count;L<y;L++,m++)c.fromBufferAttribute(C,L),t+="vt "+c.x+" "+c.y+`
`;if(O!==void 0){x.getNormalMatrix(g.matrixWorld);for(let L=0,y=O.count;L<y;L++,d++)l.fromBufferAttribute(O,L),l.applyMatrix3(x).normalize(),t+="vn "+l.x+" "+l.y+" "+l.z+`
`}if(R!==null)for(let L=0,y=R.count;L<y;L+=3){for(let b=0;b<3;b++){const P=R.getX(L+b)+1;h[b]=i+P+(O||C?"/"+(C?n+P:"")+(O?"/"+(a+P):""):"")}t+="f "+h.join(" ")+`
`}else for(let L=0,y=T.count;L<y;L+=3){for(let b=0;b<3;b++){const P=L+b+1;h[b]=i+P+(O||C?"/"+(C?n+P:"")+(O?"/"+(a+P):""):"")}t+="f "+h.join(" ")+`
`}i+=_,n+=m,a+=d}function u(g){let _=0;const d=g.geometry,m=g.type,E=d.getAttribute("position");if(t+="o "+g.name+`
`,E!==void 0)for(let x=0,T=E.count;x<T;x++,_++)s.fromBufferAttribute(E,x),s.applyMatrix4(g.matrixWorld),t+="v "+s.x+" "+s.y+" "+s.z+`
`;if(m==="Line"){t+="l ";for(let x=1,T=E.count;x<=T;x++)t+=i+x+" ";t+=`
`}if(m==="LineSegments")for(let x=1,T=x+1,O=E.count;x<O;x+=2,T=x+1)t+="l "+(i+x)+" "+(i+T)+`
`;i+=_}function f(g){let _=0;const d=g.geometry,m=d.getAttribute("position"),E=d.getAttribute("color");if(t+="o "+g.name+`
`,m!==void 0){for(let x=0,T=m.count;x<T;x++,_++)s.fromBufferAttribute(m,x),s.applyMatrix4(g.matrixWorld),t+="v "+s.x+" "+s.y+" "+s.z,E!==void 0&&(o.fromBufferAttribute(E,x).convertLinearToSRGB(),t+=" "+o.r+" "+o.g+" "+o.b),t+=`
`;t+="p ";for(let x=1,T=m.count;x<=T;x++)t+=i+x+" ";t+=`
`}i+=_}return e.traverse(function(g){g.isMesh===!0&&p(g),g.isLine===!0&&u(g),g.isPoints===!0&&f(g)}),t}}class at{constructor(e,t,i){ye(this,"x",0);ye(this,"y",0);ye(this,"z",0);this.x=e,this.y=t,this.z=i}magnitude(){return Math.pow(Math.pow(this.x,2)+Math.pow(this.y,2)+Math.pow(this.z,2),.5)}add(e){return new at(this.x+e.x,this.y+e.y,this.z+e.z)}subtract(e){return new at(this.x-e.x,this.y-e.y,this.z-e.z)}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}cross(e){let t=this.y*e.z-this.z*e.y,i=this.z*e.z-this.x*e.z,n=this.x*e.y-this.y*e.x;return new at(t,i,n)}scale(e){return new at(this.x*e,this.y*e,this.z*e)}distanceTo(e){return this.subtract(e).magnitude()}}class Ai{constructor(e,t){ye(this,"Vertices",[]);ye(this,"Faces",[]);ye(this,"Edges",[]);ye(this,"FaceEdges",[]);ye(this,"Buffer",new Wt);ye(this,"Smooth_Count",0);ye(this,"FaceCenters",[]);ye(this,"EdgeCenters",[]);ye(this,"v",[]);ye(this,"indices",[]);ye(this,"Exporter",new hg);this.Vertices=e,this.Faces=t,this.update_geometry()}update_geometry(){this.Buffer=new Wt,this.Edges=[],this.EdgeCenters=[],this.FaceEdges=[],this.Vertices.forEach(e=>{this.v.push(e.x,e.y,e.z)}),this.Faces.forEach(e=>{let t=[-1,-1,-1,-1];[[e[0],e[1]],[e[1],e[2]],[e[2],e[3]],[e[3],e[0]]].forEach((n,a)=>{let s=!1;for(let o=0;o<this.Edges.length;o++)if(this.Edges[o].includes(n[0])&&this.Edges[o].includes(n[1])){t[a]=o,s=!0;break}s==!1&&(t[a]=this.Edges.length,this.Edges.push(n))});let i=new at(0,0,0);i=i.add(this.Vertices[e[0]]),i=i.add(this.Vertices[e[1]]),i=i.add(this.Vertices[e[2]]),i=i.add(this.Vertices[e[3]]),this.FaceCenters.push(i.scale(1/4)),this.indices.push(e[0],e[1],e[2],e[3]),this.FaceEdges.push(t)}),this.form_geometry()}form_geometry(){let e=[];this.Faces.forEach(t=>{let i=[t[0],t[1],t[2]],n=[t[0],t[2],t[3]];e.push(...i),e.push(...n)}),this.Buffer.setIndex(e),this.Buffer.setAttribute("position",new kt(new Float32Array(this.v),3))}smooth_geometry(){if(this.Smooth_Count>0){let e=this.execute_catmull();if(this.Smooth_Count>1){for(let t=0;t<this.Smooth_Count;t++)e=e.execute_catmull();return e}return e}else return new Ai(this.Vertices,this.Faces)}execute_catmull(){this.EdgeCenters=[];let e=[];return this.Edges.forEach(t=>{let i=0,n=new at(0,0,0);this.Faces.forEach((a,s)=>{a.includes(t[0])&&a.includes(t[1])&&(i+=1,n=n.add(this.FaceCenters[s]))}),n=n.add(this.Vertices[t[0]]),n=n.add(this.Vertices[t[1]]),n=n.scale(1/(i+2)),this.EdgeCenters.push(n)}),this.Vertices.forEach((t,i)=>{let n=0,a=0,s=new at(0,0,0),o=new at(0,0,0),l=new at(0,0,0);this.Faces.forEach((p,u)=>{p.includes(i)&&(n+=1,s=s.add(this.FaceCenters[u]))}),this.Edges.forEach((p,u)=>{if(p.includes(i)){a+=1,o=o.add(this.EdgeCenters[u]);let f=new at(0,0,0);f=f.add(this.Vertices[p[0]]),f=f.add(this.Vertices[p[1]]),f=f.scale(1/2),l=l.add(f)}}),s=s.scale(1/n),l=l.scale(1/a);let c=a,h=s.scale(1/c);h=h.add(l.scale(2/c)),h=h.add(t.scale((c-3)/c)),e.push(h)}),this.UpdateSmoothFaces(e)}UpdateSmoothFaces(e){let t=[],i=[],n=[];this.Faces.forEach((s,o)=>{for(let l=0;l<s.length;l++){let c=this.EdgeCenters[this.FaceEdges[o][l]],h=l-1;l==0&&(h=s.length-1);let p=this.EdgeCenters[this.FaceEdges[o][h]],u=this.FaceCenters[o],f=[e[s[l]],p,u,c],g=[];f.forEach(_=>{let d=!1;t.forEach((m,E)=>{_.distanceTo(m)<.001&&!d&&(g.push(E),d=!0)}),d==!1&&(g.push(t.length),t.push(_),i.push(_.x,_.y,_.z))}),n.push(g),o==this.Faces.length-1}});let a=new Ai(t,n);return n.forEach(s=>{s[0],s[1],s[2],s[0],s[2],s[3]}),a}Download_Quads(){let e=new Ai(this.Vertices,this.Faces);this.Smooth_Count>0&&(e=this.smooth_geometry());let t=`o
`;e.Vertices.forEach(n=>{t+="v "+n.x.toString()+" "+n.y.toString()+" "+n.z.toString()+`
`}),e.Faces.forEach(n=>{let a=n[0]+1,s=n[1]+1,o=n[2]+1,l=n[3]+1;t+="f "+a.toString()+"//"+a.toString()+" "+s.toString()+"//"+s.toString(),t+=" "+o.toString()+"//"+o.toString()+" "+l.toString()+"//"+l.toString()+`
`});let i=document.createElement("a");i.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),i.setAttribute("download","quads_geometry.obj"),i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i)}Download(e){const t=this.smooth_geometry(),i=new Tt(t.Buffer,e);let n=this.Exporter.parse(i),a=document.createElement("a");a.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(n)),a.setAttribute("download","catmull_clark.obj"),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)}}class ug{constructor(e,t){ye(this,"Diameter",17.5);ye(this,"Thickness",5);ye(this,"MidSectionFactor",1);ye(this,"Width",10);ye(this,"Segments",37);ye(this,"Geometry",new Ai([],[]));ye(this,"Interval",2);ye(this,"WaveCount",0);ye(this,"BottomSeparation",!1);this.Diameter=t,this.Segments=e,this.FormBase()}FormBase(){let e=[],t=[],i=[],n=[],a=6,s=.25,o=1,l=2,c=[],h=0;for(let u=0;u<this.Segments;u++){let f=2*Math.PI*u/(this.Segments-1),g=this.Diameter/2,_=Math.abs(l*Math.sin(u/(this.Segments-1)*this.WaveCount*2*Math.PI))+a;c.push(_);let d=new at(g*Math.cos(f),h,g*Math.sin(f)),m=new at((g+o)*Math.cos(f),h,(g+o)*Math.sin(f)),E=new at((g+o+s)*Math.cos(f),h,(g+o+s)*Math.sin(f)),x=new at((g+o*2+s)*Math.cos(f),h,(g+o*2+s)*Math.sin(f)),T=[d,m,E,x],O=[];T.forEach(C=>{O.push(C)}),T.reverse(),T.forEach(C=>{O.push(C.add(new at(0,1.5,0)))}),e.push(O),i.push(...O)}for(let u=0;u<e.length;u++){let f=e[u].length*u,g=e[u].length*((u+1)%e.length);for(let _=0;_<e[u].length;_++){let d=[f+_,g+_,g+(_+1)%e[u].length,f+(_+1)%e[u].length];u%2==0?_!=6&&n.push(d):u!=0&&_!=4&&n.push(d)}}let p=(e.length-1)*e[0].length;for(let u=0;u<this.Segments;u++){let f=2*Math.PI*u/(this.Segments-1),g=this.Diameter/2,_=new at(g*Math.cos(f),c[u],g*Math.sin(f)),d=new at((g+1)*Math.cos(f),c[u],(g+1)*Math.sin(f)),m=new at((g+1.25)*Math.cos(f),c[u],(g+1.25)*Math.sin(f)),E=new at((g+2.25)*Math.cos(f),c[u],(g+2.25)*Math.sin(f)),x=[_,d,m,E],T=[];x.forEach(O=>{T.push(O)}),x.reverse(),x.forEach(O=>{T.push(O.add(new at(0,1.5,0)))}),t.push(T),i.push(...T)}for(let u=0;u<t.length;u++)if(u>0){let f=t[u].length*u+p,g=t[u].length*((u+1)%t.length)+p;u==t.length-1&&(g=p+t[u].length);for(let _=0;_<t[u].length;_++){let d=[f+_,g+_,g+(_+1)%t[u].length,f+(_+1)%t[u].length];u%2!=0?_!=2&&n.push(d):_!=0&&n.push(d)}}for(let u=0;u<e.length-1;u++){let f=e[u].length*u,g=e[u].length*(u+1),_=t[u].length*u+p+t[u].length,d=t[u].length*(u+1)+p+t[u].length;u==e.length-2&&(d=p+t[u].length);let m=Math.pow(1-c[u]/(a+l)*.25,3)*this.MidSectionFactor,E=new at(0,0,0),x=new at(0,0,0),T=[f+7,f+6,g+6,g+7],O=[_+2,_+3,d+3,d+2];if(u%2==0){for(let y=0;y<T.length;y++)E=E.add(i[T[y]]),x=x.add(i[O[y]]);E=E.scale(1/4),x=x.scale(1/4)}else{T=[f+5,f+4,g+4,g+5],O=[_,_+1,d+1,d];for(let y=0;y<T.length;y++)E=E.add(i[T[y]]),x=x.add(i[O[y]]);E=E.scale(1/4),x=x.scale(1/4)}let C=x.subtract(E).scale(1/2),R=[];T.forEach(y=>{let b=i[y].subtract(E).scale(m);R.push(E.add(C).add(b))});let L=[i.length,i.length+1,i.length+2,i.length+3];i.push(...R);for(let y=0;y<T.length;y++)n.push([T[y],L[y],L[(y+1)%T.length],T[(y+1)%T.length]]),n.push([L[y],O[y],O[(y+1)%T.length],L[(y+1)%T.length]])}return n.push([7,this.Segments*8-1,this.Segments*8-2,6]),this.Geometry=new Ai(i,n),this.Geometry}}class dg{constructor(e,t){ye(this,"Mesh");ye(this,"QuadMesh");ye(this,"Geometry");ye(this,"Material");ye(this,"WaveCount",0);ye(this,"SmoothCount",0);ye(this,"SegmentCount",37);ye(this,"Diameter",17);ye(this,"Ring");ye(this,"Environment");ye(this,"Wireframe",!0);ye(this,"Edges");ye(this,"MidSectionFactor",1);this.Ring=new ug(this.SegmentCount,this.Diameter),this.Material=t,this.Environment=e,this.QuadMesh=new Ai(this.Ring.Geometry.Vertices,this.Ring.Geometry.Faces),this.QuadMesh.Buffer.computeVertexNormals(),this.Geometry=this.QuadMesh.Buffer,this.Mesh=new Tt(this.Geometry,this.Material),this.Environment.scene.add(this.Mesh);let i=new _l(this.Mesh.geometry);this.Edges=new gl(i,new Wa({color:16777215})),this.Wireframe&&this.Environment.scene.add(this.Edges)}UpdateMesh(){this.QuadMesh=new Ai(this.Ring.Geometry.Vertices,this.Ring.Geometry.Faces),this.QuadMesh.Smooth_Count=this.SmoothCount;let e=this.QuadMesh.smooth_geometry();this.Environment.scene.remove(this.Mesh),this.Environment.scene.getObjectById(this.Edges.id)!=null&&this.Environment.scene.remove(this.Edges),console.log(this.Material),this.Geometry=e.Buffer,this.Geometry.computeVertexNormals(),this.Mesh=new Tt(this.Geometry,this.Material),this.Environment.scene.add(this.Mesh);let t=new _l(this.Mesh.geometry);this.Edges=new gl(t,new Wa({color:16777215})),this.Wireframe&&this.Environment.scene.add(this.Edges)}UpdateMidSection(){this.Ring.MidSectionFactor=this.MidSectionFactor,this.Ring.FormBase(),this.UpdateMesh()}UpdateDiameter(){this.Ring.Diameter=this.Diameter,this.Ring.FormBase(),this.UpdateMesh()}UpdateWaveCount(){this.Ring.WaveCount=this.WaveCount,this.Ring.FormBase(),this.UpdateMesh()}UpdateSegmentCount(){this.Ring.Segments=this.SegmentCount,this.Ring.FormBase(),this.UpdateMesh()}Download(){this.UpdateMesh(),this.QuadMesh.smooth_geometry().Download(this.Material)}}class qn extends Tt{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new wt;const i=this,n=t.color!==void 0?new Ne(t.color):new Ne(8355711),a=t.textureWidth||512,s=t.textureHeight||512,o=t.clipBias||0,l=t.shader||qn.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new oi,p=new D,u=new D,f=new D,g=new tt,_=new D(0,0,-1),d=new Qe,m=new D,E=new D,x=new Qe,T=new tt,O=this.camera,C=new _i(a,s,{samples:c,type:Pr}),R=new si({name:l.name!==void 0?l.name:"unspecified",uniforms:Uo.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});R.uniforms.tDiffuse.value=C.texture,R.uniforms.color.value=n,R.uniforms.textureMatrix.value=T,this.material=R,this.onBeforeRender=function(L,y,b){if(u.setFromMatrixPosition(i.matrixWorld),f.setFromMatrixPosition(b.matrixWorld),g.extractRotation(i.matrixWorld),p.set(0,0,1),p.applyMatrix4(g),m.subVectors(u,f),m.dot(p)>0)return;m.reflect(p).negate(),m.add(u),g.extractRotation(b.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(f),E.subVectors(u,_),E.reflect(p).negate(),E.add(u),O.position.copy(m),O.up.set(0,1,0),O.up.applyMatrix4(g),O.up.reflect(p),O.lookAt(E),O.far=b.far,O.updateMatrixWorld(),O.projectionMatrix.copy(b.projectionMatrix),T.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),T.multiply(O.projectionMatrix),T.multiply(O.matrixWorldInverse),T.multiply(i.matrixWorld),h.setFromNormalAndCoplanarPoint(p,u),h.applyMatrix4(O.matrixWorldInverse),d.set(h.normal.x,h.normal.y,h.normal.z,h.constant);const P=O.projectionMatrix;x.x=(Math.sign(d.x)+P.elements[8])/P.elements[0],x.y=(Math.sign(d.y)+P.elements[9])/P.elements[5],x.z=-1,x.w=(1+P.elements[10])/P.elements[14],d.multiplyScalar(2/d.dot(x)),P.elements[2]=d.x,P.elements[6]=d.y,P.elements[10]=d.z+1-o,P.elements[14]=d.w,i.visible=!1;const G=L.getRenderTarget(),V=L.xr.enabled,K=L.shadowMap.autoUpdate;L.xr.enabled=!1,L.shadowMap.autoUpdate=!1,L.setRenderTarget(C),L.state.buffers.depth.setMask(!0),L.autoClear===!1&&L.clear(),L.render(y,O),L.xr.enabled=V,L.shadowMap.autoUpdate=K,L.setRenderTarget(G);const Z=b.viewport;Z!==void 0&&L.state.viewport(Z),i.visible=!0},this.getRenderTarget=function(){return C},this.dispose=function(){C.dispose(),i.material.dispose()}}}qn.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const wr=new cg,St=new Hf;St.controls.addEventListener("change",function(){St.headlight_update()}),St.scene.background=new Ne(16447990);const pg=new Nf(16777215,16777215,1);St.scene.add(pg);const Yn=new qn(new Ar(2e3,2e3),{color:new Ne(16447990),textureWidth:window.innerWidth*window.devicePixelRatio,textureHeight:window.innerHeight*window.devicePixelRatio});Yn.rotation.x=-Math.PI/2,Yn.position.y=-.25,Yn.receiveShadow=!0;const qr=new Tt(new Ar(2e3,2e3),new vl({color:16447990,transparent:!0}));qr.rotation.x=-Math.PI/2,qr.position.y=0,qr.material.opacity=.75,qr.material.needsUpdate=!0;let mg=.75,fg=.1,jl=new vl({color:14268005,transparent:!0,emissive:14268005,emissiveIntensity:fg,reflectivity:mg,side:2});const Yl=new Of().load(["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]);Yl.mapping=Pi,jl.envMap=Yl,St.scene.add(Yn),St.scene.add(qr),St.scene.fog=new os(13421772,50,100),St.renderer.toneMapping=vs,St.renderer.toneMappingExposure=.85;const Gt=new dg(St,jl);wr.add(Gt,"SmoothCount",0,1,1).onChange(function(){Gt.UpdateMesh()}),wr.add(Gt,"WaveCount",0,2,.5).onChange(function(){Gt.UpdateWaveCount()}),wr.add(Gt,"SegmentCount",25,41,1).onChange(function(){Gt.UpdateSegmentCount()}),wr.add(Gt,"Diameter",13,20,.5).onChange(function(){Gt.UpdateDiameter()}),wr.add(Gt,"MidSectionFactor",.5,1.5,.1).onChange(function(){Gt.UpdateMidSection()}),wr.add(Gt,"Download").listen(),window.addEventListener("resize",gg,!1);function gg(){St.camera.aspect=window.innerWidth/window.innerHeight,St.camera.updateProjectionMatrix(),St.renderer.setSize(window.innerWidth,window.innerHeight),St.render()}function ql(){requestAnimationFrame(ql),St.render()}ql();
