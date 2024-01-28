let firstNumberInputText = document.getElementById('firstNumberInputText');
let add2NumButton = document.getElementById('add2NumButton');
let add2NumOutputText = document.getElementById('add2NumOutputText');



const add2Number = async (firstNumber) => {
    const response = await fetch("https://allforone2updates.azurewebsites.net/OddOrEven/IsItOddOrEven/" + firstNumber);
    let data = await response.text();
    console.log(data);
        return data;
};

add2NumButton.addEventListener('click', async () => {
    add2NumOutputText.textContent = await add2Number(firstNumberInputText.value);
});