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
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/_pages/cv/";
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
        },{id: "projects-intégration-d-39-okta-à-aws-fédération-provisioning-et-mfa",
          title: 'Intégration d&amp;#39;Okta à AWS : fédération, provisioning et MFA',
          description: "J’ai sécurisé et simplifié la gestion des accès et des identités au sein d&#39;un environnement cloud, en y intégrant un fournisseur d’identité pour assurer l’authentification unique, le provisionnement des utilisateurs, tout en appliquant des mesures de sécurité telles que l&#39;authentification multifacteur et des contrôles d&#39;accès basés sur les rôles.",
          section: "Projects",handler: () => {
              window.location.href = "/projets/personnels/aws_okta/";
            },},{id: "projects-supervision-centralisée-des-logs-avec-prometheus-et-grafana",
          title: 'Supervision centralisée des logs avec Prometheus et Grafana',
          description: "J’ai centralisé la supervision des logs provenant de divers outils de sécurité sur une plateforme, en développant un pipeline Python qui convertit ces alertes en métriques stockables dans Prometheus, permettant la création de tableaux de bord dynamiques avec Grafana.",
          section: "Projects",handler: () => {
              window.location.href = "/projets/professionnels/prometheus_grafana/";
            },},];
