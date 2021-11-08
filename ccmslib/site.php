<?php

function load_resource($arg){
	global $CFG;
	//echo $CFG["RES"][$arg[0]];
	if((isset($CFG["RES"][$arg]) ?? null) !== "") {
		echo $CFG["RES"][$arg];
	}
}
