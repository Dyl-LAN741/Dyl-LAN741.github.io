---
layout: page
title: Contact
permalink: /contact/
nav: true
nav_order: 4
---
<p><i class="fa-solid fa-envelope fa-lg"></i> Email : <a href="mailto:dylan.haral@gmail.com">dylan.haral@gmail.com</a></p>
<p><i class="fa-solid fa-square-phone fa-lg"></i> Téléphone : <a href="tel:+33652487554">(+33)&nbsp;6&nbsp;52&nbsp;48&nbsp;75&nbsp;54</a></p>

<br>

<hr>

<br>

<div style="max-width: 600px; margin: 0 auto;">
<h3 class="title">Formulaire de contact</h3>
<br>
<form id="contact-form" novalidate action="https://formspree.io/f/xwpbpano" method="POST">
  <!-- Nom -->
  <label for="nom" style="font-family: 'Montserrat', sans-serif; font-weight: bold;">Nom :</label><br>
  <input type="text" id="nom" name="nom" placeholder="Nom"
    style="
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 8px;
      width: 100%;
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      color: #000;
    "><br><br>
  
  <!-- Prénom -->
  <label for="prenom" style="font-family: 'Montserrat', sans-serif; font-weight: bold;">Prénom :</label><br>
  <input type="text" id="prenom" name="prenom" placeholder="Prénom"
    style="
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 8px;
      width: 100%;
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      color: #000;
    "><br><br>

  <!-- Email -->
  <label for="email" style="font-family: 'Montserrat', sans-serif; font-weight: bold;">Email :</label><br>
  <input type="email" id="email" name="email" placeholder="Email*" required
    style="
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 8px;
      width: 100%;
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      color: #000;
    ">
  <span class="error-message">Ce champ est requis</span>
  <br><br>
  

  <!-- Message -->
  <label for="message" style="font-family: 'Montserrat', sans-serif; font-weight: bold;">Message :</label><br>
  <textarea id="message" name="message" rows="10" placeholder="Message*" required
    style="
      width: 100%;
      max-width: 100%;
      min-height: 200px;
      resize: none;
      overflow: auto;
      border-radius: 8px;
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      padding: 10px;
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      color: #000;
    "></textarea>
  <span class="error-message">Ce champ est requis</span>
  <br><br>
  
  <!-- Honeypot -->
  <div style="display: none;">
    <label for="website"></label>
    <input type="text" name="website" id="website" tabindex="-1" autocomplete="off">
  </div>

  <!-- Redirection -->
  <input type="hidden" name="_next" value="/confirmation-contact/">

  <!-- Envoie -->
  <button type="submit"
    style="
      background-color: #DC3522;
      color: white;
      border: none;
      border-radius: 6px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      transition: background-color 0.3s ease;
    "
    onmouseover="this.style.backgroundColor='#b72a1c'"
    onmouseout="this.style.backgroundColor='#dc3522'">
    Envoyer
  </button>
</form>
</div>

<!-- JavaScript -->
<script>
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const requiredFields = form.querySelectorAll('input[required], textarea[required]');

    requiredFields.forEach(function (field) {
      field.addEventListener('input', function () {
        let errorSpan = field.nextElementSibling;
        while (errorSpan && !errorSpan.classList.contains('error-message')) {
          errorSpan = errorSpan.nextElementSibling;
        }
        if (field.value.trim()) {
          field.classList.remove('invalid');
          if (errorSpan) {
            errorSpan.style.display = 'none';
          }
        }
      });
    });

    const honeypot = form.querySelector('input[name="website"]');
    if (honeypot && honeypot.value.trim() !== '') {
      e.preventDefault();
      return;
    }
    
    form.addEventListener('submit', function (e) {
      let hasErrors = false;

      requiredFields.forEach(function (field) {
        let errorSpan = field.nextElementSibling;
        while (errorSpan && !errorSpan.classList.contains('error-message')) {
          errorSpan = errorSpan.nextElementSibling;
        }

        if (!field.value.trim()) {
          field.classList.add('invalid');
          if (errorSpan && errorSpan.classList.contains('error-message')) {
            errorSpan.style.display = 'block';
          }
          hasErrors = true;
        } else {
          console.log(`${field.name} OK`); //dbg
          field.classList.remove('invalid');
          if (errorSpan && errorSpan.classList.contains('error-message')) {
            errorSpan.style.display = 'none';
          }
        }
      });

      if (hasErrors) {
        e.preventDefault();
      }
    });
  });
</script>