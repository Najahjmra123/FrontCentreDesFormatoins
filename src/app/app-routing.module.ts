import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {FooterComponent} from "./footer/footer.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {FormateursComponent} from "./formateurs/formateurs.component";
import {CondidatesComponent} from "./candidates/condidates.component";
import {AdminComponent} from "./admin/admin.component";

const routes: Routes = [

  {path:'',redirectTo:'login',pathMatch:'full'},
  { path: 'login', component:ConnexionComponent },
  {path:'home',component:HomeComponent},
  { path: 'navbar', component:NavbarComponent },
  { path: 'footer', component:FooterComponent },
  { path: 'formateurs', component:FormateursComponent },
  { path: 'candidates', component:CondidatesComponent },
  { path: 'admin', component:AdminComponent },
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
