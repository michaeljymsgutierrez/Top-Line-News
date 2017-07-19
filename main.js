// Electron module
var  electron = require('electron');
// Main application initialization
var { app } = electron;
// Browser Window initialization
var { BrowserWindow } = electron;

// Platform ready
app.on('ready', function(){
	// Initialize window
	var win  = new  BrowserWindow({ width:800,height:600,icon: __dirname + '/img/icon.png'});
	try {
		// Load main view
		win.loadURL('file://' + __dirname + '/index.html');
		// Load Debugger
		// win.webContents.openDevTools();
	}
	catch(err){
		// Log error Loading the  main window
		console.log(err);
	}
});
