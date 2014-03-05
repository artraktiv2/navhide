/*
 * MacAddress
 * Implements the javascript access to the cordova plugin for retrieving the device mac address. Returns 0 if not running on Android
 * @author Olivier Brand
 */

/**
 * @return the mac address class instance
 */
 var NavHide = {

 	hideNav: function(successCallback, failureCallback){
 		cordova.exec(successCallback, failureCallback, 'NavHidePlugin',
 			'hideNav', []);
 	}
 };

 module.exports = MacAddress;