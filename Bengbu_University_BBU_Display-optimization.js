// ==UserScript==
// @name         BBU流量显示优化
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  蚌埠学院BBU流量显示优化
// @author       汪布斯
// @match        http://1.1.2.3/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let flow=0;
    let flowstr=document.getElementsByTagName("p")[6].innerHTML;
    let timestr=document.getElementsByTagName("p")[5].innerHTML;
    let time=(timestr.split(': ')[1]).split("M")[0];
    time = (parseInt(time)/60).toFixed(2);
    let day = (time/24).toFixed(2);
    flowstr=(flowstr.split(': ')[1]).split(' ')[0];
    flow = parseInt(flowstr);
    flow = (flow/1024).toFixed(2);
    document.getElementsByTagName("p")[6].innerHTML='已使用流量 Used flux : '+flow+"GB";
    document.getElementsByTagName("p")[5].innerHTML='已使用时间 Used time : '+time+"小时="+day+"天";
    //已使用时间 Used time : 37823      Min
    //console.log(time);
})();
