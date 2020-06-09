(this["webpackJsonpgt-scheduler"]=this["webpackJsonpgt-scheduler"]||[]).push([[0],{296:function(e,t,n){e.exports=n(639)},428:function(e,t,n){},432:function(e,t,n){},433:function(e,t,n){},434:function(e,t,n){},454:function(e,t){},467:function(e,t){},469:function(e,t){},630:function(e,t,n){},631:function(e,t,n){},632:function(e,t,n){},633:function(e,t,n){},636:function(e,t,n){},638:function(e,t,n){},639:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"db",(function(){return b})),n.d(r,"env",(function(){return L})),n.d(r,"user",(function(){return V})),n.d(r,"actions",(function(){return K}));var a=n(0),s=n.n(a),c=n(79),i=n.n(c),o=n(20),u=n(81),l=n(3),d=n(642),f=n(640),p=n(641),h=Object(d.a)("".concat("DB","/SET_OSCAR"),(function(e){return{oscar:e}})),m={setOscar:h},b=Object(f.a)({[Object(p.a)(h)]:function(e,t){var n=t.payload;return Object(l.a)(Object(l.a)({},e),n)}},{oscar:null}),v=n(4),g=n(11),E=["M","T","W","R","F"],y=function(e){var t=/(\d{1,2}):(\d{2}) (a|p)m/.exec(e),n=Object(g.a)(t,4),r=n[1],a=n[2];return 60*(("p"===n[3]?12:0)+Number.parseInt(r%12))+Number.parseInt(a)},O=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e/60|0,r=e%60;return"".concat(n>12?n-12:n,":").concat(r<10?"0"+r:r).concat(t?" ".concat(n<12?"a":"p","m"):"")},C=function(e){return e?"".concat(O(e.start,!1)," - ").concat(O(e.end)):"TBA"},j=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256,n="#",r=0;r<3;r++){var a=(Math.random()*(t-e)+e|0).toString(16);n+=(1===a.length?"0":"")+a}return n},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#BBBBBB",t=parseInt(e.substring(1,3),16),n=parseInt(e.substring(3,5),16),r=parseInt(e.substring(5,7),16);return.299*t+.587*n+.114*r>128?"dark-content":"light-content"},S=function(e,t){return e.meetings.some((function(e){return t.meetings.some((function(t){return e.period&&t.period&&E.some((function(n){return e.days.includes(n)&&t.days.includes(n)}))&&e.period.start<t.period.end&&t.period.start<e.period.end}))}))},k=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")},w=function(){return window.innerWidth<768},x=function(e){var t=e.split(" ");return[t.shift(),t.pop()].join(" ")},T=function(e){return Object(v.a)(new Set(e))},A=function(e){return e.scheduleType.includes("Lab")},R=function(e){return e.scheduleType.includes("Lecture")},M=Object(d.a)("".concat("ENV","/SET_MOBILE"),(function(e){return{mobile:e}})),I={setMobile:M},D={mobile:w()},L=Object(f.a)({[Object(p.a)(M)]:function(e,t){var n=t.payload;return Object(l.a)(Object(l.a)({},e),n)}},D),F=n(34),B=n.n(F),_=Object(d.a)("".concat("USER","/SET_TERM"),(function(e){return q(e)})),P=Object(d.a)("".concat("USER","/SET_DESIRED_COURSES"),(function(e){return{desiredCourses:e}})),U=Object(d.a)("".concat("USER","/SET_PINNED_CRNS"),(function(e){return{pinnedCrns:e}})),W=Object(d.a)("".concat("USER","/SET_EXCLUDED_CRNS"),(function(e){return{excludedCrns:e}})),H=Object(d.a)("".concat("USER","/SET_COLOR_MAP"),(function(e){return{colorMap:e}})),Y=Object(d.a)("".concat("USER","/SET_SORTING_OPTION_INDEX"),(function(e){return{sortingOptionIndex:e}})),G={setTerm:_,setDesiredCourses:P,setPinnedCrns:U,setExcludedCrns:W,setColorMap:H,setSortingOptionIndex:Y},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B.a.get("term"),t=null;try{t=JSON.parse(B.a.get(e))}catch(p){t={}}var n=t,r=n.desiredCourses,a=void 0===r?[]:r,s=n.pinnedCrns,c=void 0===s?[]:s,i=n.excludedCrns,o=void 0===i?[]:i,u=n.colorMap,l=void 0===u?{}:u,d=n.sortingOptionIndex,f=void 0===d?0:d;return a.forEach((function(e){e in l||(l[e]=j())})),{term:e,desiredCourses:a,pinnedCrns:c,excludedCrns:o,colorMap:l,sortingOptionIndex:f}};!function(){var e=B.a.get("data");e&&(B.a.set("term","201902"),B.a.set("201902",e),B.a.remove("data"))}();var z=q(),V=Object(f.a)({[Object(p.a)(_,P,U,W,H,Y)]:function(e,t){var n=t.payload,r=Object(l.a)(Object(l.a)({},e),n);return function(e){var t=e.term,n=e.desiredCourses,r=void 0===n?[]:n,a=e.pinnedCrns,s=void 0===a?[]:a,c=e.excludedCrns,i=void 0===c?[]:c,o=e.colorMap,u=void 0===o?{}:o,l=e.sortingOptionIndex,d=void 0===l?0:l;B.a.set("term",t),B.a.set(t,JSON.stringify({desiredCourses:r,pinnedCrns:s,excludedCrns:i,colorMap:u,sortingOptionIndex:d}),{expires:365})}(r),r}},z),K=Object(l.a)(Object(l.a)(Object(l.a)({},m),I),G),X=n(2),J=n(5),Z=n(10),$=n(9),Q=n(80),ee=n.n(Q),te=n(290),ne=n.n(te),re=n(291),ae=n.n(re),se=n(178),ce=n(175),ie=function(e,t){if(!(navigator.userAgent.indexOf("MSIE")>-1&&-1==navigator.userAgent.indexOf("MSIE 10"))){"undefined"===typeof e&&(e="default"),"undefined"===typeof t&&(t="Calendar");var n=-1!==navigator.appVersion.indexOf("Win")?"\r\n":"\n",r=[],a=["BEGIN:VCALENDAR","PRODID:"+t,"VERSION:2.0"].join(n),s=n+"END:VCALENDAR",c=["SU","MO","TU","WE","TH","FR","SA"];return{events:function(){return r},calendar:function(){return a+n+r.join(n)+s},addEvent:function(t,a,s,i,o,u){if("undefined"===typeof t||"undefined"===typeof a||"undefined"===typeof s||"undefined"===typeof i||"undefined"===typeof o)return!1;if(u&&!u.rrule){if("YEARLY"!==u.freq&&"MONTHLY"!==u.freq&&"WEEKLY"!==u.freq&&"DAILY"!==u.freq)throw"Recurrence rrule frequency must be provided and be one of the following: 'YEARLY', 'MONTHLY', 'WEEKLY', or 'DAILY'";if(u.until&&isNaN(Date.parse(u.until)))throw"Recurrence rrule 'until' must be a valid date string";if(u.interval&&isNaN(parseInt(u.interval)))throw"Recurrence rrule 'interval' must be an integer";if(u.count&&isNaN(parseInt(u.count)))throw"Recurrence rrule 'count' must be an integer";if("undefined"!==typeof u.byday){if("[object Array]"!==Object.prototype.toString.call(u.byday))throw"Recurrence rrule 'byday' must be an array";if(u.byday.length>7)throw"Recurrence rrule 'byday' array must not be longer than the 7 days in a week";for(var l in u.byday=u.byday.filter((function(e,t){return u.byday.indexOf(e)==t})),u.byday)if(c.indexOf(u.byday[l])<0)throw"Recurrence rrule 'byday' values must include only the following: 'SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'"}}var d=new Date(i),f=new Date(o),p=new Date,h=("0000"+d.getFullYear().toString()).slice(-4),m=("00"+(d.getMonth()+1).toString()).slice(-2),b=("00"+d.getDate().toString()).slice(-2),v=("00"+d.getHours().toString()).slice(-2),g=("00"+d.getMinutes().toString()).slice(-2),E=("00"+d.getSeconds().toString()).slice(-2),y=("0000"+f.getFullYear().toString()).slice(-4),O=("00"+(f.getMonth()+1).toString()).slice(-2),C=("00"+f.getDate().toString()).slice(-2),j=("00"+f.getHours().toString()).slice(-2),N=("00"+f.getMinutes().toString()).slice(-2),S=("00"+f.getSeconds().toString()).slice(-2),k="",w="";v+g+E+j+N+S!=0&&(k="T"+v+g+E,w="T"+j+N+S);var x,T=h+m+b+k,A=y+O+C+w,R=("0000"+p.getFullYear().toString()).slice(-4)+("00"+(p.getMonth()+1).toString()).slice(-2)+("00"+p.getDate().toString()).slice(-2)+("T"+("00"+p.getHours().toString()).slice(-2)+("00"+p.getMinutes().toString()).slice(-2)+("00"+p.getSeconds().toString()).slice(-2));if(u)if(u.rrule)x=u.rrule;else{if(x="RRULE:FREQ="+u.freq,u.until){var M=new Date(Date.parse(u.until)).toISOString();x+=";UNTIL="+M.substring(0,M.length-13).replace(/[-]/g,"")+"000000Z"}u.interval&&(x+=";INTERVAL="+u.interval),u.count&&(x+=";COUNT="+u.count),u.byday&&u.byday.length>0&&(x+=";BYDAY="+u.byday.join(","))}(new Date).toISOString();var I=["BEGIN:VEVENT","UID:"+r.length+"@"+e,"CLASS:PUBLIC","DESCRIPTION:"+a,"DTSTAMP;VALUE=DATE-TIME:"+R,"DTSTART;VALUE=DATE-TIME:"+T,"DTEND;VALUE=DATE-TIME:"+A,"LOCATION:"+s,"SUMMARY;LANGUAGE=en-us:"+t,"TRANSP:TRANSPARENT","END:VEVENT"];return x&&I.splice(4,0,x),I=I.join(n),r.push(I),I},download:function(e,t){if(r.length<1)return!1;t="undefined"!==typeof t?t:".ics",e="undefined"!==typeof e?e:"calendar";var c,i=a+n+r.join(n)+s;if(-1===navigator.userAgent.indexOf("MSIE 10"))c=new Blob([i]);else{var o=new BlobBuilder;o.append(i),c=o.getBlob("text/x-vCalendar;charset="+document.characterSet)}return saveAs(c,e+t),i},build:function(){return!(r.length<1)&&a+n+r.join(n)+s}}}console.log("Unsupported Browser")},oe=function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(){return Object(X.a)(this,n),t.apply(this,arguments)}return Object(J.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){var n=this.state!==t,r=!function(e,t){var n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&n.every((function(n){return n in t&&e[n]===t[n]}))}(this.props,e);return n||r}}]),n}(a.Component),ue=n(47),le=n(292),de=(n(428),n(111)),fe=n.n(de),pe=function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(){return Object(X.a)(this,n),t.apply(this,arguments)}return Object(J.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,r=e.actions,a=e.color,c=Object(ue.a)(e,["className","children","actions","color"]);return s.a.createElement("div",Object.assign({className:k("ActionRow",t)},c),n,s.a.createElement("div",{className:k("actions","default")},r.filter((function(e){return e})).map((function(e,t){var n=e.className,r=e.icon,c=Object(ue.a)(e,["className","icon"]),i=Object(l.a)({key:t,className:k("action",n),children:s.a.createElement("div",{className:"icon",style:{backgroundColor:a}},s.a.createElement(le.a,{fixedWidth:!0,icon:r}))},c);return"href"in i?s.a.createElement("a",Object.assign({},i,{rel:"noopener noreferrer",target:"_blank"})):"text"in i?s.a.createElement(fe.a,i):s.a.createElement("div",i)}))))}}]),n}(a.Component),he=(n(432),function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(){return Object(X.a)(this,n),t.apply(this,arguments)}return Object(J.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.disabled,r=Object(ue.a)(e,["className","disabled"]),a=Object(l.a)({className:k("Button",t)},r);return n?s.a.createElement("button",{className:a.className,disabled:!0},a.children):"href"in a?s.a.createElement("a",Object.assign({},a,{rel:"noopener noreferrer",target:"_blank"})):"text"in a?s.a.createElement(fe.a,a):s.a.createElement("button",a)}}]),n}(a.Component)),me=(n(433),function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(){return Object(X.a)(this,n),t.apply(this,arguments)}return Object(J.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.overlayCrns,r=e.preview,a=e.capture,c=this.props.env.mobile&&!a,i=this.props.user.pinnedCrns;return s.a.createElement("div",{className:k("Calendar",c&&"mobile",r&&"preview",t)},!r&&s.a.createElement("div",{className:"times"},new Array(13).fill(0).map((function(e,t){var n=480+60*t;return s.a.createElement("div",{className:"time",key:n},s.a.createElement("span",{className:"label"},function(e){var t=e/60|0;return"".concat(t>12?t-12:t).concat(t<12?"a":"p","m")}(n)))}))),!r&&s.a.createElement("div",{className:"days"},E.map((function(e){return s.a.createElement("div",{className:"day",key:e},s.a.createElement("span",{className:"label"},e))}))),s.a.createElement("div",{className:"meetings"},i.map((function(e){return s.a.createElement(Fe,{key:e,crn:e,preview:r,capture:a})})),n&&n.filter((function(e){return!i.includes(e)})).map((function(e){return s.a.createElement(Fe,{key:e,crn:e,overlay:!r,preview:r,capture:a})}))))}}]),n}(oe)),be=Object(o.b)((function(e){return{env:e.env,user:e.user}}),K)(me),ve=n(46),ge=n(12),Ee=(n(434),n(173)),ye=n.n(Ee),Oe=n(177),Ce=n(293),je=n.n(Ce),Ne=n(179);function Se(){var e=Object(Oe.a)(["\n    background-color: ",";\n    width: 40px;\n    height: 22px;\n    margin-left: 8px;\n    line-height: 19px;\n    text-align: center;\n    color: white;\n    font-weight: 500;\n    border: 2px solid #202020;\n    display: inline-block;\n    font-size: 13px;\n  "]);return Se=function(){return e},e}function ke(){var e=Object(Oe.a)(["\n    font-weight: 500;\n    display: inline-block;\n    font-size: 13px;\n    height: 22px;\n    line-height: 18px;\n  "]);return ke=function(){return e},e}var we=function(e){var t=Object(a.useState)(),n=Object(g.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(e.courseId),o=Object(g.a)(i,2),u=o[0],l=(o[1],Object(a.useState)(0)),d=Object(g.a)(l,2),f=d[0],p=d[1],h=Object(a.useState)(""),m=Object(g.a)(h,2),b=(m[0],m[1]);Object(a.useEffect)((function(){var e=u.replace(" ","%20");je.a.ajax({url:"https://cors-anywhere.herokuapp.com/http://critique.gatech.edu/course.php?id=".concat(e),type:"GET",dataType:"html",headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"text/html"},success:function(t){var n=ye.a.load(t)("div.center-table > table.table > tbody:nth-child(2)",t).text();n=Math.round(100*n)/100,p(0===n?"N/A":n),v(n),b("https://cors-anywhere.herokuapp.com/http://critique.gatech.edu/course.php?id=".concat(e))},error:function(e){p("Error")}})}),[]);var v=function(e){c(E(e,2.5,4))},E=function(e,t,n){var r,a,s=n-t;return(e=0==s?100:(e-t)/s*100)<50?(r=255,a=Math.round(5.1*e)):(a=255,r=Math.round(510-5.1*e)),"#"+("000000"+(65536*r+256*a+0).toString(16)).slice(-6)},y=Ne.a.div(ke()),O=Ne.a.div(Se(),r);return s.a.createElement("div",null,s.a.createElement(y,null,"Average GPA:"),s.a.createElement(O,null,f))},xe=function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(e){var r;return Object(X.a)(this,n),(r=t.call(this,e)).state={expanded:!1,paletteShown:!1},r.handleSelectColor=r.handleSelectColor.bind(Object(ve.a)(r)),r}return Object(J.a)(n,[{key:"handleRemoveCourse",value:function(e){var t=this.props.user,n=t.desiredCourses,r=t.pinnedCrns,a=t.excludedCrns,s=t.colorMap;this.props.setDesiredCourses(n.filter((function(t){return t!==e.id}))),this.props.setPinnedCrns(r.filter((function(t){return!e.sections.some((function(e){return e.crn===t}))}))),this.props.setExcludedCrns(a.filter((function(t){return!e.sections.some((function(e){return e.crn===t}))}))),this.props.setColorMap(Object(l.a)(Object(l.a)({},s),{},{[e.id]:void 0}))}},{key:"handleToggleExpanded",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.state.expanded;this.setState({expanded:e})}},{key:"handleSelectColor",value:function(e){var t=this.props.courseId,n=this.props.user.colorMap;this.props.setColorMap(Object(l.a)(Object(l.a)({},n),{},{[t]:e}))}},{key:"handleTogglePaletteShown",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.state.paletteShown;this.setState({paletteShown:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=t.courseId,a=t.onAddCourse,c=t.onSetOverlayCrns,i=this.props.db.oscar,o=this.props.user,u=o.term,l=o.pinnedCrns,d=o.colorMap,f=this.state,p=f.expanded,h=f.paletteShown,m=i.findCourse(r),b=d[m.id],v=N(b),E={};m.sections.forEach((function(e){var t=Object(g.a)(e.instructors,1)[0],n=void 0===t?"Not Assigned":t;n in E||(E[n]=[]),E[n].push(e)}));var y={icon:ge.e,href:"https://oscar.gatech.edu/pls/bprod/bwckctlg.p_disp_course_detail?cat_term_in=".concat(u,"&subj_code_in=").concat(m.subject,"&crse_numb_in=").concat(m.number)};return s.a.createElement("div",{className:k("Course",v,"default",n),style:{backgroundColor:b},key:m.id},s.a.createElement(pe,{className:k("course-header",p&&"divider-bottom"),actions:a?[{icon:ge.g,onClick:a},y]:[{icon:p?ge.b:ge.a,onClick:function(){return e.handleToggleExpanded()}},y,{icon:ge.f,onClick:function(){return e.handleTogglePaletteShown()}},{icon:ge.j,onClick:function(){return e.handleRemoveCourse(m)}}],color:b},s.a.createElement("div",{className:"row"},s.a.createElement("span",{className:"course_id",style:{fontWeight:750}},m.id,"course-list"===this.props.fromClass?s.a.createElement(we,{courseId:r}):s.a.createElement("div",null)),s.a.createElement("span",{className:"section_ids"},m.sections.filter((function(e){return l.includes(e.crn)})).map((function(e){return e.id})).join(", "))),s.a.createElement("div",{className:"row"},s.a.createElement("span",{className:"course_title",style:{fontWeight:700,fontStyle:"italic"},dangerouslySetInnerHTML:{__html:m.title}}),s.a.createElement("span",{className:"section_crns"},m.sections.filter((function(e){return l.includes(e.crn)})).map((function(e){return e.crn})).join(", ")),h&&s.a.createElement(De,{className:"palette",onSelectColor:this.handleSelectColor,color:b,onMouseLeave:function(){return e.handleTogglePaletteShown(!1)}}))),p&&s.a.createElement("div",{className:"course-body"},Object.keys(E).map((function(e){return s.a.createElement(Ie,{key:e,color:b,name:e,sections:E[e],onSetOverlayCrns:c})}))))}}]),n}(oe),Te=Object(o.b)((function(e){return{db:e.db,user:e.user}}),K)(xe),Ae=(n(630),function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(e){var r;return Object(X.a)(this,n),(r=t.call(this,e)).state={keyword:""},r.inputRef=s.a.createRef(),r.handleChangeKeyword=r.handleChangeKeyword.bind(Object(ve.a)(r)),r.handlePressEnter=r.handlePressEnter.bind(Object(ve.a)(r)),r}return Object(J.a)(n,[{key:"handleChangeKeyword",value:function(e){var t=e.target.value;this.setState({keyword:t})}},{key:"handlePressEnter",value:function(e){var t=this.props.db.oscar,n=this.state.keyword;if("Enter"===e.key){e.preventDefault();var r=t.searchCourses(n);r.length&&this.handleAddCourse(r[0])}}},{key:"handleAddCourse",value:function(e){var t=this.props.user,n=t.desiredCourses,r=t.excludedCrns,a=t.colorMap;if(!n.includes(e.id)){var s=e.sections.filter((function(e){return!e.meetings.length||e.meetings.some((function(e){return!e.days.length||!e.period}))})).map((function(e){return e.crn}));this.props.setDesiredCourses([].concat(Object(v.a)(n),[e.id])),this.props.setExcludedCrns([].concat(Object(v.a)(r),Object(v.a)(s))),this.props.setColorMap(Object(l.a)(Object(l.a)({},a),{},{[e.id]:j()})),this.setState({keyword:""}),this.inputRef.current.focus()}}},{key:"render",value:function(){var e=this,t=this.props.className,n=this.props.db.oscar,r=this.props.user,a=r.desiredCourses,c=r.pinnedCrns,i=this.state.keyword;return s.a.createElement("div",{className:k("CourseAdd",t)},s.a.createElement("input",{type:"text",ref:this.inputRef,value:i,onChange:this.handleChangeKeyword,className:"keyword",placeholder:"XX 0000",onKeyPress:this.handlePressEnter}),s.a.createElement("div",{className:"autocomplete"},n.searchCourses(i).filter((function(e){return!a.includes(e.id)})).map((function(t){return s.a.createElement(Te,{key:t.id,courseId:t.id,pinnedCrns:c,onAddCourse:function(){return e.handleAddCourse(t)},fromClass:"autocomplete"})}))))}}]),n}(oe)),Re=Object(o.b)((function(e){return{db:e.db,user:e.user}}),K)(Ae),Me=(n(631),function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(e){var r;return Object(X.a)(this,n),(r=t.call(this,e)).state={expanded:!0},r}return Object(J.a)(n,[{key:"handleTogglePinned",value:function(e){var t=this.props.user,n=t.pinnedCrns,r=t.excludedCrns;n.includes(e.crn)?this.props.setPinnedCrns(n.filter((function(t){return t!==e.crn}))):(this.props.setPinnedCrns([].concat(Object(v.a)(n),[e.crn])),this.props.setExcludedCrns(r.filter((function(t){return t!==e.crn}))))}},{key:"handleToggleExcluded",value:function(e){var t=this.props.user,n=t.pinnedCrns,r=t.excludedCrns;r.includes(e.crn)?this.props.setExcludedCrns(r.filter((function(t){return t!==e.crn}))):(this.props.setExcludedCrns([].concat(Object(v.a)(r),[e.crn])),this.props.setPinnedCrns(n.filter((function(t){return t!==e.crn}))))}},{key:"handleExcludeAll",value:function(){var e=this.props.sections,t=this.props.user,n=t.pinnedCrns,r=t.excludedCrns,a=e.map((function(e){return e.crn}));this.props.setExcludedCrns(T([].concat(Object(v.a)(r),Object(v.a)(a)))),this.props.setPinnedCrns(n.filter((function(e){return!a.includes(e)})))}},{key:"handleIncludeAll",value:function(){var e=this.props.sections,t=this.props.user.excludedCrns,n=e.map((function(e){return e.crn}));this.props.setExcludedCrns(t.filter((function(e){return!n.includes(e)})))}},{key:"handleToggleExpanded",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.state.expanded;this.setState({expanded:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=t.color,a=t.name,c=t.sections,i=t.onSetOverlayCrns,o=this.props.user,u=o.term,l=o.pinnedCrns,d=o.excludedCrns,f=this.state.expanded,p=c.every((function(e){return d.includes(e.crn)})),h=c.some((function(e){return l.includes(e.crn)}));return s.a.createElement("div",{className:k("Instructor",n)},s.a.createElement(pe,{className:k("name","divider-bottom",p&&"strikethrough",!h&&"inactive"),actions:[{icon:f?ge.b:ge.a,onClick:function(){return e.handleToggleExpanded()}},!["TBA","Not Assigned"].includes(a)&&{icon:ge.e,href:"http://www.ratemyprofessors.com/search.jsp?queryBy=teacherName&schoolName=Georgia+Institute+of+Technology&query=".concat(encodeURIComponent(x(a)))},p?{icon:ge.d,onClick:function(){return e.handleIncludeAll()}}:{icon:ge.c,onClick:function(){return e.handleExcludeAll()}}],color:r},a||"Not Assigned"),f&&s.a.createElement("div",{className:"sections"},c.map((function(t){var n=d.includes(t.crn),a=l.includes(t.crn);return s.a.createElement(pe,{className:k("section","divider-bottom",n&&"strikethrough",!a&&"inactive"),onMouseEnter:function(){return i([t.crn])},onMouseLeave:function(){return i([])},actions:[{icon:a?ge.i:ge.h,onClick:function(){return e.handleTogglePinned(t)}},{icon:ge.e,href:"https://oscar.gatech.edu/pls/bprod/bwckschd.p_disp_detail_sched?term_in=".concat(u,"&crn_in=").concat(t.crn)},{icon:n?ge.d:ge.c,onClick:function(){return e.handleToggleExcluded(t)}}],color:r,key:t.id},s.a.createElement("div",{className:"section-header"},s.a.createElement("span",{className:"section_id"},t.id)),s.a.createElement("div",{className:"meetings"},t.meetings.map((function(e,t){return s.a.createElement("div",{className:"meeting",key:t},s.a.createElement("span",{className:"days"},e.days.join("")),s.a.createElement("span",{className:"period"},C(e.period)))}))))}))))}}]),n}(oe)),Ie=Object(o.b)((function(e){return{user:e.user}}),K)(Me),De=(n(632),function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(){return Object(X.a)(this,n),t.apply(this,arguments)}return Object(J.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.color,r=e.onSelectColor,a=Object(ue.a)(e,["className","color","onSelectColor"]);return s.a.createElement("div",Object.assign({className:k("Palette",t)},a),[["#4D4D4D","#999999","#FFFFFF","#F44E3B","#FE9200","#FCDC00","#DBDF00","#A4DD00","#68CCCA","#73D8FF","#AEA1FF","#FDA1FF"],["#333333","#808080","#CCCCCC","#D33115","#E27300","#FCC400","#B0BC00","#68BC00","#16A5A5","#009CE0","#7B64FF","#FA28FF"],["#000000","#666666","#B3B3B3","#9F0500","#C45100","#FB9E00","#808900","#194D33","#0C797D","#0062B1","#653294","#AB149E"]].map((function(e,t){return s.a.createElement("div",{className:"palette-row",key:t},e.map((function(e){return s.a.createElement("div",{className:k("color",e===n&&"frame"),key:e,style:{backgroundColor:e},onClick:function(){return r(e)}})})))})))}}]),n}(a.Component)),Le=(n(633),function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(){return Object(X.a)(this,n),t.apply(this,arguments)}return Object(J.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.crn,r=e.overlay,a=e.preview,c=e.capture,i=this.props.db.oscar,o=this.props.env.mobile&&!c,u=this.props.user.colorMap,l=i.findSection(n),d=u[l.course.id],f=N(d);return s.a.createElement("div",{className:k("TimeBlocks",o&&"mobile",r&&"overlay",t)},l.meetings.map((function(e,t){return e.period&&e.days.map((function(n){return s.a.createElement("div",{className:k("meeting",f,"default",n),key:[t,n].join("-"),style:{top:(e.period.start-480)/780*100+"%",height:(e.period.end-e.period.start)/780*100+"%",backgroundColor:d}},!a&&s.a.createElement("div",{className:"meeting-wrapper"},s.a.createElement("span",{className:"course_id"},l.course.id,o?"":" ".concat(l.id)),s.a.createElement("span",{className:"period"},C(e.period)),!o&&s.a.createElement("span",{className:"where"},e.where),!o&&s.a.createElement("span",{className:"instructors"},e.instructors.join(", "))))}))})))}}]),n}(oe)),Fe=Object(o.b)((function(e){return{env:e.env,db:e.db,user:e.user}}),K)(Le),Be=function(){function e(t){var n=this;Object(X.a)(this,e);var r=t.courses,a=t.dateRanges,s=t.scheduleTypes,c=t.campuses;this.dateRanges=a.map((function(e){var t=e.split(" - ").map((function(e){return new Date(e)})),n=Object(g.a)(t,2),r=n[0],a=n[1];return r.setHours(0),a.setHours(23,59,59,999),{from:r,to:a}})),this.scheduleTypes=s,this.campuses=c,this.courses=Object.keys(r).map((function(e){return new _e(n,e,r[e])})),this.courseMap={},this.crnMap={},this.courses.forEach((function(e){n.courseMap[e.id]=e,e.sections.forEach((function(e){n.crnMap[e.crn]=e}))})),this.sortingOptions=[new Ue("Most Compact",(function(e){var t=e.startMap,n=e.endMap;return+Object.keys(t).map((function(e){return n[e]-t[e]})).reduce((function(e,t){return e+t}),0)})),new Ue("Earliest Ending",(function(e){var t=e.endMap,n=Object.values(t);return+(n.reduce((function(e,t){return e+t}),0)/n.length)})),new Ue("Latest Beginning",(function(e){var t=e.startMap,n=Object.values(t);return-(n.reduce((function(e,t){return e+t}),0)/n.length)}))]}return Object(J.a)(e,[{key:"findCourse",value:function(e){return this.courseMap[e]}},{key:"findSection",value:function(e){return this.crnMap[e]}},{key:"searchCourses",value:function(e){var t=/^\s*([a-zA-Z]*)\s*(\d*)\s*$/.exec(e.toUpperCase())||[],n=Object(g.a)(t,3),r=n[1],a=n[2];return r&&a?this.courses.filter((function(e){return e.subject===r&&e.number.startsWith(a)})):r?this.courses.filter((function(e){return e.subject===r})):a?this.courses.filter((function(e){return e.number.startsWith(a)})):[]}},{key:"getCombinations",value:function(e,t,n){var r=this,a=[];return function s(){var c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(c!==e.length){var o=r.findCourse(e[c]),u=function(e){return!n.includes(e.crn)},l=function(e){return t.includes(e.crn)},d=function(e){return[].concat(Object(v.a)(t),Object(v.a)(i)).some((function(t){return S(r.findSection(t),e)}))};if(o.hasLab){var f=o.onlyLectures.find(l),p=o.onlyLabs.find(l),h=o.allInOnes.find(l);f&&p||h?s(c+1,i):f?f.associatedLabs.filter(u).forEach((function(e){d(e)||s(c+1,[].concat(Object(v.a)(i),[e.crn]))})):p?p.associatedLectures.filter(u).forEach((function(e){d(e)||s(c+1,[].concat(Object(v.a)(i),[e.crn]))})):(o.onlyLectures.filter(u).forEach((function(e){d(e)||e.associatedLabs.filter(u).forEach((function(t){d(t)||s(c+1,[].concat(Object(v.a)(i),[e.crn,t.crn]))}))})),o.allInOnes.filter(u).forEach((function(e){d(e)||s(c+1,[].concat(Object(v.a)(i),[e.crn]))})))}else o.sections.some(l)?s(c+1,i):Object.values(o.sectionGroups).forEach((function(e){var t=e.sections.find(u);t&&!d(t)&&s(c+1,[].concat(Object(v.a)(i),[t.crn]))}))}else a.push(i)}(),a.map((function(e){var n={},a={};return r.iterateTimeBlocks([].concat(Object(v.a)(t),Object(v.a)(e)),(function(e,t){(!(e in n)||n[e]>t.start)&&(n[e]=t.start),(!(e in a)||a[e]<t.end)&&(a[e]=t.end)})),{crns:e,startMap:n,endMap:a}}))}},{key:"sortCombinations",value:function(e,t){var n=this.sortingOptions[t];return e.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{factor:n.calculateFactor(e)})})).sort((function(e,t){return e.factor-t.factor}))}},{key:"iterateTimeBlocks",value:function(e,t){var n=this;e.forEach((function(e){n.findSection(e).meetings.forEach((function(e){return e.period&&e.days.forEach((function(n){t(n,e.period)}))}))}))}}]),e}(),_e=function(){function e(t,n,r){var a=this;Object(X.a)(this,e);var s=Object(g.a)(r,2),c=s[0],i=s[1];this.id=n;var o=this.id.split(" "),u=Object(g.a)(o,2);this.subject=u[0],this.number=u[1],this.title=c,this.sections=Object.keys(i).map((function(e){return new Pe(t,a,e,i[e])}));var l=this.sections.filter((function(e){return R(e)&&!A(e)})),d=this.sections.filter((function(e){return A(e)&&!R(e)}));if(this.hasLab=l.length&&d.length,this.hasLab){l.forEach((function(e){return e.associatedLabs=d.filter((function(t){return t.id.startsWith(e.id)}))})),d.forEach((function(e){return e.associatedLectures=l.filter((function(t){return e.id.startsWith(t.id)}))}));var f=l.filter((function(e){return!e.associatedLabs.length})),p=d.filter((function(e){return!e.associatedLectures.length}));f.forEach((function(e){return e.associatedLabs=p.filter((function(t){return!S(e,t)}))})),p.forEach((function(e){return e.associatedLectures=f.filter((function(t){return!S(t,e)}))})),this.onlyLectures=l,this.onlyLabs=d,this.allInOnes=this.sections.filter((function(e){return R(e)&&A(e)}))}else this.sectionGroups=this.distinct(this.sections)}return Object(J.a)(e,[{key:"distinct",value:function(e){var t={};return e.forEach((function(e){var n=e.meetings.map((function(e){return{days:e.days,period:e.period}})),r=JSON.stringify(n),a=t[r];a?a.sections.push(e):t[r]={hash:r,meetings:n,sections:[e]}})),t}}]),e}(),Pe=function e(t,n,r,a){Object(X.a)(this,e);var s=Object(g.a)(a,5),c=s[0],i=s[1],o=s[2],u=s[3],l=s[4];this.course=n,this.id=r,this.crn=c,this.credits=o,this.scheduleType=t.scheduleTypes[u],this.campus=t.campuses[l],this.meetings=i.map((function(e){var n=Object(g.a)(e,5),r=n[0],a=n[1],s=n[2],c=n[3],i=n[4];return{period:"TBA"===r?void 0:{start:y(r.split(" - ")[0]),end:y(r.split(" - ")[1])},days:"&nbsp;"===a?[]:Object(v.a)(a),where:s,instructors:c.map((function(e){return e.replace(/ \(P\)$/,"")})),dateRange:t.dateRanges[i]}})),this.instructors=T(this.meetings.reduce((function(e,t){return[].concat(Object(v.a)(e),Object(v.a)(t.instructors))}),[]))},Ue=function e(t,n){Object(X.a)(this,e),this.label=t,this.calculateFactor=n},We=(n(634),n(635),n(636),function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(e){var r;return Object(X.a)(this,n),(r=t.call(this,e)).handleResize=function(e){var t=r.props.env.mobile,n=w();t!==n&&r.props.setMobile(n)},r.handleSetOverlayCrns=function(e){r.setState({overlayCrns:e})},r.handleExport=function(){var e=r.props.db.oscar,t=r.props.user.pinnedCrns,n=ie();t.forEach((function(t){var r=e.findSection(t);r.meetings.forEach((function(e){if(e.period&&e.days.length){for(var t=e.dateRange,a=t.from,s=t.to,c=r.course.id,i=r.course.title,o=e.where,u=new Date(a);!e.days.includes(["-","M","T","W","R","F","-"][u.getDay()]);)u.setDate(u.getDate()+1);u.setHours(e.period.start/60|0,e.period.start%60);var l=new Date(u);l.setHours(e.period.end/60|0,e.period.end%60);var d={freq:"WEEKLY",until:s,byday:e.days.map((function(e){return{M:"MO",T:"TU",W:"WE",R:"TH",F:"FR"}[e]}))};n.addEvent(c,i,o,u,l,d)}}))})),n.download("gt-scheduler")},r.handleDownload=function(){var e=r.captureRef.current;ne.a.toPng(e,{width:2*e.offsetWidth,height:2*e.offsetHeight,style:{left:0,transform:"scale(".concat(2,")"),"transform-origin":"top left"}}).then((function(e){return ae()(e,"schedule.png")}))},r.handleChangeTab=function(e){r.setState({tabIndex:e})},r.handleChangeSemester=function(e){r.props.setTerm(e),r.loadOscar(e)},r.handleSetPinnedCrns=function(e){r.props.setPinnedCrns(e)},r.handleResetPinnedCrns=function(){window.confirm("Are you sure to reset sections you selected?")&&r.props.setPinnedCrns([])},r.handleChangeSortingOptionIndex=function(e){var t=e.target.value;r.props.setSortingOptionIndex(t)},r.state={terms:[],overlayCrns:[],tabIndex:0},r.captureRef=s.a.createRef(),r}return Object(J.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.user.term;t&&this.loadOscar(t),ee.a.get("https://jasonpark.me/gt-schedule-crawler/terms.json").then((function(n){var r=n.data.reverse();if(!t){var a=r[0];e.handleChangeSemester(a)}e.setState({terms:r})})),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"loadOscar",value:function(e){var t=this;this.props.setOscar(null),ee.a.get("https://jasonpark.me/gt-schedule-crawler/".concat(e,".json")).then((function(e){var n=new Be(e.data);t.memoizedGetCombinations=Object(se.a)(n.getCombinations.bind(n)),t.memoizedSortCombinations=Object(se.a)(n.sortCombinations.bind(n)),t.props.setOscar(n)}))}},{key:"getTotalCredits",value:function(){var e=this.props.db.oscar;return this.props.user.pinnedCrns.reduce((function(t,n){return t+e.findSection(n).credits}),0)}},{key:"render",value:function(){var e=this,t=this.props.env.mobile,n=this.props.db.oscar,r=this.props.user,a=r.term,c=r.desiredCourses,i=r.pinnedCrns,o=r.excludedCrns,u=r.sortingOptionIndex,l=this.state,d=l.terms,f=l.overlayCrns,p=l.tabIndex;if(!n)return null;var h=this.memoizedGetCombinations(c,i,o),m=this.memoizedSortCombinations(h,u);return s.a.createElement("div",{className:k("App",t&&"mobile")},(!t||2===p)&&s.a.createElement("div",{className:"calendar-container"},s.a.createElement(be,{overlayCrns:f})),s.a.createElement("div",{className:"capture-container",ref:this.captureRef},s.a.createElement(be,{className:"fake-calendar",capture:!0})),(!t||1===p)&&s.a.createElement("div",{className:"sidebar sidebar-combinations"},s.a.createElement("div",{className:"header"},s.a.createElement("span",{className:"secondary"},h.length," Combos"),s.a.createElement(he,{className:"primary"},s.a.createElement("select",{onChange:this.handleChangeSortingOptionIndex,value:u},n.sortingOptions.map((function(e,t){return s.a.createElement("option",{key:t,value:t},e.label)}))))),s.a.createElement("div",{className:"scroller"},s.a.createElement(ce.AutoSizer,null,(function(t){var n=t.width,r=t.height;return s.a.createElement(ce.List,{width:n,height:r,rowCount:m.length,rowHeight:100,rowRenderer:function(t){var n=t.index,r=t.key,a=t.style,c=m[n].crns;return s.a.createElement("div",{className:"combination",key:r,style:a,onMouseEnter:function(){return e.handleSetOverlayCrns(c)},onMouseLeave:function(){return e.handleSetOverlayCrns([])},onClick:function(){return e.handleSetPinnedCrns([].concat(Object(v.a)(i),Object(v.a)(c)))}},s.a.createElement("div",{className:"number"},n+1),s.a.createElement(be,{className:"calendar-preview",overlayCrns:c,preview:!0}))}})}))),s.a.createElement("div",{className:"footer"},s.a.createElement(he,{onClick:this.handleResetPinnedCrns,disabled:0===i.length},"Reset Sections"))),(!t||0===p)&&s.a.createElement("div",{className:"sidebar sidebar-courses"},s.a.createElement("div",{className:"header"},s.a.createElement("span",{className:"secondary"},this.getTotalCredits()," Credits"),s.a.createElement(he,{className:"primary"},s.a.createElement("select",{onChange:function(t){return e.handleChangeSemester(t.target.value)},value:a},d.map((function(e){return s.a.createElement("option",{key:e,value:e},function(e){var t=e.substring(0,4),n=function(){switch(Number.parseInt(e.substring(4))){case 1:return"Winter";case 2:case 3:return"Spring";case 5:case 6:return"Summer";case 8:case 9:return"Fall";default:return"Unknown"}}();return"".concat(n," ").concat(t)}(e))}))))),s.a.createElement("div",{className:"scroller"},s.a.createElement("div",{className:"course-list"},c.map((function(t){return s.a.createElement(Te,{courseId:t,expandable:!0,key:t,onSetOverlayCrns:e.handleSetOverlayCrns,fromClass:"course-list"})}))),s.a.createElement(Re,null)),s.a.createElement("div",{className:"footer"},s.a.createElement(he,{text:i.join(", "),disabled:0===i.length},s.a.createElement("span",null,"Copy CRNs")),s.a.createElement(he,{onClick:this.handleDownload,disabled:0===i.length},"Download as PNG"),s.a.createElement(he,{onClick:this.handleExport,disabled:0===i.length},"Export Calendar"))),t&&s.a.createElement("div",{className:"tab-container"},["Courses","Combinations","Calendar"].map((function(t,n){return s.a.createElement("div",{className:k("tab",p===n&&"active"),onClick:function(){return e.handleChangeTab(n)},key:n},t)}))),s.a.createElement("a",{className:"github-fork-ribbon left-bottom fixed",href:"https://github.com/parkjs814/gt-scheduler",target:"_blank",rel:"noopener noreferrer","data-ribbon":"Fork me on GitHub",title:"Fork me on GitHub"},"Fork me on GitHub"))}}]),n}(oe)),He=Object(o.b)((function(e){return{env:e.env,db:e.db,user:e.user}}),K)(We),Ye=(n(637),n(638),Object(u.c)(Object(u.b)(r)));i.a.render(s.a.createElement(o.a,{store:Ye},s.a.createElement(He,null)),document.getElementById("root"))}},[[296,1,2]]]);
//# sourceMappingURL=main.6aeaf995.chunk.js.map