var expect = require('chai').expect;
var request= require('request');
var WebPage = require('./web.page');

var log4js = require('log4js');

log4js.configure({ // configure to use all types in different files.
    appenders: {

        error: {type:'file', filename:'error.log'},
        info: {type:'file', filename:'info.log'}
    },

    categories: {

        error:{ appenders:['error'], level:'error' },
        default:{ appenders:['info'], level:'info' }

    }
         
});

var loggererror = log4js.getLogger('error'); // initialize the var to use.
var loggerinfo = log4js.getLogger('info');

describe('Check Broken Links', function() {

    it('should test All Links on Sandals Page', function() {
        WebPage.open('http://www.sandals.com/');
        var SuccessLinks=[];
        var CheckLinks=[];
        var SuccessIndex=0;
        var CheckIndex=0;
        var re= /^$/;
        var rex=/^(http).*#$/;
      
     for(var z=0; z<WebPage.links.value.length; z++){



            if(!re.test(WebPage.links.value[z].getAttribute('href')) && !rex.test(WebPage.links.value[z].getAttribute('href')))

            var options={
                        url: WebPage.links.value[z].getAttribute('href'),
                        method: 'HEAD'


                            };
            
                        request(options, function(err,res,body){
                        

                        if (res===undefined) {

                            loggererror.error("Status Code: " + "UNDEFINED" + " URL: " + options.url + 
                                        " Error " + err);


                            CheckLinks[CheckIndex]= "Status Code: " + "UNDEFINED" + " URL: " + options.url + 
                                        " Error " + err;
                            CheckIndex=CheckIndex+1;

                            }

                                else if (res.statusCode!=200){

                                    loggererror.error("Status Code: " + "UNDEFINED" + " URL: " + options.url + 
                                        " Error " + err);


                                        CheckLinks[CheckIndex]= "Status Code: " + res.statusCode.toString() + " URL: " + options.url + 
                                        " Error " + err;
                                        CheckIndex=CheckIndex+1;

                                    } else {

                                         loggerinfo.info("Status Code: " + res.statusCode.toString() + " URL: " + options.url);


                                        SuccessLinks[SuccessIndex]="Status Code: " + res.statusCode.toString() + " URL: " + options.url;
                                        SuccessIndex=SuccessIndex+1;
                                            }

                        });
                        
}

      

       

         console.log("------------------------------------------------------------------------------------------");

        console.log("LINKS TO CHECK");

        for(var o=0; o<CheckLinks.length; o++ ){

        	console.log("Link: " + CheckLinks[o]);

        }

        console.log("------------------------------------------------------------------------------------------");


        console.log("SUCCESS LINKS!!!");

        for(var p=0; p<SuccessLinks.length; p++ ){

        	console.log("Link: " + SuccessLinks[p]);

        }

        
    });




});




