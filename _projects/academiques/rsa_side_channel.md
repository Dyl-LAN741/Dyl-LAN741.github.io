---
published: true

layout: page
title: "Implémentation et attaque temporelle sur RSA"
date: 2026-05-10
description: "<u>Résumé</u> : Implémentation complète de l'algorithme de chiffrement RSA, puis réalisation une attaque par canal auxiliaire (attaque temporelle) pour compromettre le crytosystème et retrouver la clé secrète."
img: assets/img/projects/academiques/timing_attack/1_rsa_timing_attack_illustration.png
importance: 2
category: académiques
tags: [Cryptographie, Cryptanalyse, RSA, C]
permalink: /projets/academiques/rsa_side_channel_attack/
# toc:
#   sidebar: left
images:
    slider: true
---

## Aperçu

<swiper-container keyboard="true" navigation="false" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true" autoplay='{"delay":5000,"disableOnInteraction":false}' speed="1000">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/academiques/timing_attack/3_rsa_timing_attack_square_multiply_make.png" class="img-fluid rounded z-depth-1" zoomable=true %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/academiques/timing_attack/4_rsa_timing_attack_square_multiply_make_clean.png" class="img-fluid rounded z-depth-1" zoomable=true %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/academiques/timing_attack/5_rsa_timing_attack_montgomery_make_failed.png" class="img-fluid rounded z-depth-1" zoomable=true %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/academiques/timing_attack/6_rsa_timing_attack_montgomery_results_failed.png" class="img-fluid rounded z-depth-1" zoomable=true %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/academiques/timing_attack/7_rsa_timing_attack_montgomery_make_success.png" class="img-fluid rounded z-depth-1" zoomable=true %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/academiques/timing_attack/8_rsa_timing_attack_montgomery_results_success.png" class="img-fluid rounded z-depth-1" zoomable=true %}</swiper-slide>
</swiper-container>

<br>

## Contexte

La cryptographie asymétrique est omniprésente dans les systèmes informatiques modernes. L'algorithme RSA, qui en fait partie, est notamment utilisé pour sécuriser les communications web via HTTPS. Il permet, par exemple, d’échanger de manière sécurisée les clés utilisées pour chiffrer les données échangées entre un navigateur et un serveur. La sécurité de RSA repose sur la difficulté de factoriser de grands nombres produits de deux nombres premiers.

Bien que cette sécurité soit solide sur le plan théorique, la mise en œuvre pratique de RSA peut introduire des vulnérabilités. Des erreurs dans l’implémentation logicielle ou matérielle peuvent exposer des failles exploitables par un attaquant. C’est notamment le cas des attaques par canaux auxiliaires (side-channel), qui exploitent des fuites d’informations physiques (temps d'exécution, consommation énergétique, rayonnement électromagnétique, ...) pour retrouver la clé secrète.

<br>

### Objectifs

Ce projet s’inscrit dans le cadre d’un travail d’étude et de recherche (TER) ayant pour objectif :

* D'analyser en détail le fonctionnement interne de l’algorithme RSA et d'étudier la cryptanalyse par attaques temporelles.
* De développer une implémentation complète de RSA conforme au standard et bonnes pratiques d'implémentation, puis démontrer comment une attaque temporelle peut permettre de retrouver la clé secrète à partir du temps mesuré lors du déchiffrement.

Ce travail illustre les enjeux de sécurité liés non seulement à la robustesse cryptographique des algorithmes, mais aussi aux risques introduits par leur implémentation dans des systèmes réels.

<br>

## Organigrammes

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/academiques/timing_attack/2_rsa_timing_attack_structure.png" title="schema_structure_rsa_timming_attack" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Schéma du fonctionnement de RSA et de l'attaque par canal auxiliaire.
</div>

<br>

## Technologies et outils utilisés

Voici la liste des technologies et outils que j’ai utilisé pour ce projet :

* Le **Langage C** : un langage bas-niveau et performant, permettant un contrôle précis de la mémoire et du temps d’exécution, nécessaire pour implémenter RSA et réaliser une attaque temporelle. Ce langage dispose également de nombreuses librairies cryptographiques et mathématiques.

* **GNU Multiple Precision (GMP)** : une bibliothèque qui permet la manipulation des grands nombres nécessaires à RSA (module de 1024 à 4096 bits).

* **Open SSL** : une bibliothèque cryptographique très populaire, utilisée dans ce projet pour la fonction de hachage SHA-256, nécéssaire pour implémenter le padding PKCS#1 v1.5.

* **Bibliothèques de mesure et gestion du temps (time.h)** : pour analyser et expérimenter les vulnérabilités liées aux attaques temporelles.

* **Makefile** : un fichier qui permet d'automatiser la compilation, de gérer les dépendances et de simplifier l’exécution des différentes parties du projet.

<br>

## Méthodologie

Pour l’implémentation de RSA j’ai utilisé les méthodes suivantes :

* **Algorithme de Miller-Rabin** : test probabiliste de primalité pour générer les nombres premiers de manière sûre utilisé dans les clés publique et privée.

* **Square and Multiply** : méthode d'exponentiation rapide pour calculer très rapidement m^d modulo n.

* **Réduction de Mongomery** : technique d'optimisation pour l'exponentiation rapide réduisant considérablement le temps de calcul (2 à 4 fois plus rapide).

* **Padding PKCS#1 v1.5** : padding de chiffrement pour randomiser les messages chiffrés et éviter certaines attaques cryptographiques.

---

L'attaque temporelle est implémentée de la manière suivante :

1. Génération des clés et chiffrement de messages aléatoires.

2. Déchiffrement des chiffrés et mesure du temps de déchiffrement pour chaque entrées.

3. Analyse statistique des temps calculés pour identifier des patterns.

4. Déduction des bits et reconstitution de la clé privée via l’attaque temporelle.

5. Vérification de la clé privée reconstituée en déchiffrant le chiffré associé à un message clair.

<br>

## Résultats

* **Implémentation standard de RSA avec padding** en suivant la norme d'implémentation PKCS#1 v1.5. Les modules implémentés sont 1024, 2048, 3072 et 4096.

* **Mise en évidence d’une corrélation** entre les multiplications conditionnelles sur certains bits de la clé privée et le temps d’exécution.

* **Attaque temporelle réussie lors du déchiffrement** sur toutes tailles de clés dans les limites identifiées (plus la clé est longue plus il est nécéssaire de reduire le bruit dans les mesures en utilisant plus de message).

<br>

## Code source

Le code complet est disponible sur le dépôt GitHub suivant :

<a href="https://github.com/Dyl-LAN741/timing_attack_rsa">https://github.com/Dyl-LAN741/timing_attack_rsa</a>

