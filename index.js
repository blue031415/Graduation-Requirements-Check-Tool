const readfile = document.getElementById("abc");

addEventListener("load",function(){
    console.log("Hello world");
});

async function DisplayConsole(){
    console.log("foo");
    const res = await fetch("https://blue031415.github.io/Graduation-Requirements-Check-Tool/grad.json");
    const users = await res.json();
    console.log(users);
}

readfile.addEventListener("click", DisplayConsole());

document.addEventListener('DOMContentLoaded', function() {
    var fileInput = document.getElementById('fileInput');
    var convertButton = document.getElementById('convertButton');
    var outputDiv = document.getElementById('output');

    fileInput.addEventListener('change', handleFileSelect);
    convertButton.addEventListener('click', convertToJSON);

    function handleFileSelect(event) {
        var file = event.target.files[0];
        var reader = new FileReader();

        reader.onload = function(event) {
            var csvData = event.target.result;
            outputDiv.innerText = csvData;
        };

        reader.readAsText(file);
    }

    function convertToJSON() {
        var csvData = outputDiv.innerText;
        var lines = csvData.split('\n');
        var result = [];

        var headers = lines[0].split(',');
        for (var i = 1; i < lines.length; i++) {
            var obj = {};
            var currentLine = lines[i].split(',');

            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentLine[j];
            }

            result.push(obj);
        }

        outputDiv.innerText = JSON.stringify(result, null, 2);
    }
});