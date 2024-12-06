import {CentreFormationModel} from "./centre-formation-model";

export class Admin {
  spcialite!: string; // Note : "spcialite" semble être une faute, envisager de corriger en "specialite" côté Java aussi.
   centreFormation!: CentreFormationModel; // Relation avec le CentreFormationModel
  gestionnaire!: Admin;
}
