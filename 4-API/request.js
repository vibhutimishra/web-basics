var request = require("request");

request("http://www.google.com",function(error,response,body){
   if (error){
       console.log("error is there")

   } 
   else{
       console.log(body);
   }
});