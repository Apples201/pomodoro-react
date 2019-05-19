(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),s=n.n(o),i=n(3),c=n(4),u=n(6),l=n(5),m=n(7),d=(n(14),Object(a.memo)(function(e){var t=e.types,n=e.changeType,a=e.selected;return r.a.createElement("div",{className:"TypeSelect"},t.map(function(e,t){return r.a.createElement("button",{key:e.name,onClick:function(){return n(e)},className:e===a?"active":""},e.name," ",r.a.createElement("span",null,"[",t+1,"]"))}))}));function p(e){return e>9?e:"0".concat(e)}function f(e){var t=p(Math.floor(e/60)),n=p(Math.floor(e%60));return"".concat(t,":").concat(n)}n(15);var v=function(e){var t=e.time,n=e.status,a=e.progress;document.title="(".concat(f(t),") Pomodoro");var o=280*Math.PI,s=o-a/100*o;return r.a.createElement("div",{className:"TimeDisplay"},r.a.createElement("svg",{width:"100%",viewBox:"0 0 ".concat(300," ").concat(300)},r.a.createElement("circle",{stroke:"#ddd",fill:"#fff",strokeWidth:5,r:140,cx:150,cy:150}),r.a.createElement("circle",{stroke:"#D9534F",fill:"transparent",strokeWidth:5,strokeDasharray:o+" "+o,style:{strokeDashoffset:s},r:140,cx:150,cy:150})),r.a.createElement("div",null,r.a.createElement("h1",null,f(t)),r.a.createElement("p",null,n)))},h=(n(16),Object(a.memo)(function(e){var t,n=e.start,a=e.reset,o=e.pause,s=e.status;return t=s?"Finished"===s?r.a.createElement("button",{onClick:n,className:"start"},"Restart Timer"):"Paused"===s?r.a.createElement("div",null,r.a.createElement("button",{onClick:a,className:"reset"},"Reset"),r.a.createElement("button",{onClick:o,className:"resume"},"Resume")):r.a.createElement("div",null,r.a.createElement("button",{onClick:a,className:"reset"},"Reset"),r.a.createElement("button",{onClick:o,className:"pause"},"Pause")):r.a.createElement("button",{onClick:n,className:"start"},"Start Timer"),r.a.createElement("div",{className:"Controls"},t)})),g=(n(17),Object(a.memo)(function(e){var t=e.sound,n=e.toggleSound;return r.a.createElement("button",{className:"ToggleSound ".concat(t&&"active"),onClick:n,title:t?"Disable Sound":"Enable Sound"},r.a.createElement("i",{className:"fa fa-volume-".concat(t?"up":"mute")}))})),y=(n(18),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).handleKeyUp=function(e){" "===e.key?n.pauseTimer():"Escape"===e.key?n.resetTimer():e.key>=1&&e.key<=n.props.types.length&&n.changeType(n.props.types[e.key-1])},n.changeType=function(e){n.resetTimer(),n.setState({selectedType:e,time:e.time,running:!1})},n.tick=function(){if(n.state.time<=1){n.stopInterval(),n.setState({running:!1}),n.state.sound&&n.sound.play();try{navigator.serviceWorker.register("service-worker.js").then(function(e){e.showNotification("".concat(n.state.selectedType.name," finished!"))})}catch(e){console.log("Notification error",e)}}n.setState(function(e){return{time:e.time-1}})},n.stopInterval=function(){clearInterval(n.state.interval),n.setState({interval:null})},n.startTimer=function(){n.setState(function(e){return{running:!0,interval:setInterval(n.tick,1e3),time:e.time>0?e.time:e.selectedType.time}}),n.sound.pause(),n.sound.currentTime=0},n.resetTimer=function(){n.stopInterval(),n.setState(function(e){return{time:e.selectedType.time,running:!1}})},n.pauseTimer=function(){n.state.interval?n.stopInterval():n.startTimer()},n.getStatus=function(){var e=n.state,t=e.time,a=e.running,r=e.interval;return 0===t?"Finished":a&&!r?"Paused":a?"Running":void 0},n.getProgress=function(){var e=n.state.time,t=n.state.selectedType.time;return(t-e)/t*100},n.handleToggleSound=function(){n.setState(function(e){return{sound:!e.sound}},function(){window.localStorage.setItem("pomodoro-react-sound",n.state.sound)})},n.state={selectedType:e.types[0],time:e.types[0].time,interval:null,running:!1,sound:null===window.localStorage.getItem("pomodoro-react-sound")||JSON.parse(window.localStorage.getItem("pomodoro-react-sound"))},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleKeyUp),Notification.requestPermission(),this.sound=new Audio("bell.flac"),this.sound.preload="auto"}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleKeyUp)}},{key:"render",value:function(){var e=this.state,t=e.time,n=e.selectedType,a=e.sound,o=this.props.types;return r.a.createElement("div",{className:"Pomodoro"},r.a.createElement(d,{types:o,selected:n,changeType:this.changeType}),r.a.createElement(v,{time:t,status:this.getStatus(),progress:this.getProgress()}),r.a.createElement(h,{start:this.startTimer,reset:this.resetTimer,pause:this.pauseTimer,status:this.getStatus()}),r.a.createElement(g,{sound:a,toggleSound:this.handleToggleSound}))}}]),t}(a.Component));y.defaultProps={types:[{name:"Pomodoro",time:1500},{name:"Short Break",time:300},{name:"Long Break",time:900}]};var k=y;s.a.render(r.a.createElement(k,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.3122954c.chunk.js.map