---
published: true

layout: page
title: "Supervision centralisée des logs avec Prometheus et Grafana"
date: 2025-07-04
description: J’ai centralisé la supervision des logs en développant un pipeline Python qui convertit les logs et alertes de divers outils de sécurité en métriques exposées sur Prometheus, permettant la création de dashboards dynamiques avec Grafana.
img: assets/img/projects/professionnels/prometheus_grafana/1_prometheus_grafana_illustration.png
importance: 2
category: professionnels
tags: [SOC, SIEM, Python, Prometheus, Grafana]
permalink: /projets/professionnels/prometheus_grafana/
# toc:
#   sidebar: left
images:
    slider: true
---

## Aperçu

<swiper-container keyboard="true" navigation="false" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true" autoplay='{"delay":5000,"disableOnInteraction":false}' speed="1000">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/professionnels/prometheus_grafana/3_dashboard_forcepoint.png" class="img-fluid rounded z-depth-1" zoomable=true %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/professionnels/prometheus_grafana/4_dashboard_vision_one.png" class="img-fluid rounded z-depth-1" zoomable=true %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/professionnels/prometheus_grafana/5_dashboard_apex_central.png" class="img-fluid rounded z-depth-1" zoomable=true %}</swiper-slide>
</swiper-container>

<br>

## Contexte

Lors de mon stage au sein du rectorat de l’Académie de Versailles, j’ai travaillé sur un projet répondant à un besoin concret des équipes de sécurité.

La supervision devenait en effet de plus en plus complexe à gérer, en raison de la multiplicité des outils de sécurité (firewalls, EDR, XDR) déployés dans le système d’information (SI).

L’objectif principal était de faciliter le travail des analystes en centralisant la collecte, le traitement et la visualisation des logs et alertes issus de ces différents outils, via une plateforme de supervision unifiée.

<br>

### Objectifs

Les objectifs qui ont été définis sont les suivants :

**1.** Centraliser la collecte des logs et alertes provenant de multiples outils de sécurité (firewalls, EDR, XDR).

**2.** Mettre en place un pipeline de traitement des données pour convertir les logs en métriques exploitables.

**3.** Exposer les métriques sur Prometheus.

**4.** Concevoir et déployer des dashboards dynamiques et personnalisables pour la visualisation des alertes depuis Grafana.

**5.** Documenter la conception et les procédures de déploiement pour faciliter la maintenance de la plateforme.

<br>

## Organigrammes

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/professionnels/prometheus_grafana/2_prometheus_grafana.png" title="schema_infrastructure_projet_aws_okta" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Schéma fonctionnel du pipeline de la plateforme de supervision.
</div>

<br>

## Technologies et outils utilisés

Voici la liste des technologies et outils que j’ai utilisés pour concevoir et mettre en place la plateforme de supervision :

* **Python** pour collecter et transformer les logs et les alertes provenant des différents outils de cybersécurité en métriques.

* **Docker** pour conteneuriser les différents composants de la plateforme (Prometheus, Grafana), afin d’assurer une intégration plus simple et sécurisée.

* **Prometheus** pour récupérer et stocker les métriques exposées sur le web dans une base de données de séries temporelles.

* **Grafana** pour mettre en forme les métriques stockées dans Prometheus et les visualiser sous forme de tableaux de bord dynamiques.

* **YAML** pour configurer Prometheus et les API des outils de sécurité.

* **JSON** pour importer la configuration de la plateforme de supervision en environnement de production.

* **Exporters** pour exposer les métriques issues des logs sur le web, afin que Prometheus puisse les collecter.

<br>

## Résultats

Un total de trois tableaux de bord ont été réalisés et mis en place pour superviser trois outils de sécurité :

* le firewall externe **Forcepoint**.

* l'XDR **Trend Micro Vision One**.

* l'EDR **Trend Micro Apex Central**.

Les dashboards sont exportables dans l'environnement de production sur Grafana via un fichier de configuration JSON. Les configurations de Prometheus et Grafana sont enregistrés au sein d'une image Docker.

<br>

## Ce que j'ai appris

En menant à bien ce projet, j’ai appris à :

* interagir avec les API des différents outils de sécurité (EDR, XDR, firewall) pour récupérer des logs et alertes critiques.

* développer des exporters pour exposer des métriques en vue de leur intégration dans Prometheus.

* configurer et utiliser Prometheus pour la collecte de métriques issues des logs.

* importer ces métriques et concevoir des tableaux de bord de supervision dans Grafana.

* importer des metrics et concevoir des tableaux de bord de supervision sur Grafana.
