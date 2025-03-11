//1

async function example() {
    return "Hello World";
   }
   example();

//2
   async function example1() {
    let promise = new Promise((resolve) => {
        setTimeout(() => resolve("Hello"), 2000);
        });
        promise
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    const result = await promise;
    console.log(result); // “Hello World”
   }
   example1();
//3
//    function example() {
//     const result = await promise; //SyntaxError
//     console.log(result);
//    }

//4
async function example2() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const jsonData = await data.json();
    console.log(jsonData);
   }
   example2();
//5

async function example3() {
     const [data1, data2] = await Promise.all([
     fetch('https://jsonplaceholder.typicode.com/todos/1'),
     fetch('https://jsonplaceholder.typicode.com/todos/2'),
     ]);
     const jsonData1 = await data1.json();
     const jsonData2 = await data2.json();
     console.log(jsonData1, jsonData2);
    }
    example3();
//6
async function example4() {
    try {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const jsonData = await data.json();
    console.log(jsonData);
    } catch (error) {
    console.error(error);
    }
   }    

   example4();


//Lab 1
const BtnGetInfo = document.getElementById('BtnGetInfo');
const search = document.getElementById('film');
const previosResults = new Map();

let kino = [];
 
search.addEventListener('input', () => {
    let result = document.getElementById('film').value;
    let elementList = document.createElement("tbody") ;
    elementList.innerHTML = "";
    console.log(result);
 
 
 let final = [];
 
 for(let i = 0; i < kino.length; i++){
    if (kino[i].startsWith(result)){
        final.push(kino[i]); 
     }
 }
    });



BtnGetInfo.onclick = () => getResponse();

async function getResponse(){
    const film = document.getElementById('film').value;
    const yearRelese = document.getElementById('yearRelese').value;
    const key = 'f1aca6db';
    let endpoint;
    console.log("yearRelese: " + yearRelese);
    if(yearRelese.length >3){
        endpoint = "https://www.omdbapi.com/?t="+ film +"&y=" + yearRelese + "&apikey=f1aca6db";
    } else {
        endpoint = "https://www.omdbapi.com/?t="+ film + "&apikey=f1aca6db";
    }
    

    const response = await fetch (endpoint);
    const data = await response.json();
    console.log(data);

    console.log("status" + response.status);

    try {
        if(data.Response != "False"){
        previosResults.set(film ,data)
        console.log(previosResults);
        }
        if (response.status == 200) {
          console.log('Promise resolved and HTTP status is successful');
          // ...зробити щось з відповіддю



        } else {
         
          if (response.status === 404) throw new Error('404, Not found');
          if (response.status === 500) throw new Error('500, internal server error');
          //для будь якої помилки сервера
          throw new Error(response.status);
        }
      } catch (error) {
        console.error('Error: 404, Not found', error);
        // Output e.g.: "Fetch Error: 404, Not found"
      }

      displayResult(data);

}

displayResult = (data) =>{
    const title = data.Title;
    const yearRelease = data.Released;
    const rating = data.imdbRating;


const myImg = document.querySelector("img");
myImg.src = data.Poster;

    document.getElementById("async").innerHTML = `<ul> <li>Title: ${title}</li> 
    <li>Year Release: ${yearRelease}</li>  <li>Rating: ${rating}</li> </ul>`;

};

//Bonus: Allow users to filter the results by year of release
// title is required field for search
