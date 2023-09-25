function load(){
    $.get("index.txt",function(json){

        var data=JSON.parse(json)
        console.log(data)

        
        // for(i of data.countries){
        //     let ul=document.getElementById("ul")
        //     let li=document.createElement("li")

        //     li.innerHTML=`<li onclick="country(${i})"><button class="dropdown-item" type="button">${i.countryName}</button></li>`


        //     ul.appendChild(li)
        // }

        for(i=0;i<(data.countries).length;i++){
            // console.log((data.countries[i].countryName))
            

            let ul=document.getElementById("ul")
            let li=document.createElement("li")
            li.innerHTML=`<li onclick="country(${i})"><button class="dropdown-item" type="button">${(data.countries[i].countryName)}</button></li>`


            ul.appendChild(li)

        }

        

        

    })
}
function country(country_id){
    $.get("index.txt",function(json){
    let data=JSON.parse(json)
    console.log("djasd",data)

    console.log(country_id)

    for(i=0;i<(data.countries).length;i++){
        if(country_id==i){
            console.log("same")

            // console.log(data.countries[i].states)

            var state=data.countries[i].states;
            console.log(state)

        }
        
        localStorage.setItem("states",JSON.stringify(state))
    }
    // for(i=0;i<state.length;i++){

    //     let ul=document.getElementById("ul2")
    //     let li=document.createElement("li")
    //     li.innerHTML=`<li><button class="dropdown-item" type="button">${state[i].stateName}</button></li>`

    //     ul.appendChild(li)
    //     console.log(state[i])
    // }

    
    let ul=document.getElementById("ul2")
    ul.innerHTML=""
    let local_state=JSON.parse(localStorage.getItem("states"))
    for(i=0;i<local_state.length;i++){
        console.log(local_state[i].stateName)
        console.log("ii",i)

        let li=document.createElement("li")
        li.innerHTML=`<li onclick="district(${i})"><button class="dropdown-item" type="button">${local_state[i].stateName}</button></li>`
        

        ul2.append(li)
        // console.log(state[i])
    }
    
}
)
}

function district(dis){
    let state=JSON.parse(localStorage.getItem("states"))
    console.log("dis",state)
    console.log(dis)

    
    for(i=0;i<state.length;i++){
        console.log(state[i].districts)
        console.log(i)

        if(dis==i){

            console.log("same")

            var district=state[i].districts;
            console.log(district)
            // let li=document.createElement("li")
            // li.innerHTML=`<li><button class="dropdown-item" type="button">${state[i].districts}</button></li>`

            // ul.appendChild(li)

        }

    }


    let ul=document.getElementById("ul3")
    ul.innerHTML=""

    for(i=0;i<district.length;i++){
        console.log("district",district[i])

        let li=document.createElement("li")
        li.innerHTML=`<li onclick="get()"><button class="dropdown-item" type="button">${district[i]}</button></li>`

        ul.appendChild(li)
    }
}


