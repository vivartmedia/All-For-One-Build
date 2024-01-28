let inputSayHello = document.getElementById('inputSayHello');
let outputButton = document.getElementById('outputButton');
let textOutput = document.getElementById('textOutput');


const sayHelloApi = async () => {

    const response = await fetch("https://allforone2updates.azurewebsites.net/Magic8Ball/Ask your question and press execute");
    const data = await response.text();
    // console.log(data);
    return data;

};

outputButton.addEventListener('click', async () => {
    if (inputSayHello.value.trim() === '') {
        textOutput.textContent = "please ask your question first and try again";
        return;
    }
    textOutput.textContent = await sayHelloApi(inputSayHello.value);
});

inputSayHello.addEventListener('keydown', async (event) => {
    if (event.key === "Enter") {
        if (inputSayHello.value.trim() !== '') {
            textOutput.textContent = await sayHelloApi();
        } else {
            textOutput.textContent = "please ask your question first and try again"
        }
    }
});
