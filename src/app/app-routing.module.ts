import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { DukeprojComponent } from './dukeproj/dukeproj.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path:"",redirectTo:"dukeproject" ,pathMatch:"full"
  },
  {
    path:"search",component:SearchComponent
  },
  {
    path:"all-users",component:AllUsersComponent
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"dukeproject",component:DukeprojComponent
  },
  {
    path:"**",component:DukeprojComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
