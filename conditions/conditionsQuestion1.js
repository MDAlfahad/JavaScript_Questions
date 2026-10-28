// Find the largest of three numbers using conditional statements.

function laergestNumber(a, b, c){
    if(a>=b && a>=c){
        return a
    }else if(b>=a && b>=c){
        return b
    }else{
        return c
    }
}


console.log(laergestNumber(10, 40, 60));
