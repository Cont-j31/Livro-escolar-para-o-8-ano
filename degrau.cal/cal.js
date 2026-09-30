
const btn = document.getElementById("botaoc");

const medias = [
    document.getElementById("RP"),
    document.getElementById("RM"),
    document.getElementById("RH"),
    document.getElementById("RG"),
    document.getElementById("RC"),
    document.getElementById("RA"),
    document.getElementById("RI"),
    document.getElementById("RT"),
    document.getElementById("RF"),
    document.getElementById("RE")
];

btn.addEventListener("click", function(botao){

        const Boletim =[
 [ document.getElementById("1p").value, document.getElementById("2p").value, document.getElementById("3p").value ],
 [ document.getElementById("1m").value, document.getElementById("2m").value, document.getElementById("3m").value ],
 [ document.getElementById("1h").value, document.getElementById("2h").value, document.getElementById("3h").value ],
 [ document.getElementById("1g").value, document.getElementById("2g").value, document.getElementById("3g").value ],
 [ document.getElementById("1c").value, document.getElementById("2c").value, document.getElementById("3c").value ],
 [ document.getElementById("1a").value, document.getElementById("2a").value, document.getElementById("3a").value ],
 [ document.getElementById("1i").value, document.getElementById("2i").value, document.getElementById("3i").value ],
 [ document.getElementById("1t").value, document.getElementById("2t").value, document.getElementById("3t").value ],
 [ document.getElementById("1f").value, document.getElementById("2f").value, document.getElementById("3f").value ],
 [ document.getElementById("1e").value, document.getElementById("2e").value, document.getElementById("3e").value ]
];


Boletim.forEach(function(materia, indice) {

const n1 = Number(materia[0]);
const n2 = Number(materia[1]);
const n3 = Number(materia[2]);

let res = n1 + n2 + n3;

const cal = 24 - res;

 medias[indice].value = cal;


   if (materia[0] === "" || materia[1] === "" || materia[2] === "") {
    medias[indice].value = "";
} else {
    const n1 = Number(materia[0]);
    const n2 = Number(materia[1]);
    const n3 = Number(materia[2]);

    const res = n1 + n2 + n3;
    const cal = 24 - res;

    medias[indice].value = cal;
}



});
});