// OBSOLETE


let verificationPseudo = document.querySelector("#user_pseudo");


verificationPseudo.addEventListener("blur", function (e) {

    // Lancer la requete vers le serveur
    fetch("./controle_user.php?pseudo=" + this.value)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            // On va évaluer le résultat( 0 ou 1 )

            if (response[0] >= 1) {
                // L'utilisateur existe déja
                document.querySelector("#alerte").innerHTML = "cet pseudo existe déja";
                // this.value = "";
                // verificationPseudo.focus();
            }
        })
});
