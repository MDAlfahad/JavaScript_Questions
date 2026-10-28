// Create a grade calculator based on marks and percentage ranges.

//calculating based on marks
let Totalmarks = 220

if(Totalmarks >=450){
    console.log(`Grade: ${"A"}`);
    
}else if(Totalmarks>=300 && Totalmarks<450){
    console.log(`Grade: ${"B"}`);
}else if(Totalmarks>=150 && Totalmarks<300){
    console.log(`Grade$: ${"C"}`);
}else{
    console.log("Fail");
    
}

//Calculating based on percentage

let percentage =90

if(percentage >=90){
    console.log(`Grade: ${"A"}`);
    
}else if(percentage>=60 && percentage<90){
    console.log(`Grade: ${"B"}`);
}else if(percentage>=45 && percentage<60){
    console.log(`Grade$: ${"C"}`);
}else{
    console.log("Fail");
    
}