/*!
 * Datepicker for Bootstrap v1.6.4 (https://github.com/eternicode/bootstrap-datepicker)
 *
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)}else{if(typeof exports==="object"){a(require("jquery"))}else{a(jQuery)}}}(function(c,g){function n(){return new Date(Date.UTC.apply(Date,arguments))}function b(){var s=new Date();return n(s.getFullYear(),s.getMonth(),s.getDate())}function o(t,s){return(t.getUTCFullYear()===s.getUTCFullYear()&&t.getUTCMonth()===s.getUTCMonth()&&t.getUTCDate()===s.getUTCDate())}function l(s){return function(){return this[s].apply(this,arguments)}}function d(s){return s&&!isNaN(s.getTime())}var m=(function(){var s={get:function(t){return this.slice(t)[0]},contains:function(w){var v=w&&w.valueOf();for(var u=0,t=this.length;u<t;u++){if(this[u].valueOf()===v){return u}}return -1},remove:function(t){this.splice(t,1)},replace:function(t){if(!t){return}if(!c.isArray(t)){t=[t]}this.clear();this.push.apply(this,t)},clear:function(){this.length=0},copy:function(){var t=new m();t.replace(this);return t}};return function(){var t=[];t.push.apply(t,arguments);c.extend(t,s);return t}})();var q=function(t,s){c(t).data("datepicker",this);this._process_options(s);this.dates=new m();this.viewDate=this.o.defaultViewDate;this.focusDate=null;this.element=c(t);this.isInput=this.element.is("input");this.inputField=this.isInput?this.element:this.element.find("input");this.component=this.element.hasClass("date")?this.element.find(".add-on, .input-group-addon, .btn"):false;this.hasInput=this.component&&this.inputField.length;if(this.component&&this.component.length===0){this.component=false}this.isInline=!this.component&&this.element.is("div");this.picker=c(h.template);if(this._check_template(this.o.templates.leftArrow)){this.picker.find(".prev").html(this.o.templates.leftArrow)}if(this._check_template(this.o.templates.rightArrow)){this.picker.find(".next").html(this.o.templates.rightArrow)}this._buildEvents();this._attachEvents();if(this.isInline){this.picker.addClass("datepicker-inline").appendTo(this.element)}else{this.picker.addClass("datepicker-dropdown dropdown-menu")}if(this.o.rtl){this.picker.addClass("datepicker-rtl")}this.viewMode=this.o.startView;if(this.o.calendarWeeks){this.picker.find("thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan",function(u,v){return parseInt(v)+1})}this._allow_update=false;this.setStartDate(this._o.startDate);this.setEndDate(this._o.endDate);this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted);this.setDatesDisabled(this.o.datesDisabled);this.fillDow();this.fillMonths();this._allow_update=true;this.update();this.showMode();if(this.isInline){this.show()}};q.prototype={constructor:q,_resolveViewName:function(t,s){if(t===0||t==="days"||t==="month"){return 0}if(t===1||t==="months"||t==="year"){return 1}if(t===2||t==="years"||t==="decade"){return 2}if(t===3||t==="decades"||t==="century"){return 3}if(t===4||t==="centuries"||t==="millennium"){return 4}return s===g?false:s},_check_template:function(t){try{if(t===g||t===""){return false}if((t.match(/[<>]/g)||[]).length<=0){return true}var u=c(t);return u.length>0}catch(s){return false}},_process_options:function(s){this._o=c.extend({},this._o,s);var t=this.o=c.extend({},this._o);var u=t.language;if(!f[u]){u=u.split("-")[0];if(!f[u]){u=i.language}}t.language=u;t.startView=this._resolveViewName(t.startView,0);t.minViewMode=this._resolveViewName(t.minViewMode,0);t.maxViewMode=this._resolveViewName(t.maxViewMode,4);t.startView=Math.min(t.startView,t.maxViewMode);t.startView=Math.max(t.startView,t.minViewMode);if(t.multidate!==true){t.multidate=Number(t.multidate)||false;if(t.multidate!==false){t.multidate=Math.max(0,t.multidate)}}t.multidateSeparator=String(t.multidateSeparator);t.weekStart%=7;t.weekEnd=(t.weekStart+6)%7;var A=h.parseFormat(t.format);if(t.startDate!==-Infinity){if(!!t.startDate){if(t.startDate instanceof Date){t.startDate=this._local_to_utc(this._zero_time(t.startDate))}else{t.startDate=h.parseDate(t.startDate,A,t.language,t.assumeNearbyYear)}}else{t.startDate=-Infinity}}if(t.endDate!==Infinity){if(!!t.endDate){if(t.endDate instanceof Date){t.endDate=this._local_to_utc(this._zero_time(t.endDate))}else{t.endDate=h.parseDate(t.endDate,A,t.language,t.assumeNearbyYear)}}else{t.endDate=Infinity}}t.daysOfWeekDisabled=t.daysOfWeekDisabled||[];if(!c.isArray(t.daysOfWeekDisabled)){t.daysOfWeekDisabled=t.daysOfWeekDisabled.split(/[,\s]*/)}t.daysOfWeekDisabled=c.map(t.daysOfWeekDisabled,function(B){return parseInt(B,10)});t.daysOfWeekHighlighted=t.daysOfWeekHighlighted||[];if(!c.isArray(t.daysOfWeekHighlighted)){t.daysOfWeekHighlighted=t.daysOfWeekHighlighted.split(/[,\s]*/)}t.daysOfWeekHighlighted=c.map(t.daysOfWeekHighlighted,function(B){return parseInt(B,10)});t.datesDisabled=t.datesDisabled||[];if(!c.isArray(t.datesDisabled)){t.datesDisabled=[t.datesDisabled]}t.datesDisabled=c.map(t.datesDisabled,function(B){return h.parseDate(B,A,t.language,t.assumeNearbyYear)});var v=String(t.orientation).toLowerCase().split(/\s+/g),x=t.orientation.toLowerCase();v=c.grep(v,function(B){return/^auto|left|right|top|bottom$/.test(B)});t.orientation={x:"auto",y:"auto"};if(!x||x==="auto"){}else{if(v.length===1){switch(v[0]){case"top":case"bottom":t.orientation.y=v[0];break;case"left":case"right":t.orientation.x=v[0];break}}else{x=c.grep(v,function(B){return/^left|right$/.test(B)});t.orientation.x=x[0]||"auto";x=c.grep(v,function(B){return/^top|bottom$/.test(B)});t.orientation.y=x[0]||"auto"}}if(t.defaultViewDate){var y=t.defaultViewDate.year||new Date().getFullYear();var w=t.defaultViewDate.month||0;var z=t.defaultViewDate.day||1;t.defaultViewDate=n(y,w,z)}else{t.defaultViewDate=b()}},_events:[],_secondaryEvents:[],_applyEvents:function(s){for(var t=0,v,u,w;t<s.length;t++){v=s[t][0];if(s[t].length===2){u=g;w=s[t][1]}else{if(s[t].length===3){u=s[t][1];w=s[t][2]}}v.on(w,u)}},_unapplyEvents:function(s){for(var t=0,v,w,u;t<s.length;t++){v=s[t][0];if(s[t].length===2){u=g;w=s[t][1]}else{if(s[t].length===3){u=s[t][1];w=s[t][2]}}v.off(w,u)}},_buildEvents:function(){var s={keyup:c.proxy(function(t){if(c.inArray(t.keyCode,[27,37,39,38,40,32,13,9])===-1){this.update()}},this),keydown:c.proxy(this.keydown,this),paste:c.proxy(this.paste,this)};if(this.o.showOnFocus===true){s.focus=c.proxy(this.show,this)}if(this.isInput){this._events=[[this.element,s]]}else{if(this.component&&this.hasInput){this._events=[[this.inputField,s],[this.component,{click:c.proxy(this.show,this)}]]}else{this._events=[[this.element,{click:c.proxy(this.show,this),keydown:c.proxy(this.keydown,this)}]]}}this._events.push([this.element,"*",{blur:c.proxy(function(t){this._focused_from=t.target},this)}],[this.element,{blur:c.proxy(function(t){this._focused_from=t.target},this)}]);if(this.o.immediateUpdates){this._events.push([this.element,{"changeYear changeMonth":c.proxy(function(t){this.update(t.date)},this)}])}this._secondaryEvents=[[this.picker,{click:c.proxy(this.click,this)}],[c(window),{resize:c.proxy(this.place,this)}],[c(document),{mousedown:c.proxy(function(t){if(!(this.element.is(t.target)||this.element.find(t.target).length||this.picker.is(t.target)||this.picker.find(t.target).length||this.isInline)){this.hide()}},this)}]]},_attachEvents:function(){this._detachEvents();this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents();this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(u,v){var t=v||this.dates.get(-1),s=this._utc_to_local(t);this.element.trigger({type:u,date:s,dates:c.map(this.dates,this._utc_to_local),format:c.proxy(function(w,y){if(arguments.length===0){w=this.dates.length-1;y=this.o.format}else{if(typeof w==="string"){y=w;w=this.dates.length-1}}y=y||this.o.format;var x=this.dates.get(w);return h.formatDate(x,y,this.o.language)},this)})},show:function(){if(this.inputField.prop("disabled")||(this.inputField.prop("readonly")&&this.o.enableOnReadonly===false)){return}if(!this.isInline){this.picker.appendTo(this.o.container)}this.place();this.picker.show();this._attachSecondaryEvents();this._trigger("show");if((window.navigator.msMaxTouchPoints||"ontouchstart" in document)&&this.o.disableTouchKeyboard){c(this.element).blur()}return this},hide:function(){if(this.isInline||!this.picker.is(":visible")){return this}this.focusDate=null;this.picker.hide().detach();this._detachSecondaryEvents();this.viewMode=this.o.startView;this.showMode();if(this.o.forceParse&&this.inputField.val()){this.setValue()}this._trigger("hide");return this},destroy:function(){this.hide();this._detachEvents();this._detachSecondaryEvents();this.picker.remove();delete this.element.data().datepicker;if(!this.isInput){delete this.element.data().date}return this},paste:function(s){var t;if(s.originalEvent.clipboardData&&s.originalEvent.clipboardData.types&&c.inArray("text/plain",s.originalEvent.clipboardData.types)!==-1){t=s.originalEvent.clipboardData.getData("text/plain")}else{if(window.clipboardData){t=window.clipboardData.getData("Text")}else{return}}this.setDate(t);this.update();s.preventDefault()},_utc_to_local:function(s){return s&&new Date(s.getTime()+(s.getTimezoneOffset()*60000))},_local_to_utc:function(s){return s&&new Date(s.getTime()-(s.getTimezoneOffset()*60000))},_zero_time:function(s){return s&&new Date(s.getFullYear(),s.getMonth(),s.getDate())},_zero_utc_time:function(s){return s&&new Date(Date.UTC(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate()))},getDates:function(){return c.map(this.dates,this._utc_to_local)},getUTCDates:function(){return c.map(this.dates,function(s){return new Date(s)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){var s=this.dates.get(-1);if(typeof s!=="undefined"){return new Date(s)}else{return null}},clearDates:function(){if(this.inputField){this.inputField.val("")}this.update();this._trigger("changeDate");if(this.o.autoclose){this.hide()}},setDates:function(){var s=c.isArray(arguments[0])?arguments[0]:arguments;this.update.apply(this,s);this._trigger("changeDate");this.setValue();return this},setUTCDates:function(){var s=c.isArray(arguments[0])?arguments[0]:arguments;this.update.apply(this,c.map(s,this._utc_to_local));this._trigger("changeDate");this.setValue();return this},setDate:l("setDates"),setUTCDate:l("setUTCDates"),remove:l("destroy"),setValue:function(){var s=this.getFormattedDate();this.inputField.val(s);return this},getFormattedDate:function(s){if(s===g){s=this.o.format}var t=this.o.language;return c.map(this.dates,function(u){return h.formatDate(u,s,t)}).join(this.o.multidateSeparator)},getStartDate:function(){return this.o.startDate},setStartDate:function(s){this._process_options({startDate:s});this.update();this.updateNavArrows();return this},getEndDate:function(){return this.o.endDate},setEndDate:function(s){this._process_options({endDate:s});this.update();this.updateNavArrows();return this},setDaysOfWeekDisabled:function(s){this._process_options({daysOfWeekDisabled:s});this.update();this.updateNavArrows();return this},setDaysOfWeekHighlighted:function(s){this._process_options({daysOfWeekHighlighted:s});this.update();return this},setDatesDisabled:function(s){this._process_options({datesDisabled:s});this.update();this.updateNavArrows()},place:function(){if(this.isInline){return this}var I=this.picker.outerWidth(),D=this.picker.outerHeight(),w=10,u=c(this.o.container),y=u.width(),x=this.o.container==="body"?c(document).scrollTop():u.scrollTop(),A=u.offset();var C=[];this.element.parents().each(function(){var J=c(this).css("z-index");if(J!=="auto"&&J!==0){C.push(parseInt(J))}});var F=Math.max.apply(Math,C)+this.o.zIndexOffset;var B=this.component?this.component.parent().offset():this.element.offset();var H=this.component?this.component.outerHeight(true):this.element.outerHeight(false);var v=this.component?this.component.outerWidth(true):this.element.outerWidth(false);var z=B.left-A.left,E=B.top-A.top;if(this.o.container!=="body"){E+=x}this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left");if(this.o.orientation.x!=="auto"){this.picker.addClass("datepicker-orient-"+this.o.orientation.x);if(this.o.orientation.x==="right"){z-=I-v}}else{if(B.left<0){this.picker.addClass("datepicker-orient-left");z-=B.left-w}else{if(z+I>y){this.picker.addClass("datepicker-orient-right");z+=v-I}else{this.picker.addClass("datepicker-orient-left")}}}var s=this.o.orientation.y,t;if(s==="auto"){t=-x+E-D;s=t<0?"bottom":"top"}this.picker.addClass("datepicker-orient-"+s);if(s==="top"){E-=D+parseInt(this.picker.css("padding-top"))}else{E+=H}if(this.o.rtl){var G=y-(z+v);this.picker.css({top:E,right:G,zIndex:F})}else{this.picker.css({top:E,left:z,zIndex:F})}return this},_allow_update:true,update:function(){if(!this._allow_update){return this}var t=this.dates.copy(),u=[],s=false;if(arguments.length){c.each(arguments,c.proxy(function(w,v){if(v instanceof Date){v=this._local_to_utc(v)}u.push(v)},this));s=true}else{u=this.isInput?this.element.val():this.element.data("date")||this.inputField.val();if(u&&this.o.multidate){u=u.split(this.o.multidateSeparator)}else{u=[u]}delete this.element.data().date}u=c.map(u,c.proxy(function(v){return h.parseDate(v,this.o.format,this.o.language,this.o.assumeNearbyYear)},this));u=c.grep(u,c.proxy(function(v){return(!this.dateWithinRange(v)||!v)},this),true);this.dates.replace(u);if(this.dates.length){this.viewDate=new Date(this.dates.get(-1))}else{if(this.viewDate<this.o.startDate){this.viewDate=new Date(this.o.startDate)}else{if(this.viewDate>this.o.endDate){this.viewDate=new Date(this.o.endDate)}else{this.viewDate=this.o.defaultViewDate}}}if(s){this.setValue()}else{if(u.length){if(String(t)!==String(this.dates)){this._trigger("changeDate")}}}if(!this.dates.length&&t.length){this._trigger("clearDate")}this.fill();this.element.change();return this},fillDow:function(){var s=this.o.weekStart,t="<tr>";if(this.o.calendarWeeks){this.picker.find(".datepicker-days .datepicker-switch").attr("colspan",function(u,v){return parseInt(v)+1});t+='<th class="cw">&#160;</th>'}while(s<this.o.weekStart+7){t+='<th class="dow';if(c.inArray(s,this.o.daysOfWeekDisabled)>-1){t+=" disabled"}t+='">'+f[this.o.language].daysMin[(s++)%7]+"</th>"}t+="</tr>";this.picker.find(".datepicker-days thead").append(t)},fillMonths:function(){var s=this._utc_to_local(this.viewDate);var u="",t=0;while(t<12){var v=s&&s.getMonth()===t?" focused":"";u+='<span class="month'+v+'">'+f[this.o.language].monthsShort[t++]+"</span>"}this.picker.find(".datepicker-months td").html(u)},setRange:function(s){if(!s||!s.length){delete this.range}else{this.range=c.map(s,function(t){return t.valueOf()})}this.fill()},getClassNames:function(u){var s=[],v=this.viewDate.getUTCFullYear(),w=this.viewDate.getUTCMonth(),t=new Date();if(u.getUTCFullYear()<v||(u.getUTCFullYear()===v&&u.getUTCMonth()<w)){s.push("old")}else{if(u.getUTCFullYear()>v||(u.getUTCFullYear()===v&&u.getUTCMonth()>w)){s.push("new")}}if(this.focusDate&&u.valueOf()===this.focusDate.valueOf()){s.push("focused")}if(this.o.todayHighlight&&u.getUTCFullYear()===t.getFullYear()&&u.getUTCMonth()===t.getMonth()&&u.getUTCDate()===t.getDate()){s.push("today")}if(this.dates.contains(u)!==-1){s.push("active")}if(!this.dateWithinRange(u)){s.push("disabled")}if(this.dateIsDisabled(u)){s.push("disabled","disabled-date")}if(c.inArray(u.getUTCDay(),this.o.daysOfWeekHighlighted)!==-1){s.push("highlighted")}if(this.range){if(u>this.range[0]&&u<this.range[this.range.length-1]){s.push("range")}if(c.inArray(u.valueOf(),this.range)!==-1){s.push("selected")}if(u.valueOf()===this.range[0]){s.push("range-start")}if(u.valueOf()===this.range[this.range.length-1]){s.push("range-end")}}return s},_fill_yearsView:function(G,y,E,w,K,F,x,u){var z,B,A,I,D,s,v,H,J,t,C;z="";B=this.picker.find(G);A=parseInt(K/E,10)*E;D=parseInt(F/w,10)*w;s=parseInt(x/w,10)*w;I=c.map(this.dates,function(L){return parseInt(L.getUTCFullYear()/w,10)*w});B.find(".datepicker-switch").text(A+"-"+(A+w*9));v=A-w;for(H=-1;H<11;H+=1){J=[y];t=null;if(H===-1){J.push("old")}else{if(H===10){J.push("new")}}if(c.inArray(v,I)!==-1){J.push("active")}if(v<D||v>s){J.push("disabled")}if(v===this.viewDate.getFullYear()){J.push("focused")}if(u!==c.noop){C=u(new Date(v,0,1));if(C===g){C={}}else{if(typeof(C)==="boolean"){C={enabled:C}}else{if(typeof(C)==="string"){C={classes:C}}}}if(C.enabled===false){J.push("disabled")}if(C.classes){J=J.concat(C.classes.split(/\s+/))}if(C.tooltip){t=C.tooltip}}z+='<span class="'+J.join(" ")+'"'+(t?' title="'+t+'"':"")+">"+v+"</span>";v+=w}B.find("td").html(z)},fill:function(){var N=new Date(this.viewDate),D=N.getUTCFullYear(),O=N.getUTCMonth(),I=this.o.startDate!==-Infinity?this.o.startDate.getUTCFullYear():-Infinity,L=this.o.startDate!==-Infinity?this.o.startDate.getUTCMonth():-Infinity,A=this.o.endDate!==Infinity?this.o.endDate.getUTCFullYear():Infinity,J=this.o.endDate!==Infinity?this.o.endDate.getUTCMonth():Infinity,B=f[this.o.language].today||f.en.today||"",u=f[this.o.language].clear||f.en.clear||"",H=f[this.o.language].titleFormat||f.en.titleFormat,w,F;if(isNaN(D)||isNaN(O)){return}this.picker.find(".datepicker-days .datepicker-switch").text(h.formatDate(N,H,this.o.language));this.picker.find("tfoot .today").text(B).toggle(this.o.todayBtn!==false);this.picker.find("tfoot .clear").text(u).toggle(this.o.clearBtn!==false);this.picker.find("thead .datepicker-title").text(this.o.title).toggle(this.o.title!=="");this.updateNavArrows();this.fillMonths();var P=n(D,O-1,28),K=h.getDaysInMonth(P.getUTCFullYear(),P.getUTCMonth());P.setUTCDate(K);P.setUTCDate(K-(P.getUTCDay()-this.o.weekStart+7)%7);var s=new Date(P);if(P.getUTCFullYear()<100){s.setUTCFullYear(P.getUTCFullYear())}s.setUTCDate(s.getUTCDate()+42);s=s.valueOf();var C=[];var G;while(P.valueOf()<s){if(P.getUTCDay()===this.o.weekStart){C.push("<tr>");if(this.o.calendarWeeks){var t=new Date(+P+(this.o.weekStart-P.getUTCDay()-7)%7*86400000),x=new Date(Number(t)+(7+4-t.getUTCDay())%7*86400000),v=new Date(Number(v=n(x.getUTCFullYear(),0,1))+(7+4-v.getUTCDay())%7*86400000),E=(x-v)/86400000/7+1;C.push('<td class="cw">'+E+"</td>")}}G=this.getClassNames(P);G.push("day");if(this.o.beforeShowDay!==c.noop){F=this.o.beforeShowDay(this._utc_to_local(P));if(F===g){F={}}else{if(typeof(F)==="boolean"){F={enabled:F}}else{if(typeof(F)==="string"){F={classes:F}}}}if(F.enabled===false){G.push("disabled")}if(F.classes){G=G.concat(F.classes.split(/\s+/))}if(F.tooltip){w=F.tooltip}}if(c.isFunction(c.uniqueSort)){G=c.uniqueSort(G)}else{G=c.unique(G)}C.push('<td class="'+G.join(" ")+'"'+(w?' title="'+w+'"':"")+">"+P.getUTCDate()+"</td>");w=null;if(P.getUTCDay()===this.o.weekEnd){C.push("</tr>")}P.setUTCDate(P.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(C.join(""));var M=f[this.o.language].monthsTitle||f.en.monthsTitle||"Months";var z=this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode<2?M:D).end().find("span").removeClass("active");c.each(this.dates,function(Q,R){if(R.getUTCFullYear()===D){z.eq(R.getUTCMonth()).addClass("active")}});if(D<I||D>A){z.addClass("disabled")}if(D===I){z.slice(0,L).addClass("disabled")}if(D===A){z.slice(J+1).addClass("disabled")}if(this.o.beforeShowMonth!==c.noop){var y=this;c.each(z,function(Q,S){var T=new Date(D,Q,1);var R=y.o.beforeShowMonth(T);if(R===g){R={}}else{if(typeof(R)==="boolean"){R={enabled:R}}else{if(typeof(R)==="string"){R={classes:R}}}}if(R.enabled===false&&!c(S).hasClass("disabled")){c(S).addClass("disabled")}if(R.classes){c(S).addClass(R.classes)}if(R.tooltip){c(S).prop("title",R.tooltip)}})}this._fill_yearsView(".datepicker-years","year",10,1,D,I,A,this.o.beforeShowYear);this._fill_yearsView(".datepicker-decades","decade",100,10,D,I,A,this.o.beforeShowDecade);this._fill_yearsView(".datepicker-centuries","century",1000,100,D,I,A,this.o.beforeShowCentury)},updateNavArrows:function(){if(!this._allow_update){return}var u=new Date(this.viewDate),s=u.getUTCFullYear(),t=u.getUTCMonth();switch(this.viewMode){case 0:if(this.o.startDate!==-Infinity&&s<=this.o.startDate.getUTCFullYear()&&t<=this.o.startDate.getUTCMonth()){this.picker.find(".prev").css({visibility:"hidden"})}else{this.picker.find(".prev").css({visibility:"visible"})}if(this.o.endDate!==Infinity&&s>=this.o.endDate.getUTCFullYear()&&t>=this.o.endDate.getUTCMonth()){this.picker.find(".next").css({visibility:"hidden"})}else{this.picker.find(".next").css({visibility:"visible"})}break;case 1:case 2:case 3:case 4:if(this.o.startDate!==-Infinity&&s<=this.o.startDate.getUTCFullYear()||this.o.maxViewMode<2){this.picker.find(".prev").css({visibility:"hidden"})}else{this.picker.find(".prev").css({visibility:"visible"})}if(this.o.endDate!==Infinity&&s>=this.o.endDate.getUTCFullYear()||this.o.maxViewMode<2){this.picker.find(".next").css({visibility:"hidden"})}else{this.picker.find(".next").css({visibility:"visible"})}break}},click:function(w){w.preventDefault();w.stopPropagation();var x,t,A,z,y,s,u;x=c(w.target);if(x.hasClass("datepicker-switch")){this.showMode(1)}var v=x.closest(".prev, .next");if(v.length>0){t=h.modes[this.viewMode].navStep*(v.hasClass("prev")?-1:1);if(this.viewMode===0){this.viewDate=this.moveMonth(this.viewDate,t);this._trigger("changeMonth",this.viewDate)}else{this.viewDate=this.moveYear(this.viewDate,t);if(this.viewMode===1){this._trigger("changeYear",this.viewDate)}}this.fill()}if(x.hasClass("today")&&!x.hasClass("day")){this.showMode(-2);this._setDate(b(),this.o.todayBtn==="linked"?null:"view")}if(x.hasClass("clear")){this.clearDates()}if(!x.hasClass("disabled")){if(x.hasClass("day")){A=parseInt(x.text(),10)||1;z=this.viewDate.getUTCFullYear();y=this.viewDate.getUTCMonth();if(x.hasClass("old")){if(y===0){y=11;z=z-1;s=true;u=true}else{y=y-1;s=true}}if(x.hasClass("new")){if(y===11){y=0;z=z+1;s=true;u=true}else{y=y+1;s=true}}this._setDate(n(z,y,A));if(u){this._trigger("changeYear",this.viewDate)}if(s){this._trigger("changeMonth",this.viewDate)}}if(x.hasClass("month")){this.viewDate.setUTCDate(1);A=1;y=x.parent().find("span").index(x);z=this.viewDate.getUTCFullYear();this.viewDate.setUTCMonth(y);this._trigger("changeMonth",this.viewDate);if(this.o.minViewMode===1){this._setDate(n(z,y,A));this.showMode()}else{this.showMode(-1)}this.fill()}if(x.hasClass("year")||x.hasClass("decade")||x.hasClass("century")){this.viewDate.setUTCDate(1);A=1;y=0;z=parseInt(x.text(),10)||0;this.viewDate.setUTCFullYear(z);if(x.hasClass("year")){this._trigger("changeYear",this.viewDate);if(this.o.minViewMode===2){this._setDate(n(z,y,A))}}if(x.hasClass("decade")){this._trigger("changeDecade",this.viewDate);if(this.o.minViewMode===3){this._setDate(n(z,y,A))}}if(x.hasClass("century")){this._trigger("changeCentury",this.viewDate);if(this.o.minViewMode===4){this._setDate(n(z,y,A))}}this.showMode(-1);this.fill()}}if(this.picker.is(":visible")&&this._focused_from){c(this._focused_from).focus()}delete this._focused_from},_toggle_multidate:function(t){var s=this.dates.contains(t);if(!t){this.dates.clear()}if(s!==-1){if(this.o.multidate===true||this.o.multidate>1||this.o.toggleActive){this.dates.remove(s)}}else{if(this.o.multidate===false){this.dates.clear();this.dates.push(t)}else{this.dates.push(t)}}if(typeof this.o.multidate==="number"){while(this.dates.length>this.o.multidate){this.dates.remove(0)}}},_setDate:function(s,t){if(!t||t==="date"){this._toggle_multidate(s&&new Date(s))}if(!t||t==="view"){this.viewDate=s&&new Date(s)}this.fill();this.setValue();if(!t||t!=="view"){this._trigger("changeDate")}if(this.inputField){this.inputField.change()}if(this.o.autoclose&&(!t||t==="date")){this.hide()}},moveDay:function(u,t){var s=new Date(u);s.setUTCDate(u.getUTCDate()+t);return s},moveWeek:function(t,s){return this.moveDay(t,s*7)},moveMonth:function(s,t){if(!d(s)){return this.o.defaultViewDate}if(!t){return s}var w=new Date(s.valueOf()),A=w.getUTCDate(),x=w.getUTCMonth(),v=Math.abs(t),z,y;t=t>0?1:-1;if(v===1){y=t===-1?function(){return w.getUTCMonth()===x}:function(){return w.getUTCMonth()!==z};z=x+t;w.setUTCMonth(z);if(z<0||z>11){z=(z+12)%12}}else{for(var u=0;u<v;u++){w=this.moveMonth(w,t)}z=w.getUTCMonth();w.setUTCDate(A);y=function(){return z!==w.getUTCMonth()}}while(y()){w.setUTCDate(--A);w.setUTCMonth(z)}return w},moveYear:function(t,s){return this.moveMonth(t,s*12)},moveAvailableDate:function(t,s,u){do{t=this[u](t,s);if(!this.dateWithinRange(t)){return false}u="moveDay"}while(this.dateIsDisabled(t));return t},weekOfDateIsDisabled:function(s){return c.inArray(s.getUTCDay(),this.o.daysOfWeekDisabled)!==-1},dateIsDisabled:function(s){return(this.weekOfDateIsDisabled(s)||c.grep(this.o.datesDisabled,function(t){return o(s,t)}).length>0)},dateWithinRange:function(s){return s>=this.o.startDate&&s<=this.o.endDate},keydown:function(w){if(!this.picker.is(":visible")){if(w.keyCode===40||w.keyCode===27){this.show();w.stopPropagation()}return}var t=false,s,u,v=this.focusDate||this.viewDate;switch(w.keyCode){case 27:if(this.focusDate){this.focusDate=null;this.viewDate=this.dates.get(-1)||this.viewDate;this.fill()}else{this.hide()}w.preventDefault();w.stopPropagation();break;case 37:case 38:case 39:case 40:if(!this.o.keyboardNavigation||this.o.daysOfWeekDisabled.length===7){break}s=w.keyCode===37||w.keyCode===38?-1:1;if(this.viewMode===0){if(w.ctrlKey){u=this.moveAvailableDate(v,s,"moveYear");if(u){this._trigger("changeYear",this.viewDate)}}else{if(w.shiftKey){u=this.moveAvailableDate(v,s,"moveMonth");if(u){this._trigger("changeMonth",this.viewDate)}}else{if(w.keyCode===37||w.keyCode===39){u=this.moveAvailableDate(v,s,"moveDay")}else{if(!this.weekOfDateIsDisabled(v)){u=this.moveAvailableDate(v,s,"moveWeek")}}}}}else{if(this.viewMode===1){if(w.keyCode===38||w.keyCode===40){s=s*4}u=this.moveAvailableDate(v,s,"moveMonth")}else{if(this.viewMode===2){if(w.keyCode===38||w.keyCode===40){s=s*4}u=this.moveAvailableDate(v,s,"moveYear")}}}if(u){this.focusDate=this.viewDate=u;this.setValue();this.fill();w.preventDefault()}break;case 13:if(!this.o.forceParse){break}v=this.focusDate||this.dates.get(-1)||this.viewDate;if(this.o.keyboardNavigation){this._toggle_multidate(v);t=true}this.focusDate=null;this.viewDate=this.dates.get(-1)||this.viewDate;this.setValue();this.fill();if(this.picker.is(":visible")){w.preventDefault();w.stopPropagation();if(this.o.autoclose){this.hide()}}break;case 9:this.focusDate=null;this.viewDate=this.dates.get(-1)||this.viewDate;this.fill();this.hide();break}if(t){if(this.dates.length){this._trigger("changeDate")}else{this._trigger("clearDate")}if(this.inputField){this.inputField.change()}}},showMode:function(s){if(s){this.viewMode=Math.max(this.o.minViewMode,Math.min(this.o.maxViewMode,this.viewMode+s))}this.picker.children("div").hide().filter(".datepicker-"+h.modes[this.viewMode].clsName).show();this.updateNavArrows()}};var j=function(t,s){c(t).data("datepicker",this);this.element=c(t);this.inputs=c.map(s.inputs,function(u){return u.jquery?u[0]:u});delete s.inputs;r.call(c(this.inputs),s).on("changeDate",c.proxy(this.dateUpdated,this));this.pickers=c.map(this.inputs,function(u){return c(u).data("datepicker")});this.updateDates()};j.prototype={updateDates:function(){this.dates=c.map(this.pickers,function(s){return s.getUTCDate()});this.updateRanges()},updateRanges:function(){var s=c.map(this.dates,function(t){return t.valueOf()});c.each(this.pickers,function(t,u){u.setRange(s)})},dateUpdated:function(x){if(this.updating){return}this.updating=true;var y=c(x.target).data("datepicker");if(typeof(y)==="undefined"){return}var w=y.getUTCDate(),v=c.inArray(x.target,this.inputs),u=v-1,t=v+1,s=this.inputs.length;if(v===-1){return}c.each(this.pickers,function(z,A){if(!A.getUTCDate()){A.setUTCDate(w)}});if(w<this.dates[u]){while(u>=0&&w<this.dates[u]){this.pickers[u--].setUTCDate(w)}}else{if(w>this.dates[t]){while(t<s&&w>this.dates[t]){this.pickers[t++].setUTCDate(w)}}}this.updateDates();delete this.updating},remove:function(){c.map(this.pickers,function(s){s.remove()});delete this.element.data().datepicker}};function k(v,y){var x=c(v).data(),s={},w,u=new RegExp("^"+y.toLowerCase()+"([A-Z])");y=new RegExp("^"+y.toLowerCase());function z(B,A){return A.toLowerCase()}for(var t in x){if(y.test(t)){w=t.replace(u,z);s[w]=x[t]}}return s}function p(u){var s={};if(!f[u]){u=u.split("-")[0];if(!f[u]){return}}var t=f[u];c.each(e,function(w,v){if(v in t){s[v]=t[v]}});return s}var a=c.fn.datepicker;var r=function(u){var s=Array.apply(null,arguments);s.shift();var t;this.each(function(){var B=c(this),A=B.data("datepicker"),w=typeof u==="object"&&u;if(!A){var y=k(this,"date"),v=c.extend({},i,y,w),x=p(v.language),z=c.extend({},i,x,y,w);if(B.hasClass("input-daterange")||z.inputs){c.extend(z,{inputs:z.inputs||B.find("input").toArray()});A=new j(this,z)}else{A=new q(this,z)}B.data("datepicker",A)}if(typeof u==="string"&&typeof A[u]==="function"){t=A[u].apply(A,s)}});if(t===g||t instanceof q||t instanceof j){return this}if(this.length>1){throw new Error("Using only allowed for the collection of a single element ("+u+" function)")}else{return t}};c.fn.datepicker=r;var i=c.fn.datepicker.defaults={assumeNearbyYear:false,autoclose:false,beforeShowDay:c.noop,beforeShowMonth:c.noop,beforeShowYear:c.noop,beforeShowDecade:c.noop,beforeShowCentury:c.noop,calendarWeeks:false,clearBtn:false,toggleActive:false,daysOfWeekDisabled:[],daysOfWeekHighlighted:[],datesDisabled:[],endDate:Infinity,forceParse:true,format:"mm/dd/yyyy",keyboardNavigation:true,language:"en",minViewMode:0,maxViewMode:4,multidate:false,multidateSeparator:",",orientation:"auto",rtl:false,startDate:-Infinity,startView:0,todayBtn:false,todayHighlight:false,weekStart:0,disableTouchKeyboard:false,enableOnReadonly:true,showOnFocus:true,zIndexOffset:10,container:"body",immediateUpdates:false,title:"",templates:{leftArrow:"&laquo;",rightArrow:"&raquo;"}};var e=c.fn.datepicker.locale_opts=["format","rtl","weekStart"];c.fn.datepicker.Constructor=q;var f=c.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM yyyy"}};var h={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10},{clsName:"decades",navFnc:"FullDecade",navStep:100},{clsName:"centuries",navFnc:"FullCentury",navStep:1000}],isLeapYear:function(s){return(((s%4===0)&&(s%100!==0))||(s%400===0))},getDaysInMonth:function(s,t){return[31,(h.isLeapYear(s)?29:28),31,30,31,30,31,31,30,31,30,31][t]},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,parseFormat:function(u){if(typeof u.toValue==="function"&&typeof u.toDisplay==="function"){return u}var s=u.replace(this.validParts,"\0").split("\0"),t=u.match(this.validParts);if(!s||!s.length||!t||t.length===0){throw new Error("Invalid date format.")}return{separators:s,parts:t}},parseDate:function(N,K,H,t){if(!N){return g}if(N instanceof Date){return N}if(typeof K==="string"){K=h.parseFormat(K)}if(K.toValue){return K.toValue(N,K,H)}var z=/([\-+]\d+)([dmwy])/,F=N.match(/([\-+]\d+)([dmwy])/g),y={d:"moveDay",m:"moveMonth",w:"moveWeek",y:"moveYear"},O={yesterday:"-1d",today:"+0d",tomorrow:"+1d"},G,E,J,x;if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(N)){N=new Date();for(J=0;J<F.length;J++){G=z.exec(F[J]);E=parseInt(G[1]);x=y[G[2]];N=q.prototype[x](N,E)}return n(N.getUTCFullYear(),N.getUTCMonth(),N.getUTCDate())}if(typeof O[N]!=="undefined"){N=O[N];F=N.match(/([\-+]\d+)([dmwy])/g);if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(N)){N=new Date();for(J=0;J<F.length;J++){G=z.exec(F[J]);E=parseInt(G[1]);x=y[G[2]];N=q.prototype[x](N,E)}return n(N.getUTCFullYear(),N.getUTCMonth(),N.getUTCDate())}}F=N&&N.match(this.nonpunctuation)||[];N=new Date();function w(Q,s){if(s===true){s=10}if(Q<100){Q+=2000;if(Q>((new Date()).getFullYear()+s)){Q-=100}}return Q}var A={},M=["yyyy","yy","M","MM","m","mm","d","dd"],D={yyyy:function(Q,s){return Q.setUTCFullYear(t?w(s,t):s)},yy:function(Q,s){return Q.setUTCFullYear(t?w(s,t):s)},m:function(Q,s){if(isNaN(Q)){return Q}s-=1;while(s<0){s+=12}s%=12;Q.setUTCMonth(s);while(Q.getUTCMonth()!==s){Q.setUTCDate(Q.getUTCDate()-1)}return Q},d:function(Q,s){return Q.setUTCDate(s)}},P,v;D.M=D.MM=D.mm=D.m;D.dd=D.d;N=b();var u=K.parts.slice();if(F.length!==u.length){u=c(u).filter(function(s,Q){return c.inArray(Q,M)!==-1}).toArray()}function L(){var s=this.slice(0,F[J].length),Q=F[J].slice(0,s.length);return s.toLowerCase()===Q.toLowerCase()}if(F.length===u.length){var I;for(J=0,I=u.length;J<I;J++){P=parseInt(F[J],10);G=u[J];if(isNaN(P)){switch(G){case"MM":v=c(f[H].months).filter(L);P=c.inArray(v[0],f[H].months)+1;break;case"M":v=c(f[H].monthsShort).filter(L);P=c.inArray(v[0],f[H].monthsShort)+1;break}}A[G]=P}var B,C;for(J=0;J<M.length;J++){C=M[J];if(C in A&&!isNaN(A[C])){B=new Date(N);D[C](B,A[C]);if(!isNaN(B)){N=B}}}}return N},formatDate:function(s,w,y){if(!s){return""}if(typeof w==="string"){w=h.parseFormat(w)}if(w.toDisplay){return w.toDisplay(s,w,y)}var x={d:s.getUTCDate(),D:f[y].daysShort[s.getUTCDay()],DD:f[y].days[s.getUTCDay()],m:s.getUTCMonth()+1,M:f[y].monthsShort[s.getUTCMonth()],MM:f[y].months[s.getUTCMonth()],yy:s.getUTCFullYear().toString().substring(2),yyyy:s.getUTCFullYear()};x.dd=(x.d<10?"0":"")+x.d;x.mm=(x.m<10?"0":"")+x.m;s=[];var v=c.extend([],w.separators);for(var u=0,t=w.parts.length;u<=t;u++){if(v.length){s.push(v.shift())}s.push(x[w.parts[u]])}return s.join("")},headTemplate:'<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};h.template='<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">'+h.headTemplate+"<tbody></tbody>"+h.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+h.headTemplate+h.contTemplate+h.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+h.headTemplate+h.contTemplate+h.footTemplate+'</table></div><div class="datepicker-decades"><table class="table-condensed">'+h.headTemplate+h.contTemplate+h.footTemplate+'</table></div><div class="datepicker-centuries"><table class="table-condensed">'+h.headTemplate+h.contTemplate+h.footTemplate+"</table></div></div>";c.fn.datepicker.DPGlobal=h;c.fn.datepicker.noConflict=function(){c.fn.datepicker=a;return this};c.fn.datepicker.version="1.6.4";c(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(t){var s=c(this);if(s.data("datepicker")){return}t.preventDefault();r.call(s,"show")});c(function(){r.call(c('[data-provide="datepicker-inline"]'))})}));