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
          description: "Résumé : Sécurisation et simplification de la gestion des accès et des identités au sein d&#39;un environnement cloud, intégrant un fournisseur d’identité pour assurer l’authentification unique, le provisionnement des utilisateurs, et appliquant des mesures de sécurité telles que l&#39;authentification multifacteur, des contrôles d&#39;accès basés sur les rôles (RBAC).",
          section: "Projects",handler: () => {
              window.location.href = "/projets/personnels/aws_okta/";
            },},{id: "projects-supervision-centralisée-des-logs-avec-prometheus-et-grafana",
          title: 'Supervision centralisée des logs avec Prometheus et Grafana',
          description: "Résumé : Centralisation des logs provenant de divers outils de sécurité (EDR, XDR, NGFW) via un pipeline Python qui convertit ces logs en métriques stockables dans Prometheus, permettant leur visualisation sur des tableaux de bord dynamiques dans Grafana et facilitant ainsi la supervision.",
          section: "Projects",handler: () => {
              window.location.href = "/projets/professionnels/prometheus_grafana/";
            },},{id: "projects-implémentation-et-attaque-temporelle-sur-rsa",
          title: 'Implémentation et attaque temporelle sur RSA',
          description: "Résumé : Implémentation complète de l&#39;algorithme de chiffrement RSA, puis réalisation une attaque par canal auxiliaire (attaque temporelle) pour compromettre le crytosystème et retrouver la clé secrète.",
          section: "Projects",handler: () => {
              window.location.href = "/projets/academiques/rsa_side_channel_attack/";
            },},];
