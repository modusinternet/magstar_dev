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
		$("#headerTop").removeClass("active");
		$(".navigation").addClass("scrolled");
		/*
		$(".cd-header-buttons").addClass("scrolled");
		$(".cd-search").addClass("scrolled");
		$(".scrollToTopButton").addClass("scrollToTopButton-active");
		*/
	} else {
		$("#logo1").attr("style","opacity:1");
		$("#logo2").attr("style","opacity:0");
		$("#headerTop").addClass("active");
		$(".navigation").removeClass("scrolled");
		/*
		$(".cd-header-buttons").removeClass("scrolled");
		$(".cd-search").removeClass("scrolled");
		$(".scrollToTopButton").removeClass("scrollToTopButton-active");
		*/
	}
});


/* ----------
Navigation Code Begin
---------- */
(function(s) {
	"use strict";

	s.fn.vegasMenu = function(a) {

		a = s.extend({
			afterClickLink: function() {}
		}, arguments[0] || {});

		var e = s("body"),
			n = window.innerWidth,i;
		var l = a.expand || "sidebar";
		var r = "vg-nav-hamburger",
			t = "vg-nav-sidebar",
			d = "vg-nav-collapse",
			o = "vg-nav-overlay",
			c = "vg-nav-hover";
		var f = this,
			v = s(this),
			h = f.children("ul"),
			u = "vg-nav-main-container",
			C = "show";
		var g = a.toggle || '<span class="default"></span>';
		var p = "vg-nav-xl",
			m = "vg-nav-lg",
			w = "vg-nav-md",
			x = "vg-nav-sm",
			b = "vg-nav-xs";
		var k = 1200,
			_ = 992,
			y = 768,
			L = 480,
			W = 0;
		var j = 1921,
			z = 1200,
			M = 992,
			Q = 768,
			q = 480;
		h.addClass(u);

		G();

		if (l === "sidebar") {
			var A = e.find("." + t),
				B = a.sidebar || false,
				D = f.attr("data-sidebar-open") || "right";
			e.find("." + d).remove();
			if (B) {
				var E = B.width || false;
				D = B.open || D;
				if (E) {
					K(n, E);
					s(window).on("resize", function() {
						K(s(this).width(), E)
					})
				}
			}
			H(D)
		} else if (l === "collapse") {
			I()
		}

		var F = function() {
			if (f.hasClass(c)) {
				return N()
			} else {
				return false
			}
		};

		s(document).on("click", "." + u + " li.dropdown a", function() {
		/*s(document).on("click", "." + u + " li.dropdown a>span", function() {*/
			if (F()) return;
			var a = s(this), e = a.parent("li");
			s(".dropdown-mega").removeClass(C);
			if (e.parent("ul").hasClass(u)) {
				var n = h.find("." + C);
				if (n.hasClass("current")) n.removeClass(C);
				if (!e.hasClass("current")) {
					e.addClass(C).addClass("current");
					n.removeClass("current")
				} else {
					e.removeClass(C).removeClass("current")
				}
				return false
			} else {
				if (e.hasClass(C)) {
					a.parent("li").removeClass(C);
					if (e.parent("ul").hasClass(u)) {
						h.find("." + C).removeClass(C)
					}
				} else {
					if (a.parent("li").children("ul").length > 0) {
						a.parent("li").addClass(C);
						return false
					}
				}
			}
		});

		s(document).on("click", "." + u + " li.dropdown-mega > a", function() {
			if (F()) return;
			var a = s(this);
			var e = a.parent("li");
			if (e.hasClass(C)) {
				e.removeClass(C)
			} else {
				h.find("." + C).removeClass(C).removeClass("current");
				e.addClass(C)
			}
			return false
		});

		s(document).mouseup(function(a) {
			var e = s("." + u);
			if (e.has(a.target).length === 0) {
				h.find("." + C).removeClass(C).removeClass("current")
			}
		});

		s(document).on("click", "." + r + ", ." + o + ", [data-sidebar-close]", function() {
			e.find("." + r).toggleClass(C);
			if (l === "sidebar") {
				e.find("." + t).toggleClass(C);
				e.find("." + o).toggleClass(C)
			} else if (l === "collapse") {
				e.find("." + d).toggleClass(C)
			}
			return false
		});

		s(document).on("click", "." + u + " li a", function() {
			a.afterClickLink.call(this, s(this))
		});

		function G() {
			var a = e.find(".dropdown-mega > a, .dropdown > a"),
				n = '<span class="toggle">' + g + "</span>";
			a.each(function() {
				var a = s(this).text();
				s(this).html(a + n)
			});
			if (f.hasClass(p) || f.hasClass(m) || f.hasClass(w) || f.hasClass(x) || f.hasClass(b)) {
				f.prepend('<a href="#" class="' + r + '"><span></span><span></span><span></span></a>')
			}
		}

		function H(s) {
			var a;
			if (f.hasClass(p) || f.hasClass(m) || f.hasClass(w) || f.hasClass(x) || f.hasClass(b)) {
				if (!A.length) {
					e.append('<div class="' + t + " " + s + '">' + '<div class="' + t + '__close" data-sidebar-close>&times;</div>' + '<div class="' + t + '__content"></div>' + "</div>");
					J(e.find("." + t + "__content"))
				} else {
					a = A.detach();
					e.append(a);
					A.addClass(s)
				}
				e.append('<div class="' + o + " " + s + '"></div>')
			}
		}

		function I() {
			J(e.find("." + d))
		}

		function J(s) {
			var a = h.clone().addClass("vg-nav-cloned");
			s.append(a)
		}

		function K(a, e) {
			var n = s("." + t);
			if (a >= k && e.xl) {
				n.css("width", e.xl).css("right", "-" + e.xl)
			}
			if (a < k && a >= _ && e.lg) {
				n.css("width", e.lg).css("right", "-" + e.lg)
			}
			if (a < _ && a >= y && e.md) {
				n.css("width", e.md).css("right", "-" + e.md)
			}
			if (a < y && a >= L && e.sm) {
				n.css("width", e.sm).css("right", "-" + e.sm)
			}
			if (a < L && e.xs) {
				n.css("width", e.xs).css("right", "-" + e.xs)
			}
		}

		function N() {
			if (v.hasClass(p)) {
				i = j
			} else if (v.hasClass(m)) {
				i = z
			} else if (v.hasClass(w)) {
				i = M
			} else if (v.hasClass(x)) {
				i = Q
			} else if (v.hasClass(b)) {
				i = q
			} else {
				i = W
			}
			return window.innerWidth >= i
		}

		return false
	}
})(jQuery);

$('.vg-nav').vegasMenu();
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
