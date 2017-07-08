'use strict';

const neeoapi = require('neeo-sdk');
const controller = require('./controller');

console.log('NEEO SDK Example "simpleCustomDevice" adapter');
console.log('---------------------------------------------');

/*
 * Adapter - an Adapter contains one or more DEVICES. In this case we only use a single very
 * simple 2 button device.
 */

//this by default is set as 509 - it wont matter if this is not your device as they all are controlled the same way but if this bothers you
//do a find and replace on 509 both in this file and controller.js 
// first we set the device info, used to identify it on the Brain
//ONKYO DEVICE
const onkyo509= neeoapi.buildDevice('NR-509')
  .setManufacturer('ONKYO')
  .addAdditionalSearchToken('foo')
  .setType('AVRECEIVER')

  // Then we add the capabilities of the devic
  
   .addButton({ name: 'POWER ON', label: 'Power On' }, controller.button)
  .addButton({ name: 'POWER OFF', label: 'Power Off' }, controller.button)
   .addButton({ name: 'INPUT GAME', label: 'GAME' }, controller.button)
  .addButton({ name: 'INPUT BD/DVD', label: 'BD/DVD' }, controller.button)
  .addButton({ name: 'INPUT TV/CD', label: 'TV/CD' }, controller.button)
  .addButton({ name: 'MUTE', label: 'Mute' }, controller.button)	
  .addButton({ name: 'VOLUME UP', label: 'VOL +' }, controller.button)	
  .addButton({ name: 'VOLUME DOWN', label: 'VOL -' }, controller.button)	
 

    .addButtonHander(controller.onkyo509ButtonPressed);

function startSdkExample(brain) {
  console.log('- Start server');
  neeoapi.startServer({
    brain:,
    port: 6336,
    name: 'simple-adapter-one',
    devices: [onkyo509]
  })
  .then(() => {
    console.log('# READY! use the NEEO app to search for "ONKYO NR-509".');
  })
  .catch((error) => {
    //if there was any error, print message out to console
    console.error('ERROR!', error.message);
    process.exit(1);
  });
}

const brainIp = process.env.BRAINIP;
if (brainIp) {
  console.log('- use NEEO Brain IP from env variable', brainIp);
  startSdkExample(brainIp);
} else {
  console.log('- discover one NEEO Brain...');
  neeoapi.discoverOneBrain()
    .then((brain) => {
      console.log('- Brain discovered:', brain.name);
      startSdkExample(brain);
    });
}
