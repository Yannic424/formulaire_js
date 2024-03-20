<?php

// var_dump($_GET);
// var_dump($_REQUEST);


// PSEUDO
try {
    // parametre de la bdd
    $host = "localhost";
    $dbname = "commerce";
    $user = "root";
    $pwd = "";

    // conexxion a la bdd en utilisant PDO
    $connect = new PDO("mysql:host=$host;dbname=$dbname", $user, $pwd);

    // faire et préparer notre requete sql
    $query = "SELECT count(*) as nb from user where user_pseudo ='" . $_GET['user_pseudo'] . "'";
    $result = $connect->prepare($query);
    $result->execute();

    $data = $result->fetchAll(PDO::FETCH_ASSOC);
    echo (json_encode($data));

} catch (PDOException $e) {
    echo "Erreur" . $e->getmessage();
    die;
}




