import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { PackageComponent } from './package/package.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {path: '', component:MainComponent},
  {path: 'package', component:PackageComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent}
  // {path: 'page', component:PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
