let firstNumberInputText = document.getElementById('firstNumberInputText');
let secondNumberInputText = document.getElementById('secondNumberInputText');
let add2NumButton = document.getElementById('add2NumButton');
let add2NumOutputText = document.getElementById('add2NumOutputText');

let add2ButtonClick = false;

const add2Number = async (firstNumber, secondNumber) => {
    const response = await fetch("https://allforone2updates.azurewebsites.net/Add2Numbers/Add2Numbers/" + firstNumber + "/" + secondNumber);
    let  data = await response.text();
    if (data.includes(`The sum of ${firstNumber} and ${secondNumber} is = `)) {
        return data;
    } else {
        data = `invalid inputs: ${firstNumber} / ${secondNumber}`;
        return data;
    }
  
};

add2NumButton.addEventListener('click', async () => {
    add2NumOutputText.textContent = await add2Number(firstNumberInputText.value, secondNumberInputText.value);
});

// inputSayHello.addEventListener('keydown', async (event) => {
//     if (event.key === "Enter") {

//         textOutput.textContent = await sayHelloApi(event.target.value);

//     };
// });

