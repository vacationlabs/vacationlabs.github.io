if(typeof deconcept=="undefined"){var deconcept=new Object();}
if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}
if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object();}
deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a,_b){if(!document.getElementById){return;}
this.DETECT_KEY=_b?_b:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}
if(id){this.setAttribute("id",id);}
if(w){this.setAttribute("width",w);}
if(h){this.setAttribute("height",h);}
if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}
this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(c){this.addParam("bgcolor",c);}
var q=_8?_8:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",_7);this.setAttribute("doExpressInstall",false);var _d=(_9)?_9:window.location;this.setAttribute("xiRedirectUrl",_d);this.setAttribute("redirectUrl","");if(_a){this.setAttribute("redirectUrl",_a);}};deconcept.SWFObject.prototype={setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16.push(key+"="+_18[key]);}
return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");}
_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}
var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");}
_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}
var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}
return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}
if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}
return false;}};deconcept.SWFObjectUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}
catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}
catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}
catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}
return _23;};deconcept.PlayerVersion=function(_27){this.major=_27[0]!=null?parseInt(_27[0]):0;this.minor=_27[1]!=null?parseInt(_27[1]):0;this.rev=_27[2]!=null?parseInt(_27[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}
if(this.major>fv.major){return true;}
if(this.minor<fv.minor){return false;}
if(this.minor>fv.minor){return true;}
if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_29){var q=document.location.search||document.location.hash;if(q){var _2b=q.substring(1).split("&");for(var i=0;i<_2b.length;i++){if(_2b[i].substring(0,_2b[i].indexOf("="))==_29){return _2b[i].substring((_2b[i].indexOf("=")+1));}}}
return"";}};deconcept.SWFObjectUtil.cleanupSWFs=function(){if(window.opera||!document.all){return;}
var _2d=document.getElementsByTagName("OBJECT");for(var i=0;i<_2d.length;i++){_2d[i].style.display="none";for(var x in _2d[i]){if(typeof _2d[i][x]=="function"){_2d[i][x]=function(){};}}}};deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};if(typeof window.onunload=="function"){var _30=window.onunload;window.onunload=function(){deconcept.SWFObjectUtil.cleanupSWFs();_30();};}else{window.onunload=deconcept.SWFObjectUtil.cleanupSWFs;}};if(typeof window.onbeforeunload=="function"){var oldBeforeUnload=window.onbeforeunload;window.onbeforeunload=function(){deconcept.SWFObjectUtil.prepUnload();oldBeforeUnload();};}else{window.onbeforeunload=deconcept.SWFObjectUtil.prepUnload;}
if(Array.prototype.push==null){Array.prototype.push=function(_31){this[this.length]=_31;return this.length;};}
var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;jQuery.fn.extend({everyTime:function(interval,label,fn,times,belay){return this.each(function(){jQuery.timer.add(this,interval,label,fn,times,belay);});},oneTime:function(interval,label,fn){return this.each(function(){jQuery.timer.add(this,interval,label,fn,1);});},stopTime:function(label,fn){return this.each(function(){jQuery.timer.remove(this,label,fn);});}});jQuery.extend({timer:{guid:1,global:{},regex:/^([0-9]+)\s*(.*s)?$/,powers:{'ms':1,'cs':10,'ds':100,'s':1000,'das':10000,'hs':100000,'ks':1000000},timeParse:function(value){if(value==undefined||value==null)
return null;var result=this.regex.exec(jQuery.trim(value.toString()));if(result[2]){var num=parseInt(result[1],10);var mult=this.powers[result[2]]||1;return num*mult;}else{return value;}},add:function(element,interval,label,fn,times,belay){var counter=0;if(jQuery.isFunction(label)){if(!times)
times=fn;fn=label;label=interval;}
interval=jQuery.timer.timeParse(interval);if(typeof interval!='number'||isNaN(interval)||interval<=0)
return;if(times&&times.constructor!=Number){belay=!!times;times=0;}
times=times||0;belay=belay||false;if(!element.$timers)
element.$timers={};if(!element.$timers[label])
element.$timers[label]={};fn.$timerID=fn.$timerID||this.guid++;var handler=function(){if(belay&&this.inProgress)
return;this.inProgress=true;if((++counter>times&&times!==0)||fn.call(element,counter)===false)
jQuery.timer.remove(element,label,fn);this.inProgress=false;};handler.$timerID=fn.$timerID;if(!element.$timers[label][fn.$timerID])
element.$timers[label][fn.$timerID]=window.setInterval(handler,interval);if(!this.global[label])
this.global[label]=[];this.global[label].push(element);},remove:function(element,label,fn){var timers=element.$timers,ret;if(timers){if(!label){for(label in timers)
this.remove(element,label,fn);}else if(timers[label]){if(fn){if(fn.$timerID){window.clearInterval(timers[label][fn.$timerID]);delete timers[label][fn.$timerID];}}else{for(var fn in timers[label]){window.clearInterval(timers[label][fn]);delete timers[label][fn];}}
for(ret in timers[label])break;if(!ret){ret=null;delete timers[label];}}
for(ret in timers)break;if(!ret)
element.$timers=null;}}}});if(jQuery.browser.msie)
jQuery(window).one("unload",function(){var global=jQuery.timer.global;for(var label in global){var els=global[label],i=els.length;while(--i)
jQuery.timer.remove(els[i],label);}});Carousel=function(numberOfSlides,slideChangeInterval,pauseInterval){this.numberOfSlides=numberOfSlides;this.slideChangeInterval=slideChangeInterval;this.pauseInterval=pauseInterval;this.currentSlide=0;this.currentlyChanging=false;var thisCarousel=this;this.startSlideShow=function(){jQuery("#carousel-buttons").removeClass('hidden');jQuery(".carousel-resume").addClass('hidden');thisCarousel.currentSlide=0;thisCarousel.currentlyChanging=false;jQuery('.carousel-button'+thisCarousel.currentSlide).addClass('current-slide');jQuery(thisCarousel).everyTime(thisCarousel.slideChangeInterval,'slideTransition',function(){thisCarousel.changeToSlide(thisCarousel.currentSlide+1);});};this.stopSlideShow=function(){jQuery(thisCarousel).stopTime('slideTransition');thisCarousel.currentlyChanging=false;};this.resumeSlideShow=function(){jQuery(thisCarousel).stopTime('pauseTimeOut');jQuery('.carousel-pause').removeClass('hidden');jQuery('.carousel-resume').addClass('hidden');jQuery(thisCarousel).everyTime(thisCarousel.slideChangeInterval,'slideTransition',function(){thisCarousel.changeToSlide(thisCarousel.currentSlide+1);});};this.pauseSlideShowAt=function(index){if(!thisCarousel.currentlyChanging){thisCarousel.stopSlideShow();jQuery(thisCarousel).stopTime('pauseTimeOut');if(thisCarousel.currentSlide!==index)
{thisCarousel.changeToSlide(index);}
jQuery('.carousel-pause').addClass('hidden');jQuery('.carousel-resume').removeClass('hidden');jQuery(thisCarousel).oneTime(thisCarousel.pauseInterval,'pauseTimeOut',function(){thisCarousel.resumeSlideShow();});}};this.changeToSlide=function(index){if(!thisCarousel.currentlyChanging){thisCarousel.currentlyChanging=true;jQuery('#carousel-slide'+thisCarousel.currentSlide).fadeOut('normal',function(){jQuery('.carousel-button'+thisCarousel.currentSlide).removeClass('current-slide');thisCarousel.setCurrentSlide(index);jQuery('#carousel-slide'+thisCarousel.currentSlide).fadeIn('normal',function(){thisCarousel.currentlyChanging=false;});jQuery('.carousel-button'+thisCarousel.currentSlide).addClass('current-slide');});}};this.setCurrentSlide=function(newSlide){if(newSlide<0){newSlide+=thisCarousel.numberOfSlides;}
thisCarousel.currentSlide=newSlide%thisCarousel.numberOfSlides;};jQuery('.carousel-pause').click(function(){thisCarousel.pauseSlideShowAt(thisCarousel.currentSlide);return false;});jQuery('.carousel-resume').click(function(){thisCarousel.resumeSlideShow();return false;});jQuery('.carousel-previous').click(function(){thisCarousel.pauseSlideShowAt(thisCarousel.currentSlide-1);return false;});jQuery('.carousel-next').click(function(){thisCarousel.pauseSlideShowAt(thisCarousel.currentSlide+1);return false;});jQuery('.carouselText a').hover(function(){$(this.parentNode).addClass('hover');},function(){$(this.parentNode).removeClass('hover');});function buttonForSlide(slideNumber)
{return function(){thisCarousel.pauseSlideShowAt(slideNumber);return false;};}
for(var i=0;i<thisCarousel.numberOfSlides;i++){jQuery('.carousel-button'+i).click(buttonForSlide(i));}};