let l=[2,0,1,3,-1]

let a=l.filter((ele)=>{
    return ele>=0
})
let b=a.map((ele)=>{
    return '<li>' + ele + '</li>'
})

let c='<ul>'+ b.join("") + '</ul>'
console.log(c);
console.log(typeof(c));