let add1NumButton = document.getElementById('add1NumButton');
let add2NumButton = document.getElementById('add2NumButton');
let add3NumButton = document.getElementById('add3NumButton');
let add2NumOutputText = document.getElementById('add2NumOutputText');




const add2Number = async (firstNumber) => {
    const response = await fetch("https://allforone2updates.azurewebsites.net/RestaurantPicker/Enter restaurant number: 1-Fast food; 2-Asian Restaurants; 3-Latin American Restaurants/" + firstNumber);
    let data = await response.text();
    console.log(data);
    return data;
};

add1NumButton.addEventListener('click', async () => {
    add2NumOutputText.textContent = await add2Number(1);
});
add2NumButton.addEventListener('click', async () => {
    add2NumOutputText.textContent = await add2Number(2);
});
add3NumButton.addEventListener('click', async () => {
    add2NumOutputText.textContent = await add2Number(3);
});