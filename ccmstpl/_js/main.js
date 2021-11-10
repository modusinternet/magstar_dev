/* Loading Screen START */
window.setTimeout(function(){
	document.getElementById("loading_svg").style.opacity="0";
	window.setTimeout(function(){
		document.getElementById("loading_svg").style.display="none";
	},500);
},500);
window.setTimeout(function(){
	document.getElementsByTagName("body")[0].style.opacity="1";
},250);
/* Loading Screen END */

/* nav bar active selector */
activeArray_01.forEach(function(s){$("#"+s).addClass("active");});
/*navActiveFooterArray.forEach(function(s){$("#"+s).addClass("active");});*/


/* Shrink the Nav bar once we've scrolled 50px or more down the screen. */
$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	if(scroll >= 80) {
		$("#logo1").attr("style","opacity:0");
		$("#logo2").attr("style","opacity:1");
		/*
		$("#headerTop").removeClass("active");
		$(".navigation").addClass("scrolled");
		*/
	} else {
		$("#logo1").attr("style","opacity:1");
		$("#logo2").attr("style","opacity:0");
		/*
		$("#headerTop").addClass("active");
		$(".navigation").removeClass("scrolled");
		*/
	}
});


/* ---------- */
/* Lazyload Background Images Begin */
/* ---------- */
var lazyloadImages;

if ("IntersectionObserver" in window) {
	lazyloadImages = document.querySelectorAll(".lazy");
	var imageObserver = new IntersectionObserver(function(entries, observer) {
		entries.forEach(function(entry) {
			if (entry.isIntersecting) {
				var image = entry.target;
				image.classList.remove("lazy");
				imageObserver.unobserve(image);
			}
		});
	});

	lazyloadImages.forEach(function(image) {
		imageObserver.observe(image);
	});
} else {
	var lazyloadThrottleTimeout;
	lazyloadImages = document.querySelectorAll(".lazy");

	function lazyload () {
		if(lazyloadThrottleTimeout) {
			clearTimeout(lazyloadThrottleTimeout);
		}

		lazyloadThrottleTimeout = setTimeout(function() {
			var scrollTop = window.pageYOffset;
			lazyloadImages.forEach(function(img) {
				if(img.offsetTop < (window.innerHeight + scrollTop)) {
					img.src = img.dataset.src;
					img.classList.remove('lazy');
				}
			});
			if(lazyloadImages.length == 0) {
				document.removeEventListener("scroll", lazyload);
				window.removeEventListener("resize", lazyload);
				window.removeEventListener("orientationChange", lazyload);
			}
		}, 20);
	}

	document.addEventListener("scroll", lazyload);
	window.addEventListener("resize", lazyload);
	window.addEventListener("orientationChange", lazyload);
}
/* ---------- */
/* Lazyload Background Images End */
/* ---------- */


/* ----------
Navigation Code Begin
---------- */
"use strict";class VGNav{constructor(a,b){this.settings=Object.assign({expand:"lg",layout:"sidebar",isHover:!1,toggle:"<span class=\"default\"></span>",mobileTitle:"",sidebar:{placement:"right",clone:null}},a),this.callback=b,this.breakpoints={max:{xl:1921,lg:1200,md:992,sm:768,xs:480},min:{xl:1200,lg:992,md:768,sm:480,xs:0}},this.container=".vg-nav",this.classes={container:"vg-nav-main-container",hamburger:"vg-nav-hamburger",sidebar:"vg-nav-sidebar",collapse:"vg-nav-collapse",overlay:"vg-nav-overlay",cloned:"vg-nav-cloned",hover:"vg-nav-hover",XL:"vg-nav-xl",LG:"vg-nav-lg",MD:"vg-nav-md",SM:"vg-nav-sm",XS:"vg-nav-xs"},this.current_responsive_size="",this.isInit=!1,this.isInit||this.init()}init(){var a=this,b=document.querySelector(a.container),c=document.querySelector("."+a.classes.container);if(!b||!c)return!1;b.classList.add("vg-nav-"+a.settings.expand),a.settings.isHover&&b.classList.add(a.classes.hover);var d=b.querySelectorAll(".dropdown-mega > a, .dropdown > a"),e="<span class=\"toggle\">"+a.settings.toggle+"</span>";d.forEach(function(a){a.insertAdjacentHTML("beforeend",e)});var f=b.classList.contains(a.classes.XL)||b.classList.contains(a.classes.LG)||b.classList.contains(a.classes.MD)||b.classList.contains(a.classes.SM)||b.classList.contains(a.classes.XS);if(f){var l="";a.settings.mobileTitle&&(l="<span class=\""+a.classes.hamburger+"--title\">"+a.settings.mobileTitle+"</span>"),b.insertAdjacentHTML("afterbegin","<a href=\"#\" class=\""+a.classes.hamburger+"\">"+l+"<span class=\""+a.classes.hamburger+"--lines\"><span></span><span></span><span></span></span></a>")}if("sidebar"===this.settings.layout){var g,h=document.getElementsByClassName(a.classes.sidebar),i=a.settings.sidebar||!1,j=i.placement||"right",k=document.getElementsByClassName(a.classes.collapse);if(k.length&&k[0].remove(),f){if(!h.length){document.body.insertAdjacentHTML("beforeend","<div class=\""+a.classes.sidebar+" "+j+"\"><div class=\""+a.classes.sidebar+"__close\" data-dismiss=\""+a.classes.sidebar+"\">&times;</div><div class=\""+a.classes.sidebar+"__content\"></div></div>");var m=document.getElementsByClassName(a.classes.sidebar+"__content");a.cloneNavigation(m,b.querySelector("."+a.classes.container))}else if(g=h[0].cloneNode(!0),document.body.appendChild(g),h[1].classList.add(j),h[0].remove(),"clone"in i&&i.clone){var n=document.querySelector("."+a.classes.sidebar).querySelectorAll(i.clone);n&&a.cloneNavigation(n,b.querySelector("."+a.classes.container))}document.body.insertAdjacentHTML("beforeend","<div class=\""+a.classes.overlay+" "+j+"\"></div>")}}else if("collapse"===a.settings.layout){var o=document.getElementsByClassName(a.classes.collapse);a.cloneNavigation(o,b.querySelector("."+a.classes.container))}this.isInit=!0,this.toggle(this.callback)}toggle(a){function b(a,b,c){a&&"beforeClick"in a&&"function"==typeof a.beforeClick&&a.beforeClick(b,c)}function c(a,b,c){a&&"afterClick"in a&&"function"==typeof a.afterClick&&a.afterClick(b,c)}function d(){var a=document.getElementsByClassName(f.classes.hamburger);if(a.length&&a[0].classList.remove("show"),"sidebar"===f.settings.layout){var b=document.getElementsByClassName(f.classes.sidebar),c=document.getElementsByClassName(f.classes.overlay);b&&c&&(b[0].classList.remove("show"),c[0].classList.remove("show")),document.body.classList.contains("vg-nav-sidebar-open")&&(document.body.classList.remove("vg-nav-sidebar-open"),document.body.style.paddingRight=0),f.dispose(h),f.dispose(h,"dropdown-mega")}else"collapse"===f.settings.layout&&document.getElementsByClassName(f.classes.collapse)[0].classList.remove("show");return!1}if(!this.isInit)return!1;var f=this,g=document.querySelector(f.container),h=document.querySelectorAll("."+f.classes.container),i=document.querySelectorAll("."+f.classes.container+" li > a"),j=g.querySelector("."+f.classes.hamburger),k=document.querySelector("."+f.classes.overlay),l=document.querySelector("[data-dismiss=vg-nav-sidebar]");a&&"afterInit"in a&&"function"==typeof a.afterInit&&a.afterInit(f),i.forEach(function(d){d.onclick=function(d){if(!f.clickable()){var e=this,g=e.closest("li");if(b(a,f,d),g.classList.contains("dropdown")){if(f.dispose(h,"dropdown-mega"),g.closest("ul").classList.contains(f.classes.container))return g.classList.contains("show")?g.classList.remove("show"):(f.dispose(h),g.classList.add("show")),c(a,f,d),!1;if(g.classList.contains("show"))return e.closest("li").classList.remove("show"),f.dispose(g),c(a,f,d),!1;for(var j,k=g.children,l=1;l<=k.length;l++)"UL"===k[l-1].tagName&&(j=k[l-1]);if(0<k.length)return e.closest("li").classList.add("show"),c(a,f,d),!1}return g.classList.contains("dropdown-mega")?(g.classList.contains("show")?g.classList.remove("show"):(f.dispose(h),g.classList.add("show")),c(a,f,d),!1):void c(a,f,d)}}}),window.addEventListener("mouseup",a=>{a.target.closest("."+f.classes.container)||(f.dispose(h),f.dispose(h,"dropdown-mega"))}),j.onclick=function(){var a=this;if(a.classList.toggle("show"),"sidebar"!==f.settings.layout)"collapse"===f.settings.layout&&document.getElementsByClassName(f.classes.collapse)[0].classList.toggle("show");else if(document.getElementsByClassName(f.classes.sidebar)[0].classList.toggle("show"),document.getElementsByClassName(f.classes.overlay)[0].classList.toggle("show"),!document.body.classList.contains("vg-nav-sidebar-open")){var b=window.innerWidth-document.documentElement.clientWidth;document.body.classList.add("vg-nav-sidebar-open"),document.body.style.paddingRight=b+"px"}else document.body.classList.remove("vg-nav-sidebar-open"),document.body.style.paddingRight=0;return!1},k&&(k.onclick=()=>(d(),!1)),l&&(l.onclick=()=>(d(),!1))}dispose(a){function b(a){if(a)for(var b=1;b<=a.length;b++)a[b-1].classList.contains("show")&&a[b-1].classList.remove("show")}for(var c,d=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"dropdown",e=1;e<=a.length;e++)c=a[e-1].getElementsByClassName(d),b(c)}cloneNavigation(a,b){var c=b.cloneNode(!0);c.classList.add(this.classes.cloned),a[0].appendChild(c)}clickable(){var a=document.querySelector(this.container);return!!a.classList.contains(this.classes.hover)&&this.checkResponsiveClass()}checkResponsiveClass(){var a=document.querySelector(this.container);return this.current_responsive_size=a.classList.contains(this.classes.XL)?this.breakpoints.max.xl:a.classList.contains(this.classes.LG)?this.breakpoints.max.lg:a.classList.contains(this.classes.MD)?this.breakpoints.max.md:a.classList.contains(this.classes.SM)?this.breakpoints.max.sm:a.classList.contains(this.classes.XS)?this.breakpoints.max.xs:this.breakpoints.max.xs,window.innerWidth>=this.current_responsive_size}}
/* ----------
Navigation Code End
---------- */


/***********************/
/* Add to Home screen (A2HS) Code Begin. */
/* https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive/Add_to_home_screen#How_do_you_make_an_app_A2HS-ready */
/***********************/
function getCookie(cname){
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++){
		var c = ca[i];
		while(c.charAt(0) == ' '){
			c = c.substring(1);
		}
		if(c.indexOf(name) == 0){
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
let a2Cookie;
let deferredPrompt;
const A2HSbox = document.getElementById("A2HS-box");
const A2HSbox_no = document.getElementById("A2HS-box-no");
const A2HSbox_yes = document.getElementById("A2HS-box-yes");
window.addEventListener("beforeinstallprompt",e =>{
	a2Cookie = getCookie("A2HSbox");
	/* Test for A2HSbox cookie. */
	if(a2Cookie == ""){
		/* A2HSbox cookie not found so run 'beforeinstallprompt' event detection code. */
		console.log('A2HSbox cookie not found and "beforeinstallprompt" event detected, dropping A2HS box.');
		/* Prevent Chrome 67 and earlier from automatically showing the prompt. */
		e.preventDefault();
		/* Stash the event so it can be triggered later. */
		deferredPrompt = e;
		/* Update UI to notify the user they can add to home screen. */
		A2HSbox.classList.add("active");

		A2HSbox_no.addEventListener('click',e =>{
			console.log('User dismissed A2HS prompt #1.');
			/* hide our user interface that shows our A2HS button. */
			A2HSbox.classList.remove("active");
			/* Set cookie to defer A2HS box apearence in the future.	(15768000 = 6 months) */
			document.cookie = "A2HSbox=1; max-age=15768000; path=/";
			deferredPrompt = null;
		});

		A2HSbox_yes.addEventListener('click',e =>{
			console.log('User accepted A2HS prompt #1.');
			/* hide our user interface that shows our A2HS button. */
			A2HSbox.classList.remove("active");
			/* Show the prompt. */
			deferredPrompt.prompt();
			/* Wait for the user to respond to the prompt. */
			deferredPrompt.userChoice.then(choiceResult =>{
				if (choiceResult.outcome === 'accepted') {
					console.log('User accepted A2HS prompt #2.');
				} else {
					console.log('User dismissed A2HS prompt #2.');
					/* Set cookie to defer A2HS box apearence in the future.	(15768000 = 6 months) */
					document.cookie = "A2HSbox=1; max-age=15768000; path=/";
				}
				deferredPrompt = null;
			});
		});
	}
});
/***********************/
/* Add to Home Screen (A2HS) Code End. */
/* https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive/Add_to_home_screen#How_do_you_make_an_app_A2HS-ready */
/***********************/
