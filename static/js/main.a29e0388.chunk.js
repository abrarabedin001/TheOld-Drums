(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(8),o=a.n(c),r=(a(14),a(2)),m=a(3),l=a(5),d=a(4),p=a(0),i=(a(7),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).pressedPower=function(){s.setState(Object(p.a)(Object(p.a)({},s.state),{},{powerOn:!s.state.powerOn}))},s.pressedBank=function(){s.setState(Object(p.a)(Object(p.a)({},s.state),{},{bankOn:!s.state.bankOn}))},s.movedSlide=function(e){s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:e.target.value,volume:e.target.value})),window.setTimeout((function(){s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:""}))}),900)},s.play=function(e){if(console.log(e.target.firstChild.nodeValue),s.state.powerOn)switch(e.target.firstChild.nodeValue){case"Q":var t="";t=s.state.bankOn?new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"):new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"),console.log(s.state.volume/100),t.volume=s.state.volume/100,t.play(),s.state.bankOn?s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Heater-1"})):s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Chord-1"}));break;case"W":var a="";(a=s.state.bankOn?new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"):new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3")).volume=s.state.volume/100,a.play(),s.state.bankOn?s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Heater-2"})):s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Chord-2"}));break;case"E":var n="";(n=s.state.bankOn?new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"):new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3")).volume=s.state.volume/100,n.play(),s.state.bankOn?s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Heater-3"})):s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Chord-3"}));break;case"A":var c="";(c=s.state.bankOn?new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"):new Audio("https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3")).volume=s.state.volume/100,c.play(),s.state.bankOn?s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Heater-4-1"})):s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Give-us-a-light"}));break;case"S":var o="";(o=s.state.bankOn?new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"):new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3")).volume=s.state.volume/100,o.play(),s.state.bankOn?s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Heater-6"})):s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Dry-Ohh"}));break;case"D":console.log("kaj kore");var r="";(r=s.state.bankOn?new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"):new Audio("https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3")).volume=s.state.volume/100,r.play(),s.state.bankOn?s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Disc-Oh"})):s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Bld-H1"}));break;case"Z":var m="";(m=s.state.bankOn?new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"):new Audio("https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3")).volume=s.state.volume/100,m.play(),s.state.bankOn?s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Kick-n-Hat"})):s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"punchy-kick-1"}));break;case"X":var l="";(l=s.state.bankOn?new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"):new Audio("https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3")).volume=s.state.volume/100,l.play(),s.state.bankOn?s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"RP4-KICK-1"})):s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"side-stick-1"}));break;case"C":var d="";(d=s.state.bankOn?new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"):new Audio("https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3")).volume=s.state.volume/100,d.play(),s.state.bankOn?s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Cev-H2"})):s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Brk-Snr"}))}},s.playKey=function(e){if(console.log(e.key),s.state.powerOn)switch(e.key){case"q":var t="";(t=s.state.bankOn?new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"):new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3")).volume=s.state.volume/100,t.play(),s.state.bankOn?s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Heater-1",letterPressed:e.key})):s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Chord-1",letterPressed:e.key}));break;case"w":var a="";(a=s.state.bankOn?new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"):new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3")).volume=s.state.volume/100,a.play(),s.state.bankOn?s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Heater-2",letterPressed:e.key})):s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Chord-2",letterPressed:e.key}));break;case"e":var n="";(n=s.state.bankOn?new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"):new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3")).volume=s.state.volume/100,n.play(),s.state.bankOn?s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Heater-3",letterPressed:e.key})):s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Chord-3",letterPressed:e.key}));break;case"a":var c="";(c=s.state.bankOn?new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"):new Audio("https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3")).volume=s.state.volume/100,c.play(),s.state.bankOn?s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Heater-4-1",letterPressed:e.key})):s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Give-us-a-light",letterPressed:e.key}));break;case"s":var o="";(o=s.state.bankOn?new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"):new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3")).volume=s.state.volume/100,o.play(),s.state.bankOn?s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Heater-6",letterPressed:e.key})):s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Dry-Ohh",letterPressed:e.key}));break;case"d":var r="";(r=s.state.bankOn?new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"):new Audio("https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3")).volume=s.state.volume/100,r.play(),s.state.bankOn?s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Disc-Oh",letterPressed:e.key})):s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Bld-H1",letterPressed:e.key}));break;case"z":var m="";(m=s.state.bankOn?new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"):new Audio("https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3")).volume=s.state.volume/100,m.play(),s.state.bankOn?s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Kick-n-Hat",letterPressed:e.key})):s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"punchy-kick-1",letterPressed:e.key}));break;case"x":var l="";(l=s.state.bankOn?new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"):new Audio("https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3")).volume=s.state.volume/100,l.play(),s.state.bankOn?s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"RP4-KICK-1",letterPressed:e.key})):s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"side-stick-1",letterPressed:e.key}));break;case"c":var d="";(d=s.state.bankOn?new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"):new Audio("https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3")).volume=s.state.volume/100,d.play(),s.state.bankOn?s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Cev-H2",letterPressed:e.key})):s.setState(Object(p.a)(Object(p.a)({},s.state),{},{display:"Brk-Snr",letterPressed:e.key}))}},s.click=function(){console.log("q")},s.putOnBody=function(e){e.target.parentNode.parentNode.parentNode.onkeypress=s.playKey},s.state={powerOn:!0,bankOn:!0,volume:10,display:"",letterPressed:""},s}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{id:"drum_machine",class:"drum_machine",onKeyPress:this.putOnBody.bind(this),tabIndex:0},n.a.createElement("h4",{class:"drum_name"},"Abrar"),n.a.createElement("div",{class:"panels_n_btns"},n.a.createElement("div",{class:"key_pads"},n.a.createElement("row",{class:"row"},n.a.createElement("button",{class:"key_button",onClick:this.play},"Q"),n.a.createElement("button",{class:"key_button",onClick:this.play},"W"),n.a.createElement("button",{class:"key_button",onClick:this.play},"E")),n.a.createElement("row",{class:"row"},n.a.createElement("button",{class:"key_button",onClick:this.play},"A"),n.a.createElement("button",{class:"key_button",onClick:this.play},"S"),n.a.createElement("button",{class:"key_button",onClick:this.play},"D")),n.a.createElement("row",{class:"row"},n.a.createElement("button",{class:"key_button",onClick:this.play},"Z"),n.a.createElement("button",{class:"key_button",onClick:this.play},"X"),n.a.createElement("button",{class:"key_button",onClick:this.play},"C"))),n.a.createElement("div",{class:"controls"},n.a.createElement("row",null,n.a.createElement("div",{class:"power",onClick:this.pressedPower.bind(this)},n.a.createElement("div",{class:"power_Control"},n.a.createElement("p",null,"Power"),n.a.createElement("div",{class:"power_button_outer"},n.a.createElement("div",{class:this.state.powerOn?"power_button_inner_right":"power_button_inner_left"}))))),n.a.createElement("row",null,n.a.createElement("div",{onKeyPressCapture:this.click,tabIndex:0},n.a.createElement("p",null,"dsfsdfsdf"))),n.a.createElement("row",null,n.a.createElement("p",{class:"the_lonely_p"},this.state.display)),n.a.createElement("row",null,n.a.createElement("input",{type:"range",min:"1",max:"100",onChange:this.movedSlide.bind(this)})),n.a.createElement("row",null,n.a.createElement("div",{class:"bank",onClick:this.pressedBank.bind(this)},n.a.createElement("div",{class:"bank_Control"},n.a.createElement("p",null,"Bank"),n.a.createElement("div",{class:"bank_button_outer"},n.a.createElement("div",{class:this.state.bankOn?"bank_button_inner_left":"bank_button_inner_right"}))))))))}}]),a}(s.Component)),u=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{class:"App"},n.a.createElement(i,null))}}]),a}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.a29e0388.chunk.js.map