!function(t){"use strict";var e=[],i=!1,s=!1,n=!1,o={containerSelector:"body",type:"html",direction:"top",duration:300,transition:"ease",easingPluginTransition:"easeInCirc",useCSS:!0,useEasingPlugin:!1,imageURL:!1,iframeURL:!1,autoPlayVideo:!0,youtubeID:!1,youTubeTheme:"light",distanceX:"70%",forceMinHeight:!1,minHeight:"200px",closeAfter:0,startOpened:!1,startOpenedDelay:0,clickSelector:!1,enableEscapeKey:!0,hoverSelector:!1,touchSelector:!1,beforePanelOpen:function(){},afterPanelOpen:function(){},beforePanelClose:function(){},afterPanelClose:function(){}};t.fn.scotchPanel=function(a){if("undefined"==typeof a&&(a={}),0==this.length)return this;if(this.length>1)return this.each(function(){e.push(t(this).scotchPanel(a))}),e.open=function(){for(var t=0;t<e.length;t++)e[t].open()},e.close=function(){for(var t=0;t<e.length;t++)e[t].close()},e.toggle=function(){for(var t=0;t<e.length;t++)e[t].toggle()},e;var r={};r=this;var l=function(){i||(i=!0,s=p.transition(),n=p.translate3d());for(var e in o)o.hasOwnProperty(e)&&r.attr("data-"+e.toLowerCase())&&(a[e]=r.data(e.toLowerCase()));r.settings=t.extend({},o,a),c()},c=function(){var e=t(r.settings.containerSelector);e.hasClass("scotchified")||e.wrapInner('<div class="scotch-panel-wrapper"><div class="scotch-panel-canvas"></div></div>').addClass("scotchified"),t(".scotch-panel-wrapper").css({position:"relative",overflow:"hidden",width:"100%"}),t(".scotch-panel-canvas").css({position:"relative",height:"100%",width:"100%"}),r.settings.useCSS&&t(".scotch-panel-canvas").css({"-moz-transform":"translate3d(0, 0, 0)","-ms-transform":"translate3d(0, 0, 0)","-o-transform":"translate3d(0, 0, 0)","-webkit-transform":"translate3d(0, 0, 0)",transform:"translate3d(0, 0, 0)","-moz-backface-visibility":"hidden","-ms-backface-visibility":"hidden","-o-backface-visibility":"hidden","-webkit-backface-visibility":"hidden","backface-visibility":"hidden"}),"top"==r.settings.direction&&(r.height=r.height(),r.addClass("scotch-panel-top"),r.css({bottom:"100%",left:"0",width:"100%",position:"absolute","z-index":"888888",overflow:"hidden"})),"bottom"==r.settings.direction&&(r.height=r.height(),r.addClass("scotch-panel-bottom"),r.css({top:"100%",left:"0",width:"100%",position:"absolute","z-index":"888888",overflow:"hidden"})),"left"==r.settings.direction&&(r.addClass("scotch-panel-left"),r.css({top:"0",left:"-"+r.settings.distanceX,width:r.settings.distanceX,height:"100%",position:"absolute","z-index":"888888",overflow:"hidden"})),"right"==r.settings.direction&&(r.addClass("scotch-panel-right"),r.css({top:"0",right:"-"+r.settings.distanceX,width:r.settings.distanceX,height:"100%",position:"absolute","z-index":"888888",overflow:"hidden"})),r.css({"-moz-transform":"translateZ(0)","-ms-transform":"translateZ(0)","-o-transform":"translateZ(0)","-webkit-transform":"translateZ(0)",transform:"translateZ(0)"}),"image"==r.settings.type&&r.settings.imageURL&&(r.css({"-o-background-size":"cover","-ms-background-size":"cover","-moz-background-size":"cover","-webkit-background-size":"cover","background-size":"cover","background-position":"50% 0","background-repeat":"no-repeat","background-image":"url("+r.settings.imageURL+")"}),("top"==r.settings.direction||"bottom"==r.settings.direction)&&(r.css("min-height",r.settings.minHeight),r.height=t(r).height())),"iframe"==r.settings.type&&r.settings.iframeURL&&(r.iframeIsLoaded=!1,r.append('<iframe frameborder="0" style="width: 100%; height: 100%; display: block; position: relative; min-height: '+r.settings.minHeight+'" allowfullscreen></iframe>'),("top"==r.settings.direction||"bottom"==r.settings.direction)&&(r.height=t(r).height())),"video"==r.settings.type&&r.settings.youtubeID&&(r.append('<div id="video-id-'+r.settings.youtubeID+'" style="min-height: '+r.settings.minHeight+'; display: block !important;"><iframe src="http://www.youtube.com/embed/'+r.settings.youtubeID+"?enablejsapi=1&theme="+r.settings.youTubeTheme+'" frameborder="0" style="width: 100%; height: 100%; display: block; position: absolute; left: 0; top: 0;" allowfullscreen></iframe></div>'),("top"==r.settings.direction||"bottom"==r.settings.direction)&&(r.height=t(r).height())),s&&n&&f(r.settings.transition,r.settings.duration),r.settings.startOpened&&setTimeout(function(){r.open()},r.settings.startOpenedDelay),0!=r.settings.closeAfter&&setTimeout(function(){r.close()},r.settings.closeAfter)},p={transition:function(){if(!window.getComputedStyle)return!1;var t=document.body||document.documentElement,e=t.style,i="transition";if("string"==typeof e[i])return!0;var s=["Moz","webkit","Webkit","Khtml","O","ms"];i=i.charAt(0).toUpperCase()+i.substr(1);for(var n=0;n<s.length;n++)if("string"==typeof e[s[n]+i])return!0;return!1},translate3d:function(){if(!window.getComputedStyle)return!1;var t,e;return t=document.createElement("p"),t.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",t.style.margin="0",document.body.insertBefore(t,document.body.lastChild),e=window.getComputedStyle(t).getPropertyValue("transform"),void 0!==e?"none"!==e:!1}},h=function(t,e){var i=document.getElementById(t),s=i.getElementsByTagName("iframe")[0].contentWindow;i.style.display="hide"==e?"none":"";var n="hide"==e?"pauseVideo":"playVideo";s.postMessage('{"event":"command","func":"'+n+'","args":""}',"*"),i.style.display="block"},f=function(t,e){r.parents(".scotch-panel-canvas:first").css({"-ms-transition":"all "+e+"ms "+t,"-moz-transition":"all "+e+"ms "+t,"-o-transition":"all "+e+"ms "+t,"-webkit-transition":"all "+e+"ms "+t,transition:"all "+e+"ms "+t})},d=function(t){r.settings.forceMinHeight&&r.parents(".scotch-panel-canvas:first").css("min-height",t),s&&n&&r.settings.useCSS?(r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.beforePanelOpen():r.settings.beforePanelClose(),r.parents(".scotch-panel-canvas:first").css({"-ms-transform":"translate3d(0, "+t+"px, 0)","-moz-transform":"translate3d(0, "+t+"px, 0)","-o-transform":"translate3d(0, "+t+"px, 0)","-webkit-transform":"translate3d(0, "+t+"px, 0)",transform:"translate3d(0, "+t+"px, 0)"}),setTimeout(function(){r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.afterPanelOpen():r.settings.afterPanelClose()},r.settings.duration)):(r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.beforePanelOpen():r.settings.beforePanelClose(),r.settings.useEasingPlugin?r.parents(".scotch-panel-canvas:first").animate({top:t+"px"},{duration:r.settings.duration,easing:r.settings.easingPluginTransition,complete:function(){r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.afterPanelOpen():r.settings.afterPanelClose()}}):r.parents(".scotch-panel-canvas:first").animate({top:t+"px"},r.settings.duration,function(){r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.afterPanelOpen():r.settings.afterPanelClose()}))},g=function(t){s&&n&&r.settings.useCSS?(r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.beforePanelOpen():r.settings.beforePanelClose(),r.parents(".scotch-panel-canvas:first").css({"-ms-transform":"translate3d("+t+", 0, 0)","-moz-transform":"translate3d("+t+", 0, 0)","-o-transform":"translate3d("+t+", 0, 0)","-webkit-transform":"translate3d("+t+", 0, 0)",transform:"translate3d("+t+", 0, 0)"}),setTimeout(function(){r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.afterPanelOpen():r.settings.afterPanelClose()},r.settings.duration)):(r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.beforePanelOpen():r.settings.beforePanelClose(),r.settings.useEasingPlugin?r.parents(".scotch-panel-canvas:first").animate({left:t},{duration:r.settings.duration,easing:r.settings.easingPluginTransition,complete:function(){r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.afterPanelOpen():r.settings.afterPanelClose()}}):r.parents(".scotch-panel-canvas:first").animate({left:t},r.settings.duration,function(){r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.afterPanelOpen():r.settings.afterPanelClose()}))};return r.open=function(){r.parents(".scotch-panel-canvas:first").addClass("scotch-is-showing"),"iframe"==r.settings.type&&r.settings.iframeURL&&!r.iframeIsLoaded&&(r.iframeIsLoaded=!0,r.find("iframe").attr("src",r.settings.iframeURL)),"video"==r.settings.type&&r.settings.youtubeID&&r.settings.autoPlayVideo&&h("video-id-"+r.settings.youtubeID,""),"top"==r.settings.direction&&d(r.height),"bottom"==r.settings.direction&&d("-"+r.height),"left"==r.settings.direction&&g(r.settings.distanceX),"right"==r.settings.direction&&g("-"+r.settings.distanceX)},r.close=function(){r.parents(".scotch-panel-canvas:first").removeClass("scotch-is-showing"),setTimeout(function(){"video"==r.settings.type&&r.settings.youtubeID&&r.settings.autoPlayVideo&&h("video-id-"+r.settings.youtubeID,"hide")},r.settings.duration),("top"==r.settings.direction||"bottom"==r.settings.direction)&&d(0),("left"==r.settings.direction||"right"==r.settings.direction)&&g(0)},r.toggle=function(){r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.close():r.open()},l(),t(document).keyup(function(t){27==t.keyCode&&r.settings.enableEscapeKey&&r.close()}),r.settings.hoverSelector&&t(r.settings.hoverSelector).hover(function(){r.open()},function(){r.close()}),r.settings.clickSelector&&t(r.settings.clickSelector).click(function(){return r.toggle(),!1}),r.settings.touchSelector&&t(r.settings.touchSelector).on("touchstart",function(){return r.toggle(),!1}),r}}(jQuery),+function(t){"use strict";function e(){this._activeZoom=this._initialScrollPosition=this._initialTouchPosition=this._touchMoveListener=null,this._$document=t(document),this._$window=t(window),this._$body=t(document.body),this._boundClick=t.proxy(this._clickHandler,this)}function i(e){this._fullHeight=this._fullWidth=this._overlay=this._targetImageWrap=null,this._targetImage=e,this._$body=t(document.body)}e.prototype.listen=function(){this._$body.on("click",'[data-action="zoom"]',t.proxy(this._zoom,this))},e.prototype._zoom=function(e){var s=e.target;if(s&&"IMG"==s.tagName&&!this._$body.hasClass("zoom-overlay-open"))return e.metaKey||e.ctrlKey?window.open(e.target.src,"_blank"):void(s.width>=window.innerWidth-i.OFFSET||(this._activeZoomClose(!0),this._activeZoom=new i(s),this._activeZoom.zoomImage(),this._$window.on("scroll.zoom",t.proxy(this._scrollHandler,this)),this._$document.on("keyup.zoom",t.proxy(this._keyHandler,this)),this._$document.on("touchstart.zoom",t.proxy(this._touchStart,this)),document.addEventListener("click",this._boundClick,!0),e.stopPropagation()))},e.prototype._activeZoomClose=function(t){this._activeZoom&&(t?this._activeZoom.dispose():this._activeZoom.close(),this._$window.off(".zoom"),this._$document.off(".zoom"),document.removeEventListener("click",this._boundClick,!0),this._activeZoom=null)},e.prototype._scrollHandler=function(t){null===this._initialScrollPosition&&(this._initialScrollPosition=window.scrollY);var e=this._initialScrollPosition-window.scrollY;Math.abs(e)>=40&&this._activeZoomClose()},e.prototype._keyHandler=function(t){27==t.keyCode&&this._activeZoomClose()},e.prototype._clickHandler=function(t){t.stopPropagation(),t.preventDefault(),this._activeZoomClose()},e.prototype._touchStart=function(e){this._initialTouchPosition=e.touches[0].pageY,t(e.target).on("touchmove.zoom",t.proxy(this._touchMove,this))},e.prototype._touchMove=function(e){Math.abs(e.touches[0].pageY-this._initialTouchPosition)>10&&(this._activeZoomClose(),t(e.target).off("touchmove.zoom"))},i.OFFSET=80,i._MAX_WIDTH=2560,i._MAX_HEIGHT=4096,i.prototype.zoomImage=function(){var e=document.createElement("img");e.onload=t.proxy(function(){this._fullHeight=Number(e.height),this._fullWidth=Number(e.width),this._zoomOriginal()},this),e.src=this._targetImage.src},i.prototype._zoomOriginal=function(){this._targetImageWrap=document.createElement("div"),this._targetImageWrap.className="zoom-img-wrap",this._targetImage.parentNode.insertBefore(this._targetImageWrap,this._targetImage),this._targetImageWrap.appendChild(this._targetImage),t(this._targetImage).addClass("zoom-img").attr("data-action","zoom-out"),this._overlay=document.createElement("div"),this._overlay.className="zoom-overlay",document.body.appendChild(this._overlay),this._calculateZoom(),this._triggerAnimation()},i.prototype._calculateZoom=function(){this._targetImage.offsetWidth;var t=this._fullWidth,e=this._fullHeight,s=(window.scrollY,t/this._targetImage.width),n=window.innerHeight-i.OFFSET,o=window.innerWidth-i.OFFSET,a=t/e,r=o/n;o>t&&n>e?this._imgScaleFactor=s:r>a?this._imgScaleFactor=n/e*s:this._imgScaleFactor=o/t*s},i.prototype._triggerAnimation=function(){this._targetImage.offsetWidth;var e=t(this._targetImage).offset(),i=t(window).scrollTop(),s=i+window.innerHeight/2,n=window.innerWidth/2,o=e.top+this._targetImage.height/2,a=e.left+this._targetImage.width/2;this._translateY=s-o,this._translateX=n-a,t(this._targetImage).css("transform","scale("+this._imgScaleFactor+")"),t(this._targetImageWrap).css("transform","translate("+this._translateX+"px, "+this._translateY+"px) translateZ(0)"),this._$body.addClass("zoom-overlay-open")},i.prototype.close=function(){this._$body.removeClass("zoom-overlay-open").addClass("zoom-overlay-transitioning"),t(this._targetImage).css("transform",""),t(this._targetImageWrap).css("transform",""),t(this._targetImage).one(t.support.transition.end,t.proxy(this.dispose,this)).emulateTransitionEnd(300)},i.prototype.dispose=function(){this._targetImageWrap&&this._targetImageWrap.parentNode&&(t(this._targetImage).removeClass("zoom-img").attr("data-action","zoom"),this._targetImageWrap.parentNode.replaceChild(this._targetImage,this._targetImageWrap),this._overlay.parentNode.removeChild(this._overlay),this._$body.removeClass("zoom-overlay-transitioning"))},t(function(){(new e).listen()})}(jQuery)+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,s=this;t(this).one("bsTransitionEnd",function(){i=!0});var n=function(){i||t(s).trigger(t.support.transition.end)};return setTimeout(n,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),function(t){var e={common:{init:function(){t("#nav").scotchPanel({containerSelector:"body",direction:"right",duration:200,transition:"ease",clickSelector:"#toggle-nav",distanceX:"20rem",enableEscapeKey:!0,useCSS:!1,easingPluginTransition:"easeInCirc",useEasingPlugin:!0})},finalize:function(){t(function(){t(window).scroll(function(){t(window).scrollTop()>200?t("#banner").animate({top:"0px"},500):t("#banner").stop(!0).animate({top:"-300px"},500)})})}},home:{init:function(){},finalize:function(){}},hire_justin:{init:function(){t(function(){t("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var e=t(this.hash);if(e=e.length?e:t("[name="+this.hash.slice(1)+"]"),e.length)return t("html,body").animate({scrollTop:e.offset().top},1e3),!1}})})}},follow_along:{init:function(){function e(e){var n=e.find(".marker"),o={zoom:17,center:new google.maps.LatLng(0,0),mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1,panControl:!0,streetViewControl:!1,mapTypeControl:!1,zoomControl:!0,scaleControl:!1,navigationControl:!1,draggable:!1,styles:[{featureType:"administrative",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"administrative.country",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{visibility:"on"},{color:"#ffffff"}]},{featureType:"administrative.country",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"administrative.province",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"landscape.man_made",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"landscape.natural",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"landscape.natural.landcover",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"landscape.natural.terrain",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"poi.attraction",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.government",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.medical",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"poi.place_of_worship",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.school",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.sports_complex",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"road.highway.controlled_access",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#3f518c"}]},{featureType:"water",elementType:"all",stylers:[{visibility:"simplified"},{color:"#ffffff"},{lightness:52}]}]},a=new google.maps.Map(e[0],o);a.markers=[],n.each(function(){i(t(this),a)}),s(a)}function i(t,e){var i=new google.maps.LatLng(t.attr("data-lat"),t.attr("data-lng")),s=new google.maps.Marker({position:i,map:e});if(e.markers.push(s),t.html()){var n=new google.maps.InfoWindow({content:t.html()});google.maps.event.addListener(s,"click",function(){n.open(e,s),setTimeout(function(){n.close()},5e3)})}}function s(e){var i=new google.maps.LatLngBounds;t.each(e.markers,function(t,e){var s=new google.maps.LatLng(e.position.lat(),e.position.lng());i.extend(s)}),1===e.markers.length?(e.setCenter(i.getCenter()),e.setZoom(16)):e.fitBounds(i)}t(document).ready(function(){t(".acf-map").each(function(){e(t(this))})})}}},i={fire:function(t,i,s){var n,o=e;i=void 0===i?"init":i,n=""!==t,n=n&&o[t],n=n&&"function"==typeof o[t][i],n&&o[t][i](s)},loadEvents:function(){i.fire("common"),t.each(document.body.className.replace(/-/g,"_").split(/\s+/),function(t,e){i.fire(e),i.fire(e,"finalize")}),i.fire("common","finalize")}};t(document).ready(i.loadEvents)}(jQuery);
//# sourceMappingURL=main.js.map
