function RELOAD_INTER(){
	runtSCRIPT.Hr.Game_events.Ly['t495'][0].Zk[51][0].VG();
}
function AIM_INTER(){
	runtSCRIPT.Hr.Game_events.Ly['t495'][0].Zk[2][0].VG();
}
function PAD_INTER(){
	runtSCRIPT.Hr.Game_events.Ly['t495'][0].Zk[31][0].VG();
}
function TAKE_I_INTER(){
	runtSCRIPT.Hr.Game_events.Ly['t495'][1].Zk[6][0].VG();
}
function ATTACK_INTER(){
	runtSCRIPT.Hr.Game_events.Ly['t495'][1].Zk[0][0].VG();
}
function SWICTH_WP_INTER(){	
	runtSCRIPT.Hr.Game_events.Ly['t495'][1].Zk[9][0].VG();
}
function INVENTORY_INTER(){
	runtSCRIPT.Hr.Game_events.Ly['t495'][1].Zk[8][0].VG();
}
function PAUSE_INTER(){
	c2_callFunction("options");
}

document.onkeyup = (e) =>{
	switch(e.code.toLowerCase()){
		case GAME_KEYS.RELOAD.toLowerCase():
			RELOAD_INTER();
			break;	
		case GAME_KEYS.AIM.toLowerCase():
			AIM_INTER();
			break;
		case GAME_KEYS.PAD_PAGE.toLowerCase():
			PAD_INTER();
			break;
		case GAME_KEYS.TAKE_ITENS.toLowerCase():
			TAKE_I_INTER();
			break;
		case GAME_KEYS.OPTIONS_MENU.toLowerCase():
			PAUSE_INTER();
			break;
		case GAME_KEYS.INVENTORY.toLowerCase():
			INVENTORY_INTER();
			break;
		case GAME_KEYS.SWITCH_WEAPON.toLowerCase():
			SWICTH_WP_INTER();
			break;
		case GAME_KEYS.SHOOT_FIREWP.toLowerCase():
			ATTACK_INTER();
			break;
			
		//zoom.js
		case GAME_KEYS.ZOOM_IN.toLowerCase():
			ZoomStatus.ZOOM_IN = false;
			break;
		case GAME_KEYS.ZOOM_OUT.toLowerCase():
			ZoomStatus.ZOOM_OUT = false;
			break;
	}
}
document.onkeydown = (e) =>{
	switch(e.code.toLowerCase()){
		//zoom.js
		case GAME_KEYS.ZOOM_IN.toLowerCase():
			ZoomStatus.ZOOM_IN = true;
			break;
		case GAME_KEYS.ZOOM_OUT.toLowerCase():
			ZoomStatus.ZOOM_OUT = true;
			break;
	}	
}