window.onload=function ViewProduct(){
    let local_data=JSON.parse(localStorage.getItem("Dummy_json"))
    console.log("Local",local_data)
    document.getElementById("brand").innerText=local_data.brand;
    document.getElementById("img-tag").innerHTML=`<img src="${local_data.images[0]}" style="margin-top:40px"</img>`
  }