//ONKYO509 PLUGIN
//
'use strict';
//this by default is set as 509 - it wont matter if this is not your device as they all are controlled the same way but if this bothers you
//do a find and replace on 509 both in this file and index.js 

 var onkyo509 = require('onkyo.js');
 //amend IP HERE
 var onkyo509 = onkyo509.init({ip: '192.168.1.75' });
  onkyo509.Connect();
module.exports.onkyo509ButtonPressed = function onkyo509ButtonPressed(name, deviceid) {
  
  console.log('[CONTROLLER]', name, 'button was pressed!');
console.log (name);
  
 if (name === "VOLUME UP") {
	   onkyo509.SendCommand('AUDIO', 'Volume Up');
    
  }
     if (name === "VOLUME DOWN") {
	   onkyo509.SendCommand('AUDIO', 'Volume Down');
  };
if (name === "MUTE") {
	   onkyo509.SendCommand('AUDIO', 'Mute');
  };

  if (name === "POWER ON") {
	   onkyo509.SendCommand('POWER', 'Power ON');
  }; 
  if (name === "POWER OFF") {
	   onkyo509.SendCommand('POWER', 'Power OFF');
  }; 
  

  if (name === "INPUT FM") {
	   onkyo509.SendCommand('SOURCE_SELECT', 'FM');
  };

  if (name === "INPUT GAME") {
	   onkyo509.SendCommand('SOURCE_SELECT', 'GAME');
  };

  if (name === "INPUT BD/DVD") {
	   onkyo509.SendCommand('SOURCE_SELECT', 'BD/DVD');
  };  
   
     if (name === "INPUT TV/CD") {
	   onkyo509.SendCommand('SOURCE_SELECT', 'CD');
  };  

  };

//END ONKYO509
