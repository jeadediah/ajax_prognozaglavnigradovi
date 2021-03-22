
var button = document.querySelector("#btn");
var input = document.querySelector("#town");
var divdisplay = document.getElementsByClassName("display")[0];

button.addEventListener("click", function () {
    var town = input.value;
    var xml = new XMLHttpRequest();
    xml.open("get", "http://api.openweathermap.org/data/2.5/weather?q=" + town + "&units=metric&appid=6f1bca65926ee94842c24a35ba5d05e7");
    xml.send();
    xml.addEventListener("readystatechange", function () {
        if (xml.readyState === 4 && xml.status === 200)
            display();
    });
    function display() {
        var data = JSON.parse(xml.responseText);
        //console.log(data);
        var text = `<p> grad : ${data.name} </p>
<p> temperatura : ${data.main.temp}C </p>
<p> osećaj : ${data.main.feels_like}C </p>
 <p> vlažnost : ${data.main.humidity}% </p>
   <p> max temp. : ${data.main.temp_max}C </p>
        <p> min temp. : ${data.main.temp_min}C </p>
`;
        divdisplay.innerHTML = text;
    }
});





