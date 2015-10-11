(function(){var t,e;t=function(){function t(t,e){var i,n;if(this.options={target:"instafeed",get:"popular",resolution:"thumbnail",sortBy:"none",links:!0,mock:!1,useHttp:!1},"object"==typeof t)for(i in t)n=t[i],this.options[i]=n;this.context=null!=e?e:this,this.unique=this._genKey()}return t.prototype.hasNext=function(){return"string"==typeof this.context.nextUrl&&this.context.nextUrl.length>0},t.prototype.next=function(){return this.hasNext()?this.run(this.context.nextUrl):!1},t.prototype.run=function(e){var i,n,s;if("string"!=typeof this.options.clientId&&"string"!=typeof this.options.accessToken)throw new Error("Missing clientId or accessToken.");if("string"!=typeof this.options.accessToken&&"string"!=typeof this.options.clientId)throw new Error("Missing clientId or accessToken.");return null!=this.options.before&&"function"==typeof this.options.before&&this.options.before.call(this),"undefined"!=typeof document&&null!==document&&(s=document.createElement("script"),s.id="instafeed-fetcher",s.src=e||this._buildUrl(),i=document.getElementsByTagName("head"),i[0].appendChild(s),n="instafeedCache"+this.unique,window[n]=new t(this.options,this),window[n].unique=this.unique),!0},t.prototype.parse=function(t){var e,i,n,s,o,a,r,c,l,h,p,d,u,g,f,m,y,v,_,b,w,k;if("object"!=typeof t){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(200!==t.meta.code){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,t.meta.error_message),!1;throw new Error("Error from Instagram: "+t.meta.error_message)}if(0===t.data.length){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}if(null!=this.options.success&&"function"==typeof this.options.success&&this.options.success.call(this,t),this.context.nextUrl="",null!=t.pagination&&(this.context.nextUrl=t.pagination.next_url),"none"!==this.options.sortBy)switch(g="random"===this.options.sortBy?["","random"]:this.options.sortBy.split("-"),u="least"===g[0]?!0:!1,g[1]){case"random":t.data.sort(function(){return.5-Math.random()});break;case"recent":t.data=this._sortBy(t.data,"created_time",u);break;case"liked":t.data=this._sortBy(t.data,"likes.count",u);break;case"commented":t.data=this._sortBy(t.data,"comments.count",u);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}if("undefined"!=typeof document&&null!==document&&this.options.mock===!1){if(c=t.data,null!=this.options.limit&&c.length>this.options.limit&&(c=c.slice(0,this.options.limit+1||9e9)),i=document.createDocumentFragment(),null!=this.options.filter&&"function"==typeof this.options.filter&&(c=this._filter(c,this.options.filter)),null!=this.options.template&&"string"==typeof this.options.template){for(s="",a="",h="",f=document.createElement("div"),m=0,_=c.length;_>m;m++)o=c[m],r=o.images[this.options.resolution].url,this.options.useHttp||(r=r.replace("http://","//")),a=this._makeTemplate(this.options.template,{model:o,id:o.id,link:o.link,image:r,caption:this._getObjectProperty(o,"caption.text"),likes:o.likes.count,comments:o.comments.count,location:this._getObjectProperty(o,"location.name")}),s+=a;for(f.innerHTML=s,k=[].slice.call(f.childNodes),y=0,b=k.length;b>y;y++)d=k[y],i.appendChild(d)}else for(v=0,w=c.length;w>v;v++)o=c[v],l=document.createElement("img"),r=o.images[this.options.resolution].url,this.options.useHttp||(r=r.replace("http://","//")),l.src=r,this.options.links===!0?(e=document.createElement("a"),e.href=o.link,e.appendChild(l),i.appendChild(e)):i.appendChild(l);document.getElementById(this.options.target).appendChild(i),n=document.getElementsByTagName("head")[0],n.removeChild(document.getElementById("instafeed-fetcher")),p="instafeedCache"+this.unique,window[p]=void 0;try{delete window[p]}catch(C){}}return null!=this.options.after&&"function"==typeof this.options.after&&this.options.after.call(this),!0},t.prototype._buildUrl=function(){var t,e,i;switch(t="https://api.instagram.com/v1",this.options.get){case"popular":e="media/popular";break;case"tagged":if("string"!=typeof this.options.tagName)throw new Error("No tag name specified. Use the 'tagName' option.");e="tags/"+this.options.tagName+"/media/recent";break;case"location":if("number"!=typeof this.options.locationId)throw new Error("No location specified. Use the 'locationId' option.");e="locations/"+this.options.locationId+"/media/recent";break;case"user":if("number"!=typeof this.options.userId)throw new Error("No user specified. Use the 'userId' option.");if("string"!=typeof this.options.accessToken)throw new Error("No access token. Use the 'accessToken' option.");e="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return i=""+t+"/"+e,i+=null!=this.options.accessToken?"?access_token="+this.options.accessToken:"?client_id="+this.options.clientId,null!=this.options.limit&&(i+="&count="+this.options.limit),i+="&callback=instafeedCache"+this.unique+".parse"},t.prototype._genKey=function(){var t;return t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)},""+t()+t()+t()+t()},t.prototype._makeTemplate=function(t,e){var i,n,s,o,a;for(n=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,i=t;n.test(i);)s=i.match(n)[1],o=null!=(a=this._getObjectProperty(e,s))?a:"",i=i.replace(n,""+o);return i},t.prototype._getObjectProperty=function(t,e){var i,n;for(e=e.replace(/\[(\w+)\]/g,".$1"),n=e.split(".");n.length;){if(i=n.shift(),!(null!=t&&i in t))return null;t=t[i]}return t},t.prototype._sortBy=function(t,e,i){var n;return n=function(t,n){var s,o;return s=this._getObjectProperty(t,e),o=this._getObjectProperty(n,e),i?s>o?1:-1:o>s?1:-1},t.sort(n.bind(this)),t},t.prototype._filter=function(t,e){var i,n,s,o,a;for(i=[],s=function(t){return e(t)?i.push(t):void 0},o=0,a=t.length;a>o;o++)n=t[o],s(n);return i},t}(),e="undefined"!=typeof exports&&null!==exports?exports:window,e.Instafeed=t}).call(this),function(t){"use strict";var e=[],i=!1,n=!1,s=!1,o={containerSelector:"body",type:"html",direction:"top",duration:300,transition:"ease",easingPluginTransition:"easeInCirc",useCSS:!0,useEasingPlugin:!1,imageURL:!1,iframeURL:!1,autoPlayVideo:!0,youtubeID:!1,youTubeTheme:"light",distanceX:"70%",forceMinHeight:!1,minHeight:"200px",closeAfter:0,startOpened:!1,startOpenedDelay:0,clickSelector:!1,enableEscapeKey:!0,hoverSelector:!1,touchSelector:!1,beforePanelOpen:function(){},afterPanelOpen:function(){},beforePanelClose:function(){},afterPanelClose:function(){}};t.fn.scotchPanel=function(a){if("undefined"==typeof a&&(a={}),0==this.length)return this;if(this.length>1)return this.each(function(){e.push(t(this).scotchPanel(a))}),e.open=function(){for(var t=0;t<e.length;t++)e[t].open()},e.close=function(){for(var t=0;t<e.length;t++)e[t].close()},e.toggle=function(){for(var t=0;t<e.length;t++)e[t].toggle()},e;var r={};r=this;var c=function(){i||(i=!0,n=h.transition(),s=h.translate3d());for(var e in o)o.hasOwnProperty(e)&&r.attr("data-"+e.toLowerCase())&&(a[e]=r.data(e.toLowerCase()));r.settings=t.extend({},o,a),l()},l=function(){var e=t(r.settings.containerSelector);e.hasClass("scotchified")||e.wrapInner('<div class="scotch-panel-wrapper"><div class="scotch-panel-canvas"></div></div>').addClass("scotchified"),t(".scotch-panel-wrapper").css({position:"relative",overflow:"hidden",width:"100%"}),t(".scotch-panel-canvas").css({position:"relative",height:"100%",width:"100%"}),r.settings.useCSS&&t(".scotch-panel-canvas").css({"-moz-transform":"translate3d(0, 0, 0)","-ms-transform":"translate3d(0, 0, 0)","-o-transform":"translate3d(0, 0, 0)","-webkit-transform":"translate3d(0, 0, 0)",transform:"translate3d(0, 0, 0)","-moz-backface-visibility":"hidden","-ms-backface-visibility":"hidden","-o-backface-visibility":"hidden","-webkit-backface-visibility":"hidden","backface-visibility":"hidden"}),"top"==r.settings.direction&&(r.height=r.height(),r.addClass("scotch-panel-top"),r.css({bottom:"100%",left:"0",width:"100%",position:"absolute","z-index":"888888",overflow:"hidden"})),"bottom"==r.settings.direction&&(r.height=r.height(),r.addClass("scotch-panel-bottom"),r.css({top:"100%",left:"0",width:"100%",position:"absolute","z-index":"888888",overflow:"hidden"})),"left"==r.settings.direction&&(r.addClass("scotch-panel-left"),r.css({top:"0",left:"-"+r.settings.distanceX,width:r.settings.distanceX,height:"100%",position:"absolute","z-index":"888888",overflow:"hidden"})),"right"==r.settings.direction&&(r.addClass("scotch-panel-right"),r.css({top:"0",right:"-"+r.settings.distanceX,width:r.settings.distanceX,height:"100%",position:"absolute","z-index":"888888",overflow:"hidden"})),r.css({"-moz-transform":"translateZ(0)","-ms-transform":"translateZ(0)","-o-transform":"translateZ(0)","-webkit-transform":"translateZ(0)",transform:"translateZ(0)"}),"image"==r.settings.type&&r.settings.imageURL&&(r.css({"-o-background-size":"cover","-ms-background-size":"cover","-moz-background-size":"cover","-webkit-background-size":"cover","background-size":"cover","background-position":"50% 0","background-repeat":"no-repeat","background-image":"url("+r.settings.imageURL+")"}),("top"==r.settings.direction||"bottom"==r.settings.direction)&&(r.css("min-height",r.settings.minHeight),r.height=t(r).height())),"iframe"==r.settings.type&&r.settings.iframeURL&&(r.iframeIsLoaded=!1,r.append('<iframe frameborder="0" style="width: 100%; height: 100%; display: block; position: relative; min-height: '+r.settings.minHeight+'" allowfullscreen></iframe>'),("top"==r.settings.direction||"bottom"==r.settings.direction)&&(r.height=t(r).height())),"video"==r.settings.type&&r.settings.youtubeID&&(r.append('<div id="video-id-'+r.settings.youtubeID+'" style="min-height: '+r.settings.minHeight+'; display: block !important;"><iframe src="http://www.youtube.com/embed/'+r.settings.youtubeID+"?enablejsapi=1&theme="+r.settings.youTubeTheme+'" frameborder="0" style="width: 100%; height: 100%; display: block; position: absolute; left: 0; top: 0;" allowfullscreen></iframe></div>'),("top"==r.settings.direction||"bottom"==r.settings.direction)&&(r.height=t(r).height())),n&&s&&d(r.settings.transition,r.settings.duration),r.settings.startOpened&&setTimeout(function(){r.open()},r.settings.startOpenedDelay),0!=r.settings.closeAfter&&setTimeout(function(){r.close()},r.settings.closeAfter)},h={transition:function(){if(!window.getComputedStyle)return!1;var t=document.body||document.documentElement,e=t.style,i="transition";if("string"==typeof e[i])return!0;var n=["Moz","webkit","Webkit","Khtml","O","ms"];i=i.charAt(0).toUpperCase()+i.substr(1);for(var s=0;s<n.length;s++)if("string"==typeof e[n[s]+i])return!0;return!1},translate3d:function(){if(!window.getComputedStyle)return!1;var t,e;return t=document.createElement("p"),t.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",t.style.margin="0",document.body.insertBefore(t,document.body.lastChild),e=window.getComputedStyle(t).getPropertyValue("transform"),void 0!==e?"none"!==e:!1}},p=function(t,e){var i=document.getElementById(t),n=i.getElementsByTagName("iframe")[0].contentWindow;i.style.display="hide"==e?"none":"";var s="hide"==e?"pauseVideo":"playVideo";n.postMessage('{"event":"command","func":"'+s+'","args":""}',"*"),i.style.display="block"},d=function(t,e){r.parents(".scotch-panel-canvas:first").css({"-ms-transition":"all "+e+"ms "+t,"-moz-transition":"all "+e+"ms "+t,"-o-transition":"all "+e+"ms "+t,"-webkit-transition":"all "+e+"ms "+t,transition:"all "+e+"ms "+t})},u=function(t){r.settings.forceMinHeight&&r.parents(".scotch-panel-canvas:first").css("min-height",t),n&&s&&r.settings.useCSS?(r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.beforePanelOpen():r.settings.beforePanelClose(),r.parents(".scotch-panel-canvas:first").css({"-ms-transform":"translate3d(0, "+t+"px, 0)","-moz-transform":"translate3d(0, "+t+"px, 0)","-o-transform":"translate3d(0, "+t+"px, 0)","-webkit-transform":"translate3d(0, "+t+"px, 0)",transform:"translate3d(0, "+t+"px, 0)"}),setTimeout(function(){r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.afterPanelOpen():r.settings.afterPanelClose()},r.settings.duration)):(r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.beforePanelOpen():r.settings.beforePanelClose(),r.settings.useEasingPlugin?r.parents(".scotch-panel-canvas:first").animate({top:t+"px"},{duration:r.settings.duration,easing:r.settings.easingPluginTransition,complete:function(){r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.afterPanelOpen():r.settings.afterPanelClose()}}):r.parents(".scotch-panel-canvas:first").animate({top:t+"px"},r.settings.duration,function(){r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.afterPanelOpen():r.settings.afterPanelClose()}))},g=function(t){n&&s&&r.settings.useCSS?(r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.beforePanelOpen():r.settings.beforePanelClose(),r.parents(".scotch-panel-canvas:first").css({"-ms-transform":"translate3d("+t+", 0, 0)","-moz-transform":"translate3d("+t+", 0, 0)","-o-transform":"translate3d("+t+", 0, 0)","-webkit-transform":"translate3d("+t+", 0, 0)",transform:"translate3d("+t+", 0, 0)"}),setTimeout(function(){r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.afterPanelOpen():r.settings.afterPanelClose()},r.settings.duration)):(r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.beforePanelOpen():r.settings.beforePanelClose(),r.settings.useEasingPlugin?r.parents(".scotch-panel-canvas:first").animate({left:t},{duration:r.settings.duration,easing:r.settings.easingPluginTransition,complete:function(){r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.afterPanelOpen():r.settings.afterPanelClose()}}):r.parents(".scotch-panel-canvas:first").animate({left:t},r.settings.duration,function(){r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.afterPanelOpen():r.settings.afterPanelClose()}))};return r.open=function(){r.parents(".scotch-panel-canvas:first").addClass("scotch-is-showing"),"iframe"==r.settings.type&&r.settings.iframeURL&&!r.iframeIsLoaded&&(r.iframeIsLoaded=!0,r.find("iframe").attr("src",r.settings.iframeURL)),"video"==r.settings.type&&r.settings.youtubeID&&r.settings.autoPlayVideo&&p("video-id-"+r.settings.youtubeID,""),"top"==r.settings.direction&&u(r.height),"bottom"==r.settings.direction&&u("-"+r.height),"left"==r.settings.direction&&g(r.settings.distanceX),"right"==r.settings.direction&&g("-"+r.settings.distanceX)},r.close=function(){r.parents(".scotch-panel-canvas:first").removeClass("scotch-is-showing"),setTimeout(function(){"video"==r.settings.type&&r.settings.youtubeID&&r.settings.autoPlayVideo&&p("video-id-"+r.settings.youtubeID,"hide")},r.settings.duration),("top"==r.settings.direction||"bottom"==r.settings.direction)&&u(0),("left"==r.settings.direction||"right"==r.settings.direction)&&g(0)},r.toggle=function(){r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.close():r.open()},c(),t(document).keyup(function(t){27==t.keyCode&&r.settings.enableEscapeKey&&r.close()}),r.settings.hoverSelector&&t(r.settings.hoverSelector).hover(function(){r.open()},function(){r.close()}),r.settings.clickSelector&&t(r.settings.clickSelector).click(function(){return r.toggle(),!1}),r.settings.touchSelector&&t(r.settings.touchSelector).on("touchstart",function(){return r.toggle(),!1}),r}}(jQuery),+function(t){"use strict";function e(){this._activeZoom=this._initialScrollPosition=this._initialTouchPosition=this._touchMoveListener=null,this._$document=t(document),this._$window=t(window),this._$body=t(document.body),this._boundClick=t.proxy(this._clickHandler,this)}function i(e){this._fullHeight=this._fullWidth=this._overlay=this._targetImageWrap=null,this._targetImage=e,this._$body=t(document.body)}e.prototype.listen=function(){this._$body.on("click",'[data-action="zoom"]',t.proxy(this._zoom,this))},e.prototype._zoom=function(e){var n=e.target;if(n&&"IMG"==n.tagName&&!this._$body.hasClass("zoom-overlay-open"))return e.metaKey||e.ctrlKey?window.open(e.target.src,"_blank"):void(n.width>=window.innerWidth-i.OFFSET||(this._activeZoomClose(!0),this._activeZoom=new i(n),this._activeZoom.zoomImage(),this._$window.on("scroll.zoom",t.proxy(this._scrollHandler,this)),this._$document.on("keyup.zoom",t.proxy(this._keyHandler,this)),this._$document.on("touchstart.zoom",t.proxy(this._touchStart,this)),document.addEventListener("click",this._boundClick,!0),e.stopPropagation()))},e.prototype._activeZoomClose=function(t){this._activeZoom&&(t?this._activeZoom.dispose():this._activeZoom.close(),this._$window.off(".zoom"),this._$document.off(".zoom"),document.removeEventListener("click",this._boundClick,!0),this._activeZoom=null)},e.prototype._scrollHandler=function(t){null===this._initialScrollPosition&&(this._initialScrollPosition=window.scrollY);var e=this._initialScrollPosition-window.scrollY;Math.abs(e)>=40&&this._activeZoomClose()},e.prototype._keyHandler=function(t){27==t.keyCode&&this._activeZoomClose()},e.prototype._clickHandler=function(t){t.stopPropagation(),t.preventDefault(),this._activeZoomClose()},e.prototype._touchStart=function(e){this._initialTouchPosition=e.touches[0].pageY,t(e.target).on("touchmove.zoom",t.proxy(this._touchMove,this))},e.prototype._touchMove=function(e){Math.abs(e.touches[0].pageY-this._initialTouchPosition)>10&&(this._activeZoomClose(),t(e.target).off("touchmove.zoom"))},i.OFFSET=80,i._MAX_WIDTH=2560,i._MAX_HEIGHT=4096,i.prototype.zoomImage=function(){var e=document.createElement("img");e.onload=t.proxy(function(){this._fullHeight=Number(e.height),this._fullWidth=Number(e.width),this._zoomOriginal()},this),e.src=this._targetImage.src},i.prototype._zoomOriginal=function(){this._targetImageWrap=document.createElement("div"),this._targetImageWrap.className="zoom-img-wrap",this._targetImage.parentNode.insertBefore(this._targetImageWrap,this._targetImage),this._targetImageWrap.appendChild(this._targetImage),t(this._targetImage).addClass("zoom-img").attr("data-action","zoom-out"),this._overlay=document.createElement("div"),this._overlay.className="zoom-overlay",document.body.appendChild(this._overlay),this._calculateZoom(),this._triggerAnimation()},i.prototype._calculateZoom=function(){this._targetImage.offsetWidth;var t=this._fullWidth,e=this._fullHeight,n=(window.scrollY,t/this._targetImage.width),s=window.innerHeight-i.OFFSET,o=window.innerWidth-i.OFFSET,a=t/e,r=o/s;o>t&&s>e?this._imgScaleFactor=n:r>a?this._imgScaleFactor=s/e*n:this._imgScaleFactor=o/t*n},i.prototype._triggerAnimation=function(){this._targetImage.offsetWidth;var e=t(this._targetImage).offset(),i=t(window).scrollTop(),n=i+window.innerHeight/2,s=window.innerWidth/2,o=e.top+this._targetImage.height/2,a=e.left+this._targetImage.width/2;this._translateY=n-o,this._translateX=s-a,t(this._targetImage).css("transform","scale("+this._imgScaleFactor+")"),t(this._targetImageWrap).css("transform","translate("+this._translateX+"px, "+this._translateY+"px) translateZ(0)"),this._$body.addClass("zoom-overlay-open")},i.prototype.close=function(){this._$body.removeClass("zoom-overlay-open").addClass("zoom-overlay-transitioning"),t(this._targetImage).css("transform",""),t(this._targetImageWrap).css("transform",""),t(this._targetImage).one(t.support.transition.end,t.proxy(this.dispose,this)).emulateTransitionEnd(300)},i.prototype.dispose=function(){this._targetImageWrap&&this._targetImageWrap.parentNode&&(t(this._targetImage).removeClass("zoom-img").attr("data-action","zoom"),this._targetImageWrap.parentNode.replaceChild(this._targetImage,this._targetImageWrap),this._overlay.parentNode.removeChild(this._overlay),this._$body.removeClass("zoom-overlay-transitioning"))},t(function(){(new e).listen()})}(jQuery)+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,n=this;t(this).one("bsTransitionEnd",function(){i=!0});var s=function(){i||t(n).trigger(t.support.transition.end)};return setTimeout(s,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),function(t){var e={common:{init:function(){t("#nav").scotchPanel({containerSelector:"body",direction:"right",duration:200,transition:"ease",clickSelector:"#toggle-nav",distanceX:"20rem",enableEscapeKey:!0,useCSS:!1,easingPluginTransition:"easeInCirc",useEasingPlugin:!0})},finalize:function(){}},home:{init:function(){},finalize:function(){}},hire_justin:{init:function(){t(function(){t("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var e=t(this.hash);if(e=e.length?e:t("[name="+this.hash.slice(1)+"]"),e.length)return t("html,body").animate({scrollTop:e.offset().top},1e3),!1}})})}},follow_along:{init:function(){var t=new Instafeed({get:"user",userId:1334627384,accessToken:"1334627384.467ede5.298c00980a90416dbabfc9c85c2b357c",sortBy:"most-recent",limit:1,resolution:"low_resolution",template:'<img class="img-responsive" src="{{image}}" />'});t.run()}}},i={fire:function(t,i,n){var s,o=e;i=void 0===i?"init":i,s=""!==t,s=s&&o[t],s=s&&"function"==typeof o[t][i],s&&o[t][i](n)},loadEvents:function(){i.fire("common"),t.each(document.body.className.replace(/-/g,"_").split(/\s+/),function(t,e){i.fire(e),i.fire(e,"finalize")}),i.fire("common","finalize")}};t(document).ready(i.loadEvents)}(jQuery);