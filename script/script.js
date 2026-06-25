const commencer = document.getElementById("commencer");
const quiz = document.getElementById("quiz");
const resultat = document.getElementById("resultat");
const boutonValider = document.querySelector(".btn-resultat");
const nomInput = document.getElementById("nom");
const prenomInput = document.getElementById("prenom");
const ageInput = document.getElementById("age");

let nom = "";
let prenom = "";

const corrections = {
    q1: "La bonne réponse est 5,18 m.",
    q2: "La bonne réponse est le tamis.",
    q3: "La bonne réponse est sous la ceinture.",
    q4: "La bonne réponse est 'Bon'.",
    q5: "La bonne réponse est 2 sets.",
    q6: "La bonne réponse est la Chine.",
    q7: "La bonne réponse est le smash.",
    q8: "La bonne réponse est 1992.",
    q9: "La bonne réponse est 400 km/h.",
    q10: "La bonne réponse est Plumes et Nylon."
};

function cacherCorrections() {
    document.querySelectorAll(".correction").forEach(function (bloc) {
        bloc.innerHTML = "";
    });
}

commencer.addEventListener("click", function () {
    nom = nomInput.value.trim();
    prenom = prenomInput.value.trim();
    let age = ageInput.value.trim();

    if (nom === "" || prenom === "" || age === "") {
        quiz.style.display = "none";
        alert("Veuillez remplir tous les champs.");
        return;
    }

    cacherCorrections();
    resultat.innerHTML = "";
    resultat.className = "";
    quiz.style.display = "block";
});

boutonValider.addEventListener("click", function () {
    let score = 0;
    cacherCorrections();

    for (let i = 1; i <= 9; i++) {
        let question = document.querySelector(`.question:nth-of-type(${i})`);
        let reponse = question.querySelector(`input[name="q${i}"]:checked`);
        let blocCorrection = question.querySelector(".correction");

        if (reponse && reponse.value === "1") {
            score++;
        } else {
            blocCorrection.innerHTML =
                "<strong>Réponse incorrecte.</strong> " + corrections[`q${i}`];
        }
    }

    let question10 = document.querySelector(".question:nth-of-type(10)");
    let cases = question10.querySelectorAll(".q10");
    let blocCorrection10 = question10.querySelector(".correction");

    let reponsesAttendues = ["plume", "nylon"];
    let reponsesSelectionnees = Array.from(cases)
        .filter(function (caseInput) {
            return caseInput.checked;
        })
        .map(function (caseInput) {
            return caseInput.value;
        });

    if (
        reponsesSelectionnees.length === 2 &&
        reponsesSelectionnees.every(function (val) {
            return reponsesAttendues.includes(val);
        }) &&
        reponsesAttendues.every(function (val) {
            return reponsesSelectionnees.includes(val);
        })
    ) {
        score++;
    } else {
        blocCorrection10.innerHTML =
            "<strong>Réponse incorrecte.</strong> " + corrections.q10;
    }

    if (score >= 8) {
        resultat.innerHTML =
            score + "/10 Félicitations, tu as une connaissance très détaillée et approfondie du badminton";

        resultat.className = "reussi";
    } else {
        resultat.innerHTML =
            "Dommage " +
            prenom +
            ", vous avez obtenu " +
            score +
            "/10. Réessayez !";

        resultat.className = "echec";
    }
});