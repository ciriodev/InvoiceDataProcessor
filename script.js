const input = document.getElementById('fileInput');
const text = document.getElementById('text');

input.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (!file){
        return;
    }
    const reader = new FileReader();
    reader.onload = function (e) {
        let suma = 0;

        let lectura = e.target.result.split("\n");
        for (let i = 0; i < lectura.length; i++) {
            let lect = lectura[i].split(": ");
            suma = suma + Number(lect[1]);
        }
        text.innerText = "IVA = " + (suma * 0.21).toFixed(2) + "€ \n Total = " + (suma * 1.21).toFixed(2) + "€";

    }
    reader.readAsText(file);
});