function grade(mark){
    if(mark>=90 && mark<100) return "S Grade"
    else if(mark>=80 && mark<90) return "A Grade"
    else if(mark>=70 && mark<80) return "B Grade"
    else if(mark>=60 && mark<70) return "C Grade"
    else if(mark>=50 && mark<60) return "D Grade"
    else if(mark>=40 && mark<50) return "E Grade"
    else if(mark>=0 && mark<40) return "“Student has failed"
    return "Invalid_Marks"
}
console.log(grade(92));
console.log(grade(84));
console.log(grade(70));
console.log(grade(69));
console.log(grade(57));
console.log(grade(40));
console.log(grade(9));
console.log(grade(102));