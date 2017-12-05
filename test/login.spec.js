// login.spec.js
var expect = require('chai').expect;

var LoginPage = require('./login.page');
var request= require('request');
var resortArray = [
    "SEB,S,2",
    "SRB,S,2",
    "SLS,S,2",
    "INN,S,2",
    "SMB,S,2",
    "SNG,S,2",
    "SRC,S,2",
    "BRP,S,6",
    "SWH,S,2",
    "SGL,S,2",
    "SHC,S,2",
    "SLU,S,2",
    "SBD,S,2"
];

var d = new Date();
var month = d.getMonth();
var year = d.getFullYear();


var hostTier1 = [//"Array of Hosts Tier 1"
];

var hostTier2 = [//"Array of Hosts Tier 2"
];

var hostTier3 = [//"Array of Hosts Tier 3"
];

var hostTier4 = [//"Array of Hosts Tier 4"
];

var hostTier5 = [//"Array of Hosts Tier 5"
];

var hostTier6 = [//"Array of Hosts Tier 6"
];

var hostTier7 = [//"Array of Hosts Tier 7"
];

var hostTier8 = [//"Array of Hosts Tier 8"
];

var hostTierV1 = [//"Array of Hosts Tier 1 V"
];

var hostTierV2 = [//"Array of Hosts Tier 2 V"
];

var hostTierV3 = [//"Array of Hosts Tier 3 V"
];

var hostTierV4 = [//"Array of Hosts Tier 4 V"
];




describe('Availability Tests', function() {
   
    
    it('should test Availability Toronto Tier1', function() {

        if (month>=9){
            month=1;
            year=year+1;
        } 

        else {
            month=month+3;
        }


        for (var i = 0; i < hostTier1.length; i++) {
            LoginPage.open(hostTier1[i]);
            LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
            LoginPage.chkinmonth.selectByValue(month);
            LoginPage.chkinday.selectByValue('1');
            LoginPage.chkinyear.selectByValue(year);
            LoginPage.btnair.click();
            LoginPage.dptcountry.selectByValue('USA');
            LoginPage.dptstate.selectByValue('AZ');
            LoginPage.dptcity.selectByValue('PHX,PHOENIX');
            LoginPage.submit.submitForm();
            

             browser.waitUntil(function (){

                if(LoginPage.NoAirMsg===true){
                    LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
                    LoginPage.chkinmonth.selectByValue(month+1);
                    LoginPage.chkinday.selectByValue('1');
                    LoginPage.chkinyear.selectByValue(year);
                    LoginPage.requote.submitForm();

                }

                   else if(LoginPage.NoAirAv===true){

                    LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
                    LoginPage.chkinmonth.selectByValue(month+2);
                    LoginPage.chkinday.selectByValue('1');
                    LoginPage.chkinyear.selectByValue(year);
                    LoginPage.btnairRq.click();
                    LoginPage.dptcountry.selectByValue('USA');
                    LoginPage.dptstate.selectByValue('AZ');
                    LoginPage.dptcity.selectByValue('PHX,PHOENIX');
                    LoginPage.requote.submitForm();

                } 


                else if (LoginPage.AirTable===true){
                    return true;
                    } 

        
            });

            LoginPage.scroll(3000, 3000);
            LoginPage.pause(5000);
        }
    });

    it('should test Availability Toronto Tier3', function() {
        


        for (var j = 0; j < hostTier3.length; j++) {
            LoginPage.open(hostTier3[j]);
            LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
            LoginPage.chkinmonth.selectByValue(month);
            LoginPage.chkinday.selectByValue('1');
            LoginPage.chkinyear.selectByValue(year);
            LoginPage.btnair.click();
            LoginPage.dptcountry.selectByValue('USA');
            LoginPage.dptstate.selectByValue('AZ');
            LoginPage.dptcity.selectByValue('PHX,PHOENIX');
            LoginPage.submit.submitForm();


            browser.waitUntil(function (){

                if(LoginPage.NoAirMsg===true){
                    LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
                    LoginPage.chkinmonth.selectByValue(month+1);
                    LoginPage.chkinday.selectByValue('1');
                    LoginPage.chkinyear.selectByValue(year);
                    LoginPage.requote.submitForm();

                }

                else if(LoginPage.NoAirAv===true){

                    LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
                    LoginPage.chkinmonth.selectByValue(month+2);
                    LoginPage.chkinday.selectByValue('1');
                    LoginPage.chkinyear.selectByValue(year);
                    LoginPage.btnairRq.click();
                    LoginPage.dptcountry.selectByValue('USA');
                    LoginPage.dptstate.selectByValue('AZ');
                    LoginPage.dptcity.selectByValue('PHX,PHOENIX');
                    LoginPage.requote.submitForm();

                } 

                else if (LoginPage.AirTable===true){
                    return true;
                    } 

        
            });



            LoginPage.scroll(3000, 3000);
            LoginPage.pause(5000);
        }

    });


    it('should test Availability Toronto Tier4', function() {

        

        for (var k = 0; k < hostTier4.length; k++) {
            LoginPage.open(hostTier4[k]);
            LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
            LoginPage.chkinmonth.selectByValue(month);
            LoginPage.chkinday.selectByValue('1');
            LoginPage.chkinyear.selectByValue(year);
            LoginPage.btnair.click();
            LoginPage.dptcountry.selectByValue('USA');
            LoginPage.dptstate.selectByValue('AZ');
            LoginPage.dptcity.selectByValue('PHX,PHOENIX');
            LoginPage.submit.submitForm();
            
            browser.waitUntil(function (){

                if(LoginPage.NoAirMsg===true){
                    LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
                    LoginPage.chkinmonth.selectByValue(month+1);
                    LoginPage.chkinday.selectByValue('1');
                    LoginPage.chkinyear.selectByValue(year);
                    LoginPage.requote.submitForm();

                }

                else if(LoginPage.NoAirAv===true){

                    LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
                    LoginPage.chkinmonth.selectByValue(month+2);
                    LoginPage.chkinday.selectByValue('1');
                    LoginPage.chkinyear.selectByValue(year);
                    LoginPage.btnairRq.click();
                    LoginPage.dptcountry.selectByValue('USA');
                    LoginPage.dptstate.selectByValue('AZ');
                    LoginPage.dptcity.selectByValue('PHX,PHOENIX');
                    LoginPage.requote.submitForm();

                } 

                else if (LoginPage.AirTable===true){
                    return true;
                    } 

        
            });



            LoginPage.scroll(3000, 3000);
            LoginPage.pause(5000);
        }


    });


    it('should test Availability Toronto Tier5', function() {

        
        for (var l = 0; l < hostTier5.length; l++) {
            LoginPage.open(hostTier5[l]);
            LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
            LoginPage.chkinmonth.selectByValue(month);
            LoginPage.chkinday.selectByValue('1');
            LoginPage.chkinyear.selectByValue(year);
            LoginPage.btnair.click();
            LoginPage.dptcountry.selectByValue('USA');
            LoginPage.dptstate.selectByValue('AZ');
            LoginPage.dptcity.selectByValue('PHX,PHOENIX');
            LoginPage.submit.submitForm();
            
            browser.waitUntil(function (){

                if(LoginPage.NoAirMsg===true){
                    LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
                    LoginPage.chkinmonth.selectByValue(month+1);
                    LoginPage.chkinday.selectByValue('1');
                    LoginPage.chkinyear.selectByValue(year);
                    LoginPage.requote.submitForm();

                }

                else if(LoginPage.NoAirAv===true){

                    LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
                    LoginPage.chkinmonth.selectByValue(month+2);
                    LoginPage.chkinday.selectByValue('1');
                    LoginPage.chkinyear.selectByValue(year);
                    LoginPage.btnairRq.click();
                    LoginPage.dptcountry.selectByValue('USA');
                    LoginPage.dptstate.selectByValue('AZ');
                    LoginPage.dptcity.selectByValue('PHX,PHOENIX');
                    LoginPage.requote.submitForm();

                } 

                else if (LoginPage.AirTable===true){
                    return true;
                    } 

        
            });



            LoginPage.scroll(3000, 3000);
            LoginPage.pause(5000);
        }


    });

    it('should test Availability Toronto Tier6', function() {

        
        for (var m = 0; m < hostTier6.length; m++) {
            LoginPage.open(hostTier6[m]);
            LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
            LoginPage.chkinmonth.selectByValue(month);
            LoginPage.chkinday.selectByValue('1');
            LoginPage.chkinyear.selectByValue(year);
            LoginPage.btnair.click();
            LoginPage.dptcountry.selectByValue('USA');
            LoginPage.dptstate.selectByValue('AZ');
            LoginPage.dptcity.selectByValue('PHX,PHOENIX');
            LoginPage.submit.submitForm();
            
            browser.waitUntil(function (){

                if(LoginPage.NoAirMsg===true){
                    LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
                    LoginPage.chkinmonth.selectByValue(month+1);
                    LoginPage.chkinday.selectByValue('1');
                    LoginPage.chkinyear.selectByValue(year);
                    LoginPage.requote.submitForm();

                }

                else if(LoginPage.NoAirAv===true){

                    LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
                    LoginPage.chkinmonth.selectByValue(month+2);
                    LoginPage.chkinday.selectByValue('1');
                    LoginPage.chkinyear.selectByValue(year);
                    LoginPage.btnairRq.click();
                    LoginPage.dptcountry.selectByValue('USA');
                    LoginPage.dptstate.selectByValue('AZ');
                    LoginPage.dptcity.selectByValue('PHX,PHOENIX');
                    LoginPage.requote.submitForm();

                } 

                else if (LoginPage.AirTable===true){
                    return true;
                    } 

        
            });


            LoginPage.scroll(3000, 3000);
            LoginPage.pause(5000);
        }


    });

    it('should test Availability Toronto Tier7', function() {

        for (var n = 0; n < hostTier7.length; n++) {
            LoginPage.open(hostTier7[n]);
            LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
            LoginPage.chkinmonth.selectByValue(month);
            LoginPage.chkinday.selectByValue('1');
            LoginPage.chkinyear.selectByValue(year);
            LoginPage.btnair.click();
            LoginPage.dptcountry.selectByValue('USA');
            LoginPage.dptstate.selectByValue('AZ');
            LoginPage.dptcity.selectByValue('PHX,PHOENIX');
            LoginPage.submit.submitForm();
            

            browser.waitUntil(function (){

                if(LoginPage.NoAirMsg===true){
                    LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
                    LoginPage.chkinmonth.selectByValue(month+1);
                    LoginPage.chkinday.selectByValue('1');
                    LoginPage.chkinyear.selectByValue(year);
                    LoginPage.requote.submitForm();

                }

                else if(LoginPage.NoAirAv===true){

                    LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
                    LoginPage.chkinmonth.selectByValue(month+2);
                    LoginPage.chkinday.selectByValue('1');
                    LoginPage.chkinyear.selectByValue(year);
                    LoginPage.btnairRq.click();
                    LoginPage.dptcountry.selectByValue('USA');
                    LoginPage.dptstate.selectByValue('AZ');
                    LoginPage.dptcity.selectByValue('PHX,PHOENIX');
                    LoginPage.requote.submitForm();

                } 

                else if (LoginPage.AirTable===true){
                    return true;
                    } 

        
            });


            LoginPage.scroll(3000, 3000);
            LoginPage.pause(5000);
        }


    });


    it('should test Availability Toronto Tier8', function() {

        
        for (var o = 0; o < hostTier8.length; o++) {
            LoginPage.open(hostTier8[o]);
            LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
            LoginPage.chkinmonth.selectByValue(month);
            LoginPage.chkinday.selectByValue('1');
            LoginPage.chkinyear.selectByValue(year);
            LoginPage.btnair.click();
            LoginPage.dptcountry.selectByValue('USA');
            LoginPage.dptstate.selectByValue('AZ');
            LoginPage.dptcity.selectByValue('PHX,PHOENIX');
            LoginPage.submit.submitForm();
            
            browser.waitUntil(function (){

                if(LoginPage.NoAirMsg===true){
                    LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
                    LoginPage.chkinmonth.selectByValue(month+1);
                    LoginPage.chkinday.selectByValue('1');
                    LoginPage.chkinyear.selectByValue(year);
                    LoginPage.requote.submitForm();

                }

                else if(LoginPage.NoAirAv===true){

                    LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
                    LoginPage.chkinmonth.selectByValue(month+2);
                    LoginPage.chkinday.selectByValue('1');
                    LoginPage.chkinyear.selectByValue(year);
                    LoginPage.btnairRq.click();
                    LoginPage.dptcountry.selectByValue('USA');
                    LoginPage.dptstate.selectByValue('AZ');
                    LoginPage.dptcity.selectByValue('PHX,PHOENIX');
                    LoginPage.requote.submitForm();

                } 

                else if (LoginPage.AirTable===true){
                    return true;
                    } 

        
            });


            LoginPage.scroll(3000, 3000);
            LoginPage.pause(5000);
        }


    });

    it('should test Availability Vancouver Tier1', function() {

        for (var p = 0; p < hostTierV1.length; p++) {
            LoginPage.open(hostTierV1[p]);
            LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
            LoginPage.chkinmonth.selectByValue(month);
            LoginPage.chkinday.selectByValue('1');
            LoginPage.chkinyear.selectByValue(year);
            LoginPage.btnair.click();
            LoginPage.dptcountry.selectByValue('USA');
            LoginPage.dptstate.selectByValue('AZ');
            LoginPage.dptcity.selectByValue('PHX,PHOENIX');
            LoginPage.submit.submitForm();
            

            browser.waitUntil(function (){

                if(LoginPage.NoAirMsg===true){
                    LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
                    LoginPage.chkinmonth.selectByValue(month+1);
                    LoginPage.chkinday.selectByValue('1');
                    LoginPage.chkinyear.selectByValue(year);
                    LoginPage.requote.submitForm();

                }

                else if(LoginPage.NoAirAv===true){

                    LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
                    LoginPage.chkinmonth.selectByValue(month+2);
                    LoginPage.chkinday.selectByValue('1');
                    LoginPage.chkinyear.selectByValue(year);
                    LoginPage.btnairRq.click();
                    LoginPage.dptcountry.selectByValue('USA');
                    LoginPage.dptstate.selectByValue('AZ');
                    LoginPage.dptcity.selectByValue('PHX,PHOENIX');
                    LoginPage.requote.submitForm();

                } 

                else if (LoginPage.AirTable===true){
                    return true;
                    } 

        
            });


            LoginPage.scroll(3000, 3000);
            LoginPage.pause(5000);
        }


    });

    it('should test Availability Vancouver Tier2', function() {
        
        for (var q = 0; q < hostTierV2.length; q++) {
            LoginPage.open(hostTierV2[q]);
            LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
            LoginPage.chkinmonth.selectByValue(month);
            LoginPage.chkinday.selectByValue('1');
            LoginPage.chkinyear.selectByValue(year);
            LoginPage.btnair.click();
            LoginPage.dptcountry.selectByValue('USA');
            LoginPage.dptstate.selectByValue('AZ');
            LoginPage.dptcity.selectByValue('PHX,PHOENIX');
            LoginPage.submit.submitForm();
            
            browser.waitUntil(function (){

                if(LoginPage.NoAirMsg===true){
                    LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
                    LoginPage.chkinmonth.selectByValue(month+1);
                    LoginPage.chkinday.selectByValue('1');
                    LoginPage.chkinyear.selectByValue(year);
                    LoginPage.requote.submitForm();

                }

                else if(LoginPage.NoAirAv===true){

                    LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
                    LoginPage.chkinmonth.selectByValue(month+2);
                    LoginPage.chkinday.selectByValue('1');
                    LoginPage.chkinyear.selectByValue(year);
                    LoginPage.btnairRq.click();
                    LoginPage.dptcountry.selectByValue('USA');
                    LoginPage.dptstate.selectByValue('AZ');
                    LoginPage.dptcity.selectByValue('PHX,PHOENIX');
                    LoginPage.requote.submitForm();

                } 

                else if (LoginPage.AirTable===true){
                    return true;
                    } 

        
            });

            LoginPage.scroll(3000, 3000);
            LoginPage.pause(5000);
        }


    });

    it('should test Availability Vancouver Tier3', function() {
        

        for (var r = 0; r < hostTierV3.length; r++) {
            LoginPage.open(hostTierV3[r]);
            LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
            LoginPage.chkinmonth.selectByValue(month);
            LoginPage.chkinday.selectByValue('1');
            LoginPage.chkinyear.selectByValue(year);
            LoginPage.btnair.click();
            LoginPage.dptcountry.selectByValue('USA');
            LoginPage.dptstate.selectByValue('AZ');
            LoginPage.dptcity.selectByValue('PHX,PHOENIX');
            LoginPage.submit.submitForm();
            
            browser.waitUntil(function (){

                if(LoginPage.NoAirMsg===true){
                    LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
                    LoginPage.chkinmonth.selectByValue(month+1);
                    LoginPage.chkinday.selectByValue('1');
                    LoginPage.chkinyear.selectByValue(year);
                    LoginPage.requote.submitForm();

                }

                else if(LoginPage.NoAirAv===true){

                    LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
                    LoginPage.chkinmonth.selectByValue(month+2);
                    LoginPage.chkinday.selectByValue('1');
                    LoginPage.chkinyear.selectByValue(year);
                    LoginPage.btnairRq.click();
                    LoginPage.dptcountry.selectByValue('USA');
                    LoginPage.dptstate.selectByValue('AZ');
                    LoginPage.dptcity.selectByValue('PHX,PHOENIX');
                    LoginPage.requote.submitForm();

                } 

                else if (LoginPage.AirTable===true){
                    return true;
                    } 

        
            });



            LoginPage.scroll(3000, 3000);
            LoginPage.pause(5000);
        }


    });

    it('should test Availability Vancouver Tier4', function() {
  
        

        for (var s = 0; s < hostTierV4.length; s++) {
            LoginPage.open(hostTierV4[s]);
            LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
            LoginPage.chkinmonth.selectByValue(month);
            LoginPage.chkinday.selectByValue('1');
            LoginPage.chkinyear.selectByValue(year);
            LoginPage.btnair.click();
            LoginPage.dptcountry.selectByValue('USA');
            LoginPage.dptstate.selectByValue('AZ');
            LoginPage.dptcity.selectByValue('PHX,PHOENIX');
            LoginPage.submit.submitForm();
            
            browser.waitUntil(function (){

                if(LoginPage.NoAirMsg===true){
                    LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
                    LoginPage.chkinmonth.selectByValue(month+1);
                    LoginPage.chkinday.selectByValue('1');
                    LoginPage.chkinyear.selectByValue(year);
                    LoginPage.requote.submitForm();

                }

                else if(LoginPage.NoAirAv===true){

                    LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
                    LoginPage.chkinmonth.selectByValue(month+2);
                    LoginPage.chkinday.selectByValue('1');
                    LoginPage.chkinyear.selectByValue(year);
                    LoginPage.btnairRq.click();
                    LoginPage.dptcountry.selectByValue('USA');
                    LoginPage.dptstate.selectByValue('AZ');
                    LoginPage.dptcity.selectByValue('PHX,PHOENIX');
                    LoginPage.requote.submitForm();

                } 

                else if (LoginPage.AirTable===true){
                    return true;
                    } 

        
            });

            LoginPage.scroll(3000, 3000);
            LoginPage.pause(5000);
        }


    });


});















