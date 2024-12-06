import {SessionModel} from "./session-model";
import {Admin} from "./admin";
import {Erole} from "../enums/erole.enum";
import {Superadmin} from "./superadmin";

export class CentreFormationModel {
  id: number;
  nom: string;
  email: string;
  motDePasse: string;
  session: SessionModel | null; // Relation One-to-One avec une session
  superAdmin: Superadmin | null; // Relation One-to-One avec un SuperAdmin
  role: Erole; // Enum pour le rôle
  admin: Admin | null; // Relation Many-to-One avec un administrateur personnalisé
  permissions: Permission[]; // Liste des permissions
}
