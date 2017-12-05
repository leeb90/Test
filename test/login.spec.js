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


var hostTier1 = ["https://172.16.208.51/index.cfm?", "https://172.16.208.52/index.cfm?", "https://172.16.208.53/index.cfm?",
    "https://172.16.208.54/index.cfm?"
];

var hostTier2 = ["https://172.16.208.61/index.cfm?", "https://172.16.208.62/index.cfm?", "https://172.16.208.63/index.cfm?",
    "https://172.16.208.64/index.cfm?"
];

var hostTier3 = ["https://172.16.208.71/index.cfm?", "https://172.16.208.72/index.cfm?", "https://172.16.208.73/index.cfm?",
    "https://172.16.208.74/index.cfm?"
];

var hostTier4 = ["https://172.16.208.102/index.cfm?", "https://172.16.208.105/index.cfm?", "https://172.16.208.106/index.cfm?",
    "https://172.16.208.107/index.cfm?"
];

var hostTier5 = ["https://172.16.208.112/index.cfm?", "https://172.16.208.113/index.cfm?", "https://172.16.208.115/index.cfm?",
    "https://172.16.208.134/index.cfm?", "https://172.16.208.135/index.cfm?"
];

var hostTier6 = ["https://172.16.208.101/index.cfm?", "https://172.16.208.109/index.cfm?", "https://172.16.208.110/index.cfm",
    "https://172.16.208.111/index.cfm?"
];

var hostTier7 = ["https://172.16.208.116/index.cfm?", "https://172.16.208.117/index.cfm?", "https://172.16.208.118/index.cfm?",
    "https://172.16.208.119/index.cfm?"
];

var hostTier8 = ["https://172.16.208.81/index.cfm?", "https://172.16.208.82/index.cfm?", "https://172.16.208.83/index.cfm?",
    "https://172.16.208.84/index.cfm"
];

var hostTierV1 = ["https://172.20.208.51/index.cfm?", "https://172.20.208.52/index.cfm?", "https://172.20.208.53/index.cfm?",
    "https://172.20.208.54/index.cfm"
];

var hostTierV2 = ["https://172.20.208.61/index.cfm?", "https://172.20.208.62/index.cfm?", "https://172.20.208.63/index.cfm?",
    "https://172.20.208.64/index.cfm"
];

var hostTierV3 = ["https://172.20.208.71/index.cfm?", "https://172.20.208.72/index.cfm?", "https://172.20.208.73/index.cfm?",
    "https://172.20.208.74/index.cfm"
];

var hostTierV4 = ["https://172.20.208.81/index.cfm?", "https://172.20.208.82/index.cfm?", "https://172.20.208.83/index.cfm?",
    "https://172.20.208.84/index.cfm"
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









/*it('should fill Step 3 Information', function () {

       LoginPage.title.selectByValue('MR');
       LoginPage.gender.selectByValue('M');
       LoginPage.address.setValue('Arizona Street');
       LoginPage.firstName.setValue('Luis');
       LoginPage.lastName.setValue('Honduras');
       LoginPage.city.setValue('Arizona')
       LoginPage.country.selectByValue('USA');
       LoginPage.state.selectByValue('AZ');
       LoginPage.zip.setValue('85001');
       LoginPage.phone.setValue('6025550138');
       LoginPage.email.setValue('lespinoza@sanservices.hn');
       LoginPage.birthMonth.selectByValue('5');
       LoginPage.birthDay.selectByValue('20');
       LoginPage.birthYear.selectByValue('1990');
       LoginPage.adult1Title.selectByValue('MRS');
       LoginPage.adult1Name.setValue('Luisa');
       LoginPage.adult1LastName.setValue('Honduras');
       LoginPage.adult1Gender.selectByValue('F');
       LoginPage.adult1BirthMonth.selectByValue('7');
       LoginPage.adult1BirthDay.selectByValue('25');
       LoginPage.adult1BirthYear.selectByValue('1991');
       browser.submitForm('#guestinfoForm');






    });*/






