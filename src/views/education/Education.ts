import { Component, Vue } from "vue-property-decorator";

@Component
export default class Education extends Vue {
  educList = [
    {
      name: "Diplôme d'Ingénieur Généraliste",
      date: "2012 / 2018",
      place: "Ecole Nationale d'Ingénieurs de Brest",
      city: "Brest",
      description:
        "Formation généraliste sur 5 années d'études dans les domaines de l'informatique, de l'électronique et de la mécatronique, avec spécialisation dans l'informatique (IA, Web et RV) la dernière année.",
    },
    {
      name: "Alternance : Ingénieur Recherche et Développement",
      date: "Février 2017 / Février 2018",
      place: "IRT B<>com",
      city: "Brest",
      description:
        "Développement d'outils d'enregistrement dans le domaine de la Réalité Virtuelle, sous le moteur de jeu Unity en C#, pour mesurer l'expérience utilisateur.",
    },
    {
      name: "Stage : Développeur Front-End",
      date: "Septembre 2016 / Janvier 2017",
      place: "ForCity Platform",
      city: "Rennes",
      description:
        "Développement des outils de visualisation web en AngularJS, pour aider à mieux comprendre et rendre agréable l'utilisation des données urbaines.",
    },
    {
      name: "Baccalauréat Scientifique",
      date: "2009 / 2012",
      place: "Lycée de l'Harteloire",
      city: "Brest",
      description:
        "Scientifique Sciences et Vie de la Terre, avec spécialisation en Mathématiques",
    },
  ];
}
