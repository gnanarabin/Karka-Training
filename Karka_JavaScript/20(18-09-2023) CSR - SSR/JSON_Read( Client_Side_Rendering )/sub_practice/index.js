function on_load(){

  $.getJSON("https://dummyjson.com/products/1", function (json){

     
    // console.log(data);
    // document.getElementById("id").innerText=data.products[0].id;
    // document.getElementById("title").innerText=data.products[0].title;
    // document.getElementById("description").innerText=data.products[0].description;
    // document.getElementById("price").innerText=data.products[0].price;
    // document.getElementById("discount").innerText=data.products[0].discountPercentage;
    // document.getElementById("rating").innerText=data.products[0].rating;
    // document.getElementById("stock").innerText=data.products[0].stock;
    // document.getElementById("brand").innerText=data.products[0].brand;
    // document.getElementById("category").innerText=data.products[0].category;

    for(i in json){
        console.log("for",json[i])
    document.getElementById(i).innerText=json[i];

    }
  }
  )
}

  




