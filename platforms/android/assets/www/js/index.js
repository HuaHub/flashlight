/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();


    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

var bilde = 1;
function anywhereClick() {
    document.body.style.backgroundImage= "url(./img/" +  bilde  +".jpg) ";
    
    nybilde = bilde;
    while(nybilde == bilde)
    if(bilde<10){
    nybilde = 10+Math.floor(Math.random()*3+1);
    }
    else{
    nybilde = Math.floor(Math.random()*3+1);
    }

    bilde = nybilde;


    window.plugins.flashlight.available(function(isAvailable) {
      if (isAvailable) {

        window.plugins.flashlight.toggle(); 

      } else {
    alert("Flashlight not available on this device");
  }
});

} 


window.addEventListener('load', function() {
document.body.style.backgroundImage= "url(./img/1.jpg)";
FastClick.attach(document.body);}, false);

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
    anywhereClick();
}

function exitApp() {
    setTimeout(function() {
navigator.app.exitApp();
}, 1000); // 1 second

}

document.addEventListener("backbutton", function(){
window.plugins.flashlight.switchOff(exitApp,exitApp)
}, false);