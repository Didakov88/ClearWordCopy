
try{
	var parent = app.activeDocument.activeLayer.parent;
	var layers = parent.artLayers;
	var regExp = /((\s+)(copy.*))$/i;
	for (var i=0; i<layers.length; i++){
		var currentLayer = layers[i];
				currentLayer.name = currentLayer.name.replace(regExp,"");
	}
}
catch(err){
	alert (err.line + "\n" + err.message)
}


