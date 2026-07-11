//hoc function  
function higherOrderFunction(arg) { 
    if (arg)
    {
return function() {
        console.log("This is a higher-order function. Sucess");
    }      
    }
    else{
        return function() {
        console.log("This is a higher-order function. Failure");
    }      
    }
    
}
let message=higherOrderFunction(true);
message();