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
        },{id: "projects-intégration-d-39-okta-à-aws-fédération-provisioning-et-mfa",
          title: 'Intégration d&amp;#39;Okta à AWS : fédération, provisioning et MFA',
          description: "J’ai sécurisé et simplifié la gestion des accès en intégrant un fournisseur d’identité (IdP) à AWS, centralisant ainsi l’authentification via SSO, le provisioning des utilisateurs (SCIM) et le MFA pour les consoles Okta et AWS.",
          section: "Projects",handler: () => {
              window.location.href = "/projets/personnels/aws_okta/";
            },},{id: "projects-supervision-centralisée-des-logs-avec-prometheus-et-grafana",
          title: 'Supervision centralisée des logs avec Prometheus et Grafana',
          description: "J’ai centralisé la supervision des logs en développant un pipeline Python qui convertit les logs et alertes de divers outils de sécurité en métriques exposées sur Prometheus, permettant la création de dashboards dynamiques avec Grafana.",
          section: "Projects",handler: () => {
              window.location.href = "/projets/professionnels/prometheus_grafana/";
            },},];
