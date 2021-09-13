import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwowayComponent } from "./twoway/twoway.component";
import { RoutingComponent } from "./routing/routing.component";
import { provideRoutes } from "@angular/router";

const routes: Routes = [
  {
    path: 'routing',
    component: RoutingComponent
  },
  {
    path: 'twoway',
    component: TwowayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  // provideRouter();
}
