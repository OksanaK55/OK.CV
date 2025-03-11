const out = document.getElementById('out');
 
let namE = "John";
console.log(`Hello, ${namE}!`); // “Hello, John!”

let number1 = 2;
let number2 = 3;
console.log(`Sum: ${number1 + number2}`); // “Sum: 5”


let message = `Hello
world!`;
console.log(message); // “Hello\nworld!”

function toUpper(strings, ...values) {
    let result = "";
    for (let i = 0; i < values.length; i++) {
    result += strings[i] + values[i].toUpperCase();
    }
    result += strings[strings.length - 1];
    return result;
   }
   let name1 = "John";
   console.log(toUpper`Hello, ${name1}!`); // “Hello, JOHN!”

   //lab 1
   const button = document.getElementById('btn');
   const btnSave = document.getElementById('btn_save');
   const btnUserStories = document.getElementById('btn_userStories');

   const btnClick = document.getElementById('btnClick');
   const btnClick_2 = document.getElementById('btnClick_2');
   const btnClick_3 = document.getElementById('btnClick_3');
   const btnClick_4 = document.getElementById('btnClick_4');
   const btnClick_5 = document.getElementById('btnClick_5');
   const btnClick_6 = document.getElementById('btnClick_6');
   const btnClick_7 = document.getElementById('btnClick_7');
   const btnClick_8 = document.getElementById('btnClick_8');
   const inputFields = document.getElementsByClassName("form-control");
   const inputName = document.getElementsByClassName("label_name");

 


   const word1 = document.getElementById('word_1');

   const word2 = document.getElementById('word_2');

   const word3 = document.getElementById('word_3');

   const word4 = document.getElementById('word_4');

   let noun_1 = ["brandy", "fly", "jar", "day", "reference"];
   let nounMarker = 0;
  
   let verb_1 = ["pray", "admire", "long", "crush", "sip"];
   let verbMarker_1 = 0;


   let verb_2 = ["plant", "unify", "hurt", "abide", "return"];
   let verbMarker_2 = 0;

   let adjective_1 = ["hard", "fretful", "wiry", "learned", "many"];
   let adjectiveMarker_1 = 0;
   
   let adjective_2 = ["shrill", "misty", "happy", "dirty", "brainy"];
   let adjectiveMarker_2 = 0;
    
   let adjective_3 = ["wicked", "curious", "flat", "deep", "evil"];
   let adjectiveMarker_3 = 0;

   let adjective_4 = ["furtive", "fast", "decisive", "alcoholic", "uppity"];
   let adjectiveMarker_4 = 0;

   let adjective_5 = ["better", "sloppy", "attractive", "lean", "sparkling"];
   let adjectiveMarker_5 = 0;

   let variant = [];

   document.getElementById("btn").addEventListener('click', () => {

    let enterName = document.getElementById('word_1').value;

    let enterAge = document.getElementById('word_2').value;

    let enterWord_3 = document.getElementById('word_3').value;

    let enterWord_4 = document.getElementById('word_4').value;

    let enterWord_5 = document.getElementById('word_5').value;

    let enterWord_6 = document.getElementById('word_6').value;

    let enterWord_7 = document.getElementById('word_7').value;

    let enterWord_8 = document.getElementById('word_8').value;

    let enterWord_9 = document.getElementById('word_9').value;

    let enterWord_10 = document.getElementById('word_10').value;

    let enterWord_11 = document.getElementById('word_11').value;

    let enterWord_12 = document.getElementById('word_12').value;

    let enterWord_13 = document.getElementById('word_13').value;

    let enterWord_14 = document.getElementById('word_14').value;

    let enterWord_15 = document.getElementById('word_15').value;

    let enterWord_16 = document.getElementById('word_16').value;

    let enterWord_17 = document.getElementById('word_17').value;

    document.getElementById('out').classList.remove("hiden");


    out.innerHTML = `<h1>History</h1>
   <p> When ${enterName}
 was ${enterAge}
, her parents told her they were going on a trip to China. They told her to pack her ${enterWord_3}
. The plane ride was ${enterWord_4}
 hours long! She ${enterWord_5}
 and ${enterWord_6}
. When they got to China, she was very ${enterWord_7}
. On their trip, they visited ${enterWord_8}
, ${enterWord_9}
, and ${enterWord_10}
. They ate a lot of interesting things, including ${enterWord_11} 
 ${enterWord_12} 
, ${enterWord_13} 
 ${enterWord_14} 
, and ${enterWord_15} 
. Everyone had a/an ${enterWord_16} 
 time. When it was time to go home, she was very ${enterWord_17} 
. "!" she said. "Can't we stay longer?"</p>`

})


btnClick.addEventListener('click', () => {
 
document.getElementById('word_3').value = noun_1[nounMarker];

nounMarker = nounMarker + 1;

if (nounMarker === noun_1.length){
    nounMarker = 0;
}  


})
btnClick_2.addEventListener('click', () => {
    document.getElementById('word_5').value = verb_1[verbMarker_1];
    verbMarker_1 = verbMarker_1 + 1;
    
    if (verbMarker_1 === verb_1.length){
        verbMarker_1 = 0;
    } 
    })

btnClick_3.addEventListener('click', () => {
document.getElementById('word_6').value = verb_2[verbMarker_2];
verbMarker_2 = verbMarker_2 + 1;

if (verbMarker_2 === verb_2.length){
    verbMarker_2 = 0;
} 
})

btnClick_4.addEventListener('click', () => {
    document.getElementById('word_7').value = adjective_1[adjectiveMarker_1];
    adjectiveMarker_1 = adjectiveMarker_1 + 1;
    
    if (adjectiveMarker_1 === adjective_1.length){
        adjectiveMarker_1 = 0;
    } 
    })

btnClick_5.addEventListener('click', () => {
        document.getElementById('word_11').value = adjective_2[adjectiveMarker_2];
        adjectiveMarker_2 = adjectiveMarker_2 + 1;
        
        if (adjectiveMarker_2 === adjective_2.length){
            adjectiveMarker_2 = 0;
        } 
        })
        
btnClick_6.addEventListener('click', () => {
    document.getElementById('word_13').value = adjective_3[adjectiveMarker_3];
        adjectiveMarker_3 = adjectiveMarker_3 + 1;
            
        if (adjectiveMarker_3 === adjective_3.length){
                adjectiveMarker_3 = 0;
        } 
        })

btnClick_7.addEventListener('click', () => {
  document.getElementById('word_16').value = adjective_4[adjectiveMarker_4];
    adjectiveMarker_4 = adjectiveMarker_4 + 1;
                 
    if (adjectiveMarker_4 === adjective_4.length){
      adjectiveMarker_4 = 0;
     } 
    })
   
btnClick_8.addEventListener('click', () => {
        document.getElementById('word_17').value = adjective_5[adjectiveMarker_5];
          adjectiveMarker_5 = adjectiveMarker_5 + 1;
                       
          if (adjectiveMarker_5 === adjective_5.length){
            adjectiveMarker_5 = 0;
           } 
          }
        );

      //inputFields - прописаний тільки в 2 інпутах  
        for (const item of inputFields) {
            item.addEventListener("blur", (event) => {
                    validateForm(event);
            });
          }   

        const setError = (element, message) => {
          const errorSection = element.parentElement.querySelector(".error");
          errorSection.innerText = message;
          element.classList.add("invalid");
          element.classList.remove("valid");
        };
        
        const setValid = (element) => {
          const errorSection = element.parentElement.querySelector(".error");
          errorSection.innerText = "";
          element.classList.remove("invalid");
          element.classList.add("valid");
        }; 

const validateWord_1 = (word_1) =>{
            const regex = /[a-z]/; 
         if(word_1.value === "") {
          setError(word_1, "Name is required") 
         }
         else if (!regex.test(word_1.value)) {
          setError(word_1, "Name is incorrect");
        } else {
          setValid(word_1);
        }     
      };   
const validateWord_2 = (word_2) =>{
          //два в фігурних дужках значить, що на сторінці принно показувать тільки 2 цифри
            const regex = /^([0-9]{1,2})$/; 
         if(word_2.value === "") {
          setError(word_2, "Age is required") 
         }
         else if (!regex.test(word_2.value)) {
          setError(word_2, "Age is incorrect");
        } else {
          setValid(word_2);
        }     
      };

const validateWord_3 = (word_3) =>{
          const regex = /[a-z]/; 
       if(word_3.value === "") {
        setError(word_3, "Noun is required") 
       }
       else if (!regex.test(word_3.value)) {
        setError(word_3, "Noun is incorrect");
      } else {
        setValid(word_3);
      }     
    };    

const validateWord_4 = (word_4) =>{
        //два в фігурних дужках значить, що на сторінці принно показувать тільки 2 цифри
          const regex = /^([0-24]{1,2})$/; 
       if(word_4.value === "") {
        setError(word_4, "Hour is required") 
       }
       else if (!regex.test(word_4.value)) {
        setError(word_4, "Hour is incorrect");
      } else {
        setValid(word_4);
      }     
    };


const validateWord_5 = (word_5) =>{
      const regex = /[a-z]/; 
   if(word_5.value === "") {
    setError(word_5, "Verb is required") 
   }
   else if (!regex.test(word_5.value)) {
    setError(word_5, "Verb is incorrect");
  } else {
    setValid(word_5);
  }     
};    

const validateWord_6 = (word_6) =>{
  const regex = /[a-z]/; 
if(word_6.value === "") {
setError(word_6, "Verb is required") 
}
else if (!regex.test(word_6.value)) {
setError(word_6, "Verb is incorrect");
} else {
setValid(word_6);
}     
};    

const validateWord_7 = (word_7) =>{
  const regex = /[a-z]/; 
if(word_7.value === "") {
setError(word_7, "Adjective is required") 
}
else if (!regex.test(word_7.value)) {
setError(word_7, "Adjective is incorrect");
} else {
setValid(word_7);
}     
};  
const validateWord_8 = (word_8) =>{
  const regex = /[a-z]/; 
if(word_8.value === "") {
setError(word_8, "Place is required") 
}
else if (!regex.test(word_8.value)) {
setError(word_8, "Place is incorrect");
} else {
setValid(word_8);
}     
};

const validateWord_9 = (word_9) =>{
  const regex = /[a-z]/; 
if(word_9.value === "") {
setError(word_9, "Place is required") 
}
else if (!regex.test(word_9.value)) {
setError(word_9, "Place is incorrect");
} else {
setValid(word_9);
}     
};

const validateWord_10 = (word_10) =>{
  const regex = /[a-z]/; 
if(word_10.value === "") {
setError(word_10, "Place is required") 
}
else if (!regex.test(word_10.value)) {
setError(word_10, "Place is incorrect");
} else {
setValid(word_10);
}     
};

const validateWord_11 = (word_11) =>{
  const regex = /[a-z]/; 
if(word_11.value === "") {
setError(word_11, "Adjective is required") 
}
else if (!regex.test(word_11.value)) {
setError(word_11, "Adjective is incorrect");
} else {
setValid(word_11);
}     
};

const validateWord_12 = (word_12) =>{
  const regex = /[a-z]/; 
if(word_12.value === "") {
setError(word_12, "Food is required") 
}
else if (!regex.test(word_12.value)) {
setError(word_12, "Food is incorrect");
} else {
setValid(word_12);
}     
};

const validateWord_13 = (word_13) =>{
  const regex = /[a-z]/; 
if(word_13.value === "") {
setError(word_13, "Adjective is required") 
}
else if (!regex.test(word_13.value)) {
setError(word_13, "Adjective is incorrect");
} else {
setValid(word_13);
}     
};

const validateWord_14 = (word_14) =>{
  const regex = /[a-z]/; 
if(word_14.value === "") {
setError(word_14, "Food is required") 
}
else if (!regex.test(word_14.value)) {
setError(word_14, "Food is incorrect");
} else {
setValid(word_14);
}     
};

const validateWord_15 = (word_15) =>{
  const regex = /[a-z]/; 
if(word_15.value === "") {
setError(word_15, "Drink is required") 
}
else if (!regex.test(word_15.value)) {
setError(word_15, "Drink is incorrect");
} else {
setValid(word_15);
}     
};

const validateWord_16 = (word_16) =>{
  const regex = /[a-z]/; 
if(word_16.value === "") {
setError(word_16, "Adjective is required") 
}
else if (!regex.test(word_16.value)) {
setError(word_16, "Adjective is incorrect");
} else {
setValid(word_16);
}     
};

const validateWord_17 = (word_17) =>{
  const regex = /[a-z]/; 
if(word_17.value === "") {
setError(word_17, "Adjective is required") 
}
else if (!regex.test(word_17.value)) {
setError(word_17, "Adjective is incorrect");
} else {
setValid(word_17);
}     
};


          const validateForm = (event) => {
            //робим так шоб кожний інпут провірявся окремо, а не всі зразу світились червоним чи зеленим
            switch (event.target.id) {
              case "word_1":
                validateWord_1(event.target);
                break;
              case "word_2":
                validateWord_2(event.target);
                break;
              case "word_3":
                validateWord_3(event.target);
                break;
              case "word_4":
                validateWord_4(event.target);
                break;
                case "word_5":
                    validateWord_5(event.target);
                    break;
                    case "word_6":
                        validateWord_6(event.target);
                        break;
                        case "word_7":
                            validateWord_7(event.target);
                            break;
                            case "word_8":
                                validateWord_8(event.target);
                                break;
                                case "word_9":
                                    validateWord_9(event.target);
                                    break;
                                    case "word_10":
                                    validateWord_10(event.target);
                                    break;
                                    case "word_11":
                                    validateWord_11(event.target);
                                    break;
                                    case "word_12":
                                    validateWord_12(event.target);
                                    break;
                                    case "word_13":
                                    validateWord_13(event.target);
                                    break;
                                    case "word_14":
                                    validateWord_14(event.target);
                                    break;
                                    case "word_15":
                                    validateWord_15(event.target);
                                    break;
                                    case "word_16":
                                    validateWord_16(event.target);
                                    break;
                                    case "word_17":
                                    validateWord_17(event.target);
                                    break;


              default:
                alert("Validation error!");
            }
          };

btnSave.addEventListener('click', () =>{

let text = document.getElementById('out').innerText;
variant.push(text);
//console.log(variant);
});

btnUserStories.addEventListener('click', () => {
  const elements = document.getElementsByClassName("my-new-div");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    };
  
  variant.forEach((item) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("my-new-div");
    let parentDiv = document.getElementById('history');
    let textNode =  document.createTextNode(item);
  
    newDiv.appendChild(textNode);
    parentDiv.appendChild(newDiv);

  
  
  });




})
