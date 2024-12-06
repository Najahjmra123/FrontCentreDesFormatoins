import {SessionModel} from "./session-model";
import {Formation} from "../candidates/condidates.component";
import {Superadmin} from "./superadmin";
import {CentreFormationModel} from "./centre-formation-model";

export class Candidtates {
  id!: number; // Utilisation de ! pour indiquer qu'il sera initialisé plus tard
  nomCandidat!: string;
  session!: SessionModel;

  // Relation avec FormationModel
 formation!: Formation;

  // Lier au SuperAdmin
   superAdmin!: Superadmin;

  // Lier au CentreFormationModel
   centreFormation!: CentreFormationModel;

  // Statut d'inscription
//  statutInscription!: StatutInscription;


  dateInscription!: string;

  // Indiquer si en ligne ou présentiel
  enLigne!: boolean;

  // URL de la formation en ligne
  urlFormation?: string; // Optionnel si applicable uniquement pour en ligne

  // Indicateur de présence
  present!: boolean;
}
