let weather={
    apikey:"e04eb1075dc65811ad174de689370adc"
    
    
    
}

function search()
{
    const city=document.getElementById("search-bar");
    console.log(city.value);
    getdata(city.value);
}

async function getdata(city){
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid='+ weather.apikey); 
    const data=await response.json(); 
    let n1=data.name;
    const{temp,humidity}=data.main;
    document.querySelector(".city").innerText="Temprature in " + n1;
    document.querySelector(".temp").innerText=temp +"°";

    

    

    
}

document
    .querySelector(".search button")
    .addEventListener("click",function(){
     search();
    });




 




 
