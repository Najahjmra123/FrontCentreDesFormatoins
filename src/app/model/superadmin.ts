import {User} from "./user";
import {SessionModel} from "./session-model";

export class Superadmin extends User{
  diplome: string; // Correspond à la propriété `Diplome` en Java
  session: SessionModel; // Relation One-to-One avec une session

}
