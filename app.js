// function submit() {
//     const inputArea = document.getElementById('inputArea').value;
//     const displayInput = inputArea;
//     console.log(displayInput)
// }

document.getElementById('submit').addEventListener('click', function() {
    const inputArea = document.getElementById('inputArea');
    const displayInput = inputArea.value;
    // console.log(displayInput);

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + displayInput + '&appid=9f0cd11da9451657674fa5451e2b7505')
        .then(response => response.json())
        .then(data => {
            const cityName = data.name;
            const temperature = data.main.temp;
            const tempResult = temperature - 273.15;
            const weatherUpdate = data.weather[0].description;
            const iconUpdate = data.weather[0].icon;


            document.getElementById('icon').innerText = iconUpdate;
            document.getElementById('city').innerText = cityName;
            document.getElementById('temp').innerText = tempResult.toFixed(2);
            document.getElementById('desc').innerText = weatherUpdate;
            // console.log(data)
        })



})