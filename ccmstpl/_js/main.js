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


/* ----------
Navigation Code Begin
---------- */
s.fn.vegasMenu=function(a){s.extend({},arguments[0]||{});var e=this,n=e.children("ul"),r=s("body"),l="vg-nav-hamburger",o="vg-nav-sidebar",t="vg-nav-overlay",d="vg-nav-main-container",i="show";return n.addClass(d),function(){r.find(".dropdown-mega > a, .dropdown > a").each(function(){var a=s(this).text();s(this).html(a+'<span class="toggle"></span>')}),e.prepend('<a href="#" class="'+l+'"><span></span></a>'),r.append('<div class="'+o+'"><div class="'+o+'__close">&times;</div><div class="'+o+'__content"></div></div>'),r.append('<div class="'+t+'"></div>');var a=n.clone().addClass("vg-nav-cloned");r.find("."+o+"__content").append(a)}(),s(document).on("click","li.dropdown a",function(){var a=s(this),e=a.parent("li");if(s(".dropdown-mega").removeClass(i),e.parent("ul").hasClass(d)){var r=n.find(".show");return r.hasClass("current")&&r.removeClass(i),e.hasClass("current")?e.removeClass(i).removeClass("current"):(e.addClass(i).addClass("current"),r.removeClass("current")),!1}if(e.hasClass(i))a.parent("li").removeClass(i),e.parent("ul").hasClass(d)&&n.find(".show").removeClass(i);else if(a.parent("li").children("ul").length>0)return a.parent("li").addClass(i),!1}),s(document).on("click","li.dropdown-mega > a",function(){var a=s(this),e=a.parent("li");return e.hasClass(i)?e.removeClass(i):(n.find(".show").removeClass(i).removeClass("current"),e.addClass(i)),!1}),s(document).mouseup(function(a){0===s("."+d).has(a.target).length&&n.find(".show").removeClass(i).removeClass("current")}),s(document).on("click","."+l+", ."+t+", ."+o+"__close",function(){return r.find("."+l).toggleClass(i),r.find("."+o).toggleClass(i),r.find("."+t).toggleClass(i),!1}),!1};
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
