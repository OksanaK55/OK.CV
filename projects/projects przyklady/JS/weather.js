const getDataButton = document.getElementById("get-data-button");

getDataButton.addEventListener("click", () => {
let city = document.getElementById('city').value;
 console.log(city);

 fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=55d28ba966e628c03135fed32f2b0ded")
 .then(response => 
 response.json()
 ).then(data => {
 document.getElementById("temperature").value  = `${data.main.temp}`;
 document.getElementById("humidity").value = `${data.main.humidity}`;
 document.getElementById("wSpeed").value = `${data.wind.speed}`;
})
 .catch(err => {
   alert("Error. Please enter the correct city name");
    console.log(err);
    });
   });

   
