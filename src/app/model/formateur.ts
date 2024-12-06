import {CentreFormationModel} from "./centre-formation-model";
import {SessionModel} from "./session-model";
import {Formation} from "./formation";
import {Superadmin} from "./superadmin";

export class Formateur {
  id: number;
  nomFormateur: string;
  domaineCompetence: string; // Domaine de compétence du formateur
  email: string;
  centreFormation: CentreFormationModel | null; // Référence au centre de formation
  disponibilite: string; // Jours de disponibilité
  session: SessionModel | null; // Relation Many-to-One avec une session
  formations: Formation[]; // Liste de formations associées (Many-to-Many)
  superAdmin: Superadmin | null; // Référence au SuperAdmin qui gère la session
  actif: boolean; // Statut actif ou inactif du formateur

}
