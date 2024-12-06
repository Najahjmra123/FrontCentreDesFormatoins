export class SessionModel {
  id: number;
  fullname: string;
  nomSession: string; // Nom unique de la session
  superAdmin: superadmin | null; // Relation One-to-One avec SuperAdmin
  candidats: CandidatModel[]; // Liste de candidats associés à la session
  formateurs: FormateurModel[]; // Liste de formateurs associés à la session
  formations: FormationModel[]; // Liste de formations associées à la session
}
