import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Experiences",
  components: {},
  setup: () => {
    const expList = ref([
      {
        name: "Front-End : Projet pour le client SoRewards",
        date: "3 mois",
        place: "Conserto",
        city: "Nantes",
        description:
          "Conception et développement d'une solution en VueJS, destinée à gérer toutes les cartes cadeaux en une seule application web en responsive.",
        tools: ["VueJS", "HTML/CSS"]
      },
      {
        name: "Front-End : Projet 'Soprano' avec le client Arpège",
        date: "7 mois",
        place: "Conserto, Arpège",
        city: "St Sébastion sur Loire",
        description:
          "Aide à la conception du logiciel, disposant des éléments nécessaires à l’organisation des scrutins : depuis la préparation de l’événement jusqu’à l’analyse des résultats et l’animation des soirées électorales. Conception et développement en Angular 6, projet réalisé en vue des élections municipales.",
        tools: ["Angular 6", "HTML/CSS"]
      },
      {
        name: "Front-End : Projet 'Allowa' avec le client final Scaprim",
        date: "5 mois",
        place: "Conserto",
        city: "Nantes",
        description:
          "Réalisation de sites web concernant la vente de biens immobilers : un pour les prospects et leur sélection de biens, ainsi qu'un autre pour les agents et leur gestion des biens et des visites. Etude des maquettes et de leur faisabilité, réalisation de l'architecture pour les deux sites, développement en ReactJS.",
        tools: ["ReactJS", "HTML/CSS"]
      },
      {
        name:
          "Mobile Front-End : Projet 'Labybille' avec le client final Redbull Amérique Latine",
        date: "2 mois",
        place: "Conserto",
        city: "Nantes",
        description:
          "Aide au développement en React Native d'une application mobile permettant la création de freestyle et de battle entre utilisateurs.",
        tools: ["React Native"]
      },
      {
        name: "R&D en Réalité Augmentée : Projet 'Labybille'",
        date: "3 mois",
        place: "Conserto",
        city: "Nantes",
        description:
          "Réalisation d'un jeu mobile en Réalité Augmentée, sur le principe d'une bille parcourant un monde / labyrinthe cubique. Projet servant de goodie pour Conserto.",
        tools: ["Unity", "Vuforia"]
      },
      {
        name: "Front-End : Projet 'Medipep' avec le client final Spin'R",
        date: "4 mois",
        place: "Conserto",
        city: "Nantes",
        description:
          "Développement d'un portail web en ReactJS permettant d'afficher et paramétrer des données en lien avec le robot Peper dans le domaine médical.",
        tools: ["ReactJS", "HTML/CSS"]
      },
      {
        name: "Infographiste 3D",
        date: "Stages et Vacances scolaires Janvier 2014/Mai 2015",
        place: "Virtualys",
        city: "Brest",
        description:
          "Travail consistant à modéliser des bâtiments ou structures artistiques de la ville de Brest sous 3DsMax, à les texturer sur GIMP, pour réaliser des plateformes urbaines.",
        tools: ["3DSMax", "GIMP"]
      },
    ]);

    return { expList };
  },
});
