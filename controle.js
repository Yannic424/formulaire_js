// // controle de l'email et du mot de passe

// let user_mail = document.querySelector("#user_mail");
// user_mail.focus();
// // ajouter l'écoute de l'evenement
// user_mail.addEventListener("blur", function (e) {
//     fetch("json_testuser.php?user_mail=" + this.value)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (resultat) {
//             console.log(resultat);
//             if (resultat[0].nb == 1) {
//                 // email existe dans la bdd
//                 document.querySelector("#alerte").innerHTML = "cet email existe déja";
//                 // remettre le focus sur le champ email
//                 user_mail.focus();
//             } else {
//                 document.querySelector("#alerte").innerHTML = "";
//             }
//         });
// });


// // controler nos mot de passe
// // le controle se fera sur le click du bouton submit
// let btn_submit = document.querySelector("#valider");
// // ajouter l'écoute de l'évenement
// btn_submit.addEventListener("click", function (e) {
//     // e.preventDefault()
//     // controler que les deux mots de passe sont identiques
//     pwd1 = document.querySelector("#pwd1")
//     pwd2 = document.querySelector("#pwd2")
//     if (pwd1.value === pwd2.value) {
//         console.log("identiques")
//         // valider le formulaire
//         document.querySelector("#formulaire").submit()

//     } else {
//         console.log("non identiques")
//         // afficher un texte d'erreur
//         document.querySelector("#alerte2").innerHTML = "les deux mots de passe sont différents"
//     }
// });

let mail = document.querySelector("#user_mail");
let nom = document.querySelector("#user_pseudo");
// let prenom = document.querySelector("#user_prenom");
let pwd1 = document.querySelector("#pwd1");
let pwd2 = document.querySelector("#pwd2");

let erreurMail = document.querySelector("#alerteMail");
let erreurNom = document.querySelector("#alerteNom");
// let erreurPrenom = document.querySelector("#alertePrenom");
let erreurPwd1 = document.querySelector("#alertePwd1");
let erreurPwd2 = document.querySelector("#alertePwd2");

let colorSquareMail = document.querySelector("#color-square-mail");
let colorSquarePseudo = document.querySelector("#color-square-pseudo");
// let colorSquarePrenom = document.querySelector("#color-square-prenom");
let colorSquarePwd1 = document.querySelector("#color-square-pwd1");
let colorSquarePwd2 = document.querySelector("#color-square-pwd2");





const formulaire = document.querySelector("#formulaire");
formulaire.addEventListener("submit", function (event) {

    // Boucle foreach pour afficher un message commun à tous les champs
    // let inputs = document.querySelectorAll(".input");
    // inputs.forEach(function (input) {
    //     if (!input.value) {
    //         event.preventDefault();
    //         erreur.innerHTML = "Tous les champs sont obligatoires";
    //     }
    // });



    // CHAMP NOM
    if (!nom.value) {
        colorSquarePseudo.style.backgroundColor = "red";
        nom.placeholder = "";
        nom.classList.add("wobble");
        erreurNom.classList.add("toast");
        erreurNom.innerHTML = "Veuillez renseigner un pseudo";
        event.preventDefault();
        nom.addEventListener("focus", function () {
            colorSquarePseudo.style.backgroundColor = "#ccc";
            nom.placeholder = "John";
            nom.classList.remove("wobble");
            erreurNom.classList.remove("toast");
            erreurNom.innerHTML = "";
        });
    }
    // CHAMP EMAIL 
    else if (!mail.value) {
        colorSquareMail.style.backgroundColor = "red";
        mail.placeholder = "";
        mail.classList.add("wobble");
        erreurMail.classList.add("toast");
        erreurMail.innerHTML = "Veuillez renseigner un mail";
        event.preventDefault();
        mail.addEventListener("focus", function () {
            colorSquareMail.style.backgroundColor = "#ccc";
            mail.placeholder = "john.doe@email.com";
            mail.classList.remove("wobble");
            erreurMail.classList.remove("toast");
            erreurMail.innerHTML = "";
        });
    }


    // CHAMP MOT DE PASSE 1
    else if (!pwd1.value) {
        colorSquarePwd1.style.backgroundColor = "red";
        pwd1.placeholder = "";
        pwd1.classList.add("wobble");
        erreurPwd1.classList.add("toast");
        erreurPwd1.innerHTML = "Veuillez renseigner un mot de passe";
        event.preventDefault();
        pwd1.addEventListener("focus", function () {
            colorSquarePwd1.style.backgroundColor = "#ccc";
            pwd1.placeholder = "Votre mot de passe";
            pwd1.classList.remove("wobble");
            erreurPwd1.classList.remove("toast");
            erreurPwd1.innerHTML = "";
        });
    }

    // CHAMP MOT DE PASSE 2
    else if (!pwd2.value) {
        colorSquarePwd2.style.backgroundColor = "red";
        pwd2.placeholder = "";
        pwd2.classList.add("wobble");
        erreurPwd2.classList.add("toast");
        erreurPwd2.innerHTML = "Veuillez renseigner une nouvelle fois votre mot de passe";
        event.preventDefault();
        pwd2.addEventListener("focus", function () {
            colorSquarePwd2.style.backgroundColor = "#ccc";
            pwd2.placeholder = "confirmer le mot de passe";
            pwd2.classList.remove("wobble");
            erreurPwd2.classList.remove("toast");
            erreurPwd2.innerHTML = "";
        });
    }

    // CONTROLER QUE LES MOTS DE PASSE SONT IDENTIQUES
    else if (pwd1.value && pwd2.value && pwd1.value !== pwd2.value) {
        erreurPwd2.innerHTML = "Les deux mots de passe ne sont pas identiques";
        event.preventDefault();
    }

    // CONTROLER LES REGEX DES MOTS DE PASSE
    else if (pwd1.value && pwd2.value && pwd1.value == pwd2.value) {
        erreurPwd1.innerHTML = "";
        erreurPwd2.innerHTML = "";
        if (!isValidPassword(pwd1.value)) {
            erreurPwd1.innerHTML = "Le mot de passe doit contenir un caractère spécial";
            event.preventDefault();
        } else if (!isValidPassword(pwd2.value)) {
            colorSquare.style.backgroundColor = "red";
            erreurPwd2.innerHTML = "Le mot de passe doit contenir un caractère spécial";
            event.preventDefault();
        }
    }


});



///////////////////////////////////////MES//EVENEMENTS//////////////////////////////////////////////


/////////////////////////////
// CONTROLER QUE LES PSEUDO SONT IDENTIQUES
let verificationPseudo = document.querySelector("#user_pseudo");
verificationPseudo.addEventListener("blur", function () {
    console.log(verificationPseudo.value);

    // Lancer la requete vers le serveur
    fetch("controle_user.php?user_pseudo=" + verificationPseudo.value)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            // On va évaluer le résultat( 0 ou 1 )
            if (response[0].nb == 1) {
                console.log(response[0].nb);
                // L'utilisateur existe déjà
                erreurNom.classList.add("toast");
                erreurNom.innerHTML = "Ce pseudo existe déjà";
                colorSquarePseudo.style.backgroundColor = "tomato";
                this.value = "";
                if (verificationPseudo.addEventListener('focus', function () {
                    erreurNom.classList.remove("toast");
                    erreurNom.innerHTML = "";
                    colorSquarePseudo.style.backgroundColor = "#0d0e14";
                }));
            }
        })
});
//////////////////////////////////////////////////////////



/////////////////////////////
let verificationMail = document.querySelector("#user_mail");
verificationMail.addEventListener("blur", function () {
    // Votre code de vérification similaire à celui du pseudo
    console.log(verificationMail.value);

    fetch("controle_mail.php?user_mail=" + verificationMail.value)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            if (response[0].nb == 1) {
                console.log(response[0].nb);
                // L'utilisateur existe déjà
                erreurMail.classList.add("toast");
                erreurMail.innerHTML = "Cet email existe déjà";
                colorSquareMail.style.backgroundColor = "tomato";
                this.value = "";
                if (verificationMail.addEventListener('focus', function () {
                    erreurMail.classList.remove("toast");
                    erreurMail.innerHTML = "";
                    colorSquareMail.style.backgroundColor = "#0d0e14";
                }));
            }
        });
});
//////////////////////////////////////////////////////////



/////////////////////////////
// CHANGER LE TYPE ET L'ICONE DU MDP
let toggleBtn1 = document.querySelector("#togglePwd1");
let toggleBtn2 = document.querySelector("#togglePwd2");
let eyeIcon1 = document.querySelector("#eye-icon1");
let eyeIcon2 = document.querySelector("#eye-icon2");

toggleBtn1.addEventListener("click", function (event) {
    event.preventDefault();
    if (pwd1.type == "password") {
        pwd1.type = "text";
        eyeIcon1.src = "./visibility_FILL0_wght400_GRAD0_opsz24.svg"
    } else if (pwd1.type == "text") {
        pwd1.type = "password";
        eyeIcon1.src = "./visibility_off_FILL0_wght400_GRAD0_opsz24.svg"
    }
});

toggleBtn2.addEventListener("click", function (event) {
    if (pwd2.type == "password") {
        pwd2.type = "text";
        eyeIcon2.src = "./visibility_FILL0_wght400_GRAD0_opsz24.svg"
    } else if (pwd2.type == "text") {
        pwd2.type = "password";
        eyeIcon2.src = "./visibility_off_FILL0_wght400_GRAD0_opsz24.svg"
    }
});
//////////////////////////////////////////////////////////



/////////////////////////////
// Fonction pour ajouter la validation du mot de passe selon le regex
function addValidationListener(inputElement, colorSquareElement, isPassword = false) {
    inputElement.addEventListener("blur", function () {
        // Vérification pour les champs de mot de passe
        if (isPassword) {
            if (this.value && isValidPassword(this.value)) {
                colorSquareElement.style.backgroundColor = "yellowgreen";
                colorSquareElement.classList.add("led");
            } else if (this.value && !isValidPassword(this.value)) {
                colorSquareElement.style.backgroundColor = "tomato";
                colorSquareElement.classList.add("led");

            } else {
                colorSquareElement.style.backgroundColor = "#0d0e14";
                colorSquareElement.classList.remove("led");

            }
        } else {
            // Traitement pour les autres champs
            if (this.value) {
                colorSquareElement.style.backgroundColor = "yellowgreen";
                colorSquareElement.classList.add("led");

            } else if (!this.value) {
                colorSquareElement.style.backgroundColor = "tomato";
                colorSquareElement.classList.add("led");

            }
            else {
                colorSquareElement.style.backgroundColor = "#0d0e14";
                colorSquareElement.classList.remove("led");

            }
        }
    });
}
addValidationListener(mail, colorSquareMail);
addValidationListener(nom, colorSquarePseudo);
addValidationListener(pwd1, colorSquarePwd1, true);
addValidationListener(pwd2, colorSquarePwd2, true);
//////////////////////////////////////////////////////////


/////////////////////////////
// CONTROLE REGEX DES MOTS DE PASSE
function isValidPassword(password) {
    // Cette regex vérifie :
    // ^                 : début de la chaîne
    // (?=.*[a-z])       : au moins une lettre minuscule
    // (?=.*[A-Z])       : au moins une lettre majuscule
    // (?=.*\d)          : au moins un chiffre
    // (?=.*[!@#$%^&*])  : au moins un caractère spécial (ajustez cette liste selon vos besoins)
    // .{8,}             : au moins 8 caractères au total
    // $                 : fin de la chaîne
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*+]).{8,}$/;

    return regex.test(password);
}
//////////////////////////////////////////////////////////


