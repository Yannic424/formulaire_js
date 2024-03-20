<?php

// var_dump($_REQUEST);

try {
    // parametre de la bdd
    $host = "localhost";
    $dbname = "commerce";
    $user = "root";
    $pwd = "";
    $requete = "INSERT INTO user(`user_pseudo`, `user_pwd`, `user_mail`) values (:user_pseudo, :user_pwd, :user_mail)";


    // conexxion a la bdd en utilisant PDO
    $connect = new PDO("mysql:host=$host;dbname=$dbname", $user, $pwd);

    // recuperer les champs du formulaire, et faire un insert into 
    $resultat = $connect->prepare($requete);
    $resultat->execute([
        'user_pseudo' => $_REQUEST['user_pseudo'],
        'user_pwd' => password_hash($_REQUEST['user_pwd1'], PASSWORD_DEFAULT),
        'user_mail' => $_REQUEST['user_mail']
    ]);


    var_dump($resultat);

} catch (PDOException $e) {
    echo "il y a une erreur " . $e->getmessage();
    die;
}

require_once './formulaire2.html';