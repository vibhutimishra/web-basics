var request= require("request");

request("https://jsonplaceholder.typicode.com/todos/1",function(error,response,body){
    if (!error && response.statusCode===200){
        var data= JSON.parse(body);
        if (data["completed"]===false){
          console.log("You need to complete the title: "+data["title"]);
        }
        else{
          console.log("Good Job");
        }
      }
});