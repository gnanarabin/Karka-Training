function handle_load(){
  let data =fetch('https://dummyjson.com/products')
    .then((response) => response.json())
    .then((json) => {return json});
    return data
}

handle_load()


.then((json_data) =>{
  console.log("data",json_data.products)

  for(i=0;i<json_data.products.length;i++){
    let product=json_data.products[i].title;
    let description=json_data.products[i].description;
    let price=json_data.products[i].price;

    let tr=document.createElement("tr")

    let td1=document.createElement("td")
    td1.innerText=product
    tr.appendChild(td1)
    document.getElementById("body").appendChild(tr);

    let td2=document.createElement("td")
    td2.innerText=description
    tr.appendChild(td2)
    document.getElementById("body").appendChild(tr)

    let td3=document.createElement("td")
    td3.innerText=("$"+price)
    tr.appendChild(td3)
    document.getElementById("body").appendChild(tr);

    let td4=document.createElement("td")
    let img=document.createElement("img")
    img.setAttribute("src",json_data.products[i].images[0]);
    td4.appendChild(img)
    tr.appendChild(td4)
    document.getElementById("body").appendChild(tr);

    
  }
  
})


