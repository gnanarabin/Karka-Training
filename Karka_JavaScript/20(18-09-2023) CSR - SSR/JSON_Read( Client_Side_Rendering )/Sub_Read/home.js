function fetch_load(){
  let data =fetch('https://dummyjson.com/products')
    .then((response) => response.json())
    .then((json) => {return json});
    return data
}

let details_data=[];

function handle_load(){
  fetch_load()
.then((json_data) =>{

  console.log("data",json_data.products)

  for(i of json_data.products){
  let body=document.getElementById("tbody");


  const row = document.createElement('tr');
  row.innerHTML = 
     `<td><span style="display:flex;flex-direction:column">${i.title}<img src="${i.images[0]}" alt="Product Image" width="50" style="margin:auto;padding-top:10px"></span></td>
      <td style="vertical-align:middle">${i.brand}</td>
      
      
      <td style="vertical-align:middle;"><button style="border:none;width:150px;height:40px;border-radius:20px;background-color:black;color:white" onclick="render(${i.id})">ViewProduct</button></td>
                                  
      `
;
      body.appendChild(row);
  }
}
)
}

function render(render){
  console.log(render)
  
  fetch_load()
  .then((json_data) =>{
    // console.log(json_data)


    // for(i=0;i<(json_data.products).length;i++){
    //   console.log(i)
    // }

    for(i in json_data.products){
      console.log(i)

      if(render==json_data.products[i].id){
        console.log("same")
        
        localStorage.setItem("Dummy_json",JSON.stringify(json_data.products[i]))
      }

    }
    window.location.href="render.html"
  })
}











