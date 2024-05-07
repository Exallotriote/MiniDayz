var ZoomStatus = {
	ZOOM_IN: false,
	ZOOM_OUT: false
};
var currentZOOM = 1.0;

function ZOOM_PROC(_inMAP){
	try {
		
		if(_inMAP && !runtSCRIPT.tD[92].data) {
			runtSCRIPT.wj.autozoom.ci =false
			
			if (ZoomStatus.ZOOM_OUT && currentZOOM > 0.7){
				currentZOOM -= 0.05;
				for (let i = 0; i < 51; i++){
					runtSCRIPT.Fs.Map.ua[i].scale = currentZOOM;
				}
			}				
			
			if (ZoomStatus.ZOOM_IN && currentZOOM < 4.2){
				currentZOOM += 0.05;
				for (let i = 0; i < 51; i++){
					runtSCRIPT.Fs.Map.ua[i].
					scale = currentZOOM;
				}
			}
			runtSCRIPT.Fs.Map.ua[61].scale = currentZOOM;
		}
	}catch(err){}
}