let data=[];

$.get("index.json",(json)=>{
    data.push(json);

})
console.log(data)

$("#country").click(()=>{
    // alert("hi")
    let countries=data[0].countries;
    console.log(countries)

    $('#ul').html(' ');

    for(i=0;i<countries.length;i++){
        console.log(countries[i].countryName)

        $("#ul").append(`<li onclick="country(${i})"><button class="dropdown-item" type="button">${countries[i].countryName}</button></li>`)
    }
})

function country(country_id){
    console.log(country_id)

    let state=data[0].countries[country_id].states;
    console.log(state)

    $('#ul2').html(' ');

    for(i=0;i<state.length;i++){
        console.log(state[i].stateName)

        $("#ul2").append(`<li onclick="state(${i},${country_id})"><button class="dropdown-item" type="button">${state[i].stateName}</button></li>`)

        $(".content").text(data[0].countries[country_id].countryName)
    }
}

function state(state_id,country_id){
    let district=data[0].countries[country_id].states[state_id].districts;
    console.log(district)

    $('#ul3').html(' ');

    for(i=0;i<district.length;i++){

        console.log(district[i])

        $("#ul3").append(`<li onclick="district(${i},${state_id},${country_id})"><button class="dropdown-item" type="button">${district[i]}</button></li>`)

        $(".content1").text(data[0].countries[country_id].states[state_id].stateName)

    }

}

function district(district_id,state_id,country_id){
    
    let final_district=data[0].countries[country_id].states[state_id].districts;

    for(i=0;i<final_district.length;i++){

        $(".content2").text(data[0].countries[country_id].states[state_id].districts[district_id])
    }
}