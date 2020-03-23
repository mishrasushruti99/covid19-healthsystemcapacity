(this["webpackJsonphghi-vents"]=this["webpackJsonphghi-vents"]||[]).push([[0],{157:function(e,t,a){e.exports=a(270)},162:function(e,t,a){},163:function(e,t,a){},270:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),o=a.n(r),i=(a(162),a(45)),c=a(278),s=a(275),u=a(274),p=a(276),m=(a(163),a(164),a(165),a(97)),d=a.n(m),h=a(130),v=a(131),f=a.n(v),g=a(279),E=a(132),b=a.n(E),y=a(110),w=a(111),C=a(112),A=a(273),S=a(98),F=a.n(S),B=["Estimated No. Full-Featured Mechanical Ventilators per 100,000 Population (2010 study estimate)","Total Hospital Beds per 100,000 people (2018 population estimate)","Total ICU Beds per 100,000 people (2018 population estimate)","Available Hospital Beds per 100,000 people (2018 population estimate)","Potentially Available Hospital Beds* per 100,000 people (2018 population estimate)","Available ICU Beds per 100,000 people (2018 population estimate)","Potentially Available ICU Beds* per 100,000 people (2018 population estimate)","Estimated No. Full-Featured Mechanical Ventilators (2010 study estimate)","Total ICU Beds","Available ICU Beds"],O={weight:2,fillOpacity:.9,color:"#aaa"},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=e;return"string"===typeof e&&(a=parseFloat(e.replace(",",""))),a=parseFloat(a.toFixed(2)),t&&(a=a.toLocaleString()),a};function k(e){var t=e.activeAttribute,a=Object(n.useState)(null),r=Object(i.a)(a,2),o=r[0],c=r[1],s=Object(n.useState)(null),u=Object(i.a)(s,2),p=u[0],m=u[1],v=Object(n.useState)(null),E=Object(i.a)(v,2),S=E[0],k=E[1],M=Object(n.useState)(null),_=Object(i.a)(M,2),N=_[0],H=_[1];Object(n.useEffect)((function(){if(S){var e=x(S);H(e)}}),[t,S]);function I(e){var t=e.target;t.setStyle({weight:2,color:"#666",dashArray:"4"}),t.bringToFront(),c(t.feature)}function z(e){e.target.setStyle({weight:2,color:"#aaa",dashArray:""}),c(null)}function V(e,t){t.on({mouseover:I,mouseout:z,click:I})}var T=function(e,t){return function(a){return Object.assign(O,{fillColor:e.getColorInRange(j(a.properties[t]))})}},x=function(e){var a=function(e,t){var a=new b.a,n=t.features.map((function(t){return j(t.properties[e])||0}));return a.setSeries(n),a.setNumClasses(5),a.setColorCode("PuBu"),a.classify("quantile"),m(a),a}(t,e);return l.a.createElement(y.a,{data:e,onEachFeature:V,style:T(a,t)})};Object(g.a)(Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("./hghi_state_data_with_vents.geojson");case 2:t=e.sent,k(t.data),H(x(t.data));case 5:case"end":return e.stop()}}),e)}))));var D=function(e,t){var a=null===e||void 0===e?void 0:e.properties,n=e?a["State Name"]:"Select state",r=e?B.map((function(e,n){var r=e===t?"active-attr":"";return l.a.createElement("div",{key:"disp-".concat(n),className:"".concat(r," attr-display")},l.a.createElement("p",null,l.a.createElement("strong",null,e)),l.a.createElement("p",null,j(a[e],!0)))})):"";return l.a.createElement(A.a,{className:"state-attrs",size:"small",title:n,style:{width:300}},r)}(o,t),P=function(e){if(e){for(var t=e.getBreaks(),a=[],n=0;n<t.length;n++){var r=t[n],o=t[n+1],i={background:e.getColorInRange(r+1)};o&&a.push(l.a.createElement(l.a.Fragment,{key:"leg-".concat(n)},l.a.createElement("i",{style:i}),"".concat(r," - ").concat(o),l.a.createElement("br",null)))}return l.a.createElement(A.a,{className:"legend",size:"small"},a)}}(p);return l.a.createElement(w.a,{center:[42,-92],zoom:4},l.a.createElement(C.a,{url:"https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",attribution:"Tiles \xa9 Esri \u2014 Esri, DeLorme, NAVTEQ"}),N,l.a.createElement(F.a,{position:"topright"},D),l.a.createElement(F.a,{position:"bottomleft"},P))}var M=c.a.Header,_=c.a.Content,N=s.a.Option,H=B.map((function(e){return l.a.createElement(N,{key:e,value:e},e)}));var I=function(){var e=Object(n.useState)(B[0]),t=Object(i.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:"App"},l.a.createElement(c.a,{style:{height:"100vh"}},l.a.createElement(M,{className:"header"},l.a.createElement("h2",{style:{color:"white"}},"Ventilator Supply and Healthcare Capacity Map, by State \xa0",l.a.createElement(p.a,{onClick:function(){u.a.info({title:"About",content:l.a.createElement("div",null,l.a.createElement("p",null,"Map visualization created by"," ",l.a.createElement("a",{href:"https://github.com/mmcfarland"},"Matt McFarland"," "),"with support from"," ",l.a.createElement("a",{href:"https://azavea.com"},"Azavea"),","," ",l.a.createElement("a",{href:"https://www.covidcaremap.org"},"COVID Care Map team")),l.a.createElement("strong",null,"Data Sources:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Estimated No. of Full-Featured Mechanical Ventilators data from Rubinson 2010 study on"," ",l.a.createElement("a",{href:"https://www.cambridge.org/core/journals/disaster-medicine-and-public-health-preparedness/article/mechanical-ventilators-in-us-acute-care-hospitals/F1FDBACA53531F2A150D6AD8E96F144D"},"Mechanical Ventilators in US Acute Care Hospitals, TABLE 4: Quantities of Full-Feature Ventilators per Population, by State")),l.a.createElement("li",null,'Health System Capacity data ("Total/Available/Potentially Available ___ Beds") from'," ",l.a.createElement("a",{href:"https://globalepidemics.org/2020/03/17/caring-for-covid-19-patients/"},"Harvard Global Health Institute's regionalized capacity estimates")),l.a.createElement("li",null,'Per capita calculation of health system capacity ("___ Beds per 100,000 people") using'," ",l.a.createElement("a",{href:"https://www.census.gov/data/tables/time-series/demo/popest/2010s-counties-detail.html"},"2018 US Census Bureau population estimate by state")))," ",l.a.createElement("hr",null),"More info, methodology & source code can be found at:",l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.covidcaremap.org"},"CovidCareMap.org")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/covidcaremap/covid19-healthsystemcapacity/"},"CovidCareMap GitHub page")))),onOk:function(){}})}}))),l.a.createElement(c.a,{style:{padding:"0 2px 2px"}},l.a.createElement("strong",null,"Select an attribute:"),l.a.createElement(s.a,{dropdownMatchSelectWidth:!1,size:"large",defaultValue:B[0],onChange:function(e){r(e)}},H),l.a.createElement(_,{className:"site-layout-background",style:{padding:2,margin:0,minHeight:280}},l.a.createElement(k,{activeAttribute:a})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[157,1,2]]]);
//# sourceMappingURL=main.ee0342a5.chunk.js.map