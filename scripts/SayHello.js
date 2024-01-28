let inputSayHello = document.getElementById('inputSayHello');
let outputButton = document.getElementById('outputButton');
let textOutput = document.getElementById('textOutput');

let buttonClick = false;

const sayHelloApi = async (yourName) => {

        const response = await fetch("https://allforone2updates.azurewebsites.net/SayHelloEndPoint/SayHelloApi/" + yourName);
        const data = await response.text();
        // console.log(data);
        return data;
  
};

outputButton.addEventListener('click', async () => {
    if (inputSayHello.value.trim() === '') {
        textOutput.textContent = "please enter a name and try again";
        return;
    }
    textOutput.textContent = await sayHelloApi(inputSayHello.value);
});

inputSayHello.addEventListener('keydown', async (event) => {
    if (event.key === "Enter") {
        if (inputSayHello.value.trim() !== '') {
            textOutput.textContent = await sayHelloApi(event.target.value);
        } else {
            textOutput.textContent = "please enter a name and try again";
        }
    }
});

