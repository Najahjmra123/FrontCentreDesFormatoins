import {Erole} from "../enums/erole.enum";
import {CentreFormationModel} from "./centre-formation-model";


export class User {
  id: number;
  fullname: string;
  email: string;
  password: string;
  role: Erole;
  centresFormation: CentreFormationModel[];
}
