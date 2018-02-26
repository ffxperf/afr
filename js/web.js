/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)
},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()
},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())
},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))
};
x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;
if(!e){return this
}if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n){return !n||n.jquery?(n||r).find(e):this.constructor(n).find(e)
}if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n)){for(i in n){x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i])
}}return this
}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2]){return r.find(e)
}this.length=1,this[0]=o
}return this.context=a,this.selector=e,this
}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))
},selector:"",length:0,toArray:function(){return g.call(this)
},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]
},pushStack:function(e){var t=x.merge(this.constructor(),e);
return t.prevObject=this,t.context=this.context,t
},each:function(e,t){return x.each(this,e,t)
},ready:function(e){return x.ready.promise().done(e),this
},slice:function(){return this.pushStack(g.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(e){var t=this.length,n=+e+(0>e?t:0);
return this.pushStack(n>=0&&t>n?[this[n]]:[])
},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)
}))
},end:function(){return this.prevObject||this.constructor(null)
},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;
for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);
u>l;
l++){if(null!=(o=arguments[l])){for(i in o){e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r))
}}}return s
},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x
},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)
},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body){return setTimeout(x.ready)
}x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))
}},isFunction:function(e){return"function"===x.type(e)
},isArray:Array.isArray||function(e){return"array"===x.type(e)
},isWindow:function(e){return null!=e&&e==e.window
},isNumeric:function(e){return !isNaN(parseFloat(e))&&isFinite(e)
},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e
},isPlainObject:function(e){var n;
if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e)){return !1
}try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf")){return !1
}}catch(r){return !1
}if(x.support.ownLast){for(n in e){return v.call(e,n)
}}for(n in e){}return n===t||v.call(e,n)
},isEmptyObject:function(e){var t;
for(t in e){return !1
}return !0
},error:function(e){throw Error(e)
},parseHTML:function(e,t,n){if(!e||"string"!=typeof e){return null
}"boolean"==typeof t&&(n=t,t=!1),t=t||a;
var r=k.exec(e),i=!n&&[];
return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))
},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)
},parseXML:function(n){var r,i;
if(!n||"string"!=typeof n){return null
}try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))
}catch(o){r=t
}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r
},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)
})(t)
},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)
},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()
},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);
if(n){if(a){for(;
o>i;
i++){if(r=t.apply(e[i],n),r===!1){break
}}}else{for(i in e){if(r=t.apply(e[i],n),r===!1){break
}}}}else{if(a){for(;
o>i;
i++){if(r=t.call(e[i],i,e[i]),r===!1){break
}}}else{for(i in e){if(r=t.call(e[i],i,e[i]),r===!1){break
}}}}return e
},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)
}:function(e){return null==e?"":(e+"").replace(C,"")
},makeArray:function(e,t){var n=t||[];
return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n
},inArray:function(e,t,n){var r;
if(t){if(m){return m.call(t,e,n)
}for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;
r>n;
n++){if(n in t&&t[n]===e){return n
}}}return -1
},merge:function(e,n){var r=n.length,i=e.length,o=0;
if("number"==typeof r){for(;
r>o;
o++){e[i++]=n[o]
}}else{while(n[o]!==t){e[i++]=n[o++]
}}return e.length=i,e
},grep:function(e,t,n){var r,i=[],o=0,a=e.length;
for(n=!!n;
a>o;
o++){r=!!t(e[o],o),n!==r&&i.push(e[o])
}return i
},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];
if(a){for(;
o>i;
i++){r=t(e[i],i,n),null!=r&&(s[s.length]=r)
}}else{for(i in e){r=t(e[i],i,n),null!=r&&(s[s.length]=r)
}}return d.apply([],s)
},guid:1,proxy:function(e,n){var r,i,o;
return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))
},i.guid=e.guid=e.guid||x.guid++,i):t
},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;
if("object"===x.type(r)){o=!0;
for(l in r){x.access(e,n,l,r[l],!0,a,s)
}}else{if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)
})),n)){for(;
u>l;
l++){n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)))
}}}return o?e:c?n.call(e):u?n(e[0],r):a
},now:function(){return(new Date).getTime()
},swap:function(e,t,n,r){var i,o,a={};
for(o in t){a[o]=e.style[o],e.style[o]=t[o]
}i=n.apply(e,r||[]);
for(o in t){e.style[o]=a[o]
}return i
}}),x.ready.promise=function(t){if(!n){if(n=x.Deferred(),"complete"===a.readyState){setTimeout(x.ready)
}else{if(a.addEventListener){a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1)
}else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);
var r=!1;
try{r=null==e.frameElement&&a.documentElement
}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")
}catch(e){return setTimeout(o,50)
}_(),x.ready()
}}()
}}}return n.promise(t)
},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()
});
function M(e){var t=e.length,n=x.type(e);
return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)
}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0
},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;
for(;
n>t;
t++){if(this[t]===e){return t
}}return -1
},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;
return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)
};
try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType
}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))
}:function(e,t){var n=e.length,r=0;
while(e[n++]=t[r++]){}e.length=n-1
}}
}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;
if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e){return n
}if(1!==(l=t.nodeType)&&9!==l){return[]
}if(h&&!i){if(o=Z.exec(e)){if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode){return n
}if(a.id===s){return n.push(a),n
}}else{if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s){return n.push(a),n
}}}else{if(o[2]){return M.apply(n,t.getElementsByTagName(e)),n
}if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName){return M.apply(n,t.getElementsByClassName(s)),n
}}}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;
while(u--){c[u]=m+yt(c[u])
}y=V.test(e)&&t.parentNode||t,x=c.join(",")
}if(x){try{return M.apply(n,y.querySelectorAll(x)),n
}catch(T){}finally{d||t.removeAttribute("id")
}}}}return kt(e.replace(z,"$1"),t,n,i)
}function st(){var e=[];
function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r
}return t
}function lt(e){return e[b]=!0,e
}function ut(e){var t=f.createElement("div");
try{return !!e(t)
}catch(n){return !1
}finally{t.parentNode&&t.parentNode.removeChild(t),t=null
}}function ct(e,t){var n=e.split("|"),r=e.length;
while(r--){o.attrHandle[n[r]]=t
}}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);
if(r){return r
}if(n){while(n=n.nextSibling){if(n===t){return -1
}}}return e?1:-1
}function ft(e){return function(t){var n=t.nodeName.toLowerCase();
return"input"===n&&t.type===e
}
}function dt(e){return function(t){var n=t.nodeName.toLowerCase();
return("input"===n||"button"===n)&&t.type===e
}
}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;
while(a--){n[i=o[a]]&&(n[i]=!(r[i]=n[i]))
}})
})
}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;
return t?"HTML"!==t.nodeName:!1
},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;
return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()
}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")
}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length
}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length
}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length
}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);
return n&&n.parentNode?[n]:[]
}},o.filter.ID=function(e){var t=e.replace(rt,it);
return function(e){return e.getAttribute("id")===t
}
}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);
return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");
return n&&n.value===t
}
}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t
}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);
if("*"===e){while(n=o[i++]){1===n.nodeType&&r.push(n)
}return r
}return o
},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t
},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")
}),ut(function(e){var t=n.createElement("input");
t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")
})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)
}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))
}:function(e,t){if(t){while(t=t.parentNode){if(t===e){return !0
}}}return !1
},A=d.compareDocumentPosition?function(e,t){if(e===t){return S=!0,0
}var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);
return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1
}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];
if(e===t){return S=!0,0
}if(!o||!a){return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0
}if(o===a){return pt(e,t)
}r=e;
while(r=r.parentNode){s.unshift(r)
}r=t;
while(r=r.parentNode){l.unshift(r)
}while(s[i]===l[i]){i++
}return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0
},n):f
},at.matches=function(e,t){return at(e,null,null,t)
},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t))){try{var n=y.call(e,t);
if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType){return n
}}catch(i){}}return at(t,f,null,[e]).length>0
},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)
},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);
var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;
return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a
},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)
},at.uniqueSort=function(e){var t,n=[],i=0,o=0;
if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++]){t===e[o]&&(i=n.push(o))
}while(i--){e.splice(n[i],1)
}}return e
},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;
if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent){return e.textContent
}for(e=e.firstChild;
e;
e=e.nextSibling){n+=a(e)
}}else{if(3===i||4===i){return e.nodeValue
}}}else{for(;
t=e[r];
r++){n+=a(t)
}}return n
},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)
},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e
},PSEUDO:function(e){var n,r=!e[5]&&e[2];
return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))
}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();
return"*"===e?function(){return !0
}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t
}
},CLASS:function(e){var t=N[e+" "];
return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")
})
},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);
return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0
}
},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;
return 1===r&&0===i?function(e){return !!e.parentNode
}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;
if(m){if(o){while(g){p=t;
while(p=p[g]){if(s?p.nodeName.toLowerCase()===y:1===p.nodeType){return !1
}}h=g="only"===e&&!h&&"nextSibling"
}return !0
}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];
while(p=++d&&p&&p[g]||(f=d=0)||h.pop()){if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];
break
}}}else{if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T){f=u[1]
}else{while(p=++d&&p&&p[g]||(f=d=0)||h.pop()){if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t)){break
}}}}return f-=i,f===r||0===f%r&&f/r>=0
}}
},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);
return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;
while(a--){i=F.call(e,o[a]),e[i]=!(n[i]=o[a])
}}):function(e){return r(e,0,n)
}):r
}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));
return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;
while(s--){(o=a[s])&&(e[s]=!(t[s]=o))
}}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()
}
}),has:lt(function(e){return function(t){return at(e,t).length>0
}
}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1
}
}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;
do{if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang")){return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-")
}}while((t=t.parentNode)&&1===t.nodeType);
return !1
}
}),target:function(t){var n=e.location&&e.location.hash;
return n&&n.slice(1)===t.id
},root:function(e){return e===d
},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)
},enabled:function(e){return e.disabled===!1
},disabled:function(e){return e.disabled===!0
},checked:function(e){var t=e.nodeName.toLowerCase();
return"input"===t&&!!e.checked||"option"===t&&!!e.selected
},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0
},empty:function(e){for(e=e.firstChild;
e;
e=e.nextSibling){if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType){return !1
}}return !0
},parent:function(e){return !o.pseudos.empty(e)
},header:function(e){return tt.test(e.nodeName)
},input:function(e){return et.test(e.nodeName)
},button:function(e){var t=e.nodeName.toLowerCase();
return"input"===t&&"button"===e.type||"button"===t
},text:function(e){var t;
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)
},first:ht(function(){return[0]
}),last:ht(function(e,t){return[t-1]
}),eq:ht(function(e,t,n){return[0>n?n+t:n]
}),even:ht(function(e,t){var n=0;
for(;
t>n;
n+=2){e.push(n)
}return e
}),odd:ht(function(e,t){var n=1;
for(;
t>n;
n+=2){e.push(n)
}return e
}),lt:ht(function(e,t,n){var r=0>n?n+t:n;
for(;
--r>=0;
){e.push(r)
}return e
}),gt:ht(function(e,t,n){var r=0>n?n+t:n;
for(;
t>++r;
){e.push(r)
}return e
})}},o.pseudos.nth=o.pseudos.eq;
for(n in {radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){o.pseudos[n]=ft(n)
}for(n in {submit:!0,reset:!0}){o.pseudos[n]=dt(n)
}function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;
function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];
if(c){return t?0:c.slice(0)
}s=e,l=[],u=o.preFilter;
while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));
for(a in o.filter){!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length))
}if(!n){break
}}return t?s.length:s?at.error(e):k(e,l).slice(0)
}function yt(e){var t=0,n=e.length,r="";
for(;
n>t;
t++){r+=e[t].value
}return r
}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;
return t.first?function(t,n,i){while(t=t[r]){if(1===t.nodeType||o){return e(t,n,i)
}}}:function(t,n,s){var l,u,c,p=T+" "+a;
if(s){while(t=t[r]){if((1===t.nodeType||o)&&e(t,n,s)){return !0
}}}else{while(t=t[r]){if(1===t.nodeType||o){if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i){return l===!0
}}else{if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0){return !0
}}}}}}
}function bt(e){return e.length>1?function(t,n,r){var i=e.length;
while(i--){if(!e[i](t,n,r)){return !1
}}return !0
}:e[0]
}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;
for(;
l>s;
s++){(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s))
}return a
}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;
if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;
while(c--){(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))
}}if(o){if(i||e){if(i){u=[],c=y.length;
while(c--){(p=y[c])&&u.push(m[c]=p)
}i(null,y=[],u,l)
}c=y.length;
while(c--){(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))
}}}else{y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)
}})
}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t
},s,!0),p=vt(function(e){return F.call(t,e)>-1
},s,!0),f=[function(e,n,r){return !a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))
}];
for(;
i>l;
l++){if(n=o.relative[e[l].type]){f=[vt(bt(f),n)]
}else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;
i>r;
r++){if(o.relative[e[r].type]){break
}}return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))
}f.push(n)
}}return bt(f)
}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||0.1;
for(w&&(u=l!==f&&l,i=n);
null!=(h=N[b]);
b++){if(a&&h){g=0;
while(m=e[g++]){if(m(h,l,c)){p.push(h);
break
}}w&&(T=k,i=++n)
}r&&((h=!m&&h)&&v--,s&&x.push(h))
}if(v+=b,r&&b!==v){g=0;
while(m=t[g++]){m(x,y,l,c)
}if(s){if(v>0){while(b--){x[b]||y[b]||(y[b]=q.call(p))
}}y=xt(y)
}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)
}return w&&(T=k,u=C),x
};
return r?lt(s):s
}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];
if(!o){t||(t=mt(e)),n=t.length;
while(n--){o=Tt(t[n]),o[b]?r.push(o):i.push(o)
}o=E(e,Ct(i,r))
}return o
};
function Nt(e,t,n){var r=0,i=t.length;
for(;
i>r;
r++){at(e,t[r],n)
}return n
}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);
if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t){return n
}e=e.slice(s.shift().value.length)
}a=Q.needsContext.test(e)?0:s.length;
while(a--){if(u=s[a],o.relative[c=u.type]){break
}if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e){return M.apply(n,i),n
}break
}}}return l(e,f)(i,t,!h,n,V.test(e)),n
}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))
}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")
})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)
}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")
})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue
}),ut(function(e){return null==e.getAttribute("disabled")
})||ct(B,function(e,n,r){var i;
return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null
}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains
}(e);
var O={};
function F(e){var t=O[e]={};
return x.each(e.match(T)||[],function(e,n){t[n]=!0
}),t
}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);
var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;
l&&o>a;
a++){if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;
break
}}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())
},p={add:function(){if(l){var t=l.length;
(function i(t){x.each(t,function(t,n){var r=x.type(n);
"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)
})
})(arguments),n?o=l.length:r&&(s=t,c(r))
}return this
},remove:function(){return l&&x.each(arguments,function(e,t){var r;
while((r=x.inArray(t,l,r))>-1){l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)
}}),this
},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)
},empty:function(){return l=[],o=0,this
},disable:function(){return l=u=r=t,this
},disabled:function(){return !l
},lock:function(){return u=t,r||p.disable(),this
},locked:function(){return !u
},fireWith:function(e,t){return !l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this
},fire:function(){return p.fireWith(this,arguments),this
},fired:function(){return !!i
}};
return p
},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n
},always:function(){return i.done(arguments).fail(arguments),this
},then:function(){var e=arguments;
return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];
i[o[1]](function(){var e=s&&s.apply(this,arguments);
e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)
})
}),e=null
}).promise()
},promise:function(e){return null!=e?x.extend(e,r):r
}},i={};
return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];
r[o[1]]=a.add,s&&a.add(function(){n=s
},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this
},i[o[0]+"With"]=a.fireWith
}),r.promise(i),e&&e.call(i,i),i
},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)
}
},s,l,u;
if(r>1){for(s=Array(r),l=Array(r),u=Array(r);
r>t;
t++){n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i
}}return i||o.resolveWith(u,n),o.promise()
}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");
if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length){return t
}s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;
try{delete d.test
}catch(h){t.deleteExpando=!1
}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1
}),d.cloneNode(!0).click());
for(f in {submit:!0,change:!0,focusin:!0}){d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1
}d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;
for(f in x(t)){break
}return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];
l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth
}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)
}),n=s=l=u=r=o=null,t
}({});
var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;
function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;
if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n){return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o
}}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;
if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;
while(i--){delete r[t[i]]
}if(n?!I(r):!x.isEmptyObject(r)){return
}}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)
}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)
},data:function(e,t,n){return R(e,t,n)
},removeData:function(e,t){return W(e,t)
},_data:function(e,t,n){return R(e,t,n,!0)
},_removeData:function(e,t){return W(e,t,!0)
},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType){return !1
}var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];
return !t||t!==!0&&e.getAttribute("classid")===t
}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];
if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;
r.length>a;
a++){i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]))
}x._data(s,"parsedAttrs",!0)
}return o
}return"object"==typeof e?this.each(function(){x.data(this,e)
}):arguments.length>1?this.each(function(){x.data(this,e,n)
}):s?$(s,e,x.data(s,e)):null
},removeData:function(e){return this.each(function(){x.removeData(this,e)
})
}});
function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();
if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r
}catch(o){}x.data(e,n,r)
}else{r=t
}}return r
}function I(e){var t;
for(t in e){if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t){return !1
}}return !0
}x.extend({queue:function(e,n,r){var i;
return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t
},dequeue:function(e,t){t=t||"fx";
var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)
};
"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()
},_queueHooks:function(e,t){var n=t+"queueHooks";
return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)
})})
}}),x.fn.extend({queue:function(e,n){var r=2;
return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);
x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)
})
},dequeue:function(e){return this.each(function(){x.dequeue(this,e)
})
},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);
n.stop=function(){clearTimeout(r)
}
})
},clearQueue:function(e){return this.queue(e||"fx",[])
},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])
};
"string"!=typeof e&&(n=e,e=t),e=e||"fx";
while(s--){r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l))
}return l(),o.promise(n)
}});
var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;
x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)
},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)
})
},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)
},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]
}catch(n){}})
},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;
if(x.isFunction(e)){return this.each(function(t){x(this).addClass(e.call(this,t,this.className))
})
}if(l){for(t=(e||"").match(T)||[];
s>a;
a++){if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;
while(i=t[o++]){0>r.indexOf(" "+i+" ")&&(r+=i+" ")
}n.className=x.trim(r)
}}}return this
},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;
if(x.isFunction(e)){return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))
})
}if(l){for(t=(e||"").match(T)||[];
s>a;
a++){if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;
while(i=t[o++]){while(r.indexOf(" "+i+" ")>=0){r=r.replace(" "+i+" "," ")
}}n.className=e?x.trim(r):""
}}}return this
},toggleClass:function(e,t){var n=typeof e;
return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)
}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];
while(t=a[r++]){o.hasClass(t)?o.removeClass(t):o.addClass(t)
}}else{(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")
}})
},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;
for(;
r>n;
n++){if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0){return !0
}}return !1
},val:function(e){var n,r,i,o=this[0];
if(arguments.length){return i=x.isFunction(e),this.each(function(n){var o;
1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""
})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set" in r&&r.set(this,o,"value")!==t||(this.value=o))
})
}if(o){return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get" in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)
}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");
return null!=t?t:e.text
}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;
for(;
s>l;
l++){if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o){return t
}a.push(t)
}}return a
},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;
while(a--){r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0)
}return n||(e.selectedIndex=-1),o
}}},attr:function(e,n,r){var o,a,s=e.nodeType;
if(e&&3!==s&&8!==s&&2!==s){return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get" in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set" in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))
}},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);
if(o&&1===e.nodeType){while(n=o[i++]){r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)
}}},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;
return e.setAttribute("type",t),n&&(e.value=n),t
}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;
if(e&&3!==s&&8!==s&&2!==s){return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set" in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get" in o&&null!==(i=o.get(e,n))?i:e[n]
}},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");
return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1
}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n
}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;
x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;
return x.expr.attrHandle[n]=o,a
}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null
}
}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)
}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);
return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t
}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;
return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null
},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);
return r&&r.specified?r.value:t
},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)
}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t
}}
})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)
}}
}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t
},set:function(e,t){return e.style.cssText=t+""
}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;
return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null
}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this
}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t
}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value
})
});
var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;
function it(){return !0
}function ot(){return !1
}function at(){try{return a.activeElement
}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);
if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)
},f.elem=e),n=(n||"").match(T)||[""],u=n.length;
while(u--){s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0)
}e=null
}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);
if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;
while(u--){if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;
while(o--){a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a))
}l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])
}else{for(d in c){x.event.remove(e,d+t[u],n,r,!0)
}}}x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))
}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];
if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);
u;
u=u.parentNode){h.push(u),f=u
}f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)
}d=0;
while((u=h[d++])&&!n.isPropagationStopped()){n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault()
}if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;
try{i[g]()
}catch(y){}x.event.triggered=t,f&&(i[l]=f)
}return n.result
}},dispatch:function(e){e=x.event.fix(e);
var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};
if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;
while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;
while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped()){(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))
}}return c.postDispatch&&c.postDispatch.call(this,e),e.result
}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;
if(l&&u.nodeType&&(!e.button||"click"!==e.type)){for(;
u!=this;
u=u.parentNode||this){if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;
l>a;
a++){i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i)
}o.length&&s.push({elem:u,handlers:o})
}}}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s
},fix:function(e){if(e[x.expando]){return e
}var t,n,r,i=e.type,o=e,s=this.fixHooks[i];
s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;
while(t--){n=r[t],e[n]=o[n]
}return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;
return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e
}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus){try{return this.focus(),!1
}catch(e){}}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t
},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t
},_default:function(e){return x.nodeName(e.target,"a")
}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)
}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});
r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()
}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)
}:function(e,t,n){var r="on"+t;
e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))
},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)
},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;
this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)
},stopPropagation:function(){var e=this.originalEvent;
this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()
}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n
}}
}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;
r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0
}),x._data(r,"submitBubbles",!0))
}),t)
},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))
},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)
}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)
}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)
})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;
Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)
}),x._data(t,"changeBubbles",!0))
}),t)
},handle:function(e){var n=e.target;
return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t
},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)
}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)
};
x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)
},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)
}}
}),x.fn.extend({on:function(e,n,r,i,o){var a,s;
if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);
for(a in e){this.on(a,n,r,e[a],o)
}return this
}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1){i=ot
}else{if(!i){return this
}}return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)
},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)
})
},one:function(e,t,n,r){return this.on(e,t,n,r,1)
},off:function(e,n,r){var i,o;
if(e&&e.preventDefault&&e.handleObj){return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this
}if("object"==typeof e){for(o in e){this.off(o,n,e[o])
}return this
}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)
})
},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)
})
},triggerHandler:function(e,n){var r=this[0];
return r?x.event.trigger(e,n,r,!0):t
}});
var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};
x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;
if("string"!=typeof e){return this.pushStack(x(e).filter(function(){for(t=0;
i>t;
t++){if(x.contains(r[t],this)){return !0
}}}))
}for(t=0;
i>t;
t++){x.find(e,r[t],n)
}return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n
},has:function(e){var t,n=x(e,this),r=n.length;
return this.filter(function(){for(t=0;
r>t;
t++){if(x.contains(this,n[t])){return !0
}}})
},not:function(e){return this.pushStack(ft(this,e||[],!0))
},filter:function(e){return this.pushStack(ft(this,e||[],!1))
},is:function(e){return !!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length
},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;
for(;
i>r;
r++){for(n=this[r];
n&&n!==t;
n=n.parentNode){if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);
break
}}}return this.pushStack(o.length>1?x.unique(o):o)
},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);
return this.pushStack(x.unique(r))
},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))
}});
function pt(e,t){do{e=e[t]
}while(e&&1!==e.nodeType);
return e
}x.each({parent:function(e){var t=e.parentNode;
return t&&11!==t.nodeType?t:null
},parents:function(e){return x.dir(e,"parentNode")
},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)
},next:function(e){return pt(e,"nextSibling")
},prev:function(e){return pt(e,"previousSibling")
},nextAll:function(e){return x.dir(e,"nextSibling")
},prevAll:function(e){return x.dir(e,"previousSibling")
},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)
},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)
},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)
},children:function(e){return x.sibling(e.firstChild)
},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)
}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)
}
}),x.extend({filter:function(e,t,n){var r=t[0];
return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType
}))
},dir:function(e,n,r){var i=[],o=e[n];
while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r))){1===o.nodeType&&i.push(o),o=o[n]
}return i
},sibling:function(e,t){var n=[];
for(;
e;
e=e.nextSibling){1===e.nodeType&&e!==t&&n.push(e)
}return n
}});
function ft(e,t,n){if(x.isFunction(t)){return x.grep(e,function(e,r){return !!t.call(e,r,e)!==n
})
}if(t.nodeType){return x.grep(e,function(e){return e===t!==n
})
}if("string"==typeof t){if(st.test(t)){return x.filter(t,e,n)
}t=x.filter(t,e)
}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n
})
}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();
if(n.createElement){while(t.length){n.createElement(t.pop())
}}return n
}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));
At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))
},null,e,arguments.length)
},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);
t.appendChild(e)
}})
},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);
t.insertBefore(e,t.firstChild)
}})
},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)
})
},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)
})
},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;
for(;
null!=(n=r[i]);
i++){t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n))
}return this
},empty:function(){var e,t=0;
for(;
null!=(e=this[t]);
t++){1===e.nodeType&&x.cleanData(Ft(e,!1));
while(e.firstChild){e.removeChild(e.firstChild)
}e.options&&x.nodeName(e,"select")&&(e.options.length=0)
}return this
},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)
})
},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;
if(e===t){return 1===n.nodeType?n.innerHTML.replace(gt,""):t
}if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");
try{for(;
i>r;
r++){n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e)
}n=0
}catch(o){}}n&&this.empty().append(e)
},null,e,arguments.length)
},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]
}),t=0;
return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];
i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))
},!0),t?this:this.remove()
},detach:function(e){return this.remove(e,!0)
},domManip:function(e,t,n){e=d.apply([],e);
var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);
if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h)){return this.each(function(r){var i=p.eq(r);
g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)
})
}if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;
c>u;
u++){i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u)
}if(o){for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;
o>u;
u++){i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")))
}}l=r=null
}return this
}});
function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e
}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e
}function qt(e){var t=Et.exec(e.type);
return t?e.type=t[1]:e.removeAttribute("type"),e
}function _t(e,t){var n,r=0;
for(;
null!=(n=e[r]);
r++){x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))
}}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;
if(s){delete a.handle,a.events={};
for(n in s){for(r=0,i=s[n].length;
i>r;
r++){x.event.add(t,n,s[n][r])
}}}a.data&&(a.data=x.extend({},a.data))
}}function Ot(e,t){var n,r,i;
if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);
for(r in i.events){x.removeEvent(t,r,i.handle)
}t.removeAttribute(x.expando)
}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)
}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;
for(;
a>=r;
r++){n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get())
}return this.pushStack(i)
}
});
function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;
if(!s){for(s=[],r=e.childNodes||e;
null!=(o=r[a]);
a++){!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n))
}}return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s
}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)
}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);
if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e))){for(r=Ft(o),s=Ft(e),a=0;
null!=(i=s[a]);
++a){r[a]&&Ot(i,r[a])
}}if(t){if(n){for(s=s||Ft(e),r=r||Ft(o),a=0;
null!=(i=s[a]);
a++){Mt(i,r[a])
}}else{Mt(e,o)
}}return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o
},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;
for(;
p>h;
h++){if(o=e[h],o||0===o){if("object"===x.type(o)){x.merge(d,o.nodeType?[o]:o)
}else{if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];
while(i--){s=s.lastChild
}if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;
while(i--){x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)
}}x.merge(d,s.childNodes),s.textContent="";
while(s.firstChild){s.removeChild(s.firstChild)
}s=f.lastChild
}else{d.push(t.createTextNode(o))
}}}}s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;
while(o=d[h++]){if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;
while(o=s[i++]){kt.test(o.type||"")&&n.push(o)
}}}return s=null,f
},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;
for(;
null!=(n=e[s]);
s++){if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events){for(r in a.events){f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle)
}}u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))
}}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})
}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e)){return this.each(function(t){x(this).wrapAll(e.call(this,t))
})
}if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);
this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;
while(e.firstChild&&1===e.firstChild.nodeType){e=e.firstChild
}return e
}).append(this)
}return this
},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))
}):this.each(function(){var t=x(this),n=t.contents();
n.length?n.wrapAll(e):t.append(e)
})
},wrap:function(e){var t=x.isFunction(e);
return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)
})
},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)
}).end()
}});
var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];
function tn(e,t){if(t in e){return t
}var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;
while(i--){if(t=en[i]+n,t in e){return t
}}return r
}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)
}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;
for(;
s>a;
a++){r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))))
}for(a=0;
s>a;
a++){r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"))
}return e
}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;
if(x.isArray(n)){for(o=Rt(e),i=n.length;
i>s;
s++){a[n[s]]=x.css(e,n[s],!1,o)
}return a
}return r!==t?x.style(e,n,r):x.css(e,n)
},e,n,arguments.length>1)
},show:function(){return rn(this,!0)
},hide:function(){return rn(this)
},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()
})
}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");
return""===n?"1":n
}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;
if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t){return s&&"get" in s&&(o=s.get(e,!1,i))!==t?o:u[n]
}if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set" in s&&(r=s.set(e,r,i))===t))){try{u[n]=r
}catch(c){}}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);
return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get" in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a
}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)
},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;
return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l
}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle
},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;
return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l
});
function on(e,t,n){var r=Vt.exec(t);
return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t
}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;
for(;
4>o;
o+=2){"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)))
}return a
}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);
if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i)){return i
}r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0
}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"
}function ln(e){var t=a,n=Gt[e];
return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n
}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");
return n.remove(),r
}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)
}):sn(e,n,i):t
},set:function(e,t,r){var i=r&&Rt(e);
return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)
}}
}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?0.01*parseFloat(RegExp.$1)+"":t?"1":""
},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";
n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)
}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t
}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t
}}
})
}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))
},x.expr.filters.visible=function(e){return !x.expr.filters.hidden(e)
}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];
for(;
4>r;
r++){i[e+Zt[r]+t]=o[r]||o[r-2]||o[0]
}return i
}},Ut.test(e)||(x.cssHooks[e+t].set=on)
});
var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;
x.fn.extend({serialize:function(){return x.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");
return e?x.makeArray(e):this
}).filter(function(){var e=this.type;
return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))
}).map(function(e,t){var n=x(this).val();
return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}
}):{name:t.name,value:n.replace(fn,"\r\n")}
}).get()
}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)
};
if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e)){x.each(e,function(){o(this.name,this.value)
})
}else{for(r in e){gn(r,e[r],n,o)
}}return i.join("&").replace(cn,"+")
};
function gn(e,t,n,r){var i;
if(x.isArray(t)){x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)
})
}else{if(n||"object"!==x.type(t)){r(e,t)
}else{for(i in t){gn(e+"["+i+"]",t[i],n,r)
}}}}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)
}
}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)
},bind:function(e,t,n){return this.on(e,null,t,n)
},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)
},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)
}});
var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");
try{yn=o.href
}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href
}mn=En.exec(yn.toLowerCase())||[];
function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");
var r,i=0,o=t.toLowerCase().match(T)||[];
if(x.isFunction(n)){while(r=o[i++]){"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)
}}}
}function qn(e,n,r,i){var o={},a=e===jn;
function s(l){var u;
return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);
return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)
}),u
}return s(n.dataTypes[0])||!o["*"]&&s("*")
}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};
for(i in n){n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i])
}return r&&x.extend(!0,e,r),e
}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn){return Sn.apply(this,arguments)
}var i,o,a,s=this,l=e.indexOf(" ");
return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)
}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])
}),this
},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)
}
}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)
},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};
var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;
if(2===b){if(!c){c={};
while(t=Tn.exec(a)){c[t[1].toLowerCase()]=t[2]
}}t=c[e.toLowerCase()]
}return null==t?null:t
},getAllResponseHeaders:function(){return 2===b?a:null
},setRequestHeader:function(e,t){var n=e.toLowerCase();
return b||(e=v[n]=v[n]||e,y[e]=t),this
},overrideMimeType:function(e){return b||(p.mimeType=e),this
},statusCode:function(e){var t;
if(e){if(2>b){for(t in e){m[t]=[m[t],e[t]]
}}else{C.always(e[C.status])
}}return this
},abort:function(e){var t=e||w;
return u&&u.abort(t),k(0,t),this
}};
if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b){return C
}l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);
for(i in p.headers){C.setRequestHeader(i,p.headers[i])
}if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b)){return C.abort()
}w="abort";
for(i in {success:1,error:1,complete:1}){C[i](p[i])
}if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")
},p.timeout));
try{b=1,u.send(y,k)
}catch(N){if(!(2>b)){throw N
}k(-1,N)
}}else{k(-1,"No Transport")
}function k(e,n,r,i){var c,y,v,w,T,N=n;
2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))
}return C
},getJSON:function(e,t,n){return x.get(e,t,n,"json")
},getScript:function(e,n){return x.get(e,t,n,"script")
}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})
}
});
function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;
while("*"===u[0]){u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"))
}if(o){for(s in l){if(l[s]&&l[s].test(o)){u.unshift(s);
break
}}}if(u[0] in r){a=u[0]
}else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;
break
}i||(i=s)
}a=a||i
}return a?(a!==u[0]&&u.unshift(a),r[a]):t
}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();
if(c[1]){for(a in e.converters){u[a.toLowerCase()]=e.converters[a]
}}o=c.shift();
while(o){if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift()){if("*"===o){o=l
}else{if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a){for(i in u){if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));
break
}}}if(a!==!0){if(a&&e["throws"]){t=a(t)
}else{try{t=a(t)
}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}
}}}}}}}return{state:"success",data:t}
}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e
}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)
}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;
return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))
},r.insertBefore(n,r.firstChild)
},abort:function(){n&&n.onload(t,!0)
}}
}});
var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;
x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;
return this[e]=!0,e
}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");
return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]
},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments
},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t
}),"script"):t
});
var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;
for(e in Pn){Pn[e](t,!0)
}};
function In(){try{return new e.XMLHttpRequest
}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")
}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return !this.isLocal&&In()||zn()
}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials" in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;
return{send:function(i,o){var a,s,l=n.xhr();
if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields){for(s in n.xhrFields){l[s]=n.xhrFields[s]
}}n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");
try{for(s in i){l.setRequestHeader(s,i[s])
}}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;
try{if(r&&(i||4===l.readyState)){if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i){4!==l.readyState&&l.abort()
}else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);
try{c=l.statusText
}catch(f){c=""
}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404
}}}catch(d){i||o(-1,d)
}p&&o(s,c,p,u)
},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()
},abort:function(){r&&r(t,!0)
}}
}});
var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;
if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;
do{s=s||".5",a/=s,x.style(n.elem,e,a+o)
}while(s!==(s=n.cur()/r)&&1!==s&&--l)
}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n
}]};
function Kn(){return setTimeout(function(){Xn=t
}),Xn=x.now()
}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;
for(;
a>o;
o++){if(r=i[o].call(n,t,e)){return r
}}}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem
}),l=function(){if(i){return !1
}var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;
for(;
l>a;
a++){u.tweens[a].run(o)
}return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)
},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);
return u.tweens.push(r),r
},stop:function(t){var n=0,r=t?u.tweens.length:0;
if(i){return this
}for(i=!0;
r>n;
n++){u.tweens[n].run(1)
}return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this
}}),c=u.props;
for(tr(c,u.opts.specialEasing);
a>o;
o++){if(r=Gn[o].call(u,e,c,u.opts)){return r
}}return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)
}function tr(e,t){var n,r,i,o,a;
for(n in e){if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand" in a){o=a.expand(o),delete e[r];
for(n in o){n in e||(e[n]=o[n],t[n]=i)
}}else{t[r]=i
}}}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");
var n,r=0,i=e.length;
for(;
i>r;
r++){n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)
}},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)
}});
function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");
n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()
}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()
})
})),1===e.nodeType&&("height" in t||"width" in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]
}));
for(r in t){if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){continue
}c[r]=d&&d[r]||x.style(e,r)
}}if(!x.isEmptyObject(c)){d?"hidden" in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()
}),u.done(function(){var t;
x._removeData(e,"fxshow");
for(t in c){x.style(e,t,c[t])
}});
for(r in c){a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))
}}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)
}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")
},cur:function(){var e=rr.propHooks[this.prop];
return e&&e.get?e.get(this):rr.propHooks._default.get(this)
},run:function(e){var t,n=rr.propHooks[this.prop];
return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this
}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;
return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]
},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now
}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)
}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];
x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)
}
}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)
},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);
(i||x._data(this,"finish"))&&t.stop(!0)
};
return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)
},stop:function(e,n,r){var i=function(e){var t=e.stop;
delete e.stop,t(r)
};
return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);
if(n){a[n]&&a[n].stop&&i(a[n])
}else{for(n in a){a[n]&&a[n].stop&&Jn.test(n)&&i(a[n])
}}for(n=o.length;
n--;
){o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1))
}(t||!r)&&x.dequeue(this,e)
})
},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;
for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;
t--;
){o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1))
}for(t=0;
a>t;
t++){r[t]&&r[t].finish&&r[t].finish.call(this)
}delete n.finish
})
}});
function ir(e,t){var n,r={height:e},i=0;
for(t=t?1:0;
4>i;
i+=2-t){n=Zt[i],r["margin"+n]=r["padding"+n]=e
}return t&&(r.opacity=r.width=e),r
}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)
}
}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};
return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)
},r
},x.easing={linear:function(e){return e
},swing:function(e){return 0.5-Math.cos(e*Math.PI)/2
}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;
for(Xn=x.now();
n.length>r;
r++){e=n[r],e()||n[r]!==e||n.splice(r--,1)
}n.length||x.fx.stop(),Xn=t
},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()
},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))
},x.fx.stop=function(){clearInterval(Un),Un=null
},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem
}).length
}),x.fn.offset=function(e){if(arguments.length){return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)
})
}var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;
if(s){return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o
}},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");
"static"===r&&(e.style.position="relative");
var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;
l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using" in t?t.using.call(e,u):i.css(u)
}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];
return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}
}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;
while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position")){e=e.offsetParent
}return e||s
})
}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);
x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);
return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)
},e,i,arguments.length,null)
}
});
function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1
}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");
return x.access(this,function(n,r,i){var o;
return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)
},n,a?i:t,a,null)
}
})
}),x.fn.size=function(){return this.length
},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x
}))
})(window);
(function(a){a.flexslider=function(E,j){var b=a(E);
b.vars=a.extend({},a.flexslider.defaults,j);
var w=b.vars.namespace,F=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,g=("ontouchstart" in window||F||window.DocumentTouch&&document instanceof DocumentTouch)&&b.vars.touch,D="click touchend MSPointerUp",B="",y,q=b.vars.direction==="vertical",A=b.vars.reverse,x=b.vars.itemWidth>0,e=b.vars.animation==="fade",z=b.vars.asNavFor!=="",C={},k=true;
a.data(E,"flexslider",b);
C={init:function(){b.animating=false;
b.currentSlide=parseInt(b.vars.startAt?b.vars.startAt:0);
if(isNaN(b.currentSlide)){b.currentSlide=0
}b.animatingTo=b.currentSlide;
b.atEnd=b.currentSlide===0||b.currentSlide===b.last;
b.containerSelector=b.vars.selector.substr(0,b.vars.selector.search(" "));
b.slides=a(b.vars.selector,b);
b.container=a(b.containerSelector,b);
b.count=b.slides.length;
b.syncExists=a(b.vars.sync).length>0;
if(b.vars.animation==="slide"){b.vars.animation="swing"
}b.prop=q?"top":"marginLeft";
b.args={};
b.manualPause=false;
b.stopped=false;
b.started=false;
b.startTimeout=null;
b.transitions=!b.vars.video&&!e&&b.vars.useCSS&&function(){var d=document.createElement("div"),c=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];
for(var f in c){if(d.style[c[f]]!==undefined){b.pfx=c[f].replace("Perspective","").toLowerCase();
b.prop="-"+b.pfx+"-transform";
return true
}}return false
}();
if(b.vars.controlsContainer!==""){b.controlsContainer=a(b.vars.controlsContainer).length>0&&a(b.vars.controlsContainer)
}if(b.vars.manualControls!==""){b.manualControls=a(b.vars.manualControls).length>0&&a(b.vars.manualControls)
}if(b.vars.randomize){b.slides.sort(function(){return Math.round(Math.random())-0.5
});
b.container.empty().append(b.slides)
}b.doMath();
b.setup("init");
if(b.vars.controlNav){C.controlNav.setup()
}if(b.vars.directionNav){C.directionNav.setup()
}if(b.vars.keyboard&&(a(b.containerSelector).length===1||b.vars.multipleKeyboard)){a(document).bind("keyup",function(d){var c=d.keyCode;
if(!b.animating&&(c===39||c===37)){var f=c===39?b.getTarget("next"):c===37?b.getTarget("prev"):false;
b.flexAnimate(f,b.vars.pauseOnAction)
}})
}if(b.vars.mousewheel){b.bind("mousewheel",function(h,d,l,c){h.preventDefault();
var f=d<0?b.getTarget("next"):b.getTarget("prev");
b.flexAnimate(f,b.vars.pauseOnAction)
})
}if(b.vars.pausePlay){C.pausePlay.setup()
}if(b.vars.slideshow&&b.vars.pauseInvisible){C.pauseInvisible.init()
}if(b.vars.slideshow){if(b.vars.pauseOnHover){b.hover(function(){if(!b.manualPlay&&!b.manualPause){b.pause()
}},function(){if(!b.manualPause&&!b.manualPlay&&!b.stopped){b.play()
}})
}if(!b.vars.pauseInvisible||!C.pauseInvisible.isHidden()){b.vars.initDelay>0?b.startTimeout=setTimeout(b.play,b.vars.initDelay):b.play()
}}if(z){C.asNav.setup()
}if(g&&b.vars.touch){C.touch()
}if(!e||e&&b.vars.smoothHeight){a(window).bind("resize orientationchange focus",C.resize)
}b.find("img").attr("draggable","false");
setTimeout(function(){b.vars.start(b)
},200)
},asNav:{setup:function(){b.asNav=true;
b.animatingTo=Math.floor(b.currentSlide/b.move);
b.currentItem=b.currentSlide;
b.slides.removeClass(w+"active-slide").eq(b.currentItem).addClass(w+"active-slide");
if(!F){b.slides.click(function(c){c.preventDefault();
var h=a(this),d=h.index();
var f=h.offset().left-a(b).scrollLeft();
if(f<=0&&h.hasClass(w+"active-slide")){b.flexAnimate(b.getTarget("prev"),true)
}else{if(!a(b.vars.asNavFor).data("flexslider").animating&&!h.hasClass(w+"active-slide")){b.direction=b.currentItem<d?"next":"prev";
b.flexAnimate(d,b.vars.pauseOnAction,false,true,true)
}}})
}else{E._slider=b;
b.slides.each(function(){var c=this;
c._gesture=new MSGesture;
c._gesture.target=c;
c.addEventListener("MSPointerDown",function(d){d.preventDefault();
if(d.currentTarget._gesture){d.currentTarget._gesture.addPointer(d.pointerId)
}},false);
c.addEventListener("MSGestureTap",function(f){f.preventDefault();
var h=a(this),d=h.index();
if(!a(b.vars.asNavFor).data("flexslider").animating&&!h.hasClass("active")){b.direction=b.currentItem<d?"next":"prev";
b.flexAnimate(d,b.vars.pauseOnAction,false,true,true)
}})
})
}}},controlNav:{setup:function(){if(!b.manualControls){C.controlNav.setupPaging()
}else{C.controlNav.setupManual()
}},setupPaging:function(){var d=b.vars.controlNav==="thumbnails"?"control-thumbs":"control-paging",p=1,h,m;
b.controlNavScaffold=a('<ol class="'+w+"control-nav "+w+d+'"></ol>');
if(b.pagingCount>1){for(var i=0;
i<b.pagingCount;
i++){m=b.slides.eq(i);
h=b.vars.controlNav==="thumbnails"?'<img src="'+m.attr("data-thumb")+'"/>':"<a>"+p+"</a>";
if("thumbnails"===b.vars.controlNav&&true===b.vars.thumbCaptions){var c=m.attr("data-thumbcaption");
if(""!=c&&undefined!=c){h+='<span class="'+w+'caption">'+c+"</span>"
}}b.controlNavScaffold.append("<li>"+h+"</li>");
p++
}}b.controlsContainer?a(b.controlsContainer).append(b.controlNavScaffold):b.append(b.controlNavScaffold);
C.controlNav.set();
C.controlNav.active();
b.controlNavScaffold.delegate("a, img",D,function(f){f.preventDefault();
if(B===""||B===f.type){var o=a(this),l=b.controlNav.index(o);
if(!o.hasClass(w+"active")){b.direction=l>b.currentSlide?"next":"prev";
b.flexAnimate(l,b.vars.pauseOnAction)
}}if(B===""){B=f.type
}C.setToClearWatchedEvent()
})
},setupManual:function(){b.controlNav=b.manualControls;
C.controlNav.active();
b.controlNav.bind(D,function(c){c.preventDefault();
if(B===""||B===c.type){var f=a(this),d=b.controlNav.index(f);
if(!f.hasClass(w+"active")){d>b.currentSlide?b.direction="next":b.direction="prev";
b.flexAnimate(d,b.vars.pauseOnAction)
}}if(B===""){B=c.type
}C.setToClearWatchedEvent()
})
},set:function(){var c=b.vars.controlNav==="thumbnails"?"img":"a";
b.controlNav=a("."+w+"control-nav li "+c,b.controlsContainer?b.controlsContainer:b)
},active:function(){b.controlNav.removeClass(w+"active").eq(b.animatingTo).addClass(w+"active")
},update:function(c,d){if(b.pagingCount>1&&c==="add"){b.controlNavScaffold.append(a("<li><a>"+b.count+"</a></li>"))
}else{if(b.pagingCount===1){b.controlNavScaffold.find("li").remove()
}else{b.controlNav.eq(d).closest("li").remove()
}}C.controlNav.set();
b.pagingCount>1&&b.pagingCount!==b.controlNav.length?b.update(d,c):C.controlNav.active()
}},directionNav:{setup:function(){var c=a('<ul class="'+w+'direction-nav"><li><a class="'+w+'prev" href="#">'+b.vars.prevText+'</a></li><li><a class="'+w+'next" href="#">'+b.vars.nextText+"</a></li></ul>");
if(b.controlsContainer){a(b.controlsContainer).append(c);
b.directionNav=a("."+w+"direction-nav li a",b.controlsContainer)
}else{b.append(c);
b.directionNav=a("."+w+"direction-nav li a",b)
}C.directionNav.update();
b.directionNav.bind(D,function(d){d.preventDefault();
var f;
if(B===""||B===d.type){f=a(this).hasClass(w+"next")?b.getTarget("next"):b.getTarget("prev");
b.flexAnimate(f,b.vars.pauseOnAction)
}if(B===""){B=d.type
}C.setToClearWatchedEvent()
})
},update:function(){var c=w+"disabled";
if(b.pagingCount===1){b.directionNav.addClass(c).attr("tabindex","-1")
}else{if(!b.vars.animationLoop){if(b.animatingTo===0){b.directionNav.removeClass(c).filter("."+w+"prev").addClass(c).attr("tabindex","-1")
}else{if(b.animatingTo===b.last){b.directionNav.removeClass(c).filter("."+w+"next").addClass(c).attr("tabindex","-1")
}else{b.directionNav.removeClass(c).removeAttr("tabindex")
}}}else{b.directionNav.removeClass(c).removeAttr("tabindex")
}}}},pausePlay:{setup:function(){var c=a('<div class="'+w+'pauseplay"><a></a></div>');
if(b.controlsContainer){b.controlsContainer.append(c);
b.pausePlay=a("."+w+"pauseplay a",b.controlsContainer)
}else{b.append(c);
b.pausePlay=a("."+w+"pauseplay a",b)
}C.pausePlay.update(b.vars.slideshow?w+"pause":w+"play");
b.pausePlay.bind(D,function(d){d.preventDefault();
if(B===""||B===d.type){if(a(this).hasClass(w+"pause")){b.manualPause=true;
b.manualPlay=false;
b.pause()
}else{b.manualPause=false;
b.manualPlay=true;
b.play()
}}if(B===""){B=d.type
}C.setToClearWatchedEvent()
})
},update:function(c){c==="play"?b.pausePlay.removeClass(w+"pause").addClass(w+"play").html(b.vars.playText):b.pausePlay.removeClass(w+"play").addClass(w+"pause").html(b.vars.pauseText)
}},touch:function(){var G,h,r,c,N,K,t=false,H=0,M=0,l=0;
if(!F){E.addEventListener("touchstart",s,false);
function s(d){if(b.animating){d.preventDefault()
}else{if(window.navigator.msPointerEnabled||d.touches.length===1){b.pause();
c=q?b.h:b.w;
K=Number(new Date);
H=d.touches[0].pageX;
M=d.touches[0].pageY;
r=x&&A&&b.animatingTo===b.last?0:x&&A?b.limit-(b.itemW+b.vars.itemMargin)*b.move*b.animatingTo:x&&b.currentSlide===b.last?b.limit:x?(b.itemW+b.vars.itemMargin)*b.move*b.currentSlide:A?(b.last-b.currentSlide+b.cloneOffset)*c:(b.currentSlide+b.cloneOffset)*c;
G=q?M:H;
h=q?H:M;
E.addEventListener("touchmove",J,false);
E.addEventListener("touchend",I,false)
}}}function J(d){H=d.touches[0].pageX;
M=d.touches[0].pageY;
N=q?G-M:G-H;
t=q?Math.abs(N)<Math.abs(H-h):Math.abs(N)<Math.abs(M-h);
var f=500;
if(!t||Number(new Date)-K>f){d.preventDefault();
if(!e&&b.transitions){if(!b.vars.animationLoop){N=N/(b.currentSlide===0&&N<0||b.currentSlide===b.last&&N>0?Math.abs(N)/c+2:1)
}b.setProps(r+N,"setTouch")
}}}function I(i){E.removeEventListener("touchmove",J,false);
if(b.animatingTo===b.currentSlide&&!t&&!(N===null)){var d=A?-N:N,f=d>0?b.getTarget("next"):b.getTarget("prev");
if(b.canAdvance(f)&&(Number(new Date)-K<550&&Math.abs(d)>50||Math.abs(d)>c/2)){b.flexAnimate(f,b.vars.pauseOnAction)
}else{if(!e){b.flexAnimate(b.currentSlide,b.vars.pauseOnAction,true)
}}}E.removeEventListener("touchend",I,false);
G=null;
h=null;
N=null;
r=null
}}else{E.style.msTouchAction="none";
E._gesture=new MSGesture;
E._gesture.target=E;
E.addEventListener("MSPointerDown",L,false);
E._slider=b;
E.addEventListener("MSGestureChange",O,false);
E.addEventListener("MSGestureEnd",p,false);
function L(d){d.stopPropagation();
if(b.animating){d.preventDefault()
}else{b.pause();
E._gesture.addPointer(d.pointerId);
l=0;
c=q?b.h:b.w;
K=Number(new Date);
r=x&&A&&b.animatingTo===b.last?0:x&&A?b.limit-(b.itemW+b.vars.itemMargin)*b.move*b.animatingTo:x&&b.currentSlide===b.last?b.limit:x?(b.itemW+b.vars.itemMargin)*b.move*b.currentSlide:A?(b.last-b.currentSlide+b.cloneOffset)*c:(b.currentSlide+b.cloneOffset)*c
}}function O(i){i.stopPropagation();
var m=i.target._slider;
if(!m){return
}var f=-i.translationX,d=-i.translationY;
l=l+(q?d:f);
N=l;
t=q?Math.abs(l)<Math.abs(-f):Math.abs(l)<Math.abs(-d);
if(i.detail===i.MSGESTURE_FLAG_INERTIA){setImmediate(function(){E._gesture.stop()
});
return
}if(!t||Number(new Date)-K>500){i.preventDefault();
if(!e&&m.transitions){if(!m.vars.animationLoop){N=l/(m.currentSlide===0&&l<0||m.currentSlide===m.last&&l>0?Math.abs(l)/c+2:1)
}m.setProps(r+N,"setTouch")
}}}function p(f){f.stopPropagation();
var m=f.target._slider;
if(!m){return
}if(m.animatingTo===m.currentSlide&&!t&&!(N===null)){var i=A?-N:N,d=i>0?m.getTarget("next"):m.getTarget("prev");
if(m.canAdvance(d)&&(Number(new Date)-K<550&&Math.abs(i)>50||Math.abs(i)>c/2)){m.flexAnimate(d,m.vars.pauseOnAction)
}else{if(!e){m.flexAnimate(m.currentSlide,m.vars.pauseOnAction,true)
}}}G=null;
h=null;
N=null;
r=null;
l=0
}}},resize:function(){if(!b.animating&&b.is(":visible")){if(!x){b.doMath()
}if(e){C.smoothHeight()
}else{if(x){b.slides.width(b.computedW);
b.update(b.pagingCount);
b.setProps()
}else{if(q){b.viewport.height(b.h);
b.setProps(b.h,"setTotal")
}else{if(b.vars.smoothHeight){C.smoothHeight()
}b.newSlides.width(b.computedW);
b.setProps(b.computedW,"setTotal")
}}}}},smoothHeight:function(d){if(!q||e){var c=e?b:b.viewport;
d?c.animate({height:b.slides.eq(b.animatingTo).height()},d):c.height(b.slides.eq(b.animatingTo).height())
}},sync:function(d){var f=a(b.vars.sync).data("flexslider"),c=b.animatingTo;
switch(d){case"animate":f.flexAnimate(c,b.vars.pauseOnAction,false,true);
break;
case"play":if(!f.playing&&!f.asNav){f.play()
}break;
case"pause":f.pause();
break
}},pauseInvisible:{visProp:null,init:function(){var d=["webkit","moz","ms","o"];
if("hidden" in document){return"hidden"
}for(var c=0;
c<d.length;
c++){if(d[c]+"Hidden" in document){C.pauseInvisible.visProp=d[c]+"Hidden"
}}if(C.pauseInvisible.visProp){var f=C.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";
document.addEventListener(f,function(){if(C.pauseInvisible.isHidden()){if(b.startTimeout){clearTimeout(b.startTimeout)
}else{b.pause()
}}else{if(b.started){b.play()
}else{b.vars.initDelay>0?setTimeout(b.play,b.vars.initDelay):b.play()
}}})
}},isHidden:function(){return document[C.pauseInvisible.visProp]||false
}},setToClearWatchedEvent:function(){clearTimeout(y);
y=setTimeout(function(){B=""
},3000)
}};
b.flexAnimate=function(v,c,G,r,p){if(!b.vars.animationLoop&&v!==b.currentSlide){b.direction=v>b.currentSlide?"next":"prev"
}if(z&&b.pagingCount===1){b.direction=b.currentItem<v?"next":"prev"
}if(!b.animating&&(b.canAdvance(v,p)||G)&&b.is(":visible")){if(z&&r){var i=a(b.vars.asNavFor).data("flexslider");
b.atEnd=v===0||v===b.count-1;
i.flexAnimate(v,true,false,true,p);
b.direction=b.currentItem<v?"next":"prev";
i.direction=b.direction;
if(Math.ceil((v+1)/b.visible)-1!==b.currentSlide&&v!==0){b.currentItem=v;
b.slides.removeClass(w+"active-slide").eq(v).addClass(w+"active-slide");
v=Math.floor(v/b.visible)
}else{b.currentItem=v;
b.slides.removeClass(w+"active-slide").eq(v).addClass(w+"active-slide");
return false
}}b.animating=true;
b.animatingTo=v;
if(c){b.pause()
}b.vars.before(b);
if(b.syncExists&&!p){C.sync("animate")
}if(b.vars.controlNav){C.controlNav.active()
}if(!x){b.slides.removeClass(w+"active-slide").eq(v).addClass(w+"active-slide")
}b.atEnd=v===0||v===b.last;
if(b.vars.directionNav){C.directionNav.update()
}if(v===b.last){b.vars.end(b);
if(!b.vars.animationLoop){b.pause()
}}if(!e){var d=q?b.slides.filter(":first").height():b.computedW,h,o,l;
if(x){h=b.vars.itemMargin;
l=(b.itemW+h)*b.move*b.animatingTo;
o=l>b.limit&&b.visible!==1?b.limit:l
}else{if(b.currentSlide===0&&v===b.count-1&&b.vars.animationLoop&&b.direction!=="next"){o=A?(b.count+b.cloneOffset)*d:0
}else{if(b.currentSlide===b.last&&v===0&&b.vars.animationLoop&&b.direction!=="prev"){o=A?0:(b.count+1)*d
}else{o=A?(b.count-1-v+b.cloneOffset)*d:(v+b.cloneOffset)*d
}}}b.setProps(o,"",b.vars.animationSpeed);
if(b.transitions){if(!b.vars.animationLoop||!b.atEnd){b.animating=false;
b.currentSlide=b.animatingTo
}b.container.unbind("webkitTransitionEnd transitionend");
b.container.bind("webkitTransitionEnd transitionend",function(){b.wrapup(d)
})
}else{b.container.animate(b.args,b.vars.animationSpeed,b.vars.easing,function(){b.wrapup(d)
})
}}else{if(!g){b.slides.eq(b.currentSlide).css({zIndex:1}).animate({opacity:0},b.vars.animationSpeed,b.vars.easing);
b.slides.eq(v).css({zIndex:2}).animate({opacity:1},b.vars.animationSpeed,b.vars.easing,b.wrapup)
}else{b.slides.eq(b.currentSlide).css({opacity:0,zIndex:1});
b.slides.eq(v).css({opacity:1,zIndex:2});
b.wrapup(d)
}}if(b.vars.smoothHeight){C.smoothHeight(b.vars.animationSpeed)
}}};
b.wrapup=function(c){if(!e&&!x){if(b.currentSlide===0&&b.animatingTo===b.last&&b.vars.animationLoop){b.setProps(c,"jumpEnd")
}else{if(b.currentSlide===b.last&&b.animatingTo===0&&b.vars.animationLoop){b.setProps(c,"jumpStart")
}}}b.animating=false;
b.currentSlide=b.animatingTo;
b.vars.after(b)
};
b.animateSlides=function(){if(!b.animating&&k){b.flexAnimate(b.getTarget("next"))
}};
b.pause=function(){clearInterval(b.animatedSlides);
b.animatedSlides=null;
b.playing=false;
if(b.vars.pausePlay){C.pausePlay.update("play")
}if(b.syncExists){C.sync("pause")
}};
b.play=function(){if(b.playing){clearInterval(b.animatedSlides)
}b.animatedSlides=b.animatedSlides||setInterval(b.animateSlides,b.vars.slideshowSpeed);
b.started=b.playing=true;
if(b.vars.pausePlay){C.pausePlay.update("pause")
}if(b.syncExists){C.sync("play")
}};
b.stop=function(){b.pause();
b.stopped=true
};
b.canAdvance=function(d,c){var f=z?b.pagingCount-1:b.last;
return c?true:z&&b.currentItem===b.count-1&&d===0&&b.direction==="prev"?true:z&&b.currentItem===0&&d===b.pagingCount-1&&b.direction!=="next"?false:d===b.currentSlide&&!z?false:b.vars.animationLoop?true:b.atEnd&&b.currentSlide===0&&d===f&&b.direction!=="next"?false:b.atEnd&&b.currentSlide===f&&d===0&&b.direction==="next"?false:true
};
b.getTarget=function(c){b.direction=c;
if(c==="next"){return b.currentSlide===b.last?0:b.currentSlide+1
}else{return b.currentSlide===0?b.last:b.currentSlide-1
}};
b.setProps=function(f,d,h){var c=function(){var m=f?f:(b.itemW+b.vars.itemMargin)*b.move*b.animatingTo,l=function(){if(x){return d==="setTouch"?f:A&&b.animatingTo===b.last?0:A?b.limit-(b.itemW+b.vars.itemMargin)*b.move*b.animatingTo:b.animatingTo===b.last?b.limit:m
}else{switch(d){case"setTotal":return A?(b.count-1-b.currentSlide+b.cloneOffset)*f:(b.currentSlide+b.cloneOffset)*f;
case"setTouch":return A?f:f;
case"jumpEnd":return A?f:b.count*f;
case"jumpStart":return A?b.count*f:f;
default:return f
}}}();
return l*-1+"px"
}();
if(b.transitions){c=q?"translate3d(0,"+c+",0)":"translate3d("+c+",0,0)";
h=h!==undefined?h/1000+"s":"0s";
b.container.css("-"+b.pfx+"-transition-duration",h)
}b.args[b.prop]=c;
if(b.transitions||h===undefined){b.container.css(b.args)
}};
b.setup=function(c){if(!e){var f,d;
if(c==="init"){b.viewport=a('<div class="'+w+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(b).append(b.container);
b.cloneCount=0;
b.cloneOffset=0;
if(A){d=a.makeArray(b.slides).reverse();
b.slides=a(d);
b.container.empty().append(b.slides)
}}if(b.vars.animationLoop&&!x){b.cloneCount=2;
b.cloneOffset=1;
if(c!=="init"){b.container.find(".clone").remove()
}b.container.append(b.slides.first().clone().addClass("clone").attr("aria-hidden","true")).prepend(b.slides.last().clone().addClass("clone").attr("aria-hidden","true"))
}b.newSlides=a(b.vars.selector,b);
f=A?b.count-1-b.currentSlide+b.cloneOffset:b.currentSlide+b.cloneOffset;
if(q&&!x){b.container.height((b.count+b.cloneCount)*200+"%").css("position","absolute").width("100%");
setTimeout(function(){b.newSlides.css({display:"block"});
b.doMath();
b.viewport.height(b.h);
b.setProps(f*b.h,"init")
},c==="init"?100:0)
}else{b.container.width((b.count+b.cloneCount)*200+"%");
b.setProps(f*b.computedW,"init");
setTimeout(function(){b.doMath();
b.newSlides.css({width:b.computedW,"float":"left",display:"block"});
if(b.vars.smoothHeight){C.smoothHeight()
}},c==="init"?100:0)
}}else{b.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"});
if(c==="init"){if(!g){b.slides.css({opacity:0,display:"block",zIndex:1}).eq(b.currentSlide).css({zIndex:2}).animate({opacity:1},b.vars.animationSpeed,b.vars.easing)
}else{b.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+b.vars.animationSpeed/1000+"s ease",zIndex:1}).eq(b.currentSlide).css({opacity:1,zIndex:2})
}}if(b.vars.smoothHeight){C.smoothHeight()
}}if(!x){b.slides.removeClass(w+"active-slide").eq(b.currentSlide).addClass(w+"active-slide")
}};
b.doMath=function(){var f=b.slides.first(),d=b.vars.itemMargin,h=b.vars.minItems,c=b.vars.maxItems;
b.w=b.viewport===undefined?b.width():b.viewport.width();
b.h=f.height();
b.boxPadding=f.outerWidth()-f.width();
if(x){b.itemT=b.vars.itemWidth+d;
b.minW=h?h*b.itemT:b.w;
b.maxW=c?c*b.itemT-d:b.w;
b.itemW=b.minW>b.w?(b.w-d*(h-1))/h:b.maxW<b.w?(b.w-d*(c-1))/c:b.vars.itemWidth>b.w?b.w:b.vars.itemWidth;
b.visible=Math.floor(b.w/b.itemW);
b.move=b.vars.move>0&&b.vars.move<b.visible?b.vars.move:b.visible;
b.pagingCount=Math.ceil((b.count-b.visible)/b.move+1);
b.last=b.pagingCount-1;
b.limit=b.pagingCount===1?0:b.vars.itemWidth>b.w?b.itemW*(b.count-1)+d*(b.count-1):(b.itemW+d)*b.count-b.w-d
}else{b.itemW=b.w;
b.pagingCount=b.count;
b.last=b.count-1
}b.computedW=b.itemW-b.boxPadding
};
b.update=function(d,c){b.doMath();
if(!x){if(d<b.currentSlide){b.currentSlide+=1
}else{if(d<=b.currentSlide&&d!==0){b.currentSlide-=1
}}b.animatingTo=b.currentSlide
}if(b.vars.controlNav&&!b.manualControls){if(c==="add"&&!x||b.pagingCount>b.controlNav.length){C.controlNav.update("add")
}else{if(c==="remove"&&!x||b.pagingCount<b.controlNav.length){if(x&&b.currentSlide>b.last){b.currentSlide-=1;
b.animatingTo-=1
}C.controlNav.update("remove",b.last)
}}}if(b.vars.directionNav){C.directionNav.update()
}};
b.addSlide=function(d,f){var c=a(d);
b.count+=1;
b.last=b.count-1;
if(q&&A){f!==undefined?b.slides.eq(b.count-f).after(c):b.container.prepend(c)
}else{f!==undefined?b.slides.eq(f).before(c):b.container.append(c)
}b.update(f,"add");
b.slides=a(b.vars.selector+":not(.clone)",b);
b.setup();
b.vars.added(b)
};
b.removeSlide=function(c){var d=isNaN(c)?b.slides.index(a(c)):c;
b.count-=1;
b.last=b.count-1;
if(isNaN(c)){a(c,b.slides).remove()
}else{q&&A?b.slides.eq(b.last).remove():b.slides.eq(c).remove()
}b.doMath();
b.update(d,"remove");
b.slides=a(b.vars.selector+":not(.clone)",b);
b.setup();
b.vars.removed(b)
};
C.init()
};
a(window).blur(function(b){focused=false
}).focus(function(b){focused=true
});
a.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:false,animationLoop:true,smoothHeight:false,startAt:0,slideshow:true,slideshowSpeed:7000,animationSpeed:600,initDelay:0,randomize:false,thumbCaptions:false,pauseOnAction:true,pauseOnHover:false,pauseInvisible:true,useCSS:true,touch:true,video:false,controlNav:true,directionNav:true,prevText:"Previous",nextText:"Next",keyboard:true,multipleKeyboard:false,mousewheel:false,pausePlay:false,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:true,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};
a.fn.flexslider=function(b){if(b===undefined){b={}
}if(typeof b==="object"){return this.each(function(){var f=a(this),e=b.selector?b.selector:".slides > li",d=f.find(e);
if(d.length===1&&b.allowOneSlide===true||d.length===0){d.fadeIn(400);
if(b.start){b.start(f)
}}else{if(f.data("flexslider")===undefined){new a.flexslider(this,b)
}}})
}else{var c=a(this).data("flexslider");
switch(b){case"play":c.play();
break;
case"pause":c.pause();
break;
case"stop":c.stop();
break;
case"next":c.flexAnimate(c.getTarget("next"),true);
break;
case"prev":case"previous":c.flexAnimate(c.getTarget("prev"),true);
break;
default:if(typeof b==="number"){c.flexAnimate(b,true)
}}}}
})(jQuery);
/*! iCheck v1.0.1 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
(function(o){function e(l,k,r){var t=l[0],m=/er/.test(r)?_indeterminate:/bl/.test(r)?g:j,q=r==_update?{checked:t[j],disabled:t[g],indeterminate:"true"==l.attr(_indeterminate)||"false"==l.attr(_determinate)}:t[m];
if(/^(ch|di|in)/.test(r)&&!q){s(l,m)
}else{if(/^(un|en|de)/.test(r)&&q){d(l,m)
}else{if(r==_update){for(var n in q){q[n]?s(l,n,!0):d(l,n,!0)
}}else{if(!k||"toggle"==r){if(!k){l[_callback]("ifClicked")
}q?t[_type]!==a&&d(l,m):s(l,m)
}}}}}function s(t,r,n){var q=t[0],l=t.parent(),m=r==j,z=r==_indeterminate,y=r==g,C=z?_determinate:m?p:"enabled",A=i(t,C+u(q[_type])),k=i(t,r+u(q[_type]));
if(!0!==q[r]){if(!n&&r==j&&q[_type]==a&&q.name){var x=t.closest("form"),f='input[name="'+q.name+'"]',f=x.length?x.find(f):o(f);
f.each(function(){this!==q&&o(this).data(h)&&d(o(this),r)
})
}z?(q[r]=!0,q[j]&&d(t,j,"force")):(n||(q[r]=!0),m&&q[_indeterminate]&&d(t,_indeterminate,!1));
b(t,m,r,n)
}q[g]&&i(t,_cursor,!0)&&l.find("."+c).css(_cursor,"default");
l[_add](k||i(t,r)||"");
l.attr("role")&&!z&&l.attr("aria-"+(y?g:j),"true");
l[_remove](A||i(t,C)||"")
}function d(B,A,y){var z=B[0],t=B.parent(),x=A==j,w=A==_indeterminate,n=A==g,C=w?_determinate:x?p:"enabled",l=i(B,C+u(z[_type])),k=i(B,A+u(z[_type]));
if(!1!==z[A]){if(w||!y||"force"==y){z[A]=!1
}b(B,x,C,y)
}!z[g]&&i(B,_cursor,!0)&&t.find("."+c).css(_cursor,"pointer");
t[_remove](k||i(B,A)||"");
t.attr("role")&&!w&&t.attr("aria-"+(n?g:j),"false");
t[_add](l||i(B,C)||"")
}function v(k,f){if(k.data(h)){k.parent().html(k.attr("style",k.data(h).s||""));
if(f){k[_callback](f)
}k.off(".i").unwrap();
o(_label+'[for="'+k[0].id+'"]').add(k.closest(_label)).off(".i")
}}function i(l,k,m){if(l.data(h)){return l.data(h).o[k+(m?"":"Class")]
}}function u(f){return f.charAt(0).toUpperCase()+f.slice(1)
}function b(l,k,m,n){if(!n){if(k){l[_callback]("ifToggled")
}l[_callback]("ifChanged")[_callback]("if"+u(m))
}}var h="iCheck",c=h+"-helper",a="radio",j="checked",p="un"+j,g="disabled";
_determinate="determinate";
_indeterminate="in"+_determinate;
_update="update";
_type="type";
_click="click";
_touch="touchbegin.i touchend.i";
_add="addClass";
_remove="removeClass";
_callback="trigger";
_label="label";
_cursor="cursor";
_mobile=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);
o.fn[h]=function(z,y){var r='input[type="checkbox"], input[type="'+a+'"]',x=o(),n=function(l){l.each(function(){var t=o(this);
x=t.is(r)?x.add(t):x.add(t.find(r))
})
};
if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(z)){return z=z.toLowerCase(),n(this),x.each(function(){var l=o(this);
"destroy"==z?v(l,"ifDestroyed"):e(l,!0,z);
o.isFunction(y)&&y()
})
}if("object"!=typeof z&&z){return this
}var q=o.extend({checkedClass:j,disabledClass:g,indeterminateClass:_indeterminate,labelHover:!0},z),m=q.handle,C=q.hoverClass||"hover",E=q.focusClass||"focus",D=q.activeClass||"active",k=!!q.labelHover,A=q.labelHoverClass||"hover",f=(""+q.increaseArea).replace("%","")|0;
if("checkbox"==m||m==a){r='input[type="'+m+'"]'
}-50>f&&(f=-50);
n(this);
return x.each(function(){var K=o(this);
v(K);
var G=this,J=G.id,B=-f+"%",F=100+2*f+"%",F={position:"absolute",top:B,left:B,display:"block",width:F,height:F,margin:0,padding:0,background:"#fff",border:0,opacity:0},B=_mobile?{position:"absolute",visibility:"hidden"}:f?F:{position:"absolute",opacity:0},t="checkbox"==G[_type]?q.checkboxClass||"icheckbox":q.radioClass||"i"+a,H=o(_label+'[for="'+J+'"]').add(K.closest(_label)),L=!!q.aria,I=h+"-"+Math.random().toString(36).substr(2,6),w='<div class="'+t+'" '+(L?'role="'+G[_type]+'" ':"");
L&&H.each(function(){w+='aria-labelledby="';
this.id?w+=this.id:(this.id=I,w+=I);
w+='"'
});
w=K.wrap(w+"/>")[_callback]("ifCreated").parent().append(q.insert);
F=o('<ins class="'+c+'"/>').css(F).appendTo(w);
K.data(h,{o:q,s:K.attr("style")}).css(B);
q.inheritClass&&w[_add](G.className||"");
q.inheritID&&J&&w.attr("id",h+"-"+J);
"static"==w.css("position")&&w.css("position","relative");
e(K,!0,_update);
if(H.length){H.on(_click+".i mouseover.i mouseout.i "+_touch,function(l){var N=l[_type],M=o(this);
if(!G[g]){if(N==_click){if(o(l.target).is("a")){return
}e(K,!1,!0)
}else{k&&(/ut|nd/.test(N)?(w[_remove](C),M[_remove](A)):(w[_add](C),M[_add](A)))
}if(_mobile){l.stopPropagation()
}else{return !1
}}})
}K.on(_click+".i focus.i blur.i keyup.i keydown.i keypress.i",function(l){var M=l[_type];
l=l.keyCode;
if(M==_click){return !1
}if("keydown"==M&&32==l){return G[_type]==a&&G[j]||(G[j]?d(K,j):s(K,j)),!1
}if("keyup"==M&&G[_type]==a){!G[j]&&s(K,j)
}else{if(/us|ur/.test(M)){w["blur"==M?_remove:_add](E)
}}});
F.on(_click+" mousedown mouseup mouseover mouseout "+_touch,function(l){var N=l[_type],M=/wn|up/.test(N)?D:C;
if(!G[g]){if(N==_click){e(K,!1,!0)
}else{if(/wn|er|in/.test(N)){w[_add](M)
}else{w[_remove](M+" "+D)
}if(H.length&&k&&M==C){H[/ut|nd/.test(N)?_remove:_add](A)
}}if(_mobile){l.stopPropagation()
}else{return !1
}}})
})
}
})(window.jQuery||window.Zepto);
$(document).ready(function(){var b=window.location.hash.replace("#","");
if(b&&$("."+b).length){var a=$("."+b).offset().top-40;
window.Zepto?window.scrollTo(0,a):$(window).scrollTop($("."+b).offset().top-40)
}$(".skin dt").click(function(){$(this).siblings().removeClass("selected").end().prev("dd").andSelf().addClass("selected")
});
$(".arrows .top, .arrows .bottom, .features .self, .skins-info .self, .usage .self").click(function(c){var e=$(this).data("to"),f=$("."+e).offset().top;
c.preventDefault();
window.location.hash=e;
window.Zepto?window.scrollTo(0,f-40):$("html, body").stop().animate({scrollTop:f-40},600)
});
$(".colors li").click(function(){var h=$(this);
if(!h.hasClass("active")){h.siblings().removeClass("active");
var i=h.closest(".skin"),m=h.attr("class")?"-"+h.attr("class"):"",n=i.data("icheckbox"),j=i.data("iradio"),l="icheckbox_minimal",k="iradio_minimal";
i.hasClass("skin-square")&&(l="icheckbox_square",k="iradio_square",void 0==n&&(n="icheckbox_square-green",j="iradio_square-green"));
i.hasClass("skin-flat")&&(l="icheckbox_flat",k="iradio_flat",void 0==n&&(n="icheckbox_flat-red",j="iradio_flat-red"));
i.hasClass("skin-line")&&(l="icheckbox_line",k="iradio_line",void 0==n&&(n="icheckbox_line-blue",j="iradio_line-blue"));
void 0==n&&(n=l,j=k);
i.find("input, .skin-states .state").each(function(){var d=$(this).hasClass("state")?$(this):$(this).parent(),c=d.attr("class").replace(n,l+m).replace(j,k+m);
d.attr("class",c)
});
i.data("icheckbox",l+m);
i.data("iradio",k+m);
h.addClass("active")
}});
$(".demo-methods dt .self").click(function(){var c=$(this);
switch(c.attr("class").replace("self ","")){case"do-check":$("#input-1, #input-3").iCheck("check");
break;
case"do-uncheck":$("#input-1, #input-3").iCheck("uncheck");
break;
case"do-disable":$("#input-2, #input-4").iCheck("disable");
break;
case"do-enable":$("#input-2, #input-4").iCheck("enable");
break;
case"do-destroy":$(".demo-list input").iCheck("destroy");
break;
default:var d=c.hasClass("active")?"show code":"hide code";
c.toggleClass("active").text(d);
window.Zepto?$(this).closest("dt").next().toggle():$(this).closest("dt").next().slideToggle(200)
}})
});
(function(a){a.fn.unveil=function(h,j){var e=a(window),b=h||0,d=window.devicePixelRatio>1,f=d?"data-src-retina":"data-src",i=this,g;
this.one("unveil",function(){var k=this.getAttribute(f);
k=k||this.getAttribute("data-src");
if(k){this.setAttribute("src",k);
if(typeof j==="function"){j.call(this)
}}});
function c(){var k=i.filter(function(){var m=a(this),l=e.scrollTop(),o=l+e.height(),p=m.offset().top,n=p+m.height();
return n>=l-b&&p<=o+b
});
g=k.trigger("unveil");
i=i.not(g)
}e.scroll(c);
e.resize(c);
c();
return this
}
})(window.jQuery||window.Zepto);
jQuery.fn.highlight=function(b){function a(e,j){var i=0;
if(3==e.nodeType){var g=e.data.toUpperCase().indexOf(j);
if(0<=g){i=document.createElement("span");
i.className="highlight";
g=e.splitText(g);
g.splitText(j.length);
var h=g.cloneNode(!0);
i.appendChild(h);
g.parentNode.replaceChild(i,g);
i=1
}}else{if(1==e.nodeType&&e.childNodes&&!/(script|style)/i.test(e.tagName)){for(g=0;
g<e.childNodes.length;
++g){g+=a(e.childNodes[g],j)
}}}return i
}return this.length&&b&&b.length?this.each(function(){a(this,b.toUpperCase())
}):this
};
jQuery.fn.removeHighlight=function(){return this.find("span.highlight").each(function(){this.parentNode.firstChild.nodeName;
with(this.parentNode){replaceChild(this.firstChild,this),normalize()
}}).end()
};
/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery.cookie"],a)
}else{a(jQuery)
}}(function(f){var a=/\+/g;
function d(i){return b.raw?i:encodeURIComponent(i)
}function g(i){return b.raw?i:decodeURIComponent(i)
}function h(i){return d(b.json?JSON.stringify(i):String(i))
}function c(i){if(i.indexOf('"')===0){i=i.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")
}try{i=decodeURIComponent(i.replace(a," "))
}catch(j){return
}try{return b.json?JSON.parse(i):i
}catch(j){}}function e(j,i){var k=b.raw?j:c(j);
return f.isFunction(i)?i(k):k
}var b=f.cookie=function(q,p,v){if(p!==undefined&&!f.isFunction(p)){v=f.extend({},b.defaults,v);
if(typeof v.expires==="number"){var r=v.expires,u=v.expires=new Date();
u.setDate(u.getDate()+r)
}return(document.cookie=[d(q),"=",h(p),v.expires?"; expires="+v.expires.toUTCString():"",v.path?"; path="+v.path:"",v.domain?"; domain="+v.domain:"",v.secure?"; secure":""].join(""))
}var w=q?undefined:{};
var s=document.cookie?document.cookie.split("; "):[];
for(var o=0,m=s.length;
o<m;
o++){var n=s[o].split("=");
var j=g(n.shift());
var k=n.join("=");
if(q&&q===j){w=e(k,p);
break
}if(!q&&(k=e(k))!==undefined){w[j]=k
}}return w
};
b.defaults={};
f.removeCookie=function(j,i){if(f.cookie(j)!==undefined){f.cookie(j,"",f.extend({},i,{expires:-1}));
return true
}return false
}
}));
(function(){var ak=this,ae=ak._,ag={},au=Array.prototype,ad=Object.prototype,ap=Function.prototype,ay=au.push,aj=au.slice,aw=au.concat,am=ad.toString,at=ad.hasOwnProperty,af=au.forEach,ai=au.map,aq=au.reduce,ac=au.reduceRight,ar=au.filter,av=au.every,al=au.some,Z=au.indexOf,ax=au.lastIndexOf,aa=Array.isArray,ab=Object.keys,az=ap.bind,ao=function(a){return a instanceof ao?a:this instanceof ao?void (this._wrapped=a):new ao(a)
};
"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=ao),exports._=ao):ak._=ao,ao.VERSION="1.6.0";
var X=ao.each=ao.forEach=function(h,f,g){if(null==h){return h
}if(af&&h.forEach===af){h.forEach(f,g)
}else{if(h.length===+h.length){for(var c=0,d=h.length;
d>c;
c++){if(f.call(g,h[c],c,h)===ag){return
}}}else{for(var b=ao.keys(h),c=0,d=b.length;
d>c;
c++){if(f.call(g,h[b[c]],b[c],h)===ag){return
}}}}return h
};
ao.map=ao.collect=function(d,a,b){var c=[];
return null==d?c:ai&&d.map===ai?d.map(a,b):(X(d,function(g,e,f){c.push(a.call(b,g,e,f))
}),c)
};
var J="Reduce of empty array with no initial value";
ao.reduce=ao.foldl=ao.inject=function(f,b,c,d){var a=arguments.length>2;
if(null==f&&(f=[]),aq&&f.reduce===aq){return d&&(b=ao.bind(b,d)),a?f.reduce(b,c):f.reduce(b)
}if(X(f,function(h,g,e){a?c=b.call(d,c,h,g,e):(c=h,a=!0)
}),!a){throw new TypeError(J)
}return c
},ao.reduceRight=ao.foldr=function(j,f,g,h){var c=arguments.length>2;
if(null==j&&(j=[]),ac&&j.reduceRight===ac){return h&&(f=ao.bind(f,h)),c?j.reduceRight(f,g):j.reduceRight(f)
}var d=j.length;
if(d!==+d){var b=ao.keys(j);
d=b.length
}if(X(j,function(e,i,a){i=b?b[--d]:--d,c?g=f.call(h,g,j[i],i,a):(g=j[i],c=!0)
}),!c){throw new TypeError(J)
}return g
},ao.find=ao.detect=function(d,a,b){var c;
return an(d,function(g,e,f){return a.call(b,g,e,f)?(c=g,!0):void 0
}),c
},ao.filter=ao.select=function(d,a,b){var c=[];
return null==d?c:ar&&d.filter===ar?d.filter(a,b):(X(d,function(g,e,f){a.call(b,g,e,f)&&c.push(g)
}),c)
},ao.reject=function(c,a,b){return ao.filter(c,function(g,f,d){return !a.call(b,g,f,d)
},b)
},ao.every=ao.all=function(d,b,c){b||(b=ao.identity);
var a=!0;
return null==d?a:av&&d.every===av?d.every(b,c):(X(d,function(g,f,e){return(a=a&&b.call(c,g,f,e))?void 0:ag
}),!!a)
};
var an=ao.some=ao.any=function(d,b,c){b||(b=ao.identity);
var a=!1;
return null==d?a:al&&d.some===al?d.some(b,c):(X(d,function(g,f,e){return a||(a=b.call(c,g,f,e))?ag:void 0
}),!!a)
};
ao.contains=ao.include=function(b,a){return null==b?!1:Z&&b.indexOf===Z?b.indexOf(a)!=-1:an(b,function(c){return c===a
})
},ao.invoke=function(d,a){var b=aj.call(arguments,2),c=ao.isFunction(a);
return ao.map(d,function(e){return(c?a:e[a]).apply(e,b)
})
},ao.pluck=function(b,a){return ao.map(b,ao.property(a))
},ao.where=function(b,a){return ao.filter(b,ao.matches(a))
},ao.findWhere=function(b,a){return ao.find(b,ao.matches(a))
},ao.max=function(f,b,c){if(!b&&ao.isArray(f)&&f[0]===+f[0]&&f.length<65535){return Math.max.apply(Math,f)
}var d=-1/0,a=-1/0;
return X(f,function(j,g,e){var h=b?b.call(c,j,g,e):j;
h>a&&(d=j,a=h)
}),d
},ao.min=function(f,b,c){if(!b&&ao.isArray(f)&&f[0]===+f[0]&&f.length<65535){return Math.min.apply(Math,f)
}var d=1/0,a=1/0;
return X(f,function(j,g,e){var h=b?b.call(c,j,g,e):j;
a>h&&(d=j,a=h)
}),d
},ao.shuffle=function(d){var a,b=0,c=[];
return X(d,function(e){a=ao.random(b++),c[b-1]=c[a],c[a]=e
}),c
},ao.sample=function(c,a,b){return null==a||b?(c.length!==+c.length&&(c=ao.values(c)),c[ao.random(c.length-1)]):ao.shuffle(c).slice(0,Math.max(0,a))
};
var U=function(a){return null==a?ao.identity:ao.isFunction(a)?a:ao.property(a)
};
ao.sortBy=function(c,a,b){return a=U(a),ao.pluck(ao.map(c,function(g,f,d){return{value:g,index:f,criteria:a.call(b,g,f,d)}
}).sort(function(h,d){var f=h.criteria,g=d.criteria;
if(f!==g){if(f>g||f===void 0){return 1
}if(g>f||g===void 0){return -1
}}return h.index-d.index
}),"value")
};
var Q=function(a){return function(c,d,f){var b={};
return d=U(d),X(c,function(g,e){var h=d.call(f,g,e,c);
a(b,h,g)
}),b
}
};
ao.groupBy=Q(function(c,a,b){ao.has(c,a)?c[a].push(b):c[a]=[b]
}),ao.indexBy=Q(function(c,a,b){c[a]=b
}),ao.countBy=Q(function(b,a){ao.has(b,a)?b[a]++:b[a]=1
}),ao.sortedIndex=function(k,f,g,h){g=U(g);
for(var c=g.call(h,f),d=0,b=k.length;
b>d;
){var j=d+b>>>1;
g.call(h,k[j])<c?d=j+1:b=j
}return d
},ao.toArray=function(a){return a?ao.isArray(a)?aj.call(a):a.length===+a.length?ao.map(a,ao.identity):ao.values(a):[]
},ao.size=function(a){return null==a?0:a.length===+a.length?a.length:ao.keys(a).length
},ao.first=ao.head=ao.take=function(c,a,b){return null==c?void 0:null==a||b?c[0]:0>a?[]:aj.call(c,0,a)
},ao.initial=function(c,a,b){return aj.call(c,0,c.length-(null==a||b?1:a))
},ao.last=function(c,a,b){return null==c?void 0:null==a||b?c[c.length-1]:aj.call(c,Math.max(c.length-a,0))
},ao.rest=ao.tail=ao.drop=function(c,a,b){return aj.call(c,null==a||b?1:a)
},ao.compact=function(a){return ao.filter(a,ao.identity)
};
var L=function(c,a,b){return a&&ao.every(c,ao.isArray)?aw.apply(b,c):(X(c,function(d){ao.isArray(d)||ao.isArguments(d)?a?ay.apply(b,d):L(d,a,b):b.push(d)
}),b)
};
ao.flatten=function(b,a){return L(b,a,[])
},ao.without=function(a){return ao.difference(a,aj.call(arguments,1))
},ao.partition=function(d,a){var b=[],c=[];
return X(d,function(e){(a(e)?b:c).push(e)
}),[b,c]
},ao.uniq=ao.unique=function(j,f,g,h){ao.isFunction(f)&&(h=g,g=f,f=!1);
var c=g?ao.map(j,g,h):j,d=[],b=[];
return X(c,function(a,i){(f?i&&b[b.length-1]===a:ao.contains(b,a))||(b.push(a),d.push(j[i]))
}),d
},ao.union=function(){return ao.uniq(ao.flatten(arguments,!0))
},ao.intersection=function(b){var a=aj.call(arguments,1);
return ao.filter(ao.uniq(b),function(c){return ao.every(a,function(d){return ao.contains(d,c)
})
})
},ao.difference=function(b){var a=aw.apply(au,aj.call(arguments,1));
return ao.filter(b,function(c){return !ao.contains(a,c)
})
},ao.zip=function(){for(var c=ao.max(ao.pluck(arguments,"length").concat(0)),a=new Array(c),b=0;
c>b;
b++){a[b]=ao.pluck(arguments,""+b)
}return a
},ao.object=function(f,b){if(null==f){return{}
}for(var c={},d=0,a=f.length;
a>d;
d++){b?c[f[d]]=b[d]:c[f[d][0]]=f[d][1]
}return c
},ao.indexOf=function(f,b,c){if(null==f){return -1
}var d=0,a=f.length;
if(c){if("number"!=typeof c){return d=ao.sortedIndex(f,b),f[d]===b?d:-1
}d=0>c?Math.max(0,a+c):c
}if(Z&&f.indexOf===Z){return f.indexOf(b,c)
}for(;
a>d;
d++){if(f[d]===b){return d
}}return -1
},ao.lastIndexOf=function(f,b,c){if(null==f){return -1
}var d=null!=c;
if(ax&&f.lastIndexOf===ax){return d?f.lastIndexOf(b,c):f.lastIndexOf(b)
}for(var a=d?c:f.length;
a--;
){if(f[a]===b){return a
}}return -1
},ao.range=function(g,c,d){arguments.length<=1&&(c=g||0,g=0),d=arguments[2]||1;
for(var f=Math.max(Math.ceil((c-g)/d),0),a=0,b=new Array(f);
f>a;
){b[a++]=g,g+=d
}return b
};
var H=function(){};
ao.bind=function(d,a){var b,c;
if(az&&d.bind===az){return az.apply(d,aj.call(arguments,1))
}if(!ao.isFunction(d)){throw new TypeError
}return b=aj.call(arguments,2),c=function(){if(!(this instanceof c)){return d.apply(a,b.concat(aj.call(arguments)))
}H.prototype=d.prototype;
var e=new H;
H.prototype=null;
var f=d.apply(e,b.concat(aj.call(arguments)));
return Object(f)===f?f:e
}
},ao.partial=function(b){var a=aj.call(arguments,1);
return function(){for(var f=0,g=a.slice(),c=0,d=g.length;
d>c;
c++){g[c]===ao&&(g[c]=arguments[f++])
}for(;
f<arguments.length;
){g.push(arguments[f++])
}return b.apply(this,g)
}
},ao.bindAll=function(b){var a=aj.call(arguments,1);
if(0===a.length){throw new Error("bindAll must be passed function names")
}return X(a,function(c){b[c]=ao.bind(b[c],b)
}),b
},ao.memoize=function(c,a){var b={};
return a||(a=ao.identity),function(){var d=a.apply(this,arguments);
return ao.has(b,d)?b[d]:b[d]=c.apply(this,arguments)
}
},ao.delay=function(c,a){var b=aj.call(arguments,2);
return setTimeout(function(){return c.apply(null,b)
},a)
},ao.defer=function(a){return ao.delay.apply(ao,[a,1].concat(aj.call(arguments,1)))
},ao.throttle=function(f,m,b){var h,l,g,k=null,d=0;
b||(b={});
var j=function(){d=b.leading===!1?0:ao.now(),k=null,g=f.apply(h,l),h=l=null
};
return function(){var a=ao.now();
d||b.leading!==!1||(d=a);
var c=m-(a-d);
return h=this,l=arguments,0>=c?(clearTimeout(k),k=null,d=a,g=f.apply(h,l),h=l=null):k||b.trailing===!1||(k=setTimeout(j,c)),g
}
},ao.debounce=function(f,m,b){var h,l,g,k,d,j=function(){var a=ao.now()-k;
m>a?h=setTimeout(j,m-a):(h=null,b||(d=f.apply(g,l),g=l=null))
};
return function(){g=this,l=arguments,k=ao.now();
var a=b&&!h;
return h||(h=setTimeout(j,m)),a&&(d=f.apply(g,l),g=l=null),d
}
},ao.once=function(c){var a,b=!1;
return function(){return b?a:(b=!0,a=c.apply(this,arguments),c=null,a)
}
},ao.wrap=function(b,a){return ao.partial(a,b)
},ao.compose=function(){var a=arguments;
return function(){for(var b=arguments,c=a.length-1;
c>=0;
c--){b=[a[c].apply(this,b)]
}return b[0]
}
},ao.after=function(b,a){return function(){return --b<1?a.apply(this,arguments):void 0
}
},ao.keys=function(c){if(!ao.isObject(c)){return[]
}if(ab){return ab(c)
}var a=[];
for(var b in c){ao.has(c,b)&&a.push(b)
}return a
},ao.values=function(f){for(var b=ao.keys(f),c=b.length,d=new Array(c),a=0;
c>a;
a++){d[a]=f[b[a]]
}return d
},ao.pairs=function(f){for(var b=ao.keys(f),c=b.length,d=new Array(c),a=0;
c>a;
a++){d[a]=[b[a],f[b[a]]]
}return d
},ao.invert=function(f){for(var b={},c=ao.keys(f),d=0,a=c.length;
a>d;
d++){b[f[c[d]]]=c[d]
}return b
},ao.functions=ao.methods=function(c){var a=[];
for(var b in c){ao.isFunction(c[b])&&a.push(b)
}return a.sort()
},ao.extend=function(a){return X(aj.call(arguments,1),function(b){if(b){for(var c in b){a[c]=b[c]
}}}),a
},ao.pick=function(c){var a={},b=aw.apply(au,aj.call(arguments,1));
return X(b,function(d){d in c&&(a[d]=c[d])
}),a
},ao.omit=function(d){var b={},c=aw.apply(au,aj.call(arguments,1));
for(var a in d){ao.contains(c,a)||(b[a]=d[a])
}return b
},ao.defaults=function(a){return X(aj.call(arguments,1),function(b){if(b){for(var c in b){a[c]===void 0&&(a[c]=b[c])
}}}),a
},ao.clone=function(a){return ao.isObject(a)?ao.isArray(a)?a.slice():ao.extend({},a):a
},ao.tap=function(b,a){return a(b),b
};
var G=function(g,q,b,k){if(g===q){return 0!==g||1/g==1/q
}if(null==g||null==q){return g===q
}g instanceof ao&&(g=g._wrapped),q instanceof ao&&(q=q._wrapped);
var p=am.call(g);
if(p!=am.call(q)){return !1
}switch(p){case"[object String]":return g==String(q);
case"[object Number]":return g!=+g?q!=+q:0==g?1/g==1/q:g==+q;
case"[object Date]":case"[object Boolean]":return +g==+q;
case"[object RegExp]":return g.source==q.source&&g.global==q.global&&g.multiline==q.multiline&&g.ignoreCase==q.ignoreCase
}if("object"!=typeof g||"object"!=typeof q){return !1
}for(var h=b.length;
h--;
){if(b[h]==g){return k[h]==q
}}var m=g.constructor,d=q.constructor;
if(m!==d&&!(ao.isFunction(m)&&m instanceof m&&ao.isFunction(d)&&d instanceof d)&&"constructor" in g&&"constructor" in q){return !1
}b.push(g),k.push(q);
var l=0,j=!0;
if("[object Array]"==p){if(l=g.length,j=l==q.length){for(;
l--&&(j=G(g[l],q[l],b,k));
){}}}else{for(var v in g){if(ao.has(g,v)&&(l++,!(j=ao.has(q,v)&&G(g[v],q[v],b,k)))){break
}}if(j){for(v in q){if(ao.has(q,v)&&!l--){break
}}j=!l
}}return b.pop(),k.pop(),j
};
ao.isEqual=function(b,a){return G(b,a,[],[])
},ao.isEmpty=function(b){if(null==b){return !0
}if(ao.isArray(b)||ao.isString(b)){return 0===b.length
}for(var a in b){if(ao.has(b,a)){return !1
}}return !0
},ao.isElement=function(a){return !(!a||1!==a.nodeType)
},ao.isArray=aa||function(a){return"[object Array]"==am.call(a)
},ao.isObject=function(a){return a===Object(a)
},X(["Arguments","Function","String","Number","Date","RegExp"],function(a){ao["is"+a]=function(b){return am.call(b)=="[object "+a+"]"
}
}),ao.isArguments(arguments)||(ao.isArguments=function(a){return !(!a||!ao.has(a,"callee"))
}),"function"!=typeof/./&&(ao.isFunction=function(a){return"function"==typeof a
}),ao.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))
},ao.isNaN=function(a){return ao.isNumber(a)&&a!=+a
},ao.isBoolean=function(a){return a===!0||a===!1||"[object Boolean]"==am.call(a)
},ao.isNull=function(a){return null===a
},ao.isUndefined=function(a){return a===void 0
},ao.has=function(b,a){return at.call(b,a)
},ao.noConflict=function(){return ak._=ae,this
},ao.identity=function(a){return a
},ao.constant=function(a){return function(){return a
}
},ao.property=function(a){return function(b){return b[a]
}
},ao.matches=function(a){return function(b){if(b===a){return !0
}for(var c in a){if(a[c]!==b[c]){return !1
}}return !0
}
},ao.times=function(f,b,c){for(var d=Array(Math.max(0,f)),a=0;
f>a;
a++){d[a]=b.call(c,a)
}return d
},ao.random=function(b,a){return null==a&&(a=b,b=0),b+Math.floor(Math.random()*(a-b+1))
},ao.now=Date.now||function(){return(new Date).getTime()
};
var C={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};
C.unescape=ao.invert(C.escape);
var P={escape:new RegExp("["+ao.keys(C.escape).join("")+"]","g"),unescape:new RegExp("("+ao.keys(C.unescape).join("|")+")","g")};
ao.each(["escape","unescape"],function(a){ao[a]=function(b){return null==b?"":(""+b).replace(P[a],function(c){return C[a][c]
})
}
}),ao.result=function(c,a){if(null==c){return void 0
}var b=c[a];
return ao.isFunction(b)?b.call(c):b
},ao.mixin=function(a){X(ao.functions(a),function(b){var c=ao[b]=a[b];
ao.prototype[b]=function(){var d=[this._wrapped];
return ay.apply(d,arguments),Y.call(this,c.apply(ao,d))
}
})
};
var K=0;
ao.uniqueId=function(b){var a=++K+"";
return b?b+a:a
},ao.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};
var ah=/(.)^/,W={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},V=/\\|'|\r|\n|\t|\u2028|\u2029/g;
ao.template=function(f,m,b){var h;
b=ao.defaults({},b,ao.templateSettings);
var l=new RegExp([(b.escape||ah).source,(b.interpolate||ah).source,(b.evaluate||ah).source].join("|")+"|$","g"),g=0,k="__p+='";
f.replace(l,function(c,i,n,a,p){return k+=f.slice(g,p).replace(V,function(e){return"\\"+W[e]
}),i&&(k+="'+\n((__t=("+i+"))==null?'':_.escape(__t))+\n'"),n&&(k+="'+\n((__t=("+n+"))==null?'':__t)+\n'"),a&&(k+="';\n"+a+"\n__p+='"),g=p+c.length,c
}),k+="';\n",b.variable||(k="with(obj||{}){\n"+k+"}\n"),k="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+k+"return __p;\n";
try{h=new Function(b.variable||"obj","_",k)
}catch(d){throw d.source=k,d
}if(m){return h(m,ao)
}var j=function(a){return h.call(this,a,ao)
};
return j.source="function("+(b.variable||"obj")+"){\n"+k+"}",j
},ao.chain=function(a){return ao(a).chain()
};
var Y=function(a){return this._chain?ao(a).chain():a
};
ao.mixin(ao),X(["pop","push","reverse","shift","sort","splice","unshift"],function(b){var a=au[b];
ao.prototype[b]=function(){var c=this._wrapped;
return a.apply(c,arguments),"shift"!=b&&"splice"!=b||0!==c.length||delete c[0],Y.call(this,c)
}
}),X(["concat","join","slice"],function(b){var a=au[b];
ao.prototype[b]=function(){return Y.call(this,a.apply(this._wrapped,arguments))
}
}),ao.extend(ao.prototype,{chain:function(){return this._chain=!0,this
},value:function(){return this._wrapped
}}),"function"==typeof define&&define.amd&&define("underscore",[],function(){return ao
})
}).call(this);
(function(){if(!Function.prototype.bind){Function.prototype.bind=function(a){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
}var e=Array.prototype.slice.call(arguments,1),d=this,b=function(){},c=function(){return d.apply(this instanceof b?this:a,e.concat(Array.prototype.slice.call(arguments)))
};
b.prototype=this.prototype;
c.prototype=new b();
return c
}
}if(typeof Object.create!="function"){Object.create=(function(){var a=function(){};
return function(c){if(arguments.length>1){throw Error("Second argument not supported")
}if(typeof c!="object"){throw new TypeError("Argument must be an object")
}a.prototype=c;
var b=new a();
a.prototype=null;
return b
}
})()
}if(!String.prototype.trim){(function(){var a=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
String.prototype.trim=function(){return this.replace(a,"")
}
})()
}if(!Array.prototype.filter){Array.prototype.filter=function(c){if(this===void 0||this===null){throw new TypeError()
}var f=Object(this);
var a=f.length>>>0;
if(typeof c!=="function"){throw new TypeError()
}var e=[];
var b=arguments.length>=2?arguments[1]:void 0;
for(var d=0;
d<a;
d++){if(d in f){var g=f[d];
if(c.call(b,g,d,f)){e.push(g)
}}}return e
}
}})();
(function(a){var b=function(){var c=this;
c.observers=[]
};
b.prototype.addObserver=function(d){var c=this;
c.observers.push(d)
};
b.prototype.removeObserver=function(d){var c=this;
var e=c.observers.indexOf(d);
if(e&&e>=0){c.observers.splice(e,1)
}};
b.prototype.notifyObservers=function(){var c=this;
if(!c.observers){return
}for(var d=c.observers.length-1;
d>=0;
d--){c.observers[d]()
}};
a.extend(true,window,{FFX:{components:{marketdata:{ObservableHagrid:new b()}}}})
})(jQuery);
(function(b){var a=(function(){var m=this,k=false,n=365,t=10,s="pageUrl",e="/post-login.html",x="/logout.html",o="/external-login.html";
m.DAYS_TO_EXPIRE=n;
m.USER_TYPE_DAYS_TO_EXPIRE=t;
m.isPostLoginRedirecting=function(A){return A.indexOf(e)!==-1
};
m.isLogoutRedirecting=function(A){return A.indexOf(x)!==-1
};
m.isExternalLoginRedirecting=function(A){return A.indexOf(o)!==-1
};
m.ugcHealthCheck=function(B,A){if(k){B&&B();
return
}b.ajax({async:false,type:"GET",dataType:"html",url:"/ugc/healthCheck.html",data:"cb="+new Date().getTime()}).done(function(C){if(C===undefined||C.indexOf("OK")===-1){A&&A();
k=false
}else{B&&B();
k=true
}}).fail(function(){A&&A();
k=false
})
};
m.logoutUGC=function d(B,D){m.ugcHealthCheck(function C(){b.get("/ugc/logout.html",function(){m.clearUgcCookies(B);
D&&D()
})
},function A(){console.error("ugc unhealthy");
D&&D()
})
};
m.completeLogin=function h(A,C,E){m.ugcHealthCheck(function D(){m.setCookie(m.getUgcCookieNameBy(C),A,n,"/",null);
b.get("/ugc/login.html",function(){m.setCookie(m.getUgcPostLoginCookieNameBy(C),1,n,"/",null);
E&&E()
})
},function B(){m.clearUgcCookies(C);
console.error("ugc unhealthy")
})
};
m.isLoggedIn=function(A){return m.getCookie(m.getUgcPostLoginCookieNameBy(A))
};
m.setCookie=function l(B,E,A,G,D,F){if(A&&!A.toGMTString){var H=new Date();
H.setDate(H.getDate()+A);
A=H
}var C=B+"="+escape(E)+((A)?"; expires="+A.toGMTString():"")+((G)?"; path="+G:"")+((D)?"; domain="+D:"")+((F)?"; secure":"");
document.cookie=C
};
m.getCookie=function q(C){var B=document.cookie;
var E=C+"=";
var D=B.indexOf("; "+E);
if(D==-1){D=B.indexOf(E);
if(D!=0){return null
}}else{D+=2
}var A=document.cookie.indexOf(";",D);
if(A==-1){A=B.length
}return unescape(B.substring(D+E.length,A))
};
m.deleteCookie=function f(A,C,B){if(m.getCookie(A)){document.cookie=A+"="+((C)?"; path="+C:"")+((B)?"; domain="+B:"")+"; expires=Thu, 01-Jan-70 00:00:01 GMT"
}};
m.doesPostLoginRedirectPageExist=function y(A){if(!A){return
}b.ajax({type:"GET",url:e,dataType:"html",success:function(B){A(B.indexOf("<title>Redirecting...</title>")!=-1)
},fail:function(B,C){A(false)
}})
};
m.getPostLoginRedirectUrl=function c(A){m.doesPostLoginRedirectPageExist(function(E){var D=document.location.href;
if(!m.isParameterNeeded(D)){D=m.stripQueryStringAndHashFromPath(D)
}else{D=m.urlSmartStrip(D)
}if(E){var C=document.location.port;
var B=document.location.protocol+"//"+document.location.hostname+(C!=""?":"+C:"");
A&&A(B+e+"?url="+encodeURIComponent(D))
}else{A&&A(D)
}})
};
m.setMembershipCallbackPageUrlCookie=function i(){var B=document.location.href;
var A=m.stripQueryStringAndHashFromPath(B);
m.setCookie(s,A,n,"/",null)
};
m.stripQueryStringAndHashFromPath=function j(A){return A.split("?")[0].split("#")[0]
};
m.appendCookieNameWithEnvIfExist=function u(B,A){return A?(B+"_"+A):B
};
m.getUgcCookieNameBy=function z(A){return m.appendCookieNameWithEnvIfExist("ffx_mm_token",A)
};
m.getUgcPostLoginCookieNameBy=function w(A){return m.appendCookieNameWithEnvIfExist("ugc_post_login",A)
};
m.loginUGC=function r(A,B,C){m.setMembershipCallbackPageUrlCookie();
if(A){m.completeLogin(A,B,C)
}};
m.clearUgcCookies=function v(A){m.deleteCookie(s,"/",null);
m.deleteCookie(m.getUgcCookieNameBy(A),"/",null);
m.deleteCookie(m.getUgcPostLoginCookieNameBy(A),"/",null)
};
m.isParameterNeeded=function g(A){if(A.indexOf("search.html")!==-1){return true
}return false
};
m.urlSmartStrip=function p(A){if(A.indexOf("&logout=true#")!==-1){A=A.replace("&logout=true#","#")
}return A
};
window.ugcUtil=m;
return m
})()
})(jQuery);
(function(b){var a=function(){};
a.getDaysBetween=function(d,c){if(d&&c&&this.isValidDate(d)&&this.isValidDate(c)){d=Date.parse(d);
c=Date.parse(c);
if(d<=c){return Math.ceil((c-d)/(1000*60*60*24))
}}return null
};
a.getDaysToEndDate=function(c){return this.getDaysBetween(new Date(Date.now()),c)
};
a.addDaysToDate=function(c,d){if(d&&c&&this.isValidDate(c)){return new Date(Date.parse(c)+(1000*60*60*24*d))
}return null
};
a.getDateWithMaxTime=function(c){if(a.isValidDate(c)){return new Date(c.setHours(0,0,0,0)+86399999)
}return null
};
a.isValidDate=function(c){return Object.prototype.toString.call(c)==="[object Date]"
};
b.extend(true,window,{FFX:{utils:{DateUtil:a}}})
})(jQuery);
(function(b){var a=function(){};
a.setCookie=function(d,g,c,i,f,h){var j=new Date(new Date().getTime()+parseInt(c));
var e=d+"="+escape(g)+((c)?"; expires="+j.toGMTString():"")+((i)?"; path="+i:"")+((f)?"; domain="+f:"")+((h)?"; secure":"");
document.cookie=e
};
a.getCookie=function(e){var d=document.cookie;
var g=e+"=";
var f=d.indexOf("; "+g);
if(f==-1){f=d.indexOf(g);
if(f!=0){return null
}}else{f+=2
}var c=document.cookie.indexOf(";",f);
if(c==-1){c=d.length
}return unescape(d.substring(f+g.length,c))
};
b.extend(true,window,{FFX:{utils:{CookieUtil:a}}})
})(jQuery);
(function(c){var b={};
var d=function(){a()
};
function a(){var f=c("#hagrid-config").attr("data-ffxhagrid-paywall-asset-options-map");
var e=c.parseJSON(f);
if(e!=null){b=e
}else{console.error("Map between page name and categories has not been defined in the afr properties file.")
}}d.getPaywallAssetOptions=function(e){return b[e]
};
d.hasPaywallAssetOptions=function(e){if(b[e]!=null){return true
}else{return false
}};
c.extend(true,window,{FFX:{AFR:{PayWallHelper:d}}})
})(jQuery);
(function(c,b,a){var d=(function(){var e=this;
new a();
var i={ARTICLE_TEMPLATE:"article",LIVE_ARTICLE_TEMPLATE:"livearticle",PAYWALL_PANEL:".paywall-panel",PAYWALL_INNER_PANEL:".paywall-inner-panel",BIND_PAYWALL_CLOSE:".bind-paywall-close",BIND_PAYWALL_HOME:".bind-home"};
e.protect=function(l){if(window.location.href.indexOf("www.afr.com")==-1){return false
}var k=c(".protectedByPayWall").attr("data-asset-base36-id")||a.hasPaywallAssetOptions(digitalData.page.pageInfo.pageName);
k&&l&&l();
return k
};
e.preparePayWallOptions=function(){var n=a.getPaywallAssetOptions(digitalData.page.pageInfo.pageName);
if(n!=null){return n
}var l=c(".protectedByPayWall"),k={id:l.attr("data-asset-base36-id"),types:["article"]};
if(l.attr("data-sources")){k.sources=l.attr("data-sources").split(",")
}if(l.attr("data-categories")){k.categories=l.attr("data-categories").split(",")
}try{if(k.categories){k.categories.unshift(digitalData.page.category.primaryCategory,digitalData.page.category.subCategory1,digitalData.page.category.subCategory2)
}}catch(m){console.error("digitalData.page.category.primaryCategory(subCategory1/subCategory2) could be missing.");
console.error(m)
}if(k.categories){k.categories=b.filter(k.categories,function(p,o){return p&&o==c.inArray(p,k.categories)
})
}return k
};
e.goHome=function(){var k=document.location.port;
var m=document.location.protocol+"//"+document.location.hostname+(k!=""?":"+k:"/");
var l=window.location.href.replace(window.location.search,"").replace(window.location.hash,"");
if(l==m){c(".paywall-panel").hide();
c("body").removeClass("has-paywall")
}else{document.location=m
}};
e.smashPayWall=function(){c(i.PAYWALL_PANEL).hide();
c(".protectedByPayWall").removeClass("on")
};
function f(k){if(k.indexOf("/content/afr.html")!==-1||k.indexOf("/content/afr/")!==-1){return"/content/afr"
}else{return""
}}function h(l){if(c(i.PAYWALL_INNER_PANEL).length){c(document).on("click",function k(m){if(c(m.target).closest(i.PAYWALL_INNER_PANEL).length===0){l&&l();
c(document).off("click",k)
}})
}}function g(l){if(c(i.BIND_PAYWALL_CLOSE).length){c(i.BIND_PAYWALL_CLOSE).click(function k(){digitalData.events.push({type:"analytics",event:"closeMeter"});
l&&l();
c(i.BIND_PAYWALL_CLOSE).off("click",k)
})
}}function j(l){if(c(i.BIND_PAYWALL_HOME).length){c(i.BIND_PAYWALL_HOME).click(function k(){l&&l();
c(i.BIND_PAYWALL_HOME).off("click",k)
})
}}e.showSubscriptionBy=function(m,n){var l="visitor";
if(m.isVisitor()){l="visitor"
}else{if(m.isMember()){l="member"
}else{if(m.isBasicSubscriber()||m.isBasicSubscriberMaximumReached()){l="basicSubscriber"
}else{console.error("not supposed to show the paywall-panel according to the passed in af user type")
}}}var k="/jcr:content/paywall.html?userType=";
if(digitalData.page.pageInfo.template===i.ARTICLE_TEMPLATE||digitalData.page.pageInfo.template===i.LIVE_ARTICLE_TEMPLATE){k="/jcr:content/article-paywall.html?userType="
}c.ajax({url:f(window.location.href)+k+l,dataType:"html",success:function(o){var p=c(o);
c(i.PAYWALL_PANEL).replaceWith(p);
c.event.trigger({type:"onPaywallLoad",time:new Date()});
c(i.PAYWALL_PANEL).show();
if(c(".paywall-panel:visible")&&n){h(n);
g(n);
j(n)
}},error:function(q,o,p){console.error("Paywall request failed: "+o+p)
}})
};
window.payWall=e;
return e
})()
})(jQuery,_,FFX.AFR.PayWallHelper);
(function(c){var j={},s=30,h=30,p=3,f=10000,i=$("#hagrid-config").attr("data-debug-logging-enabled"),e,g={plansNotRequested:0,plansRequested:1,plansResolved:2},k=g.plansNotRequested,a=[],l=new $.Deferred(),o={premiumSubscriber:"premium-subscriber",freeTrialSubscriber:"free-trial-premium-subscriber",corporateSubscriber:"corporate-subscriber",basicSubscriber:"basic-subscriber",basicSubscriberMaximumReached:"basic-subscriber-maximum-reached",member:"member",visitor:"visitor"};
function b(u){var v;
switch(u){case o.visitor:v=0;
break;
case o.member:v=1;
break;
case o.premiumSubscriber:case o.freeTrialSubscriber:case o.corporateSubscriber:v=2;
break;
case o.basicSubscriber:v=3;
break;
case o.basicSubscriberMaximumReached:v=4;
break;
default:console.logDebug("Unknown user type is detected, falling back to the visitor user type...");
u=o.visitor;
v=0
}e={userType:v,userTypeString:u}
}function m(){var u=$("#hagrid-config").attr("data-plans-users-map");
return $.parseJSON(u)
}function q(v){var u=m(),w=[];
if(typeof u==="undefined"){console.error("Map between user types and plans has not been defined in the afr properties file. ");
return w
}for(var x in u){if(d(x,v)>-1&&d(x,w)===-1){w.push(u[x])
}}return w
}function d(v,w){var u=-1;
$.each(w,function(x,y){if(u===-1&&y.toLowerCase()===v.toLowerCase()){u=x;
return false
}});
return u
}function n(w){if(i=="true"){var u=new Date(),v=u.getHours()+":"+u.getMinutes()+":"+u.getSeconds()+"  :"+u.getMilliseconds(),x=typeof e!=="undefined"?e.userTypeString:"not-resolved-yet";
console.log("[module: UserType.js][time: "+v+"][user: "+x+"] "+w)
}}function t(){var v=false,u={isPremiumSubscriber:false,isFreeTrial:false,isCorporateSubscriber:false,isBasicSubscriber:false,isBasicSubscriberReachedMax:false};
try{FFXHagrid.getUserPlansProvider().getUserPlans(false,function(x){n("Plans returned: "+x);
u.matches=q(x);
n("Matches in the map are: "+u.matches);
if(d(o.corporateSubscriber,u.matches)>-1){u.isCorporateSubscriber=true
}if(d(o.basicSubscriber,u.matches)>-1){if(typeof FFXSubscriber!=="undefined"&&FFXSubscriber.Provider()&&FFXSubscriber.Provider().getMeterCount()>=s){u.isBasicSubscriberReachedMax=true
}else{u.isBasicSubscriber=true
}}if(d(o.premiumSubscriber,u.matches)>-1){if(typeof FFXSubscriber!=="undefined"&&FFXSubscriber.Provider()){FFXSubscriber.Provider().isFreeTrial(function(y){if(y===true){u.isFreeTrial=true
}else{u.isPremiumSubscriber=true
}v=true;
l.resolve(u)
})
}}else{v=true;
l.resolve(u)
}})
}catch(w){l.resolve(u);
console.error("Error happened while trying to read user plans. Message: "+w.message)
}setTimeout(function(){if(v===false){l.resolve(u);
console.error("[Timeout] in Hagrid getUserPlans callback ! ")
}},f);
return l.promise()
}function r(){var u=a.length||0;
if(a.constructor===Array){for(var v=0;
v<u;
v++){if(a[v].constructor===Function){try{a[v](e)
}catch(w){console.error("An error happened in one of the callbacks; skipping that from queue! The message is: "+w.message)
}}}}a=[];
if(u>0){n(u+" callbacks are fetched from the queue and invoked one-by-one.")
}}j.getAndCallback=function(u){n("UserType detection started. NB, the user type may change soon.");
if(k===g.plansRequested){n("Callback queued.");
a.push(u);
return
}else{if(k===g.plansResolved){n("User-type is already resolved, invoke callback immediately. ");
u(e);
return
}else{k=g.plansRequested
}}b(o.visitor);
if(ugcUtil.isPostLoginRedirecting(window.location.href)||ugcUtil.isLogoutRedirecting(window.location.href)||ugcUtil.isExternalLoginRedirecting(window.location.href)){n("User type detection is disabled for partial-hagrid pages. No callback triggered.");
return
}else{if(typeof FFXHagrid==="undefined"){u(e);
n("[FFXHagrid-undefined] Callback called. ");
console.error("FFXHagird is not loaded properly! Callback called with visitor user type. ");
return
}}$.when(t()).pipe(function(v){v.isLoggedIn=FFXHagrid.isLoggedIn();
return v
}).done(function(v){try{if(v.isCorporateSubscriber){b(o.corporateSubscriber)
}else{if(!v.isLoggedIn){b(o.visitor)
}else{if(v.isFreeTrial){b(o.freeTrialSubscriber)
}else{if(v.isPremiumSubscriber){b(o.premiumSubscriber)
}else{if(v.isBasicSubscriberReachedMax){b(o.basicSubscriberMaximumReached)
}else{if(v.isBasicSubscriber){b(o.basicSubscriber)
}else{b(o.member)
}}}}}}u(e);
n("Callback called. ");
r();
k=g.plansResolved
}catch(w){u(e);
r();
k=g.plansNotRequested;
n("[Error] Callback called anyway. ");
console.error("Error happened while getting user type. The message is: "+w.message)
}})
};
j.isFreeTrialEnding=function(u){if(typeof FFXSubscriber!=="undefined"&&FFXSubscriber.Provider()&&j.isFreeTrialSubscriber()){FFXSubscriber.Provider().getSubscriptionStartDate(function(w){if(w){var v=c.addDaysToDate(w,h);
var x=c.getDateWithMaxTime(v);
var y=c.getDaysToEndDate(x);
var z=y?(y>=0&&y<=p):false;
u&&u(z)
}})
}};
j.isPremiumSubscriber=function(){return e.userTypeString===o.premiumSubscriber
};
j.isFreeTrialSubscriber=function(){return e.userTypeString===o.freeTrialSubscriber
};
j.isCorporateSubscriber=function(){return e.userTypeString===o.corporateSubscriber
};
j.isBasicSubscriber=function(){return e.userTypeString===o.basicSubscriber
};
j.isBasicSubscriberMaximumReached=function(){return e.userTypeString===o.basicSubscriberMaximumReached
};
j.isMember=function(){return e.userTypeString===o.member
};
j.isVisitor=function(){return e.userTypeString===o.visitor
};
j.hasPremiumAccess=function(){return e.userType===2
};
$.extend(true,window,{FFX:{AFR:{UserType:j}}})
})(FFX.utils.DateUtil);
(function(a){$(document).on("userTypeReady",function(){if($("#hagrid-config").attr("data-premium-logo-enabled")=="false"){return
}a.getAndCallback(function(){if(a.hasPremiumAccess()){$("body").addClass("premium-subscriber")
}else{if(a.isBasicSubscriber()){$("body").addClass("basic-subscriber")
}else{if(a.isBasicSubscriberMaximumReached()){$("body").addClass("basic-subscriber");
$("body").addClass("basic-subscriber-maximum-reached")
}else{if(a.isMember()){$("body").addClass("member")
}}}}if($("body").hasClass("basic-subscriber")){$(".notification--basic-subscriber-maximum-reached").removeAttr("aria-hidden")
}})
})
})(FFX.AFR.UserType);
(function(){function a(){if($("body").hasClass("basic-subscriber")){$(".notification--basic-subscriber-maximum-reached").removeAttr("aria-hidden")
}}function b(){$(".notification--basic-subscriber").attr("aria-hidden","true")
}$(document).on("userTypeReady",function(){a();
$(".notification--basic-subscriber .notification__close").bind("click",function(c){$.cookie("basic-user-notification-closed","true",{expires:20*365});
b()
});
if($.cookie("basic-user-notification-closed")){b()
}})
})();
(function(c){var a={settings:{slideDuration:200,promptSelector:".prompt"}};
var b;
a.autoclosePrompt=function(d,e){b=setTimeout(function(){_slidePrompt(a.settings.slideDuration,e)
},d)
};
a.closePrompt=function(e){e.preventDefault();
var d=c(e.target);
var f=d.parents(a.settings.promptSelector);
_slidePrompt(a.settings.slideDuration,f);
clearTimeout(b)
};
_slidePrompt=function(d,e){e.slideUp(d)
};
c.extend(true,window,{FFX:{AFR:{Prompt:a}}})
})(jQuery);
(function(c,b){var a=(function(){var d=this,e=10000;
var g=function(){c(".prompt--subscribe-standard-close").on("click",b.closePrompt)
};
var f=function(){if(digitalData.page.category.pageType==="Article"&&(digitalData.page.category.subCategory1==="Special Reports"||digitalData.page.category.subCategory2==="Special Reports"||digitalData.page.category.subCategory3==="Special Reports")){return true
}return false
};
d.showPrompt=function(){if(f()){return
}var h=c(".free-trial-prompt").find(".prompt");
if(h.length){g();
b.autoclosePrompt(e,h);
h.show()
}};
window.freeTrialPrompt=d;
return d
})()
})(jQuery,FFX.AFR.Prompt);
(function(c,b){var a=(function(){var d=this,e=10000;
function f(){c(".prompt__close-icon").on("click",b.closePrompt)
}function g(h,k,i){var l=0;
if(k<i){l=i-k
}var n=h.find(".count");
n.text(l);
var j=h.find(".articletext");
var m="articles";
if(l==1){m="article"
}j.text(m)
}d.showMeterPrompt=function(j,i){var h=c(".meter-prompt").find(".prompt--metered");
if(h.length){f();
b.autoclosePrompt(e,h);
g(h,j,i);
h.show()
}};
window.meterPrompt=d;
return d
})()
})(jQuery,FFX.AFR.Prompt);
(function(f){var m=function(){};
m.buildVisitorHeaderFooter=function(o){g(o);
i(o);
h()
};
m.buildUserHeaderFooter=function(o){j(o);
i(o,true);
h()
};
function g(p){var o=p.find(".header-wrap").attr("data-device-type");
if("desktop"===o){b(p)
}else{n(p)
}}function j(p){var o=p.find(".header-wrap").attr("data-device-type");
if("desktop"===o){a(p)
}else{c(p)
}k(f("#myafr"))
}function i(p,o){f(".footer:first").replaceWith(p.find("footer"));
if(o){k(f(".footer .wrap"))
}}function h(){f.event.trigger({type:"onHeaderLoad",message:"header load event fired.",time:new Date()})
}function b(o){f(".header-wrap:first").prepend(o.find(".subscribe-promo"));
f(".header-inner:first").replaceWith(o.find(".header-inner"));
if(f(".subscribe-promo").length){f("body").addClass("subscribe-cta")
}e()
}function a(o){f(".header-inner:first").replaceWith(o.find(".header-inner"));
f(".nav--slideout .nav__menu--primary").prepend(o.find("#slideout_myafr"));
k(f("#slideout_myafr"));
d();
e()
}function n(o){f(".header-wrap:first").prepend(o.find(".subscribe-promo"));
f(".nav__menu--primary:first").prepend(o.find(".nav__block"));
if(f(".subscribe-promo").length){f("body").addClass("subscribe-cta")
}l()
}function c(o){f(".nav__menu--primary:first").prepend(o.find("#myafr"));
l()
}function l(){f(".nav--global").accordion({acHeader:".has-subnav > .icon--chevron-down--before",acContent:".nav__menu--secondary",isFullPage:true})
}function e(){f(".nav--slideout").accordion({acHeader:".has-subnav .icon--chevron-down--before",acContent:".nav__menu--secondary"})
}function d(){f(".drop-down-wrap button, .drop-down-wrap a").fmToggle({toggleContentSelector:".drop-down-wrap .modal",toggleEventDelay:300,triggers:"focus blur",})
}function k(o){o.find(".tools__pinboard").on("click",function(){if(f("body").hasClass("saved-search-visible")){f("body").removeClass("saved-search-visible")
}f("body").toggleClass("pinboard-visible");
f(".widget--pinboard .widget__controls input").focus()
})
}f.extend(true,window,{FFX:{AFR:{HeaderFooterUtils:m}}})
})(jQuery);
(function(f,b,a,g,c,h,j,e,d){function i(J){var z=this;
J=f.extend(true,z,{DRM_CHANNEL_KEY:"afr::web",CHANNEL_KEY:"4_JMVMOxZA3pN0QcrtOOtQ",HAGRID_BASE_URL:"https://stage-int.myfairfax.com.au",HAGRID_API_URL:"https://stage-api.myfairfax.com.au",HAGRID_DRM_HOST:"http://stage-access.fairfaxapi.com.au",HAGRID_PROXY_URL:"hagrid-proxy.html",HAGRID_SRC_URL:"https://resources.fairfax.com.au/js/ffx-sdk/ffx-hagrid-drm-0.9.51.js",IFRAME_CONTAINER_ID:"iframe-container",ENV:"",COOKIE_DOMAIN:".afr.com",SESSION_COOKIE_NAME:"tsessionid",VALIDATE_TOKEN_PATH:"/services/v1/member_token/",BRAND_DOMAIN:"www.afr.com",BUNDLE_ID:"117",SUBSCRIBE_TRACKING_CODE:"iid=other:paywall-16omntA0018-acq-PW-27092016-afr.com-nnn-FTR-nnn-AFR-nnn&campaign_code=afr.com&promote_channel=AFR_A_PAYW_PW_FTR",PROMPT_TRACKING_CODE:"iid=other:paywall-16omntA0336-acq-PYR-27092016-afr.com-nnn-FTR-nnn-AFR-nnn&campaign_code=afr.com&promote_channel=AFR_A_PAYW_PYR_FTR",PAYWALL_UPGRADE_TRACKING_CODE:"iid=other:paywall-15omn0704-ret-consumersubs:freetrial-09/01/2015-afr_freetrial-dom-30free_uspwall-nnn-afr-nnn&campaign_code=freetrial&promote_channel=paywall",FREETRIAL_UPGRADE_TRACKING_CODE:"iid=other:meter-15omn0703-ret-consumersubs:freetrial-09/01/2015-afr_freetrial-dom-30free_usprompt-nnn-afr-nnn&campaign_code=freetrial&promote_channel=meter",METER_PROMPT_UPGRADE_TRACKING_CODE:"iid=other:meter-15omn0716-ret-consumersubs:article-10/10/2015-afr_bau-dom-bau_articles-nnn-afr-nnn&campaign_code=afrbau&promote_channel=meter",BASIC_USER_NOTIFICATION_UPGRADE_TRACKING_CODE:"iid=other:meter:freetrial-15OMT00034B-ret-consumersubs:inventory-01%2F09%2F2015-afr_freetrial-dom-30free_usnotif-n-afr-o&campaign_code=freetrial&promote_channel=other:meter",HAGRID_UPGRADE_URL_PATH:"/beta/members/my_account/subscriptions/retail/change_package?",HAGRID_SUBSCRIBE_URL:"https://subscribe.afr.com"},J);
if(window.location.href.indexOf("www"+J.COOKIE_DOMAIN)===-1&&window.location.href.indexOf("beta"+J.COOKIE_DOMAIN)===-1){J.COOKIE_DOMAIN=null
}var A="article";
var x="ffx-hagrid-client-member-profile"+(J.ENV?"_"+J.ENV:"");
var I="adspot-300x250-pos2";
var L="af_ut";
var n;
function r(N,O){var M=J.HAGRID_API_URL+J.VALIDATE_TOKEN_PATH+N+"?"+Math.random();
f.ajax({url:M,dataType:"jsonp",success:function(P){O&&O(P)
}})
}window.customMemberProfileProvider=(function(){var M={};
M.get=function(){var O=b.getCookie(x);
var N;
if(O!=null&&O!=""){N=JSON.parse(decodeURIComponent(O));
if(N&&N!=""){return N
}}return null
};
M.set=function(O,N){var P;
P=encodeURIComponent(JSON.stringify(O));
b.setCookie(x,P,b.DAYS_TO_EXPIRE,"/",J.COOKIE_DOMAIN);
b.setCookie(J.SESSION_COOKIE_NAME,O.member_token,b.DAYS_TO_EXPIRE,"/",J.COOKIE_DOMAIN);
r(O.member_token,function(Q){if(!Q.success){console.error("invalid member_token provided, clear/reset all the Cookies that has been set");
M.clear();
FFXHagrid.logout({ui:"fullpage"})
}})
};
M.clear=function(){var N=new Date();
N.setTime(N.getTime()-1000*60);
b.deleteCookie(x,"/",J.COOKIE_DOMAIN);
b.deleteCookie(J.SESSION_COOKIE_NAME,"/",J.COOKIE_DOMAIN);
b.deleteCookie(L,"/",null)
};
return M
}(document));
function F(M){b.setCookie(L,M.userType,b.DAYS_TO_EXPIRE,"/",null);
window.location.reload()
}function w(M){if(b.isPostLoginRedirecting(window.location.href)){if(d.isVisitor()){b.deleteCookie(L,"/",null)
}else{b.setCookie(L,M.userType,b.DAYS_TO_EXPIRE,"/",null)
}}else{v(M)
}}function q(){var N,M=window.location.href.split("/");
if(window.location.href.indexOf("//")!==-1){N=M[0]+"//"+M[2]+y(window.location.href)
}else{N=M[0]+y(window.location.href)
}return N
}function y(M){if(M.indexOf("/content/afr.html")!==-1||M.indexOf("/content/afr/")!==-1){return"/content/afr.html"
}else{return""
}}function G(){b.logoutUGC(J.ENV,function(){b.deleteCookie(L,"/",null);
FFXHagrid.logout({ui:"fullpage",parameters:{callback_uri:q()}})
})
}window.ffxReady=function(){if(typeof FFXHagrid==="undefined"||typeof FFXCommon==="undefined"){console.error("FFXHagrid unavailable, please check the config")
}if(b.isLogoutRedirecting(window.location.href)){if(FFXHagrid.isLoggedIn()){G();
return
}else{window.location.href=q()
}setTimeout(function(){window.location.href=q()
},3000);
return
}if(b.isPostLoginRedirecting(window.location.href)){var S=FFXCommon.Utils.parseQueryString(),P,R;
P=S.url;
delete S.url;
R=P+"?"+f.param(S);
if(S.canceled==="true"){window.location.href=R
}else{setTimeout(function(){window.location.href=R
},5000)
}}if(b.isExternalLoginRedirecting(window.location.href)){var O=J.BRAND_DOMAIN;
if(O.indexOf("//")===-1){O=window.location.protocol+"//"+O
}var N=O;
var S=FFXCommon.Utils.parseQueryString();
if(S&&S.redirect_url){N=S.redirect_url
}if(!FFXHagrid.isLoggedIn()){FFXHagrid.login({ui:"fullpage",parameters:{callback_uri:N}})
}else{window.location.href=O
}return
}if(!b.isPostLoginRedirecting(window.location.href)){d.getAndCallback(function(T){if(d.isVisitor()){b.deleteCookie(L,"/",null)
}else{b.setCookie(L,T.userType,b.USER_TYPE_DAYS_TO_EXPIRE,"/",null)
}});
if(d.isBasicSubscriber()){FFXHagrid.on("showmeter",function(U,T){c.showMeterPrompt(U,T)
})
}}function Q(){var V=FFXCommon&&FFXCommon.Utils&&FFXCommon.Utils.parseQueryString(),T=V&&V.url,U="?";
if(typeof T==="undefined"||typeof b==="undefined"){return window.location.href
}if(b.isParameterNeeded(T)){if(T.indexOf("?")!==-1){if(T.indexOf("#")!==-1){T=T.replace("#","")
}U="&"
}}delete V.url;
return T+U+f.param(V)
}FFXHagrid.on("login",function(){d.getAndCallback(w);
var T=Q();
window.location.href=T
});
FFXHagrid.on("logout",function(){});
var M=FFXHagrid.getUserProfile();
f.event.trigger({type:"userProfileReady",userProfile:M});
if(!FFXHagrid.isLoggedIn()&&FFXCommon.Utils.parseQueryString().member_token){r(FFXCommon.Utils.parseQueryString().member_token,function(T){if(!T.success){d.getAndCallback(v)
}})
}else{d.getAndCallback(v)
}if(!b.isLoggedIn(J.ENV)&&!b.isPostLoginRedirecting(window.location.href)){if(FFXHagrid.isLoggedIn()||FFXCommon.Utils.parseQueryString().member_token){var M=FFXHagrid.getUserProfile();
if(M&&M.member_token){b.loginUGC(M.member_token,J.ENV,function(){b.ugcHealthCheck(function U(){displayPins()
},function T(){console.error("ignore displayPins since ugc unhealthy")
})
})
}}}d.getAndCallback(e.notifyObservers.bind(e));
f.event.trigger({type:"userTypeReady"});
if(!b.getCookie(L)&&FFXHagrid.isLoggedIn()){}};
if(!document.getElementById("ffx-script")){(function(O){var N=O.createElement("script"),M=O.getElementsByTagName("script")[0];
N.id="ffx-script";
N.src=J.HAGRID_SRC_URL;
N.async=true;
N.setAttribute("data-hagrid-channel-key",J.CHANNEL_KEY);
N.setAttribute("data-hagrid-base-url",J.HAGRID_BASE_URL);
N.setAttribute("data-hagrid-api-url",J.HAGRID_API_URL);
N.setAttribute("data-hagrid-proxy-url",J.HAGRID_PROXY_URL);
N.setAttribute("data-hagrid-iframe-container-id",J.IFRAME_CONTAINER_ID);
N.setAttribute("data-drm-host",J.HAGRID_DRM_HOST);
N.setAttribute("data-hagrid-member-profile-provider-name","customMemberProfileProvider");
M.parentNode.insertBefore(N,M)
}(document))
}function H(){if(d.hasPremiumAccess()){document.location=todaysPaperUrl
}else{if(d.isMember()||d.isBasicSubscriber()||d.isBasicSubscriberMaximumReached()){a.showSubscriptionBy(d,function(){a.goHome()
})
}else{b.getPostLoginRedirectUrl(function(M){FFXHagrid.login({ui:"fullpage",parameters:{callback_uri:M}})
})
}}}function s(){f(".bind-hagrid-re-login").click(function(){var P=J.HAGRID_BASE_URL+"/members/session/logout?";
var M=J.HAGRID_BASE_URL+"members/session/new?";
var Q=encodeURIComponent(b.stripQueryStringAndHashFromPath(document.location.href));
var R=J.CHANNEL_KEY;
var N=encodeURIComponent("channel_key="+R+"&callback_uri="+Q+"&plain_token=true&plain_token=true");
var O=P+"channel_key="+R+"&callback_uri="+encodeURIComponent(M)+N;
window.location=O
})
}function l(){f(".bind-hagrid-subscribe").click(function M(){digitalData.events.push({type:"analytics",event:"subscriptionStarts",SubscriptionTrigger:"paywall link"});
var Q=J.HAGRID_SUBSCRIBE_URL+"?";
var P=encodeURIComponent(b.stripQueryStringAndHashFromPath(document.location.href));
var O=J.SUBSCRIBE_TRACKING_CODE;
var N=Q+"callback_uri="+P+"&"+O+"&plain_token=true";
window.location=N
});
f(".subscribe_link").click(function M(){var N=encodeURIComponent(b.stripQueryStringAndHashFromPath(document.location.href));
if(this.href.search("[?&]callback_uri=")===-1){this.href=this.href+"&callback_uri="+N
}return true
})
}function B(){f(".bind-hagrid-change-package-from-basic-user-notification").click(E)
}function k(){f(".bind-hagrid-change-package-from-paywall").click(u)
}function u(){t(J.PAYWALL_UPGRADE_TRACKING_CODE)
}function E(){t(J.BASIC_USER_NOTIFICATION_UPGRADE_TRACKING_CODE)
}function m(){t(J.FREETRIAL_UPGRADE_TRACKING_CODE)
}function D(M){M.preventDefault();
t(J.METER_PROMPT_UPGRADE_TRACKING_CODE)
}function t(M){var N=J.HAGRID_BASE_URL+J.HAGRID_UPGRADE_URL_PATH;
var Q=J.CHANNEL_KEY;
var P=encodeURIComponent(b.stripQueryStringAndHashFromPath(document.location.href));
var O=N+"&channel_key="+Q+"&callback_uri="+P+"&"+M;
window.location=O
}function p(){f(".bind-hagrid-login").click(function M(){b.getPostLoginRedirectUrl(function(N){FFXHagrid.login({ui:"fullpage",parameters:{callback_uri:N}})
})
})
}f(document).on("onPaywallLoad",function(){K();
if(!f(".paywall--inline").length){digitalData.events.push({type:"analytics",event:"meterHit",meterLevel:"paywall"})
}p();
s();
l();
k()
});
function K(){f(".article__content .parsys-article-content-top .section:not(:first-child)").remove();
f(".article__content .parsys-article-content-top .section:first-child p:not(:first-of-type):not(:nth-of-type(2))").remove();
f(".article__content .parsys-article-content-top .section:first-child > *:not(p):not(.avatar)").remove();
f(".story--live").remove()
}f(document).on("onHeaderLoad",function(){f(".bind-hagrid-needs-subscription").click(function M(O){O.stopPropagation();
digitalData.events.push({type:"analytics",event:"todaysPaper"});
d.getAndCallback(H)
});
s();
p();
f(".bind-hagrid-free-trial-subscribe").click(function(){var P=encodeURIComponent(b.stripQueryStringAndHashFromPath(document.location.href));
var O=J.HAGRID_SUBSCRIBE_URL+"?callback_uri="+P+"&"+J.PROMPT_TRACKING_CODE+"&plain_token=true";
window.location=O
});
f("body").on("click",".bind-hagrid-change-package-from-free-trial-ending-prompt",m);
f(".prompt--metered .btn--dark").on("click",D);
f(".bind-hagrid-logout").click(function N(){b.deleteCookie(L,"/",null);
b.logoutUGC(J.ENV,function(){FFXHagrid.logout({ui:"fullpage"})
})
});
k();
B();
l();
f("ul.experience a").click(function(P){var O=f(P.target).attr("data-device");
b.setCookie("ffx-device",O||"desktop",null,"/");
window.location.reload()
})
});
function v(){if(!b.isPostLoginRedirecting(window.location.href)){a.protect(function(){var N=new FFXDRM.DRMClient({allowAnonymousMeterCounts:false});
N.on("accessallowed",function(O){a.smashPayWall();
if(digitalData.page.pageInfo.template===A){o()
}if(d.isVisitor()||d.isMember()){g.showPrompt()
}});
N.on("accessdenied",function(O){if(d.isVisitor()&&(d.isCorporateSubscriber()||(O&&O.indexOf("ip_access_available")>-1))){g.showPrompt()
}else{a.showSubscriptionBy(d,function(){a.goHome()
})
}});
N.checkPermissions(J.DRM_CHANNEL_KEY,a.preparePayWallOptions(),FFXHagrid.getUserPlansProvider(),FFXHagrid.getNetworkPlansProvider())
});
if(d.isVisitor()){f.ajax({type:"GET",url:"/content/afr.loggedout.headerfooter.html",cache:false,dataType:"html",success:function(N){h.buildVisitorHeaderFooter(f("<div/>").html(N))
}})
}else{var M;
if(d.hasPremiumAccess()){M="/content/afr.subscriber.headerfooter.html"
}else{M="/content/afr.loggedin.headerfooter.html"
}f.ajax({type:"GET",url:M,cache:false,dataType:"html",success:function(O){h.buildUserHeaderFooter(f("<div/>").html(O));
C();
if(b.isLoggedIn(J.ENV)){b.ugcHealthCheck(function P(){displayPins()
},function N(){console.error("ignore displayPins since ugc unhealthy")
})
}}})
}}}function o(){var N=f(A).find("#article-inline-ad");
if(N.length){var M=f("<div/>",{id:I});
N.append(M);
if(window.titan){window.titan.requestConditionalAd.push(I)
}}}function C(){if(FFXHagrid.isLoggedIn()){f('a[href^="http://todayspaper.smedia.com.au"], a[href="/public/ffx/afr/de"]').click(function(){digitalData.events.push({type:"analytics",event:"todaysPaper"})
})
}}window.hagridWrapper={getUserTypeCallbackEnsured:d.getAndCallback}
}f(function(){var k=f("#hagrid-config");
i({CHANNEL_KEY:f(k).attr("data-device")==="desktop"?f(k).attr("data-hagrid-channel-key"):f(k).attr("data-hagrid-m-channel-key"),DRM_CHANNEL_KEY:f(k).attr("data-device")==="mobile"?"afr::mobile":f(k).attr("data-hagrid-drm-channel-key"),HAGRID_BASE_URL:f(k).attr("data-hagrid-base-url"),HAGRID_API_URL:f(k).attr("data-hagrid-api-url"),HAGRID_PROXY_URL:f(k).attr("data-hagrid-proxy-url"),HAGRID_SRC_URL:f(k).attr("data-hagrid-src-url"),HAGRID_DRM_HOST:f(k).attr("data-drm-host"),IFRAME_CONTAINER_ID:f(k).attr("data-hagrid-iframe-container-id"),ENV:f(k).attr("data-cq-env"),BRAND_DOMAIN:f(k).attr("data-brand-domain"),BUNDLE_ID:f(k).attr("data-hagrid-bundle-id"),SUBSCRIBE_TRACKING_CODE:f(k).attr("data-subscribe-tracking-code"),PROMPT_TRACKING_CODE:f(k).attr("data-prompt-tracking-code"),HAGRID_SUBSCRIBE_URL:f(k).attr("data-hagrid-subscribe-url"),PAYWALL_UPGRADE_TRACKING_CODE:f(k).attr("data-paywall-upgrade-tracking-code"),FREETRIAL_UPGRADE_TRACKING_CODE:f(k).attr("data-free-trial-ending-prompt-upgrade-tracking-code"),METER_PROMPT_UPGRADE_TRACKING_CODE:f(k).attr("data-meter-prompt-upgrade-tracking-code"),BASIC_USER_NOTIFICATION_UPGRADE_TRACKING_CODE:f(k).attr("data-basic-user-notification-upgrade-tracking-code"),HAGRID_UPGRADE_URL_PATH:f(k).attr("data-hagrid-upgrade-url-path")})
})
})(jQuery,ugcUtil,payWall,freeTrialPrompt,meterPrompt,FFX.AFR.HeaderFooterUtils,FFX.utils.CookieUtil,FFX.components.marketdata.ObservableHagrid,FFX.AFR.UserType);
(function(a){var b=function(d){var c=this;
a.extend(true,c,{timeOutDelay:1000,loadingClass:"is-loading",spinnerClass:".spinner",ajaxUrl:"/content/afr/jcr:content/share-tables-"+d.ver+".html",idSuffix:"-sharetable__date"},d);
if(c.isValid()){c.load()
}};
b.prototype.load=function(){var d=this;
var g=a("#a-ost-"+d.ver);
var h=g.find(d.spinnerClass);
var f=g.find("#"+d.ver+d.idSuffix).val();
var e=a("#a-ost-"+d.ver+"--results");
e.empty();
h.addClass(d.loadingClass);
var c=f.replace(/-/g,"");
a.ajax({url:d.ajaxUrl,context:e,data:{date:c},cache:false}).fail(function(i,k,j){console.error("Error: "+j)
}).done(function(i){d.addShareTable(i,a(this),h)
})
};
b.prototype.addShareTable=function(e,d,f){var c=this;
setTimeout(function(){d.append(e);
f.removeClass(c.loadingClass)
},c.timeOutDelay)
};
b.prototype.isValid=function(){var c=this;
var d=a("#"+c.ver+c.idSuffix).val();
return !isNaN(parseInt(d))
};
a(function(){a("#daily-sharetable__date, #weekly-sharetable__date").change(function(){var c=a(this).attr("id").split("-")[0];
new b({ver:c})
})
});
a.extend(true,window,{FFX:{components:{sharetable:{ShareTable:b}}}})
})(jQuery);
var ugcAfrPrefix="a-";
var mysavedArticles=[];
var isOnPageLoad=true;
function savePins(){var d=[];
var b=$("#ulsearchresults > li").length;
for(var c=0;
c<b;
c++){var a=document.getElementById("searchcheckboxid"+c);
if(a!=null&&a.checked==true){if($("#searcharticleheading"+c).length){d.push(ugcAfrPrefix+$("#searcharticleheading"+c).attr("articleId"))
}a.parentNode.className="icheckbox_minimal";
a.checked=false
}}if(d.length>0){$.ajax({type:"POST",url:"/ugc/addClippings.ajax",dataType:"json",data:"domain="+document.domain+"&assetIds="+d,success:function(){setOnPageLoad(false);
displayPins();
displaySuccessPopUpAfterSavedArticle()
},error:function(h,e,g){var f=$.parseJSON(h.responseText);
if(typeof f.error==="string"&&f.error){displayErrorPopUpWhenFailToSaveArticle(f.error)
}else{displayErrorPopUpWhenFailToSaveArticle("Failed to save the article.")
}}})
}}function savePin(a){$.ajax({type:"POST",url:"/ugc/addClipping.ajax",dataType:"json",data:"assetId="+ugcAfrPrefix+a+"&domain="+document.domain,success:function(){displaySaveButton();
setOnPageLoad(false);
displayPins();
displaySuccessPopUpAfterSavedArticle()
},error:function(e,b,d){var c=$.parseJSON(e.responseText);
if(typeof c.error==="string"&&c.error){displayErrorPopUpWhenFailToSaveArticle(c.error)
}else{displayErrorPopUpWhenFailToSaveArticle("Failed to save the article.")
}}})
}function removePin(a){$.ajax({type:"POST",url:"/ugc/deleteClippings.ajax",dataType:"json",data:"assetIds="+ugcAfrPrefix+a+"&domain="+document.domain,success:function(b){displayUnSaveButton();
setOnPageLoad(false);
displayPins();
displaySuccessPopUpAfterRemovedArticle()
}})
}function removePins(){var d=[];
var b=0;
while(true){var a=document.getElementById("savedpinid"+b);
if(a==null){break
}if(a.checked==true){var c=$("#pinsboardli"+b).find(".story__wof").find("a").attr("articleid");
if(c&&c.match(/\w-\w*/)){d.push(c)
}else{if(c){d.push(ugcAfrPrefix+c)
}else{console.error("Failed to get the article id for :#savedpinid"+b)
}}}b++
}if(d.length>0){$.ajax({type:"POST",url:"/ugc/deleteClippings.ajax",dataType:"json",data:"assetIds="+d+"&domain="+document.domain,success:function(e){setOnPageLoad(false);
displayPins();
updateCurrentArticle(d)
}})
}}function displayErrorPopUpWhenFailToSaveArticle(a){$(".tools__save").fmNotification("show",a,true,2500)
}function displaySuccessPopUpAfterSavedArticle(){$(".tools__save").fmNotification("show","Article saved to 'My Saved Articles'",true,2500)
}function displaySuccessPopUpAfterRemovedArticle(){$(".tools__save").fmNotification("show","Article removed from 'My Saved Articles'",true,2500)
}function displayLoginPopUp(){$(".tools__save").fmNotification("show","Please login to save articles",true,2500)
}function displayPins(){$.ajax({type:"POST",url:"/ugc/allClippings.ajax",dataType:"html",cache:false,data:"domain="+document.domain,success:function(b){var a=$.parseJSON(b);
if(a!=null){createPinBoard(a)
}$('#savedpinsboard input[type="checkbox"]').iCheck({checkboxClass:"icheckbox_minimal",radioClass:"iradio_minimal",increaseArea:"20%"});
if(isOnPageLoad){displaySaveOrUnSaveArticleButton()
}}})
}function createPinBoard(c){if($("#savedpinsboard").length){$("#savedpinsboard > li").remove();
mysavedArticles=[];
for(var b=0;
b<c.length;
b++){var a=c[b];
mysavedArticles.push(a.articleId);
displayPin(a,b)
}}$("#pins_board_number,#pins_foot_number").html("("+c.length+")");
$(".inline-list .tools__pinboard").toggle(c.length>0);
if($("#pins_menu_number").length){$("#pins_menu_number").html(c.length)
}if($("#pins_login_number").length&&c.length>0){$("#pins_login_number").addClass("badge badge--notification").html(c.length)
}else{$("#pins_login_number").removeClass("badge badge--notification").html("")
}if($("#slideout_pins_login_number").length&&c.length>0){$("#slideout_pins_login_number").addClass("badge badge--notification").html(c.length)
}else{$("#slideout_pins_login_number").removeClass("badge badge--notification").html("")
}if($("#article_pins_login_number").length&&c.length>0){$("#article_pins_login_number").addClass("badge badge--notification").html(c.length)
}else{if($("#article_pins_login_number").length){$("#article_pins_login_number").removeClass("badge badge--notification").html("")
}}}function setOnPageLoad(a){isOnPageLoad=a
}function isSavedArticle(a){return($.inArray(ugcAfrPrefix+a,mysavedArticles)!=-1)
}function saveOrUnSavePin(a){if(isSavedArticle(a)){removePin(a)
}else{savePin(a)
}}function displaySaveOrUnSaveArticleButton(){if($("#pin__article_btn").length){var a=$("#pin__article_btn").val();
if(isSavedArticle(a)){displaySaveButton()
}else{displayUnSaveButton()
}}}function updateCurrentArticle(b){if($("#pin__article_btn").length){var a=ugcAfrPrefix+$("#pin__article_btn").val();
b.forEach(function(c){if(c===a){displayUnSaveButton()
}})
}}function displayPin(c,d){var b;
if(c.url!=="undefined"&&c.url.length>0){b=c.url
}else{b="#"
}var a='<li id="pinsboardli'+d+'" class="grid"><div class="grid__cell unit-1-7"> <input id="savedpinid'+d+'" class="check" type="checkbox"/></div><article class="story story--search stack grid__cell unit-6-7"><div class="story__wof"><h3 class="story__headline"><a href='+b+" articleid="+c.articleId+">"+c.title+'</a></h3><ul class="byline"><li>'+c.date+"</li></ul></div></article></li>";
$("#savedpinsboard").append(a)
}function displaySaveButton(){if($("#pin__article_btn").length){$("#pin__article_btn").removeClass("icon--save--before").addClass("icon--saved--before").text("Article Saved")
}}function displayUnSaveButton(){if($("#pin__article_btn").length){$("#pin__article_btn").removeClass("icon--saved--before").addClass("icon--save--before").text("Save Article")
}}$(function(){$("#pin__btn").click(function(){var a=ugcUtil.getCookie("tsessionid");
if(a){savePins()
}else{displayLoginPopUp()
}return false
});
$("#pin__article_btn").click(function(){var a=ugcUtil.getCookie("tsessionid");
if(a){var b=$(this).val();
saveOrUnSavePin(b)
}else{displayLoginPopUp()
}return false
});
$("#st-articles").on("click","a.st_article_pin_btn",function(c){var a=ugcUtil.getCookie("tsessionid");
if(a){var b=$(this).find(".st_pin_articleId").val();
savePin(b)
}else{displayLoginPopUp()
}return false
});
$("#removepins__btn").click(function(){removePins();
return false
});
$("#viewpins").click(function(){displayPins();
return false
});
$("#saved__article_link").on("click",function(){$("body").toggleClass("pinboard-visible");
$(".widget--pinboard .widget__controls input").focus()
})
});
var AFR=AFR||{};
$.extend(AFR,{searchConfig:{SEARCH_API:"/public/ffx/search",SEARCH_ARTICLE:"AFR_SEARCH_ARTICLE",SEARCH_ARTICLE_MORE:"AFR_SEARCH_ARTICLE_MORE",REFRESH_ARTICLE:"AFR_REFRESH_ARTICLE",SEARCH_READY:"AFR_SEARCH_READY",showedArticlesNum:0,FIRST_SEARCH_LIMIT:10,SEARCH_INCREMENT:5},getUrlParam:function getURLParameter(a){var d=new RegExp("[\\?&]"+a+"=([^&#]*)"),c=d.exec(location.search),b=c===null?"":decodeURIComponent(c[1].replace(/\+/g," "));
return b
}});
(function(c){c(document).ready(function(){c.fn.serializeObject=function(){var k={};
var j=this.serializeArray();
c.each(j,function(){if(k[this.name]!==undefined){if(!k[this.name].push){k[this.name]=[k[this.name]]
}k[this.name].push(this.value||"")
}else{k[this.name]=this.value||""
}});
return k
};
c(document).on(AFR.searchConfig.SEARCH_ARTICLE_MORE,function(k,j,l){f(j,function(m){a(m.articles);
l&&l(m)
});
return false
});
c(document).on(AFR.searchConfig.SEARCH_ARTICLE,function(k,j,l){f(j,function(m){i(m.articles,m.total,j);
l&&l(m)
});
return false
});
c(document).on(AFR.searchConfig.REFRESH_ARTICLE,function(k,j,l){b(j,l);
return false
})
});
var b=function(j,k){c("#ulsearchresults").empty();
AFR.searchConfig.showedArticlesNum=0;
f(j,function(l){e(j);
k&&k(l)
})
};
var f=function(j,l){var k=c.ajax({url:AFR.searchConfig.SEARCH_API,type:"POST",data:"data="+JSON.stringify(j)});
k.done(function(o){l.call(this,o);
if(j&&j.keywords){var m=(j.keywords&&j.keywords.split(/\+|%2B|%20|\s/));
for(var n=0;
n<m.length;
n++){c(".search .main .results__list").highlight(m[n].trim())
}}})
};
var a=function(j){if(window.digitalData&&window.digitalData.events){digitalData.events.push({type:"analytics",event:"searchPagination",searchResultsID:g(j)})
}};
var e=function(j){var k={type:"analytics",event:"refineSearch"};
if(h(j.startDate)){k.startDate=j.startDate
}if(h(j.endDate)){k.endDate=j.endDate
}if(d(j.order)){k.searchSortBy=j.order
}if(window.digitalData&&window.digitalData.events){digitalData.events.push(k)
}};
var d=function(j){return j&&j.length>0
};
var h=function(j){return j&&Object.prototype.toString.call(j)==="[object Date]"
};
var i=function(l,m,k){var j={};
j.searchResultsID=g(l);
j.internalSearchTerm=k.searchText;
j.searchSortBy=k.order;
j.searchResultCount=m;
if(typeof _satellite!="undefined"){_satellite.track("apmAfrAnalytics")
}if(window.digitalData&&window.digitalData.events){digitalData.page.pageInfo.search=j;
digitalData.events.push("internalSearch")
}};
var g=function(j){return _.map(j,function(k){return k.id
}).join(",")
}
})(jQuery);
$(document).ready(function(){autocompleteSearch(".top-search","#top-search",".top-search-autocomplete");
autocompleteSearch(".side-search","#side-search",".side-search-autocomplete");
autocompleteSearch(".site-search","#search",".search-autocomplete")
});
function autocompleteSearch(c,a,b){$(a).keyup(function(i){var h=(i.keyCode||i.which);
var g=$(a).val();
var f=$(b);
var d="";
if(g.length>=3){$(c).addClass("has-type");
$.ajax({type:"GET",url:"/public/ffx/afr/suggest?term="+g+"&maxResults=8",cache:false,dataType:"json"}).done(function(e){d+="<ul>";
$.each($(e.result),function(k,m){var j=$(location).attr("protocol")+"//"+$(location).attr("host")+AFR.rootPath;
if(m.labelType=="Section"){j=j+m.term+".html"
}else{j=j+"/search.html"
}var l=__highlight(m.term,g);
d+="<li><a href= '"+j+"?ss=afr.com&text="+encodeURIComponent(m.term)+"'>"+l+"<span>"+m.labelType+"</span></a></li>"
});
d+="</ul>";
f.html(d.replace("</ul><ul>",""));
if(h==40){i.preventDefault();
arrowNavDown(a,b)
}})
}else{$(c).removeClass("has-type")
}});
$(c).on("keydown",b+" a",function(f){var d=(f.keyCode||f.which);
if(d==38){f.preventDefault();
arrowNavUp(b)
}else{if(d==40){f.preventDefault();
arrowNavDown(a,b)
}}});
$(a).focus(function(){$(c).addClass("has-focus")
});
$(a).focusout(function(){window.setTimeout(function(){$(c).removeClass("has-focus")
},100)
});
$(c+" .search-reset").click(function(){$(c).removeClass("has-type")
})
}function arrowNavUp(a){if($(a+" li:first-child a").is(":focus")){$(a+" li:last-child a").focus()
}else{$(document.activeElement).parent().prev("li").children("a").focus()
}}function arrowNavDown(a,b){if($(a).is(":focus")||$(b+" li:last-child a").is(":focus")){$(b+" li:first-child a").focus()
}else{$(document.activeElement).parent().next("li").children("a").focus()
}}function __highlight(b,a){var c=new RegExp("("+preg_quote(a)+")","ig");
return b.replace(c,"<strong>$1</strong>")
}function preg_quote(a){return(a+"").replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g,"\\$1")
}var AFR=AFR||{};
$.extend(AFR,{streetTalkConfig:{MORE:"more",streetTalkPageURL:"http://"+$(location).attr("host")+"/content/afr/street-talk.html",NEW_ARTICLE_LOADED:"new_article_loaded"}});
$(document).ready(function(){if($("#hddnCtrlForArticlePanelToOpen").length){var a=$("#hddnCtrlForArticlePanelToOpen").val();
$("#"+a).trigger("click")
}});
$(function(){$(document).on(AFR.streetTalkConfig.MORE,function(b,d){var c=document.createElement("div");
var a=AFR.streetTalkConfig.streetTalkPageURL+" #st-articles";
$(c).load(a,"beginningItemIndex="+d,function(f,e,h){if(e=="success"){var g=parseInt($(c).find("#startIndex").val());
if($(c).find(".story").length){$("#street-talk-more").remove();
$("#st-articles").append($(c).find("#st-articles").html());
$("#st-articles .story__btn").unbind("click");
$(this).parent().toggleClass("open");
$("#st-articles .story__btn").click(function(){$(this).parent().toggleClass("open")
});
$("#street-talk-more").click(function(){$.event.trigger(AFR.streetTalkConfig.MORE,[g]);
return false
})
}$.event.trigger(AFR.streetTalkConfig.NEW_ARTICLE_LOADED)
}else{console.log("can't not load street talk page")
}})
})
});
$(function(){$("#street-talk-more").click(function(){var a=parseInt($("#startIndex").val());
$("#street-talk-more").fadeOut("slow");
$.event.trigger(AFR.streetTalkConfig.MORE,[a]);
return false
})
});
$(function(){$.fn.accordion=function(a){var b={acHeader:".accordion__header",acContent:".accordion__content",isFirstItemOpen:false,isAnimate:true,isFullPage:false,openToggleSelector:".is-closed"};
return this.each(function(j,h){var g=$.extend(true,b,a);
var d=$(h).attr("role","tablist");
var e=g.acHeader;
var f=$(g.acHeader,d);
var o=g.acContent;
var i=$(o,d);
var n=d.children();
var c=g.isFirstItemOpen;
var l=g.isAnimate;
var k=g.isFullPage;
var m=!$(h).hasClass(g.openToggleSelector.split(".")[1]);
setInitialAria=function(){f.attr({tabIndex:"0",role:"tab","aria-selected":"false","aria-expanded":"false"});
if(c){f.first().attr("aria-expanded","true")
}i.attr("role","tabpanel");
n.each(function(q){var r=$(this).children(e).attr("id");
i.eq(q).attr("aria-labelledby",r)
})
};
stopEvent=function(q){q.stopPropagation();
q.preventDefault()
};
f.bind("click",function(q){var r=$(this);
stopEvent(q);
triggerAcc(r,o,l,k)
});
f.bind("keydown",function(q){if(q.keyCode=="13"){var r=$(this);
stopEvent(q);
triggerAcc(r,o,l,k)
}});
triggerAcc=function(v,u,t,r){var s=$(v).parent();
var q=s.find(u);
if(s.hasClass("active")){s.removeClass("active");
$(v).attr("aria-selected","false").attr("aria-expanded","false");
if(t){q.slideUp()
}else{q.css("display","none")
}}else{s.siblings(".active").removeClass("active").find("[aria-selected]").attr("aria-selected","false").attr("aria-expanded","false");
s.addClass("active");
$(v).attr("aria-selected","true").attr("aria-expanded","true");
i=s.siblings().find(u);
if(t){i.slideUp();
if(r){q.slideDown(function(){if(s.height()+d.scrollTop()>window.innerHeight){$(d).animate({scrollTop:s.position().top+d.scrollTop()-$(".header-wrap").height()},200,function(){})
}else{if(s.position().top<$(d).scrollTop()){$(d).animate({scrollTop:s.position().top},200,function(){})
}}})
}else{q.slideDown()
}}else{i.css("display","none");
q.css("display","block")
}}};
var p=function(){i.css("display","none");
setInitialAria();
if(c&&m){f.first().attr("aria-selected","true").parent().addClass("active").find(o).css("display","block")
}};
p()
})
};
$("[id*=accordion-]").accordion({isFirstItemOpen:true,isAnimate:true})
});
(function(d){var a=function(i,h){d("#more_author_opinions").remove();
var f=d("#authorOpinionSection").attr("dataNumberOfAuthors");
var e=d("#authorOpinionSection").attr("dataNumberOfStories");
var g=d("#authorOpinionSection").attr("dataAuthorType");
if(i===undefined){i=0
}if(h===undefined){h=""
}var j="numberOfAuthors="+f+"&numberOfStories="+e+"&authorType="+g+"&lastItemIndex="+i+"&authorOpinionFilter="+h;
c(j)
};
var c=function(e){var f=d.ajax({async:false,type:"GET",dataType:"json",url:"/public/ffx/afr/authors",data:e}).done(function(g){if(g!=null){b(g)
}}).fail(function(){console.log("Error occurred while fetching authors...")
})
};
var b=function(B){var l=d("#authorOpinionSection").attr("dataNumberOfStories");
var z=B.authors;
var A="</div>";
var k="";
for(var v=0;
v<z.length;
v++){var h=z[v];
var m='<div class="strap__row">';
var C="";
if(h.title&&h.title.trim()){C+="<em>, "+h.title+"</em>"
}var o="";
if(h.bio||h.imageUrl){o+='<div class="strap__main">';
o+='<div class="inner-content">';
if(h.imageUrl&&h.imageUrl.trim()){var q='<div class="avatar">';
q+='<div class="avatar__img">';
q+='<img alt="" title="" src="'+h.imageUrl+'"/>';
q+=A+A;
o+=q
}if(h.bio&&h.bio.trim()){o+=h.bio
}o+=A+A
}var u='<h3><a href="'+h.authorUrl+'">'+h.name+C+"</a></h3>";
m+=u+o;
var f="";
var y='<div class="strap__aside"><div class="panel panel--alt">';
var s='<header class="header header--alt">';
s+='<h2 class="heading">Most recent articles </h2>';
s+="</header><ul>";
var e="</ul>";
var g="</div></div>";
if(h.relatedArticles){for(var t=0;
t<h.relatedArticles.length&&t<l;
t++){var x=h.relatedArticles[t];
var n="</li>";
if(x){var p="<li";
if(x.contentType!==undefined&&x.contentType.length>0){p+=' class="'+x.contentType+'"'
}p+=">";
f+=p+'<a href="'+x.url+'">';
f+=x.headLine+"</a>";
if(x.displayTime){f+='<ul class="byline"><li class="time">'+x.displayTime+"</li></ul>"
}if(x.comments&&x.comments>0||x.videos&&x.videos>0||x.photoGalleries&&x.photoGalleries>0||x.infoGraphics&&x.infoGraphics>0){f+='<ul class="meta"><li class="is-vishidden">Contains:</li>';
if(x.comments&&x.comments>0){f+='<li><span class="icon--comment" title="This article has '+x.comments+' comments">total comments</span>';
if(x.comments>1){f+='<span class="meta__count">'+x.comments+"</span>"
}f+="</li>"
}if(x.videos&&x.videos>0){f+='<li><span class="icon--video" title="This article has '+x.videos+' videos"> videos</span>';
if(x.videos>1){f+='<span class="meta__count">'+x.videos+"</span>"
}f+="</li>"
}if(x.photoGalleries&&x.photoGalleries>0){f+='<li><span class="icon--photo" title="This article has '+x.photoGalleries+' photo galleries"> photo galleries</span>';
if(x.photoGalleries>1){f+='<span class="meta__count">'+x.photoGalleries+"</span>"
}f+="</li>"
}if(x.infoGraphics&&x.infoGraphics>0){f+='<li><span class="icon--graph" title="This article has '+x.infoGraphics+' infoGraphics"> infoGraphics</span>';
if(x.infoGraphics>1){f+='<span class="meta__count">'+x.infoGraphics+"</span>"
}f+="</li>"
}f+="</ul>"
}f+=n
}}var r="";
if(h.relatedArticles.length>l){r='<div class="panel__additional"><a href="'+h.authorUrl+'" class="icon--chevron-right--after">More</a></div>'
}if(f.length>0){m+=y+s+f+e+r+g
}}m+=A;
k+=m
}d("#authorOpinionSection").append(k);
if(B.remaining&&B.remaining>0){var w=0;
if(B.lastItemIndex){w=B.lastItemIndex+1
}var r='<a class="btn btn--large" href="javascript:;" id="more_author_opinions">';
r+='<input type="hidden" id="opinionAuthorsStartIndex" value="'+w+'"/>';
r+='<input type="hidden" id="authorOpinionFilter" value="'+(B.filter||"")+'"/>';
r+=' <p><span class="icon--chevron-down--after secondary">More</span></p>';
r+=' <p class="btn--large__more">'+B.remaining+" more authors found</p></a>";
d("#authorOpinionSection").append(r);
d("#more_author_opinions").click(function(){var j=parseInt(d("#opinionAuthorsStartIndex").val());
var i=d("#authorOpinionFilter").val();
a(j,i)
})
}};
d(function(){if(d("#authorOpinionSection").length>0){a(0,"")
}});
d("a[id^='authorOpinion_']").click(function(){var e=this.id.replace("authorOpinion_","");
if(e=="All"){e=""
}d(this).parent().parent().children().filter(".active").removeClass("active");
d(this).parent().addClass("active");
d("#authorOpinionSection").empty();
a(0,e)
});
d("a[id^='authorTeam_']").click(function(){var f=this.id.replace("authorTeam_","");
var e=d("#componentCategory_"+f).val();
if(e=="All"){e=""
}d(this).parent().parent().children().filter(".active").removeClass("active");
d(this).parent().addClass("active");
d("#authorOpinionSection").empty();
a(0,e)
})
})(jQuery);
(function(G){function y(d,a){var b=(d&65535)+(a&65535),c=(d>>16)+(a>>16)+(b>>16);
return(c<<16)|(b&65535)
}function u(b,a){return(b<<a)|(b>>>(32-a))
}function J(a,b,c,d,e,f){return y(u(y(y(b,a),y(d,f)),e),c)
}function K(b,c,g,a,d,e,f){return J((c&g)|((~c)&a),b,c,d,e,f)
}function E(b,c,g,a,d,e,f){return J((c&a)|(g&(~a)),b,c,d,e,f)
}function z(b,c,g,a,d,e,f){return J(c^g^a,b,c,d,e,f)
}function L(b,c,g,a,d,e,f){return J(g^(c|(~a)),b,c,d,e,f)
}function I(k,e){k[e>>5]|=128<<((e)%32);
k[(((e+64)>>>9)<<4)+14]=e;
var h,f,g,i,j,a=1732584193,b=-271733879,c=-1732584194,d=271733878;
for(h=0;
h<k.length;
h+=16){f=a;
g=b;
i=c;
j=d;
a=K(a,b,c,d,k[h],7,-680876936);
d=K(d,a,b,c,k[h+1],12,-389564586);
c=K(c,d,a,b,k[h+2],17,606105819);
b=K(b,c,d,a,k[h+3],22,-1044525330);
a=K(a,b,c,d,k[h+4],7,-176418897);
d=K(d,a,b,c,k[h+5],12,1200080426);
c=K(c,d,a,b,k[h+6],17,-1473231341);
b=K(b,c,d,a,k[h+7],22,-45705983);
a=K(a,b,c,d,k[h+8],7,1770035416);
d=K(d,a,b,c,k[h+9],12,-1958414417);
c=K(c,d,a,b,k[h+10],17,-42063);
b=K(b,c,d,a,k[h+11],22,-1990404162);
a=K(a,b,c,d,k[h+12],7,1804603682);
d=K(d,a,b,c,k[h+13],12,-40341101);
c=K(c,d,a,b,k[h+14],17,-1502002290);
b=K(b,c,d,a,k[h+15],22,1236535329);
a=E(a,b,c,d,k[h+1],5,-165796510);
d=E(d,a,b,c,k[h+6],9,-1069501632);
c=E(c,d,a,b,k[h+11],14,643717713);
b=E(b,c,d,a,k[h],20,-373897302);
a=E(a,b,c,d,k[h+5],5,-701558691);
d=E(d,a,b,c,k[h+10],9,38016083);
c=E(c,d,a,b,k[h+15],14,-660478335);
b=E(b,c,d,a,k[h+4],20,-405537848);
a=E(a,b,c,d,k[h+9],5,568446438);
d=E(d,a,b,c,k[h+14],9,-1019803690);
c=E(c,d,a,b,k[h+3],14,-187363961);
b=E(b,c,d,a,k[h+8],20,1163531501);
a=E(a,b,c,d,k[h+13],5,-1444681467);
d=E(d,a,b,c,k[h+2],9,-51403784);
c=E(c,d,a,b,k[h+7],14,1735328473);
b=E(b,c,d,a,k[h+12],20,-1926607734);
a=z(a,b,c,d,k[h+5],4,-378558);
d=z(d,a,b,c,k[h+8],11,-2022574463);
c=z(c,d,a,b,k[h+11],16,1839030562);
b=z(b,c,d,a,k[h+14],23,-35309556);
a=z(a,b,c,d,k[h+1],4,-1530992060);
d=z(d,a,b,c,k[h+4],11,1272893353);
c=z(c,d,a,b,k[h+7],16,-155497632);
b=z(b,c,d,a,k[h+10],23,-1094730640);
a=z(a,b,c,d,k[h+13],4,681279174);
d=z(d,a,b,c,k[h],11,-358537222);
c=z(c,d,a,b,k[h+3],16,-722521979);
b=z(b,c,d,a,k[h+6],23,76029189);
a=z(a,b,c,d,k[h+9],4,-640364487);
d=z(d,a,b,c,k[h+12],11,-421815835);
c=z(c,d,a,b,k[h+15],16,530742520);
b=z(b,c,d,a,k[h+2],23,-995338651);
a=L(a,b,c,d,k[h],6,-198630844);
d=L(d,a,b,c,k[h+7],10,1126891415);
c=L(c,d,a,b,k[h+14],15,-1416354905);
b=L(b,c,d,a,k[h+5],21,-57434055);
a=L(a,b,c,d,k[h+12],6,1700485571);
d=L(d,a,b,c,k[h+3],10,-1894986606);
c=L(c,d,a,b,k[h+10],15,-1051523);
b=L(b,c,d,a,k[h+1],21,-2054922799);
a=L(a,b,c,d,k[h+8],6,1873313359);
d=L(d,a,b,c,k[h+15],10,-30611744);
c=L(c,d,a,b,k[h+6],15,-1560198380);
b=L(b,c,d,a,k[h+13],21,1309151649);
a=L(a,b,c,d,k[h+4],6,-145523070);
d=L(d,a,b,c,k[h+11],10,-1120210379);
c=L(c,d,a,b,k[h+2],15,718787259);
b=L(b,c,d,a,k[h+9],21,-343485551);
a=y(a,f);
b=y(b,g);
c=y(c,i);
d=y(d,j)
}return[a,b,c,d]
}function x(b){var a,c="";
for(a=0;
a<b.length*32;
a+=8){c+=String.fromCharCode((b[a>>5]>>>(a%32))&255)
}return c
}function D(b){var a,c=[];
c[(b.length>>2)-1]=undefined;
for(a=0;
a<c.length;
a+=1){c[a]=0
}for(a=0;
a<b.length*8;
a+=8){c[a>>5]|=(b.charCodeAt(a/8)&255)<<(a%32)
}return c
}function C(a){return x(I(D(a),a.length*8))
}function H(c,g){var d,a=D(c),e=[],b=[],f;
e[15]=b[15]=undefined;
if(a.length>16){a=I(a,c.length*8)
}for(d=0;
d<16;
d+=1){e[d]=a[d]^909522486;
b[d]=a[d]^1549556828
}f=I(e.concat(D(g)),512+g.length*8);
return x(I(b.concat(f),512+128))
}function t(b){var e="0123456789abcdef",c="",d,a;
for(a=0;
a<b.length;
a+=1){d=b.charCodeAt(a);
c+=e.charAt((d>>>4)&15)+e.charAt(d&15)
}return c
}function A(a){return unescape(encodeURIComponent(a))
}function w(a){return C(A(a))
}function B(a){return t(w(a))
}function F(b,a){return H(A(b),A(a))
}function v(b,a){return t(F(b,a))
}G.md5=function(b,a,c){if(!a){if(!c){return B(b)
}else{return w(b)
}}if(!c){return v(a,b)
}else{return F(a,b)
}}
}(typeof jQuery==="function"?jQuery:this));
(function(){window.twttr=(function(f,b,g){var e,c=f.getElementsByTagName(b)[0],a=window.twttr||{};
if(f.getElementById(g)){return a
}e=f.createElement(b);
e.id=g;
e.src="//platform.twitter.com/widgets.js";
c.parentNode.insertBefore(e,c);
a._e=[];
a.ready=function(d){a._e.push(d)
};
return a
}(document,"script","twitter-wjs"))
})();
(function(i,o,e,h){var g={PROMPT_PANEL:".prompt-panel",PROMPT_CLOSE:".prompt--subscribe-premium_close"};
var n="visited_afr_prompt";
var c=3;
var k=".afr.com";
if(window.location.href.indexOf("www"+k)===-1){k=null
}var j=200,b=i(".prompt");
var m=function(p){i(".prompt").slideUp(p)
};
var a=function(p){o.setCookie(n,"1",c*24*60*60*1000,"/",k);
m(j);
i(g.PROMPT_CLOSE).off("click",close);
p.preventDefault()
};
function d(){i(g.PROMPT_CLOSE).on("click",a)
}var f=function(){};
function l(p){if(p.indexOf("/content/afr.html")!==-1||p.indexOf("/content/afr/")!==-1){return"/content/afr"
}else{return""
}}f.showFreeTrialEndingPrompt=function(){var p=o.getCookie(n);
if(p!=1&&p!=""){i.ajax({url:l(window.location.href)+"/jcr:content/free-trial-ending-prompt.html",dataType:"html",success:function(q){var r=i(q);
i(g.PROMPT_PANEL).replaceWith(r);
if(i(".prompt--subscribe-premium").length){d();
i(".prompt--subscribe-premium").show()
}},error:function(s,q,r){console.error("Prompt request failed: "+q+r)
}})
}};
i(document).on("userTypeReady",function(){h.getAndCallback(function(p){if(p){h.isFreeTrialEnding(function(q){if(q){f.showFreeTrialEndingPrompt()
}})
}})
});
i.extend(true,window,{FFX:{components:{prompt:{FreeTrialEndingPrompt:f}}}})
})(jQuery,FFX.utils.CookieUtil,FFX.utils.DateUtil,FFX.AFR.UserType);
(function(e,c){var b={};
var d=function(k,m){try{var i=m?new Date(m):new Date();
i.setUTCHours(i.getUTCHours()+10);
var q=i.getUTCHours();
var h=i.getUTCMinutes();
var j=q*60+h;
var o=k.split(",");
var p=o[0].split(":"),n=o[1].split(":");
p=parseInt(p[0])*60+parseInt(p[1]);
n=parseInt(n[0])*60+parseInt(n[1]);
if(p<n){return p<j&&j<n
}else{return p<j||j<n
}}catch(l){console.error(l)
}return true
};
var a=function(h){if(c.isString(h)){if(b[h]){return b[h]
}return b[h]=c.object(c.map(h.split(","),function(k){var i=k.split("=");
var j=parseInt(i[1]);
return[i[0],j]
}))
}else{return h
}};
var f=function(i,h,j){return !i||!i[i.current]||!i[i.current][h]||d(i[i.current][h],j)
};
var g=function(i,k){var j=a(i.indicesBitwiseConstants);
var h=0;
c.each(j,function(m,l){if(f(i.displayAt,l,k)){h+=m
}});
return h
};
e.extend(true,window,{FFX:{components:{marketdata:{DisplayAtBitwiseUtil:{convertIndicesBitwiseConstants2Object:a,calculateBitwiseCodeMaskOnTheFly:g}}}}})
})(jQuery,_);
(function(b,c){var a=function(){};
a.prototype.defaultRefreshInterval=1*60*1000;
a.prototype.parseFloatToPrecision=function(e,d){return isNaN(e)?e:parseFloat(e).toPrecision(d)
};
a.prototype.parseFloatToFixed=function(e,d){return isNaN(e)?e:parseFloat(e).toFixed(d)
};
a.prototype.parseToFixedLength=function(g,f){var d=this;
var e=d.parseFloatToPrecision(g,f);
if(e<1){e=d.parseFloatToFixed(g,f-1)
}return e
};
a.prototype.getCSSClassBy=function(d){return d>0?"positive":d<0?"negative":"neutral"
};
a.prototype.getAnnouncementCSSClassBy=function(d){return d.toLowerCase()==="y"?"icon--volatile":""
};
a.prototype.getDateString=function(e){var d=new Date(e);
return d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear().toString().substring(2)
};
a.prototype.getTimeString=function(e){var d=new Date(e);
return d.getHours()+":"+d.getMinutes()
};
a.prototype.getTimeForTodayOtherwiseDate=function(e){var d=this;
if(d.isDateToday(e)){return d.getTimeString(e)
}else{return d.getDateString(e)
}};
a.prototype.isDateToday=function(f){var e=new Date(f),d=new Date();
return e.toDateString()==d.toDateString()
};
a.prototype.applyPositiveSign=function(d){if(d>0){return"+"+d
}else{return d.toString()
}};
a.prototype.doSupportSVG=function(){if(/iP(hone|od|ad)/.test(navigator.platform)){var d=(navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
var e=d&&d[1]&&parseInt(d[1],10),f=d&&d[2]&&parseInt(d[2],10),g=d&&d[3]&&parseInt(d[3],10);
if(d&&d.length>2){if(e===5&&f===1&&g<=1){return false
}if(e===5&&f===0){return false
}}if(d&&d.length==2){if(e===5&&f<=1){return false
}}if(d&&d.length>0){if(e<5){return false
}}}return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")
};
a.prototype.handleTabClick=function(){var e=this;
b(e).parent().addClass("is-selected").siblings().removeClass("is-selected");
var d=b(e).attr("href").substring(1);
b(e).parents(".tabs").find(".tab__panel#"+d).addClass("is-selected").siblings().removeClass("is-selected");
return false
};
a.prototype.loadNvd3IfNotExist=function(){if(typeof nv==="undefined"||typeof d3==="undefined"){b.ajax({url:"/etc/clientlibs/ffx/cq-site-clientlibs-designs-afr/js/lib/nvd3.min.js",dataType:"script",async:false,success:function(d,f,e){if(e.status!==200||typeof nv==="undefined"||typeof d3==="undefined"){console.error("can't load nv d3 lib")
}}})
}};
a.prototype.getCookie=function(h){var d=h+"=";
if(!document.cookie||!h||h===""){return null
}var g=document.cookie.split(";");
for(var f=0;
f<g.length;
f++){var e=g[f];
while(e.charAt(0)==" "){e=e.substring(1)
}if(e.indexOf(d)==0){return e.substring(d.length,e.length)
}}return null
};
a.prototype.getInterval=function(){var d;
if(c.hasPremiumAccess()){d=1*60*1000
}else{d=20*60*1000
}return d
};
b.extend(true,window,{FFX:{components:{marketdata:{Common:new a()}}}})
})(jQuery,FFX.AFR.UserType);
$.extend(true,window,{FFX:{components:{marketdata:{chart:{}}}}});
(function(g,d,f,c){var b={XJO:"S&P/ASX200  ",YAPcm1:"SPI 200",FTSE:"FTSE 100 INDEX  ",HSI:"HANG SENG INDEX     ",DJI:"DJ INDU AVERAGE    ",N225:"NIKKEI 225 INDEX  "};
var e=[];
var a=function(m,p){var l=this;
c.loadNvd3IfNotExist();
var k=3*60*60*1000,j=new Date();
j.setDate(j.getDate()-1);
j.setHours(17,0,0);
j=j.getTime();
var h=[];
for(var n=0;
n<9;
n++){h.push(j+k*n)
}var o=h[h.length-1];
l.yesterday5pm=j;
l.today5pm=o;
d.defaults(l,m,{title:"LineChart",renderTo:".market-data-chart",filterChartDataRangingOneDay:false,dayLightSaving:false,data:[{key:"Loading",values:[{time:j,priceMvtPC:0},{time:o,priceMvtPC:0}]}]});
nv.addGraph(function(){var i=nv.models.lineChart().rightAlignYAxis(true).margin({top:60,right:60,bottom:20,left:20}).useInteractiveGuideline(false).transitionDuration(500).showLegend(true).color(d3.scale.category10().range()).x(function(r,q){return r&&r.time
}).y(function(r,q){return r&&r.priceMvtPC
}).showYAxis(true).showXAxis(true);
i.options({delay:500});
i.xAxis.axisLabel("GMT+1000 (AUS Eastern Standard Time)").tickValues(h).tickFormat(function(q){return d3.time.format("%I%p")(new Date(q))
});
i.forceX([j,o]);
i.yAxis.tickFormat(d3.format(",.2%"));
d3.select(l.renderTo+" svg").datum(l.data).transition().duration(500).text("Loading Data").call(i);
g(l.renderTo).show();
nv.utils.windowResize(function(){i.update()
});
l.chart=i;
p&&p(i);
return i
})
};
a.prototype.loadData=function(n,k,l){var q=this;
var h="(Data is delayed)";
if(!n||n.length===0){return
}var p=q.data.slice(0);
q.data.length=0;
if(q.filterChartDataRangingOneDay){var m=f.calculateBitwiseCodeMaskOnTheFly(q,k);
bitwiseConstants=f.convertIndicesBitwiseConstants2Object(q.indicesBitwiseConstants);
var i=d.filter(n,function(r){return bitwiseConstants[r.indexCode]&m
});
n=i
}n.reverse();
d.each(n,function(w,s){var v=0,r=[];
if(w.indexPriceClose){v=w.indexPriceClose
}else{if(w.series.length>0){v=w.series[0].indexPrice;
console.error("no indexPriceClose returned, using indexPrice of series[0] instead")
}else{console.error("neither indexPriceClose nor indexPrice of series[0] found, using 0 instead")
}}d.each(w.series,function(y,z){if(!q.filterChartDataRangingOneDay||q.yesterday5pm<y.time&&y.time<q.today5pm){r.push({time:y.time,priceMvtPC:(v===0?0:(y.indexPrice-v)/v)})
}if(y.time){e.push(y.time)
}});
if(!q.filterChartDataRangingOneDay||r.length>1){var t=q.data.length>=3;
var u=w.indexName&&w.indexName.shortDesc||b[w.indexCode]||w.indexCode;
var x=d.find(p,function(y){return y.key===u
});
if(x&&x.disabled!=undefined){t=x.disabled
}q.data.push({key:u,values:r,disabled:t})
}});
if(q.chart){q.chart.update();
if(!d3.select(".nv-legendWrap rect")[0][0]){d3.select(".nv-legendWrap").insert("rect",":first-child").classed("legend-box",true)
}var o,j=d3.select(".nv-legendWrap .nv-legend").node();
if(j&&(o=j.getBBox())){d3.select(".nv-legendWrap rect").attr("x",o.x-10).attr("y",o.y).attr("height",o.height+10).attr("width",o.width+20).style("stroke","#343e43").style("fill-opacity",0.1).style("stroke-width",1)
}}q.chart.legend.dispatch.on("legendClick",function(){setTimeout(function(){d3.select(".nv-y").selectAll("text").attr("dx",5)
},100)
});
d3.select(".nv-y").selectAll("text").attr("dx",5);
g(q.renderTo+" .spinner").hide();
if(e.length>1){e.sort(function(s,r){return r-s
});
k=e[0]
}k=new Date(k);
g(q.renderTo+" .lastUpdated").html("Last updated: "+k.toDateString()+" - "+k.toLocaleTimeString()+"  "+h+' <span class="is-updating" style="display:none;">Updating...</span>');
return q.data
};
g.extend(true,window,{FFX:{components:{marketdata:{chart:{LineChart:a}}}}})
})(jQuery,_,FFX.components.marketdata.DisplayAtBitwiseUtil,FFX.components.marketdata.Common);
(function(e,c,b){var a={XJO:"S&P/ASX 200",XAO:"ALL ORDINARIES",XTO:"S&P/ASX 100",XSO:"SMALL ORDS"};
var d=function(k,n){var j=this;
b.loadNvd3IfNotExist();
var h=3*60*60*1000,g=new Date();
g.setDate(g.getDate()-1);
g.setHours(17,0,0);
g=g.getTime();
var f=[];
for(var l=0;
l<9;
l++){f.push(g+h*l)
}var m=f[f.length-1];
j.yesterday5pm=g;
j.today5pm=m;
c.defaults(j,k,{title:"LineChart",renderTo:".market-data-chart",lineColour:"green",dotColour:"red",textColour:"white",showDots:true,exchangeCode:"asx",data:[{key:"Loading",values:[{time:g,indexPrice:0},{time:m,indexPrice:0}]}]});
nv.addGraph(function(){var i=nv.models.lineChart().rightAlignYAxis(true).margin({top:10,right:40,bottom:20,left:20}).useInteractiveGuideline(false).transitionDuration(500).showLegend(false).color(d3.scale.category10().range()).x(function(p,o){return p&&p.time
}).y(function(p,o){return p&&p.indexPrice
}).showYAxis(true).showXAxis(true);
i.options({delay:500});
i.xAxis.axisLabel("GMT+1000 (AUS Eastern Standard Time)").tickFormat(function(o){return d3.time.format("%H:%M")(new Date(o))
});
i.yAxis.tickFormat(d3.format("f"));
d3.select(j.renderTo+" svg").datum(j.data).transition().duration(500).text("Loading Data").call(i);
e(j.renderTo).show();
nv.utils.windowResize(function(){i.update()
});
j.chart=i;
n&&n(i);
return i
})
};
d.prototype.loadData=function(i,k,j){var h=this;
var g="(Data is delayed)";
if(!i||i.length===0){return
}h.data.length=0;
var f="";
c.each(i,function(n,l){var m=n.indexName&&n.indexName.shortDesc||a[n.indexCode]||n.indexCode;
f=n.indexCode;
f=f&&f.toLowerCase();
h.data.push({key:m,values:n.series});
if(n.series.length>1){if(n.series[n.series.length-1].time){k=n.series[n.series.length-1].time
}}});
h.renderTo="#cq-"+h.exchangeCode+"-"+f+"__chart.accordion__content";
if(h.chart){if(h.isAccordionOpening(f)){h.showSpinner(f);
setTimeout(function(){h.hideSpinner(f);
h.chart.update&&h.chart.update();
h.beautify();
h.showLastUpdateTime(h.renderTo,k,g)
},1000)
}else{h.hideSpinner(f)
}}return h.data
};
d.prototype.isAccordionOpening=function(f){var g=this;
return f&&e("#cq-"+g.exchangeCode+"-"+f+"__summary").parent().attr("class").indexOf("active")>-1
};
d.prototype.showSpinner=function(f){var g=this;
e(".cq-"+g.exchangeCode+"-"+f+".spinner").show()
};
d.prototype.hideSpinner=function(f){var g=this;
e(".cq-"+g.exchangeCode+"-"+f+".spinner").hide()
};
d.prototype.showLastUpdateTime=function(i,h,f){var g=new Date(h);
e(i).parent().parent().find(" .lastUpdated").html("Last updated: "+g.toDateString()+" - "+g.toLocaleTimeString()+"  "+f+' <span class="is-updating" style="display:none;">Updating...</span>')
};
d.prototype.update=function(){var f=this;
f.chart&&f.chart.update&&f.chart.update();
f.beautify()
};
d.prototype.beautify=function(){var f=this;
if(f.showDots!==true){e(f.renderTo+" svg .nv-point").hide()
}e(f.renderTo+" svg .nv-point").attr("stroke",f.dotColour);
e(f.renderTo+" svg path").attr("stroke",f.lineColour);
e(f.renderTo+" svg text").attr("style","fill: "+f.textColour)
};
e.extend(true,window,{FFX:{components:{marketdata:{chart:{SimpleIndexLineChart:d}}}}})
})(jQuery,_,FFX.components.marketdata.Common);
(function(d,b,a){var c=function(g,m){var n=this;
a.loadNvd3IfNotExist();
var l=24*60*60*1000;
var f=l*3*30;
var e=new Date();
e.setFullYear(e.getFullYear()-1);
e=e.getTime();
var h=[];
for(var j=0;
j<4;
j++){h.push(e+f*j)
}var k=h[h.length-1];
n.aYearAgo=e;
n.today=k;
b.defaults(n,g,{title:"Quote History LineChart",renderTo:"",data:[{key:"Loading",values:[{date:e},{date:k}]}]});
nv.addGraph(function(){var i=nv.models.lineChart().rightAlignYAxis(true).margin({top:10,right:40,bottom:20,left:20}).useInteractiveGuideline(false).transitionDuration(500).showLegend(false).color(d3.scale.category10().range()).x(function(p,o){return p&&(p.date||p.tradeDateTime||0)
}).y(function(p,o){return p&&(p.priceLast||p.tradeSalePrice||0)
}).showYAxis(true).showXAxis(true);
i.options({delay:500});
i.xAxis.axisLabel("GMT+1000 (AUS Eastern Standard Time)").tickFormat(function(o){return d3.time.format("%b%y")(new Date(o))
});
i.yAxis.tickFormat(d3.format("g"));
d3.select(n.renderTo+" svg").datum(n.data).transition().duration(500).text("Loading Data").call(i);
d(n.renderTo).show();
nv.utils.windowResize(function(){i.update()
});
n.quoteHistoryChart=i;
m&&m(i);
return i
})
};
c.prototype.dummyData=function(){var e=new Date();
e.setHours(0,0,0);
e=e.getTime();
return[{securityCode:"No Data Available",date:e,priceLast:0}]
};
c.prototype.loadData=function(g,i,h){var f=this;
if(!g||g.length===0){g=f.dummyData()
}if(g.length>100){g=g.slice(0,100)
}f.data.length=0;
f.data.push({key:g[0].securityCode,values:g});
if(f.quoteHistoryChart){f.applyFormat(h);
d(f.renderTo+" .spinner").show();
f.quoteHistoryChart.update();
d(f.renderTo+" .spinner").hide();
var e=!!(g.length<100);
f.beautify(i,e)
}return f.data
};
c.prototype.applyFormat=function(f){var e=this;
if(!f){return
}if(f.xAxis){f.xAxis.label&&e.quoteHistoryChart.xAxis.axisLabel(f.xAxis.label);
f.xAxis.timeFormat&&e.quoteHistoryChart.xAxis.tickFormat(function(g){return d3.time.format(f.xAxis.timeFormat)(new Date(g))
})
}};
c.prototype.beautify=function(g,f){var e=this;
if(f){d(e.renderTo+" svg .nv-point").show();
d(e.renderTo+" svg .nv-point").attr("stroke","orange")
}else{d(e.renderTo+" svg .nv-point").hide()
}d(e.renderTo+" svg path").attr("stroke","orange");
d(e.renderTo+" svg").attr("style","fill: white");
d(e.renderTo+" .is-updating").hide();
g=new Date(g);
d(e.renderTo+" .lastUpdated").html("Last updated: "+g.toDateString()+" - "+g.toLocaleTimeString()+' <span class="is-updating" style="display:none;">Updating...</span>')
};
d.extend(true,window,{FFX:{components:{marketdata:{quoteHistoryChart:{RelatedQuoteLineChart:c}}}}})
})(jQuery,_,FFX.components.marketdata.Common);
(function(c,b,a,e){var d=function(g){var f=this;
b.defaults(f,g,{ajaxInterval:a.defaultRefreshInterval});
e.addObserver(f.updateAjaxInterval.bind(f))
};
d.prototype.updateAjaxInterval=function(){var f=this;
f.ajaxInterval=a.getInterval()
};
d.prototype.scheduleNextRun=function(g){var f=this;
setTimeout(g,f.ajaxInterval)
};
c.extend(true,window,{FFX:{components:{marketdata:{AutoRefreshByIntervalMixin:d}}}})
})(jQuery,_,FFX.components.marketdata.Common,FFX.components.marketdata.ObservableHagrid);
(function(f,m,h){m.templateSettings={interpolate:/\$\{(.+?)\}/g};
var k=m.template('<li class="${indexCode} indicesSummaryItem"><span>${indexName.shortDesc} <em class="${indexPriceMvtClass}">${indexPriceMvtPC}%</em></span><span>${indexPrice} <em class="${indexPriceMvtClass}">${indexPriceMvt}</em></span></li>');
var l=m.template('<td>${indexName.abbrevDesc}</td><td>${indexPrice}</td><td class="${indexPriceMvtClass}">${indexPriceMvt}</td><td class="${indexPriceMvtClass}">${indexPriceMvtPC}%</td>');
var a=m.template('<h5><span class="icon--chevron-right reversed"></span>${indexName.abbrevDesc}</h5><em>${indexPrice}</em><em class="${indexPriceMvtClass}">${indexPriceMvt}</em><em class="${indexPriceMvtClass}">${indexPriceMvtPC}%</em>');
var b=m.template('<tr class="tr-asxgainerslosersitem ${securityCode}"><td>${securityCode}</td><td>${issuerName.abbrevName}</td><td>${priceLast}</td><td class="${priceMvtClass}">${priceMvtPC}%</td></tr>');
var c=m.template('<tr><td><span class="${sensitiveClass}"></span></td><td>${releaseDateTime}</td><td><a href="${pdfFileLocation}">${headerText}</a></td></tr>');
var n=m.template('<h5>${issuerName.shortName} ${securityDescription.shortDesc} (${securityCode})</h5><em class="current">$${priceLast}</em><em class="${priceMvtClass}">${priceMvt}</em><em class="${priceMvtClass}">${priceMvtPC}%</em><div class="row"><em class="volume">volume <strong>${volume}</strong></em><em class="value">value <strong>${value}</strong></em></div>');
var j=m.template('<p>${issuerPrincipalActivity}</p><p><a href="${issuerCompanyURLLink}">${issuerCompanyURLText}</a></p><p>${gicsIndustry.gicsDescription} (${gicsIndustry.gicsCode})</p><p>ASIC ${issuerASICNumber}</p>');
var e=m.template('<li><span class="time">${releaseDateTime}</span><a href="${pdfFileLocation}" target="_blank">${headerText}</a></li>');
var g=m.template('<h4>${issuerName.shortName} ${securityDescription.shortDesc} (${securityCode})</h4><span>$${priceLast}<em class="${priceMvtClass}">${priceMvt} (${priceMvtPC}%)</em></span>');
var i=m.template("${currencyPrice}");
var d=function(p){var o=this;
m.defaults(o,p,{title:"Index",appendTo:".indices",compiled:k})
};
d.prototype.load2CurrencyCompare=function(q){var p=this;
m.defaults(q,{currencyCompareName:"",currencyPrice:"0.00"});
var o=h.parseToFixedLength(q.currencyPrice,5);
f.extend(true,q,{currencyPrice:o});
f(p.appendTo).html(i(q))
};
d.prototype.load2Quote=function(p){var o=this;
m.defaults(p,{issuerName:{shortName:""},securityDescription:{shortDesc:""},priceLast:"0.0000",priceNumberFormat:2,priceMvtClass:"neutral",priceMvtPC:"0.000%",changePercentageFormat:2,priceMvt:"0.0000",changeNumberFormat:2,volume:"0.000",volumeNumberFormat:0,value:"0.000",valueNumberFormat:1});
f.extend(true,p,{priceMvtClass:h.getCSSClassBy(p.priceMvtPC),priceLast:h.parseFloatToFixed(p.priceLast,p.priceNumberFormat),priceMvtPC:h.parseFloatToFixed(p.priceMvtPC,p.changePercentageFormat),priceMvt:h.parseFloatToFixed(p.priceMvt,p.changeNumberFormat),volume:h.parseFloatToFixed(p.volume,p.volumeNumberFormat),value:h.parseFloatToFixed(p.value,p.valueNumberFormat)});
f(n(p)).appendTo(o.appendTo)
};
d.prototype.load2CompanyProfile=function(p){var o=this;
m.defaults(p,{issuerPrincipalActivity:"Activity N/A",issuerCompanyURL:"",issuerASICNumber:"ASIC N/A",issuerCompanyURLText:"URL N/A",issuerCompanyURLLink:"javascript:;",gicsIndustry:{gicsCode:"Gigs N/A",gicsDescription:""}});
f.extend(true,p,{issuerASICNumber:p.issuerASICNumber,issuerCompanyURLText:p.issuerCompanyURL,issuerCompanyURLLink:p.issuerCompanyURL});
f(j(p)).appendTo(o.appendTo)
};
d.prototype.load2StreetTalkQuote=function(p){var o=this;
m.defaults(p,{issuerName:{shortName:""},securityDescription:{shortDesc:""},priceLast:"0.0000",priceNumberFormat:2,priceMvtClass:"neutral",priceMvtPC:"0.000%",changePercentageFormat:2,priceMvt:"0.0000",changeNumberFormat:2});
f.extend(true,p,{priceMvtClass:h.getCSSClassBy(p.priceMvtPC),priceLast:h.parseFloatToFixed(p.priceLast,p.priceNumberFormat),priceMvtPC:h.applyPositiveSign(h.parseFloatToFixed(p.priceMvtPC,p.changePercentageFormat)),priceMvt:h.applyPositiveSign(h.parseFloatToFixed(p.priceMvt,p.changeNumberFormat))});
f(g(p)).appendTo(o.appendTo)
};
d.prototype.load2StreetTalkAnnouncements=function(p){var o=this;
m.defaults(p,{announcementNumber:"",securityCode:"",issuerName:{fullName:"",abbrevName:"",shortName:""},sensitive:"Y",sensitiveClass:"",exchangeName:"",releaseDateTime:"",recordDateTime:"",pdfFileLocation:""});
f.extend(true,p,{sensitiveClass:h.getAnnouncementCSSClassBy(p.sensitive),releaseDateTime:h.getTimeForTodayOtherwiseDate(p.releaseDateTime)});
f(e(p)).appendTo(o.appendTo)
};
d.prototype.load2Indicessummary=function(p){var o=this;
m.defaults(p,{indexCode:"",indexName:{shortDesc:""},initial:"",indexPriceMvtPC:"0.00%",changePercentageFormat:2,indexPrice:"0.00",priceNumberFormat:2,indexPriceMvtClass:"neutral",indexPriceMvt:"0.00",changeNumberFormat:2});
if(p.indexName.shortDesc==="S&P/ASX20"){p.indexName.shortDesc="S&P/ASX200"
}f.extend(true,p,{indexPriceMvtClass:h.getCSSClassBy(p.indexPriceMvt),indexPrice:h.parseFloatToFixed(p.indexPrice,p.priceNumberFormat),indexPriceMvtPC:h.parseFloatToFixed(p.indexPriceMvtPC,p.changePercentageFormat),indexPriceMvt:h.parseFloatToFixed(p.indexPriceMvt,p.changeNumberFormat)});
f(k(p)).appendTo(o.appendTo)
};
d.prototype.load2Overviews=function(p){var o=this;
m.defaults(p,{indexCode:"",indexName:{abbrevDesc:""},initial:"",indexPriceMvtPC:"0.00%",changePercentageFormat:2,indexPrice:"0.00",priceNumberFormat:2,indexPriceMvtClass:"neutral",indexPriceMvt:"0.00",changeNumberFormat:2});
f.extend(true,p,{indexPriceMvtClass:h.getCSSClassBy(p.indexPriceMvt),indexPrice:h.parseFloatToFixed(p.indexPrice,p.priceNumberFormat),indexPriceMvtPC:h.parseFloatToFixed(p.indexPriceMvtPC,p.changePercentageFormat),indexPriceMvt:h.parseFloatToFixed(p.indexPriceMvt,p.changeNumberFormat)});
f(l(p)).appendTo(o.appendTo)
};
d.prototype.load2Indices=function(p){var o=this;
m.defaults(p,{indexCode:"",indexName:{abbrevDesc:""},initial:"",indexPriceMvtPC:"0.00%",changePercentageFormat:2,indexPrice:"0.00",priceNumberFormat:1,indexPriceMvtClass:"neutral",indexPriceMvt:"0.00",changeNumberFormat:2});
f.extend(true,p,{indexPriceMvtClass:h.getCSSClassBy(p.indexPriceMvt),indexPrice:h.parseFloatToFixed(p.indexPrice,p.priceNumberFormat),indexPriceMvtPC:h.parseFloatToFixed(p.indexPriceMvtPC,p.changePercentageFormat),indexPriceMvt:h.parseFloatToFixed(p.indexPriceMvt,p.changeNumberFormat)});
f(a(p)).appendTo(o.appendTo)
};
d.prototype.load2Announcements=function(p){var o=this;
m.defaults(p,{announcementNumber:"",securityCode:"",issuerName:{fullName:"",abbrevName:"",shortName:""},sensitive:"Y",sensitiveClass:"",exchangeName:"",releaseDateTime:"",recordDateTime:"",pdfFileLocation:""});
f.extend(true,p,{sensitiveClass:h.getAnnouncementCSSClassBy(p.sensitive),releaseDateTime:h.getDateString(p.releaseDateTime)});
f(c(p)).appendTo(o.appendTo)
};
d.prototype.load=function(p){var o=this;
f(o.compiled(p)).appendTo(o.appendTo)
};
d.prototype.load2Asxgainerslosers=function(p){var o=this;
m.defaults(p,{securityCode:"",issuerName:{abbrevName:""},initial:"",priceMvtPC:"0.000%",changePercentageFormat:2,priceLast:"0.0000",priceNumberFormat:3,priceMvtClass:"neutral",priceMvt:"0.0000",changeNumberFormat:2});
f.extend(true,p,{priceMvtClass:h.getCSSClassBy(p.priceMvtPC),priceLast:h.parseFloatToFixed(p.priceLast,p.priceNumberFormat),priceMvtPC:h.parseFloatToFixed(p.priceMvtPC,p.changePercentageFormat),priceMvt:h.parseFloatToFixed(p.priceMvt,p.changeNumberFormat)});
f(b(p)).appendTo(o.appendTo)
};
f.extend(true,window,{FFX:{components:{marketdata:{Index:d}}}})
})(jQuery,_,FFX.components.marketdata.Common);
(function(d,b,g,a,e){b.templateSettings={interpolate:/\$\{(.+?)\}/g};
var c=b.template('<td>${commodityName}</td><td>${commodityPrice}</td><td class="${commodityPriceMvtClass}">${commodityPriceMvt}</td><td class="${commodityPriceMvtClass}">${commodityPriceMvtPC}%</td>');
var f=function(i){var h=this;
b.defaults(h,i,{title:"Commodities",ajaxInterval:a.defaultRefreshInterval});
e.call(h,i);
h.refresh()
};
f.prototype=Object.create(e.prototype);
f.prototype.constructor=f;
f.prototype.refresh=function(){var h=this;
d(h.renderTo+" .spinner").show();
d(h.renderTo+" .is-updating").show();
d.ajax({url:"/public/afr/market/data",dataType:"json",type:"GET",data:{action:"commodities"},cache:false}).fail(function(i,k,j){console.error("Error: "+j);
d(h.renderTo+" .spinner").hide();
d(h.renderTo+" .is-updating").hide()
}).success(function(j,m,k){var l=j.date;
var i="(Data is delayed)";
j=j.marketData;
b.each(j,function(p){p.commodityCode=p.commodityCode.replace("=","");
var n=h.renderTo+" ."+p.commodityCode;
d(n).empty();
var o=new g({appendTo:n,compiled:c});
b.defaults(p,{commodityCode:"",commodityName:"",commodityPriceMvtPC:"0.00%",commodityPrice:"0.00",commodityPriceMvtClass:"neutral",commodityPriceMvt:"0.00"});
d.extend(true,p,{commodityPriceMvtClass:a.getCSSClassBy(p.commodityPriceMvt),commodityPrice:a.parseFloatToFixed(p.commodityPrice,4),commodityPriceMvtPC:a.parseFloatToFixed(p.commodityPriceMvtPC,3),commodityPriceMvt:a.parseFloatToFixed(p.commodityPriceMvt,4)});
o.load(p)
});
l=new Date(l);
d(h.renderTo+" .lastUpdated").html("Last updated: "+l.toDateString()+" - "+l.toLocaleTimeString()+"  "+i+' <span class="is-updating" style="display:none;">Updating...</span>');
d(h.renderTo+" .spinner").hide()
});
h.scheduleNextRun(h.refresh.bind(h))
};
d.extend(true,window,{FFX:{components:{marketdata:{Commodities:f}}}})
})(jQuery,_,FFX.components.marketdata.Index,FFX.components.marketdata.Common,FFX.components.marketdata.AutoRefreshByIntervalMixin);
(function(c,b,f,a,e){var d=function(h){var g=this;
b.defaults(g,h,{title:"Currencies",ajaxInterval:a.defaultRefreshInterval});
e.call(g,h);
g.refresh()
};
d.prototype=Object.create(e.prototype);
d.prototype.constructor=d;
d.prototype.refresh=function(){var g=this;
c.ajax({url:"/public/afr/market/data",dataType:"json",type:"GET",data:{action:"currencies"},cache:false}).fail(function(h,j,i){console.error("Error: "+i);
c("#"+g.uuid+" .is-updating").hide()
}).success(function(j,l,i){var k=new Date(j.date);
var h="(Data is delayed)";
j=j.marketData;
b.each(j,function(o){var m=g.renderTo+" #"+o.currencyCompareName;
c(m).empty();
var n=new f({appendTo:m});
n.load2CurrencyCompare(o)
});
c("#"+g.uuid+" .lastUpdated").html("Last updated: "+k.toDateString()+" - "+k.toLocaleTimeString()+"  "+h+' <span class="is-updating" style="display:none;">Updating...</span>')
});
g.scheduleNextRun(g.refresh.bind(g))
};
c.extend(true,window,{FFX:{components:{marketdata:{Currencies:d}}}})
})(jQuery,_,FFX.components.marketdata.Index,FFX.components.marketdata.Common,FFX.components.marketdata.AutoRefreshByIntervalMixin);
(function(d,b,f,a,e){var c=function(h){var g=this;
b.defaults(g,h,{title:"AsxGainersLosers",ajaxInterval:a.defaultRefreshInterval});
e.call(g,h);
g.refresh()
};
c.prototype=Object.create(e.prototype);
c.prototype.constructor=c;
c.prototype.refresh=function(){var g=this;
d.ajax({url:"/public/afr/market/data",dataType:"json",type:"GET",data:{action:"asxgainerslosers"},cache:false}).fail(function(h,j,i){console.error("Error: "+i)
}).success(function(l,m,k){l=l.marketData;
d(g.gainersAppendTo+" .tr-asxgainerslosersitem").remove();
d(g.losersAppendTo+" .tr-asxgainerslosersitem").remove();
var i=Math.ceil(l.length/2);
var j=l.slice(i);
var h=l.slice(0,i);
j.reverse();
g.gainersAppendTo&&b.each(j,function(p,o){var n=new f({appendTo:g.gainersAppendTo});
n.load2Asxgainerslosers(p)
});
g.losersAppendTo&&b.each(h,function(p,o){var n=new f({appendTo:g.losersAppendTo});
n.load2Asxgainerslosers(p)
})
});
g.scheduleNextRun(g.refresh.bind(g))
};
d.extend(true,window,{FFX:{components:{marketdata:{AsxGainersLosers:c}}}})
})(jQuery,_,FFX.components.marketdata.Index,FFX.components.marketdata.Common,FFX.components.marketdata.AutoRefreshByIntervalMixin);
(function(e,l,c,j,h,b){var d,i;
var g=function(n){var m=this;
l.defaults(m,n,{title:"Asx Indices",ausLineChart:{browserDoSupportSVG:h.doSupportSVG(),renderTo:"#cq-asx-xjo__chart.accordion__content",exchangeCode:"asx"}});
b.call(m,n);
m.refresh();
if(m.ausLineChart.browserDoSupportSVG){e("#cq-asx-overviews").find(".market-data-no-chart").removeClass("market-data-no-chart")
}else{return
}e("#tab-cq-asx-overviews").click(function(){if(d&&m.ausLineChart.browserDoSupportSVG){d.update()
}});
e("#"+m.uuid+" .accordion#accordion-aus-ind-overview .accordion__header").click(a.bind(m));
if(f(m.uuid)){e(m.ausLineChart.renderTo+" .spinner").show()
}};
g.prototype=Object.create(b.prototype);
g.prototype.constructor=g;
var k=function(o,n){var m=this;
if(!m.ausLineChart.browserDoSupportSVG){return
}if(!n){if(i){return o&&o(i)
}}e(m.ausLineChart.renderTo+" .is-updating").show();
e.ajax({url:"/public/afr/market/indices",dataType:"json",type:"GET",data:{action:"asxintraday"},cache:false}).fail(function(p,r,q){console.error("Error: "+q);
e(m.ausLineChart.renderTo+" .spinner").hide();
e(m.ausLineChart.renderTo+" .is-updating").hide()
}).success(function(p,r,q){i=p;
o&&o(p);
e(m.ausLineChart.renderTo+" .spinner").hide();
e(m.ausLineChart.renderTo+" .is-updating").hide()
})
};
g.prototype.getChart=function(o){var m=this;
if(!d||d==="initializing"){d="initializing";
var n=new j(m.ausLineChart,function(p){d=n;
o&&o(d)
});
return
}o&&o(d)
};
g.prototype.refresh=function(){var m=this;
e.ajax({url:"/public/afr/market/indices",dataType:"json",type:"GET",data:{action:"asxindices"},cache:false}).fail(function(n,p,o){console.error("Error: "+o)
}).success(function(o,p,n){o=o.marketData;
l.each(o,function(s){var r=m.overviewAppendTo+" #cq-asx-"+s.indexCode.toLowerCase()+"__summary";
e(r).empty();
var q={};
l.defaults(q,m.tabs,{appendTo:r});
var t=new c(q);
t.load2Indices(s)
})
});
if(m.ausLineChart.browserDoSupportSVG&&f(m.uuid)){k.bind(m)(function(n){m.getChart(function(r){var p=e("#"+m.uuid+" .accordion#accordion-aus-ind-overview li.active .accordion__header").attr("data-index");
var s=n.date;
var q=n.delayed;
var o=l.filter(n.marketData,function(t){return t.indexCode.toLowerCase()===p
});
r.loadData(o,s,q)
})
},true)
}m.scheduleNextRun(m.refresh.bind(m))
};
var f=function(m){return e("#"+m+" .accordion#accordion-aus-ind-overview li.active")
};
var a=function(o){var n=this,m=e(o.currentTarget).attr("data-index");
if(!n.ausLineChart.browserDoSupportSVG){return false
}k.bind(n)(function(q){var p=l.filter(q.marketData,function(r){return r.indexCode.toLowerCase()===m
});
e(o.currentTarget).parents("#cq-asx-overviews").find("svg").insertBefore(e(o.currentTarget).parent().find(".accordion__content .stock__update"));
n.getChart(function(r){r.loadData(p,q.date,q.delayed)
})
});
return false
};
e.extend(true,window,{FFX:{components:{marketdata:{AsxIndices:g}}}})
})(jQuery,_,FFX.components.marketdata.Index,FFX.components.marketdata.chart.SimpleIndexLineChart,FFX.components.marketdata.Common,FFX.components.marketdata.AutoRefreshByIntervalMixin);
(function(d,i,j,c,g,f,a,e,b){var h=function(l){var k=this;
d.extend(true,k,{title:"Market Data Component",ajaxInterval:e.defaultRefreshInterval,dayLightSaving:false,indices:{indicesBitwiseConstants:"AUDUSD=1,XJO=2,YAPcm1=4,XAO=8,DJI=16,FTSE=32,HSI=64,GDAXI=128,CSI300=256,FCHI=1024,N225=2048",displayAt:{current:"aest",aest:{YAPcm1:"23:30,09:59",XAO:"10:00,23:29",FTSE:"18:00,11:29",HSI:"11:30,17:59",GDAXI:"17:00,11:29",CSI300:"11:30,16:59",FCHI:"17:00,09:59",N225:"10:00,16:59"},aedt:{YAPcm1:"01:30,09:59",XAO:"10:00,01:29",FTSE:"19:00,12:29",HSI:"12:30,18:59",GDAXI:"19:00,12:29",CSI300:"12:30,18:59",FCHI:"19:00,10:59",N225:"11:00,18:59"}},overrideDisplayAtRulesWithBitwiseCodeMask:true,bitwiseCodeMask:"11111111111"},linechart:{indicesBitwiseConstants:"XJO=2,YAPcm1=4,FTSE=8,HSI=16,DJI=32,N225=64",displayAt:{current:"aest",aest:{XJO:"10:00,19:59",YAPcm1:"20:00,09:59",FTSE:"18:00,11:29",HSI:"11:30,17:59",DJI:"23:30,09:59",N225:"10:00,23:29"},aedt:{XJO:"10:00,19:59",YAPcm1:"20:00,09:59",FTSE:"19:00,12:29",HSI:"12:30,18:59",DJI:"01:30,10:59",N225:"11:00,01:29"}}}},l);
b.call(k,l);
d("body").data(k.uuid,k);
if(k.indices.enableIndices){d(k.indices.renderTo).show();
if(k.indices.alwaysExpand){d(k.indices.toggleTarget).toggleClass("open");
d(k.indices.renderTo).css("padding-right",0)
}else{d(k.indices.expandBtn).show();
d(k.indices.expandBtn).off("click");
d(k.indices.expandBtn).click(function(){d(k.indices.toggleTarget).toggleClass("open")
})
}}if(k.linechart.enableChart){d(k.linechart.renderTo).show()
}if(k.tabs.enableTabs){d(k.tabs.renderTo).show()
}if(!k.indices.enableIndices&&(k.tabs.enableTabs||k.linechart.enableChart)){d(k.indices.toggleTarget).addClass("open")
}if(k.indices.enableIndices||k.tabs.enableTabs){k.loadIndices()
}if(k.linechart.enableChart){var m=new a(k.linechart,function(){var n=function(){d(k.linechart.renderTo+" .is-updating").show();
d.ajax({url:"/public/afr/market/indices",dataType:"json",type:"GET",data:{action:"intraday"},cache:false}).fail(function(o,q,p){console.error("Error: "+p);
d(k.linechart.renderTo+" .spinner").hide()
}).success(function(o,s,p){var r=o.date;
var q=o.delayed;
o=o.marketData;
m.loadData(o,r,q)
});
k.scheduleNextRun(n.bind(k))
};
n()
})
}if(k.tabs.enableTabs){d("#"+k.uuid+" .tabs .inline-list a").click(e.handleTabClick);
k.commodities=new g(k.tabs.commodities);
k.asxGainersLosers=new f(k.tabs.asxgainerslosers)
}};
h.prototype=Object.create(b.prototype);
h.prototype.constructor=h;
h.prototype.loadIndices=function(){var k=this;
if(k.indices.enableIndices){d(k.indices.toggleTarget+" .indices li").addClass("is-updating")
}if(k.tabs.enableTabs){d(k.tabs.renderTo+" .is-updating").show()
}d.ajax({url:"/public/afr/market/indices",dataType:"json",type:"GET",data:{action:"indices"},cache:false}).fail(function(l,n,m){console.error("Error: "+m)
}).success(function(n,q,m){var p=n.date;
var o=n.delayed;
var l="(Data is delayed)";
n=n.marketData;
if(k.indices.enableIndices){d.ajax({url:"/public/afr/market/data",dataType:"json",type:"GET",data:{action:"audusd"},cache:false}).fail(function(r,t,s){console.error("Error: "+s);
d(k.indices.toggleTarget+" .indices li").removeClass("is-updating");
d(k.tabs.renderTo+" .is-updating").hide()
}).success(function(r,t,s){r=r.marketData;
r.AUDUSD&&(n.AUDUSD=k.getCurrencySetting(r));
k.renderTopStrip(n,p)
})
}if(k.tabs.enableTabs){i.each(n,function(s){var r=k.tabs.overviews.renderTo+" ."+s.indexCode;
d(r).empty();
var t=new c({appendTo:r});
t.load2Overviews(s)
});
p=new Date(p);
d(k.tabs.renderTo+" .lastUpdated").html("Last updated: "+p.toDateString()+" - "+p.toLocaleTimeString()+"  "+l+' <span class="is-updating" style="display:none;">Updating...</span>')
}});
k.scheduleNextRun(k.loadIndices.bind(k))
};
h.prototype.renderTopStrip=function(n,p){var l=this,o=[],m=l.getIndicesToShow(n,p);
d(l.indices.renderTo+" .indicesSummaryItem").remove();
if(m.length===0){d(l.indices.renderTo).html('<li><span><em class=""></em></span><span><em class="">No</em></span></li><li><span><em class=""></em></span><span><em class="">Data</em></span></li><li><span><em class=""></em></span><span><em class="">Available</em></span></li>')
}else{var k={};
i.defaults(k,l.indices,{appendTo:l.indices.renderTo});
i.each(m,function(q){var r=new c(k);
r.load2Indicessummary(q);
o[q.indexCode]=r
})
}d(l.indices.toggleTarget+" .indices li").removeClass("is-updating")
};
h.prototype.getIndicesToShow=function(o,p){var l=this;
var k;
if(l.indices.overrideDisplayAtRulesWithBitwiseCodeMask&&!isNaN(l.indices.bitwiseCodeMask)){k=parseInt(l.indices.bitwiseCodeMask,2)
}else{k=j.calculateBitwiseCodeMaskOnTheFly(l.indices,p)
}var n=j.convertIndicesBitwiseConstants2Object(l.indices.indicesBitwiseConstants);
var m=i.filter(o,function(q){return n[q.indexCode]&k
});
m=i.sortBy(m,function(q){return n[q.indexCode]
});
return m
};
h.prototype.getCurrencySetting=function(k){return{indexCode:k.AUDUSD.currencyCompareName,indexName:{shortDesc:k.AUDUSD.currencyCompareName},indexPriceMvtPC:k.AUDUSD.currencyPriceMvtPC,changePercentageFormat:4,indexPrice:k.AUDUSD.currencyPrice,priceNumberFormat:4,indexPriceMvt:k.AUDUSD.currencyPriceMvt,changeNumberFormat:4}
};
d.extend(true,window,{FFX:{components:{marketdata:{MarketData:h}}}})
})(jQuery,_,FFX.components.marketdata.DisplayAtBitwiseUtil,FFX.components.marketdata.Index,FFX.components.marketdata.Commodities,FFX.components.marketdata.AsxGainersLosers,FFX.components.marketdata.chart.LineChart,FFX.components.marketdata.Common,FFX.components.marketdata.AutoRefreshByIntervalMixin);
(function(f,d,g,c){var b=function(i,k){if(!i){return undefined
}var j=k?"aedt":"aest";
var h={current:j};
h[j]=d.object(d.map(i.split(";"),function(l){return l.split("=")
}));
return h
};
var a=function(i){var q="#"+i;
var v=f(q),n=f(v).attr("data-detectedDevice"),j=f(v).attr("data-alwaysExpand"),r=f(v).attr("data-indicesBitwiseConstants"),o=f(v).attr("data-bitwiseCodeMask"),s=f(v).attr("data-overrideDisplayAtRulesWithBitwiseCodeMask"),u=f(v).attr("data-filterChartDataRangingOneDay"),m=f(v).children(".indices").attr("data-enableIndices"),h=f(v).children(".indices").attr("data-displayAt"),l=f(v).find(".market-data-chart").attr("data-enableChart"),k=f(v).find(".tabs").attr("data-enableTabs"),t=f(v).attr("data-dayLightSaving"),p=f(v).children(".market-data-chart").attr("data-displayAt");
s=s!=="false";
u=u!=="false";
j=j==="true";
m=m!=="false";
t=t==="true";
h=b(h,t);
p=b(p,t);
l=n!="mobile"&&l!=="false"&&c.doSupportSVG();
k=n!="mobile"&&k!=="false";
new g({uuid:i,detectedDevice:n,dayLightSaving:t,indices:{enableIndices:m,toggleTarget:q,expandBtn:q+" .expandBtn",alwaysExpand:j,renderTo:q+" .indices",indicesBitwiseConstants:r,overrideDisplayAtRulesWithBitwiseCodeMask:s,bitwiseCodeMask:o,displayAt:h},linechart:{enableChart:l,renderTo:q+" .market-data-chart",filterChartDataRangingOneDay:u,displayAt:p},tabs:{enableTabs:k,renderTo:q+" .tabs",overviews:{renderTo:q+" .overviews"},commodities:{renderTo:q+" .commodities"},asxgainerslosers:{gainersAppendTo:q+" .asxgainerslosers .left-table",losersAppendTo:q+" .asxgainerslosers .right-table"}}})
};
f(function(){f(".market-data-container").each(function(h,j){var i=f(j).attr("data-uuid");
a(i)
})
});
var e=function(j){var i=f(j.placeholder.dom.nextSibling).find("section.market-data-container").attr("id");
var h=f("body").data(i);
j.refreshSelf();
a(i)
};
f.extend(true,window,{FFX:{components:{marketdata:{handleAfterEditDialog:e}}}})
})(jQuery,_,FFX.components.marketdata.MarketData,FFX.components.marketdata.Common);
(function(e,c,f,d,a){e("body").data(self.uuid,self);
var b=function(h){var g=this;
e.extend(true,g,{title:"Asx Gainers Losers Data Card",gainersAppendTo:"#"+h.uuid+" #gainers tbody",losersAppendTo:"#"+h.uuid+" #losers tbody"},h);
e("#"+g.uuid+" .tabs .inline-list a").click(a.handleTabClick);
g.asxGainersLosersDataCard=new d(g)
};
e(function(){e(".asx-gainers-losers-data-card").each(function(g,i){var h=e(i).attr("data-uuid");
new b({uuid:h})
})
});
e.extend(true,window,{FFX:{components:{marketdata:{AsxGainersLosersDataCard:b}}}})
})(jQuery,_,FFX.components.marketdata.Index,FFX.components.marketdata.AsxGainersLosers,FFX.components.marketdata.Common);
(function(e,c,f,d,b,a){e("body").data(self.uuid,self);
var g=function(i){var h=this;
e.extend(true,h,{uuid:i.uuid,title:"Australia Indices",gainersAppendTo:"#"+i.uuid+" #cq-asx-gainers tbody",losersAppendTo:"#"+i.uuid+" #cq-asx-losers tbody",overviewAppendTo:"#"+i.uuid+" #cq-asx-overviews"},i);
e("#"+h.uuid+" .tabs .inline-list a").click(a.handleTabClick);
h.asxIndices=new b(h);
new d(h)
};
e(function(){e(".cq-asx-container").each(function(h,j){var i=e(j).attr("data-uuid");
new g({uuid:i})
})
})
})(jQuery,_,FFX.components.marketdata.Index,FFX.components.marketdata.AsxGainersLosers,FFX.components.marketdata.AsxIndices,FFX.components.marketdata.Common);
(function(d,b,a,f,e){var c=function(h){var g=this;
d.extend(true,g,{uuid:h.uuid,title:"Index Values"},h);
e.call(g,h);
g.refresh()
};
c.prototype=Object.create(e.prototype);
c.prototype.constructor=c;
c.prototype.refresh=function(){var g=this;
d.ajax({url:"/public/afr/market/indices",dataType:"json",type:"GET",data:{action:"worldindices"},cache:false}).fail(function(h,j,i){console.error("Error: "+i)
}).success(function(i,j,h){i=i.marketData;
b.each(i,function(m){var l=g.appendTo+" #cq-world-"+m.indexCode.toLowerCase().trim()+"__summary";
d(l).empty();
var k={};
b.defaults(k,g.tabs,{appendTo:l});
var n=new f(k);
n.load2Indices(m)
})
});
g.scheduleNextRun(g.refresh.bind(g))
};
d.extend(true,window,{FFX:{components:{marketdata:{IndexValues:c}}}})
})(jQuery,_,FFX.components.marketdata.Common,FFX.components.marketdata.Index,FFX.components.marketdata.AutoRefreshByIntervalMixin);
(function(c,i,h,f,b){var g=function(k){var j=this;
i.defaults(j,k,{title:"Intraday Values",areaCode:"us",globalLineChart:{browserDoSupportSVG:f.doSupportSVG(),lineColour:"yellow",dotColour:"aqua",exchangeCode:"world",renderTo:"#cq-world-"+c("#cq-world-"+k.areaCode+" li:first div:first").attr("data-index")+"__chart.accordion__content"}});
b.call(j,k);
j.refresh();
if(j.globalLineChart.browserDoSupportSVG){c("#"+j.uuid+" .market-data-no-chart").removeClass("market-data-no-chart")
}else{return
}c("#"+j.uuid+" #cq-world-"+j.areaCode+" .accordion .accordion__header").click(a.bind(j))
};
g.prototype=Object.create(b.prototype);
g.prototype.constructor=g;
var e=function(m,l){var k=this;
if(!k.globalLineChart.browserDoSupportSVG){return
}var j=k.areaCode+"intraday";
if(!l){if(k.cachedValues){return m&&m(k.cachedValues)
}}c.ajax({url:"/public/afr/market/indices",dataType:"json",type:"GET",data:{action:j},cache:false}).fail(function(n,p,o){console.error("Error: "+o)
}).success(function(n,p,o){k.cachedValues=n;
m&&m(n)
})
};
var a=function(l){var k=this,j=c(l.currentTarget).attr("data-index");
if(!k.globalLineChart.browserDoSupportSVG){return false
}e.bind(k)(function(n){var o=n.date;
var m=i.filter(n.marketData,function(p){return p.indexCode.toLowerCase()===j
});
c(l.currentTarget).parent().parent().find("svg").insertBefore(c(l.currentTarget).parent().find(".accordion__content .stock__update"));
k.getChart(function(p){p.loadData(m,o,n.delayed)
})
});
return false
};
var d=function(k){var j=this;
return c("#"+k+" .accordion#accordion-world-ind-"+j.areaCode+" li.active")
};
g.prototype.update=function(){var j=this;
if(j.simpleChart&&j.globalLineChart.browserDoSupportSVG){j.simpleChart.update()
}};
g.prototype.getChart=function(l){var j=this;
if(!j.simpleChart||j.simpleChart==="initializing"){j.simpleChart="initializing";
var k=new h(j.globalLineChart,function(m){j.simpleChart=k;
l&&l(j.simpleChart)
});
return
}l&&l(j.simpleChart)
};
g.prototype.refresh=function(){var j=this;
if(j.globalLineChart.browserDoSupportSVG&&d(j.uuid)){e.bind(j)(function(k){j.getChart(function(n){var m=c("#"+j.uuid+" .accordion#accordion-world-ind-"+j.areaCode+" li.active .accordion__header").attr("data-index");
var o=k.date;
var l=i.filter(k.marketData,function(p){return p.indexCode.toLowerCase()===m
});
n.loadData(l,o,k.delayed)
})
},true)
}j.scheduleNextRun(j.refresh.bind(j))
};
c.extend(true,window,{FFX:{components:{marketdata:{IntradayValues:g}}}})
})(jQuery,_,FFX.components.marketdata.chart.SimpleIndexLineChart,FFX.components.marketdata.Common,FFX.components.marketdata.AutoRefreshByIntervalMixin);
(function(e,i,c,h,d,g){var f={};
e("body").data(self.uuid,self);
var a=function(k){var j=this;
e.extend(true,j,{uuid:k.uuid,title:"World Indices",appendTo:"#"+k.uuid,areaCode:e("#"+k.uuid+" .selectable .is-selected a").attr("data-index")},k);
e("#"+j.uuid+" .tabs .inline-list a").click(function(l){g.handleTabClick.bind(this)();
b.bind(j)(l)
});
new d(j);
if(j.areaCode){f[j.areaCode]=new h(j)
}};
var b=function(k){var j=this;
j.areaCode=e(k.currentTarget).attr("data-index");
if(typeof f[j.areaCode]==="undefined"&&j.areaCode){f[j.areaCode]=new h(j);
return
}f[j.areaCode]&&(f[j.areaCode]).update()
};
e(function(){e(".cq-world-container").each(function(j,l){var k=e(l).attr("data-uuid");
new a({uuid:k})
})
})
})(jQuery,_,FFX.components.marketdata.Index,FFX.components.marketdata.IntradayValues,FFX.components.marketdata.IndexValues,FFX.components.marketdata.Common);
(function(d,b,a,e){var c=function(g){var f=this;
d.extend(true,f,{uuid:g.uuid,title:"Quote Announcements",announcementsAppendTo:"#"+g.uuid+" .asx-announcements tbody"},g)
};
d.extend(true,window,{FFX:{components:{marketdata:{ASXAnnouncements:c}}}});
c.prototype.load=function(g){var f=this;
d.ajax({url:"/public/afr/market/quote",dataType:"json",type:"GET",data:{action:"announcements",company:g},cache:false}).fail(function(h,j,i){f.fillAnnouncementWithDummy();
console.error("Error: "+i)
}).success(function(k,l,j){if(f.isEmpty(k)){f.fillAnnouncementWithDummy();
return
}k=k.marketData;
d(f.announcementsAppendTo).empty();
var h={};
b.defaults(h,f.tabs,{appendTo:f.announcementsAppendTo});
var i=new e(h);
b.each(k,function(m){i.load2Announcements(m)
})
});
f.populatePermalink(g)
};
c.prototype.isEmpty=function(f){return !f||!f.marketData||!f.marketData.length||f.marketData.length==0
};
c.prototype.fillAnnouncementWithDummy=function(){var f=this,g="<tr><td>N/A</td></tr>";
d(f.announcementsAppendTo).empty();
d(g).appendTo(f.announcementsAppendTo)
};
c.prototype.populatePermalink=function(h){var g=this,f=window.location.protocol+"//www.afr.com/research-tools/"+h+"/share-prices/announcements";
d("#"+g.uuid+" .cq-ano-all-link").attr("href",f)
}
})(jQuery,_,FFX.components.marketdata.Common,FFX.components.marketdata.Index);
(function(d,c,a,e){var b=function(g){var f=this;
d.extend(true,f,{uuid:g.uuid,title:"Company Profile",companyAppendTo:"#"+g.uuid+" #cq-ano-whole-tab .cq-ano-company-profile",quoteAppendTo:"#"+g.uuid+" #cq-ano-whole-tab .cq-ano-quote-header"},g)
};
b.prototype.load=function(g){var f=this;
d.ajax({url:"/public/afr/market/quote",dataType:"json",type:"GET",data:{action:"detail",company:g},cache:false}).fail(function(h,j,i){f.fillQuoteWithDummy();
f.fillProfileWithDummy();
console.error("Error: "+i)
}).success(function(i,j,h){if(f.isEmpty(i)){f.fillQuoteWithDummy();
f.fillProfileWithDummy();
return
}i=i.marketData;
c.each(i,function(m){var k,l;
d(f.quoteAppendTo).empty();
k={};
c.defaults(k,f.tabs,{appendTo:f.quoteAppendTo});
l=new e(k);
l.load2Quote(m);
if(f.detectedDevice!=="mobile"){d(f.companyAppendTo).empty();
k={};
c.defaults(k,f.tabs,{appendTo:f.companyAppendTo});
l=new e(k);
l.load2CompanyProfile(m)
}});
f.populatePermalink(g)
})
};
b.prototype.isASXListedCompany=function(h){var f=this;
var g=true;
d.ajax({url:"/public/afr/market/quote",dataType:"json",type:"GET",data:{action:"detail",company:h},cache:false,async:false,timeout:200}).fail(function(i,k,j){g=false
}).success(function(j,k,i){if(f.isEmpty(j)){g=false
}});
return g
};
b.prototype.isEmpty=function(f){return !f||!f.marketData||d.isEmptyObject(f.marketData)
};
b.prototype.populatePermalink=function(h){var g=this,f=window.location.protocol+"//www.afr.com/research-tools/"+h+"/share-prices";
d("#"+g.uuid+" .cq-ano-full-quote-link").attr("href",f)
};
b.prototype.fillQuoteWithDummy=function(){var f=this,g='<h5>No quote detail available</h5><em class="current">Price N/A</em><div class="row"><em class="volume">volume <strong>N/A</strong></em><em class="value">value <strong>N/A</strong></em></div>';
d(f.quoteAppendTo).empty();
d(g).appendTo(f.quoteAppendTo)
};
b.prototype.fillProfileWithDummy=function(){var f=this,g="<p>Principal activity N/A</p><p>URL N/A</p><p>GICS N/A</p><p>ASIC N/A</p>";
d(f.companyAppendTo).empty();
d(g).appendTo(f.companyAppendTo)
};
d.extend(true,window,{FFX:{components:{marketdata:{CompanyProfile:b}}}})
})(jQuery,_,FFX.components.marketdata.Common,FFX.components.marketdata.Index);
(function(c,j,k,g){var d,a={};
var e={xAxis:{label:"GMT+1000 (AUS Eastern Standard Time)",timeFormat:"%H:%M"}};
var i={xAxis:{label:"GMT+1000 (AUS Eastern Standard Time)",timeFormat:"%b%y"}};
var h={};
h["one-day"]=e;
h["five-years"]=i;
var b=function(m,p,o,n){var l=this;
if(!n){if(a[p+"-"+m]){return o&&o(a[p+"-"+m])
}}c(l.priceHistoryLineChart.renderTo+" .is-updating").show();
c.ajax({url:"/public/afr/market/quote",dataType:"json",type:"GET",data:{action:"history",interval:m,company:p},cache:false}).fail(function(q,s,r){console.error("Error: "+r);
c(l.priceHistoryLineChart.renderTo+" .spinner").hide();
c(l.priceHistoryLineChart.renderTo+" .is-updating").hide()
}).success(function(r,s,q){if(r&&r.marketdata){a[p+"-"+m]=r
}o&&o(r)
})
};
var f=function(m){var l=this;
c.extend(true,l,{uuid:m.uuid,title:"Related Quote Price History",priceHistoryLineChart:{browserDoSupportSVG:g.doSupportSVG(),renderTo:"#"+m.uuid}},m);
if(l.priceHistoryLineChart.browserDoSupportSVG){c("#"+l.uuid+" .market-data-no-chart").removeClass("market-data-no-chart")
}else{return
}c("#"+l.uuid).find(" .cq-interval-tabs li a").click(function(){var n=c("#quotes-"+l.getCurrentSelectInterval()).find(" .stock__update");
c("#"+l.uuid).find(" .spinner").insertBefore(n);
c("#"+l.uuid).find("svg").insertBefore(n);
l.load(l.getRelatedQuote());
return false
})
};
f.prototype.getCurrentSelectInterval=function(){var l=this;
return c("#"+l.uuid).find(" .cq-interval-tabs .is-selected").attr("data-index")
};
f.prototype.load=function(m){var l=this;
if(!l.priceHistoryLineChart.browserDoSupportSVG){return
}l.getChart(function(n){b.bind(l)(l.getCurrentSelectInterval(),m,function(o){n.loadData(o.marketData,o.date,h[l.getCurrentSelectInterval()])
})
})
};
f.prototype.getChart=function(n){var l=this;
if(!d||d==="initializing"){d="initializing";
var m=new k(l.priceHistoryLineChart,function(o){d=m;
n&&n(d)
});
return
}n&&n(d)
};
c.extend(true,window,{FFX:{components:{marketdata:{QuotesPriceHistory:f}}}})
})(jQuery,_,FFX.components.marketdata.quoteHistoryChart.RelatedQuoteLineChart,FFX.components.marketdata.Common);
(function(e,i,g,d,h){e("body").data(self.uuid,self);
var a,f,b;
var c=function(k){var j=this;
e.extend(true,j,{uuid:k.uuid,detectedDevice:"desktop",assetId:"",title:"Related Quotes",tabNavAppendTo:"#"+k.uuid+" .tabs .cq-ano-quote-tabs",relatedQuotes:[]},k);
j.initTabsByRelatedQuotes(j.relatedQuotes,k);
if(!j.relatedQuotes||j.relatedQuotes.length<=0){return
}a=new d(j);
a.load(j.relatedQuotes[0]);
f=new h(j);
f.load(j.relatedQuotes[0]);
b=new g(j);
b.load(j.relatedQuotes[0])
};
c.prototype.getRelatedQuote=function(){var j=this;
return e("#"+j.uuid).find(" .cq-ano-quote-tabs .is-selected a").attr("data-relatedquote")
};
c.prototype.loadBy=function(j){a.load(j);
f.load(j);
b.load(j)
};
c.prototype.initTabsByRelatedQuotes=function(l,k){var j=this;
var m=[];
a=new d(j);
if(!l||l.length<=0){return
}i.each(l,function(n){if(a.isASXListedCompany(n)){m.push(n);
e('<li><a href="#" data-relatedQuote="'+n+'" class="relatedQuoteTabNav"> '+n+"</a></li>").appendTo(j.tabNavAppendTo)
}});
j.relatedQuotes=m;
if(j.relatedQuotes.length<=0){e(".related-quotes").hide()
}e("#"+j.uuid+" .tab__nav li:first").addClass("is-selected");
e("#"+j.uuid+" .relatedQuoteTabNav").click(function(o){e(this).parent().addClass("is-selected").siblings().removeClass("is-selected");
var n=e(o.currentTarget).attr("data-relatedQuote");
j.loadBy(n);
return false
})
};
e(function(){var k=e("section.article__body").attr("data-related-quotes");
var j=k&&k.match(/companyCode=(\w*)/g);
if(j&&j.length){e(".cq-related-quotes-container").each(function(m,o){var n=e(o).attr("data-uuid");
var l=e(o).attr("data-detectedDevice");
new c({uuid:n,detectedDevice:l,relatedQuotes:i.map(j,function(p){return p.split("=")[1]
})})
})
}else{e(".cq-related-quotes-container").hide()
}});
e.extend(true,window,{FFX:{components:{marketdata:{RelatedQuotes:c}}}})
})(jQuery,_,FFX.components.marketdata.QuotesPriceHistory,FFX.components.marketdata.CompanyProfile,FFX.components.marketdata.ASXAnnouncements);
(function(d,c,b,e){var a=function(g){var f=this;
d.extend(true,f,{uuid:g.uuid,title:"Street Talk Quote Announcements",announcementsAppendTo:"#"+g.uuid+" #cq-street-quote-announcements ul"},g)
};
d.extend(true,window,{FFX:{components:{marketdata:{StreetTalkAnnouncements:a}}}});
a.prototype.load=function(h){var g=this;
d.ajax({url:"/public/afr/market/quote",dataType:"json",type:"GET",data:{action:"announcements",company:h},cache:false}).fail(function(i,k,j){console.error("Error: "+j)
}).success(function(m,n,l){m=m.marketData;
if(!m||m.length===0){return
}if(m.length>=2){m=m.slice(0,2)
}var j=g.announcementsAppendTo;
d(j).empty();
var i={};
c.defaults(i,g.tabs,{appendTo:j});
var k=new e(i);
c.each(m,function(o){k.load2StreetTalkAnnouncements(o)
})
});
var f=window.location.protocol+"//www.afr.com/research-tools/"+h+"/share-prices/announcements";
d("#"+g.uuid+" .cq-ano-all-link").attr("href",f)
}
})(jQuery,_,FFX.components.marketdata.Common,FFX.components.marketdata.Index);
(function(c,b,a,e){var d=function(g){var f=this;
c.extend(true,f,{uuid:g.uuid,title:"Quote Summary",quoteAppendTo:"#"+g.uuid+" #cq-street-quote-summary"},g)
};
d.prototype.load=function(g){var f=this;
c.ajax({url:"/public/afr/market/quote",dataType:"json",type:"GET",data:{action:"detail",company:g},cache:false}).fail(function(h,j,i){console.error("Error: "+i)
}).success(function(j,k,i){j=j.marketData;
b.each(j,function(o){var m=f.quoteAppendTo;
c(m).empty();
var l={};
b.defaults(l,f.tabs,{appendTo:m});
var n=new e(l);
n.load2StreetTalkQuote(o)
});
var h=window.location.protocol+"//www.afr.com/research-tools/"+g+"/share-prices";
c("#"+f.uuid+" .cq-ano-full-quote-link").attr("href",h)
})
};
c.extend(true,window,{FFX:{components:{marketdata:{StreetTalkQuoteDetail:d}}}})
})(jQuery,_,FFX.components.marketdata.Common,FFX.components.marketdata.Index);
(function(f,d,g,a){f("body").data(self.uuid,self);
var c,h;
var e=function(j){var i=this;
f.extend(true,i,{uuid:j.uuid,detectedDevice:"desktop",assetId:"",title:"Street Talk Quotes",tabNavAppendTo:"#"+j.uuid+" .tabs .cq-ano-quote-tabs",relatedQuotes:[]},j);
if(!i.relatedQuotes||i.relatedQuotes.length<=0){return
}c=new g(i);
c.load(i.relatedQuotes[0]);
h=new a(i);
h.load(i.relatedQuotes[0])
};
e.prototype.getRelatedQuote=function(){var i=this;
return f("#"+i.uuid).find(" .cq-ano-quote-tabs .is-selected a").attr("data-relatedquote")
};
var b=function(){f(".cq-street-talk-quotes-container.cq-not-initialized").each(function(k,n){var m=f(n).parent().parent().parent().attr("data-related-quotes");
var i=m&&m.match(/companyCode=(\w*)/g);
if(i&&i.length){var l=f(n).attr("data-uuid");
var j=f(n).attr("data-detectedDevice");
new e({uuid:l,detectedDevice:j,relatedQuotes:d.map(i,function(o){return o.split("=")[1]
})})
}else{f(n).hide()
}f(n).removeClass("cq-not-initialized")
})
};
f(function(){b()
});
f(document).on(AFR.streetTalkConfig.NEW_ARTICLE_LOADED,function(){b()
});
f.extend(true,window,{FFX:{components:{marketdata:{StreetTalkQuotes:e}}}})
})(jQuery,_,FFX.components.marketdata.StreetTalkQuoteDetail,FFX.components.marketdata.StreetTalkAnnouncements);
(function(c,b,f,e,a){c("body").data(self.uuid,self);
var d=function(h){var g=this;
c.extend(true,g,{uuid:h.uuid,title:"Commodities",renderTo:"#"+h.uuid},h);
c("#"+g.uuid+" .tabs .inline-list a").click(a.handleTabClick);
var i=new e(g);
g.commodities=i
};
c(function(){c(".cq-commodoties-container").each(function(g,i){var h=c(i).attr("data-uuid");
new d({uuid:h})
})
})
})(jQuery,_,FFX.components.marketdata.Index,FFX.components.marketdata.Commodities,FFX.components.marketdata.Common);
(function(b,a,e,c){b("body").data(self.uuid,self);
var d=function(g){var f=this;
b.extend(true,f,{uuid:g.uuid,title:"Currencies",renderTo:"#"+g.uuid},g);
f.currencies=new c(f)
};
b(function(){b(".cq-currencies-container").each(function(f,h){var g=b(h).attr("data-uuid");
new d({uuid:g})
})
})
})(jQuery,_,FFX.components.marketdata.Index,FFX.components.marketdata.Currencies);
(function(f){function e(h,k,g,m,j,l){var n=new Date(new Date().getTime()+parseInt(g));
var i=h+"="+escape(k)+((g)?"; expires="+n.toGMTString():"")+((m)?"; path="+m:"")+((j)?"; domain="+j:"")+((l)?"; secure":"");
document.cookie=i
}d=function d(i){var h=document.cookie;
var k=i+"=";
var j=h.indexOf("; "+k);
if(j==-1){j=h.indexOf(k);
if(j!=0){return null
}}else{j+=2
}var g=document.cookie.indexOf(";",j);
if(g==-1){g=h.length
}return unescape(h.substring(j+k.length,g))
};
var b="visited_afr_marketing_promo";
var c=60;
var a=".afr.com";
f(function(){f(".marketing-home").each(function(g){f("body").addClass("marketing-promo").addClass("marketing-promo--open");
var h=d(b);
if(h){f("body").removeClass("marketing-promo--open")
}else{e(b,"1",c*24*60*60*1000,"/",a);
f("body").addClass("marketing-promo--open")
}})
})
})(jQuery);
(function(c,b){var a=function(j){var t=this;
var x={articleId:"data-articleId",latestPostId:"#latest-Post-Id",postLiveIdSelector:"#post-live-Id",postContentIdSelector:"#post-content-Id",liveToggleEnabled:true,countdownToggleTimerInterval:1000,pageLiveToggleActiveClass:"selected",pageLiveToggleClass:"disabled",hiddenClass:"hidden",displayLiveToggleSelector:"div.live-indicator",displayLiveToggleMessageSelector:"p",sortPostContentSelector:"div.post-content",orderBy:"postTime|DESC"};
var i=c.extend(true,t,x,j);
t.livePostsContainer=c(i.livePostElement);
t.articleId=t.livePostsContainer.attr(t.articleId);
var z;
var o;
var A=i.hiddenClass;
t.liveToggleCountDown=function(){var B=this;
if(B.liveToggleEnabled){B.checkLiveStatus(function(C){if(C){B.loadPosts();
z=setTimeout(B.liveToggleCountDown.bind(B),30000)
}else{B.hideLiveToggle()
}})
}else{B.hideLiveToggle()
}};
var g=[],d=false,h=false;
t.enableLiveToggle=function(C){var B=this;
if(!B.liveToggleEnabled){B.liveToggleEnabled=true;
B.liveToggleCountDown()
}};
t.disableLiveToggle=function(C){var B=this;
B.liveToggleEnabled=false;
clearTimeout(z)
};
t.checkLiveStatus=function(D){var B=this;
if(B.articleId){var C="/bin/ffx/live-article/liveArticleDisplayLiveToggle?articleId="+B.articleId;
c.ajax({success:function(E){D&&D(c.trim(E)==="LIVE")
},error:function(G,E,F){q()
},type:"GET",timeout:15000,url:C})
}};
t.hideLiveToggle=function(){var B=this;
c(".article__status").hide();
c(".article__live-toggle").hide();
c(".article__live-note").hide();
B.liveToggleEnabled=false;
clearTimeout(z)
};
function r(B){if(B.indexOf("/content/afr.html")!==-1||B.indexOf("/content/afr/")!==-1){return"/content/afr"
}else{return""
}}t.loadPosts=function(){var D=this;
if(!D.articleId||h){return
}h=true;
var C=false,E=r(window.location.href)+"/livearticle.live-posts.html?articleId="+D.articleId+"&latestPostId="+n(g,d);
var F=D.orderBy.split("|")[0];
var B=D.orderBy.split("|")[1]==="ASC"?1:-1;
c.ajax({success:function(I){if(I.length){var H=c("<div/>").html(I);
var G=false;
H.find(".story.story--live").each(function(M,S){S=c(S);
var P=S.attr("data-postid");
var L=S.attr("data-lastpublishedtime");
var T=S.attr("data-posttime");
var J=_.find(g,function(U){return U.postId===P
});
if(!J||J.lastPublishedTime!==L){C=true;
if(!J){var O={postId:P,postTime:T,lastPublishedTime:L,touch:true},N={};
N[F]=S.attr("data-"+F);
var R=_.sortedIndex(g,N,function(U){return U&&U[F]&&B?B*U[F]:0
});
if(!g[R]){D.livePostsContainer.append(S);
g.push(O)
}else{var Q=g[R].postId;
S.insertBefore(c("#"+Q));
g.splice(R,0,O)
}}else{var K=D.livePostsContainer.find("#"+P);
K.replaceWith(S);
J.lastPublishedTime=L
}e(P);
f(P);
m(P)
}if(!G){G=true;
v()
}});
d=true;
C
}h=false
},error:function(I,G,H){q();
h=false
},type:"GET",dataType:"html",timeout:60000,url:E})
};
function k(C){var B=this;
var D=c(".article--live").hasClass("is-live");
if(D){B.enableLiveToggle(C)
}else{B.disableLiveToggle(C)
}}c(".onoffswitch-checkbox").click(k.bind(t));
if(t.articleId){t.loadPosts();
t.liveToggleCountDown();
v()
}function m(B){b.ready(function(C){C.widgets.load(document.getElementById("live_"+B))
})
}function f(B){c(document).trigger("bindVideoBySelector",[".subindex--article .story--live#"+B+" .bindVideo"]);
var D=c(".subindex--article .story--live#"+B);
var E=D.find("figure:not([data-fm-video-player-inline],[data-fm-video-player-inline-playlist],[data-fm-video-player-stand-alone],[data-fm-video-player-up-next]) .video-js");
if(E){var C=E.children("*").attr("src");
if(!C){var F=setInterval(function(){D=c(".subindex--article .story--live#"+B);
E=D.find(".video-js");
var H=E.children("*").attr("src");
if(H){w(E);
clearInterval(F)
}},200)
}else{w(E)
}}else{if(c.fmVideoPlayerInline){var G=c("figure.is_fm-video-player-inline,figure.is_fm-video-player-inline-playlist,figure.is_fm-video-player-stand-alone,figure.is_fm-video-player-up-next").length+1;
c("figure[data-fm-video-player-inline]").each(function(H,I){c(I).fmVideoPlayerInline({adOptions:{playerPosition:G}});
G++
})
}}}function w(B){B.fmBrightcovePlayer({playerControls:{enlarge:false,location:false,settings:false,star:false}})
}function e(B){c(".subindex--article .story--live#"+B+" .story__tools .copy").bind("click",function(D){var C=c(this).parent().find('input[type="text"]');
C.toggleClass("is-vishidden").val(window.location.href.split("#")[0]+"#"+C.attr("data-postid")).focus().select()
})
}function n(D,C){var B=t.orderBy.split("|")[1]==="ASC"?1:-1;
if(C&&D&&D.length>=1){return D[B===1?D.length-1:0].postId
}return""
}function p(){}function s(){}function v(){c("#live_interrupted").addClass(A)
}function q(){c("#live_interrupted").removeClass(A)
}function u(){window.location.reload()
}function y(){l();
if(window.titan&&titan.refreshAds){titan.refreshAds()
}}function l(){c("#theBgDiv, #topele, #topdvel").remove();
c(".cA-gutter.gutter-full, .cA-gutter, .gutter-full, .gutter-full.a, .gutter-right, .gutter-corner, .hasGutter-hide").remove();
c("#adspot-940x20-pos-1").css({"margin-left":"0px","margin-top":"0px","margin-bottom":"0px"})
}};
c("div.post-live").each(function(d,e){new a({livePostElement:e})
})
})(jQuery,twttr);
(function(b){var a=function(c){c.refreshSelf();
window.AFR&&window.AFR.TimeUtil&&window.AFR.TimeUtil.formatTimes(b(c.placeholder.dom.nextSibling).find("span.time"))
};
b(document).ready(function(){window.AFR&&window.AFR.TimeUtil&&window.AFR.TimeUtil.formatTimes(b(".rotator-tab span.time"))
});
b.extend(true,window,{FFX:{components:{rotator:{handleEdit:a}}}})
})(jQuery);
(function(b){var a=function(){};
a.prototype.getDateString=function(f){var d=new Date(f),c=d.getDate(),g=d.getMonth()+1,e=d.getFullYear().toString().substring(2);
if(c<10){c="0"+c
}if(g<10){g="0"+g
}if(e<10){e="0"+e
}return c+"/"+g+"/"+e
};
a.prototype.getTimeString=function(f){var d=new Date(f),c=d.getHours(),e=d.getMinutes(),g=" AM";
if(c<10){c="0"+c
}if(e<10){e="0"+e
}if(c>=12){g=" PM";
c=c%12
}return c+":"+e+g
};
a.prototype.isDateToday=function(e){var d=new Date(e),c=new Date();
return d.toDateString()==c.toDateString()
};
a.prototype.getTimeForTodayOtherwiseDate=function(d){var c=this;
if(c.isDateToday(d)){return c.getTimeString(d)
}else{return c.getDateString(d)
}};
a.prototype.formatTimes=function(c){var d=this;
c.each(function(e){b(this).html(d.getTimeForTodayOtherwiseDate(b(this).html()))
})
};
b.extend(true,window,{AFR:{TimeUtil:new a()}})
})(jQuery);
(function(c){if(typeof c==="undefined"){document.getElementsByClassName("cq-afr-cre-widget").style.display="none";
console.error("AFR CRE Widget does not show up, because it requires jQuery which has not been loaded properly. ");
return
}var b=function(d){d.refreshSelf();
window.AFR&&window.AFR.AfrCreWidget&&window.AFR.AfrCreWidget.Component.loadCreScript()
};
var a=function(){};
a.prototype.loadCreScript=function(){var d=c(".cq-afr-cre-widget");
d.find(".cre").each(function(){var g=c(this).attr("id");
var i=document.getElementById(g);
var h=document.getElementById(g).getAttribute("data-mode");
var e=document.createElement("script");
e.type="text/javascript";
e.async=true;
e.src=d.attr("data-cre-script")+"?domElementId="+g+"&width="+i.offsetWidth+"&mode="+h;
var f=document.getElementsByTagName("script")[0];
f.parentNode.insertBefore(e,f)
})
};
c.extend(true,window,{AFR:{AfrCreWidget:{Component:new a(),handleEdit:b}}});
c(document).ready(function(){window.AFR&&window.AFR.AfrCreWidget&&window.AFR.AfrCreWidget.Component.loadCreScript()
})
})(jQuery);
(function(b){var a=function(){};
a.prototype.setupExpandCollapseTracking=function(d){var e="#"+d,c=b(e+" .expandBtn"),f=b(e);
c.click(function(){if(window.digitalData&&digitalData!=undefined){if(f.hasClass("open")){digitalData.events.push({type:"analytics",event:"mdc_expanding"})
}else{digitalData.events.push({type:"analytics",event:"mdc_collapsing"})
}}})
};
a.prototype.setupAllDataTracking=function(c){b("#"+c+"-all-markets-data").on("click",function(){if(window.digitalData&&digitalData!=undefined){digitalData.events.push({type:"analytics",event:"mdc_all_data"})
}})
};
a.prototype.setupLegendTracking=function(c){b("#"+c+" .market-data-chart svg").on("click",function(f){if(b(f.target).attr("class")=="nv-legend-symbol"||b(f.target).attr("class")=="nv-legend-text"){var d=b(f.target).find(".nv-legend-text").andSelf().text();
if(/(^|\s)disabled(\s|$)/.test(b(f.target).parent(".nv-series").attr("class"))){if(window.digitalData&&digitalData!=undefined){digitalData.events.push({type:"analytics",event:"mdc_hideIndex",mdc_hideIndexName:d})
}}else{if(window.digitalData&&digitalData!=undefined){digitalData.events.push({type:"analytics",event:"mdc_showIndex",mdc_showIndexName:d})
}}}})
};
a.prototype.triggerBtbConversionAnalytics=function(c,d){if(window.digitalData&&digitalData!=undefined){digitalData.events.push({type:"analytics",event:"btb_conversion",btb_conversionsection:c,btb_conversionname:d})
}};
a.prototype.triggerBtbImpressionAnalytics=function(){if(window.digitalData&&digitalData!=undefined){digitalData.events.push({type:"analytics",event:"btb_impression"})
}};
a.prototype.triggerFeaturedStoriesAnalytics=function(c,d){if(window.digitalData&&digitalData!=undefined){digitalData.events.push({type:"analytics",event:"feature_conversion",feature_conversionsection:c,feature_conversionname:d})
}};
a.prototype.findFeaturedStoriesAnalyticsData=function(d,c){var e=d.find(c).text().trim();
return !e?"Unknown data":e
};
b.extend(true,window,{FFX:{tracking:{Omniture:new a()}}});
b("document").ready(function(){if(b("body").hasClass("home")||b("body").hasClass("subindex--markets")){b(".market-data-container").each(function(c,e){var d=b(e).attr("data-uuid");
if(b(e).find(".tab__nav")){b(e).find(".tab__nav a[role=tab]").on("click",function(){var f=b(this).text();
if(window.digitalData&&digitalData!=undefined){digitalData.events.push({type:"analytics",event:"mdc_tab_navigation",mdc_tabnavi_category:f})
}})
}a.prototype.setupExpandCollapseTracking(d);
a.prototype.setupAllDataTracking(d);
a.prototype.setupLegendTracking(d)
})
}b("div.cq-featured-stories-item a:not('.story__kicker a')").on("click",function(){var c=b(this).parents(".cq-featured-stories-item");
var e=b(this).parents("article.story");
var d=a.prototype.findFeaturedStoriesAnalyticsData(c,".story__kicker");
var f=a.prototype.findFeaturedStoriesAnalyticsData(e,".story__headline");
a.prototype.triggerFeaturedStoriesAnalytics(d,f)
})
})
})(jQuery);
(function(c,a){var b=function(){};
b.prototype.getPanelStartIndex=function(){c(".panel--ad-slider .slide").each(function(d,e){if(c(e).hasClass("active")){return d;
c(e).removeClass("active")
}});
return 0
};
b.prototype.updatePanelAdNav=function(j,e){e=typeof e!=="undefined"?e:false;
var i=c(j).find(".flex-direction-nav .flex-prev");
var h=c(j).find(".flex-direction-nav .flex-next");
var d=(e==true?j.animatingTo:j.currentSlide);
var g=d;
if(g==0){g=j.count
}var f=d+2;
if(f>j.count){f=1
}i.html('<span class="icon--chevron-left icon--small">View previous</span>'+c(j).find("li:nth-child("+(g+1)+")").find(".heading").text());
h.html(c(j).find("li:nth-child("+(f+1)+")").find(".heading").text()+'<span class="icon--chevron-right icon--small">View previous</span>');
i.show();
h.show();
if(j.count==2){if(j.animatingTo==1){h.hide()
}else{i.hide()
}}};
b.prototype.registerConversionAnalytics=function(){c("div.before-the-bell li.slide li a").each(function(){c(this).click(function(){var d=c("div.before-the-bell li.flex-active-slide h2.heading a").html();
a.triggerBtbConversionAnalytics(d,c(this).html())
})
});
c("div.before-the-bell li.slide h2.heading a").each(function(){c(this).click(function(){a.triggerBtbConversionAnalytics(c(this).html(),"All")
})
})
};
b.prototype.initialSlide=function(){b.prototype.registerConversionAnalytics();
var d=b.prototype.getPanelStartIndex();
c(".panel--ad-slider").flexslider({animation:"slide",controlNav:false,animationLoop:true,startAt:d,slideshow:false,itemMargin:0,prevText:"<span class='icon--chevron-left icon--small'>View previous</span>",nextText:"<span class='icon--chevron-right icon--small'>View next</span>",start:function(e){c(e).find(".flex-direction-nav .flex-prev").hide();
c(e).find(".flex-direction-nav .flex-next").hide();
if(e.count<3){c(e).find(".flex-direction-nav .flex-prev").css("display","none")
}if(e.count!==1){b.prototype.updatePanelAdNav(e)
}},before:function(e){if(e.count!==1){b.prototype.updatePanelAdNav(e,true)
}if(!c("div.before-the-bell div.panel").hasClass("is-animating")){a.triggerBtbImpressionAnalytics()
}},after:function(e){if(e.count!==1){b.prototype.updatePanelAdNav(e)
}}})
};
c.extend(true,window,{FFX:{components:{btb:{Common:new b()}}}})
})(jQuery,FFX.tracking.Omniture);
(function(){var a=false;
window.PluginClass=function(){};
PluginClass.classes={};
PluginClass.extend=function b(g){var e=this.prototype;
a=true;
var d=new this();
a=false;
for(var c in g){d[c]=typeof g[c]=="function"&&typeof e[c]=="function"?(function(h,i){return function(){var k=this._super;
this._super=function(l){return e[h].apply(this,l||[])
};
var j=i.apply(this,arguments);
this._super=k;
return j
}
})(c,g[c]):g[c]
}function f(){if(!a&&this._init){this._init.apply(this,arguments)
}}f.prototype=d;
f.prototype.constructor=f;
f.extend=b;
return f
}
})();
(function(b){var c=0;
PluginClass.classes.FMPlugin=PluginClass.extend({name:"fm-plugin",defaultOptions:{},getters:[],_getMarker:function(){return"is_"+this.name
},_init:function(){var d=a(this.name);
b[d]=this;
b.fn[d]=function(f){var e=Array.prototype.slice.call(arguments,1);
if(b[d]._isNotChained(f,e)){return b[d][f].apply(b[d],[this[0]].concat(e))
}return this.each(function(){if(typeof f==="string"){if(f[0]==="_"||!b[d][f]){throw"Unknown method: "+f
}b[d][f].apply(b[d],[this].concat(e))
}else{b[d]._attach(this,f)
}})
}
},_isNotChained:function(e,d){if(e==="option"&&(d.length===0||(d.length===1&&typeof d[0]==="string"))){return true
}return b.inArray(e,this.getters)>-1
},_attach:function(e,d){e=b(e);
if(e.hasClass(this._getMarker())){return
}e.addClass(this._getMarker());
d=b.extend(this._deepMerge(),{},this.defaultOptions,d||{},this._getMetadata(e));
var f=b.extend({name:this.name,elem:e,self:this,options:d},this._instSettings(e,d));
e.data(this.name,f);
this._postAttach(e,f);
this.option(e,d)
},_addQueryParameter:function(d,e,g){var f=new RegExp("([?&])"+e+"=.*?(&|$)","i");
var h=d.indexOf("?")!==-1?"&":"?";
if(d.match(f)){return d.replace(f,"$1"+e+"="+g+"$2")
}else{return d+h+e+"="+g
}},_addUniqueId:function(d){d=b(d);
var e=d.attr("id");
if(!e){e="fm-id-"+(++c);
d.attr("id",e)
}return e
},_deepMerge:function(){return true
},_instSettings:function(e,d){return{}
},_postAttach:function(d,e){},_getMetadata:function(d){try{var f=d.data(this.name)||"";
f=f.replace(/(\\?)'/g,function(e,h){return(h?"'":'"')
}).replace(/([a-zA-Z]+):([^\/a-z]|\s*true\b|\s*false\b)/g,'"$1":$2').replace(/\\:/g,":");
return b.parseJSON("{"+f+"}")
}catch(g){return{}
}},_getInst:function(d){return b(d).data(this.name)||{}
},option:function(f,e,h){f=b(f);
var g=f.data(this.name);
if(!e||(typeof e==="string"&&h==null)){var d=(g||{}).options;
return(d&&e?d[e]:d)
}if(!f.hasClass(this._getMarker())){return
}var d=e||{};
if(typeof e==="string"){d={};
d[e]=h
}this._optionsChanged(f,g,d);
b.extend(g.options,d)
},_optionsChanged:function(e,f,d){},destroy:function(d){d=b(d);
if(!d.hasClass(this._getMarker())){return
}this._preDestroy(d,this._getInst(d));
d.removeData(this.name).removeClass(this._getMarker())
},_preDestroy:function(d,e){}});
function a(d){return d.replace(/-([a-z])/g,function(e,f){return f.toUpperCase()
})
}b.FMPlugin={createPlugin:function(e,f){if(typeof e==="object"){f=e;
e="FMPlugin"
}e=a(e).replace(/^fm/,"FM");
var d=a(f.name).replace(/^fm/,"FM");
PluginClass.classes[d]=PluginClass.classes[e].extend(f);
new PluginClass.classes[d]()
}}
})(jQuery);
(function(b){var a="fm-stickyElement";
b.FMPlugin.createPlugin({name:a,defaultOptions:{content:"#main",fixTo:"top",reserved:0},_init:function(){if(typeof document.body.style.maxHeight==="undefined"){return
}this._super()
},_instSettings:function(e,d){var c=b("<div/>",{"class":"cfix"}).insertBefore(e);
return{content:b(d.content),marker:c,container:e.offsetParent(),preScrollPosition:e.css("position")}
},_postAttach:function(c,d){if(d.content.length){if((d.content.outerHeight()+d.content.offset().top)>(c.outerHeight()+c.offset().top)){b(window).on("scroll."+this.name,{inst:d},this._windowScroll)
}}},_windowScroll:function(h){var f=h.data.inst;
var c=b(window).scrollTop()+f.options.reserved;
var g=f.content.outerHeight()+f.content.offset().top;
var d=600;
if(f.options.fixTo=="top"){if((c+d)>g){f.elem.css({position:"absolute",bottom:0,top:"auto"})
}else{if(c>=f.marker.offset().top){f.elem.css({position:"fixed",top:f.options.reserved})
}else{f.elem.css({position:f.preScrollPosition,top:0})
}}}else{if(f.options.fixTo=="bottom"){if(c>=f.marker.offset().top+d-document.documentElement.clientHeight){f.elem.css({position:"fixed",bottom:f.options.reserved})
}else{f.elem.css({position:f.preScrollPosition,bottom:0})
}}}},_preDestroy:function(c,d){c.css({position:d.preScrollPosition,top:0});
d.marker.remove();
b(window).off("."+a)
}})
})(jQuery);
(function(b){var a="fm-socialSharing";
b.FMPlugin.createPlugin({name:a,defaultOptions:{width:600,height:600,suppressPopup:false},_postAttach:function(d,e){var c=this;
d.on("click",function(f){c._sharingPopup(d,e,f)
})
},_sharingPopup:function(e,f,d){var c=e.attr("href");
if(!f.options.suppressPopup&&c!==undefined){d.preventDefault();
window.open(c,"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height="+f.options.height+",width="+f.options.width)
}}})
})(jQuery);
(function(b){var a="fm-analyticsBase";
b.FMPlugin.createPlugin({name:a,defaultOptions:{analyticsType:"analytics",analyticsEvent:"???"},_postAttach:function(d,e){if(window.digitalData){var c=this._getEventData(d);
if(!b.isEmptyObject(c)){d.on("click."+e.name,b.extend({type:e.options.analyticsType,event:e.options.analyticsEvent},c),this._pushDigitalDataLayerEvent)
}}},_getEventData:function(c){return{}
},_pushDigitalDataLayerEvent:function(c){if(window.digitalData&&window.digitalData.events){window.digitalData.events.push(c.data)
}},_preDestroy:function(c,d){c.off("click."+d.name)
}})
})(jQuery);
(function(b){var a="fm-analyticsSocialNetwork";
b.FMPlugin.createPlugin("FMAnalyticsBase",{name:a,defaultOptions:{analyticsType:"analytics",analyticsEvent:"socialFollow"},_getEventData:function(d){var c=d.data("network");
return c?{socialNetwork:c.split("-")[0]}:{}
}})
})(jQuery);
(function(){$(".social a").fmSocialSharing().fmAnalyticsSocialNetwork({analyticsEvent:"socialShare"})
})();
(function(){$("ul.topic-labels li.topic-labels__item").each(function(){if(FFX.components.marketdata.CompanyProfile&&!FFX.components.marketdata.CompanyProfile.prototype.isASXListedCompany($("a",this).text())){$(this).hide()
}})
})();
/*!
 * jQuery Popup Overlay
 *
 * @version 1.7.4
 * @requires jQuery v1.7.1+
 * @link http://vast-engineering.github.com/jquery-popup-overlay/
 */
(function(e){var b=e(window);
var o={};
var m=[];
var c=[];
var l;
var a=null;
var g="_open";
var i="_close";
var k=[];
var h=null;
var f;
var j=/(iPad|iPhone|iPod)/g.test(navigator.userAgent);
var d={_init:function(r){var q=e(r);
var p=q.data("popupoptions");
c[r.id]=false;
m[r.id]=0;
if(!q.data("popup-initialized")){q.attr("data-popup-initialized","true");
d._initonce(r)
}if(p.autoopen){setTimeout(function(){d.show(r,0)
},0)
}},_initonce:function(q){var x=e(q);
var s=e("body");
var u;
var y=x.data("popupoptions");
var t;
a=parseInt(s.css("margin-right"),10);
h=document.body.style.webkitTransition!==undefined||document.body.style.MozTransition!==undefined||document.body.style.msTransition!==undefined||document.body.style.OTransition!==undefined||document.body.style.transition!==undefined;
if(y.type=="tooltip"){y.background=false;
y.scrolllock=false
}if(y.backgroundactive){y.background=false;
y.blur=false;
y.scrolllock=false
}if(y.scrolllock){var w;
var p;
if(typeof l==="undefined"){w=e('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body");
p=w.children();
l=p.innerWidth()-p.height(99).innerWidth();
w.remove()
}}if(!x.attr("id")){x.attr("id","j-popup-"+parseInt((Math.random()*100000000),10))
}x.addClass("popup_content");
s.prepend(q);
x.wrap('<div id="'+q.id+'_wrapper" class="popup_wrapper" />');
u=e("#"+q.id+"_wrapper");
u.css({opacity:0,visibility:"hidden",position:"absolute"});
if(j){u.css("cursor","pointer")
}if(y.type=="overlay"){u.css("overflow","auto")
}x.css({opacity:0,visibility:"hidden",display:"inline-block"});
if(y.setzindex&&!y.autozindex){u.css("z-index","100001")
}if(!y.outline){x.css("outline","none")
}if(y.transition){x.css("transition",y.transition);
u.css("transition",y.transition)
}x.attr("aria-hidden",true);
if((y.background)&&(!e("#"+q.id+"_background").length)){s.prepend('<div id="'+q.id+'_background" class="popup_background"></div>');
var v=e("#"+q.id+"_background");
v.css({opacity:0,visibility:"hidden",backgroundColor:y.color,position:"fixed",top:0,right:0,bottom:0,left:0});
if(y.setzindex&&!y.autozindex){v.css("z-index","100000")
}if(y.transition){v.css("transition",y.transition)
}}if(y.type=="overlay"){x.css({textAlign:"left",position:"relative",verticalAlign:"middle"});
t={position:"fixed",width:"100%",height:"100%",top:0,left:0,textAlign:"center"};
if(y.backgroundactive){t.position="relative";
t.height="0";
t.overflow="visible"
}u.css(t);
u.append('<div class="popup_align" />');
e(".popup_align").css({display:"inline-block",verticalAlign:"middle",height:"100%"})
}x.attr("role","dialog");
var r=(y.openelement)?y.openelement:("."+q.id+g);
e(r).each(function(z,A){e(A).attr("data-popup-ordinal",z);
if(!A.id){e(A).attr("id","open_"+parseInt((Math.random()*100000000),10))
}});
if(!(x.attr("aria-labelledby")||x.attr("aria-label"))){x.attr("aria-labelledby",e(r).attr("id"))
}if(y.action=="hover"){y.keepfocus=false;
e(r).on("mouseenter",function(z){d.show(q,e(this).data("popup-ordinal"))
});
e(r).on("mouseleave",function(z){d.hide(q)
})
}else{e(document).on("click",r,function(A){A.preventDefault();
var z=e(this).data("popup-ordinal");
setTimeout(function(){d.show(q,z)
},0)
})
}if(y.detach){x.hide().detach()
}else{u.hide()
}},show:function(q,v){var z=e(q);
if(z.data("popup-visible")){return
}if(!z.data("popup-initialized")){d._init(q)
}z.attr("data-popup-initialized","true");
var r=e("body");
var A=z.data("popupoptions");
var u=e("#"+q.id+"_wrapper");
var x=e("#"+q.id+"_background");
n(q,v,A.beforeopen);
c[q.id]=v;
setTimeout(function(){k.push(q.id)
},0);
if(A.autozindex){var p=document.getElementsByTagName("*");
var t=p.length;
var y=0;
for(var s=0;
s<t;
s++){var w=e(p[s]).css("z-index");
if(w!=="auto"){w=parseInt(w,10);
if(y<w){y=w
}}}m[q.id]=y;
if(A.background){if(m[q.id]>0){e("#"+q.id+"_background").css({zIndex:(m[q.id]+1)})
}}if(m[q.id]>0){u.css({zIndex:(m[q.id]+2)})
}}if(A.detach){u.prepend(q);
z.show()
}else{u.show()
}f=setTimeout(function(){u.css({visibility:"visible",opacity:1});
e("html").addClass("popup_visible").addClass("popup_visible_"+q.id);
z.addClass("popup_content_visible")
},20);
if(A.scrolllock){r.css("overflow","hidden");
if(r.height()>b.height()){r.css("margin-right",a+l)
}}if(A.backgroundactive){z.css({top:(b.height()-(z.get(0).offsetHeight+parseInt(z.css("margin-top"),10)+parseInt(z.css("margin-bottom"),10)))/2+"px"})
}z.css({visibility:"visible",opacity:1});
if(A.background){x.css({visibility:"visible",opacity:A.opacity});
setTimeout(function(){x.css({opacity:A.opacity})
},0)
}z.data("popup-visible",true);
d.reposition(q,v);
z.data("focusedelementbeforepopup",document.activeElement);
if(A.keepfocus){z.attr("tabindex",-1);
setTimeout(function(){if(A.focuselement==="closebutton"){e("#"+q.id+" ."+q.id+i+":first").focus()
}else{if(A.focuselement){e(A.focuselement).focus()
}else{z.focus()
}}},A.focusdelay)
}e(A.pagecontainer).attr("aria-hidden",true);
z.attr("aria-hidden",false);
n(q,v,A.onopen);
if(h){u.one("transitionend",function(){n(q,v,A.opentransitionend)
})
}else{n(q,v,A.opentransitionend)
}},hide:function(s){if(f){clearTimeout(f)
}var u=e("body");
var r=e(s);
var q=r.data("popupoptions");
var t=e("#"+s.id+"_wrapper");
var p=e("#"+s.id+"_background");
r.data("popup-visible",false);
if(k.length===1){e("html").removeClass("popup_visible").removeClass("popup_visible_"+s.id)
}else{if(e("html").hasClass("popup_visible_"+s.id)){e("html").removeClass("popup_visible_"+s.id)
}}k.pop();
if(e("html").hasClass("popup_content_visible")){r.removeClass("popup_content_visible")
}if(q.keepfocus){setTimeout(function(){if(e(r.data("focusedelementbeforepopup")).is(":visible")){r.data("focusedelementbeforepopup").focus()
}},0)
}t.css({visibility:"hidden",opacity:0});
r.css({visibility:"hidden",opacity:0});
if(q.background){p.css({visibility:"hidden",opacity:0})
}e(q.pagecontainer).attr("aria-hidden",false);
r.attr("aria-hidden",true);
n(s,c[s.id],q.onclose);
if(h&&r.css("transition-duration")!=="0s"){r.one("transitionend",function(v){if(!(r.data("popup-visible"))){if(q.detach){r.hide().detach()
}else{t.hide()
}}if(q.scrolllock){setTimeout(function(){u.css({overflow:"visible","margin-right":a})
},10)
}n(s,c[s.id],q.closetransitionend)
})
}else{if(q.detach){r.hide().detach()
}else{t.hide()
}if(q.scrolllock){setTimeout(function(){u.css({overflow:"visible","margin-right":a})
},10)
}n(s,c[s.id],q.closetransitionend)
}},toggle:function(q,p){if(e(q).data("popup-visible")){d.hide(q)
}else{setTimeout(function(){d.show(q,p)
},0)
}},reposition:function(t,p){var s=e(t);
var r=s.data("popupoptions");
var u=e("#"+t.id+"_wrapper");
var q=e("#"+t.id+"_background");
p=p||0;
if(r.type=="tooltip"){u.css({position:"absolute"});
var v;
if(r.tooltipanchor){v=e(r.tooltipanchor)
}else{if(r.openelement){v=e(r.openelement).filter('[data-popup-ordinal="'+p+'"]')
}else{v=e("."+t.id+g+'[data-popup-ordinal="'+p+'"]')
}}var w=v.offset();
if(r.horizontal=="right"){u.css("left",w.left+v.outerWidth()+r.offsetleft)
}else{if(r.horizontal=="leftedge"){u.css("left",w.left+v.outerWidth()-v.outerWidth()+r.offsetleft)
}else{if(r.horizontal=="left"){u.css("right",b.width()-w.left-r.offsetleft)
}else{if(r.horizontal=="rightedge"){u.css("right",b.width()-w.left-v.outerWidth()-r.offsetleft)
}else{u.css("left",w.left+(v.outerWidth()/2)-(s.outerWidth()/2)-parseFloat(s.css("marginLeft"))+r.offsetleft)
}}}}if(r.vertical=="bottom"){u.css("top",w.top+v.outerHeight()+r.offsettop)
}else{if(r.vertical=="bottomedge"){u.css("top",w.top+v.outerHeight()-s.outerHeight()+r.offsettop)
}else{if(r.vertical=="top"){u.css("bottom",b.height()-w.top-r.offsettop)
}else{if(r.vertical=="topedge"){u.css("bottom",b.height()-w.top-s.outerHeight()-r.offsettop)
}else{u.css("top",w.top+(v.outerHeight()/2)-(s.outerHeight()/2)-parseFloat(s.css("marginTop"))+r.offsettop)
}}}}}else{if(r.type=="overlay"){if(r.horizontal){u.css("text-align",r.horizontal)
}else{u.css("text-align","center")
}if(r.vertical){s.css("vertical-align",r.vertical)
}else{s.css("vertical-align","middle")
}}}}};
var n=function(s,p,t){var r=e(s).data("popupoptions");
var q=(r.openelement)?r.openelement:("."+s.id+g);
var u=e(q+'[data-popup-ordinal="'+p+'"]');
if(typeof t=="function"){t.call(e(s),s,u)
}};
e(document).on("keydown",function(r){if(k.length){var p=k[k.length-1];
var q=document.getElementById(p);
if(e(q).data("popupoptions").escape&&r.keyCode==27){d.hide(q)
}}});
e(document).on("click",function(s){if(k.length){var q=k[k.length-1];
var r=document.getElementById(q);
var p=(e(r).data("popupoptions").closeelement)?e(r).data("popupoptions").closeelement:("."+r.id+i);
if(e(s.target).closest(p).length){s.preventDefault();
d.hide(r)
}if(e(r).data("popupoptions").blur&&!e(s.target).closest("#"+q).length&&s.which!==2){d.hide(r);
if(e(r).data("popupoptions").type==="overlay"){s.preventDefault()
}}}});
e(document).on("focusin",function(r){if(k.length){var p=k[k.length-1];
var q=document.getElementById(p);
if(e(q).data("popupoptions").keepfocus){if(!q.contains(r.target)){r.stopPropagation();
q.focus()
}}}});
e.fn.popup=function(p){return this.each(function(){$el=e(this);
if(typeof p==="object"){var q=e.extend({},e.fn.popup.defaults,p);
$el.data("popupoptions",q);
o=$el.data("popupoptions");
d._init(this)
}else{if(typeof p==="string"){if(!($el.data("popupoptions"))){$el.data("popupoptions",e.fn.popup.defaults);
o=$el.data("popupoptions")
}d[p].call(this,this)
}else{if(!($el.data("popupoptions"))){$el.data("popupoptions",e.fn.popup.defaults);
o=$el.data("popupoptions")
}d._init(this)
}}})
};
e.fn.popup.defaults={type:"overlay",autoopen:false,background:true,backgroundactive:false,color:"black",opacity:"0.5",horizontal:"center",vertical:"middle",offsettop:0,offsetleft:0,escape:true,blur:true,setzindex:true,autozindex:false,scrolllock:false,keepfocus:true,focuselement:null,focusdelay:50,outline:false,pagecontainer:null,detach:false,openelement:null,closeelement:null,transition:null,tooltipanchor:null,beforeopen:null,onclose:null,onopen:null,opentransitionend:null,closetransitionend:null}
})(jQuery);
(function(b){var a="fm-popup-overlay-wrapper";
b.FMPlugin.createPlugin({name:a,defaultOptions:{contentSelector:".modal__content",popupOptions:{}},defaultPopupOptions:{closeelement:".modal__close",opacity:0.9,scrolllock:true,transition:"all 0.2s",vertical:"center"},_postAttach:function(c,d){d.options.popupOptions=b.extend({},this.defaultPopupOptions,d.options.popupOptions);
c.popup(d.options.popupOptions)
},hide:function(c){b(c).popup("hide")
},show:function(d,c){var e=this._getInst(d);
if(c){b(d).find(e.options.contentSelector).html(c)
}b(d).popup("show")
}})
})(jQuery);
(function(b){var a="fm-brightcove-player";
b.FMPlugin.createPlugin({name:a,defaultOptions:{overlayOptions:{countClass:"vjs-countdown--text",overlayLayoutClass:"video__overlay",pauseControlClass:"vjs-playing-container",playControlClass:"vjs-paused-container",startCountClass:"vjs-start__countdown"},playerControls:{enlarge:true,location:true,settings:true,star:true},pluginOptions:{nielsenBC:{params:{sfcode:"dcr"}}},trackingOptions:{autoPlay:false,contentType:"Video",videoId:0,videoIssueDate:new Date(0),videoName:"Unknown",videoProducer:"Unknown",videoSource:"Unknown",videoTotalLength:0},videoOptions:{autoPlay:false,countdownLength:5,hasCountDown:false,inView:false}},pause:function(c){var d=this._getInst(c);
if(d&&d.player){try{d.player.pause()
}catch(f){console.log(f)
}}},play:function(c,g){var d=this._getInst(c);
if(d&&d.player){try{if(g){d.player.catalog.getVideo(g,function(e,h){if(e){alert("Sorry, we couldn't play that video");
console.log("Can't play video "+g+" - "+e.message);
return
}d.player.catalog.load(h);
d.player.play()
})
}else{d.player.play()
}}catch(f){console.log(f)
}}},stop:function(c){var d=this._getInst(c);
if(d&&d.player){try{d.player.pause().currentTime(0)
}catch(f){console.log(f)
}}},_instSettings:function(d,c){return{isMobile:digitalData.page.pageInfo.sysEnv==="mobile",playTriggered:false,hasAd:false,isAdFinished:false}
},_postAttach:function(d,e){var c=false;
if(typeof videojs!="undefined"){videojs(d[0]).ready(function(){if(c){return
}c=true;
e.player=this;
e.playerObj=b(e.player.el());
e.module=e.playerObj.closest(".module");
var i={videoSrc:d.attr("src"),videoPoster:d.attr("poster"),upNext:{location:e.module.find(".video__next a").attr("href")}};
b.extend(true,e.options,i);
e.firstVideo=true;
e.lastProgress=0;
var l;
var g;
var k;
var f;
var h;
var j=false;
e.countDownTimer={init:function(m){k=e.options.videoOptions.countdownLength;
clearInterval(l);
f=e.playerObj.find("."+e.options.overlayOptions.countClass);
h=e.playerObj.find("."+e.options.overlayOptions.startCountClass);
f.knob({min:-(e.options.videoOptions.countdownLength),max:0,readOnly:true}).val(-(e.options.videoOptions.countdownLength));
h.knob({min:-(e.options.videoOptions.countdownLength),max:0,readOnly:true}).val(-(e.options.videoOptions.countdownLength));
j=m;
if(j){e.player.addClass("vjs-waiting").addClass("vjs-countdown")
}if(!e.options.videoOptions.inView){e.countDownTimer.startTimer()
}},startTimer:function(){l=setInterval(e.countDownTimer.decreaseSeconds,1000)
},decreaseSeconds:function(){k--;
f.val(k*-1).trigger("change");
h.val(k*-1).trigger("change");
if(k==0){clearInterval(l);
if(j){e.countDownTimer.clearTimer();
e.player.removeClass("vjs-countdown").play();
e.lastProgress=0
}else{e.self._loadVideo(e)
}clearTimeout(m);
var m=setTimeout(function(){e.playerObj.find(".vjs-settings-control").removeClass("selected");
e.player.removeClass("vjs-user-active").addClass("vjs-user-inactive")
},3000)
}},clearTimer:function(){k=e.options.videoOptions.countdownLength;
if(f){f.val(-k).trigger("change")
}if(h){h.val(-k).trigger("change")
}clearInterval(l)
}};
e.self._initNielsenBCPlugin(e);
e.player.load();
e.self._initAction(e)
})
}},_pageSettings:function(d){var c=digitalData.page.category.pageType==="Video";
if(!d.isMobile&&c){d.options.videoOptions.autoPlay=true
}},_userSettings:function(f){var g=digitalData.page.category.pageType==="Article";
var c=window.digitalData.page.category.pageType==="LiveArticle";
var d=digitalData.page.category.pageType==="Index";
var i=b(f.elem).closest(".module--inline-player").length>0;
var h;
if((g||c)&&i){var e=b("body .ms-toolbarWrap .active");
if(e.length){h=e.data("autoplay")
}}if(h===false||d){f.options.videoOptions.autoPlay=false;
f.options.videoOptions.hasCountDown=false;
f.options.videoOptions.inView=false
}},_addControls:function(e){var d=[{action:"location",classes:"vjs-skipNext-control vjs-control",content:'<div><span class="vjs-control-text">Mute</span></div><div class="vjs-thumbnail-holder"><div class="vjs-thumbnail">'+b(".video__next").html()+"</div></div>",effect:function(){document.location.href=e.options.upNext.location
},enabled:!!b(".video__next").html()},{action:"star",classes:"vjs-star-control vjs-control",content:'<div class="vjs-control-content"><span class="vjs-control-text">Watch Later</span></div>',effect:function(){},enabled:false},{action:"settings",classes:"vjs-settings-control vjs-control",content:'<div class="vjs-control-content"><span class="vjs-control-text">Settings</span></div><div class="vjs-menu"><div class="vjs-menu-content">'+b(".video__settings").html()+"</div></div>",effect:function(){b(".vjs-settings-control").toggleClass("selected")
},enabled:true},{action:"enlarge",classes:"vjs-enlarge-control vjs-control",content:'<div class="vjs-control-content"><span class="vjs-control-text">Enlarge</span></div>',effect:function(){e.module.toggleClass("enlarge")
},enabled:true}];
for(var c=0;
c<d.length;
c++){(function(f){if(e.options.playerControls[f.action]&&f.enabled){b("<div></div>",{"class":f.classes,html:f.content}).on("click",f.effect).appendTo(e.player.controlBar.el())
}})(d[c])
}},_endedAction:function(c){c.self._trackEvent("videoCompleted",c.options.trackingOptions);
c.player.pause().removeClass("vjs-paused").addClass("vjs-ended");
if(c.isMobile){if(c.player.hasClass("vjs-fullscreen")){document.exitFullscreen=document.exitFullscreen||document.mozCancelFullScreen||document.webkitExitFullscreen||document.msExitFullscreen;
document.exitFullscreen()
}c.module.find("> figure").removeClass("vjs-mobile-playing").addClass("vjs-mobile-ended")
}else{if(c.options.upNext.location){c.countDownTimer.init()
}else{c.elem.find(".vjs-ended-container").addClass("vjs-ended-none");
c.countDownTimer.clearTimer();
c.elem.trigger(c.name+"-videoEnded")
}}},_errorAction:function(c){c.self._trackEvent("videoPlayerError",{videoId:c.options.trackingOptions.videoId,contentType:c.options.trackingOptions.contentType,errorDescription:c.player.error()})
},_hoverAction:function(d){var c=0;
d.playerObj.mouseenter(function(f){d.player.addClass("prompt-pause");
c=setTimeout(function(){d.player.removeClass("prompt-pause")
},2000)
}).mouseleave(function(){d.player.removeClass("prompt-pause");
clearTimeout(c)
})
},_initAction:function(c){this._pageSettings(c);
this._userSettings(c);
this._addControls(c);
c.player.addClass("vjs-waiting").removeClass("vjs-paused");
this._loadVideo(c);
this._hoverAction(c);
if(c.options.videoOptions.inView){this._bindStartCountdownEvents(c)
}if(b("body").hasClass("desktop")){this._playerHelpAction(c)
}},_initNielsenBCPlugin:function(c){var d=b.extend({apid:(((window.digitalData||{}).vendor||{}).Nielsen||{}).apid||"",apn:c.player.player().bcAnalytics.settings.playerName},c.options.pluginOptions.nielsenBC.params,window._ffxNielsenBCParams||{});
if(d.apid&&(typeof c.player.NielsenBC!=="undefined")){c.player.NielsenBC(d)
}},_loadedMetaDataAction:function(c){if(c.firstVideo){c.firstVideo=false;
if(c.options.videoOptions.hasCountDown){c.countDownTimer.init(true)
}else{if(c.options.videoOptions.autoPlay){c.player.play();
c.lastProgress=0
}else{c.playerObj.addClass("vjs-paused").removeClass("vjs-waiting")
}}}},_loadVideo:function(d){if(d.isMobile){var c=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;
if(!c){d.module.find(".videojs-mobile-overlay").remove();
d.module.find(".videojs-mobile-container").css("left","0")
}else{if(d.options.videoPoster){d.module.find(".videojs-mobile-overlay img").attr("src",d.options.videoPoster)
}}}if(d.firstVideo){this._registerEvents(d);
if(!d.isMobile){this._showOverlay(d,d.module.find("."+d.options.overlayOptions.overlayLayoutClass).html(),function(){var e="click."+d.name;
d.module.find("."+d.options.overlayOptions.playControlClass).on(e,function(f){if(!(b(f.target).hasClass("vjs-start__cancel"))){b(".vjs-settings-control").removeClass("selected");
d.player.play();
d.lastProgress=0
}});
d.module.find("."+d.options.overlayOptions.pauseControlClass).on(e,function(f){b(".vjs-settings-control").removeClass("selected");
d.player.pause()
});
d.module.find(".vjs-ended__cancel").on(e,function(){b(this).closest(".vjs-ended-container").toggleClass("vjs-ended--cancelled");
d.player.removeClass("vjs-countdown");
d.countDownTimer.clearTimer()
});
d.module.find(".vjs-start__cancel").on(e,function(){d.self._trackEvent("videoStopAutoPlay",d.options.trackingOptions);
d.player.pause().removeClass("vjs-waiting").removeClass("vjs-countdown").addClass("vjs-paused");
d.countDownTimer.clearTimer()
});
d.module.find(".replay--trigger").on(e,function(){d.self._trackEvent("videoReplay",d.options.trackingOptions);
d.player.currentTime(0);
d.player.play()
})
})
}}else{if(d.options.upNext.location){document.location.href=d.options.upNext.location
}else{}d.lastProgress=0
}},_mobilePlayAction:function(c){c.module.find("> figure").removeClass("vjs-mobile-ended").addClass("vjs-mobile-playing");
c.player.play();
c.lastProgress=0;
c.countDownTimer.clearTimer()
},_pauseAction:function(d){if(d.player.currentTime().toFixed(1)!=d.player.duration().toFixed(1)&&d.player.currentTime().toFixed(1)!=0){var c=d.player.currentTime()/d.player.duration()*100;
d.self._trackEvent("videoPause",{videoPercentComplete:""+c,videoTimeComplete:""+d.player.currentTime()},d.options.trackingOptions)
}},_playAction:function(c){if(c.player.currentTime()!==0){c.self._trackEvent("videoResume",c.options.trackingOptions)
}else{if(parseInt(c.player.currentTime())===parseInt(c.player.duration())){c.self._trackEvent("videoReplay",c.options.trackingOptions);
c.player.currentTime(0);
c.player.play();
return
}}c.player.removeClass("vjs-waiting").removeClass("vjs-countdown");
c.playerObj.find(".vjs-ended--cancelled").removeClass("vjs-ended--cancelled");
c.countDownTimer.clearTimer()
},_playerHelpAction:function(c){b(".modal--help").fmPopupOverlayWrapper({popupOptions:{backgroundactive:false,closeelement:".modal__close, .modal__close-link",opacity:0.7}});
c.playerObj.find(".help--trigger").on("click."+c.name,function(d){d.preventDefault();
b(".modal--help").fmPopupOverlayWrapper("show")
})
},_registerEvents:function(c){c.player.on("ended",function(){c.self._endedAction(c)
}).on("error",function(){c.self._errorAction(c)
}).on("loadedmetadata",function(){c.self._loadedMetaDataAction(c)
}).on("pause",function(){c.self._pauseAction(c)
}).on("play",function(){c.self._playAction(c)
}).on("timeupdate",function(){c.self._timeUpdateAction(c)
}).on("adstart",function(d){c.self._adStartAction(c)
}).on("adend",function(d){c.self._adEndAction(c)
}).on("adskip",function(){c.self._adSkipAction(c)
});
c.module.on("click."+c.name,".videojs-mobile-overlay",function(){c.self._mobilePlayAction(c)
})
},_bindStartCountdownEvents:function(c){b(document).on("mousemove."+c.name+" focus."+c.name,d);
b(window).on("scroll."+c.name+" resize."+c.name,d);
function d(){var e=c.module.find(".vjs-start__cancel");
if(e.length&&b.inviewport(e,{threshold:0})){c.countDownTimer.startTimer();
b(document).off("."+c.name);
b(window).off("."+c.name);
c.options.videoOptions.inView=false
}}},_showOverlay:function(d,f,e){if(d.player.hasClass("vjs-hasOverlay")){console.log("Error, player has overlay")
}else{var c=document.createElement("div");
c.className="vjs-overlay";
if(typeof f==="string"){c.innerHTML=f
}else{c.appendChild(f)
}d.player.el().appendChild(c);
d.player.addClass("vjs-hasOverlay");
e()
}},_timeUpdateAction:function(d){var c=d.player.currentTime()/d.player.duration()*100;
if(d.lastProgress==0&&!d.playTriggered){d.self._trackEvent("videoPlay",d.options.trackingOptions);
d.playTriggered=true
}else{if(d.lastProgress<25&&c>=25){d.self._trackEvent("videoMilestone25",d.options.trackingOptions)
}else{if(d.lastProgress<50&&c>=50){d.self._trackEvent("videoMilestone50",d.options.trackingOptions)
}else{if(d.lastProgress<75&&c>=75){d.self._trackEvent("videoMilestone75",d.options.trackingOptions)
}}}}d.lastProgress=c
},_adStartAction:function(c){c.self._trackEvent("videoAdStart",c.options.trackingOptions);
c.hasAd=true;
c.self._includeAdMessageToVideoControl(c)
},_adEndAction:function(c){if(!c.isAdFinished){c.self._trackEvent("videoAdEnd",c.options.trackingOptions);
c.isAdFinished=true;
c.playerObj.find(".vjs-ad-control-bar .vjs-ad-message").remove()
}},_adSkipAction:function(c){c.self._trackEvent("videoAdSuppressed",c.options.trackingOptions);
c.isAdFinished=true
},_trackEvent:function(e,f,d){try{digitalData.events.push(b.extend({event:e,type:"analytics"},f||{},d||{}))
}catch(c){console.log(c)
}},_includeAdMessageToVideoControl:function(c){if(c.playerObj.find(".vjs-ad-control-bar .vjs-ad-message").length==0){b('<div class="vjs-ad-message"><div class="vjs-control-content"><span class="vjs-control-text">Advertisement</span></div></div>').appendTo(c.playerObj.find(".vjs-ad-control-bar"))
}},_preDestroy:function(c,d){d.module.find("."+d.options.overlayOptions.playControlClass+", ."+d.options.overlayOptions.pauseControlClass+", .vjs-ended__cancel, .vjs-start__cancel, .replay--trigger").off("."+d.name);
d.playerObj.find(".help--trigger").off("."+d.name);
d.module.off("."+d.name);
b(document).off("."+d.name);
b(window).off("."+d.name);
b(d.player.controlBar.el()).find(".vjs-control").remove();
d.playerObj.find(".vjs-ad-control-bar .vjs-ad-message").remove();
d.player.dispose()
}})
})(jQuery);
/*!
 * hoverIntent v1.8.0 // 2014.06.29 // jQuery v1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */
(function(a){a.fn.hoverIntent=function(m,d,h){var j={interval:100,sensitivity:6,timeout:0};
if(typeof m==="object"){j=a.extend(j,m)
}else{if(a.isFunction(d)){j=a.extend(j,{over:m,out:d,selector:h})
}else{j=a.extend(j,{over:m,out:m,selector:d})
}}var l,k,g,f;
var e=function(n){l=n.pageX;
k=n.pageY
};
var c=function(o,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);
if(Math.sqrt((g-l)*(g-l)+(f-k)*(f-k))<j.sensitivity){a(n).off("mousemove.hoverIntent",e);
n.hoverIntent_s=true;
return j.over.apply(n,[o])
}else{g=l;
f=k;
n.hoverIntent_t=setTimeout(function(){c(o,n)
},j.interval)
}};
var i=function(o,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);
n.hoverIntent_s=false;
return j.out.apply(n,[o])
};
var b=function(p){var o=a.extend({},p);
var n=this;
if(n.hoverIntent_t){n.hoverIntent_t=clearTimeout(n.hoverIntent_t)
}if(p.type==="mouseenter"){g=o.pageX;
f=o.pageY;
a(n).on("mousemove.hoverIntent",e);
if(!n.hoverIntent_s){n.hoverIntent_t=setTimeout(function(){c(o,n)
},j.interval)
}}else{a(n).off("mousemove.hoverIntent",e);
if(n.hoverIntent_s){n.hoverIntent_t=setTimeout(function(){i(o,n)
},j.timeout)
}}};
return this.on({"mouseenter.hoverIntent":b,"mouseleave.hoverIntent":b},j.selector)
}
})(jQuery);
/*!
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;
$.throttle=a=function(e,f,j,i){var h,d=0;
if(typeof f!=="boolean"){i=j;
j=f;
f=c
}function g(){var o=this,m=+new Date()-d,n=arguments;
function l(){d=+new Date();
j.apply(o,n)
}function k(){h=c
}if(i&&!h){l()
}h&&clearTimeout(h);
if(i===c&&m>e){l()
}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)
}}}if($.guid){g.guid=j.guid=j.guid||$.guid++
}return g
};
$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)
}
})(this);
(function(b){var a="fm-shortener";
b.FMPlugin.createPlugin({name:a,defaultOptions:{contentWrapper:"<span></span>",hiddenClass:"hidden",includeReadMoreButton:true,maximumContentLength:200,readMoreButtonClass:"read-more",readMoreButtonLessText:"read less",readMoreButtonMoreText:"read more",shortContentClass:"short-comment",triggers:"click"},_postAttach:function(d,e){var c=this;
this._shortenContent(d,e);
if(e.options.includeReadMoreButton){b.each(e.options.triggers.split(" "),function(g,f){d.on(f+"."+c.name,"a."+e.options.readMoreButtonClass,{inst:e},c._toggleContent)
})
}},disable:function(c){},enable:function(c){},_getShortenedContent:function(j,f){var l=j.substr(0,f.options.maximumContentLength);
if(j.indexOf("<")>=0){var d="";
var c=0;
var g=0;
var k=false;
var h=[];
var e=null;
for(;
c<=f.options.maximumContentLength;
g++){if((j[g]=="<")&&(!k)){k=true;
e=j.substring((g+1),j.indexOf(">",g));
if(e[0]=="/"){if(e!="/"+h[0]){console.log("Unable to determine closing tag for currently open tag")
}else{h.shift()
}}else{if(e.toLowerCase()!="br"){h.unshift(e)
}}}if((k)&&(j[g]==">")){k=false
}if(k){d+=j.charAt(g)
}else{d+=j.charAt(g);
c++
}}d=d.replace(/,+$/,"");
d+=" ... ";
var i=0;
for(;
i<h.length;
i++){d+="</"+h[i]+">"
}l=d
}else{l+=" ... "
}return l
},_shortenContent:function(f,g){if(f.text().length>g.options.maximumContentLength){var e=f.html();
var c=b(g.options.contentWrapper,{"class":g.options.shortContentClass,"data-short-content":true,html:this._getShortenedContent(e,g)});
var h=b(g.options.contentWrapper,{"class":g.options.hiddenClass,"data-long-content":true,html:e});
f.empty().append(c).append(h);
if(g.options.includeReadMoreButton){var d=b("<a></a>",{"class":g.options.readMoreButtonClass,href:"javascript:;",html:g.options.readMoreButtonMoreText});
f.append(d)
}}},_toggleContent:function(f){f.preventDefault();
f.stopPropagation();
var c=b(this);
var d=f.data.inst;
if(c.data("more")){c.html(d.options.readMoreButtonMoreText);
c.removeData("more")
}else{c.html(d.options.readMoreButtonLessText);
c.data("more",true)
}c.parent().find('[data-short-content="true"]').toggleClass(d.options.hiddenClass);
c.parent().find('[data-long-content="true"]').toggleClass(d.options.hiddenClass)
},_preDestroy:function(c,d){c.off("."+this.name,"a."+d.options.readMoreButtonClass);
var e=c.find('[data-long-content="true"]').html();
c.empty().append(e)
}})
})(jQuery);
(function(b){var a="fm-sticky-navigation";
b.FMPlugin.createPlugin({name:a,defaultOptions:{bodyPaddingTop:false,headerOffset:0,headerHeightSelectors:".header-wrap",persistentOffClass:"persistent-off",persistentOnClass:"persistent-on",semiPersistentNavigation:false,semiPersistentOnClass:"semi-persistent-on",showPersistentDelay:200,showWhileScrolling:true},_postAttach:function(d,e){var c=this;
e.headerHeight=e.options.headerOffset;
if(e.options.bodyPaddingTop){e.headerOrigHeight=0
}b(e.options.headerHeightSelectors).each(function(g,f){e.headerHeight+=b(f).outerHeight(true);
if(e.options.bodyPaddingTop){e.headerOrigHeight+=b(f).outerHeight(true)
}});
e.semiPersistentScrollTop=0;
if(e.options.showWhileScrolling){b(window).on("scroll."+e.elemId,{inst:e,self:c},b.throttle(e.options.showPersistentDelay,function(){c._persistentNavigation(e,c)
}))
}else{b(window).on("scroll."+this.name,{inst:e,self:c},b.debounce(e.options.showPersistentDelay,function(){c._persistentNavigation(e,c)
}))
}},disable:function(c){var d=this._getInst(c);
d.disabled=true
},enable:function(c){var d=this._getInst(c);
d.disabled=false
},_persistentNavigation:function(e,d){if(e.disabled){return
}var c=b(window).scrollTop();
if(c>=e.headerHeight){d._showPersistentNavigation(d,e)
}else{d._hidePersistentNavigation(e)
}if(e.options.semiPersistentNavigation){d._semiPersistentNavigation(e)
}},_hidePersistentNavigation:function(c){c.semiPersistentScrollTop=0;
if(c.options.bodyPaddingTop){b("body").css("padding-top","")
}b("body").removeClass(c.options.persistentOffClass).removeClass(c.options.persistentOnClass).removeClass(c.options.semiPersistentOnClass);
c.elem.trigger(c.name+"-persistentNavigationHidden")
},_hideSemiPersistentNavigation:function(c){b("body").removeClass(c.options.semiPersistentOnClass);
c.elem.trigger(c.name+"-semiPersistentNavigationHidden")
},_semiPersistentNavigation:function(d){var c=b(window).scrollTop();
if(c>=d.headerHeight){if(c<d.semiPersistentScrollTop){this._showSemiPersistentNavigation(d)
}else{this._hideSemiPersistentNavigation(d)
}d.semiPersistentScrollTop=c
}},_showPersistentNavigation:function(c,d){if(!b("body").hasClass(d.options.persistentOnClass)){if(d.options.bodyPaddingTop){b("body").css("padding-top",d.headerOrigHeight)
}b("body").addClass(d.options.persistentOffClass).clearQueue().delay(d.options.showPersistentDelay).queue(function(f){b(this).removeClass(d.options.persistentOffClass).addClass(d.options.persistentOnClass);
var e=b(window).scrollTop();
if(e<d.headerHeight){c._hidePersistentNavigation(d)
}f()
});
d.elem.trigger(d.name+"-persistentNavigationShown")
}},_showSemiPersistentNavigation:function(c){b("body").addClass(c.options.semiPersistentOnClass);
c.elem.trigger(c.name+"-semiPersistentNavigationShown")
},_preDestroy:function(c,d){b(window).off("."+this.name);
b("body").removeClass(d.options.persistentOffClass).removeClass(d.options.persistentOnClass).removeClass(d.options.semiPersistentOnClass)
}})
})(jQuery);
(function(b){var a="fm-toggle";
b.FMPlugin.createPlugin({name:a,defaultOptions:{animationDuration:200,animationInitiallyHidden:true,animationStyle:"",toggleClass:"is-visible",toggleClickOutside:false,toggleContentSelector:".navigation-wrap",toggleEventDelay:0,toggleHideOnlyContentSelector:".toggle__hide__only",toggleShowOnlyContentSelector:".toggle__show__only",toggleTrigger:false,toggleTriggerClass:"",toggleTriggerHTML:"",toggleTriggerSelector:"",triggers:"click"},_instSettings:function(d,c){return{content:b(c.toggleContentSelector),hideOnlyContent:b(c.toggleHideOnlyContentSelector),showOnlyContent:b(c.toggleShowOnlyContentSelector)}
},_postAttach:function(d,e){var c=this;
c._addUniqueId(d);
e.elemId=d.attr("id");
e.originalTriggerHTML=d.html();
b.each(e.options.triggers.split(" "),function(g,f){d.on(f+"."+c.name,e.options.toggleTriggerSelector,{inst:e,self:c},c._toggleContent)
});
if((e.options.animationStyle!=="")&&(e.options.animationInitiallyHidden)){e.content.hide()
}},disable:function(c){var d=this._getInst(c);
d.disabled=true
},enable:function(c){var d=this._getInst(c);
d.disabled=false
},_hideContent:function(f){var c=f.data.self;
var d=f.data.inst;
if(!b(f.target).closest(d.elem).length&&!b(f.target).closest(d.options.toggleContentSelector).length){c._toggleContent(f)
}},_toggleContent:function(f){f.preventDefault();
var c=f.data.self;
var d=f.data.inst;
if(d.disabled){return
}if((d.options.toggleClickOutside)&&(f.type==="click")){if(d.options.animationStyle!==""){if((d.content.hasClass(d.options.toggleClass))&&(d.options.animationInitiallyHidden)){b(document).on("click."+d.elemId,{inst:d,self:c},c._hideContent)
}else{b(document).off("."+d.elemId)
}}else{if(d.content.hasClass(d.options.toggleClass)){b(document).off("."+d.elemId)
}else{b(document).on("click."+d.elemId,{inst:d,self:c},c._hideContent)
}}}c._toggleContentPre(d);
if(d.options.animationStyle!==""){if(d.content.hasClass(d.options.toggleClass)){d.content.toggleClass(d.options.toggleClass);
d.content[d.options.animationStyle+"Toggle"](d.options.animationDuration);
setTimeout(function(){c._toggleContentAnimationComplete(d)
},d.options.animationDuration)
}else{d.content[d.options.animationStyle+"Toggle"](d.options.animationDuration);
setTimeout(function(){d.content.toggleClass(d.options.toggleClass);
c._toggleContentAnimationComplete(d)
},d.options.animationDuration)
}}else{d.content.toggleClass(d.options.toggleClass);
if(d.options.toggleEventDelay){setTimeout(function(){c._toggleContentAnimationComplete(d)
},d.options.toggleEventDelay)
}else{c._toggleContentAnimationComplete(d)
}}},_toggleContentAnimationComplete:function(c){if(c.options.toggleTrigger){this._toggleTrigger(c.elem,c)
}this._toggleContentPost(c)
},_toggleContentPost:function(c){if(!c.showOnlyContent.hasClass(c.options.toggleClass)){c.showOnlyContent.addClass(c.options.toggleClass)
}c.elem.trigger(c.name+"-postToggle",[c.content[0]])
},_toggleContentPre:function(c){c.elem.trigger(c.name+"-preToggle",[c.content[0]]);
if(c.hideOnlyContent.hasClass(c.options.toggleClass)){c.hideOnlyContent.removeClass(c.options.toggleClass)
}},_toggleTrigger:function(c,d){if(d.options.toggleTriggerClass!==""){c.toggleClass(d.options.toggleTriggerClass)
}if(d.options.toggleTriggerHTML!==""){if(c.html()===d.originalTriggerHTML){c.html(d.options.toggleTriggerHTML)
}else{c.html(d.originalTriggerHTML)
}}},_preDestroy:function(c,d){b(document).off("."+d.elemId);
this._removeUniqueId(c);
c.off("."+this.name);
if(d.options.toggleTrigger){d.elem.html(d.originalTriggerHTML)
}}})
})(jQuery);
(function(d){d.fn.tabs=function(){var u=d(this);
u.each(function(){var y,w,x=d(this),v=d(".tab__nav",this).attr({role:"tablist"}),z=d(".tab__panel",this).attr({role:"tabpanel","aria-hidden":"true"});
d("li > a",v).each(function(A){y=d(this).attr("href").slice(1);
w="tab-"+d(this).attr("href").slice(1);
d(this).attr({id:w,role:"tab","aria-selected":"false",tabindex:"-1"}).parent().attr({role:"presentation"});
z.eq(A).attr("aria-labelledby",w)
});
d(this).find("li.is-selected a",v).attr({"aria-selected":"true",tabindex:"0"});
d(this).find("div.is-selected ").attr({"aria-hidden":"false"});
d("li > a",v).click(function(){var A=d(this).attr("href");
d("li > a[href="+A+"]",v).parents("ul").children().removeClass("is-selected ").children("a").attr({"aria-selected":"false",tabindex:"-1"});
d("li > a[href="+A+"]",v).parents("li").addClass("is-selected ").children("a").attr({"aria-selected":"true",tabindex:"0"});
d(".tab__panel"+A,x).parent().children(".tab__panel").removeClass("is-selected ").attr({"aria-hidden":"true"});
d(".tab__panel"+A,x).addClass("is-selected ").attr({"aria-hidden":"false"});
return false
});
v.delegate("a","keydown",function(A){if(A.keyCode==37){if(d(this).parent().prev().length!=0){d(this).parent().prev().children("a").focus().click()
}else{v.find("li:last > a").focus().click()
}}if(A.keyCode==39){if(d(this).parent().next().length!=0){d(this).parent().next().children("a").focus().click()
}else{v.find("li:first > a").focus().click()
}}})
})
};
function f(v,w){var u=0;
return function(){var y=arguments,x=this;
clearTimeout(u);
u=setTimeout(function(){v.apply(x,y)
},w)
}
}d(function(){var u=d(".widget--pinboard input.all");
u.on("ifChecked ifUnchecked",function(v){var w=d(".widget--pinboard input.check");
if(v.type=="ifChecked"){w.iCheck("check");
d(".lbl").text("Unselect all")
}else{w.iCheck("uncheck");
d(".lbl").text("select all")
}});
d(".widget--pinboard input.check").on("ifChanged",function(v){var w=d(".widget--pinboard input.check");
if(w.filter(":checked").length==w.length){u.prop("checked","checked");
d(".lbl").text("select all")
}else{u.removeProp("checked");
d(".lbl").text("select all")
}u.iCheck("update")
})
});
var l;
var p=d(".masthead-wrap").height();
var b=d(".network-strip").height();
d(window).scroll(function(){clearTimeout(l);
if((d(window).height()+d(window).scrollTop())>=d(document).height()){d("body").addClass("is-at-bottom")
}else{d("body").removeClass("is-at-bottom")
}});
if(!document.addEventListener){document.attachEvent("DOMSubtreeModified",f(function(){h()
},50),false)
}else{document.addEventListener("DOMSubtreeModified",f(function(){h()
},50),false)
}d(".ddown .ddown__trigger").click(function(u){if(d(this).parent().parent().parent().hasClass("panel--expandable")){if(d(this).parent("li").hasClass("show")){d(this).parent("li").removeClass("show");
return false
}d(this).parent().parent().parent().find(".ddown").removeClass("show")
}if(d(this).parent().parent().parent().hasClass("nav--primary")){return false
}d(this).parent().toggleClass("show").siblings().removeClass("show");
d(this).parent().removeClass("tip");
u.stopPropagation();
d("body").on("click",e)
});
setTimeout(function(){if(d(".article__live-toggle").length===0||!d(window.location.hash).offset()){return
}var u=0;
if(d(window.location.hash).offset().top>d(document).height()-d(window).height()){u=d(document).height()-d(window).height()-d(".masthead-wrap").height()
}else{u=d(window.location.hash).offset().top-d(".masthead-wrap").height()
}d("html,body").animate({scrollTop:u},0,"swing")
},1000);
d(".article__live-toggle").bind("mouseup",function(u){$liveInd=d(".article--live");
$liveInd.toggleClass("is-live");
if($liveInd.hasClass("is-live")){$liveInd.find(".article__live-note").text($liveInd.find(".article__live-note").attr("data-on-text"))
}else{$liveInd.find(".article__live-note").text($liveInd.find(".article__live-note").attr("data-off-text"))
}});
d(".nav--primary .ddown .ddown__trigger").keyup(function(u){if(u.keyCode==13){d(this).parent().toggleClass("show").siblings().removeClass("show")
}});
d(".nav--primary .ddown").hover(function(u){d(this).toggleClass("show").siblings().removeClass("show");
d(this).removeClass("tip")
});
d(".subindex--article .tools__sort .ddown__content button").click(function(u){d(this).parent().parent().parent().first("a").find("span").text(d(this).text());
if(d(this).text().toLowerCase()=="latest"){d("#postSort").val("Latest").trigger("change");
console.log("search sort :: change state :: oldest")
}else{d("#postSort").val("Oldest").trigger("change");
console.log("search sort :: change state :: default - latest")
}});
d(".ddown__content .ddown__hover").hoverIntent({over:function(){var v=d(this).parent(".ddown__content"),u=v.height(),x=d(this).find("ul"),w=x.find("li").length*28;
d(this).addClass("hover");
if(w>u){v.height(w+"px")
}},out:function(){d(this).parent(".ddown__content").height("auto");
d(this).removeClass("hover")
},timeout:200});
d(".ddown__content .ddown__hover > a").focus(function(){d(this).parent(".ddown__hover").addClass("hover")
});
function e(){d(".ddown").removeClass("show");
d("body").off("click",e)
}d(".story__btn, .article__btn").click(function(){d(this).parent().toggleClass("open")
});
d(".strip--expandable__btn").click(function(){d(this).parent().parent().toggleClass("open");
d("body").toggleClass(d(this).attr("data-trigger-body"))
});
d(".panel--expandable__btn").click(function(){d(this).parent().toggleClass("open");
if(d(".panel--expandable").hasClass("open")){d(".panel--expandable__btn em").text("less")
}else{d(".panel--expandable__btn em").text("more")
}});
d(".tools__search, .widget--search .widget__header .btn").click(function(){d(".ddown").removeClass("show")
});
d(".tools__pinboard, .widget--pinboard .widget__header .btn").click(function(){if(d("body").hasClass("saved-search-visible")){d("body").removeClass("saved-search-visible")
}d("body").toggleClass("pinboard-visible");
d(".ddown").removeClass("show")
});
d(".saved__btn").click(function(){d(this).parent().parent().toggleClass("edit");
d(".saved__txtbox").val(d(".saved__txt").html())
});
d("#letter").on("focus",function(){d(this).closest("form").addClass("expanded")
});
d(".result__btn").click(function(){d(this).parent().toggleClass("show")
});
function q(z){var x=d(z);
var v=x.data("desired-width");
var A=x.data("initial-width");
var w=Math.round(v);
var y=(w/A);
var u=(x.data("initial-height")*y);
x.css("-moz-transform","scale("+y+")");
x.css("-o-transform","scale("+y+")");
x.css("-webkit-transform","scale("+y+")");
x.css("transform","scale("+y+")");
if(y>1){x.attr("height",u*y)
}else{x.attr("height",x.data("initial-height"))
}x.parent().css("max-height",u+"px")
}setTimeout(function(){d(".media--infograph>iframe").each(function(){d(this).data("desired-width",d(this).parent().width());
d(this).data("initial-width",d(this).attr("width"));
d(this).data("initial-height",d(this).attr("height"));
q(this)
})
},1000);
d(".tabs").tabs();
d("img[class*=lazy]").attr("src","data:image/gif;base64,R0lGODlhAQABAJEAAAAAAP////Ly8v///yH5BAEAAAMALAAAAAABAAEAAAICVAEAOw==");
d("img[class*=lazy][src]").each(function(){this.style.opacity=1
});
d("img[class*=lazy]").unveil(400,function(){d(this).load(function(){this.style.opacity=1
})
});
function i(){var w=navigator.appName,v=navigator.userAgent,u;
var x=v.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
if(x&&(u=v.match(/version\/([\.\d]+)/i))!=null){x[2]=u[1]
}x=x?[x[1],x[2]]:[w,navigator.appVersion,"-?"];
return x[0]
}var s=i();
if(s=="MSIE"||s=="Netscape"){d("html").addClass("gte9")
}d(".search .main .results__list").highlight("Patts");
d(window).load(function(){if(d("body").hasClass("subindex--article")||d("body").hasClass("subindex--article-lifestyle")){var w;
if(d("body").hasClass("subindex--article-lifestyle")){w=d(".article__content").outerHeight()
}else{w=d(".article__body").outerHeight()
}w=w+d(".article > .social").outerHeight()+d(".article > .topic-labels").outerHeight()+d(".article > .article-source").outerHeight();
var u=d(".aside > .article-right-rail").outerHeight(true)+d(".aside > .article-related").outerHeight(true);
if(w>d(".aside").outerHeight()){d(".aside").height(w);
var v=w-u;
if(v>650){d(".ad-container").height(v);
d("#ad-sticky-pos-1 .adWrapper").fmStickyElement({content:"#ad-sticky-pos-1",reserved:100})
}}}});
d("input").not(".onoffswitch-checkbox").iCheck({checkboxClass:"icheckbox_minimal",radioClass:"iradio_minimal",increaseArea:"20%",inheritClass:true});
d(".media--gallery-thumbs").flexslider({animation:"slide",controlNav:false,animationLoop:false,slideshow:false,itemWidth:100,itemMargin:1,asNavFor:".media--gallery-slides",prevText:"<span class='icon--chevron-left'>View previous</span>",nextText:"<span class='icon--chevron-right'>View next</span>",start:function(u){if(u.count*u.itemW<d(".media--gallery-thumbs").width()){d(".media--gallery-thumbs .flex-direction-nav").hide()
}}});
d(".media--gallery-slides").flexslider({animation:"slide",animationSpeed:400,controlNav:false,animationLoop:false,slideshow:false,touch:true,sync:".media--gallery-thumbs",prevText:"<div><span class='icon--chevron-left secondary'>View previous</span></div>",nextText:"<div><span class='icon--chevron-right secondary'>View next</span></div>",start:function(u){d(u).find(".media__counter .media__counter--total-slides").text(u.count);
d(u).find(".media__counter .media__counter--current-slide").text(u.currentSlide+1);
d(".flex-direction-nav li:last-child").addClass("in");
d(".media--gallery-slides").attr("data-first-slide","true")
},before:function(u){d(".flex-direction-nav li").each(function(v,w){if(!d(w).hasClass("in")){d(w).addClass("in")
}});
d(u).attr("data-is-animate","true");
if(u.animatingTo==0){d(".flex-direction-nav li:first-child").removeClass("in");
d(".media--gallery-slides").attr("data-first-slide","true")
}else{d(".media--gallery-slides").attr("data-first-slide","false")
}},after:function(u){d(u).find(".media__counter .media__counter--current-slide").text(u.currentSlide+1);
d(u).attr("data-is-animate","false")
},end:function(u){if(d(".flex-direction-nav li:last-child").hasClass("in")){d(".flex-direction-nav li:last-child").removeClass("in")
}}});
if(d(".panel--single-slider .slide").length>1){d(".panel--single-slider").flexslider({animation:"slide",slideshow:false,prevText:'<span class="btn btn--tertiary btn--cerulean btn--icon--chevron-left">View previous</span>',nextText:'<span class="btn btn--tertiary btn--cerulean btn--icon--chevron-right">View next</span>',})
}var c=d(".story__truncate");
var j=200;
var a=c.html();
if(a){var m=a.substr(0,j);
a=m+'<span class="hidden">'+a.substr(j,a.length)+"</span>";
c.html(a)
}var r=d(".article__header").outerHeight(true);
var n=d(".article__body .social").outerHeight(true);
if(d(".main > .article").hasClass("article--live")){r+=d(".article__status").outerHeight(true)+d(".article__live-note").outerHeight(true)
}d(".subindex--article .aside, .subindex--gallery .aside").css({"margin-top":r+n+4+"px"});
if(d("body").hasClass("subindex--article-lifestyle")){var r=d(".article__header").outerHeight(true);
var n=d(".article__body .social").outerHeight(true);
var k=d(".standfirst").outerHeight(true);
var o=d(".full-width figcaption").outerHeight(true);
d(".aside").css({"margin-top":r+n+k+o+559+"px"})
}var t=690;
function h(){var w=d(".content").outerHeight();
if(w<t){w=t
}var v=d(".widget--pinboard").outerHeight();
var u=d(".widget--search").outerHeight();
d(".widget--pinboard").height(w-25);
d(".widget--pinboard .results .tabs").height(w-105)
}h();
d("section[class*=strap--lifestyle] .story:not(.story--overlay)").each(function(u){d(this).find(".story__wof p").fmShortener({includeReadMoreButton:false,maximumContentLength:140,hiddenClass:"is-vishidden"})
});
d("ul.byline").each(function(){if(d(this).has("li").length===0){d(this).remove()
}});
var g=d(".subindex--article .main figure:not([data-fm-video-player-inline],[data-fm-video-player-inline-playlist],[data-fm-video-player-stand-alone],[data-fm-video-player-up-next]) .video-js, #content .story--hero figure:not([data-fm-video-player-inline],[data-fm-video-player-inline-playlist],[data-fm-video-player-stand-alone],[data-fm-video-player-up-next]) .video-js, #content .story--defcon figure:not([data-fm-video-player-inline],[data-fm-video-player-inline-playlist],[data-fm-video-player-stand-alone],[data-fm-video-player-up-next]) .video-js, .panel--video figure:not([data-fm-video-player-inline],[data-fm-video-player-inline-playlist],[data-fm-video-player-stand-alone],[data-fm-video-player-up-next]) .video-js, #footer figure:not([data-fm-video-player-inline],[data-fm-video-player-inline-playlist],[data-fm-video-player-stand-alone],[data-fm-video-player-up-next]) .video-js, .marketing-strip figure:not([data-fm-video-player-inline],[data-fm-video-player-inline-playlist],[data-fm-video-player-stand-alone],[data-fm-video-player-up-next]) .video-js");
if(g.length>0){g.fmBrightcovePlayer({videoOptions:{autoPlay:false,hasCountDown:false},playerControls:{enlarge:true,location:true,settings:true,star:false}})
}g=d(".subindex.single-col #content figure:not([data-fm-video-player-inline],[data-fm-video-player-inline-playlist],[data-fm-video-player-stand-alone],[data-fm-video-player-up-next]) .video-js");
if(g.length>0){g.fmBrightcovePlayer({videoOptions:{autoPlay:false,hasCountDown:false},playerControls:{enlarge:false,settings:true,star:true}})
}d(".btn--icon--search").on("click",function(){d("#top-search").focus()
});
d(".tools__pinboard").on("click",function(){d(".widget--pinboard .widget__controls input").focus()
});
d(".nav--global .icon--menu--before").on("click",function(){setTimeout(function(){d(".nav--slideout .btn--icon--close").focus()
},300)
});
d(".nav--slideout .btn--icon--close").on("click",function(){d(".nav--global .icon--menu--before").trigger("click")
});
if(d(".related-quotes").next(":empty").length){d(".panel--related-quotes").css({"float":"none",margin:"0 auto 20px"})
}d(".header-wrap").fmStickyNavigation({bodyPaddingTop:true});
d(".drop-down-wrap button, .drop-down-wrap a").fmToggle({toggleContentSelector:".drop-down-wrap .modal",toggleEventDelay:300,triggers:"focus blur",});
d(".nav--global .icon--menu--before").fmToggle({toggleContentSelector:".nav--slideout",toggleEventDelay:300,triggers:"click",toggleClickOutside:true});
d(".nav--global .nav__item--primary.has-subnav").each(function(u){d(".nav--global .has-subnav:eq("+u+") a").fmToggle({toggleContentSelector:".nav--global .nav__menu--secondary:eq("+u+")",toggleEventDelay:300,triggers:"focus blur",})
});
d(".nav__item--primary.has-subnav-sitelist a").fmToggle({toggleContentSelector:".nav--sitelist",toggleEventDelay:300,triggers:"focus blur",});
d(".btn--icon--search").fmToggle({toggleContentSelector:".top-search",toggleEventDelay:300,triggers:"click",toggleClickOutside:true})
}(jQuery));
function customPopUp(c,b,a){window.open(c.href,"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height="+b+",width="+a)
}(function(d,a){var c=function(){};
var b=function(){if(d("body").hasClass("cq-wcm-edit")){return false
}return true
};
c.load=function(){if(b){a.initialSlide()
}};
c.load();
d.extend(true,window,{FFX:{components:{btb:c}}})
})(jQuery,FFX.components.btb.Common);