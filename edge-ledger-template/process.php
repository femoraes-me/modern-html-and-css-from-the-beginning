<?php
  if (isset($_POST['email']))  {
  
    //Informações do email
    $admin_email = "contato@edgeledger.net"; //email do administrador
    $name = $_POST['name']; //informações do formulário
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    
    //função para envio do email
    mail($admin_email, "New Form Submission", $message . ' - ' . $phone, "From:" . $email);
    
    //mensagem de sucesso do contato
    header('Location: http://edgeledger.net/success.html');
  }