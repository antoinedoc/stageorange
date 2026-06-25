function corriger() {
    let score = 0;
    const totalQuestions = 10;
    const corrections = document.getElementById("corrections");
    const reponsesCorrectes = [
        "B",
        "A",
        "D",
        "B",
        "A",
        "B",
        "C",
        "A",
        "A",
        "B"
    ];

    let contenuCorrection = "<h3>Correction</h3>";

    for (let i = 1; i <= totalQuestions; i++) {
        const reponse = document.querySelector(`input[name="q${i}"]:checked`);

        if (!reponse) {
            const resultat = document.getElementById("resultat");
            resultat.textContent = "Veuillez répondre à toutes les questions.";
            resultat.className = "echec";
            corrections.style.display = "none";
            return;
        }

        const lettreChoisie = reponse.parentElement.textContent.trim().charAt(0);
        const lettreCorrecte = reponsesCorrectes[i - 1];
        const estCorrect = lettreChoisie === lettreCorrecte;

        if (estCorrect) {
            score++;
        }

        contenuCorrection += `<p><strong>Q${i}</strong> : votre réponse : ${lettreChoisie} - réponse correcte : ${lettreCorrecte}</p>`;
    }

    corrections.innerHTML = contenuCorrection;
    corrections.style.display = "block";

    const resultat = document.getElementById("resultat");
    resultat.textContent = "Votre score est : " + score + " / " + totalQuestions;

    if (score >= 8) {
        resultat.className = "reussi";
    } else {
        resultat.className = "echec";
    }
}