---
published: true

layout: page
title: "Intégration d’Okta à AWS : fédération d’identité, provisioning et MFA"
description: Dans ce projet, j’ai intégré Okta à AWS afin de centraliser la gestion des identités et des accès, en appliquant l'authentification unique via la fédération des identités, l'automatisation du provisioning des comptes utilisateurs, et la mise en place du MFA pour les accès aux consoles d'AWS et d'Okta.
img: assets/img/projects/personnels/aws_okta/1_projet_aws_okta_illustration.png
importance: 1
category: personnels
permalink: /projets/personnels/aws_okta/
# toc:
#   sidebar: left
images:
    slider: true
---

## Aperçu

<swiper-container keyboard="true" navigation="false" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true" autoplay='{"delay":5000,"disableOnInteraction":false}' speed="1000">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/personnels/aws_okta/4_mfa_aws.png" class="img-fluid rounded z-depth-1" zoomable=true %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/personnels/aws_okta/5_okta_dashboard.png" class="img-fluid rounded z-depth-1" zoomable=true %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/personnels/aws_okta/6_okta_people.png" class="img-fluid rounded z-depth-1" zoomable=true %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/personnels/aws_okta/7_okta_groups.png" class="img-fluid rounded z-depth-1" zoomable=true %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/personnels/aws_okta/8_okta_aws_people_assign.png" class="img-fluid rounded z-depth-1" zoomable=true %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/personnels/aws_okta/9_okta_aws_groups_assign.png" class="img-fluid rounded z-depth-1" zoomable=true %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/personnels/aws_okta/10_okta_user_console.png" class="img-fluid rounded z-depth-1" zoomable=true %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/personnels/aws_okta/11_mfa_okta.png" class="img-fluid rounded z-depth-1" zoomable=true %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/personnels/aws_okta/12_sso_aws.png" class="img-fluid rounded z-depth-1" zoomable=true %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/personnels/aws_okta/13_nat_config.png" class="img-fluid rounded z-depth-1" zoomable=true %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/personnels/aws_okta/14_mysql_access.png" class="img-fluid rounded z-depth-1" zoomable=true %}</swiper-slide>
</swiper-container>

<br>

## Contexte

Souhaitant approfondir le domaine de la gestion des identités et des accès (IAM), j’ai décidé de me lancer dans un projet personnel aligné avec les enjeux actuels en cybersécurité.

Je voulais un projet ambitieux et pertinent, en définissant des objectifs clairs et réalistes.

<br>

### Objectifs

Afin de structurer efficacement mon projet, j’ai défini mes oblectifs par paliers :

**1.** Déploiement de l’infrastructure cloud via Terraform en respectant les principes de sécurité du cloud.

**2.** Mise en place d’une gestion des identités et des accès, en applicant le principe du moindre privilège.

**3.** Mise en place de l'authentification multifacteur (MFA) avec TOTP via l'application Okta Verify.

**4.** Intégration d’Okta comme fournisseur d’identité avec le fournisseur cloud AWS via SAML 2.0 pour effectuer la fédération d'identité et mettre en place l'authentification unique ou Single Sign-On (SSO).

**5.** Mise en place du provisioning automatisé des comptes AWS depuis Okta via le protocole SCIM.

<br>

## Organigrammes

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/personnels/aws_okta/2_projet_aws_okta_infra.png" title="schema_infrastructure_projet_aws_okta" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Schéma de l'infrastructure cloud AWS.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/personnels/aws_okta/3_projet_aws_okta_iam.png" title="schema_architecture_iam_projet_aws_okta" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Schéma fonctionnel de la gestion des identiés et des accès et de l'intégration d’Okta à AWS.
</div>

<br>

## Technologies et outils utilisés

Voici la liste des technologies et outils que j’ai utilisés pour concevoir et déployer l'infrastructure cloud et mettre en place une architecture sécurisé avec IAM et fédération d'identité :

* **AWS**, avec les services suivant :

    * **VPC** pour configurer le réseau (sous-réseaux, groupes de sécurité, passerelle internet, table de routage, ...).

    * **EC2** pour l'hebergement des instances (instance web, instance privée, bastion, instance NAT).

    * **RDS** pour le stockage des données dans MySQL.

    * **IAM** pour définir les utilisateurs, groupes, rôles et politiques d’accès au ressource AWS.

    * **IAM Identity Center** pour l'intégration du fournisseur d'identité Okta avec AWS.

* **Terraform** pour automatiser le déploiement de l'infrastructure cloud en suivant les principes de l'Infranstructure as Code (IaC).

* **Okta** (Developer / Integrator) pour jouer le rôle du fournisseur d'identité externe auprès d'AWS.

* **Okta Verify** pour générer les codes temporaires nécéssaire à la mise en place de l'authentification multifacteur (MFA).

* **SAML 2.0** pour établir la fédération d'identité entre Okta et AWS et activer l'authentification unique SSO depuis l'espace utilisateur d'Okta vers la console d'AWS.

* **SCIM** pour permettre le provisioning automatisé des utilisateurs et groupes d'Okta vers AWS IAM Identity Center, afin qu’ils puissent accéder aux ressources des comptes AWS avec des rôles attribués.

> Pour utiliser la version d’essai d’Okta, j’ai configuré une adresse e-mail professionnelle via Zoho Mail, en liant mon nom de domaine depuis un hébergeur.

## Fonctionnalités mises en place

Dans le cadre de ce projet, plusieurs fonctionnalités ont été mises en place, en s’appuyant sur les bonnes pratiques de sécurité cloud et de gestion des identités (IAM) :

* **Segmentation réseau** en deux sous-réseaux privé et publique.

* **Isolation réseau** avec configuration de groupes de sécurité et ajout d'un bastion pour l'accès sécurité au service RDS (MySQL).

* **Haute disponibilité** (multi-AZ) et **réplication des données** (réplication synchrone) du service RDS.

* Principes de **moindre privilège** avec des politiques IAM personnalisés et granulaires en fonction des rôles (**RBAC**).

* **Infrastructure as Code (IaC)** via Terraform pour pour un déploiement automatisé, reproductible et scalable.

* **Fédération d’identité** entre Okta et AWS via SAML 2.0 permettant une **authentification unique (SSO)**.

* **Provisioning automatique** via SCIM pour une gestion centralisé des utilisateurs et des comptes AWS depuis Okta.

* Sécurité renforcée avec **authentifications multifacteurs (MFA)** basé sur des **codes temporaires (TOTP)** en utilisant l'application Okta Verify.

<br>

## Ce que j'ai appris

En menant à bien ce projet, j'ai appris à :

* mettre en place une infrastructure cloud sécurisée en utilisant l'Infrastructure as Code et en respectant les bonnes pratiques et règles de cybersécurité.

* concevoir et appliquer des politiques d'accès granulaires basées sur les rôles (RBAC) et le principe du moindre privilège.

* intégrer une solution de fournisseur d'identité externe (Okta) auprès d'un fournisseur de service (AWS) pour mettre en place la fédération d'identité et le provisioning automatisé des utilisateurs.

* mettre en place une authentification multifacteur (MFA) basé sur TOTP pour les accès sensibles (accès aux console d'Okta et d'AWS, application du MFA avant le SSO).
