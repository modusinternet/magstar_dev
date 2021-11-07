<?php
header("Content-Type: application/manifest+json; charset=utf-8");
header("Expires: " . gmdate("D, d M Y H:i:s T", time() + ($CFG["CACHE_EXPIRE"] * 60)));
?>{CCMS_DB_PRELOAD:all,index}{
	"short_name": "magStar",
	"name": "{CCMS_DB:all,company-name}",
	"description": "{CCMS_DB:index,description}",
	"icons": [
		{
			"src": "/ccmstpl/_img/ico/android-chrome-144x144.png",
			"sizes": "144x144",
			"type": "image/png",
			"purpose": "maskable"
		},{
			"src": "/ccmstpl/_img/ico/android-chrome-192x192.png",
			"sizes": "192x192",
			"type": "image/png",
			"purpose": "maskable"
		},{
			"src": "/ccmstpl/_img/ico/android-chrome-256x256.png",
			"sizes": "256x256",
			"type": "image/png",
			"purpose": "maskable"
		}
	],
	"start_url": "/",
	"theme_color": "#ffffff",
	"background_color": "#ffffff",
	"display": "standalone",
	"scope": "/",
	"lang": "{CCMS_LIB:_default.php;FUNC:ccms_lng}",
	"dir": "{CCMS_LIB:_default.php;FUNC:ccms_lng_dir}"
}
