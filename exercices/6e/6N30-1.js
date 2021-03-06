import { calcul, choice, html_consigne, Latex_reperage_sur_un_axe, lettre_depuis_chiffre, pgcd, SVG_reperage_sur_un_axe, tex_fraction, tex_fraction_reduite } from '../../modules/outils.js';
import Exercice from '../ClasseExercice.js';
import { combinaison_listes, liste_de_question_to_contenu, randint } from '/modules/outils.js';


/**
 * Exercice calqué sur lire abscisse fractionnaire sauf que le résultat attendu est en écriture décimale.
 * demis, quart, cinquièmes dixièmes et centièmes
 * @Auteur Jean-Claude Lhote
 * Référence 6N30-1
 */
export default function Lire_abscisse_decimale_bis() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Lire l'abscisse décimale d'un point repéré par une fraction";
  this.consigne = "Lire l\’abscisse de chacun des points suivants et donner le résultat sous la forme d\’un nombre en écriture décimale.";
  this.nb_questions = 3;
  this.nb_questions_modifiable = true;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.spacing = 1;
  this.spacing_corr = 1;
  this.sup = 1;
  this.liste_packages = "tkz-euclide";

  this.nouvelle_version = function (numero_de_l_exercice) {
    // numero_de_l_exercice est 0 pour l'exercice 1
    let type_de_questions;
    this.liste_questions = [];
    this.liste_corrections = [];
    this.contenu = ""; // Liste de questions
    this.contenu_correction = ""; // Liste de questions corrigées
    if (this.sup == 5)
      type_de_questions = combinaison_listes([1, 2, 3], this.nb_questions);

    else
      type_de_questions = combinaison_listes(
        [parseInt(this.sup)],
        this.nb_questions
      );

    this.contenu = html_consigne(this.consigne);
    for (let i = 0,
      abs0,
      l1,
      l2,
      l3,
      x1,
      x2,
      x3,
      x11,
      x22,
      x33,
      pas1,
      pas2,
      id_unique,
      texte,
      texte_corr; i < this.nb_questions; i++) {
      l1 = lettre_depuis_chiffre(i * 3 + 1);
      l2 = lettre_depuis_chiffre(i * 3 + 2);
      l3 = lettre_depuis_chiffre(i * 3 + 3);
      switch (type_de_questions[i]) {
        case 3: // Placer des demis ou des quarts sur un axe
          abs0 = 0;
          pas1 = 1;
          pas2 = choice([2, 4]);
          break;

        case 4: // Placer des cinquièmes 
          abs0 = 0;
          pas1 = 1;
          pas2 = 5;
          break;

        case 1: // Placer des dixièmes
          abs0 = randint(1, 5);
          pas1 = 1;
          pas2 = 10;
          break;
        case 2: // Placer des centièmes
          abs0 = calcul(randint(10, 50) / 10);
          pas1 = 10;
          pas2 = 10;
          break;
      }
      x1 = randint(0, 1);
      x2 = randint(2, 3);
      x3 = randint(4, 5);
      x11 = randint(1, pas2 - 1);
      x22 = randint(1, pas2 - 1);
      x33 = randint(1, pas2 - 1);
      if (sortie_html) {
        id_unique = `${i}_${Date.now()}`;
        this.contenu += `<div id="div_svg${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 200px;  "></div>`;
        SVG_reperage_sur_un_axe(
          `div_svg${numero_de_l_exercice}${id_unique}`,
          abs0,
          6,
          pas1,
          pas2,
          [
            [l1, x1, x11],
            [l2, x2, x22],
            [l3, x3, x33],
          ],
          [
            [calcul(abs0 + 1 / pas1), 1, 0],
            [calcul(abs0 + 2 / pas1), 2, 0],
            [calcul(abs0 + 3 / pas1), 3, 0],
            [calcul(abs0 + 4 / pas1), 4, 0],
            [calcul(abs0 + 5 / pas1), 5, 0],
            [calcul(abs0 + 6 / pas1), 6, 0],
          ],
          false
        );
        this.contenu_correction += `<div id="div_svg_corr${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 200px;  "></div>`;
        SVG_reperage_sur_un_axe(
          `div_svg_corr${numero_de_l_exercice}${id_unique}`,
          abs0,
          6,
          pas1,
          pas2,
          [
            [l1, x1, x11, true],
            [l2, x2, x22, true],
            [l3, x3, x33, true],
          ],
          [
            [calcul(abs0 + 1 / pas1), 1, 0],
            [calcul(abs0 + 2 / pas1), 2, 0],
            [calcul(abs0 + 3 / pas1), 3, 0],
            [calcul(abs0 + 4 / pas1), 4, 0],
            [calcul(abs0 + 5 / pas1), 5, 0],
            [calcul(abs0 + 6 / pas1), 6, 0],
          ],
          false
        );
      } else {
        //sortie Latex
        texte = Latex_reperage_sur_un_axe(
          2,
          abs0,
          pas1,
          pas2,
          [
            [l1, x1, x11],
            [l2, x2, x22],
            [l3, x3, x33],
          ],
          [
            [calcul(abs0, 0), 0, 0],
            [calcul(abs0 + 1 / pas1, 0), 1, 0],
          ],
          false
        );
        texte_corr = Latex_reperage_sur_un_axe(
          2,
          abs0,
          pas1,
          pas2,
          [
            [l1, x1, x11, true],
            [l2, x2, x22, true],
            [l3, x3, x33, true],
          ],
          [
            [calcul(abs0, 0), 0, 0],
            [calcul(abs0 + 1 / pas1, 0), 1, 0],
          ],
          false
        );
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
      }
    }
    if (!sortie_html)
      liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = [
    "Niveau de difficulté",
    5,
    "1 : Dixièmes\n2 : Centièmes\n3 : Demis et quarts\n4 : Cinquièmes\n5 : Mélange",
  ];
}
