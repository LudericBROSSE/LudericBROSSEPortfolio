<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer et valider les données du formulaire
    $nom = isset($_POST["nom"]) ? htmlspecialchars($_POST["nom"]) : "";
    $email = isset($_POST["email"]) ? htmlspecialchars($_POST["email"]) : "";
    $telephone = isset($_POST["telephone"]) ? htmlspecialchars($_POST["telephone"]) : "";
    $sujet = isset($_POST["sujet"]) ? htmlspecialchars($_POST["sujet"]) : "";
    $message = isset($_POST["message"]) ? htmlspecialchars($_POST["message"]) : "";

    // Vérifier si les champs obligatoires sont remplis
    if (empty($nom) || empty($email) || empty($message)) {
        echo "<h2>Erreur lors de l'envoi :</h2>";
        echo "<p>Tous les champs obligatoires doivent être remplis.</p>";
        exit; // Arrêter l'exécution du script
    }

    // Valider l'adresse e-mail
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<h2>Erreur lors de l'envoi :</h2>";
        echo "<p>L'adresse e-mail n'est pas valide.</p>";
        exit;
    }

    // Adresse e-mail où vous souhaitez recevoir le message
    $destinataire = "proludericbrosse@gmail.com";

    // Sujet du message
    $sujetMail = "Nouveau message depuis le formulaire de contact";

    // Corps du message
    $corpsMessage = "Nom: $nom\n";
    $corpsMessage .= "Email: $email\n";
    $corpsMessage .= "Téléphone: $telephone\n";
    $corpsMessage .= "Sujet: $sujet\n";
    $corpsMessage .= "Message:\n$message";

    // En-têtes additionnelles
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Envoyer l'e-mail
    $envoiMail = mail($destinataire, $sujetMail, $corpsMessage, $headers);

    if ($envoiMail) {
        echo "<h2>Informations reçues :</h2>";
        echo "<p>Merci pour votre message. Nous vous répondrons dès que possible.</p>";
    } else {
        echo "<h2>Erreur lors de l'envoi :</h2>";
        echo "<p>Quelque chose s'est mal passé. Veuillez réessayer plus tard.</p>";
    }
}
?>
