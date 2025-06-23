// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-dylan-haral",
    title: "Dylan Haral",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "Mon CV numérique est consultable ci-dessous, avec des informations et liens supplémentaires. Pour le télécharger au format PDF, cliquez sur l’icône PDF juste en haut à droite de cette page.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projets",
          title: "Projets",
          description: "Quelques projets que j&#39;ai mené.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projets/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "projects-intégration-d-okta-à-aws-fédération-d-identité-provisioning-et-mfa",
          title: 'Intégration d’Okta à AWS : fédération d’identité, provisioning et MFA',
          description: "Dans ce projet, j’ai intégré Okta à AWS afin de centraliser la gestion des identités via la fédération des identités, d&#39;automatiser le provisioning des comptes utilisateurs, et de mettre en place un MFA pour les accès aux consoles de gestion d&#39;AWS et d&#39;Okta.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/personnels/aws_okta/";
            },},];
