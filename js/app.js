const API_KEY = `004b757dbb817ae605b2ead49f68ffcc`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));

}
const setInnertext = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setInnertext('city', temperature.name);
    setInnertext('temperature', temperature.main.temp);
    setInnertext('condition', temperature.weather[0].main)
    console.log(temperature);
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);


}