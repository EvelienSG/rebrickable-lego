import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'details/:name', component: DetailsComponent},
  { path: '**', component: OverviewComponent },
  { path: '', component: OverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
