function find_days(month){

    year=new Date().getFullYear()
    year=2001
    console.log(year)
    if(month>12) return "invaild month"

    if(month==2){
        if((year%4==0 && year % 100 !== 0) || year % 400 === 0) return "29 days"
        return "28 days"
    }

    // else if()

    else if(month== 4 || month== 6 || month== 9 || month== 11) return "30 days"
    

    else return "31 days"
}
a=find_days(2)
console.log(a);