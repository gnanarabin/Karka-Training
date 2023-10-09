// let data=[]
$.get("index.json",(json)=>{
    console.log(json)
    
    json.persons.map((ele,index)=>{

        // let body=document.getElementById("tbody");
        let body=$("#tbody");
        // let row = document.createElement('tr');

        // row.innerHTML=`<td>${index+1}</td><td>${ele.f_name}</td><td>${ele.l_name}</td><td>${ele.age}</td><td>${ele.place}</td>`

        row=`<tr><td>${index+1}</td><td>${ele.f_name}</td><td>${ele.l_name}</td><td>${ele.age}</td><td>${ele.place}</td></tr>`

        // body.appendChild(row)

        $(body).append(row)

        // console.log(ele)
    })
})



// console.log(data.persons)

// data[0].persons.map((ele,index)=>{
//     console.log(ele)    

//   let body=document.getElementById("tbody");
//   const row = document.createElement('tr');

//   row.innerHTML=`<td>${ele.personsf_name}</td>`

//     body.appendChild(row)
// })
