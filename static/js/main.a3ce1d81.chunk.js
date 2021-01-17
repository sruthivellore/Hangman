(this["webpackJsonphangman-react"]=this["webpackJsonphangman-react"]||[]).push([[0],{56:function(e,t,a){e.exports=a(79)},76:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),o=a(48),m=a(8),s=a(87),u=a(81),i=a(82),E=a(7);var d=function(){var e=Object(E.f)();return l.a.createElement(l.a.Fragment,null,l.a.createElement("center",null,l.a.createElement(s.a,{className:"rulesCard"},l.a.createElement(s.a.Body,null,l.a.createElement(u.a,{variant:"info"},l.a.createElement(u.a.Heading,null,"Playing Hangman"),l.a.createElement("hr",null),l.a.createElement("p",null,"Hangman is an old school favorite, a word game where the goal is simply to find the missing word or words."),l.a.createElement("p",null,"You will be presented with a number of blank spaces representing the missing letters you need to find by guessing one letter at a time."),l.a.createElement("p",null,"Use the keyboard to guess a letter. If your chosen letter exists in the answer, then all places in the answer where that letter appears will be revealed."),l.a.createElement("p",null,"After you've revealed several letters, you may be able to guess what the answer is and fill in the remaining letters."),l.a.createElement("p",null,"Be warned, every time you guess a letter wrong you loose a life and the hangman begins to appear, piece by piece."),l.a.createElement("p",null,"Solve the puzzle before the hangman dies. Remember to keep the theme in mind \u2013 it may help you solve the puzzle!"),l.a.createElement("hr",null),l.a.createElement(i.a,{variant:"outline-info",className:"float-right",onClick:function(){e.push("/play")}}," Play ",l.a.createElement("i",{className:"pi pi-play"})," "),l.a.createElement("br",null),l.a.createElement("br",null))))))},h=function(e){var t=e.wrongLetters;return l.a.createElement("div",{className:"wrong-letters-container"},l.a.createElement("div",null,t.map((function(e,t){return l.a.createElement("span",{key:t},e)})).reduce((function(e,t){return null===e?[t]:[e,", ",t]}),null)))};var f=function(e){var t=e.wrongLetters,a=Object(n.useContext)(F);return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{className:"timerCard"},l.a.createElement(s.a.Header,null,l.a.createElement("center",null,l.a.createElement("strong",null,"Timer : ",a.time," Seconds"))),l.a.createElement(s.a.Body,{className:"timerCardBody"},l.a.createElement(u.a,{variant:"dark"},l.a.createElement("h5",null,"Welcome, ",a.name),l.a.createElement("hr",null),l.a.createElement("p",null,"All the Best....!"),l.a.createElement("center",null,l.a.createElement(i.a,{variant:"outline-info"}," Hint ",l.a.createElement("i",{className:"pi pi-question-circle"})," ")),l.a.createElement("br",null)),t.length>0&&l.a.createElement(u.a,{variant:"dark"},l.a.createElement("h6",null,"Wrong Letters"),l.a.createElement("hr",null),l.a.createElement(h,{wrongLetters:t})))))},p=function(e){var t=e.wrongLetters.length;return l.a.createElement("svg",{height:"250",width:"200",className:"figure-container"},l.a.createElement("line",{x1:"60",y1:"20",x2:"140",y2:"20"}),l.a.createElement("line",{x1:"140",y1:"20",x2:"140",y2:"50"}),l.a.createElement("line",{x1:"60",y1:"20",x2:"60",y2:"230"}),l.a.createElement("line",{x1:"20",y1:"230",x2:"100",y2:"230"}),t>0&&l.a.createElement("circle",{cx:"140",cy:"70",r:"20"}),t>1&&l.a.createElement("line",{x1:"140",y1:"90",x2:"140",y2:"150"}),t>2&&l.a.createElement("line",{x1:"140",y1:"120",x2:"120",y2:"100"}),t>3&&l.a.createElement("line",{x1:"140",y1:"120",x2:"160",y2:"100"}),t>4&&l.a.createElement("line",{x1:"140",y1:"150",x2:"120",y2:"180"}),t>5&&l.a.createElement("line",{x1:"140",y1:"150",x2:"160",y2:"180"}))},b=function(e){var t=e.selectedWord,a=e.correctLetters;return l.a.createElement("div",{className:"word"},t.split("").map((function(e,t){return console.log(a)," "===e?l.a.createElement("span",{className:"letterSpace",key:t},a.includes(e)?e:""):l.a.createElement("span",{className:"letter",key:t},a.includes(e)?e:"")})))};function v(e){e(!0),setTimeout((function(){e(!1)}),2e3)}function g(e,t,a){var n="win";return a.split("").forEach((function(t){e.includes(t)||(n="")})),6===t.length&&(n="lose"),n}var y=function(e){var t=e.correctLetters,a=e.wrongLetters,r=e.selectedWord,c=e.setPlayable,o=e.playAgain,m="",s="",u=!0,i=Object(n.useContext)(F);return"win"===g(t,a,r)?(m="Congratulations! You won! \ud83d\ude03",u=!1,i.setNum(0)):"lose"===g(t,a,r)&&(m="Unfortunately you lost. \ud83d\ude15",s="...the word was: ".concat(r),u=!1,i.setNum(0)),Object(n.useEffect)((function(){c(u)})),l.a.createElement("div",{className:"popup-container",style:""!==m?{display:"flex"}:{}},l.a.createElement("div",{className:"popup"},l.a.createElement("h2",null,m),l.a.createElement("h3",null,s),l.a.createElement("button",{onClick:o},"Play Again")))},w=function(e){var t=e.showNotification;return l.a.createElement("div",{className:"notification-container ".concat(t?"show":"")},l.a.createElement("p",null,"You have already entered this letter"))},O=(a(66),a(53)),j=a(54),N=a.n(j);var x=function(){var e=Object(n.useContext)(F),t=Object(n.useState)(0),a=Object(m.a)(t,2);return a[0],a[1],l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Your Current Score :   ",l.a.createElement("span",{className:"setScoreFont"},l.a.createElement("strong",null,l.a.createElement(N.a,{start:e.pscore,end:e.score,duration:1})))))};var C=function(e){Object(n.useContext)(F);var t=e.state.map((function(e,t){return function(e,t){var a=String.fromCharCode(65+t),n=e?"alphButEnable":"alphButDisable";return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.Button,{label:a,className:n}))}(e,t)}));return l.a.createElement("div",null,l.a.createElement("div",{className:"alphabetList"},l.a.createElement(s.a,{bg:"light",key:"1",text:"dark",style:{width:"15.5rem"}},l.a.createElement(s.a.Header,{className:"alphaCard"},l.a.createElement(x,null)),l.a.createElement(s.a.Body,{className:"alphaCard1"},l.a.createElement(u.a,{variant:"dark"},l.a.createElement("center",null,"Alphabet List",l.a.createElement("hr",null),t))))))},k=a(83),L=a(84);var S=function(){var e=Object(n.useContext)(F),t=Object(n.useState)(null==e.name),a=Object(m.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(null),s=Object(m.a)(o,2),d=s[0],h=s[1],f=Object(E.f)();return l.a.createElement("div",null,l.a.createElement(k.a,{show:r,backdrop:"static",keyboard:!1},l.a.createElement(k.a.Header,null,l.a.createElement(k.a.Title,null,"Welcome to Hangman")),l.a.createElement(L.a,null,l.a.createElement(k.a.Body,null,l.a.createElement(u.a,{variant:"info"},l.a.createElement(L.a.Group,{controlId:"formGridName"},l.a.createElement(L.a.Label,null,"Name"),l.a.createElement("input",{type:"text",class:"form-control",id:"name",placeholder:"Enter your Name",name:"name",onChange:function(e){return h(e.target.value)}})),l.a.createElement(L.a.Group,{controlId:"Theme"},l.a.createElement(L.a.Label,null,"Theme"),l.a.createElement(L.a.Control,{as:"select",defaultValue:"Choose...",required:!0},l.a.createElement("option",null,"Choose..."),l.a.createElement("option",null,"Technology"),l.a.createElement("option",null,"Social Media"))))),l.a.createElement(k.a.Footer,null,l.a.createElement(i.a,{variant:"outline-dark",onClick:function(){f.push("/")}},"Close"),l.a.createElement(i.a,{variant:"outline-info",onClick:function(){null!=d&&""!=d&&(e.setName(d),c(!1))}}," Play ")))))};var B=function(e){var t=e.state,a=e.correctLetters,n=e.wrongLetters,r=e.selectedWord,c=e.setPlayable,o=e.playAgain,m=e.showNotification;return l.a.createElement(l.a.Fragment,null,l.a.createElement(S,null),l.a.createElement("div",{className:"setAllCards"},l.a.createElement(f,{wrongLetters:n}),l.a.createElement("center",null,l.a.createElement(s.a,{className:"gameCard"},l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("h2",null,"Hangman"),l.a.createElement("br",null),l.a.createElement(s.a.Subtitle,{className:"text-muted"},"Find the hidden word - Enter a letter")),l.a.createElement("div",{className:"game-container"},l.a.createElement(p,{wrongLetters:n}),l.a.createElement(b,{selectedWord:r,correctLetters:a})),l.a.createElement("br",null),l.a.createElement("br",null))),l.a.createElement(C,{state:t}),l.a.createElement(w,{showNotification:m}),l.a.createElement(y,{correctLetters:a,wrongLetters:n,selectedWord:r,setPlayable:c,playAgain:o})))},H=a(86),P=a(85),A=(a(74),a(34)),F=(a(76),l.a.createContext()),W=["sruthi vellore"],T=W[Math.floor(Math.random()*W.length)];var I=function(){var e=Object(n.useState)(!0),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),s=Object(m.a)(c,2),u=s[0],i=s[1],h=Object(n.useState)([]),f=Object(m.a)(h,2),p=f[0],b=f[1],g=Object(n.useState)(!1),y=Object(m.a)(g,2),w=y[0],O=y[1],j=Object(n.useState)(null),N=Object(m.a)(j,2),x=N[0],C=N[1],k=Object(n.useState)(!0),L=Object(m.a)(k,2),S=L[0],I=L[1],M=Object(n.useState)(0),z=Object(m.a)(M,2),G=z[0],Y=z[1],R=Object(n.useState)(!1),q=Object(m.a)(R,2),J=q[0],U=q[1],D=Object(n.useState)(1),V=Object(m.a)(D,2),K=V[0],Q=V[1];Object(n.useEffect)((function(){-1!==T.indexOf(" ")&&i([" "])}),[]),Object(n.useEffect)((function(){if(J){var e=G<1e4&&S&&setInterval((function(){return Y(G+K)}),1e3);return console.log(e),console.log(K),function(){console.log("Calling return.."),clearInterval(e),I(!0)}}}),[G,S,J]);for(var X=[],Z=0;Z<26;Z++)X.push(!0);var $=Object(n.useState)(X),_=Object(m.a)($,2),ee=_[0],te=_[1];Object(n.useEffect)((function(){if(null!=x){var e=function(e){U(!0);var t=e.key,n=e.keyCode;if(a&&n>=65&&n<=90){!function(e){var t=ee;t[e-65]=!1,te(t)}(n);var l=t.toLowerCase();T.includes(l)?u.includes(l)?v(O):(i((function(e){return[].concat(Object(o.a)(e),[l])})),se("increment")):p.includes(l)?v(O):(b((function(e){return[].concat(Object(o.a)(e),[l])})),se("decrement"))}};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}}),[u,p,a,ee,x]);var ae=Object(n.useState)(0),ne=Object(m.a)(ae,2),le=ne[0],re=ne[1],ce=Object(n.useReducer)((function(e,t){return re(e),"increment"===t?e+5:"decrement"===t?e-3:0}),0),oe=Object(m.a)(ce,2),me=oe[0],se=oe[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(F.Provider,{value:{score:me,pscore:le,time:G,setNum:Q,name:x,setName:C}},l.a.createElement(H.a,{className:"NavBar",bg:"dark",expand:"sm",variant:"dark"},l.a.createElement(H.a.Brand,null,"Hangman Game"),l.a.createElement(H.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(H.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(P.a,{className:"mr-auto"},l.a.createElement(P.a.Link,{href:"/"}," ",l.a.createElement("i",{className:"pi pi-home"}," Rules")),l.a.createElement(P.a.Link,{href:"/play"},"Play")))),l.a.createElement(A.a,null,l.a.createElement(E.c,null,l.a.createElement(E.a,{path:"/play"},l.a.createElement(B,{state:ee,wrongLetters:p,selectedWord:T,correctLetters:u,setPlayable:r,playAgain:function(){r(!0),i([]),b([]),te(X),I(!1),Y(0),U(!1),Q(1);var e=Math.floor(Math.random()*W.length);-1!==(T=W[e]).indexOf(" ")&&i([" "])},showNotification:w})),l.a.createElement(E.a,{path:"/"},l.a.createElement(d,null))))))};a(77),a(78);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null)),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.a3ce1d81.chunk.js.map