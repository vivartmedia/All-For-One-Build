let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let input3 = document.getElementById('input3');
let input4 = document.getElementById('input4');
let input5 = document.getElementById('input5');
let input6 = document.getElementById('input6');
let input7 = document.getElementById('input7');
let input8 = document.getElementById('input8');
let input9 = document.getElementById('input9');
let input10 = document.getElementById('input10');
let add2NumButton = document.getElementById('add2NumButton');
let add2NumOutputText = document.getElementById('add2NumOutputText');

const add2Number = async (inputMad1, inputMad2, inputMad3, inputMad4, inputMad5, inputMad6, inputMad7, inputMad8, inputMad9, inputMad10) => {
    const response = await fetch("https://allforone2updates.azurewebsites.net/MadLib/Madlib/" + inputMad1 + "/" + inputMad2 + "/" + inputMad3 + "/" + inputMad4 + "/" + inputMad5 + "/" + inputMad6 + "/" + inputMad7 + "/" + inputMad8 + "/" + inputMad9 + "/" + inputMad10);
    let data = await response.text();
    if (data.includes(`One ${inputMad1} day, a ${inputMad2} decided to go on a ${inputMad3}  journey.`)) {
        return data;
    } else {
        data = "invalid inputs; the fields has to filled";
        return data;
    }

};

add2NumButton.addEventListener('click', async () => {
    add2NumOutputText.textContent = await add2Number(input1.value, input2.value, input3.value, input4.value, input5.value, input6.value, input7.value, input8.value, input9.value, input10.value);
});