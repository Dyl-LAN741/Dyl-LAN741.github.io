// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-dylan-haral",
    title: "Dylan HARAL",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-mon-cv",
          title: "Mon CV",
          description: "Mon CV numérique est consultable ci-dessous, avec des informations et liens supplémentaires. Pour le télécharger au format PDF, cliquez sur l’icône PDF juste en haut à droite de cette page.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-mes-projets",
          title: "Mes projets",
          description: "Voici quelques projets que j&#39;ai réalisé :",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projets/";
          },
        },{id: "nav-me-contacter",
          title: "Me contacter",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "projects-intégration-d-okta-à-aws-fédération-d-identité-provisioning-et-mfa",
          title: 'Intégration d’Okta à AWS : fédération d’identité, provisioning et MFA',
          description: "Dans ce projet, j’ai sécurité et simplifier la gestion des accès tout en d&#39;améliorant l&#39;expérience des utilisateurs en intégrant un fournisseur d&#39;identité (IdP) à AWS afin de centraliser la gestion des identités et des accès, en appliquant l&#39;authentification unique (SSO) via la fédération des identités, le provisioning des utilisateurs (SCIM), et la mise en place du MFA pour sécuriser les accès aux consoles d&#39;Okta et AWS.",
          section: "Projects",handler: () => {
              window.location.href = "/projets/personnels/aws_okta/";
            },},{id: "projects-supervision-centralisée-des-logs-et-alertes-avec-prometheus-et-grafana",
          title: 'Supervision centralisée des logs et alertes avec Prometheus et Grafana',
          description: "Dans ce projet, j’ai centralisé la supervision des logs sur une plateforme unique en développant un pipeline en Python pour convertir des logs et alertes provenant de différents outils de sécurité (firewall, EDR, XDR) en métriques, pour les exposer sur Prometheus afin de générer des dashboards dynamiques depuis Grafana.",
          section: "Projects",handler: () => {
              window.location.href = "/projets/professionnels/prometheus_grafana/";
            },},];
